import {
  ControlContainer,
  DefaultValueAccessor,
  FormsModule,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  NgControl,
  NgControlStatus,
  NgModel,
  Validators
} from "./chunk-LRC3BDAJ.js";
import {
  AnimationEngine,
  animate,
  animateChild,
  query,
  stagger,
  style,
  transition,
  trigger
} from "./chunk-U4JK4IL7.js";
import {
  RouterLinkActive
} from "./chunk-IKTASYKQ.js";
import {
  DomSanitizer,
  EVENT_MANAGER_PLUGINS,
  Title
} from "./chunk-Y2HUTGGU.js";
import "./chunk-M5MN64AQ.js";
import {
  AsyncPipe,
  CommonModule,
  DOCUMENT,
  NgComponentOutlet,
  NgForOf,
  NgIf,
  NgTemplateOutlet,
  isPlatformBrowser,
  isPlatformServer
} from "./chunk-27YZRI23.js";
import {
  Attribute,
  BehaviorSubject,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ComponentFactoryResolver$1,
  ContentChild,
  ContentChildren,
  Directive,
  EMPTY,
  ElementRef,
  EventEmitter,
  HostBinding,
  HostListener,
  INJECTOR,
  Inject,
  InjectFlags,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  LOCALE_ID,
  NEVER,
  NgModule,
  NgZone,
  Observable,
  Optional,
  Output,
  PLATFORM_ID,
  Pipe,
  QueryList,
  Renderer2,
  RendererFactory2,
  ReplaySubject,
  Sanitizer,
  SecurityContext,
  Self,
  SkipSelf,
  Subject,
  TemplateRef,
  Type,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation$1,
  __assign,
  __awaiter,
  __decorate,
  __rest,
  catchError,
  combineLatest,
  concat,
  concatMap,
  createOperatorSubscriber,
  debounce,
  debounceTime,
  defer,
  delay,
  distinctUntilChanged,
  endWith,
  filter,
  finalize,
  forwardRef,
  from,
  fromEvent,
  identity,
  ignoreElements,
  inject,
  innerFrom,
  isDevMode,
  isObservable,
  map,
  merge,
  of,
  pairwise,
  pipe,
  race,
  repeat,
  repeatWhen,
  scan,
  setClassMetadata,
  share,
  shareReplay,
  skip,
  skipWhile,
  startWith,
  switchAll,
  switchMap,
  take,
  takeUntil,
  takeWhile,
  tap,
  throttleTime,
  timer,
  withLatestFrom,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdefinePipe,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵhostProperty,
  ɵɵinject,
  ɵɵinjectAttribute,
  ɵɵinvalidFactory,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵpipeBind4,
  ɵɵpipeBindV,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction5,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵstyleProp,
  ɵɵsyntheticHostProperty,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-QNB35Z45.js";

// node_modules/@taiga-ui/cdk/fesm2015/taiga-ui-cdk-constants.js
var ALWAYS_FALSE_HANDLER = () => false;
var ALWAYS_TRUE_HANDLER = () => true;
var rect = {
  bottom: 0,
  height: 0,
  left: 0,
  right: 0,
  top: 0,
  width: 0,
  x: 0,
  y: 0
};
var EMPTY_QUERY = new QueryList();
var EMPTY_ARRAY = [];
var EMPTY_FUNCTION = () => {
};
var EMPTY_CLIENT_RECT = Object.assign(Object.assign({}, rect), { toJSON() {
  return rect;
} });
var TUI_PARENT_ANIMATION = trigger("tuiParentAnimation", [
  transition(":leave", [query(":scope > *", [animateChild()], { optional: true })])
]);
var TUI_PARENT_STOP = trigger("tuiParentStop", [transition(":enter", [])]);
var POLLING_TIME = 1e3 / 15;
var svgNodeFilter = (node) => "ownerSVGElement" in node ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT;
var CHAR_NO_BREAK_SPACE = " ";
var CHAR_EN_DASH = "–";
var CHAR_HYPHEN = "-";
var CHAR_PLUS = "+";
var CHAR_ZERO_WIDTH_SPACE = "​";
var TUI_VERSION = `3.61.0`;

// node_modules/@taiga-ui/cdk/fesm2015/taiga-ui-cdk-classes.js
var tuiAssert = {
  /**
   * @deprecated:
   * The current field no longer matters as
   * it will not be provided in production
   */
  enabled: false,
  get assert() {
    return ngDevMode ? Function.prototype.bind.call(console.assert, console) : EMPTY_FUNCTION;
  }
};
var TuiValidationError = class {
  constructor(message, context = {}) {
    this.message = message;
    this.context = context;
  }
};

// node_modules/@taiga-ui/cdk/fesm2015/taiga-ui-cdk-utils-browser.js
function tuiIsFirefox(userAgent) {
  return userAgent.toLowerCase().includes("firefox");
}
function tuiIsSafari({ ownerDocument: doc }) {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  const win = doc === null || doc === void 0 ? void 0 : doc.defaultView;
  const isMacOsSafari = typeof win.safari !== "undefined" && ((_b = (_a = win.safari) === null || _a === void 0 ? void 0 : _a.pushNotification) === null || _b === void 0 ? void 0 : _b.toString()) === "[object SafariRemoteNotification]";
  const isIosSafari = !!((_d = (_c = win.navigator) === null || _c === void 0 ? void 0 : _c.vendor) === null || _d === void 0 ? void 0 : _d.includes("Apple")) && !((_f = (_e = win.navigator) === null || _e === void 0 ? void 0 : _e.userAgent) === null || _f === void 0 ? void 0 : _f.includes("CriOS")) && !((_h = (_g = win.navigator) === null || _g === void 0 ? void 0 : _g.userAgent) === null || _h === void 0 ? void 0 : _h.includes("FxiOS"));
  return isMacOsSafari || isIosSafari;
}

// node_modules/@taiga-ui/cdk/fesm2015/taiga-ui-cdk-utils-math.js
function tuiClamp(value, min, max) {
  ngDevMode && tuiAssert.assert(!Number.isNaN(value));
  ngDevMode && tuiAssert.assert(!Number.isNaN(min));
  ngDevMode && tuiAssert.assert(!Number.isNaN(max));
  ngDevMode && tuiAssert.assert(max >= min);
  return Math.min(max, Math.max(min, value));
}
function tuiInRange(value, fromInclude, toExclude) {
  ngDevMode && tuiAssert.assert(!Number.isNaN(value));
  ngDevMode && tuiAssert.assert(!Number.isNaN(fromInclude));
  ngDevMode && tuiAssert.assert(!Number.isNaN(toExclude));
  ngDevMode && tuiAssert.assert(fromInclude < toExclude);
  return value >= fromInclude && value < toExclude;
}
function tuiNormalizeToIntNumber(value, min, max) {
  ngDevMode && tuiAssert.assert(Number.isInteger(min));
  ngDevMode && tuiAssert.assert(Number.isInteger(max));
  ngDevMode && tuiAssert.assert(min <= max);
  if (Number.isNaN(value) || value <= min) {
    return min;
  }
  if (value >= max) {
    return max;
  }
  return Math.round(value);
}
var MAX_PRECISION = 292;
function calculate(value, precision, func) {
  if (value === Infinity) {
    return value;
  }
  ngDevMode && tuiAssert.assert(!Number.isNaN(value), "Value must be number");
  ngDevMode && tuiAssert.assert(Number.isInteger(precision), "Precision must be integer");
  precision = Math.min(precision, MAX_PRECISION);
  const pair = `${value}e`.split("e");
  const tempValue = func(Number(`${pair[0]}e${Number(pair[1]) + precision}`));
  const processedPair = `${tempValue}e`.split("e");
  return Number(`${processedPair[0]}e${Number(processedPair[1]) - precision}`);
}
function tuiRound(value, precision = 0) {
  return calculate(value, precision, Math.round);
}
function tuiCeil(value, precision = 0) {
  return calculate(value, precision, Math.ceil);
}
function tuiFloor(value, precision = 0) {
  return calculate(value, precision, Math.floor);
}
function tuiTrunc(value, precision = 0) {
  return calculate(value, precision, Math.trunc);
}
function tuiRoundWith({ value, precision, method }) {
  switch (method) {
    case "round":
      return tuiRound(value, precision);
    case "ceil":
      return tuiCeil(value, precision);
    case "floor":
      return tuiFloor(value, precision);
    default:
      return tuiTrunc(value, precision);
  }
}

// node_modules/@taiga-ui/cdk/fesm2015/taiga-ui-cdk-utils-miscellaneous.js
function tuiArrayRemove(array, index) {
  return array.slice(0, Math.max(index, 0)).concat(array.slice(Math.max(index + 1, 0)));
}
function tuiIsString(value) {
  return typeof value === "string";
}
function tuiCreateToken(defaults) {
  return tuiCreateTokenFromFactory(() => defaults);
}
function tuiCreateTokenFromFactory(factory) {
  return new InjectionToken("", { factory });
}
function tuiDistanceBetweenTouches({ touches }) {
  return Math.hypot(touches[0].clientX - touches[1].clientX, touches[0].clientY - touches[1].clientY);
}
function tuiEaseInOutQuad(t) {
  ngDevMode && tuiAssert.assert(t >= 0 && t <= 1, "Input must be between 0 and 1 inclusive but received ", t);
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
}
function tuiGetOriginalArrayFromQueryList(queryList) {
  let array = [];
  queryList.find((_item, _index, originalArray) => {
    array = originalArray;
    return true;
  });
  return array;
}
function tuiGetSwipeDirection(deltaX, deltaY) {
  if (Math.abs(deltaY) > Math.abs(deltaX)) {
    return deltaY > 0 ? "top" : "bottom";
  }
  return deltaX > 0 ? "left" : "right";
}
function tuiIsFalsy(value) {
  return !value;
}
function tuiIsNumber(value) {
  return typeof value === "number";
}
function tuiIsPresent(value) {
  return value !== null && value !== void 0;
}
function tuiNullableSame(a, b, handler) {
  if (a === null) {
    return b === null;
  }
  if (b === null) {
    return false;
  }
  return handler(a, b);
}
function tuiProvideOptions(provide, options, fallback) {
  return {
    provide,
    deps: [[new Optional(), new SkipSelf(), provide]],
    useFactory: (parent) => Object.assign(Object.assign({}, parent || fallback), options)
  };
}

// node_modules/@taiga-ui/cdk/fesm2015/taiga-ui-cdk-utils-dom.js
function canScrollVertical(element, rootElement, scrollEnd) {
  let currentElement = element;
  while (currentElement !== rootElement.parentElement) {
    if (Math.floor(currentElement.scrollTop) > 0 && !scrollEnd || Math.ceil(currentElement.scrollTop + currentElement.clientHeight) < currentElement.scrollHeight && scrollEnd) {
      return true;
    }
    if (currentElement.parentElement) {
      currentElement = currentElement.parentElement;
    } else {
      return false;
    }
  }
  return false;
}
function canScrollHorizontal(element, rootElement, scrollEnd) {
  let currentElement = element;
  while (currentElement !== rootElement.parentElement) {
    if (Math.floor(currentElement.scrollLeft) > 0 && !scrollEnd || Math.ceil(currentElement.scrollLeft + currentElement.clientWidth) < currentElement.scrollWidth && scrollEnd) {
      return true;
    }
    if (currentElement.parentElement) {
      currentElement = currentElement.parentElement;
    } else {
      return false;
    }
  }
  return false;
}
function tuiCanScroll(element, rootElement, vertical, scrollEnd) {
  return vertical ? canScrollVertical(element, rootElement, scrollEnd) : canScrollHorizontal(element, rootElement, scrollEnd);
}
function tuiContainsOrAfter(current, node) {
  try {
    return current.contains(node) || !!(node.compareDocumentPosition(current) & Node.DOCUMENT_POSITION_PRECEDING);
  } catch (_a) {
    return false;
  }
}
function tuiIsInput(element) {
  return element.matches("input");
}
function tuiIsTextarea(element) {
  return element.matches("textarea");
}
function tuiIsTextfield(element) {
  return tuiIsInput(element) || tuiIsTextarea(element);
}
function tuiIsElement(node) {
  return !!node && "nodeType" in node && node.nodeType === Node.ELEMENT_NODE;
}
function tuiIsHTMLElement(node) {
  return node instanceof HTMLElement;
}
function tuiIsTextNode(node) {
  return node.nodeType === Node.TEXT_NODE;
}
function tuiGetActualTarget(event) {
  return event.composedPath()[0];
}
function tuiGetDocumentOrShadowRoot(node) {
  return "getRootNode" in node && node.isConnected ? node.getRootNode() : node.ownerDocument;
}
function tuiGetElementObscures(element) {
  const { ownerDocument } = element;
  if (!(ownerDocument === null || ownerDocument === void 0 ? void 0 : ownerDocument.defaultView) || !element.getBoundingClientRect) {
    return null;
  }
  const { innerWidth, innerHeight } = ownerDocument.defaultView;
  const doc = tuiGetDocumentOrShadowRoot(element);
  const rect2 = element.getBoundingClientRect();
  if (rect2.width === 0 && rect2.height === 0) {
    return null;
  }
  const left = tuiClamp(Math.round(rect2.left) + 2, 0, innerWidth);
  const top = tuiClamp(Math.round(rect2.top) + 2, 0, innerHeight);
  const right = tuiClamp(Math.round(rect2.right) - 2, 0, innerWidth);
  const bottom = tuiClamp(Math.round(rect2.bottom) - 2, 0, innerHeight);
  const horizontalMiddle = tuiClamp(Math.round(rect2.left + rect2.width / 2), 0, innerWidth);
  const verticalMiddle = tuiClamp(Math.round(rect2.top + rect2.height / 2), 0, innerHeight);
  const elements = [
    doc.elementFromPoint(horizontalMiddle, top),
    doc.elementFromPoint(horizontalMiddle, bottom),
    doc.elementFromPoint(left, verticalMiddle),
    doc.elementFromPoint(right, verticalMiddle)
  ];
  const nonNull = elements.filter(tuiIsPresent);
  if (!nonNull.length) {
    return nonNull;
  }
  const filtered = nonNull.filter((el) => !element.contains(el));
  return filtered.length === 4 ? filtered : null;
}
function tuiGetElementOffset(host, element) {
  ngDevMode && tuiAssert.assert(host.contains(element), "Host must contain element");
  let { offsetTop, offsetLeft, offsetParent } = element;
  while (tuiIsHTMLElement(offsetParent) && offsetParent !== host) {
    offsetTop += offsetParent.offsetTop;
    offsetLeft += offsetParent.offsetLeft;
    offsetParent = offsetParent.offsetParent;
  }
  return { offsetTop, offsetLeft };
}
function tuiGetScrollParent(element, vertical = true) {
  if (element === null) {
    return null;
  }
  if (vertical && element.scrollHeight > element.clientHeight) {
    return element;
  }
  if (!vertical && element.scrollWidth > element.clientWidth) {
    return element;
  }
  return tuiGetScrollParent(element.parentElement, vertical);
}
function tuiGetSelectedText({ getSelection, document: document2 }) {
  var _a;
  return document2.activeElement && tuiIsTextfield(document2.activeElement) ? document2.activeElement.value.slice(document2.activeElement.selectionStart || 0, document2.activeElement.selectionEnd || 0) : ((_a = getSelection()) === null || _a === void 0 ? void 0 : _a.toString()) || null;
}
function tuiIsElementEditable(element) {
  return tuiIsTextfield(element) && !element.readOnly || !!element.isContentEditable;
}
function tuiPointToClientRect(x = 0, y = 0) {
  const rect2 = {
    x,
    y,
    left: x,
    right: x,
    top: y,
    bottom: y,
    width: 0,
    height: 0
  };
  return Object.assign(Object.assign({}, rect2), { toJSON() {
    return rect2;
  } });
}
function tuiRetargetedBoundaryCrossing(event) {
  if ("explicitOriginalTarget" in event) {
    return (event === null || event === void 0 ? void 0 : event.explicitOriginalTarget) !== event.target;
  }
  if ("pointerId" in event) {
    return event.pointerId === -1;
  }
  if ("detail" in event && "webkitForce" in event) {
    return (event === null || event === void 0 ? void 0 : event.detail) === 0;
  }
  return false;
}

// node_modules/@taiga-ui/cdk/fesm2015/taiga-ui-cdk-utils-focus.js
function tuiGetNativeFocused({ activeElement }) {
  if (!(activeElement === null || activeElement === void 0 ? void 0 : activeElement.shadowRoot)) {
    return activeElement;
  }
  let element = activeElement.shadowRoot.activeElement;
  while (element === null || element === void 0 ? void 0 : element.shadowRoot) {
    element = element.shadowRoot.activeElement;
  }
  return element;
}
function tuiBlurNativeFocused(doc) {
  const activeElement = tuiGetNativeFocused(doc);
  if (tuiIsHTMLElement(activeElement)) {
    activeElement.blur();
  }
}
function tuiIsNativeKeyboardFocusable(element) {
  if (element.hasAttribute("disabled") || element.getAttribute("tabIndex") === "-1") {
    return false;
  }
  if (tuiIsHTMLElement(element) && element.isContentEditable || element.getAttribute("tabIndex") === "0") {
    return true;
  }
  switch (element.tagName) {
    case "BUTTON":
    case "SELECT":
    case "TEXTAREA":
      return true;
    case "VIDEO":
    case "AUDIO":
      return element.hasAttribute("controls");
    case "INPUT":
      return element.getAttribute("type") !== "hidden";
    case "A":
    case "LINK":
      return element.hasAttribute("href");
    default:
      return false;
  }
}
function tuiIsNativeMouseFocusable(element) {
  return !element.hasAttribute("disabled") && (element.getAttribute("tabIndex") === "-1" || tuiIsNativeKeyboardFocusable(element));
}
function tuiGetClosestFocusable({ initial, root, previous = false, keyboard = true }) {
  if (!root.ownerDocument) {
    return null;
  }
  const check = keyboard ? tuiIsNativeKeyboardFocusable : tuiIsNativeMouseFocusable;
  const treeWalker = root.ownerDocument.createTreeWalker(root, NodeFilter.SHOW_ELEMENT, svgNodeFilter);
  treeWalker.currentNode = initial;
  while (previous ? treeWalker.previousNode() : treeWalker.nextNode()) {
    if (tuiIsHTMLElement(treeWalker.currentNode)) {
      initial = treeWalker.currentNode;
    }
    if (tuiIsHTMLElement(initial) && check(initial)) {
      return initial;
    }
  }
  return null;
}
function tuiIsNativeFocused(node) {
  return !!(node === null || node === void 0 ? void 0 : node.ownerDocument) && tuiGetNativeFocused(node.ownerDocument) === node && node.ownerDocument.hasFocus();
}
function tuiIsNativeFocusedIn(node) {
  if (!node.ownerDocument || !node.contains) {
    return false;
  }
  const nativeFocused = tuiGetNativeFocused(node.ownerDocument);
  return nativeFocused !== null && node.contains(nativeFocused) && node.ownerDocument.hasFocus();
}
function tuiMoveFocus(currentIndex, elements, step) {
  currentIndex += step;
  while (currentIndex >= 0 && currentIndex < elements.length) {
    elements[currentIndex].focus();
    if (tuiIsNativeFocused(elements[currentIndex])) {
      return;
    }
    currentIndex += step;
  }
}
function tuiSetNativeMouseFocused(element, focused = true, preventScroll = false) {
  if (!element.ownerDocument) {
    return;
  }
  if (typeof Event === "function") {
    element.dispatchEvent(new Event("mousedown", { bubbles: true, cancelable: true }));
  } else {
    const event = element.ownerDocument.createEvent("Event");
    event.initEvent("mousedown", true, true);
    element.dispatchEvent(event);
  }
  if (focused) {
    element.focus({ preventScroll });
  } else {
    element.blur();
  }
}

// node_modules/@taiga-ui/cdk/fesm2015/taiga-ui-cdk-utils-format.js
function tuiPx(value) {
  ngDevMode && tuiAssert.assert(Number.isFinite(value), "Value must be finite number");
  return `${value}px`;
}

// node_modules/@taiga-ui/cdk/fesm2015/taiga-ui-cdk-utils-os.js
function tuiIsApplePlatform(navigator) {
  return navigator.platform.startsWith("Mac") || navigator.platform === "iPhone";
}
var IOS_REG_EXP = /ipad|iphone|ipod/;
function tuiIsIos(navigator) {
  return IOS_REG_EXP.test(navigator.userAgent.toLowerCase()) || tuiIsApplePlatform(navigator) && navigator.maxTouchPoints > 1;
}
var SAFARI_REG_EXP = /^((?!chrome|android).)*safari/i;
function tuiIsApple(navigator) {
  return tuiIsIos(navigator) || SAFARI_REG_EXP.test(navigator.userAgent.toLowerCase());
}

// node_modules/@taiga-ui/cdk/fesm2015/taiga-ui-cdk-utils-svg.js
function makeRandomSalt() {
  return Math.floor(Math.random() * Date.now());
}
function escapeRegExp(search) {
  return search.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
}
function extractLinearGradientIdsFromSvg(svg) {
  var _a;
  const ids = ((_a = svg.match(/url\(("?)('*)#(.*?)('*)\)/g)) !== null && _a !== void 0 ? _a : []).map((url) => url.slice(4, url.length - 1).replace(/['"#]+/g, ""));
  return Array.from(new Set(ids));
}
function setFallbackForGradientFill(svg, fallback) {
  try {
    const tree = new DOMParser().parseFromString(svg, "text/html");
    tree.body.querySelectorAll("[fill^=url]").forEach((element) => element.setAttribute("fill", `${element.getAttribute("fill")} ${fallback}`.trim()));
    return tree.body.innerHTML.trim();
  } catch (_a) {
    return svg;
  }
}
function tuiSvgLinearGradientProcessor(svg, salt = makeRandomSalt(), fallback = "rgba(0, 0, 0, 0.7)") {
  if (tuiIsString(svg)) {
    const uniqueIds = extractLinearGradientIdsFromSvg(svg);
    const rawSvg = uniqueIds.reduce((newSvg, previousId) => {
      const escapedId = escapeRegExp(previousId);
      const newId = `id_${salt}_${previousId}`;
      return newSvg.replace(new RegExp(`"${escapedId}"`, "g"), `"${newId}"`).replace(new RegExp(`'${escapedId}'`, "g"), `'${newId}'`).replace(new RegExp(`url\\('#${escapedId}'\\)`, "g"), `url('#${newId}')`).replace(new RegExp(`url\\("#${escapedId}"\\)`, "g"), `url("#${newId}")`).replace(new RegExp(`url\\(#${escapedId}\\)`, "g"), `url(#${newId})`);
    }, svg);
    return setFallbackForGradientFill(rawSvg, fallback);
  }
  return svg;
}

// node_modules/@taiga-ui/cdk/fesm2015/taiga-ui-cdk-exceptions.js
var TuiInvalidDayException = class extends Error {
  constructor(day) {
    super(ngDevMode ? `Invalid day: ${day}` : "");
  }
};
var TuiInvalidMonthException = class extends Error {
  constructor(month) {
    super(ngDevMode ? `Invalid month: ${month}` : "");
  }
};
var TuiInvalidYearException = class extends Error {
  constructor(year) {
    super(ngDevMode ? `Invalid year: ${year}` : "");
  }
};
var TuiNoHostException = class extends Error {
  constructor() {
    super(ngDevMode ? "Portals cannot be used without TuiPortalHostComponent" : "");
  }
};
var TuiOwnerDocumentException = class extends Error {
  constructor() {
    super(ngDevMode ? "Element does not have ownerDocument" : "");
  }
};
var TuiPureException = class extends Error {
  constructor() {
    super(ngDevMode ? "tuiPure can only be used with functions or getters" : "");
  }
};

// node_modules/@taiga-ui/cdk/fesm2015/taiga-ui-cdk-observables.js
function tuiTypedFromEvent(target, event, options = {}) {
  return fromEvent(target, event, options);
}
function tuiMouseDragFinishFrom(target) {
  return merge(tuiTypedFromEvent(target, "mouseup"), tuiTypedFromEvent(target, "dragend"));
}
var TuiDragStage;
(function(TuiDragStage2) {
  TuiDragStage2[TuiDragStage2["Start"] = 0] = "Start";
  TuiDragStage2[TuiDragStage2["Continues"] = 1] = "Continues";
  TuiDragStage2[TuiDragStage2["End"] = 2] = "End";
})(TuiDragStage || (TuiDragStage = {}));
var TuiDragState = class {
  constructor(stage, event) {
    this.stage = stage;
    this.event = event;
  }
};
function tuiDragAndDropFrom(element) {
  const { ownerDocument } = element;
  if (!ownerDocument) {
    throw new TuiOwnerDocumentException();
  }
  return concat(tuiTypedFromEvent(element, "mousedown").pipe(take(1), map((event) => new TuiDragState(TuiDragStage.Start, event))), merge(tuiTypedFromEvent(ownerDocument, "mousemove").pipe(map((event) => new TuiDragState(TuiDragStage.Continues, event))), tuiMouseDragFinishFrom(ownerDocument).pipe(take(1), map((event) => new TuiDragState(TuiDragStage.End, event)), endWith(null))).pipe(takeWhile(tuiIsPresent))).pipe(repeat());
}
function tuiIsAlive(lifespan = 0) {
  return pipe(switchMap(() => timer(lifespan).pipe(map(ALWAYS_FALSE_HANDLER), startWith(true))), distinctUntilChanged());
}
var documentMouseUpIsAlive$;
var documentMouseDownIsAlive$;
function tuiFocusVisibleObservable(element) {
  const elementBlur$ = tuiTypedFromEvent(element, "blur");
  const { ownerDocument } = element;
  if (!ownerDocument) {
    throw new TuiOwnerDocumentException();
  }
  if (!documentMouseDownIsAlive$ || !documentMouseUpIsAlive$) {
    documentMouseUpIsAlive$ = tuiTypedFromEvent(ownerDocument, "mouseup", {
      capture: true
    }).pipe(tuiIsAlive(), startWith(false), shareReplay({ bufferSize: 1, refCount: true }));
    documentMouseDownIsAlive$ = tuiTypedFromEvent(ownerDocument, "mousedown", {
      capture: true
    }).pipe(tuiIsAlive(), startWith(false), shareReplay({ bufferSize: 1, refCount: true }));
  }
  return merge(
    // focus events excluding ones that came right after mouse action
    concat(
      tuiTypedFromEvent(element, "focus").pipe(take(1)),
      // filtering out blur events when element remains focused so that we ignore browser tab focus loss
      elementBlur$.pipe(filter(() => !tuiIsNativeFocused(element)), take(1), ignoreElements())
    ).pipe(repeat(), withLatestFrom(documentMouseDownIsAlive$, documentMouseUpIsAlive$, (_event, elementActual, documentActual) => elementActual || documentActual), filter(tuiIsFalsy))
  ).pipe(switchMap(() => elementBlur$.pipe(map(ALWAYS_FALSE_HANDLER), take(1), startWith(true))), distinctUntilChanged());
}
function tuiIfMap(project, predicate = Boolean) {
  return pipe(switchMap((value) => predicate(value) ? project(value) : EMPTY));
}
function tuiIsObserved(observable) {
  var _a, _b;
  return "observed" in observable ? observable.observed : !!((_b = (_a = observable) === null || _a === void 0 ? void 0 : _a.observers) === null || _b === void 0 ? void 0 : _b.length);
}
function tuiQueryListChanges(queryList) {
  return queryList.changes.pipe(startWith(null), map(() => tuiGetOriginalArrayFromQueryList(queryList)));
}
function tuiPressedObservable(element, { onlyTrusted } = { onlyTrusted: true }) {
  const { ownerDocument } = element;
  if (!ownerDocument) {
    throw new TuiOwnerDocumentException();
  }
  return tuiTypedFromEvent(element, "mousedown").pipe(filter(({ isTrusted }) => isTrusted || !onlyTrusted), switchMap(() => tuiMouseDragFinishFrom(ownerDocument).pipe(map(ALWAYS_FALSE_HANDLER), take(1), startWith(true))));
}
function tuiPreventDefault() {
  return tap((event) => event.preventDefault());
}
function tuiScrollFrom(element) {
  return tuiTypedFromEvent(element === element.ownerDocument.documentElement ? element.ownerDocument : element, "scroll");
}
function tuiStopPropagation() {
  return tap((e) => {
    e.stopPropagation();
  });
}
function tuiWatch(cdr) {
  return tap(() => {
    cdr.markForCheck();
  });
}
function tuiZonefull(zone) {
  return (source) => new Observable((subscriber) => source.subscribe({
    next: (value) => zone.run(() => subscriber.next(value)),
    error: (error) => zone.run(() => subscriber.error(error)),
    complete: () => zone.run(() => subscriber.complete())
  }));
}
function tuiZonefree(zone) {
  return (source) => new Observable((subscriber) => zone.runOutsideAngular(() => source.subscribe(subscriber)));
}
function tuiZoneOptimized(zone) {
  return pipe(tuiZonefree(zone), tuiZonefull(zone));
}

// node_modules/@tinkoff/ng-polymorpheus/fesm2015/tinkoff-ng-polymorpheus.js
var POLYMORPHEUS_CONTEXT = new InjectionToken("POLYMORPHEUS_CONTEXT");
var PolymorpheusComponent = class {
  constructor(component, i) {
    this.component = component;
    this.i = i;
  }
  createInjector(injector, useValue) {
    return Injector.create({
      parent: this.i || injector,
      providers: [{
        provide: POLYMORPHEUS_CONTEXT,
        useValue
      }]
    });
  }
};
var PolymorpheusTemplate = class {
  constructor(template, cdr) {
    this.template = template;
    this.cdr = cdr;
    this.polymorpheus = "";
  }
  check() {
    this.cdr.markForCheck();
  }
  static ngTemplateContextGuard(_dir, _ctx) {
    return true;
  }
};
PolymorpheusTemplate.ɵfac = function PolymorpheusTemplate_Factory(t) {
  return new (t || PolymorpheusTemplate)(ɵɵdirectiveInject(TemplateRef, 2), ɵɵdirectiveInject(ChangeDetectorRef));
};
PolymorpheusTemplate.ɵdir = ɵɵdefineDirective({
  type: PolymorpheusTemplate,
  selectors: [["ng-template", "polymorpheus", ""]],
  inputs: {
    polymorpheus: "polymorpheus"
  },
  exportAs: ["polymorpheus"]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PolymorpheusTemplate, [{
    type: Directive,
    args: [{
      selector: "ng-template[polymorpheus]",
      exportAs: "polymorpheus",
      inputs: ["polymorpheus"]
    }]
  }], function() {
    return [{
      type: TemplateRef,
      decorators: [{
        type: Self
      }]
    }, {
      type: ChangeDetectorRef
    }];
  }, null);
})();
var PolymorpheusContext = class {
  constructor($implicit) {
    this.$implicit = $implicit;
  }
  get polymorpheusOutlet() {
    return this.$implicit;
  }
};
var PolymorpheusOutletDirective = class {
  constructor(vcr, i, t) {
    this.vcr = vcr;
    this.i = i;
    this.t = t;
    this.content = "";
  }
  get template() {
    if (isDirective(this.content)) {
      return this.content.template;
    }
    return this.content instanceof TemplateRef ? this.content : this.t;
  }
  ngOnChanges({
    content
  }) {
    var _a;
    const context = this.getContext();
    (_a = this.c) === null || _a === void 0 ? void 0 : _a.injector.get(ChangeDetectorRef).markForCheck();
    if (!content) {
      return;
    }
    this.vcr.clear();
    const proxy = context && new Proxy(context, {
      get: (_, key) => {
        var _a2;
        return (_a2 = this.getContext()) === null || _a2 === void 0 ? void 0 : _a2[key];
      }
    });
    if (isComponent(this.content)) {
      this.process(this.content, proxy);
    } else if (
      // tslint:disable-next-line:triple-equals
      (context instanceof PolymorpheusContext && context.$implicit) != null
    ) {
      this.vcr.createEmbeddedView(this.template, proxy);
    }
  }
  ngDoCheck() {
    if (isDirective(this.content)) {
      this.content.check();
    }
  }
  static ngTemplateContextGuard(_dir, _ctx) {
    return true;
  }
  getContext() {
    if (isTemplate(this.content) || isComponent(this.content)) {
      return this.context;
    }
    return new PolymorpheusContext(typeof this.content === "function" ? this.content(this.context) : this.content);
  }
  process(content, proxy) {
    const injector = content.createInjector(this.i, proxy);
    this.c = this.vcr.createComponent(injector.get(ComponentFactoryResolver$1).resolveComponentFactory(content.component), 0, injector);
  }
};
PolymorpheusOutletDirective.ɵfac = function PolymorpheusOutletDirective_Factory(t) {
  return new (t || PolymorpheusOutletDirective)(ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(Injector), ɵɵdirectiveInject(TemplateRef));
};
PolymorpheusOutletDirective.ɵdir = ɵɵdefineDirective({
  type: PolymorpheusOutletDirective,
  selectors: [["", "polymorpheusOutlet", ""]],
  inputs: {
    content: ["polymorpheusOutlet", "content"],
    context: ["polymorpheusOutletContext", "context"]
  },
  features: [ɵɵNgOnChangesFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PolymorpheusOutletDirective, [{
    type: Directive,
    args: [{
      selector: "[polymorpheusOutlet]",
      inputs: ["content: polymorpheusOutlet", "context: polymorpheusOutletContext"]
    }]
  }], function() {
    return [{
      type: ViewContainerRef
    }, {
      type: Injector
    }, {
      type: TemplateRef
    }];
  }, null);
})();
function isDirective(content) {
  return content instanceof PolymorpheusTemplate;
}
function isComponent(content) {
  return content instanceof PolymorpheusComponent;
}
function isTemplate(content) {
  return isDirective(content) || content instanceof TemplateRef;
}
var PolymorpheusModule = class {
};
PolymorpheusModule.ɵfac = function PolymorpheusModule_Factory(t) {
  return new (t || PolymorpheusModule)();
};
PolymorpheusModule.ɵmod = ɵɵdefineNgModule({
  type: PolymorpheusModule,
  declarations: [PolymorpheusOutletDirective, PolymorpheusTemplate],
  exports: [PolymorpheusOutletDirective, PolymorpheusTemplate]
});
PolymorpheusModule.ɵinj = ɵɵdefineInjector({});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PolymorpheusModule, [{
    type: NgModule,
    args: [{
      declarations: [PolymorpheusOutletDirective, PolymorpheusTemplate],
      exports: [PolymorpheusOutletDirective, PolymorpheusTemplate]
    }]
  }], null, null);
})();

// node_modules/@ng-web-apis/common/fesm2015/ng-web-apis-common.js
var WINDOW = new InjectionToken("An abstraction over global window object", {
  factory: () => {
    const { defaultView } = inject(DOCUMENT);
    if (!defaultView) {
      throw new Error("Window is not available");
    }
    return defaultView;
  }
});
var ANIMATION_FRAME = new InjectionToken("Shared Observable based on `window.requestAnimationFrame`", {
  factory: () => {
    const { requestAnimationFrame, cancelAnimationFrame } = inject(WINDOW);
    const animationFrame$ = new Observable((subscriber) => {
      let id = NaN;
      const callback = (timestamp) => {
        subscriber.next(timestamp);
        id = requestAnimationFrame(callback);
      };
      id = requestAnimationFrame(callback);
      return () => {
        cancelAnimationFrame(id);
      };
    });
    return animationFrame$.pipe(share());
  }
});
var CACHES = new InjectionToken("An abstraction over window.caches object", {
  factory: () => inject(WINDOW).caches
});
var CRYPTO = new InjectionToken("An abstraction over window.crypto object", {
  factory: () => inject(WINDOW).crypto
});
var CSS2 = new InjectionToken("An abstraction over window.CSS object", {
  factory: () => inject(WINDOW).CSS || {
    escape: (v) => v,
    supports: () => false
  }
});
var HISTORY = new InjectionToken("An abstraction over window.history object", {
  factory: () => inject(WINDOW).history
});
var LOCAL_STORAGE = new InjectionToken("An abstraction over window.localStorage object", {
  factory: () => inject(WINDOW).localStorage
});
var LOCATION = new InjectionToken("An abstraction over window.location object", {
  factory: () => inject(WINDOW).location
});
var NAVIGATOR = new InjectionToken("An abstraction over window.navigator object", {
  factory: () => inject(WINDOW).navigator
});
var MEDIA_DEVICES = new InjectionToken("An abstraction over window.navigator.mediaDevices object", {
  factory: () => inject(NAVIGATOR).mediaDevices
});
var NETWORK_INFORMATION = new InjectionToken("An abstraction over window.navigator.connection object", {
  // @ts-ignore
  factory: () => inject(NAVIGATOR).connection || null
});
var PAGE_VISIBILITY = new InjectionToken("Shared Observable based on `document visibility changed`", {
  factory: () => {
    const documentRef = inject(DOCUMENT);
    return fromEvent(documentRef, "visibilitychange").pipe(startWith(0), map(() => documentRef.visibilityState !== "hidden"), distinctUntilChanged(), shareReplay({ refCount: false, bufferSize: 1 }));
  }
});
var PERFORMANCE = new InjectionToken("An abstraction over window.performance object", {
  factory: () => inject(WINDOW).performance
});
var SCREEN = new InjectionToken("An abstraction over window.screen object", {
  factory: () => inject(WINDOW).screen
});
var SESSION_STORAGE = new InjectionToken("An abstraction over window.sessionStorage object", {
  factory: () => inject(WINDOW).sessionStorage
});
var SPEECH_RECOGNITION = new InjectionToken("An abstraction over SpeechRecognition class", {
  factory: () => {
    const windowRef = inject(WINDOW);
    return windowRef.speechRecognition || windowRef.webkitSpeechRecognition || null;
  }
});
var SPEECH_SYNTHESIS = new InjectionToken("An abstraction over window.speechSynthesis object", {
  factory: () => inject(WINDOW).speechSynthesis
});
var USER_AGENT = new InjectionToken("An abstraction over window.navigator.userAgent object", {
  factory: () => inject(NAVIGATOR).userAgent
});

// node_modules/@ng-web-apis/resize-observer/fesm2015/ng-web-apis-resize-observer.js
var RESIZE_OPTION_BOX_DEFAULT = "content-box";
var RESIZE_OPTION_BOX = new InjectionToken("Box model to observe changes", {
  providedIn: "root",
  factory: () => RESIZE_OPTION_BOX_DEFAULT
});
var RESIZE_OBSERVER_SUPPORT = new InjectionToken("Resize Observer API support", {
  providedIn: "root",
  factory: () => !!inject(WINDOW).ResizeObserver
});
var ResizeObserverService = class extends Observable {
  constructor({
    nativeElement
  }, ngZone, support, box) {
    let observer;
    super((subscriber) => {
      if (!support) {
        subscriber.error("ResizeObserver is not supported in your browser");
        return;
      }
      observer = new ResizeObserver((entries) => {
        ngZone.run(() => {
          subscriber.next(entries);
        });
      });
      observer.observe(nativeElement, {
        box
      });
      return () => {
        observer.disconnect();
      };
    });
    return this.pipe(share());
  }
};
ResizeObserverService.ɵfac = function ResizeObserverService_Factory(t) {
  return new (t || ResizeObserverService)(ɵɵinject(ElementRef), ɵɵinject(NgZone), ɵɵinject(RESIZE_OBSERVER_SUPPORT), ɵɵinject(RESIZE_OPTION_BOX));
};
ResizeObserverService.ɵprov = ɵɵdefineInjectable({
  token: ResizeObserverService,
  factory: ResizeObserverService.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ResizeObserverService, [{
    type: Injectable
  }], function() {
    return [{
      type: ElementRef,
      decorators: [{
        type: Inject,
        args: [ElementRef]
      }]
    }, {
      type: NgZone,
      decorators: [{
        type: Inject,
        args: [NgZone]
      }]
    }, {
      type: void 0,
      decorators: [{
        type: Inject,
        args: [RESIZE_OBSERVER_SUPPORT]
      }]
    }, {
      type: void 0,
      decorators: [{
        type: Inject,
        args: [RESIZE_OPTION_BOX]
      }]
    }];
  }, null);
})();
function boxExtractor({
  nativeElement
}) {
  const attribute = nativeElement.getAttribute("waResizeBox");
  return boxFactory(attribute);
}
function boxFactory(box) {
  return box || RESIZE_OPTION_BOX_DEFAULT;
}
var ResizeObserverDirective = class {
  constructor(waResizeObserver, _box) {
    this.waResizeObserver = waResizeObserver;
  }
};
ResizeObserverDirective.ɵfac = function ResizeObserverDirective_Factory(t) {
  return new (t || ResizeObserverDirective)(ɵɵdirectiveInject(ResizeObserverService), ɵɵinjectAttribute("waResizeBox"));
};
ResizeObserverDirective.ɵdir = ɵɵdefineDirective({
  type: ResizeObserverDirective,
  selectors: [["", "waResizeObserver", ""]],
  outputs: {
    waResizeObserver: "waResizeObserver"
  },
  features: [ɵɵProvidersFeature([ResizeObserverService, {
    provide: RESIZE_OPTION_BOX,
    deps: [ElementRef],
    useFactory: boxExtractor
  }])]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ResizeObserverDirective, [{
    type: Directive,
    args: [{
      selector: "[waResizeObserver]",
      outputs: ["waResizeObserver"],
      providers: [ResizeObserverService, {
        provide: RESIZE_OPTION_BOX,
        deps: [ElementRef],
        useFactory: boxExtractor
      }]
    }]
  }], function() {
    return [{
      type: Observable,
      decorators: [{
        type: Inject,
        args: [ResizeObserverService]
      }]
    }, {
      type: void 0,
      decorators: [{
        type: Attribute,
        args: ["waResizeBox"]
      }]
    }];
  }, null);
})();
var ResizeObserverModule = class {
};
ResizeObserverModule.ɵfac = function ResizeObserverModule_Factory(t) {
  return new (t || ResizeObserverModule)();
};
ResizeObserverModule.ɵmod = ɵɵdefineNgModule({
  type: ResizeObserverModule,
  declarations: [ResizeObserverDirective],
  exports: [ResizeObserverDirective]
});
ResizeObserverModule.ɵinj = ɵɵdefineInjector({});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ResizeObserverModule, [{
    type: NgModule,
    args: [{
      declarations: [ResizeObserverDirective],
      exports: [ResizeObserverDirective]
    }]
  }], null, null);
})();

// node_modules/rxjs/dist/esm5/internal/observable/dom/fetch.js
function fromFetch(input, initWithSelector) {
  if (initWithSelector === void 0) {
    initWithSelector = {};
  }
  var selector = initWithSelector.selector, init = __rest(initWithSelector, ["selector"]);
  return new Observable(function(subscriber) {
    var controller = new AbortController();
    var signal = controller.signal;
    var abortable = true;
    var outerSignal = init.signal;
    if (outerSignal) {
      if (outerSignal.aborted) {
        controller.abort();
      } else {
        var outerSignalHandler_1 = function() {
          if (!signal.aborted) {
            controller.abort();
          }
        };
        outerSignal.addEventListener("abort", outerSignalHandler_1);
        subscriber.add(function() {
          return outerSignal.removeEventListener("abort", outerSignalHandler_1);
        });
      }
    }
    var perSubscriberInit = __assign(__assign({}, init), { signal });
    var handleError = function(err) {
      abortable = false;
      subscriber.error(err);
    };
    fetch(input, perSubscriberInit).then(function(response) {
      if (selector) {
        innerFrom(selector(response)).subscribe(createOperatorSubscriber(subscriber, void 0, function() {
          abortable = false;
          subscriber.complete();
        }, handleError));
      } else {
        abortable = false;
        subscriber.next(response);
        subscriber.complete();
      }
    }).catch(handleError);
    return function() {
      if (abortable) {
        controller.abort();
      }
    };
  });
}

// node_modules/@taiga-ui/cdk/fesm2015/taiga-ui-cdk-tokens.js
var TUI_REMOVED_ELEMENT = tuiCreateTokenFromFactory(() => {
  const stub = { onRemovalComplete: () => {
  } };
  const element$ = new BehaviorSubject(null);
  const engine = inject(AnimationEngine, InjectFlags.Optional) || stub;
  const { onRemovalComplete = stub.onRemovalComplete } = engine;
  engine.onRemovalComplete = (element, context) => {
    element$.next(element);
    onRemovalComplete.call(engine, element, context);
  };
  return element$.pipe(switchMap((element) => timer(0).pipe(map(() => null), startWith(element))), share());
});
function isValidFocusout(target, removedElement = null) {
  return (
    // Not due to switching tabs/going to DevTools
    tuiGetDocumentOrShadowRoot(target).activeElement !== target && // Not due to button/input becoming disabled or under disabled fieldset
    !target.matches(":disabled") && // Not due to element being removed from DOM
    !(removedElement === null || removedElement === void 0 ? void 0 : removedElement.contains(target))
  );
}
function shadowRootActiveElement(root) {
  return merge(tuiTypedFromEvent(root, "focusin").pipe(map(({ target }) => target)), tuiTypedFromEvent(root, "focusout").pipe(filter(({ target, relatedTarget }) => !!relatedTarget && isValidFocusout(target)), map(({ relatedTarget }) => relatedTarget)));
}
var TUI_ACTIVE_ELEMENT = tuiCreateTokenFromFactory(() => {
  const removedElement$ = inject(TUI_REMOVED_ELEMENT);
  const win = inject(WINDOW);
  const doc = inject(DOCUMENT);
  const focusout$ = tuiTypedFromEvent(win, "focusout");
  const focusin$ = tuiTypedFromEvent(win, "focusin");
  const blur$ = tuiTypedFromEvent(win, "blur");
  const mousedown$ = tuiTypedFromEvent(win, "mousedown");
  const mouseup$ = tuiTypedFromEvent(win, "mouseup");
  return merge(focusout$.pipe(
    // eslint-disable-next-line rxjs/no-unsafe-takeuntil
    takeUntil(mousedown$),
    /**
     * TODO: replace to
     * repeat({delay: () => mouseup$})
     * in RxJS 7
     */
    // eslint-disable-next-line rxjs/no-ignored-notifier
    repeatWhen(() => mouseup$),
    withLatestFrom(removedElement$),
    filter(([event, removedElement]) => isValidFocusout(tuiGetActualTarget(event), removedElement)),
    map(([{ relatedTarget }]) => relatedTarget)
  ), blur$.pipe(map(() => doc.activeElement), filter((element) => !!(element === null || element === void 0 ? void 0 : element.matches("iframe")))), focusin$.pipe(switchMap((event) => {
    const target = tuiGetActualTarget(event);
    const root = tuiGetDocumentOrShadowRoot(target);
    return root === doc ? of(target) : shadowRootActiveElement(root).pipe(startWith(target));
  })), mousedown$.pipe(switchMap((event) => {
    const actualTargetInCurrentTime = tuiGetActualTarget(event);
    return !doc.activeElement || doc.activeElement === doc.body ? of(actualTargetInCurrentTime) : focusout$.pipe(take(1), map(
      /**
       * Do not use `map(() => tuiGetActualTarget(event))`
       * because we have different result in runtime
       */
      () => actualTargetInCurrentTime
    ), takeUntil(timer(0)));
  }))).pipe(distinctUntilChanged(), share());
});
var TUI_ALERTS = tuiCreateToken([]);
function tuiAsAlerts(useExisting) {
  return {
    provide: TUI_ALERTS,
    multi: true,
    useExisting
  };
}
var TUI_BASE_HREF = tuiCreateTokenFromFactory(() => {
  var _a, _b;
  return (_b = (_a = inject(DOCUMENT).querySelector("base")) === null || _a === void 0 ? void 0 : _a.href) !== null && _b !== void 0 ? _b : "";
});
var TUI_DEFAULT_RENDERER = tuiCreateTokenFromFactory(
  // @ts-ignore
  () => inject(RendererFactory2).createRenderer(null, null)
);
var TUI_DIALOGS = tuiCreateToken([]);
function tuiAsDialog(useExisting) {
  return {
    provide: TUI_DIALOGS,
    multi: true,
    useExisting
  };
}
var TUI_ENSURE_BASE_HREF = tuiCreateTokenFromFactory(() => {
  var _a;
  const baseHref = (_a = inject(DOCUMENT).querySelector("base")) === null || _a === void 0 ? void 0 : _a.href;
  if (baseHref) {
    return baseHref;
  }
  const link = inject(DOCUMENT).createElement("a");
  link.href = "";
  return link.pathname;
});
var TUI_FOCUSABLE_ITEM_ACCESSOR = new InjectionToken("[TUI_FOCUSABLE_ITEM_ACCESSOR]");
function tuiAsFocusableItemAccessor(useExisting) {
  return {
    provide: TUI_FOCUSABLE_ITEM_ACCESSOR,
    useExisting
  };
}
var TUI_FONTS_READY = new InjectionToken("[TUI_FONTS_READY]", {
  factory: () => {
    var _a;
    return from(((_a = inject(DOCUMENT).fonts) === null || _a === void 0 ? void 0 : _a.ready) || EMPTY).pipe(shareReplay({ bufferSize: 1, refCount: false }));
  }
});
var TUI_IS_IOS = tuiCreateTokenFromFactory(() => tuiIsIos(inject(NAVIGATOR)));
var firstRegex = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/;
var secondRegex = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/;
var TUI_IS_MOBILE = tuiCreateTokenFromFactory(() => firstRegex.test(inject(USER_AGENT).toLowerCase()) || secondRegex.test(inject(USER_AGENT).slice(0, 4).toLowerCase()));
var TUI_IS_ANDROID = tuiCreateTokenFromFactory(() => inject(TUI_IS_MOBILE) && !inject(TUI_IS_IOS));
var TUI_IS_APPLE = tuiCreateTokenFromFactory(() => tuiIsApple(inject(NAVIGATOR)));
var TUI_IS_CHROMIUM = tuiCreateTokenFromFactory(() => !!inject(WINDOW).chrome);
var TUI_IS_CYPRESS = tuiCreateTokenFromFactory(() => !!inject(WINDOW).Cypress);
var TUI_IS_PLAYWRIGHT = tuiCreateTokenFromFactory(ALWAYS_FALSE_HANDLER);
var TUI_IS_E2E = tuiCreateTokenFromFactory(() => inject(TUI_IS_CYPRESS) || inject(TUI_IS_PLAYWRIGHT));
var TUI_IS_FIREFOX = tuiCreateTokenFromFactory(() => {
  var _a;
  return typeof ((_a = inject(WINDOW)) === null || _a === void 0 ? void 0 : _a.mozCancelFullScreen) !== "undefined";
});
var TUI_IS_STACKBLITZ = tuiCreateTokenFromFactory(() => inject(WINDOW).location.host.endsWith("stackblitz.io"));
var TUI_IS_WEBKIT = tuiCreateTokenFromFactory(() => {
  var _a;
  return !!((_a = inject(WINDOW)) === null || _a === void 0 ? void 0 : _a.webkitConvertPointFromNodeToPage);
});
var TUI_PLATFORM = tuiCreateToken("web");
function tuiPlatformFactory() {
  if (inject(TUI_IS_IOS)) {
    return "ios";
  }
  if (inject(TUI_IS_ANDROID)) {
    return "android";
  }
  return "web";
}
var TUI_RANGE = tuiCreateTokenFromFactory(() => isPlatformBrowser(inject(PLATFORM_ID)) ? new Range() : {});
var TUI_SCROLL_REF = tuiCreateTokenFromFactory(() => new ElementRef(inject(DOCUMENT).documentElement));
var TUI_SWIPE_OPTIONS = tuiCreateToken({
  timeout: 500,
  threshold: 30
});
var TUI_TAKE_ONLY_TRUSTED_EVENTS = tuiCreateTokenFromFactory(ALWAYS_TRUE_HANDLER);
var TUI_TOUCH_SUPPORTED = tuiCreateTokenFromFactory(() => inject(WINDOW).matchMedia("(any-pointer: coarse)").matches);
var TUI_WINDOW_SIZE = new InjectionToken("[TUI_WINDOW_SIZE]", {
  factory: () => {
    const w = inject(WINDOW);
    return tuiTypedFromEvent(w, "resize").pipe(startWith(null), map(() => {
      var _a, _b;
      const width = Math.max(w.document.documentElement.clientWidth || 0, w.innerWidth || 0, ((_a = w.visualViewport) === null || _a === void 0 ? void 0 : _a.width) || 0);
      const height = Math.max(w.document.documentElement.clientHeight || 0, w.innerHeight || 0, ((_b = w.visualViewport) === null || _b === void 0 ? void 0 : _b.height) || 0);
      return {
        width,
        height,
        top: 0,
        left: 0,
        right: width,
        bottom: height
      };
    }), shareReplay({ bufferSize: 1, refCount: true }));
  }
});
var TUI_WINDOW_HEIGHT = tuiCreateTokenFromFactory(() => inject(TUI_WINDOW_SIZE).pipe(map(({ height }) => height)));
var TUI_ZOOM_OPTIONS = tuiCreateToken({
  wheelSensitivity: 0.01
});

// node_modules/@taiga-ui/cdk/fesm2015/taiga-ui-cdk-services.js
var TuiDestroyService = class extends ReplaySubject {
  constructor() {
    super(1);
  }
  ngOnDestroy() {
    this.next();
    this.complete();
  }
};
TuiDestroyService.ɵfac = function TuiDestroyService_Factory(t) {
  return new (t || TuiDestroyService)();
};
TuiDestroyService.ɵprov = ɵɵdefineInjectable({
  token: TuiDestroyService,
  factory: TuiDestroyService.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDestroyService, [{
    type: Injectable
  }], function() {
    return [];
  }, null);
})();
var TuiDirectiveStylesService = class {
  constructor(resolver, injector) {
    this.resolver = resolver;
    this.injector = injector;
    this.map = /* @__PURE__ */ new Map();
  }
  addComponent(component) {
    if (!this.map.has(component)) {
      this.map.set(component, this.resolver.resolveComponentFactory(component).create(this.injector));
    }
  }
  ngOnDestroy() {
    this.map.forEach((value) => value.destroy());
  }
};
TuiDirectiveStylesService.ɵfac = function TuiDirectiveStylesService_Factory(t) {
  return new (t || TuiDirectiveStylesService)(ɵɵinject(ComponentFactoryResolver$1), ɵɵinject(INJECTOR));
};
TuiDirectiveStylesService.ɵprov = ɵɵdefineInjectable({
  token: TuiDirectiveStylesService,
  factory: TuiDirectiveStylesService.ɵfac,
  providedIn: "root"
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDirectiveStylesService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], function() {
    return [{
      type: ComponentFactoryResolver$1,
      decorators: [{
        type: Inject,
        args: [ComponentFactoryResolver$1]
      }]
    }, {
      type: Injector,
      decorators: [{
        type: Inject,
        args: [INJECTOR]
      }]
    }];
  }, null);
})();
var TuiFocusVisibleService = class extends Observable {
  constructor({
    nativeElement
  }, cdr, destroy$) {
    super((subscriber) => this.focusVisible$.subscribe(subscriber));
    this.focusVisible$ = tuiFocusVisibleObservable(nativeElement).pipe(tuiWatch(cdr), takeUntil(destroy$));
  }
};
TuiFocusVisibleService.ɵfac = function TuiFocusVisibleService_Factory(t) {
  return new (t || TuiFocusVisibleService)(ɵɵinject(ElementRef), ɵɵinject(ChangeDetectorRef), ɵɵinject(TuiDestroyService, 2));
};
TuiFocusVisibleService.ɵprov = ɵɵdefineInjectable({
  token: TuiFocusVisibleService,
  factory: TuiFocusVisibleService.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiFocusVisibleService, [{
    type: Injectable
  }], function() {
    return [{
      type: ElementRef,
      decorators: [{
        type: Inject,
        args: [ElementRef]
      }]
    }, {
      type: ChangeDetectorRef,
      decorators: [{
        type: Inject,
        args: [ChangeDetectorRef]
      }]
    }, {
      type: Observable,
      decorators: [{
        type: Self
      }, {
        type: Inject,
        args: [TuiDestroyService]
      }]
    }];
  }, null);
})();
var TUI = "tui_";
var TuiIdService = class _TuiIdService {
  generate() {
    return `${TUI}${_TuiIdService.autoId++}${Date.now()}`;
  }
};
TuiIdService.autoId = 0;
TuiIdService.ɵfac = function TuiIdService_Factory(t) {
  return new (t || TuiIdService)();
};
TuiIdService.ɵprov = ɵɵdefineInjectable({
  token: TuiIdService,
  factory: TuiIdService.ɵfac,
  providedIn: "root"
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiIdService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var TuiParentsScrollService = class extends Observable {
  constructor(el, win) {
    super((subscriber) => this.callback$.subscribe(subscriber));
    this.callback$ = defer(() => {
      let {
        nativeElement
      } = el;
      const eventTargets = [win, nativeElement];
      while (nativeElement.parentElement) {
        nativeElement = nativeElement.parentElement;
        eventTargets.push(nativeElement);
      }
      return merge(...eventTargets.map((element) => tuiTypedFromEvent(element, "scroll")));
    });
  }
};
TuiParentsScrollService.ɵfac = function TuiParentsScrollService_Factory(t) {
  return new (t || TuiParentsScrollService)(ɵɵinject(ElementRef), ɵɵinject(WINDOW));
};
TuiParentsScrollService.ɵprov = ɵɵdefineInjectable({
  token: TuiParentsScrollService,
  factory: TuiParentsScrollService.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiParentsScrollService, [{
    type: Injectable
  }], function() {
    return [{
      type: ElementRef,
      decorators: [{
        type: Inject,
        args: [ElementRef]
      }]
    }, {
      type: Window,
      decorators: [{
        type: Inject,
        args: [WINDOW]
      }]
    }];
  }, null);
})();
var TuiObscuredService = class extends Observable {
  constructor(parentsScroll$, {
    nativeElement
  }, zone, win, destroy$, animationFrame$) {
    super((subscriber) => this.obscured$.subscribe(subscriber));
    this.obscured$ = merge(
      // delay is added so it will not interfere with other listeners
      merge(parentsScroll$, fromEvent(win, "resize")).pipe(delay(0)),
      animationFrame$.pipe(throttleTime(POLLING_TIME))
    ).pipe(map(() => tuiGetElementObscures(nativeElement)), startWith(null), distinctUntilChanged(), tuiZoneOptimized(zone), takeUntil(destroy$));
  }
};
TuiObscuredService.ɵfac = function TuiObscuredService_Factory(t) {
  return new (t || TuiObscuredService)(ɵɵinject(TuiParentsScrollService, 2), ɵɵinject(ElementRef), ɵɵinject(NgZone), ɵɵinject(WINDOW), ɵɵinject(TuiDestroyService, 2), ɵɵinject(ANIMATION_FRAME));
};
TuiObscuredService.ɵprov = ɵɵdefineInjectable({
  token: TuiObscuredService,
  factory: TuiObscuredService.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiObscuredService, [{
    type: Injectable
  }], function() {
    return [{
      type: TuiParentsScrollService,
      decorators: [{
        type: Inject,
        args: [TuiParentsScrollService]
      }, {
        type: Self
      }]
    }, {
      type: ElementRef,
      decorators: [{
        type: Inject,
        args: [ElementRef]
      }]
    }, {
      type: NgZone,
      decorators: [{
        type: Inject,
        args: [NgZone]
      }]
    }, {
      type: Window,
      decorators: [{
        type: Inject,
        args: [WINDOW]
      }]
    }, {
      type: Observable,
      decorators: [{
        type: Self
      }, {
        type: Inject,
        args: [TuiDestroyService]
      }]
    }, {
      type: Observable,
      decorators: [{
        type: Inject,
        args: [ANIMATION_FRAME]
      }]
    }];
  }, null);
})();
var TuiPanService = class extends Observable {
  constructor({
    nativeElement
  }, doc) {
    super((subscriber) => {
      merge(tuiTypedFromEvent(nativeElement, "touchstart", {
        passive: true
      }), tuiTypedFromEvent(nativeElement, "mousedown")).pipe(
        switchMap(() => merge(tuiTypedFromEvent(doc, "touchmove", {
          passive: true
        }).pipe(filter(({
          touches
        }) => touches.length < 2), map(({
          touches
        }) => touches[0])), tuiTypedFromEvent(doc, "mousemove"))),
        pairwise(),
        map(([first, second]) => {
          const deltaX = second.clientX - first.clientX;
          const deltaY = second.clientY - first.clientY;
          return [deltaX, deltaY];
        }),
        // eslint-disable-next-line rxjs/no-unsafe-takeuntil
        takeUntil(merge(tuiTypedFromEvent(doc, "touchend"), tuiTypedFromEvent(doc, "mouseup"))),
        repeat()
      ).subscribe(subscriber);
    });
  }
};
TuiPanService.ɵfac = function TuiPanService_Factory(t) {
  return new (t || TuiPanService)(ɵɵinject(ElementRef), ɵɵinject(DOCUMENT));
};
TuiPanService.ɵprov = ɵɵdefineInjectable({
  token: TuiPanService,
  factory: TuiPanService.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiPanService, [{
    type: Injectable
  }], function() {
    return [{
      type: ElementRef,
      decorators: [{
        type: Inject,
        args: [ElementRef]
      }]
    }, {
      type: Document,
      decorators: [{
        type: Inject,
        args: [DOCUMENT]
      }]
    }];
  }, null);
})();
var TuiResizeService = class extends ResizeObserverService {
  constructor(el, zone, destroy$, support, box, animationFrame$) {
    super(el, zone, support, box);
    return this.pipe(catchError(() => (
      /**
       * @note: if not supported ResizeObserver
       * remove `catchError` after supports modern browsers
       */
      animationFrame$.pipe(throttleTime(POLLING_TIME), map(() => `${el.nativeElement.clientWidth} ${el.nativeElement.clientHeight}`), distinctUntilChanged(), map(() => EMPTY_ARRAY))
    )), debounceTime(0), tuiZonefree(zone), share(), takeUntil(destroy$));
  }
};
TuiResizeService.ɵfac = function TuiResizeService_Factory(t) {
  return new (t || TuiResizeService)(ɵɵinject(ElementRef), ɵɵinject(NgZone), ɵɵinject(TuiDestroyService, 2), ɵɵinject(RESIZE_OBSERVER_SUPPORT), ɵɵinject(RESIZE_OPTION_BOX), ɵɵinject(ANIMATION_FRAME));
};
TuiResizeService.ɵprov = ɵɵdefineInjectable({
  token: TuiResizeService,
  factory: TuiResizeService.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiResizeService, [{
    type: Injectable
  }], function() {
    return [{
      type: ElementRef,
      decorators: [{
        type: Inject,
        args: [ElementRef]
      }]
    }, {
      type: NgZone,
      decorators: [{
        type: Inject,
        args: [NgZone]
      }]
    }, {
      type: Observable,
      decorators: [{
        type: Self
      }, {
        type: Inject,
        args: [TuiDestroyService]
      }]
    }, {
      type: void 0,
      decorators: [{
        type: Inject,
        args: [RESIZE_OBSERVER_SUPPORT]
      }]
    }, {
      type: void 0,
      decorators: [{
        type: Inject,
        args: [RESIZE_OPTION_BOX]
      }]
    }, {
      type: Observable,
      decorators: [{
        type: Inject,
        args: [ANIMATION_FRAME]
      }]
    }];
  }, null);
})();
var SCROLL_TIME = 300;
function getX(elementOrWindow) {
  return "scrollX" in elementOrWindow ? elementOrWindow.scrollX : elementOrWindow.scrollLeft;
}
function getY(elementOrWindow) {
  return "scrollY" in elementOrWindow ? elementOrWindow.scrollY : elementOrWindow.scrollTop;
}
var TuiScrollService = class {
  constructor(performanceRef, animationFrame$) {
    this.performanceRef = performanceRef;
    this.animationFrame$ = animationFrame$;
  }
  scroll$(elementOrWindow, scrollTop, scrollLeft = getX(elementOrWindow), duration = SCROLL_TIME) {
    ngDevMode && tuiAssert.assert(duration >= 0, "Duration cannot be negative");
    ngDevMode && tuiAssert.assert(scrollTop >= 0, "scrollTop cannot be negative");
    ngDevMode && tuiAssert.assert(scrollLeft >= 0, "scrollLeft cannot be negative");
    const initialTop = getY(elementOrWindow);
    const initialLeft = getX(elementOrWindow);
    const deltaTop = scrollTop - initialTop;
    const deltaLeft = scrollLeft - initialLeft;
    const observable = !duration ? of([scrollTop, scrollLeft]) : defer(() => of(this.performanceRef.now())).pipe(switchMap((start) => this.animationFrame$.pipe(map((now) => now - start))), map((elapsed) => tuiEaseInOutQuad(tuiClamp(elapsed / duration, 0, 1))), map((percent) => [initialTop + deltaTop * percent, initialLeft + deltaLeft * percent]), endWith([scrollTop, scrollLeft]), takeUntil(timer(duration)));
    return observable.pipe(tap(([scrollTop2, scrollLeft2]) => {
      var _a;
      (_a = elementOrWindow.scrollTo) === null || _a === void 0 ? void 0 : _a.call(elementOrWindow, scrollLeft2, scrollTop2);
    }));
  }
};
TuiScrollService.ɵfac = function TuiScrollService_Factory(t) {
  return new (t || TuiScrollService)(ɵɵinject(PERFORMANCE), ɵɵinject(ANIMATION_FRAME));
};
TuiScrollService.ɵprov = ɵɵdefineInjectable({
  token: TuiScrollService,
  factory: TuiScrollService.ɵfac,
  providedIn: "root"
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiScrollService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], function() {
    return [{
      type: Performance,
      decorators: [{
        type: Inject,
        args: [PERFORMANCE]
      }]
    }, {
      type: Observable,
      decorators: [{
        type: Inject,
        args: [ANIMATION_FRAME]
      }]
    }];
  }, null);
})();
var TuiStaticRequestService = class {
  constructor(win, platformId) {
    this.win = win;
    this.platformId = platformId;
    this.cache = /* @__PURE__ */ new Map();
  }
  request(url) {
    const cache = this.cache.get(url);
    if (cache) {
      return cache;
    }
    const response$ = "AbortController" in this.win || isPlatformServer(this.platformId) ? fromFetch(url) : (
      /**
       * Fallback for Firefox 55 and 56
       * TODO: drop after browser support bump
       */
      defer(() => from(fetch(url)))
    );
    const piped = response$.pipe(switchMap((response) => __awaiter(this, void 0, void 0, function* () {
      if (response.ok) {
        return response.text();
      }
      throw new Error(`Failed to load ${url} (${response.statusText})`);
    })), shareReplay({
      bufferSize: 1,
      refCount: false
    }));
    this.cache.set(url, piped);
    return piped;
  }
};
TuiStaticRequestService.ɵfac = function TuiStaticRequestService_Factory(t) {
  return new (t || TuiStaticRequestService)(ɵɵinject(WINDOW), ɵɵinject(PLATFORM_ID));
};
TuiStaticRequestService.ɵprov = ɵɵdefineInjectable({
  token: TuiStaticRequestService,
  factory: TuiStaticRequestService.ɵfac,
  providedIn: "root"
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiStaticRequestService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], function() {
    return [{
      type: Window,
      decorators: [{
        type: Inject,
        args: [WINDOW]
      }]
    }, {
      type: void 0,
      decorators: [{
        type: Inject,
        args: [PLATFORM_ID]
      }]
    }];
  }, null);
})();
var TuiSwipeService = class extends Observable {
  constructor({
    nativeElement
  }, {
    timeout,
    threshold
  }, doc) {
    super((subscriber) => {
      merge(tuiTypedFromEvent(nativeElement, "touchstart", {
        passive: true
      }), tuiTypedFromEvent(doc, "touchend")).pipe(pairwise(), filter(([first, second]) => !!first.touches.length && first.touches[0].identifier === second.changedTouches[0].identifier), map(([start, end]) => {
        const startX = start.touches[0].clientX;
        const startY = start.touches[0].clientY;
        const endX = end.changedTouches[0].clientX;
        const endY = end.changedTouches[0].clientY;
        const distanceX = startX - endX;
        const distanceY = startY - endY;
        const duration = end.timeStamp - start.timeStamp;
        if ((Math.abs(distanceX) > threshold || Math.abs(distanceY) > threshold) && duration < timeout) {
          return {
            direction: tuiGetSwipeDirection(distanceX, distanceY),
            events: [start, end]
          };
        }
        return null;
      }), filter(tuiIsPresent)).subscribe(subscriber);
    });
  }
};
TuiSwipeService.ɵfac = function TuiSwipeService_Factory(t) {
  return new (t || TuiSwipeService)(ɵɵinject(ElementRef), ɵɵinject(TUI_SWIPE_OPTIONS), ɵɵinject(DOCUMENT));
};
TuiSwipeService.ɵprov = ɵɵdefineInjectable({
  token: TuiSwipeService,
  factory: TuiSwipeService.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiSwipeService, [{
    type: Injectable
  }], function() {
    return [{
      type: ElementRef,
      decorators: [{
        type: Inject,
        args: [ElementRef]
      }]
    }, {
      type: void 0,
      decorators: [{
        type: Inject,
        args: [TUI_SWIPE_OPTIONS]
      }]
    }, {
      type: Document,
      decorators: [{
        type: Inject,
        args: [DOCUMENT]
      }]
    }];
  }, null);
})();
var TOUCH_SENSITIVITY = 0.01;
var TuiZoomService = class extends Observable {
  constructor({
    nativeElement
  }, {
    wheelSensitivity
  }) {
    super((subscriber) => {
      merge(tuiTypedFromEvent(nativeElement, "touchstart", {
        passive: true
      }).pipe(filter(({
        touches
      }) => touches.length > 1), switchMap((startEvent) => tuiTypedFromEvent(nativeElement, "touchmove", {
        passive: true
      }).pipe(tuiPreventDefault(), scan((prev, event) => {
        const distance = tuiDistanceBetweenTouches(event);
        return {
          event,
          distance,
          delta: (distance - prev.distance) * TOUCH_SENSITIVITY
        };
      }, {
        event: startEvent,
        distance: tuiDistanceBetweenTouches(startEvent),
        delta: 0
      }), map(({
        event,
        delta
      }) => {
        const clientX = (event.touches[0].clientX + event.touches[1].clientX) / 2;
        const clientY = (event.touches[0].clientY + event.touches[1].clientY) / 2;
        return {
          clientX,
          clientY,
          delta,
          event
        };
      }), takeUntil(tuiTypedFromEvent(nativeElement, "touchend"))))), tuiTypedFromEvent(nativeElement, "wheel", {
        passive: false
      }).pipe(tuiPreventDefault(), map((wheel) => ({
        clientX: wheel.clientX,
        clientY: wheel.clientY,
        delta: -wheel.deltaY * wheelSensitivity,
        event: wheel
      })))).subscribe(subscriber);
    });
  }
};
TuiZoomService.ɵfac = function TuiZoomService_Factory(t) {
  return new (t || TuiZoomService)(ɵɵinject(ElementRef), ɵɵinject(TUI_ZOOM_OPTIONS));
};
TuiZoomService.ɵprov = ɵɵdefineInjectable({
  token: TuiZoomService,
  factory: TuiZoomService.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiZoomService, [{
    type: Injectable
  }], function() {
    return [{
      type: ElementRef,
      decorators: [{
        type: Inject,
        args: [ElementRef]
      }]
    }, {
      type: void 0,
      decorators: [{
        type: Inject,
        args: [TUI_ZOOM_OPTIONS]
      }]
    }];
  }, null);
})();

// node_modules/@taiga-ui/cdk/fesm2015/taiga-ui-cdk-abstract.js
var _c0 = ["viewContainer"];
var TUI2 = "tui_interactive_";
var AbstractTuiInteractive = class _AbstractTuiInteractive {
  constructor() {
    this.pseudoHover = null;
    this.pseudoActive = null;
    this.pseudoFocus = null;
    this.focusable = true;
    this.nativeId = "";
    this.focusedChange = new EventEmitter();
    this.focusVisibleChange = new EventEmitter();
    this.focusVisible = false;
    this.autoIdString = `${TUI2}${_AbstractTuiInteractive.autoId++}${Date.now()}`;
  }
  get computedDisabled() {
    return this.disabled;
  }
  get computedFocusable() {
    return !this.computedDisabled && (this.focusable || this.focused);
  }
  get computedFocused() {
    var _a;
    return !this.computedDisabled && ((_a = this.pseudoFocus) !== null && _a !== void 0 ? _a : this.focused);
  }
  get computedFocusVisible() {
    var _a;
    return !this.computedDisabled && ((_a = this.pseudoFocus) !== null && _a !== void 0 ? _a : this.focusVisible);
  }
  // TODO: 3.0 Consider removing since native input is exposed
  get id() {
    return this.nativeId || this.autoIdString;
  }
  updateFocused(focused) {
    this.focusedChange.emit(focused);
  }
  updateFocusVisible(focusVisible) {
    if (this.focusVisible === focusVisible) {
      return;
    }
    this.focusVisible = focusVisible;
    this.focusVisibleChange.emit(focusVisible);
  }
};
AbstractTuiInteractive.autoId = 0;
AbstractTuiInteractive.ɵfac = function AbstractTuiInteractive_Factory(t) {
  return new (t || AbstractTuiInteractive)();
};
AbstractTuiInteractive.ɵdir = ɵɵdefineDirective({
  type: AbstractTuiInteractive,
  hostVars: 7,
  hostBindings: function AbstractTuiInteractive_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("data-focused", ctx.pseudoFocus);
      ɵɵclassProp("_disabled", ctx.computedDisabled)("_focused", ctx.computedFocused)("_focus-visible", ctx.computedFocusVisible);
    }
  },
  inputs: {
    pseudoHover: "pseudoHover",
    pseudoActive: "pseudoActive",
    pseudoFocus: "pseudoFocus",
    focusable: "focusable",
    nativeId: "nativeId"
  },
  outputs: {
    focusedChange: "focusedChange",
    focusVisibleChange: "focusVisibleChange"
  }
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AbstractTuiInteractive, [{
    type: Directive
  }], function() {
    return [];
  }, {
    pseudoHover: [{
      type: Input
    }],
    pseudoActive: [{
      type: Input
    }],
    pseudoFocus: [{
      type: Input
    }, {
      type: HostBinding,
      args: ["attr.data-focused"]
    }],
    focusable: [{
      type: Input
    }],
    nativeId: [{
      type: Input
    }],
    focusedChange: [{
      type: Output
    }],
    focusVisibleChange: [{
      type: Output
    }],
    computedDisabled: [{
      type: HostBinding,
      args: ["class._disabled"]
    }],
    computedFocused: [{
      type: HostBinding,
      args: ["class._focused"]
    }],
    computedFocusVisible: [{
      type: HostBinding,
      args: ["class._focus-visible"]
    }]
  });
})();
var AbstractTuiValueTransformer = class {
};
var AbstractTuiControl = class extends AbstractTuiInteractive {
  constructor(ngControl, cdr, valueTransformer) {
    super();
    this.ngControl = ngControl;
    this.cdr = cdr;
    this.valueTransformer = valueTransformer;
    this.refresh$ = new Subject();
    this.onTouched = EMPTY_FUNCTION;
    this.onChange = EMPTY_FUNCTION;
    this.fallbackValue = this.getFallbackValue();
    this.destroy$ = new Subject();
    this.readOnly = false;
    this.pseudoInvalid = null;
    if (ngDevMode && this.ngControl === null) {
      tuiAssert.assert(false, `NgControl not injected in ${this.constructor.name}!
`, "Use [(ngModel)] or [formControl] or formControlName for correct work.");
    }
    if (this.ngControl) {
      this.ngControl.valueAccessor = this;
    }
  }
  get computedInvalid() {
    return this.interactive && (this.pseudoInvalid !== null ? this.pseudoInvalid : this.touched && this.invalid);
  }
  get value() {
    var _a;
    return (_a = this.previousInternalValue) !== null && _a !== void 0 ? _a : this.fallbackValue;
  }
  set value(value) {
    this.updateValue(value);
  }
  get safeCurrentValue() {
    var _a;
    return (_a = this.rawValue) !== null && _a !== void 0 ? _a : this.fallbackValue;
  }
  get invalid() {
    return this.safeNgControlData(({
      invalid
    }) => invalid, false);
  }
  get valid() {
    return this.safeNgControlData(({
      valid
    }) => valid, false);
  }
  get touched() {
    return this.safeNgControlData(({
      touched
    }) => touched, false);
  }
  get disabled() {
    return this.safeNgControlData(({
      disabled
    }) => disabled, false);
  }
  get interactive() {
    return !this.readOnly && !this.computedDisabled;
  }
  get control() {
    return this.safeNgControlData(({
      control
    }) => control, null);
  }
  get computedName() {
    var _a, _b;
    return (_b = (_a = this.controlName) === null || _a === void 0 ? void 0 : _a.toString()) !== null && _b !== void 0 ? _b : null;
  }
  get controlName() {
    var _a, _b, _c;
    return (_c = (_b = (_a = this.ngControl) === null || _a === void 0 ? void 0 : _a.name) === null || _b === void 0 ? void 0 : _b.toString()) !== null && _c !== void 0 ? _c : null;
  }
  get rawValue() {
    const {
      ngControl
    } = this;
    if (ngControl === null) {
      return void 0;
    }
    const controlValue = ngControl instanceof NgModel && this.previousInternalValue === void 0 ? ngControl.viewModel : ngControl.value;
    return this.fromControlValue(controlValue);
  }
  ngOnInit() {
    this.refresh$.pipe(delay(0), startWith(null), map(() => {
      var _a;
      return (_a = this.ngControl) === null || _a === void 0 ? void 0 : _a.control;
    }), filter(tuiIsPresent), distinctUntilChanged(), switchMap((control) => merge(control.valueChanges, control.statusChanges)), takeUntil(this.destroy$)).subscribe(() => {
      this.refreshLocalValue(this.safeCurrentValue);
    });
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  checkControlUpdate() {
    this.cdr.markForCheck();
  }
  registerOnChange(onChange) {
    this.onChange = (componentValue) => {
      onChange(this.toControlValue(componentValue));
    };
    this.refresh$.next();
  }
  registerOnTouched(onTouched) {
    this.onTouched = onTouched;
  }
  setDisabledState() {
    this.checkControlUpdate();
  }
  writeValue(value) {
    const controlValue = this.ngControl instanceof NgModel && this.previousInternalValue === void 0 ? this.ngControl.model : value;
    this.refreshLocalValue(this.fromControlValue(controlValue));
  }
  updateFocused(focused) {
    if (!focused) {
      this.controlMarkAsTouched();
    }
    super.updateFocused(focused);
  }
  /**
   * @deprecated use `value` setter
   */
  updateValue(value) {
    if (this.disabled || this.valueIdenticalComparator(this.value, value)) {
      return;
    }
    this.previousInternalValue = value;
    this.controlSetValue(value);
  }
  valueIdenticalComparator(oldValue, newValue) {
    return oldValue === newValue;
  }
  safeNgControlData(extractor, defaultFieldValue) {
    var _a;
    return (_a = this.ngControl && extractor(this.ngControl)) !== null && _a !== void 0 ? _a : defaultFieldValue;
  }
  controlMarkAsTouched() {
    this.onTouched();
    this.checkControlUpdate();
  }
  controlSetValue(value) {
    this.onChange(value);
    this.checkControlUpdate();
  }
  refreshLocalValue(value) {
    this.previousInternalValue = value;
    this.checkControlUpdate();
  }
  fromControlValue(controlValue) {
    return this.valueTransformer ? this.valueTransformer.fromControlValue(controlValue) : controlValue;
  }
  toControlValue(componentValue) {
    return this.valueTransformer ? this.valueTransformer.toControlValue(componentValue) : componentValue;
  }
};
AbstractTuiControl.ɵfac = function AbstractTuiControl_Factory(t) {
  return new (t || AbstractTuiControl)(ɵɵdirectiveInject(NgControl, 8), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(AbstractTuiValueTransformer, 8));
};
AbstractTuiControl.ɵdir = ɵɵdefineDirective({
  type: AbstractTuiControl,
  hostVars: 4,
  hostBindings: function AbstractTuiControl_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("_readonly", ctx.readOnly)("_invalid", ctx.computedInvalid);
    }
  },
  inputs: {
    readOnly: "readOnly",
    pseudoInvalid: "pseudoInvalid"
  },
  features: [ɵɵInheritDefinitionFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AbstractTuiControl, [{
    type: Directive
  }], function() {
    return [{
      type: NgControl,
      decorators: [{
        type: Optional
      }]
    }, {
      type: ChangeDetectorRef
    }, {
      type: void 0,
      decorators: [{
        type: Optional
      }, {
        type: Inject,
        args: [AbstractTuiValueTransformer]
      }]
    }];
  }, {
    readOnly: [{
      type: Input
    }, {
      type: HostBinding,
      args: ["class._readonly"]
    }],
    pseudoInvalid: [{
      type: Input
    }],
    computedInvalid: [{
      type: HostBinding,
      args: ["class._invalid"]
    }]
  });
})();
var AbstractTuiController = class {
  constructor() {
    this.change$ = new Subject();
  }
  ngOnChanges() {
    this.change$.next();
  }
};
AbstractTuiController.ɵfac = function AbstractTuiController_Factory(t) {
  return new (t || AbstractTuiController)();
};
AbstractTuiController.ɵdir = ɵɵdefineDirective({
  type: AbstractTuiController,
  features: [ɵɵNgOnChangesFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AbstractTuiController, [{
    type: Directive
  }], null, null);
})();
var AbstractTuiDialogService = class extends Observable {
  constructor(idService) {
    super((observer) => this.dialogs$.subscribe(observer));
    this.idService = idService;
    this.dialogs$ = new BehaviorSubject([]);
  }
  open(content, options = {}) {
    return new Observable((observer) => {
      const completeWith = (result) => {
        observer.next(result);
        observer.complete();
      };
      const dialog = Object.assign(Object.assign(Object.assign({}, this.defaultOptions), options), {
        content,
        completeWith,
        $implicit: observer,
        component: this.component,
        createdAt: Date.now(),
        id: this.idService.generate()
      });
      this.dialogs$.next([...this.dialogs$.value, dialog]);
      return () => {
        this.dialogs$.next(this.dialogs$.value.filter((item) => item !== dialog));
      };
    });
  }
};
AbstractTuiDialogService.ɵfac = function AbstractTuiDialogService_Factory(t) {
  return new (t || AbstractTuiDialogService)(ɵɵinject(TuiIdService));
};
AbstractTuiDialogService.ɵprov = ɵɵdefineInjectable({
  token: AbstractTuiDialogService,
  factory: AbstractTuiDialogService.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AbstractTuiDialogService, [{
    type: Injectable
  }], function() {
    return [{
      type: TuiIdService,
      decorators: [{
        type: Inject,
        args: [TuiIdService]
      }]
    }];
  }, null);
})();
var AbstractTuiDialogDirective = class extends PolymorpheusTemplate {
  constructor(templateRef, cdr, service) {
    super(templateRef, cdr);
    this.service = service;
    this.open$ = new Subject();
    this.options = {};
    this.open = false;
    this.openChange = this.open$.pipe(distinctUntilChanged(), tuiIfMap(() => this.service.open(this, this.options).pipe(ignoreElements(), endWith(false))), share());
  }
  ngOnChanges() {
    this.open$.next(this.open);
  }
};
AbstractTuiDialogDirective.ɵfac = function AbstractTuiDialogDirective_Factory(t) {
  return new (t || AbstractTuiDialogDirective)(ɵɵdirectiveInject(TemplateRef), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(AbstractTuiDialogService));
};
AbstractTuiDialogDirective.ɵdir = ɵɵdefineDirective({
  type: AbstractTuiDialogDirective,
  features: [ɵɵInheritDefinitionFeature, ɵɵNgOnChangesFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AbstractTuiDialogDirective, [{
    type: Directive
  }], function() {
    return [{
      type: TemplateRef,
      decorators: [{
        type: Inject,
        args: [TemplateRef]
      }]
    }, {
      type: ChangeDetectorRef,
      decorators: [{
        type: Inject,
        args: [ChangeDetectorRef]
      }]
    }, {
      type: AbstractTuiDialogService,
      decorators: [{
        type: Inject,
        args: [AbstractTuiDialogService]
      }]
    }];
  }, null);
})();
var AbstractTuiMultipleControl = class extends AbstractTuiControl {
  clear() {
    this.value = [];
  }
  getFallbackValue() {
    return [];
  }
};
AbstractTuiMultipleControl.ɵfac = (() => {
  let ɵAbstractTuiMultipleControl_BaseFactory;
  return function AbstractTuiMultipleControl_Factory(t) {
    return (ɵAbstractTuiMultipleControl_BaseFactory || (ɵAbstractTuiMultipleControl_BaseFactory = ɵɵgetInheritedFactory(AbstractTuiMultipleControl)))(t || AbstractTuiMultipleControl);
  };
})();
AbstractTuiMultipleControl.ɵdir = ɵɵdefineDirective({
  type: AbstractTuiMultipleControl,
  features: [ɵɵInheritDefinitionFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AbstractTuiMultipleControl, [{
    type: Directive
  }], null, null);
})();
var AbstractTuiNullableControl = class extends AbstractTuiControl {
  getFallbackValue() {
    return null;
  }
};
AbstractTuiNullableControl.ɵfac = (() => {
  let ɵAbstractTuiNullableControl_BaseFactory;
  return function AbstractTuiNullableControl_Factory(t) {
    return (ɵAbstractTuiNullableControl_BaseFactory || (ɵAbstractTuiNullableControl_BaseFactory = ɵɵgetInheritedFactory(AbstractTuiNullableControl)))(t || AbstractTuiNullableControl);
  };
})();
AbstractTuiNullableControl.ɵdir = ɵɵdefineDirective({
  type: AbstractTuiNullableControl,
  features: [ɵɵInheritDefinitionFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AbstractTuiNullableControl, [{
    type: Directive
  }], null, null);
})();
var AbstractTuiPortalService = class {
  get safeHost() {
    if (!this.host) {
      throw new TuiNoHostException();
    }
    return this.host;
  }
  attach(host) {
    this.host = host;
  }
  add(component) {
    return this.safeHost.addComponentChild(component);
  }
  remove({
    hostView
  }) {
    if (!hostView.destroyed) {
      hostView.destroy();
    }
  }
  addTemplate(templateRef, context) {
    return this.safeHost.addTemplateChild(templateRef, context);
  }
  removeTemplate(viewRef) {
    if (!viewRef.destroyed) {
      viewRef.destroy();
    }
  }
};
AbstractTuiPortalService.ɵfac = function AbstractTuiPortalService_Factory(t) {
  return new (t || AbstractTuiPortalService)();
};
AbstractTuiPortalService.ɵprov = ɵɵdefineInjectable({
  token: AbstractTuiPortalService,
  factory: AbstractTuiPortalService.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AbstractTuiPortalService, [{
    type: Injectable
  }], null, null);
})();
var AbstractTuiPortalHostComponent = class _AbstractTuiPortalHostComponent {
  constructor(injector, el, portalService) {
    this.injector = injector;
    this.el = el;
    portalService.attach(this);
  }
  /** @deprecated unused, will be removed in 4.0 **/
  get clientRect() {
    return this.el.nativeElement.getBoundingClientRect();
  }
  addComponentChild(component) {
    const parent = component.createInjector(this.injector);
    const resolver = parent.get(ComponentFactoryResolver$1);
    const factory = resolver.resolveComponentFactory(component.component);
    const providers = [{
      provide: _AbstractTuiPortalHostComponent,
      useValue: this
    }];
    const injector = Injector.create({
      parent,
      providers
    });
    const ref = this.vcr.createComponent(factory, void 0, injector);
    ref.changeDetectorRef.detectChanges();
    return ref;
  }
  addTemplateChild(templateRef, context) {
    return this.vcr.createEmbeddedView(templateRef, context);
  }
};
AbstractTuiPortalHostComponent.ɵfac = function AbstractTuiPortalHostComponent_Factory(t) {
  return new (t || AbstractTuiPortalHostComponent)(ɵɵdirectiveInject(INJECTOR), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(AbstractTuiPortalService));
};
AbstractTuiPortalHostComponent.ɵdir = ɵɵdefineDirective({
  type: AbstractTuiPortalHostComponent,
  viewQuery: function AbstractTuiPortalHostComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c0, 5, ViewContainerRef);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.vcr = _t.first);
    }
  }
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AbstractTuiPortalHostComponent, [{
    type: Directive
  }], function() {
    return [{
      type: Injector,
      decorators: [{
        type: Inject,
        args: [INJECTOR]
      }]
    }, {
      type: ElementRef,
      decorators: [{
        type: Inject,
        args: [ElementRef]
      }]
    }, {
      type: AbstractTuiPortalService,
      decorators: [{
        type: Inject,
        args: [AbstractTuiPortalService]
      }]
    }];
  }, {
    vcr: [{
      type: ViewChild,
      args: ["viewContainer", {
        read: ViewContainerRef
      }]
    }]
  });
})();
var AbstractTuiThemeSwitcher = class {
  constructor(doc) {
    this.doc = doc;
    if (this.style !== null) {
      this.addTheme();
      return;
    }
    const styles = this.doc.head.querySelectorAll("style");
    this.constructor.style = styles[styles.length - 1];
  }
  get style() {
    return this.constructor.style;
  }
  ngOnDestroy() {
    this.removeTheme();
  }
  addTheme() {
    if (this.style) {
      this.doc.head.appendChild(this.style);
    }
  }
  removeTheme() {
    var _a;
    (_a = this.style) === null || _a === void 0 ? void 0 : _a.remove();
  }
};
AbstractTuiThemeSwitcher.style = null;
AbstractTuiThemeSwitcher.ɵfac = function AbstractTuiThemeSwitcher_Factory(t) {
  return new (t || AbstractTuiThemeSwitcher)(ɵɵdirectiveInject(DOCUMENT));
};
AbstractTuiThemeSwitcher.ɵdir = ɵɵdefineDirective({
  type: AbstractTuiThemeSwitcher
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AbstractTuiThemeSwitcher, [{
    type: Directive
  }], function() {
    return [{
      type: Document,
      decorators: [{
        type: Inject,
        args: [DOCUMENT]
      }]
    }];
  }, null);
})();

// node_modules/@taiga-ui/cdk/fesm2015/taiga-ui-cdk-coercion.js
function tuiCoerceBooleanProperty(value) {
  return value !== null && typeof value !== "undefined" && `${value}` !== "false";
}

// node_modules/@taiga-ui/cdk/fesm2015/taiga-ui-cdk-pipes-filter.js
var TuiFilterPipe = class {
  transform(items, matcher, ...args) {
    return items.filter((item) => matcher(item, ...args));
  }
};
TuiFilterPipe.ɵfac = function TuiFilterPipe_Factory(t) {
  return new (t || TuiFilterPipe)();
};
TuiFilterPipe.ɵpipe = ɵɵdefinePipe({
  name: "tuiFilter",
  type: TuiFilterPipe,
  pure: true
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiFilterPipe, [{
    type: Pipe,
    args: [{
      name: "tuiFilter"
    }]
  }], null, null);
})();
var TuiFilterPipeModule = class {
};
TuiFilterPipeModule.ɵfac = function TuiFilterPipeModule_Factory(t) {
  return new (t || TuiFilterPipeModule)();
};
TuiFilterPipeModule.ɵmod = ɵɵdefineNgModule({
  type: TuiFilterPipeModule,
  declarations: [TuiFilterPipe],
  exports: [TuiFilterPipe]
});
TuiFilterPipeModule.ɵinj = ɵɵdefineInjector({});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiFilterPipeModule, [{
    type: NgModule,
    args: [{
      declarations: [TuiFilterPipe],
      exports: [TuiFilterPipe]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/cdk/fesm2015/taiga-ui-cdk-pipes-is-present.js
var TuiIsPresentPipe = class {
  transform(value) {
    return tuiIsPresent(value);
  }
};
TuiIsPresentPipe.ɵfac = function TuiIsPresentPipe_Factory(t) {
  return new (t || TuiIsPresentPipe)();
};
TuiIsPresentPipe.ɵpipe = ɵɵdefinePipe({
  name: "tuiIsPresent",
  type: TuiIsPresentPipe,
  pure: true
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiIsPresentPipe, [{
    type: Pipe,
    args: [{
      name: "tuiIsPresent"
    }]
  }], null, null);
})();
var TuiIsPresentPipeModule = class {
};
TuiIsPresentPipeModule.ɵfac = function TuiIsPresentPipeModule_Factory(t) {
  return new (t || TuiIsPresentPipeModule)();
};
TuiIsPresentPipeModule.ɵmod = ɵɵdefineNgModule({
  type: TuiIsPresentPipeModule,
  declarations: [TuiIsPresentPipe],
  exports: [TuiIsPresentPipe]
});
TuiIsPresentPipeModule.ɵinj = ɵɵdefineInjector({});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiIsPresentPipeModule, [{
    type: NgModule,
    args: [{
      declarations: [TuiIsPresentPipe],
      exports: [TuiIsPresentPipe]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/cdk/fesm2015/taiga-ui-cdk-pipes-keys.js
var TuiKeysPipe = class {
  transform(object) {
    return Object.keys(object);
  }
};
TuiKeysPipe.ɵfac = function TuiKeysPipe_Factory(t) {
  return new (t || TuiKeysPipe)();
};
TuiKeysPipe.ɵpipe = ɵɵdefinePipe({
  name: "tuiKeys",
  type: TuiKeysPipe,
  pure: true
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiKeysPipe, [{
    type: Pipe,
    args: [{
      name: "tuiKeys"
    }]
  }], null, null);
})();
var TuiKeysPipeModule = class {
};
TuiKeysPipeModule.ɵfac = function TuiKeysPipeModule_Factory(t) {
  return new (t || TuiKeysPipeModule)();
};
TuiKeysPipeModule.ɵmod = ɵɵdefineNgModule({
  type: TuiKeysPipeModule,
  declarations: [TuiKeysPipe],
  exports: [TuiKeysPipe]
});
TuiKeysPipeModule.ɵinj = ɵɵdefineInjector({});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiKeysPipeModule, [{
    type: NgModule,
    args: [{
      declarations: [TuiKeysPipe],
      exports: [TuiKeysPipe]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/cdk/fesm2015/taiga-ui-cdk-pipes-mapper.js
var TuiMapperPipe = class {
  transform(value, mapper, ...args) {
    return mapper(value, ...args);
  }
};
TuiMapperPipe.ɵfac = function TuiMapperPipe_Factory(t) {
  return new (t || TuiMapperPipe)();
};
TuiMapperPipe.ɵpipe = ɵɵdefinePipe({
  name: "tuiMapper",
  type: TuiMapperPipe,
  pure: true
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiMapperPipe, [{
    type: Pipe,
    args: [{
      name: "tuiMapper"
    }]
  }], null, null);
})();
var TuiMapperPipeModule = class {
};
TuiMapperPipeModule.ɵfac = function TuiMapperPipeModule_Factory(t) {
  return new (t || TuiMapperPipeModule)();
};
TuiMapperPipeModule.ɵmod = ɵɵdefineNgModule({
  type: TuiMapperPipeModule,
  declarations: [TuiMapperPipe],
  exports: [TuiMapperPipe]
});
TuiMapperPipeModule.ɵinj = ɵɵdefineInjector({});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiMapperPipeModule, [{
    type: NgModule,
    args: [{
      declarations: [TuiMapperPipe],
      exports: [TuiMapperPipe]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/cdk/fesm2015/taiga-ui-cdk-pipes-replace.js
var TuiReplacePipe = class {
  transform(value, search, replaceValue) {
    var _a;
    return (_a = value === null || value === void 0 ? void 0 : value.replace(
      search,
      // TS bug: https://github.com/microsoft/TypeScript/issues/22378
      replaceValue
    )) !== null && _a !== void 0 ? _a : "";
  }
};
TuiReplacePipe.ɵfac = function TuiReplacePipe_Factory(t) {
  return new (t || TuiReplacePipe)();
};
TuiReplacePipe.ɵpipe = ɵɵdefinePipe({
  name: "tuiReplace",
  type: TuiReplacePipe,
  pure: true
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiReplacePipe, [{
    type: Pipe,
    args: [{
      name: "tuiReplace"
    }]
  }], null, null);
})();
var TuiReplacePipeModule = class {
};
TuiReplacePipeModule.ɵfac = function TuiReplacePipeModule_Factory(t) {
  return new (t || TuiReplacePipeModule)();
};
TuiReplacePipeModule.ɵmod = ɵɵdefineNgModule({
  type: TuiReplacePipeModule,
  declarations: [TuiReplacePipe],
  exports: [TuiReplacePipe]
});
TuiReplacePipeModule.ɵinj = ɵɵdefineInjector({});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiReplacePipeModule, [{
    type: NgModule,
    args: [{
      declarations: [TuiReplacePipe],
      exports: [TuiReplacePipe]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/cdk/fesm2015/taiga-ui-cdk-components-alert-host.js
function TuiAlertHostComponent_div_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0, 3);
    ɵɵpipe(1, "tuiMapper");
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵproperty("ngComponentOutlet", item_r3.component.component)("ngComponentOutletInjector", ɵɵpipeBind2(1, 2, item_r3, ctx_r2.mapper));
  }
}
function TuiAlertHostComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 1);
    ɵɵtemplate(1, TuiAlertHostComponent_div_0_ng_container_1_Template, 2, 5, "ng-container", 2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const alert_r1 = ctx.$implicit;
    ɵɵproperty("@tuiParentAnimation", void 0);
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", alert_r1);
  }
}
var TuiAlertHostComponent = class {
  constructor(allAlerts, injector, destroy$, cdr) {
    this.allAlerts = allAlerts;
    this.injector = injector;
    this.destroy$ = destroy$;
    this.cdr = cdr;
    this.alerts = [];
    this.trackBy = (index) => index;
    this.mapper = (useValue) => Injector.create({
      providers: [{
        provide: POLYMORPHEUS_CONTEXT,
        useValue
      }],
      parent: this.injector
    });
  }
  ngOnInit() {
    combineLatest(this.allAlerts).pipe(takeUntil(this.destroy$)).subscribe((alerts) => {
      this.alerts = alerts;
      this.cdr.detectChanges();
    });
  }
};
TuiAlertHostComponent.ɵfac = function TuiAlertHostComponent_Factory(t) {
  return new (t || TuiAlertHostComponent)(ɵɵdirectiveInject(TUI_ALERTS), ɵɵdirectiveInject(INJECTOR), ɵɵdirectiveInject(TuiDestroyService, 2), ɵɵdirectiveInject(ChangeDetectorRef));
};
TuiAlertHostComponent.ɵcmp = ɵɵdefineComponent({
  type: TuiAlertHostComponent,
  selectors: [["tui-alert-host"]],
  features: [ɵɵProvidersFeature([TuiDestroyService])],
  decls: 1,
  vars: 2,
  consts: [["class", "t-wrapper", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "t-wrapper"], [3, "ngComponentOutlet", "ngComponentOutletInjector", 4, "ngFor", "ngForOf"], [3, "ngComponentOutlet", "ngComponentOutletInjector"]],
  template: function TuiAlertHostComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, TuiAlertHostComponent_div_0_Template, 2, 2, "div", 0);
    }
    if (rf & 2) {
      ɵɵproperty("ngForOf", ctx.alerts)("ngForTrackBy", ctx.trackBy);
    }
  },
  dependencies: [NgForOf, NgComponentOutlet, TuiMapperPipe],
  styles: ["tui-alert-host>.t-wrapper{position:fixed;top:0;left:0;display:flex;width:100%;height:100%;flex-direction:column;pointer-events:none}tui-alert-host>.t-wrapper>*{pointer-events:auto}\n"],
  encapsulation: 2,
  data: {
    animation: [TUI_PARENT_ANIMATION]
  }
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiAlertHostComponent, [{
    type: Component,
    args: [{
      selector: "tui-alert-host",
      templateUrl: "./alert-host.template.html",
      styleUrls: ["./alert-host.style.less"],
      encapsulation: ViewEncapsulation$1.None,
      // So that we do not force OnPush on custom alerts
      // eslint-disable-next-line @angular-eslint/prefer-on-push-component-change-detection
      changeDetection: ChangeDetectionStrategy.Default,
      providers: [TuiDestroyService],
      animations: [TUI_PARENT_ANIMATION]
    }]
  }], function() {
    return [{
      type: Array,
      decorators: [{
        type: Inject,
        args: [TUI_ALERTS]
      }]
    }, {
      type: Injector,
      decorators: [{
        type: Inject,
        args: [INJECTOR]
      }]
    }, {
      type: Observable,
      decorators: [{
        type: Self
      }, {
        type: Inject,
        args: [TuiDestroyService]
      }]
    }, {
      type: ChangeDetectorRef,
      decorators: [{
        type: Inject,
        args: [ChangeDetectorRef]
      }]
    }];
  }, null);
})();
var TuiAlertHostModule = class {
};
TuiAlertHostModule.ɵfac = function TuiAlertHostModule_Factory(t) {
  return new (t || TuiAlertHostModule)();
};
TuiAlertHostModule.ɵmod = ɵɵdefineNgModule({
  type: TuiAlertHostModule,
  declarations: [TuiAlertHostComponent],
  imports: [CommonModule, TuiMapperPipeModule],
  exports: [TuiAlertHostComponent]
});
TuiAlertHostModule.ɵinj = ɵɵdefineInjector({
  imports: [[CommonModule, TuiMapperPipeModule]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiAlertHostModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, TuiMapperPipeModule],
      declarations: [TuiAlertHostComponent],
      exports: [TuiAlertHostComponent]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/cdk/fesm2015/taiga-ui-cdk-components-scroll-controls.js
function TuiScrollControlsComponent_ng_container_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 3);
    ɵɵelement(1, "div", 4);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const bars_r1 = ɵɵnextContext().ngIf;
    ɵɵclassProp("t-bar_has-horizontal", bars_r1[1]);
  }
}
function TuiScrollControlsComponent_ng_container_0_div_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 5);
    ɵɵelement(1, "div", 6);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const bars_r1 = ɵɵnextContext().ngIf;
    ɵɵclassProp("t-bar_has-vertical", bars_r1[0]);
  }
}
function TuiScrollControlsComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, TuiScrollControlsComponent_ng_container_0_div_1_Template, 2, 2, "div", 1)(2, TuiScrollControlsComponent_ng_container_0_div_2_Template, 2, 2, "div", 2);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const bars_r1 = ctx.ngIf;
    ɵɵadvance(1);
    ɵɵproperty("ngIf", bars_r1[0]);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", bars_r1[1]);
  }
}
var MIN_WIDTH = 24;
function getOffsetVertical({
  clientY
}, {
  top,
  height
}) {
  return (clientY - top) / height;
}
function getOffsetHorizontal({
  clientX
}, {
  left,
  width
}) {
  return (clientX - left) / width;
}
var TuiScrollbarDirective = class {
  constructor(zone, destroy$, animationFrame$, container, doc, el) {
    this.container = container;
    this.doc = doc;
    this.el = el;
    this.tuiScrollbar = "vertical";
    const {
      nativeElement
    } = this.el;
    const mousedown$ = tuiTypedFromEvent(nativeElement, "mousedown");
    const mousemove$ = tuiTypedFromEvent(this.doc, "mousemove");
    const mouseup$ = tuiTypedFromEvent(this.doc, "mouseup");
    const mousedownWrapper$ = tuiTypedFromEvent(this.wrapper, "mousedown");
    merge(mousedownWrapper$.pipe(map((event) => this.getScrolled(event, 0.5, 0.5))), mousedown$.pipe(tuiStopPropagation(), switchMap((event) => {
      const rect2 = nativeElement.getBoundingClientRect();
      const vertical = getOffsetVertical(event, rect2);
      const horizontal = getOffsetHorizontal(event, rect2);
      return mousemove$.pipe(map((event2) => this.getScrolled(event2, vertical, horizontal)), takeUntil(mouseup$));
    }))).pipe(tuiZonefree(zone), takeUntil(destroy$)).subscribe(([scrollTop, scrollLeft]) => {
      if (this.tuiScrollbar === "vertical") {
        this.element.scrollTop = scrollTop;
      } else {
        this.element.scrollLeft = scrollLeft;
      }
    });
    merge(animationFrame$.pipe(throttleTime(POLLING_TIME)), tuiScrollFrom(this.element)).pipe(tuiZonefree(zone), takeUntil(destroy$)).subscribe(() => {
      if (this.tuiScrollbar === "vertical") {
        nativeElement.style.top = `${this.thumb * 100}%`;
        nativeElement.style.height = `${this.view * 100}%`;
      } else {
        nativeElement.style.left = `${this.thumb * 100}%`;
        nativeElement.style.width = `${this.view * 100}%`;
      }
    });
  }
  get wrapper() {
    return this.el.nativeElement.parentElement;
  }
  get scrolled() {
    const {
      scrollTop,
      scrollHeight,
      clientHeight,
      scrollLeft,
      scrollWidth,
      clientWidth
    } = this.element;
    return this.tuiScrollbar === "vertical" ? scrollTop / (scrollHeight - clientHeight) : scrollLeft / (scrollWidth - clientWidth);
  }
  get compensation() {
    const {
      clientHeight,
      scrollHeight,
      clientWidth,
      scrollWidth
    } = this.element;
    if (clientHeight * clientHeight / scrollHeight > MIN_WIDTH && this.tuiScrollbar === "vertical" || clientWidth * clientWidth / scrollWidth > MIN_WIDTH && this.tuiScrollbar === "horizontal") {
      return 0;
    }
    return this.tuiScrollbar === "vertical" ? MIN_WIDTH / clientHeight : MIN_WIDTH / clientWidth;
  }
  get thumb() {
    const compensation = this.compensation || this.view;
    return this.scrolled * (1 - compensation);
  }
  get view() {
    const {
      clientHeight,
      scrollHeight,
      clientWidth,
      scrollWidth
    } = this.element;
    return this.tuiScrollbar === "vertical" ? Math.ceil(clientHeight / scrollHeight * 100) / 100 : Math.ceil(clientWidth / scrollWidth * 100) / 100;
  }
  get element() {
    return this.container.nativeElement;
  }
  getScrolled({
    clientY,
    clientX
  }, offsetVertical, offsetHorizontal) {
    const {
      offsetHeight,
      offsetWidth
    } = this.el.nativeElement;
    const {
      top,
      left,
      width,
      height
    } = this.wrapper.getBoundingClientRect();
    const maxTop = this.element.scrollHeight - height;
    const maxLeft = this.element.scrollWidth - width;
    const scrolledTop = (clientY - top - offsetHeight * offsetVertical) / (height - offsetHeight);
    const scrolledLeft = (clientX - left - offsetWidth * offsetHorizontal) / (width - offsetWidth);
    return [maxTop * scrolledTop, maxLeft * scrolledLeft];
  }
};
TuiScrollbarDirective.ɵfac = function TuiScrollbarDirective_Factory(t) {
  return new (t || TuiScrollbarDirective)(ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(TuiDestroyService, 2), ɵɵdirectiveInject(ANIMATION_FRAME), ɵɵdirectiveInject(TUI_SCROLL_REF), ɵɵdirectiveInject(DOCUMENT), ɵɵdirectiveInject(ElementRef));
};
TuiScrollbarDirective.ɵdir = ɵɵdefineDirective({
  type: TuiScrollbarDirective,
  selectors: [["", "tuiScrollbar", ""]],
  inputs: {
    tuiScrollbar: "tuiScrollbar"
  },
  features: [ɵɵProvidersFeature([TuiDestroyService])]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiScrollbarDirective, [{
    type: Directive,
    args: [{
      selector: "[tuiScrollbar]",
      providers: [TuiDestroyService]
    }]
  }], function() {
    return [{
      type: NgZone,
      decorators: [{
        type: Inject,
        args: [NgZone]
      }]
    }, {
      type: Observable,
      decorators: [{
        type: Self
      }, {
        type: Inject,
        args: [TuiDestroyService]
      }]
    }, {
      type: Observable,
      decorators: [{
        type: Inject,
        args: [ANIMATION_FRAME]
      }]
    }, {
      type: ElementRef,
      decorators: [{
        type: Inject,
        args: [TUI_SCROLL_REF]
      }]
    }, {
      type: Document,
      decorators: [{
        type: Inject,
        args: [DOCUMENT]
      }]
    }, {
      type: ElementRef,
      decorators: [{
        type: Inject,
        args: [ElementRef]
      }]
    }];
  }, {
    tuiScrollbar: [{
      type: Input
    }]
  });
})();
var TuiScrollControlsComponent = class {
  constructor(zone, scrollRef, animationFrame$) {
    this.zone = zone;
    this.scrollRef = scrollRef;
    this.animationFrame$ = animationFrame$;
    this.refresh$ = this.animationFrame$.pipe(throttleTime(300), map(() => this.scrollbars), startWith([false, false]), distinctUntilChanged((a, b) => a[0] === b[0] && a[1] === b[1]), tuiZoneOptimized(this.zone));
  }
  get scrollbars() {
    const {
      clientHeight,
      scrollHeight,
      clientWidth,
      scrollWidth
    } = this.scrollRef.nativeElement;
    return [Math.ceil(clientHeight / scrollHeight * 100) < 100, Math.ceil(clientWidth / scrollWidth * 100) < 100];
  }
};
TuiScrollControlsComponent.ɵfac = function TuiScrollControlsComponent_Factory(t) {
  return new (t || TuiScrollControlsComponent)(ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(TUI_SCROLL_REF), ɵɵdirectiveInject(ANIMATION_FRAME));
};
TuiScrollControlsComponent.ɵcmp = ɵɵdefineComponent({
  type: TuiScrollControlsComponent,
  selectors: [["tui-scroll-controls"]],
  decls: 2,
  vars: 3,
  consts: [[4, "ngIf"], ["class", "t-bar t-bar_vertical", 3, "t-bar_has-horizontal", 4, "ngIf"], ["class", "t-bar t-bar_horizontal", 3, "t-bar_has-vertical", 4, "ngIf"], [1, "t-bar", "t-bar_vertical"], ["tuiScrollbar", "vertical", 1, "t-thumb"], [1, "t-bar", "t-bar_horizontal"], ["tuiScrollbar", "horizontal", 1, "t-thumb"]],
  template: function TuiScrollControlsComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, TuiScrollControlsComponent_ng_container_0_Template, 3, 2, "ng-container", 0);
      ɵɵpipe(1, "async");
    }
    if (rf & 2) {
      ɵɵproperty("ngIf", ɵɵpipeBind1(1, 1, ctx.refresh$));
    }
  },
  dependencies: [NgIf, TuiScrollbarDirective, AsyncPipe],
  styles: ["[_nghost-%COMP%]{position:-webkit-sticky;position:sticky;top:0;left:0;z-index:1;min-width:calc(100% - 1px);min-height:calc(100% - 1px);max-width:calc(100% - 1px);max-height:calc(100% - 1px);float:left;-webkit-margin-end:calc(-100% + 1px);margin-inline-end:calc(-100% + 1px);pointer-events:none}.t-bar[_ngcontent-%COMP%]{position:absolute;right:0;bottom:0;pointer-events:auto;animation:tuiFadeIn var(--tui-duration, .3s) ease-in-out}.t-bar_vertical[_ngcontent-%COMP%]{top:0;width:.875rem}.t-bar_horizontal[_ngcontent-%COMP%]{left:0;height:.875rem}.t-bar_has-horizontal[_ngcontent-%COMP%]{bottom:.5rem}.t-bar_has-vertical[_ngcontent-%COMP%]{right:.5rem}.t-thumb[_ngcontent-%COMP%]{position:absolute;border-radius:6.25rem;border:.25rem solid transparent;cursor:pointer;pointer-events:auto;-webkit-user-select:none;-moz-user-select:none;user-select:none;background:currentColor;background-clip:content-box;box-sizing:border-box;transition:all var(--tui-duration, .3s) ease-in-out;transition-property:width,height,opacity;opacity:.2}.t-thumb[_ngcontent-%COMP%]:hover{opacity:.24}.t-thumb[_ngcontent-%COMP%]:active{opacity:.48}.t-bar_vertical[_ngcontent-%COMP%]   .t-thumb[_ngcontent-%COMP%]{right:0;width:.75rem;min-height:1.25rem}.t-bar_vertical[_ngcontent-%COMP%]:hover   .t-thumb[_ngcontent-%COMP%], .t-bar_vertical[_ngcontent-%COMP%]   .t-thumb[_ngcontent-%COMP%]:active{width:.875rem}.t-bar_horizontal[_ngcontent-%COMP%]   .t-thumb[_ngcontent-%COMP%]{bottom:0;height:.75rem;min-width:1.25rem}.t-bar_horizontal[_ngcontent-%COMP%]:hover   .t-thumb[_ngcontent-%COMP%], .t-bar_horizontal[_ngcontent-%COMP%]   .t-thumb[_ngcontent-%COMP%]:active{height:.875rem}"],
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiScrollControlsComponent, [{
    type: Component,
    args: [{
      selector: "tui-scroll-controls",
      templateUrl: "./scroll-controls.template.html",
      styleUrls: ["./scroll-controls.style.less"],
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], function() {
    return [{
      type: NgZone,
      decorators: [{
        type: Inject,
        args: [NgZone]
      }]
    }, {
      type: ElementRef,
      decorators: [{
        type: Inject,
        args: [TUI_SCROLL_REF]
      }]
    }, {
      type: Observable,
      decorators: [{
        type: Inject,
        args: [ANIMATION_FRAME]
      }]
    }];
  }, null);
})();
var SCROLL_REF_SELECTOR = "[tuiScrollRef]";
var TuiScrollRefDirective = class {
};
TuiScrollRefDirective.ɵfac = function TuiScrollRefDirective_Factory(t) {
  return new (t || TuiScrollRefDirective)();
};
TuiScrollRefDirective.ɵdir = ɵɵdefineDirective({
  type: TuiScrollRefDirective,
  selectors: [["", "tuiScrollRef", ""]],
  features: [ɵɵProvidersFeature([{
    provide: TUI_SCROLL_REF,
    useExisting: ElementRef
  }])]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiScrollRefDirective, [{
    type: Directive,
    args: [{
      selector: SCROLL_REF_SELECTOR,
      providers: [{
        provide: TUI_SCROLL_REF,
        useExisting: ElementRef
      }]
    }]
  }], null, null);
})();
var TuiScrollControlsModule = class {
};
TuiScrollControlsModule.ɵfac = function TuiScrollControlsModule_Factory(t) {
  return new (t || TuiScrollControlsModule)();
};
TuiScrollControlsModule.ɵmod = ɵɵdefineNgModule({
  type: TuiScrollControlsModule,
  declarations: [TuiScrollbarDirective, TuiScrollControlsComponent, TuiScrollRefDirective],
  imports: [CommonModule],
  exports: [TuiScrollControlsComponent, TuiScrollRefDirective]
});
TuiScrollControlsModule.ɵinj = ɵɵdefineInjector({
  imports: [[CommonModule]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiScrollControlsModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule],
      declarations: [TuiScrollbarDirective, TuiScrollControlsComponent, TuiScrollRefDirective],
      exports: [TuiScrollControlsComponent, TuiScrollRefDirective]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/cdk/fesm2015/taiga-ui-cdk-decorators.js
function decorateMethod(originalMethod) {
  let previousArgs = [];
  let originalFnWasCalledLeastAtOnce = false;
  let pureValue;
  return function tuiPureMethodPatched(...args) {
    const isPure = originalFnWasCalledLeastAtOnce && previousArgs.length === args.length && args.every((arg, index) => arg === previousArgs[index]);
    if (isPure) {
      return pureValue;
    }
    previousArgs = args;
    pureValue = originalMethod.apply(this, args);
    originalFnWasCalledLeastAtOnce = true;
    return pureValue;
  };
}
function decorateGetter(originalGetter, propertyKey, enumerable = true) {
  return function tuiPureGetterPatched() {
    const value = originalGetter.call(this);
    Object.defineProperty(this, propertyKey, { enumerable, value });
    return value;
  };
}
function tuiPure(target, propertyKeyOrContext, descriptor) {
  if (typeof target === "function") {
    const context = propertyKeyOrContext;
    if (context.kind === "getter") {
      return decorateGetter(target, context.name);
    }
    if (context.kind === "method") {
      return decorateMethod(target);
    }
    throw new TuiPureException();
  }
  const { get, enumerable, value } = descriptor;
  const propertyKey = propertyKeyOrContext;
  if (get) {
    return {
      configurable: true,
      enumerable,
      get: decorateGetter(get, propertyKey, enumerable)
    };
  }
  if (typeof value !== "function") {
    throw new TuiPureException();
  }
  const original = value;
  return {
    configurable: true,
    enumerable,
    get() {
      let previousArgs = [];
      let originalFnWasCalledLeastAtOnce = false;
      let pureValue;
      const patched = (...args) => {
        const isPure = originalFnWasCalledLeastAtOnce && previousArgs.length === args.length && args.every((arg, index) => arg === previousArgs[index]);
        if (isPure) {
          return pureValue;
        }
        previousArgs = args;
        pureValue = original.apply(this, args);
        originalFnWasCalledLeastAtOnce = true;
        return pureValue;
      };
      Object.defineProperty(this, propertyKey, {
        configurable: true,
        value: patched
      });
      return patched;
    }
  };
}

// node_modules/@taiga-ui/cdk/fesm2015/taiga-ui-cdk-directives-active-zone.js
var TuiActiveZoneDirective = class {
  constructor(active$, zone, el, directParentActiveZone) {
    var _a;
    this.active$ = active$;
    this.zone = zone;
    this.el = el;
    this.directParentActiveZone = directParentActiveZone;
    this.subActiveZones = [];
    this.tuiActiveZoneParent = null;
    this.tuiActiveZoneChange = this.active$.pipe(map((element) => !!element && this.contains(element)), startWith(false), distinctUntilChanged(), skip(1), tuiZoneOptimized(this.zone));
    (_a = this.directParentActiveZone) === null || _a === void 0 ? void 0 : _a.addSubActiveZone(this);
  }
  set tuiActiveZoneParentSetter(zone) {
    this.setZone(zone);
  }
  ngOnDestroy() {
    var _a, _b;
    (_a = this.directParentActiveZone) === null || _a === void 0 ? void 0 : _a.removeSubActiveZone(this);
    (_b = this.tuiActiveZoneParent) === null || _b === void 0 ? void 0 : _b.removeSubActiveZone(this);
  }
  contains(node) {
    return this.el.nativeElement.contains(node) || this.subActiveZones.some((item, index, array) => array.indexOf(item) === index && item.contains(node));
  }
  setZone(zone) {
    var _a;
    (_a = this.tuiActiveZoneParent) === null || _a === void 0 ? void 0 : _a.removeSubActiveZone(this);
    zone === null || zone === void 0 ? void 0 : zone.addSubActiveZone(this);
    this.tuiActiveZoneParent = zone;
  }
  addSubActiveZone(activeZone) {
    this.subActiveZones = [...this.subActiveZones, activeZone];
  }
  removeSubActiveZone(activeZone) {
    this.subActiveZones = tuiArrayRemove(this.subActiveZones, this.subActiveZones.indexOf(activeZone));
  }
};
TuiActiveZoneDirective.ɵfac = function TuiActiveZoneDirective_Factory(t) {
  return new (t || TuiActiveZoneDirective)(ɵɵdirectiveInject(TUI_ACTIVE_ELEMENT), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(TuiActiveZoneDirective, 12));
};
TuiActiveZoneDirective.ɵdir = ɵɵdefineDirective({
  type: TuiActiveZoneDirective,
  selectors: [["", "tuiActiveZone", "", 5, "ng-container"], ["", "tuiActiveZoneChange", "", 5, "ng-container"], ["", "tuiActiveZoneParent", "", 5, "ng-container"]],
  inputs: {
    tuiActiveZoneParentSetter: ["tuiActiveZoneParent", "tuiActiveZoneParentSetter"]
  },
  outputs: {
    tuiActiveZoneChange: "tuiActiveZoneChange"
  },
  exportAs: ["tuiActiveZone"]
});
__decorate([tuiPure], TuiActiveZoneDirective.prototype, "setZone", null);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiActiveZoneDirective, [{
    type: Directive,
    args: [{
      selector: "[tuiActiveZone]:not(ng-container), [tuiActiveZoneChange]:not(ng-container), [tuiActiveZoneParent]:not(ng-container)",
      exportAs: "tuiActiveZone"
    }]
  }], function() {
    return [{
      type: Observable,
      decorators: [{
        type: Inject,
        args: [TUI_ACTIVE_ELEMENT]
      }]
    }, {
      type: NgZone,
      decorators: [{
        type: Inject,
        args: [NgZone]
      }]
    }, {
      type: ElementRef,
      decorators: [{
        type: Inject,
        args: [ElementRef]
      }]
    }, {
      type: TuiActiveZoneDirective,
      decorators: [{
        type: Optional
      }, {
        type: SkipSelf
      }, {
        type: Inject,
        args: [TuiActiveZoneDirective]
      }]
    }];
  }, {
    tuiActiveZoneParentSetter: [{
      type: Input,
      args: ["tuiActiveZoneParent"]
    }],
    tuiActiveZoneChange: [{
      type: Output
    }],
    setZone: []
  });
})();
var TuiActiveZoneModule = class {
};
TuiActiveZoneModule.ɵfac = function TuiActiveZoneModule_Factory(t) {
  return new (t || TuiActiveZoneModule)();
};
TuiActiveZoneModule.ɵmod = ɵɵdefineNgModule({
  type: TuiActiveZoneModule,
  declarations: [TuiActiveZoneDirective],
  exports: [TuiActiveZoneDirective]
});
TuiActiveZoneModule.ɵinj = ɵɵdefineInjector({});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiActiveZoneModule, [{
    type: NgModule,
    args: [{
      declarations: [TuiActiveZoneDirective],
      exports: [TuiActiveZoneDirective]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/cdk/fesm2015/taiga-ui-cdk-directives-auto-focus.js
var AbstractTuiAutofocusHandler = class {
  constructor(focusable, el) {
    this.focusable = focusable;
    this.el = el;
  }
  get element() {
    var _a;
    return ((_a = this.focusable) === null || _a === void 0 ? void 0 : _a.nativeFocusableElement) || this.el.nativeElement;
  }
  get isTextFieldElement() {
    return this.element.matches("input, textarea, [contenteditable]");
  }
};
AbstractTuiAutofocusHandler.ɵfac = function AbstractTuiAutofocusHandler_Factory(t) {
  ɵɵinvalidFactory();
};
AbstractTuiAutofocusHandler.ɵdir = ɵɵdefineDirective({
  type: AbstractTuiAutofocusHandler
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AbstractTuiAutofocusHandler, [{
    type: Directive
  }], function() {
    return [{
      type: void 0
    }, {
      type: ElementRef
    }];
  }, null);
})();
var TIMEOUT = 1e3;
var NG_ANIMATION_SELECTOR = ".ng-animating";
var TuiDefaultAutofocusHandler = class extends AbstractTuiAutofocusHandler {
  constructor(focusable, el, animationFrame$) {
    super(focusable, el);
    this.animationFrame$ = animationFrame$;
  }
  setFocus() {
    if (this.isTextFieldElement) {
      race(timer(TIMEOUT), this.animationFrame$.pipe(throttleTime(POLLING_TIME), map(() => this.element.closest(NG_ANIMATION_SELECTOR)), skipWhile(Boolean), take(1))).subscribe(() => this.element.focus({
        preventScroll: true
      }));
    } else {
      this.element.focus({
        preventScroll: true
      });
    }
  }
};
TuiDefaultAutofocusHandler.ɵfac = function TuiDefaultAutofocusHandler_Factory(t) {
  return new (t || TuiDefaultAutofocusHandler)(ɵɵdirectiveInject(TUI_FOCUSABLE_ITEM_ACCESSOR, 10), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ANIMATION_FRAME));
};
TuiDefaultAutofocusHandler.ɵdir = ɵɵdefineDirective({
  type: TuiDefaultAutofocusHandler,
  features: [ɵɵInheritDefinitionFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDefaultAutofocusHandler, [{
    type: Directive
  }], function() {
    return [{
      type: void 0,
      decorators: [{
        type: Optional
      }, {
        type: Self
      }, {
        type: Inject,
        args: [TUI_FOCUSABLE_ITEM_ACCESSOR]
      }]
    }, {
      type: ElementRef,
      decorators: [{
        type: Inject,
        args: [ElementRef]
      }]
    }, {
      type: Observable,
      decorators: [{
        type: Inject,
        args: [ANIMATION_FRAME]
      }]
    }];
  }, null);
})();
var TEXTFIELD_ATTRS = ["type", "inputMode", "autocomplete", "accept", "min", "max", "step", "pattern", "size", "maxlength"];
var TuiIosAutofocusHandler = class extends AbstractTuiAutofocusHandler {
  constructor(focusable, el, renderer, zone, win) {
    super(focusable, el);
    this.renderer = renderer;
    this.zone = zone;
    this.win = win;
    this.patchCssStyles();
  }
  setFocus() {
    if (this.isTextFieldElement) {
      this.zone.runOutsideAngular(() => this.iosWebkitAutofocus());
    } else {
      this.element.focus({
        preventScroll: true
      });
    }
  }
  iosWebkitAutofocus() {
    var _a;
    const fakeInput = this.makeFakeInput();
    const duration = this.getDurationTimeBeforeFocus();
    let fakeFocusTimeoutId = 0;
    let elementFocusTimeoutId = 0;
    const blurHandler = () => fakeInput.focus({
      preventScroll: true
    });
    const focusHandler = () => {
      clearTimeout(fakeFocusTimeoutId);
      fakeFocusTimeoutId = this.win.setTimeout(() => {
        clearTimeout(elementFocusTimeoutId);
        fakeInput.removeEventListener("blur", blurHandler);
        fakeInput.removeEventListener("focus", focusHandler);
        elementFocusTimeoutId = this.win.setTimeout(() => {
          this.element.focus({
            preventScroll: false
          });
          fakeInput.remove();
        }, duration);
      });
    };
    fakeInput.addEventListener("blur", blurHandler, {
      once: true
    });
    fakeInput.addEventListener("focus", focusHandler);
    if (this.insideDialog()) {
      this.win.document.body.appendChild(fakeInput);
    } else {
      (_a = this.element.parentElement) === null || _a === void 0 ? void 0 : _a.appendChild(fakeInput);
    }
    fakeInput.focus({
      preventScroll: true
    });
  }
  /**
   * @note:
   * emulate textfield position in layout with cursor
   * before focus to real textfield element
   *
   * required note:
   * [fakeInput.readOnly = true] ~
   * don't use {readOnly: true} value, it's doesn't work for emulate autofill
   *
   * [fakeInput.style.opacity = 0] ~
   * don't use {opacity: 0}, sometimes it's doesn't work for emulate real input
   *
   * [fakeInput.style.fontSize = 16px] ~
   * disable possible auto zoom
   *
   * [fakeInput.style.top/left] ~
   * emulate position cursor before focus to real textfield element
   */
  makeFakeInput() {
    const fakeInput = this.renderer.createElement("input");
    const rect2 = this.element.getBoundingClientRect();
    this.patchFakeInputFromFocusableElement(fakeInput);
    fakeInput.style.height = tuiPx(rect2.height);
    fakeInput.style.width = tuiPx(rect2.width / 2);
    fakeInput.style.position = "fixed";
    fakeInput.style.zIndex = "-99999999";
    fakeInput.style.caretColor = "transparent";
    fakeInput.style.border = "none";
    fakeInput.style.outline = "none";
    fakeInput.style.color = "transparent";
    fakeInput.style.background = "transparent";
    fakeInput.style.cursor = "none";
    fakeInput.style.fontSize = tuiPx(16);
    fakeInput.style.top = tuiPx(rect2.top);
    fakeInput.style.left = tuiPx(rect2.left);
    return fakeInput;
  }
  getDurationTimeBeforeFocus() {
    return parseFloat(this.win.getComputedStyle(this.element).getPropertyValue("--tui-duration")) || 0;
  }
  /**
   * @note:
   * unfortunately, in older versions of iOS
   * there is a bug that the fake input cursor
   * will move along with the dialog animation
   * and then that dialog will be shaking
   */
  insideDialog() {
    return !!this.element.closest("tui-dialog");
  }
  /**
   * @note:
   * This is necessary so that the viewport isn't recalculated
   * and then the dialogs don't shake.
   *
   * Also, we need to fixed height viewport,
   * so that when focusing the dialogs don't shake
   */
  patchCssStyles() {
    [this.win.document.documentElement, this.win.document.body].forEach((element) => {
      element.style.setProperty("overflow", "auto");
      element.style.setProperty("height", "100%");
    });
  }
  /**
   * @note:
   * inherit basic attributes values from real input
   * for help iOS detect what do you want see on keyboard,
   * for example [inputMode=numeric, autocomplete=cc-number]
   */
  patchFakeInputFromFocusableElement(fakeInput) {
    TEXTFIELD_ATTRS.forEach((attr) => {
      const value = this.element.getAttribute(attr);
      if (tuiIsPresent(value)) {
        fakeInput.setAttribute(attr, value);
      }
    });
  }
};
TuiIosAutofocusHandler.ɵfac = function TuiIosAutofocusHandler_Factory(t) {
  return new (t || TuiIosAutofocusHandler)(ɵɵdirectiveInject(TUI_FOCUSABLE_ITEM_ACCESSOR, 10), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(WINDOW));
};
TuiIosAutofocusHandler.ɵdir = ɵɵdefineDirective({
  type: TuiIosAutofocusHandler,
  features: [ɵɵInheritDefinitionFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiIosAutofocusHandler, [{
    type: Directive
  }], function() {
    return [{
      type: void 0,
      decorators: [{
        type: Optional
      }, {
        type: Self
      }, {
        type: Inject,
        args: [TUI_FOCUSABLE_ITEM_ACCESSOR]
      }]
    }, {
      type: ElementRef,
      decorators: [{
        type: Inject,
        args: [ElementRef]
      }]
    }, {
      type: Renderer2,
      decorators: [{
        type: Inject,
        args: [Renderer2]
      }]
    }, {
      type: NgZone,
      decorators: [{
        type: Inject,
        args: [NgZone]
      }]
    }, {
      type: Window,
      decorators: [{
        type: Inject,
        args: [WINDOW]
      }]
    }];
  }, null);
})();
var TUI_AUTOFOCUS_DEFAULT_OPTIONS = {
  delay: NaN
  // NaN = no delay/sync
};
var TUI_AUTOFOCUS_OPTIONS = tuiCreateToken(TUI_AUTOFOCUS_DEFAULT_OPTIONS);
var TUI_AUTOFOCUS_HANDLER = new InjectionToken("[TUI_AUTOFOCUS_HANDLER]");
var TUI_AUTOFOCUS_PROVIDERS = [{
  provide: TUI_AUTOFOCUS_HANDLER,
  useFactory: (focusable, el, animationFrame$, renderer, zone, win, isIos) => isIos ? new TuiIosAutofocusHandler(focusable, el, renderer, zone, win) : new TuiDefaultAutofocusHandler(focusable, el, animationFrame$),
  deps: [[new Optional(), new Self(), TUI_FOCUSABLE_ITEM_ACCESSOR], ElementRef, ANIMATION_FRAME, Renderer2, NgZone, WINDOW, TUI_IS_IOS]
}, TuiDestroyService];
var TuiAutoFocusDirective = class {
  constructor(handler, options, destroy$) {
    this.handler = handler;
    this.options = options;
    this.destroy$ = destroy$;
    this.autoFocus = true;
  }
  ngAfterViewInit() {
    if (tuiCoerceBooleanProperty(this.autoFocus)) {
      this.focus();
    }
  }
  focus() {
    if (Number.isNaN(this.options.delay)) {
      void Promise.resolve().then(() => this.handler.setFocus());
    } else {
      timer(this.options.delay).pipe(takeUntil(this.destroy$)).subscribe(() => this.handler.setFocus());
    }
  }
};
TuiAutoFocusDirective.ɵfac = function TuiAutoFocusDirective_Factory(t) {
  return new (t || TuiAutoFocusDirective)(ɵɵdirectiveInject(TUI_AUTOFOCUS_HANDLER), ɵɵdirectiveInject(TUI_AUTOFOCUS_OPTIONS), ɵɵdirectiveInject(TuiDestroyService, 2));
};
TuiAutoFocusDirective.ɵdir = ɵɵdefineDirective({
  type: TuiAutoFocusDirective,
  selectors: [["", "tuiAutoFocus", ""]],
  inputs: {
    autoFocus: ["tuiAutoFocus", "autoFocus"]
  },
  features: [ɵɵProvidersFeature(TUI_AUTOFOCUS_PROVIDERS)]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiAutoFocusDirective, [{
    type: Directive,
    args: [{
      selector: "[tuiAutoFocus]",
      providers: TUI_AUTOFOCUS_PROVIDERS
    }]
  }], function() {
    return [{
      type: void 0,
      decorators: [{
        type: Inject,
        args: [TUI_AUTOFOCUS_HANDLER]
      }]
    }, {
      type: void 0,
      decorators: [{
        type: Inject,
        args: [TUI_AUTOFOCUS_OPTIONS]
      }]
    }, {
      type: TuiDestroyService,
      decorators: [{
        type: Self
      }, {
        type: Inject,
        args: [TuiDestroyService]
      }]
    }];
  }, {
    autoFocus: [{
      type: Input,
      args: ["tuiAutoFocus"]
    }]
  });
})();
var TuiAutoFocusModule = class {
};
TuiAutoFocusModule.ɵfac = function TuiAutoFocusModule_Factory(t) {
  return new (t || TuiAutoFocusModule)();
};
TuiAutoFocusModule.ɵmod = ɵɵdefineNgModule({
  type: TuiAutoFocusModule,
  declarations: [TuiAutoFocusDirective],
  exports: [TuiAutoFocusDirective]
});
TuiAutoFocusModule.ɵinj = ɵɵdefineInjector({});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiAutoFocusModule, [{
    type: NgModule,
    args: [{
      declarations: [TuiAutoFocusDirective],
      exports: [TuiAutoFocusDirective]
    }]
  }], null, null);
})();
var TuiSynchronousAutofocusHandler = class extends AbstractTuiAutofocusHandler {
  constructor(focusable, el) {
    super(focusable, el);
  }
  setFocus() {
    this.element.focus({
      preventScroll: true
    });
  }
};
TuiSynchronousAutofocusHandler.ɵfac = function TuiSynchronousAutofocusHandler_Factory(t) {
  return new (t || TuiSynchronousAutofocusHandler)(ɵɵdirectiveInject(TUI_FOCUSABLE_ITEM_ACCESSOR, 10), ɵɵdirectiveInject(ElementRef));
};
TuiSynchronousAutofocusHandler.ɵdir = ɵɵdefineDirective({
  type: TuiSynchronousAutofocusHandler,
  features: [ɵɵInheritDefinitionFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiSynchronousAutofocusHandler, [{
    type: Directive
  }], function() {
    return [{
      type: void 0,
      decorators: [{
        type: Optional
      }, {
        type: Self
      }, {
        type: Inject,
        args: [TUI_FOCUSABLE_ITEM_ACCESSOR]
      }]
    }, {
      type: ElementRef,
      decorators: [{
        type: Inject,
        args: [ElementRef]
      }]
    }];
  }, null);
})();

// node_modules/@taiga-ui/cdk/fesm2015/taiga-ui-cdk-directives-autofilled.js
var TuiAutofilledStyleComponent = class {
};
TuiAutofilledStyleComponent.ɵfac = function TuiAutofilledStyleComponent_Factory(t) {
  return new (t || TuiAutofilledStyleComponent)();
};
TuiAutofilledStyleComponent.ɵcmp = ɵɵdefineComponent({
  type: TuiAutofilledStyleComponent,
  selectors: [["ng-component"]],
  hostAttrs: [1, "tui-autofilled-styles"],
  decls: 0,
  vars: 0,
  template: function TuiAutofilledStyleComponent_Template(rf, ctx) {
  },
  styles: [".tui-autofill input,input.tui-autofill{transition:box-shadow .01s}\n"],
  encapsulation: 2,
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiAutofilledStyleComponent, [{
    type: Component,
    args: [{
      host: {
        class: "tui-autofilled-styles"
      },
      template: "",
      styleUrls: ["./autofilled.style.less"],
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], null, null);
})();
var TuiAutofilledDirective = class {
  constructor(directiveStyles) {
    this.autofilled = false;
    this.tuiAutofilledChange = new EventEmitter();
    directiveStyles.addComponent(TuiAutofilledStyleComponent);
  }
  transitionStartHandler({
    propertyName,
    target
  }) {
    var _a;
    const matchedAutofill = propertyName.includes("box-shadow") && ((_a = target) === null || _a === void 0 ? void 0 : _a.matches("input"));
    if (matchedAutofill) {
      this.autofilled = !this.autofilled;
      this.tuiAutofilledChange.emit(this.autofilled);
    }
  }
};
TuiAutofilledDirective.ɵfac = function TuiAutofilledDirective_Factory(t) {
  return new (t || TuiAutofilledDirective)(ɵɵdirectiveInject(TuiDirectiveStylesService));
};
TuiAutofilledDirective.ɵdir = ɵɵdefineDirective({
  type: TuiAutofilledDirective,
  selectors: [["", "tuiAutofilledChange", ""]],
  hostAttrs: [1, "tui-autofill"],
  hostVars: 2,
  hostBindings: function TuiAutofilledDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("transitionstart", function TuiAutofilledDirective_transitionstart_HostBindingHandler($event) {
        return ctx.transitionStartHandler($event);
      });
    }
    if (rf & 2) {
      ɵɵclassProp("_autofilled", ctx.autofilled);
    }
  },
  outputs: {
    tuiAutofilledChange: "tuiAutofilledChange"
  }
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiAutofilledDirective, [{
    type: Directive,
    args: [{
      selector: "[tuiAutofilledChange]",
      host: {
        class: "tui-autofill"
      }
    }]
  }], function() {
    return [{
      type: TuiDirectiveStylesService,
      decorators: [{
        type: Inject,
        args: [TuiDirectiveStylesService]
      }]
    }];
  }, {
    autofilled: [{
      type: HostBinding,
      args: ["class._autofilled"]
    }],
    tuiAutofilledChange: [{
      type: Output
    }],
    transitionStartHandler: [{
      type: HostListener,
      args: ["transitionstart", ["$event"]]
    }]
  });
})();
var TuiAutofilledModule = class {
};
TuiAutofilledModule.ɵfac = function TuiAutofilledModule_Factory(t) {
  return new (t || TuiAutofilledModule)();
};
TuiAutofilledModule.ɵmod = ɵɵdefineNgModule({
  type: TuiAutofilledModule,
  declarations: [TuiAutofilledDirective, TuiAutofilledStyleComponent],
  exports: [TuiAutofilledDirective]
});
TuiAutofilledModule.ɵinj = ɵɵdefineInjector({});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiAutofilledModule, [{
    type: NgModule,
    args: [{
      declarations: [TuiAutofilledDirective, TuiAutofilledStyleComponent],
      exports: [TuiAutofilledDirective]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/cdk/fesm2015/taiga-ui-cdk-directives-checked.js
var TuiCheckedDirective = class {
  constructor() {
    this.indeterminate = false;
    this.checked = false;
    this.tuiCheckedChange = new EventEmitter();
  }
  get isChecked() {
    return this.checked;
  }
  get isIndeterminate() {
    return this.indeterminate;
  }
  set tuiChecked(checked) {
    this.checked = checked || false;
    this.indeterminate = checked === null;
  }
  onChange({
    checked
  }) {
    this.checked = checked;
    this.indeterminate = false;
    this.tuiCheckedChange.emit(checked);
  }
};
TuiCheckedDirective.ɵfac = function TuiCheckedDirective_Factory(t) {
  return new (t || TuiCheckedDirective)();
};
TuiCheckedDirective.ɵdir = ɵɵdefineDirective({
  type: TuiCheckedDirective,
  selectors: [["input", "tuiChecked", ""], ["input", "tuiCheckedChange", ""]],
  hostVars: 2,
  hostBindings: function TuiCheckedDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("change", function TuiCheckedDirective_change_HostBindingHandler($event) {
        return ctx.onChange($event.target);
      });
    }
    if (rf & 2) {
      ɵɵhostProperty("checked", ctx.isChecked)("indeterminate", ctx.isIndeterminate);
    }
  },
  inputs: {
    tuiChecked: "tuiChecked"
  },
  outputs: {
    tuiCheckedChange: "tuiCheckedChange"
  }
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiCheckedDirective, [{
    type: Directive,
    args: [{
      selector: "input[tuiChecked], input[tuiCheckedChange]"
    }]
  }], null, {
    isChecked: [{
      type: HostBinding,
      args: ["checked"]
    }],
    isIndeterminate: [{
      type: HostBinding,
      args: ["indeterminate"]
    }],
    tuiChecked: [{
      type: Input
    }],
    tuiCheckedChange: [{
      type: Output
    }],
    onChange: [{
      type: HostListener,
      args: ["change", ["$event.target"]]
    }]
  });
})();
var TuiCheckedModule = class {
};
TuiCheckedModule.ɵfac = function TuiCheckedModule_Factory(t) {
  return new (t || TuiCheckedModule)();
};
TuiCheckedModule.ɵmod = ɵɵdefineNgModule({
  type: TuiCheckedModule,
  declarations: [TuiCheckedDirective],
  exports: [TuiCheckedDirective]
});
TuiCheckedModule.ɵinj = ɵɵdefineInjector({});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiCheckedModule, [{
    type: NgModule,
    args: [{
      declarations: [TuiCheckedDirective],
      exports: [TuiCheckedDirective]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/cdk/fesm2015/taiga-ui-cdk-directives-click-outside.js
var TuiClickOutsideDirective = class {
  constructor(zone, doc, el) {
    this.zone = zone;
    this.doc = doc;
    this.el = el;
    this.tuiClickOutside = fromEvent(this.doc, "mouseup").pipe(map(tuiGetActualTarget), filter((target) => this.isOutside(target)), tuiZoneOptimized(this.zone));
  }
  isOutside(target) {
    return target === this.el.nativeElement || !tuiContainsOrAfter(this.el.nativeElement, target);
  }
};
TuiClickOutsideDirective.ɵfac = function TuiClickOutsideDirective_Factory(t) {
  return new (t || TuiClickOutsideDirective)(ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(DOCUMENT), ɵɵdirectiveInject(ElementRef));
};
TuiClickOutsideDirective.ɵdir = ɵɵdefineDirective({
  type: TuiClickOutsideDirective,
  selectors: [["", "tuiClickOutside", ""]],
  outputs: {
    tuiClickOutside: "tuiClickOutside"
  }
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiClickOutsideDirective, [{
    type: Directive,
    args: [{
      selector: "[tuiClickOutside]"
    }]
  }], function() {
    return [{
      type: NgZone,
      decorators: [{
        type: Inject,
        args: [NgZone]
      }]
    }, {
      type: Document,
      decorators: [{
        type: Inject,
        args: [DOCUMENT]
      }]
    }, {
      type: ElementRef,
      decorators: [{
        type: Inject,
        args: [ElementRef]
      }]
    }];
  }, {
    tuiClickOutside: [{
      type: Output
    }]
  });
})();
var TuiClickOutsideModule = class {
};
TuiClickOutsideModule.ɵfac = function TuiClickOutsideModule_Factory(t) {
  return new (t || TuiClickOutsideModule)();
};
TuiClickOutsideModule.ɵmod = ɵɵdefineNgModule({
  type: TuiClickOutsideModule,
  declarations: [TuiClickOutsideDirective],
  exports: [TuiClickOutsideDirective]
});
TuiClickOutsideModule.ɵinj = ɵɵdefineInjector({});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiClickOutsideModule, [{
    type: NgModule,
    args: [{
      declarations: [TuiClickOutsideDirective],
      exports: [TuiClickOutsideDirective]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/cdk/fesm2015/taiga-ui-cdk-directives-control.js
var TuiControlDirective = class {
  constructor(ngControl) {
    this.ngControl = ngControl;
  }
  get control() {
    return this.ngControl.control;
  }
};
TuiControlDirective.ɵfac = function TuiControlDirective_Factory(t) {
  return new (t || TuiControlDirective)(ɵɵdirectiveInject(NgControl));
};
TuiControlDirective.ɵdir = ɵɵdefineDirective({
  type: TuiControlDirective,
  selectors: [["", "tuiControl", ""]],
  exportAs: ["ngControl"]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiControlDirective, [{
    type: Directive,
    args: [{
      selector: "[tuiControl]",
      exportAs: "ngControl"
    }]
  }], function() {
    return [{
      type: NgControl,
      decorators: [{
        type: Inject,
        args: [NgControl]
      }]
    }];
  }, null);
})();
var TuiControlModule = class {
};
TuiControlModule.ɵfac = function TuiControlModule_Factory(t) {
  return new (t || TuiControlModule)();
};
TuiControlModule.ɵmod = ɵɵdefineNgModule({
  type: TuiControlModule,
  declarations: [TuiControlDirective],
  exports: [TuiControlDirective]
});
TuiControlModule.ɵinj = ɵɵdefineInjector({});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiControlModule, [{
    type: NgModule,
    args: [{
      declarations: [TuiControlDirective],
      exports: [TuiControlDirective]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/cdk/fesm2015/taiga-ui-cdk-directives-copy-processor.js
var TuiCopyProcessorDirective = class {
  constructor(win) {
    this.win = win;
    this.tuiCopyProcessor = identity;
  }
  onCopy(event) {
    var _a;
    const text = tuiGetSelectedText(this.win);
    if (text) {
      (_a = event.clipboardData) === null || _a === void 0 ? void 0 : _a.setData("text/plain", this.tuiCopyProcessor(text));
    }
  }
};
TuiCopyProcessorDirective.ɵfac = function TuiCopyProcessorDirective_Factory(t) {
  return new (t || TuiCopyProcessorDirective)(ɵɵdirectiveInject(WINDOW));
};
TuiCopyProcessorDirective.ɵdir = ɵɵdefineDirective({
  type: TuiCopyProcessorDirective,
  selectors: [["", "tuiCopyProcessor", ""]],
  hostBindings: function TuiCopyProcessorDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("copy.prevent", function TuiCopyProcessorDirective_copy_prevent_HostBindingHandler($event) {
        return ctx.onCopy($event);
      });
    }
  },
  inputs: {
    tuiCopyProcessor: "tuiCopyProcessor"
  }
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiCopyProcessorDirective, [{
    type: Directive,
    args: [{
      selector: "[tuiCopyProcessor]"
    }]
  }], function() {
    return [{
      type: Window,
      decorators: [{
        type: Inject,
        args: [WINDOW]
      }]
    }];
  }, {
    tuiCopyProcessor: [{
      type: Input
    }],
    onCopy: [{
      type: HostListener,
      args: ["copy.prevent", ["$event"]]
    }]
  });
})();
var TuiCopyProcessorModule = class {
};
TuiCopyProcessorModule.ɵfac = function TuiCopyProcessorModule_Factory(t) {
  return new (t || TuiCopyProcessorModule)();
};
TuiCopyProcessorModule.ɵmod = ɵɵdefineNgModule({
  type: TuiCopyProcessorModule,
  declarations: [TuiCopyProcessorDirective],
  exports: [TuiCopyProcessorDirective]
});
TuiCopyProcessorModule.ɵinj = ɵɵdefineInjector({});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiCopyProcessorModule, [{
    type: NgModule,
    args: [{
      declarations: [TuiCopyProcessorDirective],
      exports: [TuiCopyProcessorDirective]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/cdk/fesm2015/taiga-ui-cdk-directives-drag.js
var TuiDragDirective = class {
  constructor(el) {
    this.el = el;
    this.dragAndDropFrom$ = tuiDragAndDropFrom(this.el.nativeElement);
    this.start = this.dragAndDropFrom$.pipe(filter(({
      stage
    }) => stage === TuiDragStage.Start), map(({
      event
    }) => event));
    this.continues = this.dragAndDropFrom$.pipe(filter(({
      stage
    }) => stage === TuiDragStage.Continues), map(({
      event
    }) => event));
    this.end = this.dragAndDropFrom$.pipe(filter(({
      stage
    }) => stage === TuiDragStage.End), map(({
      event
    }) => event));
  }
};
TuiDragDirective.ɵfac = function TuiDragDirective_Factory(t) {
  return new (t || TuiDragDirective)(ɵɵdirectiveInject(ElementRef));
};
TuiDragDirective.ɵdir = ɵɵdefineDirective({
  type: TuiDragDirective,
  selectors: [["", "tuiDragStart", ""], ["", "tuiDragContinues", ""], ["", "tuiDragEnd", ""]],
  outputs: {
    start: "tuiDragStart",
    continues: "tuiDragContinues",
    end: "tuiDragEnd"
  }
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDragDirective, [{
    type: Directive,
    args: [{
      selector: "[tuiDragStart], [tuiDragContinues], [tuiDragEnd]"
    }]
  }], function() {
    return [{
      type: ElementRef,
      decorators: [{
        type: Inject,
        args: [ElementRef]
      }]
    }];
  }, {
    start: [{
      type: Output,
      args: ["tuiDragStart"]
    }],
    continues: [{
      type: Output,
      args: ["tuiDragContinues"]
    }],
    end: [{
      type: Output,
      args: ["tuiDragEnd"]
    }]
  });
})();
var TuiDragModule = class {
};
TuiDragModule.ɵfac = function TuiDragModule_Factory(t) {
  return new (t || TuiDragModule)();
};
TuiDragModule.ɵmod = ɵɵdefineNgModule({
  type: TuiDragModule,
  declarations: [TuiDragDirective],
  exports: [TuiDragDirective]
});
TuiDragModule.ɵinj = ɵɵdefineInjector({});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDragModule, [{
    type: NgModule,
    args: [{
      declarations: [TuiDragDirective],
      exports: [TuiDragDirective]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/cdk/fesm2015/taiga-ui-cdk-directives-droppable.js
var TuiDroppableDirective = class {
  constructor({
    nativeElement
  }, destroy$) {
    this.tuiDroppableDropped = tuiTypedFromEvent(nativeElement, "drop").pipe(tuiPreventDefault(), map((event) => event.dataTransfer), filter(tuiIsPresent));
    this.tuiDroppableDragOverChange = tuiTypedFromEvent(nativeElement, "dragenter").pipe(switchMap(({
      target,
      dataTransfer
    }) => merge(tuiTypedFromEvent(nativeElement, "dragleave").pipe(filter((event) => event.target === target)), tuiTypedFromEvent(nativeElement, "drop")).pipe(map(() => null), startWith(dataTransfer))), distinctUntilChanged((a, b) => !!a && !!b || !a && !b));
    tuiTypedFromEvent(nativeElement, "dragover").pipe(tuiPreventDefault(), takeUntil(destroy$)).subscribe();
  }
};
TuiDroppableDirective.ɵfac = function TuiDroppableDirective_Factory(t) {
  return new (t || TuiDroppableDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(TuiDestroyService, 2));
};
TuiDroppableDirective.ɵdir = ɵɵdefineDirective({
  type: TuiDroppableDirective,
  selectors: [["", "tuiDroppableDropped", ""], ["", "tuiDroppableDragOverChange", ""]],
  outputs: {
    tuiDroppableDropped: "tuiDroppableDropped",
    tuiDroppableDragOverChange: "tuiDroppableDragOverChange"
  },
  features: [ɵɵProvidersFeature([TuiDestroyService])]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDroppableDirective, [{
    type: Directive,
    args: [{
      selector: "[tuiDroppableDropped], [tuiDroppableDragOverChange]",
      providers: [TuiDestroyService]
    }]
  }], function() {
    return [{
      type: ElementRef,
      decorators: [{
        type: Inject,
        args: [ElementRef]
      }]
    }, {
      type: Observable,
      decorators: [{
        type: Self
      }, {
        type: Inject,
        args: [TuiDestroyService]
      }]
    }];
  }, {
    tuiDroppableDropped: [{
      type: Output
    }],
    tuiDroppableDragOverChange: [{
      type: Output
    }]
  });
})();
var TuiDroppableModule = class {
};
TuiDroppableModule.ɵfac = function TuiDroppableModule_Factory(t) {
  return new (t || TuiDroppableModule)();
};
TuiDroppableModule.ɵmod = ɵɵdefineNgModule({
  type: TuiDroppableModule,
  declarations: [TuiDroppableDirective],
  exports: [TuiDroppableDirective]
});
TuiDroppableModule.ɵinj = ɵɵdefineInjector({});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDroppableModule, [{
    type: NgModule,
    args: [{
      declarations: [TuiDroppableDirective],
      exports: [TuiDroppableDirective]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/cdk/fesm2015/taiga-ui-cdk-directives-element.js
var TuiElementDirective = class {
  constructor({
    nativeElement
  }) {
    return new ElementRef(nativeElement);
  }
};
TuiElementDirective.ɵfac = function TuiElementDirective_Factory(t) {
  return new (t || TuiElementDirective)(ɵɵdirectiveInject(ElementRef));
};
TuiElementDirective.ɵdir = ɵɵdefineDirective({
  type: TuiElementDirective,
  selectors: [["", "tuiElement", ""]],
  exportAs: ["elementRef"]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiElementDirective, [{
    type: Directive,
    args: [{
      selector: "[tuiElement]",
      exportAs: "elementRef"
    }]
  }], function() {
    return [{
      type: ElementRef,
      decorators: [{
        type: Inject,
        args: [ElementRef]
      }]
    }];
  }, null);
})();
var TuiElementModule = class {
};
TuiElementModule.ɵfac = function TuiElementModule_Factory(t) {
  return new (t || TuiElementModule)();
};
TuiElementModule.ɵmod = ɵɵdefineNgModule({
  type: TuiElementModule,
  declarations: [TuiElementDirective],
  exports: [TuiElementDirective]
});
TuiElementModule.ɵinj = ɵɵdefineInjector({});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiElementModule, [{
    type: NgModule,
    args: [{
      declarations: [TuiElementDirective],
      exports: [TuiElementDirective]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/cdk/fesm2015/taiga-ui-cdk-directives-focus-trap.js
var TuiFocusTrapDirective = class {
  constructor(doc, el, renderer) {
    this.doc = doc;
    this.el = el;
    this.renderer = renderer;
    this.activeElement = tuiGetNativeFocused(this.doc);
    void Promise.resolve().then(() => this.el.nativeElement.focus());
  }
  onBlur() {
    this.renderer.removeAttribute(this.el.nativeElement, "tabIndex");
  }
  onFocusIn(node) {
    const {
      nativeElement
    } = this.el;
    if (tuiContainsOrAfter(nativeElement, node)) {
      return;
    }
    const focusable = tuiGetClosestFocusable({
      initial: nativeElement,
      root: nativeElement
    });
    if (focusable) {
      focusable.focus();
    }
  }
  ngOnDestroy() {
    tuiBlurNativeFocused(this.doc);
    Promise.resolve().then(() => {
      if (tuiIsHTMLElement(this.activeElement)) {
        this.activeElement.focus();
      }
    });
  }
};
TuiFocusTrapDirective.ɵfac = function TuiFocusTrapDirective_Factory(t) {
  return new (t || TuiFocusTrapDirective)(ɵɵdirectiveInject(DOCUMENT), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2));
};
TuiFocusTrapDirective.ɵdir = ɵɵdefineDirective({
  type: TuiFocusTrapDirective,
  selectors: [["", "tuiFocusTrap", ""]],
  hostAttrs: ["tabIndex", "0"],
  hostBindings: function TuiFocusTrapDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("blur", function TuiFocusTrapDirective_blur_HostBindingHandler() {
        return ctx.onBlur();
      })("focusin.silent", function TuiFocusTrapDirective_focusin_silent_HostBindingHandler($event) {
        return ctx.onFocusIn($event.target);
      }, false, ɵɵresolveWindow);
    }
  }
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiFocusTrapDirective, [{
    type: Directive,
    args: [{
      selector: "[tuiFocusTrap]",
      host: {
        tabIndex: "0"
      }
    }]
  }], function() {
    return [{
      type: Document,
      decorators: [{
        type: Inject,
        args: [DOCUMENT]
      }]
    }, {
      type: ElementRef,
      decorators: [{
        type: Inject,
        args: [ElementRef]
      }]
    }, {
      type: Renderer2,
      decorators: [{
        type: Inject,
        args: [Renderer2]
      }]
    }];
  }, {
    onBlur: [{
      type: HostListener,
      args: ["blur"]
    }],
    onFocusIn: [{
      type: HostListener,
      args: ["window:focusin.silent", ["$event.target"]]
    }]
  });
})();
var TuiFocusTrapModule = class {
};
TuiFocusTrapModule.ɵfac = function TuiFocusTrapModule_Factory(t) {
  return new (t || TuiFocusTrapModule)();
};
TuiFocusTrapModule.ɵmod = ɵɵdefineNgModule({
  type: TuiFocusTrapModule,
  declarations: [TuiFocusTrapDirective],
  exports: [TuiFocusTrapDirective]
});
TuiFocusTrapModule.ɵinj = ɵɵdefineInjector({});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiFocusTrapModule, [{
    type: NgModule,
    args: [{
      declarations: [TuiFocusTrapDirective],
      exports: [TuiFocusTrapDirective]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/cdk/fesm2015/taiga-ui-cdk-directives-focus-visible.js
var TuiFocusVisibleDirective = class {
  constructor(tuiFocusVisibleChange) {
    this.tuiFocusVisibleChange = tuiFocusVisibleChange;
  }
};
TuiFocusVisibleDirective.ɵfac = function TuiFocusVisibleDirective_Factory(t) {
  return new (t || TuiFocusVisibleDirective)(ɵɵdirectiveInject(TuiFocusVisibleService));
};
TuiFocusVisibleDirective.ɵdir = ɵɵdefineDirective({
  type: TuiFocusVisibleDirective,
  selectors: [["", "tuiFocusVisibleChange", ""]],
  outputs: {
    tuiFocusVisibleChange: "tuiFocusVisibleChange"
  },
  features: [ɵɵProvidersFeature([TuiDestroyService, TuiFocusVisibleService])]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiFocusVisibleDirective, [{
    type: Directive,
    args: [{
      selector: "[tuiFocusVisibleChange]",
      outputs: ["tuiFocusVisibleChange"],
      providers: [TuiDestroyService, TuiFocusVisibleService]
    }]
  }], function() {
    return [{
      type: Observable,
      decorators: [{
        type: Inject,
        args: [TuiFocusVisibleService]
      }]
    }];
  }, null);
})();
var TuiFocusVisibleModule = class {
};
TuiFocusVisibleModule.ɵfac = function TuiFocusVisibleModule_Factory(t) {
  return new (t || TuiFocusVisibleModule)();
};
TuiFocusVisibleModule.ɵmod = ɵɵdefineNgModule({
  type: TuiFocusVisibleModule,
  declarations: [TuiFocusVisibleDirective],
  exports: [TuiFocusVisibleDirective]
});
TuiFocusVisibleModule.ɵinj = ɵɵdefineInjector({});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiFocusVisibleModule, [{
    type: NgModule,
    args: [{
      declarations: [TuiFocusVisibleDirective],
      exports: [TuiFocusVisibleDirective]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/cdk/fesm2015/taiga-ui-cdk-directives-focusable.js
var TuiFocusableDirective = class {
  constructor() {
    this.focusable = true;
  }
  get tabIndex() {
    return this.focusable ? 0 : -1;
  }
};
TuiFocusableDirective.ɵfac = function TuiFocusableDirective_Factory(t) {
  return new (t || TuiFocusableDirective)();
};
TuiFocusableDirective.ɵdir = ɵɵdefineDirective({
  type: TuiFocusableDirective,
  selectors: [["", "tuiFocusable", ""]],
  hostVars: 1,
  hostBindings: function TuiFocusableDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵhostProperty("tabIndex", ctx.tabIndex);
    }
  },
  inputs: {
    focusable: ["tuiFocusable", "focusable"]
  }
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiFocusableDirective, [{
    type: Directive,
    args: [{
      selector: "[tuiFocusable]"
    }]
  }], null, {
    focusable: [{
      type: Input,
      args: ["tuiFocusable"]
    }],
    tabIndex: [{
      type: HostBinding,
      args: ["tabIndex"]
    }]
  });
})();
var TuiFocusableModule = class {
};
TuiFocusableModule.ɵfac = function TuiFocusableModule_Factory(t) {
  return new (t || TuiFocusableModule)();
};
TuiFocusableModule.ɵmod = ɵɵdefineNgModule({
  type: TuiFocusableModule,
  declarations: [TuiFocusableDirective],
  exports: [TuiFocusableDirective]
});
TuiFocusableModule.ɵinj = ɵɵdefineInjector({});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiFocusableModule, [{
    type: NgModule,
    args: [{
      declarations: [TuiFocusableDirective],
      exports: [TuiFocusableDirective]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/cdk/fesm2015/taiga-ui-cdk-directives-focused.js
var TuiFocusedDirective = class {
  constructor({
    nativeElement
  }, zone) {
    this.tuiFocusedChange = merge(tuiTypedFromEvent(nativeElement, "focusin"), tuiTypedFromEvent(nativeElement, "focusout")).pipe(map(() => tuiIsNativeFocused(nativeElement)), startWith(false), distinctUntilChanged(), skip(1), tuiZoneOptimized(zone));
  }
};
TuiFocusedDirective.ɵfac = function TuiFocusedDirective_Factory(t) {
  return new (t || TuiFocusedDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
};
TuiFocusedDirective.ɵdir = ɵɵdefineDirective({
  type: TuiFocusedDirective,
  selectors: [["", "tuiFocusedChange", ""]],
  outputs: {
    tuiFocusedChange: "tuiFocusedChange"
  }
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiFocusedDirective, [{
    type: Directive,
    args: [{
      selector: "[tuiFocusedChange]"
    }]
  }], function() {
    return [{
      type: ElementRef,
      decorators: [{
        type: Inject,
        args: [ElementRef]
      }]
    }, {
      type: NgZone,
      decorators: [{
        type: Inject,
        args: [NgZone]
      }]
    }];
  }, {
    tuiFocusedChange: [{
      type: Output
    }]
  });
})();
var TuiFocusedModule = class {
};
TuiFocusedModule.ɵfac = function TuiFocusedModule_Factory(t) {
  return new (t || TuiFocusedModule)();
};
TuiFocusedModule.ɵmod = ɵɵdefineNgModule({
  type: TuiFocusedModule,
  declarations: [TuiFocusedDirective],
  exports: [TuiFocusedDirective]
});
TuiFocusedModule.ɵinj = ɵɵdefineInjector({});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiFocusedModule, [{
    type: NgModule,
    args: [{
      declarations: [TuiFocusedDirective],
      exports: [TuiFocusedDirective]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/cdk/fesm2015/taiga-ui-cdk-directives-for.js
var TuiForDirective = class {
  constructor(vcr) {
    this.vcr = vcr;
    this.ngForOf = [];
  }
  ngOnChanges() {
    var _a, _b;
    (_a = this.ref) === null || _a === void 0 ? void 0 : _a.destroy();
    if (((_b = this.ngForOf) === null || _b === void 0 ? void 0 : _b.length) === 0 && this.ngForEmpty) {
      this.ref = this.vcr.createEmbeddedView(this.ngForEmpty);
    } else if (!this.ngForOf && this.ngForElse) {
      this.ref = this.vcr.createEmbeddedView(this.ngForElse);
    }
  }
};
TuiForDirective.ɵfac = function TuiForDirective_Factory(t) {
  return new (t || TuiForDirective)(ɵɵdirectiveInject(ViewContainerRef));
};
TuiForDirective.ɵdir = ɵɵdefineDirective({
  type: TuiForDirective,
  selectors: [["", "ngFor", "", "ngForOf", "", "ngForElse", ""], ["", "ngFor", "", "ngForOf", "", "ngForEmpty", ""]],
  inputs: {
    ngForOf: "ngForOf",
    ngForElse: "ngForElse",
    ngForEmpty: "ngForEmpty"
  },
  features: [ɵɵNgOnChangesFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiForDirective, [{
    type: Directive,
    args: [{
      selector: "[ngFor][ngForOf][ngForElse],[ngFor][ngForOf][ngForEmpty]"
    }]
  }], function() {
    return [{
      type: ViewContainerRef,
      decorators: [{
        type: Inject,
        args: [ViewContainerRef]
      }]
    }];
  }, {
    ngForOf: [{
      type: Input
    }],
    ngForElse: [{
      type: Input
    }],
    ngForEmpty: [{
      type: Input
    }]
  });
})();
var TuiForModule = class {
};
TuiForModule.ɵfac = function TuiForModule_Factory(t) {
  return new (t || TuiForModule)();
};
TuiForModule.ɵmod = ɵɵdefineNgModule({
  type: TuiForModule,
  declarations: [TuiForDirective],
  exports: [TuiForDirective]
});
TuiForModule.ɵinj = ɵɵdefineInjector({});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiForModule, [{
    type: NgModule,
    args: [{
      declarations: [TuiForDirective],
      exports: [TuiForDirective]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/cdk/fesm2015/taiga-ui-cdk-directives-for-async.js
var TuiForAsyncDirective = class {
  constructor(view, template) {
    this.view = view;
    this.template = template;
    this.destroy$ = new Subject();
    this.tuiForAsyncTimeout = 10;
  }
  ngOnChanges() {
    this.clearViewForOldNodes();
    this.createAsyncViewForNewNodes();
  }
  ngOnDestroy() {
    this.clearViewForOldNodes();
    this.destroy$.complete();
  }
  createAsyncViewForNewNodes() {
    from(this.iterableValues).pipe(concatMap((entry) => this.tuiForAsyncTimeout > 0 ? of(entry).pipe(delay(this.tuiForAsyncTimeout)) : of(entry)), takeUntil(this.destroy$)).subscribe(([index, item]) => this.createEmbeddedView(item, index));
  }
  get iterableValues() {
    var _a;
    return ((_a = this.tuiForAsyncOf) !== null && _a !== void 0 ? _a : []).entries();
  }
  createEmbeddedView(item, index) {
    this.view.createEmbeddedView(this.template, {
      $implicit: item,
      index
    }, index).detectChanges();
  }
  clearViewForOldNodes() {
    this.destroy$.next();
    this.view.clear();
  }
};
TuiForAsyncDirective.ɵfac = function TuiForAsyncDirective_Factory(t) {
  return new (t || TuiForAsyncDirective)(ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(TemplateRef));
};
TuiForAsyncDirective.ɵdir = ɵɵdefineDirective({
  type: TuiForAsyncDirective,
  selectors: [["", "tuiForAsync", "", "tuiForAsyncOf", ""]],
  inputs: {
    tuiForAsyncOf: "tuiForAsyncOf",
    tuiForAsyncTimeout: "tuiForAsyncTimeout"
  },
  features: [ɵɵNgOnChangesFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiForAsyncDirective, [{
    type: Directive,
    args: [{
      selector: "[tuiForAsync][tuiForAsyncOf]"
    }]
  }], function() {
    return [{
      type: ViewContainerRef,
      decorators: [{
        type: Inject,
        args: [ViewContainerRef]
      }]
    }, {
      type: TemplateRef,
      decorators: [{
        type: Inject,
        args: [TemplateRef]
      }]
    }];
  }, {
    tuiForAsyncOf: [{
      type: Input
    }],
    tuiForAsyncTimeout: [{
      type: Input
    }]
  });
})();
var TuiForAsyncModule = class {
};
TuiForAsyncModule.ɵfac = function TuiForAsyncModule_Factory(t) {
  return new (t || TuiForAsyncModule)();
};
TuiForAsyncModule.ɵmod = ɵɵdefineNgModule({
  type: TuiForAsyncModule,
  declarations: [TuiForAsyncDirective],
  exports: [TuiForAsyncDirective]
});
TuiForAsyncModule.ɵinj = ɵɵdefineInjector({});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiForAsyncModule, [{
    type: NgModule,
    args: [{
      declarations: [TuiForAsyncDirective],
      exports: [TuiForAsyncDirective]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/cdk/fesm2015/taiga-ui-cdk-directives-high-dpi.js
var TuiHighDpiDirective = class {
  constructor({
    devicePixelRatio
  }, viewContainer, templateRef) {
    if (devicePixelRatio > 1) {
      viewContainer.createEmbeddedView(templateRef);
    }
  }
};
TuiHighDpiDirective.ɵfac = function TuiHighDpiDirective_Factory(t) {
  return new (t || TuiHighDpiDirective)(ɵɵdirectiveInject(WINDOW), ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(TemplateRef));
};
TuiHighDpiDirective.ɵdir = ɵɵdefineDirective({
  type: TuiHighDpiDirective,
  selectors: [["", "tuiHighDpi", ""]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiHighDpiDirective, [{
    type: Directive,
    args: [{
      selector: "[tuiHighDpi]"
    }]
  }], function() {
    return [{
      type: Window,
      decorators: [{
        type: Inject,
        args: [WINDOW]
      }]
    }, {
      type: ViewContainerRef,
      decorators: [{
        type: Inject,
        args: [ViewContainerRef]
      }]
    }, {
      type: TemplateRef,
      decorators: [{
        type: Inject,
        args: [TemplateRef]
      }]
    }];
  }, null);
})();
var TuiHighDpiModule = class {
};
TuiHighDpiModule.ɵfac = function TuiHighDpiModule_Factory(t) {
  return new (t || TuiHighDpiModule)();
};
TuiHighDpiModule.ɵmod = ɵɵdefineNgModule({
  type: TuiHighDpiModule,
  declarations: [TuiHighDpiDirective],
  exports: [TuiHighDpiDirective]
});
TuiHighDpiModule.ɵinj = ɵɵdefineInjector({});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiHighDpiModule, [{
    type: NgModule,
    args: [{
      declarations: [TuiHighDpiDirective],
      exports: [TuiHighDpiDirective]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/cdk/fesm2015/taiga-ui-cdk-directives-hovered.js
function movedOut({
  currentTarget,
  relatedTarget
}) {
  return !tuiIsElement(relatedTarget) || !tuiIsElement(currentTarget) || !currentTarget.contains(relatedTarget);
}
var TuiHoveredService = class extends Observable {
  constructor(el, zone) {
    super((subscriber) => this.stream$.subscribe(subscriber));
    this.el = el;
    this.zone = zone;
    this.stream$ = merge(
      tuiTypedFromEvent(this.el.nativeElement, "mouseenter").pipe(map(ALWAYS_TRUE_HANDLER)),
      tuiTypedFromEvent(this.el.nativeElement, "mouseleave").pipe(map(ALWAYS_FALSE_HANDLER)),
      // Hello, Safari
      tuiTypedFromEvent(this.el.nativeElement, "mouseout").pipe(filter(movedOut), map(ALWAYS_FALSE_HANDLER))
    ).pipe(distinctUntilChanged(), tuiZoneOptimized(this.zone));
  }
};
TuiHoveredService.ɵfac = function TuiHoveredService_Factory(t) {
  return new (t || TuiHoveredService)(ɵɵinject(ElementRef), ɵɵinject(NgZone));
};
TuiHoveredService.ɵprov = ɵɵdefineInjectable({
  token: TuiHoveredService,
  factory: TuiHoveredService.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiHoveredService, [{
    type: Injectable
  }], function() {
    return [{
      type: ElementRef,
      decorators: [{
        type: Inject,
        args: [ElementRef]
      }]
    }, {
      type: NgZone,
      decorators: [{
        type: Inject,
        args: [NgZone]
      }]
    }];
  }, null);
})();
var TuiHoveredDirective = class {
  constructor(tuiHoveredChange) {
    this.tuiHoveredChange = tuiHoveredChange;
  }
};
TuiHoveredDirective.ɵfac = function TuiHoveredDirective_Factory(t) {
  return new (t || TuiHoveredDirective)(ɵɵdirectiveInject(TuiHoveredService));
};
TuiHoveredDirective.ɵdir = ɵɵdefineDirective({
  type: TuiHoveredDirective,
  selectors: [["", "tuiHoveredChange", ""]],
  outputs: {
    tuiHoveredChange: "tuiHoveredChange"
  },
  features: [ɵɵProvidersFeature([TuiHoveredService])]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiHoveredDirective, [{
    type: Directive,
    args: [{
      selector: "[tuiHoveredChange]",
      outputs: ["tuiHoveredChange"],
      providers: [TuiHoveredService]
    }]
  }], function() {
    return [{
      type: Observable,
      decorators: [{
        type: Inject,
        args: [TuiHoveredService]
      }]
    }];
  }, null);
})();
var TuiHoveredModule = class {
};
TuiHoveredModule.ɵfac = function TuiHoveredModule_Factory(t) {
  return new (t || TuiHoveredModule)();
};
TuiHoveredModule.ɵmod = ɵɵdefineNgModule({
  type: TuiHoveredModule,
  declarations: [TuiHoveredDirective],
  exports: [TuiHoveredDirective]
});
TuiHoveredModule.ɵinj = ɵɵdefineInjector({});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiHoveredModule, [{
    type: NgModule,
    args: [{
      declarations: [TuiHoveredDirective],
      exports: [TuiHoveredDirective]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/cdk/fesm2015/taiga-ui-cdk-directives-item.js
var TuiItemDirective = class {
};
TuiItemDirective.ɵfac = function TuiItemDirective_Factory(t) {
  return new (t || TuiItemDirective)();
};
TuiItemDirective.ɵdir = ɵɵdefineDirective({
  type: TuiItemDirective,
  selectors: [["", "tuiItem", ""]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiItemDirective, [{
    type: Directive,
    args: [{
      selector: "[tuiItem]"
    }]
  }], null, null);
})();
var TuiItemModule = class {
};
TuiItemModule.ɵfac = function TuiItemModule_Factory(t) {
  return new (t || TuiItemModule)();
};
TuiItemModule.ɵmod = ɵɵdefineNgModule({
  type: TuiItemModule,
  declarations: [TuiItemDirective],
  exports: [TuiItemDirective]
});
TuiItemModule.ɵinj = ɵɵdefineInjector({});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiItemModule, [{
    type: NgModule,
    args: [{
      declarations: [TuiItemDirective],
      exports: [TuiItemDirective]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/cdk/fesm2015/taiga-ui-cdk-directives-let.js
var TuiLetContext = class {
  constructor(internalDirectiveInstance) {
    this.internalDirectiveInstance = internalDirectiveInstance;
  }
  get $implicit() {
    return this.internalDirectiveInstance.tuiLet;
  }
  get tuiLet() {
    return this.internalDirectiveInstance.tuiLet;
  }
};
var TuiLetDirective = class {
  constructor(viewContainer, templateRef) {
    viewContainer.createEmbeddedView(templateRef, new TuiLetContext(this));
  }
  /**
   * Asserts the correct type of the context for the template that `TuiLet` will render.
   *
   * The presence of this method is a signal to the Ivy template type-check compiler that the
   * `TuiLet` structural directive renders its template with a specific context type.
   */
  static ngTemplateContextGuard(_dir, _ctx) {
    return true;
  }
};
TuiLetDirective.ɵfac = function TuiLetDirective_Factory(t) {
  return new (t || TuiLetDirective)(ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(TemplateRef));
};
TuiLetDirective.ɵdir = ɵɵdefineDirective({
  type: TuiLetDirective,
  selectors: [["", "tuiLet", ""]],
  inputs: {
    tuiLet: "tuiLet"
  }
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiLetDirective, [{
    type: Directive,
    args: [{
      selector: "[tuiLet]"
    }]
  }], function() {
    return [{
      type: ViewContainerRef,
      decorators: [{
        type: Inject,
        args: [ViewContainerRef]
      }]
    }, {
      type: TemplateRef,
      decorators: [{
        type: Inject,
        args: [TemplateRef]
      }]
    }];
  }, {
    tuiLet: [{
      type: Input
    }]
  });
})();
var TuiLetModule = class {
};
TuiLetModule.ɵfac = function TuiLetModule_Factory(t) {
  return new (t || TuiLetModule)();
};
TuiLetModule.ɵmod = ɵɵdefineNgModule({
  type: TuiLetModule,
  declarations: [TuiLetDirective],
  exports: [TuiLetDirective]
});
TuiLetModule.ɵinj = ɵɵdefineInjector({});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiLetModule, [{
    type: NgModule,
    args: [{
      declarations: [TuiLetDirective],
      exports: [TuiLetDirective]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/cdk/fesm2015/taiga-ui-cdk-directives-media.js
var TuiMediaDirective = class {
  constructor(el) {
    this.el = el;
    this.playbackRate = 1;
    this.volume = 1;
    this.currentTimeChange = new EventEmitter();
    this.pausedChange = new EventEmitter();
    this.volumeChange = new EventEmitter();
  }
  set playbackRateSetter(playbackRate) {
    this.updatePlaybackRate(playbackRate);
  }
  set currentTime(currentTime) {
    if (Math.abs(currentTime - this.currentTime) > 0.05) {
      this.el.nativeElement.currentTime = currentTime;
    }
  }
  get currentTime() {
    return this.el.nativeElement.currentTime;
  }
  set paused(paused) {
    if (paused) {
      this.el.nativeElement.pause();
    } else {
      void this.el.nativeElement.play();
      this.updatePlaybackRate(this.playbackRate);
    }
  }
  get paused() {
    return this.el.nativeElement.paused;
  }
  // @bad TODO: Make sure no other events can affect this like network issues etc.
  onPausedChange(paused) {
    this.pausedChange.emit(paused);
    this.updatePlaybackRate(this.playbackRate);
  }
  onVolumeChange() {
    this.volume = this.el.nativeElement.volume;
    this.volumeChange.emit(this.volume);
  }
  onCurrentTimeChange() {
    this.currentTimeChange.emit(this.currentTime);
  }
  changeDetectionTrigger() {
  }
  updatePlaybackRate(playbackRate) {
    this.playbackRate = playbackRate;
    this.el.nativeElement.playbackRate = this.playbackRate;
  }
};
TuiMediaDirective.ɵfac = function TuiMediaDirective_Factory(t) {
  return new (t || TuiMediaDirective)(ɵɵdirectiveInject(ElementRef));
};
TuiMediaDirective.ɵdir = ɵɵdefineDirective({
  type: TuiMediaDirective,
  selectors: [["video", "tuiMedia", ""], ["audio", "tuiMedia", ""]],
  hostVars: 1,
  hostBindings: function TuiMediaDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("ended", function TuiMediaDirective_ended_HostBindingHandler() {
        return ctx.onPausedChange(true);
      })("pause", function TuiMediaDirective_pause_HostBindingHandler() {
        return ctx.onPausedChange(true);
      })("play", function TuiMediaDirective_play_HostBindingHandler() {
        return ctx.onPausedChange(false);
      })("volumechange", function TuiMediaDirective_volumechange_HostBindingHandler() {
        return ctx.onVolumeChange();
      })("timeupdate", function TuiMediaDirective_timeupdate_HostBindingHandler() {
        return ctx.onCurrentTimeChange();
      })("seeking", function TuiMediaDirective_seeking_HostBindingHandler() {
        return ctx.onCurrentTimeChange();
      })("seeked", function TuiMediaDirective_seeked_HostBindingHandler() {
        return ctx.onCurrentTimeChange();
      })("durationchange", function TuiMediaDirective_durationchange_HostBindingHandler() {
        return ctx.changeDetectionTrigger();
      });
    }
    if (rf & 2) {
      ɵɵhostProperty("volume", ctx.volume);
    }
  },
  inputs: {
    volume: "volume",
    playbackRateSetter: ["playbackRate", "playbackRateSetter"],
    currentTime: "currentTime",
    paused: "paused"
  },
  outputs: {
    currentTimeChange: "currentTimeChange",
    pausedChange: "pausedChange",
    volumeChange: "volumeChange"
  },
  exportAs: ["tuiMedia"]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiMediaDirective, [{
    type: Directive,
    args: [{
      selector: "video[tuiMedia], audio[tuiMedia]",
      exportAs: "tuiMedia"
    }]
  }], function() {
    return [{
      type: ElementRef,
      decorators: [{
        type: Inject,
        args: [ElementRef]
      }]
    }];
  }, {
    volume: [{
      type: Input
    }, {
      type: HostBinding,
      args: ["volume"]
    }],
    playbackRateSetter: [{
      type: Input,
      args: ["playbackRate"]
    }],
    currentTimeChange: [{
      type: Output
    }],
    pausedChange: [{
      type: Output
    }],
    volumeChange: [{
      type: Output
    }],
    currentTime: [{
      type: Input
    }],
    paused: [{
      type: Input
    }],
    onPausedChange: [{
      type: HostListener,
      args: ["ended", ["true"]]
    }, {
      type: HostListener,
      args: ["pause", ["true"]]
    }, {
      type: HostListener,
      args: ["play", ["false"]]
    }],
    onVolumeChange: [{
      type: HostListener,
      args: ["volumechange"]
    }],
    onCurrentTimeChange: [{
      type: HostListener,
      args: ["timeupdate"]
    }, {
      type: HostListener,
      args: ["seeking"]
    }, {
      type: HostListener,
      args: ["seeked"]
    }],
    changeDetectionTrigger: [{
      type: HostListener,
      args: ["durationchange"]
    }]
  });
})();
var TuiMediaModule = class {
};
TuiMediaModule.ɵfac = function TuiMediaModule_Factory(t) {
  return new (t || TuiMediaModule)();
};
TuiMediaModule.ɵmod = ɵɵdefineNgModule({
  type: TuiMediaModule,
  declarations: [TuiMediaDirective],
  exports: [TuiMediaDirective]
});
TuiMediaModule.ɵinj = ɵɵdefineInjector({});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiMediaModule, [{
    type: NgModule,
    args: [{
      declarations: [TuiMediaDirective],
      exports: [TuiMediaDirective]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/cdk/fesm2015/taiga-ui-cdk-directives-obscured.js
var TuiObscuredDirective = class {
  constructor(activeZone, obscured$) {
    this.enabled$ = new Subject();
    const mapped$ = obscured$.pipe(map((obscuredBy) => !!obscuredBy && (!activeZone || !obscuredBy.length || obscuredBy.every((element) => !activeZone.contains(element)))));
    this.tuiObscured = this.enabled$.pipe(tuiIfMap(() => mapped$));
  }
  set tuiObscuredEnabled(enabled) {
    this.enabled$.next(enabled);
  }
};
TuiObscuredDirective.ɵfac = function TuiObscuredDirective_Factory(t) {
  return new (t || TuiObscuredDirective)(ɵɵdirectiveInject(TuiActiveZoneDirective, 8), ɵɵdirectiveInject(TuiObscuredService, 2));
};
TuiObscuredDirective.ɵdir = ɵɵdefineDirective({
  type: TuiObscuredDirective,
  selectors: [["", "tuiObscured", ""]],
  inputs: {
    tuiObscuredEnabled: "tuiObscuredEnabled"
  },
  outputs: {
    tuiObscured: "tuiObscured"
  },
  features: [ɵɵProvidersFeature([TuiObscuredService, TuiParentsScrollService, TuiDestroyService])]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiObscuredDirective, [{
    type: Directive,
    args: [{
      selector: "[tuiObscured]",
      providers: [TuiObscuredService, TuiParentsScrollService, TuiDestroyService]
    }]
  }], function() {
    return [{
      type: TuiActiveZoneDirective,
      decorators: [{
        type: Optional
      }, {
        type: Inject,
        args: [TuiActiveZoneDirective]
      }]
    }, {
      type: TuiObscuredService,
      decorators: [{
        type: Self
      }, {
        type: Inject,
        args: [TuiObscuredService]
      }]
    }];
  }, {
    tuiObscuredEnabled: [{
      type: Input
    }],
    tuiObscured: [{
      type: Output
    }]
  });
})();
var TuiObscuredModule = class {
};
TuiObscuredModule.ɵfac = function TuiObscuredModule_Factory(t) {
  return new (t || TuiObscuredModule)();
};
TuiObscuredModule.ɵmod = ɵɵdefineNgModule({
  type: TuiObscuredModule,
  declarations: [TuiObscuredDirective],
  exports: [TuiObscuredDirective]
});
TuiObscuredModule.ɵinj = ɵɵdefineInjector({});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiObscuredModule, [{
    type: NgModule,
    args: [{
      declarations: [TuiObscuredDirective],
      exports: [TuiObscuredDirective]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/cdk/fesm2015/taiga-ui-cdk-directives-overscroll.js
var TuiOverscrollDirective = class {
  constructor({
    nativeElement
  }, zone, destroy$) {
    this.mode = "scroll";
    tuiTypedFromEvent(nativeElement, "wheel", {
      passive: false
    }).pipe(filter(() => this.enabled), tuiZonefree(zone), takeUntil(destroy$)).subscribe((event) => {
      this.processEvent(event, !!event.deltaY, event.deltaY ? event.deltaY < 0 : event.deltaX < 0);
    });
    tuiTypedFromEvent(nativeElement, "touchstart", {
      passive: true
    }).pipe(switchMap(({
      touches
    }) => {
      let {
        clientX,
        clientY
      } = touches[0];
      let deltaX = 0;
      let deltaY = 0;
      let vertical;
      return tuiTypedFromEvent(nativeElement, "touchmove", {
        passive: false
      }).pipe(filter(() => this.enabled), tap((event) => {
        const changedTouch = event.changedTouches[0];
        deltaX = clientX - changedTouch.clientX;
        deltaY = clientY - changedTouch.clientY;
        clientX = changedTouch.clientX;
        clientY = changedTouch.clientY;
        if (vertical === void 0) {
          vertical = Math.abs(deltaY) > Math.abs(deltaX);
        }
        this.processEvent(event, vertical, vertical ? deltaY < 0 : deltaX < 0);
      }));
    }), tuiZonefree(zone), takeUntil(destroy$)).subscribe();
  }
  get enabled() {
    return this.mode !== "none";
  }
  get overscrollBehavior() {
    return this.enabled ? "contain" : null;
  }
  processEvent(event, vertical, negative) {
    var _a;
    const {
      target,
      currentTarget,
      cancelable
    } = event;
    if (!cancelable || !tuiIsElement(target) || ((_a = target) === null || _a === void 0 ? void 0 : _a.type) === "range") {
      return;
    }
    if (this.mode === "all" && (vertical && !currentTarget.contains(tuiGetScrollParent(target)) || !vertical && !currentTarget.contains(tuiGetScrollParent(target, false)))) {
      event.preventDefault();
      return;
    }
    if (vertical && (negative && !tuiCanScroll(target, currentTarget, true, false) || !negative && !tuiCanScroll(target, currentTarget, true, true))) {
      event.preventDefault();
      return;
    }
    if (!vertical && (negative && !tuiCanScroll(target, currentTarget, false, false) || !negative && !tuiCanScroll(target, currentTarget, false, true))) {
      event.preventDefault();
    }
  }
};
TuiOverscrollDirective.ɵfac = function TuiOverscrollDirective_Factory(t) {
  return new (t || TuiOverscrollDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(TuiDestroyService, 2));
};
TuiOverscrollDirective.ɵdir = ɵɵdefineDirective({
  type: TuiOverscrollDirective,
  selectors: [["", "tuiOverscroll", ""]],
  hostVars: 2,
  hostBindings: function TuiOverscrollDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵstyleProp("overscroll-behavior", ctx.overscrollBehavior);
    }
  },
  inputs: {
    mode: ["tuiOverscroll", "mode"]
  },
  features: [ɵɵProvidersFeature([TuiDestroyService])]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiOverscrollDirective, [{
    type: Directive,
    args: [{
      selector: "[tuiOverscroll]",
      providers: [TuiDestroyService]
    }]
  }], function() {
    return [{
      type: ElementRef,
      decorators: [{
        type: Inject,
        args: [ElementRef]
      }]
    }, {
      type: NgZone,
      decorators: [{
        type: Inject,
        args: [NgZone]
      }]
    }, {
      type: Observable,
      decorators: [{
        type: Self
      }, {
        type: Inject,
        args: [TuiDestroyService]
      }]
    }];
  }, {
    mode: [{
      type: Input,
      args: ["tuiOverscroll"]
    }],
    overscrollBehavior: [{
      type: HostBinding,
      args: ["style.overscrollBehavior"]
    }]
  });
})();
var TuiOverscrollModule = class {
};
TuiOverscrollModule.ɵfac = function TuiOverscrollModule_Factory(t) {
  return new (t || TuiOverscrollModule)();
};
TuiOverscrollModule.ɵmod = ɵɵdefineNgModule({
  type: TuiOverscrollModule,
  declarations: [TuiOverscrollDirective],
  exports: [TuiOverscrollDirective]
});
TuiOverscrollModule.ɵinj = ɵɵdefineInjector({});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiOverscrollModule, [{
    type: NgModule,
    args: [{
      declarations: [TuiOverscrollDirective],
      exports: [TuiOverscrollDirective]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/cdk/fesm2015/taiga-ui-cdk-directives-pan.js
var TuiPanDirective = class {
  constructor(tuiPan) {
    this.tuiPan = tuiPan;
  }
};
TuiPanDirective.ɵfac = function TuiPanDirective_Factory(t) {
  return new (t || TuiPanDirective)(ɵɵdirectiveInject(TuiPanService));
};
TuiPanDirective.ɵdir = ɵɵdefineDirective({
  type: TuiPanDirective,
  selectors: [["", "tuiPan", ""]],
  outputs: {
    tuiPan: "tuiPan"
  },
  features: [ɵɵProvidersFeature([TuiPanService])]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiPanDirective, [{
    type: Directive,
    args: [{
      selector: "[tuiPan]",
      outputs: ["tuiPan"],
      providers: [TuiPanService]
    }]
  }], function() {
    return [{
      type: Observable,
      decorators: [{
        type: Inject,
        args: [TuiPanService]
      }]
    }];
  }, null);
})();
var TuiPanModule = class {
};
TuiPanModule.ɵfac = function TuiPanModule_Factory(t) {
  return new (t || TuiPanModule)();
};
TuiPanModule.ɵmod = ɵɵdefineNgModule({
  type: TuiPanModule,
  declarations: [TuiPanDirective],
  exports: [TuiPanDirective]
});
TuiPanModule.ɵinj = ɵɵdefineInjector({});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiPanModule, [{
    type: NgModule,
    args: [{
      declarations: [TuiPanDirective],
      exports: [TuiPanDirective]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/cdk/fesm2015/taiga-ui-cdk-directives-platform.js
var TuiPlatformDirective = class {
  constructor() {
    this.tuiPlatform = "";
  }
};
TuiPlatformDirective.ɵfac = function TuiPlatformDirective_Factory(t) {
  return new (t || TuiPlatformDirective)();
};
TuiPlatformDirective.ɵdir = ɵɵdefineDirective({
  type: TuiPlatformDirective,
  selectors: [["", "tuiPlatform", ""]],
  hostVars: 1,
  hostBindings: function TuiPlatformDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("data-platform", ctx.tuiPlatform);
    }
  },
  inputs: {
    tuiPlatform: "tuiPlatform"
  },
  features: [ɵɵProvidersFeature([{
    provide: TUI_PLATFORM,
    deps: [TuiPlatformDirective],
    useFactory: ({
      tuiPlatform
    }) => tuiPlatform || tuiPlatformFactory()
  }])]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiPlatformDirective, [{
    type: Directive,
    args: [{
      selector: "[tuiPlatform]",
      providers: [{
        provide: TUI_PLATFORM,
        deps: [TuiPlatformDirective],
        useFactory: ({
          tuiPlatform
        }) => tuiPlatform || tuiPlatformFactory()
      }]
    }]
  }], null, {
    tuiPlatform: [{
      type: Input
    }, {
      type: HostBinding,
      args: ["attr.data-platform"]
    }]
  });
})();
var TuiPlatformModule = class {
};
TuiPlatformModule.ɵfac = function TuiPlatformModule_Factory(t) {
  return new (t || TuiPlatformModule)();
};
TuiPlatformModule.ɵmod = ɵɵdefineNgModule({
  type: TuiPlatformModule,
  declarations: [TuiPlatformDirective],
  exports: [TuiPlatformDirective]
});
TuiPlatformModule.ɵinj = ɵɵdefineInjector({});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiPlatformModule, [{
    type: NgModule,
    args: [{
      declarations: [TuiPlatformDirective],
      exports: [TuiPlatformDirective]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/cdk/fesm2015/taiga-ui-cdk-components-dropdown-host.js
var _c02 = ["*"];
var TuiDropdownPortalService = class extends AbstractTuiPortalService {
};
TuiDropdownPortalService.ɵfac = (() => {
  let ɵTuiDropdownPortalService_BaseFactory;
  return function TuiDropdownPortalService_Factory(t) {
    return (ɵTuiDropdownPortalService_BaseFactory || (ɵTuiDropdownPortalService_BaseFactory = ɵɵgetInheritedFactory(TuiDropdownPortalService)))(t || TuiDropdownPortalService);
  };
})();
TuiDropdownPortalService.ɵprov = ɵɵdefineInjectable({
  token: TuiDropdownPortalService,
  factory: TuiDropdownPortalService.ɵfac,
  providedIn: "root"
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDropdownPortalService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var TuiDropdownHostComponent = class extends AbstractTuiPortalHostComponent {
};
TuiDropdownHostComponent.ɵfac = (() => {
  let ɵTuiDropdownHostComponent_BaseFactory;
  return function TuiDropdownHostComponent_Factory(t) {
    return (ɵTuiDropdownHostComponent_BaseFactory || (ɵTuiDropdownHostComponent_BaseFactory = ɵɵgetInheritedFactory(TuiDropdownHostComponent)))(t || TuiDropdownHostComponent);
  };
})();
TuiDropdownHostComponent.ɵcmp = ɵɵdefineComponent({
  type: TuiDropdownHostComponent,
  selectors: [["tui-dropdown-host"]],
  features: [ɵɵProvidersFeature([
    {
      provide: AbstractTuiPortalService,
      useExisting: TuiDropdownPortalService
    },
    // TODO: Remove in 4.0
    {
      provide: AbstractTuiPortalHostComponent,
      useExisting: TuiDropdownHostComponent
    }
  ]), ɵɵInheritDefinitionFeature],
  ngContentSelectors: _c02,
  decls: 3,
  vars: 0,
  consts: [["viewContainer", ""]],
  template: function TuiDropdownHostComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
      ɵɵelementContainer(1, null, 0);
    }
  },
  styles: ['[_nghost-%COMP%]{position:relative;z-index:0;display:block;height:100%}[_nghost-%COMP%]:before{content:"";display:block;overflow:hidden}.t-position-fixed-offset[_ngcontent-%COMP%]{position:fixed;left:0;top:0;pointer-events:none;visibility:hidden;width:100%;height:100%}'],
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDropdownHostComponent, [{
    type: Component,
    args: [{
      selector: "tui-dropdown-host",
      templateUrl: "./dropdown-host.template.html",
      styleUrls: ["./dropdown-host.style.less"],
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [
        {
          provide: AbstractTuiPortalService,
          useExisting: TuiDropdownPortalService
        },
        // TODO: Remove in 4.0
        {
          provide: AbstractTuiPortalHostComponent,
          useExisting: TuiDropdownHostComponent
        }
      ]
    }]
  }], null, null);
})();
var TuiDropdownHostModule = class {
};
TuiDropdownHostModule.ɵfac = function TuiDropdownHostModule_Factory(t) {
  return new (t || TuiDropdownHostModule)();
};
TuiDropdownHostModule.ɵmod = ɵɵdefineNgModule({
  type: TuiDropdownHostModule,
  declarations: [TuiDropdownHostComponent],
  exports: [TuiDropdownHostComponent]
});
TuiDropdownHostModule.ɵinj = ɵɵdefineInjector({});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDropdownHostModule, [{
    type: NgModule,
    args: [{
      declarations: [TuiDropdownHostComponent],
      exports: [TuiDropdownHostComponent]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/cdk/fesm2015/taiga-ui-cdk-directives-portal.js
var TuiPortalDirective = class {
  constructor(templateRef, portalService) {
    this.templateRef = templateRef;
    this.portalService = portalService;
  }
  set tuiPortal(show) {
    var _a;
    (_a = this.viewRef) === null || _a === void 0 ? void 0 : _a.destroy();
    if (show) {
      this.viewRef = this.portalService.addTemplate(this.templateRef);
    }
  }
  ngOnDestroy() {
    var _a;
    (_a = this.viewRef) === null || _a === void 0 ? void 0 : _a.destroy();
  }
};
TuiPortalDirective.ɵfac = function TuiPortalDirective_Factory(t) {
  return new (t || TuiPortalDirective)(ɵɵdirectiveInject(TemplateRef), ɵɵdirectiveInject(TuiDropdownPortalService));
};
TuiPortalDirective.ɵdir = ɵɵdefineDirective({
  type: TuiPortalDirective,
  selectors: [["", "tuiPortal", ""]],
  inputs: {
    tuiPortal: "tuiPortal"
  }
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiPortalDirective, [{
    type: Directive,
    args: [{
      selector: "[tuiPortal]"
    }]
  }], function() {
    return [{
      type: TemplateRef,
      decorators: [{
        type: Inject,
        args: [TemplateRef]
      }]
    }, {
      type: TuiDropdownPortalService,
      decorators: [{
        type: Inject,
        args: [TuiDropdownPortalService]
      }]
    }];
  }, {
    tuiPortal: [{
      type: Input
    }]
  });
})();
var TuiPortalModule = class {
};
TuiPortalModule.ɵfac = function TuiPortalModule_Factory(t) {
  return new (t || TuiPortalModule)();
};
TuiPortalModule.ɵmod = ɵɵdefineNgModule({
  type: TuiPortalModule,
  declarations: [TuiPortalDirective],
  exports: [TuiPortalDirective]
});
TuiPortalModule.ɵinj = ɵɵdefineInjector({});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiPortalModule, [{
    type: NgModule,
    args: [{
      declarations: [TuiPortalDirective],
      exports: [TuiPortalDirective]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/cdk/fesm2015/taiga-ui-cdk-directives-pressed.js
var TuiPressedDirective = class {
  constructor(el, takeOnlyTrustedEvents) {
    this.el = el;
    this.takeOnlyTrustedEvents = takeOnlyTrustedEvents;
    this.tuiPressedChange = tuiPressedObservable(this.el.nativeElement, {
      onlyTrusted: this.takeOnlyTrustedEvents
    });
  }
};
TuiPressedDirective.ɵfac = function TuiPressedDirective_Factory(t) {
  return new (t || TuiPressedDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(TUI_TAKE_ONLY_TRUSTED_EVENTS));
};
TuiPressedDirective.ɵdir = ɵɵdefineDirective({
  type: TuiPressedDirective,
  selectors: [["", "tuiPressedChange", ""]],
  outputs: {
    tuiPressedChange: "tuiPressedChange"
  }
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiPressedDirective, [{
    type: Directive,
    args: [{
      selector: "[tuiPressedChange]"
    }]
  }], function() {
    return [{
      type: ElementRef,
      decorators: [{
        type: Inject,
        args: [ElementRef]
      }]
    }, {
      type: void 0,
      decorators: [{
        type: Inject,
        args: [TUI_TAKE_ONLY_TRUSTED_EVENTS]
      }]
    }];
  }, {
    tuiPressedChange: [{
      type: Output
    }]
  });
})();
var TuiPressedModule = class {
};
TuiPressedModule.ɵfac = function TuiPressedModule_Factory(t) {
  return new (t || TuiPressedModule)();
};
TuiPressedModule.ɵmod = ɵɵdefineNgModule({
  type: TuiPressedModule,
  declarations: [TuiPressedDirective],
  exports: [TuiPressedDirective]
});
TuiPressedModule.ɵinj = ɵɵdefineInjector({});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiPressedModule, [{
    type: NgModule,
    args: [{
      declarations: [TuiPressedDirective],
      exports: [TuiPressedDirective]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/cdk/fesm2015/taiga-ui-cdk-directives-prevent-default.js
var TuiPreventDefaultDirective = class {
  constructor(el, zone, destroy$) {
    this.el = el;
    this.zone = zone;
    this.destroy$ = destroy$;
    this.eventName = "";
  }
  ngOnInit() {
    fromEvent(this.el.nativeElement, this.eventName, {
      passive: false
    }).pipe(tuiZonefree(this.zone), tuiPreventDefault(), takeUntil(this.destroy$)).subscribe();
  }
};
TuiPreventDefaultDirective.ɵfac = function TuiPreventDefaultDirective_Factory(t) {
  return new (t || TuiPreventDefaultDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(TuiDestroyService, 2));
};
TuiPreventDefaultDirective.ɵdir = ɵɵdefineDirective({
  type: TuiPreventDefaultDirective,
  selectors: [["", "tuiPreventDefault", ""]],
  inputs: {
    eventName: ["tuiPreventDefault", "eventName"]
  },
  features: [ɵɵProvidersFeature([TuiDestroyService])]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiPreventDefaultDirective, [{
    type: Directive,
    args: [{
      selector: "[tuiPreventDefault]",
      providers: [TuiDestroyService]
    }]
  }], function() {
    return [{
      type: ElementRef,
      decorators: [{
        type: Inject,
        args: [ElementRef]
      }]
    }, {
      type: NgZone,
      decorators: [{
        type: Inject,
        args: [NgZone]
      }]
    }, {
      type: Observable,
      decorators: [{
        type: Self
      }, {
        type: Inject,
        args: [TuiDestroyService]
      }]
    }];
  }, {
    eventName: [{
      type: Input,
      args: ["tuiPreventDefault"]
    }]
  });
})();
var TuiPreventDefaultModule = class {
};
TuiPreventDefaultModule.ɵfac = function TuiPreventDefaultModule_Factory(t) {
  return new (t || TuiPreventDefaultModule)();
};
TuiPreventDefaultModule.ɵmod = ɵɵdefineNgModule({
  type: TuiPreventDefaultModule,
  declarations: [TuiPreventDefaultDirective],
  exports: [TuiPreventDefaultDirective]
});
TuiPreventDefaultModule.ɵinj = ɵɵdefineInjector({});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiPreventDefaultModule, [{
    type: NgModule,
    args: [{
      declarations: [TuiPreventDefaultDirective],
      exports: [TuiPreventDefaultDirective]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/cdk/fesm2015/taiga-ui-cdk-directives-repeat-times.js
var MAX_VALUE = 65536;
var TuiRepeatTimesContext = class {
  constructor($implicit) {
    this.$implicit = $implicit;
  }
};
var TuiRepeatTimesDirective = class {
  constructor(viewContainer, templateRef) {
    this.viewContainer = viewContainer;
    this.templateRef = templateRef;
  }
  set tuiRepeatTimesOf(count) {
    const safeCount = Math.floor(tuiClamp(count, 0, MAX_VALUE));
    const {
      length
    } = this.viewContainer;
    if (count < length) {
      this.removeContainers(length - count);
    } else {
      this.addContainers(safeCount);
    }
  }
  addContainers(count) {
    for (let index = this.viewContainer.length; index < count; index++) {
      this.viewContainer.createEmbeddedView(this.templateRef, new TuiRepeatTimesContext(index));
    }
  }
  removeContainers(amount) {
    for (let index = 0; index < amount; index++) {
      this.viewContainer.remove();
    }
  }
};
TuiRepeatTimesDirective.ɵfac = function TuiRepeatTimesDirective_Factory(t) {
  return new (t || TuiRepeatTimesDirective)(ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(TemplateRef));
};
TuiRepeatTimesDirective.ɵdir = ɵɵdefineDirective({
  type: TuiRepeatTimesDirective,
  selectors: [["", "tuiRepeatTimes", "", "tuiRepeatTimesOf", ""]],
  inputs: {
    tuiRepeatTimesOf: "tuiRepeatTimesOf"
  }
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiRepeatTimesDirective, [{
    type: Directive,
    args: [{
      selector: "[tuiRepeatTimes][tuiRepeatTimesOf]"
    }]
  }], function() {
    return [{
      type: ViewContainerRef,
      decorators: [{
        type: Inject,
        args: [ViewContainerRef]
      }]
    }, {
      type: TemplateRef,
      decorators: [{
        type: Inject,
        args: [TemplateRef]
      }]
    }];
  }, {
    tuiRepeatTimesOf: [{
      type: Input
    }]
  });
})();
var TuiRepeatTimesModule = class {
};
TuiRepeatTimesModule.ɵfac = function TuiRepeatTimesModule_Factory(t) {
  return new (t || TuiRepeatTimesModule)();
};
TuiRepeatTimesModule.ɵmod = ɵɵdefineNgModule({
  type: TuiRepeatTimesModule,
  declarations: [TuiRepeatTimesDirective],
  exports: [TuiRepeatTimesDirective]
});
TuiRepeatTimesModule.ɵinj = ɵɵdefineInjector({});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiRepeatTimesModule, [{
    type: NgModule,
    args: [{
      declarations: [TuiRepeatTimesDirective],
      exports: [TuiRepeatTimesDirective]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/cdk/fesm2015/taiga-ui-cdk-directives-resize.js
var TuiResizeDirective = class {
  constructor(tuiResize) {
    this.tuiResize = tuiResize;
  }
};
TuiResizeDirective.ɵfac = function TuiResizeDirective_Factory(t) {
  return new (t || TuiResizeDirective)(ɵɵdirectiveInject(TuiResizeService));
};
TuiResizeDirective.ɵdir = ɵɵdefineDirective({
  type: TuiResizeDirective,
  selectors: [["", "tuiResize", ""]],
  outputs: {
    tuiResize: "tuiResize"
  },
  features: [ɵɵProvidersFeature([TuiDestroyService, TuiResizeService])]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiResizeDirective, [{
    type: Directive,
    args: [{
      selector: "[tuiResize]",
      outputs: ["tuiResize"],
      providers: [TuiDestroyService, TuiResizeService]
    }]
  }], function() {
    return [{
      type: Observable,
      decorators: [{
        type: Inject,
        args: [TuiResizeService]
      }]
    }];
  }, null);
})();
var TuiResizeModule = class {
};
TuiResizeModule.ɵfac = function TuiResizeModule_Factory(t) {
  return new (t || TuiResizeModule)();
};
TuiResizeModule.ɵmod = ɵɵdefineNgModule({
  type: TuiResizeModule,
  declarations: [TuiResizeDirective],
  exports: [TuiResizeDirective]
});
TuiResizeModule.ɵinj = ɵɵdefineInjector({});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiResizeModule, [{
    type: NgModule,
    args: [{
      declarations: [TuiResizeDirective],
      exports: [TuiResizeDirective]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/cdk/fesm2015/taiga-ui-cdk-directives-resizer.js
var TuiResizeableDirective = class extends TuiElementDirective {
};
TuiResizeableDirective.ɵfac = (() => {
  let ɵTuiResizeableDirective_BaseFactory;
  return function TuiResizeableDirective_Factory(t) {
    return (ɵTuiResizeableDirective_BaseFactory || (ɵTuiResizeableDirective_BaseFactory = ɵɵgetInheritedFactory(TuiResizeableDirective)))(t || TuiResizeableDirective);
  };
})();
TuiResizeableDirective.ɵdir = ɵɵdefineDirective({
  type: TuiResizeableDirective,
  selectors: [["", "tuiResizeable", ""]],
  features: [ɵɵInheritDefinitionFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiResizeableDirective, [{
    type: Directive,
    args: [{
      selector: "[tuiResizeable]"
    }]
  }], null, null);
})();
var TuiResizerDirective = class {
  constructor(resizeable) {
    this.resizeable = resizeable;
    this.tuiResizer = [0, 0];
    this.tuiSizeChange = new EventEmitter();
    this.x = NaN;
    this.y = NaN;
    this.width = 0;
    this.height = 0;
  }
  get cursor() {
    if (!this.tuiResizer[0]) {
      return "ns-resize";
    }
    if (!this.tuiResizer[1]) {
      return "ew-resize";
    }
    if (this.tuiResizer[0] * this.tuiResizer[1] > 0) {
      return "nwse-resize";
    }
    return "nesw-resize";
  }
  onTouchStart({
    touches
  }) {
    this.onMouseDown(touches[0].clientX, touches[0].clientY);
  }
  onMouseDown(x, y) {
    this.x = x;
    this.y = y;
    this.width = this.resizeable.nativeElement.clientWidth;
    this.height = this.resizeable.nativeElement.clientHeight;
  }
  onMouseMove({
    x,
    y,
    buttons
  }) {
    if (!buttons) {
      this.onMouseUp();
    } else {
      this.onMove(x, y);
    }
  }
  onTouchMove({
    touches
  }) {
    this.onMove(touches[0].clientX, touches[0].clientY);
  }
  onMouseUp() {
    this.x = NaN;
  }
  onMove(x, y) {
    if (Number.isNaN(this.x)) {
      return;
    }
    const {
      style: style2
    } = this.resizeable.nativeElement;
    const size = [this.width + this.tuiResizer[0] * (x - this.x), this.height + this.tuiResizer[1] * (y - this.y)];
    if (this.tuiResizer[0]) {
      style2.width = tuiPx(size[0]);
    }
    if (this.tuiResizer[1]) {
      style2.height = tuiPx(size[1]);
    }
    this.tuiSizeChange.emit(size);
  }
};
TuiResizerDirective.ɵfac = function TuiResizerDirective_Factory(t) {
  return new (t || TuiResizerDirective)(ɵɵdirectiveInject(TuiResizeableDirective));
};
TuiResizerDirective.ɵdir = ɵɵdefineDirective({
  type: TuiResizerDirective,
  selectors: [["", "tuiResizer", ""]],
  hostVars: 4,
  hostBindings: function TuiResizerDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("touchstart.silent.passive", function TuiResizerDirective_touchstart_silent_passive_HostBindingHandler($event) {
        return ctx.onTouchStart($event);
      })("mousedown.silent.prevent", function TuiResizerDirective_mousedown_silent_prevent_HostBindingHandler($event) {
        return ctx.onMouseDown($event.x, $event.y);
      })("mousemove.silent", function TuiResizerDirective_mousemove_silent_HostBindingHandler($event) {
        return ctx.onMouseMove($event);
      }, false, ɵɵresolveDocument)("touchmove.silent", function TuiResizerDirective_touchmove_silent_HostBindingHandler($event) {
        return ctx.onTouchMove($event);
      }, false, ɵɵresolveDocument)("mouseup.silent", function TuiResizerDirective_mouseup_silent_HostBindingHandler() {
        return ctx.onMouseUp();
      }, false, ɵɵresolveDocument)("touchend.silent", function TuiResizerDirective_touchend_silent_HostBindingHandler() {
        return ctx.onMouseUp();
      }, false, ɵɵresolveDocument);
    }
    if (rf & 2) {
      ɵɵstyleProp("touch-action", "none")("cursor", ctx.cursor);
    }
  },
  inputs: {
    tuiResizer: "tuiResizer"
  },
  outputs: {
    tuiSizeChange: "tuiSizeChange"
  }
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiResizerDirective, [{
    type: Directive,
    args: [{
      selector: "[tuiResizer]",
      host: {
        "[style.touchAction]": '"none"'
      }
    }]
  }], function() {
    return [{
      type: ElementRef,
      decorators: [{
        type: Inject,
        args: [TuiResizeableDirective]
      }]
    }];
  }, {
    tuiResizer: [{
      type: Input
    }],
    tuiSizeChange: [{
      type: Output
    }],
    cursor: [{
      type: HostBinding,
      args: ["style.cursor"]
    }],
    onTouchStart: [{
      type: HostListener,
      args: ["touchstart.silent.passive", ["$event"]]
    }],
    onMouseDown: [{
      type: HostListener,
      args: ["mousedown.silent.prevent", ["$event.x", "$event.y"]]
    }],
    onMouseMove: [{
      type: HostListener,
      args: ["document:mousemove.silent", ["$event"]]
    }],
    onTouchMove: [{
      type: HostListener,
      args: ["document:touchmove.silent", ["$event"]]
    }],
    onMouseUp: [{
      type: HostListener,
      args: ["document:mouseup.silent"]
    }, {
      type: HostListener,
      args: ["document:touchend.silent"]
    }]
  });
})();
var TuiResizerModule = class {
};
TuiResizerModule.ɵfac = function TuiResizerModule_Factory(t) {
  return new (t || TuiResizerModule)();
};
TuiResizerModule.ɵmod = ɵɵdefineNgModule({
  type: TuiResizerModule,
  declarations: [TuiResizeableDirective, TuiResizerDirective],
  exports: [TuiResizeableDirective, TuiResizerDirective]
});
TuiResizerModule.ɵinj = ɵɵdefineInjector({});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiResizerModule, [{
    type: NgModule,
    args: [{
      declarations: [TuiResizeableDirective, TuiResizerDirective],
      exports: [TuiResizeableDirective, TuiResizerDirective]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/cdk/fesm2015/taiga-ui-cdk-directives-swipe.js
var TuiSwipeDirective = class {
  constructor(tuiSwipe) {
    this.tuiSwipe = tuiSwipe;
  }
};
TuiSwipeDirective.ɵfac = function TuiSwipeDirective_Factory(t) {
  return new (t || TuiSwipeDirective)(ɵɵdirectiveInject(TuiSwipeService));
};
TuiSwipeDirective.ɵdir = ɵɵdefineDirective({
  type: TuiSwipeDirective,
  selectors: [["", "tuiSwipe", ""]],
  outputs: {
    tuiSwipe: "tuiSwipe"
  },
  features: [ɵɵProvidersFeature([TuiSwipeService])]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiSwipeDirective, [{
    type: Directive,
    args: [{
      selector: "[tuiSwipe]",
      outputs: ["tuiSwipe"],
      providers: [TuiSwipeService]
    }]
  }], function() {
    return [{
      type: Observable,
      decorators: [{
        type: Inject,
        args: [TuiSwipeService]
      }]
    }];
  }, null);
})();
var TuiSwipeModule = class {
};
TuiSwipeModule.ɵfac = function TuiSwipeModule_Factory(t) {
  return new (t || TuiSwipeModule)();
};
TuiSwipeModule.ɵmod = ɵɵdefineNgModule({
  type: TuiSwipeModule,
  declarations: [TuiSwipeDirective],
  exports: [TuiSwipeDirective]
});
TuiSwipeModule.ɵinj = ɵɵdefineInjector({});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiSwipeModule, [{
    type: NgModule,
    args: [{
      declarations: [TuiSwipeDirective],
      exports: [TuiSwipeDirective]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/cdk/fesm2015/taiga-ui-cdk-directives-validator.js
var TuiValidatorDirective = class {
  constructor() {
    this.onChange = EMPTY_FUNCTION;
    this.tuiValidator = Validators.nullValidator;
  }
  validate(control) {
    return this.tuiValidator(control);
  }
  registerOnValidatorChange(onChange) {
    this.onChange = onChange;
  }
  ngOnChanges() {
    this.onChange();
  }
  ngOnDestroy() {
    this.tuiValidator = Validators.nullValidator;
    this.onChange();
  }
};
TuiValidatorDirective.ɵfac = function TuiValidatorDirective_Factory(t) {
  return new (t || TuiValidatorDirective)();
};
TuiValidatorDirective.ɵdir = ɵɵdefineDirective({
  type: TuiValidatorDirective,
  selectors: [["", "tuiValidator", ""]],
  inputs: {
    tuiValidator: "tuiValidator"
  },
  features: [ɵɵProvidersFeature([{
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => TuiValidatorDirective),
    multi: true
  }]), ɵɵNgOnChangesFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiValidatorDirective, [{
    type: Directive,
    args: [{
      selector: "[tuiValidator]",
      providers: [{
        provide: NG_VALIDATORS,
        useExisting: forwardRef(() => TuiValidatorDirective),
        multi: true
      }]
    }]
  }], null, {
    tuiValidator: [{
      type: Input
    }]
  });
})();
var TuiValidatorModule = class {
};
TuiValidatorModule.ɵfac = function TuiValidatorModule_Factory(t) {
  return new (t || TuiValidatorModule)();
};
TuiValidatorModule.ɵmod = ɵɵdefineNgModule({
  type: TuiValidatorModule,
  declarations: [TuiValidatorDirective],
  exports: [TuiValidatorDirective]
});
TuiValidatorModule.ɵinj = ɵɵdefineInjector({});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiValidatorModule, [{
    type: NgModule,
    args: [{
      declarations: [TuiValidatorDirective],
      exports: [TuiValidatorDirective]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/cdk/fesm2015/taiga-ui-cdk-directives-value-changes.js
var TuiValueChangesDirective = class {
  constructor(container, control) {
    this.container = container;
    this.control = control;
    this.refresh$ = new Subject();
    this.tuiValueChanges = this.refresh$.pipe(distinctUntilChanged(), switchAll(), distinctUntilChanged());
  }
  ngDoCheck() {
    var _a, _b;
    this.refresh$.next(((_a = this.control) === null || _a === void 0 ? void 0 : _a.valueChanges) || ((_b = this.container) === null || _b === void 0 ? void 0 : _b.valueChanges) || EMPTY);
  }
};
TuiValueChangesDirective.ɵfac = function TuiValueChangesDirective_Factory(t) {
  return new (t || TuiValueChangesDirective)(ɵɵdirectiveInject(ControlContainer, 8), ɵɵdirectiveInject(NgControl, 8));
};
TuiValueChangesDirective.ɵdir = ɵɵdefineDirective({
  type: TuiValueChangesDirective,
  selectors: [["", "tuiValueChanges", ""]],
  outputs: {
    tuiValueChanges: "tuiValueChanges"
  }
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiValueChangesDirective, [{
    type: Directive,
    args: [{
      selector: "[tuiValueChanges]"
    }]
  }], function() {
    return [{
      type: ControlContainer,
      decorators: [{
        type: Optional
      }, {
        type: Inject,
        args: [ControlContainer]
      }]
    }, {
      type: NgControl,
      decorators: [{
        type: Optional
      }, {
        type: Inject,
        args: [NgControl]
      }]
    }];
  }, {
    tuiValueChanges: [{
      type: Output
    }]
  });
})();
var TuiValueChangesModule = class {
};
TuiValueChangesModule.ɵfac = function TuiValueChangesModule_Factory(t) {
  return new (t || TuiValueChangesModule)();
};
TuiValueChangesModule.ɵmod = ɵɵdefineNgModule({
  type: TuiValueChangesModule,
  declarations: [TuiValueChangesDirective],
  exports: [TuiValueChangesDirective]
});
TuiValueChangesModule.ɵinj = ɵɵdefineInjector({});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiValueChangesModule, [{
    type: NgModule,
    args: [{
      declarations: [TuiValueChangesDirective],
      exports: [TuiValueChangesDirective]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/cdk/fesm2015/taiga-ui-cdk-directives-zoom.js
var TuiZoomDirective = class {
  constructor(tuiZoom) {
    this.tuiZoom = tuiZoom;
  }
};
TuiZoomDirective.ɵfac = function TuiZoomDirective_Factory(t) {
  return new (t || TuiZoomDirective)(ɵɵdirectiveInject(TuiZoomService));
};
TuiZoomDirective.ɵdir = ɵɵdefineDirective({
  type: TuiZoomDirective,
  selectors: [["", "tuiZoom", ""]],
  hostVars: 2,
  hostBindings: function TuiZoomDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵstyleProp("touch-action", "none");
    }
  },
  outputs: {
    tuiZoom: "tuiZoom"
  },
  features: [ɵɵProvidersFeature([TuiZoomService])]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiZoomDirective, [{
    type: Directive,
    args: [{
      selector: "[tuiZoom]",
      outputs: ["tuiZoom"],
      providers: [TuiZoomService],
      host: {
        "[style.touch-action]": '"none"'
      }
    }]
  }], function() {
    return [{
      type: Observable,
      decorators: [{
        type: Inject,
        args: [TuiZoomService]
      }]
    }];
  }, null);
})();
var TuiZoomModule = class {
};
TuiZoomModule.ɵfac = function TuiZoomModule_Factory(t) {
  return new (t || TuiZoomModule)();
};
TuiZoomModule.ɵmod = ɵɵdefineNgModule({
  type: TuiZoomModule,
  declarations: [TuiZoomDirective],
  exports: [TuiZoomDirective]
});
TuiZoomModule.ɵinj = ɵɵdefineInjector({});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiZoomModule, [{
    type: NgModule,
    args: [{
      declarations: [TuiZoomDirective],
      exports: [TuiZoomDirective]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/cdk/fesm2015/taiga-ui-cdk-components-dialog-host.js
function TuiDialogHostComponent_section_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function TuiDialogHostComponent_section_0_tui_scroll_controls_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "tui-scroll-controls", 5);
  }
}
function TuiDialogHostComponent_section_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "section", 2);
    ɵɵtemplate(1, TuiDialogHostComponent_section_0_ng_container_1_Template, 1, 0, "ng-container", 3)(2, TuiDialogHostComponent_section_0_tui_scroll_controls_2_Template, 1, 0, "tui-scroll-controls", 4);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("@host", void 0);
    ɵɵattribute("aria-labelledby", item_r2.id);
    ɵɵadvance(1);
    ɵɵproperty("polymorpheusOutlet", item_r2.component)("polymorpheusOutletContext", item_r2);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r0.isMobile);
  }
}
function TuiDialogHostComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 6);
    ɵɵlistener("transitionend", function TuiDialogHostComponent_div_1_Template_div_transitionend_0_listener($event) {
      const restoredCtx = ɵɵrestoreView(_r7);
      const isDialogClosesOnBack_r5 = restoredCtx.tuiLet;
      const ctx_r6 = ɵɵnextContext();
      return ɵɵresetView(ctx_r6.onDialog($event, !!ctx_r6.dialogs.length, !!isDialogClosesOnBack_r5));
    })("popstate", function TuiDialogHostComponent_div_1_Template_div_popstate_0_listener() {
      const restoredCtx = ɵɵrestoreView(_r7);
      const isDialogClosesOnBack_r5 = restoredCtx.tuiLet;
      const ctx_r8 = ɵɵnextContext();
      return ɵɵresetView(ctx_r8.closeLast(ctx_r8.dialogs, !!isDialogClosesOnBack_r5));
    }, false, ɵɵresolveWindow);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassProp("t-overlay_visible", ctx_r1.dialogs.length);
  }
}
var FAKE_HISTORY_STATE = {
  label: "ignoreMe"
};
var isFakeHistoryState = (historyState) => (historyState === null || historyState === void 0 ? void 0 : historyState.label) === FAKE_HISTORY_STATE.label;
var TUI_DIALOG_CLOSES_ON_BACK = tuiCreateToken(of(false));
var TuiDialogHostComponent = class {
  constructor(isMobile, isDialogClosesOnBack$, dialogsByType, historyRef, titleService, destroy$, cdr, doc) {
    this.isMobile = isMobile;
    this.isDialogClosesOnBack$ = isDialogClosesOnBack$;
    this.dialogsByType = dialogsByType;
    this.historyRef = historyRef;
    this.titleService = titleService;
    this.destroy$ = destroy$;
    this.cdr = cdr;
    this.doc = doc;
    this.dialogs = [];
  }
  ngOnInit() {
    combineLatest(this.dialogsByType).pipe(map((arr) => [].concat(...arr).sort((a, b) => a.createdAt - b.createdAt)), takeUntil(this.destroy$)).subscribe((dialogs) => {
      this.dialogs = dialogs;
      this.cdr.markForCheck();
      this.doc.documentElement.classList.toggle("t-overscroll-none", !!dialogs.length);
    });
  }
  closeLast(dialogs, isDialogClosesOnBack) {
    if (!isDialogClosesOnBack) {
      return;
    }
    const [last] = dialogs.slice(-1);
    if (!last) {
      return;
    }
    if (dialogs.length > 1) {
      this.historyRef.pushState(FAKE_HISTORY_STATE, this.titleService.getTitle());
    }
    last.$implicit.complete();
  }
  onDialog({
    propertyName
  }, popupOpened, isDialogClosesOnBack) {
    if (!isDialogClosesOnBack || propertyName !== "letter-spacing") {
      return;
    }
    if (popupOpened) {
      this.historyRef.pushState(FAKE_HISTORY_STATE, this.titleService.getTitle());
    } else if (isFakeHistoryState(this.historyRef.state)) {
      this.historyRef.back();
    }
  }
};
TuiDialogHostComponent.ɵfac = function TuiDialogHostComponent_Factory(t) {
  return new (t || TuiDialogHostComponent)(ɵɵdirectiveInject(TUI_IS_MOBILE), ɵɵdirectiveInject(TUI_DIALOG_CLOSES_ON_BACK), ɵɵdirectiveInject(TUI_DIALOGS), ɵɵdirectiveInject(HISTORY), ɵɵdirectiveInject(Title), ɵɵdirectiveInject(TuiDestroyService, 2), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(DOCUMENT));
};
TuiDialogHostComponent.ɵcmp = ɵɵdefineComponent({
  type: TuiDialogHostComponent,
  selectors: [["tui-dialog-host"]],
  features: [ɵɵProvidersFeature([TuiDestroyService])],
  decls: 3,
  vars: 4,
  consts: [["aria-modal", "true", "role", "dialog", "tuiFocusTrap", "", "tuiOverscroll", "all", "tuiScrollRef", "", "class", "t-dialog", 4, "ngFor", "ngForOf"], ["class", "t-overlay", 3, "t-overlay_visible", "transitionend", "popstate", 4, "tuiLet"], ["aria-modal", "true", "role", "dialog", "tuiFocusTrap", "", "tuiOverscroll", "all", "tuiScrollRef", "", 1, "t-dialog"], [4, "polymorpheusOutlet", "polymorpheusOutletContext"], ["class", "t-scrollbars", 4, "ngIf"], [1, "t-scrollbars"], [1, "t-overlay", 3, "transitionend", "popstate"]],
  template: function TuiDialogHostComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, TuiDialogHostComponent_section_0_Template, 3, 5, "section", 0)(1, TuiDialogHostComponent_div_1_Template, 1, 2, "div", 1);
      ɵɵpipe(2, "async");
    }
    if (rf & 2) {
      ɵɵproperty("ngForOf", ctx.dialogs);
      ɵɵadvance(1);
      ɵɵproperty("tuiLet", ɵɵpipeBind1(2, 2, ctx.isDialogClosesOnBack$));
    }
  },
  dependencies: [TuiScrollControlsComponent, NgForOf, TuiFocusTrapDirective, TuiOverscrollDirective, TuiScrollRefDirective, PolymorpheusOutletDirective, NgIf, TuiLetDirective, AsyncPipe],
  styles: ["[_nghost-%COMP%]{position:fixed;left:0;bottom:0;width:100%;height:0}.t-overlay[_ngcontent-%COMP%], .t-dialog[_ngcontent-%COMP%]{position:fixed;top:0;left:0;right:0;bottom:0;display:flex;align-items:flex-start;outline:none;overflow:auto;scrollbar-width:none;-ms-overflow-style:none}.t-overlay.ng-animating[_ngcontent-%COMP%], .t-dialog.ng-animating[_ngcontent-%COMP%]{overflow:clip}.t-overlay[_ngcontent-%COMP%]::-webkit-scrollbar, .t-dialog[_ngcontent-%COMP%]::-webkit-scrollbar, .t-overlay[_ngcontent-%COMP%]::-webkit-scrollbar-thumb, .t-dialog[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:transparent;width:0;height:0}.t-dialog[_ngcontent-%COMP%]{bottom:auto;height:100%}.t-overlay[_ngcontent-%COMP%]{height:100%;pointer-events:none;touch-action:none;opacity:0;letter-spacing:normal;transition:opacity var(--tui-duration, .3s),letter-spacing .01s;background:rgba(0,0,0,.75);-webkit-backdrop-filter:var(--tui-backdrop, none);backdrop-filter:var(--tui-backdrop, none)}.t-overlay_visible[_ngcontent-%COMP%]{opacity:1;letter-spacing:1px}.t-dialog[_ngcontent-%COMP%]:last-of-type{z-index:1}.t-scrollbars[_ngcontent-%COMP%]{position:fixed;top:0;left:0;right:0;bottom:0;margin:0;color:#747474}"],
  data: {
    animation: [trigger("host", [transition(":enter", [style({
      overflow: "clip"
    }), query(":scope > *", [animateChild()], {
      optional: true
    })]), transition(":leave", [style({
      overflow: "clip"
    }), query(":scope > *", [animateChild()], {
      optional: true
    })])])]
  }
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDialogHostComponent, [{
    type: Component,
    args: [{
      selector: "tui-dialog-host",
      templateUrl: "./dialog-host.template.html",
      styleUrls: ["./dialog-host.style.less"],
      // So that we do not force OnPush on custom dialogs
      // eslint-disable-next-line @angular-eslint/prefer-on-push-component-change-detection
      changeDetection: ChangeDetectionStrategy.Default,
      providers: [TuiDestroyService],
      animations: [trigger("host", [transition(":enter", [style({
        overflow: "clip"
      }), query(":scope > *", [animateChild()], {
        optional: true
      })]), transition(":leave", [style({
        overflow: "clip"
      }), query(":scope > *", [animateChild()], {
        optional: true
      })])])]
    }]
  }], function() {
    return [{
      type: void 0,
      decorators: [{
        type: Inject,
        args: [TUI_IS_MOBILE]
      }]
    }, {
      type: Observable,
      decorators: [{
        type: Inject,
        args: [TUI_DIALOG_CLOSES_ON_BACK]
      }]
    }, {
      type: Array,
      decorators: [{
        type: Inject,
        args: [TUI_DIALOGS]
      }]
    }, {
      type: History,
      decorators: [{
        type: Inject,
        args: [HISTORY]
      }]
    }, {
      type: Title,
      decorators: [{
        type: Inject,
        args: [Title]
      }]
    }, {
      type: Observable,
      decorators: [{
        type: Self
      }, {
        type: Inject,
        args: [TuiDestroyService]
      }]
    }, {
      type: ChangeDetectorRef,
      decorators: [{
        type: Inject,
        args: [ChangeDetectorRef]
      }]
    }, {
      type: Document,
      decorators: [{
        type: Inject,
        args: [DOCUMENT]
      }]
    }];
  }, null);
})();
var TuiDialogHostModule = class {
};
TuiDialogHostModule.ɵfac = function TuiDialogHostModule_Factory(t) {
  return new (t || TuiDialogHostModule)();
};
TuiDialogHostModule.ɵmod = ɵɵdefineNgModule({
  type: TuiDialogHostModule,
  declarations: [TuiDialogHostComponent],
  imports: [CommonModule, PolymorpheusModule, TuiOverscrollModule, TuiFocusTrapModule, TuiLetModule, TuiScrollControlsModule],
  exports: [TuiDialogHostComponent]
});
TuiDialogHostModule.ɵinj = ɵɵdefineInjector({
  imports: [[CommonModule, PolymorpheusModule, TuiOverscrollModule, TuiFocusTrapModule, TuiLetModule, TuiScrollControlsModule]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDialogHostModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, PolymorpheusModule, TuiOverscrollModule, TuiFocusTrapModule, TuiLetModule, TuiScrollControlsModule],
      declarations: [TuiDialogHostComponent],
      exports: [TuiDialogHostComponent]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/cdk/fesm2015/taiga-ui-cdk-enums.js
var TuiDayOfWeek;
(function(TuiDayOfWeek2) {
  TuiDayOfWeek2[TuiDayOfWeek2["Sunday"] = 0] = "Sunday";
  TuiDayOfWeek2[TuiDayOfWeek2["Monday"] = 1] = "Monday";
  TuiDayOfWeek2[TuiDayOfWeek2["Tuesday"] = 2] = "Tuesday";
  TuiDayOfWeek2[TuiDayOfWeek2["Wednesday"] = 3] = "Wednesday";
  TuiDayOfWeek2[TuiDayOfWeek2["Thursday"] = 4] = "Thursday";
  TuiDayOfWeek2[TuiDayOfWeek2["Friday"] = 5] = "Friday";
  TuiDayOfWeek2[TuiDayOfWeek2["Saturday"] = 6] = "Saturday";
})(TuiDayOfWeek || (TuiDayOfWeek = {}));
var TuiMonthNumber;
(function(TuiMonthNumber2) {
  TuiMonthNumber2[TuiMonthNumber2["January"] = 0] = "January";
  TuiMonthNumber2[TuiMonthNumber2["February"] = 1] = "February";
  TuiMonthNumber2[TuiMonthNumber2["March"] = 2] = "March";
  TuiMonthNumber2[TuiMonthNumber2["April"] = 3] = "April";
  TuiMonthNumber2[TuiMonthNumber2["May"] = 4] = "May";
  TuiMonthNumber2[TuiMonthNumber2["June"] = 5] = "June";
  TuiMonthNumber2[TuiMonthNumber2["July"] = 6] = "July";
  TuiMonthNumber2[TuiMonthNumber2["August"] = 7] = "August";
  TuiMonthNumber2[TuiMonthNumber2["September"] = 8] = "September";
  TuiMonthNumber2[TuiMonthNumber2["October"] = 9] = "October";
  TuiMonthNumber2[TuiMonthNumber2["November"] = 10] = "November";
  TuiMonthNumber2[TuiMonthNumber2["December"] = 11] = "December";
})(TuiMonthNumber || (TuiMonthNumber = {}));

// node_modules/@taiga-ui/cdk/fesm2015/taiga-ui-cdk-date-time.js
var DAYS_IN_WEEK = 7;
var MONTHS_IN_YEAR = 12;
var MIN_DAY = 1;
var MIN_MONTH = 0;
var MAX_MONTH = 11;
var MIN_YEAR = 0;
var MAX_YEAR = 9999;
var RANGE_SEPARATOR_CHAR = `${CHAR_NO_BREAK_SPACE}${CHAR_EN_DASH}${CHAR_NO_BREAK_SPACE}`;
var MILLISECONDS_IN_SECOND = 1e3;
var SECONDS_IN_MINUTE = 60;
var MINUTES_IN_HOUR = 60;
var HOURS_IN_DAY = 24;
var MILLISECONDS_IN_MINUTE = MILLISECONDS_IN_SECOND * SECONDS_IN_MINUTE;
var MILLISECONDS_IN_HOUR = MILLISECONDS_IN_MINUTE * MINUTES_IN_HOUR;
var MILLISECONDS_IN_DAY = MILLISECONDS_IN_HOUR * HOURS_IN_DAY;
var DATE_FILLER_LENGTH = 10;
var DATE_RANGE_FILLER_LENGTH = 2 * DATE_FILLER_LENGTH + RANGE_SEPARATOR_CHAR.length;
var TUI_DATE_FORMAT = tuiCreateToken("DMY");
var TUI_DATE_SEPARATOR = tuiCreateToken(".");
var TuiYear = class _TuiYear {
  constructor(year) {
    this.year = year;
    ngDevMode && tuiAssert.assert(_TuiYear.isValidYear(year));
  }
  /**
   * Checks year for validity
   */
  static isValidYear(year) {
    return Number.isInteger(year) && tuiInRange(year, MIN_YEAR, MAX_YEAR + 1);
  }
  /**
   * Check if passed year is a leap year
   */
  static isLeapYear(year) {
    ngDevMode && tuiAssert.assert(_TuiYear.isValidYear(year));
    return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
  }
  /**
   * Returns amount of leap years from year 0 to the passed one
   */
  static getAbsoluteLeapYears(year) {
    ngDevMode && tuiAssert.assert(_TuiYear.isValidYear(year));
    return Math.ceil(year / 400) + (Math.ceil(year / 4) - Math.ceil(year / 100));
  }
  static lengthBetween(from2, to) {
    return to.year - from2.year;
  }
  /**
   * Normalizes year by clamping it between min and max years
   */
  static normalizeYearPart(year) {
    return tuiNormalizeToIntNumber(year, MIN_YEAR, MAX_YEAR);
  }
  get formattedYear() {
    return String(this.year).padStart(4, "0");
  }
  get isLeapYear() {
    return _TuiYear.isLeapYear(this.year);
  }
  /**
   * Returns amount of leap years from year 0 to current
   */
  get absoluteLeapYears() {
    return _TuiYear.getAbsoluteLeapYears(this.year);
  }
  /**
   * Passed year is after current
   */
  yearBefore({ year }) {
    return this.year < year;
  }
  /**
   * Passed year is the same or after current
   */
  yearSameOrBefore({ year }) {
    return this.year <= year;
  }
  /**
   * Passed year is the same as current
   */
  yearSame({ year }) {
    return this.year === year;
  }
  /**
   * Passed year is either the same of before the current
   */
  yearSameOrAfter({ year }) {
    return this.year >= year;
  }
  /**
   * Passed year is before current
   */
  yearAfter({ year }) {
    return this.year > year;
  }
  /**
   * Immutably offsets year
   */
  append({ year = 0 }) {
    ngDevMode && tuiAssert.assert(Number.isInteger(year));
    const resultYear = this.year + year;
    ngDevMode && tuiAssert.assert(_TuiYear.isValidYear(resultYear));
    return new _TuiYear(resultYear);
  }
  toString() {
    return this.formattedYear;
  }
  valueOf() {
    return this.year;
  }
  /**
   * Returns the primitive value of the given Date object.
   * Depending on the argument, the method can return either a string or a number.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/@@toPrimitive
   */
  [Symbol.toPrimitive](hint) {
    return Date.prototype[Symbol.toPrimitive].call(this, hint);
  }
  toJSON() {
    return this.formattedYear;
  }
};
var TuiMonth = class _TuiMonth extends TuiYear {
  /**
   * @param year
   * @param month (starting with 0)
   */
  constructor(year, month) {
    super(year);
    this.month = month;
    ngDevMode && tuiAssert.assert(_TuiMonth.isValidMonth(year, month));
  }
  /**
   * Tests month and year for validity
   */
  static isValidMonth(year, month) {
    return TuiYear.isValidYear(year) && _TuiMonth.isValidMonthPart(month);
  }
  /**
   * Returns number of days in a month
   */
  static getMonthDaysCount(month, isLeapYear) {
    ngDevMode && tuiAssert.assert(_TuiMonth.isValidMonthPart(month));
    switch (month) {
      case TuiMonthNumber.February:
        return isLeapYear ? 29 : 28;
      case TuiMonthNumber.April:
      case TuiMonthNumber.June:
      case TuiMonthNumber.September:
      case TuiMonthNumber.November:
        return 30;
      default:
        return 31;
    }
  }
  /**
   * Returns current month and year based on local time zone
   * @nosideeffects
   */
  static currentLocal() {
    const nativeDate = /* @__PURE__ */ new Date();
    return new _TuiMonth(nativeDate.getFullYear(), nativeDate.getMonth());
  }
  /**
   * Returns current month and year based on UTC
   */
  static currentUtc() {
    const nativeDate = /* @__PURE__ */ new Date();
    return new _TuiMonth(nativeDate.getUTCFullYear(), nativeDate.getUTCMonth());
  }
  static lengthBetween(from2, to) {
    const absoluteFrom = from2.month + from2.year * 12;
    const absoluteTo = to.month + to.year * 12;
    return absoluteTo - absoluteFrom;
  }
  /**
   * Normalizes number by clamping it between min and max month
   */
  static normalizeMonthPart(month) {
    return tuiNormalizeToIntNumber(month, MIN_MONTH, MAX_MONTH);
  }
  /**
   * Tests month for validity
   */
  static isValidMonthPart(month) {
    return Number.isInteger(month) && tuiInRange(month, MIN_MONTH, MAX_MONTH + 1);
  }
  get formattedMonthPart() {
    return String(this.month + 1).padStart(2, "0");
  }
  /**
   * Returns days in a month
   */
  get daysCount() {
    return _TuiMonth.getMonthDaysCount(this.month, this.isLeapYear);
  }
  /**
   * Passed month and year are after current
   */
  monthBefore(another) {
    return this.yearBefore(another) || this.yearSame(another) && this.month < another.month;
  }
  /**
   * Passed month and year are after or the same as current
   */
  monthSameOrBefore(another) {
    return this.yearBefore(another) || this.yearSame(another) && this.month <= another.month;
  }
  /**
   * Passed month and year are the same as current
   */
  monthSame(another) {
    return this.yearSame(another) && this.month === another.month;
  }
  /**
   * Passed month and year are either before or equal to current
   */
  monthSameOrAfter(another) {
    return this.yearAfter(another) || this.yearSame(another) && this.month >= another.month;
  }
  /**
   * Passed month and year are before current
   */
  monthAfter(another) {
    return this.yearAfter(another) || this.yearSame(another) && this.month > another.month;
  }
  /**
   * Immutably alters current month and year by passed offset
   *
   * @param offset
   * @return new month and year object as a result of offsetting current
   */
  append({ year = 0, month = 0 }) {
    const totalMonths = (this.year + year) * MONTHS_IN_YEAR + this.month + month;
    return new _TuiMonth(Math.floor(totalMonths / MONTHS_IN_YEAR), totalMonths % MONTHS_IN_YEAR);
  }
  toString() {
    return `${this.formattedMonthPart}.${this.formattedYear}`;
  }
  valueOf() {
    return this.toLocalNativeDate().valueOf();
  }
  toJSON() {
    return `${super.toJSON()}-${this.formattedMonthPart}`;
  }
  /**
   * Returns native {@link Date} based on local time zone
   */
  toLocalNativeDate() {
    return new Date(this.year, this.month);
  }
  /**
   * Returns native {@link Date} based on UTC
   */
  toUtcNativeDate() {
    return new Date(Date.UTC(this.year, this.month));
  }
};
var TuiDay = class _TuiDay extends TuiMonth {
  constructor(year, month, day) {
    super(year, month);
    this.day = day;
    ngDevMode && tuiAssert.assert(_TuiDay.isValidDay(year, month, day));
  }
  /**
   * Creates {@link TuiDay} from native {@link Date} based on local time zone
   */
  static fromLocalNativeDate(date) {
    return new _TuiDay(date.getFullYear(), date.getMonth(), date.getDate());
  }
  /**
   * Creates {@link TuiDay} from native {@link Date} using UTC
   */
  static fromUtcNativeDate(date) {
    return new _TuiDay(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());
  }
  /**
   * Check validity of year, month and day
   *
   * @param year
   * @param month
   * @param day
   * @return boolean validity
   */
  static isValidDay(year, month, day) {
    return TuiMonth.isValidMonth(year, month) && Number.isInteger(day) && tuiInRange(day, MIN_DAY, TuiMonth.getMonthDaysCount(month, TuiYear.isLeapYear(year)) + 1);
  }
  /**
   * Current day based on local time zone
   */
  static currentLocal() {
    const nativeDate = /* @__PURE__ */ new Date();
    const year = nativeDate.getFullYear();
    const month = nativeDate.getMonth();
    const day = nativeDate.getDate();
    return new _TuiDay(year, month, day);
  }
  /**
   * Returns current day based on UTC
   */
  static currentUtc() {
    const nativeDate = /* @__PURE__ */ new Date();
    const year = nativeDate.getUTCFullYear();
    const month = nativeDate.getUTCMonth();
    const day = nativeDate.getUTCDate();
    return new _TuiDay(year, month, day);
  }
  /**
   * Calculates {@link TuiDay} normalizing year, month and day. {@link NaN} is turned into minimal value.
   *
   * @param year any year value, including invalid
   * @param month any month value, including invalid (months start with 0)
   * @param day any day value, including invalid
   * @return normalized date
   */
  static normalizeOf(year, month, day) {
    const normalizedYear = TuiYear.normalizeYearPart(year);
    const normalizedMonth = TuiMonth.normalizeMonthPart(month);
    const normalizedDay = _TuiDay.normalizeDayPart(day, normalizedMonth, normalizedYear);
    return new _TuiDay(normalizedYear, normalizedMonth, normalizedDay);
  }
  static lengthBetween(from2, to) {
    return Math.round((to.toLocalNativeDate().getTime() - from2.toLocalNativeDate().getTime()) / (1e3 * 60 * 60 * 24));
  }
  static parseRawDateString(date, dateMode = "DMY") {
    ngDevMode && tuiAssert.assert(date.length === DATE_FILLER_LENGTH, "[parseRawDateString]: wrong date string length");
    switch (dateMode) {
      case "YMD":
        return {
          day: parseInt(date.slice(8, 10), 10),
          month: parseInt(date.slice(5, 7), 10) - 1,
          year: parseInt(date.slice(0, 4), 10)
        };
      case "MDY":
        return {
          day: parseInt(date.slice(3, 5), 10),
          month: parseInt(date.slice(0, 2), 10) - 1,
          year: parseInt(date.slice(6, 10), 10)
        };
      case "DMY":
      default:
        return {
          day: parseInt(date.slice(0, 2), 10),
          month: parseInt(date.slice(3, 5), 10) - 1,
          year: parseInt(date.slice(6, 10), 10)
        };
    }
  }
  // TODO: Move month and year related code corresponding classes
  /**
   * Parsing a string with date with normalization
   *
   * @param rawDate date string
   * @param dateMode date format of the date string (DMY | MDY | YMD)
   * @return normalized date
   */
  static normalizeParse(rawDate, dateMode = "DMY") {
    const { day, month, year } = this.parseRawDateString(rawDate, dateMode);
    return _TuiDay.normalizeOf(year, month, day);
  }
  /**
   * Parsing a date stringified in a toJSON format
   * @param yearMonthDayString date string in format of YYYY-MM-DD
   * @return date
   * @throws exceptions if any part of the date is invalid
   */
  static jsonParse(yearMonthDayString) {
    const { day, month, year } = this.parseRawDateString(yearMonthDayString, "YMD");
    if (!TuiYear.isValidYear(year)) {
      throw new TuiInvalidYearException(year);
    }
    if (!TuiMonth.isValidMonth(year, month)) {
      throw new TuiInvalidMonthException(month);
    }
    if (!Number.isInteger(day) || !tuiInRange(day, MIN_DAY, TuiMonth.getMonthDaysCount(month, TuiYear.isLeapYear(year)) + 1)) {
      throw new TuiInvalidDayException(day);
    }
    return new _TuiDay(year, month, day);
  }
  static normalizeDayPart(day, month, year) {
    ngDevMode && tuiAssert.assert(TuiMonth.isValidMonth(year, month));
    const monthDaysCount = TuiMonth.getMonthDaysCount(month, TuiYear.isLeapYear(year));
    return tuiNormalizeToIntNumber(day, 1, monthDaysCount);
  }
  get formattedDayPart() {
    return String(this.day).padStart(2, "0");
  }
  get isWeekend() {
    const dayOfWeek = this.dayOfWeek(false);
    return dayOfWeek === TuiDayOfWeek.Saturday || dayOfWeek === TuiDayOfWeek.Sunday;
  }
  /**
   * Returns day of week
   *
   * @param startFromMonday whether week starts from Monday and not from Sunday
   * @return day of week (from 0 to 6)
   */
  dayOfWeek(startFromMonday = true) {
    const dayOfWeek = startFromMonday ? this.toLocalNativeDate().getDay() - 1 : this.toLocalNativeDate().getDay();
    return dayOfWeek < 0 ? 6 : dayOfWeek;
  }
  /**
   * Passed date is after current
   */
  dayBefore(another) {
    return this.monthBefore(another) || this.monthSame(another) && this.day < another.day;
  }
  /**
   * Passed date is after or equals to current
   */
  daySameOrBefore(another) {
    return this.monthBefore(another) || this.monthSame(another) && this.day <= another.day;
  }
  /**
   * Passed date is the same as current
   */
  daySame(another) {
    return this.monthSame(another) && this.day === another.day;
  }
  /**
   * Passed date is either before or the same as current
   */
  daySameOrAfter(another) {
    return this.monthAfter(another) || this.monthSame(another) && this.day >= another.day;
  }
  /**
   * Passed date is before current
   */
  dayAfter(another) {
    return this.monthAfter(another) || this.monthSame(another) && this.day > another.day;
  }
  /**
   * Clamping date between two limits
   *
   * @param min
   * @param max
   * @return clamped date
   */
  dayLimit(min, max) {
    if (min !== null && this.dayBefore(min)) {
      return min;
    }
    if (max !== null && this.dayAfter(max)) {
      return max;
    }
    return this;
  }
  /**
   * Immutably alters current day by passed offset
   *
   * If resulting month has more days than original one, date is rounded to the maximum day
   * in the resulting month. Offset of days will be calculated based on the resulted year and month
   * to not interfere with parent classes methods
   *
   * @param offset
   * @return new date object as a result of offsetting current
   */
  append({ year = 0, month = 0, day = 0 }) {
    const totalMonths = (this.year + year) * MONTHS_IN_YEAR + this.month + month;
    let years = Math.floor(totalMonths / MONTHS_IN_YEAR);
    let months = totalMonths % MONTHS_IN_YEAR;
    let days = Math.min(this.day, TuiMonth.getMonthDaysCount(months, TuiYear.isLeapYear(years))) + day;
    while (days > TuiMonth.getMonthDaysCount(months, TuiYear.isLeapYear(years))) {
      days -= TuiMonth.getMonthDaysCount(months, TuiYear.isLeapYear(years));
      if (months === TuiMonthNumber.December) {
        years++;
        months = TuiMonthNumber.January;
      } else {
        months++;
      }
    }
    while (days < MIN_DAY) {
      if (months === TuiMonthNumber.January) {
        years--;
        months = TuiMonthNumber.December;
      } else {
        months--;
      }
      days += TuiMonth.getMonthDaysCount(months, TuiYear.isLeapYear(years));
    }
    return new _TuiDay(years, months, days);
  }
  /**
   * Returns formatted whole date
   */
  getFormattedDay(dateFormat, separator) {
    ngDevMode && tuiAssert.assert(separator.length === 1, "Separator should consist of only 1 symbol");
    const dd = this.formattedDayPart;
    const mm = this.formattedMonthPart;
    const yyyy = this.formattedYear;
    switch (dateFormat) {
      case "YMD":
        return `${yyyy}${separator}${mm}${separator}${dd}`;
      case "MDY":
        return `${mm}${separator}${dd}${separator}${yyyy}`;
      case "DMY":
      default:
        return `${dd}${separator}${mm}${separator}${yyyy}`;
    }
  }
  toString(dateFormat = "DMY", separator = ".") {
    return this.getFormattedDay(dateFormat, separator);
  }
  toJSON() {
    return `${super.toJSON()}-${this.formattedDayPart}`;
  }
  /**
   * Returns native {@link Date} based on local time zone
   */
  toLocalNativeDate() {
    return new Date(this.year, this.month, this.day);
  }
  /**
   * Returns native {@link Date} based on UTC
   */
  toUtcNativeDate() {
    return new Date(Date.UTC(this.year, this.month, this.day));
  }
};
var TuiMonthRange = class _TuiMonthRange {
  constructor(from2, to) {
    this.from = from2;
    this.to = to;
    ngDevMode && tuiAssert.assert(from2.monthSameOrBefore(to));
  }
  static sort(month1, month2) {
    return month1.monthSameOrBefore(month2) ? new _TuiMonthRange(month1, month2) : new _TuiMonthRange(month2, month1);
  }
  get isSingleMonth() {
    return this.from.monthSame(this.to);
  }
  monthSame(another) {
    return this.from.monthSame(another.from) && this.to.monthSame(another.to);
  }
  toString() {
    return `${this.from}${RANGE_SEPARATOR_CHAR}${this.to}`;
  }
};
var TuiDayRange = class _TuiDayRange extends TuiMonthRange {
  constructor(from2, to) {
    super(from2, to);
    this.from = from2;
    this.to = to;
    ngDevMode && tuiAssert.assert(from2.daySameOrBefore(to));
  }
  /**
   * Creates range from two days after sorting them
   *
   * @param day1
   * @param day2
   * @return new range with sorted days
   */
  static sort(day1, day2) {
    return day1.daySameOrBefore(day2) ? new _TuiDayRange(day1, day2) : new _TuiDayRange(day2, day1);
  }
  /**
   * Parse and correct a day range in string format
   *
   * @param rangeString a string of dates in a format dd.mm.yyyy - dd.mm.yyyy
   * @param dateMode {@link TuiDateMode}
   * @return normalized day range object
   */
  static normalizeParse(rangeString, dateMode = "DMY") {
    const leftDay = TuiDay.normalizeParse(rangeString.slice(0, DATE_FILLER_LENGTH), dateMode);
    if (rangeString.length < DATE_RANGE_FILLER_LENGTH) {
      return new _TuiDayRange(leftDay, leftDay);
    }
    return _TuiDayRange.sort(leftDay, TuiDay.normalizeParse(rangeString.slice(DATE_FILLER_LENGTH + RANGE_SEPARATOR_CHAR.length), dateMode));
  }
  get isSingleDay() {
    return this.from.daySame(this.to);
  }
  /**
   * Tests ranges for identity
   *
   * @param another second range to test against current
   * @return `true` if days are identical
   */
  daySame(another) {
    return this.from.daySame(another.from) && this.to.daySame(another.to);
  }
  /**
   * Locks range between two days included, or limits from one side if the other is null
   *
   * @param min
   * @param max
   * @return range — clamped range
   */
  dayLimit(min, max) {
    return new _TuiDayRange(this.from.dayLimit(min, max), this.to.dayLimit(min, max));
  }
  /**
   * Human readable format.
   */
  getFormattedDayRange(dateFormat, dateSeparator) {
    const from2 = this.from.getFormattedDay(dateFormat, dateSeparator);
    const to = this.to.getFormattedDay(dateFormat, dateSeparator);
    return `${from2}${RANGE_SEPARATOR_CHAR}${to}`;
  }
  toString(dateFormat = "DMY", dateSeparator = ".") {
    return this.getFormattedDayRange(dateFormat, dateSeparator);
  }
};
var TUI_FIRST_DAY = new TuiDay(MIN_YEAR, MIN_MONTH, MIN_DAY);
var TUI_LAST_DAY = new TuiDay(MAX_YEAR, MAX_MONTH, 31);
var TuiTime = class _TuiTime {
  constructor(hours, minutes, seconds = 0, ms = 0) {
    this.hours = hours;
    this.minutes = minutes;
    this.seconds = seconds;
    this.ms = ms;
    ngDevMode && tuiAssert.assert(_TuiTime.isValidTime(hours, minutes, seconds, ms), "Time must be real, but got:", hours, minutes, seconds, ms);
  }
  /**
   * Checks if time is valid
   */
  static isValidTime(hours, minutes, seconds = 0, ms = 0) {
    return Number.isInteger(hours) && tuiInRange(hours, 0, HOURS_IN_DAY) && Number.isInteger(minutes) && tuiInRange(minutes, 0, MINUTES_IN_HOUR) && Number.isInteger(seconds) && tuiInRange(seconds, 0, SECONDS_IN_MINUTE) && Number.isInteger(ms) && tuiInRange(ms, 0, 1e3);
  }
  /**
   * Current UTC time.
   */
  static current() {
    return _TuiTime.fromAbsoluteMilliseconds(Date.now() % MILLISECONDS_IN_DAY);
  }
  /**
   * Current time in local timezone
   */
  static currentLocal() {
    const date = /* @__PURE__ */ new Date();
    return _TuiTime.fromAbsoluteMilliseconds((Date.now() - date.getTimezoneOffset() * MILLISECONDS_IN_MINUTE) % MILLISECONDS_IN_DAY);
  }
  /**
   * Calculates TuiTime from milliseconds
   */
  static fromAbsoluteMilliseconds(milliseconds) {
    ngDevMode && tuiAssert.assert(Number.isInteger(milliseconds));
    ngDevMode && tuiAssert.assert(tuiInRange(milliseconds, 0, MILLISECONDS_IN_DAY), `Milliseconds must be below ${MILLISECONDS_IN_DAY} (milliseconds in a day).`);
    const hours = Math.floor(milliseconds / MILLISECONDS_IN_HOUR);
    const minutes = Math.floor(milliseconds % MILLISECONDS_IN_HOUR / MILLISECONDS_IN_MINUTE);
    const seconds = Math.floor(milliseconds % MILLISECONDS_IN_HOUR % MILLISECONDS_IN_MINUTE / 1e3) || 0;
    const ms = Math.floor(milliseconds % MILLISECONDS_IN_HOUR % MILLISECONDS_IN_MINUTE % 1e3) || 0;
    return new _TuiTime(hours, minutes, seconds, ms);
  }
  /**
   * Parses string into TuiTime object
   */
  static fromString(time) {
    const hours = Number(time.slice(0, 2));
    const minutes = Number(time.slice(3, 5));
    const seconds = Number(time.slice(6, 8)) || 0;
    const ms = Number(time.slice(9, 12)) || 0;
    return new _TuiTime(hours, minutes, seconds, ms);
  }
  /**
   * Converts Date object into TuiTime
   * @param date
   */
  static fromLocalNativeDate(date) {
    return new _TuiTime(date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds());
  }
  /**
   * Shifts time by hours and minutes
   */
  shift({ hours = 0, minutes = 0, seconds = 0, ms = 0 }) {
    const newMs = (1e3 + this.ms + ms % 1e3) % 1e3;
    const secondsInMs = ms < 0 ? Math.ceil(ms / 1e3) : Math.floor(ms / 1e3);
    const secondsToAdd = secondsInMs + seconds;
    const newSeconds = (60 + this.seconds + secondsToAdd % 60) % 60;
    const minutesInSeconds = secondsToAdd < 0 ? Math.ceil(secondsToAdd / 60) : Math.floor(secondsToAdd / 60);
    const minutesToAdd = minutesInSeconds + minutes;
    const newMinutes = (60 + this.minutes + minutesToAdd % 60) % 60;
    const hoursInMinutes = minutesToAdd < 0 ? Math.ceil(minutesToAdd / 60) : Math.floor(minutesToAdd / 60);
    const hoursToAdd = hoursInMinutes + hours;
    const newHours = (24 + this.hours + hoursToAdd % 24) % 24;
    return new _TuiTime(newHours, newMinutes, newSeconds, newMs);
  }
  /**
   * Converts TuiTime to string
   */
  toString(mode) {
    const needAddMs = mode === "HH:MM:SS.MSS" || !mode && this.ms > 0;
    const needAddSeconds = needAddMs || mode === "HH:MM:SS" || !mode && this.seconds > 0;
    return `${this.formatTime(this.hours)}:${this.formatTime(this.minutes)}${needAddSeconds ? `:${this.formatTime(this.seconds)}` : ""}${needAddMs ? `.${this.formatTime(this.ms, 3)}` : ""}`;
  }
  valueOf() {
    return this.toAbsoluteMilliseconds();
  }
  /**
   * Returns the primitive value of the given Date object.
   * Depending on the argument, the method can return either a string or a number.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/@@toPrimitive
   */
  [Symbol.toPrimitive](hint) {
    return Date.prototype[Symbol.toPrimitive].call(this, hint);
  }
  /**
   * Converts TuiTime to milliseconds
   */
  toAbsoluteMilliseconds() {
    return this.hours * MILLISECONDS_IN_HOUR + this.minutes * MILLISECONDS_IN_MINUTE + this.seconds * 1e3 + this.ms;
  }
  formatTime(time, digits = 2) {
    return String(time).padStart(digits, "0");
  }
};

// node_modules/@taiga-ui/core/fesm2015/taiga-ui-core-abstract.js
var TuiDriver = class extends Observable {
};
function tuiAsDriver(useExisting) {
  return {
    provide: TuiDriver,
    multi: true,
    useExisting
  };
}
var TuiVehicle = class {
};
function tuiAsVehicle(useExisting) {
  return {
    provide: TuiVehicle,
    multi: true,
    useExisting
  };
}
var AbstractTuiDriverDirective = class {
  constructor(destroy$, drivers, vehicles) {
    this.destroy$ = destroy$;
    this.drivers = drivers;
    this.vehicles = vehicles;
  }
  ngOnInit() {
    const vehicle = this.vehicles.find(({
      type
    }) => type === this.type);
    merge(...this.drivers.filter(({
      type
    }) => type === this.type)).pipe(distinctUntilChanged(), takeUntil(this.destroy$)).subscribe((value) => {
      vehicle === null || vehicle === void 0 ? void 0 : vehicle.toggle(value);
    });
  }
};
AbstractTuiDriverDirective.ɵfac = function AbstractTuiDriverDirective_Factory(t) {
  return new (t || AbstractTuiDriverDirective)(ɵɵdirectiveInject(TuiDestroyService, 2), ɵɵdirectiveInject(TuiDriver), ɵɵdirectiveInject(TuiVehicle));
};
AbstractTuiDriverDirective.ɵdir = ɵɵdefineDirective({
  type: AbstractTuiDriverDirective
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AbstractTuiDriverDirective, [{
    type: Directive
  }], function() {
    return [{
      type: Observable,
      decorators: [{
        type: Self
      }, {
        type: Inject,
        args: [TuiDestroyService]
      }]
    }, {
      type: void 0,
      decorators: [{
        type: Inject,
        args: [TuiDriver]
      }]
    }, {
      type: void 0,
      decorators: [{
        type: Inject,
        args: [TuiVehicle]
      }]
    }];
  }, null);
})();
var AbstractTuiTextfieldHost = class {
  constructor(host) {
    this.host = host;
  }
  get readOnly() {
    return this.host.readOnly;
  }
  get disabled() {
    return this.host.computedDisabled;
  }
  get invalid() {
    return this.host.computedInvalid;
  }
  get focusable() {
    return this.host.computedFocusable;
  }
  get inputMode() {
    return "text";
  }
  get value() {
    var _a;
    return ((_a = this.host.value) === null || _a === void 0 ? void 0 : _a.toString()) || "";
  }
  process(_input) {
  }
};
AbstractTuiTextfieldHost.ɵfac = function AbstractTuiTextfieldHost_Factory(t) {
  return new (t || AbstractTuiTextfieldHost)(ɵɵdirectiveInject(AbstractTuiControl));
};
AbstractTuiTextfieldHost.ɵdir = ɵɵdefineDirective({
  type: AbstractTuiTextfieldHost
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AbstractTuiTextfieldHost, [{
    type: Directive
  }], function() {
    return [{
      type: void 0,
      decorators: [{
        type: Inject,
        args: [AbstractTuiControl]
      }]
    }];
  }, null);
})();
var TuiPositionAccessor = class {
};
function tuiPositionAccessorFor(type) {
  return {
    provide: TuiPositionAccessor,
    deps: [[new SkipSelf(), TuiPositionAccessor]],
    useFactory: (accessors) => accessors.find((accessor) => accessor.type === type)
  };
}
function tuiAsPositionAccessor(useExisting) {
  return {
    provide: TuiPositionAccessor,
    multi: true,
    useExisting
  };
}
var TuiRectAccessor = class {
};
function tuiRectAccessorFor(type, fallback) {
  return {
    provide: TuiRectAccessor,
    deps: [[new SkipSelf(), TuiRectAccessor], fallback],
    useFactory: tuiFallbackRectAccessor(type)
  };
}
function tuiFallbackRectAccessor(type) {
  return (accessors, fallback) => accessors.find((accessor) => accessor !== fallback && accessor.type === type) || fallback;
}
function tuiAsRectAccessor(useExisting) {
  return {
    provide: TuiRectAccessor,
    multi: true,
    useExisting
  };
}

// node_modules/@taiga-ui/core/fesm2015/taiga-ui-core-animations.js
var TRANSITION = "{{duration}}ms ease-in-out";
var DURATION = { params: { duration: 300 } };
var STAGGER = 300;
var tuiHeightCollapse = trigger("tuiHeightCollapse", [
  transition(":enter", [style({ height: 0 }), animate(TRANSITION, style({ height: "*" }))], DURATION),
  transition(":leave", [style({ height: "*" }), animate(TRANSITION, style({ height: 0 }))], DURATION)
]);
var tuiHeightCollapseList = trigger("tuiHeightCollapseList", [
  transition("* => *", [
    query(":enter", [
      style({ height: 0 }),
      stagger(STAGGER, [animate(TRANSITION, style({ height: "*" }))])
    ], {
      optional: true
    }),
    query(":leave", [
      style({ height: "*" }),
      stagger(STAGGER, [animate(TRANSITION, style({ height: 0 }))])
    ], {
      optional: true
    })
  ], DURATION)
]);
var tuiWidthCollapse = trigger("tuiWidthCollapse", [
  transition(":enter", [style({ width: 0 }), animate(TRANSITION, style({ width: "*" }))], DURATION),
  transition(":leave", [style({ width: "*" }), animate(TRANSITION, style({ width: 0 }))], DURATION)
]);
var tuiWidthCollapseList = trigger("tuiWidthCollapseList", [
  transition("* => *", [
    query(":enter", [
      style({ width: 0 }),
      stagger(STAGGER, [animate(TRANSITION, style({ width: "*" }))])
    ], {
      optional: true
    }),
    query(":leave", [
      style({ width: "*" }),
      stagger(STAGGER, [animate(TRANSITION, style({ width: 0 }))])
    ], {
      optional: true
    })
  ], DURATION)
]);
var tuiFadeIn = trigger("tuiFadeIn", [
  transition(":enter", [style({ opacity: 0 }), animate(TRANSITION, style({ opacity: 1 }))], DURATION),
  transition(":leave", [style({ opacity: 1 }), animate(TRANSITION, style({ opacity: 0 }))], DURATION)
]);
var tuiFadeInList = trigger("tuiFadeInList", [
  transition("* => *", [
    query(":enter", [
      style({ opacity: 0 }),
      stagger(STAGGER, [animate(TRANSITION, style({ opacity: 1 }))])
    ], {
      optional: true
    }),
    query(":leave", [
      style({ opacity: 1 }),
      stagger(STAGGER, [animate(TRANSITION, style({ opacity: 0 }))])
    ], {
      optional: true
    })
  ], DURATION)
]);
var tuiFadeInTop = trigger("tuiFadeInTop", [
  transition(":enter", [
    style({ transform: "translateY(-10px)", opacity: 0 }),
    animate(TRANSITION, style({ transform: "translateY(0)", opacity: 1 }))
  ], DURATION),
  transition(":leave", [
    style({ transform: "translateY(0)", opacity: 1 }),
    animate(TRANSITION, style({ transform: "translateY(-10px)", opacity: 0 }))
  ], DURATION)
]);
var tuiFadeInBottom = trigger("tuiFadeInBottom", [
  transition(":enter", [
    style({ transform: "translateY(10px)", opacity: 0 }),
    animate(TRANSITION, style({ transform: "translateY(0)", opacity: 1 }))
  ], DURATION),
  transition(":leave", [
    style({ transform: "translateY(0)", opacity: 1 }),
    animate(TRANSITION, style({ transform: "translateY(10px)", opacity: 0 }))
  ], DURATION)
]);
var tuiDropdownAnimation = trigger("tuiDropdownAnimation", [
  transition(":enter", [
    style({ transform: "translateY(-10px)", opacity: 0 }),
    animate(TRANSITION, style({ transform: "translateY(0)", opacity: 1 }))
  ], DURATION),
  transition(":leave", [
    style({ transform: "translateY(0)", opacity: 1 }),
    animate(TRANSITION, style({ transform: "translateY(-10px)", opacity: 0 }))
  ], DURATION)
]);
var tuiScaleIn = trigger("tuiScaleIn", [
  transition(":enter", [
    style({ transform: "scale(0)" }),
    animate(TRANSITION, style({ transform: "scale(1)" }))
  ], DURATION),
  transition(":leave", [
    style({ transform: "scale(1)" }),
    animate(TRANSITION, style({ transform: "scale(0)" }))
  ], DURATION)
]);
var tuiPop = trigger("tuiPop", [
  transition(":enter", [
    style({ transform: "scale(0)" }),
    animate(TRANSITION, style({ transform: "scale(1.1)" })),
    animate(TRANSITION, style({ transform: "scale(1)" }))
  ], DURATION),
  transition(":leave", [
    style({ transform: "scale(1)" }),
    animate(TRANSITION, style({ transform: "scale(1.1)" })),
    animate(TRANSITION, style({ transform: "scale(0)" }))
  ], DURATION)
]);
var tuiScaleInList = trigger("tuiScaleInList", [
  transition("* => *", [
    query(":enter", [
      style({ transform: "scale(0)" }),
      stagger(STAGGER, [
        animate(TRANSITION, style({ transform: "scale(1)" }))
      ])
    ], { optional: true }),
    query(":leave", [
      style({ transform: "scale(1)" }),
      stagger(STAGGER, [
        animate(TRANSITION, style({ transform: "scale(0)" }))
      ])
    ], { optional: true })
  ], DURATION)
]);
var tuiSlideIn = trigger("tuiSlideIn", [
  transition("* => left", [
    style({ transform: "translateX(-100%)" }),
    animate(TRANSITION, style({ transform: "translateX(0)" }))
  ], DURATION),
  transition("left => *", [
    style({ transform: "translateX(0)" }),
    animate(TRANSITION, style({ transform: "translateX(-100%)" }))
  ], DURATION),
  transition("* => right", [
    style({ transform: "translateX(100%)" }),
    animate(TRANSITION, style({ transform: "translateX(0)" }))
  ], DURATION),
  transition("right => *", [
    style({ transform: "translateX(0)" }),
    animate(TRANSITION, style({ transform: "translateX(100%)" }))
  ], DURATION)
]);
var tuiSlideInLeft = trigger("tuiSlideInLeft", [
  transition(":enter", [
    style({ transform: "translateX(-100%)" }),
    animate(TRANSITION, style({ transform: "translateX(0)" }))
  ], DURATION),
  transition(":leave", [
    style({ transform: "translateX(0)" }),
    animate(TRANSITION, style({ transform: "translateX(-100%)" }))
  ], DURATION)
]);
var tuiSlideInLeftList = trigger("tuiSlideInLeftList", [
  transition("* => *", [
    query(":enter", [
      style({ transform: "translateX(-100%)" }),
      stagger(STAGGER, [
        animate(TRANSITION, style({ transform: "translateX(0)" }))
      ])
    ], { optional: true }),
    query(":leave", [
      style({ transform: "translateX(0)" }),
      stagger(STAGGER, [
        animate(TRANSITION, style({ transform: "translateX(-100%)" }))
      ])
    ], { optional: true })
  ], DURATION)
]);
var tuiSlideInRight = trigger("tuiSlideInRight", [
  transition(":enter", [
    style({ transform: "translateX(100%)" }),
    animate(TRANSITION, style({ transform: "translateX(0)" }))
  ], DURATION),
  transition(":leave", [
    style({ transform: "translateX(0)" }),
    animate(TRANSITION, style({ transform: "translateX(100%)" }))
  ], DURATION)
]);
var tuiSlideInRightList = trigger("tuiSlideInRightList", [
  transition("* => *", [
    query(":enter", [
      style({ transform: "translateX(100%)" }),
      stagger(STAGGER, [
        animate(TRANSITION, style({ transform: "translateX(0)" }))
      ])
    ], { optional: true }),
    query(":leave", [
      style({ transform: "translateX(0)" }),
      stagger(STAGGER, [
        animate(TRANSITION, style({ transform: "translateX(100%)" }))
      ])
    ], { optional: true })
  ], DURATION)
]);
var tuiSlideInTop = trigger("tuiSlideInTop", [
  transition(":enter", [
    style({ transform: "translate3d(0,{{start}},0)" }),
    animate(TRANSITION, style({ transform: "translate3d(0,{{end}},0)" }))
  ], { params: { end: 0, start: "100%", duration: 300 } }),
  transition(":leave", [
    style({ transform: "translate3d(0,{{end}},0)" }),
    animate(TRANSITION, style({ transform: "translate3d(0,{{start}},0)" }))
  ], { params: { end: 0, start: "100%", duration: 300 } })
]);
var tuiSlideInTopList = trigger("tuiSlideInTopList", [
  transition("* => *", [
    query(":enter", [
      style({ transform: "translateY(100%)" }),
      stagger(STAGGER, [
        animate(TRANSITION, style({ transform: "translateY(0)" }))
      ])
    ], { optional: true }),
    query(":leave", [
      style({ transform: "translateY(0)" }),
      stagger(STAGGER, [
        animate(TRANSITION, style({ transform: "translateY(100%)" }))
      ])
    ], { optional: true })
  ], DURATION)
]);
var tuiSlideInBottom = trigger("tuiSlideInBottom", [
  transition(":enter", [
    style({ transform: "translateY(-100%)" }),
    animate(TRANSITION, style({ transform: "translateY(0)" }))
  ], DURATION),
  transition(":leave", [
    style({ transform: "translateY(0)" }),
    animate(TRANSITION, style({ transform: "translateY(-100%)" }))
  ], DURATION)
]);
var tuiSlideInBottomList = trigger("tuiSlideInBottomList", [
  transition("* => *", [
    query(":enter", [
      style({ transform: "translateY(-100%)" }),
      stagger(STAGGER, [
        animate(TRANSITION, style({ transform: "translateY(0)" }))
      ])
    ], { optional: true }),
    query(":leave", [
      style({ transform: "translateY(0)" }),
      stagger(STAGGER, [
        animate(TRANSITION, style({ transform: "translateY(-100%)" }))
      ])
    ], { optional: true })
  ], DURATION)
]);

// node_modules/@taiga-ui/i18n/fesm2015/taiga-ui-i18n-enums.js
var TuiCountryIsoCode;
(function(TuiCountryIsoCode2) {
  TuiCountryIsoCode2["AD"] = "AD";
  TuiCountryIsoCode2["AE"] = "AE";
  TuiCountryIsoCode2["AF"] = "AF";
  TuiCountryIsoCode2["AG"] = "AG";
  TuiCountryIsoCode2["AI"] = "AI";
  TuiCountryIsoCode2["AL"] = "AL";
  TuiCountryIsoCode2["AM"] = "AM";
  TuiCountryIsoCode2["AO"] = "AO";
  TuiCountryIsoCode2["AR"] = "AR";
  TuiCountryIsoCode2["AT"] = "AT";
  TuiCountryIsoCode2["AU"] = "AU";
  TuiCountryIsoCode2["AW"] = "AW";
  TuiCountryIsoCode2["AZ"] = "AZ";
  TuiCountryIsoCode2["BA"] = "BA";
  TuiCountryIsoCode2["BB"] = "BB";
  TuiCountryIsoCode2["BD"] = "BD";
  TuiCountryIsoCode2["BE"] = "BE";
  TuiCountryIsoCode2["BF"] = "BF";
  TuiCountryIsoCode2["BG"] = "BG";
  TuiCountryIsoCode2["BH"] = "BH";
  TuiCountryIsoCode2["BI"] = "BI";
  TuiCountryIsoCode2["BJ"] = "BJ";
  TuiCountryIsoCode2["BL"] = "BL";
  TuiCountryIsoCode2["BM"] = "BM";
  TuiCountryIsoCode2["BN"] = "BN";
  TuiCountryIsoCode2["BO"] = "BO";
  TuiCountryIsoCode2["BQ"] = "BQ";
  TuiCountryIsoCode2["BR"] = "BR";
  TuiCountryIsoCode2["BS"] = "BS";
  TuiCountryIsoCode2["BT"] = "BT";
  TuiCountryIsoCode2["BW"] = "BW";
  TuiCountryIsoCode2["BY"] = "BY";
  TuiCountryIsoCode2["BZ"] = "BZ";
  TuiCountryIsoCode2["CA"] = "CA";
  TuiCountryIsoCode2["CD"] = "CD";
  TuiCountryIsoCode2["CF"] = "CF";
  TuiCountryIsoCode2["CG"] = "CG";
  TuiCountryIsoCode2["CH"] = "CH";
  TuiCountryIsoCode2["CI"] = "CI";
  TuiCountryIsoCode2["CL"] = "CL";
  TuiCountryIsoCode2["CM"] = "CM";
  TuiCountryIsoCode2["CN"] = "CN";
  TuiCountryIsoCode2["CO"] = "CO";
  TuiCountryIsoCode2["CR"] = "CR";
  TuiCountryIsoCode2["CU"] = "CU";
  TuiCountryIsoCode2["CV"] = "CV";
  TuiCountryIsoCode2["CW"] = "CW";
  TuiCountryIsoCode2["CY"] = "CY";
  TuiCountryIsoCode2["CZ"] = "CZ";
  TuiCountryIsoCode2["DE"] = "DE";
  TuiCountryIsoCode2["DJ"] = "DJ";
  TuiCountryIsoCode2["DK"] = "DK";
  TuiCountryIsoCode2["DM"] = "DM";
  TuiCountryIsoCode2["DO"] = "DO";
  TuiCountryIsoCode2["DZ"] = "DZ";
  TuiCountryIsoCode2["EC"] = "EC";
  TuiCountryIsoCode2["EE"] = "EE";
  TuiCountryIsoCode2["EG"] = "EG";
  TuiCountryIsoCode2["ER"] = "ER";
  TuiCountryIsoCode2["ES"] = "ES";
  TuiCountryIsoCode2["ET"] = "ET";
  TuiCountryIsoCode2["FI"] = "FI";
  TuiCountryIsoCode2["FJ"] = "FJ";
  TuiCountryIsoCode2["FK"] = "FK";
  TuiCountryIsoCode2["FM"] = "FM";
  TuiCountryIsoCode2["FR"] = "FR";
  TuiCountryIsoCode2["GA"] = "GA";
  TuiCountryIsoCode2["GB"] = "GB";
  TuiCountryIsoCode2["GD"] = "GD";
  TuiCountryIsoCode2["GE"] = "GE";
  TuiCountryIsoCode2["GF"] = "GF";
  TuiCountryIsoCode2["GH"] = "GH";
  TuiCountryIsoCode2["GI"] = "GI";
  TuiCountryIsoCode2["GL"] = "GL";
  TuiCountryIsoCode2["GM"] = "GM";
  TuiCountryIsoCode2["GN"] = "GN";
  TuiCountryIsoCode2["GP"] = "GP";
  TuiCountryIsoCode2["GQ"] = "GQ";
  TuiCountryIsoCode2["GR"] = "GR";
  TuiCountryIsoCode2["GT"] = "GT";
  TuiCountryIsoCode2["GW"] = "GW";
  TuiCountryIsoCode2["GY"] = "GY";
  TuiCountryIsoCode2["HK"] = "HK";
  TuiCountryIsoCode2["HN"] = "HN";
  TuiCountryIsoCode2["HR"] = "HR";
  TuiCountryIsoCode2["HT"] = "HT";
  TuiCountryIsoCode2["HU"] = "HU";
  TuiCountryIsoCode2["ID"] = "ID";
  TuiCountryIsoCode2["IE"] = "IE";
  TuiCountryIsoCode2["IL"] = "IL";
  TuiCountryIsoCode2["IN"] = "IN";
  TuiCountryIsoCode2["IQ"] = "IQ";
  TuiCountryIsoCode2["IR"] = "IR";
  TuiCountryIsoCode2["IS"] = "IS";
  TuiCountryIsoCode2["IT"] = "IT";
  TuiCountryIsoCode2["JM"] = "JM";
  TuiCountryIsoCode2["JO"] = "JO";
  TuiCountryIsoCode2["JP"] = "JP";
  TuiCountryIsoCode2["KE"] = "KE";
  TuiCountryIsoCode2["KG"] = "KG";
  TuiCountryIsoCode2["KH"] = "KH";
  TuiCountryIsoCode2["KM"] = "KM";
  TuiCountryIsoCode2["KN"] = "KN";
  TuiCountryIsoCode2["KP"] = "KP";
  TuiCountryIsoCode2["KR"] = "KR";
  TuiCountryIsoCode2["KW"] = "KW";
  TuiCountryIsoCode2["KY"] = "KY";
  TuiCountryIsoCode2["KZ"] = "KZ";
  TuiCountryIsoCode2["LA"] = "LA";
  TuiCountryIsoCode2["LB"] = "LB";
  TuiCountryIsoCode2["LC"] = "LC";
  TuiCountryIsoCode2["LI"] = "LI";
  TuiCountryIsoCode2["LK"] = "LK";
  TuiCountryIsoCode2["LR"] = "LR";
  TuiCountryIsoCode2["LS"] = "LS";
  TuiCountryIsoCode2["LT"] = "LT";
  TuiCountryIsoCode2["LU"] = "LU";
  TuiCountryIsoCode2["LV"] = "LV";
  TuiCountryIsoCode2["LY"] = "LY";
  TuiCountryIsoCode2["MA"] = "MA";
  TuiCountryIsoCode2["MC"] = "MC";
  TuiCountryIsoCode2["MD"] = "MD";
  TuiCountryIsoCode2["ME"] = "ME";
  TuiCountryIsoCode2["MF"] = "MF";
  TuiCountryIsoCode2["MG"] = "MG";
  TuiCountryIsoCode2["MK"] = "MK";
  TuiCountryIsoCode2["ML"] = "ML";
  TuiCountryIsoCode2["MM"] = "MM";
  TuiCountryIsoCode2["MN"] = "MN";
  TuiCountryIsoCode2["MO"] = "MO";
  TuiCountryIsoCode2["MQ"] = "MQ";
  TuiCountryIsoCode2["MR"] = "MR";
  TuiCountryIsoCode2["MS"] = "MS";
  TuiCountryIsoCode2["MT"] = "MT";
  TuiCountryIsoCode2["MU"] = "MU";
  TuiCountryIsoCode2["MV"] = "MV";
  TuiCountryIsoCode2["MW"] = "MW";
  TuiCountryIsoCode2["MX"] = "MX";
  TuiCountryIsoCode2["MY"] = "MY";
  TuiCountryIsoCode2["MZ"] = "MZ";
  TuiCountryIsoCode2["NA"] = "NA";
  TuiCountryIsoCode2["NC"] = "NC";
  TuiCountryIsoCode2["NE"] = "NE";
  TuiCountryIsoCode2["NG"] = "NG";
  TuiCountryIsoCode2["NI"] = "NI";
  TuiCountryIsoCode2["NL"] = "NL";
  TuiCountryIsoCode2["NO"] = "NO";
  TuiCountryIsoCode2["NP"] = "NP";
  TuiCountryIsoCode2["NZ"] = "NZ";
  TuiCountryIsoCode2["OM"] = "OM";
  TuiCountryIsoCode2["PA"] = "PA";
  TuiCountryIsoCode2["PE"] = "PE";
  TuiCountryIsoCode2["PF"] = "PF";
  TuiCountryIsoCode2["PG"] = "PG";
  TuiCountryIsoCode2["PH"] = "PH";
  TuiCountryIsoCode2["PK"] = "PK";
  TuiCountryIsoCode2["PL"] = "PL";
  TuiCountryIsoCode2["PT"] = "PT";
  TuiCountryIsoCode2["PW"] = "PW";
  TuiCountryIsoCode2["PY"] = "PY";
  TuiCountryIsoCode2["QA"] = "QA";
  TuiCountryIsoCode2["RE"] = "RE";
  TuiCountryIsoCode2["RO"] = "RO";
  TuiCountryIsoCode2["RS"] = "RS";
  TuiCountryIsoCode2["RU"] = "RU";
  TuiCountryIsoCode2["RW"] = "RW";
  TuiCountryIsoCode2["SA"] = "SA";
  TuiCountryIsoCode2["SB"] = "SB";
  TuiCountryIsoCode2["SC"] = "SC";
  TuiCountryIsoCode2["SD"] = "SD";
  TuiCountryIsoCode2["SE"] = "SE";
  TuiCountryIsoCode2["SG"] = "SG";
  TuiCountryIsoCode2["SH"] = "SH";
  TuiCountryIsoCode2["SI"] = "SI";
  TuiCountryIsoCode2["SK"] = "SK";
  TuiCountryIsoCode2["SL"] = "SL";
  TuiCountryIsoCode2["SM"] = "SM";
  TuiCountryIsoCode2["SN"] = "SN";
  TuiCountryIsoCode2["SO"] = "SO";
  TuiCountryIsoCode2["SR"] = "SR";
  TuiCountryIsoCode2["ST"] = "ST";
  TuiCountryIsoCode2["SV"] = "SV";
  TuiCountryIsoCode2["SX"] = "SX";
  TuiCountryIsoCode2["SY"] = "SY";
  TuiCountryIsoCode2["SZ"] = "SZ";
  TuiCountryIsoCode2["TC"] = "TC";
  TuiCountryIsoCode2["TD"] = "TD";
  TuiCountryIsoCode2["TG"] = "TG";
  TuiCountryIsoCode2["TH"] = "TH";
  TuiCountryIsoCode2["TJ"] = "TJ";
  TuiCountryIsoCode2["TL"] = "TL";
  TuiCountryIsoCode2["TM"] = "TM";
  TuiCountryIsoCode2["TN"] = "TN";
  TuiCountryIsoCode2["TO"] = "TO";
  TuiCountryIsoCode2["TR"] = "TR";
  TuiCountryIsoCode2["TT"] = "TT";
  TuiCountryIsoCode2["TW"] = "TW";
  TuiCountryIsoCode2["TZ"] = "TZ";
  TuiCountryIsoCode2["UA"] = "UA";
  TuiCountryIsoCode2["UG"] = "UG";
  TuiCountryIsoCode2["US"] = "US";
  TuiCountryIsoCode2["UY"] = "UY";
  TuiCountryIsoCode2["UZ"] = "UZ";
  TuiCountryIsoCode2["VC"] = "VC";
  TuiCountryIsoCode2["VE"] = "VE";
  TuiCountryIsoCode2["VG"] = "VG";
  TuiCountryIsoCode2["VN"] = "VN";
  TuiCountryIsoCode2["VU"] = "VU";
  TuiCountryIsoCode2["WS"] = "WS";
  TuiCountryIsoCode2["XK"] = "XK";
  TuiCountryIsoCode2["YE"] = "YE";
  TuiCountryIsoCode2["YT"] = "YT";
  TuiCountryIsoCode2["ZA"] = "ZA";
  TuiCountryIsoCode2["ZM"] = "ZM";
  TuiCountryIsoCode2["ZW"] = "ZW";
})(TuiCountryIsoCode || (TuiCountryIsoCode = {}));

// node_modules/@taiga-ui/i18n/fesm2015/taiga-ui-i18n-languages-chinese.js
var TUI_CHINESE_LANGUAGE_ADDON_COMMERCE = {
  cardNumber: ["号码", "信用卡号码"],
  cardExpiry: ["有效期", "信用卡有效期"]
};
var TUI_CHINESE_LANGUAGE_ADDON_EDITOR = {
  colorSelectorModeNames: ["纯色", "渐变色"],
  toolbarTools: {
    undo: "撤消",
    redo: "重做",
    font: "字体",
    fontStyle: "字体样式",
    fontSize: "字体大小",
    bold: "加粗",
    italic: "斜体",
    underline: "下划线",
    strikeThrough: "删除线",
    justify: "对齐",
    justifyLeft: "左对齐",
    justifyCenter: "中心对齐",
    justifyRight: "右对齐",
    justifyFull: "两端对齐",
    list: "列表",
    indent: "缩进",
    outdent: "减小缩进",
    unorderedList: "无序列表",
    orderedList: "有序列表",
    quote: "引用",
    foreColor: "颜色",
    backColor: "背景颜色",
    hiliteColor: "高亮颜色",
    clear: "清除",
    link: "链接",
    attach: "附加文件",
    tex: "插入 TeX",
    code: "代码",
    image: "插入图片",
    insertHorizontalRule: "插入水平线",
    superscript: "上标",
    subscript: "下标",
    insertTable: "插入表格",
    insertGroup: "Insert group",
    hiliteGroup: "Hilite group",
    removeGroup: "Remove group",
    insertAnchor: "Insert anchor",
    mergeCells: "合并单元格",
    splitCells: "拆分单元格",
    rowsColumnsManaging: "管理行和列",
    cellColor: "单元格颜色",
    setDetails: "详细信息",
    removeDetails: "删除详细信息"
  },
  editorEditLink: {
    urlExample: "example.com",
    anchorExample: "anchor"
  },
  editorTableCommands: [
    ["在前面插入列", "在后面插入列"],
    ["在前面插入行", "在后面插入行"],
    ["删除列", "删除行"]
  ],
  editorCodeOptions: ["文中代码", "代码块"],
  editorFontOptions: {
    small: "小的",
    large: "大的",
    normal: "普通的",
    title: "标题",
    subtitle: "副标题"
  }
};
var TUI_CHINESE_LANGUAGE_ADDON_PREVIEW = {
  previewTexts: {
    rotate: "旋转"
  },
  zoomTexts: {
    zoomOut: "缩小",
    zoomIn: "放大",
    reset: "重置"
  }
};
var TUI_CHINESE_LANGUAGE_ADDON_TABLE = {
  showHideText: "显示/隐藏",
  paginationTexts: {
    pages: "页面",
    linesPerPage: "每页行数",
    of: "于"
  }
};
var TUI_CHINESE_LANGUAGE_COUNTRIES = {
  [TuiCountryIsoCode.AD]: "安道尔",
  [TuiCountryIsoCode.AE]: "阿拉伯联合酋长国",
  [TuiCountryIsoCode.AF]: "阿富汗",
  [TuiCountryIsoCode.AG]: "安提瓜和巴布达",
  [TuiCountryIsoCode.AI]: "安圭拉",
  [TuiCountryIsoCode.AL]: "阿尔巴尼亚",
  [TuiCountryIsoCode.AM]: "亚美尼亚",
  [TuiCountryIsoCode.AO]: "安哥拉",
  [TuiCountryIsoCode.AR]: "阿根廷",
  [TuiCountryIsoCode.AT]: "奥地利",
  [TuiCountryIsoCode.AU]: "澳大利亚",
  [TuiCountryIsoCode.AW]: "阿鲁巴",
  [TuiCountryIsoCode.AZ]: "阿塞拜疆",
  [TuiCountryIsoCode.BA]: "波斯尼亚和黑塞哥维那",
  [TuiCountryIsoCode.BB]: "巴巴多斯",
  [TuiCountryIsoCode.BD]: "孟加拉国",
  [TuiCountryIsoCode.BE]: "比利时",
  [TuiCountryIsoCode.BF]: "布基纳法索",
  [TuiCountryIsoCode.BG]: "保加利亚",
  [TuiCountryIsoCode.BH]: "巴林",
  [TuiCountryIsoCode.BI]: "布隆迪",
  [TuiCountryIsoCode.BJ]: "贝宁",
  [TuiCountryIsoCode.BL]: "圣巴泰勒米岛",
  [TuiCountryIsoCode.BM]: "百慕大",
  [TuiCountryIsoCode.BN]: "文莱达鲁萨兰国",
  [TuiCountryIsoCode.BO]: "玻利维亚",
  [TuiCountryIsoCode.BQ]: "博内尔岛",
  [TuiCountryIsoCode.BR]: "圣尤斯特歇斯和萨巴",
  [TuiCountryIsoCode.BS]: "巴西",
  [TuiCountryIsoCode.BT]: "巴哈马",
  [TuiCountryIsoCode.BW]: "不丹",
  [TuiCountryIsoCode.BY]: "博茨瓦纳",
  [TuiCountryIsoCode.BZ]: "白俄罗斯",
  [TuiCountryIsoCode.CA]: "伯利兹",
  [TuiCountryIsoCode.CD]: "加拿大",
  [TuiCountryIsoCode.CF]: "刚果民主共和國",
  [TuiCountryIsoCode.CG]: "中非共和国",
  [TuiCountryIsoCode.CH]: "刚果（布拉柴维尔）",
  [TuiCountryIsoCode.CI]: "瑞士",
  [TuiCountryIsoCode.CL]: "科特迪瓦",
  [TuiCountryIsoCode.CM]: "智利",
  [TuiCountryIsoCode.CN]: "喀麦隆",
  [TuiCountryIsoCode.CO]: "中国",
  [TuiCountryIsoCode.CR]: "哥伦比亚",
  [TuiCountryIsoCode.CU]: "哥斯达黎加",
  [TuiCountryIsoCode.CV]: "古巴",
  [TuiCountryIsoCode.CW]: "佛得角",
  [TuiCountryIsoCode.CY]: "库拉索岛",
  [TuiCountryIsoCode.CZ]: "塞浦路斯",
  [TuiCountryIsoCode.DE]: "捷克共和国",
  [TuiCountryIsoCode.DJ]: "德国",
  [TuiCountryIsoCode.DK]: "吉布提",
  [TuiCountryIsoCode.DM]: "丹麦",
  [TuiCountryIsoCode.DO]: "多米尼克",
  [TuiCountryIsoCode.DZ]: "多米尼加共和国",
  [TuiCountryIsoCode.EC]: "阿尔及利亚",
  [TuiCountryIsoCode.EE]: "厄瓜多尔",
  [TuiCountryIsoCode.EG]: "爱沙尼亚",
  [TuiCountryIsoCode.ER]: "埃及",
  [TuiCountryIsoCode.ES]: "厄立特里亚",
  [TuiCountryIsoCode.ET]: "西班牙",
  [TuiCountryIsoCode.FI]: "埃塞俄比亚",
  [TuiCountryIsoCode.FJ]: "芬兰",
  [TuiCountryIsoCode.FK]: "斐济",
  [TuiCountryIsoCode.FM]: "福克兰群岛",
  [TuiCountryIsoCode.FR]: "F.S.密克罗尼西亚",
  [TuiCountryIsoCode.GA]: "法国",
  [TuiCountryIsoCode.GB]: "加蓬",
  [TuiCountryIsoCode.GD]: "英国",
  [TuiCountryIsoCode.GE]: "格林纳达",
  [TuiCountryIsoCode.GF]: "圭亚那",
  [TuiCountryIsoCode.GH]: "格鲁吉亚",
  [TuiCountryIsoCode.GI]: "加纳",
  [TuiCountryIsoCode.GL]: "直布罗陀",
  [TuiCountryIsoCode.GM]: "格陵兰",
  [TuiCountryIsoCode.GN]: "冈比亚",
  [TuiCountryIsoCode.GP]: "瓜德罗普岛",
  [TuiCountryIsoCode.GQ]: "几内亚",
  [TuiCountryIsoCode.GR]: "赤道几内亚",
  [TuiCountryIsoCode.GT]: "希腊",
  [TuiCountryIsoCode.GW]: "危地马拉",
  [TuiCountryIsoCode.GY]: "几内亚比绍",
  [TuiCountryIsoCode.HK]: "圭亚那",
  [TuiCountryIsoCode.HN]: "中国.香港",
  [TuiCountryIsoCode.HR]: "洪都拉斯",
  [TuiCountryIsoCode.HT]: "克罗地亚",
  [TuiCountryIsoCode.HU]: "海地",
  [TuiCountryIsoCode.ID]: "匈牙利",
  [TuiCountryIsoCode.IE]: "印度尼西亚",
  [TuiCountryIsoCode.IL]: "爱尔兰",
  [TuiCountryIsoCode.IN]: "以色列",
  [TuiCountryIsoCode.IQ]: "印度",
  [TuiCountryIsoCode.IR]: "伊拉克",
  [TuiCountryIsoCode.IS]: "伊朗",
  [TuiCountryIsoCode.IT]: "冰岛",
  [TuiCountryIsoCode.JM]: "意大利",
  [TuiCountryIsoCode.JO]: "牙买加",
  [TuiCountryIsoCode.JP]: "约旦",
  [TuiCountryIsoCode.KE]: "日本",
  [TuiCountryIsoCode.KG]: "肯尼亚",
  [TuiCountryIsoCode.KH]: "吉尔吉斯斯坦",
  [TuiCountryIsoCode.KM]: "柬埔寨",
  [TuiCountryIsoCode.KN]: "科摩罗 ",
  [TuiCountryIsoCode.KP]: "圣基茨和尼维斯",
  [TuiCountryIsoCode.KR]: "朝鲜",
  [TuiCountryIsoCode.KW]: "韩国",
  [TuiCountryIsoCode.KY]: "科威特",
  [TuiCountryIsoCode.KZ]: "开曼群岛",
  [TuiCountryIsoCode.LA]: "哈萨克斯坦",
  [TuiCountryIsoCode.LB]: "老挝",
  [TuiCountryIsoCode.LC]: "黎巴嫩",
  [TuiCountryIsoCode.LI]: "圣卢西亚",
  [TuiCountryIsoCode.LK]: "列支敦士登",
  [TuiCountryIsoCode.LR]: "斯里兰卡",
  [TuiCountryIsoCode.LS]: "利比里亚",
  [TuiCountryIsoCode.LT]: "莱索托",
  [TuiCountryIsoCode.LU]: "立陶宛",
  [TuiCountryIsoCode.LV]: "卢森堡",
  [TuiCountryIsoCode.LY]: "拉脱维亚",
  [TuiCountryIsoCode.MA]: "利比亚",
  [TuiCountryIsoCode.MC]: "摩洛哥",
  [TuiCountryIsoCode.MD]: "摩纳哥",
  [TuiCountryIsoCode.ME]: "摩尔多瓦",
  [TuiCountryIsoCode.MF]: "圣马丁",
  [TuiCountryIsoCode.MG]: "黑山",
  [TuiCountryIsoCode.MK]: "马达加斯加",
  [TuiCountryIsoCode.ML]: "北马其顿共和国",
  [TuiCountryIsoCode.MM]: "马里",
  [TuiCountryIsoCode.MN]: "缅甸",
  [TuiCountryIsoCode.MO]: "蒙古",
  [TuiCountryIsoCode.MQ]: "马提尼克岛",
  [TuiCountryIsoCode.MR]: "中国.澳门",
  [TuiCountryIsoCode.MS]: "毛里塔尼亚",
  [TuiCountryIsoCode.MT]: "蒙特塞拉特",
  [TuiCountryIsoCode.MU]: "马耳他",
  [TuiCountryIsoCode.MV]: "毛里求斯",
  [TuiCountryIsoCode.MW]: "马尔代夫",
  [TuiCountryIsoCode.MX]: "马拉维",
  [TuiCountryIsoCode.MY]: "墨西哥",
  [TuiCountryIsoCode.MZ]: "马来西亚",
  [TuiCountryIsoCode.NA]: "莫桑比克",
  [TuiCountryIsoCode.NC]: "新喀里多尼亞",
  [TuiCountryIsoCode.NE]: "纳米比亚",
  [TuiCountryIsoCode.NG]: "尼日尔",
  [TuiCountryIsoCode.NI]: "尼日利亚",
  [TuiCountryIsoCode.NL]: "尼加拉瓜",
  [TuiCountryIsoCode.NO]: "荷兰",
  [TuiCountryIsoCode.NP]: "挪威",
  [TuiCountryIsoCode.NZ]: "尼泊尔",
  [TuiCountryIsoCode.OM]: "新西兰",
  [TuiCountryIsoCode.PA]: "阿曼",
  [TuiCountryIsoCode.PE]: "巴拿马",
  [TuiCountryIsoCode.PF]: "秘鲁",
  [TuiCountryIsoCode.PG]: "法属波利尼西亚（大溪地）",
  [TuiCountryIsoCode.PH]: "巴布亚新几内亚",
  [TuiCountryIsoCode.PK]: "菲律宾",
  [TuiCountryIsoCode.PL]: "巴基斯坦",
  [TuiCountryIsoCode.PT]: "波兰",
  [TuiCountryIsoCode.PW]: "葡萄牙",
  [TuiCountryIsoCode.PY]: "帕劳",
  [TuiCountryIsoCode.QA]: "巴拉圭",
  [TuiCountryIsoCode.RE]: "会议",
  [TuiCountryIsoCode.RO]: "卡塔尔",
  [TuiCountryIsoCode.RS]: "罗马尼亚",
  [TuiCountryIsoCode.RU]: "塞尔维亚",
  [TuiCountryIsoCode.RW]: "俄罗斯",
  [TuiCountryIsoCode.SA]: "卢旺达",
  [TuiCountryIsoCode.SB]: "沙特阿拉伯",
  [TuiCountryIsoCode.SC]: "所罗门群岛",
  [TuiCountryIsoCode.SD]: "塞舌尔",
  [TuiCountryIsoCode.SE]: "苏丹",
  [TuiCountryIsoCode.SG]: "瑞典",
  [TuiCountryIsoCode.SH]: "新加坡",
  [TuiCountryIsoCode.SI]: "圣赫勒拿",
  [TuiCountryIsoCode.SK]: "斯洛文尼亚",
  [TuiCountryIsoCode.SL]: "斯洛伐克",
  [TuiCountryIsoCode.SM]: "塞拉利昂",
  [TuiCountryIsoCode.SN]: "圣马力诺",
  [TuiCountryIsoCode.SO]: "塞内加尔",
  [TuiCountryIsoCode.SR]: "索马里",
  [TuiCountryIsoCode.ST]: "苏里南",
  [TuiCountryIsoCode.SV]: "圣多美和普林西比",
  [TuiCountryIsoCode.SX]: "萨尔瓦多",
  [TuiCountryIsoCode.SY]: "圣马丁",
  [TuiCountryIsoCode.SZ]: "阿拉伯叙利亚共和国",
  [TuiCountryIsoCode.TC]: "斯威士兰",
  [TuiCountryIsoCode.TD]: "特克斯和凯科斯群岛",
  [TuiCountryIsoCode.TG]: "乍得",
  [TuiCountryIsoCode.TH]: "多哥",
  [TuiCountryIsoCode.TJ]: "泰国",
  [TuiCountryIsoCode.TL]: "塔吉克斯坦",
  [TuiCountryIsoCode.TM]: "东帝汶",
  [TuiCountryIsoCode.TN]: "土库曼斯坦",
  [TuiCountryIsoCode.TO]: "突尼斯",
  [TuiCountryIsoCode.TR]: "汤加",
  [TuiCountryIsoCode.TT]: "土耳其",
  [TuiCountryIsoCode.TW]: "特立尼达和多巴哥",
  [TuiCountryIsoCode.TZ]: "台湾",
  [TuiCountryIsoCode.UA]: "坦桑尼亚",
  [TuiCountryIsoCode.UG]: "乌克兰",
  [TuiCountryIsoCode.US]: "乌干达",
  [TuiCountryIsoCode.UY]: "美国",
  [TuiCountryIsoCode.UZ]: "乌拉圭",
  [TuiCountryIsoCode.VC]: "乌兹别克斯坦",
  [TuiCountryIsoCode.VE]: "圣文森特和格林纳丁斯委内瑞拉",
  [TuiCountryIsoCode.VG]: "英属维尔京群岛",
  [TuiCountryIsoCode.VN]: "越南",
  [TuiCountryIsoCode.VU]: "瓦努阿图",
  [TuiCountryIsoCode.WS]: "萨摩亚",
  [TuiCountryIsoCode.XK]: "科索沃",
  [TuiCountryIsoCode.YE]: "也门",
  [TuiCountryIsoCode.YT]: "马约特岛",
  [TuiCountryIsoCode.ZA]: "南非",
  [TuiCountryIsoCode.ZM]: "赞比亚",
  [TuiCountryIsoCode.ZW]: "津巴布韦"
};
var TUI_CHINESE_LANGUAGE_CORE = {
  months: [
    "一月",
    "二月",
    "三月",
    "四月",
    "五月",
    "六月",
    "七月",
    "八月",
    "九月",
    "十月",
    "十一月",
    "十二月"
  ],
  close: "关闭",
  nothingFoundMessage: "什么都没找到",
  defaultErrorMessage: "无效值",
  spinTexts: ["前", "后"],
  shortWeekDays: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
  countries: TUI_CHINESE_LANGUAGE_COUNTRIES
};
var TUI_CHINESE_LANGUAGE_KIT = {
  cancel: "撤消",
  done: "完成",
  more: "更多",
  otherDate: "其他日期...",
  showAll: "显示所有",
  hide: "隐藏",
  mobileCalendarTexts: ["选择日期", "选择范围", "選擇日期"],
  range: ["从", "至"],
  countTexts: ["加", "减"],
  time: {
    "HH:MM": "HH:MM",
    "HH:MM:SS": "HH:MM:SS",
    "HH:MM:SS.MSS": "HH:MM:SS.MSS"
  },
  dateTexts: {
    DMY: "dd.mm.yyyy",
    MDY: "mm.dd.yyyy",
    YMD: "yyyy.mm.dd"
  },
  digitalInformationUnits: ["B", "KiB", "MiB"],
  passwordTexts: ["显示密码", "隐藏密码"],
  copyTexts: ["复制", "已复制"],
  shortCalendarMonths: [
    "一月",
    "二月",
    "三月",
    "四月",
    "五月",
    "六月",
    "七月",
    "八月",
    "九月",
    "十月",
    "十一月",
    "十二月"
  ],
  pagination: ["上一页", "下一页"],
  fileTexts: {
    loadingError: "加载错误",
    preview: "预览",
    remove: "清除"
  },
  inputFileTexts: {
    defaultLabelSingle: "或拖动 它 这里",
    defaultLabelMultiple: "或拖动 它们 这里",
    defaultLinkSingle: "选择一个文件",
    defaultLinkMultiple: "选择多个文件",
    maxSizeRejectionReason: "文件超出大小 ",
    formatRejectionReason: "文件格式错误",
    drop: "把文件放在这里",
    dropMultiple: "把多个文件放在这里"
  },
  multiSelectTexts: {
    all: "全选",
    none: "选择无"
  },
  prompt: {
    yes: "是",
    no: "不"
  }
};
var TUI_CHINESE_LANGUAGE = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({ name: "chinese" }, TUI_CHINESE_LANGUAGE_CORE), TUI_CHINESE_LANGUAGE_KIT), TUI_CHINESE_LANGUAGE_ADDON_TABLE), TUI_CHINESE_LANGUAGE_ADDON_COMMERCE), TUI_CHINESE_LANGUAGE_ADDON_EDITOR), TUI_CHINESE_LANGUAGE_ADDON_PREVIEW);

// node_modules/@taiga-ui/i18n/fesm2015/taiga-ui-i18n-languages-dutch.js
var TUI_DUTCH_LANGUAGE_ADDON_COMMERCE = {
  cardNumber: ["Nummer", "Kaartnummer"],
  cardExpiry: ["Vervaldatum", "Vervaldatum Kaart"]
};
var TUI_DUTCH_LANGUAGE_ADDON_EDITOR = {
  colorSelectorModeNames: ["Effen kleur", "Kleurverloop"],
  toolbarTools: {
    undo: "Undo",
    redo: "Redo",
    font: "Lettertype",
    fontStyle: "Tekenstijl",
    fontSize: "Punten",
    bold: "Vet",
    italic: "Cursief",
    underline: "Onderstrepen",
    strikeThrough: "Doorhalen",
    justify: "Uitlijning",
    justifyLeft: "Uitlijning links",
    justifyCenter: "Uitlijning midden",
    justifyRight: "Uitlijning rechts",
    justifyFull: "Uitlijning uitvullen",
    list: "Lijst",
    indent: "Inspringen",
    outdent: "Uitspringen",
    unorderedList: "Ongesorteerde lijst",
    orderedList: "Gesorteerde lijst",
    quote: "Citeren",
    foreColor: "Kleur",
    backColor: "Achtergrondkleur",
    hiliteColor: "Tekstmarkeringskleur",
    clear: "Wis",
    link: "Koppeling",
    attach: "Bestand toevoegen",
    tex: "TeX toevoegen",
    code: "Code",
    image: "Afbeelding toevoegen",
    insertHorizontalRule: "Horizontale lijn toevoegen",
    superscript: "Superscript",
    subscript: "Subscript",
    insertTable: "Insert table",
    insertGroup: "Insert group",
    hiliteGroup: "Hilite group",
    removeGroup: "Remove group",
    insertAnchor: "Insert anchor",
    mergeCells: "Merge cells",
    splitCells: "Split cells",
    rowsColumnsManaging: "Managing rows and columns",
    cellColor: "Cell color",
    setDetails: "Details",
    removeDetails: "Remove details"
  },
  editorEditLink: {
    urlExample: "example.com",
    anchorExample: "anchor"
  },
  editorTableCommands: [
    ["Insert column before", "Insert column after"],
    ["Insert row before", "Insert row after"],
    ["Delete column", "Delete row"]
  ],
  editorCodeOptions: ["Code in the text", "Code in block"],
  editorFontOptions: {
    small: "Small",
    large: "Large",
    normal: "Normal",
    title: "Title",
    subtitle: "Subtitle"
  }
};
var TUI_DUTCH_LANGUAGE_ADDON_PREVIEW = {
  previewTexts: {
    rotate: "Rotate"
  },
  zoomTexts: {
    zoomOut: "Zoom out",
    zoomIn: "Zoom in",
    reset: "Reset"
  }
};
var TUI_DUTCH_LANGUAGE_ADDON_TABLE = {
  showHideText: "Toon/Verberg",
  paginationTexts: {
    pages: "Pagina's",
    linesPerPage: "Lijnen per pagina",
    of: "van"
  }
};
var TUI_DUTCH_LANGUAGE_COUNTRIES = {
  [TuiCountryIsoCode.AD]: "Andorra",
  [TuiCountryIsoCode.AE]: "Verenigde Arabische Emiraten",
  [TuiCountryIsoCode.AF]: "Afghanistan",
  [TuiCountryIsoCode.AG]: "Antigua en Barbuda",
  [TuiCountryIsoCode.AI]: "Anguilla",
  [TuiCountryIsoCode.AL]: "Albanië",
  [TuiCountryIsoCode.AM]: "Armenië",
  [TuiCountryIsoCode.AO]: "Angola",
  [TuiCountryIsoCode.AR]: "Argentinië",
  [TuiCountryIsoCode.AT]: "Oostenrijk",
  [TuiCountryIsoCode.AU]: "Australië",
  [TuiCountryIsoCode.AW]: "Aruba",
  [TuiCountryIsoCode.AZ]: "Azerbeidzjan",
  [TuiCountryIsoCode.BA]: "Bosnië en Herzegovina",
  [TuiCountryIsoCode.BB]: "Barbados",
  [TuiCountryIsoCode.BD]: "Bangladesh",
  [TuiCountryIsoCode.BE]: "België",
  [TuiCountryIsoCode.BF]: "Burkina Faso",
  [TuiCountryIsoCode.BG]: "Bulgarije",
  [TuiCountryIsoCode.BH]: "Bahrein",
  [TuiCountryIsoCode.BI]: "Burundi",
  [TuiCountryIsoCode.BJ]: "Benin",
  [TuiCountryIsoCode.BL]: "Sankt Barthélemy",
  [TuiCountryIsoCode.BM]: "Bermuda",
  [TuiCountryIsoCode.BN]: "Brunei",
  [TuiCountryIsoCode.BO]: "Bolivia",
  [TuiCountryIsoCode.BQ]: "Bonaire, Sint Eustatius en Saba",
  [TuiCountryIsoCode.BR]: "Brazilië",
  [TuiCountryIsoCode.BS]: "Bahamas",
  [TuiCountryIsoCode.BT]: "Bhutan",
  [TuiCountryIsoCode.BW]: "Botswana",
  [TuiCountryIsoCode.BY]: "Wit-Rusland",
  [TuiCountryIsoCode.BZ]: "Belize",
  [TuiCountryIsoCode.CA]: "Canada",
  [TuiCountryIsoCode.CD]: "Dem. Rep. Congo (Kinshasa)",
  [TuiCountryIsoCode.CF]: "Centraal-Afrikaanse Republiek",
  [TuiCountryIsoCode.CG]: "Congo-Brazzaville",
  [TuiCountryIsoCode.CH]: "Zwitserland",
  [TuiCountryIsoCode.CI]: "Ivoorkust",
  [TuiCountryIsoCode.CL]: "Chili",
  [TuiCountryIsoCode.CM]: "Kameroen",
  [TuiCountryIsoCode.CN]: "China",
  [TuiCountryIsoCode.CO]: "Colombia",
  [TuiCountryIsoCode.CR]: "Costa Rica",
  [TuiCountryIsoCode.CU]: "Cuba",
  [TuiCountryIsoCode.CV]: "Kaapverdië",
  [TuiCountryIsoCode.CW]: "Curaçao",
  [TuiCountryIsoCode.CY]: "Cyprus",
  [TuiCountryIsoCode.CZ]: "Tsjechië",
  [TuiCountryIsoCode.DE]: "Duitsland",
  [TuiCountryIsoCode.DJ]: "Djibouti",
  [TuiCountryIsoCode.DK]: "Denemarken",
  [TuiCountryIsoCode.DM]: "Dominica",
  [TuiCountryIsoCode.DO]: "Dominicaanse Republiek",
  [TuiCountryIsoCode.DZ]: "Algerije",
  [TuiCountryIsoCode.EC]: "Ecuador",
  [TuiCountryIsoCode.EE]: "Estland",
  [TuiCountryIsoCode.EG]: "Egypte",
  [TuiCountryIsoCode.ER]: "Eritrea",
  [TuiCountryIsoCode.ES]: "Spanje",
  [TuiCountryIsoCode.ET]: "Ethiopië",
  [TuiCountryIsoCode.FI]: "Finland",
  [TuiCountryIsoCode.FJ]: "Fiji",
  [TuiCountryIsoCode.FK]: "Falkland Eilanden",
  [TuiCountryIsoCode.FM]: "V.S. van Micronesië",
  [TuiCountryIsoCode.FR]: "Frankrijk",
  [TuiCountryIsoCode.GA]: "Gabon",
  [TuiCountryIsoCode.GB]: "Verenigd Koningkrijk",
  [TuiCountryIsoCode.GD]: "Grenada",
  [TuiCountryIsoCode.GE]: "Georgië",
  [TuiCountryIsoCode.GF]: "Guyana",
  [TuiCountryIsoCode.GH]: "Ghana",
  [TuiCountryIsoCode.GI]: "Gibraltar",
  [TuiCountryIsoCode.GL]: "Groenland",
  [TuiCountryIsoCode.GM]: "Gambia",
  [TuiCountryIsoCode.GN]: "Guinea",
  [TuiCountryIsoCode.GP]: "Guadeloupe",
  [TuiCountryIsoCode.GQ]: "Equatoriaal-Guinea",
  [TuiCountryIsoCode.GR]: "Griekenland",
  [TuiCountryIsoCode.GT]: "Guatemala",
  [TuiCountryIsoCode.GW]: "Guinee-Bissau",
  [TuiCountryIsoCode.GY]: "Guyana",
  [TuiCountryIsoCode.HK]: "Hongkong",
  [TuiCountryIsoCode.HN]: "Honduras",
  [TuiCountryIsoCode.HR]: "Kroatië",
  [TuiCountryIsoCode.HT]: "Haïti",
  [TuiCountryIsoCode.HU]: "Hongarije",
  [TuiCountryIsoCode.ID]: "Indonesië",
  [TuiCountryIsoCode.IE]: "Ierland",
  [TuiCountryIsoCode.IL]: "Israël",
  [TuiCountryIsoCode.IN]: "India",
  [TuiCountryIsoCode.IQ]: "Irak",
  [TuiCountryIsoCode.IR]: "Iran",
  [TuiCountryIsoCode.IS]: "IJsland",
  [TuiCountryIsoCode.IT]: "Italië",
  [TuiCountryIsoCode.JM]: "Jamaica",
  [TuiCountryIsoCode.JO]: "Jordanië",
  [TuiCountryIsoCode.JP]: "Japan",
  [TuiCountryIsoCode.KE]: "Kenia",
  [TuiCountryIsoCode.KG]: "Kirgizië",
  [TuiCountryIsoCode.KH]: "Cambodja",
  [TuiCountryIsoCode.KM]: "Comoren",
  [TuiCountryIsoCode.KN]: "Saint Kitts en Nevis",
  [TuiCountryIsoCode.KP]: "Democratische Volksrepubliek Korea",
  [TuiCountryIsoCode.KR]: "Republiek Korea",
  [TuiCountryIsoCode.KW]: "Koeweit",
  [TuiCountryIsoCode.KY]: "Kaaiman Eilanden",
  [TuiCountryIsoCode.KZ]: "Kazachstan",
  [TuiCountryIsoCode.LA]: "Laos",
  [TuiCountryIsoCode.LB]: "Libanon",
  [TuiCountryIsoCode.LC]: "Sint Lucia",
  [TuiCountryIsoCode.LI]: "Liechtenstein",
  [TuiCountryIsoCode.LK]: "Sri Lanka",
  [TuiCountryIsoCode.LR]: "Liberia",
  [TuiCountryIsoCode.LS]: "Lesotho",
  [TuiCountryIsoCode.LT]: "Litouwen",
  [TuiCountryIsoCode.LU]: "Luxemburg",
  [TuiCountryIsoCode.LV]: "Letland",
  [TuiCountryIsoCode.LY]: "Libië",
  [TuiCountryIsoCode.MA]: "Marokko",
  [TuiCountryIsoCode.MC]: "Monaco",
  [TuiCountryIsoCode.MD]: "Moldavië",
  [TuiCountryIsoCode.ME]: "Montenegro",
  [TuiCountryIsoCode.MF]: "Sankt Martin",
  [TuiCountryIsoCode.MG]: "Madagascar",
  [TuiCountryIsoCode.MK]: "Rep. van Noord-Macedonië",
  [TuiCountryIsoCode.ML]: "Mali",
  [TuiCountryIsoCode.MM]: "Birma (Myanmar)",
  [TuiCountryIsoCode.MN]: "Mongolië",
  [TuiCountryIsoCode.MO]: "Macau",
  [TuiCountryIsoCode.MQ]: "Martinique",
  [TuiCountryIsoCode.MR]: "Mauritanië",
  [TuiCountryIsoCode.MS]: "Montserrat",
  [TuiCountryIsoCode.MT]: "Malta",
  [TuiCountryIsoCode.MU]: "Mauritius",
  [TuiCountryIsoCode.MV]: "Maldives",
  [TuiCountryIsoCode.MW]: "Malawi",
  [TuiCountryIsoCode.MX]: "Mexico",
  [TuiCountryIsoCode.MY]: "Maleisië",
  [TuiCountryIsoCode.MZ]: "Mozambique",
  [TuiCountryIsoCode.NA]: "Namibië",
  [TuiCountryIsoCode.NC]: "Nieuw-Caledonië",
  [TuiCountryIsoCode.NE]: "Niger",
  [TuiCountryIsoCode.NG]: "Nigeria",
  [TuiCountryIsoCode.NI]: "Nicaragua",
  [TuiCountryIsoCode.NL]: "Nederland",
  [TuiCountryIsoCode.NO]: "Noorwegen",
  [TuiCountryIsoCode.NP]: "Nepal",
  [TuiCountryIsoCode.NZ]: "Nieuw-Zeeland",
  [TuiCountryIsoCode.OM]: "Oman",
  [TuiCountryIsoCode.PA]: "Panama",
  [TuiCountryIsoCode.PE]: "Peru",
  [TuiCountryIsoCode.PF]: "Frans Polynesië (Tahiti)",
  [TuiCountryIsoCode.PG]: "Papoea-Nieuw-Guinea",
  [TuiCountryIsoCode.PH]: "Filippijnen",
  [TuiCountryIsoCode.PK]: "Pakistan",
  [TuiCountryIsoCode.PL]: "Polen",
  [TuiCountryIsoCode.PT]: "Portugal",
  [TuiCountryIsoCode.PW]: "Palau",
  [TuiCountryIsoCode.PY]: "Paraguay",
  [TuiCountryIsoCode.QA]: "Qatar",
  [TuiCountryIsoCode.RE]: "Besprechung",
  [TuiCountryIsoCode.RO]: "Roemenië",
  [TuiCountryIsoCode.RS]: "Serbia",
  [TuiCountryIsoCode.RU]: "Servië",
  [TuiCountryIsoCode.RW]: "Rwanda",
  [TuiCountryIsoCode.SA]: "Saoedi-Arabië",
  [TuiCountryIsoCode.SB]: "Salomonseilanden",
  [TuiCountryIsoCode.SC]: "Seychellen",
  [TuiCountryIsoCode.SD]: "Soedan",
  [TuiCountryIsoCode.SE]: "Zweden",
  [TuiCountryIsoCode.SG]: "Singapore",
  [TuiCountryIsoCode.SH]: "Sint-Helena, Ascension en Tristan da Cunha",
  [TuiCountryIsoCode.SI]: "Slovenië",
  [TuiCountryIsoCode.SK]: "Slowakije",
  [TuiCountryIsoCode.SL]: "Sierra Leone",
  [TuiCountryIsoCode.SM]: "San Marino",
  [TuiCountryIsoCode.SN]: "Senegal",
  [TuiCountryIsoCode.SO]: "Somalië",
  [TuiCountryIsoCode.SR]: "Suriname",
  [TuiCountryIsoCode.ST]: "Sao Tomé en Principe",
  [TuiCountryIsoCode.SV]: "El Salvador",
  [TuiCountryIsoCode.SX]: "Sint Maarten",
  [TuiCountryIsoCode.SY]: "Arabische Rep. Syrië",
  [TuiCountryIsoCode.SZ]: "Swaziland",
  [TuiCountryIsoCode.TC]: "Turks- en Caicoseilanden",
  [TuiCountryIsoCode.TD]: "Tsjaad",
  [TuiCountryIsoCode.TG]: "Togo",
  [TuiCountryIsoCode.TH]: "Thailand",
  [TuiCountryIsoCode.TJ]: "Tadzjikistan",
  [TuiCountryIsoCode.TL]: "Oost Timor",
  [TuiCountryIsoCode.TM]: "Turkmenistan",
  [TuiCountryIsoCode.TN]: "Tunesië",
  [TuiCountryIsoCode.TO]: "Tonga",
  [TuiCountryIsoCode.TR]: "Turkije",
  [TuiCountryIsoCode.TT]: "Trinidad en Tobago",
  [TuiCountryIsoCode.TW]: "Taiwan",
  [TuiCountryIsoCode.TZ]: "Tanzania",
  [TuiCountryIsoCode.UA]: "Oekraïne",
  [TuiCountryIsoCode.UG]: "Oeganda",
  [TuiCountryIsoCode.US]: "Verenigde Staten",
  [TuiCountryIsoCode.UY]: "Uruguay",
  [TuiCountryIsoCode.UZ]: "Oezbekistan",
  [TuiCountryIsoCode.VC]: "Saint Vincent en de Grenadines",
  [TuiCountryIsoCode.VE]: "Venezuela",
  [TuiCountryIsoCode.VG]: "Britse Maagdeneilanden",
  [TuiCountryIsoCode.VN]: "Vietnam",
  [TuiCountryIsoCode.VU]: "Vanuatu",
  [TuiCountryIsoCode.WS]: "Samoa",
  [TuiCountryIsoCode.XK]: "Kosovo",
  [TuiCountryIsoCode.YE]: "Jemen",
  [TuiCountryIsoCode.YT]: "Mayotte",
  [TuiCountryIsoCode.ZA]: "Zuid-Afrika",
  [TuiCountryIsoCode.ZM]: "Zambia",
  [TuiCountryIsoCode.ZW]: "Zimbabwe"
};
var TUI_DUTCH_LANGUAGE_CORE = {
  months: [
    "Januari",
    "Februari",
    "Maart",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Augustus",
    "September",
    "Oktober",
    "November",
    "December"
  ],
  close: "Sluiten",
  nothingFoundMessage: "Niets gevonden",
  defaultErrorMessage: "Ongeldige waarde",
  spinTexts: ["Vorige", "Volgende"],
  shortWeekDays: ["Maa", "Din", "Woe", "Don", "Vri", "Zat", "Zon"],
  countries: TUI_DUTCH_LANGUAGE_COUNTRIES
};
var TUI_DUTCH_LANGUAGE_KIT = {
  cancel: "Annuleren",
  done: "Klaar",
  more: "Meer",
  otherDate: "Andere datum ...",
  showAll: "Show all",
  hide: "Hide",
  mobileCalendarTexts: ["Kies een dag", "Kies bereik", "Kies dagen"],
  range: ["van", "tot"],
  countTexts: ["Plus", "Min"],
  time: {
    "HH:MM": "HH:MM",
    "HH:MM:SS": "HH:MM:SS",
    "HH:MM:SS.MSS": "HH:MM:SS.MSS"
  },
  dateTexts: {
    DMY: "dd.mm.yyyy",
    MDY: "mm.dd.yyyy",
    YMD: "yyyy.mm.dd"
  },
  digitalInformationUnits: ["B", "KiB", "MiB"],
  passwordTexts: ["Toon wachtwoord", "Wachtwoord verbergen"],
  copyTexts: ["Kopieer", "Gekopieerd"],
  shortCalendarMonths: [
    "Jan",
    "Feb",
    "Maa",
    "Apr",
    "Mei",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Okt",
    "Nov",
    "Dec"
  ],
  pagination: ["Vorige pagina", "Volgende pagina"],
  fileTexts: {
    loadingError: "Error bij het laden",
    preview: "Voorbeeld",
    remove: "Verwijder"
  },
  inputFileTexts: {
    defaultLabelSingle: "of zet het hier",
    defaultLabelMultiple: "of zet ze hier",
    defaultLinkSingle: "Kies een bestand",
    defaultLinkMultiple: "Kies bestanden",
    maxSizeRejectionReason: "Bestandsgrootte overschreden ",
    formatRejectionReason: "Verkeerd bestandsformaat",
    drop: "Zet hier bestand neer",
    dropMultiple: "Zet hier bestanden neer"
  },
  multiSelectTexts: {
    all: "Selecteer alles",
    none: "Selecteer geen"
  },
  prompt: {
    yes: "Ja",
    no: "Ingen"
  }
};
var TUI_DUTCH_LANGUAGE = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({ name: "dutch" }, TUI_DUTCH_LANGUAGE_CORE), TUI_DUTCH_LANGUAGE_KIT), TUI_DUTCH_LANGUAGE_ADDON_TABLE), TUI_DUTCH_LANGUAGE_ADDON_COMMERCE), TUI_DUTCH_LANGUAGE_ADDON_EDITOR), TUI_DUTCH_LANGUAGE_ADDON_PREVIEW);

// node_modules/@taiga-ui/i18n/fesm2015/taiga-ui-i18n-languages-english.js
var TUI_ENGLISH_LANGUAGE_ADDON_COMMERCE = {
  cardNumber: ["Number", "Card number"],
  cardExpiry: ["Expires", "Valid through"]
};
var TUI_ENGLISH_LANGUAGE_ADDON_EDITOR = {
  colorSelectorModeNames: ["Solid color", "Gradient"],
  toolbarTools: {
    undo: "Undo",
    redo: "Redo",
    font: "Font",
    fontStyle: "Font style",
    fontSize: "Font size",
    bold: "Bold",
    italic: "Italic",
    underline: "Underline",
    strikeThrough: "Strike through",
    justify: "Justify",
    justifyLeft: "Justify left",
    justifyCenter: "Justify center",
    justifyRight: "Justify right",
    justifyFull: "Justify full",
    list: "List",
    indent: "Indent",
    outdent: "Outdent",
    unorderedList: "Unordered list",
    orderedList: "Ordered list",
    quote: "Quote",
    foreColor: "Color",
    backColor: "Background color",
    hiliteColor: "Highlight color",
    clear: "Clear",
    link: "Link",
    attach: "Attach file",
    tex: "Insert TeX",
    code: "Code",
    image: "Insert image",
    insertHorizontalRule: "Insert horizontal rule",
    superscript: "Superscript",
    subscript: "Subscript",
    insertTable: "Insert table",
    insertGroup: "Insert group",
    hiliteGroup: "Hilite group",
    removeGroup: "Remove group",
    insertAnchor: "Insert anchor",
    mergeCells: "Merge cells",
    splitCells: "Split cells",
    rowsColumnsManaging: "Managing rows and columns",
    cellColor: "Cell color",
    setDetails: "Details",
    removeDetails: "Remove details"
  },
  editorEditLink: {
    urlExample: "example.com",
    anchorExample: "anchor"
  },
  editorTableCommands: [
    ["Insert column before", "Insert column after"],
    ["Insert row before", "Insert row after"],
    ["Delete column", "Delete row"]
  ],
  editorCodeOptions: ["Code in the text", "Code in block"],
  editorFontOptions: {
    small: "Small",
    large: "Large",
    normal: "Normal",
    title: "Title",
    subtitle: "Subtitle"
  }
};
var TUI_ENGLISH_LANGUAGE_ADDON_PREVIEW = {
  previewTexts: {
    rotate: "Rotate"
  },
  zoomTexts: {
    zoomOut: "Zoom out",
    zoomIn: "Zoom in",
    reset: "Reset"
  }
};
var TUI_ENGLISH_LANGUAGE_ADDON_TABLE = {
  showHideText: "Show/Hide",
  paginationTexts: {
    pages: "Pages",
    linesPerPage: "Lines per page",
    of: "of"
  }
};
var TUI_ENGLISH_LANGUAGE_COUNTRIES = {
  [TuiCountryIsoCode.AD]: "Andorra",
  [TuiCountryIsoCode.AE]: "United Arab Emirates",
  [TuiCountryIsoCode.AF]: "Afghanistan",
  [TuiCountryIsoCode.AG]: "Antigua and Barbuda",
  [TuiCountryIsoCode.BL]: "Saint Barthélemy",
  [TuiCountryIsoCode.AI]: "Anguilla",
  [TuiCountryIsoCode.AL]: "Albania",
  [TuiCountryIsoCode.AM]: "Armenia",
  [TuiCountryIsoCode.AO]: "Angola",
  [TuiCountryIsoCode.AR]: "Argentina",
  [TuiCountryIsoCode.AT]: "Austria",
  [TuiCountryIsoCode.AU]: "Australia",
  [TuiCountryIsoCode.AW]: "Aruba",
  [TuiCountryIsoCode.AZ]: "Azerbaijan",
  [TuiCountryIsoCode.BA]: "Bosnia and Herzegovina",
  [TuiCountryIsoCode.BB]: "Barbados",
  [TuiCountryIsoCode.BD]: "Bangladesh",
  [TuiCountryIsoCode.BE]: "Belgium",
  [TuiCountryIsoCode.BF]: "Burkina Faso",
  [TuiCountryIsoCode.BG]: "Bulgaria",
  [TuiCountryIsoCode.BH]: "Bahrain",
  [TuiCountryIsoCode.BI]: "Burundi",
  [TuiCountryIsoCode.BJ]: "Benin",
  [TuiCountryIsoCode.GF]: "Guyana",
  [TuiCountryIsoCode.BM]: "Bermuda",
  [TuiCountryIsoCode.BN]: "Brunei Darussalam",
  [TuiCountryIsoCode.BO]: "Bolivia",
  [TuiCountryIsoCode.BQ]: "Bonaire, Sint Eustatius and Saba",
  [TuiCountryIsoCode.BR]: "Brazil",
  [TuiCountryIsoCode.BS]: "Bahamas",
  [TuiCountryIsoCode.BT]: "Bhutan",
  [TuiCountryIsoCode.BW]: "Botswana",
  [TuiCountryIsoCode.BY]: "Belarus",
  [TuiCountryIsoCode.BZ]: "Belize",
  [TuiCountryIsoCode.CA]: "Canada",
  [TuiCountryIsoCode.CD]: "Dem. Rep. Congo (Kinshasa)",
  [TuiCountryIsoCode.CF]: "Central African Republic",
  [TuiCountryIsoCode.CG]: "Congo (Brazzaville)",
  [TuiCountryIsoCode.CH]: "Switzerland",
  [TuiCountryIsoCode.CI]: "Ivory Coast",
  [TuiCountryIsoCode.CL]: "Chile",
  [TuiCountryIsoCode.CM]: "Cameroon",
  [TuiCountryIsoCode.CN]: "China",
  [TuiCountryIsoCode.CO]: "Colombia",
  [TuiCountryIsoCode.CR]: "Costa Rica",
  [TuiCountryIsoCode.CU]: "Cuba",
  [TuiCountryIsoCode.CV]: "Cape Verde",
  [TuiCountryIsoCode.CW]: "Curaçao",
  [TuiCountryIsoCode.CY]: "Cyprus",
  [TuiCountryIsoCode.CZ]: "Czech Republic",
  [TuiCountryIsoCode.DE]: "Germany",
  [TuiCountryIsoCode.DJ]: "Djibouti",
  [TuiCountryIsoCode.DK]: "Denmark",
  [TuiCountryIsoCode.DM]: "Dominica",
  [TuiCountryIsoCode.DO]: "Dominican Republic",
  [TuiCountryIsoCode.DZ]: "Algeria",
  [TuiCountryIsoCode.EC]: "Ecuador",
  [TuiCountryIsoCode.EE]: "Estonia",
  [TuiCountryIsoCode.EG]: "Egypt",
  [TuiCountryIsoCode.ER]: "Eritrea",
  [TuiCountryIsoCode.ES]: "Spain",
  [TuiCountryIsoCode.ET]: "Ethiopia",
  [TuiCountryIsoCode.FI]: "Finland",
  [TuiCountryIsoCode.FJ]: "Fiji",
  [TuiCountryIsoCode.FK]: "Falkland Islands",
  [TuiCountryIsoCode.FM]: "F.S. of Micronesia",
  [TuiCountryIsoCode.FR]: "France",
  [TuiCountryIsoCode.GA]: "Gabon",
  [TuiCountryIsoCode.GB]: "United Kingdom",
  [TuiCountryIsoCode.GD]: "Grenada",
  [TuiCountryIsoCode.GE]: "Georgia",
  [TuiCountryIsoCode.GP]: "Guadeloupe",
  [TuiCountryIsoCode.GH]: "Ghana",
  [TuiCountryIsoCode.GI]: "Gibraltar",
  [TuiCountryIsoCode.GL]: "Greenland",
  [TuiCountryIsoCode.GM]: "Gambia",
  [TuiCountryIsoCode.GN]: "Guinea",
  [TuiCountryIsoCode.MF]: "Saint-Martin",
  [TuiCountryIsoCode.GQ]: "Equatorial Guinea",
  [TuiCountryIsoCode.GR]: "Greece",
  [TuiCountryIsoCode.GT]: "Guatemala",
  [TuiCountryIsoCode.GW]: "Guinea-Bissau",
  [TuiCountryIsoCode.GY]: "Guyana",
  [TuiCountryIsoCode.HK]: "Hong Kong",
  [TuiCountryIsoCode.HN]: "Honduras",
  [TuiCountryIsoCode.HR]: "Croatia",
  [TuiCountryIsoCode.HT]: "Haiti",
  [TuiCountryIsoCode.HU]: "Hungary",
  [TuiCountryIsoCode.ID]: "Indonesia",
  [TuiCountryIsoCode.IE]: "Ireland",
  [TuiCountryIsoCode.IL]: "Israel",
  [TuiCountryIsoCode.IN]: "India",
  [TuiCountryIsoCode.IQ]: "Iraq",
  [TuiCountryIsoCode.IR]: "Iran",
  [TuiCountryIsoCode.IS]: "Iceland",
  [TuiCountryIsoCode.IT]: "Italy",
  [TuiCountryIsoCode.JM]: "Jamaica",
  [TuiCountryIsoCode.JO]: "Jordan",
  [TuiCountryIsoCode.JP]: "Japan",
  [TuiCountryIsoCode.KE]: "Kenya",
  [TuiCountryIsoCode.KG]: "Kyrgyzstan",
  [TuiCountryIsoCode.KH]: "Cambodia",
  [TuiCountryIsoCode.KM]: "Comoros",
  [TuiCountryIsoCode.KN]: "Saint Kitts and Nevis",
  [TuiCountryIsoCode.KP]: "Korean PDR",
  [TuiCountryIsoCode.KR]: "Rep. Korea",
  [TuiCountryIsoCode.KW]: "Kuwait",
  [TuiCountryIsoCode.KY]: "Cayman Islands",
  [TuiCountryIsoCode.KZ]: "Kazakhstan",
  [TuiCountryIsoCode.LA]: "Laos",
  [TuiCountryIsoCode.LB]: "Lebanon",
  [TuiCountryIsoCode.LC]: "Saint Lucia",
  [TuiCountryIsoCode.LI]: "Liechtenstein",
  [TuiCountryIsoCode.LK]: "Sri Lanka",
  [TuiCountryIsoCode.LR]: "Liberia",
  [TuiCountryIsoCode.LS]: "Lesotho",
  [TuiCountryIsoCode.LT]: "Lithuania",
  [TuiCountryIsoCode.LU]: "Luxembourg",
  [TuiCountryIsoCode.LV]: "Latvia",
  [TuiCountryIsoCode.LY]: "Libya",
  [TuiCountryIsoCode.MA]: "Morocco",
  [TuiCountryIsoCode.MC]: "Monaco",
  [TuiCountryIsoCode.MD]: "Moldova",
  [TuiCountryIsoCode.ME]: "Montenegro",
  [TuiCountryIsoCode.MQ]: "Martinique",
  [TuiCountryIsoCode.MG]: "Madagascar",
  [TuiCountryIsoCode.MK]: "Rep. of North Macedonia",
  [TuiCountryIsoCode.ML]: "Mali",
  [TuiCountryIsoCode.MM]: "Burma (Myanmar)",
  [TuiCountryIsoCode.MN]: "Mongolia",
  [TuiCountryIsoCode.MO]: "Macau",
  [TuiCountryIsoCode.RE]: "Réunion",
  [TuiCountryIsoCode.MR]: "Mauritania",
  [TuiCountryIsoCode.MS]: "Montserrat",
  [TuiCountryIsoCode.MT]: "Malta",
  [TuiCountryIsoCode.MU]: "Mauritius",
  [TuiCountryIsoCode.MV]: "Maldives",
  [TuiCountryIsoCode.MW]: "Malawi",
  [TuiCountryIsoCode.MX]: "Mexico",
  [TuiCountryIsoCode.MY]: "Malaysia",
  [TuiCountryIsoCode.MZ]: "Mozambique",
  [TuiCountryIsoCode.NA]: "Namibia",
  [TuiCountryIsoCode.NC]: "New Caledonia",
  [TuiCountryIsoCode.NE]: "Niger",
  [TuiCountryIsoCode.NG]: "Nigeria",
  [TuiCountryIsoCode.NI]: "Nicaragua",
  [TuiCountryIsoCode.NL]: "Netherlands",
  [TuiCountryIsoCode.NO]: "Norway",
  [TuiCountryIsoCode.NP]: "Nepal",
  [TuiCountryIsoCode.NZ]: "New Zealand",
  [TuiCountryIsoCode.OM]: "Oman",
  [TuiCountryIsoCode.PA]: "Panama",
  [TuiCountryIsoCode.PE]: "Peru",
  [TuiCountryIsoCode.PF]: "French Polynesia (Tahiti)",
  [TuiCountryIsoCode.PG]: "Papua New Guinea",
  [TuiCountryIsoCode.PH]: "Philippines",
  [TuiCountryIsoCode.PK]: "Pakistan",
  [TuiCountryIsoCode.PL]: "Poland",
  [TuiCountryIsoCode.PT]: "Portugal",
  [TuiCountryIsoCode.PW]: "Palau",
  [TuiCountryIsoCode.PY]: "Paraguay",
  [TuiCountryIsoCode.QA]: "Qatar",
  [TuiCountryIsoCode.YT]: "Mayotte",
  [TuiCountryIsoCode.RO]: "Romania",
  [TuiCountryIsoCode.RS]: "Serbia",
  [TuiCountryIsoCode.RU]: "Russia",
  [TuiCountryIsoCode.RW]: "Rwanda",
  [TuiCountryIsoCode.SA]: "Saudi Arabia",
  [TuiCountryIsoCode.SB]: "Solomon Islands",
  [TuiCountryIsoCode.SC]: "Seychelles",
  [TuiCountryIsoCode.SD]: "Sudan",
  [TuiCountryIsoCode.SE]: "Sweden",
  [TuiCountryIsoCode.SG]: "Singapore",
  [TuiCountryIsoCode.SH]: "Saint Helena",
  [TuiCountryIsoCode.SI]: "Slovenia",
  [TuiCountryIsoCode.SK]: "Slovakia",
  [TuiCountryIsoCode.SL]: "Sierra Leone",
  [TuiCountryIsoCode.SM]: "San Marino",
  [TuiCountryIsoCode.SN]: "Senegal",
  [TuiCountryIsoCode.SO]: "Somalia",
  [TuiCountryIsoCode.SR]: "Suriname",
  [TuiCountryIsoCode.ST]: "Sao Tome and Principe",
  [TuiCountryIsoCode.SV]: "El Salvador",
  [TuiCountryIsoCode.SX]: "Sint Maarten",
  [TuiCountryIsoCode.SY]: "Syrian Arab Republic",
  [TuiCountryIsoCode.SZ]: "Swaziland",
  [TuiCountryIsoCode.TC]: "Turks and Caicos",
  [TuiCountryIsoCode.TD]: "Chad",
  [TuiCountryIsoCode.TG]: "Togo",
  [TuiCountryIsoCode.TH]: "Thailand",
  [TuiCountryIsoCode.TJ]: "Tajikistan",
  [TuiCountryIsoCode.TL]: "East Timor",
  [TuiCountryIsoCode.TM]: "Turkmenistan",
  [TuiCountryIsoCode.TN]: "Tunisia",
  [TuiCountryIsoCode.TO]: "Tonga",
  [TuiCountryIsoCode.TR]: "Turkey",
  [TuiCountryIsoCode.TT]: "Trinidad and Tobago",
  [TuiCountryIsoCode.TW]: "Taiwan",
  [TuiCountryIsoCode.TZ]: "Tanzania",
  [TuiCountryIsoCode.UA]: "Ukraine",
  [TuiCountryIsoCode.UG]: "Uganda",
  [TuiCountryIsoCode.US]: "USA",
  [TuiCountryIsoCode.UY]: "Uruguay",
  [TuiCountryIsoCode.UZ]: "Uzbekistan",
  [TuiCountryIsoCode.VC]: "Saint Vincent and the Grenadines",
  [TuiCountryIsoCode.VE]: "Venezuela",
  [TuiCountryIsoCode.VG]: "British Virgin Islands",
  [TuiCountryIsoCode.VN]: "Vietnam",
  [TuiCountryIsoCode.VU]: "Vanuatu",
  [TuiCountryIsoCode.WS]: "Samoa",
  [TuiCountryIsoCode.XK]: "Kosovo",
  [TuiCountryIsoCode.YE]: "Yemen",
  [TuiCountryIsoCode.ZA]: "South Africa",
  [TuiCountryIsoCode.ZM]: "Zambia",
  [TuiCountryIsoCode.ZW]: "Zimbabwe"
};
var TUI_ENGLISH_LANGUAGE_CORE = {
  months: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ],
  close: "Close",
  nothingFoundMessage: "Nothing found",
  defaultErrorMessage: "Value is invalid",
  spinTexts: ["Previous", "Next"],
  shortWeekDays: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  countries: TUI_ENGLISH_LANGUAGE_COUNTRIES
};
var TUI_ENGLISH_LANGUAGE_KIT = {
  cancel: "Cancel",
  done: "Done",
  more: "More",
  otherDate: "Other date...",
  showAll: "Show all",
  hide: "Hide",
  mobileCalendarTexts: ["Choose day", "Choose range", "Choose days"],
  range: ["from", "to"],
  countTexts: ["Plus", "Minus"],
  time: {
    "HH:MM": "HH:MM",
    "HH:MM:SS": "HH:MM:SS",
    "HH:MM:SS.MSS": "HH:MM:SS.MSS"
  },
  dateTexts: {
    DMY: "dd.mm.yyyy",
    MDY: "mm.dd.yyyy",
    YMD: "yyyy.mm.dd"
  },
  digitalInformationUnits: ["B", "KiB", "MiB"],
  passwordTexts: ["Show password", "Hide password"],
  copyTexts: ["Copy", "Copied"],
  shortCalendarMonths: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ],
  pagination: ["Previous page", "Next page"],
  fileTexts: {
    loadingError: "Upload failed",
    preview: "Preview",
    remove: "Remove"
  },
  inputFileTexts: {
    defaultLabelSingle: "or drop it here",
    defaultLabelMultiple: "or drop them here",
    defaultLinkSingle: "Choose a file",
    defaultLinkMultiple: "Choose files",
    maxSizeRejectionReason: "File is too large ",
    formatRejectionReason: "Wrong file type",
    drop: "Drop file here",
    dropMultiple: "Drop files here"
  },
  multiSelectTexts: {
    all: "Select all",
    none: "Select none"
  },
  prompt: {
    yes: "Yes",
    no: "No"
  }
};
var TUI_ENGLISH_LANGUAGE = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({ name: "english" }, TUI_ENGLISH_LANGUAGE_CORE), TUI_ENGLISH_LANGUAGE_KIT), TUI_ENGLISH_LANGUAGE_ADDON_TABLE), TUI_ENGLISH_LANGUAGE_ADDON_COMMERCE), TUI_ENGLISH_LANGUAGE_ADDON_EDITOR), TUI_ENGLISH_LANGUAGE_ADDON_PREVIEW);

// node_modules/@taiga-ui/i18n/fesm2015/taiga-ui-i18n-languages-french.js
var TUI_FRENCH_LANGUAGE_ADDON_COMMERCE = {
  cardNumber: ["Number", "Numéro de carte"],
  cardExpiry: ["Expiry", 'Date d"Expiration de la carte']
};
var TUI_FRENCH_LANGUAGE_ADDON_EDITOR = {
  colorSelectorModeNames: ["Couleur unie", "Dégradé de couleur"],
  toolbarTools: {
    undo: "Annuler",
    redo: "Rétablir",
    font: "Police",
    fontStyle: "Style de police",
    fontSize: "Taille de police",
    bold: "Gras",
    italic: "Italique",
    underline: "Souligner",
    strikeThrough: "Barrer",
    justify: "Justifier",
    justifyLeft: "Aligner à gauche",
    justifyCenter: "Centrer",
    justifyRight: "Justifier à droite",
    justifyFull: "Justifier",
    list: "Liste",
    indent: "Indenter",
    outdent: "Réduire le retrait",
    unorderedList: "Liste à puces",
    orderedList: "Liste numérotée",
    quote: "Citation",
    foreColor: "Couleur de texte",
    backColor: "Couleur de fond",
    hiliteColor: "Couleur de mise en évidence",
    clear: "Effacer",
    link: "Lien",
    attach: "Joindre un fichier",
    tex: "Insérer TeX",
    code: "Code",
    image: "Insérer une image",
    insertHorizontalRule: "Insérer une règle horizontale",
    superscript: "Exposant",
    subscript: "Indice",
    insertTable: "Insérer une table",
    insertGroup: "Insérer un groupe",
    hiliteGroup: "Hilite group",
    removeGroup: "Supprimer le groupe",
    insertAnchor: "Insérer une ancre",
    mergeCells: "Fusionner les cellules",
    splitCells: "Diviser les cellules",
    rowsColumnsManaging: "Gestion des lignes et des colonnes",
    cellColor: "Couleur de la cellule",
    setDetails: "Accordéon",
    removeDetails: "Supprimer l'accordéon"
  },
  editorEditLink: {
    urlExample: "exemple.com",
    anchorExample: "ancre"
  },
  editorTableCommands: [
    ["Insérer une colonne avant", "Insérer une colonne après"],
    ["Insérer une ligne avant", "Insérer une ligne après"],
    ["Supprimer la colonne", "Supprimer la ligne"]
  ],
  editorCodeOptions: ["Code dans le texte", "Bloc de code"],
  editorFontOptions: {
    small: "Petite",
    large: "Grande",
    normal: "Normale",
    title: "Titre",
    subtitle: "Sous-titre"
  }
};
var TUI_FRENCH_LANGUAGE_ADDON_PREVIEW = {
  previewTexts: {
    rotate: "Faire pivoter"
  },
  zoomTexts: {
    zoomOut: "Zoomer",
    zoomIn: "Dézoomer",
    reset: "Réinitialiser"
  }
};
var TUI_FRENCH_LANGUAGE_ADDON_TABLE = {
  showHideText: "Afficher/Cacher",
  paginationTexts: {
    pages: "Pages",
    linesPerPage: "Lignes par page",
    of: "de"
  }
};
var TUI_FRENCH_LANGUAGE_COUNTRIES = {
  [TuiCountryIsoCode.AD]: "Andorre",
  [TuiCountryIsoCode.AE]: "Émirats arabes unis",
  [TuiCountryIsoCode.AF]: "Afghanistan",
  [TuiCountryIsoCode.AG]: "Antigua et Barbuda",
  [TuiCountryIsoCode.AI]: "Anguilla",
  [TuiCountryIsoCode.AL]: "Albanie",
  [TuiCountryIsoCode.AM]: "Arménie",
  [TuiCountryIsoCode.AO]: "Angola",
  [TuiCountryIsoCode.AR]: "Argentine",
  [TuiCountryIsoCode.AT]: "Autriche",
  [TuiCountryIsoCode.AU]: "Australie",
  [TuiCountryIsoCode.AW]: "Aruba",
  [TuiCountryIsoCode.AZ]: "Azerbaïdjan",
  [TuiCountryIsoCode.BA]: "Bosnie-Herzégovine",
  [TuiCountryIsoCode.BB]: "Barbade",
  [TuiCountryIsoCode.BD]: "Bangladesh",
  [TuiCountryIsoCode.BE]: "Belgique",
  [TuiCountryIsoCode.BF]: "Burkina Faso",
  [TuiCountryIsoCode.BG]: "Bulgarie",
  [TuiCountryIsoCode.BH]: "Bahrein",
  [TuiCountryIsoCode.BI]: "Burundi",
  [TuiCountryIsoCode.BJ]: "Bénin",
  [TuiCountryIsoCode.BL]: "Saint-Barthélemy",
  [TuiCountryIsoCode.BM]: "Bermudes",
  [TuiCountryIsoCode.BN]: "Brunéi Darussalam",
  [TuiCountryIsoCode.BO]: "Bolivie",
  [TuiCountryIsoCode.BQ]: "Bonaire, Saint-Eustache et Saba",
  [TuiCountryIsoCode.BR]: "Brésil",
  [TuiCountryIsoCode.BS]: "Bahamas",
  [TuiCountryIsoCode.BT]: "Bhoutan",
  [TuiCountryIsoCode.BW]: "Botswana",
  [TuiCountryIsoCode.BY]: "Bélarus",
  [TuiCountryIsoCode.BZ]: "Bélize",
  [TuiCountryIsoCode.CA]: "Canada",
  [TuiCountryIsoCode.CD]: "République Démocratique du Congo (RDC)",
  [TuiCountryIsoCode.CF]: "République centrafricaine",
  [TuiCountryIsoCode.CG]: "Congo Brazzaville",
  [TuiCountryIsoCode.CH]: "Suisse",
  [TuiCountryIsoCode.CI]: "Côte d'Ivoire",
  [TuiCountryIsoCode.CL]: "Chili",
  [TuiCountryIsoCode.CM]: "Cameroun",
  [TuiCountryIsoCode.CN]: "Chine",
  [TuiCountryIsoCode.CO]: "Colombie",
  [TuiCountryIsoCode.CR]: "Costa Rica",
  [TuiCountryIsoCode.CU]: "Cuba",
  [TuiCountryIsoCode.CV]: "Cap-Vert",
  [TuiCountryIsoCode.CW]: "Curaçao",
  [TuiCountryIsoCode.CY]: "Chypre",
  [TuiCountryIsoCode.CZ]: "République Tchèque",
  [TuiCountryIsoCode.DE]: "Allemagne",
  [TuiCountryIsoCode.DJ]: "Djibouti",
  [TuiCountryIsoCode.DK]: "Danemark",
  [TuiCountryIsoCode.DM]: "Dominique",
  [TuiCountryIsoCode.DO]: "République Dominicaine",
  [TuiCountryIsoCode.DZ]: "Algérie",
  [TuiCountryIsoCode.EC]: "Équateur",
  [TuiCountryIsoCode.EE]: "Estonie",
  [TuiCountryIsoCode.EG]: "Égypte",
  [TuiCountryIsoCode.ER]: "Érythrée",
  [TuiCountryIsoCode.ES]: "Espagne",
  [TuiCountryIsoCode.ET]: "Éthiopie",
  [TuiCountryIsoCode.FI]: "Finlande",
  [TuiCountryIsoCode.FJ]: "Fidji",
  [TuiCountryIsoCode.FK]: "Iles Malouines/Falkland",
  [TuiCountryIsoCode.FM]: "États fédérés de Micronésie",
  [TuiCountryIsoCode.FR]: "France",
  [TuiCountryIsoCode.GA]: "Gabon",
  [TuiCountryIsoCode.GB]: "Royaume-Uni",
  [TuiCountryIsoCode.GD]: "Grenade",
  [TuiCountryIsoCode.GE]: "Géorgie",
  [TuiCountryIsoCode.GF]: "Guyane",
  [TuiCountryIsoCode.GH]: "Ghana",
  [TuiCountryIsoCode.GI]: "Gibraltar",
  [TuiCountryIsoCode.GL]: "Groenland",
  [TuiCountryIsoCode.GM]: "Gambie",
  [TuiCountryIsoCode.GN]: "Guinée",
  [TuiCountryIsoCode.GP]: "Guadeloupe",
  [TuiCountryIsoCode.GQ]: "Guinée équatoriale",
  [TuiCountryIsoCode.GR]: "Grèce",
  [TuiCountryIsoCode.GT]: "Guatemala",
  [TuiCountryIsoCode.GW]: "Guinée-Bissau",
  [TuiCountryIsoCode.GY]: "Guyana",
  [TuiCountryIsoCode.HK]: "Hong Kong",
  [TuiCountryIsoCode.HN]: "Honduras",
  [TuiCountryIsoCode.HR]: "Croatie",
  [TuiCountryIsoCode.HT]: "Haïti",
  [TuiCountryIsoCode.HU]: "Hongrie",
  [TuiCountryIsoCode.ID]: "Indonesia",
  [TuiCountryIsoCode.IE]: "Irlande",
  [TuiCountryIsoCode.IL]: "Israël",
  [TuiCountryIsoCode.IN]: "Inde",
  [TuiCountryIsoCode.IQ]: "Iraq",
  [TuiCountryIsoCode.IR]: "Iran",
  [TuiCountryIsoCode.IS]: "Islande",
  [TuiCountryIsoCode.IT]: "Italie",
  [TuiCountryIsoCode.JM]: "Jamaïque",
  [TuiCountryIsoCode.JO]: "Jordanie",
  [TuiCountryIsoCode.JP]: "Japon",
  [TuiCountryIsoCode.KE]: "Kenya",
  [TuiCountryIsoCode.KG]: "Kirghizistan",
  [TuiCountryIsoCode.KH]: "Cambodge",
  [TuiCountryIsoCode.KM]: "Comores",
  [TuiCountryIsoCode.KN]: "Saint-Kitts-et-Nevis",
  [TuiCountryIsoCode.KP]: "Corée du Nord",
  [TuiCountryIsoCode.KR]: "Corée du Sud",
  [TuiCountryIsoCode.KW]: "Koweït",
  [TuiCountryIsoCode.KY]: "Iles Caïmans",
  [TuiCountryIsoCode.KZ]: "Kazakhstan",
  [TuiCountryIsoCode.LA]: "Lao",
  [TuiCountryIsoCode.LB]: "Liban",
  [TuiCountryIsoCode.LC]: "Sainte-Lucie",
  [TuiCountryIsoCode.LI]: "Liechtenstein",
  [TuiCountryIsoCode.LK]: "Sri Lanka",
  [TuiCountryIsoCode.LR]: "Libéria",
  [TuiCountryIsoCode.LS]: "Lesotho",
  [TuiCountryIsoCode.LT]: "Lituanie",
  [TuiCountryIsoCode.LU]: "Luxembourg",
  [TuiCountryIsoCode.LV]: "Lettonie",
  [TuiCountryIsoCode.LY]: "Libye",
  [TuiCountryIsoCode.MA]: "Maroc",
  [TuiCountryIsoCode.MC]: "Monaco",
  [TuiCountryIsoCode.MD]: "Moldavie",
  [TuiCountryIsoCode.ME]: "Monténégro",
  [TuiCountryIsoCode.MF]: "Saint-Martin",
  [TuiCountryIsoCode.MG]: "Madagascar",
  [TuiCountryIsoCode.MK]: "Macédoine",
  [TuiCountryIsoCode.ML]: "Mali",
  [TuiCountryIsoCode.MM]: "Myanmar",
  [TuiCountryIsoCode.MN]: "Mongolie",
  [TuiCountryIsoCode.MO]: "Macao",
  [TuiCountryIsoCode.MQ]: "Martinique",
  [TuiCountryIsoCode.MR]: "Mauritanie",
  [TuiCountryIsoCode.MS]: "Montserrat",
  [TuiCountryIsoCode.MT]: "Malte",
  [TuiCountryIsoCode.MU]: "Maurice",
  [TuiCountryIsoCode.MV]: "Maldives",
  [TuiCountryIsoCode.MW]: "Malawi",
  [TuiCountryIsoCode.MX]: "Mexique",
  [TuiCountryIsoCode.MY]: "Malaisie",
  [TuiCountryIsoCode.MZ]: "Mozambique",
  [TuiCountryIsoCode.NA]: "Namibie",
  [TuiCountryIsoCode.NC]: "Nouvelle-Calédonie",
  [TuiCountryIsoCode.NE]: "Niger",
  [TuiCountryIsoCode.NG]: "Nigéria",
  [TuiCountryIsoCode.NI]: "Nicaragua",
  [TuiCountryIsoCode.NL]: "Pays-Bas",
  [TuiCountryIsoCode.NO]: "Norvège",
  [TuiCountryIsoCode.NP]: "Népal",
  [TuiCountryIsoCode.NZ]: "Nouvelle-Zélande",
  [TuiCountryIsoCode.OM]: "Oman",
  [TuiCountryIsoCode.PA]: "Panama",
  [TuiCountryIsoCode.PE]: "Pérou",
  [TuiCountryIsoCode.PF]: "Polynésie française",
  [TuiCountryIsoCode.PG]: "Papouasie-Nouvelle-Guinée",
  [TuiCountryIsoCode.PH]: "Philippines",
  [TuiCountryIsoCode.PK]: "Pakistan",
  [TuiCountryIsoCode.PL]: "Pologne",
  [TuiCountryIsoCode.PT]: "Portugal",
  [TuiCountryIsoCode.PW]: "Palaos",
  [TuiCountryIsoCode.PY]: "Paraguay",
  [TuiCountryIsoCode.QA]: "Qatar",
  [TuiCountryIsoCode.RE]: "La Réunion",
  [TuiCountryIsoCode.RO]: "Roumanie",
  [TuiCountryIsoCode.RS]: "Serbie",
  [TuiCountryIsoCode.RU]: "Russie",
  [TuiCountryIsoCode.RW]: "Rwanda",
  [TuiCountryIsoCode.SA]: "Arabie Saoudite",
  [TuiCountryIsoCode.SB]: "Iles Salomon",
  [TuiCountryIsoCode.SC]: "Seychelles",
  [TuiCountryIsoCode.SD]: "Soudan",
  [TuiCountryIsoCode.SE]: "Suède",
  [TuiCountryIsoCode.SG]: "Singapour",
  [TuiCountryIsoCode.SH]: "Sainte-Hélène",
  [TuiCountryIsoCode.SI]: "Slovénie",
  [TuiCountryIsoCode.SK]: "Slovaquie",
  [TuiCountryIsoCode.SL]: "Sierra Leone",
  [TuiCountryIsoCode.SM]: "Saint-Marin",
  [TuiCountryIsoCode.SN]: "Sénégal",
  [TuiCountryIsoCode.SO]: "Somalie",
  [TuiCountryIsoCode.SR]: "Suriname",
  [TuiCountryIsoCode.ST]: "Sao Tomé-et-Principe",
  [TuiCountryIsoCode.SV]: "El Salvador",
  [TuiCountryIsoCode.SX]: "Saint-Martin",
  [TuiCountryIsoCode.SY]: "République arabe syrienne",
  [TuiCountryIsoCode.SZ]: "Swaziland",
  [TuiCountryIsoCode.TC]: "Iles Turks-et-Caïcos",
  [TuiCountryIsoCode.TD]: "Tchad",
  [TuiCountryIsoCode.TG]: "Togo",
  [TuiCountryIsoCode.TH]: "Thaïlande",
  [TuiCountryIsoCode.TJ]: "Tadjikistan",
  [TuiCountryIsoCode.TL]: "Timor-Leste",
  [TuiCountryIsoCode.TM]: "Turkménistan",
  [TuiCountryIsoCode.TN]: "Tunisie",
  [TuiCountryIsoCode.TO]: "Tonga",
  [TuiCountryIsoCode.TR]: "Turquie",
  [TuiCountryIsoCode.TT]: "Trinité-et-Tobago",
  [TuiCountryIsoCode.TW]: "Taïwan",
  [TuiCountryIsoCode.TZ]: "Tanzanie",
  [TuiCountryIsoCode.UA]: "Ukraine",
  [TuiCountryIsoCode.UG]: "Ouganda",
  [TuiCountryIsoCode.US]: "États-Unis d'Amérique",
  [TuiCountryIsoCode.UY]: "Uruguay",
  [TuiCountryIsoCode.UZ]: "Ouzbékistan",
  [TuiCountryIsoCode.VC]: "Saint-Vincent-et-les-Grenadines",
  [TuiCountryIsoCode.VE]: "Venezuela",
  [TuiCountryIsoCode.VG]: "Iles vierges britanniques",
  [TuiCountryIsoCode.VN]: "Vietnam",
  [TuiCountryIsoCode.VU]: "Vanuatu",
  [TuiCountryIsoCode.WS]: "Samoa",
  [TuiCountryIsoCode.XK]: "Kosovo",
  [TuiCountryIsoCode.YE]: "Yémen",
  [TuiCountryIsoCode.YT]: "Mayotte",
  [TuiCountryIsoCode.ZA]: "Afrique du Sud",
  [TuiCountryIsoCode.ZM]: "Zambie",
  [TuiCountryIsoCode.ZW]: "Zimbabwe"
};
var TUI_FRENCH_LANGUAGE_CORE = {
  months: [
    "Janvier",
    "Février",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Août",
    "Septembre",
    "Octobre",
    "Novembre",
    "Décembre"
  ],
  close: "Fermer",
  nothingFoundMessage: "Aucun résultat",
  defaultErrorMessage: "Valeur non valide",
  spinTexts: ["Précédent", "Suivant"],
  shortWeekDays: ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"],
  countries: TUI_FRENCH_LANGUAGE_COUNTRIES
};
var TUI_FRENCH_LANGUAGE_KIT = {
  cancel: "Annuler",
  done: "Terminé",
  more: "Plus",
  otherDate: "Autre date...",
  showAll: "Tout afficher",
  hide: "Cacher",
  mobileCalendarTexts: [
    "Choisir un jour",
    "Choisir un intervalle",
    "Choisissez des jours"
  ],
  range: ["De", "À"],
  countTexts: ["Plus", "Moins"],
  time: {
    "HH:MM": "HH:MM",
    "HH:MM:SS": "HH:MM:SS",
    "HH:MM:SS.MSS": "HH:MM:SS.MSS"
  },
  dateTexts: {
    DMY: "jj.mm.aaaa",
    MDY: "mm.jj.aaaa",
    YMD: "aaaa.mm.jj"
  },
  digitalInformationUnits: ["B", "KiB", "MiB"],
  passwordTexts: ["Afficher le mot de passe", "Cacher le mot de passe"],
  copyTexts: ["Copier", "Copié"],
  shortCalendarMonths: [
    "Janv",
    "Fév",
    "Mar",
    "Avr",
    "Mai",
    "Jun",
    "Jui",
    "Aoû",
    "Sep",
    "Oct",
    "Nov",
    "Déc"
  ],
  pagination: ["Page précédente", "Page suivante"],
  fileTexts: {
    loadingError: "Erreur de chargement",
    preview: "Aperçu",
    remove: "Supprimer"
  },
  inputFileTexts: {
    defaultLabelSingle: "ou déposez-le ici",
    defaultLabelMultiple: "ou déposez-les ici",
    defaultLinkSingle: "Sélectionnez un fichier",
    defaultLinkMultiple: "Sélectionnez des fichiers",
    maxSizeRejectionReason: "Le fichier est trop volumineux",
    formatRejectionReason: "Format de fichier incorrect",
    drop: "Déposez le fichier ici",
    dropMultiple: "Déposez les fichiers ici"
  },
  multiSelectTexts: {
    all: "Tout sélectionner",
    none: "Ne rien sélectionner"
  },
  prompt: {
    yes: "Oui",
    no: "Non"
  }
};
var TUI_FRENCH_LANGUAGE = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({ name: "french" }, TUI_FRENCH_LANGUAGE_CORE), TUI_FRENCH_LANGUAGE_KIT), TUI_FRENCH_LANGUAGE_ADDON_TABLE), TUI_FRENCH_LANGUAGE_ADDON_COMMERCE), TUI_FRENCH_LANGUAGE_ADDON_EDITOR), TUI_FRENCH_LANGUAGE_ADDON_PREVIEW);

// node_modules/@taiga-ui/i18n/fesm2015/taiga-ui-i18n-languages-german.js
var TUI_GERMAN_LANGUAGE_ADDON_COMMERCE = {
  cardNumber: ["Nummer", "Kartennummer"],
  cardExpiry: ["Gültig bis", "Ablaufdatum Karte"]
};
var TUI_GERMAN_LANGUAGE_ADDON_EDITOR = {
  colorSelectorModeNames: ["Farbe", "Verlauf"],
  toolbarTools: {
    undo: "Rückgängig machen",
    redo: "Wiederholen",
    font: "Schriftart",
    fontStyle: "Schriftstil",
    fontSize: "Schriftgröße",
    bold: "Fett",
    italic: "Kursiv",
    underline: "Unterstrichen",
    strikeThrough: "Durchgestrichen",
    justify: "Blocksatz",
    justifyLeft: "Blocksatz links",
    justifyCenter: "Blocksatz mittig",
    justifyRight: "Blocksatz rechts",
    justifyFull: "Blocksatz",
    list: "Liste",
    indent: "Einrücken",
    outdent: "Ausrücken",
    unorderedList: "Ungeordnete Liste",
    orderedList: "Geordnete Liste",
    quote: "Blockquote",
    foreColor: "Farbe",
    backColor: "Hintergrundfarbe",
    hiliteColor: "Hilite-Farbe",
    clear: "Löschen",
    link: "Link",
    attach: "Datei anhängen",
    tex: "TeX einfügen",
    code: "Quelltext",
    image: "Bild einfügen",
    insertHorizontalRule: "Horizontale Linie einfügen",
    superscript: "Hochgestellt",
    subscript: "Tiefgestellt",
    insertTable: "Insert table",
    insertGroup: "Insert group",
    hiliteGroup: "Hilite group",
    removeGroup: "Remove group",
    insertAnchor: "Insert anchor",
    mergeCells: "Merge cells",
    splitCells: "Split cells",
    rowsColumnsManaging: "Managing rows and columns",
    cellColor: "Cell color",
    setDetails: "Details",
    removeDetails: "Remove details"
  },
  editorEditLink: {
    urlExample: "example.com",
    anchorExample: "anchor"
  },
  editorTableCommands: [
    ["Insert column before", "Insert column after"],
    ["Insert row before", "Insert row after"],
    ["Delete column", "Delete row"]
  ],
  editorCodeOptions: ["Code in the text", "Code in block"],
  editorFontOptions: {
    small: "Small",
    large: "Large",
    normal: "Normal",
    title: "Title",
    subtitle: "Subtitle"
  }
};
var TUI_GERMAN_LANGUAGE_ADDON_PREVIEW = {
  previewTexts: {
    rotate: "Rotieren"
  },
  zoomTexts: {
    zoomOut: "Verkleinern",
    zoomIn: "Vergrößern",
    reset: "Zurücksetzen"
  }
};
var TUI_GERMAN_LANGUAGE_ADDON_TABLE = {
  showHideText: "Anzeigen/Ausblenden",
  paginationTexts: {
    pages: "Seiten",
    linesPerPage: "Zeilen pro Seite",
    of: "von"
  }
};
var TUI_GERMAN_LANGUAGE_CORE = {
  months: [
    "Januar",
    "Februar",
    "März",
    "April",
    "Mai",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "Dezember"
  ],
  close: "Schließen",
  nothingFoundMessage: "Keine Ergebnisse",
  defaultErrorMessage: "Wert ist ungültig",
  spinTexts: ["Zurück", "Weiter"],
  shortWeekDays: ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"],
  // TODO: i18n replace with current language countries list
  countries: TUI_ENGLISH_LANGUAGE_COUNTRIES
};
var TUI_GERMAN_LANGUAGE_KIT = {
  cancel: "Abbrechen",
  done: "Fertig",
  more: "Mehr",
  otherDate: "Anderes Datum...",
  showAll: "Show all",
  hide: "Hide",
  mobileCalendarTexts: ["Tag auswählen", "Zeitraum auswählen", "Wählen Sie Tage"],
  range: ["von", "bis"],
  countTexts: ["Plus", "Minus"],
  time: {
    "HH:MM": "HH:MM",
    "HH:MM:SS": "HH:MM:SS",
    "HH:MM:SS.MSS": "HH:MM:SS.MSS"
  },
  dateTexts: {
    DMY: "dd.mm.yyyy",
    MDY: "mm.dd.yyyy",
    YMD: "yyyy.mm.dd"
  },
  digitalInformationUnits: ["B", "KiB", "MiB"],
  passwordTexts: ["Passwort anzeigen", "Passwort ausblenden"],
  copyTexts: ["Kopieren", "Kopiert"],
  shortCalendarMonths: [
    "Jan",
    "Feb",
    "Mär",
    "Apr",
    "Mai",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Okt",
    "Nov",
    "Dez"
  ],
  pagination: ["Vorherige Seite", "Nächste Seite"],
  fileTexts: {
    loadingError: "Fehler beim Laden",
    preview: "Vorschau",
    remove: "Entfernen"
  },
  inputFileTexts: {
    defaultLabelSingle: "oder einzelne Datei hier ablegen",
    defaultLabelMultiple: "oder mehrere Dateien hier ablegen",
    defaultLinkSingle: "Datei auswählen",
    defaultLinkMultiple: "Dateien auswählen",
    maxSizeRejectionReason: "Die Dateigröße überschreitet die maximal zulässige Größe von ",
    formatRejectionReason: "Ungültiges Dateiformat",
    drop: "Datei hier ablegen",
    dropMultiple: "Dateien hier ablegen"
  },
  multiSelectTexts: {
    all: "Alles auswählen",
    none: "Keine auswählen"
  },
  prompt: {
    yes: "Ja",
    no: "Nein"
  }
};
var TUI_GERMAN_LANGUAGE = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({ name: "german" }, TUI_GERMAN_LANGUAGE_CORE), TUI_GERMAN_LANGUAGE_KIT), TUI_GERMAN_LANGUAGE_ADDON_TABLE), TUI_GERMAN_LANGUAGE_ADDON_COMMERCE), TUI_GERMAN_LANGUAGE_ADDON_EDITOR), TUI_GERMAN_LANGUAGE_ADDON_PREVIEW);

// node_modules/@taiga-ui/i18n/fesm2015/taiga-ui-i18n-languages-italian.js
var TUI_ITALIAN_LANGUAGE_ADDON_COMMERCE = {
  cardNumber: ["Numero", "Numero carta"],
  cardExpiry: ["Scade il", "Valida fino al"]
};
var TUI_ITALIAN_LANGUAGE_ADDON_EDITOR = {
  colorSelectorModeNames: ["Tinta unita", "Gradiente"],
  toolbarTools: {
    undo: "Annulla",
    redo: "Rifai",
    font: "Font",
    fontStyle: "Stile font",
    fontSize: "Dimensione font",
    bold: "Grassetto",
    italic: "Corsivo",
    underline: "Sottolineato",
    strikeThrough: "Barrato",
    justify: "Giustifica",
    justifyLeft: "Allinea a sinistra",
    justifyCenter: "Allinea al centro",
    justifyRight: "Allinea a destra",
    justifyFull: "Giustifica pieno",
    list: "Lista",
    indent: "Rientro",
    outdent: "Elimina rientro",
    unorderedList: "Lista non ordinata",
    orderedList: "Lista ordinata",
    quote: "Virgolette",
    foreColor: "Colore",
    backColor: "Colore sfondo",
    hiliteColor: "Evidenziazione del testo",
    clear: "Pulisci",
    link: "Link",
    attach: "Allega file",
    tex: "Inserisci TeX",
    code: "Codice",
    image: "Inserisci image",
    insertHorizontalRule: "Inserisci riga orizzontale",
    superscript: "Apice",
    subscript: "Pedice",
    insertTable: "Inserisci tabella",
    insertGroup: "Insert group",
    hiliteGroup: "Hilite group",
    removeGroup: "Remove group",
    insertAnchor: "Insert anchor",
    mergeCells: "Unisci celle",
    splitCells: "Dividi celle",
    rowsColumnsManaging: "Gestione righe e colonne",
    cellColor: "Colore cella",
    setDetails: "Details",
    removeDetails: "Remove details"
  },
  editorEditLink: {
    urlExample: "example.com",
    anchorExample: "anchor"
  },
  editorTableCommands: [
    ["Inserisci colonna prima", "Inserisci colonna dopo"],
    ["Inserisci riga prima", "Inserisci riga dopo"],
    ["Cancella colonna", "Cancella riga"]
  ],
  editorCodeOptions: ["Codice nel testo", "Codice nel blocco"],
  editorFontOptions: {
    small: "Small",
    normal: "Normale",
    large: "Large",
    title: "Titolo",
    subtitle: "Sottotitolo"
  }
};
var TUI_ITALIAN_LANGUAGE_ADDON_PREVIEW = {
  previewTexts: {
    rotate: "Ruota"
  },
  zoomTexts: {
    zoomOut: "Rimpicciolisci",
    zoomIn: "Ingrandisci",
    reset: "Ripristina"
  }
};
var TUI_ITALIAN_LANGUAGE_ADDON_TABLE = {
  showHideText: "Mostra/Nascondi",
  paginationTexts: {
    pages: "Pagine",
    linesPerPage: "Righe per pagina",
    of: "di"
  }
};
var TUI_ITALIAN_LANGUAGE_COUNTRIES = {
  [TuiCountryIsoCode.AD]: "Andorra",
  [TuiCountryIsoCode.AE]: "Emirati Arabi Uniti",
  [TuiCountryIsoCode.AF]: "Afghanistan",
  [TuiCountryIsoCode.AG]: "Antigua and Barbuda",
  [TuiCountryIsoCode.AI]: "Anguilla",
  [TuiCountryIsoCode.AL]: "Albania",
  [TuiCountryIsoCode.AM]: "Armenia",
  [TuiCountryIsoCode.AO]: "Angola",
  [TuiCountryIsoCode.AR]: "Argentina",
  [TuiCountryIsoCode.AT]: "Austria",
  [TuiCountryIsoCode.AU]: "Australia",
  [TuiCountryIsoCode.AW]: "Aruba",
  [TuiCountryIsoCode.AZ]: "Azerbaijan",
  [TuiCountryIsoCode.BA]: "Bosnia Erzegovina",
  [TuiCountryIsoCode.BB]: "Barbados",
  [TuiCountryIsoCode.BD]: "Bangladesh",
  [TuiCountryIsoCode.BE]: "Belgio",
  [TuiCountryIsoCode.BF]: "Burkina Faso",
  [TuiCountryIsoCode.BG]: "Bulgaria",
  [TuiCountryIsoCode.BH]: "Bahrain",
  [TuiCountryIsoCode.BI]: "Burundi",
  [TuiCountryIsoCode.BJ]: "Benin",
  [TuiCountryIsoCode.BL]: "Saint Barthélemy",
  [TuiCountryIsoCode.BM]: "Bermuda",
  [TuiCountryIsoCode.BN]: "Brunei Darussalam",
  [TuiCountryIsoCode.BO]: "Bolivia",
  [TuiCountryIsoCode.BQ]: "Bonaire, Sint Eustatius e Saba",
  [TuiCountryIsoCode.BR]: "Brasile",
  [TuiCountryIsoCode.BS]: "Bahamas",
  [TuiCountryIsoCode.BT]: "Bhutan",
  [TuiCountryIsoCode.BW]: "Botswana",
  [TuiCountryIsoCode.BY]: "Bielorussia",
  [TuiCountryIsoCode.BZ]: "Belize",
  [TuiCountryIsoCode.CA]: "Canada",
  [TuiCountryIsoCode.CD]: "Repubblica Democratica del Congo",
  [TuiCountryIsoCode.CF]: "Repubblica Centroafricana",
  [TuiCountryIsoCode.CG]: "Repubblica del Congo",
  [TuiCountryIsoCode.CH]: "Svizzera",
  [TuiCountryIsoCode.CI]: "Costa d'Avorio",
  [TuiCountryIsoCode.CL]: "Cile",
  [TuiCountryIsoCode.CM]: "Camerun",
  [TuiCountryIsoCode.CN]: "Cina",
  [TuiCountryIsoCode.CO]: "Colombia",
  [TuiCountryIsoCode.CR]: "Costa Rica",
  [TuiCountryIsoCode.CU]: "Cuba",
  [TuiCountryIsoCode.CV]: "Capo Verde",
  [TuiCountryIsoCode.CW]: "Curaçao",
  [TuiCountryIsoCode.CY]: "Cipro",
  [TuiCountryIsoCode.CZ]: "Repubblica Ceca",
  [TuiCountryIsoCode.DE]: "Germania",
  [TuiCountryIsoCode.DJ]: "Gibuti",
  [TuiCountryIsoCode.DK]: "Danimarca",
  [TuiCountryIsoCode.DM]: "Dominica",
  [TuiCountryIsoCode.DO]: "Repubblica Dominicana",
  [TuiCountryIsoCode.DZ]: "Algeria",
  [TuiCountryIsoCode.EC]: "Ecuador",
  [TuiCountryIsoCode.EE]: "Estonia",
  [TuiCountryIsoCode.EG]: "Egitto",
  [TuiCountryIsoCode.ER]: "Eritrea",
  [TuiCountryIsoCode.ES]: "Spagna",
  [TuiCountryIsoCode.ET]: "Etiopia",
  [TuiCountryIsoCode.FI]: "Finlandia",
  [TuiCountryIsoCode.FJ]: "Fiji",
  [TuiCountryIsoCode.FK]: "Isole Falkland",
  [TuiCountryIsoCode.FM]: "Stati Federali della Micronesia",
  [TuiCountryIsoCode.FR]: "Francia",
  [TuiCountryIsoCode.GA]: "Gabon",
  [TuiCountryIsoCode.GB]: "Regno Unito",
  [TuiCountryIsoCode.GD]: "Grenada",
  [TuiCountryIsoCode.GE]: "Georgia",
  [TuiCountryIsoCode.GF]: "Guyana",
  [TuiCountryIsoCode.GH]: "Ghana",
  [TuiCountryIsoCode.GI]: "Gibilterra",
  [TuiCountryIsoCode.GL]: "Groenlandia",
  [TuiCountryIsoCode.GM]: "Gambia",
  [TuiCountryIsoCode.GN]: "Guinea",
  [TuiCountryIsoCode.GP]: "Guadalupa",
  [TuiCountryIsoCode.GQ]: "Guinea Equatoriale",
  [TuiCountryIsoCode.GR]: "Grecia",
  [TuiCountryIsoCode.GT]: "Guatemala",
  [TuiCountryIsoCode.GW]: "Guinea-Bissau",
  [TuiCountryIsoCode.GY]: "Guyana",
  [TuiCountryIsoCode.HK]: "Hong Kong",
  [TuiCountryIsoCode.HN]: "Honduras",
  [TuiCountryIsoCode.HR]: "Croazia",
  [TuiCountryIsoCode.HT]: "Haiti",
  [TuiCountryIsoCode.HU]: "Ungheria",
  [TuiCountryIsoCode.ID]: "Indonesia",
  [TuiCountryIsoCode.IE]: "Eire",
  [TuiCountryIsoCode.IL]: "Israele",
  [TuiCountryIsoCode.IN]: "India",
  [TuiCountryIsoCode.IQ]: "Iraq",
  [TuiCountryIsoCode.IR]: "Iran",
  [TuiCountryIsoCode.IS]: "Islanda",
  [TuiCountryIsoCode.IT]: "Italia",
  [TuiCountryIsoCode.JM]: "Giamaica",
  [TuiCountryIsoCode.JO]: "Giordania",
  [TuiCountryIsoCode.JP]: "Giappone",
  [TuiCountryIsoCode.KE]: "Kenya",
  [TuiCountryIsoCode.KG]: "Kirghizistan",
  [TuiCountryIsoCode.KH]: "Cambogia",
  [TuiCountryIsoCode.KM]: "Comore",
  [TuiCountryIsoCode.KN]: "Saint Kitts e Nevis",
  [TuiCountryIsoCode.KP]: "Corea del Nord",
  [TuiCountryIsoCode.KR]: "Corea del Sud",
  [TuiCountryIsoCode.KW]: "Kuwait",
  [TuiCountryIsoCode.KY]: "Isole Cayman",
  [TuiCountryIsoCode.KZ]: "Kazakhistan",
  [TuiCountryIsoCode.LA]: "Laos",
  [TuiCountryIsoCode.LB]: "Libano",
  [TuiCountryIsoCode.LC]: "Santa Lucia",
  [TuiCountryIsoCode.LI]: "Liechtenstein",
  [TuiCountryIsoCode.LK]: "Sri Lanka",
  [TuiCountryIsoCode.LR]: "Liberia",
  [TuiCountryIsoCode.LS]: "Lesotho",
  [TuiCountryIsoCode.LT]: "Lituania",
  [TuiCountryIsoCode.LU]: "Lussemburgo",
  [TuiCountryIsoCode.LV]: "Lettonia",
  [TuiCountryIsoCode.LY]: "Libia",
  [TuiCountryIsoCode.MA]: "Morocco",
  [TuiCountryIsoCode.MC]: "Monaco",
  [TuiCountryIsoCode.MD]: "Moldavia",
  [TuiCountryIsoCode.ME]: "Montenegro",
  [TuiCountryIsoCode.MF]: "San Martino",
  [TuiCountryIsoCode.MG]: "Madagascar",
  [TuiCountryIsoCode.MK]: "Macedonia",
  [TuiCountryIsoCode.ML]: "Mali",
  [TuiCountryIsoCode.MM]: "Myanmar",
  [TuiCountryIsoCode.MN]: "Mongolia",
  [TuiCountryIsoCode.MO]: "Macao",
  [TuiCountryIsoCode.MQ]: "Martinica",
  [TuiCountryIsoCode.MR]: "Mauritania",
  [TuiCountryIsoCode.MS]: "Montserrat",
  [TuiCountryIsoCode.MT]: "Malta",
  [TuiCountryIsoCode.MU]: "Maurizius",
  [TuiCountryIsoCode.MV]: "Maldive",
  [TuiCountryIsoCode.MW]: "Malawi",
  [TuiCountryIsoCode.MX]: "Messico",
  [TuiCountryIsoCode.MY]: "Malesia",
  [TuiCountryIsoCode.MZ]: "Mozambico",
  [TuiCountryIsoCode.NA]: "Namibia",
  [TuiCountryIsoCode.NC]: "Nuova Caledonia",
  [TuiCountryIsoCode.NE]: "Niger",
  [TuiCountryIsoCode.NG]: "Nigeria",
  [TuiCountryIsoCode.NI]: "Nicaragua",
  [TuiCountryIsoCode.NL]: "Paesi Bassi",
  [TuiCountryIsoCode.NO]: "Norvegia",
  [TuiCountryIsoCode.NP]: "Nepal",
  [TuiCountryIsoCode.NZ]: "Nuova Zelanda",
  [TuiCountryIsoCode.OM]: "Oman",
  [TuiCountryIsoCode.PA]: "Panama",
  [TuiCountryIsoCode.PE]: "Perù",
  [TuiCountryIsoCode.PF]: "Polinesia Francese",
  [TuiCountryIsoCode.PG]: "Papua Nuova Guinea",
  [TuiCountryIsoCode.PH]: "Filippine",
  [TuiCountryIsoCode.PK]: "Pakistan",
  [TuiCountryIsoCode.PL]: "Polonia",
  [TuiCountryIsoCode.PT]: "Portogallo",
  [TuiCountryIsoCode.PW]: "Palau",
  [TuiCountryIsoCode.PY]: "Paraguay",
  [TuiCountryIsoCode.QA]: "Qatar",
  [TuiCountryIsoCode.RE]: "Riunione",
  [TuiCountryIsoCode.RO]: "Romania",
  [TuiCountryIsoCode.RS]: "Serbia",
  [TuiCountryIsoCode.RU]: "Federazione Russa",
  [TuiCountryIsoCode.RW]: "Ruanda",
  [TuiCountryIsoCode.SA]: "Arabia Saudita",
  [TuiCountryIsoCode.SB]: "Solomon Islands",
  [TuiCountryIsoCode.SC]: "Seychelles",
  [TuiCountryIsoCode.SD]: "Sudan",
  [TuiCountryIsoCode.SE]: "Svezia",
  [TuiCountryIsoCode.SG]: "Singapore",
  [TuiCountryIsoCode.SH]: "Sant'Elena",
  [TuiCountryIsoCode.SI]: "Slovenia",
  [TuiCountryIsoCode.SK]: "Slovacchia",
  [TuiCountryIsoCode.SL]: "Sierra Leone",
  [TuiCountryIsoCode.SM]: "San Marino",
  [TuiCountryIsoCode.SN]: "Senegal",
  [TuiCountryIsoCode.SO]: "Somalia",
  [TuiCountryIsoCode.SR]: "Suriname",
  [TuiCountryIsoCode.ST]: "Sao Tome e Principe",
  [TuiCountryIsoCode.SV]: "El Salvador",
  [TuiCountryIsoCode.SX]: "Sint Maarten",
  [TuiCountryIsoCode.SY]: "Siria",
  [TuiCountryIsoCode.SZ]: "Swaziland",
  [TuiCountryIsoCode.TC]: "Isole Turks e Caicos",
  [TuiCountryIsoCode.TD]: "Ciad",
  [TuiCountryIsoCode.TG]: "Togo",
  [TuiCountryIsoCode.TH]: "Tailandia",
  [TuiCountryIsoCode.TJ]: "Tagikistan",
  [TuiCountryIsoCode.TL]: "Timor Est",
  [TuiCountryIsoCode.TM]: "Turkmenistan",
  [TuiCountryIsoCode.TN]: "Tunisia",
  [TuiCountryIsoCode.TO]: "Tonga",
  [TuiCountryIsoCode.TR]: "Turchia",
  [TuiCountryIsoCode.TT]: "Trinidad and Tobago",
  [TuiCountryIsoCode.TW]: "Taiwan",
  [TuiCountryIsoCode.TZ]: "Tanzania",
  [TuiCountryIsoCode.UA]: "Ucraina",
  [TuiCountryIsoCode.UG]: "Uganda",
  [TuiCountryIsoCode.US]: "Stati Uniti d'America",
  [TuiCountryIsoCode.UY]: "Uruguay",
  [TuiCountryIsoCode.UZ]: "Uzbekistan",
  [TuiCountryIsoCode.VC]: "Saint Vincent e Grenadine",
  [TuiCountryIsoCode.VE]: "Venezuela",
  [TuiCountryIsoCode.VG]: "Isole Vergini Britanniche",
  [TuiCountryIsoCode.VN]: "Vietnam",
  [TuiCountryIsoCode.VU]: "Vanuatu",
  [TuiCountryIsoCode.WS]: "Samoa",
  [TuiCountryIsoCode.XK]: "Kosovo",
  [TuiCountryIsoCode.YE]: "Yemen",
  [TuiCountryIsoCode.YT]: "Mayotta",
  [TuiCountryIsoCode.ZA]: "Sud Africa",
  [TuiCountryIsoCode.ZM]: "Zambia",
  [TuiCountryIsoCode.ZW]: "Zimbabwe"
};
var TUI_ITALIAN_LANGUAGE_CORE = {
  months: [
    "Gennaio",
    "Febbraio",
    "Marzo",
    "Aprile",
    "Maggio",
    "Giugno",
    "Luglio",
    "Agosto",
    "Settembre",
    "Ottobre",
    "Novembre",
    "Dicembre"
  ],
  close: "Chiudi",
  nothingFoundMessage: "Non abbiamo trovato nulla",
  defaultErrorMessage: "Il valore non è valido",
  spinTexts: ["Precedente", "Prossimo"],
  shortWeekDays: ["Lun", "Mar", "Mer", "Gio", "Ven", "Sab", "Dom"],
  countries: TUI_ITALIAN_LANGUAGE_COUNTRIES
};
var TUI_ITALIAN_LANGUAGE_KIT = {
  cancel: "Annulla",
  done: "Fatto",
  more: "Di più",
  otherDate: "Altra data...",
  showAll: "Show all",
  hide: "Hide",
  mobileCalendarTexts: ["Scegli giorno", "Scegli intervallo", "Scegli i giorni"],
  range: ["da", "a"],
  countTexts: ["Più", "Meno"],
  time: {
    "HH:MM": "HH:MM",
    "HH:MM:SS": "HH:MM:SS",
    "HH:MM:SS.MSS": "HH:MM:SS.MSS"
  },
  dateTexts: {
    DMY: "gg.mm.aaaa",
    MDY: "mm.gg.aaaa",
    YMD: "aaaa.mm.gg"
  },
  digitalInformationUnits: ["B", "KiB", "MiB"],
  passwordTexts: ["Mostra password", "Nascondi password"],
  copyTexts: ["Copia", "Copiato"],
  shortCalendarMonths: [
    "Gen",
    "Feb",
    "Mar",
    "Apr",
    "Mag",
    "Giu",
    "Lug",
    "Ago",
    "Set",
    "Ott",
    "Nov",
    "Dic"
  ],
  pagination: ["Pagina precedente", "Pagina successiva"],
  fileTexts: {
    loadingError: "Caricamento errore",
    preview: "Anteprima",
    remove: "Rimuovi"
  },
  inputFileTexts: {
    defaultLabelSingle: "o trascinalo qui",
    defaultLabelMultiple: "o trascinali qui",
    defaultLinkSingle: "Scegliere il file",
    defaultLinkMultiple: "Scegliere i file",
    maxSizeRejectionReason: "Il file supera le dimensioni ",
    formatRejectionReason: "Formato file errato",
    drop: "Trascina il file qui",
    dropMultiple: "Trascina i file qui"
  },
  multiSelectTexts: {
    all: "Seleziona tutto",
    none: "Seleziona nessuno"
  },
  prompt: {
    yes: "Sì",
    no: "No"
  }
};
var TUI_ITALIAN_LANGUAGE = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({ name: "italian" }, TUI_ITALIAN_LANGUAGE_CORE), TUI_ITALIAN_LANGUAGE_KIT), TUI_ITALIAN_LANGUAGE_ADDON_TABLE), TUI_ITALIAN_LANGUAGE_ADDON_COMMERCE), TUI_ITALIAN_LANGUAGE_ADDON_EDITOR), TUI_ITALIAN_LANGUAGE_ADDON_PREVIEW);

// node_modules/@taiga-ui/i18n/fesm2015/taiga-ui-i18n-languages-kazakh.js
var TUI_KAZAKH_LANGUAGE_ADDON_COMMERCE = {
  cardNumber: ["Сан", "Карточка нөмірі"],
  cardExpiry: ["Мерзімі бітеді", "Арқылы жарамды"]
};
var TUI_KAZAKH_LANGUAGE_ADDON_EDITOR = {
  colorSelectorModeNames: ["Бірыңғай түс", "Градиент"],
  toolbarTools: {
    undo: "Болдырмау",
    redo: "Қайталау",
    font: "Қаріп",
    fontStyle: "Қаріп стилі",
    fontSize: "Қаріп өлшемі",
    bold: "Қалың",
    italic: "Курсив",
    underline: "Астын сызу",
    strikeThrough: "Соғу",
    justify: "Ақтау",
    justifyLeft: "Сол жаққа ақтаңыз",
    justifyCenter: "Орталықты негіздеу",
    justifyRight: "Дұрыс негіздеу",
    justifyFull: "Толық негіздеу",
    list: "Тізім",
    indent: "Шегініс",
    outdent: "Ашық",
    unorderedList: "Реттелмеген тізім",
    orderedList: "Реттелген тізім",
    quote: "Дәйексөз",
    foreColor: "Түс",
    backColor: "Фон түсі",
    hiliteColor: "Түсті бөлектеу",
    clear: "Таза",
    link: "Сілтеме",
    attach: "Файлды тіркеңіз",
    tex: "TeX енгізіңіз",
    code: "Код",
    image: "Суретті енгізу",
    insertHorizontalRule: "Көлденең ережені енгізіңіз",
    superscript: "Жоғарғы сызба",
    subscript: "Жазу",
    insertTable: "Кестені енгізу",
    insertGroup: "Топты енгізу",
    hiliteGroup: "Хилит тобы",
    removeGroup: "Топты жою",
    insertAnchor: "Анкерді салыңыз",
    mergeCells: "Ұяшықтарды біріктіру",
    splitCells: "Бөлінген жасушалар",
    rowsColumnsManaging: "Жолдар мен бағандарды басқару",
    cellColor: "Жасуша түсі",
    setDetails: "Егжей",
    removeDetails: "Мәліметтерді жою"
  },
  editorEditLink: {
    urlExample: "example.com",
    anchorExample: "Якорь"
  },
  editorTableCommands: [
    ["Алдында бағанды енгізу", "Бағананы кейін енгізіңіз"],
    ["Алдында жолды енгізіңіз", "Жолды кейін енгізіңіз"],
    ["Бағанды жою", "Жолды жою"]
  ],
  editorCodeOptions: ["Мәтіндегі код", "Блоктағы код"],
  editorFontOptions: {
    small: "Кішкентай",
    large: "Үлкен",
    normal: "Қалыпты",
    title: "Тақырып",
    subtitle: "Субтитр"
  }
};
var TUI_KAZAKH_LANGUAGE_ADDON_PREVIEW = {
  previewTexts: {
    rotate: "Айналдыру"
  },
  zoomTexts: {
    zoomOut: "Кішірейту",
    zoomIn: "Үлкейту",
    reset: "Қалпына келтіру"
  }
};
var TUI_KAZAKH_LANGUAGE_ADDON_TABLE = {
  showHideText: "Көрсету/Жасыру",
  paginationTexts: {
    pages: "Беттер",
    linesPerPage: "Әр беттегі жолдар",
    of: "ның"
  }
};
var TUI_KAZAKH_LANGUAGE_COUNTRIES = {
  [TuiCountryIsoCode.AD]: "Andorra",
  [TuiCountryIsoCode.AE]: "United Arab Emirates",
  [TuiCountryIsoCode.AF]: "Afghanistan",
  [TuiCountryIsoCode.AG]: "Antigua and Barbuda",
  [TuiCountryIsoCode.BL]: "Saint Barthélemy",
  [TuiCountryIsoCode.AI]: "Anguilla",
  [TuiCountryIsoCode.AL]: "Albania",
  [TuiCountryIsoCode.AM]: "Armenia",
  [TuiCountryIsoCode.AO]: "Angola",
  [TuiCountryIsoCode.AR]: "Argentina",
  [TuiCountryIsoCode.AT]: "Austria",
  [TuiCountryIsoCode.AU]: "Australia",
  [TuiCountryIsoCode.AW]: "Aruba",
  [TuiCountryIsoCode.AZ]: "Azerbaijan",
  [TuiCountryIsoCode.BA]: "Bosnia and Herzegovina",
  [TuiCountryIsoCode.BB]: "Barbados",
  [TuiCountryIsoCode.BD]: "Bangladesh",
  [TuiCountryIsoCode.BE]: "Belgium",
  [TuiCountryIsoCode.BF]: "Burkina Faso",
  [TuiCountryIsoCode.BG]: "Bulgaria",
  [TuiCountryIsoCode.BH]: "Bahrain",
  [TuiCountryIsoCode.BI]: "Burundi",
  [TuiCountryIsoCode.BJ]: "Benin",
  [TuiCountryIsoCode.GF]: "Guyana",
  [TuiCountryIsoCode.BM]: "Bermuda",
  [TuiCountryIsoCode.BN]: "Brunei Darussalam",
  [TuiCountryIsoCode.BO]: "Bolivia",
  [TuiCountryIsoCode.BQ]: "Bonaire, Sint Eustatius and Saba",
  [TuiCountryIsoCode.BR]: "Brazil",
  [TuiCountryIsoCode.BS]: "Bahamas",
  [TuiCountryIsoCode.BT]: "Bhutan",
  [TuiCountryIsoCode.BW]: "Botswana",
  [TuiCountryIsoCode.BY]: "Belarus",
  [TuiCountryIsoCode.BZ]: "Belize",
  [TuiCountryIsoCode.CA]: "Canada",
  [TuiCountryIsoCode.CD]: "Dem. Rep. Congo (Kinshasa)",
  [TuiCountryIsoCode.CF]: "Central African Republic",
  [TuiCountryIsoCode.CG]: "Congo (Brazzaville)",
  [TuiCountryIsoCode.CH]: "Switzerland",
  [TuiCountryIsoCode.CI]: "Ivory Coast",
  [TuiCountryIsoCode.CL]: "Chile",
  [TuiCountryIsoCode.CM]: "Cameroon",
  [TuiCountryIsoCode.CN]: "China",
  [TuiCountryIsoCode.CO]: "Colombia",
  [TuiCountryIsoCode.CR]: "Costa Rica",
  [TuiCountryIsoCode.CU]: "Cuba",
  [TuiCountryIsoCode.CV]: "Cape Verde",
  [TuiCountryIsoCode.CW]: "Curaçao",
  [TuiCountryIsoCode.CY]: "Cyprus",
  [TuiCountryIsoCode.CZ]: "Czech Republic",
  [TuiCountryIsoCode.DE]: "Germany",
  [TuiCountryIsoCode.DJ]: "Djibouti",
  [TuiCountryIsoCode.DK]: "Denmark",
  [TuiCountryIsoCode.DM]: "Dominica",
  [TuiCountryIsoCode.DO]: "Dominican Republic",
  [TuiCountryIsoCode.DZ]: "Algeria",
  [TuiCountryIsoCode.EC]: "Ecuador",
  [TuiCountryIsoCode.EE]: "Estonia",
  [TuiCountryIsoCode.EG]: "Egypt",
  [TuiCountryIsoCode.ER]: "Eritrea",
  [TuiCountryIsoCode.ES]: "Spain",
  [TuiCountryIsoCode.ET]: "Ethiopia",
  [TuiCountryIsoCode.FI]: "Finland",
  [TuiCountryIsoCode.FJ]: "Fiji",
  [TuiCountryIsoCode.FK]: "Falkland Islands",
  [TuiCountryIsoCode.FM]: "F.S. of Micronesia",
  [TuiCountryIsoCode.FR]: "France",
  [TuiCountryIsoCode.GA]: "Gabon",
  [TuiCountryIsoCode.GB]: "United Kingdom",
  [TuiCountryIsoCode.GD]: "Grenada",
  [TuiCountryIsoCode.GE]: "Georgia",
  [TuiCountryIsoCode.GP]: "Guadeloupe",
  [TuiCountryIsoCode.GH]: "Ghana",
  [TuiCountryIsoCode.GI]: "Gibraltar",
  [TuiCountryIsoCode.GL]: "Greenland",
  [TuiCountryIsoCode.GM]: "Gambia",
  [TuiCountryIsoCode.GN]: "Guinea",
  [TuiCountryIsoCode.MF]: "Saint-Martin",
  [TuiCountryIsoCode.GQ]: "Equatorial Guinea",
  [TuiCountryIsoCode.GR]: "Greece",
  [TuiCountryIsoCode.GT]: "Guatemala",
  [TuiCountryIsoCode.GW]: "Guinea-Bissau",
  [TuiCountryIsoCode.GY]: "Guyana",
  [TuiCountryIsoCode.HK]: "Hong Kong",
  [TuiCountryIsoCode.HN]: "Honduras",
  [TuiCountryIsoCode.HR]: "Croatia",
  [TuiCountryIsoCode.HT]: "Haiti",
  [TuiCountryIsoCode.HU]: "Hungary",
  [TuiCountryIsoCode.ID]: "Indonesia",
  [TuiCountryIsoCode.IE]: "Ireland",
  [TuiCountryIsoCode.IL]: "Israel",
  [TuiCountryIsoCode.IN]: "India",
  [TuiCountryIsoCode.IQ]: "Iraq",
  [TuiCountryIsoCode.IR]: "Iran",
  [TuiCountryIsoCode.IS]: "Iceland",
  [TuiCountryIsoCode.IT]: "Italy",
  [TuiCountryIsoCode.JM]: "Jamaica",
  [TuiCountryIsoCode.JO]: "Jordan",
  [TuiCountryIsoCode.JP]: "Japan",
  [TuiCountryIsoCode.KE]: "Kenya",
  [TuiCountryIsoCode.KG]: "Kyrgyzstan",
  [TuiCountryIsoCode.KH]: "Cambodia",
  [TuiCountryIsoCode.KM]: "Comoros",
  [TuiCountryIsoCode.KN]: "Saint Kitts and Nevis",
  [TuiCountryIsoCode.KP]: "Korean PDR",
  [TuiCountryIsoCode.KR]: "Rep. Korea",
  [TuiCountryIsoCode.KW]: "Kuwait",
  [TuiCountryIsoCode.KY]: "Cayman Islands",
  [TuiCountryIsoCode.KZ]: "Kazakhstan",
  [TuiCountryIsoCode.LA]: "Laos",
  [TuiCountryIsoCode.LB]: "Lebanon",
  [TuiCountryIsoCode.LC]: "Saint Lucia",
  [TuiCountryIsoCode.LI]: "Liechtenstein",
  [TuiCountryIsoCode.LK]: "Sri Lanka",
  [TuiCountryIsoCode.LR]: "Liberia",
  [TuiCountryIsoCode.LS]: "Lesotho",
  [TuiCountryIsoCode.LT]: "Lithuania",
  [TuiCountryIsoCode.LU]: "Luxembourg",
  [TuiCountryIsoCode.LV]: "Latvia",
  [TuiCountryIsoCode.LY]: "Libya",
  [TuiCountryIsoCode.MA]: "Morocco",
  [TuiCountryIsoCode.MC]: "Monaco",
  [TuiCountryIsoCode.MD]: "Moldova",
  [TuiCountryIsoCode.ME]: "Montenegro",
  [TuiCountryIsoCode.MQ]: "Martinique",
  [TuiCountryIsoCode.MG]: "Madagascar",
  [TuiCountryIsoCode.MK]: "Rep. of North Macedonia",
  [TuiCountryIsoCode.ML]: "Mali",
  [TuiCountryIsoCode.MM]: "Burma (Myanmar)",
  [TuiCountryIsoCode.MN]: "Mongolia",
  [TuiCountryIsoCode.MO]: "Macau",
  [TuiCountryIsoCode.RE]: "Réunion",
  [TuiCountryIsoCode.MR]: "Mauritania",
  [TuiCountryIsoCode.MS]: "Montserrat",
  [TuiCountryIsoCode.MT]: "Malta",
  [TuiCountryIsoCode.MU]: "Mauritius",
  [TuiCountryIsoCode.MV]: "Maldives",
  [TuiCountryIsoCode.MW]: "Malawi",
  [TuiCountryIsoCode.MX]: "Mexico",
  [TuiCountryIsoCode.MY]: "Malaysia",
  [TuiCountryIsoCode.MZ]: "Mozambique",
  [TuiCountryIsoCode.NA]: "Namibia",
  [TuiCountryIsoCode.NC]: "New Caledonia",
  [TuiCountryIsoCode.NE]: "Niger",
  [TuiCountryIsoCode.NG]: "Nigeria",
  [TuiCountryIsoCode.NI]: "Nicaragua",
  [TuiCountryIsoCode.NL]: "Netherlands",
  [TuiCountryIsoCode.NO]: "Norway",
  [TuiCountryIsoCode.NP]: "Nepal",
  [TuiCountryIsoCode.NZ]: "New Zealand",
  [TuiCountryIsoCode.OM]: "Oman",
  [TuiCountryIsoCode.PA]: "Panama",
  [TuiCountryIsoCode.PE]: "Peru",
  [TuiCountryIsoCode.PF]: "French Polynesia (Tahiti)",
  [TuiCountryIsoCode.PG]: "Papua New Guinea",
  [TuiCountryIsoCode.PH]: "Philippines",
  [TuiCountryIsoCode.PK]: "Pakistan",
  [TuiCountryIsoCode.PL]: "Poland",
  [TuiCountryIsoCode.PT]: "Portugal",
  [TuiCountryIsoCode.PW]: "Palau",
  [TuiCountryIsoCode.PY]: "Paraguay",
  [TuiCountryIsoCode.QA]: "Qatar",
  [TuiCountryIsoCode.YT]: "Mayotte",
  [TuiCountryIsoCode.RO]: "Romania",
  [TuiCountryIsoCode.RS]: "Serbia",
  [TuiCountryIsoCode.RU]: "Russia",
  [TuiCountryIsoCode.RW]: "Rwanda",
  [TuiCountryIsoCode.SA]: "Saudi Arabia",
  [TuiCountryIsoCode.SB]: "Solomon Islands",
  [TuiCountryIsoCode.SC]: "Seychelles",
  [TuiCountryIsoCode.SD]: "Sudan",
  [TuiCountryIsoCode.SE]: "Sweden",
  [TuiCountryIsoCode.SG]: "Singapore",
  [TuiCountryIsoCode.SH]: "Saint Helena",
  [TuiCountryIsoCode.SI]: "Slovenia",
  [TuiCountryIsoCode.SK]: "Slovakia",
  [TuiCountryIsoCode.SL]: "Sierra Leone",
  [TuiCountryIsoCode.SM]: "San Marino",
  [TuiCountryIsoCode.SN]: "Senegal",
  [TuiCountryIsoCode.SO]: "Somalia",
  [TuiCountryIsoCode.SR]: "Suriname",
  [TuiCountryIsoCode.ST]: "Sao Tome and Principe",
  [TuiCountryIsoCode.SV]: "El Salvador",
  [TuiCountryIsoCode.SX]: "Sint Maarten",
  [TuiCountryIsoCode.SY]: "Syrian Arab Republic",
  [TuiCountryIsoCode.SZ]: "Swaziland",
  [TuiCountryIsoCode.TC]: "Turks and Caicos",
  [TuiCountryIsoCode.TD]: "Chad",
  [TuiCountryIsoCode.TG]: "Togo",
  [TuiCountryIsoCode.TH]: "Thailand",
  [TuiCountryIsoCode.TJ]: "Tajikistan",
  [TuiCountryIsoCode.TL]: "East Timor",
  [TuiCountryIsoCode.TM]: "Turkmenistan",
  [TuiCountryIsoCode.TN]: "Tunisia",
  [TuiCountryIsoCode.TO]: "Tonga",
  [TuiCountryIsoCode.TR]: "Turkey",
  [TuiCountryIsoCode.TT]: "Trinidad and Tobago",
  [TuiCountryIsoCode.TW]: "Taiwan",
  [TuiCountryIsoCode.TZ]: "Tanzania",
  [TuiCountryIsoCode.UA]: "Ukraine",
  [TuiCountryIsoCode.UG]: "Uganda",
  [TuiCountryIsoCode.US]: "USA",
  [TuiCountryIsoCode.UY]: "Uruguay",
  [TuiCountryIsoCode.UZ]: "Uzbekistan",
  [TuiCountryIsoCode.VC]: "Saint Vincent and the Grenadines",
  [TuiCountryIsoCode.VE]: "Venezuela",
  [TuiCountryIsoCode.VG]: "British Virgin Islands",
  [TuiCountryIsoCode.VN]: "Vietnam",
  [TuiCountryIsoCode.VU]: "Vanuatu",
  [TuiCountryIsoCode.WS]: "Samoa",
  [TuiCountryIsoCode.XK]: "Kosovo",
  [TuiCountryIsoCode.YE]: "Yemen",
  [TuiCountryIsoCode.ZA]: "South Africa",
  [TuiCountryIsoCode.ZM]: "Zambia",
  [TuiCountryIsoCode.ZW]: "Zimbabwe"
};
var TUI_KAZAKH_LANGUAGE_CORE = {
  months: [
    "Қаңтар",
    "Ақпан",
    "Наурыз",
    "Сәуір",
    "Мамыр",
    "Маусым",
    "Шілде",
    "Тамыз",
    "Қыркүйек",
    "Қазан",
    "Қараша",
    "Желтоқсан"
  ],
  close: "Жабық",
  nothingFoundMessage: "Ештеңе табылмады",
  defaultErrorMessage: "Мән жарамсыз",
  spinTexts: ["Алдыңғы", "Келесі"],
  shortWeekDays: ["Дүй", "Ссе", "Сәр", "Бсе", "Жұм", "Сб", "Жек"],
  countries: TUI_KAZAKH_LANGUAGE_COUNTRIES
};
var TUI_KAZAKH_LANGUAGE_KIT = {
  cancel: "Болдырмау",
  done: "Дайын",
  more: "Көбірек",
  otherDate: "Басқа күн...",
  showAll: "Барлығын көрсету",
  hide: "Жасыру",
  mobileCalendarTexts: ["Күнді таңдаңыз", "Аралықты таңдаңыз", "Күндерді таңдаңыз"],
  range: ["бастап", "дейін"],
  countTexts: ["Плюс", "Минус"],
  time: {
    "HH:MM": "HH:MM",
    "HH:MM:SS": "HH:MM:SS",
    "HH:MM:SS.MSS": "HH:MM:SS.MSS"
  },
  dateTexts: {
    DMY: "dd.mm.yyyy",
    MDY: "mm.dd.yyyy",
    YMD: "yyyy.mm.dd"
  },
  digitalInformationUnits: ["B", "KiB", "MiB"],
  passwordTexts: ["Құпия сөзді көрсету", "Құпия сөзді жасыру"],
  copyTexts: ["Көшіру", "Көшірілген"],
  shortCalendarMonths: [
    "Қаң",
    "Ақп",
    "Нау",
    "Сәу",
    "Мам",
    "Мау",
    "Шіл",
    "Там",
    "Қыр",
    "Қаз",
    "Қар",
    "Жел"
  ],
  pagination: ["Алдыңғы бет", "Келесі бет"],
  fileTexts: {
    loadingError: "Жүктеп салу сәтсіз аяқталды",
    preview: "Алдын ала қарау",
    remove: "Жою"
  },
  inputFileTexts: {
    defaultLabelSingle: "немесе тастаңыз ол мұнда",
    defaultLabelMultiple: "немесе тастаңыз олар мұнда",
    defaultLinkSingle: "Файлды таңдаңыз",
    defaultLinkMultiple: "Файлдарды таңдаңыз",
    maxSizeRejectionReason: "Файл тым үлкен",
    formatRejectionReason: "Қате файл түрі",
    drop: "Файлды осы жерге тастаңыз",
    dropMultiple: "Файлдарды осы жерге тастаңыз"
  },
  multiSelectTexts: {
    all: "Барлығын таңдаңыз",
    none: "Ешбіреуін таңдау"
  },
  prompt: {
    yes: "Иә",
    no: "Жоқ"
  }
};
var TUI_KAZAKH_LANGUAGE = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({ name: "kazakh" }, TUI_KAZAKH_LANGUAGE_CORE), TUI_KAZAKH_LANGUAGE_KIT), TUI_KAZAKH_LANGUAGE_ADDON_TABLE), TUI_KAZAKH_LANGUAGE_ADDON_COMMERCE), TUI_KAZAKH_LANGUAGE_ADDON_EDITOR), TUI_KAZAKH_LANGUAGE_ADDON_PREVIEW);

// node_modules/@taiga-ui/i18n/fesm2015/taiga-ui-i18n-languages-malay.js
var TUI_MALAY_LANGUAGE_ADDON_COMMERCE = {
  cardNumber: ["Nombor", "Nombor kad"],
  cardExpiry: ["Tamat tempoh", "Sah sehingga"]
};
var TUI_MALAY_LANGUAGE_ADDON_EDITOR = {
  colorSelectorModeNames: ["Warna padu", "Kecerunan"],
  toolbarTools: {
    undo: "Buat asal",
    redo: "Buat semula",
    font: "Huruf",
    fontStyle: "Gaya huruf",
    fontSize: "Saiz huruf",
    bold: "Tebal",
    italic: "Condong",
    underline: "Garis bawah",
    strikeThrough: "Tembus",
    justify: "Kelarasan",
    justifyLeft: "Kelarasan kiri",
    justifyCenter: "Kelarasan tengah",
    justifyRight: "Kelarasan kanan",
    justifyFull: "Kelarasan penuh",
    list: "Senarai",
    indent: "Inden",
    outdent: "Outden",
    unorderedList: "Senarai tidak teratur",
    orderedList: "Senarai teratur",
    quote: "petikan",
    foreColor: "Warna",
    backColor: "Warna latar belakang",
    hiliteColor: "Sorotan warna",
    clear: "Kosongkan",
    link: "Pautan",
    attach: "Lampirkan fail",
    tex: "Masukkan TeX",
    code: "Kod",
    image: "Masukkan gambar",
    insertHorizontalRule: "Masukkan peraturan mendatar",
    superscript: "Superskrip",
    subscript: "Subskrip",
    insertTable: "Masukkan jadual",
    insertGroup: "Masukkan kumpulan",
    hiliteGroup: "Sorotan kumpulan",
    removeGroup: "Buang kumpulan",
    insertAnchor: "Masukkan sauh",
    mergeCells: "Cantumkan sel",
    splitCells: "Pisahkan sel",
    rowsColumnsManaging: "Menguruskan baris dan lajur",
    cellColor: "Warna sel",
    setDetails: "Butiran",
    removeDetails: "Buang butiran"
  },
  editorEditLink: {
    urlExample: "example.com",
    anchorExample: "anchor"
  },
  editorTableCommands: [
    ["Masukkan lajur sebelum", "Masukkan lajur selepas"],
    ["Masukkan baris sebelum", "Masukkan baris selepas"],
    ["Padam lajur", "Padam baris"]
  ],
  editorCodeOptions: ["Kod dalam teks", "Kod dalam blok"],
  editorFontOptions: {
    small: "Kecil",
    large: "Besar",
    normal: "Biasa",
    title: "Tajuk",
    subtitle: "Sarikata"
  }
};
var TUI_MALAY_LANGUAGE_ADDON_PREVIEW = {
  previewTexts: {
    rotate: "Putar"
  },
  zoomTexts: {
    zoomOut: "Zum keluar",
    zoomIn: "Zum masuk",
    reset: "Set semula"
  }
};
var TUI_MALAY_LANGUAGE_ADDON_TABLE = {
  showHideText: "Tunjuk/Sembunyi",
  paginationTexts: {
    pages: "Halaman",
    linesPerPage: "Baris setiap halaman",
    of: "dari"
  }
};
var TUI_MALAY_LANGUAGE_COUNTRIES = {
  [TuiCountryIsoCode.AD]: "Andorra",
  [TuiCountryIsoCode.AE]: "Emiriah Arab Bersatu",
  [TuiCountryIsoCode.AF]: "Afghanistan",
  [TuiCountryIsoCode.AG]: "Antigua dan Barbuda",
  [TuiCountryIsoCode.BL]: "Saint Barthélemy",
  [TuiCountryIsoCode.AI]: "Anguilla",
  [TuiCountryIsoCode.AL]: "Albania",
  [TuiCountryIsoCode.AM]: "Armenia",
  [TuiCountryIsoCode.AO]: "Angola",
  [TuiCountryIsoCode.AR]: "Argentina",
  [TuiCountryIsoCode.AT]: "Austria",
  [TuiCountryIsoCode.AU]: "Australia",
  [TuiCountryIsoCode.AW]: "Aruba",
  [TuiCountryIsoCode.AZ]: "Azerbaijan",
  [TuiCountryIsoCode.BA]: "Bosnia dan Herzegovina",
  [TuiCountryIsoCode.BB]: "Barbados",
  [TuiCountryIsoCode.BD]: "Bangladesh",
  [TuiCountryIsoCode.BE]: "Belgium",
  [TuiCountryIsoCode.BF]: "Burkina Faso",
  [TuiCountryIsoCode.BG]: "Bulgaria",
  [TuiCountryIsoCode.BH]: "Bahrain",
  [TuiCountryIsoCode.BI]: "Burundi",
  [TuiCountryIsoCode.BJ]: "Benin",
  [TuiCountryIsoCode.GF]: "Guyana",
  [TuiCountryIsoCode.BM]: "Bermuda",
  [TuiCountryIsoCode.BN]: "Brunei Darussalam",
  [TuiCountryIsoCode.BO]: "Bolivia",
  [TuiCountryIsoCode.BQ]: "Bonaire, Sint Eustatius dan Saba",
  [TuiCountryIsoCode.BR]: "Brazil",
  [TuiCountryIsoCode.BS]: "Bahamas",
  [TuiCountryIsoCode.BT]: "Bhutan",
  [TuiCountryIsoCode.BW]: "Botswana",
  [TuiCountryIsoCode.BY]: "Belarus",
  [TuiCountryIsoCode.BZ]: "Belize",
  [TuiCountryIsoCode.CA]: "Kanada",
  [TuiCountryIsoCode.CD]: "Rep. Dem. Congo (Kinshasa)",
  [TuiCountryIsoCode.CF]: "Republik Afrika Tengah",
  [TuiCountryIsoCode.CG]: "Congo (Brazzaville)",
  [TuiCountryIsoCode.CH]: "Switzerland",
  [TuiCountryIsoCode.CI]: "Ivory Coast (Côte d'Ivoire)",
  [TuiCountryIsoCode.CL]: "Chile",
  [TuiCountryIsoCode.CM]: "Cameroon",
  [TuiCountryIsoCode.CN]: "China",
  [TuiCountryIsoCode.CO]: "Colombia",
  [TuiCountryIsoCode.CR]: "Costa Rica",
  [TuiCountryIsoCode.CU]: "Cuba",
  [TuiCountryIsoCode.CV]: "Cape Verde",
  [TuiCountryIsoCode.CW]: "Curaçao",
  [TuiCountryIsoCode.CY]: "Cyprus",
  [TuiCountryIsoCode.CZ]: "Republik Czech",
  [TuiCountryIsoCode.DE]: "Jerman",
  [TuiCountryIsoCode.DJ]: "Djibouti",
  [TuiCountryIsoCode.DK]: "Denmark",
  [TuiCountryIsoCode.DM]: "Dominica",
  [TuiCountryIsoCode.DO]: "Republik Dominican",
  [TuiCountryIsoCode.DZ]: "Algeria",
  [TuiCountryIsoCode.EC]: "Ecuador",
  [TuiCountryIsoCode.EE]: "Estonia",
  [TuiCountryIsoCode.EG]: "Mesir",
  [TuiCountryIsoCode.ER]: "Eritrea",
  [TuiCountryIsoCode.ES]: "Sepanyol",
  [TuiCountryIsoCode.ET]: "Habsyah (Ethiopia)",
  [TuiCountryIsoCode.FI]: "Finland",
  [TuiCountryIsoCode.FJ]: "Fiji",
  [TuiCountryIsoCode.FK]: "Kepulauan Falkland",
  [TuiCountryIsoCode.FM]: "Persekutuan Mikronesia",
  [TuiCountryIsoCode.FR]: "Perancis",
  [TuiCountryIsoCode.GA]: "Gabon",
  [TuiCountryIsoCode.GB]: "United Kingdom",
  [TuiCountryIsoCode.GD]: "Grenada",
  [TuiCountryIsoCode.GE]: "Georgia",
  [TuiCountryIsoCode.GP]: "Guadeloupe",
  [TuiCountryIsoCode.GH]: "Ghana",
  [TuiCountryIsoCode.GI]: "Gibraltar",
  [TuiCountryIsoCode.GL]: "Greenland",
  [TuiCountryIsoCode.GM]: "Gambia",
  [TuiCountryIsoCode.GN]: "Guinea",
  [TuiCountryIsoCode.MF]: "Saint-Martin",
  [TuiCountryIsoCode.GQ]: "Equatorial Guinea",
  [TuiCountryIsoCode.GR]: "Greece",
  [TuiCountryIsoCode.GT]: "Guatemala",
  [TuiCountryIsoCode.GW]: "Guinea-Bissau",
  [TuiCountryIsoCode.GY]: "Guyana",
  [TuiCountryIsoCode.HK]: "Hong Kong",
  [TuiCountryIsoCode.HN]: "Honduras",
  [TuiCountryIsoCode.HR]: "Croatia",
  [TuiCountryIsoCode.HT]: "Haiti",
  [TuiCountryIsoCode.HU]: "Hungary",
  [TuiCountryIsoCode.ID]: "Indonesia",
  [TuiCountryIsoCode.IE]: "Ireland",
  [TuiCountryIsoCode.IL]: "Israel",
  [TuiCountryIsoCode.IN]: "India",
  [TuiCountryIsoCode.IQ]: "Iraq",
  [TuiCountryIsoCode.IR]: "Iran",
  [TuiCountryIsoCode.IS]: "Iceland",
  [TuiCountryIsoCode.IT]: "Itali",
  [TuiCountryIsoCode.JM]: "Jamaica",
  [TuiCountryIsoCode.JO]: "Jordan",
  [TuiCountryIsoCode.JP]: "Jepun",
  [TuiCountryIsoCode.KE]: "Kenya",
  [TuiCountryIsoCode.KG]: "Kyrgyzstan",
  [TuiCountryIsoCode.KH]: "Kemboja",
  [TuiCountryIsoCode.KM]: "Comoros",
  [TuiCountryIsoCode.KN]: "Saint Kitts dan Nevis",
  [TuiCountryIsoCode.KP]: "Korea Utara",
  [TuiCountryIsoCode.KR]: "Korea Selatan",
  [TuiCountryIsoCode.KW]: "Kuwait",
  [TuiCountryIsoCode.KY]: "kepulauan Cayman",
  [TuiCountryIsoCode.KZ]: "Kazakhstan",
  [TuiCountryIsoCode.LA]: "Laos",
  [TuiCountryIsoCode.LB]: "Lubnan",
  [TuiCountryIsoCode.LC]: "Saint Lucia",
  [TuiCountryIsoCode.LI]: "Liechtenstein",
  [TuiCountryIsoCode.LK]: "Sri Lanka",
  [TuiCountryIsoCode.LR]: "Liberia",
  [TuiCountryIsoCode.LS]: "Lesotho",
  [TuiCountryIsoCode.LT]: "Lithuania",
  [TuiCountryIsoCode.LU]: "Luxembourg",
  [TuiCountryIsoCode.LV]: "Latvia",
  [TuiCountryIsoCode.LY]: "Libya",
  [TuiCountryIsoCode.MA]: "Maghribi",
  [TuiCountryIsoCode.MC]: "Monaco",
  [TuiCountryIsoCode.MD]: "Moldova",
  [TuiCountryIsoCode.ME]: "Montenegro",
  [TuiCountryIsoCode.MQ]: "Martinique",
  [TuiCountryIsoCode.MG]: "Madagascar",
  [TuiCountryIsoCode.MK]: "Republik Macedonia",
  [TuiCountryIsoCode.ML]: "Mali",
  [TuiCountryIsoCode.MM]: "Burma (Myanmar)",
  [TuiCountryIsoCode.MN]: "Mongolia",
  [TuiCountryIsoCode.MO]: "Macau",
  [TuiCountryIsoCode.RE]: "Réunion",
  [TuiCountryIsoCode.MR]: "Mauritania",
  [TuiCountryIsoCode.MS]: "Montserrat",
  [TuiCountryIsoCode.MT]: "Malta",
  [TuiCountryIsoCode.MU]: "Mauritius",
  [TuiCountryIsoCode.MV]: "Maldives",
  [TuiCountryIsoCode.MW]: "Malawi",
  [TuiCountryIsoCode.MX]: "Mexico",
  [TuiCountryIsoCode.MY]: "Malaysia",
  [TuiCountryIsoCode.MZ]: "Mozambique",
  [TuiCountryIsoCode.NA]: "Namibia",
  [TuiCountryIsoCode.NC]: "New Caledonia",
  [TuiCountryIsoCode.NE]: "Niger",
  [TuiCountryIsoCode.NG]: "Nigeria",
  [TuiCountryIsoCode.NI]: "Nicaragua",
  [TuiCountryIsoCode.NL]: "Belanda",
  [TuiCountryIsoCode.NO]: "Norway",
  [TuiCountryIsoCode.NP]: "Nepal",
  [TuiCountryIsoCode.NZ]: "New Zealand",
  [TuiCountryIsoCode.OM]: "Oman",
  [TuiCountryIsoCode.PA]: "Panama",
  [TuiCountryIsoCode.PE]: "Peru",
  [TuiCountryIsoCode.PF]: "French Polynesia (Tahiti)",
  [TuiCountryIsoCode.PG]: "Papua New Guinea",
  [TuiCountryIsoCode.PH]: "Filipina",
  [TuiCountryIsoCode.PK]: "Pakistan",
  [TuiCountryIsoCode.PL]: "Poland",
  [TuiCountryIsoCode.PT]: "Portugal",
  [TuiCountryIsoCode.PW]: "Palau",
  [TuiCountryIsoCode.PY]: "Paraguay",
  [TuiCountryIsoCode.QA]: "Qatar",
  [TuiCountryIsoCode.YT]: "Mayotte",
  [TuiCountryIsoCode.RO]: "Romania",
  [TuiCountryIsoCode.RS]: "Serbia",
  [TuiCountryIsoCode.RU]: "Russia",
  [TuiCountryIsoCode.RW]: "Rwanda",
  [TuiCountryIsoCode.SA]: "Arab Saudi",
  [TuiCountryIsoCode.SB]: "Kepulauan Solomon",
  [TuiCountryIsoCode.SC]: "Seychelles",
  [TuiCountryIsoCode.SD]: "Sudan",
  [TuiCountryIsoCode.SE]: "Sweden",
  [TuiCountryIsoCode.SG]: "Singapura",
  [TuiCountryIsoCode.SH]: "Saint Helena",
  [TuiCountryIsoCode.SI]: "Slovenia",
  [TuiCountryIsoCode.SK]: "Slovakia",
  [TuiCountryIsoCode.SL]: "Sierra Leone",
  [TuiCountryIsoCode.SM]: "San Marino",
  [TuiCountryIsoCode.SN]: "Senegal",
  [TuiCountryIsoCode.SO]: "Somalia",
  [TuiCountryIsoCode.SR]: "Suriname",
  [TuiCountryIsoCode.ST]: "Sao Tome dan Principe",
  [TuiCountryIsoCode.SV]: "El Salvador",
  [TuiCountryIsoCode.SX]: "Sint Maarten",
  [TuiCountryIsoCode.SY]: "Republik Arab Syria",
  [TuiCountryIsoCode.SZ]: "Swaziland",
  [TuiCountryIsoCode.TC]: "Turki dan Caicos",
  [TuiCountryIsoCode.TD]: "Chad",
  [TuiCountryIsoCode.TG]: "Togo",
  [TuiCountryIsoCode.TH]: "Thailand",
  [TuiCountryIsoCode.TJ]: "Tajikistan",
  [TuiCountryIsoCode.TL]: "Timor Timur",
  [TuiCountryIsoCode.TM]: "Turkmenistan",
  [TuiCountryIsoCode.TN]: "Tunisia",
  [TuiCountryIsoCode.TO]: "Tonga",
  [TuiCountryIsoCode.TR]: "Turki",
  [TuiCountryIsoCode.TT]: "Trinidad dan Tobago",
  [TuiCountryIsoCode.TW]: "Taiwan",
  [TuiCountryIsoCode.TZ]: "Tanzania",
  [TuiCountryIsoCode.UA]: "Ukraine",
  [TuiCountryIsoCode.UG]: "Uganda",
  [TuiCountryIsoCode.US]: "Amerika Syarikat",
  [TuiCountryIsoCode.UY]: "Uruguay",
  [TuiCountryIsoCode.UZ]: "Uzbekistan",
  [TuiCountryIsoCode.VC]: "Saint Vincent dan Grenadines",
  [TuiCountryIsoCode.VE]: "Venezuela",
  [TuiCountryIsoCode.VG]: "British Virgin Islands",
  [TuiCountryIsoCode.VN]: "Vietnam",
  [TuiCountryIsoCode.VU]: "Vanuatu",
  [TuiCountryIsoCode.WS]: "Samoa",
  [TuiCountryIsoCode.XK]: "Kosovo",
  [TuiCountryIsoCode.YE]: "Yaman",
  [TuiCountryIsoCode.ZA]: "Afrika Selatan",
  [TuiCountryIsoCode.ZM]: "Zambia",
  [TuiCountryIsoCode.ZW]: "Zimbabwe"
};
var TUI_MALAY_LANGUAGE_CORE = {
  months: [
    "Januari",
    "Februari",
    "Mac",
    "April",
    "Mei",
    "Jun",
    "Julai",
    "Ogos",
    "September",
    "Oktober",
    "November",
    "Disember"
  ],
  close: "Tutup",
  nothingFoundMessage: "Tiada apa-apa Dijumpai",
  defaultErrorMessage: "Nilai tidak sah",
  spinTexts: ["Sebelum", "Selepas"],
  shortWeekDays: ["Isn", "Sel", "Rab", "Kha", "Jum", "Sab", "Ahd"],
  countries: TUI_MALAY_LANGUAGE_COUNTRIES
};
var TUI_MALAY_LANGUAGE_KIT = {
  cancel: "Batal",
  done: "selesai",
  more: "Lebih",
  otherDate: "Tarikh lain...",
  showAll: "Tunjukkan semua",
  hide: "Sembunyi",
  mobileCalendarTexts: ["Pilih hari", "Pilih julat", "Pilih hari"],
  range: ["dari", "ke"],
  countTexts: ["Tambah", "Tolak"],
  time: {
    "HH:MM": "HH:MM",
    "HH:MM:SS": "HH:MM:SS",
    "HH:MM:SS.MSS": "HH:MM:SS.MSS"
  },
  dateTexts: {
    DMY: "dd.mm.yyyy",
    MDY: "mm.dd.yyyy",
    YMD: "yyyy.mm.dd"
  },
  digitalInformationUnits: ["B", "KiB", "MiB"],
  passwordTexts: ["Tunjukkan kata laluan", "Sembunyikan kata laluan"],
  copyTexts: ["Salin", "Disalin"],
  shortCalendarMonths: [
    "Jan",
    "Feb",
    "Mac",
    "Apr",
    "Mei",
    "Jun",
    "Jul",
    "Ogo",
    "Sep",
    "Okt",
    "Nov",
    "Dis"
  ],
  pagination: ["Halaman sebelumnya", "Halaman seterusnya"],
  fileTexts: {
    loadingError: "Muatnaik gagal",
    preview: "Pratonton",
    remove: "Alih keluar"
  },
  inputFileTexts: {
    defaultLabelSingle: "atau lepaskan di sini",
    defaultLabelMultiple: "atau lepaskan mereka di sini",
    defaultLinkSingle: "Pilih sebuah fail",
    defaultLinkMultiple: "Pilih fail",
    maxSizeRejectionReason: "Fail terlalu besar",
    formatRejectionReason: "Jenis fail salah",
    drop: "Lepaskan fail di sini",
    dropMultiple: "Lepaskan fail di sini"
  },
  multiSelectTexts: {
    all: "Pilih semua",
    none: "pilih tiada"
  },
  prompt: {
    yes: "Ya",
    no: "tidak"
  }
};
var TUI_MALAY_LANGUAGE = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({ name: "malay" }, TUI_MALAY_LANGUAGE_CORE), TUI_MALAY_LANGUAGE_KIT), TUI_MALAY_LANGUAGE_ADDON_TABLE), TUI_MALAY_LANGUAGE_ADDON_COMMERCE), TUI_MALAY_LANGUAGE_ADDON_EDITOR), TUI_MALAY_LANGUAGE_ADDON_PREVIEW);

// node_modules/@taiga-ui/i18n/fesm2015/taiga-ui-i18n-languages-polish.js
var TUI_POLISH_LANGUAGE_ADDON_COMMERCE = {
  cardNumber: ["Numer", "Numer karty"],
  cardExpiry: ["Wygasa", "Data ważności"]
};
var TUI_POLISH_LANGUAGE_ADDON_EDITOR = {
  colorSelectorModeNames: ["Kolor", "Gradient"],
  toolbarTools: {
    undo: "Cofnij",
    redo: "Ponów",
    font: "Czcionka",
    fontStyle: "Styl czcionki",
    fontSize: "Rozmiar czcionki",
    bold: "Pogrubienie",
    italic: "Kursywa",
    underline: "Podkreślenie",
    strikeThrough: "Przekreślenie",
    justify: "Wyrównanie",
    justifyLeft: "Wyrównanie do lewej",
    justifyCenter: "Wyrównanie do środka",
    justifyRight: "Wyrównanie do prawej",
    justifyFull: "Justowanie",
    list: "Lista",
    indent: "Zwiększ wcięcie",
    outdent: "Zmniejsz wcięcie",
    unorderedList: "Lista punktowana",
    orderedList: "Lista numerowana",
    quote: "Cytat",
    foreColor: "Kolor tekstu",
    backColor: "Kolor tła",
    hiliteColor: "Kolor zaznaczenia",
    clear: "Wyczyść",
    link: "Link",
    attach: "Załącz plik",
    tex: "Wstaw wzór",
    code: "Kod",
    image: "Wstaw ilustrację",
    insertHorizontalRule: "Wstaw separator",
    superscript: "Indeks górny",
    subscript: "Indeks dolny",
    insertTable: "Wstaw tabelę",
    insertGroup: "Insert group",
    hiliteGroup: "Hilite group",
    removeGroup: "Remove group",
    insertAnchor: "Insert anchor",
    mergeCells: "Scal komórki",
    splitCells: "Podziel komórki",
    rowsColumnsManaging: "Zarządzaj wierszami i kolumnami",
    cellColor: "Kolor komórki",
    setDetails: "Details",
    removeDetails: "Remove details"
  },
  editorEditLink: {
    urlExample: "example.com",
    anchorExample: "anchor"
  },
  editorTableCommands: [
    ["Wstaw kolumnę przed", "Wstaw kolumnę po"],
    ["Wstaw wiersz przed", "Wstaw wiersz po"],
    ["Usuń kolumnę", "Usuń wiersz"]
  ],
  editorCodeOptions: ["Kod w tekście", "Kod w bloku"],
  editorFontOptions: {
    small: "Small",
    normal: "Normalny",
    large: "Large",
    title: "Tytuł",
    subtitle: "Podtytuł"
  }
};
var TUI_POLISH_LANGUAGE_ADDON_PREVIEW = {
  previewTexts: {
    rotate: "Rotate"
  },
  zoomTexts: {
    zoomOut: "Zoom out",
    zoomIn: "Zoom in",
    reset: "Reset"
  }
};
var TUI_POLISH_LANGUAGE_ADDON_TABLE = {
  showHideText: "Pokaż/Ukryj",
  paginationTexts: {
    pages: "Strony",
    linesPerPage: "Wierszy na stronę",
    of: "z"
  }
};
var TUI_POLISH_LANGUAGE_COUNTRIES = {
  [TuiCountryIsoCode.AD]: "Andora",
  [TuiCountryIsoCode.AE]: "Zjednoczone Emiraty Arabskie",
  [TuiCountryIsoCode.AF]: "Afganistan",
  [TuiCountryIsoCode.AG]: "Antigua i Barbuda",
  [TuiCountryIsoCode.AI]: "Anguilla",
  [TuiCountryIsoCode.AL]: "Albania",
  [TuiCountryIsoCode.AM]: "Armenia",
  [TuiCountryIsoCode.AO]: "Angola",
  [TuiCountryIsoCode.AR]: "Argentyna",
  [TuiCountryIsoCode.AT]: "Austria",
  [TuiCountryIsoCode.AU]: "Australia",
  [TuiCountryIsoCode.AW]: "Aruba",
  [TuiCountryIsoCode.AZ]: "Azerbejdżan",
  [TuiCountryIsoCode.BA]: "Bośnia i Hercegowina",
  [TuiCountryIsoCode.BB]: "Barbados",
  [TuiCountryIsoCode.BD]: "Bangladesz",
  [TuiCountryIsoCode.BE]: "Belgia",
  [TuiCountryIsoCode.BF]: "Burkina Faso",
  [TuiCountryIsoCode.BG]: "Bułgaria",
  [TuiCountryIsoCode.BH]: "Bahrajn",
  [TuiCountryIsoCode.BI]: "Burundi",
  [TuiCountryIsoCode.BJ]: "Benin",
  [TuiCountryIsoCode.BL]: "Święty Barthélemy",
  [TuiCountryIsoCode.BM]: "Bermudy",
  [TuiCountryIsoCode.BN]: "Brunei",
  [TuiCountryIsoCode.BO]: "Boliwia",
  [TuiCountryIsoCode.BQ]: "Bonaire, Sint Eustatius i Saba",
  [TuiCountryIsoCode.BR]: "Brazylia",
  [TuiCountryIsoCode.BS]: "Bahamy",
  [TuiCountryIsoCode.BT]: "Bhutan",
  [TuiCountryIsoCode.BW]: "Botswana",
  [TuiCountryIsoCode.BY]: "Białoruś",
  [TuiCountryIsoCode.BZ]: "Belize",
  [TuiCountryIsoCode.CA]: "Kanada",
  [TuiCountryIsoCode.CD]: "Demokratyczna Republika Konga",
  [TuiCountryIsoCode.CF]: "Republika Środkowoafrykańska",
  [TuiCountryIsoCode.CG]: "Kongo",
  [TuiCountryIsoCode.CH]: "Szwajcaria",
  [TuiCountryIsoCode.CI]: "Wybrzeże Kości Słoniowej",
  [TuiCountryIsoCode.CL]: "Chile",
  [TuiCountryIsoCode.CM]: "Kamerun",
  [TuiCountryIsoCode.CN]: "Chiny",
  [TuiCountryIsoCode.CO]: "Kolumbia",
  [TuiCountryIsoCode.CR]: "Kostaryka",
  [TuiCountryIsoCode.CU]: "Kuba",
  [TuiCountryIsoCode.CV]: "Republika Zielonego Przylądka",
  [TuiCountryIsoCode.CW]: "Curaçao",
  [TuiCountryIsoCode.CY]: "Cypr",
  [TuiCountryIsoCode.CZ]: "Czechy",
  [TuiCountryIsoCode.DE]: "Niemcy",
  [TuiCountryIsoCode.DJ]: "Dżibuti ",
  [TuiCountryIsoCode.DK]: "Dania",
  [TuiCountryIsoCode.DM]: "Dominika",
  [TuiCountryIsoCode.DO]: "Dominikana",
  [TuiCountryIsoCode.DZ]: "Algieria",
  [TuiCountryIsoCode.EC]: "Ekwador",
  [TuiCountryIsoCode.EE]: "Estonia",
  [TuiCountryIsoCode.EG]: "Egipt",
  [TuiCountryIsoCode.ER]: "Erytrea",
  [TuiCountryIsoCode.ES]: "Hiszpania",
  [TuiCountryIsoCode.ET]: "Etiopia",
  [TuiCountryIsoCode.FI]: "Finlandia",
  [TuiCountryIsoCode.FJ]: "Fidżi",
  [TuiCountryIsoCode.FK]: "Falklandy",
  [TuiCountryIsoCode.FM]: "Mikronezja",
  [TuiCountryIsoCode.FR]: "Francja",
  [TuiCountryIsoCode.GA]: "Gabon",
  [TuiCountryIsoCode.GB]: "Wielka Brytania",
  [TuiCountryIsoCode.GD]: "Grenada",
  [TuiCountryIsoCode.GE]: "Gruzja",
  [TuiCountryIsoCode.GF]: "Gujana",
  [TuiCountryIsoCode.GH]: "Ghana",
  [TuiCountryIsoCode.GI]: "Gibraltar",
  [TuiCountryIsoCode.GL]: "Grenlandia",
  [TuiCountryIsoCode.GM]: "Gambia",
  [TuiCountryIsoCode.GN]: "Gwinea",
  [TuiCountryIsoCode.GP]: "Gwadelupa",
  [TuiCountryIsoCode.GQ]: "Gwinea Równikowa",
  [TuiCountryIsoCode.GR]: "Grecja",
  [TuiCountryIsoCode.GT]: "Gwatemala",
  [TuiCountryIsoCode.GW]: "Gwinea Bissau",
  [TuiCountryIsoCode.GY]: "Gujana",
  [TuiCountryIsoCode.HK]: "Hongkong",
  [TuiCountryIsoCode.HN]: "Honduras",
  [TuiCountryIsoCode.HR]: "Chorwacja",
  [TuiCountryIsoCode.HT]: "Haiti",
  [TuiCountryIsoCode.HU]: "Węgry",
  [TuiCountryIsoCode.ID]: "Indonezja",
  [TuiCountryIsoCode.IE]: "Irlandia",
  [TuiCountryIsoCode.IL]: "Izrael",
  [TuiCountryIsoCode.IN]: "Indie",
  [TuiCountryIsoCode.IQ]: "Irak",
  [TuiCountryIsoCode.IR]: "Iran",
  [TuiCountryIsoCode.IS]: "Islandia",
  [TuiCountryIsoCode.IT]: "Włochy",
  [TuiCountryIsoCode.JM]: "Jamajka",
  [TuiCountryIsoCode.JO]: "Jordania",
  [TuiCountryIsoCode.JP]: "Japonia",
  [TuiCountryIsoCode.KE]: "Kenia",
  [TuiCountryIsoCode.KG]: "Kirgistan",
  [TuiCountryIsoCode.KH]: "Kambodża",
  [TuiCountryIsoCode.KM]: "Komory",
  [TuiCountryIsoCode.KN]: "Saint Kitts i Nevis",
  [TuiCountryIsoCode.KP]: "Korea Północna",
  [TuiCountryIsoCode.KR]: "Korea Południowa",
  [TuiCountryIsoCode.KW]: "Kuwejt",
  [TuiCountryIsoCode.KY]: "Kajmany",
  [TuiCountryIsoCode.KZ]: "Kazachstan",
  [TuiCountryIsoCode.LA]: "Laos",
  [TuiCountryIsoCode.LB]: "Liban",
  [TuiCountryIsoCode.LC]: "Saint Lucia",
  [TuiCountryIsoCode.LI]: "Liechtenstein",
  [TuiCountryIsoCode.LK]: "Sri Lanka",
  [TuiCountryIsoCode.LR]: "Liberia",
  [TuiCountryIsoCode.LS]: "Lesotho",
  [TuiCountryIsoCode.LT]: "Litwa",
  [TuiCountryIsoCode.LU]: "Luksemburg",
  [TuiCountryIsoCode.LV]: "Łotwa",
  [TuiCountryIsoCode.LY]: "Libia",
  [TuiCountryIsoCode.MA]: "Maroko",
  [TuiCountryIsoCode.MC]: "Monako",
  [TuiCountryIsoCode.MD]: "Mołdawia",
  [TuiCountryIsoCode.ME]: "Czarnogóra",
  [TuiCountryIsoCode.MF]: "Święty Marcin",
  [TuiCountryIsoCode.MG]: "Madagaskar",
  [TuiCountryIsoCode.MK]: "Macedonia",
  [TuiCountryIsoCode.ML]: "Mali",
  [TuiCountryIsoCode.MM]: "Mjanma (Birma)",
  [TuiCountryIsoCode.MN]: "Mongolia",
  [TuiCountryIsoCode.MO]: "Makau",
  [TuiCountryIsoCode.MQ]: "Martynika",
  [TuiCountryIsoCode.MR]: "Mauretania",
  [TuiCountryIsoCode.MS]: "Montserrat",
  [TuiCountryIsoCode.MT]: "Malta",
  [TuiCountryIsoCode.MU]: "Mauritius",
  [TuiCountryIsoCode.MV]: "Malediwy",
  [TuiCountryIsoCode.MW]: "Malawi",
  [TuiCountryIsoCode.MX]: "Meksyk",
  [TuiCountryIsoCode.MY]: "Malezja",
  [TuiCountryIsoCode.MZ]: "Mozambik",
  [TuiCountryIsoCode.NA]: "Namibia",
  [TuiCountryIsoCode.NC]: "Nowa Kaledonia",
  [TuiCountryIsoCode.NE]: "Niger",
  [TuiCountryIsoCode.NG]: "Nigeria",
  [TuiCountryIsoCode.NI]: "Nikaragua",
  [TuiCountryIsoCode.NL]: "Holandia",
  [TuiCountryIsoCode.NO]: "Norwegia",
  [TuiCountryIsoCode.NP]: "Nepal",
  [TuiCountryIsoCode.NZ]: "Nowa Zelandia",
  [TuiCountryIsoCode.OM]: "Oman",
  [TuiCountryIsoCode.PA]: "Panama",
  [TuiCountryIsoCode.PE]: "Peru",
  [TuiCountryIsoCode.PF]: "Polinezja Francuska",
  [TuiCountryIsoCode.PG]: "Papua-Nowa Gwinea",
  [TuiCountryIsoCode.PH]: "Filipiny",
  [TuiCountryIsoCode.PK]: "Pakistan",
  [TuiCountryIsoCode.PL]: "Polska",
  [TuiCountryIsoCode.PT]: "Portugalia",
  [TuiCountryIsoCode.PW]: "Palau",
  [TuiCountryIsoCode.PY]: "Paragwaj",
  [TuiCountryIsoCode.QA]: "Katar",
  [TuiCountryIsoCode.RE]: "Posiedzenie",
  [TuiCountryIsoCode.RO]: "Rumunia",
  [TuiCountryIsoCode.RS]: "Serbia",
  [TuiCountryIsoCode.RU]: "Rosja",
  [TuiCountryIsoCode.RW]: "Rwanda",
  [TuiCountryIsoCode.SA]: "Arabia Saudyjska",
  [TuiCountryIsoCode.SB]: "Wyspy Salomona",
  [TuiCountryIsoCode.SC]: "Seszele",
  [TuiCountryIsoCode.SD]: "Sudan",
  [TuiCountryIsoCode.SE]: "Szwecja",
  [TuiCountryIsoCode.SG]: "Singapur",
  [TuiCountryIsoCode.SH]: "Wyspa Świętej Heleny",
  [TuiCountryIsoCode.SI]: "Słowenia",
  [TuiCountryIsoCode.SK]: "Słowacja",
  [TuiCountryIsoCode.SL]: "Sierra Leone",
  [TuiCountryIsoCode.SM]: "San Marino",
  [TuiCountryIsoCode.SN]: "Senegal",
  [TuiCountryIsoCode.SO]: "Somalia",
  [TuiCountryIsoCode.SR]: "Surinam",
  [TuiCountryIsoCode.ST]: "Wyspy Świętego Tomasza i Książęca",
  [TuiCountryIsoCode.SV]: "Salwador",
  [TuiCountryIsoCode.SX]: "Sint Maarten",
  [TuiCountryIsoCode.SY]: "Syria",
  [TuiCountryIsoCode.SZ]: "Eswatini",
  [TuiCountryIsoCode.TC]: "Turks i Caicos",
  [TuiCountryIsoCode.TD]: "Czad",
  [TuiCountryIsoCode.TG]: "Togo",
  [TuiCountryIsoCode.TH]: "Tajlandia",
  [TuiCountryIsoCode.TJ]: "Tadżykistan",
  [TuiCountryIsoCode.TL]: "Timor Wschodni",
  [TuiCountryIsoCode.TM]: "Turkmenistan",
  [TuiCountryIsoCode.TN]: "Tunezja",
  [TuiCountryIsoCode.TO]: "Tonga",
  [TuiCountryIsoCode.TR]: "Turcja",
  [TuiCountryIsoCode.TT]: "Trynidad i Tobago",
  [TuiCountryIsoCode.TW]: "Tajwan",
  [TuiCountryIsoCode.TZ]: "Tanzania",
  [TuiCountryIsoCode.UA]: "Ukraina",
  [TuiCountryIsoCode.UG]: "Uganda",
  [TuiCountryIsoCode.US]: "Stany Zjednoczone",
  [TuiCountryIsoCode.UY]: "Urugwaj",
  [TuiCountryIsoCode.UZ]: "Uzbekistan",
  [TuiCountryIsoCode.VC]: "Saint Vincent i Grenadyny",
  [TuiCountryIsoCode.VE]: "Wenezuela",
  [TuiCountryIsoCode.VG]: "Brytyjskie Wyspy Dziewicze",
  [TuiCountryIsoCode.VN]: "Wietnam",
  [TuiCountryIsoCode.VU]: "Vanuatu",
  [TuiCountryIsoCode.WS]: "Samoa",
  [TuiCountryIsoCode.XK]: "Kosovo",
  [TuiCountryIsoCode.YE]: "Jemen",
  [TuiCountryIsoCode.YT]: "Majotta",
  [TuiCountryIsoCode.ZA]: "Republika Południowej Afryki",
  [TuiCountryIsoCode.ZM]: "Zambia",
  [TuiCountryIsoCode.ZW]: "Zimbabwe"
};
var TUI_POLISH_LANGUAGE_CORE = {
  months: [
    "styczeń",
    "luty",
    "marzec",
    "kwiecień",
    "maj",
    "czerwiec",
    "lipiec",
    "sierpień",
    "wrzesień",
    "październik",
    "listopad",
    "grudzień"
  ],
  close: "Zamknij",
  nothingFoundMessage: "Nic nie znaleziono",
  defaultErrorMessage: "Nieprawidłowa wartość",
  spinTexts: ["Poprzedni", "Następny"],
  shortWeekDays: ["Pon", "Wt", "Śr", "Czw", "Pt", "Sob", "Nie"],
  countries: TUI_POLISH_LANGUAGE_COUNTRIES
};
var TUI_POLISH_LANGUAGE_KIT = {
  cancel: "Anuluj",
  done: "Gotowe",
  more: "Więcej",
  otherDate: "Inna data...",
  showAll: "Show all",
  hide: "Hide",
  mobileCalendarTexts: ["Wybierz dzień", "Wybierz zakres", "Wybierz dni"],
  range: ["od", "do"],
  countTexts: ["Plus", "Minus"],
  time: {
    "HH:MM": "HH:MM",
    "HH:MM:SS": "HH:MM:SS",
    "HH:MM:SS.MSS": "HH:MM:SS.MSS"
  },
  dateTexts: {
    DMY: "dd.mm.rrrr",
    MDY: "mm.dd.rrrr",
    YMD: "rrrr.mm.dd"
  },
  digitalInformationUnits: ["B", "KiB", "MiB"],
  passwordTexts: ["Pokaż hasło", "Ukryj hasło"],
  copyTexts: ["Kopiuj", "Skopiowano"],
  shortCalendarMonths: [
    "Sty",
    "Lut",
    "Mar",
    "Kwi",
    "Maj",
    "Cze",
    "Lip",
    "Sie",
    "Wrz",
    "Paź",
    "Lis",
    "Gru"
  ],
  pagination: ["Poprzednia strona", "Następna strona"],
  fileTexts: {
    loadingError: "Błąd ładowania",
    preview: "Podgląd",
    remove: "Usuń"
  },
  inputFileTexts: {
    defaultLabelSingle: "lub przeciągnij tutaj",
    defaultLabelMultiple: "lub przeciągnij tutaj",
    defaultLinkSingle: "Wybierz plik",
    defaultLinkMultiple: "Wybierz pliki",
    maxSizeRejectionReason: "Plik przekracza rozmiar ",
    formatRejectionReason: "Nieprawidłowy format pliku",
    drop: "Przeciągnij plik tutaj",
    dropMultiple: "Przeciągnij pliki tutaj"
  },
  multiSelectTexts: {
    all: "Zaznacz wszystko",
    none: "Nie zaznaczaj"
  },
  prompt: {
    yes: "Tak",
    no: "Nie"
  }
};
var TUI_POLISH_LANGUAGE = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({ name: "polish" }, TUI_POLISH_LANGUAGE_CORE), TUI_POLISH_LANGUAGE_KIT), TUI_POLISH_LANGUAGE_ADDON_TABLE), TUI_POLISH_LANGUAGE_ADDON_COMMERCE), TUI_POLISH_LANGUAGE_ADDON_EDITOR), TUI_POLISH_LANGUAGE_ADDON_PREVIEW);

// node_modules/@taiga-ui/i18n/fesm2015/taiga-ui-i18n-languages-portuguese.js
var TUI_PORTUGUESE_LANGUAGE_ADDON_COMMERCE = {
  cardNumber: ["Número", "Número do Cartão"],
  cardExpiry: ["Validade", "Validade do Cartão"]
};
var TUI_PORTUGUESE_LANGUAGE_ADDON_EDITOR = {
  colorSelectorModeNames: ["Cor sólida", "Gradiente"],
  toolbarTools: {
    undo: "Desfazer",
    redo: "Refazer",
    font: "Fonte",
    fontStyle: "Estilo da Fonte",
    fontSize: "Tamanho da Fonte",
    bold: "Negrito",
    italic: "Itálico",
    underline: "Sublinhado",
    strikeThrough: "Riscado",
    justify: "Justificado",
    justifyLeft: "Justificado à esquerda",
    justifyCenter: "Justificado ao centro",
    justifyRight: "Justificado à direita",
    justifyFull: "Totalmente justificado",
    list: "Lista",
    indent: "Recuo interno",
    outdent: "Recuo externo",
    unorderedList: "Lista desordenada",
    orderedList: "Lista ordenada",
    quote: "Frase",
    foreColor: "Cor",
    backColor: "Cor de fundo",
    hiliteColor: "Cor destaque",
    clear: "Limpar",
    link: "Link",
    attach: "Anexar arquivo",
    tex: "Inserir TeX",
    code: "Código",
    image: "Inserir imagem",
    insertHorizontalRule: "Inserir regra horizontal",
    superscript: "Superscript",
    subscript: "Subscript",
    insertTable: "Insert table",
    hiliteGroup: "Hilite group",
    insertGroup: "Insert group",
    removeGroup: "Remove group",
    insertAnchor: "Insert anchor",
    mergeCells: "Merge cells",
    splitCells: "Split cells",
    rowsColumnsManaging: "Managing rows and columns",
    cellColor: "Cell color",
    setDetails: "Details",
    removeDetails: "Remove details"
  },
  editorEditLink: {
    urlExample: "example.com",
    anchorExample: "anchor"
  },
  editorTableCommands: [
    ["Insert column before", "Insert column after"],
    ["Insert row before", "Insert row after"],
    ["Delete column", "Delete row"]
  ],
  editorCodeOptions: ["Code in the text", "Code in block"],
  editorFontOptions: {
    small: "Small",
    normal: "Normal",
    large: "Large",
    title: "Title",
    subtitle: "Subtitle"
  }
};
var TUI_PORTUGUESE_LANGUAGE_ADDON_PREVIEW = {
  previewTexts: {
    rotate: "Rotate"
  },
  zoomTexts: {
    zoomOut: "Zoom out",
    zoomIn: "Zoom in",
    reset: "Reset"
  }
};
var TUI_PORTUGUESE_LANGUAGE_ADDON_TABLE = {
  showHideText: "Mostrar/Esconder",
  paginationTexts: {
    pages: "Páginas",
    linesPerPage: "Linhas por página",
    of: "de"
  }
};
var TUI_PORTUGUESE_LANGUAGE_COUNTRIES = {
  [TuiCountryIsoCode.AD]: "Andorra",
  [TuiCountryIsoCode.AE]: "Emirados Árabes Unidos",
  [TuiCountryIsoCode.AF]: "Afeganistão",
  [TuiCountryIsoCode.AG]: "Antígua e Barbuda",
  [TuiCountryIsoCode.AI]: "Anguila",
  [TuiCountryIsoCode.AL]: "Albânia",
  [TuiCountryIsoCode.AM]: "Armênia",
  [TuiCountryIsoCode.AO]: "Angola",
  [TuiCountryIsoCode.AR]: "Argentina",
  [TuiCountryIsoCode.AT]: "Áustria",
  [TuiCountryIsoCode.AU]: "Austrália",
  [TuiCountryIsoCode.AW]: "Aruba",
  [TuiCountryIsoCode.AZ]: "Azerbaijão",
  [TuiCountryIsoCode.BA]: "Bósnia e Herzegovina",
  [TuiCountryIsoCode.BB]: "Barbados",
  [TuiCountryIsoCode.BD]: "Bangladesh",
  [TuiCountryIsoCode.BE]: "Bélgica",
  [TuiCountryIsoCode.BF]: "Burkina Faso",
  [TuiCountryIsoCode.BG]: "Bulgária",
  [TuiCountryIsoCode.BH]: "Bahréin",
  [TuiCountryIsoCode.BI]: "Burundi",
  [TuiCountryIsoCode.BJ]: "Benín",
  [TuiCountryIsoCode.BL]: "São Bartolomeu",
  [TuiCountryIsoCode.BM]: "Bermudas",
  [TuiCountryIsoCode.BN]: "Brunéi",
  [TuiCountryIsoCode.BO]: "Bolívia",
  [TuiCountryIsoCode.BQ]: "Bonaire, Santo Eustáquio e Saba",
  [TuiCountryIsoCode.BR]: "Brasil",
  [TuiCountryIsoCode.BS]: "Bahamas",
  [TuiCountryIsoCode.BT]: "Butão",
  [TuiCountryIsoCode.BW]: "Botsuana",
  [TuiCountryIsoCode.BY]: "Bielorrusia",
  [TuiCountryIsoCode.BZ]: "Belice",
  [TuiCountryIsoCode.CA]: "Canadá",
  [TuiCountryIsoCode.CD]: "República Democrática do Congo",
  [TuiCountryIsoCode.CF]: "República Centro-Africana",
  [TuiCountryIsoCode.CG]: "Congo",
  [TuiCountryIsoCode.CH]: "Suiça",
  [TuiCountryIsoCode.CI]: "Costa do Marfim",
  [TuiCountryIsoCode.CL]: "Chile",
  [TuiCountryIsoCode.CM]: "Camarões",
  [TuiCountryIsoCode.CN]: "China",
  [TuiCountryIsoCode.CO]: "Colombia",
  [TuiCountryIsoCode.CR]: "Costa Rica",
  [TuiCountryIsoCode.CU]: "Cuba",
  [TuiCountryIsoCode.CV]: "Cabo Verde",
  [TuiCountryIsoCode.CW]: "Curaçau",
  [TuiCountryIsoCode.CY]: "Chipre",
  [TuiCountryIsoCode.CZ]: "República Checa",
  [TuiCountryIsoCode.DE]: "Alemanha",
  [TuiCountryIsoCode.DJ]: "Yibuti",
  [TuiCountryIsoCode.DK]: "Dinamarca",
  [TuiCountryIsoCode.DM]: "Dominica",
  [TuiCountryIsoCode.DO]: "República Dominicana",
  [TuiCountryIsoCode.DZ]: "Algeria",
  [TuiCountryIsoCode.EC]: "Equador",
  [TuiCountryIsoCode.EE]: "Estônia",
  [TuiCountryIsoCode.EG]: "Egito",
  [TuiCountryIsoCode.ER]: "Eritreia",
  [TuiCountryIsoCode.ES]: "Espanha",
  [TuiCountryIsoCode.ET]: "Etiópia",
  [TuiCountryIsoCode.FI]: "Finlândia",
  [TuiCountryIsoCode.FJ]: "Fiyi",
  [TuiCountryIsoCode.FK]: "Ilhas Malvinas",
  [TuiCountryIsoCode.FM]: "Micronesia",
  [TuiCountryIsoCode.FR]: "França",
  [TuiCountryIsoCode.GA]: "Gabão",
  [TuiCountryIsoCode.GB]: "Reino Unido",
  [TuiCountryIsoCode.GD]: "Granada",
  [TuiCountryIsoCode.GE]: "Georgia",
  [TuiCountryIsoCode.GF]: "Guiana",
  [TuiCountryIsoCode.GH]: "Gana",
  [TuiCountryIsoCode.GI]: "Gibraltar",
  [TuiCountryIsoCode.GL]: "Groenlândia",
  [TuiCountryIsoCode.GM]: "Gambia",
  [TuiCountryIsoCode.GN]: "Guiné",
  [TuiCountryIsoCode.GP]: "Guadalupe",
  [TuiCountryIsoCode.GQ]: "Guiné Equatorial",
  [TuiCountryIsoCode.GR]: "Grécia",
  [TuiCountryIsoCode.GT]: "Guatemala",
  [TuiCountryIsoCode.GW]: "Guiné-Bisssau",
  [TuiCountryIsoCode.GY]: "Guiana",
  [TuiCountryIsoCode.HK]: "Hong Kong",
  [TuiCountryIsoCode.HN]: "Honduras",
  [TuiCountryIsoCode.HR]: "Croácia",
  [TuiCountryIsoCode.HT]: "Haiti",
  [TuiCountryIsoCode.HU]: "Hungría",
  [TuiCountryIsoCode.ID]: "Indonésia",
  [TuiCountryIsoCode.IE]: "Irlanda",
  [TuiCountryIsoCode.IL]: "Israel",
  [TuiCountryIsoCode.IN]: "Índia",
  [TuiCountryIsoCode.IQ]: "Iraque",
  [TuiCountryIsoCode.IR]: "Irã",
  [TuiCountryIsoCode.IS]: "Islândia",
  [TuiCountryIsoCode.IT]: "Itália",
  [TuiCountryIsoCode.JM]: "Jamaica",
  [TuiCountryIsoCode.JO]: "Jordania",
  [TuiCountryIsoCode.JP]: "Japão",
  [TuiCountryIsoCode.KE]: "Kenia",
  [TuiCountryIsoCode.KG]: "Quiirguistão",
  [TuiCountryIsoCode.KH]: "Camboja",
  [TuiCountryIsoCode.KM]: "Comoros",
  [TuiCountryIsoCode.KN]: "São Cristóvão e Nevis",
  [TuiCountryIsoCode.KP]: "Coreia do Norte",
  [TuiCountryIsoCode.KR]: "Coreia do Sul",
  [TuiCountryIsoCode.KW]: "Kuwait",
  [TuiCountryIsoCode.KY]: "Ilhas Cayman",
  [TuiCountryIsoCode.KZ]: "Kazaquistão",
  [TuiCountryIsoCode.LA]: "Laos",
  [TuiCountryIsoCode.LB]: "Líbano",
  [TuiCountryIsoCode.LC]: "Santa Lucía",
  [TuiCountryIsoCode.LI]: "Liechtenstein",
  [TuiCountryIsoCode.LK]: "Sri Lanka",
  [TuiCountryIsoCode.LR]: "Libéria",
  [TuiCountryIsoCode.LS]: "Lesotho",
  [TuiCountryIsoCode.LT]: "Lituânia",
  [TuiCountryIsoCode.LU]: "Luxemburgo",
  [TuiCountryIsoCode.LV]: "Letônia",
  [TuiCountryIsoCode.LY]: "Líbia",
  [TuiCountryIsoCode.MA]: "Marrocos",
  [TuiCountryIsoCode.MC]: "Mônaco",
  [TuiCountryIsoCode.MD]: "Moldavia",
  [TuiCountryIsoCode.ME]: "Montenegro",
  [TuiCountryIsoCode.MF]: "São Martinho",
  [TuiCountryIsoCode.MG]: "Madagascar",
  [TuiCountryIsoCode.MK]: "Macedônia",
  [TuiCountryIsoCode.ML]: "Mali",
  [TuiCountryIsoCode.MM]: "Myanmar",
  [TuiCountryIsoCode.MN]: "Mongólia",
  [TuiCountryIsoCode.MO]: "Macao",
  [TuiCountryIsoCode.MQ]: "Martinica",
  [TuiCountryIsoCode.MR]: "Mauritânia",
  [TuiCountryIsoCode.MS]: "Montserrat",
  [TuiCountryIsoCode.MT]: "Malta",
  [TuiCountryIsoCode.MU]: "Mauricio",
  [TuiCountryIsoCode.MV]: "Maldivas",
  [TuiCountryIsoCode.MW]: "Malawi",
  [TuiCountryIsoCode.MX]: "México",
  [TuiCountryIsoCode.MY]: "Malasia",
  [TuiCountryIsoCode.MZ]: "Moçambique",
  [TuiCountryIsoCode.NA]: "Namibia",
  [TuiCountryIsoCode.NC]: "Nova Caledónia",
  [TuiCountryIsoCode.NE]: "Níger",
  [TuiCountryIsoCode.NG]: "Nigéria",
  [TuiCountryIsoCode.NI]: "Nicarágua",
  [TuiCountryIsoCode.NL]: "Países Baixos",
  [TuiCountryIsoCode.NO]: "Noruega",
  [TuiCountryIsoCode.NP]: "Nepal",
  [TuiCountryIsoCode.NZ]: "Nova Zelandia",
  [TuiCountryIsoCode.OM]: "Omã",
  [TuiCountryIsoCode.PA]: "Panamá",
  [TuiCountryIsoCode.PE]: "Peru",
  [TuiCountryIsoCode.PF]: "Polinesia Francesa",
  [TuiCountryIsoCode.PG]: "Papua-Nova Guiné",
  [TuiCountryIsoCode.PH]: "Filipinas",
  [TuiCountryIsoCode.PK]: "Paquistão",
  [TuiCountryIsoCode.PL]: "Polônia",
  [TuiCountryIsoCode.PT]: "Portugal",
  [TuiCountryIsoCode.PW]: "Palaos",
  [TuiCountryIsoCode.PY]: "Paraguai",
  [TuiCountryIsoCode.QA]: "Catar",
  [TuiCountryIsoCode.RE]: "A reunião",
  [TuiCountryIsoCode.RO]: "Romênia",
  [TuiCountryIsoCode.RS]: "Sérbia",
  [TuiCountryIsoCode.RU]: "Rússia",
  [TuiCountryIsoCode.RW]: "Ruanda",
  [TuiCountryIsoCode.SA]: "Arábia Saudita",
  [TuiCountryIsoCode.SB]: "Ilhas Salomão",
  [TuiCountryIsoCode.SC]: "Seychelles",
  [TuiCountryIsoCode.SD]: "Sudão",
  [TuiCountryIsoCode.SE]: "Suécia",
  [TuiCountryIsoCode.SG]: "Singapura",
  [TuiCountryIsoCode.SH]: "Santa Eena",
  [TuiCountryIsoCode.SI]: "Eslovênia",
  [TuiCountryIsoCode.SK]: "Eslováquia",
  [TuiCountryIsoCode.SL]: "Serra Leoa",
  [TuiCountryIsoCode.SM]: "San Marino",
  [TuiCountryIsoCode.SN]: "Senegal",
  [TuiCountryIsoCode.SO]: "Somália",
  [TuiCountryIsoCode.SR]: "Suriname",
  [TuiCountryIsoCode.ST]: "Santo Tomé e Príncipe",
  [TuiCountryIsoCode.SV]: "El Salvador",
  [TuiCountryIsoCode.SX]: "São Martinho",
  [TuiCountryIsoCode.SY]: "Síria",
  [TuiCountryIsoCode.SZ]: "Essuatíni",
  [TuiCountryIsoCode.TC]: "Ilhas Turcas e Caicos",
  [TuiCountryIsoCode.TD]: "Chad",
  [TuiCountryIsoCode.TG]: "Togo",
  [TuiCountryIsoCode.TH]: "Tailândia",
  [TuiCountryIsoCode.TJ]: "Tajiquistão",
  [TuiCountryIsoCode.TL]: "Timor Oriental",
  [TuiCountryIsoCode.TM]: "Turkmenistán",
  [TuiCountryIsoCode.TN]: "T´únez",
  [TuiCountryIsoCode.TO]: "Tonga",
  [TuiCountryIsoCode.TR]: "Turquia",
  [TuiCountryIsoCode.TT]: "Trinidad e Tobago",
  [TuiCountryIsoCode.TW]: "Taiwan",
  [TuiCountryIsoCode.TZ]: "Tanzânia",
  [TuiCountryIsoCode.UA]: "Ucrânia",
  [TuiCountryIsoCode.UG]: "Uganda",
  [TuiCountryIsoCode.US]: "Estados Unidos",
  [TuiCountryIsoCode.UY]: "Uruguai",
  [TuiCountryIsoCode.UZ]: "Uzbequistão",
  [TuiCountryIsoCode.VC]: "São Vicente e Granadinas",
  [TuiCountryIsoCode.VE]: "Venezuela",
  [TuiCountryIsoCode.VG]: "Ilhas Virgens Británicas",
  [TuiCountryIsoCode.VN]: "Vietnã",
  [TuiCountryIsoCode.VU]: "Vanuatu",
  [TuiCountryIsoCode.WS]: "Samoa",
  [TuiCountryIsoCode.XK]: "Kosovo",
  [TuiCountryIsoCode.YE]: "Yemén",
  [TuiCountryIsoCode.YT]: "Maiote",
  [TuiCountryIsoCode.ZA]: "África do Sul",
  [TuiCountryIsoCode.ZM]: "Zâmbia",
  [TuiCountryIsoCode.ZW]: "Zimbabwe"
};
var TUI_PORTUGUESE_LANGUAGE_CORE = {
  months: [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro"
  ],
  close: "Fechar",
  nothingFoundMessage: "Nada encontrado",
  defaultErrorMessage: "Valor é inválido",
  spinTexts: ["Anterior", "Próximo"],
  shortWeekDays: ["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"],
  countries: TUI_PORTUGUESE_LANGUAGE_COUNTRIES
};
var TUI_PORTUGUESE_LANGUAGE_KIT = {
  cancel: "Cancelar",
  done: "Concluir",
  more: "Mais",
  otherDate: "Outra data...",
  showAll: "Show all",
  hide: "Hide",
  mobileCalendarTexts: ["Escolha o dia", "Escolha o intervalo", "Escolha os dias"],
  range: ["de", "para"],
  countTexts: ["Mais", "Menos"],
  time: {
    "HH:MM": "HH:MM",
    "HH:MM:SS": "HH:MM:SS",
    "HH:MM:SS.MSS": "HH:MM:SS.MSS"
  },
  dateTexts: {
    DMY: "dd/mm/yyyy",
    MDY: "mm/dd/yyyy",
    YMD: "yyyy/mm/dd"
  },
  digitalInformationUnits: ["B", "KiB", "MiB"],
  passwordTexts: ["Mostrar senha", "Esconder senha"],
  copyTexts: ["Copiar", "Copiado"],
  shortCalendarMonths: [
    "Jan",
    "Fev",
    "Mar",
    "Abr",
    "Mai",
    "Jun",
    "Jul",
    "Ago",
    "Set",
    "Out",
    "Nov",
    "Dez"
  ],
  pagination: ["Página anterior", "Próxima página"],
  fileTexts: {
    loadingError: "Erro ao carregar",
    preview: "Preview",
    remove: "Remover"
  },
  inputFileTexts: {
    defaultLabelSingle: "ou arraste ele aqui",
    defaultLabelMultiple: "ou arraste eles aqui",
    defaultLinkSingle: "Escolha um arquivo",
    defaultLinkMultiple: "Escolha os arquivos",
    maxSizeRejectionReason: "Arquivo ultrapassa o tamanho ",
    formatRejectionReason: "Formato do arquivo inválido",
    drop: "Solte o arquivo aqui",
    dropMultiple: "Solte os arquivos aqui"
  },
  multiSelectTexts: {
    all: "Selecionar tudo",
    none: "Selecione nenhum"
  },
  prompt: {
    yes: "Sim",
    no: "Não"
  }
};
var TUI_PORTUGUESE_LANGUAGE = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({ name: "portuguese" }, TUI_PORTUGUESE_LANGUAGE_CORE), TUI_PORTUGUESE_LANGUAGE_KIT), TUI_PORTUGUESE_LANGUAGE_ADDON_TABLE), TUI_PORTUGUESE_LANGUAGE_ADDON_COMMERCE), TUI_PORTUGUESE_LANGUAGE_ADDON_EDITOR), TUI_PORTUGUESE_LANGUAGE_ADDON_PREVIEW);

// node_modules/@taiga-ui/i18n/fesm2015/taiga-ui-i18n-languages-russian.js
var TUI_RUSSIAN_LANGUAGE_ADDON_COMMERCE = {
  cardNumber: ["Номер", "Номер карты"],
  cardExpiry: ["Срок", "Срок действия"]
};
var TUI_RUSSIAN_LANGUAGE_ADDON_EDITOR = {
  colorSelectorModeNames: ["Сплошной цвет", "Градиент"],
  toolbarTools: {
    undo: "Отменить",
    redo: "Повторить",
    font: "Шрифт",
    fontStyle: "Стиль шрифта",
    fontSize: "Размер шрифта",
    bold: "Полужирный",
    italic: "Курсив",
    underline: "Подчеркнутый",
    strikeThrough: "Зачеркнутый",
    justify: "Выравнивание",
    justifyLeft: "Выровнять текст по левому краю",
    justifyCenter: "Выровнять текст по центру",
    justifyRight: "Выровнять текст по правому краю",
    justifyFull: "Выровнять по ширине",
    list: "Списки",
    indent: "Увеличить отступ",
    outdent: "Уменьшить отступ",
    unorderedList: "Маркированный список",
    orderedList: "Нумерованный список",
    quote: "Цитата",
    foreColor: "Цвет: Текст",
    hiliteColor: "Цвет выделения",
    backColor: "Цвет фона",
    clear: "Сбросить форматирование",
    link: "Ссылка",
    attach: "Вставить файл",
    tex: "Вставить формулу",
    code: "Code",
    image: "Вставить изображение",
    insertHorizontalRule: "Разделитель",
    superscript: "Надстрочный",
    subscript: "Подстрочный",
    insertTable: "Добавить таблицу",
    insertGroup: "Добавить группу",
    hiliteGroup: "Покрасить группу",
    removeGroup: "Удалить группу",
    insertAnchor: "Добавить якорь",
    mergeCells: "Объединить ячейки",
    splitCells: "Разъединить ячейки",
    rowsColumnsManaging: "Управление строками и столбцами",
    cellColor: "Цвет ячейки",
    setDetails: "Аккордеон",
    removeDetails: "Удалить аккордеон"
  },
  editorEditLink: {
    urlExample: "example.com",
    anchorExample: "якорь"
  },
  editorTableCommands: [
    ["Добавить столбец слева", "Добавить столбец справа"],
    ["Добавить строку сверху", "Добавить строку снизу"],
    ["Удалить столбец", "Удалить строку"]
  ],
  editorCodeOptions: ["Код", "Код в блоке"],
  editorFontOptions: {
    small: "Мелкий",
    normal: "Обычный",
    large: "Крупный",
    title: "Заголовок",
    subtitle: "Подзаголовок"
  }
};
var TUI_RUSSIAN_LANGUAGE_ADDON_PREVIEW = {
  previewTexts: {
    rotate: "Повернуть"
  },
  zoomTexts: {
    zoomIn: "Увеличить масштаб",
    zoomOut: "Уменьшить масштаб",
    reset: "Сбросить масштаб"
  }
};
var TUI_RUSSIAN_LANGUAGE_ADDON_TABLE = {
  showHideText: "Показать/Скрыть",
  paginationTexts: {
    pages: "Страниц",
    linesPerPage: "Строк на страницу",
    of: "из"
  }
};
var TUI_RUSSIAN_LANGUAGE_COUNTRIES = {
  [TuiCountryIsoCode.AD]: "Андорра",
  [TuiCountryIsoCode.AE]: "Объединенные Арабские Эмираты",
  [TuiCountryIsoCode.AF]: "Афганистан",
  [TuiCountryIsoCode.AG]: "Антигуа и Барбуда",
  [TuiCountryIsoCode.AI]: "Ангилья",
  [TuiCountryIsoCode.AL]: "Албания",
  [TuiCountryIsoCode.AM]: "Армения",
  [TuiCountryIsoCode.AO]: "Ангола",
  [TuiCountryIsoCode.AR]: "Аргентина",
  [TuiCountryIsoCode.AT]: "Австрия",
  [TuiCountryIsoCode.AU]: "Австралия",
  [TuiCountryIsoCode.AW]: "Аруба",
  [TuiCountryIsoCode.AZ]: "Азербайджан",
  [TuiCountryIsoCode.BA]: "Босния и Герцеговина",
  [TuiCountryIsoCode.BB]: "Барбадос",
  [TuiCountryIsoCode.BD]: "Бангладеш",
  [TuiCountryIsoCode.BE]: "Бельгия",
  [TuiCountryIsoCode.BF]: "Буркина Фасо",
  [TuiCountryIsoCode.BG]: "Болгария",
  [TuiCountryIsoCode.BH]: "Бахрейн",
  [TuiCountryIsoCode.BI]: "Бурунди",
  [TuiCountryIsoCode.BJ]: "Бенин",
  [TuiCountryIsoCode.BL]: "Сен-Бартельми",
  [TuiCountryIsoCode.BM]: "Бермудские острова",
  [TuiCountryIsoCode.BN]: "Бруней-Даруссалам",
  [TuiCountryIsoCode.BO]: "Боливия",
  [TuiCountryIsoCode.BQ]: "Бонайре, Синт-Эстатиус и Саба",
  [TuiCountryIsoCode.BR]: "Бразилия",
  [TuiCountryIsoCode.BS]: "Багамские Острова",
  [TuiCountryIsoCode.BT]: "Бутан",
  [TuiCountryIsoCode.BW]: "Ботсвана",
  [TuiCountryIsoCode.BY]: "Беларусь (Белоруссия)",
  [TuiCountryIsoCode.BZ]: "Белиз",
  [TuiCountryIsoCode.CA]: "Канада",
  [TuiCountryIsoCode.CD]: "Дем. Респ. Конго (Киншаса)",
  [TuiCountryIsoCode.CF]: "Центральноафриканская Республика",
  [TuiCountryIsoCode.CG]: "Конго (Браззавиль)",
  [TuiCountryIsoCode.CH]: "Швейцария",
  [TuiCountryIsoCode.CI]: "Кот-д’Ивуар",
  [TuiCountryIsoCode.CL]: "Чили",
  [TuiCountryIsoCode.CM]: "Камерун",
  [TuiCountryIsoCode.CN]: "Китайская Н.Р.",
  [TuiCountryIsoCode.CO]: "Колумбия",
  [TuiCountryIsoCode.CR]: "Коста-Рика",
  [TuiCountryIsoCode.CU]: "Куба",
  [TuiCountryIsoCode.CV]: "Кабо-Верде",
  [TuiCountryIsoCode.CW]: "Кюрасао",
  [TuiCountryIsoCode.CY]: "Кипр",
  [TuiCountryIsoCode.CZ]: "Чехия",
  [TuiCountryIsoCode.DE]: "Германия",
  [TuiCountryIsoCode.DJ]: "Джибути",
  [TuiCountryIsoCode.DK]: "Дания",
  [TuiCountryIsoCode.DM]: "Доминика",
  [TuiCountryIsoCode.DO]: "Доминиканская Республика",
  [TuiCountryIsoCode.DZ]: "Алжир",
  [TuiCountryIsoCode.EC]: "Эквадор ",
  [TuiCountryIsoCode.EE]: "Эстония ",
  [TuiCountryIsoCode.EG]: "Египет",
  [TuiCountryIsoCode.ER]: "Эритрея",
  [TuiCountryIsoCode.ES]: "Испания",
  [TuiCountryIsoCode.ET]: "Эфиопия",
  [TuiCountryIsoCode.FI]: "Финляндия",
  [TuiCountryIsoCode.FJ]: "Фиджи",
  [TuiCountryIsoCode.FK]: "Фолклендские острова",
  [TuiCountryIsoCode.FM]: "Ф.Ш. Микронезии",
  [TuiCountryIsoCode.FR]: "Франция",
  [TuiCountryIsoCode.GA]: "Габон",
  [TuiCountryIsoCode.GB]: "Великобритания",
  [TuiCountryIsoCode.GD]: "Гренада",
  [TuiCountryIsoCode.GE]: "Грузия",
  [TuiCountryIsoCode.GF]: "Гайана",
  [TuiCountryIsoCode.GH]: "Гана",
  [TuiCountryIsoCode.GI]: "Гибралтар",
  [TuiCountryIsoCode.GL]: "Гренландия",
  [TuiCountryIsoCode.GM]: "Гамбия",
  [TuiCountryIsoCode.GN]: "Гвинея",
  [TuiCountryIsoCode.GP]: "Гваделупа",
  [TuiCountryIsoCode.GQ]: "Экваториальная Гвинея",
  [TuiCountryIsoCode.GR]: "Греция",
  [TuiCountryIsoCode.GT]: "Гватемала",
  [TuiCountryIsoCode.GW]: "Гвинея-Бисау",
  [TuiCountryIsoCode.GY]: "Гайана",
  [TuiCountryIsoCode.HK]: "Гонконг",
  [TuiCountryIsoCode.HN]: "Гондурас",
  [TuiCountryIsoCode.HR]: "Хорватия",
  [TuiCountryIsoCode.HT]: "Гаити",
  [TuiCountryIsoCode.HU]: "Венгрия",
  [TuiCountryIsoCode.ID]: "Индонезия ",
  [TuiCountryIsoCode.IE]: "Ирландия",
  [TuiCountryIsoCode.IL]: "Израиль",
  [TuiCountryIsoCode.IN]: "Индия",
  [TuiCountryIsoCode.IQ]: "Ирак",
  [TuiCountryIsoCode.IR]: "Иран",
  [TuiCountryIsoCode.IS]: "Исландия",
  [TuiCountryIsoCode.IT]: "Италия",
  [TuiCountryIsoCode.JM]: "Ямайка",
  [TuiCountryIsoCode.JO]: "Иордания",
  [TuiCountryIsoCode.JP]: "Япония ",
  [TuiCountryIsoCode.KE]: "Кения",
  [TuiCountryIsoCode.KG]: "Киргизия",
  [TuiCountryIsoCode.KH]: "Камбоджа",
  [TuiCountryIsoCode.KM]: "Коморы",
  [TuiCountryIsoCode.KN]: "Сент-Китс и Невис",
  [TuiCountryIsoCode.KP]: "Корейская НДР",
  [TuiCountryIsoCode.KR]: "Респ. Корея",
  [TuiCountryIsoCode.KW]: "Кувейт",
  [TuiCountryIsoCode.KY]: "Каймановы острова",
  [TuiCountryIsoCode.KZ]: "Казахстан",
  [TuiCountryIsoCode.LA]: "Лаос",
  [TuiCountryIsoCode.LB]: "Ливан ",
  [TuiCountryIsoCode.LC]: "Сент-Люсия",
  [TuiCountryIsoCode.LI]: "Лихтенштейн",
  [TuiCountryIsoCode.LK]: "Шри-Ланка",
  [TuiCountryIsoCode.LR]: "Либерия",
  [TuiCountryIsoCode.LS]: "Лесото",
  [TuiCountryIsoCode.LT]: "Литва",
  [TuiCountryIsoCode.LU]: "Люксембург",
  [TuiCountryIsoCode.LV]: "Латвия",
  [TuiCountryIsoCode.LY]: "Ливия",
  [TuiCountryIsoCode.MA]: "Марокко",
  [TuiCountryIsoCode.MC]: "Монако",
  [TuiCountryIsoCode.MD]: "Молдова",
  [TuiCountryIsoCode.ME]: "Черногория",
  [TuiCountryIsoCode.MF]: "Сен-Мартен",
  [TuiCountryIsoCode.MG]: "Мадагаскар",
  [TuiCountryIsoCode.MK]: "Респ. Северная Македония",
  [TuiCountryIsoCode.ML]: "Мали",
  [TuiCountryIsoCode.MM]: "Бирма (Мьянма)",
  [TuiCountryIsoCode.MN]: "Монголия",
  [TuiCountryIsoCode.MO]: "Макао",
  [TuiCountryIsoCode.MQ]: "Мартиника",
  [TuiCountryIsoCode.MR]: "Мавритания",
  [TuiCountryIsoCode.MS]: "Монтсеррат",
  [TuiCountryIsoCode.MT]: "Мальта",
  [TuiCountryIsoCode.MU]: "Маврикий",
  [TuiCountryIsoCode.MV]: "Мальдивские острова",
  [TuiCountryIsoCode.MW]: "Малави",
  [TuiCountryIsoCode.MX]: "Мексика",
  [TuiCountryIsoCode.MY]: "Малайзия",
  [TuiCountryIsoCode.MZ]: "Мозамбик",
  [TuiCountryIsoCode.NA]: "Намибия",
  [TuiCountryIsoCode.NC]: "Новая Каледония",
  [TuiCountryIsoCode.NE]: "Нигер",
  [TuiCountryIsoCode.NG]: "Нигерия",
  [TuiCountryIsoCode.NI]: "Никарагуа",
  [TuiCountryIsoCode.NL]: "Нидерланды",
  [TuiCountryIsoCode.NO]: "Норвегия",
  [TuiCountryIsoCode.NP]: "Непал",
  [TuiCountryIsoCode.NZ]: "Новая Зеландия",
  [TuiCountryIsoCode.OM]: "Оман",
  [TuiCountryIsoCode.PA]: "Панама",
  [TuiCountryIsoCode.PE]: "Перу",
  [TuiCountryIsoCode.PF]: "Французская Полинезия (Таити)",
  [TuiCountryIsoCode.PG]: "Папуа-Новая Гвинея",
  [TuiCountryIsoCode.PH]: "Филиппины",
  [TuiCountryIsoCode.PK]: "Пакистан",
  [TuiCountryIsoCode.PL]: "Польша",
  [TuiCountryIsoCode.PT]: "Португалия",
  [TuiCountryIsoCode.PW]: "Палау",
  [TuiCountryIsoCode.PY]: "Парагвай",
  [TuiCountryIsoCode.QA]: "Катар",
  [TuiCountryIsoCode.RE]: "Реюньон",
  [TuiCountryIsoCode.RO]: "Румыния",
  [TuiCountryIsoCode.RS]: "Сербия",
  [TuiCountryIsoCode.RU]: "Россия",
  [TuiCountryIsoCode.RW]: "Руанда",
  [TuiCountryIsoCode.SA]: "Саудовская Аравия ",
  [TuiCountryIsoCode.SB]: "Соломоновы Острова ",
  [TuiCountryIsoCode.SC]: "Сейшелы",
  [TuiCountryIsoCode.SD]: "Судан",
  [TuiCountryIsoCode.SE]: "Швеция",
  [TuiCountryIsoCode.SG]: "Сингапур",
  [TuiCountryIsoCode.SH]: "Остров Святой Елены",
  [TuiCountryIsoCode.SI]: "Словения",
  [TuiCountryIsoCode.SK]: "Словакия",
  [TuiCountryIsoCode.SL]: "Сьерра-Леоне",
  [TuiCountryIsoCode.SM]: "Сан-Марино",
  [TuiCountryIsoCode.SN]: "Сенегал",
  [TuiCountryIsoCode.SO]: "Сомали",
  [TuiCountryIsoCode.SR]: "Суринам ",
  [TuiCountryIsoCode.ST]: "Сан-Томе и Принсипи",
  [TuiCountryIsoCode.SV]: "Сальвадор",
  [TuiCountryIsoCode.SX]: "Синт-Мартен",
  [TuiCountryIsoCode.SY]: "Сирийская арабская республика",
  [TuiCountryIsoCode.SZ]: "Свазиленд",
  [TuiCountryIsoCode.TC]: "Тёркс и Кайкос",
  [TuiCountryIsoCode.TD]: "Чад",
  [TuiCountryIsoCode.TG]: "Того",
  [TuiCountryIsoCode.TH]: "Таиланд ",
  [TuiCountryIsoCode.TJ]: "Таджикистан",
  [TuiCountryIsoCode.TL]: "Восточный Тимор",
  [TuiCountryIsoCode.TM]: "Туркменистан",
  [TuiCountryIsoCode.TN]: "Тунис",
  [TuiCountryIsoCode.TO]: "Тонга",
  [TuiCountryIsoCode.TR]: "Турция",
  [TuiCountryIsoCode.TT]: "Тринидад и Тобаго",
  [TuiCountryIsoCode.TW]: "Тайвань",
  [TuiCountryIsoCode.TZ]: "Танзания",
  [TuiCountryIsoCode.UA]: "Украина",
  [TuiCountryIsoCode.UG]: "Уганда",
  [TuiCountryIsoCode.US]: "США",
  [TuiCountryIsoCode.UY]: "Уругвай",
  [TuiCountryIsoCode.UZ]: "Узбекистан",
  [TuiCountryIsoCode.VC]: "Сент-Винсент и Гренадины",
  [TuiCountryIsoCode.VE]: "Венесуэла",
  [TuiCountryIsoCode.VG]: "Британские Виргинские острова",
  [TuiCountryIsoCode.VN]: "Вьетнам",
  [TuiCountryIsoCode.VU]: "Вануату ",
  [TuiCountryIsoCode.WS]: "Самоа",
  [TuiCountryIsoCode.YE]: "Йемен ",
  [TuiCountryIsoCode.YT]: "Майотта",
  [TuiCountryIsoCode.ZA]: "Южно-Африканская Респ.",
  [TuiCountryIsoCode.ZM]: "Замбия",
  [TuiCountryIsoCode.ZW]: "Зимбабве",
  [TuiCountryIsoCode.XK]: "Косово"
};
var TUI_RUSSIAN_LANGUAGE_CORE = {
  months: [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь"
  ],
  close: "Закрыть",
  nothingFoundMessage: "Ничего не найдено",
  defaultErrorMessage: "Поле заполнено неверно",
  spinTexts: ["Предыдущий", "Следующий"],
  shortWeekDays: ["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "ВС"],
  countries: TUI_RUSSIAN_LANGUAGE_COUNTRIES
};
var TUI_RUSSIAN_LANGUAGE_KIT = {
  cancel: "Отменить",
  done: "Готово",
  more: "Еще",
  otherDate: "Другая дата...",
  showAll: "Показать все",
  hide: "Скрыть",
  mobileCalendarTexts: ["Выберите день", "Выберите период", "Выбрать дни"],
  range: ["от", "до"],
  countTexts: ["Плюс", "Минус"],
  time: {
    "HH:MM": "ЧЧ:ММ",
    "HH:MM:SS": "ЧЧ:ММ:СС",
    "HH:MM:SS.MSS": "ЧЧ:ММ:СС.МСС"
  },
  dateTexts: {
    DMY: "дд.мм.гггг",
    MDY: "мм.дд.гггг",
    YMD: "гггг.мм.дд"
  },
  digitalInformationUnits: ["Б", "КиБ", "МиБ"],
  passwordTexts: ["Показать пароль", "Скрыть пароль"],
  copyTexts: ["Копировать", "Скопировано"],
  shortCalendarMonths: [
    "Янв",
    "Фев",
    "Март",
    "Апр",
    "Май",
    "Июнь",
    "Июль",
    "Авг",
    "Сен",
    "Окт",
    "Нояб",
    "Дек"
  ],
  pagination: ["Предыдущая страница", "Следующая страница"],
  fileTexts: {
    loadingError: "Ошибка загрузки",
    preview: "Предварительный просмотр",
    remove: "Удалить"
  },
  inputFileTexts: {
    defaultLabelSingle: "или перетащите его сюда",
    defaultLabelMultiple: "или перетащите их сюда",
    defaultLinkSingle: "Выберите файл",
    defaultLinkMultiple: "Выберите файлы",
    maxSizeRejectionReason: "Файл превышает объем ",
    formatRejectionReason: "Неверный формат файла",
    drop: "Поместите файл сюда",
    dropMultiple: "Поместите файлы сюда"
  },
  multiSelectTexts: {
    all: "Выбрать все",
    none: "Снять выбор"
  },
  prompt: {
    yes: "Да",
    no: "Нет"
  }
};
var TUI_RUSSIAN_LANGUAGE = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({ name: "russian" }, TUI_RUSSIAN_LANGUAGE_CORE), TUI_RUSSIAN_LANGUAGE_KIT), TUI_RUSSIAN_LANGUAGE_ADDON_COMMERCE), TUI_RUSSIAN_LANGUAGE_ADDON_TABLE), TUI_RUSSIAN_LANGUAGE_ADDON_EDITOR), TUI_RUSSIAN_LANGUAGE_ADDON_PREVIEW);

// node_modules/@taiga-ui/i18n/fesm2015/taiga-ui-i18n-languages-spanish.js
var TUI_SPANISH_LANGUAGE_ADDON_COMMERCE = {
  cardNumber: ["Número", "Número de la tarjeta"],
  cardExpiry: ["Expira", "Fecha de expiración"]
};
var TUI_SPANISH_LANGUAGE_ADDON_EDITOR = {
  colorSelectorModeNames: ["Color sólido", "Gradiente"],
  toolbarTools: {
    undo: "Deshacer",
    redo: "Rehacer",
    font: "Fuente",
    fontStyle: "Estilo de la fuente",
    fontSize: "Tamaño de la fuente",
    bold: "Negrita",
    italic: "Cursiva",
    underline: "Subrayado",
    strikeThrough: "Tachado",
    justify: "Justificar",
    justifyLeft: "Alinear a izquierda",
    justifyCenter: "Centrar",
    justifyRight: "Alinear a derecha",
    justifyFull: "Justificar",
    list: "Listar",
    indent: "Sangría",
    outdent: "Sin sangría",
    unorderedList: "Lista desordenada",
    orderedList: "Lista ordenada",
    quote: "Cita",
    foreColor: "Color",
    backColor: "Color de fondo",
    hiliteColor: "Color de resaltado",
    clear: "Limpiar",
    link: "Enlace",
    attach: "Adjuntar archivo",
    tex: "Insertar texto",
    code: "Código",
    image: "Insertar imagen",
    insertHorizontalRule: "Insertar regla horizontal",
    superscript: "Superíndice",
    subscript: "Subíndice",
    insertTable: "Insert table",
    hiliteGroup: "Hilite group",
    insertGroup: "Insert group",
    removeGroup: "Remove group",
    insertAnchor: "Insert anchor",
    mergeCells: "Merge cells",
    splitCells: "Split cells",
    rowsColumnsManaging: "Managing rows and columns",
    cellColor: "Cell color",
    setDetails: "Details",
    removeDetails: "Remove details"
  },
  editorEditLink: {
    urlExample: "example.com",
    anchorExample: "anchor"
  },
  editorTableCommands: [
    ["Insert column before", "Insert column after"],
    ["Insert row before", "Insert row after"],
    ["Delete column", "Delete row"]
  ],
  editorCodeOptions: ["Code in the text", "Code in block"],
  editorFontOptions: {
    small: "Small",
    normal: "Normal",
    large: "Large",
    title: "Title",
    subtitle: "Subtitle"
  }
};
var TUI_SPANISH_LANGUAGE_PREVIEW = {
  previewTexts: {
    rotate: "Rotate"
  },
  zoomTexts: {
    zoomOut: "Zoom out",
    zoomIn: "Zoom in",
    reset: "Reset"
  }
};
var TUI_SPANISH_LANGUAGE_ADDON_TABLE = {
  showHideText: "Mostrar/Ocultar",
  paginationTexts: {
    pages: "Páginas",
    linesPerPage: "Lineas por página",
    of: "de"
  }
};
var TUI_SPANISH_LANGUAGE_COUNTRIES = {
  [TuiCountryIsoCode.AD]: "Andorra",
  [TuiCountryIsoCode.AE]: "Emiratos Árabes Unidos",
  [TuiCountryIsoCode.AF]: "Afganistán",
  [TuiCountryIsoCode.AG]: "Antigua y Barbuda",
  [TuiCountryIsoCode.AI]: "Anguila",
  [TuiCountryIsoCode.AL]: "Albania",
  [TuiCountryIsoCode.AM]: "Armenia",
  [TuiCountryIsoCode.AO]: "Angola",
  [TuiCountryIsoCode.AR]: "Argentina",
  [TuiCountryIsoCode.AT]: "Austria",
  [TuiCountryIsoCode.AU]: "Australia",
  [TuiCountryIsoCode.AW]: "Aruba",
  [TuiCountryIsoCode.AZ]: "Azerbaiyán",
  [TuiCountryIsoCode.BA]: "Bosnia y Herzegovina",
  [TuiCountryIsoCode.BB]: "Barbados",
  [TuiCountryIsoCode.BD]: "Bangladesh",
  [TuiCountryIsoCode.BE]: "Bélgica",
  [TuiCountryIsoCode.BF]: "Burkina Faso",
  [TuiCountryIsoCode.BG]: "Bulgaria",
  [TuiCountryIsoCode.BH]: "Bahréin",
  [TuiCountryIsoCode.BI]: "Burundi",
  [TuiCountryIsoCode.BJ]: "Benín",
  [TuiCountryIsoCode.BL]: "San Bartolomé",
  [TuiCountryIsoCode.BM]: "Bermudas",
  [TuiCountryIsoCode.BN]: "Brunéi",
  [TuiCountryIsoCode.BO]: "Bolivia",
  [TuiCountryIsoCode.BQ]: "Bonaire, San Eustaquio y Saba",
  [TuiCountryIsoCode.BR]: "Brasil",
  [TuiCountryIsoCode.BS]: "Bahamas",
  [TuiCountryIsoCode.BT]: "Bután",
  [TuiCountryIsoCode.BW]: "Botsuana",
  [TuiCountryIsoCode.BY]: "Bielorrusia",
  [TuiCountryIsoCode.BZ]: "Belice",
  [TuiCountryIsoCode.CA]: "Canadá",
  [TuiCountryIsoCode.CD]: "República Democrática del Congo",
  [TuiCountryIsoCode.CF]: "República Centro-Africana",
  [TuiCountryIsoCode.CG]: "Congo",
  [TuiCountryIsoCode.CH]: "Suiza",
  [TuiCountryIsoCode.CI]: "Costa de Marfil",
  [TuiCountryIsoCode.CL]: "Chile",
  [TuiCountryIsoCode.CM]: "Camerún",
  [TuiCountryIsoCode.CN]: "China",
  [TuiCountryIsoCode.CO]: "Colombia",
  [TuiCountryIsoCode.CR]: "Costa Rica",
  [TuiCountryIsoCode.CU]: "Cuba",
  [TuiCountryIsoCode.CV]: "Cabo Verde",
  [TuiCountryIsoCode.CW]: "Curazao",
  [TuiCountryIsoCode.CY]: "Chipre",
  [TuiCountryIsoCode.CZ]: "República Checa",
  [TuiCountryIsoCode.DE]: "Alemania",
  [TuiCountryIsoCode.DJ]: "Yibuti",
  [TuiCountryIsoCode.DK]: "Dinamarca",
  [TuiCountryIsoCode.DM]: "Dominica",
  [TuiCountryIsoCode.DO]: "República Dominicana",
  [TuiCountryIsoCode.DZ]: "Algeria",
  [TuiCountryIsoCode.EC]: "Ecuador",
  [TuiCountryIsoCode.EE]: "Estonia",
  [TuiCountryIsoCode.EG]: "Egipto",
  [TuiCountryIsoCode.ER]: "Eritrea",
  [TuiCountryIsoCode.ES]: "España",
  [TuiCountryIsoCode.ET]: "Etiopía",
  [TuiCountryIsoCode.FI]: "Finlandia",
  [TuiCountryIsoCode.FJ]: "Fiyi",
  [TuiCountryIsoCode.FK]: "Islas Malvinas",
  [TuiCountryIsoCode.FM]: "Micronesia",
  [TuiCountryIsoCode.FR]: "Francia",
  [TuiCountryIsoCode.GA]: "Gabón",
  [TuiCountryIsoCode.GB]: "Reino Unido",
  [TuiCountryIsoCode.GD]: "Granada",
  [TuiCountryIsoCode.GE]: "Georgia",
  [TuiCountryIsoCode.GF]: "Guayana",
  [TuiCountryIsoCode.GH]: "Ghana",
  [TuiCountryIsoCode.GI]: "Gibraltar",
  [TuiCountryIsoCode.GL]: "Groenlandia",
  [TuiCountryIsoCode.GM]: "Gambia",
  [TuiCountryIsoCode.GN]: "Guinea",
  [TuiCountryIsoCode.GP]: "Guadalupe",
  [TuiCountryIsoCode.GQ]: "Guinea Ecuatorial",
  [TuiCountryIsoCode.GR]: "Grecia",
  [TuiCountryIsoCode.GT]: "Guatemala",
  [TuiCountryIsoCode.GW]: "Guinea-Bisáu",
  [TuiCountryIsoCode.GY]: "Guyana",
  [TuiCountryIsoCode.HK]: "Hong Kong",
  [TuiCountryIsoCode.HN]: "Honduras",
  [TuiCountryIsoCode.HR]: "Croacia",
  [TuiCountryIsoCode.HT]: "Haití",
  [TuiCountryIsoCode.HU]: "Hungría",
  [TuiCountryIsoCode.ID]: "Indonesia",
  [TuiCountryIsoCode.IE]: "Irlanda",
  [TuiCountryIsoCode.IL]: "Israel",
  [TuiCountryIsoCode.IN]: "India",
  [TuiCountryIsoCode.IQ]: "Irak",
  [TuiCountryIsoCode.IR]: "Irán",
  [TuiCountryIsoCode.IS]: "Islandia",
  [TuiCountryIsoCode.IT]: "Italia",
  [TuiCountryIsoCode.JM]: "Jamaica",
  [TuiCountryIsoCode.JO]: "Jordania",
  [TuiCountryIsoCode.JP]: "Japón",
  [TuiCountryIsoCode.KE]: "Kenia",
  [TuiCountryIsoCode.KG]: "Kirguistán",
  [TuiCountryIsoCode.KH]: "Camboya",
  [TuiCountryIsoCode.KM]: "Comoros",
  [TuiCountryIsoCode.KN]: "San Cristóbal y Nieves",
  [TuiCountryIsoCode.KP]: "Corea del Norte",
  [TuiCountryIsoCode.KR]: "Corea del Sur",
  [TuiCountryIsoCode.KW]: "Kuwait",
  [TuiCountryIsoCode.KY]: "Islas Caimán",
  [TuiCountryIsoCode.KZ]: "Kazajstán",
  [TuiCountryIsoCode.LA]: "Laos",
  [TuiCountryIsoCode.LB]: "Líbano",
  [TuiCountryIsoCode.LC]: "Santa Lucía",
  [TuiCountryIsoCode.LI]: "Liechtenstein",
  [TuiCountryIsoCode.LK]: "Sri Lanka",
  [TuiCountryIsoCode.LR]: "Liberia",
  [TuiCountryIsoCode.LS]: "Lesotho",
  [TuiCountryIsoCode.LT]: "Lituania",
  [TuiCountryIsoCode.LU]: "Luxemburgo",
  [TuiCountryIsoCode.LV]: "Letonia",
  [TuiCountryIsoCode.LY]: "Libia",
  [TuiCountryIsoCode.MA]: "Marruecos",
  [TuiCountryIsoCode.MC]: "M´ónaco",
  [TuiCountryIsoCode.MD]: "Moldavia",
  [TuiCountryIsoCode.ME]: "Montenegro",
  [TuiCountryIsoCode.MF]: "San Martín",
  [TuiCountryIsoCode.MG]: "Madagascar",
  [TuiCountryIsoCode.MK]: "Macedonia",
  [TuiCountryIsoCode.ML]: "Mali",
  [TuiCountryIsoCode.MM]: "Myanmar",
  [TuiCountryIsoCode.MN]: "Mongolia",
  [TuiCountryIsoCode.MO]: "Macao",
  [TuiCountryIsoCode.MQ]: "Martinica",
  [TuiCountryIsoCode.MR]: "Mauritania",
  [TuiCountryIsoCode.MS]: "Montserrat",
  [TuiCountryIsoCode.MT]: "Malta",
  [TuiCountryIsoCode.MU]: "Mauricio",
  [TuiCountryIsoCode.MV]: "Maldives",
  [TuiCountryIsoCode.MW]: "Malawi",
  [TuiCountryIsoCode.MX]: "México",
  [TuiCountryIsoCode.MY]: "Malasia",
  [TuiCountryIsoCode.MZ]: "Mozambique",
  [TuiCountryIsoCode.NA]: "Namibia",
  [TuiCountryIsoCode.NC]: "Nueva Caledonia",
  [TuiCountryIsoCode.NE]: "Níger",
  [TuiCountryIsoCode.NG]: "Nigeria",
  [TuiCountryIsoCode.NI]: "Nicaragua",
  [TuiCountryIsoCode.NL]: "Países Bajos",
  [TuiCountryIsoCode.NO]: "Noruega",
  [TuiCountryIsoCode.NP]: "Nepal",
  [TuiCountryIsoCode.NZ]: "Nueva Zelanda",
  [TuiCountryIsoCode.OM]: "Omán",
  [TuiCountryIsoCode.PA]: "Panamá",
  [TuiCountryIsoCode.PE]: "Perú",
  [TuiCountryIsoCode.PF]: "Polinesia Francesa",
  [TuiCountryIsoCode.PG]: "Papúa Nueva Guínea",
  [TuiCountryIsoCode.PH]: "Filipinas",
  [TuiCountryIsoCode.PK]: "Pakistán",
  [TuiCountryIsoCode.PL]: "Polonia",
  [TuiCountryIsoCode.PT]: "Portugal",
  [TuiCountryIsoCode.PW]: "Palaos",
  [TuiCountryIsoCode.PY]: "Paraguay",
  [TuiCountryIsoCode.QA]: "Catar",
  [TuiCountryIsoCode.RE]: "Reunión",
  [TuiCountryIsoCode.RO]: "Rumania",
  [TuiCountryIsoCode.RS]: "Serbia",
  [TuiCountryIsoCode.RU]: "Rusia",
  [TuiCountryIsoCode.RW]: "Ruanda",
  [TuiCountryIsoCode.SA]: "Arabia Saudita",
  [TuiCountryIsoCode.SB]: "Islas Salomón",
  [TuiCountryIsoCode.SC]: "Seychelles",
  [TuiCountryIsoCode.SD]: "Sudán",
  [TuiCountryIsoCode.SE]: "Suecia",
  [TuiCountryIsoCode.SG]: "Singapur",
  [TuiCountryIsoCode.SH]: "Santa Elena",
  [TuiCountryIsoCode.SI]: "Eslovenia",
  [TuiCountryIsoCode.SK]: "Eslovaquia",
  [TuiCountryIsoCode.SL]: "Sierra Leona",
  [TuiCountryIsoCode.SM]: "San Marino",
  [TuiCountryIsoCode.SN]: "Senegal",
  [TuiCountryIsoCode.SO]: "Somalia",
  [TuiCountryIsoCode.SR]: "Surinam",
  [TuiCountryIsoCode.ST]: "Santo Tomé y Príncipe",
  [TuiCountryIsoCode.SV]: "El Salvador",
  [TuiCountryIsoCode.SX]: "San Martín",
  [TuiCountryIsoCode.SY]: "Siria",
  [TuiCountryIsoCode.SZ]: "Suazilandia",
  [TuiCountryIsoCode.TC]: "Islas Turcas y Caicos",
  [TuiCountryIsoCode.TD]: "Chad",
  [TuiCountryIsoCode.TG]: "Togo",
  [TuiCountryIsoCode.TH]: "Tailandia",
  [TuiCountryIsoCode.TJ]: "Tayikistán",
  [TuiCountryIsoCode.TL]: "Timor Oriental",
  [TuiCountryIsoCode.TM]: "Turkmenistán",
  [TuiCountryIsoCode.TN]: "T´únez",
  [TuiCountryIsoCode.TO]: "Tonga",
  [TuiCountryIsoCode.TR]: "Turquía",
  [TuiCountryIsoCode.TT]: "Trinidad y Tobago",
  [TuiCountryIsoCode.TW]: "Taiwán",
  [TuiCountryIsoCode.TZ]: "Tanzania",
  [TuiCountryIsoCode.UA]: "Ucrania",
  [TuiCountryIsoCode.UG]: "Uganda",
  [TuiCountryIsoCode.US]: "Estados Unidos",
  [TuiCountryIsoCode.UY]: "Uruguay",
  [TuiCountryIsoCode.UZ]: "Uzbekistán",
  [TuiCountryIsoCode.VC]: "San Vicente y las Granadinas",
  [TuiCountryIsoCode.VE]: "Venezuela",
  [TuiCountryIsoCode.VG]: "Islas Vírgenes Británicas",
  [TuiCountryIsoCode.VN]: "Vietnam",
  [TuiCountryIsoCode.VU]: "Vanuatu",
  [TuiCountryIsoCode.WS]: "Samoa",
  [TuiCountryIsoCode.XK]: "Kosovo",
  [TuiCountryIsoCode.YE]: "Yemén",
  [TuiCountryIsoCode.YT]: "Mayotte",
  [TuiCountryIsoCode.ZA]: "Sudáfrica",
  [TuiCountryIsoCode.ZM]: "Zambia",
  [TuiCountryIsoCode.ZW]: "Zimbabue"
};
var TUI_SPANISH_LANGUAGE_CORE = {
  months: [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre"
  ],
  close: "Cerrar",
  nothingFoundMessage: "Nada encontrado",
  defaultErrorMessage: "El valor es inválido",
  spinTexts: ["Previo", "Siguiente"],
  shortWeekDays: ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"],
  countries: TUI_SPANISH_LANGUAGE_COUNTRIES
};
var TUI_SPANISH_LANGUAGE_KIT = {
  cancel: "Cancelar",
  done: "Hecho",
  more: "Más",
  otherDate: "Otra fecha...",
  showAll: "Show all",
  hide: "Hide",
  mobileCalendarTexts: ["Seleccione el día", "Seleccione un rango", "Elige días"],
  range: ["desde", "hasta"],
  countTexts: ["Más", "Menos"],
  time: {
    "HH:MM": "HH:MM",
    "HH:MM:SS": "HH:MM:SS",
    "HH:MM:SS.MSS": "HH:MM:SS.MSS"
  },
  dateTexts: {
    DMY: "dd.mm.yyyy",
    MDY: "mm.dd.yyyy",
    YMD: "yyyy.mm.dd"
  },
  digitalInformationUnits: ["B", "KiB", "MiB"],
  passwordTexts: ["Mostrar contraseña", "Ocultar contraseña"],
  copyTexts: ["Copiar", "Copiado"],
  shortCalendarMonths: [
    "Ene",
    "Feb",
    "Mar",
    "Abr",
    "May",
    "Jun",
    "Jul",
    "Ago",
    "Sep",
    "Oct",
    "Nov",
    "Dic"
  ],
  pagination: ["Página anterior", "Página siguiente"],
  fileTexts: {
    loadingError: "Error de carga",
    preview: "Previsualizar",
    remove: "Remover"
  },
  inputFileTexts: {
    defaultLabelSingle: "o arrástrelo aquí",
    defaultLabelMultiple: "o arrástrelos aquí",
    defaultLinkSingle: "Seleccione un archivo",
    defaultLinkMultiple: "Seleccione archivos",
    maxSizeRejectionReason: "Archivo demasiado grande ",
    formatRejectionReason: "Formato de archivo inválido",
    drop: "Suelte el archivo aquí",
    dropMultiple: "Suelte los archivos aquí"
  },
  multiSelectTexts: {
    all: "Seleccionar todo",
    none: "Seleccionar ninguno"
  },
  prompt: {
    yes: "Sí",
    no: "No"
  }
};
var TUI_SPANISH_LANGUAGE = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({ name: "spanish" }, TUI_SPANISH_LANGUAGE_CORE), TUI_SPANISH_LANGUAGE_KIT), TUI_SPANISH_LANGUAGE_ADDON_TABLE), TUI_SPANISH_LANGUAGE_ADDON_COMMERCE), TUI_SPANISH_LANGUAGE_ADDON_EDITOR), TUI_SPANISH_LANGUAGE_PREVIEW);

// node_modules/@taiga-ui/i18n/fesm2015/taiga-ui-i18n-languages-turkish.js
var TUI_TURKISH_LANGUAGE_ADDON_COMMERCE = {
  cardNumber: ["Kart No", "Kart Numarası"],
  cardExpiry: ["SKT", "Son Kullanma"]
};
var TUI_TURKISH_LANGUAGE_ADDON_EDITOR = {
  colorSelectorModeNames: ["Solid color", "Gradient"],
  toolbarTools: {
    undo: "Geri al",
    redo: "İleri Al",
    font: "Yazı Tipi",
    fontStyle: "Yazı stili",
    fontSize: "Yatı Boyutu",
    bold: "Kalın",
    italic: "İtalik",
    underline: "Altı Çizi",
    strikeThrough: "Üstü Çizili",
    justify: "Hizala",
    justifyLeft: "Sola yasla",
    justifyCenter: "Ortala",
    justifyRight: "Sağa yasla",
    justifyFull: "Doldur",
    list: "Liste",
    indent: "Girinti",
    outdent: "Çıkıntı",
    unorderedList: "Noktalı liste",
    orderedList: "Numerik liste",
    quote: "Alıntı",
    foreColor: "Renk",
    backColor: "Arka plan rengi",
    hiliteColor: "hiliteColor",
    clear: "Formatı Temizle",
    link: "Link",
    attach: "Dosya Ekle",
    tex: "TeX Ekle",
    code: "Kod",
    image: "Resim Ekle",
    insertHorizontalRule: "Satır Ekle",
    superscript: "Üst Simge",
    subscript: "Alt Simge",
    insertTable: "Insert table",
    hiliteGroup: "Hilite group",
    insertGroup: "Insert group",
    removeGroup: "Remove group",
    insertAnchor: "Insert anchor",
    mergeCells: "Merge cells",
    splitCells: "Split cells",
    rowsColumnsManaging: "Managing rows and columns",
    cellColor: "Cell color",
    setDetails: "Details",
    removeDetails: "Remove details"
  },
  editorEditLink: {
    urlExample: "example.com",
    anchorExample: "anchor"
  },
  editorTableCommands: [
    ["Insert column before", "Insert column after"],
    ["Insert row before", "Insert row after"],
    ["Delete column", "Delete row"]
  ],
  editorCodeOptions: ["Code in the text", "Code in block"],
  editorFontOptions: {
    small: "Small",
    normal: "Normal",
    large: "Large",
    title: "Title",
    subtitle: "Subtitle"
  }
};
var TUI_TURKISH_LANGUAGE_ADDON_PREVIEW = {
  previewTexts: {
    rotate: "Rotate"
  },
  zoomTexts: {
    zoomOut: "Zoom out",
    zoomIn: "Zoom in",
    reset: "Reset"
  }
};
var TUI_TURKISH_LANGUAGE_ADDON_TABLE = {
  showHideText: "Göster/Hizle",
  paginationTexts: {
    pages: "Sayfa",
    linesPerPage: "Görüntülenen",
    of: "toplam"
  }
};
var TUI_TURKISH_LANGUAGE_CORE = {
  months: [
    "Ocak",
    "Şubat",
    "Mart",
    "Nisan",
    "Mayıs",
    "Haziran",
    "Temmuz",
    "Ağustos",
    "Eylül",
    "Ekim",
    "Kasım",
    "Aralık"
  ],
  close: "Kapat",
  nothingFoundMessage: "Kayıt Bulunamadı",
  defaultErrorMessage: "Değer hatalı",
  spinTexts: ["Geri", "İleri"],
  shortWeekDays: ["Ptsi", "Salı", "Çrş", "Prş", "Cma", "Ctsi", "Pzr"],
  // TODO: i18n replace with current language countries list
  countries: TUI_ENGLISH_LANGUAGE_COUNTRIES
};
var TUI_TURKISH_LANGUAGE_KIT = {
  cancel: "İptal Et",
  done: "Tamam",
  more: "Daha Fazla",
  otherDate: "Farklı bir tarih...",
  showAll: "Show all",
  hide: "Hide",
  mobileCalendarTexts: ["Gün seç", "Aralık seç", "Günleri seçin"],
  range: ["dan", "a"],
  countTexts: ["Artı", "Eksi"],
  time: {
    "HH:MM": "HH:MM",
    "HH:MM:SS": "HH:MM:SS",
    "HH:MM:SS.MSS": "HH:MM:SS.MSS"
  },
  dateTexts: {
    DMY: "dd.mm.yyyy",
    MDY: "mm.dd.yyyy",
    YMD: "yyyy.mm.dd"
  },
  digitalInformationUnits: ["B", "KiB", "MiB"],
  passwordTexts: ["Göster", "Gizle"],
  copyTexts: ["Kopyala", "Kopyalandı"],
  shortCalendarMonths: [
    "Ock",
    "Şbt",
    "Mart",
    "Nsn",
    "Mays",
    "Hzrn",
    "Tmmz",
    "Ağu",
    "Eyl",
    "Ekm",
    "Kas",
    "Aral"
  ],
  pagination: ["Önceki", "Sonraki"],
  fileTexts: {
    loadingError: "Yükleme Hatası",
    preview: "Öz İzleme",
    remove: "Kaldır"
  },
  inputFileTexts: {
    defaultLabelSingle: "veya buraya sürükleyin",
    defaultLabelMultiple: "veya buraya sürükleyin",
    defaultLinkSingle: "Dosya seç",
    defaultLinkMultiple: "Dosyaları seç",
    maxSizeRejectionReason: "Dosya boyutu fazla ",
    formatRejectionReason: "Dosya formatı yanlış",
    drop: "Dosyayı buraya bırakın",
    dropMultiple: "Dosyaları buraya bırakın"
  },
  multiSelectTexts: {
    all: "Hepsini seç",
    none: "Hiçbirini Seçme"
  },
  prompt: {
    yes: "Evet",
    no: "Hayır"
  }
};
var TUI_TURKISH_LANGUAGE = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({ name: "turkish" }, TUI_TURKISH_LANGUAGE_CORE), TUI_TURKISH_LANGUAGE_KIT), TUI_TURKISH_LANGUAGE_ADDON_TABLE), TUI_TURKISH_LANGUAGE_ADDON_COMMERCE), TUI_TURKISH_LANGUAGE_ADDON_EDITOR), TUI_TURKISH_LANGUAGE_ADDON_PREVIEW);

// node_modules/@taiga-ui/i18n/fesm2015/taiga-ui-i18n-languages-ukrainian.js
var TUI_UKRAINIAN_LANGUAGE_ADDON_COMMERCE = {
  cardNumber: ["Номер", "Номер карти"],
  cardExpiry: ["Термін", "Термін дії"]
};
var TUI_UKRAINIAN_LANGUAGE_ADDON_EDITOR = {
  colorSelectorModeNames: ["Суцільний колір", "Градієнт"],
  toolbarTools: {
    undo: "Скасувати",
    redo: "Повторити",
    font: "Шрифт",
    fontStyle: "Стиль шрифту",
    fontSize: "Розмір шрифту",
    bold: "Жирний",
    italic: "Курсив",
    underline: "Підкреслений",
    strikeThrough: "Закреслений",
    justify: "Вирівнювання",
    justifyLeft: "Вирівняти текст за лівим краєм",
    justifyCenter: "Вирівняти текст по центру",
    justifyRight: "Вирівняти текст за правим краєм",
    justifyFull: "Вирівняти за шириною",
    list: "Списки",
    indent: "Збільшити відступ",
    outdent: "Зменшити відступ",
    unorderedList: "Маркований список",
    orderedList: "Нумерований список",
    quote: "Цитата",
    foreColor: "Колір: Текст",
    hiliteColor: "Колір виділення",
    backColor: "Колір фону",
    clear: "Скинути форматування",
    link: "Посилання",
    attach: "Вставити файл",
    tex: "Вставити формулу",
    code: "Code",
    image: "Вставити зображення",
    insertHorizontalRule: "Розділювач",
    superscript: "Надрядковий",
    subscript: "Підрядковий",
    insertTable: "Insert table",
    hiliteGroup: "Hilite group",
    insertGroup: "Insert group",
    removeGroup: "Remove group",
    insertAnchor: "Insert anchor",
    mergeCells: "Merge cells",
    splitCells: "Split cells",
    rowsColumnsManaging: "Managing rows and columns",
    cellColor: "Cell color",
    setDetails: "Details",
    removeDetails: "Remove details"
  },
  editorEditLink: {
    urlExample: "example.com",
    anchorExample: "anchor"
  },
  editorTableCommands: [
    ["Insert column before", "Insert column after"],
    ["Insert row before", "Insert row after"],
    ["Delete column", "Delete row"]
  ],
  editorCodeOptions: ["Code in the text", "Code in block"],
  editorFontOptions: {
    small: "Small",
    normal: "Normal",
    large: "Large",
    title: "Title",
    subtitle: "Subtitle"
  }
};
var TUI_UKRAINIAN_LANGUAGE_ADDON_PREVIEW = {
  previewTexts: {
    rotate: "Rotate"
  },
  zoomTexts: {
    zoomOut: "Zoom out",
    zoomIn: "Zoom in",
    reset: "Reset"
  }
};
var TUI_UKRAINIAN_LANGUAGE_ADDON_TABLE = {
  showHideText: "Показати/Приховати",
  paginationTexts: {
    pages: "Сторінок",
    linesPerPage: "Рядків на сторінку",
    of: "з"
  }
};
var TUI_UKRAINIAN_LANGUAGE_CORE = {
  months: [
    "Січень",
    "Лютий",
    "Березень",
    "Квітень",
    "Травень",
    "Червень",
    "Липень",
    "Серпень",
    "Вересень",
    "Жовтень",
    "Листопад",
    "Грудень"
  ],
  close: "Закрити",
  nothingFoundMessage: "Нічого не знайдено",
  defaultErrorMessage: "Поле заповнено невірно",
  spinTexts: ["Попередній", "Наступний"],
  shortWeekDays: ["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "НД"],
  // TODO: i18n replace with current language countries list
  countries: TUI_ENGLISH_LANGUAGE_COUNTRIES
};
var TUI_UKRAINIAN_LANGUAGE_KIT = {
  cancel: "Скасувати",
  done: "Готово",
  more: "Ще",
  otherDate: "Інша дата ...",
  showAll: "Show all",
  hide: "Hide",
  mobileCalendarTexts: ["Виберіть день", "Виберіть період", "Виберіть дні"],
  range: ["від", "до"],
  countTexts: ["Плюс", "Мінус"],
  time: {
    "HH:MM": "ГГ:ХХ",
    "HH:MM:SS": "ГГ:ХХ:СС",
    "HH:MM:SS.MSS": "ГГ:ХХ:СС.МСС"
  },
  dateTexts: {
    DMY: "dd.mm.yyyy",
    MDY: "mm.dd.yyyy",
    YMD: "yyyy.mm.dd"
  },
  digitalInformationUnits: ["Б", "КБ", "МБ"],
  passwordTexts: ["Показати пароль", "Приховати пароль"],
  copyTexts: ["Копіювати", "Скопійовано"],
  shortCalendarMonths: [
    "Січ",
    "Лют",
    "Бер",
    "Квіт",
    "Трав",
    "Черв",
    "Лип",
    "Серп",
    "Верес",
    "Жовт",
    "Лист",
    "Груд"
  ],
  pagination: ["Попередня сторінка", "Наступна сторінка"],
  fileTexts: {
    loadingError: "Помилка завантаження",
    preview: "Попередній перегляд",
    remove: "Видалити"
  },
  inputFileTexts: {
    defaultLabelSingle: "та перенесіть його сюди",
    defaultLabelMultiple: "та перенесіть їx сюди",
    defaultLinkSingle: "Виберіть файл",
    defaultLinkMultiple: "Виберіть файли",
    maxSizeRejectionReason: "Файл перевищує розмір ",
    formatRejectionReason: "Невірний формат файлу",
    drop: "Помістіть файл сюди",
    dropMultiple: "Помістіть файли сюди"
  },
  multiSelectTexts: {
    all: "Вибрати все",
    none: "Не вибирати"
  },
  prompt: {
    yes: "Так",
    no: "Немає"
  }
};
var TUI_UKRAINIAN_LANGUAGE = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({ name: "ukrainian" }, TUI_UKRAINIAN_LANGUAGE_CORE), TUI_UKRAINIAN_LANGUAGE_KIT), TUI_UKRAINIAN_LANGUAGE_ADDON_COMMERCE), TUI_UKRAINIAN_LANGUAGE_ADDON_TABLE), TUI_UKRAINIAN_LANGUAGE_ADDON_EDITOR), TUI_UKRAINIAN_LANGUAGE_ADDON_PREVIEW);

// node_modules/@taiga-ui/i18n/fesm2015/taiga-ui-i18n-languages-vietnamese.js
var TUI_VIETNAMESE_LANGUAGE_ADDON_COMMERCE = {
  cardNumber: ["Số thẻ", "Số thẻ"],
  cardExpiry: ["Hết hạn", "Ngày hết hạn"]
};
var TUI_VIETNAMESE_LANGUAGE_ADDON_EDITOR = {
  colorSelectorModeNames: ["Màu thuần", "Màu chuyển sắc"],
  toolbarTools: {
    undo: "Hoàn tác",
    redo: "Làm lại",
    font: "Phông chữ",
    fontStyle: "Kiểu chữ",
    fontSize: "Cỡ chữ",
    bold: "In đậm",
    italic: "In nghiêng",
    underline: "Gạch chân",
    strikeThrough: "Gạch ngang",
    justify: "Canh lề",
    justifyLeft: "Canh trái",
    justifyCenter: "Canh giữa",
    justifyRight: "Canh phải",
    justifyFull: "Canh đều",
    list: "Danh sách",
    indent: "Thụt vào",
    outdent: "Thụt ra",
    unorderedList: "Danh sách không đánh số",
    orderedList: "Danh sách được đánh số",
    quote: "Trích dẫn",
    foreColor: "Màu",
    backColor: "Màu nền",
    hiliteColor: "Màu đánh dấu",
    clear: "Xóa",
    link: "Liên kết",
    attach: "Tệp đính kèm",
    tex: "Chèn TeX",
    code: "Đoạn mã",
    image: "Chèn hình",
    insertHorizontalRule: "Chèn thước ngang",
    superscript: "Chỉ số trên",
    subscript: "Chỉ số dưới",
    insertTable: "Chèn bảng",
    hiliteGroup: "Hilite group",
    insertGroup: "Chèn nhóm",
    removeGroup: "Xóa nhóm",
    insertAnchor: "Chèn mỏ neo",
    mergeCells: "Hợp nhất ô",
    splitCells: "Tách ô",
    rowsColumnsManaging: "Quản lý hàng và cột",
    cellColor: "Màu ô",
    setDetails: "Chi tiết",
    removeDetails: "Hủy chi tiết"
  },
  editorEditLink: {
    urlExample: "example.com",
    anchorExample: "anchor"
  },
  editorTableCommands: [
    ["Chèn cột trước", "Chèn cột sau"],
    ["Chèn hàng trước", "Chèn hàng sau"],
    ["Xóa cột", "Xóa hàng"]
  ],
  editorCodeOptions: ["Mã trong dòng", "Mã trong khối"],
  editorFontOptions: {
    small: "Nhỏ",
    normal: "Thường",
    large: "Lớn",
    title: "Tiêu đề",
    subtitle: "Phụ đề"
  }
};
var TUI_VIETNAMESE_LANGUAGE_ADDON_PREVIEW = {
  previewTexts: {
    rotate: "Xoay"
  },
  zoomTexts: {
    zoomOut: "Thu nhỏ",
    zoomIn: "Phóng to",
    reset: "Đặt lại"
  }
};
var TUI_VIETNAMESE_LANGUAGE_ADDON_TABLE = {
  showHideText: "Hiện/Ẩn",
  paginationTexts: {
    pages: "Tổng số trang",
    linesPerPage: "Số dòng mỗi trang",
    of: "trên"
  }
};
var TUI_VIETNAMESE_LANGUAGE_COUNTRIES = {
  [TuiCountryIsoCode.AD]: "Andorra",
  [TuiCountryIsoCode.AE]: "Các tiểu Vương quốc Ả Rập Thống nhất",
  [TuiCountryIsoCode.AF]: "Afghanistan",
  [TuiCountryIsoCode.AG]: "Antigua và Barbuda",
  [TuiCountryIsoCode.AI]: "Anguilla",
  [TuiCountryIsoCode.AL]: "Albania",
  [TuiCountryIsoCode.AM]: "Armenia",
  [TuiCountryIsoCode.AO]: "Angola",
  [TuiCountryIsoCode.AR]: "Argentina",
  [TuiCountryIsoCode.AT]: "Áo",
  [TuiCountryIsoCode.AU]: "Úc",
  [TuiCountryIsoCode.AW]: "Aruba",
  [TuiCountryIsoCode.AZ]: "Azerbaijan",
  [TuiCountryIsoCode.BA]: "Bosnia và Herzegovina",
  [TuiCountryIsoCode.BB]: "Barbados",
  [TuiCountryIsoCode.BD]: "Bangladesh",
  [TuiCountryIsoCode.BE]: "Bỉ",
  [TuiCountryIsoCode.BF]: "Burkina Faso",
  [TuiCountryIsoCode.BG]: "Bulgaria",
  [TuiCountryIsoCode.BH]: "Bahrain",
  [TuiCountryIsoCode.BI]: "Burundi",
  [TuiCountryIsoCode.BJ]: "Benin",
  [TuiCountryIsoCode.BL]: "Saint Barthélemy",
  [TuiCountryIsoCode.BM]: "Bermuda",
  [TuiCountryIsoCode.BN]: "Brunei",
  [TuiCountryIsoCode.BO]: "Bolivia",
  [TuiCountryIsoCode.BQ]: "Bonaire, Sint Eustatius và Saba",
  [TuiCountryIsoCode.BR]: "Brazil",
  [TuiCountryIsoCode.BS]: "Bahamas",
  [TuiCountryIsoCode.BT]: "Bhutan",
  [TuiCountryIsoCode.BW]: "Botswana",
  [TuiCountryIsoCode.BY]: "Belarus",
  [TuiCountryIsoCode.BZ]: "Belize",
  [TuiCountryIsoCode.CA]: "Canada",
  [TuiCountryIsoCode.CD]: "Cộng hoà dân chủ Congo",
  [TuiCountryIsoCode.CF]: "Cộng hoà Trung Phi",
  [TuiCountryIsoCode.CG]: "Cộng hoà Congo",
  [TuiCountryIsoCode.CH]: "Thụy Sĩ",
  [TuiCountryIsoCode.CI]: "Bờ Biển Ngà",
  [TuiCountryIsoCode.CL]: "Chile",
  [TuiCountryIsoCode.CM]: "Cameroon",
  [TuiCountryIsoCode.CN]: "Trung Quốc",
  [TuiCountryIsoCode.CO]: "Colombia",
  [TuiCountryIsoCode.CR]: "Costa Rica",
  [TuiCountryIsoCode.CU]: "Cuba",
  [TuiCountryIsoCode.CV]: "Cape Verde",
  [TuiCountryIsoCode.CW]: "Curaçao",
  [TuiCountryIsoCode.CY]: "Síp",
  [TuiCountryIsoCode.CZ]: "Cộng hòa Séc",
  [TuiCountryIsoCode.DE]: "Đức",
  [TuiCountryIsoCode.DJ]: "Djibouti",
  [TuiCountryIsoCode.DK]: "Đan Mạch",
  [TuiCountryIsoCode.DM]: "Dominica",
  [TuiCountryIsoCode.DO]: "Cộng hoà Dominica",
  [TuiCountryIsoCode.DZ]: "Algeria",
  [TuiCountryIsoCode.EC]: "Ecuador",
  [TuiCountryIsoCode.EE]: "Estonia",
  [TuiCountryIsoCode.EG]: "Ai Cập",
  [TuiCountryIsoCode.ER]: "Eritrea",
  [TuiCountryIsoCode.ES]: "Tây Ban Nha",
  [TuiCountryIsoCode.ET]: "Ethiopia",
  [TuiCountryIsoCode.FI]: "Phần Lan",
  [TuiCountryIsoCode.FJ]: "Fiji",
  [TuiCountryIsoCode.FK]: "Quần đảo Falkland",
  [TuiCountryIsoCode.FM]: "Liên bang Micronesia",
  [TuiCountryIsoCode.FR]: "Pháp",
  [TuiCountryIsoCode.GA]: "Gabon",
  [TuiCountryIsoCode.GB]: "Vương quốc Anh",
  [TuiCountryIsoCode.GD]: "Grenada",
  [TuiCountryIsoCode.GE]: "Georgia",
  [TuiCountryIsoCode.GF]: "Guyana",
  [TuiCountryIsoCode.GH]: "Ghana",
  [TuiCountryIsoCode.GI]: "Gibraltar",
  [TuiCountryIsoCode.GL]: "Greenland",
  [TuiCountryIsoCode.GM]: "Gambia",
  [TuiCountryIsoCode.GN]: "Guinea",
  [TuiCountryIsoCode.GP]: "Guadeloupe",
  [TuiCountryIsoCode.GQ]: "Guinea Xích đạo",
  [TuiCountryIsoCode.GR]: "Hy Lạp",
  [TuiCountryIsoCode.GT]: "Guatemala",
  [TuiCountryIsoCode.GW]: "Guinea-Bissau",
  [TuiCountryIsoCode.GY]: "Guyana",
  [TuiCountryIsoCode.HK]: "Hồng Kông",
  [TuiCountryIsoCode.HN]: "Honduras",
  [TuiCountryIsoCode.HR]: "Croatia",
  [TuiCountryIsoCode.HT]: "Haiti",
  [TuiCountryIsoCode.HU]: "Hungary",
  [TuiCountryIsoCode.ID]: "Indonesia",
  [TuiCountryIsoCode.IE]: "Ireland",
  [TuiCountryIsoCode.IL]: "Israel",
  [TuiCountryIsoCode.IN]: "Ấn Độ",
  [TuiCountryIsoCode.IQ]: "Iraq",
  [TuiCountryIsoCode.IR]: "Iran",
  [TuiCountryIsoCode.IS]: "Iceland",
  [TuiCountryIsoCode.IT]: "Italy",
  [TuiCountryIsoCode.JM]: "Jamaica",
  [TuiCountryIsoCode.JO]: "Jordan",
  [TuiCountryIsoCode.JP]: "Nhật Bản",
  [TuiCountryIsoCode.KE]: "Kenya",
  [TuiCountryIsoCode.KG]: "Kyrgyzstan",
  [TuiCountryIsoCode.KH]: "Campuchia",
  [TuiCountryIsoCode.KM]: "Comoros",
  [TuiCountryIsoCode.KN]: "Saint Kitts và Nevis",
  [TuiCountryIsoCode.KP]: "Triều Tiên",
  [TuiCountryIsoCode.KR]: "Hàn Quốc",
  [TuiCountryIsoCode.KW]: "Kuwait",
  [TuiCountryIsoCode.KY]: "Quần đảo Cayman",
  [TuiCountryIsoCode.KZ]: "Kazakhstan",
  [TuiCountryIsoCode.LA]: "Lào",
  [TuiCountryIsoCode.LB]: "Lebanon",
  [TuiCountryIsoCode.LC]: "Saint Lucia",
  [TuiCountryIsoCode.LI]: "Liechtenstein",
  [TuiCountryIsoCode.LK]: "Sri Lanka",
  [TuiCountryIsoCode.LR]: "Liberia",
  [TuiCountryIsoCode.LS]: "Lesotho",
  [TuiCountryIsoCode.LT]: "Litva",
  [TuiCountryIsoCode.LU]: "Luxembourg",
  [TuiCountryIsoCode.LV]: "Latvia",
  [TuiCountryIsoCode.LY]: "Libya",
  [TuiCountryIsoCode.MA]: "Ma Rốc",
  [TuiCountryIsoCode.MC]: "Monaco",
  [TuiCountryIsoCode.MD]: "Moldova",
  [TuiCountryIsoCode.ME]: "Montenegro",
  [TuiCountryIsoCode.MF]: "Saint Martin",
  [TuiCountryIsoCode.MG]: "Madagascar",
  [TuiCountryIsoCode.MK]: "Bắc Macedonia",
  [TuiCountryIsoCode.ML]: "Mali",
  [TuiCountryIsoCode.MM]: "Myanmar",
  [TuiCountryIsoCode.MN]: "Mông Cổ",
  [TuiCountryIsoCode.MO]: "Ma Cao",
  [TuiCountryIsoCode.MQ]: "Martinique",
  [TuiCountryIsoCode.MR]: "Mauritania",
  [TuiCountryIsoCode.MS]: "Montserrat",
  [TuiCountryIsoCode.MT]: "Malta",
  [TuiCountryIsoCode.MU]: "Mauritius",
  [TuiCountryIsoCode.MV]: "Maldives",
  [TuiCountryIsoCode.MW]: "Malawi",
  [TuiCountryIsoCode.MX]: "Mexico",
  [TuiCountryIsoCode.MY]: "Malaysia",
  [TuiCountryIsoCode.MZ]: "Mozambique",
  [TuiCountryIsoCode.NA]: "Namibia",
  [TuiCountryIsoCode.NC]: "Nouvelle-Calédonie",
  [TuiCountryIsoCode.NE]: "Niger",
  [TuiCountryIsoCode.NG]: "Nigeria",
  [TuiCountryIsoCode.NI]: "Nicaragua",
  [TuiCountryIsoCode.NL]: "Hà Lan",
  [TuiCountryIsoCode.NO]: "Na Uy",
  [TuiCountryIsoCode.NP]: "Nepal",
  [TuiCountryIsoCode.NZ]: "New Zealand",
  [TuiCountryIsoCode.OM]: "Oman",
  [TuiCountryIsoCode.PA]: "Panama",
  [TuiCountryIsoCode.PE]: "Peru",
  [TuiCountryIsoCode.PF]: "Polynesia thuộc Pháp (Tahiti)",
  [TuiCountryIsoCode.PG]: "Papua New Guinea",
  [TuiCountryIsoCode.PH]: "Philippines",
  [TuiCountryIsoCode.PK]: "Pakistan",
  [TuiCountryIsoCode.PL]: "Ba Lan",
  [TuiCountryIsoCode.PT]: "Bồ Đào Nha",
  [TuiCountryIsoCode.PW]: "Palau",
  [TuiCountryIsoCode.PY]: "Paraguay",
  [TuiCountryIsoCode.QA]: "Qatar",
  [TuiCountryIsoCode.RE]: "Réunion",
  [TuiCountryIsoCode.RO]: "Romania",
  [TuiCountryIsoCode.RS]: "Serbia",
  [TuiCountryIsoCode.RU]: "Nga",
  [TuiCountryIsoCode.RW]: "Rwanda",
  [TuiCountryIsoCode.SA]: "Ả Rập Xê-út",
  [TuiCountryIsoCode.SB]: "Quần đảo Solomon",
  [TuiCountryIsoCode.SC]: "Seychelles",
  [TuiCountryIsoCode.SD]: "Sudan",
  [TuiCountryIsoCode.SE]: "Thụy Điển",
  [TuiCountryIsoCode.SG]: "Singapore",
  [TuiCountryIsoCode.SH]: "Saint Helena",
  [TuiCountryIsoCode.SI]: "Slovenia",
  [TuiCountryIsoCode.SK]: "Slovakia",
  [TuiCountryIsoCode.SL]: "Sierra Leone",
  [TuiCountryIsoCode.SM]: "San Marino",
  [TuiCountryIsoCode.SN]: "Senegal",
  [TuiCountryIsoCode.SO]: "Somalia",
  [TuiCountryIsoCode.SR]: "Suriname",
  [TuiCountryIsoCode.ST]: "Sao Tome và Principe",
  [TuiCountryIsoCode.SV]: "El Salvador",
  [TuiCountryIsoCode.SX]: "Sint Maarten",
  [TuiCountryIsoCode.SY]: "Syria",
  [TuiCountryIsoCode.SZ]: "Swaziland",
  [TuiCountryIsoCode.TC]: "Turks và Caicos",
  [TuiCountryIsoCode.TD]: "Chad",
  [TuiCountryIsoCode.TG]: "Togo",
  [TuiCountryIsoCode.TH]: "Thái Lan",
  [TuiCountryIsoCode.TJ]: "Tajikistan",
  [TuiCountryIsoCode.TL]: "Timor-Leste",
  [TuiCountryIsoCode.TM]: "Turkmenistan",
  [TuiCountryIsoCode.TN]: "Tunisia",
  [TuiCountryIsoCode.TO]: "Tonga",
  [TuiCountryIsoCode.TR]: "Thổ Nhĩ Kỳ",
  [TuiCountryIsoCode.TT]: "Trinidad và Tobago",
  [TuiCountryIsoCode.TW]: "Đài Loan",
  [TuiCountryIsoCode.TZ]: "Tanzania",
  [TuiCountryIsoCode.UA]: "Ukraina",
  [TuiCountryIsoCode.UG]: "Uganda",
  [TuiCountryIsoCode.US]: "Hoa Kỳ",
  [TuiCountryIsoCode.UY]: "Uruguay",
  [TuiCountryIsoCode.UZ]: "Uzbekistan",
  [TuiCountryIsoCode.VC]: "Saint Vincent và Grenadines",
  [TuiCountryIsoCode.VE]: "Venezuela",
  [TuiCountryIsoCode.VG]: "Quần đảo Virgin thuộc Anh",
  [TuiCountryIsoCode.VN]: "Việt Nam",
  [TuiCountryIsoCode.VU]: "Vanuatu",
  [TuiCountryIsoCode.WS]: "Samoa",
  [TuiCountryIsoCode.XK]: "Kosovo",
  [TuiCountryIsoCode.YE]: "Yemen",
  [TuiCountryIsoCode.YT]: "Mayotte",
  [TuiCountryIsoCode.ZA]: "Nam Phi",
  [TuiCountryIsoCode.ZM]: "Zambia",
  [TuiCountryIsoCode.ZW]: "Zimbabwe"
};
var TUI_VIETNAMESE_LANGUAGE_CORE = {
  months: [
    "Tháng 1",
    "Tháng 2",
    "Tháng 3",
    "Tháng 4",
    "Tháng 5",
    "Tháng 6",
    "Tháng 7",
    "Tháng 8",
    "Tháng 9",
    "Tháng 10",
    "Tháng 11",
    "Tháng 12"
  ],
  close: "Đóng",
  nothingFoundMessage: "Không tìm thấy",
  defaultErrorMessage: "Giá trị không hợp lệ",
  spinTexts: ["Trước", "Sau"],
  shortWeekDays: ["T2", "T3", "T4", "T5", "T6", "T7", "CN"],
  countries: TUI_VIETNAMESE_LANGUAGE_COUNTRIES
};
var TUI_VIETNAMESE_LANGUAGE_KIT = {
  cancel: "Hủy bỏ",
  done: "Hoàn thành",
  more: "Thêm",
  otherDate: "Ngày khác...",
  showAll: "Hiển thị tất cả",
  hide: "Ẩn",
  mobileCalendarTexts: ["Chọn ngày", "Chọn phạm vi", "Chọn ngày"],
  range: ["từ", "đến"],
  countTexts: ["Cộng", "Trừ"],
  time: {
    "HH:MM": "HH:MM",
    "HH:MM:SS": "HH:MM:SS",
    "HH:MM:SS.MSS": "HH:MM:SS.MSS"
  },
  dateTexts: {
    DMY: "dd.mm.yyyy",
    MDY: "mm.dd.yyyy",
    YMD: "yyyy.mm.dd"
  },
  digitalInformationUnits: ["B", "KiB", "MiB"],
  passwordTexts: ["Hiện mật khẩu", "Ẩn mật khẩu"],
  copyTexts: ["Sao chép", "Đã sao chép"],
  shortCalendarMonths: [
    "Thg 1",
    "Thg 2",
    "Thg 3",
    "Thg 4",
    "Thg 5",
    "Thg 6",
    "Thg 7",
    "Thg 8",
    "Thg 9",
    "Thg 10",
    "Thg 11",
    "Thg 12"
  ],
  pagination: ["Trang trước", "Trang sau"],
  fileTexts: {
    loadingError: "Lỗi tải",
    preview: "Xem trước",
    remove: "Gỡ bỏ"
  },
  inputFileTexts: {
    defaultLabelSingle: "hoặc kéo nó vào đây",
    defaultLabelMultiple: "hoặc kéo nó vào đây",
    defaultLinkSingle: "Chọn một tệp",
    defaultLinkMultiple: "Chọn nhiều tệp",
    maxSizeRejectionReason: "Tệp vượt quá kích thước ",
    formatRejectionReason: "Tệp sai định dạng",
    drop: "Thả tệp tại đây",
    dropMultiple: "Thả nhiều tệp tại đây"
  },
  multiSelectTexts: {
    all: "Chọn tất cả",
    none: "Không chọn"
  },
  prompt: {
    yes: "Đúng",
    no: "Không"
  }
};
var TUI_VIETNAMESE_LANGUAGE = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({ name: "vietnamese" }, TUI_VIETNAMESE_LANGUAGE_CORE), TUI_VIETNAMESE_LANGUAGE_KIT), TUI_VIETNAMESE_LANGUAGE_ADDON_TABLE), TUI_VIETNAMESE_LANGUAGE_ADDON_COMMERCE), TUI_VIETNAMESE_LANGUAGE_ADDON_EDITOR), TUI_VIETNAMESE_LANGUAGE_ADDON_PREVIEW);

// node_modules/@taiga-ui/i18n/fesm2015/taiga-ui-i18n-tokens.js
var TUI_DEFAULT_LANGUAGE = new InjectionToken("[TUI_DEFAULT_LANGUAGE]", {
  factory: () => TUI_ENGLISH_LANGUAGE
});
var TUI_LANGUAGE = new InjectionToken("[TUI_LANGUAGE]", {
  factory: () => of(inject(TUI_DEFAULT_LANGUAGE))
});
var TUI_LANGUAGE_LOADER = new InjectionToken("[TUI_LANGUAGE_LOADER]");
var TUI_LANGUAGE_STORAGE_KEY = new InjectionToken("[TUI_LANGUAGE_STORAGE_KEY]", {
  factory: () => "tuiLanguage"
});

// node_modules/@taiga-ui/i18n/fesm2015/taiga-ui-i18n-switch.js
function normalizeCommonJSImport(importPromise) {
  return __awaiter(this, void 0, void 0, function* () {
    return importPromise.then((m) => m.default || m);
  });
}
function tuiLoadLanguage(language, loader) {
  return from(normalizeCommonJSImport(loader(language))).pipe(map((module) => module === null || module === void 0 ? void 0 : module[`TUI_${language.toUpperCase()}_LANGUAGE`]));
}
function tuiAsyncLoadLanguage(language, loader, fallback) {
  return language && loader ? tuiLoadLanguage(language, loader) : of(fallback);
}
var TuiLanguageSwitcher = class extends BehaviorSubject {
  constructor(fallback, key, storage, loader) {
    super(tuiAsyncLoadLanguage(storage.getItem(key), loader, fallback));
    this.fallback = fallback;
    this.key = key;
    this.storage = storage;
    this.loader = loader;
  }
  get language() {
    return this.storage.getItem(this.key) || this.fallback.name;
  }
  setLanguage(language) {
    this.storage.setItem(this.key, language);
    this.next(tuiAsyncLoadLanguage(language, this.loader, this.fallback));
  }
  clear() {
    this.storage.removeItem(this.key);
    this.next(of(this.fallback));
  }
};
TuiLanguageSwitcher.ɵfac = function TuiLanguageSwitcher_Factory(t) {
  return new (t || TuiLanguageSwitcher)(ɵɵinject(TUI_DEFAULT_LANGUAGE), ɵɵinject(TUI_LANGUAGE_STORAGE_KEY), ɵɵinject(LOCAL_STORAGE), ɵɵinject(TUI_LANGUAGE_LOADER, 8));
};
TuiLanguageSwitcher.ɵprov = ɵɵdefineInjectable({
  token: TuiLanguageSwitcher,
  factory: TuiLanguageSwitcher.ɵfac,
  providedIn: "root"
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiLanguageSwitcher, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], function() {
    return [{
      type: void 0,
      decorators: [{
        type: Inject,
        args: [TUI_DEFAULT_LANGUAGE]
      }]
    }, {
      type: void 0,
      decorators: [{
        type: Inject,
        args: [TUI_LANGUAGE_STORAGE_KEY]
      }]
    }, {
      type: void 0,
      decorators: [{
        type: Inject,
        args: [LOCAL_STORAGE]
      }]
    }, {
      type: void 0,
      decorators: [{
        type: Optional
      }, {
        type: Inject,
        args: [TUI_LANGUAGE_LOADER]
      }]
    }];
  }, null);
})();

// node_modules/@taiga-ui/i18n/fesm2015/taiga-ui-i18n-tools.js
function tuiExtractI18n(key) {
  return () => inject(TUI_LANGUAGE).pipe(switchMap((streamOrValue) => isObservable(streamOrValue) ? streamOrValue : of(streamOrValue)), map((lang) => lang[key]));
}

// node_modules/@taiga-ui/core/fesm2015/taiga-ui-core-utils-dom.js
function tuiCheckFixedPosition(element) {
  if (!element || typeof getComputedStyle === "undefined") {
    return false;
  }
  const style2 = getComputedStyle(element);
  return style2.getPropertyValue("position") === "fixed" || tuiCheckFixedPosition(element.parentElement);
}
function tuiGetSafeAreaSize() {
  if (!CSS.supports("padding-top: env(safe-area-inset-top)")) {
    return 0;
  }
  const div = document.createElement("div");
  div.style.paddingTop = "env(safe-area-inset-top)";
  document.body.appendChild(div);
  const safeAreaSize = parseInt(window.getComputedStyle(div).paddingTop, 10) || 0;
  document.body.removeChild(div);
  return safeAreaSize;
}
function tuiGetScreenWidth(doc) {
  return Math.max(doc.documentElement.clientWidth, doc.defaultView ? doc.defaultView.innerWidth : 0);
}
function tuiGetViewportHeight({ document: document2, innerHeight }) {
  return Math.max(document2.documentElement.clientHeight || 0, innerHeight || 0);
}
function tuiGetViewportWidth({ document: document2, innerWidth }) {
  return Math.max(document2.documentElement.clientWidth || 0, innerWidth || 0);
}
function tuiGetWordRange(currentRange) {
  const range = currentRange.cloneRange();
  const { startContainer, startOffset, endContainer, endOffset } = range;
  const { ownerDocument } = startContainer;
  if (!ownerDocument) {
    return range;
  }
  const treeWalker = ownerDocument.createTreeWalker(ownerDocument.body, NodeFilter.SHOW_TEXT, svgNodeFilter);
  treeWalker.currentNode = startContainer;
  do {
    const container = treeWalker.currentNode;
    const textContent = container.textContent || "";
    const content = container === startContainer ? textContent.slice(0, Math.max(0, startOffset + 1)) : textContent;
    const offset = Math.max(content.lastIndexOf(" "), content.lastIndexOf(CHAR_NO_BREAK_SPACE), content.lastIndexOf(CHAR_ZERO_WIDTH_SPACE)) + 1;
    range.setStart(container, 0);
    if (offset) {
      range.setStart(container, offset);
      break;
    }
  } while (treeWalker.previousNode());
  treeWalker.currentNode = endContainer;
  do {
    const container = treeWalker.currentNode;
    const textContent = container.textContent || "";
    const content = container === endContainer ? textContent.slice(endOffset + 1) : textContent;
    const offset = [
      content.indexOf(" "),
      content.indexOf(CHAR_NO_BREAK_SPACE),
      content.indexOf(CHAR_ZERO_WIDTH_SPACE)
    ].reduce((result, item) => result === -1 || item === -1 ? Math.max(result, item) : Math.min(result, item), -1);
    range.setEnd(container, textContent.length);
    if (offset !== -1) {
      range.setEnd(container, offset + textContent.length - content.length);
      break;
    }
  } while (treeWalker.nextNode());
  return range;
}
var WIDTH_SEARCH = 'width="';
var HEIGHT_SEARCH = 'height="';
var START = "<svg";
function tuiProcessIcon(source, name) {
  if (source.includes(`id="${name}"`)) {
    return source;
  }
  const src = source.slice(Math.max(0, source.indexOf(START)));
  const attributes = src.slice(0, Math.max(0, src.indexOf(">")));
  if (!(attributes === null || attributes === void 0 ? void 0 : attributes.includes(WIDTH_SEARCH)) || !attributes.includes(HEIGHT_SEARCH)) {
    return `${src.replace(START, `<svg xmlns="http://www.w3.org/2000/svg"><g id="${name}" xmlns="http://www.w3.org/2000/svg"><svg`)}</g></svg>`;
  }
  const indexOfWidth = attributes.indexOf(WIDTH_SEARCH);
  const indexOfHeight = attributes.indexOf(HEIGHT_SEARCH);
  const widthOffset = indexOfWidth + WIDTH_SEARCH.length;
  const heightOffset = indexOfHeight + HEIGHT_SEARCH.length;
  const widthString = attributes.slice(widthOffset, attributes.indexOf('"', widthOffset));
  const heightString = attributes.slice(heightOffset, attributes.indexOf('"', heightOffset));
  if (!heightString || !widthString || widthString.includes("%") || heightString.includes("%") || widthString.includes("em") || heightString.includes("em")) {
    return src.replace(START, `<svg id="${name}"`);
  }
  const width = parseInt(widthString, 10);
  const height = parseInt(heightString, 10);
  return `<g id="${name}" xmlns="http://www.w3.org/2000/svg"><svg  x="50%" y="50%" width="${width / 16}em" height="${height / 16}em" overflow="visible" viewBox="0 0 ${width} ${height}"><svg x="${-width / 2}" y="${-height / 2}">${src}</svg></svg></g>`;
}

// node_modules/@taiga-ui/core/fesm2015/taiga-ui-core-constants.js
var TUI_CACHE_BUSTING_PAYLOAD = `?v=${TUI_VERSION}`;
var TUI_DECIMAL_SYMBOLS = [",", "."];
var DEFAULT_ICONS_PATH = (name) => name.includes(".svg#") ? name : `#${name}`;
var TUI_DEFAULT_MARKER_HANDLER = () => EMPTY_ARRAY;
var TUI_DEFAULT_NUMBER_FORMAT = {
  decimalLimit: Infinity,
  decimalSeparator: ",",
  thousandSeparator: CHAR_NO_BREAK_SPACE,
  zeroPadding: true,
  rounding: "truncate",
  decimal: "not-zero"
};
var tuiEditingKeys = [
  "Spacebar",
  "Backspace",
  "Delete",
  "ArrowLeft",
  "ArrowRight",
  "Left",
  "Right",
  "End",
  "Home"
];
var TUI_EXPAND_LOADED = "tui-expand-loaded";
var TUI_SCROLL_INTO_VIEW = "tui-scroll-into-view";
var TUI_SCROLLABLE = "tui-scrollable";
var TUI_ICON_ERROR = "tui-icon-error";
var TUI_HINT_DIRECTIONS = [
  "bottom-left",
  "bottom",
  "bottom-right",
  "top-left",
  "top",
  "top-right",
  "left-top",
  "left",
  "left-bottom",
  "right-top",
  "right",
  "right-bottom"
];
var MASK_CARET_TRAP = "[]";
var TUI_DIGIT_REGEXP = /\d/;
var TUI_NON_DIGIT_REGEXP = /\D/;
var TUI_NON_DIGITS_REGEXP = /\D+/g;
var TUI_LEADING_ZEROES_REGEXP = /^0+/;
var TUI_MASK_SYMBOLS_REGEXP = /[ \-_()]/g;
var TUI_LAST_PUNCTUATION_MARK_REGEXP = /[.,\\/#!$%\\^&\\*;:{}=\\-_`~()]$/;
var TUI_LATIN_REGEXP = /[A-z]/;
var TUI_LATIN_AND_NUMBERS_REGEXP = /[A-z|0-9]/;

// node_modules/@taiga-ui/core/fesm2015/taiga-ui-core-utils-format.js
function tuiCapitalize(value) {
  return value.toLowerCase().replace(/(?:^|\s)\S/g, (char) => char.toUpperCase());
}
function tuiCapitalizeFirstLetter(value) {
  return `${value.charAt(0).toUpperCase()}${value.slice(1)}`;
}
function tuiNumberToStringWithoutExp(value) {
  const valueAsString = String(value);
  const [numberPart, expPart] = valueAsString.split("e-");
  let valueWithoutExp = valueAsString;
  if (expPart) {
    const [, fractionalPart] = numberPart.split(".");
    const decimalDigits = Number(expPart) + ((fractionalPart === null || fractionalPart === void 0 ? void 0 : fractionalPart.length) || 0);
    valueWithoutExp = value.toFixed(decimalDigits);
  }
  return valueWithoutExp;
}
function tuiGetFractionPartPadded(value, precision) {
  const [, fractionPartPadded = ""] = tuiNumberToStringWithoutExp(value).split(".");
  return tuiIsNumber(precision) ? fractionPartPadded.slice(0, Math.max(0, precision)) : fractionPartPadded;
}
function tuiFormatNumber(value, settings = {}) {
  const { decimalLimit, decimalSeparator, thousandSeparator, zeroPadding, rounding } = Object.assign(Object.assign({}, TUI_DEFAULT_NUMBER_FORMAT), settings);
  const rounded = Number.isFinite(decimalLimit) ? tuiRoundWith({ value, precision: decimalLimit, method: rounding }) : value;
  const integerPartString = String(Math.floor(Math.abs(rounded)));
  let fractionPartPadded = tuiGetFractionPartPadded(rounded, decimalLimit);
  if (Number.isFinite(decimalLimit)) {
    if (zeroPadding) {
      const zeroPaddingSize = Math.max(decimalLimit - fractionPartPadded.length, 0);
      const zeroPartString = "0".repeat(zeroPaddingSize);
      fractionPartPadded = `${fractionPartPadded}${zeroPartString}`;
    } else {
      fractionPartPadded = fractionPartPadded.replace(/0*$/, "");
    }
  }
  const remainder = integerPartString.length % 3;
  const sign = value < 0 ? CHAR_HYPHEN : "";
  let result = sign + integerPartString.charAt(0);
  for (let i = 1; i < integerPartString.length; i++) {
    if (i % 3 === remainder && integerPartString.length > 3) {
      result += thousandSeparator;
    }
    result += integerPartString.charAt(i);
  }
  return fractionPartPadded ? result + decimalSeparator + fractionPartPadded : result;
}
function tuiFormatPhone(value, countryCode, phoneMask) {
  if (!value) {
    return "";
  }
  let result = countryCode;
  countryCode = countryCode.replace(/[()]/g, "");
  if (!value.startsWith(countryCode)) {
    value = countryCode + value.replace(CHAR_PLUS, "");
  }
  const splitPhoneMask = phoneMask.split("");
  const splitValue = value.slice(countryCode.length).split("");
  result += " ";
  if (splitValue.length === 0) {
    return result;
  }
  for (const mask of splitPhoneMask) {
    if (splitValue.length === 0) {
      break;
    }
    if (mask === "#") {
      result += splitValue[0] || "";
      splitValue.splice(0, 1);
    } else {
      result += mask;
    }
  }
  return result;
}
function tuiOtherDecimalSymbol(symbol) {
  return symbol === "." ? "," : ".";
}

// node_modules/@taiga-ui/core/fesm2015/taiga-ui-core-utils-mask.js
function addDecimalSymbolIfNeeded(value, decimalSymbol = ",") {
  return !value.includes(decimalSymbol) ? value + decimalSymbol : value;
}
function calculateSafariCaret(previousValue = "", current, previousCaret, decimalSymbol = ",") {
  const tailRegex = new RegExp(`${decimalSymbol}.+`);
  const previousWithoutTail = previousValue.replace(tailRegex, "");
  const currentWithoutTail = current.replace(tailRegex, "");
  const pasteOrCutOperation = Math.abs(previousWithoutTail.length - currentWithoutTail.length) > 2;
  if (pasteOrCutOperation) {
    return current.length;
  }
  if (previousValue.length === current.length) {
    if (previousValue.indexOf(decimalSymbol) <= previousCaret) {
      return calculateChangedTailIndex(previousValue, current);
    }
    return previousWithoutTail === currentWithoutTail ? previousCaret - 1 : previousCaret + 1;
  }
  if (previousValue.length === 0) {
    return 1;
  }
  const changeLength = current.length - previousValue.length;
  return previousCaret + changeLength;
}
function calculateChangedTailIndex(previous, current) {
  for (let i = 0; i < current.length; i++) {
    if (previous[i] !== current[i]) {
      return current[i] === "0" ? i : i + 1;
    }
  }
  return current.length;
}
function calculateCaretGap(previousValue = "", current, thousandSymbol) {
  const pasteOrCutOperation = Math.abs(previousValue.length - current.length) > 2;
  if (pasteOrCutOperation) {
    return 0;
  }
  const wereSpaces = previousValue.split(thousandSymbol).length;
  const nowSpaces = current.split(thousandSymbol).length;
  return nowSpaces - wereSpaces;
}
function tuiCreateAutoCorrectedNumberPipe(decimalLimit = 0, decimalSymbol = ",", thousandSymbol = CHAR_NO_BREAK_SPACE, nativeInput, allowNegative, isIOS = false) {
  ngDevMode && tuiAssert.assert(decimalLimit >= 0);
  let previousCaret = -1;
  const unlucky = !!nativeInput && tuiIsSafari(nativeInput) || isIOS;
  if (nativeInput && unlucky) {
    nativeInput.addEventListener("beforeinput", () => {
      previousCaret = nativeInput.selectionStart || 0;
    });
  }
  return (conformedValue, config) => {
    if (!conformedValue && config.rawValue === CHAR_HYPHEN && allowNegative) {
      return CHAR_HYPHEN;
    }
    if (nativeInput && unlucky && tuiIsNativeFocused(nativeInput)) {
      const caret = calculateSafariCaret(config.previousConformedValue, conformedValue, previousCaret);
      setTimeout(() => {
        nativeInput.setSelectionRange(caret, caret);
      });
    }
    if (nativeInput && nativeInput.ownerDocument !== tuiGetDocumentOrShadowRoot(nativeInput) && tuiIsNativeFocused(nativeInput) && config.currentCaretPosition) {
      const realCaretPosition = config.currentCaretPosition + calculateCaretGap(config.previousConformedValue, conformedValue, thousandSymbol);
      setTimeout(() => {
        nativeInput.setSelectionRange(realCaretPosition, realCaretPosition);
      });
    }
    if (conformedValue === "" || !decimalLimit || !Number.isInteger(decimalLimit)) {
      return { value: conformedValue };
    }
    const withDecimalSymbol = addDecimalSymbolIfNeeded(conformedValue, decimalSymbol);
    const decimalPart = withDecimalSymbol.split(decimalSymbol)[1];
    const zeroPaddingSize = decimalLimit - decimalPart.length;
    return {
      value: withDecimalSymbol + "0".repeat(zeroPaddingSize)
    };
  };
}
var ASSERTION = "Correction function must return single char or null";
function tuiCreateCorrectionMask(allowed, correctionHandler) {
  return (rawValue) => {
    const mask = rawValue.split("").reduce((result, char, index) => {
      const corrected = correctionHandler(char, index);
      ngDevMode && tuiAssert.assert(corrected === null || corrected.length === 1, ASSERTION);
      if (!allowed.test(char) && !corrected) {
        return result;
      }
      if (allowed.test(char)) {
        return [...result, allowed];
      }
      if (corrected) {
        return [...result, corrected, MASK_CARET_TRAP];
      }
      return result;
    }, []);
    const lastIndex = mask.lastIndexOf(MASK_CARET_TRAP);
    const filtered = mask.filter((item, index) => item !== MASK_CARET_TRAP || index === lastIndex);
    return filtered.some((item) => item !== allowed) ? [...filtered, allowed] : filtered;
  };
}
var NON_ZERO_DIGIT = /[1-9]/;
function preventLeadingZeroes(mask, isOnlyZeroDigit = false, leadingZerosAmount = 0) {
  if (isOnlyZeroDigit || leadingZerosAmount === 0) {
    return mask;
  }
  const firstDigitIndex = mask.indexOf(TUI_DIGIT_REGEXP);
  if (firstDigitIndex === -1) {
    return mask;
  }
  const secondMaskDigit = mask[firstDigitIndex + 1];
  const isCaretTrap = secondMaskDigit === MASK_CARET_TRAP;
  if (isCaretTrap && leadingZerosAmount === 1) {
    return mask;
  }
  if (isCaretTrap) {
    mask.unshift(NON_ZERO_DIGIT);
    return mask;
  }
  mask[firstDigitIndex] = NON_ZERO_DIGIT;
  return mask;
}
function getDecimalSymbolIndex(str, decimalSymbol, autoCorrectDecimalSymbol) {
  if (!autoCorrectDecimalSymbol) {
    return str.lastIndexOf(decimalSymbol);
  }
  return Math.max(str.lastIndexOf(decimalSymbol), str.lastIndexOf(tuiOtherDecimalSymbol(decimalSymbol)));
}
function isDecimalSymbol(str, decimalSymbol, autoCorrectDecimalSymbol) {
  if (autoCorrectDecimalSymbol) {
    return /^[,.]$/.test(str);
  }
  return str === decimalSymbol;
}
function convertToMask(strNumber) {
  return strNumber.split("").map((char) => TUI_DIGIT_REGEXP.test(char) ? TUI_DIGIT_REGEXP : char);
}
function addThousandsSeparator(strNumber, thousandSymbol) {
  return strNumber.length > 3 ? (
    // TODO: investigate to disallow potentially catastrophic exponential-time regular expressions.
    // eslint-disable-next-line unicorn/no-unsafe-regex
    strNumber.replace(/\B(?=(\d{3})+(?!\d))/g, thousandSymbol)
  ) : strNumber;
}
function tuiCreateNumberMask({ allowDecimal = false, decimalSymbol = ",", thousandSymbol = CHAR_NO_BREAK_SPACE, autoCorrectDecimalSymbol = true, decimalLimit = 2, requireDecimal = false, allowNegative = false, integerLimit = 0 } = {}) {
  ngDevMode && tuiAssert.assert(decimalLimit >= 0);
  ngDevMode && tuiAssert.assert(Number.isInteger(integerLimit));
  ngDevMode && tuiAssert.assert(integerLimit >= 0);
  return (rawValue, { previousConformedValue }) => {
    if (previousConformedValue && requireDecimal) {
      const conformedWithoutSeparator = rawValue.split(thousandSymbol).join("");
      const previousConformedValueWithoutDecimalSymbolAndSeparator = previousConformedValue.split(thousandSymbol).join("").split(decimalSymbol).join("");
      if (conformedWithoutSeparator === previousConformedValueWithoutDecimalSymbolAndSeparator) {
        rawValue = previousConformedValue;
      }
    }
    const isNegative = ((rawValue === null || rawValue === void 0 ? void 0 : rawValue.startsWith(CHAR_HYPHEN)) || (rawValue === null || rawValue === void 0 ? void 0 : rawValue.startsWith(CHAR_EN_DASH))) && allowNegative;
    if (isDecimalSymbol(rawValue, decimalSymbol, autoCorrectDecimalSymbol) && allowDecimal) {
      return ["0", decimalSymbol, TUI_DIGIT_REGEXP];
    }
    if (isNegative) {
      rawValue = rawValue.slice(1);
    }
    const decimalIndex = getDecimalSymbolIndex(rawValue, decimalSymbol, autoCorrectDecimalSymbol);
    const hasDecimal = decimalIndex !== -1;
    const integer = hasDecimal ? rawValue.slice(0, decimalIndex) : rawValue;
    const thousandSeparators = integer.match(new RegExp(thousandSymbol, "g")) || [];
    const integerCapped = integerLimit ? integer.slice(0, integerLimit + thousandSeparators.length) : integer;
    const integerCappedClean = integerCapped.replace(TUI_NON_DIGITS_REGEXP, "");
    const [leadingZerosMatch] = integerCappedClean.match(TUI_LEADING_ZEROES_REGEXP) || [""];
    const leadingZerosAmount = leadingZerosMatch.length;
    const integerCappedZerosClean = integerCappedClean.replace(/^0+(?!\.|$)/, "").trim();
    const withSeparator = addThousandsSeparator(integerCappedZerosClean, thousandSymbol);
    const mask = convertToMask(withSeparator);
    if (hasDecimal && allowDecimal || requireDecimal) {
      const fraction = hasDecimal ? convertToMask(rawValue.slice(decimalIndex + 1).replace(TUI_NON_DIGITS_REGEXP, "")) : [];
      const fractionCapped = decimalLimit ? fraction.slice(0, decimalLimit) : fraction;
      if (rawValue[decimalIndex] !== tuiOtherDecimalSymbol(decimalSymbol)) {
        mask.push(MASK_CARET_TRAP);
      }
      mask.push(decimalSymbol, MASK_CARET_TRAP, ...fractionCapped);
      for (let i = 0; i < Math.min(decimalLimit - fractionCapped.length, 20); i++) {
        mask.push(TUI_DIGIT_REGEXP);
      }
    }
    const isOnlyZeroDigit = mask.length === 1 && integerCappedZerosClean === "0";
    if (isNegative) {
      if (mask.length === 0) {
        mask.push(TUI_DIGIT_REGEXP);
      }
      mask.unshift(CHAR_HYPHEN);
    }
    return preventLeadingZeroes(mask, isOnlyZeroDigit, leadingZerosAmount);
  };
}
function tuiEnableAutoCorrectDecimalSymbol({ thousandSeparator }) {
  return !TUI_DECIMAL_SYMBOLS.includes(thousandSeparator);
}
function tuiMaskedMoneyValueIsEmpty(value) {
  switch (value) {
    case "":
    case CHAR_HYPHEN:
    case ",":
    case `${CHAR_HYPHEN},`:
      return true;
    default:
      return false;
  }
}
function tuiMaskedNumberStringToNumber(value, decimalsSymbol, thousandSymbol) {
  return parseFloat(value.split(thousandSymbol).join("").split(decimalsSymbol).join("."));
}

// node_modules/@taiga-ui/core/fesm2015/taiga-ui-core-utils-miscellaneous.js
var ITEM_SIZE = 1.5;
var CONTENT_SIZE = 2.5;
function tuiGetBorder(hasIcon, hasCleaner = false, hasTooltip = false, hasContent = false, size = "m") {
  const offset = size === "s" ? 0 : 0.25;
  let border = 0;
  if (hasIcon) {
    border += ITEM_SIZE + offset;
  }
  if (hasCleaner) {
    border += ITEM_SIZE + offset;
  }
  if (hasTooltip) {
    border += ITEM_SIZE + offset;
  }
  if (hasContent) {
    border += CONTENT_SIZE + offset;
  }
  return border;
}
function tuiIconsPathFactory(staticPath) {
  const base = staticPath.endsWith("/") ? staticPath : `${staticPath}/`;
  return (name) => {
    if (name.startsWith("tuiIcon")) {
      return `${base}${name}.svg${TUI_CACHE_BUSTING_PAYLOAD}#${name}`;
    }
    return DEFAULT_ICONS_PATH(name);
  };
}
function tuiIsEditingKey(key) {
  return key.length === 1 || tuiEditingKeys.includes(key);
}
function tuiIsObscured(el, exceptSelector = "tui-hints-host") {
  var _a;
  return !!((_a = tuiGetElementObscures(el)) === null || _a === void 0 ? void 0 : _a.some((el2) => !el2.closest(exceptSelector)));
}
function tuiIsPresumedHTMLString(candidate) {
  const trimmed = candidate.trim();
  return trimmed.startsWith("<") && trimmed.endsWith(">");
}
function tuiOverrideOptions(override, fallback) {
  return (directive, options) => {
    const result = directive || Object.assign({}, options || fallback);
    Object.keys(override).forEach((key) => {
      result[key] = override[key];
    });
    return result;
  };
}
var SIZES = {
  xxs: 0,
  xs: 1,
  s: 2,
  m: 3,
  l: 4,
  xl: 5,
  xxl: 6
};
function tuiSizeBigger(size, biggerThanSize = "s") {
  return SIZES[size] > SIZES[biggerThanSize];
}

// node_modules/@taiga-ui/core/fesm2015/taiga-ui-core-utils-mobile.js
function tuiIsMobile(win, { mobile }) {
  return tuiGetViewportWidth(win) < mobile;
}

// node_modules/@taiga-ui/core/fesm2015/taiga-ui-core-enums.js
var TuiAppearance;
(function(TuiAppearance2) {
  TuiAppearance2["Accent"] = "accent";
  TuiAppearance2["Flat"] = "flat";
  TuiAppearance2["Icon"] = "icon";
  TuiAppearance2["Outline"] = "outline";
  TuiAppearance2["Primary"] = "primary";
  TuiAppearance2["Secondary"] = "secondary";
  TuiAppearance2["SecondaryDestructive"] = "secondary-destructive";
  TuiAppearance2["Table"] = "table";
  TuiAppearance2["Textfield"] = "textfield";
  TuiAppearance2["Whiteblock"] = "whiteblock";
  TuiAppearance2["WhiteblockActive"] = "whiteblock-active";
})(TuiAppearance || (TuiAppearance = {}));
var TuiDropdownAnimation;
(function(TuiDropdownAnimation2) {
  TuiDropdownAnimation2["FadeInBottom"] = "fadeInBottom";
  TuiDropdownAnimation2["FadeInTop"] = "fadeInTop";
})(TuiDropdownAnimation || (TuiDropdownAnimation = {}));
var TuiInteractiveState;
(function(TuiInteractiveState2) {
  TuiInteractiveState2["Active"] = "active";
  TuiInteractiveState2["Disabled"] = "disabled";
  TuiInteractiveState2["Hover"] = "hover";
  TuiInteractiveState2["Readonly"] = "readonly";
})(TuiInteractiveState || (TuiInteractiveState = {}));
var TuiNotification;
(function(TuiNotification2) {
  TuiNotification2["Error"] = "error";
  TuiNotification2["Info"] = "info";
  TuiNotification2["Success"] = "success";
  TuiNotification2["Warning"] = "warning";
})(TuiNotification || (TuiNotification = {}));
var TuiRangeState;
(function(TuiRangeState2) {
  TuiRangeState2["End"] = "end";
  TuiRangeState2["Single"] = "single";
  TuiRangeState2["Start"] = "start";
})(TuiRangeState || (TuiRangeState = {}));

// node_modules/@taiga-ui/core/fesm2015/taiga-ui-core-tokens.js
var TUI_REDUCED_MOTION = tuiCreateTokenFromFactory(() => {
  var _a, _b, _c;
  return (_c = (_b = (_a = inject(DOCUMENT).defaultView) === null || _a === void 0 ? void 0 : _a.matchMedia) === null || _b === void 0 ? void 0 : _b.call(_a, "(prefers-reduced-motion: reduce)").matches) !== null && _c !== void 0 ? _c : false;
});
var TUI_ANIMATIONS_DEFAULT_DURATION = 300;
var TUI_ANIMATIONS_DURATION = tuiCreateTokenFromFactory(() => inject(TUI_REDUCED_MOTION) ? 0 : TUI_ANIMATIONS_DEFAULT_DURATION);
var TUI_ANIMATION_OPTIONS = tuiCreateTokenFromFactory(() => ({
  value: "",
  params: {
    duration: inject(TUI_ANIMATIONS_DURATION)
  }
}));
var TUI_ASSERT_ENABLED = tuiCreateTokenFromFactory(() => isDevMode());
var COMMON_ICONS = {
  check: "tuiIconCheck",
  close: "tuiIconClose",
  error: "tuiIconAlertCircle",
  more: "tuiIconChevronRight"
};
var TUI_COMMON_ICONS = tuiCreateToken(COMMON_ICONS);
function tuiCommonIconsProvider(icons) {
  return tuiProvideOptions(TUI_COMMON_ICONS, icons, COMMON_ICONS);
}
var TUI_DATA_LIST_ACCESSOR = new InjectionToken("[TUI_DATA_LIST_ACCESSOR]");
function tuiAsDataListAccessor(useExisting) {
  return {
    provide: TUI_DATA_LIST_ACCESSOR,
    useExisting
  };
}
var TUI_DATA_LIST_HOST = new InjectionToken("[TUI_DATA_LIST_HOST]");
function tuiAsDataListHost(useExisting) {
  return {
    provide: TUI_DATA_LIST_HOST,
    useExisting
  };
}
var TUI_DAY_TYPE_HANDLER = tuiCreateToken((day) => day.isWeekend ? "weekend" : "weekday");
var TUI_DOCUMENT_OR_SHADOW_ROOT = new InjectionToken("[TUI_DOCUMENT_OR_SHADOW_ROOT]");
var TUI_ELEMENT_REF = new InjectionToken("[TUI_ELEMENT_REF]");
var TUI_FIRST_DAY_OF_WEEK = tuiCreateToken(TuiDayOfWeek.Monday);
var TUI_MONTHS = tuiCreateTokenFromFactory(tuiExtractI18n("months"));
var TUI_CLOSE_WORD = tuiCreateTokenFromFactory(tuiExtractI18n("close"));
var TUI_NOTHING_FOUND_MESSAGE = tuiCreateTokenFromFactory(tuiExtractI18n("nothingFoundMessage"));
var TUI_DEFAULT_ERROR_MESSAGE = tuiCreateTokenFromFactory(tuiExtractI18n("defaultErrorMessage"));
var TUI_SPIN_TEXTS = tuiCreateTokenFromFactory(tuiExtractI18n("spinTexts"));
var TUI_SHORT_WEEK_DAYS = tuiCreateTokenFromFactory(tuiExtractI18n("shortWeekDays"));
var TUI_DEFAULT_ICONS_PLACE = "assets/taiga-ui/icons";
var TUI_ICONS_PLACE = tuiCreateToken(TUI_DEFAULT_ICONS_PLACE);
var TUI_ICONS = tuiCreateToken({});
var TUI_ICONS_PATH = tuiCreateTokenFromFactory(() => tuiIconsPathFactory(inject(TUI_ICONS_PLACE)));
var TUI_MEDIA = tuiCreateToken({
  mobile: 768,
  desktopSmall: 1024,
  desktopLarge: 1280
});
var TUI_IS_MOBILE_RES = tuiCreateTokenFromFactory(() => {
  const win = inject(WINDOW);
  const media = inject(TUI_MEDIA);
  return tuiTypedFromEvent(win, "resize").pipe(share(), startWith(null), map(() => tuiIsMobile(win, media)), distinctUntilChanged(), tuiZoneOptimized(inject(NgZone)));
});
var TUI_LEGACY_MASK = new InjectionToken("[TUI_LEGACY_MASK]");
var TUI_MODE = new InjectionToken("[TUI_MODE]");
var STATUS_ICON = {
  info: "tuiIconInfo",
  success: "tuiIconCheckCircle",
  error: "tuiIconXCircle",
  warning: "tuiIconAlertCircle",
  neutral: "tuiIconInfo"
};
var TUI_NOTIFICATION_DEFAULT_OPTIONS = {
  autoClose: 3e3,
  label: "",
  status: "info",
  hasCloseButton: true,
  icon: ({ $implicit }) => STATUS_ICON[$implicit],
  size: "m",
  hasIcon: true,
  defaultAutoCloseTime: 3e3
};
var TUI_NOTIFICATION_OPTIONS = tuiCreateToken(TUI_NOTIFICATION_DEFAULT_OPTIONS);
function tuiNotificationOptionsProvider(options) {
  return tuiProvideOptions(TUI_NOTIFICATION_OPTIONS, options, TUI_NOTIFICATION_DEFAULT_OPTIONS);
}
var TUI_NUMBER_FORMAT = tuiCreateToken(TUI_DEFAULT_NUMBER_FORMAT);
function tuiNumberFormatProvider(options) {
  return tuiProvideOptions(TUI_NUMBER_FORMAT, options, TUI_DEFAULT_NUMBER_FORMAT);
}
var TUI_NUMBER_FORMAT_OBSERVABLE = tuiCreateToken(of(Object.assign(Object.assign({}, TUI_DEFAULT_NUMBER_FORMAT), { decimalLimit: NaN })));
var TUI_OPTION_CONTENT = new InjectionToken("[TUI_OPTION_CONTENT]");
function tuiAsOptionContent(useValue) {
  return {
    provide: TUI_OPTION_CONTENT,
    useValue
  };
}
var convertToSundayFirstWeekFormat = (weekDaysNames) => {
  const sundayIndex = weekDaysNames.length - 1;
  return [
    weekDaysNames[sundayIndex],
    ...weekDaysNames.slice(0, sundayIndex)
  ];
};
var TUI_ORDERED_SHORT_WEEK_DAYS = tuiCreateTokenFromFactory(() => {
  const firstDayOfWeekIndex = inject(TUI_FIRST_DAY_OF_WEEK);
  return inject(TUI_SHORT_WEEK_DAYS).pipe(map(convertToSundayFirstWeekFormat), map((weekDays) => [
    ...weekDays.slice(firstDayOfWeekIndex),
    ...weekDays.slice(0, firstDayOfWeekIndex)
  ]));
});
var TUI_SANITIZER = new InjectionToken("[TUI_SANITIZER]");
var TUI_SCROLL_REF2 = TUI_SCROLL_REF;
var TUI_SELECTION_STREAM = tuiCreateTokenFromFactory(() => {
  const doc = inject(DOCUMENT);
  return merge(tuiTypedFromEvent(doc, "selectionchange"), tuiTypedFromEvent(doc, "mouseup"), tuiTypedFromEvent(doc, "mousedown").pipe(switchMap(() => tuiTypedFromEvent(doc, "mousemove").pipe(takeUntil(tuiTypedFromEvent(doc, "mouseup"))))), tuiTypedFromEvent(doc, "keydown"), tuiTypedFromEvent(doc, "keyup")).pipe(share());
});
var TUI_SPIN_ICONS = tuiCreateToken({
  decrement: "tuiIconChevronLeft",
  increment: "tuiIconChevronRight"
});
var TUI_SVG_CONTENT_PROCESSOR = tuiCreateToken(tuiSvgLinearGradientProcessor);
var TUI_SVG_SRC_PROCESSOR = tuiCreateToken(identity);
var TUI_TEXTFIELD_APPEARANCE = tuiCreateToken(TuiAppearance.Textfield);
var TUI_TEXTFIELD_HOST = new InjectionToken("[TUI_TEXTFIELD_HOST]");
function tuiAsTextfieldHost(useExisting) {
  return {
    provide: TUI_TEXTFIELD_HOST,
    useExisting
  };
}
var TUI_THEME = tuiCreateToken("Taiga");
var TUI_VALUE_ACCESSOR = new InjectionToken("[TUI_VALUE_ACCESSOR]");
var TUI_VIEWPORT = tuiCreateTokenFromFactory(() => {
  const win = inject(WINDOW);
  return {
    type: "viewport",
    getClientRect() {
      return {
        top: 0,
        left: 0,
        right: win.innerWidth,
        bottom: win.innerHeight,
        width: win.innerWidth,
        height: win.innerHeight
      };
    }
  };
});
function tuiAsViewport(useExisting) {
  return {
    provide: TUI_VIEWPORT,
    useExisting
  };
}

// node_modules/@taiga-ui/core/fesm2015/taiga-ui-core-services.js
var TuiBreakpointService = class extends Observable {
  constructor(media, ngZone, size$) {
    super((subscriber) => this.stream$.subscribe(subscriber));
    this.media = media;
    this.ngZone = ngZone;
    this.size$ = size$;
    this.sorted = Object.values(this.media).sort((a, b) => a - b);
    this.invert = Object.keys(this.media).reduce((ret, key) => Object.assign(Object.assign({}, ret), {
      [this.media[key]]: key
    }), {});
    this.stream$ = this.size$.pipe(map(({
      width
    }) => this.sorted.find((size) => size > width)), map((key) => this.invert[key || this.sorted[this.sorted.length - 1]]), distinctUntilChanged(), tuiZoneOptimized(this.ngZone), shareReplay({
      bufferSize: 1,
      refCount: true
    }));
  }
};
TuiBreakpointService.ɵfac = function TuiBreakpointService_Factory(t) {
  return new (t || TuiBreakpointService)(ɵɵinject(TUI_MEDIA), ɵɵinject(NgZone), ɵɵinject(TUI_WINDOW_SIZE));
};
TuiBreakpointService.ɵprov = ɵɵdefineInjectable({
  token: TuiBreakpointService,
  factory: TuiBreakpointService.ɵfac,
  providedIn: "root"
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiBreakpointService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], function() {
    return [{
      type: void 0,
      decorators: [{
        type: Inject,
        args: [TUI_MEDIA]
      }]
    }, {
      type: NgZone,
      decorators: [{
        type: Inject,
        args: [NgZone]
      }]
    }, {
      type: Observable,
      decorators: [{
        type: Inject,
        args: [TUI_WINDOW_SIZE]
      }]
    }];
  }, null);
})();
var TuiFormatDateService = class {
  constructor(locale) {
    this.locale = locale;
  }
  format(timestamp) {
    return of(new Date(timestamp).toLocaleTimeString(this.locale, {
      hour: "numeric",
      minute: "2-digit"
    }));
  }
};
TuiFormatDateService.ɵfac = function TuiFormatDateService_Factory(t) {
  return new (t || TuiFormatDateService)(ɵɵinject(LOCALE_ID));
};
TuiFormatDateService.ɵprov = ɵɵdefineInjectable({
  token: TuiFormatDateService,
  factory: TuiFormatDateService.ɵfac,
  providedIn: "root"
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiFormatDateService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], function() {
    return [{
      type: void 0,
      decorators: [{
        type: Inject,
        args: [LOCALE_ID]
      }]
    }];
  }, null);
})();
var TuiHintService = class extends BehaviorSubject {
  constructor() {
    super([]);
  }
  add(directive) {
    this.next(this.value.concat(directive));
  }
  remove(directive) {
    if (this.value.includes(directive)) {
      this.next(this.value.filter((hint) => hint !== directive));
    }
  }
};
TuiHintService.ɵfac = function TuiHintService_Factory(t) {
  return new (t || TuiHintService)();
};
TuiHintService.ɵprov = ɵɵdefineInjectable({
  token: TuiHintService,
  factory: TuiHintService.ɵfac,
  providedIn: "root"
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiHintService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], function() {
    return [];
  }, null);
})();
var TuiNightThemeService = class extends Observable {
  constructor(win) {
    const media = win.matchMedia("(prefers-color-scheme: dark)");
    const media$ = fromEvent(media, "change").pipe(startWith(null), map(() => media.matches), share());
    super((subscriber) => media$.subscribe(subscriber));
  }
};
TuiNightThemeService.ɵfac = function TuiNightThemeService_Factory(t) {
  return new (t || TuiNightThemeService)(ɵɵinject(WINDOW));
};
TuiNightThemeService.ɵprov = ɵɵdefineInjectable({
  token: TuiNightThemeService,
  factory: TuiNightThemeService.ɵfac,
  providedIn: "root"
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiNightThemeService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], function() {
    return [{
      type: Window,
      decorators: [{
        type: Inject,
        args: [WINDOW]
      }]
    }];
  }, null);
})();
var TuiPositionService = class extends Observable {
  constructor(el, animationFrame, zone, accessor) {
    super((subscriber) => animationFrame.pipe(map(() => el.nativeElement.getBoundingClientRect()), map((rect2) => accessor.getPosition(rect2)), tuiZonefree(zone), finalize(() => accessor.getPosition(EMPTY_CLIENT_RECT))).subscribe(subscriber));
  }
};
TuiPositionService.ɵfac = function TuiPositionService_Factory(t) {
  return new (t || TuiPositionService)(ɵɵinject(ElementRef), ɵɵinject(ANIMATION_FRAME), ɵɵinject(NgZone), ɵɵinject(TuiPositionAccessor));
};
TuiPositionService.ɵprov = ɵɵdefineInjectable({
  token: TuiPositionService,
  factory: TuiPositionService.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiPositionService, [{
    type: Injectable
  }], function() {
    return [{
      type: ElementRef,
      decorators: [{
        type: Inject,
        args: [ElementRef]
      }]
    }, {
      type: Observable,
      decorators: [{
        type: Inject,
        args: [ANIMATION_FRAME]
      }]
    }, {
      type: NgZone,
      decorators: [{
        type: Inject,
        args: [NgZone]
      }]
    }, {
      type: TuiPositionAccessor,
      decorators: [{
        type: Inject,
        args: [TuiPositionAccessor]
      }]
    }];
  }, null);
})();
var TuiRouterLinkActiveService = class extends Observable {
  constructor(routerLinkActive, zone, animationFrame$, destroy$) {
    const stream$ = routerLinkActive ? merge(
      timer(0),
      // SSR (animationFrame$ never emits value during SSR)
      animationFrame$
    ).pipe(map(() => routerLinkActive.isActive), distinctUntilChanged(), tuiZoneOptimized(zone), takeUntil(destroy$)) : EMPTY;
    super((subscriber) => stream$.subscribe(subscriber));
  }
};
TuiRouterLinkActiveService.ɵfac = function TuiRouterLinkActiveService_Factory(t) {
  return new (t || TuiRouterLinkActiveService)(ɵɵinject(RouterLinkActive, 8), ɵɵinject(NgZone), ɵɵinject(ANIMATION_FRAME), ɵɵinject(TuiDestroyService, 2));
};
TuiRouterLinkActiveService.ɵprov = ɵɵdefineInjectable({
  token: TuiRouterLinkActiveService,
  factory: TuiRouterLinkActiveService.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiRouterLinkActiveService, [{
    type: Injectable
  }], function() {
    return [{
      type: RouterLinkActive,
      decorators: [{
        type: Optional
      }, {
        type: Inject,
        args: [RouterLinkActive]
      }]
    }, {
      type: NgZone,
      decorators: [{
        type: Inject,
        args: [NgZone]
      }]
    }, {
      type: Observable,
      decorators: [{
        type: Inject,
        args: [ANIMATION_FRAME]
      }]
    }, {
      type: TuiDestroyService,
      decorators: [{
        type: Self
      }, {
        type: Inject,
        args: [TuiDestroyService]
      }]
    }];
  }, null);
})();
var TuiSvgService = class {
  constructor(tuiSanitizer, sanitizer, icons) {
    this.tuiSanitizer = tuiSanitizer;
    this.sanitizer = sanitizer;
    this.originals = {};
    this.items$ = new BehaviorSubject(/* @__PURE__ */ new Map());
    this.define(icons);
  }
  define(icons) {
    const {
      value
    } = this.items$;
    Object.keys(icons).forEach((key) => {
      this.defineIcon(key, icons[key], value);
    });
    this.items$.next(value);
  }
  getOriginal(name) {
    return this.originals[name] || null;
  }
  defineIcon(name, src, map2) {
    if (map2.has(name)) {
      return;
    }
    const parsed = this.parseSrc(name, src);
    if (!parsed) {
      ngDevMode && tuiAssert.assert(false, "Unable to parse given SVG src");
      return;
    }
    map2.set(name, parsed);
    this.originals = Object.assign(Object.assign({}, this.originals), {
      [name]: src
    });
  }
  parseSrc(name, src) {
    return this.sanitize(tuiProcessIcon(src, name));
  }
  sanitize(src) {
    return this.sanitizer.bypassSecurityTrustHtml((this.tuiSanitizer ? this.tuiSanitizer.sanitize(SecurityContext.HTML, src) : this.sanitizer.sanitize(SecurityContext.HTML, src)) || "");
  }
};
TuiSvgService.ɵfac = function TuiSvgService_Factory(t) {
  return new (t || TuiSvgService)(ɵɵinject(TUI_SANITIZER, 8), ɵɵinject(DomSanitizer), ɵɵinject(TUI_ICONS));
};
TuiSvgService.ɵprov = ɵɵdefineInjectable({
  token: TuiSvgService,
  factory: TuiSvgService.ɵfac,
  providedIn: "root"
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiSvgService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], function() {
    return [{
      type: Sanitizer,
      decorators: [{
        type: Optional
      }, {
        type: Inject,
        args: [TUI_SANITIZER]
      }]
    }, {
      type: DomSanitizer,
      decorators: [{
        type: Inject,
        args: [DomSanitizer]
      }]
    }, {
      type: void 0,
      decorators: [{
        type: Inject,
        args: [TUI_ICONS]
      }]
    }];
  }, null);
})();
var TuiVisualViewportService = class {
  constructor(win, isWebkit) {
    this.win = win;
    this.isWebkit = isWebkit;
  }
  // https://bugs.webkit.org/show_bug.cgi?id=207089
  correct(point) {
    var _a, _b, _c, _d;
    return this.isWebkit ? [point[0] + ((_b = (_a = this.win.visualViewport) === null || _a === void 0 ? void 0 : _a.offsetTop) !== null && _b !== void 0 ? _b : 0), point[1] + ((_d = (_c = this.win.visualViewport) === null || _c === void 0 ? void 0 : _c.offsetLeft) !== null && _d !== void 0 ? _d : 0)] : point;
  }
};
TuiVisualViewportService.ɵfac = function TuiVisualViewportService_Factory(t) {
  return new (t || TuiVisualViewportService)(ɵɵinject(WINDOW), ɵɵinject(TUI_IS_WEBKIT));
};
TuiVisualViewportService.ɵprov = ɵɵdefineInjectable({
  token: TuiVisualViewportService,
  factory: TuiVisualViewportService.ɵfac,
  providedIn: "root"
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiVisualViewportService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], function() {
    return [{
      type: Window,
      decorators: [{
        type: Inject,
        args: [WINDOW]
      }]
    }, {
      type: void 0,
      decorators: [{
        type: Inject,
        args: [TUI_IS_WEBKIT]
      }]
    }];
  }, null);
})();

// node_modules/@taiga-ui/core/fesm2015/taiga-ui-core-components-svg.js
function TuiSvgComponent_ng_container_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 3);
  }
  if (rf & 2) {
    const innerHTML_r1 = ɵɵnextContext().tuiLet;
    ɵɵproperty("innerHTML", innerHTML_r1, ɵɵsanitizeHtml);
  }
}
function TuiSvgComponent_ng_container_0_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = ɵɵgetCurrentView();
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "svg", 4);
    ɵɵlistener("error", function TuiSvgComponent_ng_container_0_ng_template_2_Template__svg_svg_error_0_listener() {
      ɵɵrestoreView(_r7);
      const ctx_r6 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r6.onError());
    });
    ɵɵelement(1, "use");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵattribute("href", ctx_r3.use, null, "xlink");
  }
}
function TuiSvgComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, TuiSvgComponent_ng_container_0_div_1_Template, 1, 1, "div", 1)(2, TuiSvgComponent_ng_container_0_ng_template_2_Template, 2, 1, "ng-template", null, 2, ɵɵtemplateRefExtractor);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const _r4 = ɵɵreference(3);
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r0.isInnerHTML)("ngIfElse", _r4);
  }
}
var TUI_DEPRECATED_ICONS = {
  tuiIconAttach: "tuiIconPaperclip",
  tuiIconAttention: "tuiIconAlertCircle",
  tuiIconBackCircle: "tuiIconArrowLeftCircle",
  tuiIconCall: "tuiIconPhone",
  tuiIconCallIn: "tuiIconPhoneIncoming",
  tuiIconCallOut: "tuiIconPhoneOutgoing",
  tuiIconCallTransfer: "tuiIconPhoneForwarded",
  tuiIconCancel: "tuiIconXCircle",
  tuiIconCancelCircle: "tuiIconSlash",
  tuiIconCard: "tuiIconCreditCard",
  tuiIconCards: "tuiIconCreditCard",
  tuiIconChartBar: "tuiIconBarChart",
  tuiIconChart: "tuiIconBarChart",
  tuiIconCheckList: "tuiIconClipboard",
  tuiIconCloseCircle: "tuiIconXCircle",
  tuiIconCollapse: "tuiIconMinimize",
  tuiIconComment: "tuiIconMessageSquare",
  tuiIconCommentFw: "tuiIconMessageForward",
  tuiIconCompany: "tuiIconBriefcase",
  tuiIconDefaultDoc: "tuiIconFile",
  tuiIconDesktop: "tuiIconMonitor",
  tuiIconDesktopOff: "tuiIconMonitorOff",
  tuiIconDislike: "tuiIconThumbsDown",
  tuiIconDone: "tuiIconCheckCircle",
  tuiIconDraft: "tuiIconEdit2",
  tuiIconEyeOpen: "tuiIconEye",
  tuiIconEyeClosed: "tuiIconEyeOff",
  tuiIconExpand: "tuiIconMaximize",
  tuiIconExternal: "tuiIconExternalLink",
  tuiIconFrame: "tuiIconLayout",
  tuiIconGeo: "tuiIconMapPin",
  tuiIconHeartFilled: "tuiIconHeart",
  tuiIconHide: "tuiIconEyeOff",
  tuiIconImg: "tuiIconImage",
  tuiIconInfoCircle: "tuiIconInfo",
  tuiIconLike: "tuiIconThumbsUp",
  tuiIconLockOpen: "tuiIconUnlock",
  tuiIconMobile: "tuiIconSmartphone",
  tuiIconMoreHor: "tuiIconMoreHorizontal",
  tuiIconMoreVer: "tuiIconMoreVertical",
  tuiIconMoreVert: "tuiIconMoreVertical",
  tuiIconPicture: "tuiIconImage",
  tuiIconPin: "tuiIconMapPin",
  tuiIconPrint: "tuiIconPrinter",
  tuiIconRefresh: "tuiIconRefreshCw",
  tuiIconRemove: "tuiIconX",
  tuiIconShow: "tuiIconEye",
  tuiIconSound: "tuiIconVolume",
  tuiIconSoundOff: "tuiIconVolumeX",
  tuiIconStarFilled: "tuiIconStar",
  tuiIconStop: "tuiIconSquare",
  tuiIconStructure: "tuiIconGrid",
  tuiIconTime: "tuiIconClock",
  tuiIconTooltip: "tuiIconHelpCircle",
  tuiIconViewList: "tuiIconList",
  tuiIconWifiOn: "tuiIconWifi"
};
var TUI_SVG_DEFAULT_OPTIONS = {
  iconsPlace: TUI_DEFAULT_ICONS_PLACE,
  path: tuiIconsPathFactory(TUI_DEFAULT_ICONS_PLACE),
  srcProcessor: identity,
  contentProcessor: tuiSvgLinearGradientProcessor,
  deprecated: (src) => {
    const oldIcon = src.replace("Large", "").replace("Outline", "");
    const newIcon = TUI_DEPRECATED_ICONS[oldIcon];
    return newIcon ? `${oldIcon}/(Large|Outline) is deprecated, use ${newIcon}/(Large|Outline) instead` : "";
  }
};
var TUI_SVG_OPTIONS = tuiCreateTokenFromFactory(() => ({
  iconsPlace: inject(TUI_ICONS_PLACE),
  path: inject(TUI_ICONS_PATH),
  deprecated: TUI_SVG_DEFAULT_OPTIONS.deprecated,
  srcProcessor: inject(TUI_SVG_SRC_PROCESSOR),
  contentProcessor: inject(TUI_SVG_CONTENT_PROCESSOR)
}));
var TUI_SVG_SRC_INTERCEPTORS = new InjectionToken("[TUI_SVG_SRC_INTERCEPTORS]");
function tuiSvgSrcInterceptors(interceptor) {
  return {
    provide: TUI_SVG_SRC_INTERCEPTORS,
    useValue: interceptor,
    multi: true
  };
}
var tuiSvgOptionsProvider = (options) => ({
  provide: TUI_SVG_OPTIONS,
  deps: [[new SkipSelf(), new Optional(), TUI_SVG_OPTIONS], [new Optional(), TUI_ICONS_PLACE], [new Optional(), TUI_ICONS_PATH], [new Optional(), TUI_SVG_SRC_PROCESSOR], [new Optional(), TUI_SVG_CONTENT_PROCESSOR]],
  useFactory: (fallback, iconsPlace, path, srcProcessor, contentProcessor) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
    return {
      iconsPlace: (_c = (_b = (_a = options.iconsPlace) !== null && _a !== void 0 ? _a : fallback === null || fallback === void 0 ? void 0 : fallback.iconsPlace) !== null && _b !== void 0 ? _b : iconsPlace) !== null && _c !== void 0 ? _c : TUI_SVG_DEFAULT_OPTIONS.iconsPlace,
      path: tuiIsString(options.path) ? tuiIconsPathFactory(options.path) : (_f = (_e = (_d = options.path) !== null && _d !== void 0 ? _d : fallback === null || fallback === void 0 ? void 0 : fallback.path) !== null && _e !== void 0 ? _e : path) !== null && _f !== void 0 ? _f : TUI_SVG_DEFAULT_OPTIONS.path,
      deprecated: (_h = (_g = options.deprecated) !== null && _g !== void 0 ? _g : fallback === null || fallback === void 0 ? void 0 : fallback.deprecated) !== null && _h !== void 0 ? _h : TUI_SVG_DEFAULT_OPTIONS.deprecated,
      srcProcessor: (_l = (_k = (_j = options.srcProcessor) !== null && _j !== void 0 ? _j : fallback === null || fallback === void 0 ? void 0 : fallback.srcProcessor) !== null && _k !== void 0 ? _k : srcProcessor) !== null && _l !== void 0 ? _l : TUI_SVG_DEFAULT_OPTIONS.srcProcessor,
      contentProcessor: (_p = (_o = (_m = options.contentProcessor) !== null && _m !== void 0 ? _m : fallback === null || fallback === void 0 ? void 0 : fallback.contentProcessor) !== null && _o !== void 0 ? _o : contentProcessor) !== null && _p !== void 0 ? _p : TUI_SVG_DEFAULT_OPTIONS.contentProcessor
    };
  }
});
var UNDEFINED_NAMED_ICON = "Attempted to use undefined named icon";
var MISSING_EXTERNAL_ICON = "External icon is missing on the given URL";
var FAILED_EXTERNAL_ICON = "Failed to load external SVG";
var TuiSvgComponent = class {
  constructor(doc, win, options, srcInterceptors, tuiSanitizer, svgService, staticRequestService, sanitizer, el, baseHref) {
    this.doc = doc;
    this.win = win;
    this.options = options;
    this.srcInterceptors = srcInterceptors;
    this.tuiSanitizer = tuiSanitizer;
    this.svgService = svgService;
    this.staticRequestService = staticRequestService;
    this.sanitizer = sanitizer;
    this.el = el;
    this.baseHref = baseHref;
    this.src$ = new ReplaySubject(1);
    this.icon = "";
    this.innerHTML$ = this.src$.pipe(switchMap(() => {
      if (tuiIsString(this.icon)) {
        return this.isExternal ? this.getExternalIcon(this.icon) : of(this.getSafeHtml(this.icon));
      }
      return of(this.icon);
    }), startWith(""));
  }
  set src(src) {
    var _a;
    const deprecated = this.options.deprecated(String(src));
    ngDevMode && tuiAssert.assert(!deprecated, deprecated);
    this.icon = ((_a = this.srcInterceptors) !== null && _a !== void 0 ? _a : []).reduce((newSrc, interceptor) => interceptor(newSrc, this.options), this.options.srcProcessor(src || ""));
    this.src$.next();
  }
  get src() {
    return this.icon;
  }
  get use() {
    if (tuiIsString(this.icon)) {
      return this.icon.includes(".svg#") ? this.icon : this.resolveName(this.icon, this.options.path);
    }
    return "";
  }
  get isInnerHTML() {
    return !tuiIsString(this.icon) || this.isSrc || this.isExternal || this.isName && this.isShadowDOM;
  }
  get isShadowDOM() {
    return tuiGetDocumentOrShadowRoot(this.el.nativeElement) !== this.doc;
  }
  get isUse() {
    return this.use.replace(TUI_CACHE_BUSTING_PAYLOAD, "").includes(".svg#");
  }
  get isExternal() {
    return this.isUrl || this.isCrossDomain;
  }
  get isUrl() {
    return tuiIsString(this.icon) && this.icon.replace(TUI_CACHE_BUSTING_PAYLOAD, "").endsWith(".svg");
  }
  get isSrc() {
    return tuiIsString(this.icon) && tuiIsPresumedHTMLString(this.icon);
  }
  get isName() {
    return !this.isUrl && !this.isUse && !this.isSrc;
  }
  get isCrossDomain() {
    const {
      use,
      isUse,
      win
    } = this;
    return isUse && use.startsWith("http") && !!win.origin && !use.startsWith(win.origin);
  }
  onError(message = MISSING_EXTERNAL_ICON) {
    const {
      icon
    } = this;
    const event = new CustomEvent(TUI_ICON_ERROR, {
      bubbles: true,
      detail: {
        message,
        icon
      }
    });
    ngDevMode && tuiAssert.assert(false, message, icon);
    this.el.nativeElement.dispatchEvent(event);
  }
  resolveName(name, iconsPath) {
    return iconsPath(name, this.baseHref);
  }
  getSafeHtml(src) {
    return this.isSrc ? this.sanitize(src) : this.process(src);
  }
  process(src) {
    const icon = this.svgService.getOriginal(src);
    if (this.isName && !icon && !!src) {
      this.onError(UNDEFINED_NAMED_ICON);
    }
    return !this.isShadowDOM || !this.isName ? "" : this.sanitize(icon || "");
  }
  sanitize(src) {
    src = this.options.contentProcessor(src);
    return this.tuiSanitizer && tuiIsString(src) ? this.sanitizer.bypassSecurityTrustHtml(this.tuiSanitizer.sanitize(SecurityContext.HTML, src) || "") : src;
  }
  getExternalIcon(src) {
    const url = src.includes(".svg") ? src : this.use;
    return this.staticRequestService.request(url).pipe(catchError(() => {
      this.onError(FAILED_EXTERNAL_ICON);
      return of("");
    }), map((response) => this.sanitize(response.replace("<svg", '<svg focusable="false"'))));
  }
};
TuiSvgComponent.ɵfac = function TuiSvgComponent_Factory(t) {
  return new (t || TuiSvgComponent)(ɵɵdirectiveInject(DOCUMENT), ɵɵdirectiveInject(WINDOW), ɵɵdirectiveInject(TUI_SVG_OPTIONS), ɵɵdirectiveInject(TUI_SVG_SRC_INTERCEPTORS, 8), ɵɵdirectiveInject(TUI_SANITIZER, 8), ɵɵdirectiveInject(TuiSvgService), ɵɵdirectiveInject(TuiStaticRequestService), ɵɵdirectiveInject(DomSanitizer), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(TUI_BASE_HREF));
};
TuiSvgComponent.ɵcmp = ɵɵdefineComponent({
  type: TuiSvgComponent,
  selectors: [["tui-svg"]],
  inputs: {
    src: "src"
  },
  decls: 2,
  vars: 3,
  consts: [[4, "tuiLet"], ["class", "t-src", 3, "innerHTML", 4, "ngIf", "ngIfElse"], ["useTemplate", ""], [1, "t-src", 3, "innerHTML"], ["focusable", "false", "height", "100%", "version", "1.1", "width", "100%", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "xmlns", "http://www.w3.org/2000/svg", 1, "t-svg", 3, "error"]],
  template: function TuiSvgComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, TuiSvgComponent_ng_container_0_Template, 4, 2, "ng-container", 0);
      ɵɵpipe(1, "async");
    }
    if (rf & 2) {
      ɵɵproperty("tuiLet", ɵɵpipeBind1(1, 1, ctx.innerHTML$));
    }
  },
  dependencies: [TuiLetDirective, NgIf, AsyncPipe],
  styles: ["[_nghost-%COMP%]{display:inline-flex;vertical-align:middle;flex-shrink:0;align-items:center;justify-content:center;line-height:0;height:1.5rem;width:1.5rem;fill:transparent;stroke:transparent;font-size:1rem}.t-src[_ngcontent-%COMP%]{display:flex;width:100%;height:100%;align-items:center;justify-content:center}.t-svg[_ngcontent-%COMP%]{overflow:visible}"],
  changeDetection: 0
});
__decorate([tuiPure], TuiSvgComponent.prototype, "resolveName", null);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiSvgComponent, [{
    type: Component,
    args: [{
      selector: "tui-svg",
      templateUrl: "./svg.template.html",
      styleUrls: ["./svg.style.less"],
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], function() {
    return [{
      type: Document,
      decorators: [{
        type: Inject,
        args: [DOCUMENT]
      }]
    }, {
      type: Window,
      decorators: [{
        type: Inject,
        args: [WINDOW]
      }]
    }, {
      type: void 0,
      decorators: [{
        type: Inject,
        args: [TUI_SVG_OPTIONS]
      }]
    }, {
      type: void 0,
      decorators: [{
        type: Optional
      }, {
        type: Inject,
        args: [TUI_SVG_SRC_INTERCEPTORS]
      }]
    }, {
      type: Sanitizer,
      decorators: [{
        type: Optional
      }, {
        type: Inject,
        args: [TUI_SANITIZER]
      }]
    }, {
      type: TuiSvgService,
      decorators: [{
        type: Inject,
        args: [TuiSvgService]
      }]
    }, {
      type: TuiStaticRequestService,
      decorators: [{
        type: Inject,
        args: [TuiStaticRequestService]
      }]
    }, {
      type: DomSanitizer,
      decorators: [{
        type: Inject,
        args: [DomSanitizer]
      }]
    }, {
      type: ElementRef,
      decorators: [{
        type: Inject,
        args: [ElementRef]
      }]
    }, {
      type: void 0,
      decorators: [{
        type: Inject,
        args: [TUI_BASE_HREF]
      }]
    }];
  }, {
    src: [{
      type: Input
    }],
    resolveName: []
  });
})();
var TuiSvgModule = class {
};
TuiSvgModule.ɵfac = function TuiSvgModule_Factory(t) {
  return new (t || TuiSvgModule)();
};
TuiSvgModule.ɵmod = ɵɵdefineNgModule({
  type: TuiSvgModule,
  declarations: [TuiSvgComponent],
  imports: [CommonModule, TuiLetModule],
  exports: [TuiSvgComponent]
});
TuiSvgModule.ɵinj = ɵɵdefineInjector({
  imports: [[CommonModule, TuiLetModule]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiSvgModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, TuiLetModule],
      declarations: [TuiSvgComponent],
      exports: [TuiSvgComponent]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/core/fesm2015/taiga-ui-core-directives-mode.js
var TuiModeDirective = class extends AbstractTuiController {
  constructor() {
    super(...arguments);
    this.mode = null;
  }
};
TuiModeDirective.ɵfac = (() => {
  let ɵTuiModeDirective_BaseFactory;
  return function TuiModeDirective_Factory(t) {
    return (ɵTuiModeDirective_BaseFactory || (ɵTuiModeDirective_BaseFactory = ɵɵgetInheritedFactory(TuiModeDirective)))(t || TuiModeDirective);
  };
})();
TuiModeDirective.ɵdir = ɵɵdefineDirective({
  type: TuiModeDirective,
  selectors: [["", "tuiMode", ""]],
  inputs: {
    mode: ["tuiMode", "mode"]
  },
  features: [ɵɵInheritDefinitionFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiModeDirective, [{
    type: Directive,
    args: [{
      selector: "[tuiMode]"
    }]
  }], null, {
    mode: [{
      type: Input,
      args: ["tuiMode"]
    }]
  });
})();
var TuiModeModule = class {
};
TuiModeModule.ɵfac = function TuiModeModule_Factory(t) {
  return new (t || TuiModeModule)();
};
TuiModeModule.ɵmod = ɵɵdefineNgModule({
  type: TuiModeModule,
  declarations: [TuiModeDirective],
  exports: [TuiModeDirective]
});
TuiModeModule.ɵinj = ɵɵdefineInjector({});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiModeModule, [{
    type: NgModule,
    args: [{
      declarations: [TuiModeDirective],
      exports: [TuiModeDirective]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/core/fesm2015/taiga-ui-core-providers.js
var TUI_IS_MOBILE_RES_PROVIDER = {
  provide: TUI_IS_MOBILE_RES,
  deps: [[new SkipSelf(), TUI_IS_MOBILE_RES], ElementRef],
  useFactory: (mobile$, { nativeElement }) => {
    nativeElement["$.class._mobile"] = mobile$;
    return mobile$;
  }
};
var MODE_PROVIDER = {
  provide: TUI_MODE,
  deps: [[new Optional(), TuiModeDirective], ElementRef],
  useFactory: (mode, { nativeElement }) => {
    const mode$ = mode ? mode.change$.pipe(startWith(null), map(() => mode.mode)) : of(null);
    nativeElement["$.data-mode.attr"] = mode$;
    return mode$;
  }
};
function tuiWatchedControllerFactory(controller, cdr, destroy$) {
  controller.change$.pipe(tuiWatch(cdr), takeUntil(destroy$)).subscribe();
  return controller;
}

// node_modules/@taiga-ui/core/fesm2015/taiga-ui-core-components-scrollbar.js
function TuiScrollbarComponent_tui_scroll_controls_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "tui-scroll-controls", 2);
  }
}
var _c03 = ["*"];
var SCROLL_REF_SELECTOR2 = "[tuiScrollRef]";
var TuiScrollRefDirective2 = class {
};
TuiScrollRefDirective2.ɵfac = function TuiScrollRefDirective_Factory2(t) {
  return new (t || TuiScrollRefDirective2)();
};
TuiScrollRefDirective2.ɵdir = ɵɵdefineDirective({
  type: TuiScrollRefDirective2,
  selectors: [["", "tuiScrollRef", ""]],
  features: [ɵɵProvidersFeature([{
    provide: TUI_SCROLL_REF,
    useExisting: ElementRef
  }])]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiScrollRefDirective2, [{
    type: Directive,
    args: [{
      selector: SCROLL_REF_SELECTOR2,
      providers: [{
        provide: TUI_SCROLL_REF,
        useExisting: ElementRef
      }]
    }]
  }], null, null);
})();
var TuiScrollableDirective = class {
  constructor(el) {
    this.el = el;
  }
  ngOnInit() {
    this.el.nativeElement.dispatchEvent(new CustomEvent(TUI_SCROLLABLE, {
      bubbles: true,
      detail: this.el.nativeElement
    }));
  }
};
TuiScrollableDirective.ɵfac = function TuiScrollableDirective_Factory(t) {
  return new (t || TuiScrollableDirective)(ɵɵdirectiveInject(ElementRef));
};
TuiScrollableDirective.ɵdir = ɵɵdefineDirective({
  type: TuiScrollableDirective,
  selectors: [["", "tuiScrollable", ""]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiScrollableDirective, [{
    type: Directive,
    args: [{
      selector: "[tuiScrollable]"
    }]
  }], function() {
    return [{
      type: ElementRef,
      decorators: [{
        type: Inject,
        args: [ElementRef]
      }]
    }];
  }, null);
})();
var TuiScrollbarComponent = class {
  constructor(cssRef, el, userAgent, isIos) {
    this.cssRef = cssRef;
    this.el = el;
    this.userAgent = userAgent;
    this.isIos = isIos;
    this.delegated = false;
    this.isLegacy = !this.cssRef.supports("position", "sticky") || tuiIsFirefox(this.userAgent) && !this.cssRef.supports("scrollbar-width", "none");
    this.hidden = false;
    this.browserScrollRef = new ElementRef(this.el.nativeElement);
  }
  get showScrollbars() {
    return !this.hidden && !this.isIos && (!this.isLegacy || this.delegated);
  }
  get showNative() {
    return this.isLegacy && !this.hidden && !this.delegated;
  }
  onScrollable(element) {
    this.delegated = true;
    this.browserScrollRef.nativeElement = element;
  }
  scrollIntoView(detail) {
    var _a;
    if (this.delegated) {
      return;
    }
    const {
      nativeElement
    } = this.browserScrollRef;
    const {
      offsetTop,
      offsetLeft
    } = tuiGetElementOffset(nativeElement, detail);
    const {
      clientHeight,
      clientWidth
    } = nativeElement;
    const {
      offsetHeight,
      offsetWidth
    } = detail;
    const scrollTop = offsetTop + offsetHeight / 2 - clientHeight / 2;
    const scrollLeft = offsetLeft + offsetWidth / 2 - clientWidth / 2;
    (_a = nativeElement.scrollTo) === null || _a === void 0 ? void 0 : _a.call(nativeElement, scrollLeft, scrollTop);
  }
};
TuiScrollbarComponent.ɵfac = function TuiScrollbarComponent_Factory(t) {
  return new (t || TuiScrollbarComponent)(ɵɵdirectiveInject(CSS2), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(USER_AGENT), ɵɵdirectiveInject(TUI_IS_IOS));
};
TuiScrollbarComponent.ɵcmp = ɵɵdefineComponent({
  type: TuiScrollbarComponent,
  selectors: [["tui-scrollbar"]],
  hostVars: 2,
  hostBindings: function TuiScrollbarComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("tui-scrollable.stop", function TuiScrollbarComponent_tui_scrollable_stop_HostBindingHandler($event) {
        return ctx.onScrollable($event.detail);
      })("tui-scroll-into-view.stop", function TuiScrollbarComponent_tui_scroll_into_view_stop_HostBindingHandler($event) {
        return ctx.scrollIntoView($event.detail);
      });
    }
    if (rf & 2) {
      ɵɵclassProp("_legacy", ctx.showNative);
    }
  },
  inputs: {
    hidden: "hidden"
  },
  features: [ɵɵProvidersFeature([{
    provide: TUI_SCROLL_REF,
    deps: [TuiScrollbarComponent],
    useFactory: ({
      browserScrollRef
    }) => browserScrollRef
  }])],
  ngContentSelectors: _c03,
  decls: 3,
  vars: 1,
  consts: [["class", "t-bars", 4, "ngIf"], [1, "t-content"], [1, "t-bars"]],
  template: function TuiScrollbarComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵtemplate(0, TuiScrollbarComponent_tui_scroll_controls_0_Template, 1, 0, "tui-scroll-controls", 0);
      ɵɵelementStart(1, "div", 1);
      ɵɵprojection(2);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵproperty("ngIf", ctx.showScrollbars);
    }
  },
  dependencies: [TuiScrollControlsComponent, NgIf],
  styles: ["[_nghost-%COMP%]{position:relative;display:flex;isolation:isolate;overflow:auto}[_nghost-%COMP%]:not(._legacy){scrollbar-width:none;-ms-overflow-style:none}[_nghost-%COMP%]:not(._legacy)::-webkit-scrollbar, [_nghost-%COMP%]:not(._legacy)::-webkit-scrollbar-thumb{background:transparent;width:0;height:0}._legacy[_nghost-%COMP%]{overflow:overlay}@media all and (-webkit-min-device-pixel-ratio: 0) and (min-resolution: .001dpcm){._legacy[_nghost-%COMP%]::-webkit-scrollbar, ._legacy[_nghost-%COMP%]::-webkit-scrollbar-thumb{width:1rem;height:1rem;border-radius:6.25rem;background-clip:padding-box;border:.375rem solid transparent}._legacy[_nghost-%COMP%]::-webkit-scrollbar{background-color:transparent}._legacy[_nghost-%COMP%]::-webkit-scrollbar-thumb{background-color:var(--tui-clear-hover)}._legacy[_nghost-%COMP%]::-webkit-scrollbar-thumb:hover{background-color:var(--tui-clear-active)}._legacy[_nghost-%COMP%]::-webkit-scrollbar-thumb:active{background-color:var(--tui-text-03)}}.t-content[_ngcontent-%COMP%]{isolation:isolate;flex:1;flex-basis:auto;width:100%;height:-webkit-max-content;height:max-content}.t-bars[_ngcontent-%COMP%]{color:var(--tui-text-01)}"],
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiScrollbarComponent, [{
    type: Component,
    args: [{
      selector: "tui-scrollbar",
      templateUrl: "./scrollbar.template.html",
      styleUrls: ["./scrollbar.style.less"],
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [{
        provide: TUI_SCROLL_REF,
        deps: [TuiScrollbarComponent],
        useFactory: ({
          browserScrollRef
        }) => browserScrollRef
      }]
    }]
  }], function() {
    return [{
      type: void 0,
      decorators: [{
        type: Inject,
        args: [CSS2]
      }]
    }, {
      type: ElementRef,
      decorators: [{
        type: Inject,
        args: [ElementRef]
      }]
    }, {
      type: void 0,
      decorators: [{
        type: Inject,
        args: [USER_AGENT]
      }]
    }, {
      type: void 0,
      decorators: [{
        type: Inject,
        args: [TUI_IS_IOS]
      }]
    }];
  }, {
    hidden: [{
      type: Input
    }],
    showNative: [{
      type: HostBinding,
      args: ["class._legacy"]
    }],
    onScrollable: [{
      type: HostListener,
      args: [`${TUI_SCROLLABLE}.stop`, ["$event.detail"]]
    }],
    scrollIntoView: [{
      type: HostListener,
      args: [`${TUI_SCROLL_INTO_VIEW}.stop`, ["$event.detail"]]
    }]
  });
})();
var TuiScrollbarModule = class {
};
TuiScrollbarModule.ɵfac = function TuiScrollbarModule_Factory(t) {
  return new (t || TuiScrollbarModule)();
};
TuiScrollbarModule.ɵmod = ɵɵdefineNgModule({
  type: TuiScrollbarModule,
  declarations: [TuiScrollbarComponent, TuiScrollRefDirective2, TuiScrollableDirective],
  imports: [CommonModule, TuiScrollControlsModule],
  exports: [TuiScrollbarComponent, TuiScrollRefDirective2, TuiScrollableDirective]
});
TuiScrollbarModule.ɵinj = ɵɵdefineInjector({
  imports: [[CommonModule, TuiScrollControlsModule]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiScrollbarModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, TuiScrollControlsModule],
      declarations: [TuiScrollbarComponent, TuiScrollRefDirective2, TuiScrollableDirective],
      exports: [TuiScrollbarComponent, TuiScrollRefDirective2, TuiScrollableDirective]
    }]
  }], null, null);
})();

// node_modules/@tinkoff/ng-event-plugins/fesm2015/tinkoff-ng-event-plugins.js
function dasharize(camel) {
  return camel.replace(/[a-z][A-Z]/g, (letterLetter) => {
    return `${letterLetter[0]}-${letterLetter[1].toLowerCase()}`;
  });
}
var AbstractEventPlugin = class {
  supports(event) {
    return event.includes(this.modifier);
  }
  /** This is not used in Ivy anymore */
  addGlobalEventListener() {
    return () => {
    };
  }
  unwrap(event) {
    return event.split(".").filter((v) => !this.modifier.includes(v)).join(".");
  }
};
var BindEventPlugin = class extends AbstractEventPlugin {
  constructor() {
    super(...arguments);
    this.modifier = "$";
  }
  addEventListener(element, event) {
    element[event] = element[event] || EMPTY;
    const method = this.getMethod(element, event);
    const zone$ = this.manager.getZone().onStable;
    const sub = concat(zone$.pipe(takeWhile(() => element[event] === EMPTY)), defer(() => element[event])).subscribe(method);
    return () => sub.unsubscribe();
  }
  getMethod(element, event) {
    const [, key, value, unit = ""] = event.split(".");
    if (event.endsWith(".attr")) {
      return (v) => v === null ? element.removeAttribute(key) : element.setAttribute(key, String(v));
    }
    if (key === "class") {
      return (v) => element.classList.toggle(value, !!v);
    }
    if (key === "style") {
      return (v) => element.style.setProperty(dasharize(value), `${v}${unit}`);
    }
    return (v) => element[key] = v;
  }
};
BindEventPlugin.ɵfac = (() => {
  let ɵBindEventPlugin_BaseFactory;
  return function BindEventPlugin_Factory(t) {
    return (ɵBindEventPlugin_BaseFactory || (ɵBindEventPlugin_BaseFactory = ɵɵgetInheritedFactory(BindEventPlugin)))(t || BindEventPlugin);
  };
})();
BindEventPlugin.ɵprov = ɵɵdefineInjectable({
  token: BindEventPlugin,
  factory: BindEventPlugin.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BindEventPlugin, [{
    type: Injectable
  }], null, null);
})();
var OptionsEventPlugin = class extends AbstractEventPlugin {
  constructor() {
    super(...arguments);
    this.modifier = "capture.once.passive";
  }
  supports(event) {
    return event.includes(".") && !this.unwrap(event).includes(".");
  }
  addEventListener(element, event, handler) {
    element.addEventListener(this.unwrap(event), handler, {
      once: event.includes(".once"),
      passive: event.includes(".passive"),
      capture: event.includes(".capture")
    });
    return () => element.removeEventListener(this.unwrap(event), handler);
  }
};
OptionsEventPlugin.ɵfac = (() => {
  let ɵOptionsEventPlugin_BaseFactory;
  return function OptionsEventPlugin_Factory(t) {
    return (ɵOptionsEventPlugin_BaseFactory || (ɵOptionsEventPlugin_BaseFactory = ɵɵgetInheritedFactory(OptionsEventPlugin)))(t || OptionsEventPlugin);
  };
})();
OptionsEventPlugin.ɵprov = ɵɵdefineInjectable({
  token: OptionsEventPlugin,
  factory: OptionsEventPlugin.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OptionsEventPlugin, [{
    type: Injectable
  }], null, null);
})();
var PreventEventPlugin = class extends AbstractEventPlugin {
  constructor() {
    super(...arguments);
    this.modifier = ".prevent";
  }
  addEventListener(element, event, handler) {
    const wrapped = (event2) => {
      event2.preventDefault();
      handler(event2);
    };
    return this.manager.addEventListener(element, this.unwrap(event), wrapped);
  }
};
PreventEventPlugin.ɵfac = (() => {
  let ɵPreventEventPlugin_BaseFactory;
  return function PreventEventPlugin_Factory(t) {
    return (ɵPreventEventPlugin_BaseFactory || (ɵPreventEventPlugin_BaseFactory = ɵɵgetInheritedFactory(PreventEventPlugin)))(t || PreventEventPlugin);
  };
})();
PreventEventPlugin.ɵprov = ɵɵdefineInjectable({
  token: PreventEventPlugin,
  factory: PreventEventPlugin.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PreventEventPlugin, [{
    type: Injectable
  }], null, null);
})();
var SelfEventPlugin = class extends AbstractEventPlugin {
  constructor() {
    super(...arguments);
    this.modifier = ".self";
  }
  addEventListener(element, event, handler) {
    const wrapped = (event2) => {
      if (event2.target === event2.currentTarget) {
        handler(event2);
      }
    };
    return this.manager.addEventListener(element, this.unwrap(event), wrapped);
  }
};
SelfEventPlugin.ɵfac = (() => {
  let ɵSelfEventPlugin_BaseFactory;
  return function SelfEventPlugin_Factory(t) {
    return (ɵSelfEventPlugin_BaseFactory || (ɵSelfEventPlugin_BaseFactory = ɵɵgetInheritedFactory(SelfEventPlugin)))(t || SelfEventPlugin);
  };
})();
SelfEventPlugin.ɵprov = ɵɵdefineInjectable({
  token: SelfEventPlugin,
  factory: SelfEventPlugin.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SelfEventPlugin, [{
    type: Injectable
  }], null, null);
})();
var SilentEventPlugin = class _SilentEventPlugin extends AbstractEventPlugin {
  constructor() {
    super(...arguments);
    this.modifier = ".silent";
  }
  addEventListener(element, event, handler) {
    _SilentEventPlugin.ngZone = this.manager.getZone();
    return _SilentEventPlugin.ngZone.runOutsideAngular(() => this.manager.addEventListener(element, this.unwrap(event), handler));
  }
};
SilentEventPlugin.ɵfac = (() => {
  let ɵSilentEventPlugin_BaseFactory;
  return function SilentEventPlugin_Factory(t) {
    return (ɵSilentEventPlugin_BaseFactory || (ɵSilentEventPlugin_BaseFactory = ɵɵgetInheritedFactory(SilentEventPlugin)))(t || SilentEventPlugin);
  };
})();
SilentEventPlugin.ɵprov = ɵɵdefineInjectable({
  token: SilentEventPlugin,
  factory: SilentEventPlugin.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SilentEventPlugin, [{
    type: Injectable
  }], null, null);
})();
var StopEventPlugin = class extends AbstractEventPlugin {
  constructor() {
    super(...arguments);
    this.modifier = ".stop";
  }
  addEventListener(element, event, handler) {
    const wrapped = (event2) => {
      event2.stopPropagation();
      handler(event2);
    };
    return this.manager.addEventListener(element, this.unwrap(event), wrapped);
  }
};
StopEventPlugin.ɵfac = (() => {
  let ɵStopEventPlugin_BaseFactory;
  return function StopEventPlugin_Factory(t) {
    return (ɵStopEventPlugin_BaseFactory || (ɵStopEventPlugin_BaseFactory = ɵɵgetInheritedFactory(StopEventPlugin)))(t || StopEventPlugin);
  };
})();
StopEventPlugin.ɵprov = ɵɵdefineInjectable({
  token: StopEventPlugin,
  factory: StopEventPlugin.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StopEventPlugin, [{
    type: Injectable
  }], null, null);
})();
var ZoneEventPlugin = class extends AbstractEventPlugin {
  constructor() {
    super(...arguments);
    this.modifier = ".init";
  }
  addEventListener() {
    console.warn(".init plugin is no longer necessary as of v3.1.0");
    return () => {
    };
  }
};
ZoneEventPlugin.ɵfac = (() => {
  let ɵZoneEventPlugin_BaseFactory;
  return function ZoneEventPlugin_Factory(t) {
    return (ɵZoneEventPlugin_BaseFactory || (ɵZoneEventPlugin_BaseFactory = ɵɵgetInheritedFactory(ZoneEventPlugin)))(t || ZoneEventPlugin);
  };
})();
ZoneEventPlugin.ɵprov = ɵɵdefineInjectable({
  token: ZoneEventPlugin,
  factory: ZoneEventPlugin.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ZoneEventPlugin, [{
    type: Injectable
  }], null, null);
})();
var PLUGINS = [SilentEventPlugin, BindEventPlugin, OptionsEventPlugin, PreventEventPlugin, SelfEventPlugin, StopEventPlugin, ZoneEventPlugin];
var NG_EVENT_PLUGINS = PLUGINS.map((useClass) => ({
  provide: EVENT_MANAGER_PLUGINS,
  multi: true,
  useClass
}));
function shouldCall(predicate) {
  return (_target, _key, desc) => {
    const {
      value
    } = desc;
    desc.value = function(...args) {
      if (!predicate.apply(this, args)) {
        return;
      }
      if (SilentEventPlugin.ngZone) {
        SilentEventPlugin.ngZone.run(() => value.apply(this, args));
      } else {
        value.apply(this, args);
      }
    };
  };
}
var EventPluginsModule = class _EventPluginsModule {
  constructor([plugin]) {
    console.assert(!(plugin instanceof SilentEventPlugin) || _EventPluginsModule.initialized, "EventPluginsModule must come after BrowserModule in imports");
    _EventPluginsModule.initialized = true;
  }
};
EventPluginsModule.initialized = false;
EventPluginsModule.ɵfac = function EventPluginsModule_Factory(t) {
  return new (t || EventPluginsModule)(ɵɵinject(EVENT_MANAGER_PLUGINS));
};
EventPluginsModule.ɵmod = ɵɵdefineNgModule({
  type: EventPluginsModule
});
EventPluginsModule.ɵinj = ɵɵdefineInjector({
  providers: NG_EVENT_PLUGINS
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EventPluginsModule, [{
    type: NgModule,
    args: [{
      providers: NG_EVENT_PLUGINS
    }]
  }], function() {
    return [{
      type: void 0,
      decorators: [{
        type: Inject,
        args: [EVENT_MANAGER_PLUGINS]
      }]
    }];
  }, null);
})();

// node_modules/@taiga-ui/core/fesm2015/taiga-ui-core-directives-dropdown.js
function TuiDropdownComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 4);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const text_r2 = ctx.polymorpheusOutlet;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", text_r2, " ");
  }
}
var _c04 = (a0) => ({
  $implicit: a0
});
var TUI_DROPDOWN_COMPONENT = tuiCreateTokenFromFactory(() => TuiDropdownComponent);
var TuiDropdownOpenDirective = class {
  constructor() {
    this.tuiDropdownOpen = false;
    this.tuiDropdownOpenChange = new EventEmitter();
  }
  update(open) {
    this.tuiDropdownOpen = open;
    this.tuiDropdownOpenChange.emit(open);
  }
  ngOnChanges() {
    var _a;
    (_a = this.dropdown) === null || _a === void 0 ? void 0 : _a.toggle(this.tuiDropdownOpen);
  }
};
TuiDropdownOpenDirective.ɵfac = function TuiDropdownOpenDirective_Factory(t) {
  return new (t || TuiDropdownOpenDirective)();
};
TuiDropdownOpenDirective.ɵdir = ɵɵdefineDirective({
  type: TuiDropdownOpenDirective,
  selectors: [["", "tuiDropdownOpen", ""], ["", "tuiDropdownOpenChange", ""]],
  inputs: {
    tuiDropdownOpen: "tuiDropdownOpen"
  },
  outputs: {
    tuiDropdownOpenChange: "tuiDropdownOpenChange"
  },
  features: [ɵɵNgOnChangesFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDropdownOpenDirective, [{
    type: Directive,
    args: [{
      selector: "[tuiDropdownOpen],[tuiDropdownOpenChange]"
    }]
  }], null, {
    tuiDropdownOpen: [{
      type: Input
    }],
    tuiDropdownOpenChange: [{
      type: Output
    }]
  });
})();
var TuiDropdownDirective = class {
  constructor(destroy$, el, dropdown, injector, dropdownService, open) {
    this.el = el;
    this.dropdown = dropdown;
    this.injector = injector;
    this.dropdownService = dropdownService;
    this.open = open;
    this.refresh$ = new Subject();
    this.dropdownBoxRef = null;
    this.type = "dropdown";
    this.component = new PolymorpheusComponent(this.dropdown, this.injector);
    if (this.open && !this.open.dropdown) {
      this.open.dropdown = this;
    } else {
      this.open = null;
    }
    this.refresh$.pipe(throttleTime(0), takeUntil(destroy$)).subscribe(() => {
      var _a, _b;
      (_a = this.dropdownBoxRef) === null || _a === void 0 ? void 0 : _a.changeDetectorRef.detectChanges();
      (_b = this.dropdownBoxRef) === null || _b === void 0 ? void 0 : _b.changeDetectorRef.markForCheck();
    });
  }
  get position() {
    return tuiCheckFixedPosition(this.el.nativeElement) ? "fixed" : "absolute";
  }
  ngAfterViewChecked() {
    this.refresh$.next();
  }
  ngAfterViewInit() {
    if (this.open) {
      this.toggle(this.open.tuiDropdownOpen);
    }
  }
  ngOnChanges() {
    if (!this.content) {
      this.toggle(false);
    }
  }
  ngOnDestroy() {
    this.toggle(false);
    if (this.open) {
      this.open.dropdown = void 0;
    }
  }
  getClientRect() {
    return this.el.nativeElement.getBoundingClientRect();
  }
  toggle(show) {
    var _a, _b;
    if (show && this.content && !this.dropdownBoxRef) {
      this.dropdownBoxRef = this.dropdownService.add(this.component);
      (_a = this.open) === null || _a === void 0 ? void 0 : _a.update(true);
    } else if (!show && this.dropdownBoxRef) {
      this.dropdownService.remove(this.dropdownBoxRef);
      this.dropdownBoxRef = null;
      (_b = this.open) === null || _b === void 0 ? void 0 : _b.update(false);
    }
  }
};
TuiDropdownDirective.ɵfac = function TuiDropdownDirective_Factory(t) {
  return new (t || TuiDropdownDirective)(ɵɵdirectiveInject(TuiDestroyService, 2), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(TUI_DROPDOWN_COMPONENT), ɵɵdirectiveInject(INJECTOR), ɵɵdirectiveInject(TuiDropdownPortalService), ɵɵdirectiveInject(TuiDropdownOpenDirective, 8));
};
TuiDropdownDirective.ɵdir = ɵɵdefineDirective({
  type: TuiDropdownDirective,
  selectors: [["", "tuiDropdown", "", 5, "ng-container"]],
  inputs: {
    content: ["tuiDropdown", "content"]
  },
  exportAs: ["tuiDropdown"],
  features: [ɵɵProvidersFeature([TuiDestroyService, tuiAsRectAccessor(TuiDropdownDirective), tuiAsVehicle(TuiDropdownDirective)]), ɵɵNgOnChangesFeature]
});
__decorate([tuiPure], TuiDropdownDirective.prototype, "position", null);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDropdownDirective, [{
    type: Directive,
    args: [{
      selector: "[tuiDropdown]:not(ng-container)",
      providers: [TuiDestroyService, tuiAsRectAccessor(TuiDropdownDirective), tuiAsVehicle(TuiDropdownDirective)],
      exportAs: "tuiDropdown"
    }]
  }], function() {
    return [{
      type: Observable,
      decorators: [{
        type: Self
      }, {
        type: Inject,
        args: [TuiDestroyService]
      }]
    }, {
      type: ElementRef,
      decorators: [{
        type: Inject,
        args: [ElementRef]
      }]
    }, {
      type: Type,
      decorators: [{
        type: Inject,
        args: [TUI_DROPDOWN_COMPONENT]
      }]
    }, {
      type: Injector,
      decorators: [{
        type: Inject,
        args: [INJECTOR]
      }]
    }, {
      type: TuiDropdownPortalService,
      decorators: [{
        type: Inject,
        args: [TuiDropdownPortalService]
      }]
    }, {
      type: TuiDropdownOpenDirective,
      decorators: [{
        type: Optional
      }, {
        type: Inject,
        args: [TuiDropdownOpenDirective]
      }]
    }];
  }, {
    content: [{
      type: Input,
      args: ["tuiDropdown"]
    }],
    position: []
  });
})();
var TUI_DROPDOWN_HOVER_DEFAULT_OPTIONS = {
  showDelay: 200,
  hideDelay: 500
};
var TUI_DROPDOWN_HOVER_OPTIONS = tuiCreateToken(TUI_DROPDOWN_HOVER_DEFAULT_OPTIONS);
function tuiDropdownHoverOptionsProvider(options) {
  return tuiProvideOptions(TUI_DROPDOWN_HOVER_OPTIONS, options, TUI_DROPDOWN_HOVER_DEFAULT_OPTIONS);
}
var TuiDropdownHoverDirective = class extends TuiDriver {
  constructor(hovered$, options, parentHover) {
    super((subscriber) => this.stream$.subscribe(subscriber));
    this.hovered$ = hovered$;
    this.options = options;
    this.parentHover = parentHover;
    this.toggle$ = new Subject();
    this.stream$ = merge(this.toggle$, this.hovered$).pipe(switchMap((visible) => of(visible).pipe(delay(visible ? this.showDelay : this.hideDelay))), tap((visible) => {
      this.hovered = visible;
    }), share());
    this.showDelay = this.options.showDelay;
    this.hideDelay = this.options.hideDelay;
    this.hovered = false;
    this.type = "dropdown";
  }
  toggle(visible) {
    var _a;
    (_a = this.parentHover) === null || _a === void 0 ? void 0 : _a.toggle(visible);
    this.toggle$.next(visible);
  }
};
TuiDropdownHoverDirective.ɵfac = function TuiDropdownHoverDirective_Factory(t) {
  return new (t || TuiDropdownHoverDirective)(ɵɵdirectiveInject(TuiHoveredService), ɵɵdirectiveInject(TUI_DROPDOWN_HOVER_OPTIONS), ɵɵdirectiveInject(TuiDropdownHoverDirective, 12));
};
TuiDropdownHoverDirective.ɵdir = ɵɵdefineDirective({
  type: TuiDropdownHoverDirective,
  selectors: [["", "tuiDropdownHover", "", 5, "ng-container"]],
  inputs: {
    showDelay: ["tuiDropdownShowDelay", "showDelay"],
    hideDelay: ["tuiDropdownHideDelay", "hideDelay"]
  },
  features: [ɵɵProvidersFeature([tuiAsDriver(TuiDropdownHoverDirective), TuiHoveredService]), ɵɵInheritDefinitionFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDropdownHoverDirective, [{
    type: Directive,
    args: [{
      selector: "[tuiDropdownHover]:not(ng-container)",
      providers: [tuiAsDriver(TuiDropdownHoverDirective), TuiHoveredService]
    }]
  }], function() {
    return [{
      type: Observable,
      decorators: [{
        type: Inject,
        args: [TuiHoveredService]
      }]
    }, {
      type: void 0,
      decorators: [{
        type: Inject,
        args: [TUI_DROPDOWN_HOVER_OPTIONS]
      }]
    }, {
      type: TuiDropdownHoverDirective,
      decorators: [{
        type: SkipSelf
      }, {
        type: Optional
      }, {
        type: Inject,
        args: [TuiDropdownHoverDirective]
      }]
    }];
  }, {
    showDelay: [{
      type: Input,
      args: ["tuiDropdownShowDelay"]
    }],
    hideDelay: [{
      type: Input,
      args: ["tuiDropdownHideDelay"]
    }]
  });
})();
var TUI_DROPDOWN_DEFAULT_OPTIONS = {
  align: "left",
  direction: null,
  limitWidth: "auto",
  maxHeight: 400,
  minHeight: 80,
  offset: 4,
  appearance: ""
};
var TUI_DROPDOWN_OPTIONS = tuiCreateToken(TUI_DROPDOWN_DEFAULT_OPTIONS);
var tuiDropdownOptionsProvider = (override) => ({
  provide: TUI_DROPDOWN_OPTIONS,
  deps: [[new Optional(), TuiDropdownOptionsDirective], [new Optional(), new SkipSelf(), TUI_DROPDOWN_OPTIONS]],
  useFactory: tuiOverrideOptions(override, TUI_DROPDOWN_DEFAULT_OPTIONS)
});
var TuiDropdownOptionsDirective = class {
  constructor(options) {
    this.options = options;
    this.align = this.options.align;
    this.appearance = this.options.appearance;
    this.direction = this.options.direction;
    this.limitWidth = this.options.limitWidth;
    this.minHeight = this.options.minHeight;
    this.maxHeight = this.options.maxHeight;
    this.offset = this.options.offset;
  }
};
TuiDropdownOptionsDirective.ɵfac = function TuiDropdownOptionsDirective_Factory(t) {
  return new (t || TuiDropdownOptionsDirective)(ɵɵdirectiveInject(TUI_DROPDOWN_OPTIONS, 4));
};
TuiDropdownOptionsDirective.ɵdir = ɵɵdefineDirective({
  type: TuiDropdownOptionsDirective,
  selectors: [["", "tuiDropdownAlign", ""], ["", "tuiDropdownAppearance", ""], ["", "tuiDropdownDirection", ""], ["", "tuiDropdownLimitWidth", ""], ["", "tuiDropdownMinHeight", ""], ["", "tuiDropdownMaxHeight", ""], ["", "tuiDropdownOffset", ""]],
  inputs: {
    align: ["tuiDropdownAlign", "align"],
    appearance: ["tuiDropdownAppearance", "appearance"],
    direction: ["tuiDropdownDirection", "direction"],
    limitWidth: ["tuiDropdownLimitWidth", "limitWidth"],
    minHeight: ["tuiDropdownMinHeight", "minHeight"],
    maxHeight: ["tuiDropdownMaxHeight", "maxHeight"],
    offset: ["tuiDropdownOffset", "offset"]
  },
  features: [ɵɵProvidersFeature([{
    provide: TUI_DROPDOWN_OPTIONS,
    useExisting: forwardRef(() => TuiDropdownOptionsDirective)
  }])]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDropdownOptionsDirective, [{
    type: Directive,
    args: [{
      selector: "[tuiDropdownAlign], [tuiDropdownAppearance], [tuiDropdownDirection], [tuiDropdownLimitWidth], [tuiDropdownMinHeight], [tuiDropdownMaxHeight], [tuiDropdownOffset]",
      providers: [{
        provide: TUI_DROPDOWN_OPTIONS,
        useExisting: forwardRef(() => TuiDropdownOptionsDirective)
      }]
    }]
  }], function() {
    return [{
      type: void 0,
      decorators: [{
        type: SkipSelf
      }, {
        type: Inject,
        args: [TUI_DROPDOWN_OPTIONS]
      }]
    }];
  }, {
    align: [{
      type: Input,
      args: ["tuiDropdownAlign"]
    }],
    appearance: [{
      type: Input,
      args: ["tuiDropdownAppearance"]
    }],
    direction: [{
      type: Input,
      args: ["tuiDropdownDirection"]
    }],
    limitWidth: [{
      type: Input,
      args: ["tuiDropdownLimitWidth"]
    }],
    minHeight: [{
      type: Input,
      args: ["tuiDropdownMinHeight"]
    }],
    maxHeight: [{
      type: Input,
      args: ["tuiDropdownMaxHeight"]
    }],
    offset: [{
      type: Input,
      args: ["tuiDropdownOffset"]
    }]
  });
})();
var TuiDropdownComponent = class {
  constructor(visualViewportService, position$, destroy$, directive, animation, el, accessor, win, mode$, options, hoverDirective) {
    this.directive = directive;
    this.animation = animation;
    this.el = el;
    this.accessor = accessor;
    this.win = win;
    this.mode$ = mode$;
    this.options = options;
    this.hoverDirective = hoverDirective;
    position$.pipe(map((point) => this.directive.position === "fixed" ? visualViewportService.correct(point) : point), takeUntil(destroy$)).subscribe(([top, left]) => {
      this.update(top, left);
    });
    this.updateWidth(this.accessor.getClientRect().width);
  }
  onHoveredChange(hovered) {
    var _a;
    (_a = this.hoverDirective) === null || _a === void 0 ? void 0 : _a.toggle(hovered);
  }
  onTopFocus() {
    this.moveFocusOutside(true);
  }
  onBottomFocus() {
    this.moveFocusOutside(false);
  }
  update(top, left) {
    var _a;
    const {
      style: style2
    } = this.el.nativeElement;
    const {
      right
    } = this.el.nativeElement.getBoundingClientRect();
    const {
      maxHeight,
      offset
    } = this.options;
    const {
      innerHeight
    } = this.win;
    const clientRect = (_a = this.el.nativeElement.offsetParent) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect();
    const {
      position
    } = this.directive;
    const rect2 = this.accessor.getClientRect();
    const offsetX = position === "fixed" ? 0 : -((clientRect === null || clientRect === void 0 ? void 0 : clientRect.left) || 0);
    const offsetY = position === "fixed" ? 0 : -((clientRect === null || clientRect === void 0 ? void 0 : clientRect.top) || 0);
    top += offsetY;
    left += offsetX;
    const isIntersecting = left < rect2.right && right > rect2.left && top < offsetY + 2 * offset;
    const available = isIntersecting ? rect2.top - 2 * offset : offsetY + innerHeight - top - offset;
    style2.position = position;
    style2.top = tuiPx(Math.max(top, offsetY + offset));
    style2.left = tuiPx(left);
    style2.maxHeight = tuiPx(Math.min(maxHeight, available));
    style2.width = "";
    style2.minWidth = "";
    this.updateWidth(rect2.width);
  }
  updateWidth(width) {
    const {
      style: style2
    } = this.el.nativeElement;
    switch (this.options.limitWidth) {
      case "min":
        style2.minWidth = tuiPx(width);
        break;
      case "fixed":
        style2.width = tuiPx(width);
        break;
      case "auto":
        break;
    }
  }
  moveFocusOutside(previous) {
    const {
      nativeElement
    } = this.directive.el;
    const {
      ownerDocument
    } = nativeElement;
    const root = ownerDocument ? ownerDocument.body : nativeElement;
    let focusable = tuiGetClosestFocusable({
      initial: nativeElement,
      root,
      previous
    });
    while (focusable !== null && nativeElement.contains(focusable)) {
      focusable = tuiGetClosestFocusable({
        initial: focusable,
        root,
        previous
      });
    }
    focusable === null || focusable === void 0 ? void 0 : focusable.focus();
  }
};
TuiDropdownComponent.ɵfac = function TuiDropdownComponent_Factory(t) {
  return new (t || TuiDropdownComponent)(ɵɵdirectiveInject(TuiVisualViewportService), ɵɵdirectiveInject(TuiPositionService), ɵɵdirectiveInject(TuiDestroyService, 2), ɵɵdirectiveInject(TuiDropdownDirective), ɵɵdirectiveInject(TUI_ANIMATION_OPTIONS), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(TuiRectAccessor), ɵɵdirectiveInject(WINDOW), ɵɵdirectiveInject(TUI_MODE), ɵɵdirectiveInject(TUI_DROPDOWN_OPTIONS), ɵɵdirectiveInject(TuiDropdownHoverDirective, 8));
};
TuiDropdownComponent.ɵcmp = ɵɵdefineComponent({
  type: TuiDropdownComponent,
  selectors: [["tui-dropdown"]],
  hostVars: 2,
  hostBindings: function TuiDropdownComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("$.data-mode.attr", function TuiDropdownComponent___data_mode_attr_HostBindingHandler() {
        return ctx.mode$;
      });
    }
    if (rf & 2) {
      ɵɵattribute("data-appearance", ctx.options.appearance);
      ɵɵsyntheticHostProperty("@tuiDropdownAnimation", ctx.animation);
    }
  },
  features: [ɵɵProvidersFeature([TuiDestroyService, TuiPositionService, tuiPositionAccessorFor("dropdown"), tuiRectAccessorFor("dropdown", TuiDropdownDirective), MODE_PROVIDER])],
  decls: 5,
  vars: 4,
  consts: [["tuiActiveZone", "", "tuiOverscroll", "all", 1, "t-scroll", 3, "tuiHoveredChange"], ["activeZone", "tuiActiveZone"], ["tabindex", "0", 3, "focus"], ["class", "t-primitive", 4, "polymorpheusOutlet", "polymorpheusOutletContext"], [1, "t-primitive"]],
  template: function TuiDropdownComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "tui-scrollbar", 0, 1);
      ɵɵlistener("tuiHoveredChange", function TuiDropdownComponent_Template_tui_scrollbar_tuiHoveredChange_0_listener($event) {
        return ctx.onHoveredChange($event);
      });
      ɵɵelementStart(2, "div", 2);
      ɵɵlistener("focus", function TuiDropdownComponent_Template_div_focus_2_listener() {
        return ctx.onTopFocus();
      });
      ɵɵelementEnd();
      ɵɵtemplate(3, TuiDropdownComponent_div_3_Template, 2, 1, "div", 3);
      ɵɵelementStart(4, "div", 2);
      ɵɵlistener("focus", function TuiDropdownComponent_Template_div_focus_4_listener() {
        return ctx.onBottomFocus();
      });
      ɵɵelementEnd()();
    }
    if (rf & 2) {
      const _r0 = ɵɵreference(1);
      ɵɵadvance(3);
      ɵɵproperty("polymorpheusOutlet", ctx.directive.content)("polymorpheusOutletContext", ɵɵpureFunction1(2, _c04, _r0));
    }
  },
  dependencies: [TuiScrollbarComponent, TuiActiveZoneDirective, TuiOverscrollDirective, TuiHoveredDirective, PolymorpheusOutletDirective],
  styles: ['[_nghost-%COMP%]{position:absolute;display:flex;box-shadow:var(--tui-shadow-dropdown);background:var(--tui-elevation-02);border-radius:var(--tui-radius-m);overflow:hidden;border:1px solid var(--tui-base-04);box-sizing:border-box;max-width:calc(100% - 8px);isolation:isolate;pointer-events:auto}.ng-animating[_nghost-%COMP%]{pointer-events:none}[_nghost-%COMP%]:not([style*="top"]){visibility:hidden}[data-mode=onDark][_nghost-%COMP%]{--tui-text-01: var(--tui-text-01-night);--tui-clear: var(--tui-clear-inverse);background:#222;border:1px solid #808080}.t-scroll[_ngcontent-%COMP%]{flex-grow:1;max-width:100%}.t-primitive[_ngcontent-%COMP%]{padding:1rem}'],
  data: {
    animation: [tuiDropdownAnimation]
  }
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDropdownComponent, [{
    type: Component,
    args: [{
      selector: "tui-dropdown",
      templateUrl: "./dropdown.template.html",
      styleUrls: ["./dropdown.style.less"],
      // @bad TODO: OnPush
      // eslint-disable-next-line @angular-eslint/prefer-on-push-component-change-detection
      changeDetection: ChangeDetectionStrategy.Default,
      providers: [TuiDestroyService, TuiPositionService, tuiPositionAccessorFor("dropdown"), tuiRectAccessorFor("dropdown", TuiDropdownDirective), MODE_PROVIDER],
      host: {
        "[@tuiDropdownAnimation]": "animation",
        "[attr.data-appearance]": "options.appearance",
        "($.data-mode.attr)": "mode$"
      },
      animations: [tuiDropdownAnimation]
    }]
  }], function() {
    return [{
      type: TuiVisualViewportService,
      decorators: [{
        type: Inject,
        args: [TuiVisualViewportService]
      }]
    }, {
      type: Observable,
      decorators: [{
        type: Inject,
        args: [TuiPositionService]
      }]
    }, {
      type: Observable,
      decorators: [{
        type: Self
      }, {
        type: Inject,
        args: [TuiDestroyService]
      }]
    }, {
      type: TuiDropdownDirective,
      decorators: [{
        type: Inject,
        args: [TuiDropdownDirective]
      }]
    }, {
      type: void 0,
      decorators: [{
        type: Inject,
        args: [TUI_ANIMATION_OPTIONS]
      }]
    }, {
      type: ElementRef,
      decorators: [{
        type: Inject,
        args: [ElementRef]
      }]
    }, {
      type: TuiRectAccessor,
      decorators: [{
        type: Inject,
        args: [TuiRectAccessor]
      }]
    }, {
      type: Window,
      decorators: [{
        type: Inject,
        args: [WINDOW]
      }]
    }, {
      type: Observable,
      decorators: [{
        type: Inject,
        args: [TUI_MODE]
      }]
    }, {
      type: void 0,
      decorators: [{
        type: Inject,
        args: [TUI_DROPDOWN_OPTIONS]
      }]
    }, {
      type: TuiDropdownHoverDirective,
      decorators: [{
        type: Optional
      }, {
        type: Inject,
        args: [TuiDropdownHoverDirective]
      }]
    }];
  }, null);
})();
function activeZoneFilter(target) {
  return !this.activeZone.contains(target);
}
var TuiDropdownContextDirective = class extends TuiDriver {
  constructor(activeZone) {
    super((subscriber) => this.stream$.subscribe(subscriber));
    this.activeZone = activeZone;
    this.stream$ = new Subject();
    this.currentRect = EMPTY_CLIENT_RECT;
    this.type = "dropdown";
  }
  onContextMenu(x, y) {
    this.currentRect = tuiPointToClientRect(x, y);
    this.stream$.next(true);
  }
  closeDropdown() {
    this.stream$.next(false);
  }
  getClientRect() {
    return this.currentRect;
  }
};
TuiDropdownContextDirective.ɵfac = function TuiDropdownContextDirective_Factory(t) {
  return new (t || TuiDropdownContextDirective)(ɵɵdirectiveInject(TuiActiveZoneDirective));
};
TuiDropdownContextDirective.ɵdir = ɵɵdefineDirective({
  type: TuiDropdownContextDirective,
  selectors: [["", "tuiDropdown", "", "tuiDropdownContext", ""]],
  hostBindings: function TuiDropdownContextDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("contextmenu.prevent.stop", function TuiDropdownContextDirective_contextmenu_prevent_stop_HostBindingHandler($event) {
        return ctx.onContextMenu($event.clientX, $event.clientY);
      })("click.silent", function TuiDropdownContextDirective_click_silent_HostBindingHandler($event) {
        return ctx.closeDropdown($event.target);
      }, false, ɵɵresolveDocument)("contextmenu.capture.silent", function TuiDropdownContextDirective_contextmenu_capture_silent_HostBindingHandler($event) {
        return ctx.closeDropdown($event.target);
      }, false, ɵɵresolveDocument)("keydown.esc", function TuiDropdownContextDirective_keydown_esc_HostBindingHandler($event) {
        return ctx.closeDropdown($event.currentTarget);
      }, false, ɵɵresolveDocument);
    }
  },
  features: [ɵɵProvidersFeature([TuiActiveZoneDirective, tuiAsDriver(TuiDropdownContextDirective), tuiAsRectAccessor(TuiDropdownContextDirective)]), ɵɵInheritDefinitionFeature]
});
__decorate([shouldCall(activeZoneFilter)], TuiDropdownContextDirective.prototype, "closeDropdown", null);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDropdownContextDirective, [{
    type: Directive,
    args: [{
      selector: "[tuiDropdown][tuiDropdownContext]",
      providers: [TuiActiveZoneDirective, tuiAsDriver(TuiDropdownContextDirective), tuiAsRectAccessor(TuiDropdownContextDirective)]
    }]
  }], function() {
    return [{
      type: TuiActiveZoneDirective,
      decorators: [{
        type: Inject,
        args: [TuiActiveZoneDirective]
      }]
    }];
  }, {
    onContextMenu: [{
      type: HostListener,
      args: ["contextmenu.prevent.stop", ["$event.clientX", "$event.clientY"]]
    }],
    closeDropdown: [{
      type: HostListener,
      args: ["document:click.silent", ["$event.target"]]
    }, {
      type: HostListener,
      args: ["document:contextmenu.capture.silent", ["$event.target"]]
    }, {
      type: HostListener,
      args: ["document:keydown.esc", ["$event.currentTarget"]]
    }]
  });
})();
var TuiDropdownDriverDirective = class extends AbstractTuiDriverDirective {
  // TODO: Figure out why this is necessary under nx test runner
  constructor(destroy$, drivers, vehicles) {
    super(destroy$, drivers, vehicles);
    this.type = "dropdown";
  }
};
TuiDropdownDriverDirective.ɵfac = function TuiDropdownDriverDirective_Factory(t) {
  return new (t || TuiDropdownDriverDirective)(ɵɵdirectiveInject(TuiDestroyService, 2), ɵɵdirectiveInject(TuiDriver), ɵɵdirectiveInject(TuiVehicle));
};
TuiDropdownDriverDirective.ɵdir = ɵɵdefineDirective({
  type: TuiDropdownDriverDirective,
  selectors: [["", "tuiDropdown", ""]],
  features: [ɵɵProvidersFeature([TuiDestroyService]), ɵɵInheritDefinitionFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDropdownDriverDirective, [{
    type: Directive,
    args: [{
      selector: "[tuiDropdown]",
      providers: [TuiDestroyService]
    }]
  }], function() {
    return [{
      type: Observable,
      decorators: [{
        type: Self
      }, {
        type: Inject,
        args: [TuiDestroyService]
      }]
    }, {
      type: void 0,
      decorators: [{
        type: Inject,
        args: [TuiDriver]
      }]
    }, {
      type: void 0,
      decorators: [{
        type: Inject,
        args: [TuiVehicle]
      }]
    }];
  }, null);
})();
var TuiDropdownHostDirective = class extends TuiRectAccessor {
  constructor() {
    super(...arguments);
    this.type = "dropdown";
  }
  getClientRect() {
    var _a;
    return ((_a = this.tuiDropdownHost) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect()) || EMPTY_CLIENT_RECT;
  }
};
TuiDropdownHostDirective.ɵfac = (() => {
  let ɵTuiDropdownHostDirective_BaseFactory;
  return function TuiDropdownHostDirective_Factory(t) {
    return (ɵTuiDropdownHostDirective_BaseFactory || (ɵTuiDropdownHostDirective_BaseFactory = ɵɵgetInheritedFactory(TuiDropdownHostDirective)))(t || TuiDropdownHostDirective);
  };
})();
TuiDropdownHostDirective.ɵdir = ɵɵdefineDirective({
  type: TuiDropdownHostDirective,
  selectors: [["", "tuiDropdown", "", "tuiDropdownHost", ""]],
  inputs: {
    tuiDropdownHost: "tuiDropdownHost"
  },
  features: [ɵɵProvidersFeature([tuiAsRectAccessor(TuiDropdownHostDirective)]), ɵɵInheritDefinitionFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDropdownHostDirective, [{
    type: Directive,
    args: [{
      selector: "[tuiDropdown][tuiDropdownHost]",
      providers: [tuiAsRectAccessor(TuiDropdownHostDirective)]
    }]
  }], null, {
    tuiDropdownHost: [{
      type: Input
    }]
  });
})();
var TuiDropdownManualDirective = class extends TuiDriver {
  constructor() {
    super((subscriber) => this.stream$.subscribe(subscriber));
    this.stream$ = new BehaviorSubject(false);
    this.tuiDropdownManual = false;
    this.type = "dropdown";
  }
  ngOnChanges() {
    this.stream$.next(this.tuiDropdownManual);
  }
};
TuiDropdownManualDirective.ɵfac = function TuiDropdownManualDirective_Factory(t) {
  return new (t || TuiDropdownManualDirective)();
};
TuiDropdownManualDirective.ɵdir = ɵɵdefineDirective({
  type: TuiDropdownManualDirective,
  selectors: [["", "tuiDropdown", "", "tuiDropdownManual", ""]],
  inputs: {
    tuiDropdownManual: "tuiDropdownManual"
  },
  features: [ɵɵProvidersFeature([tuiAsDriver(TuiDropdownManualDirective)]), ɵɵInheritDefinitionFeature, ɵɵNgOnChangesFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDropdownManualDirective, [{
    type: Directive,
    args: [{
      selector: "[tuiDropdown][tuiDropdownManual]",
      providers: [tuiAsDriver(TuiDropdownManualDirective)]
    }]
  }], function() {
    return [];
  }, {
    tuiDropdownManual: [{
      type: Input
    }]
  });
})();
var TuiDropdownPositionDirective = class extends TuiPositionAccessor {
  constructor(options, viewport, accessors, directive) {
    super();
    this.options = options;
    this.viewport = viewport;
    this.accessors = accessors;
    this.directive = directive;
    this.type = "dropdown";
  }
  getPosition({
    width,
    height
  }) {
    var _a, _b;
    if (!width && !height) {
      this.previous = void 0;
    }
    const hostRect = (_b = (_a = this.accessor) === null || _a === void 0 ? void 0 : _a.getClientRect()) !== null && _b !== void 0 ? _b : EMPTY_CLIENT_RECT;
    const viewportRect = this.viewport.getClientRect();
    const {
      minHeight,
      align,
      direction,
      offset
    } = this.options;
    const viewport = {
      top: viewportRect.top - offset,
      bottom: viewportRect.bottom + offset,
      right: viewportRect.right - offset,
      left: viewportRect.left + offset
    };
    const previous = this.previous || direction || "bottom";
    const available = {
      top: hostRect.top - 2 * offset - viewport.top,
      bottom: viewport.bottom - hostRect.bottom - 2 * offset
    };
    const right = Math.max(hostRect.right - width, offset);
    const left = hostRect.left + width < viewport.right ? hostRect.left : right;
    const position = {
      top: hostRect.top - offset - height,
      bottom: hostRect.bottom + offset,
      right: Math.max(viewport.left, right),
      center: hostRect.left + hostRect.width / 2 + width / 2 < viewport.right ? hostRect.left + hostRect.width / 2 - width / 2 : right,
      left: Math.max(viewport.left, left)
    };
    const better = available.top > available.bottom ? "top" : "bottom";
    if (available[previous] > minHeight && direction || available[previous] > height) {
      return [position[previous], position[align]];
    }
    this.previous = better;
    return [position[better], position[align]];
  }
  get accessor() {
    return tuiFallbackRectAccessor("dropdown")(this.accessors, this.directive);
  }
};
TuiDropdownPositionDirective.ɵfac = function TuiDropdownPositionDirective_Factory(t) {
  return new (t || TuiDropdownPositionDirective)(ɵɵdirectiveInject(TUI_DROPDOWN_OPTIONS), ɵɵdirectiveInject(TUI_VIEWPORT), ɵɵdirectiveInject(TuiRectAccessor), ɵɵdirectiveInject(TuiDropdownDirective));
};
TuiDropdownPositionDirective.ɵdir = ɵɵdefineDirective({
  type: TuiDropdownPositionDirective,
  selectors: [["", "tuiDropdown", "", 3, "tuiDropdownCustomPosition", "", 3, "tuiDropdownSided", ""]],
  features: [ɵɵProvidersFeature([tuiAsPositionAccessor(TuiDropdownPositionDirective)]), ɵɵInheritDefinitionFeature]
});
__decorate([tuiPure], TuiDropdownPositionDirective.prototype, "accessor", null);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDropdownPositionDirective, [{
    type: Directive,
    args: [{
      selector: "[tuiDropdown]:not([tuiDropdownCustomPosition]):not([tuiDropdownSided])",
      providers: [tuiAsPositionAccessor(TuiDropdownPositionDirective)]
    }]
  }], function() {
    return [{
      type: void 0,
      decorators: [{
        type: Inject,
        args: [TUI_DROPDOWN_OPTIONS]
      }]
    }, {
      type: TuiRectAccessor,
      decorators: [{
        type: Inject,
        args: [TUI_VIEWPORT]
      }]
    }, {
      type: void 0,
      decorators: [{
        type: Inject,
        args: [TuiRectAccessor]
      }]
    }, {
      type: TuiDropdownDirective,
      decorators: [{
        type: Inject,
        args: [TuiDropdownDirective]
      }]
    }];
  }, {
    accessor: []
  });
})();
var TuiDropdownPositionSidedDirective = class extends TuiPositionAccessor {
  constructor(options, viewport, vertical) {
    super();
    this.options = options;
    this.viewport = viewport;
    this.vertical = vertical;
    this.previous = this.options.direction || "bottom";
    this.tuiDropdownSided = "";
    this.tuiDropdownSidedOffset = 4;
    this.type = "dropdown";
  }
  getPosition(rect2) {
    var _a, _b;
    if (this.tuiDropdownSided === false) {
      return this.vertical.getPosition(rect2);
    }
    const {
      height,
      width
    } = rect2;
    const hostRect = (_b = (_a = this.vertical.accessor) === null || _a === void 0 ? void 0 : _a.getClientRect()) !== null && _b !== void 0 ? _b : EMPTY_CLIENT_RECT;
    const viewport = this.viewport.getClientRect();
    const {
      direction,
      minHeight,
      offset
    } = this.options;
    const align = this.options.align === "center" ? "left" : this.options.align;
    const available = {
      top: hostRect.bottom - viewport.top,
      left: hostRect.left - offset - viewport.left,
      right: viewport.right - hostRect.right - offset,
      bottom: viewport.bottom - hostRect.top
    };
    const position = {
      top: hostRect.bottom - height + this.tuiDropdownSidedOffset + 1,
      left: hostRect.left - width - offset,
      right: hostRect.right + offset,
      bottom: hostRect.top - this.tuiDropdownSidedOffset - 1
      // 1 for border
    };
    const better = available.top > available.bottom ? "top" : "bottom";
    const maxLeft = available.left > available.right ? position.left : position.right;
    const left = available[align] > width ? position[align] : maxLeft;
    if (available[this.previous] > minHeight && direction || this.previous === better) {
      return [position[this.previous], left];
    }
    this.previous = better;
    return [position[better], left];
  }
};
TuiDropdownPositionSidedDirective.ɵfac = function TuiDropdownPositionSidedDirective_Factory(t) {
  return new (t || TuiDropdownPositionSidedDirective)(ɵɵdirectiveInject(TUI_DROPDOWN_OPTIONS), ɵɵdirectiveInject(TUI_VIEWPORT), ɵɵdirectiveInject(TuiDropdownPositionDirective));
};
TuiDropdownPositionSidedDirective.ɵdir = ɵɵdefineDirective({
  type: TuiDropdownPositionSidedDirective,
  selectors: [["", "tuiDropdownSided", ""]],
  inputs: {
    tuiDropdownSided: "tuiDropdownSided",
    tuiDropdownSidedOffset: "tuiDropdownSidedOffset"
  },
  features: [ɵɵProvidersFeature([TuiDropdownPositionDirective, tuiAsPositionAccessor(TuiDropdownPositionSidedDirective)]), ɵɵInheritDefinitionFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDropdownPositionSidedDirective, [{
    type: Directive,
    args: [{
      selector: "[tuiDropdownSided]",
      providers: [TuiDropdownPositionDirective, tuiAsPositionAccessor(TuiDropdownPositionSidedDirective)]
    }]
  }], function() {
    return [{
      type: void 0,
      decorators: [{
        type: Inject,
        args: [TUI_DROPDOWN_OPTIONS]
      }]
    }, {
      type: TuiRectAccessor,
      decorators: [{
        type: Inject,
        args: [TUI_VIEWPORT]
      }]
    }, {
      type: TuiDropdownPositionDirective,
      decorators: [{
        type: Inject,
        args: [TuiDropdownPositionDirective]
      }]
    }];
  }, {
    tuiDropdownSided: [{
      type: Input
    }],
    tuiDropdownSidedOffset: [{
      type: Input
    }]
  });
})();
var TuiDropdownSelectionDirective = class extends TuiDriver {
  constructor(range, doc, selection$, el, vcr, dropdown) {
    super((subscriber) => this.stream$.subscribe(subscriber));
    this.range = range;
    this.doc = doc;
    this.selection$ = selection$;
    this.el = el;
    this.vcr = vcr;
    this.dropdown = dropdown;
    this.handler$ = new BehaviorSubject(ALWAYS_TRUE_HANDLER);
    this.stream$ = combineLatest([this.handler$, this.selection$.pipe(map(() => this.getRange()), distinctUntilChanged((x, y) => x.startOffset === y.startOffset && x.endOffset === y.endOffset))]).pipe(map(([handler, range2]) => {
      const contained = this.el.nativeElement.contains(range2.commonAncestorContainer);
      this.range = contained && tuiIsTextNode(range2.commonAncestorContainer) ? range2 : this.range;
      return contained && handler(this.range) || this.inDropdown(range2);
    }));
    this.position = "selection";
    this.type = "dropdown";
  }
  set tuiDropdownSelection(visible) {
    if (!tuiIsString(visible)) {
      this.handler$.next(visible);
    }
  }
  getClientRect() {
    switch (this.position) {
      case "tag": {
        const {
          commonAncestorContainer
        } = this.range;
        const element = tuiIsElement(commonAncestorContainer) ? commonAncestorContainer : commonAncestorContainer.parentNode;
        return element && tuiIsElement(element) ? element.getBoundingClientRect() : EMPTY_CLIENT_RECT;
      }
      case "word":
        return tuiGetWordRange(this.range).getBoundingClientRect();
      default:
        return this.range.getBoundingClientRect();
    }
  }
  ngOnDestroy() {
    if (this.ghost) {
      this.vcr.element.nativeElement.removeChild(this.ghost);
    }
  }
  getRange() {
    const active = tuiGetNativeFocused(this.doc);
    const selection = this.doc.getSelection();
    const range = active && tuiIsTextfield(active) && this.el.nativeElement.contains(active) ? this.veryVerySadInputFix(active) : (selection === null || selection === void 0 ? void 0 : selection.rangeCount) && selection.getRangeAt(0) || this.range;
    return range.cloneRange();
  }
  /**
   * Check if Node is inside dropdown
   */
  boxContains(node) {
    var _a;
    return !!((_a = this.dropdown.dropdownBoxRef) === null || _a === void 0 ? void 0 : _a.location.nativeElement.contains(node));
  }
  /**
   * Check if given range is at least partially inside dropdown
   */
  inDropdown(range) {
    const {
      startContainer,
      endContainer
    } = range;
    const {
      nativeElement
    } = this.el;
    const inDropdown = this.boxContains(range.commonAncestorContainer);
    const hostToDropdown = this.boxContains(endContainer) && nativeElement.contains(startContainer);
    const dropdownToHost = this.boxContains(startContainer) && nativeElement.contains(endContainer);
    return inDropdown || hostToDropdown || dropdownToHost;
  }
  veryVerySadInputFix(element) {
    const {
      ghost = this.initGhost(element)
    } = this;
    const {
      top,
      left,
      width,
      height
    } = element.getBoundingClientRect();
    const {
      selectionStart,
      selectionEnd,
      value
    } = element;
    const range = this.doc.createRange();
    const hostRect = this.el.nativeElement.getBoundingClientRect();
    ghost.style.top = tuiPx(top - hostRect.top);
    ghost.style.left = tuiPx(left - hostRect.left);
    ghost.style.width = tuiPx(width);
    ghost.style.height = tuiPx(height);
    ghost.textContent = CHAR_ZERO_WIDTH_SPACE + value + CHAR_NO_BREAK_SPACE;
    range.setStart(ghost.firstChild, selectionStart || 0);
    range.setEnd(ghost.firstChild, selectionEnd || 0);
    return range;
  }
  /**
   * Create an invisible DIV styled exactly like input/textarea element inside directive
   */
  initGhost(element) {
    const ghost = this.doc.createElement("div");
    const {
      font,
      letterSpacing,
      textTransform,
      padding
    } = getComputedStyle(element);
    ghost.style.position = "absolute";
    ghost.style.pointerEvents = "none";
    ghost.style.opacity = "0";
    ghost.style.whiteSpace = "pre-wrap";
    ghost.style.font = font;
    ghost.style.letterSpacing = letterSpacing;
    ghost.style.textTransform = textTransform;
    ghost.style.padding = padding;
    this.vcr.element.nativeElement.appendChild(ghost);
    this.ghost = ghost;
    return ghost;
  }
};
TuiDropdownSelectionDirective.ɵfac = function TuiDropdownSelectionDirective_Factory(t) {
  return new (t || TuiDropdownSelectionDirective)(ɵɵdirectiveInject(TUI_RANGE), ɵɵdirectiveInject(DOCUMENT), ɵɵdirectiveInject(TUI_SELECTION_STREAM), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(TuiDropdownDirective));
};
TuiDropdownSelectionDirective.ɵdir = ɵɵdefineDirective({
  type: TuiDropdownSelectionDirective,
  selectors: [["", "tuiDropdown", "", "tuiDropdownSelection", ""]],
  inputs: {
    position: ["tuiDropdownSelectionPosition", "position"],
    tuiDropdownSelection: "tuiDropdownSelection"
  },
  features: [ɵɵProvidersFeature([tuiAsDriver(TuiDropdownSelectionDirective), tuiAsRectAccessor(TuiDropdownSelectionDirective)]), ɵɵInheritDefinitionFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDropdownSelectionDirective, [{
    type: Directive,
    args: [{
      selector: "[tuiDropdown][tuiDropdownSelection]",
      providers: [tuiAsDriver(TuiDropdownSelectionDirective), tuiAsRectAccessor(TuiDropdownSelectionDirective)]
    }]
  }], function() {
    return [{
      type: Range,
      decorators: [{
        type: Inject,
        args: [TUI_RANGE]
      }]
    }, {
      type: Document,
      decorators: [{
        type: Inject,
        args: [DOCUMENT]
      }]
    }, {
      type: Observable,
      decorators: [{
        type: Inject,
        args: [TUI_SELECTION_STREAM]
      }]
    }, {
      type: ElementRef,
      decorators: [{
        type: Inject,
        args: [ElementRef]
      }]
    }, {
      type: ViewContainerRef,
      decorators: [{
        type: Inject,
        args: [ViewContainerRef]
      }]
    }, {
      type: TuiDropdownDirective,
      decorators: [{
        type: Inject,
        args: [TuiDropdownDirective]
      }]
    }];
  }, {
    position: [{
      type: Input,
      args: ["tuiDropdownSelectionPosition"]
    }],
    tuiDropdownSelection: [{
      type: Input
    }]
  });
})();
var TuiDropdownModule = class {
};
TuiDropdownModule.ɵfac = function TuiDropdownModule_Factory(t) {
  return new (t || TuiDropdownModule)();
};
TuiDropdownModule.ɵmod = ɵɵdefineNgModule({
  type: TuiDropdownModule,
  declarations: [TuiDropdownDirective, TuiDropdownComponent, TuiDropdownOpenDirective, TuiDropdownOptionsDirective, TuiDropdownHostDirective, TuiDropdownDriverDirective, TuiDropdownManualDirective, TuiDropdownHoverDirective, TuiDropdownContextDirective, TuiDropdownPositionDirective, TuiDropdownPositionSidedDirective, TuiDropdownSelectionDirective],
  imports: [PolymorpheusModule, TuiActiveZoneModule, TuiOverscrollModule, TuiScrollbarModule, TuiHoveredModule],
  exports: [TuiDropdownDirective, TuiDropdownComponent, TuiDropdownOpenDirective, TuiDropdownOptionsDirective, TuiDropdownHostDirective, TuiDropdownDriverDirective, TuiDropdownManualDirective, TuiDropdownHoverDirective, TuiDropdownContextDirective, TuiDropdownPositionDirective, TuiDropdownPositionSidedDirective, TuiDropdownSelectionDirective]
});
TuiDropdownModule.ɵinj = ɵɵdefineInjector({
  imports: [[PolymorpheusModule, TuiActiveZoneModule, TuiOverscrollModule, TuiScrollbarModule, TuiHoveredModule]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDropdownModule, [{
    type: NgModule,
    args: [{
      imports: [PolymorpheusModule, TuiActiveZoneModule, TuiOverscrollModule, TuiScrollbarModule, TuiHoveredModule],
      declarations: [TuiDropdownDirective, TuiDropdownComponent, TuiDropdownOpenDirective, TuiDropdownOptionsDirective, TuiDropdownHostDirective, TuiDropdownDriverDirective, TuiDropdownManualDirective, TuiDropdownHoverDirective, TuiDropdownContextDirective, TuiDropdownPositionDirective, TuiDropdownPositionSidedDirective, TuiDropdownSelectionDirective],
      exports: [TuiDropdownDirective, TuiDropdownComponent, TuiDropdownOpenDirective, TuiDropdownOptionsDirective, TuiDropdownHostDirective, TuiDropdownDriverDirective, TuiDropdownManualDirective, TuiDropdownHoverDirective, TuiDropdownContextDirective, TuiDropdownPositionDirective, TuiDropdownPositionSidedDirective, TuiDropdownSelectionDirective]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/core/fesm2015/taiga-ui-core-directives-hint.js
function TuiHintComponent_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 1);
  }
  if (rf & 2) {
    const text_r1 = ctx.polymorpheusOutlet;
    ɵɵproperty("innerHTML", text_r1, ɵɵsanitizeHtml);
  }
}
var _c05 = ["*"];
function TuiHintUnstyledComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
var TUI_HINT_COMPONENT = tuiCreateTokenFromFactory(() => TuiHintComponent);
var TUI_HINT_DEFAULT_OPTIONS = {
  direction: "bottom-left",
  showDelay: 500,
  hideDelay: 200,
  appearance: "",
  icon: "tuiIconHelpCircle"
};
var TUI_HINT_OPTIONS = tuiCreateToken(TUI_HINT_DEFAULT_OPTIONS);
var tuiHintOptionsProvider = (override) => ({
  provide: TUI_HINT_OPTIONS,
  deps: [[new Optional(), TuiHintOptionsDirective], [new Optional(), new SkipSelf(), TUI_HINT_OPTIONS]],
  useFactory: tuiOverrideOptions(override, TUI_HINT_DEFAULT_OPTIONS)
});
var TuiHintOptionsDirective = class extends AbstractTuiController {
  constructor(options) {
    super();
    this.options = options;
    this.direction = this.options.direction;
    this.appearance = this.options.appearance;
    this.showDelay = this.options.showDelay;
    this.hideDelay = this.options.hideDelay;
    this.icon = this.options.icon;
  }
};
TuiHintOptionsDirective.ɵfac = function TuiHintOptionsDirective_Factory(t) {
  return new (t || TuiHintOptionsDirective)(ɵɵdirectiveInject(TUI_HINT_OPTIONS, 4));
};
TuiHintOptionsDirective.ɵdir = ɵɵdefineDirective({
  type: TuiHintOptionsDirective,
  selectors: [["", "tuiHintContent", ""]],
  inputs: {
    content: ["tuiHintContent", "content"],
    direction: ["tuiHintDirection", "direction"],
    appearance: ["tuiHintAppearance", "appearance"],
    showDelay: ["tuiHintShowDelay", "showDelay"],
    hideDelay: ["tuiHintHideDelay", "hideDelay"]
  },
  features: [ɵɵProvidersFeature([{
    provide: TUI_HINT_OPTIONS,
    useExisting: forwardRef(() => TuiHintOptionsDirective)
  }]), ɵɵInheritDefinitionFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiHintOptionsDirective, [{
    type: Directive,
    args: [{
      selector: "[tuiHintContent]",
      providers: [{
        provide: TUI_HINT_OPTIONS,
        useExisting: forwardRef(() => TuiHintOptionsDirective)
      }]
    }]
  }], function() {
    return [{
      type: void 0,
      decorators: [{
        type: SkipSelf
      }, {
        type: Inject,
        args: [TUI_HINT_OPTIONS]
      }]
    }];
  }, {
    content: [{
      type: Input,
      args: ["tuiHintContent"]
    }],
    direction: [{
      type: Input,
      args: ["tuiHintDirection"]
    }],
    appearance: [{
      type: Input,
      args: ["tuiHintAppearance"]
    }],
    showDelay: [{
      type: Input,
      args: ["tuiHintShowDelay"]
    }],
    hideDelay: [{
      type: Input,
      args: ["tuiHintHideDelay"]
    }]
  });
})();
var TuiHintDirective = class {
  constructor(el, component, hintService, options, activeZone) {
    this.el = el;
    this.component = component;
    this.hintService = hintService;
    this.options = options;
    this.activeZone = activeZone;
    this.tuiHintAppearance = null;
    this.type = "hint";
  }
  get appearance() {
    var _a;
    return (_a = this.tuiHintAppearance) !== null && _a !== void 0 ? _a : this.options.appearance;
  }
  ngOnChanges() {
    if (!this.content) {
      this.toggle(false);
    }
  }
  ngOnDestroy() {
    this.toggle(false);
  }
  getClientRect() {
    return this.el.nativeElement.getBoundingClientRect();
  }
  toggle(show) {
    if (show && this.content) {
      this.hintService.add(this);
    } else {
      this.hintService.remove(this);
    }
  }
};
TuiHintDirective.ɵfac = function TuiHintDirective_Factory(t) {
  return new (t || TuiHintDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(PolymorpheusComponent), ɵɵdirectiveInject(TuiHintService), ɵɵdirectiveInject(TUI_HINT_OPTIONS), ɵɵdirectiveInject(TuiActiveZoneDirective, 8));
};
TuiHintDirective.ɵdir = ɵɵdefineDirective({
  type: TuiHintDirective,
  selectors: [["", "tuiHint", "", 5, "ng-container", 5, "ng-template"]],
  inputs: {
    content: ["tuiHint", "content"],
    context: ["tuiHintContext", "context"],
    tuiHintAppearance: "tuiHintAppearance"
  },
  features: [ɵɵProvidersFeature([tuiAsRectAccessor(TuiHintDirective), tuiAsVehicle(TuiHintDirective), {
    provide: PolymorpheusComponent,
    deps: [TUI_HINT_COMPONENT, INJECTOR],
    useClass: PolymorpheusComponent
  }]), ɵɵNgOnChangesFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiHintDirective, [{
    type: Directive,
    args: [{
      selector: "[tuiHint]:not(ng-container):not(ng-template)",
      providers: [tuiAsRectAccessor(TuiHintDirective), tuiAsVehicle(TuiHintDirective), {
        provide: PolymorpheusComponent,
        deps: [TUI_HINT_COMPONENT, INJECTOR],
        useClass: PolymorpheusComponent
      }]
    }]
  }], function() {
    return [{
      type: ElementRef,
      decorators: [{
        type: Inject,
        args: [ElementRef]
      }]
    }, {
      type: PolymorpheusComponent,
      decorators: [{
        type: Inject,
        args: [PolymorpheusComponent]
      }]
    }, {
      type: TuiHintService,
      decorators: [{
        type: Inject,
        args: [TuiHintService]
      }]
    }, {
      type: void 0,
      decorators: [{
        type: Inject,
        args: [TUI_HINT_OPTIONS]
      }]
    }, {
      type: TuiActiveZoneDirective,
      decorators: [{
        type: Optional
      }, {
        type: Inject,
        args: [TuiActiveZoneDirective]
      }]
    }];
  }, {
    content: [{
      type: Input,
      args: ["tuiHint"]
    }],
    context: [{
      type: Input,
      args: ["tuiHintContext"]
    }],
    tuiHintAppearance: [{
      type: Input
    }]
  });
})();
var TuiHintHoverDirective = class extends TuiDriver {
  constructor(hovered$, options, el) {
    super((subscriber) => this.stream$.subscribe(subscriber));
    this.hovered$ = hovered$;
    this.options = options;
    this.el = el;
    this.visible = false;
    this.toggle$ = new Subject();
    this.stream$ = merge(this.toggle$.pipe(switchMap((visible) => of(visible).pipe(delay(visible ? 0 : this.hideDelay))), takeUntil(this.hovered$), repeat()), this.hovered$.pipe(switchMap((visible) => of(visible).pipe(delay(visible ? this.showDelay : this.hideDelay))), takeUntil(this.toggle$), repeat())).pipe(filter(() => this.enabled), map((value) => value && !tuiIsObscured(this.el.nativeElement)), tap((visible) => {
      this.visible = visible;
    }));
    this.showDelay = this.options.showDelay;
    this.hideDelay = this.options.hideDelay;
    this.type = "hint";
    this.enabled = true;
  }
  toggle(visible = !this.visible) {
    this.toggle$.next(visible);
  }
};
TuiHintHoverDirective.ɵfac = function TuiHintHoverDirective_Factory(t) {
  return new (t || TuiHintHoverDirective)(ɵɵdirectiveInject(TuiHoveredService), ɵɵdirectiveInject(TUI_HINT_OPTIONS), ɵɵdirectiveInject(ElementRef));
};
TuiHintHoverDirective.ɵdir = ɵɵdefineDirective({
  type: TuiHintHoverDirective,
  selectors: [["", "tuiHint", "", 5, "ng-container", 5, "ng-template"]],
  inputs: {
    showDelay: ["tuiHintShowDelay", "showDelay"],
    hideDelay: ["tuiHintHideDelay", "hideDelay"]
  },
  exportAs: ["tuiHintHover"],
  features: [ɵɵProvidersFeature([tuiAsDriver(TuiHintHoverDirective), TuiHoveredService]), ɵɵInheritDefinitionFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiHintHoverDirective, [{
    type: Directive,
    args: [{
      selector: "[tuiHint]:not(ng-container):not(ng-template)",
      providers: [tuiAsDriver(TuiHintHoverDirective), TuiHoveredService],
      exportAs: "tuiHintHover"
    }]
  }], function() {
    return [{
      type: Observable,
      decorators: [{
        type: Inject,
        args: [TuiHoveredService]
      }]
    }, {
      type: void 0,
      decorators: [{
        type: Inject,
        args: [TUI_HINT_OPTIONS]
      }]
    }, {
      type: ElementRef,
      decorators: [{
        type: Inject,
        args: [ElementRef]
      }]
    }];
  }, {
    showDelay: [{
      type: Input,
      args: ["tuiHintShowDelay"]
    }],
    hideDelay: [{
      type: Input,
      args: ["tuiHintHideDelay"]
    }]
  });
})();
var TuiHintPointerDirective = class extends TuiHintHoverDirective {
  constructor() {
    super(...arguments);
    this.currentRect = EMPTY_CLIENT_RECT;
  }
  onMove({
    clientX,
    clientY
  }) {
    this.currentRect = tuiPointToClientRect(clientX, clientY);
  }
  getClientRect() {
    return this.currentRect;
  }
};
TuiHintPointerDirective.ɵfac = (() => {
  let ɵTuiHintPointerDirective_BaseFactory;
  return function TuiHintPointerDirective_Factory(t) {
    return (ɵTuiHintPointerDirective_BaseFactory || (ɵTuiHintPointerDirective_BaseFactory = ɵɵgetInheritedFactory(TuiHintPointerDirective)))(t || TuiHintPointerDirective);
  };
})();
TuiHintPointerDirective.ɵdir = ɵɵdefineDirective({
  type: TuiHintPointerDirective,
  selectors: [["", "tuiHint", "", "tuiHintPointer", ""]],
  hostBindings: function TuiHintPointerDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("mousemove.silent", function TuiHintPointerDirective_mousemove_silent_HostBindingHandler($event) {
        return ctx.onMove($event);
      });
    }
  },
  features: [ɵɵProvidersFeature([tuiAsRectAccessor(TuiHintPointerDirective), tuiAsDriver(TuiHintPointerDirective)]), ɵɵInheritDefinitionFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiHintPointerDirective, [{
    type: Directive,
    args: [{
      selector: "[tuiHint][tuiHintPointer]",
      providers: [tuiAsRectAccessor(TuiHintPointerDirective), tuiAsDriver(TuiHintPointerDirective)]
    }]
  }], null, {
    onMove: [{
      type: HostListener,
      args: ["mousemove.silent", ["$event"]]
    }]
  });
})();
var GAP = 4;
var TuiHintComponent = class {
  constructor(hovered$, position$, destroy$, animation, pointer, accessor, el, polymorpheus, hover, mode, visualViewportService, viewport) {
    var _a;
    this.animation = animation;
    this.pointer = pointer;
    this.accessor = accessor;
    this.el = el;
    this.polymorpheus = polymorpheus;
    this.hover = hover;
    this.mode = mode;
    this.visualViewportService = visualViewportService;
    this.viewport = viewport;
    this.appearance = this.polymorpheus.$implicit.appearance || ((_a = this.mode) === null || _a === void 0 ? void 0 : _a.mode);
    position$.pipe(map((point) => this.visualViewportService.correct(point)), takeUntil(destroy$)).subscribe(([top, left]) => {
      this.update(top, left);
    });
    hovered$.pipe(takeUntil(destroy$)).subscribe((hover2) => this.hover.toggle(hover2));
  }
  get content() {
    return this.polymorpheus.$implicit.content;
  }
  get context() {
    return this.polymorpheus.$implicit.context;
  }
  onClick(target) {
    if (!this.el.nativeElement.contains(target) && !this.hover.el.nativeElement.contains(target) || tuiIsObscured(this.hover.el.nativeElement)) {
      this.hover.toggle(false);
    }
  }
  update(top, left) {
    const {
      height,
      width
    } = this.el.nativeElement.getBoundingClientRect();
    const {
      style: style2
    } = this.el.nativeElement;
    const rect2 = this.accessor.getClientRect();
    const viewport = this.viewport.getClientRect();
    if (rect2 === EMPTY_CLIENT_RECT) {
      return;
    }
    const safeLeft = tuiClamp(left, GAP, viewport.width - width - GAP);
    const [beakTop, beakLeft] = this.visualViewportService.correct([rect2.top + rect2.height / 2 - top, rect2.left + rect2.width / 2 - safeLeft]);
    style2.top = tuiPx(top);
    style2.left = tuiPx(safeLeft);
    style2.setProperty("--top", tuiPx(tuiClamp(beakTop, 0.5, height - 1)));
    style2.setProperty("--left", tuiPx(tuiClamp(beakLeft, 0.5, width - 1)));
  }
};
TuiHintComponent.ɵfac = function TuiHintComponent_Factory(t) {
  return new (t || TuiHintComponent)(ɵɵdirectiveInject(TuiHoveredService), ɵɵdirectiveInject(TuiPositionService), ɵɵdirectiveInject(TuiDestroyService, 2), ɵɵdirectiveInject(TUI_ANIMATION_OPTIONS), ɵɵdirectiveInject(TuiHintPointerDirective, 8), ɵɵdirectiveInject(TuiRectAccessor), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(POLYMORPHEUS_CONTEXT), ɵɵdirectiveInject(TuiHintHoverDirective), ɵɵdirectiveInject(TuiModeDirective, 8), ɵɵdirectiveInject(TuiVisualViewportService), ɵɵdirectiveInject(TUI_VIEWPORT));
};
TuiHintComponent.ɵcmp = ɵɵdefineComponent({
  type: TuiHintComponent,
  selectors: [["tui-hint"]],
  hostVars: 4,
  hostBindings: function TuiHintComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("click", function TuiHintComponent_click_HostBindingHandler($event) {
        return ctx.onClick($event.target);
      }, false, ɵɵresolveDocument);
    }
    if (rf & 2) {
      ɵɵattribute("data-appearance", ctx.appearance);
      ɵɵsyntheticHostProperty("@tuiFadeIn", ctx.animation);
      ɵɵclassProp("_untouchable", ctx.pointer);
    }
  },
  features: [ɵɵProvidersFeature([TuiDestroyService, TuiPositionService, TuiHoveredService, tuiPositionAccessorFor("hint"), tuiRectAccessorFor("hint", TuiHintDirective)])],
  ngContentSelectors: _c05,
  decls: 2,
  vars: 2,
  consts: [[3, "innerHTML", 4, "polymorpheusOutlet", "polymorpheusOutletContext"], [3, "innerHTML"]],
  template: function TuiHintComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
      ɵɵtemplate(1, TuiHintComponent_span_1_Template, 1, 1, "span", 0);
    }
    if (rf & 2) {
      ɵɵadvance(1);
      ɵɵproperty("polymorpheusOutlet", ctx.content)("polymorpheusOutletContext", ctx.context);
    }
  },
  dependencies: [PolymorpheusOutletDirective],
  styles: ['[_nghost-%COMP%]{position:absolute;max-width:18rem;min-height:var(--tui-height-m);padding:.75rem 1rem;background:var(--tui-primary);border-radius:var(--tui-radius-l);color:var(--tui-primary-text);box-sizing:border-box;font:var(--tui-font-text-s);white-space:pre-line;word-wrap:break-word}[_nghost-%COMP%]:before{content:"";position:absolute;top:var(--top);left:var(--left);width:.5rem;height:.5rem;border-radius:.125rem;box-sizing:border-box;background:inherit;transform:translate(-50%,-50%) rotate(45deg)}[data-appearance=error][_nghost-%COMP%]{background:var(--tui-error-fill)}[data-appearance=onDark][_nghost-%COMP%]{background:var(--tui-elevation-02);color:var(--tui-text-01);filter:drop-shadow(0 0 .125rem rgba(0,0,0,.16)) drop-shadow(0 1.5rem 1rem rgba(0,0,0,.03)) drop-shadow(0 .75rem .75rem rgba(0,0,0,.04)) drop-shadow(0 .25rem .375rem rgba(0,0,0,.05))}[_nghost-%COMP%]:not([style*="top"]){visibility:hidden}._untouchable[_nghost-%COMP%]{pointer-events:none}'],
  data: {
    animation: [tuiFadeIn]
  },
  changeDetection: 0
});
__decorate([tuiPure], TuiHintComponent.prototype, "update", null);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiHintComponent, [{
    type: Component,
    args: [{
      selector: "tui-hint",
      template: `
        <ng-content></ng-content>
        <span
            *polymorpheusOutlet="content as text; context: context"
            [innerHTML]="text"
        ></span>
    `,
      styleUrls: ["./hint.style.less"],
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [TuiDestroyService, TuiPositionService, TuiHoveredService, tuiPositionAccessorFor("hint"), tuiRectAccessorFor("hint", TuiHintDirective)],
      animations: [tuiFadeIn],
      host: {
        "[@tuiFadeIn]": "animation",
        "[class._untouchable]": "pointer"
      }
    }]
  }], function() {
    return [{
      type: Observable,
      decorators: [{
        type: Inject,
        args: [TuiHoveredService]
      }]
    }, {
      type: Observable,
      decorators: [{
        type: Inject,
        args: [TuiPositionService]
      }]
    }, {
      type: Observable,
      decorators: [{
        type: Self
      }, {
        type: Inject,
        args: [TuiDestroyService]
      }]
    }, {
      type: void 0,
      decorators: [{
        type: Inject,
        args: [TUI_ANIMATION_OPTIONS]
      }]
    }, {
      type: void 0,
      decorators: [{
        type: Optional
      }, {
        type: Inject,
        args: [TuiHintPointerDirective]
      }]
    }, {
      type: TuiRectAccessor,
      decorators: [{
        type: Inject,
        args: [TuiRectAccessor]
      }]
    }, {
      type: ElementRef,
      decorators: [{
        type: Inject,
        args: [ElementRef]
      }]
    }, {
      type: void 0,
      decorators: [{
        type: Inject,
        args: [POLYMORPHEUS_CONTEXT]
      }]
    }, {
      type: TuiHintHoverDirective,
      decorators: [{
        type: Inject,
        args: [TuiHintHoverDirective]
      }]
    }, {
      type: TuiModeDirective,
      decorators: [{
        type: Optional
      }, {
        type: Inject,
        args: [TuiModeDirective]
      }]
    }, {
      type: TuiVisualViewportService,
      decorators: [{
        type: Inject,
        args: [TuiVisualViewportService]
      }]
    }, {
      type: TuiRectAccessor,
      decorators: [{
        type: Inject,
        args: [TUI_VIEWPORT]
      }]
    }];
  }, {
    appearance: [{
      type: HostBinding,
      args: ["attr.data-appearance"]
    }],
    onClick: [{
      type: HostListener,
      args: ["document:click", ["$event.target"]]
    }],
    update: []
  });
})();
var TuiHintDescribeDirective = class extends TuiDriver {
  constructor(zone, doc, el) {
    super((subscriber) => this.stream$.subscribe(subscriber));
    this.zone = zone;
    this.doc = doc;
    this.el = el;
    this.id$ = new ReplaySubject(1);
    this.stream$ = this.id$.pipe(tuiIfMap(() => tuiTypedFromEvent(this.doc, "keydown", {
      capture: true
    }), tuiIsPresent), switchMap(() => this.focused ? of(false) : merge(tuiTypedFromEvent(this.doc, "keyup"), tuiTypedFromEvent(this.element, "blur")).pipe(map(() => this.focused))), debounce((visible) => visible ? timer(1e3) : of(null)), startWith(false), distinctUntilChanged(), skip(1), tuiZoneOptimized(this.zone));
    this.tuiHintDescribe = "";
    this.type = "hint";
  }
  ngOnChanges() {
    this.id$.next(this.tuiHintDescribe);
  }
  get focused() {
    return tuiIsNativeFocused(this.element);
  }
  get element() {
    return this.doc.getElementById(this.tuiHintDescribe || "") || this.el.nativeElement;
  }
};
TuiHintDescribeDirective.ɵfac = function TuiHintDescribeDirective_Factory(t) {
  return new (t || TuiHintDescribeDirective)(ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(DOCUMENT), ɵɵdirectiveInject(ElementRef));
};
TuiHintDescribeDirective.ɵdir = ɵɵdefineDirective({
  type: TuiHintDescribeDirective,
  selectors: [["", "tuiHintDescribe", ""]],
  inputs: {
    tuiHintDescribe: "tuiHintDescribe"
  },
  features: [ɵɵProvidersFeature([tuiAsDriver(TuiHintDescribeDirective)]), ɵɵInheritDefinitionFeature, ɵɵNgOnChangesFeature]
});
__decorate([tuiPure], TuiHintDescribeDirective.prototype, "element", null);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiHintDescribeDirective, [{
    type: Directive,
    args: [{
      selector: "[tuiHintDescribe]",
      providers: [tuiAsDriver(TuiHintDescribeDirective)]
    }]
  }], function() {
    return [{
      type: NgZone,
      decorators: [{
        type: Inject,
        args: [NgZone]
      }]
    }, {
      type: Document,
      decorators: [{
        type: Inject,
        args: [DOCUMENT]
      }]
    }, {
      type: ElementRef,
      decorators: [{
        type: Inject,
        args: [ElementRef]
      }]
    }];
  }, {
    tuiHintDescribe: [{
      type: Input
    }],
    element: []
  });
})();
var TuiHintDriverDirective = class extends AbstractTuiDriverDirective {
  // TODO: Figure out why this is necessary under nx test runner
  constructor(destroy$, drivers, vehicles) {
    super(destroy$, drivers, vehicles);
    this.type = "hint";
  }
};
TuiHintDriverDirective.ɵfac = function TuiHintDriverDirective_Factory(t) {
  return new (t || TuiHintDriverDirective)(ɵɵdirectiveInject(TuiDestroyService, 2), ɵɵdirectiveInject(TuiDriver), ɵɵdirectiveInject(TuiVehicle));
};
TuiHintDriverDirective.ɵdir = ɵɵdefineDirective({
  type: TuiHintDriverDirective,
  selectors: [["", "tuiHint", "", 5, "ng-container", 5, "ng-template"]],
  features: [ɵɵProvidersFeature([TuiDestroyService]), ɵɵInheritDefinitionFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiHintDriverDirective, [{
    type: Directive,
    args: [{
      selector: "[tuiHint]:not(ng-container):not(ng-template)",
      providers: [TuiDestroyService]
    }]
  }], function() {
    return [{
      type: Observable,
      decorators: [{
        type: Self
      }, {
        type: Inject,
        args: [TuiDestroyService]
      }]
    }, {
      type: void 0,
      decorators: [{
        type: Inject,
        args: [TuiDriver]
      }]
    }, {
      type: void 0,
      decorators: [{
        type: Inject,
        args: [TuiVehicle]
      }]
    }];
  }, null);
})();
var TuiHintHostDirective = class extends TuiRectAccessor {
  constructor() {
    super(...arguments);
    this.type = "hint";
  }
  getClientRect() {
    var _a;
    return ((_a = this.tuiHintHost) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect()) || EMPTY_CLIENT_RECT;
  }
};
TuiHintHostDirective.ɵfac = (() => {
  let ɵTuiHintHostDirective_BaseFactory;
  return function TuiHintHostDirective_Factory(t) {
    return (ɵTuiHintHostDirective_BaseFactory || (ɵTuiHintHostDirective_BaseFactory = ɵɵgetInheritedFactory(TuiHintHostDirective)))(t || TuiHintHostDirective);
  };
})();
TuiHintHostDirective.ɵdir = ɵɵdefineDirective({
  type: TuiHintHostDirective,
  selectors: [["", "tuiHint", "", "tuiHintHost", ""]],
  inputs: {
    tuiHintHost: "tuiHintHost"
  },
  features: [ɵɵProvidersFeature([tuiAsRectAccessor(TuiHintHostDirective)]), ɵɵInheritDefinitionFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiHintHostDirective, [{
    type: Directive,
    args: [{
      selector: "[tuiHint][tuiHintHost]",
      providers: [tuiAsRectAccessor(TuiHintHostDirective)]
    }]
  }], null, {
    tuiHintHost: [{
      type: Input
    }]
  });
})();
var TuiHintManualDirective = class extends TuiDriver {
  constructor(hover) {
    super((subscriber) => this.stream$.subscribe(subscriber));
    this.stream$ = new BehaviorSubject(false);
    this.tuiHintManual = false;
    this.type = "hint";
    hover.enabled = false;
  }
  ngOnChanges() {
    this.stream$.next(this.tuiHintManual);
  }
};
TuiHintManualDirective.ɵfac = function TuiHintManualDirective_Factory(t) {
  return new (t || TuiHintManualDirective)(ɵɵdirectiveInject(TuiHintHoverDirective));
};
TuiHintManualDirective.ɵdir = ɵɵdefineDirective({
  type: TuiHintManualDirective,
  selectors: [["", "tuiHint", "", "tuiHintManual", ""]],
  inputs: {
    tuiHintManual: "tuiHintManual"
  },
  features: [ɵɵProvidersFeature([tuiAsDriver(TuiHintManualDirective)]), ɵɵInheritDefinitionFeature, ɵɵNgOnChangesFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiHintManualDirective, [{
    type: Directive,
    args: [{
      selector: "[tuiHint][tuiHintManual]",
      providers: [tuiAsDriver(TuiHintManualDirective)]
    }]
  }], function() {
    return [{
      type: TuiHintHoverDirective,
      decorators: [{
        type: Inject,
        args: [TuiHintHoverDirective]
      }]
    }];
  }, {
    tuiHintManual: [{
      type: Input
    }]
  });
})();
var OFFSET = 8;
var ARROW_OFFSET = 22;
var TOP = 0;
var LEFT = 1;
var TuiHintPositionDirective = class extends TuiPositionAccessor {
  constructor(options, viewport, directive, accessors) {
    super();
    this.options = options;
    this.viewport = viewport;
    this.directive = directive;
    this.accessors = accessors;
    this.points = TUI_HINT_DIRECTIONS.reduce((acc, direction) => Object.assign(Object.assign({}, acc), {
      [direction]: [0, 0]
    }), {});
    this.direction = this.options.direction;
    this.type = "hint";
  }
  getPosition({
    width,
    height
  }) {
    var _a, _b;
    const hostRect = (_b = (_a = this.accessor) === null || _a === void 0 ? void 0 : _a.getClientRect()) !== null && _b !== void 0 ? _b : EMPTY_CLIENT_RECT;
    const leftCenter = hostRect.left + hostRect.width / 2;
    const topCenter = hostRect.top + hostRect.height / 2;
    this.points["top-left"][TOP] = hostRect.top - height - OFFSET;
    this.points["top-left"][LEFT] = leftCenter - width + ARROW_OFFSET;
    this.points.top[TOP] = this.points["top-left"][TOP];
    this.points.top[LEFT] = leftCenter - width / 2;
    this.points["top-right"][TOP] = this.points["top-left"][TOP];
    this.points["top-right"][LEFT] = leftCenter - ARROW_OFFSET;
    this.points["bottom-left"][TOP] = hostRect.bottom + OFFSET;
    this.points["bottom-left"][LEFT] = this.points["top-left"][LEFT];
    this.points.bottom[TOP] = this.points["bottom-left"][TOP];
    this.points.bottom[LEFT] = this.points.top[LEFT];
    this.points["bottom-right"][TOP] = this.points["bottom-left"][TOP];
    this.points["bottom-right"][LEFT] = this.points["top-right"][LEFT];
    this.points["left-top"][TOP] = topCenter - height + ARROW_OFFSET;
    this.points["left-top"][LEFT] = hostRect.left - width - OFFSET;
    this.points.left[TOP] = topCenter - height / 2;
    this.points.left[LEFT] = this.points["left-top"][LEFT];
    this.points["left-bottom"][TOP] = topCenter - ARROW_OFFSET;
    this.points["left-bottom"][LEFT] = this.points["left-top"][LEFT];
    this.points["right-top"][TOP] = this.points["left-top"][TOP];
    this.points["right-top"][LEFT] = hostRect.right + OFFSET;
    this.points.right[TOP] = this.points.left[TOP];
    this.points.right[LEFT] = this.points["right-top"][LEFT];
    this.points["right-bottom"][TOP] = this.points["left-bottom"][TOP];
    this.points["right-bottom"][LEFT] = this.points["right-top"][LEFT];
    if (this.checkPosition(this.points[this.direction], width, height)) {
      return this.points[this.direction];
    }
    const direction = TUI_HINT_DIRECTIONS.find((direction2) => this.checkPosition(this.points[direction2], width, height));
    return this.points[direction || this.fallback];
  }
  get accessor() {
    return tuiFallbackRectAccessor("hint")(this.accessors, this.directive);
  }
  get fallback() {
    return this.points.top[TOP] > this.viewport.getClientRect().bottom - this.points.bottom[TOP] ? "top" : "bottom";
  }
  checkPosition([top, left], width, height) {
    const viewport = this.viewport.getClientRect();
    return top > OFFSET && left > OFFSET && top + height < viewport.bottom - OFFSET && left + width < viewport.right - OFFSET;
  }
};
TuiHintPositionDirective.ɵfac = function TuiHintPositionDirective_Factory(t) {
  return new (t || TuiHintPositionDirective)(ɵɵdirectiveInject(TUI_HINT_OPTIONS), ɵɵdirectiveInject(TUI_VIEWPORT), ɵɵdirectiveInject(TuiHintDirective), ɵɵdirectiveInject(TuiRectAccessor));
};
TuiHintPositionDirective.ɵdir = ɵɵdefineDirective({
  type: TuiHintPositionDirective,
  selectors: [["", "tuiHint", "", 3, "tuiHintCustomPosition", "", 5, "ng-container", 5, "ng-template"]],
  inputs: {
    direction: ["tuiHintDirection", "direction"]
  },
  features: [ɵɵProvidersFeature([tuiAsPositionAccessor(TuiHintPositionDirective)]), ɵɵInheritDefinitionFeature]
});
__decorate([tuiPure], TuiHintPositionDirective.prototype, "accessor", null);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiHintPositionDirective, [{
    type: Directive,
    args: [{
      selector: "[tuiHint]:not([tuiHintCustomPosition]):not(ng-container):not(ng-template)",
      providers: [tuiAsPositionAccessor(TuiHintPositionDirective)]
    }]
  }], function() {
    return [{
      type: void 0,
      decorators: [{
        type: Inject,
        args: [TUI_HINT_OPTIONS]
      }]
    }, {
      type: TuiRectAccessor,
      decorators: [{
        type: Inject,
        args: [TUI_VIEWPORT]
      }]
    }, {
      type: TuiRectAccessor,
      decorators: [{
        type: Inject,
        args: [TuiHintDirective]
      }]
    }, {
      type: void 0,
      decorators: [{
        type: Inject,
        args: [TuiRectAccessor]
      }]
    }];
  }, {
    direction: [{
      type: Input,
      args: ["tuiHintDirection"]
    }],
    accessor: []
  });
})();
var TuiHintUnstyledComponent = class {
  constructor(context) {
    this.context = context;
  }
};
TuiHintUnstyledComponent.ɵfac = function TuiHintUnstyledComponent_Factory(t) {
  return new (t || TuiHintUnstyledComponent)(ɵɵdirectiveInject(POLYMORPHEUS_CONTEXT));
};
TuiHintUnstyledComponent.ɵcmp = ɵɵdefineComponent({
  type: TuiHintUnstyledComponent,
  selectors: [["ng-component"]],
  hostVars: 1,
  hostBindings: function TuiHintUnstyledComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵsyntheticHostProperty("@tuiParentAnimation", void 0);
    }
  },
  decls: 1,
  vars: 2,
  consts: [[4, "polymorpheusOutlet", "polymorpheusOutletContext"]],
  template: function TuiHintUnstyledComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, TuiHintUnstyledComponent_ng_container_0_Template, 1, 0, "ng-container", 0);
    }
    if (rf & 2) {
      ɵɵproperty("polymorpheusOutlet", ctx.context.$implicit.content)("polymorpheusOutletContext", ctx.context);
    }
  },
  dependencies: [PolymorpheusOutletDirective],
  encapsulation: 2,
  data: {
    animation: [TUI_PARENT_ANIMATION]
  },
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiHintUnstyledComponent, [{
    type: Component,
    args: [{
      template: `
        <ng-container
            *polymorpheusOutlet="context.$implicit.content; context: context"
        ></ng-container>
    `,
      host: {
        "[@tuiParentAnimation]": ""
      },
      changeDetection: ChangeDetectionStrategy.OnPush,
      animations: [TUI_PARENT_ANIMATION]
    }]
  }], function() {
    return [{
      type: void 0,
      decorators: [{
        type: Inject,
        args: [POLYMORPHEUS_CONTEXT]
      }]
    }];
  }, null);
})();
var TuiHintUnstyledDirective = class {
  constructor(templateRef, hint) {
    hint.component = new PolymorpheusComponent(TuiHintUnstyledComponent);
    hint.content = templateRef;
  }
};
TuiHintUnstyledDirective.ɵfac = function TuiHintUnstyledDirective_Factory(t) {
  return new (t || TuiHintUnstyledDirective)(ɵɵdirectiveInject(TemplateRef), ɵɵdirectiveInject(TuiHintDirective));
};
TuiHintUnstyledDirective.ɵdir = ɵɵdefineDirective({
  type: TuiHintUnstyledDirective,
  selectors: [["ng-template", "tuiHint", ""]],
  features: [ɵɵProvidersFeature([{
    provide: POLYMORPHEUS_CONTEXT,
    useValue: {
      $implicit: {}
    }
  }])]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiHintUnstyledDirective, [{
    type: Directive,
    args: [{
      selector: "ng-template[tuiHint]",
      providers: [{
        provide: POLYMORPHEUS_CONTEXT,
        useValue: {
          $implicit: {}
        }
      }]
    }]
  }], function() {
    return [{
      type: TemplateRef,
      decorators: [{
        type: Inject,
        args: [TemplateRef]
      }]
    }, {
      type: TuiHintDirective,
      decorators: [{
        type: Inject,
        args: [TuiHintDirective]
      }]
    }];
  }, null);
})();
var TuiHintModule = class {
};
TuiHintModule.ɵfac = function TuiHintModule_Factory(t) {
  return new (t || TuiHintModule)();
};
TuiHintModule.ɵmod = ɵɵdefineNgModule({
  type: TuiHintModule,
  declarations: [TuiHintComponent, TuiHintDirective, TuiHintDriverDirective, TuiHintHostDirective, TuiHintHoverDirective, TuiHintManualDirective, TuiHintPointerDirective, TuiHintDescribeDirective, TuiHintPositionDirective, TuiHintOptionsDirective, TuiHintUnstyledComponent, TuiHintUnstyledDirective],
  imports: [CommonModule, PolymorpheusModule],
  exports: [TuiHintComponent, TuiHintDirective, TuiHintDriverDirective, TuiHintHostDirective, TuiHintHoverDirective, TuiHintManualDirective, TuiHintPointerDirective, TuiHintDescribeDirective, TuiHintPositionDirective, TuiHintOptionsDirective, TuiHintUnstyledDirective]
});
TuiHintModule.ɵinj = ɵɵdefineInjector({
  imports: [[CommonModule, PolymorpheusModule]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiHintModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, PolymorpheusModule],
      declarations: [TuiHintComponent, TuiHintDirective, TuiHintDriverDirective, TuiHintHostDirective, TuiHintHoverDirective, TuiHintManualDirective, TuiHintPointerDirective, TuiHintDescribeDirective, TuiHintPositionDirective, TuiHintOptionsDirective, TuiHintUnstyledComponent, TuiHintUnstyledDirective],
      exports: [TuiHintComponent, TuiHintDirective, TuiHintDriverDirective, TuiHintHostDirective, TuiHintHoverDirective, TuiHintManualDirective, TuiHintPointerDirective, TuiHintDescribeDirective, TuiHintPositionDirective, TuiHintOptionsDirective, TuiHintUnstyledDirective]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/core/fesm2015/taiga-ui-core-directives-mask-accessor.js
var TuiMaskAccessorDirective = class {
};
TuiMaskAccessorDirective.ɵfac = function TuiMaskAccessorDirective_Factory(t) {
  return new (t || TuiMaskAccessorDirective)();
};
TuiMaskAccessorDirective.ɵdir = ɵɵdefineDirective({
  type: TuiMaskAccessorDirective,
  selectors: [["input", "tuiMaskAccessor", ""]],
  features: [ɵɵProvidersFeature([{
    provide: NG_VALUE_ACCESSOR,
    deps: [[new Optional(), TUI_VALUE_ACCESSOR], DefaultValueAccessor],
    multi: true,
    useFactory: (accessor, fallback) => accessor ? accessor[0] : fallback
  }])]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiMaskAccessorDirective, [{
    type: Directive,
    args: [{
      selector: "input[tuiMaskAccessor]",
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        deps: [[new Optional(), TUI_VALUE_ACCESSOR], DefaultValueAccessor],
        multi: true,
        useFactory: (accessor, fallback) => accessor ? accessor[0] : fallback
      }]
    }]
  }], null, null);
})();
var TuiMaskAccessorModule = class {
};
TuiMaskAccessorModule.ɵfac = function TuiMaskAccessorModule_Factory(t) {
  return new (t || TuiMaskAccessorModule)();
};
TuiMaskAccessorModule.ɵmod = ɵɵdefineNgModule({
  type: TuiMaskAccessorModule,
  declarations: [TuiMaskAccessorDirective],
  exports: [TuiMaskAccessorDirective]
});
TuiMaskAccessorModule.ɵinj = ɵɵdefineInjector({});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiMaskAccessorModule, [{
    type: NgModule,
    args: [{
      declarations: [TuiMaskAccessorDirective],
      exports: [TuiMaskAccessorDirective]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/core/fesm2015/taiga-ui-core-directives-number-format.js
var TuiNumberFormatDirective = class extends BehaviorSubject {
  constructor(settings) {
    super(Object.assign(Object.assign({}, settings), {
      decimalLimit: NaN
    }));
    this.settings = settings;
  }
  set tuiNumberFormat(format) {
    this.next(Object.assign(Object.assign(Object.assign({}, this.settings), {
      decimalLimit: NaN
    }), format));
  }
};
TuiNumberFormatDirective.ɵfac = function TuiNumberFormatDirective_Factory(t) {
  return new (t || TuiNumberFormatDirective)(ɵɵdirectiveInject(TUI_NUMBER_FORMAT));
};
TuiNumberFormatDirective.ɵdir = ɵɵdefineDirective({
  type: TuiNumberFormatDirective,
  selectors: [["", "tuiNumberFormat", ""]],
  inputs: {
    tuiNumberFormat: "tuiNumberFormat"
  },
  features: [ɵɵProvidersFeature([{
    provide: TUI_NUMBER_FORMAT_OBSERVABLE,
    useExisting: forwardRef(() => TuiNumberFormatDirective)
  }]), ɵɵInheritDefinitionFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiNumberFormatDirective, [{
    type: Directive,
    args: [{
      selector: "[tuiNumberFormat]",
      providers: [{
        provide: TUI_NUMBER_FORMAT_OBSERVABLE,
        useExisting: forwardRef(() => TuiNumberFormatDirective)
      }]
    }]
  }], function() {
    return [{
      type: void 0,
      decorators: [{
        type: Inject,
        args: [TUI_NUMBER_FORMAT]
      }]
    }];
  }, {
    tuiNumberFormat: [{
      type: Input
    }]
  });
})();
var TuiNumberFormatModule = class {
};
TuiNumberFormatModule.ɵfac = function TuiNumberFormatModule_Factory(t) {
  return new (t || TuiNumberFormatModule)();
};
TuiNumberFormatModule.ɵmod = ɵɵdefineNgModule({
  type: TuiNumberFormatModule,
  declarations: [TuiNumberFormatDirective],
  exports: [TuiNumberFormatDirective]
});
TuiNumberFormatModule.ɵinj = ɵɵdefineInjector({});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiNumberFormatModule, [{
    type: NgModule,
    args: [{
      declarations: [TuiNumberFormatDirective],
      exports: [TuiNumberFormatDirective]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/core/fesm2015/taiga-ui-core-directives-scroll-into-view.js
var TuiScrollIntoViewDirective = class {
  constructor(el, destroy$) {
    this.el = el;
    this.destroy$ = destroy$;
  }
  set tuiScrollIntoView(scroll) {
    if (!scroll) {
      return;
    }
    timer(0).pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.el.nativeElement.dispatchEvent(new CustomEvent(TUI_SCROLL_INTO_VIEW, {
        bubbles: true,
        detail: this.el.nativeElement
      }));
    });
  }
};
TuiScrollIntoViewDirective.ɵfac = function TuiScrollIntoViewDirective_Factory(t) {
  return new (t || TuiScrollIntoViewDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(TuiDestroyService, 2));
};
TuiScrollIntoViewDirective.ɵdir = ɵɵdefineDirective({
  type: TuiScrollIntoViewDirective,
  selectors: [["", "tuiScrollIntoView", ""]],
  inputs: {
    tuiScrollIntoView: "tuiScrollIntoView"
  },
  features: [ɵɵProvidersFeature([TuiDestroyService])]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiScrollIntoViewDirective, [{
    type: Directive,
    args: [{
      selector: "[tuiScrollIntoView]",
      providers: [TuiDestroyService]
    }]
  }], function() {
    return [{
      type: ElementRef,
      decorators: [{
        type: Inject,
        args: [ElementRef]
      }]
    }, {
      type: Observable,
      decorators: [{
        type: Self
      }, {
        type: Inject,
        args: [TuiDestroyService]
      }]
    }];
  }, {
    tuiScrollIntoView: [{
      type: Input
    }]
  });
})();
var TuiScrollIntoViewModule = class {
};
TuiScrollIntoViewModule.ɵfac = function TuiScrollIntoViewModule_Factory(t) {
  return new (t || TuiScrollIntoViewModule)();
};
TuiScrollIntoViewModule.ɵmod = ɵɵdefineNgModule({
  type: TuiScrollIntoViewModule,
  declarations: [TuiScrollIntoViewDirective],
  exports: [TuiScrollIntoViewDirective]
});
TuiScrollIntoViewModule.ɵinj = ɵɵdefineInjector({});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiScrollIntoViewModule, [{
    type: NgModule,
    args: [{
      declarations: [TuiScrollIntoViewDirective],
      exports: [TuiScrollIntoViewDirective]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/core/fesm2015/taiga-ui-core-directives-textfield-controller.js
var TuiTextfieldController = class {
  constructor(change$, options, legacyAppearance, appearanceDirective, cleanerDirective, customContentDirective, iconDirective, iconLeftDirective, labelOutsideDirective, sizeDirective, prefixDirective, postfixDirective, fillerDirective) {
    this.change$ = change$;
    this.options = options;
    this.legacyAppearance = legacyAppearance;
    this.appearanceDirective = appearanceDirective;
    this.cleanerDirective = cleanerDirective;
    this.customContentDirective = customContentDirective;
    this.iconDirective = iconDirective;
    this.iconLeftDirective = iconLeftDirective;
    this.labelOutsideDirective = labelOutsideDirective;
    this.sizeDirective = sizeDirective;
    this.prefixDirective = prefixDirective;
    this.postfixDirective = postfixDirective;
    this.fillerDirective = fillerDirective;
  }
  get appearance() {
    return this.appearanceDirective.appearance || this.legacyAppearance;
  }
  get cleaner() {
    return this.cleanerDirective.cleaner;
  }
  get customContent() {
    return this.customContentDirective.customContent || "";
  }
  get icon() {
    return this.iconDirective.icon;
  }
  get iconLeft() {
    return this.iconLeftDirective.iconLeft;
  }
  get labelOutside() {
    return this.labelOutsideDirective.labelOutside;
  }
  get size() {
    return this.sizeDirective.size;
  }
  get prefix() {
    return this.prefixDirective.prefix;
  }
  get postfix() {
    return this.postfixDirective.postfix;
  }
  get filler() {
    return this.fillerDirective.filler;
  }
};
var TUI_TEXTFIELD_DEFAULT_OPTIONS = {
  iconCleaner: "tuiIconClose",
  hintOnDisabled: false
};
var TUI_TEXTFIELD_OPTIONS = tuiCreateToken(TUI_TEXTFIELD_DEFAULT_OPTIONS);
function tuiTextfieldOptionsProvider(options) {
  return tuiProvideOptions(TUI_TEXTFIELD_OPTIONS, options, TUI_TEXTFIELD_DEFAULT_OPTIONS);
}
var TUI_TEXTFIELD_APPEARANCE_DIRECTIVE = tuiCreateTokenFromFactory(() => new TuiTextfieldAppearanceDirective());
var TuiTextfieldAppearanceDirective = class extends AbstractTuiController {
  constructor() {
    super(...arguments);
    this.appearance = "";
  }
};
TuiTextfieldAppearanceDirective.ɵfac = (() => {
  let ɵTuiTextfieldAppearanceDirective_BaseFactory;
  return function TuiTextfieldAppearanceDirective_Factory(t) {
    return (ɵTuiTextfieldAppearanceDirective_BaseFactory || (ɵTuiTextfieldAppearanceDirective_BaseFactory = ɵɵgetInheritedFactory(TuiTextfieldAppearanceDirective)))(t || TuiTextfieldAppearanceDirective);
  };
})();
TuiTextfieldAppearanceDirective.ɵdir = ɵɵdefineDirective({
  type: TuiTextfieldAppearanceDirective,
  selectors: [["", "tuiTextfieldAppearance", ""]],
  inputs: {
    appearance: ["tuiTextfieldAppearance", "appearance"]
  },
  features: [ɵɵProvidersFeature([{
    provide: TUI_TEXTFIELD_APPEARANCE_DIRECTIVE,
    useExisting: forwardRef(() => TuiTextfieldAppearanceDirective)
  }]), ɵɵInheritDefinitionFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTextfieldAppearanceDirective, [{
    type: Directive,
    args: [{
      selector: "[tuiTextfieldAppearance]",
      providers: [{
        provide: TUI_TEXTFIELD_APPEARANCE_DIRECTIVE,
        useExisting: forwardRef(() => TuiTextfieldAppearanceDirective)
      }]
    }]
  }], null, {
    appearance: [{
      type: Input,
      args: ["tuiTextfieldAppearance"]
    }]
  });
})();
var TUI_TEXTFIELD_CLEANER = tuiCreateTokenFromFactory(() => new TuiTextfieldCleanerDirective());
var TuiTextfieldCleanerDirective = class extends AbstractTuiController {
  constructor() {
    super(...arguments);
    this.cleaner = false;
  }
};
TuiTextfieldCleanerDirective.ɵfac = (() => {
  let ɵTuiTextfieldCleanerDirective_BaseFactory;
  return function TuiTextfieldCleanerDirective_Factory(t) {
    return (ɵTuiTextfieldCleanerDirective_BaseFactory || (ɵTuiTextfieldCleanerDirective_BaseFactory = ɵɵgetInheritedFactory(TuiTextfieldCleanerDirective)))(t || TuiTextfieldCleanerDirective);
  };
})();
TuiTextfieldCleanerDirective.ɵdir = ɵɵdefineDirective({
  type: TuiTextfieldCleanerDirective,
  selectors: [["", "tuiTextfieldCleaner", ""]],
  inputs: {
    cleaner: ["tuiTextfieldCleaner", "cleaner"]
  },
  features: [ɵɵProvidersFeature([{
    provide: TUI_TEXTFIELD_CLEANER,
    useExisting: forwardRef(() => TuiTextfieldCleanerDirective)
  }]), ɵɵInheritDefinitionFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTextfieldCleanerDirective, [{
    type: Directive,
    args: [{
      selector: "[tuiTextfieldCleaner]",
      providers: [{
        provide: TUI_TEXTFIELD_CLEANER,
        useExisting: forwardRef(() => TuiTextfieldCleanerDirective)
      }]
    }]
  }], null, {
    cleaner: [{
      type: Input,
      args: ["tuiTextfieldCleaner"]
    }]
  });
})();
var TUI_TEXTFIELD_CUSTOM_CONTENT = tuiCreateTokenFromFactory(() => new TuiTextfieldCustomContentDirective());
var TuiTextfieldCustomContentDirective = class extends AbstractTuiController {
};
TuiTextfieldCustomContentDirective.ɵfac = (() => {
  let ɵTuiTextfieldCustomContentDirective_BaseFactory;
  return function TuiTextfieldCustomContentDirective_Factory(t) {
    return (ɵTuiTextfieldCustomContentDirective_BaseFactory || (ɵTuiTextfieldCustomContentDirective_BaseFactory = ɵɵgetInheritedFactory(TuiTextfieldCustomContentDirective)))(t || TuiTextfieldCustomContentDirective);
  };
})();
TuiTextfieldCustomContentDirective.ɵdir = ɵɵdefineDirective({
  type: TuiTextfieldCustomContentDirective,
  selectors: [["", "tuiTextfieldCustomContent", ""]],
  inputs: {
    customContent: ["tuiTextfieldCustomContent", "customContent"]
  },
  features: [ɵɵProvidersFeature([{
    provide: TUI_TEXTFIELD_CUSTOM_CONTENT,
    useExisting: forwardRef(() => TuiTextfieldCustomContentDirective)
  }]), ɵɵInheritDefinitionFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTextfieldCustomContentDirective, [{
    type: Directive,
    args: [{
      selector: "[tuiTextfieldCustomContent]",
      providers: [{
        provide: TUI_TEXTFIELD_CUSTOM_CONTENT,
        useExisting: forwardRef(() => TuiTextfieldCustomContentDirective)
      }]
    }]
  }], null, {
    customContent: [{
      type: Input,
      args: ["tuiTextfieldCustomContent"]
    }]
  });
})();
var TUI_TEXTFIELD_FILLER = tuiCreateTokenFromFactory(() => new TuiTextfieldFillerDirective());
var TuiTextfieldFillerDirective = class extends AbstractTuiController {
  constructor() {
    super(...arguments);
    this.filler = "";
  }
};
TuiTextfieldFillerDirective.ɵfac = (() => {
  let ɵTuiTextfieldFillerDirective_BaseFactory;
  return function TuiTextfieldFillerDirective_Factory(t) {
    return (ɵTuiTextfieldFillerDirective_BaseFactory || (ɵTuiTextfieldFillerDirective_BaseFactory = ɵɵgetInheritedFactory(TuiTextfieldFillerDirective)))(t || TuiTextfieldFillerDirective);
  };
})();
TuiTextfieldFillerDirective.ɵdir = ɵɵdefineDirective({
  type: TuiTextfieldFillerDirective,
  selectors: [["", "tuiTextfieldFiller", ""]],
  inputs: {
    filler: ["tuiTextfieldFiller", "filler"]
  },
  features: [ɵɵProvidersFeature([{
    provide: TUI_TEXTFIELD_FILLER,
    useExisting: forwardRef(() => TuiTextfieldFillerDirective)
  }]), ɵɵInheritDefinitionFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTextfieldFillerDirective, [{
    type: Directive,
    args: [{
      selector: "[tuiTextfieldFiller]",
      providers: [{
        provide: TUI_TEXTFIELD_FILLER,
        useExisting: forwardRef(() => TuiTextfieldFillerDirective)
      }]
    }]
  }], null, {
    filler: [{
      type: Input,
      args: ["tuiTextfieldFiller"]
    }]
  });
})();
var TUI_TEXTFIELD_ICON = tuiCreateTokenFromFactory(() => new TuiTextfieldIconDirective());
var TuiTextfieldIconDirective = class extends AbstractTuiController {
};
TuiTextfieldIconDirective.ɵfac = (() => {
  let ɵTuiTextfieldIconDirective_BaseFactory;
  return function TuiTextfieldIconDirective_Factory(t) {
    return (ɵTuiTextfieldIconDirective_BaseFactory || (ɵTuiTextfieldIconDirective_BaseFactory = ɵɵgetInheritedFactory(TuiTextfieldIconDirective)))(t || TuiTextfieldIconDirective);
  };
})();
TuiTextfieldIconDirective.ɵdir = ɵɵdefineDirective({
  type: TuiTextfieldIconDirective,
  selectors: [["", "tuiTextfieldIcon", ""]],
  inputs: {
    icon: ["tuiTextfieldIcon", "icon"]
  },
  features: [ɵɵProvidersFeature([{
    provide: TUI_TEXTFIELD_ICON,
    useExisting: forwardRef(() => TuiTextfieldIconDirective)
  }]), ɵɵInheritDefinitionFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTextfieldIconDirective, [{
    type: Directive,
    args: [{
      selector: "[tuiTextfieldIcon]",
      providers: [{
        provide: TUI_TEXTFIELD_ICON,
        useExisting: forwardRef(() => TuiTextfieldIconDirective)
      }]
    }]
  }], null, {
    icon: [{
      type: Input,
      args: ["tuiTextfieldIcon"]
    }]
  });
})();
var TUI_TEXTFIELD_ICON_LEFT = tuiCreateTokenFromFactory(() => new TuiTextfieldIconLeftDirective());
var TuiTextfieldIconLeftDirective = class extends AbstractTuiController {
};
TuiTextfieldIconLeftDirective.ɵfac = (() => {
  let ɵTuiTextfieldIconLeftDirective_BaseFactory;
  return function TuiTextfieldIconLeftDirective_Factory(t) {
    return (ɵTuiTextfieldIconLeftDirective_BaseFactory || (ɵTuiTextfieldIconLeftDirective_BaseFactory = ɵɵgetInheritedFactory(TuiTextfieldIconLeftDirective)))(t || TuiTextfieldIconLeftDirective);
  };
})();
TuiTextfieldIconLeftDirective.ɵdir = ɵɵdefineDirective({
  type: TuiTextfieldIconLeftDirective,
  selectors: [["", "tuiTextfieldIconLeft", ""]],
  inputs: {
    iconLeft: ["tuiTextfieldIconLeft", "iconLeft"]
  },
  features: [ɵɵProvidersFeature([{
    provide: TUI_TEXTFIELD_ICON_LEFT,
    useExisting: forwardRef(() => TuiTextfieldIconLeftDirective)
  }]), ɵɵInheritDefinitionFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTextfieldIconLeftDirective, [{
    type: Directive,
    args: [{
      selector: "[tuiTextfieldIconLeft]",
      providers: [{
        provide: TUI_TEXTFIELD_ICON_LEFT,
        useExisting: forwardRef(() => TuiTextfieldIconLeftDirective)
      }]
    }]
  }], null, {
    iconLeft: [{
      type: Input,
      args: ["tuiTextfieldIconLeft"]
    }]
  });
})();
var TUI_TEXTFIELD_LABEL_OUTSIDE = tuiCreateTokenFromFactory(() => new TuiTextfieldLabelOutsideDirective());
var TuiTextfieldLabelOutsideDirective = class extends AbstractTuiController {
  constructor() {
    super(...arguments);
    this.labelOutside = false;
  }
};
TuiTextfieldLabelOutsideDirective.ɵfac = (() => {
  let ɵTuiTextfieldLabelOutsideDirective_BaseFactory;
  return function TuiTextfieldLabelOutsideDirective_Factory(t) {
    return (ɵTuiTextfieldLabelOutsideDirective_BaseFactory || (ɵTuiTextfieldLabelOutsideDirective_BaseFactory = ɵɵgetInheritedFactory(TuiTextfieldLabelOutsideDirective)))(t || TuiTextfieldLabelOutsideDirective);
  };
})();
TuiTextfieldLabelOutsideDirective.ɵdir = ɵɵdefineDirective({
  type: TuiTextfieldLabelOutsideDirective,
  selectors: [["", "tuiTextfieldLabelOutside", ""]],
  inputs: {
    labelOutside: ["tuiTextfieldLabelOutside", "labelOutside"]
  },
  features: [ɵɵProvidersFeature([{
    provide: TUI_TEXTFIELD_LABEL_OUTSIDE,
    useExisting: forwardRef(() => TuiTextfieldLabelOutsideDirective)
  }]), ɵɵInheritDefinitionFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTextfieldLabelOutsideDirective, [{
    type: Directive,
    args: [{
      selector: "[tuiTextfieldLabelOutside]",
      providers: [{
        provide: TUI_TEXTFIELD_LABEL_OUTSIDE,
        useExisting: forwardRef(() => TuiTextfieldLabelOutsideDirective)
      }]
    }]
  }], null, {
    labelOutside: [{
      type: Input,
      args: ["tuiTextfieldLabelOutside"]
    }]
  });
})();
var TUI_TEXTFIELD_POSTFIX = tuiCreateTokenFromFactory(() => new TuiTextfieldPostfixDirective());
var TuiTextfieldPostfixDirective = class extends AbstractTuiController {
  constructor() {
    super(...arguments);
    this.postfix = "";
  }
};
TuiTextfieldPostfixDirective.ɵfac = (() => {
  let ɵTuiTextfieldPostfixDirective_BaseFactory;
  return function TuiTextfieldPostfixDirective_Factory(t) {
    return (ɵTuiTextfieldPostfixDirective_BaseFactory || (ɵTuiTextfieldPostfixDirective_BaseFactory = ɵɵgetInheritedFactory(TuiTextfieldPostfixDirective)))(t || TuiTextfieldPostfixDirective);
  };
})();
TuiTextfieldPostfixDirective.ɵdir = ɵɵdefineDirective({
  type: TuiTextfieldPostfixDirective,
  selectors: [["", "tuiTextfieldPostfix", ""]],
  inputs: {
    postfix: ["tuiTextfieldPostfix", "postfix"]
  },
  features: [ɵɵProvidersFeature([{
    provide: TUI_TEXTFIELD_POSTFIX,
    useExisting: forwardRef(() => TuiTextfieldPostfixDirective)
  }]), ɵɵInheritDefinitionFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTextfieldPostfixDirective, [{
    type: Directive,
    args: [{
      selector: "[tuiTextfieldPostfix]",
      providers: [{
        provide: TUI_TEXTFIELD_POSTFIX,
        useExisting: forwardRef(() => TuiTextfieldPostfixDirective)
      }]
    }]
  }], null, {
    postfix: [{
      type: Input,
      args: ["tuiTextfieldPostfix"]
    }]
  });
})();
var TUI_TEXTFIELD_PREFIX = tuiCreateTokenFromFactory(() => new TuiTextfieldPrefixDirective());
var TuiTextfieldPrefixDirective = class extends AbstractTuiController {
  constructor() {
    super(...arguments);
    this.prefix = "";
  }
};
TuiTextfieldPrefixDirective.ɵfac = (() => {
  let ɵTuiTextfieldPrefixDirective_BaseFactory;
  return function TuiTextfieldPrefixDirective_Factory(t) {
    return (ɵTuiTextfieldPrefixDirective_BaseFactory || (ɵTuiTextfieldPrefixDirective_BaseFactory = ɵɵgetInheritedFactory(TuiTextfieldPrefixDirective)))(t || TuiTextfieldPrefixDirective);
  };
})();
TuiTextfieldPrefixDirective.ɵdir = ɵɵdefineDirective({
  type: TuiTextfieldPrefixDirective,
  selectors: [["", "tuiTextfieldPrefix", ""]],
  inputs: {
    prefix: ["tuiTextfieldPrefix", "prefix"]
  },
  features: [ɵɵProvidersFeature([{
    provide: TUI_TEXTFIELD_PREFIX,
    useExisting: forwardRef(() => TuiTextfieldPrefixDirective)
  }]), ɵɵInheritDefinitionFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTextfieldPrefixDirective, [{
    type: Directive,
    args: [{
      selector: "[tuiTextfieldPrefix]",
      providers: [{
        provide: TUI_TEXTFIELD_PREFIX,
        useExisting: forwardRef(() => TuiTextfieldPrefixDirective)
      }]
    }]
  }], null, {
    prefix: [{
      type: Input,
      args: ["tuiTextfieldPrefix"]
    }]
  });
})();
var TUI_TEXTFIELD_SIZE = tuiCreateTokenFromFactory(() => new TuiTextfieldSizeDirective());
var TuiTextfieldSizeDirective = class extends AbstractTuiController {
  constructor() {
    super(...arguments);
    this.size = "l";
  }
};
TuiTextfieldSizeDirective.ɵfac = (() => {
  let ɵTuiTextfieldSizeDirective_BaseFactory;
  return function TuiTextfieldSizeDirective_Factory(t) {
    return (ɵTuiTextfieldSizeDirective_BaseFactory || (ɵTuiTextfieldSizeDirective_BaseFactory = ɵɵgetInheritedFactory(TuiTextfieldSizeDirective)))(t || TuiTextfieldSizeDirective);
  };
})();
TuiTextfieldSizeDirective.ɵdir = ɵɵdefineDirective({
  type: TuiTextfieldSizeDirective,
  selectors: [["", "tuiTextfieldSize", ""]],
  inputs: {
    size: ["tuiTextfieldSize", "size"]
  },
  features: [ɵɵProvidersFeature([{
    provide: TUI_TEXTFIELD_SIZE,
    useExisting: forwardRef(() => TuiTextfieldSizeDirective)
  }]), ɵɵInheritDefinitionFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTextfieldSizeDirective, [{
    type: Directive,
    args: [{
      selector: "[tuiTextfieldSize]",
      providers: [{
        provide: TUI_TEXTFIELD_SIZE,
        useExisting: forwardRef(() => TuiTextfieldSizeDirective)
      }]
    }]
  }], null, {
    size: [{
      type: Input,
      args: ["tuiTextfieldSize"]
    }]
  });
})();
var TuiTextfieldControllerModule = class {
};
TuiTextfieldControllerModule.ɵfac = function TuiTextfieldControllerModule_Factory(t) {
  return new (t || TuiTextfieldControllerModule)();
};
TuiTextfieldControllerModule.ɵmod = ɵɵdefineNgModule({
  type: TuiTextfieldControllerModule,
  declarations: [TuiTextfieldAppearanceDirective, TuiTextfieldCleanerDirective, TuiTextfieldCustomContentDirective, TuiTextfieldLabelOutsideDirective, TuiTextfieldSizeDirective, TuiTextfieldIconDirective, TuiTextfieldIconLeftDirective, TuiTextfieldPrefixDirective, TuiTextfieldPostfixDirective, TuiTextfieldFillerDirective],
  exports: [TuiTextfieldAppearanceDirective, TuiTextfieldCleanerDirective, TuiTextfieldCustomContentDirective, TuiTextfieldLabelOutsideDirective, TuiTextfieldSizeDirective, TuiTextfieldIconDirective, TuiTextfieldIconLeftDirective, TuiTextfieldPrefixDirective, TuiTextfieldPostfixDirective, TuiTextfieldFillerDirective]
});
TuiTextfieldControllerModule.ɵinj = ɵɵdefineInjector({});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTextfieldControllerModule, [{
    type: NgModule,
    args: [{
      declarations: [TuiTextfieldAppearanceDirective, TuiTextfieldCleanerDirective, TuiTextfieldCustomContentDirective, TuiTextfieldLabelOutsideDirective, TuiTextfieldSizeDirective, TuiTextfieldIconDirective, TuiTextfieldIconLeftDirective, TuiTextfieldPrefixDirective, TuiTextfieldPostfixDirective, TuiTextfieldFillerDirective],
      exports: [TuiTextfieldAppearanceDirective, TuiTextfieldCleanerDirective, TuiTextfieldCustomContentDirective, TuiTextfieldLabelOutsideDirective, TuiTextfieldSizeDirective, TuiTextfieldIconDirective, TuiTextfieldIconLeftDirective, TuiTextfieldPrefixDirective, TuiTextfieldPostfixDirective, TuiTextfieldFillerDirective]
    }]
  }], null, null);
})();
var TUI_TEXTFIELD_WATCHED_CONTROLLER = new InjectionToken("[TUI_TEXTFIELD_WATCHED_CONTROLLER]");
var TEXTFIELD_CONTROLLER_PROVIDER = [TuiDestroyService, {
  provide: TUI_TEXTFIELD_WATCHED_CONTROLLER,
  deps: [ChangeDetectorRef, TuiDestroyService, TUI_TEXTFIELD_OPTIONS, TUI_TEXTFIELD_APPEARANCE, TUI_TEXTFIELD_APPEARANCE_DIRECTIVE, TUI_TEXTFIELD_CLEANER, TUI_TEXTFIELD_CUSTOM_CONTENT, TUI_TEXTFIELD_ICON, TUI_TEXTFIELD_ICON_LEFT, TUI_TEXTFIELD_LABEL_OUTSIDE, TUI_TEXTFIELD_SIZE, TUI_TEXTFIELD_PREFIX, TUI_TEXTFIELD_POSTFIX, TUI_TEXTFIELD_FILLER],
  useFactory: (cdr, destroy$, options, legacyAppearance, ...controllers) => {
    const change$ = merge(...controllers.map(({
      change$: change$2
    }) => change$2 || NEVER)).pipe(tuiWatch(cdr), takeUntil(destroy$));
    change$.subscribe();
    return new TuiTextfieldController(change$, options, legacyAppearance, ...controllers);
  }
}];

// node_modules/@taiga-ui/core/fesm2015/taiga-ui-core-directives-wrapper.js
var TuiWrapperDirective = class {
  constructor(mode$) {
    this.mode$ = mode$;
    this.disabled = false;
    this.readOnly = false;
    this.hover = null;
    this.active = null;
    this.focus = false;
    this.invalid = false;
    this.appearance = "";
  }
  get computedInvalid() {
    return !this.disabled && !this.readOnly && this.invalid;
  }
  get computedFocused() {
    return this.focus && !this.disabled;
  }
  get interactiveState() {
    if (this.disabled) {
      return TuiInteractiveState.Disabled;
    }
    if (this.readOnly) {
      return TuiInteractiveState.Readonly;
    }
    if (this.active) {
      return TuiInteractiveState.Active;
    }
    if (this.hover) {
      return TuiInteractiveState.Hover;
    }
    return null;
  }
  get noHover() {
    return this.readOnly || this.hover === false;
  }
  get noActive() {
    return this.readOnly || this.active === false;
  }
};
TuiWrapperDirective.ɵfac = function TuiWrapperDirective_Factory(t) {
  return new (t || TuiWrapperDirective)(ɵɵdirectiveInject(TUI_MODE));
};
TuiWrapperDirective.ɵdir = ɵɵdefineDirective({
  type: TuiWrapperDirective,
  selectors: [["", "tuiWrapper", ""]],
  hostVars: 10,
  hostBindings: function TuiWrapperDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("$.data-mode.attr", function TuiWrapperDirective___data_mode_attr_HostBindingHandler() {
        return ctx.mode$;
      });
    }
    if (rf & 2) {
      ɵɵattribute("data-appearance", ctx.appearance)("data-state", ctx.interactiveState);
      ɵɵclassProp("_invalid", ctx.computedInvalid)("_focused", ctx.computedFocused)("_no-hover", ctx.noHover)("_no-active", ctx.noActive);
    }
  },
  inputs: {
    disabled: "disabled",
    readOnly: "readOnly",
    hover: "hover",
    active: "active",
    focus: "focus",
    invalid: "invalid",
    appearance: "appearance"
  },
  features: [ɵɵProvidersFeature([MODE_PROVIDER])]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiWrapperDirective, [{
    type: Directive,
    args: [{
      selector: "[tuiWrapper]",
      providers: [MODE_PROVIDER],
      host: {
        "($.data-mode.attr)": "mode$"
      }
    }]
  }], function() {
    return [{
      type: Observable,
      decorators: [{
        type: Inject,
        args: [TUI_MODE]
      }]
    }];
  }, {
    disabled: [{
      type: Input
    }],
    readOnly: [{
      type: Input
    }],
    hover: [{
      type: Input
    }],
    active: [{
      type: Input
    }],
    focus: [{
      type: Input
    }],
    invalid: [{
      type: Input
    }],
    appearance: [{
      type: Input
    }, {
      type: HostBinding,
      args: ["attr.data-appearance"]
    }],
    computedInvalid: [{
      type: HostBinding,
      args: ["class._invalid"]
    }],
    computedFocused: [{
      type: HostBinding,
      args: ["class._focused"]
    }],
    interactiveState: [{
      type: HostBinding,
      args: ["attr.data-state"]
    }],
    noHover: [{
      type: HostBinding,
      args: ["class._no-hover"]
    }],
    noActive: [{
      type: HostBinding,
      args: ["class._no-active"]
    }]
  });
})();
var TuiWrapperModule = class {
};
TuiWrapperModule.ɵfac = function TuiWrapperModule_Factory(t) {
  return new (t || TuiWrapperModule)();
};
TuiWrapperModule.ɵmod = ɵɵdefineNgModule({
  type: TuiWrapperModule,
  declarations: [TuiWrapperDirective],
  exports: [TuiWrapperDirective]
});
TuiWrapperModule.ɵinj = ɵɵdefineInjector({});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiWrapperModule, [{
    type: NgModule,
    args: [{
      declarations: [TuiWrapperDirective],
      exports: [TuiWrapperDirective]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/core/fesm2015/taiga-ui-core-components-loader.js
function TuiLoaderComponent_div_2_div_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const text_r3 = ctx.polymorpheusOutlet;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", text_r3, " ");
  }
}
function TuiLoaderComponent_div_2_div_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵnamespaceHTML();
    ɵɵelementStart(0, "div", 6);
    ɵɵtemplate(1, TuiLoaderComponent_div_2_div_3_ng_container_1_Template, 2, 1, "ng-container", 7);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵclassProp("t-text_horizontal", ctx_r1.isHorizontal);
    ɵɵadvance(1);
    ɵɵproperty("polymorpheusOutlet", ctx_r1.textContent);
  }
}
function TuiLoaderComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 2);
    ɵɵnamespaceSVG();
    ɵɵelementStart(1, "svg", 3);
    ɵɵelement(2, "circle", 4);
    ɵɵelementEnd();
    ɵɵtemplate(3, TuiLoaderComponent_div_2_div_3_Template, 2, 3, "div", 5);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassProp("t-loader_horizontal", ctx_r0.isHorizontal)("t-loader_inherit-color", ctx_r0.inheritColor);
    ɵɵattribute("data-size", ctx_r0.size);
    ɵɵadvance(3);
    ɵɵproperty("ngIf", ctx_r0.hasText);
  }
}
var _c06 = ["*"];
var TUI_LOADER_DEFAULT_OPTIONS = {
  size: "m",
  inheritColor: false,
  overlay: false
};
var TUI_LOADER_OPTIONS = tuiCreateToken(TUI_LOADER_DEFAULT_OPTIONS);
function tuiLoaderOptionsProvider(options) {
  return tuiProvideOptions(TUI_LOADER_OPTIONS, options, TUI_LOADER_DEFAULT_OPTIONS);
}
var TuiLoaderComponent = class {
  constructor(doc, el, isIos, options) {
    this.doc = doc;
    this.el = el;
    this.isIos = isIos;
    this.options = options;
    this.size = this.options.size;
    this.inheritColor = this.options.inheritColor;
    this.overlay = this.options.overlay;
    this.loading = true;
    this.isApple = tuiIsSafari(this.el.nativeElement) || this.isIos;
  }
  set showLoader(value) {
    if (value && this.focused) {
      tuiBlurNativeFocused(this.doc);
    }
    this.loading = value;
  }
  get hasOverlay() {
    return this.overlay && this.loading;
  }
  get hasText() {
    return !!this.textContent;
  }
  get isHorizontal() {
    return !tuiSizeBigger(this.size);
  }
  get focused() {
    return tuiIsNativeFocusedIn(this.el.nativeElement);
  }
};
TuiLoaderComponent.ɵfac = function TuiLoaderComponent_Factory(t) {
  return new (t || TuiLoaderComponent)(ɵɵdirectiveInject(DOCUMENT), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(TUI_IS_IOS), ɵɵdirectiveInject(TUI_LOADER_OPTIONS));
};
TuiLoaderComponent.ɵcmp = ɵɵdefineComponent({
  type: TuiLoaderComponent,
  selectors: [["tui-loader"]],
  hostVars: 2,
  hostBindings: function TuiLoaderComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("_loading", ctx.loading);
    }
  },
  inputs: {
    size: "size",
    inheritColor: "inheritColor",
    overlay: "overlay",
    textContent: "textContent",
    showLoader: "showLoader"
  },
  ngContentSelectors: _c06,
  decls: 3,
  vars: 7,
  consts: [[1, "t-content", 3, "disabled"], ["class", "t-loader", 3, "t-loader_horizontal", "t-loader_inherit-color", 4, "ngIf"], [1, "t-loader"], ["automation-id", "tui-loader__loader", "focusable", "false", "viewBox", "0 0 100 100", "xmlns", "http://www.w3.org/2000/svg", 1, "t-icon"], ["cx", "50", "cy", "50", "r", "50", "stroke-dasharray", "314", 1, "t-circle"], ["automation-id", "tui-loader__text", "class", "t-text", 3, "t-text_horizontal", 4, "ngIf"], ["automation-id", "tui-loader__text", 1, "t-text"], [4, "polymorpheusOutlet"]],
  template: function TuiLoaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵelementStart(0, "fieldset", 0);
      ɵɵprojection(1);
      ɵɵelementEnd();
      ɵɵtemplate(2, TuiLoaderComponent_div_2_Template, 4, 6, "div", 1);
    }
    if (rf & 2) {
      ɵɵclassProp("t-content_has-overlay", ctx.hasOverlay)("t-content_loading", ctx.loading);
      ɵɵproperty("disabled", ctx.loading && !ctx.isApple);
      ɵɵattribute("inert", ctx.loading || null);
      ɵɵadvance(2);
      ɵɵproperty("ngIf", ctx.loading);
    }
  },
  dependencies: [NgIf, PolymorpheusOutletDirective],
  styles: ["@keyframes _ngcontent-%COMP%_tuiLoaderDashOffset{0%{stroke-dashoffset:-66}50%{stroke-dashoffset:-314}to{stroke-dashoffset:-66}}@keyframes _ngcontent-%COMP%_tuiLoaderRotate{0%{transform:rotate(0)}50%{transform:rotate(1turn)}to{transform:rotate(3turn)}}[_nghost-%COMP%]{position:relative;display:flex;min-width:1.5rem}._loading[_nghost-%COMP%]{overflow:hidden}.t-content[_ngcontent-%COMP%]{z-index:0;min-width:100%;height:100%;padding:0;margin:0;border:none}.t-content_has-overlay[_ngcontent-%COMP%]{opacity:.3}.t-content_loading[_ngcontent-%COMP%]{pointer-events:none}.t-loader[_ngcontent-%COMP%]{position:relative;left:-100%;display:flex;flex-direction:column;align-items:center;justify-content:center;min-width:100%;flex-shrink:0;align-self:center;color:var(--tui-text-01);stroke:var(--tui-primary);animation:tuiFadeIn var(--tui-duration)}.t-loader.t-loader_horizontal[_ngcontent-%COMP%]{flex-direction:row}.t-loader.t-loader_inherit-color[_ngcontent-%COMP%]{color:inherit;stroke:currentColor}.t-loader[data-size=xs][_ngcontent-%COMP%]{font-size:.75rem;stroke-width:38}.t-loader[data-size=s][_ngcontent-%COMP%]{font-size:1rem;stroke-width:25}.t-loader[data-size=m][_ngcontent-%COMP%]{font-size:1.5rem;stroke-width:17}.t-loader[data-size=l][_ngcontent-%COMP%]{font-size:2.5rem;stroke-width:15}.t-loader[data-size=xl][_ngcontent-%COMP%]{font-size:3.5rem;stroke-width:14}.t-loader[data-size=xxl][_ngcontent-%COMP%]{font-size:5rem;stroke-width:10}.t-text[_ngcontent-%COMP%]{font:var(--tui-font-text-s);color:var(--tui-text-01);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;margin-top:1rem;color:inherit;max-width:100%;text-align:center;stroke-width:0}.t-text_horizontal[_ngcontent-%COMP%]{margin:0 0 0 1rem}.t-icon[_ngcontent-%COMP%]{display:block;min-width:1em;max-width:1em;min-height:1em;max-height:1em;margin:.25rem -.5em;border-radius:100%;overflow:hidden;transform:scaleY(-1);animation:_ngcontent-%COMP%_tuiLoaderRotate 3s linear infinite}@supports (-webkit-hyphens: none){.t-icon[_ngcontent-%COMP%]{overflow:visible}}.t-circle[_ngcontent-%COMP%]{fill:none;stroke:inherit;stroke-width:inherit;animation:_ngcontent-%COMP%_tuiLoaderDashOffset 3s linear infinite}"],
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiLoaderComponent, [{
    type: Component,
    args: [{
      selector: "tui-loader",
      templateUrl: "./loader.template.html",
      styleUrls: ["./loader.style.less"],
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], function() {
    return [{
      type: Document,
      decorators: [{
        type: Inject,
        args: [DOCUMENT]
      }]
    }, {
      type: ElementRef,
      decorators: [{
        type: Inject,
        args: [ElementRef]
      }]
    }, {
      type: void 0,
      decorators: [{
        type: Inject,
        args: [TUI_IS_IOS]
      }]
    }, {
      type: void 0,
      decorators: [{
        type: Inject,
        args: [TUI_LOADER_OPTIONS]
      }]
    }];
  }, {
    size: [{
      type: Input
    }],
    inheritColor: [{
      type: Input
    }],
    overlay: [{
      type: Input
    }],
    textContent: [{
      type: Input
    }],
    showLoader: [{
      type: Input
    }],
    loading: [{
      type: HostBinding,
      args: ["class._loading"]
    }]
  });
})();
var TuiLoaderModule = class {
};
TuiLoaderModule.ɵfac = function TuiLoaderModule_Factory(t) {
  return new (t || TuiLoaderModule)();
};
TuiLoaderModule.ɵmod = ɵɵdefineNgModule({
  type: TuiLoaderModule,
  declarations: [TuiLoaderComponent],
  imports: [CommonModule, PolymorpheusModule],
  exports: [TuiLoaderComponent]
});
TuiLoaderModule.ɵinj = ɵɵdefineInjector({
  imports: [[CommonModule, PolymorpheusModule]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiLoaderModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, PolymorpheusModule],
      declarations: [TuiLoaderComponent],
      exports: [TuiLoaderComponent]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/core/fesm2015/taiga-ui-core-components-button.js
var _c07 = ["tuiButton", ""];
function TuiButtonComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function TuiButtonComponent_span_4_tui_svg_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "tui-svg", 8);
  }
  if (rf & 2) {
    const text_r5 = ctx.polymorpheusOutlet;
    ɵɵproperty("src", text_r5);
  }
}
function TuiButtonComponent_span_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 6);
    ɵɵtemplate(1, TuiButtonComponent_span_4_tui_svg_1_Template, 1, 1, "tui-svg", 7);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("polymorpheusOutlet", ctx_r1.icon);
  }
}
function TuiButtonComponent_span_6_tui_svg_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "tui-svg", 8);
  }
  if (rf & 2) {
    const text_r7 = ctx.polymorpheusOutlet;
    ɵɵproperty("src", text_r7);
  }
}
function TuiButtonComponent_span_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 9);
    ɵɵtemplate(1, TuiButtonComponent_span_6_tui_svg_1_Template, 1, 1, "tui-svg", 7);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("polymorpheusOutlet", ctx_r2.iconRight);
  }
}
function TuiButtonComponent_tui_loader_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "tui-loader", 10);
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵproperty("inheritColor", true)("size", ctx_r3.loaderSize);
  }
}
var _c1 = ["*"];
var TUI_BUTTON_DEFAULT_OPTIONS = {
  size: "l",
  shape: null,
  appearance: TuiAppearance.Primary
};
var TUI_BUTTON_OPTIONS = tuiCreateToken(TUI_BUTTON_DEFAULT_OPTIONS);
function tuiButtonOptionsProvider(options) {
  return tuiProvideOptions(TUI_BUTTON_OPTIONS, options, TUI_BUTTON_DEFAULT_OPTIONS);
}
var TuiButtonComponent = class extends AbstractTuiInteractive {
  constructor(mode, el, options) {
    var _a;
    super();
    this.mode = mode;
    this.el = el;
    this.options = options;
    this.mode$ = ((_a = this.mode) === null || _a === void 0 ? void 0 : _a.change$) || EMPTY;
    this.appearance = null;
    this.disabled = false;
    this.shape = this.options.shape;
    this.showLoader = false;
    this.size = this.options.size;
    this.appearance$ = this.mode$.pipe(startWith(null), map(() => this.computedAppearance), distinctUntilChanged());
  }
  get nativeFocusableElement() {
    return this.nativeDisabled ? null : this.el.nativeElement;
  }
  get focused() {
    return !this.showLoader && tuiIsNativeFocused(this.el.nativeElement);
  }
  get loaderSize() {
    return this.size === "l" || this.size === "xl" ? "m" : "s";
  }
  get computedAppearance() {
    var _a;
    return (_a = this.appearance) !== null && _a !== void 0 ? _a : this.options.appearance || "";
  }
  get nativeDisabled() {
    return this.computedDisabled || this.showLoader ? "" : null;
  }
  get tabIndex() {
    return this.focusable ? 0 : -1;
  }
  onFocused(focused) {
    this.updateFocused(focused);
  }
};
TuiButtonComponent.ɵfac = function TuiButtonComponent_Factory(t) {
  return new (t || TuiButtonComponent)(ɵɵdirectiveInject(TuiModeDirective, 8), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(TUI_BUTTON_OPTIONS));
};
TuiButtonComponent.ɵcmp = ɵɵdefineComponent({
  type: TuiButtonComponent,
  selectors: [["button", "tuiButton", ""], ["button", "tuiIconButton", ""], ["a", "tuiButton", ""], ["a", "tuiIconButton", ""]],
  hostVars: 7,
  hostBindings: function TuiButtonComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("focusin", function TuiButtonComponent_focusin_HostBindingHandler() {
        return ctx.onFocused(true);
      })("focusout", function TuiButtonComponent_focusout_HostBindingHandler() {
        return ctx.onFocused(false);
      });
    }
    if (rf & 2) {
      ɵɵhostProperty("tabIndex", ctx.tabIndex);
      ɵɵattribute("data-shape", ctx.shape)("data-size", ctx.size)("data-appearance", ctx.computedAppearance)("disabled", ctx.nativeDisabled);
      ɵɵclassProp("_loading", ctx.showLoader);
    }
  },
  inputs: {
    appearance: "appearance",
    disabled: "disabled",
    icon: "icon",
    iconRight: "iconRight",
    shape: "shape",
    showLoader: "showLoader",
    size: "size"
  },
  features: [ɵɵProvidersFeature([tuiAsFocusableItemAccessor(TuiButtonComponent), TuiDestroyService]), ɵɵInheritDefinitionFeature],
  attrs: _c07,
  ngContentSelectors: _c1,
  decls: 8,
  vars: 10,
  consts: [[4, "ngIf"], ["tuiWrapper", "", 1, "t-wrapper", 3, "active", "appearance", "disabled", "hover"], [1, "t-content"], ["class", "t-left", 4, "ngIf"], ["class", "t-right", 4, "ngIf"], ["class", "t-loader", 3, "inheritColor", "size", 4, "ngIf"], [1, "t-left"], ["class", "t-icon", 3, "src", 4, "polymorpheusOutlet"], [1, "t-icon", 3, "src"], [1, "t-right"], [1, "t-loader", 3, "inheritColor", "size"]],
  template: function TuiButtonComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵtemplate(0, TuiButtonComponent_ng_container_0_Template, 1, 0, "ng-container", 0);
      ɵɵpipe(1, "async");
      ɵɵelementStart(2, "div", 1)(3, "span", 2);
      ɵɵtemplate(4, TuiButtonComponent_span_4_Template, 2, 1, "span", 3);
      ɵɵprojection(5);
      ɵɵtemplate(6, TuiButtonComponent_span_6_Template, 2, 1, "span", 4);
      ɵɵelementEnd();
      ɵɵtemplate(7, TuiButtonComponent_tui_loader_7_Template, 1, 2, "tui-loader", 5);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵproperty("ngIf", ɵɵpipeBind1(1, 8, ctx.appearance$));
      ɵɵadvance(2);
      ɵɵproperty("active", ctx.pseudoActive)("appearance", ctx.computedAppearance)("disabled", ctx.computedDisabled)("hover", ctx.pseudoHover);
      ɵɵadvance(2);
      ɵɵproperty("ngIf", ctx.icon);
      ɵɵadvance(2);
      ɵɵproperty("ngIf", ctx.iconRight);
      ɵɵadvance(1);
      ɵɵproperty("ngIf", ctx.showLoader);
    }
  },
  dependencies: [TuiSvgComponent, TuiLoaderComponent, NgIf, TuiWrapperDirective, PolymorpheusOutletDirective, AsyncPipe],
  styles: ["[_nghost-%COMP%]{-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:0;border:0;background:none;font-size:inherit;line-height:inherit;text-decoration:none;font:var(--tui-font-text-s);color:var(--tui-text-01);position:relative;display:inline-block;flex-shrink:0;vertical-align:top;border-radius:var(--tui-radius-m);-webkit-user-select:none;-moz-user-select:none;user-select:none;outline:none;color:inherit}[data-shape=rounded][_nghost-%COMP%]{border-radius:6.25rem}[data-size=xs][_nghost-%COMP%]{height:var(--tui-height-xs);font-weight:normal}[data-size=xs][data-shape=square][_nghost-%COMP%], [data-size=xs][tuiIconButton][_nghost-%COMP%]{width:var(--tui-height-xs)}[data-size=s][_nghost-%COMP%]{height:var(--tui-height-s);font-weight:normal}[data-size=s][data-shape=square][_nghost-%COMP%], [data-size=s][tuiIconButton][_nghost-%COMP%]{width:var(--tui-height-s)}[data-size=m][_nghost-%COMP%]{height:var(--tui-height-m);font:var(--tui-font-text-m);font-weight:bold}[data-size=m][data-shape=square][_nghost-%COMP%], [data-size=m][tuiIconButton][_nghost-%COMP%]{width:var(--tui-height-m)}[data-size=l][_nghost-%COMP%]{height:var(--tui-height-l);font:var(--tui-font-text-m);font-weight:bold}[data-size=l][data-shape=square][_nghost-%COMP%], [data-size=l][tuiIconButton][_nghost-%COMP%]{width:var(--tui-height-l)}[data-size=xl][_nghost-%COMP%]{height:3.75rem;font:var(--tui-font-text-m);font-weight:bold}[data-size=xl][data-shape=square][_nghost-%COMP%], [data-size=xl][tuiIconButton][_nghost-%COMP%]{width:3.75rem}[tuiIconButton][_nghost-%COMP%]{font-size:0!important}[tuiIconButton][_nghost-%COMP%]   .t-left[_ngcontent-%COMP%], [tuiIconButton][_nghost-%COMP%]   .t-right[_ngcontent-%COMP%]{margin:0!important}.t-loader[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;cursor:default}.t-left[_ngcontent-%COMP%]{margin-right:.5rem}[data-size=s][_nghost-%COMP%]   .t-left[_ngcontent-%COMP%]{margin-right:.375rem}[data-size=xs][_nghost-%COMP%]   .t-left[_ngcontent-%COMP%]{margin-right:.25rem}.t-right[_ngcontent-%COMP%]{margin:0 -.25rem 0 .25rem}[data-size=s][_nghost-%COMP%]   .t-right[_ngcontent-%COMP%]{margin:0 -.25rem 0 .375rem}[data-size=xs][_nghost-%COMP%]   .t-right[_ngcontent-%COMP%]{margin:0 -.125rem 0 .25rem}.t-icon[_ngcontent-%COMP%]{display:flex;max-width:100%;max-height:100%;align-items:center;justify-content:center}.t-left[_ngcontent-%COMP%], .t-right[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;width:1.5rem;height:1.5rem}[data-size=s][_nghost-%COMP%]   .t-left[_ngcontent-%COMP%], [data-size=s][_nghost-%COMP%]   .t-right[_ngcontent-%COMP%], [data-size=xs][_nghost-%COMP%]   .t-left[_ngcontent-%COMP%], [data-size=xs][_nghost-%COMP%]   .t-right[_ngcontent-%COMP%]{width:1rem;height:1rem}[tuiIconButton][data-appearance=icon][data-size=s][_nghost-%COMP%]   .t-left[_ngcontent-%COMP%], [tuiIconButton][data-appearance=icon][data-size=s][_nghost-%COMP%]   .t-right[_ngcontent-%COMP%]{width:1.5rem;height:1.5rem}.t-wrapper[_ngcontent-%COMP%]{box-sizing:border-box;cursor:pointer;isolation:isolate}[data-size=xs][_nghost-%COMP%]   .t-wrapper[_ngcontent-%COMP%]{padding:0 var(--tui-padding, .375rem)}[data-size=xs][_nghost-%COMP%]   .t-wrapper[_ngcontent-%COMP%]:after{border-width:1px}[data-size=s][_nghost-%COMP%]   .t-wrapper[_ngcontent-%COMP%]{padding:0 var(--tui-padding, .75rem)}[data-size=m][_nghost-%COMP%]   .t-wrapper[_ngcontent-%COMP%]{padding:0 var(--tui-padding, 1.5rem)}[data-size=l][_nghost-%COMP%]   .t-wrapper[_ngcontent-%COMP%]{padding:0 var(--tui-padding, 2.25rem)}[data-size=xl][_nghost-%COMP%]   .t-wrapper[_ngcontent-%COMP%]{padding:0 var(--tui-padding, 2.5rem)}[data-shape=square][_nghost-%COMP%]   .t-wrapper[_ngcontent-%COMP%], [tuiIconButton][_nghost-%COMP%]   .t-wrapper[_ngcontent-%COMP%]{padding:0}.t-content[_ngcontent-%COMP%]{display:flex;height:100%;align-items:center;justify-content:center;text-align:center}._loading[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{opacity:0}"],
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiButtonComponent, [{
    type: Component,
    args: [{
      selector: "button[tuiButton], button[tuiIconButton], a[tuiButton], a[tuiIconButton]",
      templateUrl: "./button.template.html",
      styleUrls: ["./button.style.less"],
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [tuiAsFocusableItemAccessor(TuiButtonComponent), TuiDestroyService]
    }]
  }], function() {
    return [{
      type: TuiModeDirective,
      decorators: [{
        type: Optional
      }, {
        type: Inject,
        args: [TuiModeDirective]
      }]
    }, {
      type: ElementRef,
      decorators: [{
        type: Inject,
        args: [ElementRef]
      }]
    }, {
      type: void 0,
      decorators: [{
        type: Inject,
        args: [TUI_BUTTON_OPTIONS]
      }]
    }];
  }, {
    appearance: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    icon: [{
      type: Input
    }],
    iconRight: [{
      type: Input
    }],
    shape: [{
      type: Input
    }, {
      type: HostBinding,
      args: ["attr.data-shape"]
    }],
    showLoader: [{
      type: Input
    }, {
      type: HostBinding,
      args: ["class._loading"]
    }],
    size: [{
      type: Input
    }, {
      type: HostBinding,
      args: ["attr.data-size"]
    }],
    computedAppearance: [{
      type: HostBinding,
      args: ["attr.data-appearance"]
    }],
    nativeDisabled: [{
      type: HostBinding,
      args: ["attr.disabled"]
    }],
    tabIndex: [{
      type: HostBinding,
      args: ["tabIndex"]
    }],
    onFocused: [{
      type: HostListener,
      args: ["focusin", ["true"]]
    }, {
      type: HostListener,
      args: ["focusout", ["false"]]
    }]
  });
})();
var TuiButtonModule = class {
};
TuiButtonModule.ɵfac = function TuiButtonModule_Factory(t) {
  return new (t || TuiButtonModule)();
};
TuiButtonModule.ɵmod = ɵɵdefineNgModule({
  type: TuiButtonModule,
  declarations: [TuiButtonComponent],
  imports: [CommonModule, PolymorpheusModule, TuiWrapperModule, TuiSvgModule, TuiLoaderModule],
  exports: [TuiButtonComponent]
});
TuiButtonModule.ɵinj = ɵɵdefineInjector({
  imports: [[CommonModule, PolymorpheusModule, TuiWrapperModule, TuiSvgModule, TuiLoaderModule]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiButtonModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, PolymorpheusModule, TuiWrapperModule, TuiSvgModule, TuiLoaderModule],
      declarations: [TuiButtonComponent],
      exports: [TuiButtonComponent]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/core/fesm2015/taiga-ui-core-components-notification.js
function TuiNotificationComponent_ng_container_0_tui_svg_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "tui-svg", 4);
  }
  if (rf & 2) {
    const iconName_r3 = ctx.polymorpheusOutlet;
    ɵɵproperty("src", iconName_r3);
  }
}
var _c08 = (a0) => ({
  $implicit: a0
});
function TuiNotificationComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, TuiNotificationComponent_ng_container_0_tui_svg_1_Template, 1, 1, "tui-svg", 3);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("polymorpheusOutlet", ctx_r0.icon)("polymorpheusOutletContext", ɵɵpureFunction1(2, _c08, ctx_r0.status));
  }
}
function TuiNotificationComponent_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 5);
    ɵɵlistener("click", function TuiNotificationComponent_button_3_Template_button_click_0_listener() {
      ɵɵrestoreView(_r5);
      const ctx_r4 = ɵɵnextContext();
      return ɵɵresetView(ctx_r4.close.emit());
    });
    ɵɵpipe(1, "async");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("icon", ctx_r1.icons.close)("title", ɵɵpipeBind1(1, 2, ctx_r1.closeWord$));
  }
}
var _c12 = ["*"];
var TuiNotificationComponent = class {
  constructor(closeWord$, icons, options) {
    this.closeWord$ = closeWord$;
    this.icons = icons;
    this.options = options;
    this.hasIcon = this.options.hasIcon;
    this.icon = this.options.icon;
    this.status = this.options.status;
    this.size = this.options.size;
    this.hideClose = false;
    this.close = new EventEmitter();
  }
  get hasClose() {
    return !this.hideClose && tuiIsObserved(this.close);
  }
};
TuiNotificationComponent.ɵfac = function TuiNotificationComponent_Factory(t) {
  return new (t || TuiNotificationComponent)(ɵɵdirectiveInject(TUI_CLOSE_WORD), ɵɵdirectiveInject(TUI_COMMON_ICONS), ɵɵdirectiveInject(TUI_NOTIFICATION_OPTIONS));
};
TuiNotificationComponent.ɵcmp = ɵɵdefineComponent({
  type: TuiNotificationComponent,
  selectors: [["tui-notification"]],
  hostVars: 2,
  hostBindings: function TuiNotificationComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("data-status", ctx.status)("data-size", ctx.size);
    }
  },
  inputs: {
    hasIcon: "hasIcon",
    icon: "icon",
    status: "status",
    size: "size",
    hideClose: "hideClose"
  },
  outputs: {
    close: "close"
  },
  ngContentSelectors: _c12,
  decls: 4,
  vars: 2,
  consts: [[4, "ngIf"], [1, "t-content"], ["appearance", "icon", "automation-id", "tui-notification__close", "size", "xs", "tuiIconButton", "", "type", "button", "class", "t-close", 3, "icon", "title", "click", 4, "ngIf"], ["automation-id", "tui-notification__icon", "class", "t-icon", 3, "src", 4, "polymorpheusOutlet", "polymorpheusOutletContext"], ["automation-id", "tui-notification__icon", 1, "t-icon", 3, "src"], ["appearance", "icon", "automation-id", "tui-notification__close", "size", "xs", "tuiIconButton", "", "type", "button", 1, "t-close", 3, "icon", "title", "click"]],
  template: function TuiNotificationComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵtemplate(0, TuiNotificationComponent_ng_container_0_Template, 2, 4, "ng-container", 0);
      ɵɵelementStart(1, "div", 1);
      ɵɵprojection(2);
      ɵɵelementEnd();
      ɵɵtemplate(3, TuiNotificationComponent_button_3_Template, 2, 4, "button", 2);
    }
    if (rf & 2) {
      ɵɵproperty("ngIf", ctx.icon && ctx.hasIcon);
      ɵɵadvance(3);
      ɵɵproperty("ngIf", ctx.hasClose);
    }
  },
  dependencies: [TuiSvgComponent, TuiButtonComponent, NgIf, PolymorpheusOutletDirective, AsyncPipe],
  styles: ["[_nghost-%COMP%]{font:var(--tui-font-text-s);color:var(--tui-text-01);position:relative;display:flex;padding:.75rem 1rem;border-radius:var(--tui-radius-m);background:#fff;background:var(--tui-base-01);box-sizing:border-box;overflow:hidden}[data-size=s][_nghost-%COMP%]{padding:.375rem .625rem}[data-size=s][_nghost-%COMP%]   .t-icon[_ngcontent-%COMP%]{width:1rem;height:1.25rem;margin:0 .375rem 0 -.125rem}[data-size=s][_nghost-%COMP%]   .t-close[_ngcontent-%COMP%]{margin:-.125rem -.375rem -.125rem .75rem}[data-size=m][_nghost-%COMP%]{padding:.75rem}[data-size=m][_nghost-%COMP%]   .t-icon[_ngcontent-%COMP%]{width:1.25rem;height:1.25rem;margin-right:.5rem}[data-size=m][_nghost-%COMP%]   .t-close[_ngcontent-%COMP%]{margin:-.125rem -.125rem -.125rem 1rem}[data-size=l][_nghost-%COMP%]{padding:1rem;font:var(--tui-font-text-m);border-radius:var(--tui-radius-l)}[data-size=l][_nghost-%COMP%]   .t-icon[_ngcontent-%COMP%]{width:1.5rem;height:1.5rem;margin-right:.5rem}[data-status=info][_nghost-%COMP%]{color:var(--tui-info-fill);background:linear-gradient(var(--tui-info-bg),var(--tui-info-bg)),var(--tui-base-01)}[data-status=success][_nghost-%COMP%]{color:var(--tui-success-fill);background:linear-gradient(var(--tui-success-bg),var(--tui-success-bg)),var(--tui-base-01)}[data-status=error][_nghost-%COMP%]{color:var(--tui-error-fill);background:linear-gradient(var(--tui-error-bg),var(--tui-error-bg)),var(--tui-base-01)}[data-status=warning][_nghost-%COMP%]{color:var(--tui-warning-fill);background:linear-gradient(var(--tui-warning-bg),var(--tui-warning-bg)),var(--tui-base-01)}[data-status=neutral][_nghost-%COMP%]{color:var(--tui-neutral-fill);background:linear-gradient(var(--tui-neutral-bg),var(--tui-neutral-bg)),var(--tui-base-01)}.t-content[_ngcontent-%COMP%]{flex:1;word-wrap:break-word;overflow-wrap:anywhere;color:var(--tui-text-01)}"],
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiNotificationComponent, [{
    type: Component,
    args: [{
      selector: "tui-notification",
      templateUrl: "./notification.template.html",
      styleUrls: ["./notification.style.less"],
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], function() {
    return [{
      type: Observable,
      decorators: [{
        type: Inject,
        args: [TUI_CLOSE_WORD]
      }]
    }, {
      type: void 0,
      decorators: [{
        type: Inject,
        args: [TUI_COMMON_ICONS]
      }]
    }, {
      type: void 0,
      decorators: [{
        type: Inject,
        args: [TUI_NOTIFICATION_OPTIONS]
      }]
    }];
  }, {
    hasIcon: [{
      type: Input
    }],
    icon: [{
      type: Input
    }],
    status: [{
      type: Input
    }, {
      type: HostBinding,
      args: ["attr.data-status"]
    }],
    size: [{
      type: Input
    }, {
      type: HostBinding,
      args: ["attr.data-size"]
    }],
    hideClose: [{
      type: Input
    }],
    close: [{
      type: Output
    }]
  });
})();
var TuiNotificationModule = class {
};
TuiNotificationModule.ɵfac = function TuiNotificationModule_Factory(t) {
  return new (t || TuiNotificationModule)();
};
TuiNotificationModule.ɵmod = ɵɵdefineNgModule({
  type: TuiNotificationModule,
  declarations: [TuiNotificationComponent],
  imports: [CommonModule, TuiSvgModule, TuiButtonModule, PolymorpheusModule],
  exports: [TuiNotificationComponent]
});
TuiNotificationModule.ɵinj = ɵɵdefineInjector({
  imports: [[CommonModule, TuiSvgModule, TuiButtonModule, PolymorpheusModule]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiNotificationModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, TuiSvgModule, TuiButtonModule, PolymorpheusModule],
      declarations: [TuiNotificationComponent],
      exports: [TuiNotificationComponent]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/core/fesm2015/taiga-ui-core-components-alert.js
function TuiAlertComponent_label_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const text_r3 = ctx.polymorpheusOutlet;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", text_r3, " ");
  }
}
function TuiAlertComponent_label_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "label", 4);
    ɵɵtemplate(1, TuiAlertComponent_label_1_ng_container_1_Template, 2, 1, "ng-container", 5);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("polymorpheusOutlet", ctx_r0.item.label)("polymorpheusOutletContext", ctx_r0.item);
  }
}
function TuiAlertComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 6);
  }
  if (rf & 2) {
    const text_r4 = ctx.polymorpheusOutlet;
    ɵɵproperty("innerHTML", text_r4, ɵɵsanitizeHtml);
  }
}
var TUI_ALERT_POSITION = tuiCreateTokenFromFactory(() => inject(TUI_IS_MOBILE) ? "1rem 1rem 0 auto" : "2rem 3rem 0 auto");
var TuiAlertComponent = class {
  constructor(el, destroy$, position, options, item) {
    this.el = el;
    this.destroy$ = destroy$;
    this.position = position;
    this.options = options;
    this.item = item;
    this.autoClose = typeof this.item.autoClose === "function" ? this.item.autoClose(this.item.status) : this.item.autoClose;
    this.animation = this.position.endsWith("auto") ? Object.assign(Object.assign({}, this.options), {
      value: "right"
    }) : Object.assign(Object.assign({}, this.options), {
      value: "left"
    });
  }
  ngOnInit() {
    this.initAutoClose();
  }
  close() {
    this.item.$implicit.complete();
  }
  initAutoClose() {
    if (!this.autoClose) {
      return;
    }
    timer(tuiIsNumber(this.autoClose) ? this.autoClose : 3e3).pipe(
      takeUntil(fromEvent(this.el.nativeElement, "mouseenter")),
      /**
       * TODO: replace to
       * repeat({
       *    delay: () => fromEvent(this.el.nativeElement, 'mouseleave'),
       * })
       *
       * in RxJS 7
       */
      // eslint-disable-next-line rxjs/no-ignored-notifier
      repeatWhen(() => fromEvent(this.el.nativeElement, "mouseleave")),
      takeUntil(this.destroy$)
    ).subscribe(() => this.close());
  }
};
TuiAlertComponent.ɵfac = function TuiAlertComponent_Factory(t) {
  return new (t || TuiAlertComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(TuiDestroyService, 2), ɵɵdirectiveInject(TUI_ALERT_POSITION), ɵɵdirectiveInject(TUI_ANIMATION_OPTIONS), ɵɵdirectiveInject(POLYMORPHEUS_CONTEXT));
};
TuiAlertComponent.ɵcmp = ɵɵdefineComponent({
  type: TuiAlertComponent,
  selectors: [["tui-alert"]],
  hostAttrs: ["role", "alert"],
  hostVars: 5,
  hostBindings: function TuiAlertComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵsyntheticHostProperty("@tuiFadeIn", ctx.options)("@tuiSlideIn", ctx.animation)("@tuiHeightCollapse", ctx.animation);
      ɵɵstyleProp("margin", ctx.position);
    }
  },
  features: [ɵɵProvidersFeature([TuiDestroyService])],
  decls: 4,
  vars: 7,
  consts: [[3, "hasIcon", "hideClose", "icon", "status", "close"], ["automation-id", "tui-notification-alert__heading", "class", "t-heading", 4, "ngIf"], ["automation-id", "tui-notification-alert__content", 1, "t-content"], [3, "innerHTML", 4, "polymorpheusOutlet", "polymorpheusOutletContext"], ["automation-id", "tui-notification-alert__heading", 1, "t-heading"], [4, "polymorpheusOutlet", "polymorpheusOutletContext"], [3, "innerHTML"]],
  template: function TuiAlertComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "tui-notification", 0);
      ɵɵlistener("close", function TuiAlertComponent_Template_tui_notification_close_0_listener() {
        return ctx.close();
      });
      ɵɵtemplate(1, TuiAlertComponent_label_1_Template, 2, 2, "label", 1);
      ɵɵelementStart(2, "div", 2);
      ɵɵtemplate(3, TuiAlertComponent_div_3_Template, 1, 1, "div", 3);
      ɵɵelementEnd()();
    }
    if (rf & 2) {
      ɵɵproperty("hasIcon", ctx.item.hasIcon)("hideClose", !ctx.item.hasCloseButton)("icon", ctx.item.icon)("status", ctx.item.status);
      ɵɵadvance(1);
      ɵɵproperty("ngIf", ctx.item.label);
      ɵɵadvance(2);
      ɵɵproperty("polymorpheusOutlet", ctx.item.content)("polymorpheusOutletContext", ctx.item);
    }
  },
  dependencies: [TuiNotificationComponent, NgIf, PolymorpheusOutletDirective],
  styles: ["[_nghost-%COMP%]{display:block;box-shadow:var(--tui-shadow-dropdown);border-radius:var(--tui-radius-l);width:18rem}[_nghost-%COMP%]:not(:first-child){margin-top:.75rem!important}[_nghost-%COMP%]:not(:last-child){margin-bottom:0!important}.t-heading[_ngcontent-%COMP%]{margin:0}[data-size=s][_ngcontent-%COMP%]   .t-heading[_ngcontent-%COMP%]{font:var(--tui-font-text-s);font-weight:bold}[data-size=m][_ngcontent-%COMP%]   .t-heading[_ngcontent-%COMP%]{font:var(--tui-font-text-m);line-height:1.25rem;font-weight:bold}[data-size=l][_ngcontent-%COMP%]   .t-heading[_ngcontent-%COMP%]{font:var(--tui-font-text-l);line-height:1.5rem;font-weight:bold}.t-content[_ngcontent-%COMP%]{color:var(--tui-text-01);word-wrap:break-word;word-break:break-word}.t-content[_ngcontent-%COMP%]:empty{display:none}"],
  data: {
    animation: [tuiFadeIn, tuiSlideIn, tuiHeightCollapse]
  },
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiAlertComponent, [{
    type: Component,
    args: [{
      selector: "tui-alert",
      templateUrl: "./alert.template.html",
      styleUrls: ["./alert.style.less"],
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [TuiDestroyService],
      animations: [tuiFadeIn, tuiSlideIn, tuiHeightCollapse],
      host: {
        role: "alert",
        "[style.margin]": "position",
        "[@tuiFadeIn]": "options",
        "[@tuiSlideIn]": "animation",
        "[@tuiHeightCollapse]": "animation"
      }
    }]
  }], function() {
    return [{
      type: ElementRef,
      decorators: [{
        type: Inject,
        args: [ElementRef]
      }]
    }, {
      type: TuiDestroyService,
      decorators: [{
        type: Self
      }, {
        type: Inject,
        args: [TuiDestroyService]
      }]
    }, {
      type: void 0,
      decorators: [{
        type: Inject,
        args: [TUI_ALERT_POSITION]
      }]
    }, {
      type: void 0,
      decorators: [{
        type: Inject,
        args: [TUI_ANIMATION_OPTIONS]
      }]
    }, {
      type: void 0,
      decorators: [{
        type: Inject,
        args: [POLYMORPHEUS_CONTEXT]
      }]
    }];
  }, null);
})();
var TuiAlertService = class extends AbstractTuiDialogService {
  constructor(defaultOptions, idService) {
    super(idService);
    this.defaultOptions = defaultOptions;
    this.component = new PolymorpheusComponent(TuiAlertComponent);
  }
};
TuiAlertService.ɵfac = function TuiAlertService_Factory(t) {
  return new (t || TuiAlertService)(ɵɵinject(TUI_NOTIFICATION_OPTIONS), ɵɵinject(TuiIdService));
};
TuiAlertService.ɵprov = ɵɵdefineInjectable({
  token: TuiAlertService,
  factory: TuiAlertService.ɵfac,
  providedIn: "root"
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiAlertService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], function() {
    return [{
      type: void 0,
      decorators: [{
        type: Inject,
        args: [TUI_NOTIFICATION_OPTIONS]
      }]
    }, {
      type: TuiIdService,
      decorators: [{
        type: Inject,
        args: [TuiIdService]
      }]
    }];
  }, null);
})();
var TuiAlertDirective = class extends AbstractTuiDialogDirective {
};
TuiAlertDirective.ɵfac = (() => {
  let ɵTuiAlertDirective_BaseFactory;
  return function TuiAlertDirective_Factory(t) {
    return (ɵTuiAlertDirective_BaseFactory || (ɵTuiAlertDirective_BaseFactory = ɵɵgetInheritedFactory(TuiAlertDirective)))(t || TuiAlertDirective);
  };
})();
TuiAlertDirective.ɵdir = ɵɵdefineDirective({
  type: TuiAlertDirective,
  selectors: [["ng-template", "tuiAlert", ""]],
  inputs: {
    options: ["tuiAlertOptions", "options"],
    open: ["tuiAlert", "open"]
  },
  outputs: {
    openChange: "tuiAlertChange"
  },
  features: [ɵɵProvidersFeature([{
    provide: AbstractTuiDialogService,
    useExisting: TuiAlertService
  }]), ɵɵInheritDefinitionFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiAlertDirective, [{
    type: Directive,
    args: [{
      selector: "ng-template[tuiAlert]",
      inputs: ["options: tuiAlertOptions", "open: tuiAlert"],
      outputs: ["openChange: tuiAlertChange"],
      providers: [{
        provide: AbstractTuiDialogService,
        useExisting: TuiAlertService
      }]
    }]
  }], null, null);
})();
var TuiAlertModule = class {
};
TuiAlertModule.ɵfac = function TuiAlertModule_Factory(t) {
  return new (t || TuiAlertModule)();
};
TuiAlertModule.ɵmod = ɵɵdefineNgModule({
  type: TuiAlertModule,
  declarations: [TuiAlertComponent, TuiAlertDirective],
  imports: [CommonModule, PolymorpheusModule, TuiNotificationModule],
  exports: [TuiAlertComponent, TuiAlertDirective]
});
TuiAlertModule.ɵinj = ɵɵdefineInjector({
  providers: [tuiAsAlerts(TuiAlertService)],
  imports: [[CommonModule, PolymorpheusModule, TuiNotificationModule]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiAlertModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, PolymorpheusModule, TuiNotificationModule],
      declarations: [TuiAlertComponent, TuiAlertDirective],
      providers: [tuiAsAlerts(TuiAlertService)],
      exports: [TuiAlertComponent, TuiAlertDirective]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/core/fesm2015/taiga-ui-core-components-primitive-year-picker.js
function TuiPrimitiveYearPickerComponent_div_0_ng_container_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 4);
    ɵɵlistener("click", function TuiPrimitiveYearPickerComponent_div_0_ng_container_1_div_1_Template_div_click_0_listener() {
      const restoredCtx = ɵɵrestoreView(_r7);
      const item_r5 = restoredCtx.tuiLet;
      const ctx_r6 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r6.onItemClick(item_r5));
    })("tuiHoveredChange", function TuiPrimitiveYearPickerComponent_div_0_ng_container_1_div_1_Template_div_tuiHoveredChange_0_listener($event) {
      const restoredCtx = ɵɵrestoreView(_r7);
      const item_r5 = restoredCtx.tuiLet;
      const ctx_r8 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r8.onItemHovered($event, item_r5));
    })("tuiPressedChange", function TuiPrimitiveYearPickerComponent_div_0_ng_container_1_div_1_Template_div_tuiPressedChange_0_listener($event) {
      const restoredCtx = ɵɵrestoreView(_r7);
      const item_r5 = restoredCtx.tuiLet;
      const ctx_r9 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r9.onItemPressed($event, item_r5));
    });
    ɵɵelementStart(1, "div", 5);
    ɵɵtext(2);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const item_r5 = ctx.tuiLet;
    const ctx_r4 = ɵɵnextContext(3);
    ɵɵclassProp("t-cell_interval", ctx_r4.itemIsInterval(item_r5))("t-cell_today", ctx_r4.itemIsToday(item_r5));
    ɵɵproperty("tuiScrollIntoView", ctx_r4.scrollItemIntoView(item_r5));
    ɵɵattribute("data-range", ctx_r4.getItemRange(item_r5))("data-state", ctx_r4.getItemState(item_r5));
    ɵɵadvance(2);
    ɵɵtextInterpolate(item_r5);
  }
}
function TuiPrimitiveYearPickerComponent_div_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, TuiPrimitiveYearPickerComponent_div_0_ng_container_1_div_1_Template, 3, 8, "div", 3);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const colIndex_r3 = ctx.$implicit;
    const rowIndex_r1 = ɵɵnextContext().$implicit;
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("tuiLet", ctx_r2.getItem(rowIndex_r1, colIndex_r3));
  }
}
function TuiPrimitiveYearPickerComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 1);
    ɵɵtemplate(1, TuiPrimitiveYearPickerComponent_div_0_ng_container_1_Template, 2, 1, "ng-container", 2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵadvance(1);
    ɵɵproperty("tuiRepeatTimesOf", 4);
  }
}
var LIMIT = 100;
var ITEMS_IN_ROW = 4;
var TuiPrimitiveYearPickerComponent = class {
  constructor() {
    this.hoveredItem = null;
    this.pressedItem = null;
    this.currentYear = TuiMonth.currentLocal().year;
    this.value = null;
    this.initialItem = TuiMonth.currentLocal();
    this.min = TUI_FIRST_DAY;
    this.max = TUI_LAST_DAY;
    this.disabledItemHandler = ALWAYS_FALSE_HANDLER;
    this.yearClick = new EventEmitter();
  }
  get computedMin() {
    var _a;
    return (_a = this.min) !== null && _a !== void 0 ? _a : TUI_FIRST_DAY;
  }
  get computedMax() {
    var _a;
    return (_a = this.max) !== null && _a !== void 0 ? _a : TUI_LAST_DAY;
  }
  get isSingle() {
    return this.isRange(this.value) && this.value.from.yearSame(this.value.to);
  }
  get rows() {
    return Math.ceil((this.calculatedMax - this.calculatedMin) / ITEMS_IN_ROW);
  }
  get calculatedMin() {
    const initial = this.initialItem.year - LIMIT;
    const min = this.computedMin;
    return min.year > initial ? min.year : initial;
  }
  get calculatedMax() {
    const initial = this.initialItem.year + LIMIT;
    const max = this.computedMax;
    return max.year < initial ? max.year + 1 : initial;
  }
  isRange(item) {
    return item instanceof TuiMonthRange;
  }
  scrollItemIntoView(item) {
    return this.initialItem.year === item;
  }
  getItem(rowIndex, colIndex) {
    return rowIndex * ITEMS_IN_ROW + colIndex + this.calculatedMin;
  }
  getItemState(item) {
    const {
      disabledItemHandler,
      pressedItem,
      hoveredItem
    } = this;
    const max = this.computedMax;
    if (max.year < item || disabledItemHandler !== ALWAYS_FALSE_HANDLER && disabledItemHandler(item)) {
      return TuiInteractiveState.Disabled;
    }
    if (pressedItem === item) {
      return TuiInteractiveState.Active;
    }
    if (hoveredItem === item) {
      return TuiInteractiveState.Hover;
    }
    return null;
  }
  getItemRange(item) {
    const {
      value,
      hoveredItem
    } = this;
    if (value === null) {
      return null;
    }
    if (value instanceof TuiYear) {
      return value.year === item ? TuiRangeState.Single : null;
    }
    if (!(value instanceof TuiMonthRange)) {
      return value.find((day) => day.year === item) ? TuiRangeState.Single : null;
    }
    if (value.from.year === item && !value.from.yearSame(value.to) || hoveredItem !== null && hoveredItem > value.from.year && value.from.year === item && value.from.yearSame(value.to) || hoveredItem !== null && hoveredItem === item && hoveredItem < value.from.year && value.from.yearSame(value.to)) {
      return TuiRangeState.Start;
    }
    if (value.to.year === item && !value.from.yearSame(value.to) || hoveredItem !== null && hoveredItem < value.from.year && value.from.year === item && value.from.yearSame(value.to) || hoveredItem !== null && hoveredItem === item && hoveredItem > value.from.year && value.from.yearSame(value.to)) {
      return TuiRangeState.End;
    }
    return value.from.yearSame(value.to) && value.from.year === item ? TuiRangeState.Single : null;
  }
  itemIsToday(item) {
    return this.currentYear === item;
  }
  itemIsInterval(item) {
    const {
      value,
      hoveredItem
    } = this;
    if (value === null || !this.isRange(value)) {
      return false;
    }
    if (!value.from.yearSame(value.to)) {
      return value.from.year <= item && value.to.year > item;
    }
    if (hoveredItem === null || value.from.year === hoveredItem) {
      return false;
    }
    return tuiInRange(item, Math.min(value.from.year, hoveredItem), Math.max(value.from.year, hoveredItem));
  }
  onItemHovered(hovered, item) {
    this.updateHoveredItem(hovered, item);
  }
  onItemPressed(pressed, item) {
    this.updatePressedItem(pressed, item);
  }
  onItemClick(item) {
    this.yearClick.emit(new TuiYear(item));
  }
  updateHoveredItem(hovered, item) {
    this.hoveredItem = hovered ? item : null;
  }
  updatePressedItem(pressed, item) {
    this.pressedItem = pressed ? item : null;
  }
};
TuiPrimitiveYearPickerComponent.ɵfac = function TuiPrimitiveYearPickerComponent_Factory(t) {
  return new (t || TuiPrimitiveYearPickerComponent)();
};
TuiPrimitiveYearPickerComponent.ɵcmp = ɵɵdefineComponent({
  type: TuiPrimitiveYearPickerComponent,
  selectors: [["tui-primitive-year-picker"]],
  hostVars: 2,
  hostBindings: function TuiPrimitiveYearPickerComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("_single", ctx.isSingle);
    }
  },
  inputs: {
    value: "value",
    initialItem: "initialItem",
    min: "min",
    max: "max",
    disabledItemHandler: "disabledItemHandler"
  },
  outputs: {
    yearClick: "yearClick"
  },
  decls: 1,
  vars: 1,
  consts: [["automation-id", "tui-primitive-year-picker__row", "class", "t-row", 4, "tuiRepeatTimes", "tuiRepeatTimesOf"], ["automation-id", "tui-primitive-year-picker__row", 1, "t-row"], [4, "tuiRepeatTimes", "tuiRepeatTimesOf"], ["automation-id", "tui-primitive-year-picker__cell", "class", "t-cell", 3, "t-cell_interval", "t-cell_today", "tuiScrollIntoView", "click", "tuiHoveredChange", "tuiPressedChange", 4, "tuiLet"], ["automation-id", "tui-primitive-year-picker__cell", 1, "t-cell", 3, "tuiScrollIntoView", "click", "tuiHoveredChange", "tuiPressedChange"], [1, "t-item"]],
  template: function TuiPrimitiveYearPickerComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, TuiPrimitiveYearPickerComponent_div_0_Template, 2, 1, "div", 0);
    }
    if (rf & 2) {
      ɵɵproperty("tuiRepeatTimesOf", ctx.rows);
    }
  },
  dependencies: [TuiRepeatTimesDirective, TuiLetDirective, TuiScrollIntoViewDirective, TuiHoveredDirective, TuiPressedDirective],
  styles: ['[_nghost-%COMP%]{display:block;font:var(--tui-font-text-m)}.t-row[_ngcontent-%COMP%]{position:relative;display:flex;justify-content:space-between;height:2.25rem;isolation:isolate}.t-item[_ngcontent-%COMP%]{position:relative;flex:1;line-height:2rem;border-radius:var(--tui-radius-m)}.t-item[_ngcontent-%COMP%]:before, .t-item[_ngcontent-%COMP%]:after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;z-index:-1;border-radius:var(--tui-radius-m)}.t-item[_ngcontent-%COMP%]:after{border-radius:.5rem}.t-cell[_ngcontent-%COMP%]{position:relative;display:flex;align-items:center;justify-content:center;width:3.9375rem;text-align:center;outline:none;cursor:pointer;background-clip:content-box;box-sizing:border-box;border:.125rem solid transparent}.t-cell[_ngcontent-%COMP%]:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;z-index:-1;border-radius:var(--tui-radius-m)}.t-cell_today[_ngcontent-%COMP%]:after{position:absolute;left:50%;transform:translate(-50%);content:"";bottom:.3125rem;height:.125rem;width:.75rem;border-radius:.375rem;background-color:var(--tui-text-01)}.t-cell_interval[_ngcontent-%COMP%]:before{background:var(--tui-base-02)}._single[_nghost-%COMP%]   .t-cell_interval[_ngcontent-%COMP%]:before{background:var(--tui-secondary-hover)}.t-cell_interval[_ngcontent-%COMP%]:not(:last-child):before{right:-.25rem;border-top-right-radius:0;border-bottom-right-radius:0}.t-cell_interval[_ngcontent-%COMP%]:not([data-range="start"]):not(:first-child):before{border-top-left-radius:0;border-bottom-left-radius:0}.t-cell_interval[_ngcontent-%COMP%]:last-child:first-child:before{right:0}.t-cell_interval[_ngcontent-%COMP%]:first-child > .t-item[_ngcontent-%COMP%]{border-top-left-radius:var(--tui-radius-m);border-bottom-left-radius:var(--tui-radius-m)}.t-cell_interval[_ngcontent-%COMP%]:last-child > .t-item[_ngcontent-%COMP%]{border-top-right-radius:var(--tui-radius-m);border-bottom-right-radius:var(--tui-radius-m)}.t-cell_interval[_ngcontent-%COMP%] > .t-item[_ngcontent-%COMP%]{border-radius:0}.t-cell[data-range][_ngcontent-%COMP%]:after{background-color:var(--tui-primary-text)}.t-cell[data-range][_ngcontent-%COMP%] > .t-item[_ngcontent-%COMP%]{color:var(--tui-primary-text)}.t-cell[data-range][_ngcontent-%COMP%] > .t-item[_ngcontent-%COMP%]:before, .t-cell[data-range][_ngcontent-%COMP%] > .t-item[_ngcontent-%COMP%]:after{background-color:var(--tui-primary)}.t-cell[data-range][data-state=hover][_ngcontent-%COMP%] > .t-item[_ngcontent-%COMP%]:before, .t-cell[data-range][data-state=hover][_ngcontent-%COMP%] > .t-item[_ngcontent-%COMP%]:after{background-color:var(--tui-primary-hover)}.t-cell[data-range][data-state=active][_ngcontent-%COMP%] > .t-item[_ngcontent-%COMP%]:before, .t-cell[data-range][data-state=active][_ngcontent-%COMP%] > .t-item[_ngcontent-%COMP%]:after{background-color:var(--tui-primary-active)}.t-cell[data-range=end][_ngcontent-%COMP%]:before{background:var(--tui-base-02)}._single[_nghost-%COMP%]   .t-cell[data-range=end][_ngcontent-%COMP%]:before{background:var(--tui-secondary-hover)}.t-cell[data-range=end][_ngcontent-%COMP%]:not(:first-child):before{border-top-left-radius:0;border-bottom-left-radius:0}.t-cell[data-range=end][_ngcontent-%COMP%] > .t-item[_ngcontent-%COMP%]:before{left:.625rem;border-top-left-radius:0;border-bottom-left-radius:0}.t-cell[data-range=end][_ngcontent-%COMP%] > .t-item[_ngcontent-%COMP%]:after{left:-2rem;right:100%;transform:translate(1.6rem) scaleY(.83) scaleX(.5) rotate(45deg)}.t-cell[data-range=start][_ngcontent-%COMP%] > .t-item[_ngcontent-%COMP%]:before{right:.625rem;border-top-right-radius:0;border-bottom-right-radius:0}.t-cell[data-range=start][_ngcontent-%COMP%] > .t-item[_ngcontent-%COMP%]:after{left:100%;right:-2rem;transform:translate(-1.6rem) scaleY(.83) scaleX(.5) rotate(45deg)}.t-cell[data-range=single][_ngcontent-%COMP%] > .t-item[_ngcontent-%COMP%]:after{display:none}.t-cell[data-state=disabled][_ngcontent-%COMP%]{pointer-events:none}.t-cell[data-state=disabled][_ngcontent-%COMP%] > .t-item[_ngcontent-%COMP%]{opacity:.36}.t-cell[data-state=hover][_ngcontent-%COMP%]:hover:not([data-range]) > .t-item[_ngcontent-%COMP%]{background-color:var(--tui-secondary-hover)}.t-cell[data-state=active][_ngcontent-%COMP%]:hover:not([data-range]) > .t-item[_ngcontent-%COMP%]{background-color:var(--tui-secondary-active)}[_nghost-%COMP%]{width:15.75rem}.t-row[_ngcontent-%COMP%]{margin:.875rem 0}.t-row[_ngcontent-%COMP%]:first-child{margin-top:0}.t-row[_ngcontent-%COMP%]:last-child{margin-bottom:0}'],
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiPrimitiveYearPickerComponent, [{
    type: Component,
    args: [{
      selector: "tui-primitive-year-picker",
      templateUrl: "./primitive-year-picker.template.html",
      styleUrls: ["./primitive-year-picker.style.less"],
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], null, {
    value: [{
      type: Input
    }],
    initialItem: [{
      type: Input
    }],
    min: [{
      type: Input
    }],
    max: [{
      type: Input
    }],
    disabledItemHandler: [{
      type: Input
    }],
    yearClick: [{
      type: Output
    }],
    isSingle: [{
      type: HostBinding,
      args: ["class._single"]
    }]
  });
})();
var TuiPrimitiveYearPickerModule = class {
};
TuiPrimitiveYearPickerModule.ɵfac = function TuiPrimitiveYearPickerModule_Factory(t) {
  return new (t || TuiPrimitiveYearPickerModule)();
};
TuiPrimitiveYearPickerModule.ɵmod = ɵɵdefineNgModule({
  type: TuiPrimitiveYearPickerModule,
  declarations: [TuiPrimitiveYearPickerComponent],
  imports: [TuiHoveredModule, TuiPressedModule, TuiRepeatTimesModule, TuiLetModule, TuiScrollIntoViewModule],
  exports: [TuiPrimitiveYearPickerComponent]
});
TuiPrimitiveYearPickerModule.ɵinj = ɵɵdefineInjector({
  imports: [[TuiHoveredModule, TuiPressedModule, TuiRepeatTimesModule, TuiLetModule, TuiScrollIntoViewModule]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiPrimitiveYearPickerModule, [{
    type: NgModule,
    args: [{
      imports: [TuiHoveredModule, TuiPressedModule, TuiRepeatTimesModule, TuiLetModule, TuiScrollIntoViewModule],
      declarations: [TuiPrimitiveYearPickerComponent],
      exports: [TuiPrimitiveYearPickerComponent]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/core/fesm2015/taiga-ui-core-components-primitive-spin-button.js
function TuiPrimitiveSpinButtonComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "button", 1);
    ɵɵlistener("click", function TuiPrimitiveSpinButtonComponent_ng_container_0_Template_button_click_1_listener() {
      ɵɵrestoreView(_r3);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onLeftClick());
    });
    ɵɵelementEnd();
    ɵɵelementStart(2, "span", 2);
    ɵɵprojection(3);
    ɵɵelementEnd();
    ɵɵelementStart(4, "button", 3);
    ɵɵlistener("click", function TuiPrimitiveSpinButtonComponent_ng_container_0_Template_button_click_4_listener() {
      ɵɵrestoreView(_r3);
      const ctx_r4 = ɵɵnextContext();
      return ɵɵresetView(ctx_r4.onRightClick());
    });
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const texts_r1 = ctx.ngIf;
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵclassProp("t-hidden", ctx_r0.leftComputedDisabled);
    ɵɵproperty("focusable", ctx_r0.computedFocusable)("icon", ctx_r0.icons.decrement)("title", texts_r1[0]);
    ɵɵadvance(3);
    ɵɵclassProp("t-hidden", ctx_r0.rightComputedDisabled);
    ɵɵproperty("focusable", ctx_r0.computedFocusable)("icon", ctx_r0.icons.increment)("title", texts_r1[1]);
  }
}
var _c09 = ["*"];
var TuiPrimitiveSpinButtonComponent = class extends AbstractTuiInteractive {
  constructor(el, icons, spinTexts$) {
    super();
    this.el = el;
    this.icons = icons;
    this.spinTexts$ = spinTexts$;
    this.disabled = false;
    this.leftDisabled = false;
    this.rightDisabled = false;
    this.leftClick = new EventEmitter();
    this.rightClick = new EventEmitter();
  }
  get focused() {
    return tuiIsNativeFocusedIn(this.el.nativeElement);
  }
  get leftComputedDisabled() {
    return this.computedDisabled || this.leftDisabled;
  }
  get rightComputedDisabled() {
    return this.computedDisabled || this.rightDisabled;
  }
  onLeftClick() {
    if (!this.leftComputedDisabled) {
      this.leftClick.emit();
    }
  }
  onRightClick() {
    if (!this.rightComputedDisabled) {
      this.rightClick.emit();
    }
  }
  onFocused(focused) {
    this.updateFocused(focused);
  }
  onFocusVisible(focusVisible) {
    this.updateFocusVisible(focusVisible);
  }
};
TuiPrimitiveSpinButtonComponent.ɵfac = function TuiPrimitiveSpinButtonComponent_Factory(t) {
  return new (t || TuiPrimitiveSpinButtonComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(TUI_SPIN_ICONS), ɵɵdirectiveInject(TUI_SPIN_TEXTS));
};
TuiPrimitiveSpinButtonComponent.ɵcmp = ɵɵdefineComponent({
  type: TuiPrimitiveSpinButtonComponent,
  selectors: [["tui-primitive-spin-button"]],
  hostBindings: function TuiPrimitiveSpinButtonComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("mousedown.silent.prevent", function TuiPrimitiveSpinButtonComponent_mousedown_silent_prevent_HostBindingHandler() {
        return 0;
      })("keydown.arrowLeft.prevent", function TuiPrimitiveSpinButtonComponent_keydown_arrowLeft_prevent_HostBindingHandler() {
        return ctx.onLeftClick();
      })("keydown.arrowRight.prevent", function TuiPrimitiveSpinButtonComponent_keydown_arrowRight_prevent_HostBindingHandler() {
        return ctx.onRightClick();
      })("focusin", function TuiPrimitiveSpinButtonComponent_focusin_HostBindingHandler() {
        return ctx.onFocused(true);
      })("focusout", function TuiPrimitiveSpinButtonComponent_focusout_HostBindingHandler() {
        return ctx.onFocused(false);
      });
    }
  },
  inputs: {
    disabled: "disabled",
    leftDisabled: "leftDisabled",
    rightDisabled: "rightDisabled"
  },
  outputs: {
    leftClick: "leftClick",
    rightClick: "rightClick"
  },
  features: [ɵɵInheritDefinitionFeature],
  ngContentSelectors: _c09,
  decls: 2,
  vars: 3,
  consts: [[4, "ngIf"], ["appearance", "flat", "automation-id", "tui-primitive-spin-button__left", "size", "xs", "tuiIconButton", "", "type", "button", 3, "focusable", "icon", "title", "click"], [1, "t-content", "t-calendar-title"], ["appearance", "flat", "automation-id", "tui-primitive-spin-button__right", "size", "xs", "tuiIconButton", "", "type", "button", 3, "focusable", "icon", "title", "click"]],
  template: function TuiPrimitiveSpinButtonComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵtemplate(0, TuiPrimitiveSpinButtonComponent_ng_container_0_Template, 5, 10, "ng-container", 0);
      ɵɵpipe(1, "async");
    }
    if (rf & 2) {
      ɵɵproperty("ngIf", ɵɵpipeBind1(1, 1, ctx.spinTexts$));
    }
  },
  dependencies: [TuiButtonComponent, NgIf, AsyncPipe],
  styles: ["[_nghost-%COMP%]{display:flex;align-items:center;justify-content:space-between;font:var(--tui-font-text-l);text-align:center;font-weight:bold}.t-hidden[_ngcontent-%COMP%]{visibility:hidden}.t-content[_ngcontent-%COMP%]{padding:0 .5rem}"],
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiPrimitiveSpinButtonComponent, [{
    type: Component,
    args: [{
      selector: "tui-primitive-spin-button",
      templateUrl: "./primitive-spin-button.template.html",
      styleUrls: ["./primitive-spin-button.style.less"],
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "(mousedown.silent.prevent)": "(0)"
      }
    }]
  }], function() {
    return [{
      type: ElementRef,
      decorators: [{
        type: Inject,
        args: [ElementRef]
      }]
    }, {
      type: void 0,
      decorators: [{
        type: Inject,
        args: [TUI_SPIN_ICONS]
      }]
    }, {
      type: Observable,
      decorators: [{
        type: Inject,
        args: [TUI_SPIN_TEXTS]
      }]
    }];
  }, {
    disabled: [{
      type: Input
    }],
    leftDisabled: [{
      type: Input
    }],
    rightDisabled: [{
      type: Input
    }],
    leftClick: [{
      type: Output
    }],
    rightClick: [{
      type: Output
    }],
    onLeftClick: [{
      type: HostListener,
      args: ["keydown.arrowLeft.prevent"]
    }],
    onRightClick: [{
      type: HostListener,
      args: ["keydown.arrowRight.prevent"]
    }],
    onFocused: [{
      type: HostListener,
      args: ["focusin", ["true"]]
    }, {
      type: HostListener,
      args: ["focusout", ["false"]]
    }]
  });
})();
var TuiPrimitiveSpinButtonModule = class {
};
TuiPrimitiveSpinButtonModule.ɵfac = function TuiPrimitiveSpinButtonModule_Factory(t) {
  return new (t || TuiPrimitiveSpinButtonModule)();
};
TuiPrimitiveSpinButtonModule.ɵmod = ɵɵdefineNgModule({
  type: TuiPrimitiveSpinButtonModule,
  declarations: [TuiPrimitiveSpinButtonComponent],
  imports: [CommonModule, TuiButtonModule],
  exports: [TuiPrimitiveSpinButtonComponent]
});
TuiPrimitiveSpinButtonModule.ɵinj = ɵɵdefineInjector({
  imports: [[CommonModule, TuiButtonModule]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiPrimitiveSpinButtonModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, TuiButtonModule],
      declarations: [TuiPrimitiveSpinButtonComponent],
      exports: [TuiPrimitiveSpinButtonComponent]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/core/fesm2015/taiga-ui-core-components-link.js
var _c010 = ["tuiLink", ""];
function TuiLinkComponent_tui_svg_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "tui-svg", 3);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("src", ctx_r0.icon || "");
  }
}
function TuiLinkComponent_tui_svg_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "tui-svg", 4);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("src", ctx_r1.icon || "");
  }
}
var _c13 = ["*"];
var TuiLinkComponent = class {
  constructor(el, mode$, focusVisible$) {
    this.el = el;
    this.mode$ = mode$;
    this.pseudo = false;
    this.icon = "";
    this.iconAlign = "right";
    this.iconRotated = false;
    this.mode = null;
    this.focusVisible = false;
    this.focusedChange = merge(tuiTypedFromEvent(this.el.nativeElement, "focusin").pipe(map(ALWAYS_TRUE_HANDLER)), tuiTypedFromEvent(this.el.nativeElement, "focusout").pipe(map(ALWAYS_FALSE_HANDLER)));
    focusVisible$.subscribe((visible) => {
      this.focusVisible = visible;
    });
  }
  get nativeFocusableElement() {
    return this.el.nativeElement;
  }
  get focused() {
    return tuiIsNativeFocused(this.nativeFocusableElement);
  }
  get hasIcon() {
    return !!this.icon;
  }
  get iconAlignLeft() {
    return this.hasIcon && this.iconAlign === "left";
  }
  get iconAlignRight() {
    return this.hasIcon && this.iconAlign === "right";
  }
};
TuiLinkComponent.ɵfac = function TuiLinkComponent_Factory(t) {
  return new (t || TuiLinkComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(TUI_MODE), ɵɵdirectiveInject(TuiFocusVisibleService));
};
TuiLinkComponent.ɵcmp = ɵɵdefineComponent({
  type: TuiLinkComponent,
  selectors: [["a", "tuiLink", ""], ["button", "tuiLink", ""]],
  hostVars: 7,
  hostBindings: function TuiLinkComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("$.data-mode.attr", function TuiLinkComponent___data_mode_attr_HostBindingHandler() {
        return ctx.mode$;
      });
    }
    if (rf & 2) {
      ɵɵattribute("data-host-mode", ctx.mode);
      ɵɵclassProp("_pseudo", ctx.pseudo)("_icon-rotated", ctx.iconRotated)("_focus-visible", ctx.focusVisible);
    }
  },
  inputs: {
    pseudo: "pseudo",
    icon: "icon",
    iconAlign: "iconAlign",
    iconRotated: "iconRotated",
    mode: "mode"
  },
  exportAs: ["tuiLink"],
  features: [ɵɵProvidersFeature([tuiAsFocusableItemAccessor(TuiLinkComponent), TuiFocusVisibleService, TuiDestroyService, MODE_PROVIDER])],
  attrs: _c010,
  ngContentSelectors: _c13,
  decls: 4,
  vars: 2,
  consts: [["class", "t-icon t-icon_left", 3, "src", 4, "ngIf"], [1, "t-content"], ["class", "t-icon t-icon_right", 3, "src", 4, "ngIf"], [1, "t-icon", "t-icon_left", 3, "src"], [1, "t-icon", "t-icon_right", 3, "src"]],
  template: function TuiLinkComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵtemplate(0, TuiLinkComponent_tui_svg_0_Template, 1, 1, "tui-svg", 0);
      ɵɵelementStart(1, "span", 1);
      ɵɵprojection(2);
      ɵɵelementEnd();
      ɵɵtemplate(3, TuiLinkComponent_tui_svg_3_Template, 1, 1, "tui-svg", 2);
    }
    if (rf & 2) {
      ɵɵproperty("ngIf", ctx.iconAlignLeft);
      ɵɵadvance(3);
      ɵɵproperty("ngIf", ctx.iconAlignRight);
    }
  },
  dependencies: [TuiSvgComponent, NgIf],
  styles: ["[_nghost-%COMP%]{-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:0;border:0;background:none;font-size:inherit;line-height:inherit;text-decoration:none;transition-property:color;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;color:var(--tui-link);text-align:left;text-transform:inherit;font-weight:inherit;cursor:pointer;outline:none}[_nghost-%COMP%]:hover{color:var(--tui-link-hover)}[_nghost-%COMP%]:disabled{opacity:var(--tui-disabled-opacity);cursor:default}[data-mode=onLight][_nghost-%COMP%]{color:var(--tui-text-02)}[data-mode=onLight][_nghost-%COMP%]:hover, [data-mode=onLight]._active[_nghost-%COMP%]{color:var(--tui-text-01)}[data-mode=onLight]._pseudo[_nghost-%COMP%]{color:var(--tui-text-01)}[data-mode=onLight]._pseudo[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{-webkit-text-decoration-color:rgba(0,0,0,.48);text-decoration-color:#0000007a}[data-mode=onLight]._pseudo[_nghost-%COMP%]:hover, [data-mode=onLight]._pseudo._active[_nghost-%COMP%]{color:var(--tui-text-03)}[data-mode=onLight][data-host-mode=negative][_nghost-%COMP%]{color:var(--tui-negative-night)}[data-mode=onLight][data-host-mode=negative][_nghost-%COMP%]:hover, [data-mode=onLight][data-host-mode=negative][_nghost-%COMP%]:active, [data-mode=onLight][data-host-mode=negative]._active[_nghost-%COMP%]{color:var(--tui-negative-night-hover)}[data-mode=onDark][_nghost-%COMP%]{color:var(--tui-text-03-night)}[data-mode=onDark][_nghost-%COMP%]:hover, [data-mode=onDark][_nghost-%COMP%]:active, [data-mode=onDark]._active[_nghost-%COMP%]{color:var(--tui-text-01-night)}[data-mode=onDark]._pseudo[_nghost-%COMP%]{color:var(--tui-text-01-night)}[data-mode=onDark]._pseudo[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{-webkit-text-decoration-color:rgba(255,255,255,.48);text-decoration-color:#ffffff7a}[data-mode=onDark]._pseudo[_nghost-%COMP%]:hover, [data-mode=onDark]._pseudo[_nghost-%COMP%]:active, [data-mode=onDark]._pseudo._active[_nghost-%COMP%]{color:var(--tui-text-03-night)}[data-mode=onDark][data-host-mode=positive][_nghost-%COMP%]{color:var(--tui-positive-night)}[data-mode=onDark][data-host-mode=positive][_nghost-%COMP%]:hover, [data-mode=onDark][data-host-mode=positive][_nghost-%COMP%]:active, [data-mode=onDark][data-host-mode=positive]._active[_nghost-%COMP%]{color:var(--tui-positive-night-hover)}[data-host-mode=negative][_nghost-%COMP%]{color:var(--tui-negative)}[data-host-mode=negative][_nghost-%COMP%]:hover{color:var(--tui-negative-hover)}[data-host-mode=negative]._pseudo[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{-webkit-text-decoration-color:rgba(222,76,30,.48);text-decoration-color:#de4c1e7a}[data-host-mode=positive][_nghost-%COMP%]{color:var(--tui-positive)}[data-host-mode=positive][_nghost-%COMP%]:hover{color:var(--tui-positive-hover)}[data-host-mode=positive]._pseudo[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{-webkit-text-decoration-color:rgba(58,169,129,.48);text-decoration-color:#3aa9817a}._focus-visible[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{background:var(--tui-selection)}[data-mode=onLight]._focus-visible[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{background:var(--tui-clear);color:var(--tui-text-01)}[data-mode=onDark]._focus-visible[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{background:var(--tui-clear-inverse);color:var(--tui-text-01-night)}[data-host-mode=positive]._focus-visible[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{background:var(--tui-success-bg)}[data-host-mode=negative]._focus-visible[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{background:var(--tui-error-bg)}._pseudo[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{padding-bottom:.15em;-webkit-text-decoration:underline dashed rgba(51,111,238,.48);text-decoration:underline dashed rgba(51,111,238,.48);text-underline-offset:.2em;text-decoration-thickness:.7px}.t-icon[_ngcontent-%COMP%]{transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;width:var(--tui-link-icon-size, 1.5rem);height:var(--tui-link-icon-size, 1.5rem);margin-top:-.125rem}.t-icon_left[_ngcontent-%COMP%]{margin-right:.25rem}.t-icon_right[_ngcontent-%COMP%]{margin-left:.25rem}._icon-rotated[_nghost-%COMP%]   .t-icon[_ngcontent-%COMP%]{transform:rotate(180deg)}"],
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiLinkComponent, [{
    type: Component,
    args: [{
      selector: "a[tuiLink], button[tuiLink]",
      templateUrl: "./link.template.html",
      styleUrls: ["./link.style.less"],
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [tuiAsFocusableItemAccessor(TuiLinkComponent), TuiFocusVisibleService, TuiDestroyService, MODE_PROVIDER],
      host: {
        "($.data-mode.attr)": "mode$"
      },
      exportAs: "tuiLink"
    }]
  }], function() {
    return [{
      type: ElementRef,
      decorators: [{
        type: Inject,
        args: [ElementRef]
      }]
    }, {
      type: Observable,
      decorators: [{
        type: Inject,
        args: [TUI_MODE]
      }]
    }, {
      type: TuiFocusVisibleService,
      decorators: [{
        type: Inject,
        args: [TuiFocusVisibleService]
      }]
    }];
  }, {
    pseudo: [{
      type: Input
    }, {
      type: HostBinding,
      args: ["class._pseudo"]
    }],
    icon: [{
      type: Input
    }],
    iconAlign: [{
      type: Input
    }],
    iconRotated: [{
      type: Input
    }, {
      type: HostBinding,
      args: ["class._icon-rotated"]
    }],
    mode: [{
      type: Input
    }, {
      type: HostBinding,
      args: ["attr.data-host-mode"]
    }],
    focusVisible: [{
      type: HostBinding,
      args: ["class._focus-visible"]
    }]
  });
})();
var TuiLinkModule = class {
};
TuiLinkModule.ɵfac = function TuiLinkModule_Factory(t) {
  return new (t || TuiLinkModule)();
};
TuiLinkModule.ɵmod = ɵɵdefineNgModule({
  type: TuiLinkModule,
  declarations: [TuiLinkComponent],
  imports: [CommonModule, TuiSvgModule],
  exports: [TuiLinkComponent]
});
TuiLinkModule.ɵinj = ɵɵdefineInjector({
  imports: [[CommonModule, TuiSvgModule]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiLinkModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, TuiSvgModule],
      declarations: [TuiLinkComponent],
      exports: [TuiLinkComponent]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/core/fesm2015/taiga-ui-core-pipes-calendar-sheet.js
var getMonthStartDaysOffset = (month, firstDayOfWeek) => {
  const startMonthOffsetFromSunday = new Date(month.year, month.month, 1).getDay();
  return startMonthOffsetFromSunday >= firstDayOfWeek ? startMonthOffsetFromSunday - firstDayOfWeek : DAYS_IN_WEEK - (firstDayOfWeek - startMonthOffsetFromSunday);
};
var getDayFromMonthRowCol = ({
  month,
  rowIndex,
  colIndex,
  firstDayOfWeek
}) => {
  ngDevMode && tuiAssert.assert(Number.isInteger(rowIndex));
  ngDevMode && tuiAssert.assert(tuiInRange(rowIndex, 0, 6));
  ngDevMode && tuiAssert.assert(Number.isInteger(colIndex));
  ngDevMode && tuiAssert.assert(tuiInRange(colIndex, 0, DAYS_IN_WEEK));
  let day = rowIndex * DAYS_IN_WEEK + colIndex - getMonthStartDaysOffset(month, firstDayOfWeek) + 1;
  if (day > month.daysCount) {
    day -= month.daysCount;
    month = month.append({
      month: 1
    });
  }
  if (day <= 0) {
    month = month.append({
      month: -1
    });
    day = month.daysCount + day;
  }
  return new TuiDay(month.year, month.month, day);
};
var CALENDAR_ROWS_COUNT = 6;
var TuiCalendarSheetPipe = class {
  constructor(firstDayOfWeek) {
    this.firstDayOfWeek = firstDayOfWeek;
    this.currentMonth = null;
    this.currentSheet = [];
  }
  transform(month, showAdjacentDays = false) {
    var _a;
    if ((_a = this.currentMonth) === null || _a === void 0 ? void 0 : _a.monthSame(month)) {
      return this.currentSheet;
    }
    const sheet = [];
    for (let rowIndex = 0; rowIndex < CALENDAR_ROWS_COUNT; rowIndex++) {
      const row = [];
      for (let colIndex = 0; colIndex < DAYS_IN_WEEK; colIndex++) {
        const day = getDayFromMonthRowCol({
          month,
          rowIndex,
          colIndex,
          firstDayOfWeek: this.firstDayOfWeek
        });
        const isPrevMonthDay = (day2, relativeToMonth = month) => day2.year < relativeToMonth.year || day2.month < relativeToMonth.month;
        const isNextMonthDay = (day2, relativeToMonth = month) => day2.year > relativeToMonth.year || day2.month > relativeToMonth.month;
        if (isPrevMonthDay(day) && !showAdjacentDays) {
          continue;
        }
        if (isNextMonthDay(day) && !showAdjacentDays) {
          break;
        }
        row.push(day);
      }
      sheet.push(row);
    }
    this.currentSheet = sheet.filter((row) => row.length);
    this.currentMonth = month;
    return this.currentSheet;
  }
};
TuiCalendarSheetPipe.ɵfac = function TuiCalendarSheetPipe_Factory(t) {
  return new (t || TuiCalendarSheetPipe)(ɵɵdirectiveInject(TUI_FIRST_DAY_OF_WEEK, 16));
};
TuiCalendarSheetPipe.ɵpipe = ɵɵdefinePipe({
  name: "tuiCalendarSheet",
  type: TuiCalendarSheetPipe,
  pure: true
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiCalendarSheetPipe, [{
    type: Pipe,
    args: [{
      name: "tuiCalendarSheet"
    }]
  }], function() {
    return [{
      type: TuiDayOfWeek,
      decorators: [{
        type: Inject,
        args: [TUI_FIRST_DAY_OF_WEEK]
      }]
    }];
  }, null);
})();
var TuiCalendarSheetPipeModule = class {
};
TuiCalendarSheetPipeModule.ɵfac = function TuiCalendarSheetPipeModule_Factory(t) {
  return new (t || TuiCalendarSheetPipeModule)();
};
TuiCalendarSheetPipeModule.ɵmod = ɵɵdefineNgModule({
  type: TuiCalendarSheetPipeModule,
  declarations: [TuiCalendarSheetPipe],
  exports: [TuiCalendarSheetPipe]
});
TuiCalendarSheetPipeModule.ɵinj = ɵɵdefineInjector({});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiCalendarSheetPipeModule, [{
    type: NgModule,
    args: [{
      declarations: [TuiCalendarSheetPipe],
      exports: [TuiCalendarSheetPipe]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/core/fesm2015/taiga-ui-core-pipes-flag.js
var TuiFlagPipe = class {
  constructor(svgOptions) {
    this.svgOptions = svgOptions;
    this.staticPath = this.svgOptions.path("tuiIcon").replace("tuiIcon.svg#tuiIcon", "").replace(`tuiIcon.svg${TUI_CACHE_BUSTING_PAYLOAD}#tuiIcon`, "");
  }
  transform(countryIsoCode) {
    if (!countryIsoCode) {
      return null;
    }
    switch (countryIsoCode) {
      case TuiCountryIsoCode.BL:
      case TuiCountryIsoCode.BQ:
      case TuiCountryIsoCode.CW:
      case TuiCountryIsoCode.GF:
      case TuiCountryIsoCode.GP:
      case TuiCountryIsoCode.MF:
      case TuiCountryIsoCode.MQ:
      case TuiCountryIsoCode.NC:
      case TuiCountryIsoCode.RE:
      case TuiCountryIsoCode.YT:
        return `${this.staticPath}${TuiCountryIsoCode.FR}.png`;
      case TuiCountryIsoCode.SX:
        return `${this.staticPath}${TuiCountryIsoCode.NL}.png`;
      default:
        return `${this.staticPath}${countryIsoCode}.png`;
    }
  }
};
TuiFlagPipe.ɵfac = function TuiFlagPipe_Factory(t) {
  return new (t || TuiFlagPipe)(ɵɵdirectiveInject(TUI_SVG_OPTIONS, 16));
};
TuiFlagPipe.ɵpipe = ɵɵdefinePipe({
  name: "tuiFlag",
  type: TuiFlagPipe,
  pure: true
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiFlagPipe, [{
    type: Pipe,
    args: [{
      name: "tuiFlag"
    }]
  }], function() {
    return [{
      type: void 0,
      decorators: [{
        type: Inject,
        args: [TUI_SVG_OPTIONS]
      }]
    }];
  }, null);
})();
var TuiFlagPipeModule = class {
};
TuiFlagPipeModule.ɵfac = function TuiFlagPipeModule_Factory(t) {
  return new (t || TuiFlagPipeModule)();
};
TuiFlagPipeModule.ɵmod = ɵɵdefineNgModule({
  type: TuiFlagPipeModule,
  declarations: [TuiFlagPipe],
  exports: [TuiFlagPipe]
});
TuiFlagPipeModule.ɵinj = ɵɵdefineInjector({});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiFlagPipeModule, [{
    type: NgModule,
    args: [{
      declarations: [TuiFlagPipe],
      exports: [TuiFlagPipe]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/core/fesm2015/taiga-ui-core-pipes-format-date.js
var TuiFormatDatePipe = class {
  constructor(service) {
    this.service = service;
  }
  transform(timestampOrDate) {
    return this.service.format(timestampOrDate.valueOf());
  }
};
TuiFormatDatePipe.ɵfac = function TuiFormatDatePipe_Factory(t) {
  return new (t || TuiFormatDatePipe)(ɵɵdirectiveInject(TuiFormatDateService, 16));
};
TuiFormatDatePipe.ɵpipe = ɵɵdefinePipe({
  name: "tuiFormatDate",
  type: TuiFormatDatePipe,
  pure: true
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiFormatDatePipe, [{
    type: Pipe,
    args: [{
      name: "tuiFormatDate"
    }]
  }], function() {
    return [{
      type: TuiFormatDateService,
      decorators: [{
        type: Inject,
        args: [TuiFormatDateService]
      }]
    }];
  }, null);
})();
var TuiFormatDatePipeModule = class {
};
TuiFormatDatePipeModule.ɵfac = function TuiFormatDatePipeModule_Factory(t) {
  return new (t || TuiFormatDatePipeModule)();
};
TuiFormatDatePipeModule.ɵmod = ɵɵdefineNgModule({
  type: TuiFormatDatePipeModule,
  declarations: [TuiFormatDatePipe],
  exports: [TuiFormatDatePipe]
});
TuiFormatDatePipeModule.ɵinj = ɵɵdefineInjector({});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiFormatDatePipeModule, [{
    type: NgModule,
    args: [{
      declarations: [TuiFormatDatePipe],
      exports: [TuiFormatDatePipe]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/core/fesm2015/taiga-ui-core-pipes-format-number.js
var TuiFormatNumberPipe = class {
  constructor(numberFormat) {
    this.numberFormat = numberFormat;
  }
  /**
   * Formats number adding thousand separators and correct decimal separator
   * padding decimal part with zeroes to given length
   * @param value number
   * @param settings See {@link TuiNumberFormatSettings}
   */
  transform(value, settings = {}) {
    return tuiFormatNumber(value, Object.assign(Object.assign({}, this.numberFormat), settings));
  }
};
TuiFormatNumberPipe.ɵfac = function TuiFormatNumberPipe_Factory(t) {
  return new (t || TuiFormatNumberPipe)(ɵɵdirectiveInject(TUI_NUMBER_FORMAT, 16));
};
TuiFormatNumberPipe.ɵpipe = ɵɵdefinePipe({
  name: "tuiFormatNumber",
  type: TuiFormatNumberPipe,
  pure: true
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiFormatNumberPipe, [{
    type: Pipe,
    args: [{
      name: "tuiFormatNumber"
    }]
  }], function() {
    return [{
      type: void 0,
      decorators: [{
        type: Inject,
        args: [TUI_NUMBER_FORMAT]
      }]
    }];
  }, null);
})();
var TuiFormatNumberPipeModule = class {
};
TuiFormatNumberPipeModule.ɵfac = function TuiFormatNumberPipeModule_Factory(t) {
  return new (t || TuiFormatNumberPipeModule)();
};
TuiFormatNumberPipeModule.ɵmod = ɵɵdefineNgModule({
  type: TuiFormatNumberPipeModule,
  declarations: [TuiFormatNumberPipe],
  exports: [TuiFormatNumberPipe]
});
TuiFormatNumberPipeModule.ɵinj = ɵɵdefineInjector({});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiFormatNumberPipeModule, [{
    type: NgModule,
    args: [{
      declarations: [TuiFormatNumberPipe],
      exports: [TuiFormatNumberPipe]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/core/fesm2015/taiga-ui-core-pipes-format-phone.js
var TuiFormatPhonePipe = class {
  /**
   * Formats phone number string of +7XXXXXXXXXX format with adding separator symbols
   * @param value
   * @param countryCode
   * @param phoneMask
   * @return formatted phone number string +7(XXX)XXX-XX-XX
   */
  transform(value, countryCode = `${CHAR_PLUS}7`, phoneMask = "(###) ###-##-##") {
    ngDevMode && tuiAssert.assert(value !== void 0, "Undefined was passed to tuiFormatPhone pipe");
    return tuiFormatPhone(value, countryCode, phoneMask);
  }
};
TuiFormatPhonePipe.ɵfac = function TuiFormatPhonePipe_Factory(t) {
  return new (t || TuiFormatPhonePipe)();
};
TuiFormatPhonePipe.ɵpipe = ɵɵdefinePipe({
  name: "tuiFormatPhone",
  type: TuiFormatPhonePipe,
  pure: true
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiFormatPhonePipe, [{
    type: Pipe,
    args: [{
      name: "tuiFormatPhone"
    }]
  }], null, null);
})();
var TuiFormatPhonePipeModule = class {
};
TuiFormatPhonePipeModule.ɵfac = function TuiFormatPhonePipeModule_Factory(t) {
  return new (t || TuiFormatPhonePipeModule)();
};
TuiFormatPhonePipeModule.ɵmod = ɵɵdefineNgModule({
  type: TuiFormatPhonePipeModule,
  declarations: [TuiFormatPhonePipe],
  exports: [TuiFormatPhonePipe]
});
TuiFormatPhonePipeModule.ɵinj = ɵɵdefineInjector({});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiFormatPhonePipeModule, [{
    type: NgModule,
    args: [{
      declarations: [TuiFormatPhonePipe],
      exports: [TuiFormatPhonePipe]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/core/fesm2015/taiga-ui-core-pipes-month.js
var TuiMonthPipe = class {
  constructor(months$) {
    this.months$ = months$;
  }
  transform({
    month
  }) {
    return this.months$.pipe(map((months) => months[month]));
  }
};
TuiMonthPipe.ɵfac = function TuiMonthPipe_Factory(t) {
  return new (t || TuiMonthPipe)(ɵɵdirectiveInject(TUI_MONTHS, 16));
};
TuiMonthPipe.ɵpipe = ɵɵdefinePipe({
  name: "tuiMonth",
  type: TuiMonthPipe,
  pure: true
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiMonthPipe, [{
    type: Pipe,
    args: [{
      name: "tuiMonth"
    }]
  }], function() {
    return [{
      type: Observable,
      decorators: [{
        type: Inject,
        args: [TUI_MONTHS]
      }]
    }];
  }, null);
})();
var TuiMonthPipeModule = class {
};
TuiMonthPipeModule.ɵfac = function TuiMonthPipeModule_Factory(t) {
  return new (t || TuiMonthPipeModule)();
};
TuiMonthPipeModule.ɵmod = ɵɵdefineNgModule({
  type: TuiMonthPipeModule,
  declarations: [TuiMonthPipe],
  exports: [TuiMonthPipe]
});
TuiMonthPipeModule.ɵinj = ɵɵdefineInjector({});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiMonthPipeModule, [{
    type: NgModule,
    args: [{
      declarations: [TuiMonthPipe],
      exports: [TuiMonthPipe]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/core/fesm2015/taiga-ui-core-pipes-order-week-days.js
function convertToSundayFirstWeekFormat2(weekDaysNames) {
  const sundayIndex = weekDaysNames.length - 1;
  return [weekDaysNames[sundayIndex], ...weekDaysNames.slice(0, sundayIndex)];
}
var TuiOrderWeekDaysPipe = class {
  constructor(firstDayOfWeekIndex) {
    this.firstDayOfWeekIndex = firstDayOfWeekIndex;
  }
  transform(mondayFirstWeekDays$) {
    return mondayFirstWeekDays$.pipe(map(convertToSundayFirstWeekFormat2), map((weekDays) => [...weekDays.slice(this.firstDayOfWeekIndex), ...weekDays.slice(0, this.firstDayOfWeekIndex)]));
  }
};
TuiOrderWeekDaysPipe.ɵfac = function TuiOrderWeekDaysPipe_Factory(t) {
  return new (t || TuiOrderWeekDaysPipe)(ɵɵdirectiveInject(TUI_FIRST_DAY_OF_WEEK, 16));
};
TuiOrderWeekDaysPipe.ɵpipe = ɵɵdefinePipe({
  name: "tuiOrderWeekDays",
  type: TuiOrderWeekDaysPipe,
  pure: true
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiOrderWeekDaysPipe, [{
    type: Pipe,
    args: [{
      name: "tuiOrderWeekDays"
    }]
  }], function() {
    return [{
      type: void 0,
      decorators: [{
        type: Inject,
        args: [TUI_FIRST_DAY_OF_WEEK]
      }]
    }];
  }, null);
})();
var TuiOrderWeekDaysPipeModule = class {
};
TuiOrderWeekDaysPipeModule.ɵfac = function TuiOrderWeekDaysPipeModule_Factory(t) {
  return new (t || TuiOrderWeekDaysPipeModule)();
};
TuiOrderWeekDaysPipeModule.ɵmod = ɵɵdefineNgModule({
  type: TuiOrderWeekDaysPipeModule,
  declarations: [TuiOrderWeekDaysPipe],
  exports: [TuiOrderWeekDaysPipe]
});
TuiOrderWeekDaysPipeModule.ɵinj = ɵɵdefineInjector({});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiOrderWeekDaysPipeModule, [{
    type: NgModule,
    args: [{
      declarations: [TuiOrderWeekDaysPipe],
      exports: [TuiOrderWeekDaysPipe]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/core/fesm2015/taiga-ui-core-internal-primitive-year-month-pagination.js
function TuiPrimitiveYearMonthPaginationComponent_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ctx_r0.value.formattedYear, " ");
  }
}
function TuiPrimitiveYearMonthPaginationComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 3);
    ɵɵlistener("click", function TuiPrimitiveYearMonthPaginationComponent_ng_template_5_Template_button_click_0_listener() {
      ɵɵrestoreView(_r4);
      const ctx_r3 = ɵɵnextContext();
      return ɵɵresetView(ctx_r3.onYearClick());
    });
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("tuiFocusable", false);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ctx_r1.value.formattedYear, " ");
  }
}
var TuiPrimitiveYearMonthPaginationComponent = class {
  constructor() {
    this.value = TuiMonth.currentLocal();
    this.min = TUI_FIRST_DAY;
    this.max = TUI_LAST_DAY;
    this.valueChange = new EventEmitter();
    this.yearClick = new EventEmitter();
  }
  get computedMin() {
    var _a;
    return (_a = this.min) !== null && _a !== void 0 ? _a : TUI_FIRST_DAY;
  }
  get computedMax() {
    var _a;
    return (_a = this.max) !== null && _a !== void 0 ? _a : TUI_LAST_DAY;
  }
  get prevMonthDisabled() {
    return this.value.monthSameOrBefore(this.computedMin);
  }
  get nextMonthDisabled() {
    return this.value.monthSameOrAfter(this.computedMax);
  }
  get oneYear() {
    const {
      computedMin,
      computedMax
    } = this;
    return computedMin.year === computedMax.year;
  }
  onYearClick() {
    this.yearClick.next(this.value);
  }
  onPrevMonthClick() {
    this.appendValueWithLimit({
      month: -1
    });
  }
  onNextMonthClick() {
    this.appendValueWithLimit({
      month: 1
    });
  }
  appendValueWithLimit(date) {
    const newMonth = this.value.append(date);
    const {
      computedMin,
      computedMax
    } = this;
    if (computedMin.monthSameOrAfter(newMonth)) {
      this.updateValue(computedMin);
      return;
    }
    this.updateValue(computedMax.monthSameOrBefore(newMonth) ? computedMax : newMonth);
  }
  updateValue(value) {
    if (this.value.monthSame(value)) {
      return;
    }
    this.value = value;
    this.valueChange.emit(value);
  }
};
TuiPrimitiveYearMonthPaginationComponent.ɵfac = function TuiPrimitiveYearMonthPaginationComponent_Factory(t) {
  return new (t || TuiPrimitiveYearMonthPaginationComponent)();
};
TuiPrimitiveYearMonthPaginationComponent.ɵcmp = ɵɵdefineComponent({
  type: TuiPrimitiveYearMonthPaginationComponent,
  selectors: [["tui-primitive-year-month-pagination"]],
  inputs: {
    value: "value",
    min: "min",
    max: "max"
  },
  outputs: {
    valueChange: "valueChange",
    yearClick: "yearClick"
  },
  decls: 7,
  vars: 10,
  consts: [[3, "focusable", "leftDisabled", "rightDisabled", "leftClick", "rightClick"], [4, "ngIf", "ngIfElse"], ["button", ""], ["id", "year-btn", "automation-id", "tui-primitive-year-month-pagination__year-button", "tuiLink", "", "type", "button", 3, "tuiFocusable", "click"]],
  template: function TuiPrimitiveYearMonthPaginationComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "tui-primitive-spin-button", 0);
      ɵɵlistener("leftClick", function TuiPrimitiveYearMonthPaginationComponent_Template_tui_primitive_spin_button_leftClick_0_listener() {
        return ctx.onPrevMonthClick();
      })("rightClick", function TuiPrimitiveYearMonthPaginationComponent_Template_tui_primitive_spin_button_rightClick_0_listener() {
        return ctx.onNextMonthClick();
      });
      ɵɵtext(1);
      ɵɵpipe(2, "async");
      ɵɵpipe(3, "tuiMonth");
      ɵɵtemplate(4, TuiPrimitiveYearMonthPaginationComponent_ng_container_4_Template, 2, 1, "ng-container", 1)(5, TuiPrimitiveYearMonthPaginationComponent_ng_template_5_Template, 2, 2, "ng-template", null, 2, ɵɵtemplateRefExtractor);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      const _r2 = ɵɵreference(6);
      ɵɵproperty("focusable", false)("leftDisabled", ctx.prevMonthDisabled)("rightDisabled", ctx.nextMonthDisabled);
      ɵɵadvance(1);
      ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 6, ɵɵpipeBind1(3, 8, ctx.value)), " ");
      ɵɵadvance(3);
      ɵɵproperty("ngIf", ctx.oneYear)("ngIfElse", _r2);
    }
  },
  dependencies: [TuiPrimitiveSpinButtonComponent, TuiLinkComponent, NgIf, TuiFocusableDirective, AsyncPipe, TuiMonthPipe],
  styles: ["[_nghost-%COMP%]{display:block}"],
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiPrimitiveYearMonthPaginationComponent, [{
    type: Component,
    args: [{
      selector: "tui-primitive-year-month-pagination",
      templateUrl: "./primitive-year-month-pagination.template.html",
      styleUrls: ["./primitive-year-month-pagination.style.less"],
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], null, {
    value: [{
      type: Input
    }],
    min: [{
      type: Input
    }],
    max: [{
      type: Input
    }],
    valueChange: [{
      type: Output
    }],
    yearClick: [{
      type: Output
    }]
  });
})();
var TuiPrimitiveYearMonthPaginationModule = class {
};
TuiPrimitiveYearMonthPaginationModule.ɵfac = function TuiPrimitiveYearMonthPaginationModule_Factory(t) {
  return new (t || TuiPrimitiveYearMonthPaginationModule)();
};
TuiPrimitiveYearMonthPaginationModule.ɵmod = ɵɵdefineNgModule({
  type: TuiPrimitiveYearMonthPaginationModule,
  declarations: [TuiPrimitiveYearMonthPaginationComponent],
  imports: [CommonModule, TuiFocusableModule, TuiPrimitiveSpinButtonModule, TuiLinkModule, TuiMonthPipeModule],
  exports: [TuiPrimitiveYearMonthPaginationComponent]
});
TuiPrimitiveYearMonthPaginationModule.ɵinj = ɵɵdefineInjector({
  imports: [[CommonModule, TuiFocusableModule, TuiPrimitiveSpinButtonModule, TuiLinkModule, TuiMonthPipeModule]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiPrimitiveYearMonthPaginationModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, TuiFocusableModule, TuiPrimitiveSpinButtonModule, TuiLinkModule, TuiMonthPipeModule],
      declarations: [TuiPrimitiveYearMonthPaginationComponent],
      exports: [TuiPrimitiveYearMonthPaginationComponent]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/core/fesm2015/taiga-ui-core-components-primitive-calendar.js
function TuiPrimitiveCalendarComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 3);
  }
  if (rf & 2) {
    const day_r2 = ctx.$implicit;
    ɵɵproperty("textContent", day_r2);
  }
}
function TuiPrimitiveCalendarComponent_div_4_div_1_ng_container_1_ng_container_1_div_1_div_4_div_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 14);
  }
  if (rf & 2) {
    const markers_r12 = ɵɵnextContext().ngIf;
    ɵɵstyleProp("background-color", (markers_r12 == null ? null : markers_r12[1]) || "");
  }
}
function TuiPrimitiveCalendarComponent_div_4_div_1_ng_container_1_ng_container_1_div_1_div_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 13);
    ɵɵelement(1, "div", 14);
    ɵɵtemplate(2, TuiPrimitiveCalendarComponent_div_4_div_1_ng_container_1_ng_container_1_div_1_div_4_div_2_Template, 1, 2, "div", 15);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const markers_r12 = ctx.ngIf;
    ɵɵadvance(1);
    ɵɵstyleProp("background-color", markers_r12 == null ? null : markers_r12[0]);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", markers_r12.length > 1);
  }
}
var _c011 = (a0, a1, a2, a3, a4) => [a0, a1, a2, a3, a4];
function TuiPrimitiveCalendarComponent_div_4_div_1_ng_container_1_ng_container_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 10);
    ɵɵlistener("click", function TuiPrimitiveCalendarComponent_div_4_div_1_ng_container_1_ng_container_1_div_1_Template_div_click_0_listener() {
      ɵɵrestoreView(_r17);
      const item_r9 = ɵɵnextContext().tuiLet;
      const ctx_r15 = ɵɵnextContext(4);
      return ɵɵresetView(ctx_r15.onItemClick(item_r9));
    })("tuiHoveredChange", function TuiPrimitiveCalendarComponent_div_4_div_1_ng_container_1_ng_container_1_div_1_Template_div_tuiHoveredChange_0_listener($event) {
      ɵɵrestoreView(_r17);
      const item_r9 = ɵɵnextContext().tuiLet;
      const ctx_r18 = ɵɵnextContext(4);
      return ɵɵresetView(ctx_r18.onItemHovered($event && item_r9));
    })("tuiPressedChange", function TuiPrimitiveCalendarComponent_div_4_div_1_ng_container_1_ng_container_1_div_1_Template_div_tuiPressedChange_0_listener($event) {
      ɵɵrestoreView(_r17);
      const item_r9 = ɵɵnextContext().tuiLet;
      const ctx_r20 = ɵɵnextContext(4);
      return ɵɵresetView(ctx_r20.onItemPressed($event && item_r9));
    });
    ɵɵelementStart(1, "div", 11);
    ɵɵpipe(2, "tuiMapper");
    ɵɵtext(3);
    ɵɵtemplate(4, TuiPrimitiveCalendarComponent_div_4_div_1_ng_container_1_ng_container_1_div_1_div_4_Template, 3, 3, "div", 12);
    ɵɵpipe(5, "tuiMapper");
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const item_r9 = ɵɵnextContext().tuiLet;
    const ctx_r10 = ɵɵnextContext(4);
    ɵɵclassProp("t-cell_interval", ctx_r10.itemIsInterval(item_r9))("t-cell_today", ctx_r10.itemIsToday(item_r9))("t-cell_unavailable", ctx_r10.itemIsUnavailable(item_r9));
    ɵɵattribute("data-range", ctx_r10.getItemRange(item_r9))("data-state", ctx_r10.getItemState(item_r9));
    ɵɵadvance(1);
    ɵɵclassProp("t-item_unavailable", ctx_r10.itemIsUnavailable(item_r9));
    ɵɵattribute("data-type", ɵɵpipeBind2(2, 13, item_r9, ctx_r10.dayTypeHandler));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", item_r9.day, " ");
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ɵɵpipeBindV(5, 16, ɵɵpureFunction5(22, _c011, item_r9, ctx_r10.toMarkers, ctx_r10.itemIsToday(item_r9), !!ctx_r10.getItemRange(item_r9), ctx_r10.markerHandler)));
  }
}
function TuiPrimitiveCalendarComponent_div_4_div_1_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, TuiPrimitiveCalendarComponent_div_4_div_1_ng_container_1_ng_container_1_div_1_Template, 6, 28, "div", 9);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const item_r9 = ctx.tuiLet;
    const ctx_r8 = ɵɵnextContext(4);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r8.itemIsUnavailable(item_r9) || ctx_r8.showAdjacent);
  }
}
function TuiPrimitiveCalendarComponent_div_4_div_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, TuiPrimitiveCalendarComponent_div_4_div_1_ng_container_1_ng_container_1_Template, 2, 1, "ng-container", 8);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const colIndex_r7 = ctx.$implicit;
    const rowIndex_r5 = ɵɵnextContext().$implicit;
    const sheet_r3 = ɵɵnextContext().tuiLet;
    ɵɵadvance(1);
    ɵɵproperty("tuiLet", sheet_r3[rowIndex_r5][colIndex_r7]);
  }
}
function TuiPrimitiveCalendarComponent_div_4_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 6);
    ɵɵtemplate(1, TuiPrimitiveCalendarComponent_div_4_div_1_ng_container_1_Template, 2, 1, "ng-container", 7);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const rowIndex_r5 = ctx.$implicit;
    const sheet_r3 = ɵɵnextContext().tuiLet;
    ɵɵadvance(1);
    ɵɵproperty("tuiRepeatTimesOf", sheet_r3[rowIndex_r5].length);
  }
}
function TuiPrimitiveCalendarComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 4);
    ɵɵtemplate(1, TuiPrimitiveCalendarComponent_div_4_div_1_Template, 2, 1, "div", 5);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const sheet_r3 = ctx.tuiLet;
    ɵɵadvance(1);
    ɵɵproperty("tuiRepeatTimesOf", sheet_r3.length);
  }
}
var TuiPrimitiveCalendarComponent = class {
  constructor(unorderedWeekDays$, dayTypeHandler) {
    this.unorderedWeekDays$ = unorderedWeekDays$;
    this.dayTypeHandler = dayTypeHandler;
    this.pressedItem = null;
    this.today = TuiDay.currentLocal();
    this.month = TuiMonth.currentLocal();
    this.disabledItemHandler = ALWAYS_FALSE_HANDLER;
    this.markerHandler = TUI_DEFAULT_MARKER_HANDLER;
    this.value = null;
    this.hoveredItem = null;
    this.showAdjacent = true;
    this.hoveredItemChange = new EventEmitter();
    this.dayClick = new EventEmitter();
    this.toMarkers = (day, today, inRange, markerHandler) => {
      if (today || inRange) {
        return null;
      }
      const markers = markerHandler(day);
      return markers.length === 0 ? null : markers;
    };
  }
  get isSingleDayRange() {
    return this.value instanceof TuiDayRange && this.value.isSingleDay;
  }
  /**
   * @deprecated: use {@link this.isSingleDayRange}
   */
  get isSingle() {
    return this.isSingleDayRange;
  }
  getItemState(item) {
    const {
      disabledItemHandler,
      pressedItem,
      hoveredItem
    } = this;
    if (disabledItemHandler(item)) {
      return TuiInteractiveState.Disabled;
    }
    if (pressedItem === null || pressedItem === void 0 ? void 0 : pressedItem.daySame(item)) {
      return TuiInteractiveState.Active;
    }
    if (hoveredItem === null || hoveredItem === void 0 ? void 0 : hoveredItem.daySame(item)) {
      return TuiInteractiveState.Hover;
    }
    return null;
  }
  getItemRange(item) {
    const {
      value,
      hoveredItem
    } = this;
    if (!value) {
      return null;
    }
    if (value instanceof TuiDay) {
      return value.daySame(item) ? TuiRangeState.Single : null;
    }
    if (!(value instanceof TuiDayRange)) {
      return value.find((day) => day.daySame(item)) ? TuiRangeState.Single : null;
    }
    if (value.from.daySame(item) && !value.isSingleDay || (hoveredItem === null || hoveredItem === void 0 ? void 0 : hoveredItem.dayAfter(value.from)) && value.from.daySame(item) && value.isSingleDay || (hoveredItem === null || hoveredItem === void 0 ? void 0 : hoveredItem.daySame(item)) && hoveredItem.dayBefore(value.from) && value.isSingleDay) {
      return TuiRangeState.Start;
    }
    if (value.to.daySame(item) && !value.isSingleDay || (hoveredItem === null || hoveredItem === void 0 ? void 0 : hoveredItem.dayBefore(value.from)) && value.from.daySame(item) && value.isSingleDay || (hoveredItem === null || hoveredItem === void 0 ? void 0 : hoveredItem.daySame(item)) && hoveredItem.dayAfter(value.from) && value.isSingleDay) {
      return TuiRangeState.End;
    }
    return value.isSingleDay && value.from.daySame(item) ? TuiRangeState.Single : null;
  }
  itemIsToday(item) {
    return this.today.daySame(item);
  }
  itemIsUnavailable(item) {
    return !this.month.monthSame(item);
  }
  itemIsInterval(day) {
    const {
      value,
      hoveredItem
    } = this;
    if (!(value instanceof TuiDayRange)) {
      return false;
    }
    if (!value.isSingleDay) {
      return value.from.daySameOrBefore(day) && value.to.dayAfter(day);
    }
    if (hoveredItem === null) {
      return false;
    }
    const range = TuiDayRange.sort(value.from, hoveredItem);
    return range.from.daySameOrBefore(day) && range.to.dayAfter(day);
  }
  onItemHovered(item) {
    this.updateHoveredItem(item || null);
  }
  onItemPressed(item) {
    this.pressedItem = item || null;
  }
  onItemClick(item) {
    this.dayClick.emit(item);
  }
  updateHoveredItem(day) {
    if (tuiNullableSame(this.hoveredItem, day, (a, b) => a.daySame(b))) {
      return;
    }
    this.hoveredItem = day;
    this.hoveredItemChange.emit(day);
  }
};
TuiPrimitiveCalendarComponent.ɵfac = function TuiPrimitiveCalendarComponent_Factory(t) {
  return new (t || TuiPrimitiveCalendarComponent)(ɵɵdirectiveInject(TUI_SHORT_WEEK_DAYS), ɵɵdirectiveInject(TUI_DAY_TYPE_HANDLER));
};
TuiPrimitiveCalendarComponent.ɵcmp = ɵɵdefineComponent({
  type: TuiPrimitiveCalendarComponent,
  selectors: [["tui-primitive-calendar"]],
  hostVars: 2,
  hostBindings: function TuiPrimitiveCalendarComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("_single", ctx.isSingleDayRange);
    }
  },
  inputs: {
    month: "month",
    disabledItemHandler: "disabledItemHandler",
    markerHandler: "markerHandler",
    value: "value",
    hoveredItem: "hoveredItem",
    showAdjacent: "showAdjacent"
  },
  outputs: {
    hoveredItemChange: "hoveredItemChange",
    dayClick: "dayClick"
  },
  decls: 6,
  vars: 9,
  consts: [[1, "t-row", "t-row_weekday"], ["class", "t-cell", 3, "textContent", 4, "ngFor", "ngForOf"], ["id", "date-rows", 4, "tuiLet"], [1, "t-cell", 3, "textContent"], ["id", "date-rows"], ["automation-id", "tui-primitive-calendar__row", "class", "t-row", 4, "tuiRepeatTimes", "tuiRepeatTimesOf"], ["automation-id", "tui-primitive-calendar__row", 1, "t-row"], [4, "tuiRepeatTimes", "tuiRepeatTimesOf"], [4, "tuiLet"], ["automation-id", "tui-primitive-calendar__cell", "class", "t-cell", 3, "t-cell_interval", "t-cell_today", "t-cell_unavailable", "click", "tuiHoveredChange", "tuiPressedChange", 4, "ngIf"], ["automation-id", "tui-primitive-calendar__cell", 1, "t-cell", 3, "click", "tuiHoveredChange", "tuiPressedChange"], ["automation-id", "tui-primitive-calendar__item", 1, "t-item"], ["class", "t-dots", 4, "ngIf"], [1, "t-dots"], [1, "t-dot"], ["class", "t-dot", 3, "backgroundColor", 4, "ngIf"]],
  template: function TuiPrimitiveCalendarComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "div", 0);
      ɵɵtemplate(1, TuiPrimitiveCalendarComponent_div_1_Template, 1, 1, "div", 1);
      ɵɵpipe(2, "async");
      ɵɵpipe(3, "tuiOrderWeekDays");
      ɵɵelementEnd();
      ɵɵtemplate(4, TuiPrimitiveCalendarComponent_div_4_Template, 2, 1, "div", 2);
      ɵɵpipe(5, "tuiCalendarSheet");
    }
    if (rf & 2) {
      ɵɵadvance(1);
      ɵɵproperty("ngForOf", ɵɵpipeBind1(2, 2, ɵɵpipeBind1(3, 4, ctx.unorderedWeekDays$)));
      ɵɵadvance(3);
      ɵɵproperty("tuiLet", ɵɵpipeBind2(5, 6, ctx.month, true));
    }
  },
  dependencies: [NgForOf, TuiLetDirective, TuiRepeatTimesDirective, NgIf, TuiHoveredDirective, TuiPressedDirective, AsyncPipe, TuiOrderWeekDaysPipe, TuiCalendarSheetPipe, TuiMapperPipe],
  styles: ['[_nghost-%COMP%]{display:block;font:var(--tui-font-text-m)}.t-row[_ngcontent-%COMP%]{position:relative;display:flex;justify-content:space-between;height:2.25rem;isolation:isolate}.t-item[_ngcontent-%COMP%]{position:relative;flex:1;line-height:2rem;border-radius:var(--tui-radius-m)}.t-item[_ngcontent-%COMP%]:before, .t-item[_ngcontent-%COMP%]:after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;z-index:-1;border-radius:var(--tui-radius-m)}.t-item[_ngcontent-%COMP%]:after{border-radius:.5rem}.t-cell[_ngcontent-%COMP%]{position:relative;display:flex;align-items:center;justify-content:center;width:2.25rem;text-align:center;outline:none;cursor:pointer;background-clip:content-box;box-sizing:border-box;border:.125rem solid transparent}.t-cell[_ngcontent-%COMP%]:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;z-index:-1;border-radius:var(--tui-radius-m)}.t-cell_today[_ngcontent-%COMP%]:after{position:absolute;left:50%;transform:translate(-50%);content:"";bottom:.3125rem;height:.125rem;width:.75rem;border-radius:.375rem;background-color:var(--tui-text-01)}.t-cell_interval[_ngcontent-%COMP%]:before{background:var(--tui-base-02)}._single[_nghost-%COMP%]   .t-cell_interval[_ngcontent-%COMP%]:before{background:var(--tui-secondary-hover)}.t-cell_interval[_ngcontent-%COMP%]:not(:last-child):before{right:-.25rem;border-top-right-radius:0;border-bottom-right-radius:0}.t-cell_interval[_ngcontent-%COMP%]:not([data-range="start"]):not(:first-child):before{border-top-left-radius:0;border-bottom-left-radius:0}.t-cell_interval[_ngcontent-%COMP%]:last-child:first-child:before{right:0}.t-cell_interval[_ngcontent-%COMP%]:first-child > .t-item[_ngcontent-%COMP%]{border-top-left-radius:var(--tui-radius-m);border-bottom-left-radius:var(--tui-radius-m)}.t-cell_interval[_ngcontent-%COMP%]:last-child > .t-item[_ngcontent-%COMP%]{border-top-right-radius:var(--tui-radius-m);border-bottom-right-radius:var(--tui-radius-m)}.t-cell_interval[_ngcontent-%COMP%] > .t-item[_ngcontent-%COMP%]{border-radius:0}.t-cell[data-range][_ngcontent-%COMP%]:after{background-color:var(--tui-primary-text)}.t-cell[data-range][_ngcontent-%COMP%] > .t-item[_ngcontent-%COMP%]{color:var(--tui-primary-text)}.t-cell[data-range][_ngcontent-%COMP%] > .t-item[_ngcontent-%COMP%]:before, .t-cell[data-range][_ngcontent-%COMP%] > .t-item[_ngcontent-%COMP%]:after{background-color:var(--tui-primary)}.t-cell[data-range][data-state=hover][_ngcontent-%COMP%] > .t-item[_ngcontent-%COMP%]:before, .t-cell[data-range][data-state=hover][_ngcontent-%COMP%] > .t-item[_ngcontent-%COMP%]:after{background-color:var(--tui-primary-hover)}.t-cell[data-range][data-state=active][_ngcontent-%COMP%] > .t-item[_ngcontent-%COMP%]:before, .t-cell[data-range][data-state=active][_ngcontent-%COMP%] > .t-item[_ngcontent-%COMP%]:after{background-color:var(--tui-primary-active)}.t-cell[data-range=end][_ngcontent-%COMP%]:before{background:var(--tui-base-02)}._single[_nghost-%COMP%]   .t-cell[data-range=end][_ngcontent-%COMP%]:before{background:var(--tui-secondary-hover)}.t-cell[data-range=end][_ngcontent-%COMP%]:not(:first-child):before{border-top-left-radius:0;border-bottom-left-radius:0}.t-cell[data-range=end][_ngcontent-%COMP%] > .t-item[_ngcontent-%COMP%]:before{left:.625rem;border-top-left-radius:0;border-bottom-left-radius:0}.t-cell[data-range=end][_ngcontent-%COMP%] > .t-item[_ngcontent-%COMP%]:after{left:-2rem;right:100%;transform:translate(1.6rem) scaleY(.83) scaleX(.5) rotate(45deg)}.t-cell[data-range=start][_ngcontent-%COMP%] > .t-item[_ngcontent-%COMP%]:before{right:.625rem;border-top-right-radius:0;border-bottom-right-radius:0}.t-cell[data-range=start][_ngcontent-%COMP%] > .t-item[_ngcontent-%COMP%]:after{left:100%;right:-2rem;transform:translate(-1.6rem) scaleY(.83) scaleX(.5) rotate(45deg)}.t-cell[data-range=single][_ngcontent-%COMP%] > .t-item[_ngcontent-%COMP%]:after{display:none}.t-cell[data-state=disabled][_ngcontent-%COMP%]{pointer-events:none}.t-cell[data-state=disabled][_ngcontent-%COMP%] > .t-item[_ngcontent-%COMP%]{opacity:.36}.t-cell[data-state=hover][_ngcontent-%COMP%]:hover:not([data-range]) > .t-item[_ngcontent-%COMP%]{background-color:var(--tui-secondary-hover)}.t-cell[data-state=active][_ngcontent-%COMP%]:hover:not([data-range]) > .t-item[_ngcontent-%COMP%]{background-color:var(--tui-secondary-active)}[_nghost-%COMP%]{width:15.75rem}.t-row[_ngcontent-%COMP%]{justify-content:flex-start}.t-row[_ngcontent-%COMP%]:first-child{justify-content:flex-end}.t-row_weekday[_ngcontent-%COMP%]{font:var(--tui-font-text-s);color:var(--tui-text-02);pointer-events:none}.t-item[_ngcontent-%COMP%]{display:flex;flex-direction:column}.t-item_unavailable[_ngcontent-%COMP%]{opacity:var(--tui-disabled-opacity)}.t-dots[_ngcontent-%COMP%]{display:flex;justify-content:center;margin-top:-.5rem;padding-bottom:.25rem}.t-dot[_ngcontent-%COMP%]{display:inline-block;width:.25rem;height:.25rem;border-radius:100%;margin:0 .0625rem}'],
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiPrimitiveCalendarComponent, [{
    type: Component,
    args: [{
      selector: "tui-primitive-calendar",
      templateUrl: "./primitive-calendar.template.html",
      styleUrls: ["./primitive-calendar.style.less"],
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], function() {
    return [{
      type: void 0,
      decorators: [{
        type: Inject,
        args: [TUI_SHORT_WEEK_DAYS]
      }]
    }, {
      type: void 0,
      decorators: [{
        type: Inject,
        args: [TUI_DAY_TYPE_HANDLER]
      }]
    }];
  }, {
    month: [{
      type: Input
    }],
    disabledItemHandler: [{
      type: Input
    }],
    markerHandler: [{
      type: Input
    }],
    value: [{
      type: Input
    }],
    hoveredItem: [{
      type: Input
    }],
    showAdjacent: [{
      type: Input
    }],
    hoveredItemChange: [{
      type: Output
    }],
    dayClick: [{
      type: Output
    }],
    isSingleDayRange: [{
      type: HostBinding,
      args: ["class._single"]
    }]
  });
})();
var TuiPrimitiveCalendarModule = class {
};
TuiPrimitiveCalendarModule.ɵfac = function TuiPrimitiveCalendarModule_Factory(t) {
  return new (t || TuiPrimitiveCalendarModule)();
};
TuiPrimitiveCalendarModule.ɵmod = ɵɵdefineNgModule({
  type: TuiPrimitiveCalendarModule,
  declarations: [TuiPrimitiveCalendarComponent],
  imports: [CommonModule, TuiLetModule, TuiMapperPipeModule, TuiRepeatTimesModule, TuiHoveredModule, TuiPressedModule, TuiCalendarSheetPipeModule, TuiOrderWeekDaysPipeModule],
  exports: [TuiPrimitiveCalendarComponent]
});
TuiPrimitiveCalendarModule.ɵinj = ɵɵdefineInjector({
  imports: [[CommonModule, TuiLetModule, TuiMapperPipeModule, TuiRepeatTimesModule, TuiHoveredModule, TuiPressedModule, TuiCalendarSheetPipeModule, TuiOrderWeekDaysPipeModule]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiPrimitiveCalendarModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, TuiLetModule, TuiMapperPipeModule, TuiRepeatTimesModule, TuiHoveredModule, TuiPressedModule, TuiCalendarSheetPipeModule, TuiOrderWeekDaysPipeModule],
      declarations: [TuiPrimitiveCalendarComponent],
      exports: [TuiPrimitiveCalendarComponent]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/core/fesm2015/taiga-ui-core-components-calendar.js
function TuiCalendarComponent_tui_scrollbar_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "tui-scrollbar", 2)(1, "tui-primitive-year-picker", 3);
    ɵɵlistener("yearClick", function TuiCalendarComponent_tui_scrollbar_0_Template_tui_primitive_year_picker_yearClick_1_listener($event) {
      ɵɵrestoreView(_r4);
      const ctx_r3 = ɵɵnextContext();
      return ɵɵresetView(ctx_r3.onPickerYearClick($event));
    });
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("initialItem", ctx_r0.month)("max", ctx_r0.computedMax)("min", ctx_r0.computedMin)("value", ctx_r0.value);
  }
}
function TuiCalendarComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "tui-primitive-year-month-pagination", 4);
    ɵɵlistener("valueChange", function TuiCalendarComponent_ng_template_1_Template_tui_primitive_year_month_pagination_valueChange_0_listener($event) {
      ɵɵrestoreView(_r6);
      const ctx_r5 = ɵɵnextContext();
      return ɵɵresetView(ctx_r5.onPaginationValueChange($event));
    })("yearClick", function TuiCalendarComponent_ng_template_1_Template_tui_primitive_year_month_pagination_yearClick_0_listener() {
      ɵɵrestoreView(_r6);
      const ctx_r7 = ɵɵnextContext();
      return ɵɵresetView(ctx_r7.onPaginationYearClick());
    });
    ɵɵelementEnd();
    ɵɵelementStart(1, "tui-primitive-calendar", 5);
    ɵɵlistener("dayClick", function TuiCalendarComponent_ng_template_1_Template_tui_primitive_calendar_dayClick_1_listener($event) {
      ɵɵrestoreView(_r6);
      const ctx_r8 = ɵɵnextContext();
      return ɵɵresetView(ctx_r8.onDayClick($event));
    })("hoveredItemChange", function TuiCalendarComponent_ng_template_1_Template_tui_primitive_calendar_hoveredItemChange_1_listener($event) {
      ɵɵrestoreView(_r6);
      const ctx_r9 = ɵɵnextContext();
      return ɵɵresetView(ctx_r9.onHoveredItemChange($event));
    });
    ɵɵpipe(2, "tuiMapper");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("max", ctx_r1.computedMaxViewedMonth)("min", ctx_r1.computedMinViewedMonth)("value", ctx_r1.month);
    ɵɵadvance(1);
    ɵɵproperty("disabledItemHandler", ɵɵpipeBind4(2, 9, ctx_r1.disabledItemHandler, ctx_r1.disabledItemHandlerMapper, ctx_r1.computedMin, ctx_r1.computedMax))("hoveredItem", ctx_r1.hoveredItem)("markerHandler", ctx_r1.markerHandler)("month", ctx_r1.month)("showAdjacent", ctx_r1.showAdjacent)("value", ctx_r1.value);
  }
}
var TuiCalendarComponent = class {
  constructor() {
    this.day = null;
    this.view = "month";
    this.month = TuiMonth.currentLocal();
    this.disabledItemHandler = ALWAYS_FALSE_HANDLER;
    this.min = TUI_FIRST_DAY;
    this.max = TUI_LAST_DAY;
    this.minViewedMonth = TUI_FIRST_DAY;
    this.maxViewedMonth = TUI_LAST_DAY;
    this.hoveredItem = null;
    this.showAdjacent = true;
    this.markerHandler = TUI_DEFAULT_MARKER_HANDLER;
    this.dayClick = new EventEmitter();
    this.monthChange = new EventEmitter();
    this.hoveredItemChange = new EventEmitter();
    this.disabledItemHandlerMapper = (disabledItemHandler, min, max) => (item) => item.dayBefore(min) || item.dayAfter(max) || disabledItemHandler(item);
  }
  set initialView(view) {
    this.view = view;
  }
  set value(value) {
    this.day = value;
    if (this.showAdjacent && value instanceof TuiDay) {
      this.month = value;
    }
  }
  get value() {
    return this.day;
  }
  get isInYearView() {
    return this.view === "year";
  }
  get computedMin() {
    var _a;
    return (_a = this.min) !== null && _a !== void 0 ? _a : TUI_FIRST_DAY;
  }
  get computedMax() {
    var _a;
    return (_a = this.max) !== null && _a !== void 0 ? _a : TUI_LAST_DAY;
  }
  get computedMinViewedMonth() {
    var _a;
    const min = this.computedMin;
    const minViewed = (_a = this.minViewedMonth) !== null && _a !== void 0 ? _a : TUI_FIRST_DAY;
    return minViewed.monthSameOrAfter(min) ? minViewed : min;
  }
  get computedMaxViewedMonth() {
    var _a;
    const max = this.computedMax;
    const maxViewed = (_a = this.maxViewedMonth) !== null && _a !== void 0 ? _a : TUI_LAST_DAY;
    return maxViewed.monthSameOrBefore(max) ? maxViewed : max;
  }
  onPaginationYearClick() {
    this.view = "year";
  }
  onPickerYearClick({
    year
  }) {
    this.view = "month";
    this.updateViewedMonth(new TuiMonth(year, this.month.month));
  }
  onPaginationValueChange(month) {
    this.updateViewedMonth(month);
  }
  onDayClick(day) {
    this.dayClick.emit(day);
  }
  onHoveredItemChange(day) {
    this.updateHoveredDay(day);
  }
  updateViewedMonth(month) {
    if (this.month.monthSame(month)) {
      return;
    }
    this.month = month;
    this.monthChange.emit(month);
  }
  updateHoveredDay(day) {
    if (tuiNullableSame(this.hoveredItem, day, (a, b) => a.daySame(b))) {
      return;
    }
    this.hoveredItem = day;
    this.hoveredItemChange.emit(day);
  }
};
TuiCalendarComponent.ɵfac = function TuiCalendarComponent_Factory(t) {
  return new (t || TuiCalendarComponent)();
};
TuiCalendarComponent.ɵcmp = ɵɵdefineComponent({
  type: TuiCalendarComponent,
  selectors: [["tui-calendar"]],
  inputs: {
    initialView: "initialView",
    month: "month",
    disabledItemHandler: "disabledItemHandler",
    min: "min",
    max: "max",
    minViewedMonth: "minViewedMonth",
    maxViewedMonth: "maxViewedMonth",
    hoveredItem: "hoveredItem",
    showAdjacent: "showAdjacent",
    markerHandler: "markerHandler",
    value: "value"
  },
  outputs: {
    dayClick: "dayClick",
    monthChange: "monthChange",
    hoveredItemChange: "hoveredItemChange"
  },
  decls: 3,
  vars: 2,
  consts: [["automation-id", "tui-calendar__scrollbar", "class", "t-scrollbar", 4, "ngIf", "ngIfElse"], ["calendar", ""], ["automation-id", "tui-calendar__scrollbar", 1, "t-scrollbar"], ["automation-id", "tui-calendar__year", 3, "initialItem", "max", "min", "value", "yearClick"], ["automation-id", "tui-calendar__pagination", 1, "t-pagination", 3, "max", "min", "value", "valueChange", "yearClick"], ["automation-id", "tui-calendar__calendar", 3, "disabledItemHandler", "hoveredItem", "markerHandler", "month", "showAdjacent", "value", "dayClick", "hoveredItemChange"]],
  template: function TuiCalendarComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, TuiCalendarComponent_tui_scrollbar_0_Template, 2, 4, "tui-scrollbar", 0)(1, TuiCalendarComponent_ng_template_1_Template, 3, 14, "ng-template", null, 1, ɵɵtemplateRefExtractor);
    }
    if (rf & 2) {
      const _r2 = ɵɵreference(2);
      ɵɵproperty("ngIf", ctx.isInYearView)("ngIfElse", _r2);
    }
  },
  dependencies: [TuiScrollbarComponent, TuiPrimitiveYearPickerComponent, TuiPrimitiveYearMonthPaginationComponent, TuiPrimitiveCalendarComponent, NgIf, TuiMapperPipe],
  styles: ["[_nghost-%COMP%]{display:block;height:18.25rem;width:15.75rem;padding:1rem 1.125rem;box-sizing:content-box}.t-scrollbar[_ngcontent-%COMP%]{height:18.25rem;width:16.875rem}.t-pagination[_ngcontent-%COMP%]{margin-bottom:1rem}"],
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiCalendarComponent, [{
    type: Component,
    args: [{
      selector: "tui-calendar",
      templateUrl: "./calendar.template.html",
      styleUrls: ["./calendar.style.less"],
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], null, {
    initialView: [{
      type: Input
    }],
    month: [{
      type: Input
    }],
    disabledItemHandler: [{
      type: Input
    }],
    min: [{
      type: Input
    }],
    max: [{
      type: Input
    }],
    minViewedMonth: [{
      type: Input
    }],
    maxViewedMonth: [{
      type: Input
    }],
    hoveredItem: [{
      type: Input
    }],
    showAdjacent: [{
      type: Input
    }],
    markerHandler: [{
      type: Input
    }],
    value: [{
      type: Input
    }],
    dayClick: [{
      type: Output
    }],
    monthChange: [{
      type: Output
    }],
    hoveredItemChange: [{
      type: Output
    }]
  });
})();
var TuiCalendarModule = class {
};
TuiCalendarModule.ɵfac = function TuiCalendarModule_Factory(t) {
  return new (t || TuiCalendarModule)();
};
TuiCalendarModule.ɵmod = ɵɵdefineNgModule({
  type: TuiCalendarModule,
  declarations: [TuiCalendarComponent],
  imports: [CommonModule, TuiPrimitiveYearMonthPaginationModule, TuiPrimitiveCalendarModule, TuiPrimitiveYearPickerModule, TuiScrollbarModule, TuiMapperPipeModule],
  exports: [TuiCalendarComponent]
});
TuiCalendarModule.ɵinj = ɵɵdefineInjector({
  imports: [[CommonModule, TuiPrimitiveYearMonthPaginationModule, TuiPrimitiveCalendarModule, TuiPrimitiveYearPickerModule, TuiScrollbarModule, TuiMapperPipeModule]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiCalendarModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, TuiPrimitiveYearMonthPaginationModule, TuiPrimitiveCalendarModule, TuiPrimitiveYearPickerModule, TuiScrollbarModule, TuiMapperPipeModule],
      declarations: [TuiCalendarComponent],
      exports: [TuiCalendarComponent]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/core/fesm2015/taiga-ui-core-components-data-list.js
var _c012 = ["tuiOption", ""];
function TuiOptionComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const text_r3 = ctx.polymorpheusOutlet;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", text_r3, "\n");
  }
}
function TuiOptionComponent_ng_template_1_tui_svg_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "tui-svg", 3);
  }
  if (rf & 2) {
    const ctx_r4 = ɵɵnextContext(2);
    ɵɵproperty("src", ctx_r4.icons.more);
  }
}
function TuiOptionComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵprojection(0);
    ɵɵtemplate(1, TuiOptionComponent_ng_template_1_tui_svg_1_Template, 1, 1, "tui-svg", 2);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r1.dropdown);
  }
}
var _c14 = (a0) => ({
  $implicit: a0
});
var _c2 = ["*"];
function TuiDataListComponent_div_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const text_r2 = ctx.polymorpheusOutlet;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", text_r2, " ");
  }
}
function TuiDataListComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 2);
    ɵɵtemplate(1, TuiDataListComponent_div_2_ng_container_1_Template, 2, 1, "ng-container", 3);
    ɵɵpipe(2, "async");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("polymorpheusOutlet", ctx_r0.emptyContent || ɵɵpipeBind1(2, 1, ctx_r0.defaultEmptyContent$));
  }
}
function shouldFocus({
  currentTarget
}) {
  return !tuiIsNativeFocused(currentTarget);
}
var TuiOptionComponent = class {
  constructor(content, dataList, el, host, dropdown, icons) {
    this.content = content;
    this.dataList = dataList;
    this.el = el;
    this.host = host;
    this.dropdown = dropdown;
    this.icons = icons;
    this.size = null;
    this.role = "option";
    this.disabled = false;
  }
  get active() {
    return !!this.dropdown && !!this.dropdown.dropdownBoxRef;
  }
  onClick() {
    if (this.host && this.value !== void 0) {
      this.host.handleOption(this.value);
    }
  }
  // @bad TODO: Consider aria-activedescendant for proper accessibility implementation
  onMouseMove({
    currentTarget
  }) {
    currentTarget.focus({
      preventScroll: true
    });
  }
  // Preventing focus loss upon focused option removal
  ngOnDestroy() {
    var _a;
    (_a = this.dataList) === null || _a === void 0 ? void 0 : _a.handleFocusLossIfNecessary(this.el.nativeElement);
  }
};
TuiOptionComponent.ɵfac = function TuiOptionComponent_Factory(t) {
  return new (t || TuiOptionComponent)(ɵɵdirectiveInject(TUI_OPTION_CONTENT, 8), ɵɵdirectiveInject(forwardRef(() => TuiDataListComponent), 8), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(TUI_DATA_LIST_HOST, 8), ɵɵdirectiveInject(TuiDropdownDirective, 10), ɵɵdirectiveInject(TUI_COMMON_ICONS));
};
TuiOptionComponent.ɵcmp = ɵɵdefineComponent({
  type: TuiOptionComponent,
  selectors: [["button", "tuiOption", ""], ["a", "tuiOption", ""]],
  hostAttrs: ["tabIndex", "-1", "type", "button"],
  hostVars: 5,
  hostBindings: function TuiOptionComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("click", function TuiOptionComponent_click_HostBindingHandler() {
        return ctx.onClick();
      })("mousemove.silent", function TuiOptionComponent_mousemove_silent_HostBindingHandler($event) {
        return ctx.onMouseMove($event);
      });
    }
    if (rf & 2) {
      ɵɵattribute("disabled", ctx.disabled || null)("data-size", ctx.size)("role", ctx.role);
      ɵɵclassProp("_with-dropdown", ctx.active);
    }
  },
  inputs: {
    size: "size",
    role: "role",
    disabled: "disabled",
    value: "value"
  },
  attrs: _c012,
  ngContentSelectors: _c2,
  decls: 3,
  vars: 4,
  consts: [[4, "polymorpheusOutlet", "polymorpheusOutletContext"], ["base", ""], ["class", "t-arrow", 3, "src", 4, "ngIf"], [1, "t-arrow", 3, "src"]],
  template: function TuiOptionComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵtemplate(0, TuiOptionComponent_ng_container_0_Template, 2, 1, "ng-container", 0)(1, TuiOptionComponent_ng_template_1_Template, 2, 1, "ng-template", null, 1, ɵɵtemplateRefExtractor);
    }
    if (rf & 2) {
      const _r2 = ɵɵreference(2);
      ɵɵproperty("polymorpheusOutlet", ctx.content || _r2)("polymorpheusOutletContext", ɵɵpureFunction1(2, _c14, _r2));
    }
  },
  dependencies: [TuiSvgComponent, PolymorpheusOutletDirective, NgIf],
  styles: ['[_nghost-%COMP%]{-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:0;border:0;background:none;font-size:inherit;line-height:inherit;text-decoration:none;transition-property:background;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;justify-content:space-between;text-align:left;color:var(--tui-text-01);border-radius:var(--tui-radius-s);outline:none;cursor:pointer;background-clip:padding-box}[_nghost-%COMP%]:disabled{opacity:var(--tui-disabled-opacity);cursor:default}[_nghost-%COMP%]:focus, ._with-dropdown[_nghost-%COMP%]{background-color:var(--tui-clear)}[_nghost-%COMP%]   [data-list-size="s"][_nghost-%COMP%], [data-list-size="s"]   [_nghost-%COMP%], [_nghost-%COMP%]   [data-list-size="xs"][_nghost-%COMP%], [data-list-size="xs"]   [_nghost-%COMP%], [data-size=s][data-size=s][_nghost-%COMP%], [data-size=xs][data-size=xs][_nghost-%COMP%]{display:flex;align-items:center;box-sizing:border-box;margin:var(--tui-data-list-margin) 0;font:var(--tui-font-text-s);min-height:2rem;padding:.3125rem .5rem}[_nghost-%COMP%]   [data-list-size="m"][_nghost-%COMP%], [data-list-size="m"]   [_nghost-%COMP%], [data-size=m][data-size=m][_nghost-%COMP%]{display:flex;align-items:center;box-sizing:border-box;margin:var(--tui-data-list-margin) 0;font:var(--tui-font-text-s);min-height:2.5rem;padding:.375rem .5rem}[_nghost-%COMP%]   [data-list-size="l"][_nghost-%COMP%], [data-list-size="l"]   [_nghost-%COMP%], [data-size=l][data-size=l][_nghost-%COMP%]{display:flex;align-items:center;box-sizing:border-box;margin:var(--tui-data-list-margin) 0;font:var(--tui-font-text-m);min-height:2.75rem;padding:.375rem .625rem}.t-arrow[_ngcontent-%COMP%]{margin:0 -.5rem 0 .75rem}'],
  changeDetection: 0
});
__decorate([shouldCall(shouldFocus)], TuiOptionComponent.prototype, "onMouseMove", null);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiOptionComponent, [{
    type: Component,
    args: [{
      selector: "button[tuiOption], a[tuiOption]",
      templateUrl: "./option.template.html",
      styleUrls: ["./option.style.less"],
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        tabIndex: "-1",
        type: "button",
        "[attr.disabled]": "disabled || null"
      }
    }]
  }], function() {
    return [{
      type: void 0,
      decorators: [{
        type: Optional
      }, {
        type: Inject,
        args: [TUI_OPTION_CONTENT]
      }]
    }, {
      type: TuiDataListComponent,
      decorators: [{
        type: Optional
      }, {
        type: Inject,
        args: [forwardRef(() => TuiDataListComponent)]
      }]
    }, {
      type: ElementRef,
      decorators: [{
        type: Inject,
        args: [ElementRef]
      }]
    }, {
      type: void 0,
      decorators: [{
        type: Optional
      }, {
        type: Inject,
        args: [TUI_DATA_LIST_HOST]
      }]
    }, {
      type: TuiDropdownDirective,
      decorators: [{
        type: Optional
      }, {
        type: Self
      }, {
        type: Inject,
        args: [TuiDropdownDirective]
      }]
    }, {
      type: void 0,
      decorators: [{
        type: Inject,
        args: [TUI_COMMON_ICONS]
      }]
    }];
  }, {
    size: [{
      type: Input
    }, {
      type: HostBinding,
      args: ["attr.data-size"]
    }],
    role: [{
      type: Input
    }, {
      type: HostBinding,
      args: ["attr.role"]
    }],
    disabled: [{
      type: Input
    }],
    value: [{
      type: Input
    }],
    active: [{
      type: HostBinding,
      args: ["class._with-dropdown"]
    }],
    onClick: [{
      type: HostListener,
      args: ["click"]
    }],
    onMouseMove: [{
      type: HostListener,
      args: ["mousemove.silent", ["$event"]]
    }]
  });
})();
var TuiDataListComponent = class {
  constructor(controller, el, defaultEmptyContent$) {
    var _a;
    this.controller = controller;
    this.el = el;
    this.defaultEmptyContent$ = defaultEmptyContent$;
    this.options = EMPTY_QUERY;
    this.role = "listbox";
    this.size = ((_a = this.controller) === null || _a === void 0 ? void 0 : _a.size) || "m";
  }
  get empty$() {
    return tuiQueryListChanges(this.options).pipe(map(({
      length
    }) => !length));
  }
  onFocusIn(relatedTarget, currentTarget) {
    if (!currentTarget.contains(relatedTarget) && !this.origin) {
      this.origin = relatedTarget;
    }
  }
  noop() {
  }
  onKeyDownArrow(current, step) {
    const {
      elements
    } = this;
    tuiMoveFocus(elements.indexOf(current), elements, step);
  }
  // TODO: Consider aria-activedescendant for proper accessibility implementation
  handleFocusLossIfNecessary(element = this.el.nativeElement) {
    if (this.origin && tuiIsNativeFocusedIn(element)) {
      tuiSetNativeMouseFocused(this.origin, true, true);
    }
  }
  getOptions(includeDisabled = false) {
    return this.options.filter(({
      disabled
    }) => includeDisabled || !disabled).map(({
      value
    }) => value).filter(tuiIsPresent);
  }
  onFocus({
    target
  }, top) {
    if (!tuiIsElement(target)) {
      return;
    }
    const {
      elements
    } = this;
    tuiMoveFocus(top ? -1 : elements.length, elements, top ? 1 : -1);
    this.handleFocusLossIfNecessary(target);
  }
  get elements() {
    return Array.from(this.el.nativeElement.querySelectorAll("[tuiOption]"));
  }
};
TuiDataListComponent.ɵfac = function TuiDataListComponent_Factory(t) {
  return new (t || TuiDataListComponent)(ɵɵdirectiveInject(TUI_TEXTFIELD_WATCHED_CONTROLLER, 8), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(TUI_NOTHING_FOUND_MESSAGE));
};
TuiDataListComponent.ɵcmp = ɵɵdefineComponent({
  type: TuiDataListComponent,
  selectors: [["tui-data-list"]],
  contentQueries: function TuiDataListComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, TuiOptionComponent, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.options = _t);
    }
  },
  hostVars: 2,
  hostBindings: function TuiDataListComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("focusin", function TuiDataListComponent_focusin_HostBindingHandler($event) {
        return ctx.onFocusIn($event.relatedTarget, $event.currentTarget);
      })("mousedown.prevent", function TuiDataListComponent_mousedown_prevent_HostBindingHandler() {
        return ctx.noop();
      })("keydown.arrowDown.prevent", function TuiDataListComponent_keydown_arrowDown_prevent_HostBindingHandler($event) {
        return ctx.onKeyDownArrow($event.target, 1);
      })("keydown.arrowUp.prevent", function TuiDataListComponent_keydown_arrowUp_prevent_HostBindingHandler($event) {
        return ctx.onKeyDownArrow($event.target, -1);
      })("wheel.silent.passive", function TuiDataListComponent_wheel_silent_passive_HostBindingHandler() {
        return ctx.handleFocusLossIfNecessary();
      })("mouseleave", function TuiDataListComponent_mouseleave_HostBindingHandler($event) {
        return ctx.handleFocusLossIfNecessary($event.target);
      });
    }
    if (rf & 2) {
      ɵɵattribute("role", ctx.role)("data-list-size", ctx.size);
    }
  },
  inputs: {
    role: "role",
    emptyContent: "emptyContent",
    size: "size"
  },
  features: [ɵɵProvidersFeature([tuiAsDataListAccessor(TuiDataListComponent), TEXTFIELD_CONTROLLER_PROVIDER])],
  ngContentSelectors: _c2,
  decls: 5,
  vars: 3,
  consts: [["tabindex", "0", 1, "t-trap", 3, "focusin"], ["class", "t-empty", 4, "ngIf"], [1, "t-empty"], [4, "polymorpheusOutlet"]],
  template: function TuiDataListComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵelementStart(0, "div", 0);
      ɵɵlistener("focusin", function TuiDataListComponent_Template_div_focusin_0_listener($event) {
        return ctx.onFocus($event, true);
      });
      ɵɵelementEnd();
      ɵɵprojection(1);
      ɵɵtemplate(2, TuiDataListComponent_div_2_Template, 3, 3, "div", 1);
      ɵɵpipe(3, "async");
      ɵɵelementStart(4, "div", 0);
      ɵɵlistener("focusin", function TuiDataListComponent_Template_div_focusin_4_listener($event) {
        return ctx.onFocus($event, false);
      });
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵadvance(2);
      ɵɵproperty("ngIf", ɵɵpipeBind1(3, 1, ctx.empty$));
    }
  },
  dependencies: [NgIf, PolymorpheusOutletDirective, AsyncPipe],
  styles: ['tui-data-list{--tui-data-list-padding: .25rem;--tui-data-list-margin: .0625rem;display:flex;font:var(--tui-font-text-m);flex-direction:column;padding:calc(var(--tui-data-list-padding) - var(--tui-data-list-margin)) var(--tui-data-list-padding);color:var(--tui-text-03)}tui-data-list:focus-within .t-trap{display:none}tui-data-list:focus-within [tuiOption]._with-dropdown:not(:focus){background-color:transparent}tui-data-list[data-list-size=s]{--tui-data-list-margin: 0rem}tui-data-list[data-list-size=s]>.t-empty{display:flex;align-items:center;box-sizing:border-box;margin:var(--tui-data-list-margin) 0;font:var(--tui-font-text-s);min-height:2rem;padding:.3125rem .5rem}tui-data-list[data-list-size=m]>.t-empty{display:flex;align-items:center;box-sizing:border-box;margin:var(--tui-data-list-margin) 0;font:var(--tui-font-text-s);min-height:2.5rem;padding:.375rem .5rem}tui-data-list[data-list-size=l]{--tui-data-list-padding: .375rem;--tui-data-list-margin: .125rem}tui-data-list[data-list-size=l]>.t-empty{display:flex;align-items:center;box-sizing:border-box;margin:var(--tui-data-list-margin) 0;font:var(--tui-font-text-m);min-height:2.75rem;padding:.375rem .625rem}tui-opt-group{position:relative;display:flex;font:var(--tui-font-text-xs);color:var(--tui-text-02);flex-direction:column;line-height:1rem}tui-data-list[data-list-size=l] tui-opt-group{font:var(--tui-font-text-s);line-height:1.25rem}tui-data-list[data-list-size=l] tui-opt-group:before{padding-left:.625rem;padding-right:.625rem}tui-data-list[data-list-size=l] tui-opt-group:after{left:.625rem;right:.625rem}tui-opt-group:empty:before,tui-opt-group:empty:after{display:none}tui-opt-group:before{content:attr(data-label);padding:var(--tui-data-list-padding) .5rem var(--tui-data-list-padding);margin:var(--tui-data-list-margin) 0;white-space:normal;word-break:break-word}tui-opt-group:after{position:absolute;left:.5rem;right:.5rem;top:var(--tui-data-list-padding);height:1px;background:var(--tui-base-03)}tui-opt-group:not(:empty)~tui-opt-group:before{padding-top:calc(.75rem + var(--tui-data-list-padding))}tui-opt-group:not(:empty)~tui-opt-group[data-label=""]:before,tui-opt-group:not(:empty)~tui-opt-group:not([data-label]):before{padding:var(--tui-data-list-padding) 0}tui-opt-group:not(:empty)~tui-opt-group:after{content:""}tui-opt-group[data-label=""]:before,tui-opt-group:not([data-label]):before{padding:0;margin:0}\n'],
  encapsulation: 2,
  changeDetection: 0
});
__decorate([tuiPure], TuiDataListComponent.prototype, "empty$", null);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDataListComponent, [{
    type: Component,
    args: [{
      selector: "tui-data-list",
      templateUrl: "./data-list.template.html",
      styleUrls: ["./data-list.style.less"],
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [tuiAsDataListAccessor(TuiDataListComponent), TEXTFIELD_CONTROLLER_PROVIDER]
    }]
  }], function() {
    return [{
      type: TuiTextfieldController,
      decorators: [{
        type: Optional
      }, {
        type: Inject,
        args: [TUI_TEXTFIELD_WATCHED_CONTROLLER]
      }]
    }, {
      type: ElementRef,
      decorators: [{
        type: Inject,
        args: [ElementRef]
      }]
    }, {
      type: Observable,
      decorators: [{
        type: Inject,
        args: [TUI_NOTHING_FOUND_MESSAGE]
      }]
    }];
  }, {
    options: [{
      type: ContentChildren,
      args: [forwardRef(() => TuiOptionComponent), {
        descendants: true
      }]
    }],
    role: [{
      type: Input
    }, {
      type: HostBinding,
      args: ["attr.role"]
    }],
    emptyContent: [{
      type: Input
    }],
    size: [{
      type: Input
    }, {
      type: HostBinding,
      args: ["attr.data-list-size"]
    }],
    empty$: [],
    onFocusIn: [{
      type: HostListener,
      args: ["focusin", ["$event.relatedTarget", "$event.currentTarget"]]
    }],
    noop: [{
      type: HostListener,
      args: ["mousedown.prevent"]
    }],
    onKeyDownArrow: [{
      type: HostListener,
      args: ["keydown.arrowDown.prevent", ["$event.target", "1"]]
    }, {
      type: HostListener,
      args: ["keydown.arrowUp.prevent", ["$event.target", "-1"]]
    }],
    handleFocusLossIfNecessary: [{
      type: HostListener,
      args: ["wheel.silent.passive"]
    }, {
      type: HostListener,
      args: ["mouseleave", ["$event.target"]]
    }]
  });
})();
var TuiDataListDirective = class {
};
TuiDataListDirective.ɵfac = function TuiDataListDirective_Factory(t) {
  return new (t || TuiDataListDirective)();
};
TuiDataListDirective.ɵdir = ɵɵdefineDirective({
  type: TuiDataListDirective,
  selectors: [["ng-template", "tuiDataList", ""]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDataListDirective, [{
    type: Directive,
    args: [{
      selector: "ng-template[tuiDataList]"
    }]
  }], null, null);
})();
function tuiAsDataList(useExisting) {
  return {
    provide: TuiDataListDirective,
    useExisting
  };
}
var TuiOptGroupDirective = class {
};
TuiOptGroupDirective.ɵfac = function TuiOptGroupDirective_Factory(t) {
  return new (t || TuiOptGroupDirective)();
};
TuiOptGroupDirective.ɵdir = ɵɵdefineDirective({
  type: TuiOptGroupDirective,
  selectors: [["tui-opt-group"]],
  hostAttrs: ["role", "group"],
  hostVars: 1,
  hostBindings: function TuiOptGroupDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("data-label", ctx.label);
    }
  },
  inputs: {
    label: "label"
  }
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiOptGroupDirective, [{
    type: Directive,
    args: [{
      selector: "tui-opt-group",
      host: {
        role: "group"
      }
    }]
  }], null, {
    label: [{
      type: Input
    }, {
      type: HostBinding,
      args: ["attr.data-label"]
    }]
  });
})();
var TuiDataListModule = class {
};
TuiDataListModule.ɵfac = function TuiDataListModule_Factory(t) {
  return new (t || TuiDataListModule)();
};
TuiDataListModule.ɵmod = ɵɵdefineNgModule({
  type: TuiDataListModule,
  declarations: [TuiDataListComponent, TuiOptionComponent, TuiOptGroupDirective, TuiDataListDirective],
  imports: [CommonModule, TuiSvgModule, PolymorpheusModule],
  exports: [TuiDataListComponent, TuiOptionComponent, TuiOptGroupDirective, TuiDataListDirective]
});
TuiDataListModule.ɵinj = ɵɵdefineInjector({
  imports: [[CommonModule, TuiSvgModule, PolymorpheusModule]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDataListModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, TuiSvgModule, PolymorpheusModule],
      declarations: [TuiDataListComponent, TuiOptionComponent, TuiOptGroupDirective, TuiDataListDirective],
      exports: [TuiDataListComponent, TuiOptionComponent, TuiOptGroupDirective, TuiDataListDirective]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/core/fesm2015/taiga-ui-core-components-dialog.js
function TuiDialogComponent_header_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const text_r4 = ctx.polymorpheusOutlet;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", text_r4, " ");
  }
}
function TuiDialogComponent_header_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "header", 6);
    ɵɵtemplate(1, TuiDialogComponent_header_0_ng_container_1_Template, 2, 1, "ng-container", 3);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("polymorpheusOutlet", ctx_r0.header)("polymorpheusOutletContext", ctx_r0.context);
  }
}
function TuiDialogComponent_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "div", 7);
    ɵɵelementStart(2, "div", 8)(3, "button", 9);
    ɵɵlistener("click", function TuiDialogComponent_ng_container_4_Template_button_click_3_listener() {
      ɵɵrestoreView(_r7);
      const ctx_r6 = ɵɵnextContext();
      return ɵɵresetView(ctx_r6.context.$implicit.complete());
    });
    ɵɵtext(4);
    ɵɵelementEnd()();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const text_r5 = ctx.polymorpheusOutlet;
    const ctx_r1 = ɵɵnextContext();
    let tmp_1_0;
    ɵɵadvance(1);
    ɵɵproperty("innerHTML", text_r5, ɵɵsanitizeHtml);
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ((tmp_1_0 = ctx_r1.context.data) == null ? null : tmp_1_0.button) || "OK", " ");
  }
}
function TuiDialogComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 10)(1, "button", 11);
    ɵɵlistener("click", function TuiDialogComponent_div_6_Template_button_click_1_listener() {
      ɵɵrestoreView(_r9);
      const ctx_r8 = ɵɵnextContext();
      return ɵɵresetView(ctx_r8.close$.next());
    })("mousedown.prevent.silent", function TuiDialogComponent_div_6_Template_button_mousedown_prevent_silent_1_listener() {
      return 0;
    });
    ɵɵpipe(2, "async");
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("appearance", ctx_r2.fullscreen ? "secondary" : "")("icon", ctx_r2.icons.close)("title", ɵɵpipeBind1(2, 3, ctx_r2.closeWord$));
  }
}
var TUI_DIALOG_DEFAULT_OPTIONS = {
  size: "m",
  required: false,
  closeable: true,
  dismissible: true,
  label: "",
  header: ""
};
var TUI_DIALOGS_CLOSE = tuiCreateToken(EMPTY);
var TUI_DIALOG_OPTIONS = tuiCreateToken(TUI_DIALOG_DEFAULT_OPTIONS);
function tuiDialogOptionsProvider(options) {
  return tuiProvideOptions(TUI_DIALOG_OPTIONS, options, TUI_DIALOG_DEFAULT_OPTIONS);
}
var SCROLLBAR_PLACEHOLDER = 17;
var TuiDialogCloseService = class extends Observable {
  constructor(win, doc, el) {
    super((subscriber) => merge(this.esc$, this.mousedown$).subscribe(subscriber));
    this.win = win;
    this.doc = doc;
    this.el = el;
    this.esc$ = tuiTypedFromEvent(this.doc, "keydown").pipe(filter((event) => {
      const target = tuiGetActualTarget(event);
      return event.key === "Escape" && !event.defaultPrevented && (this.element.contains(target) || this.isOutside(target));
    }));
    this.mousedown$ = tuiTypedFromEvent(this.doc, "mousedown").pipe(filter((event) => tuiGetViewportWidth(this.win) - event.clientX > SCROLLBAR_PLACEHOLDER && this.isOutside(tuiGetActualTarget(event))), switchMap(() => tuiTypedFromEvent(this.doc, "mouseup").pipe(take(1), map(tuiGetActualTarget), filter((target) => this.isOutside(target)))));
  }
  get element() {
    return this.el.nativeElement;
  }
  isOutside(target) {
    return tuiIsElement(target) && (!tuiContainsOrAfter(this.element, target) || target === this.element);
  }
};
TuiDialogCloseService.ɵfac = function TuiDialogCloseService_Factory(t) {
  return new (t || TuiDialogCloseService)(ɵɵinject(WINDOW), ɵɵinject(DOCUMENT), ɵɵinject(ElementRef));
};
TuiDialogCloseService.ɵprov = ɵɵdefineInjectable({
  token: TuiDialogCloseService,
  factory: TuiDialogCloseService.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDialogCloseService, [{
    type: Injectable
  }], function() {
    return [{
      type: Window,
      decorators: [{
        type: Inject,
        args: [WINDOW]
      }]
    }, {
      type: Document,
      decorators: [{
        type: Inject,
        args: [DOCUMENT]
      }]
    }, {
      type: ElementRef,
      decorators: [{
        type: Inject,
        args: [ElementRef]
      }]
    }];
  }, null);
})();
var REQUIRED_ERROR = new Error("Required dialog was dismissed");
function toObservable(valueOrStream) {
  return isObservable(valueOrStream) ? valueOrStream : of(valueOrStream);
}
var TuiDialogComponent = class {
  constructor(duration, isMobile, context, destroy$, dialogClose$, close$, closeWord$, icons) {
    this.duration = duration;
    this.isMobile = isMobile;
    this.context = context;
    this.closeWord$ = closeWord$;
    this.icons = icons;
    this.animation = {
      value: "",
      params: {
        start: "40px",
        duration: this.duration
      }
    };
    this.fullscreenAnimation = {
      value: "",
      params: {
        start: "100vh",
        duration: this.duration
      }
    };
    this.close$ = new Subject();
    merge(this.close$.pipe(switchMap(() => toObservable(context.closeable))), dialogClose$.pipe(switchMap(() => toObservable(context.dismissible))), close$.pipe(map(ALWAYS_TRUE_HANDLER))).pipe(filter(Boolean), takeUntil(destroy$)).subscribe(() => {
      this.close();
    });
  }
  get size() {
    return this.context.size;
  }
  get header() {
    return this.context.header;
  }
  get slideInTop() {
    return this.fullscreen || this.isMobile ? this.fullscreenAnimation : this.animation;
  }
  get fullscreen() {
    return !this.isMobile && (this.size === "fullscreen" || this.size === "page");
  }
  close() {
    if (this.context.required) {
      this.context.$implicit.error(REQUIRED_ERROR);
    } else {
      this.context.$implicit.complete();
    }
  }
};
TuiDialogComponent.ɵfac = function TuiDialogComponent_Factory(t) {
  return new (t || TuiDialogComponent)(ɵɵdirectiveInject(TUI_ANIMATIONS_DURATION), ɵɵdirectiveInject(TUI_IS_MOBILE), ɵɵdirectiveInject(POLYMORPHEUS_CONTEXT), ɵɵdirectiveInject(TuiDestroyService, 2), ɵɵdirectiveInject(TuiDialogCloseService), ɵɵdirectiveInject(TUI_DIALOGS_CLOSE), ɵɵdirectiveInject(TUI_CLOSE_WORD), ɵɵdirectiveInject(TUI_COMMON_ICONS));
};
TuiDialogComponent.ɵcmp = ɵɵdefineComponent({
  type: TuiDialogComponent,
  selectors: [["tui-dialog"]],
  hostVars: 6,
  hostBindings: function TuiDialogComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("data-appearance", ctx.context.appearance)("data-size", ctx.size);
      ɵɵsyntheticHostProperty("@tuiSlideInTop", ctx.slideInTop)("@tuiFadeIn", ctx.slideInTop);
      ɵɵclassProp("_centered", ctx.header);
    }
  },
  features: [ɵɵProvidersFeature([TuiDestroyService, TuiDialogCloseService])],
  decls: 7,
  vars: 6,
  consts: [["class", "t-header", 4, "ngIf"], [1, "t-content"], [1, "t-heading", 3, "id", "textContent"], [4, "polymorpheusOutlet", "polymorpheusOutletContext"], [1, "t-filler"], ["class", "t-wrapper", 4, "ngIf"], [1, "t-header"], [3, "innerHTML"], [1, "t-buttons"], ["size", "m", "tuiAutoFocus", "", "tuiButton", "", "type", "button", 3, "click"], [1, "t-wrapper"], ["automation-id", "tui-dialog__close", "shape", "rounded", "size", "s", "tuiIconButton", "", "type", "button", 1, "t-close", 3, "appearance", "icon", "title", "click", "mousedown.prevent.silent"]],
  template: function TuiDialogComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, TuiDialogComponent_header_0_Template, 2, 2, "header", 0);
      ɵɵelementStart(1, "div", 1);
      ɵɵelement(2, "h2", 2);
      ɵɵelementStart(3, "section");
      ɵɵtemplate(4, TuiDialogComponent_ng_container_4_Template, 5, 2, "ng-container", 3);
      ɵɵelementEnd()();
      ɵɵelement(5, "div", 4);
      ɵɵtemplate(6, TuiDialogComponent_div_6_Template, 3, 5, "div", 5);
    }
    if (rf & 2) {
      ɵɵproperty("ngIf", ctx.header);
      ɵɵadvance(2);
      ɵɵproperty("id", ctx.context.id)("textContent", ctx.context.label);
      ɵɵadvance(2);
      ɵɵproperty("polymorpheusOutlet", ctx.context.content)("polymorpheusOutletContext", ctx.context);
      ɵɵadvance(2);
      ɵɵproperty("ngIf", ctx.context.closeable);
    }
  },
  dependencies: [TuiButtonComponent, NgIf, PolymorpheusOutletDirective, TuiAutoFocusDirective, AsyncPipe],
  styles: ['[_nghost-%COMP%]{position:relative;display:flex;font:var(--tui-font-text-m);flex-direction:column;box-sizing:border-box;margin:auto;border-radius:1rem;border:2.5rem solid transparent}[_nghost-%COMP%]:after{position:absolute;top:0;left:0;width:100%;height:100%;content:"";border-radius:inherit;pointer-events:none;box-shadow:var(--tui-shadow-modal)}[data-size=auto][_nghost-%COMP%]{width:auto}[data-size=s][_nghost-%COMP%]{width:30rem}[data-size=s][_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{padding:1.5rem}[data-size=s][_nghost-%COMP%]   .t-heading[_ngcontent-%COMP%]{margin-bottom:.5rem;font:var(--tui-font-heading-5)}[data-size=m][_nghost-%COMP%]{width:42.5rem}[data-size=m][_nghost-%COMP%]   .t-heading[_ngcontent-%COMP%]{margin-bottom:.75rem;font:var(--tui-font-heading-4)}[data-size=l][_nghost-%COMP%]{width:55rem}[data-size=l][_nghost-%COMP%]   .t-heading[_ngcontent-%COMP%]{margin-bottom:1rem}[data-size=fullscreen][_nghost-%COMP%], [data-size=page][_nghost-%COMP%]{min-width:100vw;min-height:100%;border-radius:0;border:none;background:var(--tui-elevation-01);box-shadow:0 4rem var(--tui-elevation-01)}[data-size=fullscreen][_nghost-%COMP%]   .t-content[_ngcontent-%COMP%], [data-size=page][_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{padding:3rem calc(50vw - (45rem / 2))}[data-size=fullscreen][_nghost-%COMP%]   .t-heading[_ngcontent-%COMP%], [data-size=page][_nghost-%COMP%]   .t-heading[_ngcontent-%COMP%]{margin-bottom:1rem}[data-size=page][_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{padding:0}._centered[_nghost-%COMP%]{text-align:center}[_nghost-%COMP%]   tui-root._mobile[data-size][_nghost-%COMP%], tui-root._mobile   [data-size][_nghost-%COMP%]{min-width:100%;width:100%;max-width:100%;border-radius:0;border:none;margin:auto 0 0}[_nghost-%COMP%]   tui-root._mobile[data-size][_nghost-%COMP%]   .t-content[_ngcontent-%COMP%], tui-root._mobile   [data-size][_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{padding:1.5rem}[_nghost-%COMP%]   tui-root._mobile[data-size][_nghost-%COMP%]   .t-heading[_ngcontent-%COMP%], tui-root._mobile   [data-size][_nghost-%COMP%]   .t-heading[_ngcontent-%COMP%]{margin-bottom:.5rem;font:var(--tui-font-heading-5)}.t-heading[_ngcontent-%COMP%]{margin:0;word-wrap:break-word;font:var(--tui-font-heading-3)}.t-heading[_ngcontent-%COMP%]:empty{display:none}.t-header[_ngcontent-%COMP%]{display:flex;border-top-left-radius:inherit;border-top-right-radius:inherit;overflow:hidden}[data-size=fullscreen][_nghost-%COMP%]   tui-root._mobile[_nghost-%COMP%]   .t-header[_ngcontent-%COMP%], tui-root._mobile   [_nghost-%COMP%]   .t-header[_ngcontent-%COMP%]{flex:1}.t-content[_ngcontent-%COMP%]{border-radius:inherit;padding:2rem;background:var(--tui-elevation-01)}.t-content[_ngcontent-%COMP%]:not(:first-child){border-top-left-radius:0;border-top-right-radius:0}.t-wrapper[_ngcontent-%COMP%]{position:-webkit-sticky;position:sticky;top:0;z-index:1;order:-1}.t-filler[_ngcontent-%COMP%]{flex-grow:1}.t-close[_ngcontent-%COMP%]{transition-property:background;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:fixed;top:1.5rem;right:1.5rem;display:none;color:var(--tui-base-01)}.t-dialog:last-of-type[_nghost-%COMP%]   .t-close[_ngcontent-%COMP%], .t-dialog:last-of-type   [_nghost-%COMP%]   .t-close[_ngcontent-%COMP%]{display:block}[_nghost-%COMP%]:not([data-size="fullscreen"]):not([data-size="page"])   .t-close[_ngcontent-%COMP%]{animation:tuiFadeIn var(--tui-duration);background:rgba(104,104,104,.96)}[_nghost-%COMP%]:not([data-size="fullscreen"]):not([data-size="page"])   .t-close[_ngcontent-%COMP%]:hover{background:rgba(159,159,159,.86)}[_nghost-%COMP%]:not([data-size="fullscreen"]).ng-animating   .t-close[_ngcontent-%COMP%]{display:none}tui-root._mobile[_nghost-%COMP%]   .t-close[_ngcontent-%COMP%], tui-root._mobile   [_nghost-%COMP%]   .t-close[_ngcontent-%COMP%]{position:absolute;top:0;right:0;background:transparent!important;color:var(--tui-text-01);opacity:.5}.t-buttons[_ngcontent-%COMP%]{margin-top:1.25rem;text-align:right}'],
  data: {
    animation: [tuiSlideInTop, tuiFadeIn]
  }
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDialogComponent, [{
    type: Component,
    args: [{
      selector: "tui-dialog",
      templateUrl: "./dialog.template.html",
      styleUrls: ["./dialog.style.less"],
      // So we don't force OnPush on dialog content
      // eslint-disable-next-line @angular-eslint/prefer-on-push-component-change-detection
      changeDetection: ChangeDetectionStrategy.Default,
      providers: [TuiDestroyService, TuiDialogCloseService],
      animations: [tuiSlideInTop, tuiFadeIn],
      host: {
        "[attr.data-appearance]": "context.appearance"
      }
    }]
  }], function() {
    return [{
      type: void 0,
      decorators: [{
        type: Inject,
        args: [TUI_ANIMATIONS_DURATION]
      }]
    }, {
      type: void 0,
      decorators: [{
        type: Inject,
        args: [TUI_IS_MOBILE]
      }]
    }, {
      type: void 0,
      decorators: [{
        type: Inject,
        args: [POLYMORPHEUS_CONTEXT]
      }]
    }, {
      type: Observable,
      decorators: [{
        type: Inject,
        args: [TuiDestroyService]
      }, {
        type: Self
      }]
    }, {
      type: Observable,
      decorators: [{
        type: Inject,
        args: [TuiDialogCloseService]
      }]
    }, {
      type: Observable,
      decorators: [{
        type: Inject,
        args: [TUI_DIALOGS_CLOSE]
      }]
    }, {
      type: Observable,
      decorators: [{
        type: Inject,
        args: [TUI_CLOSE_WORD]
      }]
    }, {
      type: void 0,
      decorators: [{
        type: Inject,
        args: [TUI_COMMON_ICONS]
      }]
    }];
  }, {
    size: [{
      type: HostBinding,
      args: ["attr.data-size"]
    }],
    header: [{
      type: HostBinding,
      args: ["class._centered"]
    }],
    slideInTop: [{
      type: HostBinding,
      args: ["@tuiSlideInTop"]
    }, {
      type: HostBinding,
      args: ["@tuiFadeIn"]
    }]
  });
})();
var DIALOG = new PolymorpheusComponent(TuiDialogComponent);
var TuiDialogService = class extends AbstractTuiDialogService {
  constructor() {
    super(...arguments);
    this.component = DIALOG;
    this.defaultOptions = Object.assign(Object.assign({}, inject(TUI_DIALOG_OPTIONS)), {
      data: void 0
    });
  }
};
TuiDialogService.ɵfac = (() => {
  let ɵTuiDialogService_BaseFactory;
  return function TuiDialogService_Factory(t) {
    return (ɵTuiDialogService_BaseFactory || (ɵTuiDialogService_BaseFactory = ɵɵgetInheritedFactory(TuiDialogService)))(t || TuiDialogService);
  };
})();
TuiDialogService.ɵprov = ɵɵdefineInjectable({
  token: TuiDialogService,
  factory: TuiDialogService.ɵfac,
  providedIn: "root"
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDialogService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var TuiDialogDirective = class extends AbstractTuiDialogDirective {
};
TuiDialogDirective.ɵfac = (() => {
  let ɵTuiDialogDirective_BaseFactory;
  return function TuiDialogDirective_Factory(t) {
    return (ɵTuiDialogDirective_BaseFactory || (ɵTuiDialogDirective_BaseFactory = ɵɵgetInheritedFactory(TuiDialogDirective)))(t || TuiDialogDirective);
  };
})();
TuiDialogDirective.ɵdir = ɵɵdefineDirective({
  type: TuiDialogDirective,
  selectors: [["ng-template", "tuiDialog", ""]],
  inputs: {
    options: ["tuiDialogOptions", "options"],
    open: ["tuiDialog", "open"]
  },
  outputs: {
    openChange: "tuiDialogChange"
  },
  features: [ɵɵProvidersFeature([{
    provide: AbstractTuiDialogService,
    useExisting: TuiDialogService
  }]), ɵɵInheritDefinitionFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDialogDirective, [{
    type: Directive,
    args: [{
      selector: "ng-template[tuiDialog]",
      inputs: ["options: tuiDialogOptions", "open: tuiDialog"],
      outputs: ["openChange: tuiDialogChange"],
      providers: [{
        provide: AbstractTuiDialogService,
        useExisting: TuiDialogService
      }]
    }]
  }], null, null);
})();
var TuiDialogModule = class {
};
TuiDialogModule.ɵfac = function TuiDialogModule_Factory(t) {
  return new (t || TuiDialogModule)();
};
TuiDialogModule.ɵmod = ɵɵdefineNgModule({
  type: TuiDialogModule,
  declarations: [TuiDialogComponent, TuiDialogDirective],
  imports: [PolymorpheusModule, TuiButtonModule, CommonModule, TuiAutoFocusModule],
  exports: [TuiDialogComponent, TuiDialogDirective]
});
TuiDialogModule.ɵinj = ɵɵdefineInjector({
  providers: [tuiAsDialog(TuiDialogService)],
  imports: [[PolymorpheusModule, TuiButtonModule, CommonModule, TuiAutoFocusModule]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDialogModule, [{
    type: NgModule,
    args: [{
      imports: [PolymorpheusModule, TuiButtonModule, CommonModule, TuiAutoFocusModule],
      declarations: [TuiDialogComponent, TuiDialogDirective],
      providers: [tuiAsDialog(TuiDialogService)],
      exports: [TuiDialogComponent, TuiDialogDirective]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/core/fesm2015/taiga-ui-core-components-error.js
function TuiErrorComponent_div_0_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const text_r2 = ctx.polymorpheusOutlet;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", text_r2, " ");
  }
}
var _c013 = () => ({});
function TuiErrorComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 1);
    ɵɵpipe(1, "async");
    ɵɵtemplate(2, TuiErrorComponent_div_0_ng_container_2_Template, 2, 1, "ng-container", 2);
    ɵɵpipe(3, "async");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassProp("t-message-text_light", ɵɵpipeBind1(1, 6, ctx_r0.mode$) === "onDark");
    ɵɵproperty("@tuiFadeIn", ctx_r0.animation)("@tuiHeightCollapse", ctx_r0.animation);
    ɵɵadvance(2);
    ɵɵproperty("polymorpheusOutlet", ctx_r0.error.message || ɵɵpipeBind1(3, 8, ctx_r0.defaultErrorMessage$))("polymorpheusOutletContext", ctx_r0.error.context || ɵɵpureFunction0(10, _c013));
  }
}
var TuiErrorComponent = class {
  constructor(animation, mode$, defaultErrorMessage$) {
    this.animation = animation;
    this.mode$ = mode$;
    this.defaultErrorMessage$ = defaultErrorMessage$;
    this.error = null;
    this.visible = true;
  }
  set errorSetter(error) {
    this.error = tuiIsString(error) ? new TuiValidationError(error) : error;
  }
  onAnimation(visible) {
    this.visible = visible;
  }
};
TuiErrorComponent.ɵfac = function TuiErrorComponent_Factory(t) {
  return new (t || TuiErrorComponent)(ɵɵdirectiveInject(TUI_ANIMATION_OPTIONS), ɵɵdirectiveInject(TUI_MODE), ɵɵdirectiveInject(TUI_DEFAULT_ERROR_MESSAGE));
};
TuiErrorComponent.ɵcmp = ɵɵdefineComponent({
  type: TuiErrorComponent,
  selectors: [["tui-error"]],
  hostBindings: function TuiErrorComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("animationcancel.self", function TuiErrorComponent_animationcancel_self_HostBindingHandler() {
        return ctx.onAnimation(false);
      })("animationstart.self", function TuiErrorComponent_animationstart_self_HostBindingHandler() {
        return ctx.onAnimation(true);
      });
    }
  },
  inputs: {
    errorSetter: ["error", "errorSetter"]
  },
  features: [ɵɵProvidersFeature([MODE_PROVIDER])],
  decls: 1,
  vars: 1,
  consts: [["automation-id", "tui-error__text", "class", "t-message-text", 3, "t-message-text_light", 4, "ngIf"], ["automation-id", "tui-error__text", 1, "t-message-text"], [4, "polymorpheusOutlet", "polymorpheusOutletContext"]],
  template: function TuiErrorComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, TuiErrorComponent_div_0_Template, 4, 11, "div", 0);
    }
    if (rf & 2) {
      ɵɵproperty("ngIf", ctx.error && ctx.visible);
    }
  },
  dependencies: [NgIf, PolymorpheusOutletDirective, AsyncPipe],
  styles: ["[_nghost-%COMP%]{font:var(--tui-font-text-s);color:var(--tui-text-01);display:block;color:var(--tui-negative);word-wrap:break-word;animation:tuiPresent 1s infinite}.t-message-text[_ngcontent-%COMP%]{margin-top:.25rem;white-space:pre-line}.t-message-text_light[_ngcontent-%COMP%]{color:var(--tui-negative-night)}"],
  data: {
    animation: [tuiHeightCollapse, tuiFadeIn]
  },
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiErrorComponent, [{
    type: Component,
    args: [{
      selector: "tui-error",
      templateUrl: "./error.template.html",
      styleUrls: ["./error.style.less"],
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [MODE_PROVIDER],
      animations: [tuiHeightCollapse, tuiFadeIn]
    }]
  }], function() {
    return [{
      type: void 0,
      decorators: [{
        type: Inject,
        args: [TUI_ANIMATION_OPTIONS]
      }]
    }, {
      type: Observable,
      decorators: [{
        type: Inject,
        args: [TUI_MODE]
      }]
    }, {
      type: Observable,
      decorators: [{
        type: Inject,
        args: [TUI_DEFAULT_ERROR_MESSAGE]
      }]
    }];
  }, {
    errorSetter: [{
      type: Input,
      args: ["error"]
    }],
    onAnimation: [{
      type: HostListener,
      args: ["animationcancel.self", ["false"]]
    }, {
      type: HostListener,
      args: ["animationstart.self", ["true"]]
    }]
  });
})();
var TuiErrorModule = class {
};
TuiErrorModule.ɵfac = function TuiErrorModule_Factory(t) {
  return new (t || TuiErrorModule)();
};
TuiErrorModule.ɵmod = ɵɵdefineNgModule({
  type: TuiErrorModule,
  declarations: [TuiErrorComponent],
  imports: [CommonModule, PolymorpheusModule],
  exports: [TuiErrorComponent]
});
TuiErrorModule.ɵinj = ɵɵdefineInjector({
  imports: [[CommonModule, PolymorpheusModule]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiErrorModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, PolymorpheusModule],
      declarations: [TuiErrorComponent],
      exports: [TuiErrorComponent]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/core/fesm2015/taiga-ui-core-components-expand.js
var _c014 = ["wrapper"];
function TuiExpandComponent_ng_container_2_tui_loader_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "tui-loader", 4);
    ɵɵelementContainer(1, 5);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵproperty("overlay", true)("showLoader", ctx_r2.loading);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", ctx_r2.content);
  }
}
function TuiExpandComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵprojection(1);
    ɵɵtemplate(2, TuiExpandComponent_ng_container_2_tui_loader_2_Template, 2, 3, "tui-loader", 3);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r1.async)("ngIfElse", ctx_r1.content);
  }
}
var _c15 = ["*"];
var TuiExpandContentDirective = class {
};
TuiExpandContentDirective.ɵfac = function TuiExpandContentDirective_Factory(t) {
  return new (t || TuiExpandContentDirective)();
};
TuiExpandContentDirective.ɵdir = ɵɵdefineDirective({
  type: TuiExpandContentDirective,
  selectors: [["", "tuiExpandContent", ""]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiExpandContentDirective, [{
    type: Directive,
    args: [{
      selector: "[tuiExpandContent]"
    }]
  }], null, null);
})();
var State = {
  Idle: 0,
  Loading: 1,
  Prepared: 2,
  Animated: 3
};
var LOADER_HEIGHT = 48;
var TuiExpandComponent = class {
  constructor(cdr) {
    this.cdr = cdr;
    this.state = State.Idle;
    this.async = false;
    this.content = null;
    this.expanded = null;
  }
  set expandedSetter(expanded) {
    if (this.expanded === null) {
      this.expanded = expanded;
      return;
    }
    if (this.state !== State.Idle) {
      this.expanded = expanded;
      this.state = State.Animated;
      return;
    }
    this.expanded = expanded;
    this.retrigger(this.async && expanded ? State.Loading : State.Animated);
  }
  get overflow() {
    return this.state !== State.Idle;
  }
  get loading() {
    return !!this.expanded && this.async && this.state === State.Loading;
  }
  get height() {
    const {
      expanded,
      state,
      contentWrapper
    } = this;
    if (expanded && state === State.Prepared || !expanded && state === State.Animated) {
      return 0;
    }
    if (contentWrapper && (!expanded && state === State.Prepared || expanded && state === State.Animated)) {
      return contentWrapper.nativeElement.offsetHeight;
    }
    if (contentWrapper && expanded && state === State.Loading) {
      return Math.max(contentWrapper.nativeElement.offsetHeight, LOADER_HEIGHT);
    }
    return null;
  }
  get contentVisible() {
    return this.expanded || this.state !== State.Idle;
  }
  onTransitionEnd({
    propertyName
  }) {
    if (propertyName === "opacity" && this.state === State.Animated) {
      this.state = State.Idle;
    }
  }
  onExpandLoaded(event) {
    event.stopPropagation();
    if (this.state === State.Loading) {
      this.retrigger(State.Animated);
    }
  }
  retrigger(state) {
    this.state = State.Prepared;
    setTimeout(() => {
      if (this.state !== State.Prepared) {
        return;
      }
      this.state = state;
      this.cdr.markForCheck();
    });
  }
};
TuiExpandComponent.ɵfac = function TuiExpandComponent_Factory(t) {
  return new (t || TuiExpandComponent)(ɵɵdirectiveInject(ChangeDetectorRef));
};
TuiExpandComponent.ɵcmp = ɵɵdefineComponent({
  type: TuiExpandComponent,
  selectors: [["tui-expand"]],
  contentQueries: function TuiExpandComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, TuiExpandContentDirective, 5, TemplateRef);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.content = _t.first);
    }
  },
  viewQuery: function TuiExpandComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c014, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.contentWrapper = _t.first);
    }
  },
  hostVars: 9,
  hostBindings: function TuiExpandComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("transitionend.self", function TuiExpandComponent_transitionend_self_HostBindingHandler($event) {
        return ctx.onTransitionEnd($event);
      })("tui-expand-loaded", function TuiExpandComponent_tui_expand_loaded_HostBindingHandler($event) {
        return ctx.onExpandLoaded($event);
      });
    }
    if (rf & 2) {
      ɵɵattribute("aria-expanded", ctx.expanded);
      ɵɵstyleProp("height", ctx.height, "px");
      ɵɵclassProp("_expanded", ctx.expanded)("_overflow", ctx.overflow)("_loading", ctx.loading);
    }
  },
  inputs: {
    async: "async",
    expandedSetter: ["expanded", "expandedSetter"]
  },
  ngContentSelectors: _c15,
  decls: 3,
  vars: 3,
  consts: [[1, "t-wrapper"], ["wrapper", ""], [4, "ngIf"], ["size", "l", 3, "overlay", "showLoader", 4, "ngIf", "ngIfElse"], ["size", "l", 3, "overlay", "showLoader"], [3, "ngTemplateOutlet"]],
  template: function TuiExpandComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵelementStart(0, "div", 0, 1);
      ɵɵtemplate(2, TuiExpandComponent_ng_container_2_Template, 3, 2, "ng-container", 2);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵproperty("@tuiParentAnimation", void 0)("@.disabled", ctx.overflow);
      ɵɵadvance(2);
      ɵɵproperty("ngIf", ctx.contentVisible);
    }
  },
  dependencies: [TuiLoaderComponent, NgIf, NgTemplateOutlet],
  styles: ['[_nghost-%COMP%]{transition-property:opacity,height,visibility;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;display:block;opacity:0;transition-delay:1ms}._overflow[_nghost-%COMP%]{overflow:hidden}._expanded[_nghost-%COMP%]{opacity:1;transform:translate(0)}._loading[_nghost-%COMP%]{opacity:.99}.t-wrapper[_ngcontent-%COMP%]:before, .t-wrapper[_ngcontent-%COMP%]:after{content:"";display:table}'],
  data: {
    animation: [TUI_PARENT_ANIMATION]
  },
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiExpandComponent, [{
    type: Component,
    args: [{
      selector: "tui-expand",
      templateUrl: "./expand.template.html",
      styleUrls: ["./expand.style.less"],
      changeDetection: ChangeDetectionStrategy.OnPush,
      animations: [TUI_PARENT_ANIMATION]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef,
      decorators: [{
        type: Inject,
        args: [ChangeDetectorRef]
      }]
    }];
  }, {
    contentWrapper: [{
      type: ViewChild,
      args: ["wrapper"]
    }],
    async: [{
      type: Input
    }],
    expandedSetter: [{
      type: Input,
      args: ["expanded"]
    }],
    content: [{
      type: ContentChild,
      args: [TuiExpandContentDirective, {
        read: TemplateRef
      }]
    }],
    expanded: [{
      type: HostBinding,
      args: ["class._expanded"]
    }, {
      type: HostBinding,
      args: ["attr.aria-expanded"]
    }],
    overflow: [{
      type: HostBinding,
      args: ["class._overflow"]
    }],
    loading: [{
      type: HostBinding,
      args: ["class._loading"]
    }],
    height: [{
      type: HostBinding,
      args: ["style.height.px"]
    }],
    onTransitionEnd: [{
      type: HostListener,
      args: ["transitionend.self", ["$event"]]
    }],
    onExpandLoaded: [{
      type: HostListener,
      args: [TUI_EXPAND_LOADED, ["$event"]]
    }]
  });
})();
var TuiExpandModule = class {
};
TuiExpandModule.ɵfac = function TuiExpandModule_Factory(t) {
  return new (t || TuiExpandModule)();
};
TuiExpandModule.ɵmod = ɵɵdefineNgModule({
  type: TuiExpandModule,
  declarations: [TuiExpandComponent, TuiExpandContentDirective],
  imports: [CommonModule, TuiLoaderModule],
  exports: [TuiExpandComponent, TuiExpandContentDirective]
});
TuiExpandModule.ɵinj = ɵɵdefineInjector({
  imports: [[CommonModule, TuiLoaderModule]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiExpandModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, TuiLoaderModule],
      declarations: [TuiExpandComponent, TuiExpandContentDirective],
      exports: [TuiExpandComponent, TuiExpandContentDirective]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/core/fesm2015/taiga-ui-core-components-group.js
var TuiGroupStylesComponent = class {
};
TuiGroupStylesComponent.ɵfac = function TuiGroupStylesComponent_Factory(t) {
  return new (t || TuiGroupStylesComponent)();
};
TuiGroupStylesComponent.ɵcmp = ɵɵdefineComponent({
  type: TuiGroupStylesComponent,
  selectors: [["ng-component"]],
  hostAttrs: [1, "tui-group-styles"],
  decls: 0,
  vars: 0,
  template: function TuiGroupStylesComponent_Template(rf, ctx) {
  },
  styles: [".tui-group{position:relative;display:flex;isolation:isolate}.tui-group>*{flex:1 1 0;min-width:0}.tui-group>*:not(:last-child){margin-right:.125rem}.tui-group.tui-group>*:nth-child(n){border-radius:0}.tui-group_collapsed>*{z-index:1}.tui-group_collapsed>*:not(:last-child){margin-right:-1px}.tui-group_collapsed>*._readonly,.tui-group_collapsed>*._disabled,.tui-group_collapsed>*._readonly:hover,.tui-group_collapsed>*._disabled:hover{z-index:0}.tui-group_collapsed>*:hover,.tui-group_collapsed>*._hovered,.tui-group_collapsed>*._pressed{z-index:3}.tui-group_collapsed>*._invalid{z-index:2}.tui-group_collapsed>*._invalid:hover,.tui-group_collapsed>*._invalid._hovered,.tui-group_collapsed>*._invalid._pressed{z-index:4}.tui-group_collapsed>*._hosted_dropdown_focused,.tui-group_collapsed>*._focus-visible,.tui-group_collapsed>*._focused.ng-touched,.tui-group_collapsed>*._focused.ng-untouched{z-index:5}.tui-group_collapsed>*._active,.tui-group_collapsed>*[data-appearance=whiteblock-active]{z-index:6}.tui-group_collapsed>*._focus-visible._focused,.tui-group_collapsed>*._focus-visible._active,.tui-group_collapsed>*._focus-visible[data-appearance=whiteblock-active]{z-index:7}.tui-group_orientation_vertical{display:inline-flex;flex-direction:column}.tui-group_orientation_vertical>*{min-height:auto;flex:0 0 auto}.tui-group_orientation_vertical>*:not(:last-child){margin-right:0;margin-bottom:.125rem}.tui-group_orientation_vertical.tui-group_collapsed>*:not(:last-child){margin-right:0;margin-bottom:-1px}.tui-group_rounded.tui-group_orientation_horizontal>*:first-child{border-top-left-radius:var(--tui-radius-m);border-bottom-left-radius:var(--tui-radius-m)}.tui-group_rounded.tui-group_orientation_horizontal>*:last-child{border-top-right-radius:var(--tui-radius-m);border-bottom-right-radius:var(--tui-radius-m)}.tui-group_rounded.tui-group_orientation_horizontal.tui-group_radius_large>*:first-child{border-top-left-radius:var(--tui-radius-l);border-bottom-left-radius:var(--tui-radius-l)}.tui-group_rounded.tui-group_orientation_horizontal.tui-group_radius_large>*:last-child{border-top-right-radius:var(--tui-radius-l);border-bottom-right-radius:var(--tui-radius-l)}.tui-group_rounded.tui-group_orientation_vertical>*:first-child{border-top-left-radius:var(--tui-radius-m);border-top-right-radius:var(--tui-radius-m)}.tui-group_rounded.tui-group_orientation_vertical>*:last-child{border-bottom-left-radius:var(--tui-radius-m);border-bottom-right-radius:var(--tui-radius-m)}.tui-group_rounded.tui-group_orientation_vertical.tui-group_radius_large>*:first-child{border-top-left-radius:var(--tui-radius-l);border-top-right-radius:var(--tui-radius-l)}.tui-group_rounded.tui-group_orientation_vertical.tui-group_radius_large>*:last-child{border-bottom-left-radius:var(--tui-radius-l);border-bottom-right-radius:var(--tui-radius-l)}@media screen and (max-width: 47.9625em){.tui-group_rounded.tui-group_adaptive.tui-group_orientation_vertical:not(.tui-group_collapsed)>*:first-child:not(:last-child),.tui-group_rounded.tui-group_adaptive.tui-group_orientation_horizontal>*:first-child:not(:last-child),.tui-group_rounded.tui-group_adaptive.tui-group_orientation_vertical:not(.tui-group_collapsed)>*:last-child:not(:first-child),.tui-group_rounded.tui-group_adaptive.tui-group_orientation_horizontal>*:last-child:not(:first-child){border-radius:var(--tui-radius-m)}}@media screen and (max-width: 47.9625em){.tui-group_rounded.tui-group_adaptive.tui-group_radius_large.tui-group_orientation_vertical:not(.tui-group_collapsed)>*:first-child:not(:last-child),.tui-group_rounded.tui-group_adaptive.tui-group_radius_large.tui-group_orientation_horizontal>*:first-child:not(:last-child),.tui-group_rounded.tui-group_adaptive.tui-group_radius_large.tui-group_orientation_vertical:not(.tui-group_collapsed)>*:last-child:not(:first-child),.tui-group_rounded.tui-group_adaptive.tui-group_radius_large.tui-group_orientation_horizontal>*:last-child:not(:first-child){border-radius:var(--tui-radius-l)}}@media screen and (max-width: 47.9625em){.tui-group_adaptive.tui-group_orientation_vertical{width:100%}.tui-group_adaptive.tui-group_orientation_vertical>*:nth-child(n):not(:only-child){border-radius:var(--tui-radius-m)}.tui-group_adaptive.tui-group_orientation_vertical>*:not(:last-child){margin-bottom:1rem}.tui-group_adaptive.tui-group_orientation_vertical.tui-group_collapsed>*:nth-child(n):not(:only-child){border-radius:0}.tui-group_adaptive.tui-group_orientation_vertical.tui-group_collapsed>*:first-child:not(:last-child){border-radius:var(--tui-radius-m) var(--tui-radius-m) 0 0}.tui-group_adaptive.tui-group_orientation_vertical.tui-group_collapsed>*:last-child:not(:first-child){border-radius:0 0 var(--tui-radius-m) var(--tui-radius-m)}.tui-group_adaptive.tui-group_orientation_vertical.tui-group_collapsed>*:not(:last-child){margin-bottom:-1px}}@media screen and (max-width: 47.9625em){.tui-group_adaptive.tui-group_orientation_horizontal{flex-direction:column;width:100%}.tui-group_adaptive.tui-group_orientation_horizontal>*:nth-child(n):not(:only-child){border-radius:var(--tui-radius-m)}.tui-group_adaptive.tui-group_orientation_horizontal>*:not(:last-child){margin-right:0;margin-bottom:1rem}.tui-group_adaptive.tui-group_orientation_horizontal.tui-group_collapsed>*:nth-child(n):not(:only-child){border-radius:0}.tui-group_adaptive.tui-group_orientation_horizontal.tui-group_collapsed>*:first-child:not(:last-child){border-radius:var(--tui-radius-m) var(--tui-radius-m) 0 0}.tui-group_adaptive.tui-group_orientation_horizontal.tui-group_collapsed>*:last-child:not(:first-child){border-radius:0 0 var(--tui-radius-m) var(--tui-radius-m)}.tui-group_adaptive.tui-group_orientation_horizontal.tui-group_collapsed>*:not(:last-child){margin-right:0;margin-bottom:-1px}}@media screen and (max-width: 47.9625em){.tui-group_adaptive.tui-group_radius_large.tui-group_orientation_vertical>*:nth-child(n):not(:only-child){border-radius:var(--tui-radius-l)}.tui-group_adaptive.tui-group_radius_large.tui-group_orientation_vertical.tui-group_collapsed>*:nth-child(n):not(:only-child){border-radius:0}.tui-group_adaptive.tui-group_radius_large.tui-group_orientation_vertical.tui-group_collapsed>*:first-child:not(:last-child){border-radius:var(--tui-radius-l) var(--tui-radius-l) 0 0}.tui-group_adaptive.tui-group_radius_large.tui-group_orientation_vertical.tui-group_collapsed>*:last-child:not(:first-child){border-radius:0 0 var(--tui-radius-l) var(--tui-radius-l)}}@media screen and (max-width: 47.9625em){.tui-group_adaptive.tui-group_radius_large.tui-group_orientation_horizontal>*:nth-child(n):not(:only-child){border-radius:var(--tui-radius-l)}.tui-group_adaptive.tui-group_radius_large.tui-group_orientation_horizontal.tui-group_collapsed>*:nth-child(n):not(:only-child){border-radius:0}.tui-group_adaptive.tui-group_radius_large.tui-group_orientation_horizontal.tui-group_collapsed>*:first-child:not(:last-child){border-radius:var(--tui-radius-l) var(--tui-radius-l) 0 0}.tui-group_adaptive.tui-group_radius_large.tui-group_orientation_horizontal.tui-group_collapsed>*:last-child:not(:first-child){border-radius:0 0 var(--tui-radius-l) var(--tui-radius-l)}}.tui-group__auto-width-item{min-width:auto;flex:0 0 auto}.tui-group .tui-group__inherit-item{border-radius:inherit}\n"],
  encapsulation: 2,
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiGroupStylesComponent, [{
    type: Component,
    args: [{
      host: {
        class: "tui-group-styles"
      },
      template: "",
      styleUrls: ["./group.style.less"],
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], null, null);
})();
var TuiGroupDirective = class {
  constructor(directiveStyles) {
    this.orientation = "horizontal";
    this.adaptive = false;
    this.collapsed = false;
    this.rounded = true;
    this.size = "m";
    directiveStyles.addComponent(TuiGroupStylesComponent);
  }
  get orientationHorizontal() {
    return this.orientation === "horizontal";
  }
  get orientationVertical() {
    return this.orientation === "vertical";
  }
  get sizeLarge() {
    return this.size === "l";
  }
};
TuiGroupDirective.ɵfac = function TuiGroupDirective_Factory(t) {
  return new (t || TuiGroupDirective)(ɵɵdirectiveInject(TuiDirectiveStylesService));
};
TuiGroupDirective.ɵdir = ɵɵdefineDirective({
  type: TuiGroupDirective,
  selectors: [["", "tuiGroup", "", 5, "ng-container"]],
  hostAttrs: ["role", "group", 1, "tui-group"],
  hostVars: 12,
  hostBindings: function TuiGroupDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("tui-group_adaptive", ctx.adaptive)("tui-group_collapsed", ctx.collapsed)("tui-group_rounded", ctx.rounded)("tui-group_orientation_horizontal", ctx.orientationHorizontal)("tui-group_orientation_vertical", ctx.orientationVertical)("tui-group_radius_large", ctx.sizeLarge);
    }
  },
  inputs: {
    orientation: "orientation",
    adaptive: "adaptive",
    collapsed: "collapsed",
    rounded: "rounded",
    size: "size"
  }
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiGroupDirective, [{
    type: Directive,
    args: [{
      selector: "[tuiGroup]:not(ng-container)",
      host: {
        class: "tui-group",
        role: "group"
      }
    }]
  }], function() {
    return [{
      type: TuiDirectiveStylesService,
      decorators: [{
        type: Inject,
        args: [TuiDirectiveStylesService]
      }]
    }];
  }, {
    orientation: [{
      type: Input
    }],
    adaptive: [{
      type: Input
    }, {
      type: HostBinding,
      args: ["class.tui-group_adaptive"]
    }],
    collapsed: [{
      type: Input
    }, {
      type: HostBinding,
      args: ["class.tui-group_collapsed"]
    }],
    rounded: [{
      type: Input
    }, {
      type: HostBinding,
      args: ["class.tui-group_rounded"]
    }],
    size: [{
      type: Input
    }],
    orientationHorizontal: [{
      type: HostBinding,
      args: ["class.tui-group_orientation_horizontal"]
    }],
    orientationVertical: [{
      type: HostBinding,
      args: ["class.tui-group_orientation_vertical"]
    }],
    sizeLarge: [{
      type: HostBinding,
      args: ["class.tui-group_radius_large"]
    }]
  });
})();
var TuiGroupModule = class {
};
TuiGroupModule.ɵfac = function TuiGroupModule_Factory(t) {
  return new (t || TuiGroupModule)();
};
TuiGroupModule.ɵmod = ɵɵdefineNgModule({
  type: TuiGroupModule,
  declarations: [TuiGroupDirective, TuiGroupStylesComponent],
  imports: [CommonModule],
  exports: [TuiGroupDirective, TuiGroupStylesComponent]
});
TuiGroupModule.ɵinj = ɵɵdefineInjector({
  imports: [[CommonModule]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiGroupModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule],
      declarations: [TuiGroupDirective, TuiGroupStylesComponent],
      exports: [TuiGroupDirective, TuiGroupStylesComponent]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/core/fesm2015/taiga-ui-core-components-hints-host.js
function TuiHintsHostComponent_div_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
var _c015 = (a0) => ({
  $implicit: a0
});
function TuiHintsHostComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 1);
    ɵɵtemplate(1, TuiHintsHostComponent_div_0_ng_container_1_Template, 1, 0, "ng-container", 2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const hint_r1 = ctx.$implicit;
    ɵɵproperty("@tuiParentAnimation", void 0)("tuiActiveZoneParent", hint_r1.activeZone || null);
    ɵɵadvance(1);
    ɵɵproperty("polymorpheusOutlet", hint_r1.component)("polymorpheusOutletContext", ɵɵpureFunction1(4, _c015, hint_r1));
  }
}
var TuiHintsHostComponent = class {
  constructor(hints$, destroy$, cdr) {
    this.hints$ = hints$;
    this.destroy$ = destroy$;
    this.cdr = cdr;
    this.hints = [];
  }
  ngOnInit() {
    this.hints$.pipe(takeUntil(this.destroy$)).subscribe((hints) => {
      this.hints = hints;
      this.cdr.detectChanges();
    });
  }
};
TuiHintsHostComponent.ɵfac = function TuiHintsHostComponent_Factory(t) {
  return new (t || TuiHintsHostComponent)(ɵɵdirectiveInject(TuiHintService), ɵɵdirectiveInject(TuiDestroyService, 2), ɵɵdirectiveInject(ChangeDetectorRef));
};
TuiHintsHostComponent.ɵcmp = ɵɵdefineComponent({
  type: TuiHintsHostComponent,
  selectors: [["tui-hints-host"]],
  hostAttrs: ["aria-live", "polite"],
  features: [ɵɵProvidersFeature([TuiDestroyService])],
  decls: 1,
  vars: 1,
  consts: [["role", "tooltip", 3, "tuiActiveZoneParent", 4, "ngFor", "ngForOf"], ["role", "tooltip", 3, "tuiActiveZoneParent"], [4, "polymorpheusOutlet", "polymorpheusOutletContext"]],
  template: function TuiHintsHostComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, TuiHintsHostComponent_div_0_Template, 2, 6, "div", 0);
    }
    if (rf & 2) {
      ɵɵproperty("ngForOf", ctx.hints);
    }
  },
  dependencies: [NgForOf, TuiActiveZoneDirective, PolymorpheusOutletDirective],
  styles: ["[_nghost-%COMP%]{position:fixed;top:0;left:0;width:100%;height:0}"],
  data: {
    animation: [TUI_PARENT_ANIMATION]
  }
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiHintsHostComponent, [{
    type: Component,
    args: [{
      selector: "tui-hints-host",
      templateUrl: "./hints-host.template.html",
      styleUrls: ["./hints-host.style.less"],
      // So that we do not force OnPush on custom hints
      // eslint-disable-next-line @angular-eslint/prefer-on-push-component-change-detection
      changeDetection: ChangeDetectionStrategy.Default,
      providers: [TuiDestroyService],
      animations: [TUI_PARENT_ANIMATION],
      host: {
        "aria-live": "polite"
      }
    }]
  }], function() {
    return [{
      type: Observable,
      decorators: [{
        type: Inject,
        args: [TuiHintService]
      }]
    }, {
      type: Observable,
      decorators: [{
        type: Self
      }, {
        type: Inject,
        args: [TuiDestroyService]
      }]
    }, {
      type: ChangeDetectorRef,
      decorators: [{
        type: Inject,
        args: [ChangeDetectorRef]
      }]
    }];
  }, null);
})();
var TuiHintsHostModule = class {
};
TuiHintsHostModule.ɵfac = function TuiHintsHostModule_Factory(t) {
  return new (t || TuiHintsHostModule)();
};
TuiHintsHostModule.ɵmod = ɵɵdefineNgModule({
  type: TuiHintsHostModule,
  declarations: [TuiHintsHostComponent],
  imports: [CommonModule, PolymorpheusModule, TuiActiveZoneModule],
  exports: [TuiHintsHostComponent]
});
TuiHintsHostModule.ɵinj = ɵɵdefineInjector({
  imports: [[CommonModule, PolymorpheusModule, TuiActiveZoneModule]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiHintsHostModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, PolymorpheusModule, TuiActiveZoneModule],
      declarations: [TuiHintsHostComponent],
      exports: [TuiHintsHostComponent]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/core/fesm2015/taiga-ui-core-components-hosted-dropdown.js
var _c016 = ["wrapper"];
function TuiHostedDropdownComponent_div_0_ng_template_3_div_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 8);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const text_r7 = ctx.polymorpheusOutlet;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", text_r7, " ");
  }
}
var _c16 = (a0, a1) => ({
  $implicit: a0,
  close: a1
});
function TuiHostedDropdownComponent_div_0_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 5, 6);
    ɵɵlistener("keydown", function TuiHostedDropdownComponent_div_0_ng_template_3_Template_div_keydown_0_listener($event) {
      ɵɵrestoreView(_r9);
      const ctx_r8 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r8.onKeydown($event));
    });
    ɵɵtemplate(2, TuiHostedDropdownComponent_div_0_ng_template_3_div_2_Template, 2, 1, "div", 7);
    ɵɵelementEnd();
    ɵɵelement(3, "div");
  }
  if (rf & 2) {
    ɵɵnextContext();
    const _r2 = ɵɵreference(1);
    const ctx_r3 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵproperty("polymorpheusOutlet", ctx_r3.content)("polymorpheusOutletContext", ɵɵpureFunction2(2, _c16, _r2, ctx_r3.close));
  }
}
function TuiHostedDropdownComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 1, 2);
    ɵɵlistener("tuiActiveZoneChange", function TuiHostedDropdownComponent_div_0_Template_div_tuiActiveZoneChange_0_listener($event) {
      ɵɵrestoreView(_r11);
      const ctx_r10 = ɵɵnextContext();
      return ɵɵresetView(ctx_r10.onActiveZone($event));
    })("tuiObscured", function TuiHostedDropdownComponent_div_0_Template_div_tuiObscured_0_listener($event) {
      ɵɵrestoreView(_r11);
      const ctx_r12 = ɵɵnextContext();
      return ɵɵresetView(ctx_r12.onHostObscured($event));
    });
    ɵɵprojection(2);
    ɵɵtemplate(3, TuiHostedDropdownComponent_div_0_ng_template_3_Template, 4, 5, "ng-template", 3, 4, ɵɵtemplateRefExtractor);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const isOpen_r1 = ctx.tuiLet;
    const _r4 = ɵɵreference(4);
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("tuiDropdown", _r4)("tuiDropdownManual", isOpen_r1 && ctx_r0.canOpen)("tuiDropdownSided", ctx_r0.sided)("tuiObscuredEnabled", isOpen_r1);
    ɵɵadvance(3);
    ɵɵproperty("polymorpheus", ctx_r0.context);
  }
}
var _c22 = ["*"];
var TuiAccessorProxyDirective = class extends TuiPositionAccessor {
  constructor() {
    super(...arguments);
    this.type = "dummy";
  }
  getPosition() {
    return [0, 0];
  }
};
TuiAccessorProxyDirective.ɵfac = (() => {
  let ɵTuiAccessorProxyDirective_BaseFactory;
  return function TuiAccessorProxyDirective_Factory(t) {
    return (ɵTuiAccessorProxyDirective_BaseFactory || (ɵTuiAccessorProxyDirective_BaseFactory = ɵɵgetInheritedFactory(TuiAccessorProxyDirective)))(t || TuiAccessorProxyDirective);
  };
})();
TuiAccessorProxyDirective.ɵdir = ɵɵdefineDirective({
  type: TuiAccessorProxyDirective,
  selectors: [["", "tuiAccessorProxy", ""]],
  features: [ɵɵProvidersFeature([{
    provide: TuiPositionAccessor,
    multi: true,
    deps: [[new Optional(), new SkipSelf(), TuiAccessorProxyDirective], TuiAccessorProxyDirective],
    useFactory: (accessor, fallback) => accessor || fallback
  }]), ɵɵInheritDefinitionFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiAccessorProxyDirective, [{
    type: Directive,
    args: [{
      selector: "[tuiAccessorProxy]",
      providers: [{
        provide: TuiPositionAccessor,
        multi: true,
        deps: [[new Optional(), new SkipSelf(), TuiAccessorProxyDirective], TuiAccessorProxyDirective],
        useFactory: (accessor, fallback) => accessor || fallback
      }]
    }]
  }], null, null);
})();
var TUI_HOSTED_DROPDOWN_COMPONENT = new InjectionToken("[TUI_HOSTED_DROPDOWN_COMPONENT]");
var TuiDropdownOpenMonitorDirective = class {
  constructor(destroy$, hosted, dropdown, open) {
    open === null || open === void 0 ? void 0 : open.tuiDropdownOpenChange.pipe(filter((value) => value && open.dropdown === dropdown && !hosted.focused), takeUntil(destroy$)).subscribe(() => {
      var _a;
      (_a = hosted.nativeFocusableElement) === null || _a === void 0 ? void 0 : _a.focus();
      hosted.updateOpen(true);
    });
  }
};
TuiDropdownOpenMonitorDirective.ɵfac = function TuiDropdownOpenMonitorDirective_Factory(t) {
  return new (t || TuiDropdownOpenMonitorDirective)(ɵɵdirectiveInject(TuiDestroyService, 2), ɵɵdirectiveInject(TUI_HOSTED_DROPDOWN_COMPONENT), ɵɵdirectiveInject(TuiDropdownDirective, 2), ɵɵdirectiveInject(TuiDropdownOpenDirective, 8));
};
TuiDropdownOpenMonitorDirective.ɵdir = ɵɵdefineDirective({
  type: TuiDropdownOpenMonitorDirective,
  selectors: [["", "tuiDropdownOpenMonitor", ""]],
  features: [ɵɵProvidersFeature([TuiDestroyService])]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDropdownOpenMonitorDirective, [{
    type: Directive,
    args: [{
      selector: "[tuiDropdownOpenMonitor]",
      providers: [TuiDestroyService]
    }]
  }], function() {
    return [{
      type: Observable,
      decorators: [{
        type: Self
      }, {
        type: Inject,
        args: [TuiDestroyService]
      }]
    }, {
      type: void 0,
      decorators: [{
        type: Inject,
        args: [TUI_HOSTED_DROPDOWN_COMPONENT]
      }]
    }, {
      type: TuiDropdownDirective,
      decorators: [{
        type: Self
      }, {
        type: Inject,
        args: [TuiDropdownDirective]
      }]
    }, {
      type: TuiDropdownOpenDirective,
      decorators: [{
        type: Optional
      }, {
        type: Inject,
        args: [TuiDropdownOpenDirective]
      }]
    }];
  }, null);
})();
var TuiHostedDropdownConnectorDirective = class {
};
TuiHostedDropdownConnectorDirective.ɵfac = function TuiHostedDropdownConnectorDirective_Factory(t) {
  return new (t || TuiHostedDropdownConnectorDirective)();
};
TuiHostedDropdownConnectorDirective.ɵdir = ɵɵdefineDirective({
  type: TuiHostedDropdownConnectorDirective,
  selectors: [["", "tuiHostedDropdownHost", ""]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiHostedDropdownConnectorDirective, [{
    type: Directive,
    args: [{
      selector: "[tuiHostedDropdownHost]"
    }]
  }], null, null);
})();
function shouldClose(event) {
  var _a;
  return "key" in event && event.key.toLowerCase() === "escape" && this.canOpen && this.open && !((_a = this.dropdown) === null || _a === void 0 ? void 0 : _a.nextElementSibling);
}
var TuiHostedDropdownComponent = class {
  constructor(hover$, el) {
    this.hover$ = hover$;
    this.el = el;
    this.openChange$ = new BehaviorSubject(false);
    this.hostHover$ = combineLatest([tuiTypedFromEvent(this.el.nativeElement, "mouseover").pipe(map((e) => this.computedHost.contains(tuiGetActualTarget(e))), switchMap((visible) => {
      var _a, _b;
      return of(visible).pipe(delay((visible ? (_a = this.hover$) === null || _a === void 0 ? void 0 : _a.showDelay : (_b = this.hover$) === null || _b === void 0 ? void 0 : _b.hideDelay) || 0));
    })), this.hover$ || EMPTY]).pipe(map(([visible, hovered]) => visible && hovered));
    this.sided = false;
    this.canOpen = true;
    this.open$ = merge(this.openChange$, this.hostHover$).pipe(skip(1), distinctUntilChanged(), share());
    this.focusedChange = new EventEmitter();
    this.focus$ = new BehaviorSubject(false);
    this.openChange = this.openChange$;
    this.close = () => this.updateOpen(false);
  }
  set open(open) {
    this.openChange.next(open);
  }
  get open() {
    return this.openChange.value;
  }
  get host() {
    var _a;
    return ((_a = this.dropdownHost) === null || _a === void 0 ? void 0 : _a.nativeElement) || this.el.nativeElement;
  }
  get computedHost() {
    var _a;
    return ((_a = this.dropdownHost) === null || _a === void 0 ? void 0 : _a.nativeElement) || this.nativeFocusableElement || this.el.nativeElement;
  }
  get dropdown() {
    var _a, _b;
    return (_b = (_a = this.dropdownDirective) === null || _a === void 0 ? void 0 : _a.dropdownBoxRef) === null || _b === void 0 ? void 0 : _b.location.nativeElement;
  }
  get nativeFocusableElement() {
    return tuiIsNativeKeyboardFocusable(this.host) ? this.host : tuiGetClosestFocusable({
      initial: this.host,
      root: this.el.nativeElement
    });
  }
  get focused() {
    return tuiIsNativeFocusedIn(this.host) || this.open && !!this.wrapper && tuiIsNativeFocusedIn(this.wrapper.nativeElement);
  }
  onFocusInOut() {
    this.focus$.next(this.focused);
  }
  onFocusIn(target) {
    if (!this.computedHost.contains(target)) {
      this.updateOpen(false);
    }
  }
  onClick(target) {
    var _a;
    if (!this.hostEditable && this.computedHost.contains(target) && !((_a = this.hover$) === null || _a === void 0 ? void 0 : _a.hovered)) {
      this.updateOpen(!this.open);
    }
  }
  onKeyDownEsc(event) {
    event.preventDefault();
    this.closeDropdown();
  }
  onArrow(event, down) {
    this.focusDropdown(event, down);
  }
  onKeydown({
    key,
    target,
    defaultPrevented
  }) {
    if (!defaultPrevented && tuiIsEditingKey(key) && this.hostEditable && tuiIsHTMLElement(target) && !tuiIsElementEditable(target)) {
      this.focusHost();
    }
  }
  onActiveZone(active) {
    this.updateFocused(active);
    if (!active) {
      this.updateOpen(false);
    }
  }
  onHostObscured(obscured) {
    if (obscured) {
      this.closeDropdown();
    }
  }
  updateOpen(open) {
    if (!open || this.canOpen) {
      this.open = open;
    }
  }
  get hostEditable() {
    return tuiIsElementEditable(this.computedHost);
  }
  focusDropdown(event, first) {
    const host = this.nativeFocusableElement;
    if (!host || !tuiIsHTMLElement(host) || !tuiIsElement(event.target) || !host.contains(event.target)) {
      return;
    }
    if (!this.wrapper || !this.open || !this.dropdown || !tuiIsHTMLElement(this.wrapper.nativeElement.nextElementSibling)) {
      this.updateOpen(true);
      if (!tuiIsElementEditable(host)) {
        event.preventDefault();
      }
      return;
    }
    const initial = first ? this.wrapper.nativeElement : this.wrapper.nativeElement.nextElementSibling;
    const focusable = tuiGetClosestFocusable({
      initial,
      root: this.wrapper.nativeElement,
      previous: !first
    });
    if (!focusable) {
      return;
    }
    focusable.focus();
    event.preventDefault();
  }
  closeDropdown() {
    if (this.focused) {
      this.focusHost();
    }
    this.updateOpen(false);
  }
  focusHost() {
    const host = this.nativeFocusableElement;
    if (host) {
      host.focus({
        preventScroll: true
      });
    }
  }
  updateFocused(focused) {
    this.focusedChange.emit(focused);
  }
};
TuiHostedDropdownComponent.ɵfac = function TuiHostedDropdownComponent_Factory(t) {
  return new (t || TuiHostedDropdownComponent)(ɵɵdirectiveInject(TuiDropdownHoverDirective, 10), ɵɵdirectiveInject(ElementRef));
};
TuiHostedDropdownComponent.ɵcmp = ɵɵdefineComponent({
  type: TuiHostedDropdownComponent,
  selectors: [["tui-hosted-dropdown"]],
  contentQueries: function TuiHostedDropdownComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, TuiHostedDropdownConnectorDirective, 5, ElementRef);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.dropdownHost = _t.first);
    }
  },
  viewQuery: function TuiHostedDropdownComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c016, 5, ElementRef);
      ɵɵviewQuery(TuiDropdownDirective, 5);
      ɵɵviewQuery(TuiActiveZoneDirective, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.wrapper = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.dropdownDirective = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.activeZone = _t.first);
    }
  },
  hostVars: 1,
  hostBindings: function TuiHostedDropdownComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("$.class._hosted_dropdown_focused", function TuiHostedDropdownComponent___class__hosted_dropdown_focused_HostBindingHandler() {
        return ctx.focus$;
      })("focusin.capture.silent", function TuiHostedDropdownComponent_focusin_capture_silent_HostBindingHandler() {
        return ctx.onFocusInOut();
      })("focusout.capture.silent", function TuiHostedDropdownComponent_focusout_capture_silent_HostBindingHandler() {
        return ctx.onFocusInOut();
      })("focusin", function TuiHostedDropdownComponent_focusin_HostBindingHandler($event) {
        return ctx.onFocusIn($event.target);
      })("click", function TuiHostedDropdownComponent_click_HostBindingHandler($event) {
        return ctx.onClick($event.target);
      })("keydown.silent.capture", function TuiHostedDropdownComponent_keydown_silent_capture_HostBindingHandler($event) {
        return ctx.onKeyDownEsc($event);
      }, false, ɵɵresolveDocument)("keydown.arrowDown", function TuiHostedDropdownComponent_keydown_arrowDown_HostBindingHandler($event) {
        return ctx.onArrow($event, true);
      })("keydown.arrowUp", function TuiHostedDropdownComponent_keydown_arrowUp_HostBindingHandler($event) {
        return ctx.onArrow($event, false);
      });
    }
    if (rf & 2) {
      ɵɵhostProperty("$.class._hosted_dropdown_focused", ctx.focus$);
    }
  },
  inputs: {
    content: "content",
    sided: "sided",
    canOpen: "canOpen",
    open: "open"
  },
  outputs: {
    open$: "openChange",
    focusedChange: "focusedChange"
  },
  features: [ɵɵProvidersFeature([tuiAsFocusableItemAccessor(TuiHostedDropdownComponent), {
    provide: TuiAccessorProxyDirective,
    deps: [[new Optional(), new Self(), TuiPositionAccessor]],
    useFactory: (position) => position === null || position === void 0 ? void 0 : position[0]
  }, {
    provide: TUI_HOSTED_DROPDOWN_COMPONENT,
    useExisting: TuiHostedDropdownComponent
  }])],
  ngContentSelectors: _c22,
  decls: 2,
  vars: 3,
  consts: [["tuiAccessorProxy", "", "tuiDropdownOpenMonitor", "", "class", "t-wrapper", 3, "tuiDropdown", "tuiDropdownManual", "tuiDropdownSided", "tuiObscuredEnabled", "tuiActiveZoneChange", "tuiObscured", 4, "tuiLet"], ["tuiAccessorProxy", "", "tuiDropdownOpenMonitor", "", 1, "t-wrapper", 3, "tuiDropdown", "tuiDropdownManual", "tuiDropdownSided", "tuiObscuredEnabled", "tuiActiveZoneChange", "tuiObscured"], ["activeZone", "tuiActiveZone"], [3, "polymorpheus"], ["dropdown", "polymorpheus"], [1, "t-dropdown", 3, "keydown"], ["wrapper", ""], ["class", "t-primitive", 4, "polymorpheusOutlet", "polymorpheusOutletContext"], [1, "t-primitive"]],
  template: function TuiHostedDropdownComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵtemplate(0, TuiHostedDropdownComponent_div_0_Template, 5, 5, "div", 0);
      ɵɵpipe(1, "async");
    }
    if (rf & 2) {
      let tmp_0_0;
      ɵɵproperty("tuiLet", (tmp_0_0 = ɵɵpipeBind1(1, 1, ctx.open$)) !== null && tmp_0_0 !== void 0 ? tmp_0_0 : ctx.openChange.value);
    }
  },
  dependencies: [TuiLetDirective, TuiAccessorProxyDirective, TuiDropdownOpenMonitorDirective, TuiDropdownDirective, TuiDropdownDriverDirective, TuiDropdownManualDirective, TuiDropdownPositionSidedDirective, TuiActiveZoneDirective, TuiObscuredDirective, PolymorpheusTemplate, PolymorpheusOutletDirective, AsyncPipe],
  styles: ["[_nghost-%COMP%]{display:inline-flex}.t-wrapper[_ngcontent-%COMP%]{border-radius:inherit;height:inherit;flex:1 1 auto;width:100%}.t-dropdown[_ngcontent-%COMP%]{height:100%}.t-primitive[_ngcontent-%COMP%]{padding:1rem}"],
  changeDetection: 0
});
__decorate([shouldCall(shouldClose)], TuiHostedDropdownComponent.prototype, "onKeyDownEsc", null);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiHostedDropdownComponent, [{
    type: Component,
    args: [{
      selector: "tui-hosted-dropdown",
      templateUrl: "./hosted-dropdown.template.html",
      styleUrls: ["./hosted-dropdown.style.less"],
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [tuiAsFocusableItemAccessor(TuiHostedDropdownComponent), {
        provide: TuiAccessorProxyDirective,
        deps: [[new Optional(), new Self(), TuiPositionAccessor]],
        useFactory: (position) => position === null || position === void 0 ? void 0 : position[0]
      }, {
        provide: TUI_HOSTED_DROPDOWN_COMPONENT,
        useExisting: TuiHostedDropdownComponent
      }],
      host: {
        "[$.class._hosted_dropdown_focused]": "focus$",
        "($.class._hosted_dropdown_focused)": "focus$"
      }
    }]
  }], function() {
    return [{
      type: TuiDropdownHoverDirective,
      decorators: [{
        type: Self
      }, {
        type: Optional
      }, {
        type: Inject,
        args: [TuiDropdownHoverDirective]
      }]
    }, {
      type: ElementRef,
      decorators: [{
        type: Inject,
        args: [ElementRef]
      }]
    }];
  }, {
    dropdownHost: [{
      type: ContentChild,
      args: [TuiHostedDropdownConnectorDirective, {
        read: ElementRef
      }]
    }],
    wrapper: [{
      type: ViewChild,
      args: ["wrapper", {
        read: ElementRef
      }]
    }],
    dropdownDirective: [{
      type: ViewChild,
      args: [TuiDropdownDirective]
    }],
    activeZone: [{
      type: ViewChild,
      args: [TuiActiveZoneDirective]
    }],
    content: [{
      type: Input
    }],
    sided: [{
      type: Input
    }],
    canOpen: [{
      type: Input
    }],
    open$: [{
      type: Output,
      args: ["openChange"]
    }],
    focusedChange: [{
      type: Output
    }],
    open: [{
      type: Input
    }],
    onFocusInOut: [{
      type: HostListener,
      args: ["focusin.capture.silent"]
    }, {
      type: HostListener,
      args: ["focusout.capture.silent"]
    }],
    onFocusIn: [{
      type: HostListener,
      args: ["focusin", ["$event.target"]]
    }],
    onClick: [{
      type: HostListener,
      args: ["click", ["$event.target"]]
    }],
    onKeyDownEsc: [{
      type: HostListener,
      args: ["document:keydown.silent.capture", ["$event"]]
    }],
    onArrow: [{
      type: HostListener,
      args: ["keydown.arrowDown", ["$event", "true"]]
    }, {
      type: HostListener,
      args: ["keydown.arrowUp", ["$event", "false"]]
    }]
  });
})();
var TuiHostedDropdownModule = class {
};
TuiHostedDropdownModule.ɵfac = function TuiHostedDropdownModule_Factory(t) {
  return new (t || TuiHostedDropdownModule)();
};
TuiHostedDropdownModule.ɵmod = ɵɵdefineNgModule({
  type: TuiHostedDropdownModule,
  declarations: [TuiAccessorProxyDirective, TuiDropdownOpenMonitorDirective, TuiHostedDropdownComponent, TuiHostedDropdownConnectorDirective],
  imports: [CommonModule, PolymorpheusModule, TuiLetModule, TuiObscuredModule, TuiActiveZoneModule, TuiDropdownModule],
  exports: [TuiHostedDropdownComponent, TuiHostedDropdownConnectorDirective, TuiDropdownOptionsDirective]
});
TuiHostedDropdownModule.ɵinj = ɵɵdefineInjector({
  imports: [[CommonModule, PolymorpheusModule, TuiLetModule, TuiObscuredModule, TuiActiveZoneModule, TuiDropdownModule]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiHostedDropdownModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, PolymorpheusModule, TuiLetModule, TuiObscuredModule, TuiActiveZoneModule, TuiDropdownModule],
      declarations: [TuiAccessorProxyDirective, TuiDropdownOpenMonitorDirective, TuiHostedDropdownComponent, TuiHostedDropdownConnectorDirective],
      exports: [TuiHostedDropdownComponent, TuiHostedDropdownConnectorDirective, TuiDropdownOptionsDirective]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/core/fesm2015/taiga-ui-core-components-label.js
var _c017 = ["tuiLabel", ""];
function TuiLabelComponent_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 3);
  }
  if (rf & 2) {
    const text_r1 = ctx.polymorpheusOutlet;
    ɵɵproperty("textContent", text_r1);
  }
}
var _c17 = ["*"];
var TuiLabelComponent = class {
  constructor(mode$) {
    this.mode$ = mode$;
    this.context = {
      $implicit: null
    };
  }
};
TuiLabelComponent.ɵfac = function TuiLabelComponent_Factory(t) {
  return new (t || TuiLabelComponent)(ɵɵdirectiveInject(TUI_MODE));
};
TuiLabelComponent.ɵcmp = ɵɵdefineComponent({
  type: TuiLabelComponent,
  selectors: [["label", "tuiLabel", ""]],
  contentQueries: function TuiLabelComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, NgControl, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.control = _t.first);
    }
  },
  hostVars: 2,
  hostBindings: function TuiLabelComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("$.data-mode.attr", function TuiLabelComponent___data_mode_attr_HostBindingHandler() {
        return ctx.mode$;
      });
    }
    if (rf & 2) {
      ɵɵclassProp("_control", ctx.control);
    }
  },
  inputs: {
    tuiLabel: "tuiLabel",
    context: "context"
  },
  features: [ɵɵProvidersFeature([MODE_PROVIDER])],
  attrs: _c017,
  ngContentSelectors: _c17,
  decls: 4,
  vars: 2,
  consts: [[1, "t-label"], ["class", "t-text", 3, "textContent", 4, "polymorpheusOutlet", "polymorpheusOutletContext"], [1, "t-content"], [1, "t-text", 3, "textContent"]],
  template: function TuiLabelComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵelementStart(0, "span", 0);
      ɵɵtemplate(1, TuiLabelComponent_span_1_Template, 1, 1, "span", 1);
      ɵɵelementEnd();
      ɵɵelementStart(2, "span", 2);
      ɵɵprojection(3);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵadvance(1);
      ɵɵproperty("polymorpheusOutlet", ctx.tuiLabel)("polymorpheusOutletContext", ctx.context);
    }
  },
  dependencies: [PolymorpheusOutletDirective],
  styles: ['[_nghost-%COMP%]{display:flex;min-height:2.75rem;justify-content:space-between;flex-direction:column;pointer-events:none}.t-label[_ngcontent-%COMP%]{font:var(--tui-font-text-s);max-width:100%;align-self:inherit;overflow:inherit;pointer-events:auto}._control[_nghost-%COMP%]   .t-label[_ngcontent-%COMP%]{margin-bottom:.25rem}.t-text[_ngcontent-%COMP%]{display:block;overflow:inherit;text-overflow:ellipsis}[_nghost-%COMP%]:not(._control)   .t-text[_ngcontent-%COMP%]{color:var(--tui-text-02)}[data-mode="onDark"][_nghost-%COMP%]   .t-text[_ngcontent-%COMP%]{color:var(--tui-text-02-night)}.t-content[_ngcontent-%COMP%]{line-height:1.5rem;overflow:inherit;text-overflow:ellipsis;pointer-events:auto}'],
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiLabelComponent, [{
    type: Component,
    args: [{
      selector: "label[tuiLabel]",
      templateUrl: "./label.template.html",
      styleUrls: ["./label.style.less"],
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [MODE_PROVIDER],
      host: {
        "($.data-mode.attr)": "mode$"
      }
    }]
  }], function() {
    return [{
      type: Observable,
      decorators: [{
        type: Inject,
        args: [TUI_MODE]
      }]
    }];
  }, {
    tuiLabel: [{
      type: Input
    }],
    context: [{
      type: Input
    }],
    control: [{
      type: ContentChild,
      args: [NgControl]
    }, {
      type: HostBinding,
      args: ["class._control"]
    }]
  });
})();
var TuiLabelModule = class {
};
TuiLabelModule.ɵfac = function TuiLabelModule_Factory(t) {
  return new (t || TuiLabelModule)();
};
TuiLabelModule.ɵmod = ɵɵdefineNgModule({
  type: TuiLabelModule,
  declarations: [TuiLabelComponent],
  imports: [PolymorpheusModule],
  exports: [TuiLabelComponent]
});
TuiLabelModule.ɵinj = ɵɵdefineInjector({
  imports: [[PolymorpheusModule]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiLabelModule, [{
    type: NgModule,
    args: [{
      imports: [PolymorpheusModule],
      declarations: [TuiLabelComponent],
      exports: [TuiLabelComponent]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/core/fesm2015/taiga-ui-core-components-primitive-checkbox.js
function TuiPrimitiveCheckboxComponent_tui_svg_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "tui-svg", 2);
  }
  if (rf & 2) {
    const src_r1 = ctx.polymorpheusOutlet;
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassProp("t-mark_on", !ctx_r0.empty);
    ɵɵproperty("src", src_r1);
  }
}
var _c018 = (a0) => ({
  $implicit: a0
});
var _c18 = ["*"];
var TUI_CHECKBOX_DEFAULT_OPTIONS = {
  size: "m",
  appearances: {
    unchecked: TuiAppearance.Outline,
    checked: TuiAppearance.Primary,
    indeterminate: TuiAppearance.Primary
  },
  icons: {
    checked: ({
      $implicit
    }) => $implicit === "m" ? "tuiIconCheck" : "tuiIconCheckLarge",
    indeterminate: ({
      $implicit
    }) => $implicit === "m" ? "tuiIconMinus" : "tuiIconMinusLarge"
  }
};
var TUI_CHECKBOX_OPTIONS = tuiCreateToken(TUI_CHECKBOX_DEFAULT_OPTIONS);
function tuiCheckboxOptionsProvider(options) {
  return tuiProvideOptions(TUI_CHECKBOX_OPTIONS, options, TUI_CHECKBOX_DEFAULT_OPTIONS);
}
var TuiPrimitiveCheckboxComponent = class {
  constructor(options) {
    this.options = options;
    this.size = this.options.size;
    this.disabled = false;
    this.focused = false;
    this.hovered = false;
    this.pressed = false;
    this.invalid = false;
    this.icon = this.options.icons.checked;
    this.value = false;
  }
  set valueSetter(value) {
    if (value !== false) {
      this.setCurrentIcon(value);
    }
    this.value = value;
  }
  get appearance() {
    switch (this.value) {
      case false:
        return this.options.appearances.unchecked;
      case true:
        return this.options.appearances.checked;
      default:
        return this.options.appearances.indeterminate;
    }
  }
  get empty() {
    return this.value === false;
  }
  setCurrentIcon(value) {
    this.icon = value === null ? this.options.icons.indeterminate : this.options.icons.checked;
  }
};
TuiPrimitiveCheckboxComponent.ɵfac = function TuiPrimitiveCheckboxComponent_Factory(t) {
  return new (t || TuiPrimitiveCheckboxComponent)(ɵɵdirectiveInject(TUI_CHECKBOX_OPTIONS));
};
TuiPrimitiveCheckboxComponent.ɵcmp = ɵɵdefineComponent({
  type: TuiPrimitiveCheckboxComponent,
  selectors: [["tui-primitive-checkbox"]],
  hostVars: 1,
  hostBindings: function TuiPrimitiveCheckboxComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("data-size", ctx.size);
    }
  },
  inputs: {
    size: "size",
    disabled: "disabled",
    focused: "focused",
    hovered: "hovered",
    pressed: "pressed",
    invalid: "invalid",
    valueSetter: ["value", "valueSetter"]
  },
  ngContentSelectors: _c18,
  decls: 3,
  vars: 10,
  consts: [["tuiWrapper", "", 3, "active", "appearance", "disabled", "focus", "hover", "invalid"], ["class", "t-mark", 3, "t-mark_on", "src", 4, "polymorpheusOutlet", "polymorpheusOutletContext"], [1, "t-mark", 3, "src"]],
  template: function TuiPrimitiveCheckboxComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵelementStart(0, "div", 0);
      ɵɵtemplate(1, TuiPrimitiveCheckboxComponent_tui_svg_1_Template, 1, 3, "tui-svg", 1);
      ɵɵprojection(2);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵproperty("active", ctx.pressed)("appearance", ctx.appearance)("disabled", ctx.disabled)("focus", ctx.focused)("hover", ctx.hovered)("invalid", ctx.invalid);
      ɵɵadvance(1);
      ɵɵproperty("polymorpheusOutlet", ctx.icon)("polymorpheusOutletContext", ɵɵpureFunction1(8, _c018, ctx.size));
    }
  },
  dependencies: [TuiSvgComponent, TuiWrapperDirective, PolymorpheusOutletDirective],
  styles: ["[_nghost-%COMP%]{display:block;font-size:0;flex-shrink:0}[data-size=m][_nghost-%COMP%]{width:1rem;height:1rem;border-radius:var(--tui-radius-xs)}[data-size=l][_nghost-%COMP%]{width:1.5rem;height:1.5rem;border-radius:var(--tui-radius-s)}.t-mark[_ngcontent-%COMP%]{transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;display:block;width:100%;height:100%;transform:scale(0)}.t-mark_on[_ngcontent-%COMP%]{transform:scale(1)}"],
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiPrimitiveCheckboxComponent, [{
    type: Component,
    args: [{
      selector: "tui-primitive-checkbox",
      templateUrl: "./primitive-checkbox.template.html",
      styleUrls: ["./primitive-checkbox.style.less"],
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], function() {
    return [{
      type: void 0,
      decorators: [{
        type: Inject,
        args: [TUI_CHECKBOX_OPTIONS]
      }]
    }];
  }, {
    size: [{
      type: Input
    }, {
      type: HostBinding,
      args: ["attr.data-size"]
    }],
    disabled: [{
      type: Input
    }],
    focused: [{
      type: Input
    }],
    hovered: [{
      type: Input
    }],
    pressed: [{
      type: Input
    }],
    invalid: [{
      type: Input
    }],
    valueSetter: [{
      type: Input,
      args: ["value"]
    }]
  });
})();
var TuiPrimitiveCheckboxModule = class {
};
TuiPrimitiveCheckboxModule.ɵfac = function TuiPrimitiveCheckboxModule_Factory(t) {
  return new (t || TuiPrimitiveCheckboxModule)();
};
TuiPrimitiveCheckboxModule.ɵmod = ɵɵdefineNgModule({
  type: TuiPrimitiveCheckboxModule,
  declarations: [TuiPrimitiveCheckboxComponent],
  imports: [TuiSvgModule, TuiWrapperModule, PolymorpheusModule],
  exports: [TuiPrimitiveCheckboxComponent]
});
TuiPrimitiveCheckboxModule.ɵinj = ɵɵdefineInjector({
  imports: [[TuiSvgModule, TuiWrapperModule, PolymorpheusModule]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiPrimitiveCheckboxModule, [{
    type: NgModule,
    args: [{
      imports: [TuiSvgModule, TuiWrapperModule, PolymorpheusModule],
      declarations: [TuiPrimitiveCheckboxComponent],
      exports: [TuiPrimitiveCheckboxComponent]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/core/fesm2015/taiga-ui-core-components-tooltip.js
function TuiTooltipComponent_tui_svg_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "tui-svg", 3);
  }
  if (rf & 2) {
    const src_r2 = ctx.polymorpheusOutlet;
    ɵɵproperty("src", src_r2);
  }
}
var TuiTooltipComponent = class extends TuiHintOptionsDirective {
  constructor(destroy$, mode$, options, isMobile) {
    super(options);
    this.isMobile = isMobile;
    this.mode = null;
    this.describeId = "";
    mode$.pipe(takeUntil(destroy$)).subscribe((mode) => {
      this.mode = mode;
    });
  }
  get computedAppearance() {
    return this.appearance || this.mode || "";
  }
  stopOnMobile(event) {
    var _a;
    if (this.isMobile) {
      event.preventDefault();
      event.stopPropagation();
    }
    (_a = this.driver$) === null || _a === void 0 ? void 0 : _a.toggle();
  }
};
TuiTooltipComponent.ɵfac = function TuiTooltipComponent_Factory(t) {
  return new (t || TuiTooltipComponent)(ɵɵdirectiveInject(TuiDestroyService, 2), ɵɵdirectiveInject(TUI_MODE), ɵɵdirectiveInject(TUI_HINT_OPTIONS), ɵɵdirectiveInject(TUI_IS_MOBILE));
};
TuiTooltipComponent.ɵcmp = ɵɵdefineComponent({
  type: TuiTooltipComponent,
  selectors: [["tui-tooltip"]],
  viewQuery: function TuiTooltipComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(TuiHintHoverDirective, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.driver$ = _t.first);
    }
  },
  hostVars: 1,
  hostBindings: function TuiTooltipComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("mousedown", function TuiTooltipComponent_mousedown_HostBindingHandler($event) {
        return ctx.stopOnMobile($event);
      });
    }
    if (rf & 2) {
      ɵɵattribute("data-appearance", ctx.computedAppearance);
    }
  },
  inputs: {
    content: "content",
    direction: "direction",
    appearance: "appearance",
    showDelay: "showDelay",
    hideDelay: "hideDelay",
    describeId: "describeId",
    context: "context"
  },
  features: [ɵɵProvidersFeature([TuiDestroyService, MODE_PROVIDER]), ɵɵInheritDefinitionFeature],
  decls: 4,
  vars: 11,
  consts: [["appearance", "icon", "automation-id", "tui-tooltip__icon", "tuiWrapper", "", 1, "t-tooltip-icon", 3, "hover", "tuiHint", "tuiHintAppearance", "tuiHintContext", "tuiHintDescribe", "tuiHintDirection", "tuiHintHideDelay", "tuiHintShowDelay"], ["driver", "tuiHintHover"], [3, "src", 4, "polymorpheusOutlet"], [3, "src"]],
  template: function TuiTooltipComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "span", 0, 1);
      ɵɵpipe(2, "async");
      ɵɵtemplate(3, TuiTooltipComponent_tui_svg_3_Template, 1, 1, "tui-svg", 2);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      const _r0 = ɵɵreference(1);
      ɵɵproperty("hover", ɵɵpipeBind1(2, 9, _r0) || null)("tuiHint", ctx.content)("tuiHintAppearance", ctx.computedAppearance)("tuiHintContext", ctx.context)("tuiHintDescribe", ctx.describeId)("tuiHintDirection", ctx.direction)("tuiHintHideDelay", ctx.hideDelay)("tuiHintShowDelay", ctx.showDelay);
      ɵɵadvance(3);
      ɵɵproperty("polymorpheusOutlet", ctx.icon);
    }
  },
  dependencies: [TuiSvgComponent, TuiWrapperDirective, TuiHintDirective, TuiHintDriverDirective, TuiHintHoverDirective, TuiHintPositionDirective, TuiHintDescribeDirective, PolymorpheusOutletDirective, AsyncPipe],
  styles: ['[_nghost-%COMP%]{transition-property:color;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:relative;display:inline-block;width:1.5rem;height:1.5rem;vertical-align:middle;font-size:0;line-height:0;pointer-events:auto;cursor:pointer;color:var(--tui-text-01)}[data-appearance=error][_nghost-%COMP%]{color:var(--tui-error-fill)}.t-tooltip-icon[_ngcontent-%COMP%]{display:inline-block;width:100%;height:100%;color:inherit}[tuiWrapper][data-appearance="textfield"][data-state="disabled"][_nghost-%COMP%]   .t-tooltip-icon[_ngcontent-%COMP%], [tuiWrapper][data-appearance="textfield"][data-state="disabled"]   [_nghost-%COMP%]   .t-tooltip-icon[_ngcontent-%COMP%]{opacity:1}'],
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTooltipComponent, [{
    type: Component,
    args: [{
      selector: "tui-tooltip",
      templateUrl: "./tooltip.template.html",
      styleUrls: ["./tooltip.style.less"],
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [TuiDestroyService, MODE_PROVIDER],
      inputs: ["content", "direction", "appearance", "showDelay", "hideDelay"]
    }]
  }], function() {
    return [{
      type: Observable,
      decorators: [{
        type: Self
      }, {
        type: Inject,
        args: [TuiDestroyService]
      }]
    }, {
      type: Observable,
      decorators: [{
        type: Inject,
        args: [TUI_MODE]
      }]
    }, {
      type: void 0,
      decorators: [{
        type: Inject,
        args: [TUI_HINT_OPTIONS]
      }]
    }, {
      type: void 0,
      decorators: [{
        type: Inject,
        args: [TUI_IS_MOBILE]
      }]
    }];
  }, {
    driver$: [{
      type: ViewChild,
      args: [TuiHintHoverDirective]
    }],
    describeId: [{
      type: Input
    }],
    context: [{
      type: Input
    }],
    computedAppearance: [{
      type: HostBinding,
      args: ["attr.data-appearance"]
    }],
    stopOnMobile: [{
      type: HostListener,
      args: ["mousedown", ["$event"]]
    }]
  });
})();
var TuiTooltipModule = class {
};
TuiTooltipModule.ɵfac = function TuiTooltipModule_Factory(t) {
  return new (t || TuiTooltipModule)();
};
TuiTooltipModule.ɵmod = ɵɵdefineNgModule({
  type: TuiTooltipModule,
  declarations: [TuiTooltipComponent],
  imports: [CommonModule, TuiWrapperModule, TuiSvgModule, TuiHintModule, PolymorpheusModule],
  exports: [TuiTooltipComponent]
});
TuiTooltipModule.ɵinj = ɵɵdefineInjector({
  imports: [[CommonModule, TuiWrapperModule, TuiSvgModule, TuiHintModule, PolymorpheusModule]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTooltipModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, TuiWrapperModule, TuiSvgModule, TuiHintModule, PolymorpheusModule],
      declarations: [TuiTooltipComponent],
      exports: [TuiTooltipComponent]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/core/fesm2015/taiga-ui-core-components-primitive-textfield.js
var _c019 = ["pre"];
var _c19 = ["focusableElement"];
function TuiPrimitiveTextfieldComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function TuiPrimitiveTextfieldComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function TuiPrimitiveTextfieldComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 17);
    ɵɵprojection(1, 2);
    ɵɵelementEnd();
  }
}
function TuiPrimitiveTextfieldComponent_div_12_tui_svg_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "tui-svg", 20);
  }
  if (rf & 2) {
    const src_r12 = ctx.polymorpheusOutlet;
    ɵɵproperty("src", src_r12);
  }
}
var _c23 = (a0) => ({
  $implicit: a0
});
function TuiPrimitiveTextfieldComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 18);
    ɵɵtemplate(1, TuiPrimitiveTextfieldComponent_div_12_tui_svg_1_Template, 1, 1, "tui-svg", 19);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("polymorpheusOutlet", ctx_r4.iconLeftContent)("polymorpheusOutletContext", ɵɵpureFunction1(2, _c23, ctx_r4.size));
  }
}
function TuiPrimitiveTextfieldComponent_label_14_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "label", 21);
    ɵɵprojection(1, 3);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r5 = ɵɵnextContext();
    ɵɵclassProp("t-placeholder_raised", ctx_r5.placeholderRaised);
    ɵɵproperty("for", ctx_r5.computedId);
  }
}
function TuiPrimitiveTextfieldComponent_div_20_tui_svg_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "tui-svg", 24);
  }
  if (rf & 2) {
    const src_r14 = ctx.polymorpheusOutlet;
    ɵɵproperty("src", src_r14);
  }
}
function TuiPrimitiveTextfieldComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 22);
    ɵɵtemplate(1, TuiPrimitiveTextfieldComponent_div_20_tui_svg_1_Template, 1, 1, "tui-svg", 23);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r7 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("polymorpheusOutlet", ctx_r7.controller.customContent);
  }
}
function TuiPrimitiveTextfieldComponent_span_21_tui_svg_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "tui-svg", 27);
  }
  if (rf & 2) {
    const src_r16 = ctx.polymorpheusOutlet;
    ɵɵproperty("src", src_r16);
  }
}
function TuiPrimitiveTextfieldComponent_span_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span", 25);
    ɵɵlistener("click.stop", function TuiPrimitiveTextfieldComponent_span_21_Template_span_click_stop_0_listener() {
      ɵɵrestoreView(_r18);
      const ctx_r17 = ɵɵnextContext();
      return ɵɵresetView(ctx_r17.clear());
    });
    ɵɵtemplate(1, TuiPrimitiveTextfieldComponent_span_21_tui_svg_1_Template, 1, 1, "tui-svg", 26);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r8 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("polymorpheusOutlet", ctx_r8.iconCleaner || ctx_r8.controller.options.iconCleaner)("polymorpheusOutletContext", ɵɵpureFunction1(2, _c23, ctx_r8.size));
  }
}
function TuiPrimitiveTextfieldComponent_tui_tooltip_22_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "tui-tooltip", 28);
  }
  if (rf & 2) {
    const ctx_r9 = ɵɵnextContext();
    ɵɵproperty("content", ctx_r9.hintOptions == null ? null : ctx_r9.hintOptions.content)("describeId", ctx_r9.computedId);
  }
}
function TuiPrimitiveTextfieldComponent_div_23_tui_svg_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "tui-svg", 20);
  }
  if (rf & 2) {
    const src_r20 = ctx.polymorpheusOutlet;
    ɵɵproperty("src", src_r20);
  }
}
function TuiPrimitiveTextfieldComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 29);
    ɵɵtemplate(1, TuiPrimitiveTextfieldComponent_div_23_tui_svg_1_Template, 1, 1, "tui-svg", 19);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r10 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("polymorpheusOutlet", ctx_r10.iconContent)("polymorpheusOutletContext", ɵɵpureFunction1(2, _c23, ctx_r10.size));
  }
}
var _c3 = [[["input"]], [["select"]], [["tuiContent"]], "*"];
var _c4 = ["input", "select", "tuiContent", "*"];
var _c5 = ["tuiTextfield", ""];
var TuiValueDecorationComponent = class {
  constructor(textfield, fontsReady$) {
    this.textfield = textfield;
    this.fontsReady$ = fontsReady$;
    this.prefix$ = new BehaviorSubject("");
    this.pre$ = merge(this.fontsReady$, this.prefix$).pipe(delay(0), filter(() => {
      var _a;
      return !!((_a = this.pre) === null || _a === void 0 ? void 0 : _a.nativeElement.isConnected);
    }), map(() => {
      var _a;
      return ((_a = this.pre) === null || _a === void 0 ? void 0 : _a.nativeElement.offsetWidth) || 0;
    }), distinctUntilChanged());
  }
  get isContextTable() {
    return this.textfield.appearance === TuiAppearance.Table;
  }
  get value() {
    return this.textfield.value;
  }
  get filler() {
    const {
      focused,
      placeholder,
      exampleText,
      value,
      textfield
    } = this;
    if (placeholder && exampleText) {
      return "";
    }
    return focused ? exampleText || textfield.filler.slice(value.length) : "";
  }
  get prefix() {
    return this.decorationsVisible ? this.textfield.prefix : "";
  }
  get postfix() {
    return this.decorationsVisible ? this.computedPostfix : "";
  }
  ngDoCheck() {
    this.prefix$.next(this.prefix);
  }
  get placeholder() {
    var _a;
    return ((_a = this.textfield.nativeFocusableElement) === null || _a === void 0 ? void 0 : _a.placeholder) || "";
  }
  get exampleText() {
    return !this.value && this.focused ? this.placeholder : "";
  }
  get decorationsVisible() {
    return !!this.value || this.focused && !this.placeholder;
  }
  get focused() {
    return this.textfield.computedFocused && !this.textfield.readOnly;
  }
  get computedPostfix() {
    return this.textfield.postfix && (this.filler || this.value) ? ` ${this.textfield.postfix}` : this.textfield.postfix;
  }
};
TuiValueDecorationComponent.ɵfac = function TuiValueDecorationComponent_Factory(t) {
  return new (t || TuiValueDecorationComponent)(ɵɵdirectiveInject(TUI_FOCUSABLE_ITEM_ACCESSOR), ɵɵdirectiveInject(TUI_FONTS_READY));
};
TuiValueDecorationComponent.ɵcmp = ɵɵdefineComponent({
  type: TuiValueDecorationComponent,
  selectors: [["tui-value-decoration"]],
  viewQuery: function TuiValueDecorationComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c019, 7, ElementRef);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.pre = _t.first);
    }
  },
  hostVars: 4,
  hostBindings: function TuiValueDecorationComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("animationstart", function TuiValueDecorationComponent_animationstart_HostBindingHandler() {
        return ctx.ngDoCheck();
      });
    }
    if (rf & 2) {
      ɵɵclassProp("_table", ctx.isContextTable)("_filler", ctx.filler);
    }
  },
  decls: 5,
  vars: 4,
  consts: [[1, "t-prefix", 3, "textContent"], ["pre", ""], [1, "t-ghost", 3, "textContent"], [1, "t-filler", 3, "textContent"], [1, "t-postfix", 3, "textContent"]],
  template: function TuiValueDecorationComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelement(0, "span", 0, 1)(2, "span", 2)(3, "span", 3)(4, "span", 4);
    }
    if (rf & 2) {
      ɵɵproperty("textContent", ctx.prefix);
      ɵɵadvance(2);
      ɵɵproperty("textContent", ctx.value);
      ɵɵadvance(1);
      ɵɵproperty("textContent", ctx.filler);
      ɵɵadvance(1);
      ɵɵproperty("textContent", ctx.postfix);
    }
  },
  styles: ['[_nghost-%COMP%]{position:absolute;display:block;width:100%;line-height:var(--tui-height);margin-top:calc(var(--tui-height) / -2);box-sizing:content-box;color:var(--tui-text-03);animation:tuiPresent 1s;white-space:nowrap}._table[_nghost-%COMP%]{position:static;margin-top:0}._filler[_nghost-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}tui-primitive-textfield   [tuiWrapper][data-mode="onDark"]   [_nghost-%COMP%]{color:var(--tui-text-03-night)}tui-primitive-textfield[data-size="m"]:not(._label-outside)   [_nghost-%COMP%]{line-height:calc(var(--tui-height) - .25rem)}.t-ghost[_ngcontent-%COMP%]{visibility:hidden;white-space:pre;text-overflow:clip}.t-prefix[_ngcontent-%COMP%], .t-postfix[_ngcontent-%COMP%]{white-space:pre;color:var(--tui-text-01)}tui-primitive-textfield   [tuiWrapper][data-mode="onDark"][_nghost-%COMP%]   .t-prefix[_ngcontent-%COMP%], tui-primitive-textfield   [tuiWrapper][data-mode="onDark"]   [_nghost-%COMP%]   .t-prefix[_ngcontent-%COMP%], tui-primitive-textfield   [tuiWrapper][data-mode="onDark"][_nghost-%COMP%]   .t-postfix[_ngcontent-%COMP%], tui-primitive-textfield   [tuiWrapper][data-mode="onDark"]   [_nghost-%COMP%]   .t-postfix[_ngcontent-%COMP%]{color:var(--tui-text-01-night)}.t-filler[_ngcontent-%COMP%]{max-width:100%;white-space:nowrap}']
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiValueDecorationComponent, [{
    type: Component,
    args: [{
      selector: "tui-value-decoration",
      templateUrl: "./value-decoration.template.html",
      styleUrls: ["./value-decoration.style.less"],
      // It follows Change Detection of PrimitiveTextfield
      // eslint-disable-next-line @angular-eslint/prefer-on-push-component-change-detection
      changeDetection: ChangeDetectionStrategy.Default
    }]
  }], function() {
    return [{
      type: void 0,
      decorators: [{
        type: Inject,
        args: [TUI_FOCUSABLE_ITEM_ACCESSOR]
      }]
    }, {
      type: void 0,
      decorators: [{
        type: Inject,
        args: [TUI_FONTS_READY]
      }]
    }];
  }, {
    pre: [{
      type: ViewChild,
      args: ["pre", {
        read: ElementRef,
        static: true
      }]
    }],
    isContextTable: [{
      type: HostBinding,
      args: ["class._table"]
    }],
    filler: [{
      type: HostBinding,
      args: ["class._filler"]
    }],
    ngDoCheck: [{
      type: HostListener,
      args: ["animationstart"]
    }]
  });
})();
var TUI_ICON_PADDINGS = {
  s: 1.25,
  m: 1.75,
  l: 2.25
};
var TuiPrimitiveTextfieldComponent = class extends AbstractTuiInteractive {
  constructor(controller, hintOptions, options, el) {
    super();
    this.controller = controller;
    this.hintOptions = hintOptions;
    this.options = options;
    this.el = el;
    this.editable = true;
    this.textfieldFiller = "";
    this.iconCleaner = this.options.iconCleaner;
    this.readOnly = false;
    this.invalid = false;
    this.disabled = false;
    this.textfieldPrefix = "";
    this.textfieldPostfix = "";
    this.value = "";
    this.valueChange = new EventEmitter();
    this.autofilled = false;
  }
  get prefix() {
    return this.textfieldPrefix || this.controller.prefix;
  }
  get postfix() {
    return this.textfieldPostfix || this.controller.postfix;
  }
  get filler() {
    return this.textfieldFiller || this.controller.filler;
  }
  get nativeFocusableElement() {
    if (this.computedDisabled || !this.focusableElement) {
      return null;
    }
    const {
      nativeElement
    } = this.focusableElement;
    return nativeElement.previousElementSibling || nativeElement;
  }
  get focused() {
    return tuiIsNativeFocusedIn(this.el.nativeElement);
  }
  get appearance() {
    return this.controller.appearance;
  }
  get size() {
    return this.controller.size;
  }
  get computedInvalid() {
    return !this.readOnly && !this.disabled && this.invalid;
  }
  get inputHidden() {
    var _a;
    return !!((_a = this.content) === null || _a === void 0 ? void 0 : _a.length);
  }
  get hasValue() {
    return !!this.value;
  }
  get hasCleaner() {
    return this.controller.cleaner && this.hasValue && !this.computedDisabled && !this.readOnly;
  }
  get hasTooltip() {
    var _a;
    return !!((_a = this.hintOptions) === null || _a === void 0 ? void 0 : _a.content) && !this.computedDisabled;
  }
  get hasCustomContent() {
    return !!this.controller.customContent;
  }
  get placeholderVisible() {
    var _a;
    const hasDecor = ((_a = this.nativeFocusableElement) === null || _a === void 0 ? void 0 : _a.placeholder) || this.prefix || this.postfix || this.filler;
    const showDecor = hasDecor && !this.readOnly && this.computedFocused;
    return !this.hasValue && !showDecor;
  }
  get hasPlaceholder() {
    return this.placeholderRaisable || this.placeholderVisible;
  }
  get placeholderRaised() {
    return this.placeholderRaisable && (this.computedFocused && !this.readOnly || this.hasValue || this.autofilled);
  }
  get borderStart() {
    return this.iconLeftContent ? this.iconPaddingLeft : 0;
  }
  get borderEnd() {
    return tuiGetBorder(!!this.iconContent, this.hasCleaner, this.hasTooltip, this.hasCustomContent, this.size);
  }
  get iconContent() {
    return this.controller.icon;
  }
  get iconLeftContent() {
    return this.controller.iconLeft;
  }
  get showHint() {
    var _a;
    return !!((_a = this.hintOptions) === null || _a === void 0 ? void 0 : _a.content) && (this.options.hintOnDisabled || !this.computedDisabled);
  }
  // Safari expiration date autofill workaround
  get name() {
    var _a;
    return ((_a = this.nativeFocusableElement) === null || _a === void 0 ? void 0 : _a.autocomplete) === "cc-exp" ? "ccexpiryyear" : null;
  }
  get computedId() {
    var _a;
    return ((_a = this.nativeFocusableElement) === null || _a === void 0 ? void 0 : _a.id) || "";
  }
  onFocused(focused) {
    this.updateFocused(focused);
  }
  getIndent$(element) {
    return fromEvent(element, "scroll").pipe(map(() => -1 * Math.max(element.scrollLeft, 0)));
  }
  clear() {
    if (this.nativeFocusableElement) {
      this.nativeFocusableElement.value = "";
    }
    this.updateValue("");
  }
  onMouseDown(event) {
    const {
      nativeFocusableElement
    } = this;
    if (!nativeFocusableElement || event.target === nativeFocusableElement) {
      return;
    }
    event.preventDefault();
    nativeFocusableElement.focus();
  }
  onModelChange(value) {
    this.updateValue(value);
  }
  onAutofilled(autofilled) {
    this.updateAutofilled(autofilled);
  }
  detectRetargetFromLabel(event) {
    if (tuiRetargetedBoundaryCrossing(event)) {
      event.stopImmediatePropagation();
    }
  }
  get iconPaddingLeft() {
    return TUI_ICON_PADDINGS[this.size];
  }
  get placeholderRaisable() {
    return this.size !== "s" && !this.controller.labelOutside;
  }
  updateAutofilled(autofilled) {
    if (this.autofilled === autofilled) {
      return;
    }
    this.autofilled = autofilled;
  }
  updateValue(value) {
    this.value = value;
    this.valueChange.emit(value);
  }
};
TuiPrimitiveTextfieldComponent.ɵfac = function TuiPrimitiveTextfieldComponent_Factory(t) {
  return new (t || TuiPrimitiveTextfieldComponent)(ɵɵdirectiveInject(TUI_TEXTFIELD_WATCHED_CONTROLLER), ɵɵdirectiveInject(TuiHintOptionsDirective, 8), ɵɵdirectiveInject(TUI_TEXTFIELD_OPTIONS), ɵɵdirectiveInject(ElementRef));
};
TuiPrimitiveTextfieldComponent.ɵcmp = ɵɵdefineComponent({
  type: TuiPrimitiveTextfieldComponent,
  selectors: [["tui-primitive-textfield"]],
  contentQueries: function TuiPrimitiveTextfieldComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, PolymorpheusOutletDirective, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.content = _t);
    }
  },
  viewQuery: function TuiPrimitiveTextfieldComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c19, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.focusableElement = _t.first);
    }
  },
  hostVars: 15,
  hostBindings: function TuiPrimitiveTextfieldComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("focusin", function TuiPrimitiveTextfieldComponent_focusin_HostBindingHandler() {
        return ctx.onFocused(true);
      })("focusout", function TuiPrimitiveTextfieldComponent_focusout_HostBindingHandler() {
        return ctx.onFocused(false);
      });
    }
    if (rf & 2) {
      ɵɵattribute("data-size", ctx.size);
      ɵɵstyleProp("--border-start", ctx.borderStart, "rem")("--border-end", ctx.borderEnd, "rem");
      ɵɵclassProp("_autofilled", ctx.autofilled)("_label-outside", ctx.controller.labelOutside)("_readonly", ctx.readOnly)("_invalid", ctx.computedInvalid)("_hidden", ctx.inputHidden);
    }
  },
  inputs: {
    editable: "editable",
    textfieldFiller: ["filler", "textfieldFiller"],
    iconCleaner: "iconCleaner",
    readOnly: "readOnly",
    invalid: "invalid",
    disabled: "disabled",
    textfieldPrefix: ["prefix", "textfieldPrefix"],
    textfieldPostfix: ["postfix", "textfieldPostfix"],
    value: "value"
  },
  outputs: {
    valueChange: "valueChange"
  },
  features: [ɵɵProvidersFeature([tuiAsFocusableItemAccessor(TuiPrimitiveTextfieldComponent), TEXTFIELD_CONTROLLER_PROVIDER]), ɵɵInheritDefinitionFeature],
  ngContentSelectors: _c4,
  decls: 24,
  vars: 37,
  consts: [[4, "ngIf"], ["automation-id", "tui-primitive-textfield__wrapper", "tuiWrapper", "", 3, "active", "appearance", "disabled", "focus", "hover", "invalid", "readOnly", "click.prevent.silent", "mousedown", "tuiAutofilledChange"], ["automation-id", "tui-primitive-textfield__native-input", "tuiMaskAccessor", "", 1, "t-input", 3, "disabled", "id", "ngModel", "readOnly", "tuiFocusable", "ngModelChange"], ["focusableElement", ""], ["automation-id", "tui-primitive-textfield__value", "class", "t-input t-input_template", 4, "ngIf"], [1, "t-content"], ["class", "t-icon t-icon_left t-textfield-icon", 4, "ngIf"], [1, "t-wrapper"], ["automation-id", "tui-primitive-textfield__placeholder", "class", "t-placeholder", 3, "t-placeholder_raised", "for", 4, "ngIf"], [1, "t-wrapper-value-decoration"], ["aria-hidden", "true", "automation-id", "tui-primitive-textfield__value-decoration", 1, "t-value-decoration"], ["decor", ""], [1, "t-icons"], ["automation-id", "tui-primitive-textfield__custom-content", "class", "t-custom-content", 4, "ngIf"], ["appearance", "icon", "automation-id", "tui-primitive-textfield__cleaner", "tuiWrapper", "", "class", "t-cleaner", 3, "click.stop", 4, "ngIf"], ["automation-id", "tui-primitive-textfield__tooltip", "class", "t-tooltip", 3, "content", "describeId", 4, "ngIf"], ["class", "t-icon t-textfield-icon", 4, "ngIf"], ["automation-id", "tui-primitive-textfield__value", 1, "t-input", "t-input_template"], [1, "t-icon", "t-icon_left", "t-textfield-icon"], ["appearance", "icon", "tuiWrapper", "", 3, "src", 4, "polymorpheusOutlet", "polymorpheusOutletContext"], ["appearance", "icon", "tuiWrapper", "", 3, "src"], ["automation-id", "tui-primitive-textfield__placeholder", 1, "t-placeholder", 3, "for"], ["automation-id", "tui-primitive-textfield__custom-content", 1, "t-custom-content"], ["class", "t-custom-icon", 3, "src", 4, "polymorpheusOutlet"], [1, "t-custom-icon", 3, "src"], ["appearance", "icon", "automation-id", "tui-primitive-textfield__cleaner", "tuiWrapper", "", 1, "t-cleaner", 3, "click.stop"], [3, "src", 4, "polymorpheusOutlet", "polymorpheusOutletContext"], [3, "src"], ["automation-id", "tui-primitive-textfield__tooltip", 1, "t-tooltip", 3, "content", "describeId"], [1, "t-icon", "t-textfield-icon"]],
  template: function TuiPrimitiveTextfieldComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef(_c3);
      ɵɵtemplate(0, TuiPrimitiveTextfieldComponent_ng_container_0_Template, 1, 0, "ng-container", 0);
      ɵɵpipe(1, "async");
      ɵɵtemplate(2, TuiPrimitiveTextfieldComponent_ng_container_2_Template, 1, 0, "ng-container", 0);
      ɵɵpipe(3, "async");
      ɵɵelementStart(4, "div", 1);
      ɵɵlistener("click.prevent.silent", function TuiPrimitiveTextfieldComponent_Template_div_click_prevent_silent_4_listener($event) {
        return ctx.detectRetargetFromLabel($event);
      })("mousedown", function TuiPrimitiveTextfieldComponent_Template_div_mousedown_4_listener($event) {
        return ctx.onMouseDown($event);
      })("tuiAutofilledChange", function TuiPrimitiveTextfieldComponent_Template_div_tuiAutofilledChange_4_listener($event) {
        return ctx.onAutofilled($event);
      });
      ɵɵpipe(5, "async");
      ɵɵprojection(6);
      ɵɵprojection(7, 1);
      ɵɵelementStart(8, "input", 2, 3);
      ɵɵlistener("ngModelChange", function TuiPrimitiveTextfieldComponent_Template_input_ngModelChange_8_listener($event) {
        return ctx.onModelChange($event);
      });
      ɵɵelementEnd();
      ɵɵtemplate(10, TuiPrimitiveTextfieldComponent_div_10_Template, 2, 0, "div", 4);
      ɵɵelementStart(11, "div", 5);
      ɵɵtemplate(12, TuiPrimitiveTextfieldComponent_div_12_Template, 2, 4, "div", 6);
      ɵɵelementStart(13, "div", 7);
      ɵɵtemplate(14, TuiPrimitiveTextfieldComponent_label_14_Template, 2, 3, "label", 8);
      ɵɵelementStart(15, "div", 9)(16, "tui-value-decoration", 10, 11);
      ɵɵpipe(18, "async");
      ɵɵelementEnd()()();
      ɵɵelementStart(19, "div", 12);
      ɵɵtemplate(20, TuiPrimitiveTextfieldComponent_div_20_Template, 2, 1, "div", 13)(21, TuiPrimitiveTextfieldComponent_span_21_Template, 2, 4, "span", 14)(22, TuiPrimitiveTextfieldComponent_tui_tooltip_22_Template, 1, 2, "tui-tooltip", 15)(23, TuiPrimitiveTextfieldComponent_div_23_Template, 2, 4, "div", 16);
      ɵɵelementEnd()()();
    }
    if (rf & 2) {
      const _r2 = ɵɵreference(9);
      const _r6 = ɵɵreference(17);
      ɵɵproperty("ngIf", ɵɵpipeBind1(1, 29, ctx.content == null ? null : ctx.content.changes));
      ɵɵadvance(2);
      ɵɵproperty("ngIf", ɵɵpipeBind1(3, 31, ctx.hintOptions == null ? null : ctx.hintOptions.change$));
      ɵɵadvance(2);
      ɵɵstyleProp("--text-indent", ɵɵpipeBind1(5, 33, _r6.pre$), "px");
      ɵɵproperty("active", ctx.pseudoActive)("appearance", ctx.appearance)("disabled", ctx.disabled)("focus", ctx.computedFocused)("hover", ctx.pseudoHover)("invalid", ctx.computedInvalid)("readOnly", ctx.readOnly);
      ɵɵadvance(4);
      ɵɵproperty("disabled", ctx.computedDisabled)("id", ctx.id)("ngModel", ctx.value)("readOnly", ctx.readOnly || !ctx.editable)("tuiFocusable", ctx.computedFocusable);
      ɵɵattribute("aria-invalid", ctx.computedInvalid)("name", ctx.name);
      ɵɵadvance(2);
      ɵɵproperty("ngIf", ctx.inputHidden);
      ɵɵadvance(2);
      ɵɵproperty("ngIf", ctx.iconLeftContent);
      ɵɵadvance(2);
      ɵɵproperty("ngIf", ctx.hasPlaceholder);
      ɵɵadvance(2);
      ɵɵstyleProp("text-indent", ɵɵpipeBind1(18, 35, ctx.getIndent$(_r2)), "px");
      ɵɵclassProp("t-has-value", ctx.value);
      ɵɵadvance(4);
      ɵɵproperty("ngIf", ctx.hasCustomContent);
      ɵɵadvance(1);
      ɵɵproperty("ngIf", ctx.hasCleaner);
      ɵɵadvance(1);
      ɵɵproperty("ngIf", ctx.showHint);
      ɵɵadvance(1);
      ɵɵproperty("ngIf", ctx.iconContent);
    }
  },
  dependencies: [TuiSvgComponent, TuiValueDecorationComponent, TuiTooltipComponent, NgIf, TuiWrapperDirective, TuiAutofilledDirective, TuiMaskAccessorDirective, DefaultValueAccessor, NgControlStatus, NgModel, TuiFocusableDirective, PolymorpheusOutletDirective, AsyncPipe],
  styles: ['[_nghost-%COMP%]{font:var(--tui-font-text-s);color:var(--tui-text-01);position:relative;display:block;text-align:left;border-radius:var(--tui-radius-m);height:var(--tui-height);min-height:var(--tui-height);max-height:var(--tui-height)}[data-size=s][_nghost-%COMP%]{--tui-height: var(--tui-height-s)}[data-size=m][_nghost-%COMP%]{--tui-height: var(--tui-height-m)}[data-size=l][_nghost-%COMP%]{--tui-height: var(--tui-height-l);font:var(--tui-font-text-m);line-height:1.25rem}.t-input[_ngcontent-%COMP%]{font:var(--tui-font-text-s);color:var(--tui-text-01);padding:0;margin:0;border-width:0;border-radius:inherit;background:none;font-size:inherit;line-height:inherit;font-weight:inherit;color:inherit;caret-color:currentColor;outline:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;word-break:keep-all;-webkit-text-fill-color:currentColor;position:absolute;top:0;left:0;width:100%;height:100%;border-style:solid;border-color:transparent;border-inline-start-width:var(--border-start, 0);border-inline-end-width:var(--border-end, 0);text-indent:var(--text-indent);text-align:inherit;box-sizing:border-box;white-space:nowrap;overflow:hidden;text-transform:inherit;resize:none}.t-input[_ngcontent-%COMP%]:-webkit-autofill, .t-input[_ngcontent-%COMP%]:-webkit-autofill:hover, .t-input[_ngcontent-%COMP%]:-webkit-autofill:focus{caret-color:var(--tui-base-09);border-radius:inherit;color:inherit!important;background-color:transparent!important;-webkit-text-fill-color:var(--tui-text-01)!important;border-color:var(--tui-autofill);-webkit-box-shadow:0 0 0 100rem var(--tui-autofill) inset!important}.t-input[_ngcontent-%COMP%]:-webkit-autofill, .t-input[_ngcontent-%COMP%]:-webkit-autofill:first-line{font-size:inherit;line-height:inherit}.t-input[_ngcontent-%COMP%]::-webkit-caps-lock-indicator, .t-input[_ngcontent-%COMP%]::-webkit-contacts-auto-fill-button, .t-input[_ngcontent-%COMP%]::-webkit-credit-card-auto-fill-button, .t-input[_ngcontent-%COMP%]::-webkit-credentials-auto-fill-button, .t-input[_ngcontent-%COMP%]::-webkit-strong-password-auto-fill-button{content:none!important;position:absolute;left:-62.4375rem;top:-62.4375rem;z-index:-999;display:none!important;background:transparent!important;pointer-events:none!important}.t-input[_ngcontent-%COMP%]::placeholder{color:var(--tui-text-03);opacity:0}._focused[_nghost-%COMP%]:not(._readonly)   .t-input[_ngcontent-%COMP%]::placeholder, tui-primitive-textfield._focused:not(._readonly)[_nghost-%COMP%]   .t-input[_ngcontent-%COMP%]::placeholder, tui-primitive-textfield._focused:not(._readonly)   [_nghost-%COMP%]   .t-input[_ngcontent-%COMP%]::placeholder, tui-textarea._focused:not(._readonly)[_nghost-%COMP%]   .t-input[_ngcontent-%COMP%]::placeholder, tui-textarea._focused:not(._readonly)   [_nghost-%COMP%]   .t-input[_ngcontent-%COMP%]::placeholder, tui-text-area._focused:not(._readonly)[_nghost-%COMP%]   .t-input[_ngcontent-%COMP%]::placeholder, tui-text-area._focused:not(._readonly)   [_nghost-%COMP%]   .t-input[_ngcontent-%COMP%]::placeholder{opacity:1}[tuiWrapper][data-mode=onDark][_ngcontent-%COMP%]   .t-input[_ngcontent-%COMP%]:-webkit-autofill, .t-input   [tuiWrapper][data-mode="onDark"][_nghost-%COMP%]:-webkit-autofill, [tuiWrapper][data-mode="onDark"]   [_nghost-%COMP%]:-webkit-autofill, [tuiWrapper][data-mode=onDark][_ngcontent-%COMP%]   .t-input[_ngcontent-%COMP%]:-webkit-autofill:hover, .t-input   [tuiWrapper][data-mode="onDark"][_nghost-%COMP%]:-webkit-autofill:hover, [tuiWrapper][data-mode="onDark"]   [_nghost-%COMP%]:-webkit-autofill:hover, [tuiWrapper][data-mode=onDark][_ngcontent-%COMP%]   .t-input[_ngcontent-%COMP%]:-webkit-autofill:focus, .t-input   [tuiWrapper][data-mode="onDark"][_nghost-%COMP%]:-webkit-autofill:focus, [tuiWrapper][data-mode="onDark"]   [_nghost-%COMP%]:-webkit-autofill:focus{caret-color:var(--tui-base-09);border-radius:inherit;color:inherit!important;background-color:transparent!important;-webkit-text-fill-color:var(--tui-text-01-night)!important;border-color:var(--tui-autofill-night);-webkit-box-shadow:0 0 0 100rem var(--tui-autofill-night) inset!important}[tuiWrapper][data-mode=onDark][_ngcontent-%COMP%]   .t-input[_ngcontent-%COMP%]::placeholder, .t-input   [tuiWrapper][data-mode="onDark"][_nghost-%COMP%]::placeholder, [tuiWrapper][data-mode="onDark"]   [_nghost-%COMP%]::placeholder{color:var(--tui-text-03-night)}[data-size=s][_nghost-%COMP%]   .t-input[_ngcontent-%COMP%], .t-input   tui-primitive-textfield[data-size="s"][_nghost-%COMP%]:not(tui-primitive-textfield), tui-primitive-textfield[data-size="s"]   [_nghost-%COMP%]:not(tui-primitive-textfield), .t-input   tui-textarea[data-size="s"][_nghost-%COMP%]:not(tui-textarea), tui-textarea[data-size="s"]   [_nghost-%COMP%]:not(tui-textarea), .t-input   tui-text-area[data-size="s"][_nghost-%COMP%]:not(tui-text-area), tui-text-area[data-size="s"]   [_nghost-%COMP%]:not(tui-text-area){padding:0 var(--tui-padding-s)}[data-size=m][_nghost-%COMP%]   .t-input[_ngcontent-%COMP%], .t-input   tui-primitive-textfield[data-size="m"][_nghost-%COMP%]:not(tui-primitive-textfield), tui-primitive-textfield[data-size="m"]   [_nghost-%COMP%]:not(tui-primitive-textfield), .t-input   tui-textarea[data-size="m"][_nghost-%COMP%]:not(tui-textarea), tui-textarea[data-size="m"]   [_nghost-%COMP%]:not(tui-textarea), .t-input   tui-text-area[data-size="m"][_nghost-%COMP%]:not(tui-text-area), tui-text-area[data-size="m"]   [_nghost-%COMP%]:not(tui-text-area){padding:0 var(--tui-padding-m)}[data-size=l][_nghost-%COMP%]   .t-input[_ngcontent-%COMP%], .t-input   tui-primitive-textfield[data-size="l"][_nghost-%COMP%]:not(tui-primitive-textfield), tui-primitive-textfield[data-size="l"]   [_nghost-%COMP%]:not(tui-primitive-textfield), .t-input   tui-textarea[data-size="l"][_nghost-%COMP%]:not(tui-textarea), tui-textarea[data-size="l"]   [_nghost-%COMP%]:not(tui-textarea), .t-input   tui-text-area[data-size="l"][_nghost-%COMP%]:not(tui-text-area), tui-text-area[data-size="l"]   [_nghost-%COMP%]:not(tui-text-area){padding:0 var(--tui-padding-l)}._disabled[_nghost-%COMP%]   .t-input[_ngcontent-%COMP%], .t-input   tui-primitive-textfield._disabled[_nghost-%COMP%], tui-primitive-textfield._disabled   [_nghost-%COMP%], .t-input   tui-textarea._disabled[_nghost-%COMP%], tui-textarea._disabled   [_nghost-%COMP%], .t-input   tui-text-area._disabled[_nghost-%COMP%], tui-text-area._disabled   [_nghost-%COMP%]{pointer-events:none}[data-size=l][_nghost-%COMP%]:not(._label-outside)   .t-input[_ngcontent-%COMP%], .t-input   tui-primitive-textfield[data-size="l"]:not(._label-outside)[_nghost-%COMP%]:not(tui-primitive-textfield), tui-primitive-textfield[data-size="l"]:not(._label-outside)   [_nghost-%COMP%]:not(tui-primitive-textfield){padding-top:1.25rem}[data-size=l][_nghost-%COMP%]:not(._label-outside)   .t-input[_ngcontent-%COMP%]:-webkit-autofill + .t-content[_ngcontent-%COMP%]   .t-placeholder[_ngcontent-%COMP%], .t-input   tui-primitive-textfield[data-size="l"]:not(._label-outside)[_nghost-%COMP%]:not(tui-primitive-textfield):-webkit-autofill + .t-content[_ngcontent-%COMP%]   .t-placeholder[_ngcontent-%COMP%], tui-primitive-textfield[data-size="l"]:not(._label-outside)   [_nghost-%COMP%]:not(tui-primitive-textfield):-webkit-autofill + .t-content[_ngcontent-%COMP%]   .t-placeholder[_ngcontent-%COMP%]{font-size:.8156rem;transform:translateY(-.625rem)}[data-size=m][_nghost-%COMP%]:not(._label-outside)   .t-input[_ngcontent-%COMP%], .t-input   tui-primitive-textfield[data-size="m"]:not(._label-outside)[_nghost-%COMP%]:not(tui-primitive-textfield), tui-primitive-textfield[data-size="m"]:not(._label-outside)   [_nghost-%COMP%]:not(tui-primitive-textfield){padding-top:1rem}[data-size=m][_nghost-%COMP%]:not(._label-outside)   .t-input[_ngcontent-%COMP%]:-webkit-autofill + .t-content[_ngcontent-%COMP%]   .t-placeholder[_ngcontent-%COMP%], .t-input   tui-primitive-textfield[data-size="m"]:not(._label-outside)[_nghost-%COMP%]:not(tui-primitive-textfield):-webkit-autofill + .t-content[_ngcontent-%COMP%]   .t-placeholder[_ngcontent-%COMP%], tui-primitive-textfield[data-size="m"]:not(._label-outside)   [_nghost-%COMP%]:not(tui-primitive-textfield):-webkit-autofill + .t-content[_ngcontent-%COMP%]   .t-placeholder[_ngcontent-%COMP%]{font-size:.69rem;transform:translateY(-.5rem)}._hidden[_nghost-%COMP%]   input.t-input[_ngcontent-%COMP%], .t-input   tui-primitive-textfield._hidden[_nghost-%COMP%], tui-primitive-textfield._hidden   [_nghost-%COMP%]{opacity:0;text-indent:-10em;-webkit-user-select:none}.t-content[_ngcontent-%COMP%]{display:flex;height:100%;width:100%;box-sizing:border-box;align-items:center;overflow:hidden}[data-size=s][_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{padding:0 var(--tui-padding-s)}[data-size=m][_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{padding:0 var(--tui-padding-m)}[data-size=l][_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{padding:0 var(--tui-padding-l)}.t-wrapper[_ngcontent-%COMP%]{flex:1;min-width:0;-webkit-padding-end:.25rem;padding-inline-end:.25rem}.t-placeholder[_ngcontent-%COMP%]{transition-property:transform,font-size,color,letter-spacing;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;width:100%;-webkit-user-select:none;-moz-user-select:none;user-select:none;font:var(--tui-font-text-s);color:var(--tui-text-02);pointer-events:none;will-change:transform;transform:translateY(0)}@supports (-webkit-hyphens: none){.t-placeholder[_ngcontent-%COMP%]{will-change:unset;transition-property:transform,color,letter-spacing}}.t-placeholder_raised[_ngcontent-%COMP%]{transform:translateY(-.625rem)}[data-size=m][_nghost-%COMP%]   .t-placeholder_raised[_ngcontent-%COMP%]{font:var(--tui-font-text-xs);line-height:1.25rem;transform:translateY(-.5rem);letter-spacing:.025rem}._invalid[_nghost-%COMP%]:not(._focused)   .t-placeholder_raised[_ngcontent-%COMP%], ._invalid[_nghost-%COMP%]:not(._focused):hover   .t-placeholder_raised[_ngcontent-%COMP%]{color:var(--tui-error-fill)}._invalid[_nghost-%COMP%]:not(._focused)   [tuiWrapper][data-mode=onDark][_ngcontent-%COMP%]   .t-placeholder_raised[_ngcontent-%COMP%], ._invalid[_nghost-%COMP%]:not(._focused):hover   [tuiWrapper][data-mode=onDark][_ngcontent-%COMP%]   .t-placeholder_raised[_ngcontent-%COMP%]{color:var(--tui-error-fill-night)}._focused[_nghost-%COMP%]   .t-placeholder[_ngcontent-%COMP%], [data-size=m]._focused._label-outside[_nghost-%COMP%]   .t-placeholder[_ngcontent-%COMP%], [data-size=l]._focused._label-outside[_nghost-%COMP%]   .t-placeholder[_ngcontent-%COMP%]{color:var(--tui-text-03)}[data-size=l][_nghost-%COMP%]   .t-placeholder[_ngcontent-%COMP%]{font:var(--tui-font-text-m);line-height:1.25rem}[data-size=l][_nghost-%COMP%]   .t-placeholder_raised[_ngcontent-%COMP%]{font-size:.8156rem}[data-size=m]._focused[_nghost-%COMP%]:not(._label-outside)   .t-placeholder[_ngcontent-%COMP%], [data-size=l]._focused[_nghost-%COMP%]:not(._label-outside)   .t-placeholder[_ngcontent-%COMP%]{color:var(--tui-text-01)}[tuiWrapper][data-mode=onDark][_ngcontent-%COMP%]   .t-placeholder[_ngcontent-%COMP%]{color:var(--tui-text-02-night)}[data-size=m]._focused[_nghost-%COMP%]:not(._label-outside)   [tuiWrapper][data-mode=onDark][_ngcontent-%COMP%]   .t-placeholder[_ngcontent-%COMP%], [data-size=l]._focused[_nghost-%COMP%]:not(._label-outside)   [tuiWrapper][data-mode=onDark][_ngcontent-%COMP%]   .t-placeholder[_ngcontent-%COMP%]{color:var(--tui-text-01-night)}._focused[_nghost-%COMP%]   [tuiWrapper][data-mode=onDark][_ngcontent-%COMP%]   .t-placeholder[_ngcontent-%COMP%], [data-size=m]._focused._label-outside[_nghost-%COMP%]   [tuiWrapper][data-mode=onDark][_ngcontent-%COMP%]   .t-placeholder[_ngcontent-%COMP%], [data-size=l]._focused._label-outside[_nghost-%COMP%]   [tuiWrapper][data-mode=onDark][_ngcontent-%COMP%]   .t-placeholder[_ngcontent-%COMP%]{color:var(--tui-text-02-night)}.t-cleaner[_ngcontent-%COMP%]{position:relative;display:flex;width:1.5rem;height:1.5rem;align-items:center;justify-content:center;box-sizing:border-box;cursor:pointer;pointer-events:none;pointer-events:auto}._readonly[_nghost-%COMP%]   .t-cleaner[_ngcontent-%COMP%], ._disabled[_nghost-%COMP%]   .t-cleaner[_ngcontent-%COMP%]{pointer-events:none}.t-icon[_ngcontent-%COMP%]{position:relative;display:flex;width:1.5rem;height:1.5rem;align-items:center;justify-content:center;box-sizing:border-box;cursor:pointer;pointer-events:none}[data-size=s][_nghost-%COMP%]   .t-icon_left[_ngcontent-%COMP%]{-webkit-margin-start:-.375rem;margin-inline-start:-.375rem}[data-size=m][_nghost-%COMP%]   .t-icon_left[_ngcontent-%COMP%]{-webkit-margin-start:-.125rem;margin-inline-start:-.125rem;-webkit-margin-end:.375rem;margin-inline-end:.375rem}[data-size=l][_nghost-%COMP%]   .t-icon_left[_ngcontent-%COMP%]{-webkit-margin-end:.75rem;margin-inline-end:.75rem}.t-icons[_ngcontent-%COMP%]{display:flex;align-items:center}[data-size=m][_nghost-%COMP%]   .t-icons[_ngcontent-%COMP%]{-webkit-margin-end:-.125rem;margin-inline-end:-.125rem}[data-size=s][_nghost-%COMP%]   .t-icons[_ngcontent-%COMP%]{-webkit-margin-end:-.375rem;margin-inline-end:-.375rem}[_nghost-%COMP%]:not([data-size="s"])   .t-icons[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:not(:first-child){-webkit-margin-start:.25rem;margin-inline-start:.25rem}._autofilled[data-size=s][_nghost-%COMP%]   .t-placeholder[_ngcontent-%COMP%], ._autofilled._label-outside[_nghost-%COMP%]   .t-placeholder[_ngcontent-%COMP%], ._autofilled[_nghost-%COMP%]   .t-value-decoration[_ngcontent-%COMP%]:not(.t-has-value){visibility:hidden}.t-custom-content[_ngcontent-%COMP%]{position:relative;display:flex;align-items:center;justify-content:center;min-width:2rem;height:2rem;pointer-events:none}.t-custom-icon[_ngcontent-%COMP%]{width:2rem;height:100%}.t-input[_ngcontent-%COMP%]:not(:first-child){display:none}[data-size][_nghost-%COMP%]   .t-input_template[_ngcontent-%COMP%]{display:flex;width:calc(100% - 1rem);max-width:calc(100% - 1rem);align-items:center;pointer-events:none;-webkit-padding-end:0;padding-inline-end:0}.t-text-template[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.t-wrapper-value-decoration[_ngcontent-%COMP%]{position:relative;pointer-events:none}'],
  changeDetection: 0
});
__decorate([tuiPure], TuiPrimitiveTextfieldComponent.prototype, "getIndent$", null);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiPrimitiveTextfieldComponent, [{
    type: Component,
    args: [{
      selector: "tui-primitive-textfield",
      templateUrl: "./primitive-textfield.template.html",
      styleUrls: ["./primitive-textfield.style.less"],
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [tuiAsFocusableItemAccessor(TuiPrimitiveTextfieldComponent), TEXTFIELD_CONTROLLER_PROVIDER],
      host: {
        "[class._autofilled]": "autofilled",
        "[class._label-outside]": "controller.labelOutside"
      }
    }]
  }], function() {
    return [{
      type: TuiTextfieldController,
      decorators: [{
        type: Inject,
        args: [TUI_TEXTFIELD_WATCHED_CONTROLLER]
      }]
    }, {
      type: TuiHintOptionsDirective,
      decorators: [{
        type: Optional
      }, {
        type: Inject,
        args: [TuiHintOptionsDirective]
      }]
    }, {
      type: void 0,
      decorators: [{
        type: Inject,
        args: [TUI_TEXTFIELD_OPTIONS]
      }]
    }, {
      type: ElementRef,
      decorators: [{
        type: Inject,
        args: [ElementRef]
      }]
    }];
  }, {
    focusableElement: [{
      type: ViewChild,
      args: ["focusableElement"]
    }],
    editable: [{
      type: Input
    }],
    textfieldFiller: [{
      type: Input,
      args: ["filler"]
    }],
    iconCleaner: [{
      type: Input
    }],
    readOnly: [{
      type: Input
    }, {
      type: HostBinding,
      args: ["class._readonly"]
    }],
    invalid: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    textfieldPrefix: [{
      type: Input,
      args: ["prefix"]
    }],
    textfieldPostfix: [{
      type: Input,
      args: ["postfix"]
    }],
    value: [{
      type: Input
    }],
    valueChange: [{
      type: Output
    }],
    content: [{
      type: ContentChildren,
      args: [PolymorpheusOutletDirective, {
        descendants: true
      }]
    }],
    size: [{
      type: HostBinding,
      args: ["attr.data-size"]
    }],
    computedInvalid: [{
      type: HostBinding,
      args: ["class._invalid"]
    }],
    inputHidden: [{
      type: HostBinding,
      args: ["class._hidden"]
    }],
    borderStart: [{
      type: HostBinding,
      args: ["style.--border-start.rem"]
    }],
    borderEnd: [{
      type: HostBinding,
      args: ["style.--border-end.rem"]
    }],
    onFocused: [{
      type: HostListener,
      args: ["focusin", ["true"]]
    }, {
      type: HostListener,
      args: ["focusout", ["false"]]
    }],
    getIndent$: []
  });
})();
var TuiPrimitiveTextfieldDirective = class extends AbstractTuiTextfieldHost {
  constructor(textfield) {
    super(textfield);
    this.textfield = textfield;
  }
  get readOnly() {
    return this.textfield.readOnly || !this.textfield.editable;
  }
  onValueChange(value) {
    this.textfield.onModelChange(value);
  }
};
TuiPrimitiveTextfieldDirective.ɵfac = function TuiPrimitiveTextfieldDirective_Factory(t) {
  return new (t || TuiPrimitiveTextfieldDirective)(ɵɵdirectiveInject(TuiPrimitiveTextfieldComponent));
};
TuiPrimitiveTextfieldDirective.ɵdir = ɵɵdefineDirective({
  type: TuiPrimitiveTextfieldDirective,
  selectors: [["tui-primitive-textfield"]],
  features: [ɵɵProvidersFeature([tuiAsTextfieldHost(TuiPrimitiveTextfieldDirective)]), ɵɵInheritDefinitionFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiPrimitiveTextfieldDirective, [{
    type: Directive,
    args: [{
      selector: "tui-primitive-textfield",
      providers: [tuiAsTextfieldHost(TuiPrimitiveTextfieldDirective)]
    }]
  }], function() {
    return [{
      type: TuiPrimitiveTextfieldComponent,
      decorators: [{
        type: Inject,
        args: [TuiPrimitiveTextfieldComponent]
      }]
    }];
  }, null);
})();
var TuiTextfieldComponent = class {
  constructor(host, controller, el, idService, legacyMask) {
    this.host = host;
    this.controller = controller;
    this.el = el;
    this.idService = idService;
    this.legacyMask = legacyMask;
    this.host.process(this.el.nativeElement);
  }
  get id() {
    return this.el.nativeElement.id || this.idService.generate();
  }
  get inputMode() {
    return this.el.nativeElement.inputMode || this.host.inputMode;
  }
};
TuiTextfieldComponent.ɵfac = function TuiTextfieldComponent_Factory(t) {
  return new (t || TuiTextfieldComponent)(ɵɵdirectiveInject(TUI_TEXTFIELD_HOST), ɵɵdirectiveInject(TUI_TEXTFIELD_WATCHED_CONTROLLER), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(TuiIdService), ɵɵdirectiveInject(TUI_LEGACY_MASK, 8));
};
TuiTextfieldComponent.ɵcmp = ɵɵdefineComponent({
  type: TuiTextfieldComponent,
  selectors: [["input", "tuiTextfield", ""], ["textarea", "tuiTextfield", ""]],
  hostAttrs: ["type", "text"],
  hostVars: 7,
  hostBindings: function TuiTextfieldComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("input", function TuiTextfieldComponent_input_HostBindingHandler($event) {
        return !ctx.legacyMask && ctx.host.onValueChange($event.target.value);
      });
    }
    if (rf & 2) {
      ɵɵhostProperty("tabIndex", ctx.host.focusable ? 0 : -1)("readOnly", ctx.host.readOnly)("value", ctx.host.value);
      ɵɵattribute("id", ctx.id)("inputMode", ctx.inputMode)("aria-invalid", ctx.host.invalid)("disabled", ctx.host.disabled || null);
    }
  },
  features: [ɵɵProvidersFeature([TEXTFIELD_CONTROLLER_PROVIDER])],
  attrs: _c5,
  decls: 0,
  vars: 0,
  template: function TuiTextfieldComponent_Template(rf, ctx) {
  },
  styles: ['[_nghost-%COMP%]{font:var(--tui-font-text-s);color:var(--tui-text-01);padding:0;margin:0;border-width:0;border-radius:inherit;background:none;font-size:inherit;line-height:inherit;font-weight:inherit;color:inherit;caret-color:currentColor;outline:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;word-break:keep-all;-webkit-text-fill-color:currentColor;position:absolute;top:0;left:0;width:100%;height:100%;border-style:solid;border-color:transparent;border-inline-start-width:var(--border-start, 0);border-inline-end-width:var(--border-end, 0);text-indent:var(--text-indent);text-align:inherit;box-sizing:border-box;white-space:nowrap;overflow:hidden;text-transform:inherit;resize:none}[_nghost-%COMP%]:-webkit-autofill, [_nghost-%COMP%]:-webkit-autofill:hover, [_nghost-%COMP%]:-webkit-autofill:focus{caret-color:var(--tui-base-09);border-radius:inherit;color:inherit!important;background-color:transparent!important;-webkit-text-fill-color:var(--tui-text-01)!important;border-color:var(--tui-autofill);-webkit-box-shadow:0 0 0 100rem var(--tui-autofill) inset!important}[_nghost-%COMP%]:-webkit-autofill, [_nghost-%COMP%]:-webkit-autofill:first-line{font-size:inherit;line-height:inherit}[_nghost-%COMP%]::-webkit-caps-lock-indicator, [_nghost-%COMP%]::-webkit-contacts-auto-fill-button, [_nghost-%COMP%]::-webkit-credit-card-auto-fill-button, [_nghost-%COMP%]::-webkit-credentials-auto-fill-button, [_nghost-%COMP%]::-webkit-strong-password-auto-fill-button{content:none!important;position:absolute;left:-62.4375rem;top:-62.4375rem;z-index:-999;display:none!important;background:transparent!important;pointer-events:none!important}[_nghost-%COMP%]::placeholder{color:var(--tui-text-03);opacity:0}._focused[_nghost-%COMP%]:not(._readonly)   [_ngcontent-%COMP%]::placeholder, tui-primitive-textfield._focused:not(._readonly)   [_nghost-%COMP%]::placeholder, tui-textarea._focused:not(._readonly)   [_nghost-%COMP%]::placeholder, tui-text-area._focused:not(._readonly)   [_nghost-%COMP%]::placeholder{opacity:1}[tuiWrapper][data-mode=onDark]   [_nghost-%COMP%]:-webkit-autofill, [_nghost-%COMP%]   [tuiWrapper][data-mode="onDark"][_nghost-%COMP%]:-webkit-autofill, [tuiWrapper][data-mode="onDark"]   [_nghost-%COMP%]:-webkit-autofill, [tuiWrapper][data-mode=onDark]   [_nghost-%COMP%]:-webkit-autofill:hover, [_nghost-%COMP%]   [tuiWrapper][data-mode="onDark"][_nghost-%COMP%]:-webkit-autofill:hover, [tuiWrapper][data-mode="onDark"]   [_nghost-%COMP%]:-webkit-autofill:hover, [tuiWrapper][data-mode=onDark]   [_nghost-%COMP%]:-webkit-autofill:focus, [_nghost-%COMP%]   [tuiWrapper][data-mode="onDark"][_nghost-%COMP%]:-webkit-autofill:focus, [tuiWrapper][data-mode="onDark"]   [_nghost-%COMP%]:-webkit-autofill:focus{caret-color:var(--tui-base-09);border-radius:inherit;color:inherit!important;background-color:transparent!important;-webkit-text-fill-color:var(--tui-text-01-night)!important;border-color:var(--tui-autofill-night);-webkit-box-shadow:0 0 0 100rem var(--tui-autofill-night) inset!important}[tuiWrapper][data-mode=onDark]   [_nghost-%COMP%]::placeholder, [_nghost-%COMP%]   [tuiWrapper][data-mode="onDark"][_nghost-%COMP%]::placeholder, [tuiWrapper][data-mode="onDark"]   [_nghost-%COMP%]::placeholder{color:var(--tui-text-03-night)}[data-size=s][_nghost-%COMP%]   -shadowcsshost, [_nghost-%COMP%]   tui-primitive-textfield[data-size="s"][_nghost-%COMP%]:not(tui-primitive-textfield), tui-primitive-textfield[data-size="s"]   [_nghost-%COMP%]:not(tui-primitive-textfield), [_nghost-%COMP%]   tui-textarea[data-size="s"][_nghost-%COMP%]:not(tui-textarea), tui-textarea[data-size="s"]   [_nghost-%COMP%]:not(tui-textarea), [_nghost-%COMP%]   tui-text-area[data-size="s"][_nghost-%COMP%]:not(tui-text-area), tui-text-area[data-size="s"]   [_nghost-%COMP%]:not(tui-text-area){padding:0 var(--tui-padding-s)}[data-size=m][_nghost-%COMP%]   -shadowcsshost, [_nghost-%COMP%]   tui-primitive-textfield[data-size="m"][_nghost-%COMP%]:not(tui-primitive-textfield), tui-primitive-textfield[data-size="m"]   [_nghost-%COMP%]:not(tui-primitive-textfield), [_nghost-%COMP%]   tui-textarea[data-size="m"][_nghost-%COMP%]:not(tui-textarea), tui-textarea[data-size="m"]   [_nghost-%COMP%]:not(tui-textarea), [_nghost-%COMP%]   tui-text-area[data-size="m"][_nghost-%COMP%]:not(tui-text-area), tui-text-area[data-size="m"]   [_nghost-%COMP%]:not(tui-text-area){padding:0 var(--tui-padding-m)}[data-size=l][_nghost-%COMP%]   -shadowcsshost, [_nghost-%COMP%]   tui-primitive-textfield[data-size="l"][_nghost-%COMP%]:not(tui-primitive-textfield), tui-primitive-textfield[data-size="l"]   [_nghost-%COMP%]:not(tui-primitive-textfield), [_nghost-%COMP%]   tui-textarea[data-size="l"][_nghost-%COMP%]:not(tui-textarea), tui-textarea[data-size="l"]   [_nghost-%COMP%]:not(tui-textarea), [_nghost-%COMP%]   tui-text-area[data-size="l"][_nghost-%COMP%]:not(tui-text-area), tui-text-area[data-size="l"]   [_nghost-%COMP%]:not(tui-text-area){padding:0 var(--tui-padding-l)}._disabled[_nghost-%COMP%]   -shadowcsshost, [_nghost-%COMP%]   tui-primitive-textfield._disabled[_nghost-%COMP%], tui-primitive-textfield._disabled   [_nghost-%COMP%], [_nghost-%COMP%]   tui-textarea._disabled[_nghost-%COMP%], tui-textarea._disabled   [_nghost-%COMP%], [_nghost-%COMP%]   tui-text-area._disabled[_nghost-%COMP%], tui-text-area._disabled   [_nghost-%COMP%]{pointer-events:none}[data-size=l][_nghost-%COMP%]:not(._label-outside)   -shadowcsshost, [_nghost-%COMP%]   tui-primitive-textfield[data-size="l"]:not(._label-outside)[_nghost-%COMP%]:not(tui-primitive-textfield), tui-primitive-textfield[data-size="l"]:not(._label-outside)   [_nghost-%COMP%]:not(tui-primitive-textfield){padding-top:1.25rem}[data-size=l][_nghost-%COMP%]:not(._label-outside)   [_ngcontent-%COMP%]:-webkit-autofill + .t-content[_ngcontent-%COMP%]   .t-placeholder[_ngcontent-%COMP%], [_nghost-%COMP%]   tui-primitive-textfield[data-size="l"]:not(._label-outside)[_nghost-%COMP%]:not(tui-primitive-textfield):-webkit-autofill + .t-content[_ngcontent-%COMP%]   .t-placeholder[_ngcontent-%COMP%], tui-primitive-textfield[data-size="l"]:not(._label-outside)   [_nghost-%COMP%]:not(tui-primitive-textfield):-webkit-autofill + .t-content[_ngcontent-%COMP%]   .t-placeholder[_ngcontent-%COMP%]{font-size:.8156rem;transform:translateY(-.625rem)}[data-size=m][_nghost-%COMP%]:not(._label-outside)   -shadowcsshost, [_nghost-%COMP%]   tui-primitive-textfield[data-size="m"]:not(._label-outside)[_nghost-%COMP%]:not(tui-primitive-textfield), tui-primitive-textfield[data-size="m"]:not(._label-outside)   [_nghost-%COMP%]:not(tui-primitive-textfield){padding-top:1rem}[data-size=m][_nghost-%COMP%]:not(._label-outside)   [_ngcontent-%COMP%]:-webkit-autofill + .t-content[_ngcontent-%COMP%]   .t-placeholder[_ngcontent-%COMP%], [_nghost-%COMP%]   tui-primitive-textfield[data-size="m"]:not(._label-outside)[_nghost-%COMP%]:not(tui-primitive-textfield):-webkit-autofill + .t-content[_ngcontent-%COMP%]   .t-placeholder[_ngcontent-%COMP%], tui-primitive-textfield[data-size="m"]:not(._label-outside)   [_nghost-%COMP%]:not(tui-primitive-textfield):-webkit-autofill + .t-content[_ngcontent-%COMP%]   .t-placeholder[_ngcontent-%COMP%]{font-size:.69rem;transform:translateY(-.5rem)}._hidden[_nghost-%COMP%]   input[_ngcontent-%COMP%], [_nghost-%COMP%]   tui-primitive-textfield._hidden[_nghost-%COMP%], tui-primitive-textfield._hidden   [_nghost-%COMP%]{opacity:0;text-indent:-10em;-webkit-user-select:none}textarea[_nghost-%COMP%]{white-space:pre-wrap}textarea[_nghost-%COMP%]   tui-textarea._ios[_nghost-%COMP%], tui-textarea._ios   [_nghost-%COMP%], textarea[_nghost-%COMP%]   tui-text-area._ios[_nghost-%COMP%], tui-text-area._ios   [_nghost-%COMP%]{padding-left:.8125rem}'],
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTextfieldComponent, [{
    type: Component,
    args: [{
      selector: "input[tuiTextfield], textarea[tuiTextfield]",
      template: "",
      styleUrls: ["./textfield.style.less"],
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [TEXTFIELD_CONTROLLER_PROVIDER],
      host: {
        type: "text",
        "[attr.id]": "id",
        "[attr.inputMode]": "inputMode",
        "[attr.aria-invalid]": "host.invalid",
        "[attr.disabled]": "host.disabled || null",
        "[tabIndex]": "host.focusable ? 0 : -1",
        "[readOnly]": "host.readOnly",
        "[value]": "host.value",
        "(input)": "!legacyMask && host.onValueChange($event.target.value)"
      }
    }]
  }], function() {
    return [{
      type: void 0,
      decorators: [{
        type: Inject,
        args: [TUI_TEXTFIELD_HOST]
      }]
    }, {
      type: TuiTextfieldController,
      decorators: [{
        type: Inject,
        args: [TUI_TEXTFIELD_WATCHED_CONTROLLER]
      }]
    }, {
      type: ElementRef,
      decorators: [{
        type: Inject,
        args: [ElementRef]
      }]
    }, {
      type: TuiIdService,
      decorators: [{
        type: Inject,
        args: [TuiIdService]
      }]
    }, {
      type: void 0,
      decorators: [{
        type: Optional
      }, {
        type: Inject,
        args: [TUI_LEGACY_MASK]
      }]
    }];
  }, null);
})();
var TuiPrimitiveTextfieldModule = class {
};
TuiPrimitiveTextfieldModule.ɵfac = function TuiPrimitiveTextfieldModule_Factory(t) {
  return new (t || TuiPrimitiveTextfieldModule)();
};
TuiPrimitiveTextfieldModule.ɵmod = ɵɵdefineNgModule({
  type: TuiPrimitiveTextfieldModule,
  declarations: [TuiPrimitiveTextfieldComponent, TuiPrimitiveTextfieldDirective, TuiTextfieldComponent, TuiValueDecorationComponent],
  imports: [CommonModule, FormsModule, PolymorpheusModule, TuiMaskAccessorModule, TuiFocusableModule, TuiWrapperModule, TuiSvgModule, TuiTooltipModule, TuiAutofilledModule],
  exports: [TuiPrimitiveTextfieldComponent, TuiPrimitiveTextfieldDirective, TuiTextfieldComponent]
});
TuiPrimitiveTextfieldModule.ɵinj = ɵɵdefineInjector({
  imports: [[CommonModule, FormsModule, PolymorpheusModule, TuiMaskAccessorModule, TuiFocusableModule, TuiWrapperModule, TuiSvgModule, TuiTooltipModule, TuiAutofilledModule]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiPrimitiveTextfieldModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, FormsModule, PolymorpheusModule, TuiMaskAccessorModule, TuiFocusableModule, TuiWrapperModule, TuiSvgModule, TuiTooltipModule, TuiAutofilledModule],
      declarations: [TuiPrimitiveTextfieldComponent, TuiPrimitiveTextfieldDirective, TuiTextfieldComponent, TuiValueDecorationComponent],
      exports: [TuiPrimitiveTextfieldComponent, TuiPrimitiveTextfieldDirective, TuiTextfieldComponent]
    }]
  }], null, null);
})();
var TUI_PRIMITIVE_TEXTFIELD_DEFAULT_OPTIONS = TUI_TEXTFIELD_DEFAULT_OPTIONS;
var TUI_PRIMITIVE_TEXTFIELD_OPTIONS = TUI_TEXTFIELD_OPTIONS;
var tuiPrimitiveTextfieldOptionsProvider = tuiTextfieldOptionsProvider;

// node_modules/@taiga-ui/core/fesm2015/taiga-ui-core-internal-svg-defs-host.js
function TuiSvgDefsHostComponent__svg_ng_container_1__svg_defs_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "defs", 4);
  }
  if (rf & 2) {
    const def_r4 = ctx.$implicit;
    ɵɵproperty("innerHTML", def_r4, ɵɵsanitizeHtml);
  }
}
function TuiSvgDefsHostComponent__svg_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, TuiSvgDefsHostComponent__svg_ng_container_1__svg_defs_1_Template, 1, 1, "defs", 3);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r0.items);
  }
}
function TuiSvgDefsHostComponent__svg_ng_template_2__svg_defs_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "defs");
    ɵɵelement(1, "svg", 6);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const def_r6 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵproperty("outerHTML", def_r6, ɵɵsanitizeHtml);
  }
}
function TuiSvgDefsHostComponent__svg_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵtemplate(0, TuiSvgDefsHostComponent__svg_ng_template_2__svg_defs_0_Template, 2, 1, "defs", 5);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("ngForOf", ctx_r1.items);
  }
}
var TuiSvgDefsHostComponent = class {
  constructor(svgService, cdr, destroy$, platformId) {
    this.svgService = svgService;
    this.cdr = cdr;
    this.destroy$ = destroy$;
    this.isBrowser = true;
    this.isBrowser = !isPlatformServer(platformId);
  }
  // @bad TODO: Looks like it could be async piped but it was probably written like that for a reason
  ngOnInit() {
    this.svgService.items$.pipe(takeUntil(this.destroy$)).subscribe((defsMap) => {
      this.items = defsMap.values();
      this.cdr.detectChanges();
    });
  }
};
TuiSvgDefsHostComponent.ɵfac = function TuiSvgDefsHostComponent_Factory(t) {
  return new (t || TuiSvgDefsHostComponent)(ɵɵdirectiveInject(TuiSvgService), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(TuiDestroyService, 2), ɵɵdirectiveInject(PLATFORM_ID));
};
TuiSvgDefsHostComponent.ɵcmp = ɵɵdefineComponent({
  type: TuiSvgDefsHostComponent,
  selectors: [["tui-svg-defs-host"]],
  features: [ɵɵProvidersFeature([TuiDestroyService])],
  decls: 4,
  vars: 2,
  consts: [["version", "1.1", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "xmlns", "http://www.w3.org/2000/svg"], [4, "ngIf", "ngIfElse"], ["server", ""], [3, "innerHTML", 4, "ngFor", "ngForOf"], [3, "innerHTML"], [4, "ngFor", "ngForOf"], [3, "outerHTML"]],
  template: function TuiSvgDefsHostComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵnamespaceSVG();
      ɵɵelementStart(0, "svg", 0);
      ɵɵtemplate(1, TuiSvgDefsHostComponent__svg_ng_container_1_Template, 2, 1, "ng-container", 1)(2, TuiSvgDefsHostComponent__svg_ng_template_2_Template, 1, 1, "ng-template", null, 2, ɵɵtemplateRefExtractor);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      const _r2 = ɵɵreference(3);
      ɵɵadvance(1);
      ɵɵproperty("ngIf", ctx.isBrowser)("ngIfElse", _r2);
    }
  },
  dependencies: [NgIf, NgForOf],
  styles: ["[_nghost-%COMP%]{display:none}"],
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiSvgDefsHostComponent, [{
    type: Component,
    args: [{
      selector: "tui-svg-defs-host",
      templateUrl: "./svg-defs-host.template.html",
      styleUrls: ["./svg-defs-host.style.less"],
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [TuiDestroyService]
    }]
  }], function() {
    return [{
      type: TuiSvgService,
      decorators: [{
        type: Inject,
        args: [TuiSvgService]
      }]
    }, {
      type: ChangeDetectorRef,
      decorators: [{
        type: Inject,
        args: [ChangeDetectorRef]
      }]
    }, {
      type: TuiDestroyService,
      decorators: [{
        type: Self
      }, {
        type: Inject,
        args: [TuiDestroyService]
      }]
    }, {
      type: void 0,
      decorators: [{
        type: Inject,
        args: [PLATFORM_ID]
      }]
    }];
  }, null);
})();
var TuiSvgDefsHostModule = class {
};
TuiSvgDefsHostModule.ɵfac = function TuiSvgDefsHostModule_Factory(t) {
  return new (t || TuiSvgDefsHostModule)();
};
TuiSvgDefsHostModule.ɵmod = ɵɵdefineNgModule({
  type: TuiSvgDefsHostModule,
  declarations: [TuiSvgDefsHostComponent],
  imports: [CommonModule, TuiLetModule],
  exports: [TuiSvgDefsHostComponent]
});
TuiSvgDefsHostModule.ɵinj = ɵɵdefineInjector({
  imports: [[CommonModule, TuiLetModule]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiSvgDefsHostModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, TuiLetModule],
      declarations: [TuiSvgDefsHostComponent],
      exports: [TuiSvgDefsHostComponent]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/core/fesm2015/taiga-ui-core-components-root.js
function TuiRootComponent_tui_scroll_controls_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "tui-scroll-controls", 2);
  }
}
var _c020 = ["*", [["tuiOverContent"]], [["tuiOverDialogs"]], [["tuiOverAlerts"]], [["tuiOverPortals"]], [["tuiOverHints"]]];
var _c110 = ["*", "tuiOverContent", "tuiOverDialogs", "tuiOverAlerts", "tuiOverPortals", "tuiOverHints"];
var TuiRootComponent = class {
  constructor(reducedMotion, duration, dialogs, isMobile, breakpoint, isIOS, isAndroid, {
    body
  }, theme) {
    this.reducedMotion = reducedMotion;
    this.duration = duration;
    this.dialogs = dialogs;
    this.isMobile = isMobile;
    this.breakpoint = breakpoint;
    this.isIOS = isIOS;
    this.isAndroid = isAndroid;
    this.isMobileRes$ = this.breakpoint.pipe(map((breakpoint2) => breakpoint2 === "mobile"));
    this.scrollbars$ = this.dialogs.length && !this.isMobile ? combineLatest([...this.dialogs]).pipe(map((dialogs2) => !dialogs2.some(({
      length
    }) => length)), debounceTime(0)) : of(!this.isMobile);
    body.setAttribute("data-tui-theme", theme.toLowerCase());
  }
};
TuiRootComponent.ɵfac = function TuiRootComponent_Factory(t) {
  return new (t || TuiRootComponent)(ɵɵdirectiveInject(TUI_REDUCED_MOTION), ɵɵdirectiveInject(TUI_ANIMATIONS_DURATION), ɵɵdirectiveInject(TUI_DIALOGS), ɵɵdirectiveInject(TUI_IS_MOBILE), ɵɵdirectiveInject(TuiBreakpointService), ɵɵdirectiveInject(TUI_IS_IOS), ɵɵdirectiveInject(TUI_IS_ANDROID), ɵɵdirectiveInject(DOCUMENT), ɵɵdirectiveInject(TUI_THEME));
};
TuiRootComponent.ɵcmp = ɵɵdefineComponent({
  type: TuiRootComponent,
  selectors: [["tui-root"]],
  hostAttrs: ["data-tui-version", "3.61.0"],
  hostVars: 9,
  hostBindings: function TuiRootComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("$.class._mobile", function TuiRootComponent___class__mobile_HostBindingHandler() {
        return ctx.isMobileRes$;
      });
    }
    if (rf & 2) {
      ɵɵhostProperty("$.class._mobile", ctx.isMobileRes$);
      ɵɵstyleProp("--tui-duration", ctx.duration, "ms");
      ɵɵclassProp("_ios", ctx.isIOS)("_android", ctx.isAndroid)("_reduced-motion", ctx.reducedMotion);
    }
  },
  ngContentSelectors: _c110,
  decls: 14,
  vars: 3,
  consts: [["class", "t-root-scrollbar", 4, "ngIf"], [1, "t-root-content"], [1, "t-root-scrollbar"]],
  template: function TuiRootComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef(_c020);
      ɵɵtemplate(0, TuiRootComponent_tui_scroll_controls_0_Template, 1, 0, "tui-scroll-controls", 0);
      ɵɵpipe(1, "async");
      ɵɵelement(2, "tui-svg-defs-host");
      ɵɵelementStart(3, "tui-dropdown-host")(4, "div", 1);
      ɵɵprojection(5);
      ɵɵelementEnd();
      ɵɵprojection(6, 1);
      ɵɵelement(7, "tui-dialog-host");
      ɵɵprojection(8, 2);
      ɵɵelement(9, "tui-alert-host");
      ɵɵprojection(10, 3);
      ɵɵelementEnd();
      ɵɵprojection(11, 4);
      ɵɵelement(12, "tui-hints-host");
      ɵɵprojection(13, 5);
    }
    if (rf & 2) {
      ɵɵproperty("ngIf", ɵɵpipeBind1(1, 1, ctx.scrollbars$));
    }
  },
  dependencies: [TuiScrollControlsComponent, TuiSvgDefsHostComponent, TuiDropdownHostComponent, TuiDialogHostComponent, TuiAlertHostComponent, TuiHintsHostComponent, NgIf, AsyncPipe],
  styles: ['@keyframes tuiPresent{to{content:"1"}}@keyframes tuiSkeletonVibe{to{opacity:.5}}html,.tui-zero-scrollbar{scrollbar-width:none;-ms-overflow-style:none}html::-webkit-scrollbar,.tui-zero-scrollbar::-webkit-scrollbar,html::-webkit-scrollbar-thumb,.tui-zero-scrollbar::-webkit-scrollbar-thumb{background:transparent;width:0;height:0}body{font:var(--tui-font-text-s);color:var(--tui-text-01);background:var(--tui-base-01);margin:0}tui-root{position:relative;display:block;flex:1;-webkit-tap-highlight-color:transparent}tui-root>.t-root-scrollbar{position:fixed;top:0;left:0;bottom:0;right:0;margin:0}.t-root-content{height:100%;isolation:isolate}.t-overscroll-none{overscroll-behavior:none}\n'],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiRootComponent, [{
    type: Component,
    args: [{
      selector: "tui-root",
      templateUrl: "./root.template.html",
      styleUrls: ["./root.style.less"],
      encapsulation: ViewEncapsulation$1.None,
      // So that we do not force OnPush on custom dialogs
      // eslint-disable-next-line @angular-eslint/prefer-on-push-component-change-detection
      changeDetection: ChangeDetectionStrategy.Default,
      host: {
        "data-tui-version": TUI_VERSION,
        "[style.--tui-duration.ms]": "duration",
        "[class._ios]": "isIOS",
        "[class._android]": "isAndroid",
        "[class._reduced-motion]": "reducedMotion",
        "[$.class._mobile]": "isMobileRes$",
        "($.class._mobile)": "isMobileRes$"
      }
    }]
  }], function() {
    return [{
      type: void 0,
      decorators: [{
        type: Inject,
        args: [TUI_REDUCED_MOTION]
      }]
    }, {
      type: void 0,
      decorators: [{
        type: Inject,
        args: [TUI_ANIMATIONS_DURATION]
      }]
    }, {
      type: void 0,
      decorators: [{
        type: Inject,
        args: [TUI_DIALOGS]
      }]
    }, {
      type: void 0,
      decorators: [{
        type: Inject,
        args: [TUI_IS_MOBILE]
      }]
    }, {
      type: TuiBreakpointService,
      decorators: [{
        type: Inject,
        args: [TuiBreakpointService]
      }]
    }, {
      type: void 0,
      decorators: [{
        type: Inject,
        args: [TUI_IS_IOS]
      }]
    }, {
      type: void 0,
      decorators: [{
        type: Inject,
        args: [TUI_IS_ANDROID]
      }]
    }, {
      type: Document,
      decorators: [{
        type: Inject,
        args: [DOCUMENT]
      }]
    }, {
      type: void 0,
      decorators: [{
        type: Inject,
        args: [TUI_THEME]
      }]
    }];
  }, null);
})();
var TuiRootModule = class {
};
TuiRootModule.ɵfac = function TuiRootModule_Factory(t) {
  return new (t || TuiRootModule)();
};
TuiRootModule.ɵmod = ɵɵdefineNgModule({
  type: TuiRootModule,
  declarations: [TuiRootComponent],
  imports: [CommonModule, EventPluginsModule, TuiDropdownHostModule, TuiSvgDefsHostModule, TuiHintsHostModule, TuiDialogHostModule, TuiAlertHostModule, TuiScrollControlsModule],
  exports: [TuiRootComponent]
});
TuiRootModule.ɵinj = ɵɵdefineInjector({
  imports: [[CommonModule, EventPluginsModule, TuiDropdownHostModule, TuiSvgDefsHostModule, TuiHintsHostModule, TuiDialogHostModule, TuiAlertHostModule, TuiScrollControlsModule]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiRootModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, EventPluginsModule, TuiDropdownHostModule, TuiSvgDefsHostModule, TuiHintsHostModule, TuiDialogHostModule, TuiAlertHostModule, TuiScrollControlsModule],
      declarations: [TuiRootComponent],
      exports: [TuiRootComponent]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/core/fesm2015/taiga-ui-core-components-scroll-controls.js
function TuiScrollControlsComponent_ng_container_0_div_1_Template2(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 3);
    ɵɵelement(1, "div", 4);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const bars_r1 = ɵɵnextContext().ngIf;
    const ctx_r2 = ɵɵnextContext();
    ɵɵclassProp("t-bar_has-horizontal", bars_r1[1]);
    ɵɵproperty("@tuiFadeIn", ctx_r2.animation);
  }
}
function TuiScrollControlsComponent_ng_container_0_div_2_Template2(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 5);
    ɵɵelement(1, "div", 6);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const bars_r1 = ɵɵnextContext().ngIf;
    const ctx_r3 = ɵɵnextContext();
    ɵɵclassProp("t-bar_has-vertical", bars_r1[0]);
    ɵɵproperty("@tuiFadeIn", ctx_r3.animation);
  }
}
function TuiScrollControlsComponent_ng_container_0_Template2(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, TuiScrollControlsComponent_ng_container_0_div_1_Template2, 2, 3, "div", 1)(2, TuiScrollControlsComponent_ng_container_0_div_2_Template2, 2, 3, "div", 2);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const bars_r1 = ctx.ngIf;
    ɵɵadvance(1);
    ɵɵproperty("ngIf", bars_r1[0]);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", bars_r1[1]);
  }
}
var TuiScrollbarWrapperDirective = class {
};
TuiScrollbarWrapperDirective.ɵfac = function TuiScrollbarWrapperDirective_Factory(t) {
  return new (t || TuiScrollbarWrapperDirective)();
};
TuiScrollbarWrapperDirective.ɵdir = ɵɵdefineDirective({
  type: TuiScrollbarWrapperDirective,
  selectors: [["", "tuiScrollbarWrapper", ""]],
  features: [ɵɵProvidersFeature([{
    provide: TUI_ELEMENT_REF,
    useExisting: ElementRef
  }])]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiScrollbarWrapperDirective, [{
    type: Directive,
    args: [{
      selector: "[tuiScrollbarWrapper]",
      providers: [{
        provide: TUI_ELEMENT_REF,
        useExisting: ElementRef
      }]
    }]
  }], null, null);
})();
var MIN_WIDTH2 = 24;
function getOffsetVertical2({
  clientY
}, {
  top,
  height
}) {
  return (clientY - top) / height;
}
function getOffsetHorizontal2({
  clientX
}, {
  left,
  width
}) {
  return (clientX - left) / width;
}
var TuiScrollbarDirective2 = class {
  constructor(zone, renderer, destroy$, animationFrame$, wrapper, container, doc, el) {
    this.wrapper = wrapper;
    this.container = container;
    this.doc = doc;
    this.el = el;
    this.tuiScrollbar = "vertical";
    const {
      nativeElement
    } = this.el;
    const mousedown$ = tuiTypedFromEvent(nativeElement, "mousedown");
    const mousemove$ = tuiTypedFromEvent(this.doc, "mousemove");
    const mouseup$ = tuiTypedFromEvent(this.doc, "mouseup");
    const mousedownWrapper$ = tuiTypedFromEvent(this.wrapper.nativeElement, "mousedown");
    merge(mousedownWrapper$.pipe(map((event) => this.getScrolled(event, 0.5, 0.5))), mousedown$.pipe(tuiStopPropagation(), switchMap((event) => {
      const rect2 = nativeElement.getBoundingClientRect();
      const vertical = getOffsetVertical2(event, rect2);
      const horizontal = getOffsetHorizontal2(event, rect2);
      return mousemove$.pipe(map((event2) => this.getScrolled(event2, vertical, horizontal)), takeUntil(mouseup$));
    }))).pipe(tuiZonefree(zone), takeUntil(destroy$)).subscribe(([scrollTop, scrollLeft]) => {
      if (this.tuiScrollbar === "vertical") {
        renderer.setProperty(this.element, "scrollTop", scrollTop);
      } else {
        renderer.setProperty(this.element, "scrollLeft", scrollLeft);
      }
    });
    merge(animationFrame$.pipe(throttleTime(POLLING_TIME)), tuiScrollFrom(this.element)).pipe(tuiZonefree(zone), takeUntil(destroy$)).subscribe(() => {
      if (this.tuiScrollbar === "vertical") {
        renderer.setStyle(nativeElement, "top", `${this.thumb * 100}%`);
        renderer.setStyle(nativeElement, "height", `${this.view * 100}%`);
      } else {
        renderer.setStyle(nativeElement, "left", `${this.thumb * 100}%`);
        renderer.setStyle(nativeElement, "width", `${this.view * 100}%`);
      }
    });
  }
  get scrolled() {
    const {
      scrollTop,
      scrollHeight,
      clientHeight,
      scrollLeft,
      scrollWidth,
      clientWidth
    } = this.element;
    return this.tuiScrollbar === "vertical" ? scrollTop / (scrollHeight - clientHeight) : scrollLeft / (scrollWidth - clientWidth);
  }
  get compensation() {
    const {
      clientHeight,
      scrollHeight,
      clientWidth,
      scrollWidth
    } = this.element;
    if (clientHeight * clientHeight / scrollHeight > MIN_WIDTH2 && this.tuiScrollbar === "vertical" || clientWidth * clientWidth / scrollWidth > MIN_WIDTH2 && this.tuiScrollbar === "horizontal") {
      return 0;
    }
    return this.tuiScrollbar === "vertical" ? MIN_WIDTH2 / clientHeight : MIN_WIDTH2 / clientWidth;
  }
  get thumb() {
    const compensation = this.compensation || this.view;
    return this.scrolled * (1 - compensation);
  }
  get view() {
    const {
      clientHeight,
      scrollHeight,
      clientWidth,
      scrollWidth
    } = this.element;
    return this.tuiScrollbar === "vertical" ? Math.ceil(clientHeight / scrollHeight * 100) / 100 : Math.ceil(clientWidth / scrollWidth * 100) / 100;
  }
  get element() {
    return this.container.nativeElement;
  }
  getScrolled({
    clientY,
    clientX
  }, offsetVertical, offsetHorizontal) {
    const {
      offsetHeight,
      offsetWidth
    } = this.el.nativeElement;
    const {
      top,
      left,
      width,
      height
    } = this.wrapper.nativeElement.getBoundingClientRect();
    const maxTop = this.element.scrollHeight - height;
    const maxLeft = this.element.scrollWidth - width;
    const scrolledTop = (clientY - top - offsetHeight * offsetVertical) / (height - offsetHeight);
    const scrolledLeft = (clientX - left - offsetWidth * offsetHorizontal) / (width - offsetWidth);
    return [maxTop * scrolledTop, maxLeft * scrolledLeft];
  }
};
TuiScrollbarDirective2.ɵfac = function TuiScrollbarDirective_Factory2(t) {
  return new (t || TuiScrollbarDirective2)(ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(TuiDestroyService, 2), ɵɵdirectiveInject(ANIMATION_FRAME), ɵɵdirectiveInject(TUI_ELEMENT_REF), ɵɵdirectiveInject(TUI_SCROLL_REF), ɵɵdirectiveInject(DOCUMENT), ɵɵdirectiveInject(ElementRef));
};
TuiScrollbarDirective2.ɵdir = ɵɵdefineDirective({
  type: TuiScrollbarDirective2,
  selectors: [["", "tuiScrollbar", ""]],
  inputs: {
    tuiScrollbar: "tuiScrollbar"
  },
  features: [ɵɵProvidersFeature([TuiDestroyService])]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiScrollbarDirective2, [{
    type: Directive,
    args: [{
      selector: "[tuiScrollbar]",
      providers: [TuiDestroyService]
    }]
  }], function() {
    return [{
      type: NgZone,
      decorators: [{
        type: Inject,
        args: [NgZone]
      }]
    }, {
      type: Renderer2,
      decorators: [{
        type: Inject,
        args: [Renderer2]
      }]
    }, {
      type: Observable,
      decorators: [{
        type: Self
      }, {
        type: Inject,
        args: [TuiDestroyService]
      }]
    }, {
      type: Observable,
      decorators: [{
        type: Inject,
        args: [ANIMATION_FRAME]
      }]
    }, {
      type: ElementRef,
      decorators: [{
        type: Inject,
        args: [TUI_ELEMENT_REF]
      }]
    }, {
      type: ElementRef,
      decorators: [{
        type: Inject,
        args: [TUI_SCROLL_REF]
      }]
    }, {
      type: Document,
      decorators: [{
        type: Inject,
        args: [DOCUMENT]
      }]
    }, {
      type: ElementRef,
      decorators: [{
        type: Inject,
        args: [ElementRef]
      }]
    }];
  }, {
    tuiScrollbar: [{
      type: Input
    }]
  });
})();
var TuiScrollControlsComponent2 = class {
  constructor(animation, zone, scrollRef, animationFrame$, mode$) {
    this.animation = animation;
    this.zone = zone;
    this.scrollRef = scrollRef;
    this.animationFrame$ = animationFrame$;
    this.mode$ = mode$;
    this.refresh$ = this.animationFrame$.pipe(throttleTime(300), map(() => this.scrollbars), startWith([false, false]), distinctUntilChanged((a, b) => a[0] === b[0] && a[1] === b[1]), tuiZoneOptimized(this.zone));
  }
  get scrollbars() {
    const {
      clientHeight,
      scrollHeight,
      clientWidth,
      scrollWidth
    } = this.scrollRef.nativeElement;
    return [Math.ceil(clientHeight / scrollHeight * 100) < 100, Math.ceil(clientWidth / scrollWidth * 100) < 100];
  }
};
TuiScrollControlsComponent2.ɵfac = function TuiScrollControlsComponent_Factory2(t) {
  return new (t || TuiScrollControlsComponent2)(ɵɵdirectiveInject(TUI_ANIMATION_OPTIONS), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(TUI_SCROLL_REF), ɵɵdirectiveInject(ANIMATION_FRAME), ɵɵdirectiveInject(TUI_MODE));
};
TuiScrollControlsComponent2.ɵcmp = ɵɵdefineComponent({
  type: TuiScrollControlsComponent2,
  selectors: [["tui-scroll-controls"]],
  hostBindings: function TuiScrollControlsComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("$.data-mode.attr", function TuiScrollControlsComponent___data_mode_attr_HostBindingHandler() {
        return ctx.mode$;
      });
    }
  },
  features: [ɵɵProvidersFeature([MODE_PROVIDER])],
  decls: 2,
  vars: 3,
  consts: [[4, "ngIf"], ["tuiScrollbarWrapper", "", "class", "t-bar t-bar_vertical", 3, "t-bar_has-horizontal", 4, "ngIf"], ["tuiScrollbarWrapper", "", "class", "t-bar t-bar_horizontal", 3, "t-bar_has-vertical", 4, "ngIf"], ["tuiScrollbarWrapper", "", 1, "t-bar", "t-bar_vertical"], ["tuiScrollbar", "vertical", 1, "t-thumb"], ["tuiScrollbarWrapper", "", 1, "t-bar", "t-bar_horizontal"], ["tuiScrollbar", "horizontal", 1, "t-thumb"]],
  template: function TuiScrollControlsComponent_Template2(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, TuiScrollControlsComponent_ng_container_0_Template2, 3, 2, "ng-container", 0);
      ɵɵpipe(1, "async");
    }
    if (rf & 2) {
      ɵɵproperty("ngIf", ɵɵpipeBind1(1, 1, ctx.refresh$));
    }
  },
  dependencies: [NgIf, TuiScrollbarWrapperDirective, TuiScrollbarDirective2, AsyncPipe],
  styles: ["[_nghost-%COMP%]{position:-webkit-sticky;position:sticky;top:0;left:0;z-index:1;min-width:calc(100% - 1px);min-height:calc(100% - 1px);max-width:calc(100% - 1px);max-height:calc(100% - 1px);float:left;-webkit-margin-end:calc(-100% + 1px);margin-inline-end:calc(-100% + 1px);pointer-events:none}.t-bar[_ngcontent-%COMP%]{position:absolute;right:0;bottom:0;pointer-events:auto}.t-bar_vertical[_ngcontent-%COMP%]{top:0;width:.875rem}.t-bar_horizontal[_ngcontent-%COMP%]{left:0;height:.875rem}.t-bar_has-horizontal[_ngcontent-%COMP%]{bottom:.5rem}.t-bar_has-vertical[_ngcontent-%COMP%]{right:.5rem}.t-thumb[_ngcontent-%COMP%]{transition-property:all;transition-duration:.15s;transition-timing-function:ease-in-out;position:absolute;border-radius:6.25rem;border:.25rem solid transparent;cursor:pointer;pointer-events:auto;-webkit-user-select:none;-moz-user-select:none;user-select:none;background:var(--tui-text-01);background-clip:content-box;box-sizing:border-box;transition-property:width,height;opacity:.2}.t-thumb[_ngcontent-%COMP%]:hover{opacity:.24}.t-thumb[_ngcontent-%COMP%]:active{opacity:.48}[data-mode=onDark][_nghost-%COMP%]   .t-thumb[_ngcontent-%COMP%]{background-color:var(--tui-text-01-night)}.t-bar_vertical[_ngcontent-%COMP%]   .t-thumb[_ngcontent-%COMP%]{right:0;width:.75rem;min-height:1.25rem}.t-bar_vertical[_ngcontent-%COMP%]:hover   .t-thumb[_ngcontent-%COMP%], .t-bar_vertical[_ngcontent-%COMP%]   .t-thumb[_ngcontent-%COMP%]:active{width:.875rem}.t-bar_horizontal[_ngcontent-%COMP%]   .t-thumb[_ngcontent-%COMP%]{bottom:0;height:.75rem;min-width:1.25rem}.t-bar_horizontal[_ngcontent-%COMP%]:hover   .t-thumb[_ngcontent-%COMP%], .t-bar_horizontal[_ngcontent-%COMP%]   .t-thumb[_ngcontent-%COMP%]:active{height:.875rem}"],
  data: {
    animation: [tuiFadeIn]
  },
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiScrollControlsComponent2, [{
    type: Component,
    args: [{
      selector: "tui-scroll-controls",
      templateUrl: "./scroll-controls.template.html",
      styleUrls: ["./scroll-controls.style.less"],
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [MODE_PROVIDER],
      host: {
        "($.data-mode.attr)": "mode$"
      },
      animations: [tuiFadeIn]
    }]
  }], function() {
    return [{
      type: void 0,
      decorators: [{
        type: Inject,
        args: [TUI_ANIMATION_OPTIONS]
      }]
    }, {
      type: NgZone,
      decorators: [{
        type: Inject,
        args: [NgZone]
      }]
    }, {
      type: ElementRef,
      decorators: [{
        type: Inject,
        args: [TUI_SCROLL_REF]
      }]
    }, {
      type: Observable,
      decorators: [{
        type: Inject,
        args: [ANIMATION_FRAME]
      }]
    }, {
      type: Observable,
      decorators: [{
        type: Inject,
        args: [TUI_MODE]
      }]
    }];
  }, null);
})();
var TuiScrollControlsModule2 = class {
};
TuiScrollControlsModule2.ɵfac = function TuiScrollControlsModule_Factory2(t) {
  return new (t || TuiScrollControlsModule2)();
};
TuiScrollControlsModule2.ɵmod = ɵɵdefineNgModule({
  type: TuiScrollControlsModule2,
  declarations: [TuiScrollbarDirective2, TuiScrollbarWrapperDirective, TuiScrollControlsComponent2],
  imports: [CommonModule, TuiLetModule],
  exports: [TuiScrollControlsComponent2]
});
TuiScrollControlsModule2.ɵinj = ɵɵdefineInjector({
  imports: [[CommonModule, TuiLetModule]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiScrollControlsModule2, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, TuiLetModule],
      declarations: [TuiScrollbarDirective2, TuiScrollbarWrapperDirective, TuiScrollControlsComponent2],
      exports: [TuiScrollControlsComponent2]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/core/fesm2015/taiga-ui-core-components-theme-night.js
var TuiThemeNightComponent = class extends AbstractTuiThemeSwitcher {
};
TuiThemeNightComponent.ɵfac = (() => {
  let ɵTuiThemeNightComponent_BaseFactory;
  return function TuiThemeNightComponent_Factory(t) {
    return (ɵTuiThemeNightComponent_BaseFactory || (ɵTuiThemeNightComponent_BaseFactory = ɵɵgetInheritedFactory(TuiThemeNightComponent)))(t || TuiThemeNightComponent);
  };
})();
TuiThemeNightComponent.ɵcmp = ɵɵdefineComponent({
  type: TuiThemeNightComponent,
  selectors: [["tui-theme-night"]],
  features: [ɵɵInheritDefinitionFeature],
  decls: 0,
  vars: 0,
  template: function TuiThemeNightComponent_Template(rf, ctx) {
  },
  styles: [":root{--tui-base-01: #222;--tui-base-02: #333;--tui-base-03: #808080;--tui-base-04: #959595;--tui-base-05: #b0b0b0;--tui-base-06: #d7d7d7;--tui-base-07: #ededed;--tui-base-08: #f6f6f6;--tui-base-09: #fff;--tui-focus: rgba(51, 51, 51, .64);--tui-secondary: rgba(255, 255, 255, .16);--tui-secondary-hover: rgba(255, 255, 255, .24);--tui-secondary-active: rgba(255, 255, 255, .4);--tui-clear: rgba(255, 255, 255, .16);--tui-clear-disabled: rgba(255, 255, 255, .08);--tui-clear-hover: rgba(255, 255, 255, .24);--tui-clear-active: rgba(255, 255, 255, .4);--tui-error-fill: #ff8c67;--tui-error-bg: rgba(244, 87, 37, .32);--tui-error-bg-hover: rgba(244, 87, 37, .4);--tui-success-fill: #4ac99b;--tui-success-bg: rgba(74, 201, 155, .32);--tui-success-bg-hover: rgba(74, 201, 155, .4);--tui-warning-fill: #ffc700;--tui-warning-bg: rgba(255, 199, 0, .32);--tui-warning-bg-hover: rgba(255, 199, 0, .4);--tui-info-fill: #70b6f6;--tui-info-bg: rgba(112, 182, 246, .32);--tui-info-bg-hover: rgba(112, 182, 246, .4);--tui-neutral-fill: #959ba4;--tui-neutral-bg: rgba(149, 155, 164, .32);--tui-neutral-bg-hover: rgba(149, 155, 164, .48);--tui-text-01: #ffffff;--tui-text-02: rgba(255, 255, 255, .72);--tui-text-03: rgba(255, 255, 255, .6);--tui-link: #6788ff;--tui-link-hover: #526ed3;--tui-positive: #44c596;--tui-positive-hover: #3aa981;--tui-negative: #ff8c67;--tui-negative-hover: #bb593a;--tui-autofill: var(--tui-autofill-night);--tui-elevation-01: #222;--tui-elevation-02: #222;--tui-shadow: 0 .25rem 1.5rem rgba(0, 0, 0, .12);--tui-shadow-hover: 0 .75rem 2.25rem rgba(0, 0, 0, .2);--tui-shadow-dropdown: 0 1.5rem 1rem rgba(0, 0, 0, .03), 0 .75rem .75rem rgba(0, 0, 0, .04), 0 .25rem .375rem rgba(0, 0, 0, .05);--tui-shadow-modal: 0 1.125rem 1.875rem rgba(0, 0, 0, .48);--tui-shadow-sidebar: .25rem 0 1.5rem rgba(0, 0, 0, .12);--tui-shadow-navigation: 0 .125rem 1rem rgba(0, 0, 0, .08);--tui-shadow-sheet: 0 -1rem 1.75rem rgba(0, 0, 0, .24)}tui-notification{--tui-base-01: #000}\n"],
  encapsulation: 2,
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiThemeNightComponent, [{
    type: Component,
    args: [{
      selector: "tui-theme-night",
      template: "",
      styleUrls: ["./theme-night.style.less"],
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], null, null);
})();
var TuiThemeNightModule = class {
};
TuiThemeNightModule.ɵfac = function TuiThemeNightModule_Factory(t) {
  return new (t || TuiThemeNightModule)();
};
TuiThemeNightModule.ɵmod = ɵɵdefineNgModule({
  type: TuiThemeNightModule,
  declarations: [TuiThemeNightComponent],
  exports: [TuiThemeNightComponent]
});
TuiThemeNightModule.ɵinj = ɵɵdefineInjector({});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiThemeNightModule, [{
    type: NgModule,
    args: [{
      declarations: [TuiThemeNightComponent],
      exports: [TuiThemeNightComponent]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/core/fesm2015/taiga-ui-core-observables.js
function tuiSmartSearch(getSearchFunction, searchDebounceTimeMs = 400) {
  return (source) => source.pipe(debounceTime(searchDebounceTimeMs), scan((previousSearched, current) => previousSearched !== "" && current.startsWith(previousSearched) ? previousSearched : current, ""), distinctUntilChanged(), switchMap((value) => getSearchFunction(value).pipe(startWith(null))), startWith(EMPTY_ARRAY));
}
function tuiZonefulMap(project, zone) {
  return pipe(map(project), distinctUntilChanged(), tuiZonefull(zone));
}
export {
  AbstractTuiDriverDirective,
  AbstractTuiTextfieldHost,
  DEFAULT_ICONS_PATH,
  MASK_CARET_TRAP,
  MODE_PROVIDER,
  SCROLL_REF_SELECTOR2 as SCROLL_REF_SELECTOR,
  STATUS_ICON,
  TEXTFIELD_CONTROLLER_PROVIDER,
  TUI_ALERT_POSITION,
  TUI_ANIMATIONS_DEFAULT_DURATION,
  TUI_ANIMATIONS_DURATION,
  TUI_ANIMATION_OPTIONS,
  TUI_ASSERT_ENABLED,
  TUI_BUTTON_DEFAULT_OPTIONS,
  TUI_BUTTON_OPTIONS,
  TUI_CACHE_BUSTING_PAYLOAD,
  TUI_CHECKBOX_DEFAULT_OPTIONS,
  TUI_CHECKBOX_OPTIONS,
  TUI_CLOSE_WORD,
  TUI_COMMON_ICONS,
  TUI_DATA_LIST_ACCESSOR,
  TUI_DATA_LIST_HOST,
  TUI_DAY_TYPE_HANDLER,
  TUI_DECIMAL_SYMBOLS,
  TUI_DEFAULT_ERROR_MESSAGE,
  TUI_DEFAULT_ICONS_PLACE,
  TUI_DEFAULT_MARKER_HANDLER,
  TUI_DEFAULT_NUMBER_FORMAT,
  TUI_DEPRECATED_ICONS,
  TUI_DIALOGS_CLOSE,
  TUI_DIALOG_DEFAULT_OPTIONS,
  TUI_DIALOG_OPTIONS,
  TUI_DIGIT_REGEXP,
  TUI_DOCUMENT_OR_SHADOW_ROOT,
  TUI_DROPDOWN_COMPONENT,
  TUI_DROPDOWN_DEFAULT_OPTIONS,
  TUI_DROPDOWN_HOVER_DEFAULT_OPTIONS,
  TUI_DROPDOWN_HOVER_OPTIONS,
  TUI_DROPDOWN_OPTIONS,
  TUI_ELEMENT_REF,
  TUI_EXPAND_LOADED,
  TUI_FIRST_DAY_OF_WEEK,
  TUI_HINT_COMPONENT,
  TUI_HINT_DEFAULT_OPTIONS,
  TUI_HINT_DIRECTIONS,
  TUI_HINT_OPTIONS,
  TUI_ICONS,
  TUI_ICONS_PATH,
  TUI_ICONS_PLACE,
  TUI_ICON_ERROR,
  TUI_ICON_PADDINGS,
  TUI_IS_MOBILE_RES,
  TUI_IS_MOBILE_RES_PROVIDER,
  TUI_LAST_PUNCTUATION_MARK_REGEXP,
  TUI_LATIN_AND_NUMBERS_REGEXP,
  TUI_LATIN_REGEXP,
  TUI_LEADING_ZEROES_REGEXP,
  TUI_LEGACY_MASK,
  TUI_LOADER_DEFAULT_OPTIONS,
  TUI_LOADER_OPTIONS,
  TUI_MASK_SYMBOLS_REGEXP,
  TUI_MEDIA,
  TUI_MODE,
  TUI_MONTHS,
  TUI_NON_DIGITS_REGEXP,
  TUI_NON_DIGIT_REGEXP,
  TUI_NOTHING_FOUND_MESSAGE,
  TUI_NOTIFICATION_DEFAULT_OPTIONS,
  TUI_NOTIFICATION_OPTIONS,
  TUI_NUMBER_FORMAT,
  TUI_NUMBER_FORMAT_OBSERVABLE,
  TUI_OPTION_CONTENT,
  TUI_ORDERED_SHORT_WEEK_DAYS,
  TUI_PRIMITIVE_TEXTFIELD_DEFAULT_OPTIONS,
  TUI_PRIMITIVE_TEXTFIELD_OPTIONS,
  TUI_REDUCED_MOTION,
  TUI_SANITIZER,
  TUI_SCROLLABLE,
  TUI_SCROLL_INTO_VIEW,
  TUI_SCROLL_REF2 as TUI_SCROLL_REF,
  TUI_SELECTION_STREAM,
  TUI_SHORT_WEEK_DAYS,
  TUI_SPIN_ICONS,
  TUI_SPIN_TEXTS,
  TUI_SVG_CONTENT_PROCESSOR,
  TUI_SVG_DEFAULT_OPTIONS,
  TUI_SVG_OPTIONS,
  TUI_SVG_SRC_INTERCEPTORS,
  TUI_SVG_SRC_PROCESSOR,
  TUI_TEXTFIELD_APPEARANCE,
  TUI_TEXTFIELD_APPEARANCE_DIRECTIVE,
  TUI_TEXTFIELD_CLEANER,
  TUI_TEXTFIELD_CUSTOM_CONTENT,
  TUI_TEXTFIELD_DEFAULT_OPTIONS,
  TUI_TEXTFIELD_FILLER,
  TUI_TEXTFIELD_HOST,
  TUI_TEXTFIELD_ICON,
  TUI_TEXTFIELD_ICON_LEFT,
  TUI_TEXTFIELD_LABEL_OUTSIDE,
  TUI_TEXTFIELD_OPTIONS,
  TUI_TEXTFIELD_POSTFIX,
  TUI_TEXTFIELD_PREFIX,
  TUI_TEXTFIELD_SIZE,
  TUI_TEXTFIELD_WATCHED_CONTROLLER,
  TUI_THEME,
  TUI_VALUE_ACCESSOR,
  TUI_VIEWPORT,
  TuiAccessorProxyDirective,
  TuiAlertComponent,
  TuiAlertDirective,
  TuiAlertModule,
  TuiAlertService,
  TuiAppearance,
  TuiBreakpointService,
  TuiButtonComponent,
  TuiButtonModule,
  TuiCalendarComponent,
  TuiCalendarModule,
  TuiCalendarSheetPipe,
  TuiCalendarSheetPipeModule,
  TuiDataListComponent,
  TuiDataListDirective,
  TuiDataListModule,
  TuiDialogCloseService,
  TuiDialogComponent,
  TuiDialogDirective,
  TuiDialogModule,
  TuiDialogService,
  TuiDriver,
  TuiDropdownAnimation,
  TuiDropdownComponent,
  TuiDropdownContextDirective,
  TuiDropdownDirective,
  TuiDropdownDriverDirective,
  TuiDropdownHostDirective,
  TuiDropdownHoverDirective,
  TuiDropdownManualDirective,
  TuiDropdownModule,
  TuiDropdownOpenDirective,
  TuiDropdownOpenMonitorDirective,
  TuiDropdownOptionsDirective,
  TuiDropdownPositionDirective,
  TuiDropdownPositionSidedDirective,
  TuiDropdownSelectionDirective,
  TuiErrorComponent,
  TuiErrorModule,
  TuiExpandComponent,
  TuiExpandContentDirective,
  TuiExpandModule,
  TuiFlagPipe,
  TuiFlagPipeModule,
  TuiFormatDatePipe,
  TuiFormatDatePipeModule,
  TuiFormatDateService,
  TuiFormatNumberPipe,
  TuiFormatNumberPipeModule,
  TuiFormatPhonePipe,
  TuiFormatPhonePipeModule,
  TuiGroupDirective,
  TuiGroupModule,
  TuiGroupStylesComponent,
  TuiHintComponent,
  TuiHintDescribeDirective,
  TuiHintDirective,
  TuiHintDriverDirective,
  TuiHintHostDirective,
  TuiHintHoverDirective,
  TuiHintManualDirective,
  TuiHintModule,
  TuiHintOptionsDirective,
  TuiHintPointerDirective,
  TuiHintPositionDirective,
  TuiHintService,
  TuiHintUnstyledComponent,
  TuiHintUnstyledDirective,
  TuiHintsHostComponent,
  TuiHintsHostModule,
  TuiHostedDropdownComponent,
  TuiHostedDropdownConnectorDirective,
  TuiHostedDropdownModule,
  TuiInteractiveState,
  TuiLabelComponent,
  TuiLabelModule,
  TuiLinkComponent,
  TuiLinkModule,
  TuiLoaderComponent,
  TuiLoaderModule,
  TuiMaskAccessorDirective,
  TuiMaskAccessorModule,
  TuiModeDirective,
  TuiModeModule,
  TuiMonthPipe,
  TuiMonthPipeModule,
  TuiNightThemeService,
  TuiNotification,
  TuiNotificationComponent,
  TuiNotificationModule,
  TuiNumberFormatDirective,
  TuiNumberFormatModule,
  TuiOptGroupDirective,
  TuiOptionComponent,
  TuiOrderWeekDaysPipe,
  TuiOrderWeekDaysPipeModule,
  TuiPositionAccessor,
  TuiPositionService,
  TuiPrimitiveCalendarComponent,
  TuiPrimitiveCalendarModule,
  TuiPrimitiveCheckboxComponent,
  TuiPrimitiveCheckboxModule,
  TuiPrimitiveSpinButtonComponent,
  TuiPrimitiveSpinButtonModule,
  TuiPrimitiveTextfieldComponent,
  TuiPrimitiveTextfieldDirective,
  TuiPrimitiveTextfieldModule,
  TuiPrimitiveYearMonthPaginationComponent,
  TuiPrimitiveYearMonthPaginationModule,
  TuiPrimitiveYearPickerComponent,
  TuiPrimitiveYearPickerModule,
  TuiRangeState,
  TuiRectAccessor,
  TuiRootComponent,
  TuiRootModule,
  TuiRouterLinkActiveService,
  TuiScrollControlsComponent2 as TuiScrollControlsComponent,
  TuiScrollControlsModule2 as TuiScrollControlsModule,
  TuiScrollIntoViewDirective,
  TuiScrollIntoViewModule,
  TuiScrollRefDirective2 as TuiScrollRefDirective,
  TuiScrollableDirective,
  TuiScrollbarComponent,
  TuiScrollbarDirective2 as TuiScrollbarDirective,
  TuiScrollbarModule,
  TuiSvgComponent,
  TuiSvgDefsHostComponent,
  TuiSvgDefsHostModule,
  TuiSvgModule,
  TuiSvgService,
  TuiTextfieldAppearanceDirective,
  TuiTextfieldCleanerDirective,
  TuiTextfieldComponent,
  TuiTextfieldController,
  TuiTextfieldControllerModule,
  TuiTextfieldCustomContentDirective,
  TuiTextfieldFillerDirective,
  TuiTextfieldIconDirective,
  TuiTextfieldIconLeftDirective,
  TuiTextfieldLabelOutsideDirective,
  TuiTextfieldPostfixDirective,
  TuiTextfieldPrefixDirective,
  TuiTextfieldSizeDirective,
  TuiThemeNightComponent,
  TuiThemeNightModule,
  TuiTooltipComponent,
  TuiTooltipModule,
  TuiValueDecorationComponent,
  TuiVehicle,
  TuiVisualViewportService,
  TuiWrapperDirective,
  TuiWrapperModule,
  tuiAsDataList,
  tuiAsDataListAccessor,
  tuiAsDataListHost,
  tuiAsDriver,
  tuiAsOptionContent,
  tuiAsPositionAccessor,
  tuiAsRectAccessor,
  tuiAsTextfieldHost,
  tuiAsVehicle,
  tuiAsViewport,
  tuiButtonOptionsProvider,
  tuiCapitalize,
  tuiCapitalizeFirstLetter,
  tuiCheckFixedPosition,
  tuiCheckboxOptionsProvider,
  tuiCommonIconsProvider,
  tuiCreateAutoCorrectedNumberPipe,
  tuiCreateCorrectionMask,
  tuiCreateNumberMask,
  tuiDialogOptionsProvider,
  tuiDropdownAnimation,
  tuiDropdownHoverOptionsProvider,
  tuiDropdownOptionsProvider,
  tuiEditingKeys,
  tuiEnableAutoCorrectDecimalSymbol,
  tuiFadeIn,
  tuiFadeInBottom,
  tuiFadeInList,
  tuiFadeInTop,
  tuiFallbackRectAccessor,
  tuiFormatNumber,
  tuiFormatPhone,
  tuiGetBorder,
  tuiGetFractionPartPadded,
  tuiGetSafeAreaSize,
  tuiGetScreenWidth,
  tuiGetViewportHeight,
  tuiGetViewportWidth,
  tuiGetWordRange,
  tuiHeightCollapse,
  tuiHeightCollapseList,
  tuiHintOptionsProvider,
  tuiIconsPathFactory,
  tuiIsEditingKey,
  tuiIsMobile,
  tuiIsObscured,
  tuiIsPresumedHTMLString,
  tuiLoaderOptionsProvider,
  tuiMaskedMoneyValueIsEmpty,
  tuiMaskedNumberStringToNumber,
  tuiNotificationOptionsProvider,
  tuiNumberFormatProvider,
  tuiNumberToStringWithoutExp,
  tuiOtherDecimalSymbol,
  tuiOverrideOptions,
  tuiPop,
  tuiPositionAccessorFor,
  tuiPrimitiveTextfieldOptionsProvider,
  tuiProcessIcon,
  tuiRectAccessorFor,
  tuiScaleIn,
  tuiScaleInList,
  tuiSizeBigger,
  tuiSlideIn,
  tuiSlideInBottom,
  tuiSlideInBottomList,
  tuiSlideInLeft,
  tuiSlideInLeftList,
  tuiSlideInRight,
  tuiSlideInRightList,
  tuiSlideInTop,
  tuiSlideInTopList,
  tuiSmartSearch,
  tuiSvgOptionsProvider,
  tuiSvgSrcInterceptors,
  tuiTextfieldOptionsProvider,
  tuiWatchedControllerFactory,
  tuiWidthCollapse,
  tuiWidthCollapseList,
  tuiZonefulMap
};
//# sourceMappingURL=@taiga-ui_core.js.map
