/* eslint-disable */
'use client';
import { stdin_default, } from './chunk-XQUDET47.js';
import { Pattern, } from './chunk-HEETZSPU.js';
import './chunk-ZBBVTMRC.js';

// https :https://framerusercontent.com/modules/8RsKh57r39phMoOjgQhf/8HrjQsPNvDdPMTSjQBpF/JOJOiV_NO.js
import { jsx as _jsx, jsxs as _jsxs, } from 'react/jsx-runtime';
import {
  addFonts,
  addPropertyControls,
  ComponentViewportProvider,
  ControlType,
  cx,
  getFonts,
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
var PatternFonts = getFonts(Pattern,);
var ButtonFonts = getFonts(stdin_default,);
var cycleOrder = ['HE6x0Jj1h',];
var serializationHash = 'framer-DOhbv';
var variantClassNames = { HE6x0Jj1h: 'framer-v-1n6zlrp', };
var transition1 = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: 'spring', };
var Transition = ({ value, children, },) => {
  const config = React.useContext(MotionConfigContext,);
  const transition = value !== null && value !== void 0 ? value : config.transition;
  const contextValue = React.useMemo(() => ({ ...config, transition, }), [JSON.stringify(transition,),],);
  return /* @__PURE__ */ _jsx(MotionConfigContext.Provider, { value: contextValue, children, },);
};
var Variants = motion(React.Fragment,);
var getProps = ({ height, id, tap, width, ...props },) => {
  return { ...props, mihwP7AEf: tap !== null && tap !== void 0 ? tap : props.mihwP7AEf, };
};
var createLayoutDependency = (props, variants,) => variants.join('-',) + props.layoutDependency;
var Component = /* @__PURE__ */ React.forwardRef(function (props, ref,) {
  const { activeLocale, setLocale, } = useLocaleInfo();
  const { style, className, layoutId, variant, mihwP7AEf, ...restProps } = getProps(props,);
  const { baseVariant, classNames, gestureVariant, setGestureState, setVariant, variants, } = useVariantState({
    cycleOrder,
    defaultVariant: 'HE6x0Jj1h',
    variant,
    variantClassNames,
  },);
  const layoutDependency = createLayoutDependency(props, variants,);
  const { activeVariantCallback, delay, } = useActiveVariantCallback(baseVariant,);
  const jyiKBY2jsi62x4d = activeVariantCallback(async (...args) => {
    if (mihwP7AEf) {
      const res = await mihwP7AEf(...args,);
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
          className: cx(serializationHash, ...sharedStyleClassNames, 'framer-1n6zlrp', className, classNames,),
          'data-framer-name': 'Variant 1',
          layoutDependency,
          layoutId: 'HE6x0Jj1h',
          onHoverEnd: () => setGestureState({ isHovered: false, },),
          onHoverStart: () => setGestureState({ isHovered: true, },),
          onTap: () => setGestureState({ isPressed: false, },),
          onTapCancel: () => setGestureState({ isPressed: false, },),
          onTapStart: () => setGestureState({ isPressed: true, },),
          ref: ref !== null && ref !== void 0 ? ref : ref1,
          style: { backgroundColor: 'rgb(255, 255, 255)', ...style, },
          children: [
            /* @__PURE__ */ _jsxs(motion.div, {
              className: 'framer-1gfce81',
              'data-framer-name': 'Login',
              layoutDependency,
              layoutId: 'yXYZikxM2',
              children: [
                /* @__PURE__ */ _jsx(ComponentViewportProvider, {
                  children: /* @__PURE__ */ _jsx(motion.div, {
                    className: 'framer-e50t04-container',
                    layoutDependency,
                    layoutId: 'hoQlFXr_3-container',
                    children: /* @__PURE__ */ _jsx(Pattern, {
                      back: 'rgb(255, 121, 173)',
                      diagonal: true,
                      direction: 'left',
                      duration: 5,
                      front: 'rgb(255, 255, 255)',
                      height: '100%',
                      id: 'hoQlFXr_3',
                      layoutId: 'hoQlFXr_3',
                      patternType: 'wave-lines',
                      radius: 0,
                      scale: 22,
                      shouldAnimate: true,
                      style: { height: '100%', width: '100%', },
                      width: '100%',
                    },),
                  },),
                },),
                /* @__PURE__ */ _jsxs(motion.div, {
                  className: 'framer-rkprzx',
                  'data-framer-name': 'buttons container',
                  layoutDependency,
                  layoutId: 'Z33rxL1eU',
                  style: {
                    backgroundColor: 'rgb(255, 255, 255)',
                    borderBottomLeftRadius: 50,
                    borderBottomRightRadius: 50,
                    borderTopLeftRadius: 50,
                    borderTopRightRadius: 50,
                    boxShadow: '-6px -6px 16px 0px rgba(0,0,0,0.25)',
                  },
                  children: [
                    /* @__PURE__ */ _jsx(RichText, {
                      __fromCanvasComponent: true,
                      children: /* @__PURE__ */ _jsx(React.Fragment, {
                        children: /* @__PURE__ */ _jsx(motion.h6, {
                          style: {
                            '--font-selector': 'R0Y7RE0gU2Fucy0yMDBpdGFsaWM=',
                            '--framer-font-family': '"DM Sans", sans-serif',
                            '--framer-font-size': '14px',
                            '--framer-font-style': 'italic',
                            '--framer-font-weight': '200',
                            '--framer-text-alignment': 'center',
                          },
                          children: 'Our mission is, creating a world with no more sad and lonely poopers.',
                        },),
                      },),
                      className: 'framer-2te4k4',
                      fonts: ['GF;DM Sans-200italic',],
                      layoutDependency,
                      layoutId: 'XFSawjYPz',
                      style: { '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', },
                      verticalAlignment: 'top',
                      withExternalLayout: true,
                    },),
                    /* @__PURE__ */ _jsxs(motion.div, {
                      className: 'framer-2zp66z',
                      'data-framer-name': 'buttons',
                      layoutDependency,
                      layoutId: 'rC1Zk1Ntt',
                      children: [
                        /* @__PURE__ */ _jsx(ComponentViewportProvider, {
                          children: /* @__PURE__ */ _jsx(motion.div, {
                            className: 'framer-1n29ywv-container',
                            'data-framer-name': 'facebook',
                            layoutDependency,
                            layoutId: 'ctVJOJY2f-container',
                            name: 'facebook',
                            children: /* @__PURE__ */ _jsx(stdin_default, {
                              height: '100%',
                              id: 'ctVJOJY2f',
                              layoutId: 'ctVJOJY2f',
                              name: 'facebook',
                              qSWmKjqbQ: 'Label',
                              variant: 'r7q8ZHP2m',
                              width: '100%',
                            },),
                          },),
                        },),
                        /* @__PURE__ */ _jsx(ComponentViewportProvider, {
                          children: /* @__PURE__ */ _jsx(motion.div, {
                            className: 'framer-x7y5pu-container',
                            'data-framer-name': 'google',
                            layoutDependency,
                            layoutId: 'mmdG0QFwJ-container',
                            name: 'google',
                            children: /* @__PURE__ */ _jsx(stdin_default, {
                              height: '100%',
                              id: 'mmdG0QFwJ',
                              layoutId: 'mmdG0QFwJ',
                              name: 'google',
                              qSWmKjqbQ: 'Label',
                              variant: 'RuqDcl56g',
                              width: '100%',
                            },),
                          },),
                        },),
                        /* @__PURE__ */ _jsx(ComponentViewportProvider, {
                          children: /* @__PURE__ */ _jsx(motion.div, {
                            className: 'framer-1mlzrac-container',
                            'data-framer-name': 'anonymous',
                            layoutDependency,
                            layoutId: 'lLn5SPoWe-container',
                            name: 'anonymous',
                            children: /* @__PURE__ */ _jsx(stdin_default, {
                              height: '100%',
                              id: 'lLn5SPoWe',
                              layoutId: 'lLn5SPoWe',
                              name: 'anonymous',
                              qSWmKjqbQ: 'Label',
                              variant: 'AWlkH1Wz4',
                              width: '100%',
                            },),
                          },),
                        },),
                        /* @__PURE__ */ _jsx(ComponentViewportProvider, {
                          children: /* @__PURE__ */ _jsx(motion.div, {
                            className: 'framer-hvhaok-container',
                            'data-framer-name': 'email',
                            layoutDependency,
                            layoutId: 'HDicfJfQz-container',
                            name: 'email',
                            children: /* @__PURE__ */ _jsx(stdin_default, {
                              height: '100%',
                              id: 'HDicfJfQz',
                              jyiKBY2js: jyiKBY2jsi62x4d,
                              layoutId: 'HDicfJfQz',
                              name: 'email',
                              qSWmKjqbQ: 'Label',
                              variant: 'KczJXbKYw',
                              width: '100%',
                            },),
                          },),
                        },),
                      ],
                    },),
                  ],
                },),
              ],
            },),
            /* @__PURE__ */ _jsx(SVG, {
              className: 'framer-b2khr6',
              'data-framer-name': 'login_page',
              fill: 'black',
              intrinsicHeight: 2436,
              intrinsicWidth: 1125,
              layoutDependency,
              layoutId: 'czDwGHY79',
              svg:
                '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1125 2436" style="enable-background:new 0 0 1125 2436" xml:space="preserve"><path d="M1189-8.65S874.24 471.19 562.27 162.5h.24C250.54 471.19-64.21-8.65-64.21-8.65M595.5 407.5c11.81 9.43 23 26.17 23 42.47v294.07c0 28.42-23.04 51.47-51.47 51.47h-10.07c-28.42 0-51.47-23.04-51.47-51.47V449.97c0-15.99 11.56-33.03 23-42.47m67.3-.22c-28.58-23.57-33.29-45.78-33.29-45.78v.4s-5.57 21.83-34.19 45.32" style="fill:#fff"/></svg>',
              withExternalLayout: true,
            },),
            /* @__PURE__ */ _jsx(RichText, {
              __fromCanvasComponent: true,
              children: /* @__PURE__ */ _jsx(React.Fragment, {
                children: /* @__PURE__ */ _jsx(motion.p, {
                  style: {
                    '--font-selector': 'R0Y7RXJpY2EgT25lLXJlZ3VsYXI=',
                    '--framer-font-family': '"Erica One", sans-serif',
                    '--framer-font-size': '24px',
                  },
                  children: 'PP CHAT',
                },),
              },),
              className: 'framer-qocz1b',
              fonts: ['GF;Erica One-regular',],
              layoutDependency,
              layoutId: 'aPA8Md74G',
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
  '.framer-DOhbv.framer-14kl9cq, .framer-DOhbv .framer-14kl9cq { display: block; }',
  '.framer-DOhbv.framer-1n6zlrp { height: 844px; position: relative; width: 390px; }',
  '.framer-DOhbv .framer-1gfce81 { align-content: center; align-items: center; bottom: 0px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; justify-content: space-between; left: 0px; overflow: hidden; padding: 0px; position: absolute; right: 0px; top: 0px; }',
  '.framer-DOhbv .framer-e50t04-container { flex: none; height: 846px; position: relative; width: 391px; z-index: 0; }',
  '.framer-DOhbv .framer-rkprzx { align-content: center; align-items: center; bottom: 20px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: 365px; justify-content: center; left: calc(50.00000000000002% - 350px / 2); overflow: visible; padding: 0px; position: absolute; width: 350px; z-index: 5; }',
  '.framer-DOhbv .framer-2te4k4 { flex: none; height: 37px; position: relative; white-space: pre-wrap; width: 245px; word-break: break-word; word-wrap: break-word; }',
  '.framer-DOhbv .framer-2zp66z { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }',
  '.framer-DOhbv .framer-1n29ywv-container, .framer-DOhbv .framer-x7y5pu-container, .framer-DOhbv .framer-1mlzrac-container, .framer-DOhbv .framer-hvhaok-container { flex: none; height: auto; position: relative; width: auto; }',
  '.framer-DOhbv .framer-b2khr6 { aspect-ratio: 0.4618226600985222 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 844px); left: 0px; position: absolute; right: 0px; top: 0px; }',
  '.framer-DOhbv .framer-qocz1b { flex: none; height: auto; position: absolute; right: 139px; top: 194px; white-space: pre; width: auto; }',
  '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-DOhbv .framer-rkprzx, .framer-DOhbv .framer-2zp66z { gap: 0px; } .framer-DOhbv .framer-rkprzx > * { margin: 0px; margin-bottom: calc(24px / 2); margin-top: calc(24px / 2); } .framer-DOhbv .framer-rkprzx > :first-child, .framer-DOhbv .framer-2zp66z > :first-child { margin-top: 0px; } .framer-DOhbv .framer-rkprzx > :last-child, .framer-DOhbv .framer-2zp66z > :last-child { margin-bottom: 0px; } .framer-DOhbv .framer-2zp66z > * { margin: 0px; margin-bottom: calc(16px / 2); margin-top: calc(16px / 2); } }',
];
var FramerJOJOiV_NO = withCSS(Component, css, 'framer-DOhbv',);
var stdin_default2 = FramerJOJOiV_NO;
FramerJOJOiV_NO.displayName = 'V2 - login';
FramerJOJOiV_NO.defaultProps = { height: 844, width: 390, };
addPropertyControls(FramerJOJOiV_NO, { mihwP7AEf: { title: 'Tap', type: ControlType.EventHandler, }, },);
addFonts(FramerJOJOiV_NO, [
  {
    explicitInter: true,
    fonts: [{
      family: 'DM Sans',
      source: 'google',
      style: 'italic',
      url: 'https://fonts.gstatic.com/s/dmsans/v15/rP2rp2ywxg089UriCZaSExd86J3t9jz86Mvy4qCRAL19DksVat8JDW32RmYJpso5.woff2',
      weight: '200',
    }, {
      family: 'Erica One',
      source: 'google',
      style: 'normal',
      url: 'https://fonts.gstatic.com/s/ericaone/v27/WBLnrEXccV9VGrOKmGD1Xk_MJMGxiQ.woff2',
      weight: '400',
    },],
  },
  ...PatternFonts,
  ...ButtonFonts,
], { supportsExplicitInterCodegen: true, },);

// virtual:loginLanding
import { WithFramerBreakpoints, } from 'unframer';
import { jsx, } from 'react/jsx-runtime';
stdin_default2.Responsive = (props,) => {
  return /* @__PURE__ */ jsx(WithFramerBreakpoints, { Component: stdin_default2, ...props, },);
};
var loginLanding_default = stdin_default2;
export { loginLanding_default as default, };
