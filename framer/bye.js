/* eslint-disable */
'use client';
import { Pattern, } from './chunk-HEETZSPU.js';
import { Icon, } from './chunk-NTBY4HVU.js';
import './chunk-ZBBVTMRC.js';

// https :https://framerusercontent.com/modules/PFB5ZC5VDdjOliebWqQV/XDDOIVsik5ctv5tn8VW9/HQPgoWpZN.js
import { jsx as _jsx, jsxs as _jsxs, } from 'react/jsx-runtime';
import {
  addFonts,
  addPropertyControls,
  ComponentViewportProvider,
  ControlType,
  cx,
  getFonts,
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
var PatternFonts = getFonts(Pattern,);
var IconoirFonts = getFonts(Icon,);
var cycleOrder = ['dz8zjqdJk',];
var serializationHash = 'framer-VI4iE';
var variantClassNames = { dz8zjqdJk: 'framer-v-112vbw3', };
var transition1 = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: 'spring', };
var Transition = ({ value, children, },) => {
  const config = React.useContext(MotionConfigContext,);
  const transition = value !== null && value !== void 0 ? value : config.transition;
  const contextValue = React.useMemo(() => ({ ...config, transition, }), [JSON.stringify(transition,),],);
  return /* @__PURE__ */ _jsx(MotionConfigContext.Provider, { value: contextValue, children, },);
};
var Variants = motion(React.Fragment,);
var getProps = ({ height, id, tap, width, ...props },) => {
  return { ...props, pei2p5GzJ: tap !== null && tap !== void 0 ? tap : props.pei2p5GzJ, };
};
var createLayoutDependency = (props, variants,) => variants.join('-',) + props.layoutDependency;
var Component = /* @__PURE__ */ React.forwardRef(function (props, ref,) {
  const { activeLocale, setLocale, } = useLocaleInfo();
  const { style, className, layoutId, variant, pei2p5GzJ, ...restProps } = getProps(props,);
  const { baseVariant, classNames, gestureVariant, setGestureState, setVariant, variants, } = useVariantState({
    cycleOrder,
    defaultVariant: 'dz8zjqdJk',
    variant,
    variantClassNames,
  },);
  const layoutDependency = createLayoutDependency(props, variants,);
  const { activeVariantCallback, delay, } = useActiveVariantCallback(baseVariant,);
  const onClick1bi7lw1 = activeVariantCallback(async (...args) => {
    if (pei2p5GzJ) {
      const res = await pei2p5GzJ(...args,);
      if (res === false) {
        return false;
      }
    }
  },);
  const ref1 = React.useRef(null,);
  const defaultLayoutId = React.useId();
  const sharedStyleClassNames = [];
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
          className: cx(serializationHash, ...sharedStyleClassNames, 'framer-112vbw3', className, classNames,),
          'data-framer-name': 'Variant 1',
          layoutDependency,
          layoutId: 'dz8zjqdJk',
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
                className: 'framer-uyoj1-container',
                layoutDependency,
                layoutId: 'ow51Wi2OV-container',
                children: /* @__PURE__ */ _jsx(Pattern, {
                  back: 'rgb(255, 121, 173)',
                  diagonal: true,
                  direction: 'left',
                  duration: 5,
                  front: 'rgb(255, 255, 255)',
                  height: '100%',
                  id: 'ow51Wi2OV',
                  layoutId: 'ow51Wi2OV',
                  patternType: 'wave-lines',
                  radius: 60,
                  scale: 22,
                  shouldAnimate: true,
                  style: { height: '100%', width: '100%', },
                  width: '100%',
                },),
              },),
            },),
            /* @__PURE__ */ _jsx(Image, {
              background: {
                alt: '',
                fit: 'fill',
                intrinsicHeight: 1218,
                intrinsicWidth: 562.5,
                pixelHeight: 2436,
                pixelWidth: 1125,
                sizes: (componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.width) || '100vw',
                src: 'https://framerusercontent.com/images/M7nGgo6ctucuxkm68svq1oMeB4.png?scale-down-to=2048',
                srcSet:
                  'https://framerusercontent.com/images/M7nGgo6ctucuxkm68svq1oMeB4.png?scale-down-to=2048 945w,https://framerusercontent.com/images/M7nGgo6ctucuxkm68svq1oMeB4.png 1125w',
              },
              className: 'framer-6v1jtm',
              'data-framer-name': 'Untitled_5',
              layoutDependency,
              layoutId: 'A9rqSqIJD',
              children: /* @__PURE__ */ _jsx(RichText, {
                __fromCanvasComponent: true,
                children: /* @__PURE__ */ _jsx(React.Fragment, {
                  children: /* @__PURE__ */ _jsx(motion.p, {
                    style: {
                      '--font-selector': 'R0Y7RXJpY2EgT25lLXJlZ3VsYXI=',
                      '--framer-font-family': '"Erica One", sans-serif',
                      '--framer-font-size': '29px',
                    },
                    children: 'COME BACK LATER :)',
                  },),
                },),
                className: 'framer-1sau505',
                fonts: ['GF;Erica One-regular',],
                layoutDependency,
                layoutId: 'ZqKG_WqcH',
                style: { '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', rotate: 90, },
                verticalAlignment: 'top',
                withExternalLayout: true,
              },),
            },),
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
              className: 'framer-yh7kjw',
              'data-framer-name': 'iphone14pro',
              layoutDependency,
              layoutId: 'Qpdlbo9Gk',
            },),
            /* @__PURE__ */ _jsx(ComponentViewportProvider, {
              children: /* @__PURE__ */ _jsx(motion.div, {
                className: 'framer-1vhddel-container',
                layoutDependency,
                layoutId: 'NvZrmIlA0-container',
                children: /* @__PURE__ */ _jsx(Icon, {
                  color: 'rgb(0, 0, 0)',
                  height: '100%',
                  iconSearch: '',
                  iconSelection: 'ArrowLeft',
                  id: 'NvZrmIlA0',
                  layoutId: 'NvZrmIlA0',
                  mirrored: false,
                  onClick: onClick1bi7lw1,
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
var css = [
  '@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }',
  '.framer-VI4iE.framer-1eeng0t, .framer-VI4iE .framer-1eeng0t { display: block; }',
  '.framer-VI4iE.framer-112vbw3 { height: 790px; overflow: hidden; position: relative; width: 386px; }',
  '.framer-VI4iE .framer-uyoj1-container { bottom: 0px; flex: none; height: 781px; left: calc(49.74093264248707% - 361px / 2); position: absolute; width: 361px; }',
  '.framer-VI4iE .framer-6v1jtm { aspect-ratio: 0.4618226600985222 / 1; bottom: -46px; flex: none; height: var(--framer-aspect-ratio-supported, 836px); left: 0px; overflow: visible; position: absolute; right: 0px; }',
  '.framer-VI4iE .framer-1sau505 { flex: none; height: 39px; left: calc(49.74093264248707% - 327px / 2); position: absolute; top: 325px; white-space: pre-wrap; width: 327px; word-break: break-word; word-wrap: break-word; }',
  '.framer-VI4iE .framer-yh7kjw { aspect-ratio: 0.4888888888888889 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 790px); left: 0px; overflow: visible; position: absolute; right: 0px; top: 0px; }',
  '.framer-VI4iE .framer-1vhddel-container { flex: none; height: 44px; left: 30px; position: absolute; top: 58px; width: 44px; }',
];
var FramerHQPgoWpZN = withCSS(Component, css, 'framer-VI4iE',);
var stdin_default = FramerHQPgoWpZN;
FramerHQPgoWpZN.displayName = 'done';
FramerHQPgoWpZN.defaultProps = { height: 790, width: 386, };
addPropertyControls(FramerHQPgoWpZN, { pei2p5GzJ: { title: 'Tap', type: ControlType.EventHandler, }, },);
addFonts(FramerHQPgoWpZN, [
  {
    explicitInter: true,
    fonts: [{
      family: 'Erica One',
      source: 'google',
      style: 'normal',
      url: 'https://fonts.gstatic.com/s/ericaone/v27/WBLnrEXccV9VGrOKmGD1Xk_MJMGxiQ.woff2',
      weight: '400',
    },],
  },
  ...PatternFonts,
  ...IconoirFonts,
], { supportsExplicitInterCodegen: true, },);

// virtual:bye
import { WithFramerBreakpoints, } from 'unframer';
import { jsx, } from 'react/jsx-runtime';
stdin_default.Responsive = (props,) => {
  return /* @__PURE__ */ jsx(WithFramerBreakpoints, { Component: stdin_default, ...props, },);
};
var bye_default = stdin_default;
export { bye_default as default, };
