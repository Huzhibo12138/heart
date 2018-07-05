<template>
  <div class="consult">
    <consultheader></consultheader>
    <consultsection ref="con_center"></consultsection>
    <consultfooter @pushMsg="getMsg"></consultfooter>
  </div>
</template>

<script>
    import Consultheader from "../components/consult/consultheader";
    import Consultsection from "../components/consult/consultsection";
    import Consultfooter from "../components/consult/consultfooter";
    export default {
        name: "consult",
        components: {Consultfooter, Consultsection, Consultheader},
         methods:{
           getMsg(data){
             this.$refs.con_center.$emit('push_section',data)
           }
         }
    }
</script>

<style scoped>
.consult{
  width:100%;
  height:100%;
  display:flex;
  flex-direction: column;
  background: #f4f4f4;
}
</style>
