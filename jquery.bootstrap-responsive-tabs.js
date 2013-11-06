/*
 * jQuery Bootstrap Responsive Tabs v1.0.0
 * github.com/vtimbuc/bootstrap-responsive-tabs
 *
 * Copyright 2013 Valeriu Timbuc
 * vtimbuc.com
 */

;(function($) {
	
	var defaults = {
		collapseOn: ['xs']
	}

	$.fn.responsiveTabs = function(options) {

		var config = $.extend({}, defaults, options),
			hidden = '',
			visible = '';

		$.each(config.collapseOn, function(index, value) {
			hidden  += ' hidden-' + value;
			visible += ' visible-' + value;
		});
		
		return this.each(function() {
			
			var $this = $(this),
				$tabLinks = $this.find('.nav-tabs > li > a'),
				id = 'collapse-' + $this.children('.nav-tabs').attr('id'),
				$collapse = $('<div/>', {
					'class': 'panel-group' + visible,
					'id': id
				});

			$.each($tabLinks, function() {

				var $this = $(this),
					tab_id = $this.attr('href').replace(/#/g, ''),
					activeTab = '';

				if ($this.parent('li').hasClass('active')) {
					activeTab = ' in';
				}

				var $collapseHeading = $('<div/>', { 'class': 'panel-heading' }).html(
						$('<h4/>', { 'class': 'panel-title' }).html(
							$('<a/>', {
								'data-toggle': 'collapse',
								'data-parent': '#' + id,
								'href': '#collapse-' + tab_id,
								'html': $this.html()
							})
						)
					),

					$collapseContent = $('<div/>', {
						'class': 'panel-collapse collapse' + activeTab,
						'id': 'collapse-' + tab_id
					}).html(
						$('<div/>', {
							'class': 'panel-body',
							'html': $('#' + tab_id).html()
						})
					),

					$collapseItem = $('<div/>', { 'class': 'panel panel-default' }).append($collapseHeading, $collapseContent);

				$collapseItem.appendTo($collapse);

			});

			$collapse.insertAfter($this);

			$this.addClass(hidden);
		
		});

	};

}(jQuery));