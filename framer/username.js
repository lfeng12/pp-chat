/* eslint-disable */
'use client';
import { Input, } from './chunk-5IVOZXBX.js';
import './chunk-JJFCSOIW.js';
import { className, css, fonts, } from './chunk-XH7W2HFD.js';
import { className as className2, css as css2, fonts as fonts2, Icon, } from './chunk-6MAF3TKJ.js';
import './chunk-ZBBVTMRC.js';

// https :https://framerusercontent.com/modules/da5XuyEVomDI61QhHXcM/trFbLwKE6mKuLttFR4gJ/xOzt12XxL.js
import { jsx as _jsx, jsxs as _jsxs, } from 'react/jsx-runtime';
import {
  addFonts,
  addPropertyControls,
  ComponentViewportProvider,
  ControlType,
  cx,
  getFonts,
  getFontsFromSharedStyle,
  RichText,
  useActiveVariantCallback,
  useComponentViewport,
  useLocaleInfo,
  useVariantState,
  withCSS,
} from 'unframer';
import { LayoutGroup, motion, MotionConfigContext, } from 'unframer';
import * as React from 'react';
var InputFonts = getFonts(Input,);
var IconoirFonts = getFonts(Icon,);
var cycleOrder = ['UZQlH5lcr',];
var serializationHash = 'framer-5HqXD';
var variantClassNames = { UZQlH5lcr: 'framer-v-1inz45h', };
var transition1 = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: 'spring', };
var transformTemplate1 = (_, t,) => `translate(-50%, -50%) ${t}`;
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
    JWmaktf2y: tap !== null && tap !== void 0 ? tap : props.JWmaktf2y,
    KIDjK9RyW: tap2 !== null && tap2 !== void 0 ? tap2 : props.KIDjK9RyW,
  };
};
var createLayoutDependency = (props, variants,) => variants.join('-',) + props.layoutDependency;
var Component = /* @__PURE__ */ React.forwardRef(function (props, ref,) {
  const { activeLocale, setLocale, } = useLocaleInfo();
  const { style, className: className3, layoutId, variant, JWmaktf2y, KIDjK9RyW, ...restProps } = getProps(props,);
  const { baseVariant, classNames, gestureVariant, setGestureState, setVariant, variants, } = useVariantState({
    cycleOrder,
    defaultVariant: 'UZQlH5lcr',
    variant,
    variantClassNames,
  },);
  const layoutDependency = createLayoutDependency(props, variants,);
  const { activeVariantCallback, delay, } = useActiveVariantCallback(baseVariant,);
  const onTapu4cygo = activeVariantCallback(async (...args) => {
    if (JWmaktf2y) {
      const res = await JWmaktf2y(...args,);
      if (res === false) {
        return false;
      }
    }
  },);
  const onClick14ih6ae = activeVariantCallback(async (...args) => {
    if (KIDjK9RyW) {
      const res = await KIDjK9RyW(...args,);
      if (res === false) {
        return false;
      }
    }
  },);
  const ref1 = React.useRef(null,);
  const defaultLayoutId = React.useId();
  const sharedStyleClassNames = [className, className2,];
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
          className: cx(serializationHash, ...sharedStyleClassNames, 'framer-1inz45h', className3, classNames,),
          'data-framer-name': 'Variant 1',
          layoutDependency,
          layoutId: 'UZQlH5lcr',
          onHoverEnd: () => setGestureState({ isHovered: false, },),
          onHoverStart: () => setGestureState({ isHovered: true, },),
          onTap: () => setGestureState({ isPressed: false, },),
          onTapCancel: () => setGestureState({ isPressed: false, },),
          onTapStart: () => setGestureState({ isPressed: true, },),
          ref: ref !== null && ref !== void 0 ? ref : ref1,
          style: { backgroundColor: 'rgb(255, 255, 255)', ...style, },
          children: [
            /* @__PURE__ */ _jsx(RichText, {
              __fromCanvasComponent: true,
              children: /* @__PURE__ */ _jsx(React.Fragment, {
                children: /* @__PURE__ */ _jsx(motion.h6, {
                  className: 'framer-styles-preset-136pxet',
                  'data-styles-preset': 'A_3jD2ulG',
                  children: 'Terms & Agreement',
                },),
              },),
              className: 'framer-1iszamt',
              fonts: ['Inter',],
              layoutDependency,
              layoutId: 'cx5HeFc_O',
              style: { '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', },
              verticalAlignment: 'top',
              withExternalLayout: true,
            },),
            /* @__PURE__ */ _jsx(motion.button, {
              className: 'framer-12bjoh',
              'data-framer-name': 'Button',
              'data-highlight': true,
              'data-reset': 'button',
              layoutDependency,
              layoutId: 'Dg_tCsR4O',
              onTap: onTapu4cygo,
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
                      '--framer-font-family': '"DM Sans", "DM Sans Placeholder", sans-serif',
                      '--framer-font-weight': '500',
                      '--framer-text-alignment': 'center',
                      '--framer-text-color': 'var(--extracted-r6o4lv, rgb(255, 255, 255))',
                    },
                    children: 'Next',
                  },),
                },),
                className: 'framer-1nq2n2f',
                fonts: ['GF;DM Sans-500',],
                layoutDependency,
                layoutId: 'gkcEPF5PX',
                style: { '--extracted-r6o4lv': 'rgb(255, 255, 255)', },
                transformTemplate: transformTemplate1,
                verticalAlignment: 'top',
                withExternalLayout: true,
              },),
            },),
            /* @__PURE__ */ _jsx(ComponentViewportProvider, {
              children: /* @__PURE__ */ _jsx(motion.div, {
                className: 'framer-1ssv22r-container',
                layoutDependency,
                layoutId: 'nrcmPjbQE-container',
                children: /* @__PURE__ */ _jsx(Input, {
                  backgroundColor: 'rgb(255, 255, 255)',
                  border: 'rgb(0, 0, 0)',
                  borderRadius: 30,
                  borderWidth: 1,
                  bottomLeftRadius: 30,
                  bottomRightRadius: 30,
                  caretColor: 'rgb(51, 51, 51)',
                  disabled: false,
                  enableLimit: false,
                  focusColor: 'rgb(0, 153, 255)',
                  focused: false,
                  font: false,
                  fontFamily: '',
                  fontSize: 16,
                  fontWeight: 400,
                  height: '100%',
                  id: 'nrcmPjbQE',
                  isMixedBorderRadius: false,
                  isRTL: false,
                  keyboard: '',
                  layoutId: 'nrcmPjbQE',
                  lineHeight: 1.4,
                  maxLength: 10,
                  multiLine: false,
                  padding: 15,
                  paddingBottom: 15,
                  paddingLeft: 15,
                  paddingPerSide: false,
                  paddingRight: 15,
                  paddingTop: 15,
                  password: false,
                  placeholder: 'Username',
                  placeholderColor: 'rgb(170, 170, 170)',
                  style: { height: '100%', width: '100%', },
                  textAlign: 'left',
                  textColor: 'rgb(51, 51, 51)',
                  topLeftRadius: 30,
                  topRightRadius: 30,
                  truncate: false,
                  value: '',
                  width: '100%',
                },),
              },),
            },),
            /* @__PURE__ */ _jsx(RichText, {
              __fromCanvasComponent: true,
              children: /* @__PURE__ */ _jsx(React.Fragment, {
                children: /* @__PURE__ */ _jsx(motion.h1, {
                  className: 'framer-styles-preset-ame1jg',
                  'data-styles-preset': 'e81t2mHNr',
                  children: 'Create your username',
                },),
              },),
              className: 'framer-5febkt',
              fonts: ['Inter',],
              layoutDependency,
              layoutId: 'lBQUPxDIt',
              style: { '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', },
              verticalAlignment: 'top',
              withExternalLayout: true,
            },),
            /* @__PURE__ */ _jsx(ComponentViewportProvider, {
              children: /* @__PURE__ */ _jsx(motion.div, {
                className: 'framer-14pwisr-container',
                layoutDependency,
                layoutId: 'SxdFvjWNu-container',
                children: /* @__PURE__ */ _jsx(Icon, {
                  color: 'rgb(0, 0, 0)',
                  height: '100%',
                  iconSearch: 'cancel',
                  iconSelection: 'ArrowLeft',
                  id: 'SxdFvjWNu',
                  layoutId: 'SxdFvjWNu',
                  mirrored: false,
                  onClick: onClick14ih6ae,
                  selectByList: false,
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
var css3 = [
  '@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }',
  '.framer-5HqXD.framer-zainyk, .framer-5HqXD .framer-zainyk { display: block; }',
  '.framer-5HqXD.framer-1inz45h { height: 844px; overflow: hidden; position: relative; width: 390px; }',
  '.framer-5HqXD .framer-1iszamt { bottom: 59px; flex: none; height: 18px; left: calc(48.97435897435899% - 157px / 2); position: absolute; white-space: pre-wrap; width: 157px; word-break: break-word; word-wrap: break-word; }',
  '.framer-5HqXD .framer-12bjoh { align-content: center; align-items: center; cursor: pointer; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: 42px; justify-content: center; left: calc(49.743589743589766% - 299px / 2); padding: 10px 20px 10px 20px; position: absolute; top: 233px; width: 299px; }',
  '.framer-5HqXD .framer-1nq2n2f { flex: none; height: auto; left: 50%; overflow: visible; position: absolute; top: 50%; white-space: pre; width: auto; z-index: 1; }',
  '.framer-5HqXD .framer-1ssv22r-container { flex: none; height: 42px; left: calc(49.743589743589766% - 299px / 2); position: absolute; top: 163px; width: 299px; }',
  '.framer-5HqXD .framer-5febkt { flex: none; height: 18px; left: calc(49.743589743589766% - 209px / 2); position: absolute; top: 110px; white-space: pre-wrap; width: 209px; word-break: break-word; word-wrap: break-word; }',
  '.framer-5HqXD .framer-14pwisr-container { flex: none; height: 44px; left: 35px; position: absolute; top: 27px; width: 44px; }',
  '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-5HqXD .framer-12bjoh { gap: 0px; } .framer-5HqXD .framer-12bjoh > * { margin: 0px; margin-left: calc(8px / 2); margin-right: calc(8px / 2); } .framer-5HqXD .framer-12bjoh > :first-child { margin-left: 0px; } .framer-5HqXD .framer-12bjoh > :last-child { margin-right: 0px; } }',
  ...css,
  ...css2,
];
var FramerxOzt12XxL = withCSS(Component, css3, 'framer-5HqXD',);
var stdin_default = FramerxOzt12XxL;
FramerxOzt12XxL.displayName = 'V2 - username';
FramerxOzt12XxL.defaultProps = { height: 844, width: 390, };
addPropertyControls(FramerxOzt12XxL, {
  JWmaktf2y: { title: 'Tap', type: ControlType.EventHandler, },
  KIDjK9RyW: { title: 'Tap 2', type: ControlType.EventHandler, },
},);
addFonts(FramerxOzt12XxL, [
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
  ...InputFonts,
  ...IconoirFonts,
  ...getFontsFromSharedStyle(fonts,),
  ...getFontsFromSharedStyle(fonts2,),
], { supportsExplicitInterCodegen: true, },);

// virtual:username
import { WithFramerBreakpoints, } from 'unframer';
import { jsx, } from 'react/jsx-runtime';
stdin_default.Responsive = (props,) => {
  return /* @__PURE__ */ jsx(WithFramerBreakpoints, { Component: stdin_default, ...props, },);
};
var username_default = stdin_default;
export { username_default as default, };
