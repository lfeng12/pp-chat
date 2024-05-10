/* eslint-disable */
'use client';
import { stdin_default as stdin_default2, } from './chunk-GJCZY2ER.js';
import { stdin_default, } from './chunk-GYUMUFYO.js';
import { Clock, } from './chunk-EIZOZDEQ.js';
import { className, css, fonts, Icon, } from './chunk-6MAF3TKJ.js';
import './chunk-ZBBVTMRC.js';

// https :https://framerusercontent.com/modules/nHV2lSNYbVxeGBUnVHi1/kdRNwSmcJ01DZvbnX88V/UAnQb3nbs.js
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
var TopBarFonts = getFonts(stdin_default,);
var NavBarFonts = getFonts(stdin_default2,);
var cycleOrder = ['N5cs7uXZf',];
var serializationHash = 'framer-J5mRu';
var variantClassNames = { N5cs7uXZf: 'framer-v-626h05', };
var transition1 = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: 'spring', };
var transformTemplate1 = (_, t,) => `translateX(-50%) ${t}`;
var Transition = ({ value, children, },) => {
  const config = React.useContext(MotionConfigContext,);
  const transition = value !== null && value !== void 0 ? value : config.transition;
  const contextValue = React.useMemo(() => ({ ...config, transition, }), [JSON.stringify(transition,),],);
  return /* @__PURE__ */ _jsx(MotionConfigContext.Provider, { value: contextValue, children, },);
};
var Variants = motion(React.Fragment,);
var getProps = ({ height, id, tap, tap2, tap3, tap4, width, ...props },) => {
  return {
    ...props,
    D4rV7nTZm: tap3 !== null && tap3 !== void 0 ? tap3 : props.D4rV7nTZm,
    GE31fSSDR: tap !== null && tap !== void 0 ? tap : props.GE31fSSDR,
    gSDsn9lfv: tap2 !== null && tap2 !== void 0 ? tap2 : props.gSDsn9lfv,
    w_mcNHFJc: tap4 !== null && tap4 !== void 0 ? tap4 : props.w_mcNHFJc,
  };
};
var createLayoutDependency = (props, variants,) => variants.join('-',) + props.layoutDependency;
var Component = /* @__PURE__ */ React.forwardRef(function (props, ref,) {
  const { activeLocale, setLocale, } = useLocaleInfo();
  const { style, className: className2, layoutId, variant, GE31fSSDR, gSDsn9lfv, D4rV7nTZm, w_mcNHFJc, ...restProps } = getProps(props,);
  const { baseVariant, classNames, gestureVariant, setGestureState, setVariant, variants, } = useVariantState({
    cycleOrder,
    defaultVariant: 'N5cs7uXZf',
    variant,
    variantClassNames,
  },);
  const layoutDependency = createLayoutDependency(props, variants,);
  const { activeVariantCallback, delay, } = useActiveVariantCallback(baseVariant,);
  const onTap88s77c = activeVariantCallback(async (...args) => {
    if (GE31fSSDR) {
      const res = await GE31fSSDR(...args,);
      if (res === false) {
        return false;
      }
    }
  },);
  const KP1WGen7f1f7s9ni = activeVariantCallback(async (...args) => {
    if (gSDsn9lfv) {
      const res = await gSDsn9lfv(...args,);
      if (res === false) {
        return false;
      }
    }
  },);
  const WULCj3z2alm4z88 = activeVariantCallback(async (...args) => {
    if (D4rV7nTZm) {
      const res = await D4rV7nTZm(...args,);
      if (res === false) {
        return false;
      }
    }
  },);
  const G_6MlVoRT1csmoaj = activeVariantCallback(async (...args) => {
    if (w_mcNHFJc) {
      const res = await w_mcNHFJc(...args,);
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
          className: cx(serializationHash, ...sharedStyleClassNames, 'framer-626h05', className2, classNames,),
          'data-framer-name': 'Variant 1',
          layoutDependency,
          layoutId: 'N5cs7uXZf',
          onHoverEnd: () => setGestureState({ isHovered: false, },),
          onHoverStart: () => setGestureState({ isHovered: true, },),
          onTap: () => setGestureState({ isPressed: false, },),
          onTapCancel: () => setGestureState({ isPressed: false, },),
          onTapStart: () => setGestureState({ isPressed: true, },),
          ref: ref !== null && ref !== void 0 ? ref : ref1,
          style: { backgroundColor: 'rgb(255, 255, 255)', ...style, },
          children: [
            /* @__PURE__ */ _jsx(ComponentViewportProvider, {
              children: /* @__PURE__ */ _jsx(motion.div, {
                className: 'framer-uur0h9-container',
                layoutDependency,
                layoutId: 'NNwN8gwip-container',
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
                  id: 'NNwN8gwip',
                  is12hour: true,
                  layoutId: 'NNwN8gwip',
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
              className: 'framer-nkx82i',
              'data-highlight': true,
              layoutDependency,
              layoutId: 'fJhJZ3dwe',
              onTap: onTap88s77c,
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
              className: 'framer-18xm6mx',
              'data-framer-name': 'routine_calendar',
              layoutDependency,
              layoutId: 'dUmbzHKn7',
              transformTemplate: transformTemplate1,
            },),
            /* @__PURE__ */ _jsx(ComponentViewportProvider, {
              children: /* @__PURE__ */ _jsx(motion.div, {
                className: 'framer-j70qrj-container',
                layoutDependency,
                layoutId: 'MBuMtIsQB-container',
                children: /* @__PURE__ */ _jsx(Icon, {
                  color: 'rgb(0, 0, 0)',
                  height: '100%',
                  iconSearch: '',
                  iconSelection: 'ArrowLeft',
                  id: 'MBuMtIsQB',
                  layoutId: 'MBuMtIsQB',
                  mirrored: false,
                  selectByList: true,
                  style: { height: '100%', width: '100%', },
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
                  style: { '--framer-text-alignment': 'center', },
                  children: 'Upload',
                },),
              },),
              className: 'framer-1f0c11o',
              fonts: ['Inter',],
              layoutDependency,
              layoutId: 'VEF2KXzlu',
              style: { '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', },
              transformTemplate: transformTemplate1,
              verticalAlignment: 'top',
              withExternalLayout: true,
            },),
            /* @__PURE__ */ _jsx(ComponentViewportProvider, {
              width: (componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.width) || '100vw',
              children: /* @__PURE__ */ _jsx(motion.div, {
                className: 'framer-186lck4-container',
                layoutDependency,
                layoutId: 'dQ282qE13-container',
                children: /* @__PURE__ */ _jsx(stdin_default, {
                  height: '100%',
                  id: 'dQ282qE13',
                  layoutId: 'dQ282qE13',
                  style: { height: '100%', width: '100%', },
                  width: '100%',
                },),
              },),
            },),
            /* @__PURE__ */ _jsx(ComponentViewportProvider, {
              width: (componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.width) || '100vw',
              children: /* @__PURE__ */ _jsx(motion.div, {
                className: 'framer-16r49nz-container',
                layoutDependency,
                layoutId: 'OpilmlLoq-container',
                children: /* @__PURE__ */ _jsx(stdin_default2, {
                  G_6MlVoRT: G_6MlVoRT1csmoaj,
                  height: '100%',
                  id: 'OpilmlLoq',
                  KP1WGen7f: KP1WGen7f1f7s9ni,
                  layoutId: 'OpilmlLoq',
                  style: { height: '100%', width: '100%', },
                  width: '100%',
                  WULCj3z2a: WULCj3z2alm4z88,
                },),
              },),
            },),
            /* @__PURE__ */ _jsx(ComponentViewportProvider, {
              children: /* @__PURE__ */ _jsx(motion.div, {
                className: 'framer-4v5gqu-container',
                layoutDependency,
                layoutId: 'jon_N8iv1-container',
                children: /* @__PURE__ */ _jsx(Icon, {
                  color: 'rgb(0, 0, 0)',
                  height: '100%',
                  iconSearch: '',
                  iconSelection: 'ArrowLeft',
                  id: 'jon_N8iv1',
                  layoutId: 'jon_N8iv1',
                  mirrored: false,
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
  '.framer-J5mRu.framer-9g30b6, .framer-J5mRu .framer-9g30b6 { display: block; }',
  '.framer-J5mRu.framer-626h05 { height: 844px; overflow: hidden; position: relative; width: 390px; }',
  '.framer-J5mRu .framer-uur0h9-container { flex: none; height: auto; left: 49%; position: absolute; top: 29px; width: 79px; }',
  '.framer-J5mRu .framer-nkx82i { cursor: pointer; flex: none; height: 15px; left: calc(48.46153846153848% - 64px / 2); overflow: visible; position: absolute; top: 32px; width: 64px; }',
  '.framer-J5mRu .framer-18xm6mx { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 314px); left: 49%; overflow: visible; position: absolute; top: 158px; width: 314px; }',
  '.framer-J5mRu .framer-j70qrj-container, .framer-J5mRu .framer-4v5gqu-container { flex: none; height: 44px; left: 30px; position: absolute; top: 30px; width: 44px; }',
  '.framer-J5mRu .framer-1f0c11o { flex: none; height: auto; left: 50%; position: absolute; top: 100px; white-space: pre-wrap; width: 209px; word-break: break-word; word-wrap: break-word; z-index: 1; }',
  '.framer-J5mRu .framer-186lck4-container { flex: none; height: 64px; left: 0px; position: absolute; right: 0px; top: 0px; z-index: 0; }',
  '.framer-J5mRu .framer-16r49nz-container { bottom: 0px; flex: none; height: 81px; left: 0px; position: absolute; right: 0px; }',
  ...css,
];
var FramerUAnQb3nbs = withCSS(Component, css2, 'framer-J5mRu',);
var stdin_default3 = FramerUAnQb3nbs;
FramerUAnQb3nbs.displayName = 'V2 - routine';
FramerUAnQb3nbs.defaultProps = { height: 844, width: 390, };
addPropertyControls(FramerUAnQb3nbs, {
  GE31fSSDR: { title: 'Tap', type: ControlType.EventHandler, },
  gSDsn9lfv: { title: 'Tap 2', type: ControlType.EventHandler, },
  D4rV7nTZm: { title: 'Tap 3', type: ControlType.EventHandler, },
  w_mcNHFJc: { title: 'Tap 4', type: ControlType.EventHandler, },
},);
addFonts(FramerUAnQb3nbs, [
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
  ...TopBarFonts,
  ...NavBarFonts,
  ...getFontsFromSharedStyle(fonts,),
], { supportsExplicitInterCodegen: true, },);

// virtual:routine
import { WithFramerBreakpoints, } from 'unframer';
import { jsx, } from 'react/jsx-runtime';
stdin_default3.Responsive = (props,) => {
  return /* @__PURE__ */ jsx(WithFramerBreakpoints, { Component: stdin_default3, ...props, },);
};
var routine_default = stdin_default3;
export { routine_default as default, };
