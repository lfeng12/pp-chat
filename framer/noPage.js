/* eslint-disable */
'use client';
import { Pattern, } from './chunk-HEETZSPU.js';

// https :https://framerusercontent.com/modules/eBuIhfEIjdHdmtBINMif/sAniJKrAni9PrnpUjqcs/JtxMID9MC.js
import { jsx as _jsx, jsxs as _jsxs, } from 'react/jsx-runtime';
import {
  addFonts,
  ComponentViewportProvider,
  cx,
  getFonts,
  RichText,
  SVG,
  useComponentViewport,
  useLocaleInfo,
  useVariantState,
  withCSS,
} from 'unframer';
import { LayoutGroup, motion, MotionConfigContext, } from 'unframer';
import * as React from 'react';
var PatternFonts = getFonts(Pattern,);
var cycleOrder = ['FRRpZt8vJ',];
var serializationHash = 'framer-SOdkc';
var variantClassNames = { FRRpZt8vJ: 'framer-v-1d9u1x6', };
var transition1 = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: 'spring', };
var Transition = ({ value, children, },) => {
  const config = React.useContext(MotionConfigContext,);
  const transition = value !== null && value !== void 0 ? value : config.transition;
  const contextValue = React.useMemo(() => ({ ...config, transition, }), [JSON.stringify(transition,),],);
  return /* @__PURE__ */ _jsx(MotionConfigContext.Provider, { value: contextValue, children, },);
};
var Variants = motion(React.Fragment,);
var getProps = ({ height, id, width, ...props },) => {
  return { ...props, };
};
var createLayoutDependency = (props, variants,) => variants.join('-',) + props.layoutDependency;
var Component = /* @__PURE__ */ React.forwardRef(function (props, ref,) {
  const { activeLocale, setLocale, } = useLocaleInfo();
  const { style, className, layoutId, variant, ...restProps } = getProps(props,);
  const { baseVariant, classNames, gestureVariant, setGestureState, setVariant, variants, } = useVariantState({
    cycleOrder,
    defaultVariant: 'FRRpZt8vJ',
    variant,
    variantClassNames,
  },);
  const layoutDependency = createLayoutDependency(props, variants,);
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
          className: cx(serializationHash, ...sharedStyleClassNames, 'framer-1d9u1x6', className, classNames,),
          'data-framer-name': 'Variant 1',
          layoutDependency,
          layoutId: 'FRRpZt8vJ',
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
                className: 'framer-i1ptsw-container',
                layoutDependency,
                layoutId: 'JfLbyaQpO-container',
                children: /* @__PURE__ */ _jsx(Pattern, {
                  back: 'rgb(255, 121, 173)',
                  diagonal: true,
                  direction: 'left',
                  duration: 5,
                  front: 'rgb(255, 255, 255)',
                  height: '100%',
                  id: 'JfLbyaQpO',
                  layoutId: 'JfLbyaQpO',
                  patternType: 'wave-lines',
                  radius: 0,
                  scale: 22,
                  shouldAnimate: true,
                  style: { height: '100%', width: '100%', },
                  width: '100%',
                },),
              },),
            },),
            /* @__PURE__ */ _jsx(SVG, {
              className: 'framer-fty982',
              'data-framer-name': 'nopage',
              fill: 'black',
              intrinsicHeight: 2436,
              intrinsicWidth: 1125,
              layoutDependency,
              layoutId: 'IiMoFe6H9',
              svg:
                '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1125 2436" style="enable-background:new 0 0 1125 2436" xml:space="preserve"><path d="M1189-8.65S874.24 471.19 562.27 162.5h.24C250.54 471.19-64.21-8.65-64.21-8.65M528.5 407.5c-11.44 9.44-23 26.48-23 42.47V601.5l.5 761.5v142.53c0 28.42 23.04 51.47 51.47 51.47h10.07c28.42 0 51.47-23.04 51.47-51.47V1363l-.5-761.5V449.97c0-16.29-11.19-33.04-23-42.47m.28-.22c-28.58-23.57-33.29-45.78-33.29-45.78v.4s-5.57 21.83-34.19 45.32" style="fill:#fff"/></svg>',
              withExternalLayout: true,
            },),
            /* @__PURE__ */ _jsx(RichText, {
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
              className: 'framer-ph2a2b',
              fonts: ['GF;Erica One-regular',],
              layoutDependency,
              layoutId: 'hu3tHf9vM',
              style: { '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', rotate: 90, },
              verticalAlignment: 'top',
              withExternalLayout: true,
            },),
          ],
        },),
      },),
    },),
  },);
},);
var css = [
  '@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }',
  '.framer-SOdkc.framer-w0lfrn, .framer-SOdkc .framer-w0lfrn { display: block; }',
  '.framer-SOdkc.framer-1d9u1x6 { height: 844px; overflow: hidden; position: relative; width: 390px; }',
  '.framer-SOdkc .framer-i1ptsw-container { flex: none; height: 846px; left: 0px; position: absolute; top: 0px; width: 391px; z-index: 0; }',
  '.framer-SOdkc .framer-fty982 { aspect-ratio: 0.4618226600985222 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 844px); left: 0px; position: absolute; right: 0px; top: 0px; }',
  '.framer-SOdkc .framer-ph2a2b { flex: none; height: 39px; left: calc(49.743589743589766% - 327px / 2); position: absolute; top: 325px; white-space: pre-wrap; width: 327px; word-break: break-word; word-wrap: break-word; }',
];
var FramerJtxMID9MC = withCSS(Component, css, 'framer-SOdkc',);
var stdin_default = FramerJtxMID9MC;
FramerJtxMID9MC.displayName = 'V2 - noPage';
FramerJtxMID9MC.defaultProps = { height: 844, width: 390, };
addFonts(FramerJtxMID9MC, [{
  explicitInter: true,
  fonts: [{
    family: 'Erica One',
    source: 'google',
    style: 'normal',
    url: 'https://fonts.gstatic.com/s/ericaone/v27/WBLnrEXccV9VGrOKmGD1Xk_MJMGxiQ.woff2',
    weight: '400',
  },],
}, ...PatternFonts,], { supportsExplicitInterCodegen: true, },);

// virtual:noPage
import { WithFramerBreakpoints, } from 'unframer';
import { jsx, } from 'react/jsx-runtime';
stdin_default.Responsive = (props,) => {
  return /* @__PURE__ */ jsx(WithFramerBreakpoints, { Component: stdin_default, ...props, },);
};
var noPage_default = stdin_default;
export { noPage_default as default, };
