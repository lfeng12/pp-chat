/* eslint-disable */
'use client';
import { stdin_default, } from './chunk-XQUDET47.js';
import { className, css, fonts, } from './chunk-XH7W2HFD.js';
import { Pattern, } from './chunk-HEETZSPU.js';
import { className as className2, css as css2, fonts as fonts2, Icon, } from './chunk-6MAF3TKJ.js';
import './chunk-ZBBVTMRC.js';

// https :https://framerusercontent.com/modules/ts9XMtINzIyJHXuQY9ye/r9uMqiyC5tvuUvhCTnOu/czYkvZ9ns.js
import { jsx as _jsx2, jsxs as _jsxs2, } from 'react/jsx-runtime';
import {
  addFonts as addFonts2,
  ComponentViewportProvider as ComponentViewportProvider2,
  cx as cx2,
  getFonts as getFonts2,
  getFontsFromSharedStyle as getFontsFromSharedStyle2,
  RichText as RichText2,
  useComponentViewport as useComponentViewport2,
  useLocaleInfo as useLocaleInfo2,
  useVariantState as useVariantState2,
  withCSS as withCSS2,
} from 'unframer';
import { LayoutGroup as LayoutGroup2, motion as motion2, MotionConfigContext as MotionConfigContext2, } from 'unframer';
import * as React2 from 'react';

// https :https://framerusercontent.com/modules/iUvLvUwqs9crSOtBnbyq/UVxlUNKukjEzFj1r7O9T/xfMqTw5Ik.js
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
var ButtonFonts = getFonts(stdin_default,);
var cycleOrder = ['LDSfinIyd',];
var serializationHash = 'framer-adnwX';
var variantClassNames = { LDSfinIyd: 'framer-v-1bcqqvf', };
var transition1 = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: 'spring', };
var transformTemplate1 = (_, t,) => `translateY(-50%) ${t}`;
var Transition = ({ value, children, },) => {
  const config = React.useContext(MotionConfigContext,);
  const transition = value !== null && value !== void 0 ? value : config.transition;
  const contextValue = React.useMemo(() => ({ ...config, transition, }), [JSON.stringify(transition,),],);
  return /* @__PURE__ */ _jsx(MotionConfigContext.Provider, { value: contextValue, children, },);
};
var Variants = motion(React.Fragment,);
var getProps = ({ height, id, onNo, onYes, width, ...props },) => {
  return {
    ...props,
    IA4tGuhVu: onYes !== null && onYes !== void 0 ? onYes : props.IA4tGuhVu,
    P8hEQKfSq: onNo !== null && onNo !== void 0 ? onNo : props.P8hEQKfSq,
  };
};
var createLayoutDependency = (props, variants,) => variants.join('-',) + props.layoutDependency;
var Component = /* @__PURE__ */ React.forwardRef(function (props, ref,) {
  const { activeLocale, setLocale, } = useLocaleInfo();
  const { style, className: className3, layoutId, variant, P8hEQKfSq, IA4tGuhVu, ...restProps } = getProps(props,);
  const { baseVariant, classNames, gestureVariant, setGestureState, setVariant, variants, } = useVariantState({
    cycleOrder,
    defaultVariant: 'LDSfinIyd',
    variant,
    variantClassNames,
  },);
  const layoutDependency = createLayoutDependency(props, variants,);
  const { activeVariantCallback, delay, } = useActiveVariantCallback(baseVariant,);
  const jyiKBY2js1dvddom = activeVariantCallback(async (...args) => {
    if (IA4tGuhVu) {
      const res = await IA4tGuhVu(...args,);
      if (res === false) {
        return false;
      }
    }
  },);
  const jyiKBY2jsrb6dci = activeVariantCallback(async (...args) => {
    if (P8hEQKfSq) {
      const res = await P8hEQKfSq(...args,);
      if (res === false) {
        return false;
      }
    }
  },);
  const ref1 = React.useRef(null,);
  const defaultLayoutId = React.useId();
  const sharedStyleClassNames = [className2,];
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
          className: cx(serializationHash, ...sharedStyleClassNames, 'framer-1bcqqvf', className3, classNames,),
          'data-framer-name': 'Variant 1',
          layoutDependency,
          layoutId: 'LDSfinIyd',
          onHoverEnd: () => setGestureState({ isHovered: false, },),
          onHoverStart: () => setGestureState({ isHovered: true, },),
          onTap: () => setGestureState({ isPressed: false, },),
          onTapCancel: () => setGestureState({ isPressed: false, },),
          onTapStart: () => setGestureState({ isPressed: true, },),
          ref: ref !== null && ref !== void 0 ? ref : ref1,
          style: { ...style, },
          children: [
            /* @__PURE__ */ _jsxs(motion.div, {
              className: 'framer-lraxxy',
              layoutDependency,
              layoutId: 'hE40BN8OB',
              children: [
                /* @__PURE__ */ _jsx(RichText, {
                  __fromCanvasComponent: true,
                  children: /* @__PURE__ */ _jsx(React.Fragment, {
                    children: /* @__PURE__ */ _jsx(motion.h1, {
                      className: 'framer-styles-preset-ame1jg',
                      'data-styles-preset': 'e81t2mHNr',
                      style: { '--framer-text-alignment': 'center', },
                      children: 'Are you       ing?',
                    },),
                  },),
                  className: 'framer-bfv5qt',
                  fonts: ['Inter',],
                  layoutDependency,
                  layoutId: 'l5vBN8TwR',
                  style: { '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', },
                  transformTemplate: transformTemplate1,
                  verticalAlignment: 'top',
                  withExternalLayout: true,
                },),
                /* @__PURE__ */ _jsx(Image, {
                  background: {
                    alt: '',
                    fit: 'fill',
                    intrinsicHeight: 240,
                    intrinsicWidth: 240,
                    pixelHeight: 480,
                    pixelWidth: 480,
                    src: 'https://framerusercontent.com/images/Q2S7FEATbwXgsz6Ryi1tmVGUt7s.webp',
                  },
                  className: 'framer-oi79is',
                  'data-framer-name': 'Poop_Emoji_7b204f05_eec6_4496_91b1_351acc03d2c7_large_png',
                  layoutDependency,
                  layoutId: 'Fgn1uGMfr',
                },),
              ],
            },),
            /* @__PURE__ */ _jsx(ComponentViewportProvider, {
              width: (componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.width) || '100vw',
              children: /* @__PURE__ */ _jsx(motion.div, {
                className: 'framer-1mfydm3-container',
                layoutDependency,
                layoutId: 'tkY5Y_M6v-container',
                children: /* @__PURE__ */ _jsx(stdin_default, {
                  height: '100%',
                  id: 'tkY5Y_M6v',
                  jyiKBY2js: jyiKBY2js1dvddom,
                  layoutId: 'tkY5Y_M6v',
                  qSWmKjqbQ: 'Yes',
                  style: { height: '100%', width: '100%', },
                  variant: 'RpZv2hG1E',
                  width: '100%',
                },),
              },),
            },),
            /* @__PURE__ */ _jsx(ComponentViewportProvider, {
              width: (componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.width) || '100vw',
              children: /* @__PURE__ */ _jsx(motion.div, {
                className: 'framer-x7d0nt-container',
                layoutDependency,
                layoutId: 'NF_jM8xqV-container',
                children: /* @__PURE__ */ _jsx(stdin_default, {
                  height: '100%',
                  id: 'NF_jM8xqV',
                  jyiKBY2js: jyiKBY2jsrb6dci,
                  layoutId: 'NF_jM8xqV',
                  qSWmKjqbQ: 'No',
                  style: { height: '100%', width: '100%', },
                  variant: 'RpZv2hG1E',
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
var css3 = [
  '@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }',
  '.framer-adnwX.framer-1vy16fe, .framer-adnwX .framer-1vy16fe { display: block; }',
  '.framer-adnwX.framer-1bcqqvf { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 300px; }',
  '.framer-adnwX .framer-lraxxy { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; min-height: 24px; min-width: 209px; overflow: visible; padding: 0px; position: relative; width: min-content; }',
  '.framer-adnwX .framer-bfv5qt { flex: none; height: auto; left: 0px; position: absolute; right: 0px; top: 54%; white-space: pre-wrap; word-break: break-word; word-wrap: break-word; z-index: 1; }',
  '.framer-adnwX .framer-oi79is { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 20px); left: 112px; overflow: visible; position: absolute; top: 3px; width: 20px; z-index: 1; }',
  '.framer-adnwX .framer-1mfydm3-container, .framer-adnwX .framer-x7d0nt-container { flex: none; height: 42px; position: relative; width: 100%; }',
  '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-adnwX.framer-1bcqqvf, .framer-adnwX .framer-lraxxy { gap: 0px; } .framer-adnwX.framer-1bcqqvf > * { margin: 0px; margin-bottom: calc(30px / 2); margin-top: calc(30px / 2); } .framer-adnwX.framer-1bcqqvf > :first-child { margin-top: 0px; } .framer-adnwX.framer-1bcqqvf > :last-child { margin-bottom: 0px; } .framer-adnwX .framer-lraxxy > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-adnwX .framer-lraxxy > :first-child { margin-left: 0px; } .framer-adnwX .framer-lraxxy > :last-child { margin-right: 0px; } }',
  ...css2,
];
var FramerxfMqTw5Ik = withCSS(Component, css3, 'framer-adnwX',);
var stdin_default2 = FramerxfMqTw5Ik;
FramerxfMqTw5Ik.displayName = 'Question';
FramerxfMqTw5Ik.defaultProps = { height: 168, width: 300, };
addPropertyControls(FramerxfMqTw5Ik, {
  P8hEQKfSq: { title: 'On No', type: ControlType.EventHandler, },
  IA4tGuhVu: { title: 'On Yes', type: ControlType.EventHandler, },
},);
addFonts(FramerxfMqTw5Ik, [
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
  ...ButtonFonts,
  ...getFontsFromSharedStyle(fonts2,),
], { supportsExplicitInterCodegen: true, },);

// https :https://framerusercontent.com/modules/ts9XMtINzIyJHXuQY9ye/r9uMqiyC5tvuUvhCTnOu/czYkvZ9ns.js
var PatternFonts = getFonts2(Pattern,);
var IconoirFonts = getFonts2(Icon,);
var QuestionFonts = getFonts2(stdin_default2,);
var cycleOrder2 = ['f5Fn6c8wB',];
var serializationHash2 = 'framer-D99L1';
var variantClassNames2 = { f5Fn6c8wB: 'framer-v-1134jr4', };
var transition12 = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: 'spring', };
var transformTemplate12 = (_, t,) => `translateX(-50%) ${t}`;
var Transition2 = ({ value, children, },) => {
  const config = React2.useContext(MotionConfigContext2,);
  const transition = value !== null && value !== void 0 ? value : config.transition;
  const contextValue = React2.useMemo(() => ({ ...config, transition, }), [JSON.stringify(transition,),],);
  return /* @__PURE__ */ _jsx2(MotionConfigContext2.Provider, { value: contextValue, children, },);
};
var Variants2 = motion2(React2.Fragment,);
var getProps2 = ({ height, id, width, ...props },) => {
  return { ...props, };
};
var createLayoutDependency2 = (props, variants,) => variants.join('-',) + props.layoutDependency;
var Component2 = /* @__PURE__ */ React2.forwardRef(function (props, ref,) {
  const { activeLocale, setLocale, } = useLocaleInfo2();
  const { style, className: className3, layoutId, variant, ...restProps } = getProps2(props,);
  const { baseVariant, classNames, gestureVariant, setGestureState, setVariant, variants, } = useVariantState2({
    cycleOrder: cycleOrder2,
    defaultVariant: 'f5Fn6c8wB',
    variant,
    variantClassNames: variantClassNames2,
  },);
  const layoutDependency = createLayoutDependency2(props, variants,);
  const ref1 = React2.useRef(null,);
  const defaultLayoutId = React2.useId();
  const sharedStyleClassNames = [className,];
  const componentViewport = useComponentViewport2();
  return /* @__PURE__ */ _jsx2(LayoutGroup2, {
    id: layoutId !== null && layoutId !== void 0 ? layoutId : defaultLayoutId,
    children: /* @__PURE__ */ _jsx2(Variants2, {
      animate: variants,
      initial: false,
      children: /* @__PURE__ */ _jsx2(Transition2, {
        value: transition12,
        children: /* @__PURE__ */ _jsxs2(motion2.div, {
          ...restProps,
          className: cx2(serializationHash2, ...sharedStyleClassNames, 'framer-1134jr4', className3, classNames,),
          'data-framer-name': 'Variant 1',
          layoutDependency,
          layoutId: 'f5Fn6c8wB',
          onHoverEnd: () => setGestureState({ isHovered: false, },),
          onHoverStart: () => setGestureState({ isHovered: true, },),
          onTap: () => setGestureState({ isPressed: false, },),
          onTapCancel: () => setGestureState({ isPressed: false, },),
          onTapStart: () => setGestureState({ isPressed: true, },),
          ref: ref !== null && ref !== void 0 ? ref : ref1,
          style: { backgroundColor: 'rgb(255, 255, 255)', ...style, },
          children: [
            /* @__PURE__ */ _jsx2(ComponentViewportProvider2, {
              children: /* @__PURE__ */ _jsx2(motion2.div, {
                className: 'framer-jvvkmm-container',
                layoutDependency,
                layoutId: 'IVtmpa_dU-container',
                style: { opacity: 0.2, },
                children: /* @__PURE__ */ _jsx2(Pattern, {
                  back: 'rgb(255, 121, 173)',
                  diagonal: true,
                  direction: 'left',
                  duration: 5,
                  front: 'rgb(255, 255, 255)',
                  height: '100%',
                  id: 'IVtmpa_dU',
                  layoutId: 'IVtmpa_dU',
                  patternType: 'wave-lines',
                  radius: 0,
                  scale: 22,
                  shouldAnimate: true,
                  style: { height: '100%', width: '100%', },
                  width: '100%',
                },),
              },),
            },),
            /* @__PURE__ */ _jsx2(ComponentViewportProvider2, {
              children: /* @__PURE__ */ _jsx2(motion2.div, {
                className: 'framer-6w1dga-container',
                layoutDependency,
                layoutId: 'YJI2p0CVo-container',
                children: /* @__PURE__ */ _jsx2(Icon, {
                  color: 'rgb(0, 0, 0)',
                  height: '100%',
                  iconSearch: '',
                  iconSelection: 'ArrowLeft',
                  id: 'YJI2p0CVo',
                  layoutId: 'YJI2p0CVo',
                  mirrored: false,
                  selectByList: true,
                  style: { height: '100%', width: '100%', },
                  width: '100%',
                },),
              },),
            },),
            /* @__PURE__ */ _jsx2(RichText2, {
              __fromCanvasComponent: true,
              children: /* @__PURE__ */ _jsx2(React2.Fragment, {
                children: /* @__PURE__ */ _jsx2(motion2.h6, {
                  className: 'framer-styles-preset-136pxet',
                  'data-styles-preset': 'A_3jD2ulG',
                  children: 'Terms & Agreement',
                },),
              },),
              className: 'framer-3l02a7',
              fonts: ['Inter',],
              layoutDependency,
              layoutId: 'rf2VUvvcf',
              style: { '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', },
              verticalAlignment: 'top',
              withExternalLayout: true,
            },),
            /* @__PURE__ */ _jsx2(ComponentViewportProvider2, {
              width: '300px',
              children: /* @__PURE__ */ _jsx2(motion2.div, {
                className: 'framer-a8nr5u-container',
                layoutDependency,
                layoutId: 'M59BOTgWZ-container',
                transformTemplate: transformTemplate12,
                children: /* @__PURE__ */ _jsx2(stdin_default2, {
                  height: '100%',
                  id: 'M59BOTgWZ',
                  layoutId: 'M59BOTgWZ',
                  style: { width: '100%', },
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
var css4 = [
  '@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }',
  '.framer-D99L1.framer-1vqov41, .framer-D99L1 .framer-1vqov41 { display: block; }',
  '.framer-D99L1.framer-1134jr4 { height: 844px; overflow: hidden; position: relative; width: 390px; }',
  '.framer-D99L1 .framer-jvvkmm-container { bottom: -2px; flex: none; left: 0px; position: absolute; right: -1px; top: 0px; z-index: 0; }',
  '.framer-D99L1 .framer-6w1dga-container { flex: none; height: 44px; left: 30px; position: absolute; top: 30px; width: 44px; }',
  '.framer-D99L1 .framer-3l02a7 { bottom: 24px; flex: none; height: 18px; left: calc(49.743589743589766% - 157px / 2); position: absolute; white-space: pre-wrap; width: 157px; word-break: break-word; word-wrap: break-word; }',
  '.framer-D99L1 .framer-a8nr5u-container { flex: none; height: auto; left: 50%; position: absolute; top: 97px; width: 300px; }',
  ...css,
];
var FramerczYkvZ9ns = withCSS2(Component2, css4, 'framer-D99L1',);
var stdin_default3 = FramerczYkvZ9ns;
FramerczYkvZ9ns.displayName = 'V2 - verify';
FramerczYkvZ9ns.defaultProps = { height: 844, width: 390, };
addFonts2(FramerczYkvZ9ns, [
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
  ...PatternFonts,
  ...IconoirFonts,
  ...QuestionFonts,
  ...getFontsFromSharedStyle2(fonts,),
], { supportsExplicitInterCodegen: true, },);

// virtual:verify
import { WithFramerBreakpoints, } from 'unframer';
import { jsx, } from 'react/jsx-runtime';
stdin_default3.Responsive = (props,) => {
  return /* @__PURE__ */ jsx(WithFramerBreakpoints, { Component: stdin_default3, ...props, },);
};
var verify_default = stdin_default3;
export { verify_default as default, };
