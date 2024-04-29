/* eslint-disable */
'use client';
import { Clock, } from './chunk-YQS4D325.js';
import { className, css, fonts, } from './chunk-DCG3Q45P.js';
import { Icon, } from './chunk-NTBY4HVU.js';
import './chunk-ZBBVTMRC.js';

// https :https://framerusercontent.com/modules/ilaP5dNfhduveMNTrKPR/NXQBqyAiV23Ikk1GuEiD/uvyQ4Fuz5.js
import { jsx as _jsx, jsxs as _jsxs, } from 'react/jsx-runtime';
import {
  addFonts,
  addPropertyControls,
  ComponentViewportProvider,
  ControlType,
  cx,
  getFonts,
  getFontsFromSharedStyle,
  Image,
  RichText,
  useActiveVariantCallback,
  useComponentViewport,
  useLocaleInfo,
  useVariantState,
  withCSS,
} from 'unframer';
import { LayoutGroup, motion, MotionConfigContext, } from 'unframer';
import * as React from 'react';
var ClockFonts = getFonts(Clock,);
var IconoirFonts = getFonts(Icon,);
var cycleOrder = ['ABa5R2oMS',];
var serializationHash = 'framer-hz3YD';
var variantClassNames = { ABa5R2oMS: 'framer-v-1jzt6st', };
var transition1 = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: 'spring', };
var transformTemplate1 = (_, t,) => `translateX(-50%) ${t}`;
var transformTemplate2 = (_, t,) => `translate(-50%, -50%) ${t}`;
var Transition = ({ value, children, },) => {
  const config = React.useContext(MotionConfigContext,);
  const transition = value !== null && value !== void 0 ? value : config.transition;
  const contextValue = React.useMemo(() => ({ ...config, transition, }), [JSON.stringify(transition,),],);
  return /* @__PURE__ */ _jsx(MotionConfigContext.Provider, { value: contextValue, children, },);
};
var Variants = motion(React.Fragment,);
var getProps = ({ height, id, tap, tap2, tap3, width, ...props },) => {
  return {
    ...props,
    Aw5KyfA7h: tap3 !== null && tap3 !== void 0 ? tap3 : props.Aw5KyfA7h,
    WqDYVyM_h: tap2 !== null && tap2 !== void 0 ? tap2 : props.WqDYVyM_h,
    yQ72AraSc: tap !== null && tap !== void 0 ? tap : props.yQ72AraSc,
  };
};
var createLayoutDependency = (props, variants,) => variants.join('-',) + props.layoutDependency;
var Component = /* @__PURE__ */ React.forwardRef(function (props, ref,) {
  const { activeLocale, setLocale, } = useLocaleInfo();
  const { style, className: className2, layoutId, variant, yQ72AraSc, WqDYVyM_h, Aw5KyfA7h, ...restProps } = getProps(props,);
  const { baseVariant, classNames, gestureVariant, setGestureState, setVariant, variants, } = useVariantState({
    cycleOrder,
    defaultVariant: 'ABa5R2oMS',
    variant,
    variantClassNames,
  },);
  const layoutDependency = createLayoutDependency(props, variants,);
  const { activeVariantCallback, delay, } = useActiveVariantCallback(baseVariant,);
  const onTapomns9i = activeVariantCallback(async (...args) => {
    if (yQ72AraSc) {
      const res = await yQ72AraSc(...args,);
      if (res === false) {
        return false;
      }
    }
  },);
  const onTap9njo8r = activeVariantCallback(async (...args) => {
    if (WqDYVyM_h) {
      const res = await WqDYVyM_h(...args,);
      if (res === false) {
        return false;
      }
    }
  },);
  const onClicktys0ku = activeVariantCallback(async (...args) => {
    if (Aw5KyfA7h) {
      const res = await Aw5KyfA7h(...args,);
      if (res === false) {
        return false;
      }
    }
  },);
  const ref1 = React.useRef(null,);
  const defaultLayoutId = React.useId();
  const sharedStyleClassNames = [className,];
  const componentViewport = useComponentViewport();
  return /* @__PURE__ */ _jsx(LayoutGroup, {
    id: layoutId !== null && layoutId !== void 0 ? layoutId : defaultLayoutId,
    children: /* @__PURE__ */ _jsx(Variants, {
      animate: variants,
      initial: false,
      children: /* @__PURE__ */ _jsx(Transition, {
        value: transition1,
        children: /* @__PURE__ */ _jsxs(motion.div, {
          ...restProps,
          className: cx(serializationHash, ...sharedStyleClassNames, 'framer-1jzt6st', className2, classNames,),
          'data-framer-name': 'Variant 1',
          layoutDependency,
          layoutId: 'ABa5R2oMS',
          onHoverEnd: () => setGestureState({ isHovered: false, },),
          onHoverStart: () => setGestureState({ isHovered: true, },),
          onTap: () => setGestureState({ isPressed: false, },),
          onTapCancel: () => setGestureState({ isPressed: false, },),
          onTapStart: () => setGestureState({ isPressed: true, },),
          ref: ref !== null && ref !== void 0 ? ref : ref1,
          style: { backgroundColor: 'rgb(255, 255, 255)', ...style, },
          children: [
            /* @__PURE__ */ _jsxs(Image, {
              background: {
                alt: '',
                fit: 'fill',
                intrinsicHeight: 2250,
                intrinsicWidth: 1100,
                pixelHeight: 4500,
                pixelWidth: 2200,
                sizes: (componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.width) || '100vw',
                src: 'https://framerusercontent.com/images/1uEO3pFZ5OW3cGbOe0iL7EkeHN0.png?scale-down-to=4096',
                srcSet:
                  'https://framerusercontent.com/images/1uEO3pFZ5OW3cGbOe0iL7EkeHN0.png?scale-down-to=2048 1001w,https://framerusercontent.com/images/1uEO3pFZ5OW3cGbOe0iL7EkeHN0.png?scale-down-to=4096 2002w,https://framerusercontent.com/images/1uEO3pFZ5OW3cGbOe0iL7EkeHN0.png 2200w',
              },
              className: 'framer-7sdaku',
              'data-framer-name': 'iphone14pro',
              layoutDependency,
              layoutId: 'p7fnUsDwk',
              children: [
                /* @__PURE__ */ _jsx(ComponentViewportProvider, {
                  children: /* @__PURE__ */ _jsx(motion.div, {
                    className: 'framer-1dpwsps-container',
                    layoutDependency,
                    layoutId: 'j9tg1pALj-container',
                    transformTemplate: transformTemplate1,
                    children: /* @__PURE__ */ _jsx(Clock, {
                      ampmCase: 'uppercase',
                      color: 'rgb(255, 255, 255)',
                      font: {
                        fontFamily: '"Inter", sans-serif',
                        fontSize: '22px',
                        fontStyle: 'normal',
                        letterSpacing: '0em',
                        lineHeight: '1em',
                      },
                      height: '100%',
                      id: 'j9tg1pALj',
                      is12hour: true,
                      layoutId: 'j9tg1pALj',
                      prefix: '',
                      seconds: true,
                      style: { width: '100%', },
                      suffix: '',
                      textSelect: true,
                      timeZone: false,
                      width: '100%',
                    },),
                  },),
                },),
                /* @__PURE__ */ _jsx(motion.div, {
                  className: 'framer-1hmwq4u',
                  'data-highlight': true,
                  layoutDependency,
                  layoutId: 'UyOOV5L82',
                  onTap: onTapomns9i,
                },),
              ],
            },),
            /* @__PURE__ */ _jsx(motion.button, {
              className: 'framer-19qogdu',
              'data-framer-name': 'Button',
              'data-highlight': true,
              'data-reset': 'button',
              layoutDependency,
              layoutId: 'rnhwzRQYq',
              onTap: onTap9njo8r,
              style: {
                backgroundColor: 'rgb(255, 121, 173)',
                borderBottomLeftRadius: 30,
                borderBottomRightRadius: 30,
                borderTopLeftRadius: 30,
                borderTopRightRadius: 30,
                boxShadow: '2px 2px 2px 0px rgba(0,0,0,0.25)',
              },
              children: /* @__PURE__ */ _jsx(RichText, {
                __fromCanvasComponent: true,
                children: /* @__PURE__ */ _jsx(React.Fragment, {
                  children: /* @__PURE__ */ _jsx(motion.p, {
                    style: {
                      '--font-selector': 'R0Y7RE0gU2Fucy01MDA=',
                      '--framer-font-family': '"DM Sans", sans-serif',
                      '--framer-font-weight': '500',
                      '--framer-text-alignment': 'center',
                      '--framer-text-color': 'var(--extracted-r6o4lv, rgb(255, 255, 255))',
                    },
                    children: 'YES',
                  },),
                },),
                className: 'framer-32id7b',
                fonts: ['GF;DM Sans-500',],
                layoutDependency,
                layoutId: 'T85qFUiXj',
                style: { '--extracted-r6o4lv': 'rgb(255, 255, 255)', },
                transformTemplate: transformTemplate2,
                verticalAlignment: 'top',
                withExternalLayout: true,
              },),
            },),
            /* @__PURE__ */ _jsx(RichText, {
              __fromCanvasComponent: true,
              children: /* @__PURE__ */ _jsx(React.Fragment, {
                children: /* @__PURE__ */ _jsx(motion.h1, {
                  className: 'framer-styles-preset-ame1jg',
                  'data-styles-preset': 'e81t2mHNr',
                  children: 'Are you done sh*tting?',
                },),
              },),
              className: 'framer-r692ex',
              fonts: ['Inter',],
              layoutDependency,
              layoutId: 'OYBwkYUuY',
              style: { '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', },
              verticalAlignment: 'top',
              withExternalLayout: true,
            },),
            /* @__PURE__ */ _jsx(ComponentViewportProvider, {
              children: /* @__PURE__ */ _jsx(motion.div, {
                className: 'framer-vdf55w-container',
                layoutDependency,
                layoutId: 'Dph69yxXW-container',
                children: /* @__PURE__ */ _jsx(Icon, {
                  color: 'rgb(0, 0, 0)',
                  height: '100%',
                  iconSearch: '',
                  iconSelection: 'ArrowLeft',
                  id: 'Dph69yxXW',
                  layoutId: 'Dph69yxXW',
                  mirrored: false,
                  onClick: onClicktys0ku,
                  selectByList: true,
                  style: { height: '100%', width: '100%', },
                  width: '100%',
                },),
              },),
            },),
          ],
        },),
      },),
    },),
  },);
},);
var css2 = [
  '@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }',
  '.framer-hz3YD.framer-jsmbmq, .framer-hz3YD .framer-jsmbmq { display: block; }',
  '.framer-hz3YD.framer-1jzt6st { height: 790px; overflow: hidden; position: relative; width: 386px; }',
  '.framer-hz3YD .framer-7sdaku { aspect-ratio: 0.4888888888888889 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 790px); left: 0px; overflow: visible; position: absolute; right: 0px; top: 0px; }',
  '.framer-hz3YD .framer-1dpwsps-container { flex: none; height: auto; left: 50%; position: absolute; top: 29px; width: 79px; }',
  '.framer-hz3YD .framer-1hmwq4u { cursor: pointer; flex: none; height: 15px; left: calc(48.96373056994821% - 64px / 2); overflow: visible; position: absolute; top: 32px; width: 64px; }',
  '.framer-hz3YD .framer-19qogdu { align-content: center; align-items: center; cursor: pointer; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: 42px; justify-content: center; left: calc(49.74093264248707% - 299px / 2); padding: 10px 20px 10px 20px; position: absolute; top: 161px; width: 299px; }',
  '.framer-hz3YD .framer-32id7b { flex: none; height: auto; left: 50%; overflow: visible; position: absolute; top: 50%; white-space: pre; width: auto; z-index: 1; }',
  '.framer-hz3YD .framer-r692ex { flex: none; height: 18px; left: 43px; position: absolute; top: 115px; white-space: pre-wrap; width: 209px; word-break: break-word; word-wrap: break-word; }',
  '.framer-hz3YD .framer-vdf55w-container { flex: none; height: 44px; left: 30px; position: absolute; top: 58px; width: 44px; }',
  '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-hz3YD .framer-19qogdu { gap: 0px; } .framer-hz3YD .framer-19qogdu > * { margin: 0px; margin-left: calc(8px / 2); margin-right: calc(8px / 2); } .framer-hz3YD .framer-19qogdu > :first-child { margin-left: 0px; } .framer-hz3YD .framer-19qogdu > :last-child { margin-right: 0px; } }',
  ...css,
];
var FrameruvyQ4Fuz5 = withCSS(Component, css2, 'framer-hz3YD',);
var stdin_default = FrameruvyQ4Fuz5;
FrameruvyQ4Fuz5.displayName = 'finish1';
FrameruvyQ4Fuz5.defaultProps = { height: 790, width: 386, };
addPropertyControls(FrameruvyQ4Fuz5, {
  yQ72AraSc: { title: 'Tap', type: ControlType.EventHandler, },
  WqDYVyM_h: { title: 'Tap 2', type: ControlType.EventHandler, },
  Aw5KyfA7h: { title: 'Tap 3', type: ControlType.EventHandler, },
},);
addFonts(FrameruvyQ4Fuz5, [
  {
    explicitInter: true,
    fonts: [{
      family: 'Inter',
      source: 'framer',
      style: 'normal',
      unicodeRange: 'U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F',
      url: 'https://app.framerstatic.com/Inter-Regular.cyrillic-ext-CFTLRB35.woff2',
      weight: '400',
    }, {
      family: 'Inter',
      source: 'framer',
      style: 'normal',
      unicodeRange: 'U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116',
      url: 'https://app.framerstatic.com/Inter-Regular.cyrillic-KKLZBALH.woff2',
      weight: '400',
    }, {
      family: 'Inter',
      source: 'framer',
      style: 'normal',
      unicodeRange: 'U+1F00-1FFF',
      url: 'https://app.framerstatic.com/Inter-Regular.greek-ext-ULEBLIFV.woff2',
      weight: '400',
    }, {
      family: 'Inter',
      source: 'framer',
      style: 'normal',
      unicodeRange: 'U+0370-03FF',
      url: 'https://app.framerstatic.com/Inter-Regular.greek-IRHSNFQB.woff2',
      weight: '400',
    }, {
      family: 'Inter',
      source: 'framer',
      style: 'normal',
      unicodeRange: 'U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF',
      url: 'https://app.framerstatic.com/Inter-Regular.latin-ext-VZDUGU3Q.woff2',
      weight: '400',
    }, {
      family: 'Inter',
      source: 'framer',
      style: 'normal',
      unicodeRange:
        'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD',
      url: 'https://app.framerstatic.com/Inter-Regular.latin-JLQMKCHE.woff2',
      weight: '400',
    }, {
      family: 'Inter',
      source: 'framer',
      style: 'normal',
      unicodeRange: 'U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB',
      url: 'https://app.framerstatic.com/Inter-Regular.vietnamese-QK7VSWXK.woff2',
      weight: '400',
    }, {
      family: 'DM Sans',
      source: 'google',
      style: 'normal',
      url: 'https://fonts.gstatic.com/s/dmsans/v15/rP2tp2ywxg089UriI5-g4vlH9VoD8CmcqZG40F9JadbnoEwAkJxhS2f3ZGMZpg.woff2',
      weight: '500',
    },],
  },
  ...ClockFonts,
  ...IconoirFonts,
  ...getFontsFromSharedStyle(fonts,),
], { supportsExplicitInterCodegen: true, },);

// virtual:finish
import { WithFramerBreakpoints, } from 'unframer';
import { jsx, } from 'react/jsx-runtime';
stdin_default.Responsive = (props,) => {
  return /* @__PURE__ */ jsx(WithFramerBreakpoints, { Component: stdin_default, ...props, },);
};
var finish_default = stdin_default;
export { finish_default as default, };
