<template>
  <div class="part">
      <particulars-header ref="header"></particulars-header>
    <div class="section">
      <particular-banner ref="banner"></particular-banner>
      <particular-details ref="details"></particular-details>
    </div>
    <particular-footer ref="footer"></particular-footer>
  </div>

</template>

<script>
  import ParticularsHeader from "../components/particulars/particulars-header/ParticularsHeader";
  import ParticularBanner from "../components/particulars/particular-banner/ParticularBanner";
  import ParticularDetails from "../components/particulars/particulars-details/ParticularDetails";
  import ParticularFooter from "../components/particulars/particular-footer/ParticularFooter";
  import particularApis from '@/apis/tt/getparticular';
    export default {
      name: "particulars",
      data(){
        return{
          information:{},
          id:'',
        }
      },
      //创建实例之后
      created() {
        // 通过apis获取真实数据
        this.id = this.$route.query.id;
        // this.id = '2102719';
        particularApis.getGoodsDetail(this.id,(data) => {
          // console.log(data);
          this.information = data;
         // console.log(this.information.data.ownPic);
         //  传递数据到子页面
          this.$refs.banner.$emit('pushbanner',this.information);
          this.$refs.header.$emit('pushheader',this.information);
          this.$refs.details.$emit('pushdetails',this.information);
          this.$refs.footer.$emit('pushfooter',this.information);


        });
      },
      mounted(){
        var s
      },
      components: {ParticularFooter, ParticularDetails, ParticularBanner, ParticularsHeader}
    }
</script>

<style lang="scss" scoped>
    .part{
      width:100%;
      height:100%;
      display: -webkit-flex;
      flex-direction: column;
    }
    .section{
      overflow-y: scroll;
      -webkit-flex: 1;
      width:100%;
      overflow-x: hidden;
    }
</style>



