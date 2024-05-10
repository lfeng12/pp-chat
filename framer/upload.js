/* eslint-disable */
'use client';
import { stdin_default, } from './chunk-GYUMUFYO.js';
import './chunk-EIZOZDEQ.js';
import { className, css, fonts, Icon, } from './chunk-6MAF3TKJ.js';
import './chunk-ZBBVTMRC.js';

// https :https://framerusercontent.com/modules/bwrMrjs7TbMNxcIsPGOS/t744pMynBsQp8leCtLm9/w6TVVpUFM.js
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
var TopBarFonts = getFonts(stdin_default,);
var IconoirFonts = getFonts(Icon,);
var cycleOrder = ['kWapH6tCu',];
var serializationHash = 'framer-dCF60';
var variantClassNames = { kWapH6tCu: 'framer-v-tu9yvp', };
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
var getProps = ({ height, id, tap, tap2, width, ...props },) => {
  return {
    ...props,
    nYq9gKXt0: tap2 !== null && tap2 !== void 0 ? tap2 : props.nYq9gKXt0,
    p1A8QFNA3: tap !== null && tap !== void 0 ? tap : props.p1A8QFNA3,
  };
};
var createLayoutDependency = (props, variants,) => variants.join('-',) + props.layoutDependency;
var Component = /* @__PURE__ */ React.forwardRef(function (props, ref,) {
  const { activeLocale, setLocale, } = useLocaleInfo();
  const { style, className: className2, layoutId, variant, p1A8QFNA3, nYq9gKXt0, ...restProps } = getProps(props,);
  const { baseVariant, classNames, gestureVariant, setGestureState, setVariant, variants, } = useVariantState({
    cycleOrder,
    defaultVariant: 'kWapH6tCu',
    variant,
    variantClassNames,
  },);
  const layoutDependency = createLayoutDependency(props, variants,);
  const { activeVariantCallback, delay, } = useActiveVariantCallback(baseVariant,);
  const onTap3bh1l4 = activeVariantCallback(async (...args) => {
    if (p1A8QFNA3) {
      const res = await p1A8QFNA3(...args,);
      if (res === false) {
        return false;
      }
    }
  },);
  const onTapx0rrsn = activeVariantCallback(async (...args) => {
    if (nYq9gKXt0) {
      const res = await nYq9gKXt0(...args,);
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
          className: cx(serializationHash, ...sharedStyleClassNames, 'framer-tu9yvp', className2, classNames,),
          'data-framer-name': 'Variant 1',
          layoutDependency,
          layoutId: 'kWapH6tCu',
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
                intrinsicHeight: 2016,
                intrinsicWidth: 1512,
                pixelHeight: 4032,
                pixelWidth: 3024,
                sizes: '329px',
                src: 'https://framerusercontent.com/images/VAXKMsnGkP8nnQVoiWzSS3bDc.jpg?scale-down-to=2048',
                srcSet:
                  'https://framerusercontent.com/images/VAXKMsnGkP8nnQVoiWzSS3bDc.jpg?scale-down-to=1024 768w,https://framerusercontent.com/images/VAXKMsnGkP8nnQVoiWzSS3bDc.jpg?scale-down-to=2048 1536w,https://framerusercontent.com/images/VAXKMsnGkP8nnQVoiWzSS3bDc.jpg 3024w',
              },
              className: 'framer-3t8asx',
              'data-framer-name': 'exiting',
              layoutDependency,
              layoutId: 'kQOWMziT_',
              transformTemplate: transformTemplate1,
            },),
            /* @__PURE__ */ _jsx(motion.div, {
              className: 'framer-1b4fzpx',
              'data-highlight': true,
              layoutDependency,
              layoutId: 'NHLr4pseb',
              onTap: onTap3bh1l4,
            },),
            /* @__PURE__ */ _jsx(motion.button, {
              className: 'framer-ydocx8',
              'data-framer-name': 'Button',
              'data-highlight': true,
              'data-reset': 'button',
              layoutDependency,
              layoutId: 'NaUochdM0',
              onTap: onTapx0rrsn,
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
                    children: 'Verify',
                  },),
                },),
                className: 'framer-1a6tlox',
                fonts: ['GF;DM Sans-500',],
                layoutDependency,
                layoutId: 'RUvhPJb2n',
                style: { '--extracted-r6o4lv': 'rgb(255, 255, 255)', },
                transformTemplate: transformTemplate2,
                verticalAlignment: 'top',
                withExternalLayout: true,
              },),
            },),
            /* @__PURE__ */ _jsx(SVG, {
              className: 'framer-gfo1uo',
              layout: 'position',
              layoutDependency,
              layoutId: 'N69MLGpuF',
              opacity: 1,
              svg:
                '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 68 68"><path d="M 34 7 C 48.912 7 61 19.088 61 34 C 61 48.912 48.912 61 34 61 C 19.088 61 7 48.912 7 34 C 7 19.088 19.088 7 34 7 Z" fill="#ff79ad"></path><path d="M 34 2 C 51.673 2 66 16.327 66 34 C 66 51.673 51.673 66 34 66 C 16.327 66 2 51.673 2 34 C 2 16.327 16.327 2 34 2 Z" fill="transparent" stroke-width="4" stroke="#ff79ad"></path></svg>',
              svgContentId: 4035983240,
              withExternalLayout: true,
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
              className: 'framer-1c12ksg',
              fonts: ['Inter',],
              layoutDependency,
              layoutId: 'ZbP3PJnpb',
              style: { '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', },
              transformTemplate: transformTemplate1,
              verticalAlignment: 'top',
              withExternalLayout: true,
            },),
            /* @__PURE__ */ _jsx(ComponentViewportProvider, {
              width: (componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.width) || '100vw',
              children: /* @__PURE__ */ _jsx(motion.div, {
                className: 'framer-1fdi5e-container',
                layoutDependency,
                layoutId: 'HjQ3eZT1w-container',
                children: /* @__PURE__ */ _jsx(stdin_default, {
                  height: '100%',
                  id: 'HjQ3eZT1w',
                  layoutId: 'HjQ3eZT1w',
                  style: { height: '100%', width: '100%', },
                  width: '100%',
                },),
              },),
            },),
            /* @__PURE__ */ _jsx(ComponentViewportProvider, {
              children: /* @__PURE__ */ _jsx(motion.div, {
                className: 'framer-4c258p-container',
                layoutDependency,
                layoutId: 'q5Ovx0fSJ-container',
                children: /* @__PURE__ */ _jsx(Icon, {
                  color: 'rgb(0, 0, 0)',
                  height: '100%',
                  iconSearch: '',
                  iconSelection: 'ArrowLeft',
                  id: 'q5Ovx0fSJ',
                  layoutId: 'q5Ovx0fSJ',
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
  '.framer-dCF60.framer-75vpyf, .framer-dCF60 .framer-75vpyf { display: block; }',
  '.framer-dCF60.framer-tu9yvp { height: 844px; overflow: hidden; position: relative; width: 390px; }',
  '.framer-dCF60 .framer-3t8asx { aspect-ratio: 0.75 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 439px); left: 50%; overflow: visible; position: absolute; top: 156px; width: 329px; }',
  '.framer-dCF60 .framer-1b4fzpx { cursor: pointer; flex: none; height: 15px; left: calc(48.71794871794874% - 64px / 2); overflow: visible; position: absolute; top: 58px; width: 64px; }',
  '.framer-dCF60 .framer-ydocx8 { align-content: center; align-items: center; bottom: 94px; cursor: pointer; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: 42px; justify-content: center; left: calc(49.48717948717951% - 299px / 2); padding: 10px 20px 10px 20px; position: absolute; width: 299px; }',
  '.framer-dCF60 .framer-1a6tlox { flex: none; height: auto; left: 50%; overflow: visible; position: absolute; top: 50%; white-space: pre; width: auto; z-index: 1; }',
  '.framer-dCF60 .framer-gfo1uo { flex: none; height: 68px; left: calc(49.743589743589766% - 68px / 2); position: absolute; top: calc(76.89573459715642% - 68px / 2); width: 68px; }',
  '.framer-dCF60 .framer-1c12ksg { flex: none; height: auto; left: 50%; position: absolute; top: 100px; white-space: pre-wrap; width: 209px; word-break: break-word; word-wrap: break-word; z-index: 1; }',
  '.framer-dCF60 .framer-1fdi5e-container { flex: none; height: 64px; left: 0px; position: absolute; right: 0px; top: 0px; z-index: 0; }',
  '.framer-dCF60 .framer-4c258p-container { flex: none; height: 44px; left: 30px; position: absolute; top: 30px; width: 44px; }',
  '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-dCF60 .framer-ydocx8 { gap: 0px; } .framer-dCF60 .framer-ydocx8 > * { margin: 0px; margin-left: calc(8px / 2); margin-right: calc(8px / 2); } .framer-dCF60 .framer-ydocx8 > :first-child { margin-left: 0px; } .framer-dCF60 .framer-ydocx8 > :last-child { margin-right: 0px; } }',
  ...css,
];
var Framerw6TVVpUFM = withCSS(Component, css2, 'framer-dCF60',);
var stdin_default2 = Framerw6TVVpUFM;
Framerw6TVVpUFM.displayName = 'V2 - upload';
Framerw6TVVpUFM.defaultProps = { height: 844, width: 390, };
addPropertyControls(Framerw6TVVpUFM, {
  p1A8QFNA3: { title: 'Tap', type: ControlType.EventHandler, },
  nYq9gKXt0: { title: 'Tap 2', type: ControlType.EventHandler, },
},);
addFonts(Framerw6TVVpUFM, [
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
  ...TopBarFonts,
  ...IconoirFonts,
  ...getFontsFromSharedStyle(fonts,),
], { supportsExplicitInterCodegen: true, },);

// virtual:upload
import { WithFramerBreakpoints, } from 'unframer';
import { jsx, } from 'react/jsx-runtime';
stdin_default2.Responsive = (props,) => {
  return /* @__PURE__ */ jsx(WithFramerBreakpoints, { Component: stdin_default2, ...props, },);
};
var upload_default = stdin_default2;
export { upload_default as default, };
