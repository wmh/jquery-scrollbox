/**
 * TypeScript definitions for ScrollBox
 */

export interface ScrollBoxConfig {
  /** Use linear scrolling animation */
  linear?: boolean;
  /** Initial delay before scrolling starts (seconds) */
  startDelay?: number;
  /** Delay between scroll events (seconds) */
  delay?: number;
  /** Distance of each step in pixels (for linear mode) */
  step?: number;
  /** Animation speed in milliseconds */
  speed?: number;
  /** Number of items to switch per scroll */
  switchItems?: number;
  /** Scroll direction: 'vertical' or 'horizontal' */
  direction?: 'vertical' | 'horizontal';
  /** Scroll distance or 'auto' */
  distance?: number | 'auto';
  /** Enable auto-scrolling */
  autoPlay?: boolean;
  /** Pause on mouse hover */
  onMouseOverPause?: boolean;
  /** Initial paused state */
  paused?: boolean;
  /** Queue container ID for advanced usages */
  queue?: string | null;
  /** List element selector */
  listElement?: string;
  /** List item element selector */
  listItemElement?: string;
  /** Enable infinite looping */
  infiniteLoop?: boolean;
  /** Total switches before stopping (0 = infinite) */
  switchAmount?: number;
  /** Callback after forward scroll */
  afterForward?: ((data: ScrollBoxCallbackData) => void) | null;
  /** Callback after backward scroll */
  afterBackward?: ((data: ScrollBoxCallbackData) => void) | null;
  /** Allow stacking trigger events */
  triggerStackable?: boolean;
}

export interface ScrollBoxCallbackData {
  /** Current switch count */
  switchCount: number;
  /** Current first child element */
  currentFirstChild: Element | null;
}

export default class ScrollBox {
  /**
   * Create a new ScrollBox instance
   * @param element - The container element
   * @param options - Configuration options
   */
  constructor(element: HTMLElement, options?: ScrollBoxConfig);

  /** The container element */
  element: HTMLElement;
  
  /** Configuration object */
  config: Required<ScrollBoxConfig>;
  
  /** Whether scrolling is currently paused */
  paused: boolean;
  
  /** Current switch count */
  switchCount: number;

  /**
   * Scroll forward
   */
  forward(): void;

  /**
   * Scroll backward
   */
  backward(): void;

  /**
   * Enable forward scrolling on hover
   */
  forwardHover(): void;

  /**
   * Pause scrolling on hover
   */
  pauseHover(): void;

  /**
   * Reset the scroll clock
   * @param delay - Optional new delay in seconds
   */
  resetClock(delay?: number): void;

  /**
   * Increase scroll speed
   * @param speed - New speed in milliseconds
   */
  speedUp(speed?: number): void;

  /**
   * Decrease scroll speed
   * @param speed - New speed in milliseconds
   */
  speedDown(speed?: number): void;

  /**
   * Update configuration
   * @param options - Partial configuration to update
   */
  updateConfig(options: Partial<ScrollBoxConfig>): void;

  /**
   * Destroy the ScrollBox instance and clean up
   */
  destroy(): void;
}

// jQuery plugin definitions
declare global {
  interface JQuery {
    /**
     * Initialize ScrollBox on jQuery elements
     * @param config - Configuration options
     */
    scrollbox(config?: ScrollBoxConfig): JQuery;
  }
}
