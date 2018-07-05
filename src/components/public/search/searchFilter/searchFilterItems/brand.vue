<template>
  <div class="brand">
    <ul>
      <li @click="choseBrand(i)" :class="{'select':i.value == choseBrandIndex}" v-for="i in brandItems">
        {{i.label}}
      </li>
    </ul>
    <p class="btnBox">
      <button class="reset" @click="resetChose">重置</button>
      <button class="true" @click="trueChose">确定</button>
    </p>
  </div>
</template>

<script>
    export default {
      name: "brand",
      props:{
        brandItems:{
          type:Object,
        }
      },
      data() {
        return {
          choseBrandResult:'',
          choseBrandIndex:'',
        }
      },
      methods:{
        resetChose() {
          this.choseBrandResult = '';
          this.choseBrandIndex = '';
        },
        trueChose() {
          this.$emit('choseBrandOver',this.choseBrandResult);
        },
        choseBrand(i) {
          this.choseBrandResult = i.url.split('/')[1];
          this.choseBrandIndex = i.value;
        }
      },
      mounted() {
        this.$on('show',this.show);
        this.$on('hide',this.hide)
      }
    }
</script>

<style scoped lang="scss">
  .brand{
    width: 100%;
    height: 4.04rem;
    background: #fff;
    position: relative;
    z-index: 10;
    ul{
      width: 100%;
      height: 3.52rem;
      overflow-y: scroll;
      li{
        width: 100%;
        height: 0.41rem;
        border-top: 1px solid #f3f3f3;
        font-size: 0.12rem;
        color:#545454;
        text-align: center;
        line-height: 0.41rem;
      }
      .select{
        color:#fd665f;
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
