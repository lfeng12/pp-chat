/* eslint-disable */
'use client';
import { Clock, } from './chunk-YQS4D325.js';
import { className, css, fonts, } from './chunk-DCG3Q45P.js';
import { Icon, } from './chunk-NTBY4HVU.js';
import './chunk-ZBBVTMRC.js';

// https :https://framerusercontent.com/modules/SQ1u2BF67GPXAUBSmedF/bLNNGeh85ao7o4hn2h2C/EBpO5n2sI.js
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
  SVG,
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
var cycleOrder = ['dszax79Ew',];
var serializationHash = 'framer-6Ksrg';
var variantClassNames = { dszax79Ew: 'framer-v-sh5ysn', };
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
    dXvtPIGB7: tap3 !== null && tap3 !== void 0 ? tap3 : props.dXvtPIGB7,
    PAVPg5q6C: tap2 !== null && tap2 !== void 0 ? tap2 : props.PAVPg5q6C,
    QbxzG0jC6: tap !== null && tap !== void 0 ? tap : props.QbxzG0jC6,
  };
};
var createLayoutDependency = (props, variants,) => variants.join('-',) + props.layoutDependency;
var Component = /* @__PURE__ */ React.forwardRef(function (props, ref,) {
  const { activeLocale, setLocale, } = useLocaleInfo();
  const { style, className: className2, layoutId, variant, QbxzG0jC6, PAVPg5q6C, dXvtPIGB7, ...restProps } = getProps(props,);
  const { baseVariant, classNames, gestureVariant, setGestureState, setVariant, variants, } = useVariantState({
    cycleOrder,
    defaultVariant: 'dszax79Ew',
    variant,
    variantClassNames,
  },);
  const layoutDependency = createLayoutDependency(props, variants,);
  const { activeVariantCallback, delay, } = useActiveVariantCallback(baseVariant,);
  const onTapqe34ml = activeVariantCallback(async (...args) => {
    if (QbxzG0jC6) {
      const res = await QbxzG0jC6(...args,);
      if (res === false) {
        return false;
      }
    }
  },);
  const onTapsv77jm = activeVariantCallback(async (...args) => {
    if (PAVPg5q6C) {
      const res = await PAVPg5q6C(...args,);
      if (res === false) {
        return false;
      }
    }
  },);
  const onClickf78vvf = activeVariantCallback(async (...args) => {
    if (dXvtPIGB7) {
      const res = await dXvtPIGB7(...args,);
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
          className: cx(serializationHash, ...sharedStyleClassNames, 'framer-sh5ysn', className2, classNames,),
          'data-framer-name': 'Variant 1',
          layoutDependency,
          layoutId: 'dszax79Ew',
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
              className: 'framer-1c996ay',
              'data-framer-name': 'iphone14pro',
              layoutDependency,
              layoutId: 'VXh92Snoc',
              children: [
                /* @__PURE__ */ _jsx(ComponentViewportProvider, {
                  children: /* @__PURE__ */ _jsx(motion.div, {
                    className: 'framer-1akt53l-container',
                    layoutDependency,
                    layoutId: 'bUqYObKAo-container',
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
                      id: 'bUqYObKAo',
                      is12hour: true,
                      layoutId: 'bUqYObKAo',
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
                  className: 'framer-1oh51il',
                  'data-highlight': true,
                  layoutDependency,
                  layoutId: 'PflKhOEnj',
                  onTap: onTapqe34ml,
                },),
                /* @__PURE__ */ _jsx(Image, {
                  background: {
                    alt: '',
                    fit: 'fill',
                    intrinsicHeight: 2016,
                    intrinsicWidth: 1512,
                    pixelHeight: 4032,
                    pixelWidth: 3024,
                    sizes: '307px',
                    src: 'https://framerusercontent.com/images/VAXKMsnGkP8nnQVoiWzSS3bDc.jpg?scale-down-to=2048',
                    srcSet:
                      'https://framerusercontent.com/images/VAXKMsnGkP8nnQVoiWzSS3bDc.jpg?scale-down-to=1024 768w,https://framerusercontent.com/images/VAXKMsnGkP8nnQVoiWzSS3bDc.jpg?scale-down-to=2048 1536w,https://framerusercontent.com/images/VAXKMsnGkP8nnQVoiWzSS3bDc.jpg 3024w',
                  },
                  className: 'framer-1s4u4xr',
                  'data-framer-name': 'exiting',
                  layoutDependency,
                  layoutId: 'bZ1BwCOkV',
                  transformTemplate: transformTemplate2,
                },),
              ],
            },),
            /* @__PURE__ */ _jsx(RichText, {
              __fromCanvasComponent: true,
              children: /* @__PURE__ */ _jsx(React.Fragment, {
                children: /* @__PURE__ */ _jsx(motion.h1, {
                  className: 'framer-styles-preset-ame1jg',
                  'data-styles-preset': 'e81t2mHNr',
                  children: 'Prove it:',
                },),
              },),
              className: 'framer-rzekld',
              fonts: ['Inter',],
              layoutDependency,
              layoutId: 'yLg1OIhyU',
              style: { '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', },
              verticalAlignment: 'top',
              withExternalLayout: true,
            },),
            /* @__PURE__ */ _jsx(motion.button, {
              className: 'framer-1s46p5e',
              'data-framer-name': 'Button',
              'data-highlight': true,
              'data-reset': 'button',
              layoutDependency,
              layoutId: 'Ate7njOH4',
              onTap: onTapsv77jm,
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
                    children: 'Verify',
                  },),
                },),
                className: 'framer-1tc6t8n',
                fonts: ['GF;DM Sans-500',],
                layoutDependency,
                layoutId: 'zr8Ya9qcC',
                style: { '--extracted-r6o4lv': 'rgb(255, 255, 255)', },
                transformTemplate: transformTemplate2,
                verticalAlignment: 'top',
                withExternalLayout: true,
              },),
            },),
            /* @__PURE__ */ _jsx(ComponentViewportProvider, {
              children: /* @__PURE__ */ _jsx(motion.div, {
                className: 'framer-130wckd-container',
                layoutDependency,
                layoutId: 'Ef2CAkOWM-container',
                children: /* @__PURE__ */ _jsx(Icon, {
                  color: 'rgb(0, 0, 0)',
                  height: '100%',
                  iconSearch: '',
                  iconSelection: 'ArrowLeft',
                  id: 'Ef2CAkOWM',
                  layoutId: 'Ef2CAkOWM',
                  mirrored: false,
                  onClick: onClickf78vvf,
                  selectByList: true,
                  style: { height: '100%', width: '100%', },
                  width: '100%',
                },),
              },),
            },),
            /* @__PURE__ */ _jsx(SVG, {
              className: 'framer-6vjvou',
              layout: 'position',
              layoutDependency,
              layoutId: 'sYJn5JBsR',
              opacity: 1,
              svg:
                '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 68 68"><path d="M 34 7 C 48.912 7 61 19.088 61 34 C 61 48.912 48.912 61 34 61 C 19.088 61 7 48.912 7 34 C 7 19.088 19.088 7 34 7 Z" fill="#ff79ad"></path><path d="M 34 2 C 51.673 2 66 16.327 66 34 C 66 51.673 51.673 66 34 66 C 16.327 66 2 51.673 2 34 C 2 16.327 16.327 2 34 2 Z" fill="transparent" stroke-width="4" stroke="#ff79ad"></path></svg>',
              svgContentId: 3537820430,
              withExternalLayout: true,
            },),
          ],
        },),
      },),
    },),
  },);
},);
var css2 = [
  '@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }',
  '.framer-6Ksrg.framer-wy8fb3, .framer-6Ksrg .framer-wy8fb3 { display: block; }',
  '.framer-6Ksrg.framer-sh5ysn { height: 790px; overflow: hidden; position: relative; width: 386px; }',
  '.framer-6Ksrg .framer-1c996ay { aspect-ratio: 0.4888888888888889 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 790px); left: 0px; overflow: visible; position: absolute; right: 0px; top: 0px; }',
  '.framer-6Ksrg .framer-1akt53l-container { flex: none; height: auto; left: 50%; position: absolute; top: 29px; width: 79px; }',
  '.framer-6Ksrg .framer-1oh51il { cursor: pointer; flex: none; height: 15px; left: calc(48.96373056994821% - 64px / 2); overflow: visible; position: absolute; top: 32px; width: 64px; }',
  '.framer-6Ksrg .framer-1s4u4xr { aspect-ratio: 0.75 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 409px); left: 50%; overflow: visible; position: absolute; top: 46%; width: 307px; }',
  '.framer-6Ksrg .framer-rzekld { flex: none; height: 18px; left: 43px; position: absolute; top: 115px; white-space: pre-wrap; width: 209px; word-break: break-word; word-wrap: break-word; }',
  '.framer-6Ksrg .framer-1s46p5e { align-content: center; align-items: center; bottom: 66px; cursor: pointer; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: 42px; justify-content: center; left: calc(49.74093264248707% - 299px / 2); padding: 10px 20px 10px 20px; position: absolute; width: 299px; }',
  '.framer-6Ksrg .framer-1tc6t8n { flex: none; height: auto; left: 50%; overflow: visible; position: absolute; top: 50%; white-space: pre; width: auto; z-index: 1; }',
  '.framer-6Ksrg .framer-130wckd-container { flex: none; height: 44px; left: 30px; position: absolute; top: 58px; width: 44px; }',
  '.framer-6Ksrg .framer-6vjvou { bottom: 133px; flex: none; height: 68px; left: calc(50.00000000000002% - 68px / 2); position: absolute; width: 68px; }',
  '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-6Ksrg .framer-1s46p5e { gap: 0px; } .framer-6Ksrg .framer-1s46p5e > * { margin: 0px; margin-left: calc(8px / 2); margin-right: calc(8px / 2); } .framer-6Ksrg .framer-1s46p5e > :first-child { margin-left: 0px; } .framer-6Ksrg .framer-1s46p5e > :last-child { margin-right: 0px; } }',
  ...css,
];
var FramerEBpO5n2sI = withCSS(Component, css2, 'framer-6Ksrg',);
var stdin_default = FramerEBpO5n2sI;
FramerEBpO5n2sI.displayName = 'upload';
FramerEBpO5n2sI.defaultProps = { height: 790, width: 386, };
addPropertyControls(FramerEBpO5n2sI, {
  QbxzG0jC6: { title: 'Tap', type: ControlType.EventHandler, },
  PAVPg5q6C: { title: 'Tap 2', type: ControlType.EventHandler, },
  dXvtPIGB7: { title: 'Tap 3', type: ControlType.EventHandler, },
},);
addFonts(FramerEBpO5n2sI, [
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

// virtual:upload
import { WithFramerBreakpoints, } from 'unframer';
import { jsx, } from 'react/jsx-runtime';
stdin_default.Responsive = (props,) => {
  return /* @__PURE__ */ jsx(WithFramerBreakpoints, { Component: stdin_default, ...props, },);
};
var upload_default = stdin_default;
export { upload_default as default, };
