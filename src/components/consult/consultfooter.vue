<template>
      <footer>
        <input type="text" placeholder="请输入消息" @keydown="submit($event)"/>
        <i class="iconfont icon-xin"></i>
        <i class="iconfont icon-jiahao"></i>
      </footer>
</template>

<script>
    export default {
        name: "consultfooter",
        methods:{
          submit(ev){
            // 通过回车键发数据
            var o = ev.target;
            if(ev.keyCode===13){
              var date = new Date();
              // console.log(date);
              var hours = date.getHours();
              var minutes = date.getMinutes();
              var time = hours + ':' + minutes;
              var data = {time:time,con:o.value};
              // 发送数据到
              this.$emit('pushMsg',data);
              // console.log(data);
              o.value = '';
            }
          }
        }
    }
</script>

<style scoped lang="scss">
footer{
  width:100%;
  height:0.46rem;
  background: #fff;
  display: -webkit-flex;
  justify-content: space-around;
  align-items: center;
  i{
    display: block;
    font-size: 35px;
    color:#878c91;
    line-height:0.46rem;
  }
  input{
    width: 2.81rem;
    height: 0.34rem;
    border: 1px solid #ccd0d5;
    border-radius: 13px;
    text-indent: 0.11rem;
    outline: none;
  }
}
</style>
