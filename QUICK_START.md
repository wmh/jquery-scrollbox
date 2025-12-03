# Quick Start Guide

## Installation

### NPM
```bash
npm install jquery-scrollbox
```

### Direct Download
Download `scrollbox.js` from the repository.

## Basic Usage (Vanilla JavaScript)

### 1. HTML Structure
```html
<div id="my-scrollbox">
  <ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
  </ul>
</div>
```

### 2. CSS Styling
```css
#my-scrollbox {
  width: 300px;
  height: 200px;
  overflow: hidden;
}

#my-scrollbox ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

#my-scrollbox li {
  padding: 10px;
  margin: 5px;
}
```

### 3. JavaScript
```html
<script src="scrollbox.js"></script>
<script>
  const scrollbox = new ScrollBox(document.getElementById('my-scrollbox'), {
    direction: 'vertical',
    autoPlay: true
  });
</script>
```

## Common Configurations

### Vertical Auto-Scroll
```javascript
new ScrollBox(element, {
  direction: 'vertical',
  autoPlay: true,
  delay: 3,
  onMouseOverPause: true
});
```

### Horizontal Carousel
```javascript
new ScrollBox(element, {
  direction: 'horizontal',
  autoPlay: false,
  switchItems: 1
});
```

### Marquee Style (Linear)
```javascript
new ScrollBox(element, {
  direction: 'horizontal',
  linear: true,
  speed: 20,
  delay: 0
});
```

### Manual Control
```javascript
const scrollbox = new ScrollBox(element, {
  autoPlay: false
});

// Forward
element.dispatchEvent(new Event('forward'));

// Backward
element.dispatchEvent(new Event('backward'));
```

## Using with jQuery

```html
<script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
<script src="jquery.scrollbox.js"></script>
<script>
  $('#my-scrollbox').scrollbox({
    direction: 'vertical',
    autoPlay: true
  });
  
  // Trigger events
  $('#my-scrollbox').trigger('forward');
  $('#my-scrollbox').trigger('backward');
</script>
```

## Events

| Event | Description | Example |
|-------|-------------|---------|
| `forward` | Scroll forward | `element.dispatchEvent(new Event('forward'))` |
| `backward` | Scroll backward | `element.dispatchEvent(new Event('backward'))` |
| `pauseHover` | Pause scrolling | `element.dispatchEvent(new Event('pauseHover'))` |
| `forwardHover` | Resume forward | `element.dispatchEvent(new Event('forwardHover'))` |
| `speedUp` | Increase speed | `element.dispatchEvent(new CustomEvent('speedUp', {detail: {speed: 16}}))` |
| `speedDown` | Decrease speed | `element.dispatchEvent(new CustomEvent('speedDown', {detail: {speed: 64}}))` |
| `resetClock` | Reset timer | `element.dispatchEvent(new CustomEvent('resetClock', {detail: {delay: 5}}))` |
| `updateConfig` | Update config | `element.dispatchEvent(new CustomEvent('updateConfig', {detail: {autoPlay: false}}))` |

## Configuration Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `direction` | String | `'vertical'` | Scroll direction |
| `autoPlay` | Boolean | `true` | Auto-scrolling enabled |
| `linear` | Boolean | `false` | Linear scrolling mode |
| `speed` | Number | `32` | Animation speed (ms) |
| `delay` | Number | `3` | Delay between scrolls (s) |
| `startDelay` | Number | `2` | Initial delay (s) |
| `onMouseOverPause` | Boolean | `true` | Pause on hover |
| `infiniteLoop` | Boolean | `true` | Enable looping |
| `switchItems` | Number | `1` | Items per scroll |

See README.md for complete options.

## Examples

Check out `example-modern.html` for live examples!

## Need Help?

- 📖 Read the [full documentation](README.md)
- 🐛 [Report issues](https://github.com/wmh/scrollbox/issues)
- 💡 See [CONTRIBUTING.md](CONTRIBUTING.md) to contribute
