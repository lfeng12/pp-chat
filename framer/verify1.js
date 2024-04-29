/* eslint-disable */
'use client';
import { className, css, fonts, } from './chunk-XH7W2HFD.js';
import { className as className2, css as css2, fonts as fonts2, } from './chunk-DCG3Q45P.js';
import { Icon, } from './chunk-NTBY4HVU.js';
import './chunk-ZBBVTMRC.js';

// https :https://framerusercontent.com/modules/8A5t8dUWIvBIEwCX306R/Bmw4BCgSwVOB44IXbi0J/nRPU7544H.js
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
var IconoirFonts = getFonts(Icon,);
var cycleOrder = ['nkUvlaeYW',];
var serializationHash = 'framer-O2Uig';
var variantClassNames = { nkUvlaeYW: 'framer-v-1bbjfzn', };
var transition1 = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: 'spring', };
var transformTemplate1 = (_, t,) => `translate(-50%, -50%) ${t}`;
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
    BaEggQqcc: tap2 !== null && tap2 !== void 0 ? tap2 : props.BaEggQqcc,
    bTiwoDZJB: tap3 !== null && tap3 !== void 0 ? tap3 : props.bTiwoDZJB,
    LDsz92ViJ: tap !== null && tap !== void 0 ? tap : props.LDsz92ViJ,
  };
};
var createLayoutDependency = (props, variants,) => variants.join('-',) + props.layoutDependency;
var Component = /* @__PURE__ */ React.forwardRef(function (props, ref,) {
  const { activeLocale, setLocale, } = useLocaleInfo();
  const { style, className: className3, layoutId, variant, LDsz92ViJ, BaEggQqcc, bTiwoDZJB, ...restProps } = getProps(props,);
  const { baseVariant, classNames, gestureVariant, setGestureState, setVariant, variants, } = useVariantState({
    cycleOrder,
    defaultVariant: 'nkUvlaeYW',
    variant,
    variantClassNames,
  },);
  const layoutDependency = createLayoutDependency(props, variants,);
  const { activeVariantCallback, delay, } = useActiveVariantCallback(baseVariant,);
  const onTap1yq7dx5 = activeVariantCallback(async (...args) => {
    if (LDsz92ViJ) {
      const res = await LDsz92ViJ(...args,);
      if (res === false) {
        return false;
      }
    }
  },);
  const onClick1gav8zm = activeVariantCallback(async (...args) => {
    if (BaEggQqcc) {
      const res = await BaEggQqcc(...args,);
      if (res === false) {
        return false;
      }
    }
  },);
  const onTap1o7axom = activeVariantCallback(async (...args) => {
    if (bTiwoDZJB) {
      const res = await bTiwoDZJB(...args,);
      if (res === false) {
        return false;
      }
    }
  },);
  const ref1 = React.useRef(null,);
  const defaultLayoutId = React.useId();
  const sharedStyleClassNames = [className2, className,];
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
          className: cx(serializationHash, ...sharedStyleClassNames, 'framer-1bbjfzn', className3, classNames,),
          'data-framer-name': 'Variant 1',
          layoutDependency,
          layoutId: 'nkUvlaeYW',
          onHoverEnd: () => setGestureState({ isHovered: false, },),
          onHoverStart: () => setGestureState({ isHovered: true, },),
          onTap: () => setGestureState({ isPressed: false, },),
          onTapCancel: () => setGestureState({ isPressed: false, },),
          onTapStart: () => setGestureState({ isPressed: true, },),
          ref: ref !== null && ref !== void 0 ? ref : ref1,
          style: { backgroundColor: 'rgb(255, 255, 255)', ...style, },
          children: [
            /* @__PURE__ */ _jsx(Image, {
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
              className: 'framer-1659hno',
              'data-framer-name': 'iphone14pro',
              layoutDependency,
              layoutId: 'OeHnfnSyh',
            },),
            /* @__PURE__ */ _jsx(motion.button, {
              className: 'framer-1d9cyva',
              'data-framer-name': 'Button',
              'data-highlight': true,
              'data-reset': 'button',
              layoutDependency,
              layoutId: 'x_Xn_J3Ki',
              onTap: onTap1yq7dx5,
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
                className: 'framer-p2783n',
                fonts: ['GF;DM Sans-500',],
                layoutDependency,
                layoutId: 'TFiJURlbe',
                style: { '--extracted-r6o4lv': 'rgb(255, 255, 255)', },
                transformTemplate: transformTemplate1,
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
                  children: 'Are you sh*tting?',
                },),
              },),
              className: 'framer-1oaqnl0',
              fonts: ['Inter',],
              layoutDependency,
              layoutId: 'y0sseIV2S',
              style: { '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', },
              verticalAlignment: 'top',
              withExternalLayout: true,
            },),
            /* @__PURE__ */ _jsx(ComponentViewportProvider, {
              children: /* @__PURE__ */ _jsx(motion.div, {
                className: 'framer-1kbtp0l-container',
                layoutDependency,
                layoutId: 'R7yBywK1K-container',
                children: /* @__PURE__ */ _jsx(Icon, {
                  color: 'rgb(0, 0, 0)',
                  height: '100%',
                  iconSearch: '',
                  iconSelection: 'ArrowLeft',
                  id: 'R7yBywK1K',
                  layoutId: 'R7yBywK1K',
                  mirrored: false,
                  onClick: onClick1gav8zm,
                  selectByList: true,
                  style: { height: '100%', width: '100%', },
                  width: '100%',
                },),
              },),
            },),
            /* @__PURE__ */ _jsx(motion.button, {
              className: 'framer-153l9od',
              'data-framer-name': 'Button',
              'data-highlight': true,
              'data-reset': 'button',
              layoutDependency,
              layoutId: 'yArNUrXw7',
              onTap: onTap1o7axom,
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
                    children: 'NO',
                  },),
                },),
                className: 'framer-nlzycf',
                fonts: ['GF;DM Sans-500',],
                layoutDependency,
                layoutId: 'HkbWnhZAL',
                style: { '--extracted-r6o4lv': 'rgb(255, 255, 255)', },
                transformTemplate: transformTemplate1,
                verticalAlignment: 'top',
                withExternalLayout: true,
              },),
            },),
            /* @__PURE__ */ _jsx(RichText, {
              __fromCanvasComponent: true,
              children: /* @__PURE__ */ _jsx(React.Fragment, {
                children: /* @__PURE__ */ _jsx(motion.h6, {
                  className: 'framer-styles-preset-136pxet',
                  'data-styles-preset': 'A_3jD2ulG',
                  children: 'Terms & Agreement',
                },),
              },),
              className: 'framer-1lpcajt',
              fonts: ['Inter',],
              layoutDependency,
              layoutId: 'IfBTjVXgP',
              style: { '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', },
              verticalAlignment: 'top',
              withExternalLayout: true,
            },),
          ],
        },),
      },),
    },),
  },);
},);
var css3 = [
  '@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }',
  '.framer-O2Uig.framer-15e9e0s, .framer-O2Uig .framer-15e9e0s { display: block; }',
  '.framer-O2Uig.framer-1bbjfzn { height: 790px; overflow: hidden; position: relative; width: 386px; }',
  '.framer-O2Uig .framer-1659hno { aspect-ratio: 0.4888888888888889 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 790px); left: 0px; overflow: visible; position: absolute; right: 0px; top: 0px; }',
  '.framer-O2Uig .framer-1d9cyva { align-content: center; align-items: center; cursor: pointer; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: 42px; justify-content: center; left: calc(49.74093264248707% - 299px / 2); padding: 10px 20px 10px 20px; position: absolute; top: 161px; width: 299px; }',
  '.framer-O2Uig .framer-p2783n, .framer-O2Uig .framer-nlzycf { flex: none; height: auto; left: 50%; overflow: visible; position: absolute; top: 50%; white-space: pre; width: auto; z-index: 1; }',
  '.framer-O2Uig .framer-1oaqnl0 { flex: none; height: 18px; left: 43px; position: absolute; top: 115px; white-space: pre-wrap; width: 209px; word-break: break-word; word-wrap: break-word; }',
  '.framer-O2Uig .framer-1kbtp0l-container { flex: none; height: 44px; left: 30px; position: absolute; top: 58px; width: 44px; }',
  '.framer-O2Uig .framer-153l9od { align-content: center; align-items: center; cursor: pointer; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: 42px; justify-content: center; left: calc(49.74093264248707% - 299px / 2); padding: 10px 20px 10px 20px; position: absolute; top: 231px; width: 299px; }',
  '.framer-O2Uig .framer-1lpcajt { bottom: 32px; flex: none; height: 18px; left: calc(49.48186528497411% - 157px / 2); position: absolute; white-space: pre-wrap; width: 157px; word-break: break-word; word-wrap: break-word; }',
  '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-O2Uig .framer-1d9cyva, .framer-O2Uig .framer-153l9od { gap: 0px; } .framer-O2Uig .framer-1d9cyva > *, .framer-O2Uig .framer-153l9od > * { margin: 0px; margin-left: calc(8px / 2); margin-right: calc(8px / 2); } .framer-O2Uig .framer-1d9cyva > :first-child, .framer-O2Uig .framer-153l9od > :first-child { margin-left: 0px; } .framer-O2Uig .framer-1d9cyva > :last-child, .framer-O2Uig .framer-153l9od > :last-child { margin-right: 0px; } }',
  ...css2,
  ...css,
];
var FramernRPU7544H = withCSS(Component, css3, 'framer-O2Uig',);
var stdin_default = FramernRPU7544H;
FramernRPU7544H.displayName = 'verify1';
FramernRPU7544H.defaultProps = { height: 790, width: 386, };
addPropertyControls(FramernRPU7544H, {
  LDsz92ViJ: { title: 'Tap', type: ControlType.EventHandler, },
  BaEggQqcc: { title: 'Tap 2', type: ControlType.EventHandler, },
  bTiwoDZJB: { title: 'Tap 3', type: ControlType.EventHandler, },
},);
addFonts(FramernRPU7544H, [
  {
    explicitInter: true,
    fonts: [{
      family: 'DM Sans',
      source: 'google',
      style: 'normal',
      url: 'https://fonts.gstatic.com/s/dmsans/v15/rP2tp2ywxg089UriI5-g4vlH9VoD8CmcqZG40F9JadbnoEwAkJxhS2f3ZGMZpg.woff2',
      weight: '500',
    }, {
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
  ...IconoirFonts,
  ...getFontsFromSharedStyle(fonts2,),
  ...getFontsFromSharedStyle(fonts,),
], { supportsExplicitInterCodegen: true, },);

// virtual:verify1
import { WithFramerBreakpoints, } from 'unframer';
import { jsx, } from 'react/jsx-runtime';
stdin_default.Responsive = (props,) => {
  return /* @__PURE__ */ jsx(WithFramerBreakpoints, { Component: stdin_default, ...props, },);
};
var verify1_default = stdin_default;
export { verify1_default as default, };
