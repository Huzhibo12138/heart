<template>
    <div class="searchFilter">
      <ul>
        <li @click="showSort" :class="{'chose':choseFilterItem == 'sort'}">
          排序
          <i class="iconfont icon-arrow-down down"></i>
          <i class="iconfont icon-arrow-up-line up"></i>
        </li>
        <li @click="showBrand" :class="{'chose':choseFilterItem == 'brand'}">
          品牌
          <i class="iconfont icon-arrow-down down"></i>
          <i class="iconfont icon-arrow-up-line up"></i>
        </li>
        <li @click="showClassify" :class="{'chose':choseFilterItem == 'classify'}">
          分类
          <i class="iconfont icon-arrow-down down"></i>
          <i class="iconfont icon-arrow-up-line up"></i>
        </li>
        <li @click="showScreen" :class="{'chose':choseFilterItem == 'screen'}">
          筛选
          <i class="iconfont icon-arrow-down down"></i>
          <i class="iconfont icon-arrow-up-line up"></i>
        </li>
      </ul>
      <div class="filterShadow"@click="hideShadow" v-show="choseFilterItem != ''"></div>
      <sort ref="sort"  @choseSortOver="choseSortOver"  :soltItems="filterList.sorts" v-show="choseFilterItem == 'sort'"></sort>
      <brand ref="brand" @choseBrandOver="choseBrandOver" :brandItems="filterList.brands" v-show="choseFilterItem == 'brand'"></brand>
      <classify ref="classify" @choseClassifyOver="choseClassifyOver" :tag="filterList.category" :items="filterList.subCategorys" v-show="choseFilterItem == 'classify'"></classify>
      <screen ref="screen" @choseScreenOver="choseScreenOver" :usagState="filterList.usagState" :states="filterList.states" :goodsSexes="filterList.goodsSexes" v-show="choseFilterItem == 'screen'"></screen>
    </div>
</template>

<script>
  import sort from './searchFilterItems/sort'
  import brand from './searchFilterItems/brand'
  import classify from './searchFilterItems/classify'
  import screen from './searchFilterItems/screen'
    export default {
      name: "searchFilter",
      props:{
        queryKeyWord:{   // 筛选参数集合
          type:Object,
        },
        filterList:{   //  过滤列表
          type:Object
        },
      },
      data() {
        return {
          choseFilterItem:'',
        }
      },
      methods:{
        // 显示排序列表
        showSort(ev) {
          if(this.choseFilterItem == 'sort') {
            this.choseFilterItem = '';
          }else{
            this.choseFilterItem = 'sort';
          }
        },
        // 显示品牌列表
        showBrand(ev) {
          if(this.choseFilterItem == 'brand') {
            this.choseFilterItem = '';
          }else{
            this.choseFilterItem = 'brand';
          }
        },
        // 显示种类列表
        showClassify(ev) {
          if(this.choseFilterItem == 'classify') {
            this.choseFilterItem = '';
          }else{
            this.choseFilterItem = 'classify';
          }
        },
        // 显示筛选列表
        showScreen(ev) {
          if(this.choseFilterItem == 'screen') {
            this.choseFilterItem = '';
          }else{
            this.choseFilterItem = 'screen';
          }
        },
        // 向上一层传递数据,供其获取新的数据
        choseFilterOver(tag,data) {
          this.$emit('choseFilterOver',{tag:tag,data:data});
        },
        // 显示遮罩层
        hideShadow() {
          if(this.choseFilterItem == 'classify' || this.choseFilterItem == 'screen') {
            return false;
          }else{
            this.choseFilterItem = '';
          }
        },
        choseSortOver(data) {
          if(!data) {
            data = '';
          }
          this.choseFilterItem = '';
          this.choseFilterOver('sort',data);
        },
        choseBrandOver(data) {
          this.choseFilterItem = '';
          this.choseFilterOver('brand',data);
        },
        choseClassifyOver(data) {
          this.choseFilterItem = '';
          this.choseFilterOver('calssify',data);
        },
        choseScreenOver(data) {
          this.choseFilterItem = '';
          this.choseFilterOver('screen',data);
        }
      },
      mounted() {
        // 计算遮罩层高度
        let screenHeight = $(document).height() / 100 + 'rem';
        $('.filterShadow').css('height',screenHeight);
      },
      components:{
        sort,
        brand,
        classify,
        screen
      }
    }
</script>

<style scoped lang="scss">
  .searchFilter{
    width: 100%;
    height: 0.38rem;
    background: #fff;
    border-top: 1px solid #f5f5f5;
    border-bottom: 1px solid #f5f5f5;

    >ul{
      width: 100%;
      height: 100%;
      display: flex;
      position: relative;
      left: 0;
      top: 0;
      z-index: 10;
      background: #fff;
      >li{
        flex: 1;
        height: 100%;
        font-size: 0.12rem;
        color: #6d6d6d;
        text-align: center;
        line-height: 0.38rem;
        i{
          margin-left: 0.05rem;
        }
        .down{
          display: inline-block;
        }
        .up{
          display: none;
        }
      }
      .chose{
        color:#fc655e;
        .down{
          display: none;
        }
        .up{
          display: inline-block;
        }
      }
    }
    .filterShadow{
      width: 100%;
      position: fixed;
      left: 0;
      top: 0;
      height: 3rem;
      background: rgba(0,0,0,0.5);
      /*z-index: 1;*/
    }
  }
</style>
