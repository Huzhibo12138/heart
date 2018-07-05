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