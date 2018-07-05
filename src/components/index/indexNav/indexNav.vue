<template>
  <div class="bbox">
    <ul class="list">
      <li class="btn">
        <router-link :to="{path:'/'}">
          推荐
        </router-link>
      </li>
      <li>
        <router-link :to="{path:'/bags'}">
          箱包
        </router-link>
      </li>
      <li>
        <router-link :to="{path:'/watch'}">
          手表
        </router-link>
      </li>
      <li>
        <router-link :to="{path:'/clothing'}">
          服装
        </router-link>
      </li>
      <li>
        <router-link :to="{path:'/acces'}">
          配饰
        </router-link>

      </li>
      <li>
        <router-link :to="{path:'/jewelry'}">
          首饰
        </router-link>
      </li>
      <li>鞋靴</li>
      <li>配件</li>
      <li>服装</li>
    </ul>
    <div class="boxSection">
      <router-view></router-view>
      <!--选项卡不可取 ，因为开始是隐藏的，轮播图盒子高是0，display:block之后轮播图的盒子的高还是0；-->
      <!--<div class="bs"><clothing></clothing></div>-->
      <!--<div class="bs"><acces></acces></div>-->
    </div>
  </div>


</template>

<script>
    import Recommend from "../indexSection/firstSection/recommend";
    import Bags from "../indexSection/firstSection/bags";
    import Watch from "../indexSection/firstSection/watch";
    import Clothing from "../indexSection/firstSection/clothing";
    import Acces from "../indexSection/firstSection/acces";
    export default {
        name: "indexNav",
      components: {
        Acces,
        Clothing,
        Watch,
        Bags,
        Recommend
        },
      updated(){
        $('.list li').click(function(){
          $('.list li').removeClass('btn');
          $(this).addClass('btn');
          // console.log($('#list li').index($(this)));
          // $('.boxSection .bs').removeClass('active');
          // $('.boxSection .bs').eq($('.list li').index($(this))).addClass('active');
        });
      }
    }
</script>

<style scoped lang="scss">
  .bbox{
    height:100%;
  }
  .list a{
    color:#333333;
  }
  .btn a{
    color:red;
  }
  .list{
    display:flex;
    justify-content: space-between;
    padding:0 0.15rem;
    overflow: auto;
  }
  .list::-webkit-scrollbar {
    display: none;
  }
  .list li{
    padding:0.14rem 0.15rem 0.1rem;
    font-size:0.14rem;
    flex-shrink: 0;
  }
  /*.boxSection .bs{*/
    /*display:none;*/
  /*}*/
  /*.boxSection .active{*/
    /*display:block;*/
  /*}*/
</style>
