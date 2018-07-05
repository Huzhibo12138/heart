<template>
  <div class="search">
    <search-header @searchKeyOver="searchKeyOver"></search-header>
    <search-filter @choseFilterOver="choseFilterOver" :filterList="filterList" :queryKeyWord="queryKeyWord"></search-filter>
    <search-con ref="searchCon" @reqMoreData="getMoreGoodsList"></search-con>
  </div>
</template>

<script>
  import searchHeader from './srarchHeader/searchHeader'
  import searchFilter from './searchFilter/searchFilter'
  import searchCon from './searchCon/searchCon'
  import searchApis from '@/apis/search/searchApis'
    export default {
      name: "search",
      data() {
        return {
          filterList:{},    // 保存各种filter的名称与参数间的关系
          queryKeyWord:{    // 查询参数集合
            sort:'',
            brand:'',
            classify:'',
            keyword:'',
            page:1,
            filterKey:{
              kind:[],
              quality:[],
              style:'',
              minPrice:'',
              maxPrice:'',
            },
          }
        }
      },
      // watch:{
      //   queryKeyWord: {
      //     handler(newValue, oldValue) {
      //       this.getNewGoodsList();
      //     },
      //     deep: true
      //   }
      // },
      methods:{
        searchKeyOver(data) {
          this.queryKeyWord.keyword = data;
          this.getNewGoodsList();
        },
        choseFilterOver(data) {
          switch (data.tag) {
            case 'sort':
              this.queryKeyWord.sort = data.data;
              break;
            case 'brand':
              this.queryKeyWord.brand = data.data;
              break;
            case 'calssify':
              console.log(data);
              this.queryKeyWord.classify = data.data;
              break;
            case 'screen':
              console.log(data);
              this.queryKeyWord.filterKey.kind = data.data.choseKindResult;
              this.queryKeyWord.filterKey.quality = data.data.choseQualityResult;
              this.queryKeyWord.filterKey.style = data.data.choseSexResult;
              this.queryKeyWord.filterKey.minPrice = data.data.minPrice;
              this.queryKeyWord.filterKey.maxPrice = data.data.maxPrice;
              break;
          }
          this.queryKeyWord.page  = 1;
          this.getNewGoodsList();
        },
        getNewGoodsList() {
          searchApis.getGoodsList(this.queryKeyWord,(data) => {
            this.$refs.searchCon.$emit('getNewData',data);
          });
        },
        getMoreGoodsList() {
          this.queryKeyWord.page ++;
          searchApis.getGoodsList(this.queryKeyWord,(data) => {
            this.$refs.searchCon.$emit('getMoreData',data);
          });
        }
      },
      beforeCreate() {
        searchApis.getSearchFilterList((data) => {
          this.filterList = data.searchLabels;
        });
      },
      created() {
        this.getNewGoodsList();
      },
      mounted() {
      },
      components:{
        searchHeader,
        searchFilter,
        searchCon
      },
    }
</script>

<style scoped lang="scss">
  .search{
    width: 100%;
    height: 100%;
    display: -webkit-flex;
    flex-direction: column;
    overflow-y: scroll;
    background: #f4f4f4;
  }
</style>
