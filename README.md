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

<p>The tabs markup is the same as bootstrap's without the data-toggle attribute, you only need to add a class to <code>.nav-tabs</code>:</p>

``` html
<ul class="nav nav-tabs responsive-tabs">
  <li class="active"><a href="#home1">Home</a></li>
  <li><a href="#profile1">Profile</a></li>
</ul>

<div class="tab-content">
  <div class="tab-pane active" id="home1">
    <p>1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
  </div>

  <div class="tab-pane" id="profile1">
    <p>2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
  </div>
</div>
```

[jsFiddle demo](http://jsfiddle.net/r40qvmww/embedded/result/)
