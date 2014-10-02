bootstrap-responsive-tabs
=========================

"Bootstrap Responsive Tabs" is a simple jQuery plugin that switches the default bootstrap tabs to accordions on the viewports that you choose to.

Demo: http://vtimbuc.github.io/bootstrap-responsive-tabs/


### How to use it
<p>Load the required css file in <code>&lt;head&gt;</code> and js file before <code>&lt;/body&gt;</code>:</p>

``` html
<link rel="stylesheet" href="dist/css/bootstrap-responsive-tabs.css">
<script src="dist/js/jquery.bootstrap-responsive-tabs.min.js"></script>
```

<p>Then call the plugin:</p>

``` js
$('.responsive-tabs').responsiveTabs({
  accordionOn: ['xs', 'sm'] // xs, sm, md, lg
});
```
