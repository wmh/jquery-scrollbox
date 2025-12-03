/**
 * ScrollBox - Modern ES6+ Scrollbox Plugin
 * (c) 2009-2025 Hunter Wu <hunter.wu@gmail.com>
 * MIT Licensed.
 *
 * Modernized vanilla JavaScript version with no dependencies
 * https://github.com/wmh/scrollbox
 */

class ScrollBox {
  constructor(element, options = {}) {
    this.element = element;
    this.config = {
      linear: false,
      startDelay: 2,
      delay: 3,
      step: 5,
      speed: 32,
      switchItems: 1,
      direction: 'vertical',
      distance: 'auto',
      autoPlay: true,
      onMouseOverPause: true,
      paused: false,
      queue: null,
      listElement: 'ul',
      listItemElement: 'li',
      infiniteLoop: true,
      switchAmount: 0,
      afterForward: null,
      afterBackward: null,
      triggerStackable: false,
      ...options
    };

    this.config.scrollOffset = this.config.direction === 'vertical' ? 'scrollTop' : 'scrollLeft';
    
    if (this.config.queue) {
      this.config.queue = document.getElementById(this.config.queue);
    }

    this.scrollingId = null;
    this.nextScrollId = null;
    this.paused = false;
    this.switchCount = 0;
    this.stackedTriggerIndex = 0;
    this.containerUL = null;

    this.init();
  }

  init() {
    if (this.config.onMouseOverPause) {
      this.element.addEventListener('mouseover', () => { this.paused = true; });
      this.element.addEventListener('mouseout', () => { this.paused = false; });
    }

    this.containerUL = this.element.querySelector(`${this.config.listElement}:first-child`);

    if (!this.containerUL) {
      console.error('ScrollBox: No list element found');
      return;
    }

    // Init default switchAmount
    if (this.config.infiniteLoop === false && this.config.switchAmount === 0) {
      this.config.switchAmount = this.containerUL.children.length;
    }

    // Bind custom events
    this.element.addEventListener('resetClock', (e) => this.resetClock(e.detail?.delay));
    this.element.addEventListener('forward', () => this.onForward());
    this.element.addEventListener('backward', () => this.onBackward());
    this.element.addEventListener('pauseHover', () => this.pauseHover());
    this.element.addEventListener('forwardHover', () => this.forwardHover());
    this.element.addEventListener('speedUp', (e) => this.speedUp(e.detail?.speed));
    this.element.addEventListener('speedDown', (e) => this.speedDown(e.detail?.speed));
    this.element.addEventListener('updateConfig', (e) => this.updateConfig(e.detail));

    if (this.config.autoPlay) {
      this.nextScrollId = setTimeout(() => this.forward(), this.config.startDelay * 1000);
    }
  }

  scrollForward() {
    if (this.paused) return;

    const curLi = this.containerUL.querySelector(`${this.config.listItemElement}:first-child`);
    if (!curLi) return;

    const scrollDistance = this.config.distance !== 'auto'
      ? this.config.distance
      : this.config.direction === 'vertical'
        ? curLi.offsetHeight + this.getMargin(curLi)
        : curLi.offsetWidth + this.getMargin(curLi);

    let newScrollOffset;
    if (!this.config.linear) {
      const theStep = Math.max(3, parseInt((scrollDistance - this.element[this.config.scrollOffset]) * 0.3, 10));
      newScrollOffset = Math.min(this.element[this.config.scrollOffset] + theStep, scrollDistance);
    } else {
      newScrollOffset = Math.min(this.element[this.config.scrollOffset] + this.config.step, scrollDistance);
    }

    this.element[this.config.scrollOffset] = newScrollOffset;

    if (newScrollOffset >= scrollDistance) {
      for (let i = 0; i < this.config.switchItems; i++) {
        if (this.config.queue && this.config.queue.querySelector(this.config.listItemElement)) {
          this.containerUL.appendChild(this.config.queue.querySelector(this.config.listItemElement));
          this.containerUL.querySelector(`${this.config.listItemElement}:first-child`)?.remove();
        } else {
          const firstChild = this.containerUL.querySelector(`${this.config.listItemElement}:first-child`);
          if (firstChild) {
            this.containerUL.appendChild(firstChild);
          }
        }
        this.switchCount++;
      }

      // Use requestAnimationFrame to ensure smooth reset after DOM updates
      requestAnimationFrame(() => {
        this.element[this.config.scrollOffset] = 0;
      });
      clearInterval(this.scrollingId);
      this.scrollingId = null;

      if (typeof this.config.afterForward === 'function') {
        this.config.afterForward.call(this.element, {
          switchCount: this.switchCount,
          currentFirstChild: this.containerUL.querySelector(`${this.config.listItemElement}:first-child`)
        });
      }

      if (this.config.triggerStackable && this.stackedTriggerIndex !== 0) {
        this.releaseStack();
        return;
      }

      if (this.config.infiniteLoop === false && this.switchCount >= this.config.switchAmount) {
        return;
      }

      if (this.config.autoPlay) {
        this.nextScrollId = setTimeout(() => this.forward(), this.config.delay * 1000);
      }
    }
  }

  scrollBackward() {
    if (this.paused) return;

    if (this.element[this.config.scrollOffset] === 0) {
      for (let i = 0; i < this.config.switchItems; i++) {
        const lastChild = this.containerUL.querySelector(`${this.config.listItemElement}:last-child`);
        const firstChild = this.containerUL.querySelector(`${this.config.listItemElement}:first-child`);
        if (lastChild && firstChild) {
          this.containerUL.insertBefore(lastChild, firstChild);
        }
      }

      const curLi = this.containerUL.querySelector(`${this.config.listItemElement}:first-child`);
      if (!curLi) return;

      const scrollDistance = this.config.distance !== 'auto'
        ? this.config.distance
        : this.config.direction === 'vertical'
          ? curLi.offsetHeight
          : curLi.offsetWidth;

      // Use requestAnimationFrame to ensure smooth positioning after DOM updates
      requestAnimationFrame(() => {
        this.element[this.config.scrollOffset] = scrollDistance;
      });
      return;
    }

    let newScrollOffset;
    if (!this.config.linear) {
      const theStep = Math.max(3, parseInt(this.element[this.config.scrollOffset] * 0.3, 10));
      newScrollOffset = Math.max(this.element[this.config.scrollOffset] - theStep, 0);
    } else {
      newScrollOffset = Math.max(this.element[this.config.scrollOffset] - this.config.step, 0);
    }

    this.element[this.config.scrollOffset] = newScrollOffset;

    if (newScrollOffset === 0) {
      this.switchCount--;
      clearInterval(this.scrollingId);
      this.scrollingId = null;

      if (typeof this.config.afterBackward === 'function') {
        this.config.afterBackward.call(this.element, {
          switchCount: this.switchCount,
          currentFirstChild: this.containerUL.querySelector(`${this.config.listItemElement}:first-child`)
        });
      }

      if (this.config.triggerStackable && this.stackedTriggerIndex !== 0) {
        this.releaseStack();
        return;
      }

      if (this.config.autoPlay) {
        this.nextScrollId = setTimeout(() => this.forward(), this.config.delay * 1000);
      }
    }
  }

  getMargin(element) {
    const style = window.getComputedStyle(element);
    const marginTop = parseInt(style.marginTop) || 0;
    const marginBottom = parseInt(style.marginBottom) || 0;
    const marginLeft = parseInt(style.marginLeft) || 0;
    const marginRight = parseInt(style.marginRight) || 0;
    return this.config.direction === 'vertical' ? marginTop + marginBottom : marginLeft + marginRight;
  }

  forward() {
    clearInterval(this.scrollingId);
    this.scrollingId = setInterval(() => this.scrollForward(), this.config.speed);
  }

  backward() {
    clearInterval(this.scrollingId);
    this.scrollingId = setInterval(() => this.scrollBackward(), this.config.speed);
  }

  forwardHover() {
    this.config.autoPlay = true;
    this.paused = false;
    clearInterval(this.scrollingId);
    this.scrollingId = setInterval(() => this.scrollForward(), this.config.speed);
  }

  pauseHover() {
    this.paused = true;
  }

  resetClock(delay) {
    if (delay !== undefined) {
      this.config.delay = delay;
    }
    clearTimeout(this.nextScrollId);
    if (this.config.autoPlay) {
      this.nextScrollId = setTimeout(() => this.forward(), this.config.delay * 1000);
    }
  }

  releaseStack() {
    if (this.stackedTriggerIndex === 0) return;

    if (this.stackedTriggerIndex > 0) {
      this.stackedTriggerIndex--;
      this.nextScrollId = setTimeout(() => this.forward(), 0);
    } else {
      this.stackedTriggerIndex++;
      this.nextScrollId = setTimeout(() => this.backward(), 0);
    }
  }

  onForward() {
    if (this.config.triggerStackable) {
      if (this.scrollingId !== null) {
        this.stackedTriggerIndex++;
      } else {
        this.forward();
      }
    } else {
      clearTimeout(this.nextScrollId);
      this.forward();
    }
  }

  onBackward() {
    if (this.config.triggerStackable) {
      if (this.scrollingId !== null) {
        this.stackedTriggerIndex--;
      } else {
        this.backward();
      }
    } else {
      clearTimeout(this.nextScrollId);
      this.backward();
    }
  }

  speedUp(speed) {
    if (speed === undefined) {
      speed = Math.max(1, parseInt(this.config.speed / 2, 10));
    }
    this.config.speed = speed;
  }

  speedDown(speed) {
    if (speed === undefined) {
      speed = this.config.speed * 2;
    }
    this.config.speed = speed;
  }

  updateConfig(options) {
    this.config = { ...this.config, ...options };
  }

  destroy() {
    clearInterval(this.scrollingId);
    clearTimeout(this.nextScrollId);
    this.element.removeEventListener('mouseover', () => {});
    this.element.removeEventListener('mouseout', () => {});
  }
}

// Export for different module systems
if (typeof module !== 'undefined' && module.exports) {
  module.exports = ScrollBox;
} else if (typeof define === 'function' && define.amd) {
  define([], () => ScrollBox);
} else {
  window.ScrollBox = ScrollBox;
}

// jQuery plugin wrapper for backward compatibility
if (typeof jQuery !== 'undefined' || typeof $ !== 'undefined') {
  const jq = jQuery || $;
  jq.fn.scrollbox = function(config) {
    return this.each(function() {
      if (!this._scrollbox) {
        this._scrollbox = new ScrollBox(this, config);
      }
    });
  };
}
