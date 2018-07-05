<template>
  <div class="ClassifySection">
    <div class="tab first">
      <ul class="menu1">
        <li>
          <i class="iconfont icon-soucha"></i>
        </li>
        <li class="active" >品类</li>
        <li>品牌</li>
        <li class="li">
          <i class="iconfont icon-ziyuan"></i>
        </li>
      </ul>
      <div class="panel1" style="display: none" ></div>
      <div class="panel1  show"><classfly-section-brand></classfly-section-brand></div>
      <div class="panel1"><classfly-section-class></classfly-section-class></div>
      <div class="panel1" style="display: none" ></div>
    </div>
  </div>
</template>
<script>

  import ClassflySectionBrand from "./ClassflySectionBrand/ClassflySectionBrand";
  import ClassflySectionClass from "./ClassflySectionClass/ClassflySectionClass";
  export default {
    name: "classify-section",
    components:{ClassflySectionClass, ClassflySectionBrand },
    mounted () {
      (function ($) {
        // 选项卡的构造函数
        var Tab = function (el, param) {
          // 获取menu菜单
          var menuLi = el.find('.menu1 li');
          // 获取所有的panel
          var panel = el.children('.panel1');

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
  .ClassifySection{
    width: 100%;
    height: 100%;
  }
  .tab {
    width: 3.75rem;
    height: 100%;
  }
  .tab .menu1 li i{
    width: 0.2rem;
    height: 0.2rem;
  }
  .tab .menu1 .li{
    display: flex;
    justify-content: flex-end;
  }
  .tab .menu1 {
    line-height: 0.6rem;
    overflow: hidden;
    width: 3.75rem;
    height: 0.6rem;
    border-bottom: 1px solid #efefef;
    display: flex;
    justify-content: space-around;
  }
  .tab .menu1 li {
    float: left;
    width: 0.6rem;
    text-align: center;
    cursor: pointer;
    font-size: 14px;
  }
  .tab .menu1 .active {
    color: #fd6456;
    border-bottom: 2px solid #fd6456;
  }
  .tab .panel1 {
    display: none;
    font-size: 12px;
    border-top: none;
  }
  .tab .show {
    display: block;
  }
</style>

