/* eslint-disable */
'use client';
import { Clock, } from './chunk-YQS4D325.js';
import { className, css, fonts, } from './chunk-DCG3Q45P.js';
import { Icon, } from './chunk-NTBY4HVU.js';
import './chunk-ZBBVTMRC.js';

// https :https://framerusercontent.com/modules/S8ZD89HUjsmc9r7cflrK/pjBwmMXLUVZC2f667zlv/vgAPRLghQ.js
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
var cycleOrder = ['LwtWrwO0r',];
var serializationHash = 'framer-pAmeV';
var variantClassNames = { LwtWrwO0r: 'framer-v-yjw7xy', };
var transition1 = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: 'spring', };
var transformTemplate1 = (_, t,) => `translateX(-50%) ${t}`;
var Transition = ({ value, children, },) => {
  const config = React.useContext(MotionConfigContext,);
  const transition = value !== null && value !== void 0 ? value : config.transition;
  const contextValue = React.useMemo(() => ({ ...config, transition, }), [JSON.stringify(transition,),],);
  return /* @__PURE__ */ _jsx(MotionConfigContext.Provider, { value: contextValue, children, },);
};
var Variants = motion(React.Fragment,);
var getProps = ({ height, id, tap, tap2, width, ...props },) => {
  return {
    ...props,
    DEfvUj4ay: tap !== null && tap !== void 0 ? tap : props.DEfvUj4ay,
    Ugf7Txrp7: tap2 !== null && tap2 !== void 0 ? tap2 : props.Ugf7Txrp7,
  };
};
var createLayoutDependency = (props, variants,) => variants.join('-',) + props.layoutDependency;
var Component = /* @__PURE__ */ React.forwardRef(function (props, ref,) {
  const { activeLocale, setLocale, } = useLocaleInfo();
  const { style, className: className2, layoutId, variant, DEfvUj4ay, Ugf7Txrp7, ...restProps } = getProps(props,);
  const { baseVariant, classNames, gestureVariant, setGestureState, setVariant, variants, } = useVariantState({
    cycleOrder,
    defaultVariant: 'LwtWrwO0r',
    variant,
    variantClassNames,
  },);
  const layoutDependency = createLayoutDependency(props, variants,);
  const { activeVariantCallback, delay, } = useActiveVariantCallback(baseVariant,);
  const onTap4gn2nl = activeVariantCallback(async (...args) => {
    if (DEfvUj4ay) {
      const res = await DEfvUj4ay(...args,);
      if (res === false) {
        return false;
      }
    }
  },);
  const onClick194ozjs = activeVariantCallback(async (...args) => {
    if (Ugf7Txrp7) {
      const res = await Ugf7Txrp7(...args,);
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
          className: cx(serializationHash, ...sharedStyleClassNames, 'framer-yjw7xy', className2, classNames,),
          'data-framer-name': 'Variant 1',
          layoutDependency,
          layoutId: 'LwtWrwO0r',
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
              className: 'framer-9t8piz',
              'data-framer-name': 'iphone14pro',
              layoutDependency,
              layoutId: 'Vk8msJI0f',
              children: [
                /* @__PURE__ */ _jsx(ComponentViewportProvider, {
                  children: /* @__PURE__ */ _jsx(motion.div, {
                    className: 'framer-198bmj6-container',
                    layoutDependency,
                    layoutId: 'XGvzcItP0-container',
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
                      id: 'XGvzcItP0',
                      is12hour: true,
                      layoutId: 'XGvzcItP0',
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
                  className: 'framer-197fdzf',
                  'data-highlight': true,
                  layoutDependency,
                  layoutId: 'Cdp6xGUKN',
                  onTap: onTap4gn2nl,
                },),
                /* @__PURE__ */ _jsx(Image, {
                  background: {
                    alt: '',
                    fit: 'fill',
                    intrinsicHeight: 314,
                    intrinsicWidth: 314,
                    pixelHeight: 628,
                    pixelWidth: 628,
                    sizes: '314px',
                    src: 'https://framerusercontent.com/images/GsX6YvjIJaJYxP3wj6sOWu1a8.jpg?scale-down-to=512',
                    srcSet:
                      'https://framerusercontent.com/images/GsX6YvjIJaJYxP3wj6sOWu1a8.jpg?scale-down-to=512 512w,https://framerusercontent.com/images/GsX6YvjIJaJYxP3wj6sOWu1a8.jpg 628w',
                  },
                  className: 'framer-1ytfr1u',
                  'data-framer-name': 'routine_calendar',
                  layoutDependency,
                  layoutId: 'BJyjySjsZ',
                  transformTemplate: transformTemplate1,
                },),
              ],
            },),
            /* @__PURE__ */ _jsx(RichText, {
              __fromCanvasComponent: true,
              children: /* @__PURE__ */ _jsx(React.Fragment, {
                children: /* @__PURE__ */ _jsx(motion.h1, {
                  className: 'framer-styles-preset-ame1jg',
                  'data-styles-preset': 'e81t2mHNr',
                  children: 'Routine',
                },),
              },),
              className: 'framer-kekttp',
              fonts: ['Inter',],
              layoutDependency,
              layoutId: 'KgYFwtWL4',
              style: { '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', },
              verticalAlignment: 'top',
              withExternalLayout: true,
            },),
            /* @__PURE__ */ _jsx(ComponentViewportProvider, {
              children: /* @__PURE__ */ _jsx(motion.div, {
                className: 'framer-3yc1md-container',
                layoutDependency,
                layoutId: 'S13ozrSyT-container',
                children: /* @__PURE__ */ _jsx(Icon, {
                  color: 'rgb(0, 0, 0)',
                  height: '100%',
                  iconSearch: '',
                  iconSelection: 'ArrowLeft',
                  id: 'S13ozrSyT',
                  layoutId: 'S13ozrSyT',
                  mirrored: false,
                  onClick: onClick194ozjs,
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
  '.framer-pAmeV.framer-1jozm6b, .framer-pAmeV .framer-1jozm6b { display: block; }',
  '.framer-pAmeV.framer-yjw7xy { height: 790px; overflow: hidden; position: relative; width: 386px; }',
  '.framer-pAmeV .framer-9t8piz { aspect-ratio: 0.4888888888888889 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 790px); left: 0px; overflow: visible; position: absolute; right: 0px; top: 0px; }',
  '.framer-pAmeV .framer-198bmj6-container { flex: none; height: auto; left: 50%; position: absolute; top: 29px; width: 79px; }',
  '.framer-pAmeV .framer-197fdzf { cursor: pointer; flex: none; height: 15px; left: calc(48.96373056994821% - 64px / 2); overflow: visible; position: absolute; top: 32px; width: 64px; }',
  '.framer-pAmeV .framer-1ytfr1u { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 314px); left: 50%; overflow: visible; position: absolute; top: 158px; width: 314px; }',
  '.framer-pAmeV .framer-kekttp { flex: none; height: 18px; left: 43px; position: absolute; top: 115px; white-space: pre-wrap; width: 209px; word-break: break-word; word-wrap: break-word; }',
  '.framer-pAmeV .framer-3yc1md-container { flex: none; height: 44px; left: 30px; position: absolute; top: 58px; width: 44px; }',
  ...css,
];
var FramervgAPRLghQ = withCSS(Component, css2, 'framer-pAmeV',);
var stdin_default = FramervgAPRLghQ;
FramervgAPRLghQ.displayName = 'routine';
FramervgAPRLghQ.defaultProps = { height: 790, width: 386, };
addPropertyControls(FramervgAPRLghQ, {
  DEfvUj4ay: { title: 'Tap', type: ControlType.EventHandler, },
  Ugf7Txrp7: { title: 'Tap 2', type: ControlType.EventHandler, },
},);
addFonts(FramervgAPRLghQ, [
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
    },],
  },
  ...ClockFonts,
  ...IconoirFonts,
  ...getFontsFromSharedStyle(fonts,),
], { supportsExplicitInterCodegen: true, },);

// virtual:routine
import { WithFramerBreakpoints, } from 'unframer';
import { jsx, } from 'react/jsx-runtime';
stdin_default.Responsive = (props,) => {
  return /* @__PURE__ */ jsx(WithFramerBreakpoints, { Component: stdin_default, ...props, },);
};
var routine_default = stdin_default;
export { routine_default as default, };
