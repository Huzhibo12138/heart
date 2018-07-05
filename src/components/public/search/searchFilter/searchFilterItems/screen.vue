<template>
  <div class="screen">
    <div class="con">
      <div class="chosekind">
        <h3>选择类型</h3>
        <button :class="{'chose':choseKindResult.indexOf(i.value) !== -1}" @click="choseKind(i)" v-for="i in states">{{i.label | filterStates}}<i class="iconfont icon-right-1"></i></button>
      </div>
      <div class="choseQuality">
        <h3>选择成色</h3>
        <button :class="{'chose':choseQualityResult.indexOf(i.value) !== -1}" @click="choseQuality(i)" v-for="i in usagState">{{i.label}}<i class="iconfont icon-right-1"></i></button>
      </div>
      <div class="choseStyle">
        <h3>选择款式</h3>
        <button :class="{'chose':choseSexResult == i.value}" v-for="i in goodsSexes" @click="choseSex(i)">{{i.label}}<i class="iconfont icon-right-1"></i></button>
      </div>
      <div class="chosePrice">
        <h3>价格区间</h3>
        <input v-model="minPrice" type="number" placeholder="最低价" class="min">
        <input v-model="maxPrice" type="number" placeholder="最高价" class="max">
      </div>
    </div>
    <div class="btnBox">
      <button @click="resetChose" class="reset">重置</button>
      <button @click="trueChose" class="true">确定</button>
    </div>
  </div>
</template>

<script>

    export default {
      name: "screen",
      props:{
        usagState:{type:Object},
        states:{type:Object},
        goodsSexes:{type:Object},
      },
      data() {
        return {
          choseKindResult:[],
          choseQualityResult:[],
          choseSexResult:'',
          minPrice:'',
          maxPrice:'',
        }
      },
      methods:{
        trueChose() {
          if(this.minPrice > this.maxPrice) {
            var temp = this.maxPrice;
            this.maxPrice = this.minPrice;
            this.minPrice = temp;
          }
          this.$emit('choseScreenOver',{
            choseKindResult:this.choseKindResult,
            choseQualityResult:this.choseQualityResult,
            choseSexResult:this.choseSexResult,
            minPrice:this.minPrice,
            maxPrice:this.maxPrice,
          });
        },
        resetChose() {
          this.choseKindResult = [];
          this.choseQualityResult = [];
          this.choseSexResult = '';
          this.minPrice = null;
          this.maxPrice = null;
        },
        choseKind(i) {
          var index = this.choseKindResult.indexOf(i.value);
          if(index == -1) {
            this.choseKindResult.push(i.value);
          }else{
            this.choseKindResult.splice(index,1);
          }
        },
        choseQuality(i) {
          var index = this.choseQualityResult.indexOf(i.value);
          if(index == -1) {
            this.choseQualityResult.push(i.value);
          }else{
            this.choseQualityResult.splice(index,1);
          }
        },
        choseSex(i) {
          if(this.choseSexResult == i.value) {
            this.choseSexResult = '';
          }else{
            this.choseSexResult = i.value;
          }
        },
        show() {
          $('.screen').css('display','block');
        },
        hide() {
          $('.screen').css('display','none');
        },
      },
      filters:{
        filterStates(label) {
          if(label.length > 4) {
            label = label.slice(0,4);
          }
          return label;
        }
      },
      mounted() {
        this.$on('show',this.show);
        this.$on('hide',this.hide)
        // 计算高度
        let screenHeight = $(document).height() / 100 + 'rem';
        $('.screen').css('height',screenHeight);
      }
    }
</script>

<style scoped lang="scss">
  .screen{
    width: 3.3rem;
    background:#fff;
    position: fixed;
    right:0;
    top:0;
    z-index: 10;
    .con{
      width: 100%;
      height: 5.3rem;
      >div{
        width: 100%;
        height: auto;
        box-sizing: border-box;
        padding-left: 0.15rem;
        overflow: hidden;
        h3{
          width: 100%;
          font-size: 0.12rem;
          color: #000;
          font-weight: 900;
          padding-top: 0.25rem;
        }
        button{
          float: left;
          height: 0.32rem;
          width: 0.93rem;
          border: 1px solid #bdbdbd;
          font-size: 0.12rem;
          color:#3c3c3c;
          background: #fff;
          border-radius: 0.05rem;
          margin-right: 0.1rem;
          margin-top: 0.13rem;
          outline: none;
          i{
            display: none;
            margin-left: 0.04rem;
          }
        }
        .chose{
          color:#fc655e;
          i{
            display: inline;
          }
        }
      }
      .chosePrice{
        input{
          width: 1.38rem;
          height: 0.32rem;
          border: 1px solid #bdbdbd;
          font-size: 0.12rem;
          color:#3c3c3c;
          background: #fff;
          border-radius: 0.05rem;
          margin-top: 0.13rem;
          text-align: center;
          display: block;
          outline: none;
        }
        .min{
          float: left;
        }
        .max{
          float: right;
          margin-right: 0.15rem;
        }
      }
    }
    .btnBox{
      width: 100%;
      height: 0.48rem;
      border-top: 1px solid #ebecec;
      position: absolute;
      left: 0;
      bottom: 0;
      button{
        width: 50%;
        height: 100%;
        float: left;
        display: block;
        font-size: 0.12rem;
        border: none;
        outline: none;
      }
      .reset{
        background: #fff;
        color:#363636;
      }
      .true{
        background: #fc655e;
        color: #fff;
      }
    }
  }
</style>
