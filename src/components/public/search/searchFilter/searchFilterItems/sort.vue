<template>
    <div class="sort">
      <ul>
        <li :class="{'select':i.value == choseSortIndex}" v-for="i in soltItems" @click="choseSort(i)">
          {{i.label}}
          <i class="iconfont icon-right-1"></i>
        </li>
      </ul>
    </div>
</template>

<script>
    export default {
      name: "sort",
      props:{
        soltItems:{
          type:Object,
        }
      },
      data() {
        return {
          choseSortResult:'',
          choseSortIndex:0,
        }
      },
      methods:{
        show() {
          $('.sort').css('display','block');
        },
        hide() {
          $('.sort').css('display','none');
        },
        choseSort(i) {
          this.choseSortResult = i.url.split('/')[1];
          this.choseSortIndex = i.value;
          this.$emit('choseSortOver',this.choseSortResult);
        }
      },
      mounted() {
        this.$on('show',this.show);
        this.$on('hide',this.hide)
      }
    }
</script>

<style scoped lang="scss">
  .sort{
    width: 100%;
    height: auto;
    background: #fff;
    position: relative;
    z-index: 10;
    >ul{
      width: 100%;
      height: 100%;
      >li{
        height: 20%;
        box-sizing: border-box;
        border-top: 1px solid #f3f3f3;
        width: 100%;
        text-align: center;
        font-size: 0.12rem;
        line-height: 0.42rem;
        position: relative;
        >i{
          position: absolute;
          top: 0;
          bottom: 0;
          margin: auto 0;
          right: 0.4rem;
          font-size: 0.20rem;
          display: none;
        }
      }
      >.select{
        color: #fb2c22;
        i{
          display: inline;
        }
      }
    }
  }
</style>
