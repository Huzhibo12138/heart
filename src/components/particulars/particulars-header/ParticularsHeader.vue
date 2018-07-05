<template>
    <div class="header">
      <i class="iconfont icon-jiantou-copy-copy"></i>
      <h2>{{data.name}}</h2>
      <h3>...</h3>
    </div>
</template>

<script>
    export default {
        name: "ParticularsHeader",
        data(){
          return{
            commodity:'CHANEL香奈儿',
            data:{}
          }
        },
        created(){
          this.$on('pushheader',(data)=>{
            // console.log(data);
            this.data = data.data;
          })
        }
    }
</script>

<style lang="scss" scoped >
    .header{
      width:100%;
      height:0.45rem;
      background:#fff;
      padding:0 0.10rem;
      box-sizing:border-box;
      display: -webkit-flex;
      justify-content: space-between;
      .iconfont{
        font-size: 0.25rem;
        color:#040504;
        line-height:0.45rem;
      }
      h2{
        font-size: 0.18rem;
        color:#040504;
        line-height: 0.45rem;
        width:2.5rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        padding:0 0.54rem;
        box-sizing: border-box;
      }
      h3{
        font-size: 0.18rem;
        color:#040504;
        margin-top:0.05rem;
      }
    }
</style>
