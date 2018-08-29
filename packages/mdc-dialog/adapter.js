/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

/* eslint no-unused-vars: [2, {"args": "none"}] */

/**
 * Adapter for MDC Dialog. Provides an interface for managing:
 * - CSS classes
 * - DOM
 * - Event handlers
 *
 * Additionally, provides type information for the adapter to the Closure
 * compiler.
 *
 * Implement this adapter for your framework of choice to delegate updates to
 * the component in your framework of choice. See architecture documentation
 * for more details.
 * https://github.com/material-components/material-components-web/blob/master/docs/code/architecture.md
 *
 * @record
 */
class MDCDialogAdapter {
  /**
   * @param {!HTMLElement} el
   * @return {boolean}
   */
  isScrollable(el) {}

  /**
   * @return {?HTMLElement}
   */
  getContentElement() {}

  /**
   * @return {!NodeList|!Array<!HTMLElement>}
   */
  getButtonElements() {}

  /** @param {string} className */
  addClass(className) {}

  /** @param {string} className */
  removeClass(className) {}

  /** @param {string} className */
  addBodyClass(className) {}

  /** @param {string} className */
  removeBodyClass(className) {}

  /**
   * @param {!EventTarget} target
   * @param {string} className
   * @return {boolean}
   */
  eventTargetHasClass(target, className) {}

  /**
   * @param {!EventTarget} target
   * @param {string} selector
   * @return {boolean}
   */
  eventTargetMatchesSelector(target, selector) {}

  /**
   * @param {string} evt
   * @param {!EventListener} handler
   */
  registerInteractionHandler(evt, handler) {}

  /**
   * @param {string} evt
   * @param {!EventListener} handler
   */
  deregisterInteractionHandler(evt, handler) {}

  /**
   * @param {string} evt
   * @param {!EventListener} handler
   */
  registerSurfaceInteractionHandler(evt, handler) {}

  /**
   * @param {string} evt
   * @param {!EventListener} handler
   */
  deregisterSurfaceInteractionHandler(evt, handler) {}

  /**
   * @param {!EventListener} handler
   */
  registerDocumentKeydownHandler(handler) {}

  /**
   * @param {!EventListener} handler
   */
  deregisterDocumentKeydownHandler(handler) {}

  trapFocusOnSurface() {}
  untrapFocusOnSurface() {}

  notifyYes() {}
  notifyNo() {}
  notifyCancel() {}
  notifyOpening() {}
  notifyOpened() {}
  notifyClosing() {}
  notifyClosed() {}
}

export default MDCDialogAdapter;