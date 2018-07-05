<template>
  <div class="tab first">
    <ul class="menu">
      <li class="active">箱包</li>
      <li>配饰</li>
      <li>鞋靴</li>
      <li>服装</li>
      <li>首饰</li>
      <li>手表</li>
      <li>配件</li>
    </ul>
    <div class="panel show" ><xiang-bao></xiang-bao></div>
    <div class="panel"><PeiShi></PeiShi></div>
    <div class="panel"><xie></xie></div>
    <div class="panel" ><FuZhuang></FuZhuang></div>
    <div class="panel"><ShouShi></ShouShi></div>
    <div class="panel"><ShouBiao></ShouBiao></div>
    <div class="panel" ><PeiJian></PeiJian></div>
  </div>
</template>

<script>

  import XiangBao from "./XiangBao";
  import PeiShi from "./PeiShi";
  import Xie from "./xie";
  import FuZhuang from "./FuZhuang";
  import ShouShi from "./ShouShi";
  import ShouBiao from "./ShouBiao";
  import PeiJian from "./PeiJian";
  export default {
    name: "classify-section",
    components:{PeiJian, ShouBiao, ShouShi, FuZhuang, Xie, PeiShi, XiangBao },
    mounted () {
      (function ($) {
        // 选项卡的构造函数
        var Tab = function (el, param) {
          // 获取menu菜单
          var menuLi = el.find('.menu li');
          // 获取所有的panel
          var panel = el.children('.panel');

          var config = this.check(param);

          menuLi.bind(config.event, function () {
            var index = $(this).index();
            // 切换菜单
            menuLi.removeClass('active').eq(index).addClass('active');
            // 切换panel
            panel.removeClass('show').eq(index).addClass('show');
          });
        };

        Tab.prototype.check = function (param) {
          var config = {
            event: 'click',
          };
          // 判断用户是否传参
          if(!param) {
            param = {};
          }
          // 检测事件
          var events = ['click', 'mouseover'];
          if(param.event) {
            if(!$.inArray(param.event, events)) {
              param.event = config.event;
            }
          }
          return $.extend(config, param);
        };

        // 注册jQuery插件
        $.fn.extend({
          tab: function (param) {
            $(this).each(function (k, v) {
              new Tab($(v), param);
            });
          }
        });
      })(jQuery);
      $('.first').tab();
    }
  }

</script>

<style scoped>
.tab{
  width: 3.75rem;
  height: 100%;
  display: flex;
}
.tab .menu .active {
  font-size: 24px;
  border-left:2px solid #fd6456 ;
  font-weight: 600;
}
  .tab .menu{
    width: 0.9rem;
    height: 3.7rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
.tab .menu li{
  font-size: 14px;
  display: flex;
  justify-content: center;
  color: #585858;
}
.tab .panel {
  width: 2.85rem;
  height: 5.45rem;
  display: none;
  font-size: 12px;
  border-top: none;
  border-left: 1px solid #ebebeb;
}
.tab .show {
  display: block;
}
</style>
