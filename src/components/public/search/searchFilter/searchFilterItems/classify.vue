<template>
  <div class="classify">
    <div class="con">
      <ul class="conLeft">
        <li v-for="i in tag" @click="choseTag(i)" :class="{'focus':i.value == choseTagResult}">
          {{i.label}}
        </li>
      </ul>
      <ul class="conRight">
        <li :class="{'focus':choseItemsIndex == i.value}" @click="choseItems(i)" v-for="i in tagItems">
          {{i.label}}
        </li>
      </ul>
    </div>
    <div class="btnBox">
      <button @click="resetChose" class="reset">重置</button>
      <button @click="trueChose" class="true">确定</button>
    </div>
  </div>
</template>

<script>
    export default {
      name: "classify",
      props:{
        tag:{type:Object,},
        items:{type:Object,}
      },
      data() {
        return {
          choseTagResult:83,
          choseItemResult:'',
          choseItemsIndex:'',
          tagItems:'',
        }
      },
      methods:{
        trueChose() {
          this.$emit('choseClassifyOver',this.choseItemResult);
        },
        choseTag(i)  {
          this.choseTagResult = i.value;
          this.tagItems = this.items[i.value];
        },
        choseItems(i) {
          this.choseItemsIndex = i.value;
          this.choseItemResult = i.url.split('/')[1];
        },
        resetChose() {
          this.choseTagResult = 83;
          this.choseItemResult = '';
          this.choseItemsIndex = '';
          this.tagItems = this.items[83];
        },
        show() {
          $('.classify').css('display','block');
        },
        hide() {
          $('.classify').css('display','none');
        },
      },
      watch:{
        items(n,o) {
          this.tagItems = this.items[83];
        }
      },
      mounted() {
        this.$on('show',this.show);
        this.$on('hide',this.hide);
      }
    }
</script>

<style scoped lang="scss">
  .classify{
    width: 100%;
    height: 4.04rem;
    background: #fff;
    position: relative;
    z-index: 10;
    .con{
      width: 100%;
      height: 3.52rem;
      box-sizing: border-box;
      border-top: 1px solid #f3f3f3;
      .conLeft{
        height: 100%;
        width: 1.10rem;
        box-sizing: border-box;
        border-right: 1px solid #f3f3f3;
        float: left;
        li{
          width: 100%;
          height: 0.41rem;
          border-bottom: 1px solid #f3f3f3;
          font-size: 0.12rem;
          color:#545454;
          text-align: center;
          line-height: 0.41rem;
        }
        .focus{
          color:#fb483f;
        }
      }
      .conRight{
        height: 100%;
        width: 2.6rem;
        box-sizing: border-box;
        float: left;
        overflow-y: scroll;
        li{
          width: 100%;
          height: 0.41rem;
          border-bottom: 1px solid #f3f3f3;
          font-size: 0.12rem;
          color:#545454;
          text-align: center;
          line-height: 0.41rem;
        }
        .focus{
          color:#fb483f;
        }
      }
    }
    .btnBox{
      width: 100%;
      height: 0.5rem;
      display: flex;
      border-top: 1px solid #f7f7f7;
      display: flex;
      align-items: center;
      justify-content: center;
      button{
        display: block;
        float: left;
        width: 0.94rem;
        height: 0.32rem;
        outline: none;
      }
      .reset{
        border: 1px solid #feb4b1;
        font-size: 0.12rem;
        color: #feb4b1;
        background: #fff;
        margin-right: 0.26rem;
      }
      .true{
        border: 1px solid #fc4e46;
        font-size: 0.12rem;
        color: #fff;
        background: #fd665f;
      }
    }
  }
</style>
