/* eslint-disable */
import { Clock, } from './chunk-EIZOZDEQ.js';

// https :https://framerusercontent.com/modules/1Jjp7TCNWR3UijmomYOy/klF3lyyYYs5RbaOQfs2v/D_V6zVV2Z.js
import { jsx as _jsx, } from 'react/jsx-runtime';
import {
  addFonts,
  ComponentViewportProvider,
  cx,
  getFonts,
  useComponentViewport,
  useLocaleInfo,
  useVariantState,
  withCSS,
} from 'unframer';
import { LayoutGroup, motion, MotionConfigContext, } from 'unframer';
import * as React from 'react';
var ClockFonts = getFonts(Clock,);
var cycleOrder = ['DeCbWOneV',];
var serializationHash = 'framer-wVDD4';
var variantClassNames = { DeCbWOneV: 'framer-v-1bfy2up', };
var transition1 = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: 'spring', };
var transformTemplate1 = (_, t,) => `translate(-50%, -50%) ${t}`;
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
    defaultVariant: 'DeCbWOneV',
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
        children: /* @__PURE__ */ _jsx(motion.div, {
          ...restProps,
          className: cx(serializationHash, ...sharedStyleClassNames, 'framer-1bfy2up', className, classNames,),
          'data-framer-name': 'Variant 1',
          layoutDependency,
          layoutId: 'DeCbWOneV',
          onHoverEnd: () => setGestureState({ isHovered: false, },),
          onHoverStart: () => setGestureState({ isHovered: true, },),
          onTap: () => setGestureState({ isPressed: false, },),
          onTapCancel: () => setGestureState({ isPressed: false, },),
          onTapStart: () => setGestureState({ isPressed: true, },),
          ref: ref !== null && ref !== void 0 ? ref : ref1,
          style: { backgroundColor: 'rgb(255, 255, 255)', ...style, },
          children: /* @__PURE__ */ _jsx(motion.div, {
            className: 'framer-nj7gx8',
            layoutDependency,
            layoutId: 'G_EjFmKKc',
            style: {
              backgroundColor: 'rgb(12, 12, 12)',
              borderBottomLeftRadius: 20,
              borderBottomRightRadius: 20,
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
            },
            children: /* @__PURE__ */ _jsx(ComponentViewportProvider, {
              children: /* @__PURE__ */ _jsx(motion.div, {
                className: 'framer-epi61s-container',
                layoutDependency,
                layoutId: 'zjTCpvf6P-container',
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
                  id: 'zjTCpvf6P',
                  is12hour: true,
                  layoutId: 'zjTCpvf6P',
                  prefix: '',
                  seconds: true,
                  suffix: '',
                  textSelect: true,
                  timeZone: false,
                  width: '100%',
                },),
              },),
            },),
          },),
        },),
      },),
    },),
  },);
},);
var css = [
  '@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }',
  '.framer-wVDD4.framer-1sv2ey9, .framer-wVDD4 .framer-1sv2ey9 { display: block; }',
  '.framer-wVDD4.framer-1bfy2up { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; height: 64px; justify-content: space-evenly; overflow: hidden; padding: 0px; position: relative; width: 390px; }',
  '.framer-wVDD4 .framer-nj7gx8 { flex: none; height: 36px; overflow: visible; position: relative; width: 120px; }',
  '.framer-wVDD4 .framer-epi61s-container { flex: none; height: auto; left: 50%; position: absolute; top: 50%; width: auto; }',
];
var FramerD_V6zVV2Z = withCSS(Component, css, 'framer-wVDD4',);
var stdin_default = FramerD_V6zVV2Z;
FramerD_V6zVV2Z.displayName = 'topBar';
FramerD_V6zVV2Z.defaultProps = { height: 64, width: 390, };
addFonts(FramerD_V6zVV2Z, [{
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
}, ...ClockFonts,], { supportsExplicitInterCodegen: true, },);

export { stdin_default, };
