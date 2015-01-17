# [jQuery Scrollbox](http://wmh.github.io/jquery-scrollbox/) [![Build Status](https://travis-ci.org/wmh/jquery-scrollbox.svg?branch=master)](https://travis-ci.org/wmh/jquery-scrollbox)

jQuery Scrollbox is a lightweight plugin that enables you to scroll a list of html elements (text, image, etc...) like a carousel slider or traditional marquee.

## Features

* Simple and lightweight
* Vertical and horizontal scroll
* Auto play
* Multiple instances on one page
* Pause on hover over
* Useful options to customize your list scrolling
* Prev / Next navigation buttons
* Queue container for advanced usages

## Basic Usage

### 1. Include the latest jQuery library and jQuery Scrollbox Plugin on the page
```html
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
<script src="jquery.scrollbox.js"></script>
```

### 2. Create a list of text you want to scroll
```html
<div id="demo" class="scroll-text">
  <ul>
    <li>item 1</li>
    <li>item 2</li>
    <li>item 3</li>
  </ul>
</div>
```

### 3. Style html elements as below

![scrollbox elements diagram](http://wmh.github.io/jquery-scrollbox/img/wireframe.png)

### 4. Initialization
```js
$('#demo').scrollbox();
```

## Demos

__http://wmh.github.io/jquery-scrollbox/__

## More examples

### Non-infinite Loop

```js
$('#demo').scrollbox({
  infiniteLoop: false,
  switchAmount: 3
});

```

### Callback functions

```js
$('#demo').scrollbox({
  afterForward: function (data) {
    console.log(data.currentFirstChild);
    if (data.switchCount >= 3) {
      this.trigger('backward');
    }
  },
  afterBackward: function (data) {
    console.log(data);
  }
});

```

## License

jQuery Scrollbox is open-sourced software licensed under the [MIT license](http://opensource.org/licenses/MIT)
