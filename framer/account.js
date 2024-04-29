/* eslint-disable */
'use client';
import { Conic, } from './chunk-VOFWIACZ.js';
import './chunk-JJFCSOIW.js';
import { Clock, } from './chunk-YQS4D325.js';
import { Icon, } from './chunk-NTBY4HVU.js';
import './chunk-ZBBVTMRC.js';

// https :https://framerusercontent.com/modules/xbD3RKM8C9kQJ3BffHWf/1cpUXUCgUKHaOdpkE3z4/LrdCUNwC_.js
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
var ClockFonts = getFonts(Clock,);
var ConicFonts = getFonts(Conic,);
var IconoirFonts = getFonts(Icon,);
var cycleOrder = ['jFPJFfngE',];
var serializationHash = 'framer-PNgVX';
var variantClassNames = { jFPJFfngE: 'framer-v-zvs2ng', };
var transition1 = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: 'spring', };
var transformTemplate1 = (_, t,) => `translateX(-50%) ${t}`;
var transformTemplate2 = (_, t,) => `translateY(-50%) ${t}`;
var transformTemplate3 = (_, t,) => `translate(-50%, -50%) ${t}`;
var Transition = ({ value, children, },) => {
  const config = React.useContext(MotionConfigContext,);
  const transition = value !== null && value !== void 0 ? value : config.transition;
  const contextValue = React.useMemo(() => ({ ...config, transition, }), [JSON.stringify(transition,),],);
  return /* @__PURE__ */ _jsx(MotionConfigContext.Provider, { value: contextValue, children, },);
};
var Variants = motion(React.Fragment,);
var getProps = ({ height, id, tap, tap2, tap3, tap4, tap5, tap6, tap7, tap8, tap9, width, ...props },) => {
  return {
    ...props,
    asIpoNqcE: tap8 !== null && tap8 !== void 0 ? tap8 : props.asIpoNqcE,
    F2SsauX5P: tap4 !== null && tap4 !== void 0 ? tap4 : props.F2SsauX5P,
    fNjFSaX_B: tap3 !== null && tap3 !== void 0 ? tap3 : props.fNjFSaX_B,
    O29LlUj0x: tap7 !== null && tap7 !== void 0 ? tap7 : props.O29LlUj0x,
    O6pta1Uek: tap6 !== null && tap6 !== void 0 ? tap6 : props.O6pta1Uek,
    P0Wem0kTv: tap5 !== null && tap5 !== void 0 ? tap5 : props.P0Wem0kTv,
    qVqJLjYKC: tap2 !== null && tap2 !== void 0 ? tap2 : props.qVqJLjYKC,
    uCHkcFF9O: tap !== null && tap !== void 0 ? tap : props.uCHkcFF9O,
    ysxh8LMBY: tap9 !== null && tap9 !== void 0 ? tap9 : props.ysxh8LMBY,
  };
};
var createLayoutDependency = (props, variants,) => variants.join('-',) + props.layoutDependency;
var Component = /* @__PURE__ */ React.forwardRef(function (props, ref,) {
  const { activeLocale, setLocale, } = useLocaleInfo();
  const {
    style,
    className,
    layoutId,
    variant,
    uCHkcFF9O,
    qVqJLjYKC,
    fNjFSaX_B,
    F2SsauX5P,
    P0Wem0kTv,
    O6pta1Uek,
    O29LlUj0x,
    asIpoNqcE,
    ysxh8LMBY,
    ...restProps
  } = getProps(props,);
  const { baseVariant, classNames, gestureVariant, setGestureState, setVariant, variants, } = useVariantState({
    cycleOrder,
    defaultVariant: 'jFPJFfngE',
    variant,
    variantClassNames,
  },);
  const layoutDependency = createLayoutDependency(props, variants,);
  const { activeVariantCallback, delay, } = useActiveVariantCallback(baseVariant,);
  const onTap1jjdfrw = activeVariantCallback(async (...args) => {
    if (uCHkcFF9O) {
      const res = await uCHkcFF9O(...args,);
      if (res === false) {
        return false;
      }
    }
  },);
  const onClick1edo21k = activeVariantCallback(async (...args) => {
    if (qVqJLjYKC) {
      const res = await qVqJLjYKC(...args,);
      if (res === false) {
        return false;
      }
    }
  },);
  const onClick1spb0ch = activeVariantCallback(async (...args) => {
    if (fNjFSaX_B) {
      const res = await fNjFSaX_B(...args,);
      if (res === false) {
        return false;
      }
    }
  },);
  const onClickgnkhlm = activeVariantCallback(async (...args) => {
    if (F2SsauX5P) {
      const res = await F2SsauX5P(...args,);
      if (res === false) {
        return false;
      }
    }
  },);
  const onClickncmrwu = activeVariantCallback(async (...args) => {
    if (P0Wem0kTv) {
      const res = await P0Wem0kTv(...args,);
      if (res === false) {
        return false;
      }
    }
  },);
  const onTap3un59w = activeVariantCallback(async (...args) => {
    if (O6pta1Uek) {
      const res = await O6pta1Uek(...args,);
      if (res === false) {
        return false;
      }
    }
  },);
  const onTap38jwjt = activeVariantCallback(async (...args) => {
    if (O29LlUj0x) {
      const res = await O29LlUj0x(...args,);
      if (res === false) {
        return false;
      }
    }
  },);
  const onTapo8c9yd = activeVariantCallback(async (...args) => {
    if (asIpoNqcE) {
      const res = await asIpoNqcE(...args,);
      if (res === false) {
        return false;
      }
    }
  },);
  const onTap1n0vklw = activeVariantCallback(async (...args) => {
    if (ysxh8LMBY) {
      const res = await ysxh8LMBY(...args,);
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
          className: cx(serializationHash, ...sharedStyleClassNames, 'framer-zvs2ng', className, classNames,),
          'data-framer-name': 'Variant 1',
          layoutDependency,
          layoutId: 'jFPJFfngE',
          onHoverEnd: () => setGestureState({ isHovered: false, },),
          onHoverStart: () => setGestureState({ isHovered: true, },),
          onTap: () => setGestureState({ isPressed: false, },),
          onTapCancel: () => setGestureState({ isPressed: false, },),
          onTapStart: () => setGestureState({ isPressed: true, },),
          ref: ref !== null && ref !== void 0 ? ref : ref1,
          style: { backgroundColor: 'rgb(255, 255, 255)', ...style, },
          children: [
            /* @__PURE__ */ _jsx(motion.div, {
              className: 'framer-m3x619',
              layoutDependency,
              layoutId: 'Ar3N27N1P',
              style: { backgroundColor: 'rgb(255, 121, 173)', },
            },),
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
              className: 'framer-8xxbcv',
              'data-framer-name': 'iphone14pro',
              layoutDependency,
              layoutId: 's9IF8OIro',
              children: [
                /* @__PURE__ */ _jsx(ComponentViewportProvider, {
                  children: /* @__PURE__ */ _jsx(motion.div, {
                    className: 'framer-1kvxwcl-container',
                    layoutDependency,
                    layoutId: 'mvfSpVVj7-container',
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
                      id: 'mvfSpVVj7',
                      is12hour: true,
                      layoutId: 'mvfSpVVj7',
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
                  className: 'framer-9ktc76',
                  'data-highlight': true,
                  layoutDependency,
                  layoutId: 'H7UYYPTh6',
                  onTap: onTap1jjdfrw,
                },),
              ],
            },),
            /* @__PURE__ */ _jsx(ComponentViewportProvider, {
              children: /* @__PURE__ */ _jsx(motion.div, {
                className: 'framer-1q3zebq-container',
                layoutDependency,
                layoutId: 'RjMhRsIoE-container',
                children: /* @__PURE__ */ _jsx(Conic, {
                  blur: 13,
                  colors: ['rgb(223, 223, 155)', 'rgb(102, 100, 0)', 'rgb(64, 125, 165)', 'rgb(247, 141, 185)',],
                  from: 15,
                  height: '100%',
                  id: 'RjMhRsIoE',
                  layoutId: 'RjMhRsIoE',
                  onClick: onClick1edo21k,
                  radius: 500,
                  style: { height: '100%', width: '100%', },
                  width: '100%',
                  xPos: 67,
                  yPos: 55,
                },),
              },),
            },),
            /* @__PURE__ */ _jsx(ComponentViewportProvider, {
              children: /* @__PURE__ */ _jsx(motion.div, {
                className: 'framer-amjntt-container',
                'data-framer-name': 'icon-settings',
                layoutDependency,
                layoutId: 'jSx9bN2tm-container',
                name: 'icon-settings',
                children: /* @__PURE__ */ _jsx(Icon, {
                  color: 'rgb(255, 255, 255)',
                  height: '100%',
                  iconSearch: 'settings',
                  iconSelection: 'KeyframesCouple',
                  id: 'jSx9bN2tm',
                  layoutId: 'jSx9bN2tm',
                  mirrored: false,
                  name: 'icon-settings',
                  onClick: onClick1spb0ch,
                  selectByList: false,
                  style: { height: '100%', width: '100%', },
                  width: '100%',
                },),
              },),
            },),
            /* @__PURE__ */ _jsx(ComponentViewportProvider, {
              children: /* @__PURE__ */ _jsx(motion.div, {
                className: 'framer-algmum-container',
                'data-framer-name': 'icon-health',
                layoutDependency,
                layoutId: 'cX5BqrNub-container',
                name: 'icon-health',
                children: /* @__PURE__ */ _jsx(Icon, {
                  color: 'rgb(255, 255, 255)',
                  height: '100%',
                  iconSearch: 'kayframe',
                  iconSelection: 'KeyframesCouple',
                  id: 'cX5BqrNub',
                  layoutId: 'cX5BqrNub',
                  mirrored: false,
                  name: 'icon-health',
                  onClick: onClickgnkhlm,
                  selectByList: true,
                  style: { height: '100%', width: '100%', },
                  width: '100%',
                },),
              },),
            },),
            /* @__PURE__ */ _jsx(ComponentViewportProvider, {
              children: /* @__PURE__ */ _jsx(motion.div, {
                className: 'framer-1idwncf-container',
                'data-framer-name': 'icon-chat',
                layoutDependency,
                layoutId: 'i0pgT0vj3-container',
                name: 'icon-chat',
                children: /* @__PURE__ */ _jsx(Icon, {
                  color: 'rgb(255, 255, 255)',
                  height: '100%',
                  iconSearch: 'chatbubble',
                  iconSelection: 'ChatBubble',
                  id: 'i0pgT0vj3',
                  layoutId: 'i0pgT0vj3',
                  mirrored: false,
                  name: 'icon-chat',
                  onClick: onClickncmrwu,
                  selectByList: false,
                  style: { height: '100%', width: '100%', },
                  width: '100%',
                },),
              },),
            },),
            /* @__PURE__ */ _jsx(ComponentViewportProvider, {
              children: /* @__PURE__ */ _jsx(motion.div, {
                className: 'framer-1887mdg-container',
                layoutDependency,
                layoutId: 'lAmUHcq1Q-container',
                children: /* @__PURE__ */ _jsx(Icon, {
                  color: 'rgb(0, 0, 0)',
                  height: '100%',
                  iconSearch: 'edit',
                  iconSelection: 'Home',
                  id: 'lAmUHcq1Q',
                  layoutId: 'lAmUHcq1Q',
                  mirrored: false,
                  selectByList: false,
                  style: { height: '100%', width: '100%', },
                  width: '100%',
                },),
              },),
            },),
            /* @__PURE__ */ _jsx(RichText, {
              __fromCanvasComponent: true,
              children: /* @__PURE__ */ _jsx(React.Fragment, {
                children: /* @__PURE__ */ _jsx(motion.h1, {
                  style: {
                    '--font-selector': 'R0Y7RE0gU2Fucy03MDA=',
                    '--framer-font-family': '"DM Sans", "DM Sans Placeholder", sans-serif',
                    '--framer-font-size': '12px',
                    '--framer-font-weight': '700',
                    '--framer-text-alignment': 'center',
                  },
                  children: 'Liquidity',
                },),
              },),
              className: 'framer-19t0hd4',
              fonts: ['GF;DM Sans-700',],
              layoutDependency,
              layoutId: 'Cw5NAGYep',
              style: { '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', },
              verticalAlignment: 'top',
              withExternalLayout: true,
            },),
            /* @__PURE__ */ _jsxs(motion.button, {
              className: 'framer-1g9pk8g',
              'data-border': true,
              'data-framer-name': 'Button',
              'data-highlight': true,
              'data-reset': 'button',
              layoutDependency,
              layoutId: 'dZMdGbvTI',
              onTap: onTap3un59w,
              style: {
                '--border-bottom-width': '2px',
                '--border-color': 'rgb(0, 0, 0)',
                '--border-left-width': '2px',
                '--border-right-width': '2px',
                '--border-style': 'solid',
                '--border-top-width': '2px',
                backgroundColor: 'rgb(255, 255, 255)',
                borderBottomLeftRadius: 30,
                borderBottomRightRadius: 30,
                borderTopLeftRadius: 30,
                borderTopRightRadius: 30,
                boxShadow: '2px 2px 2px 0px rgba(0,0,0,0.25)',
              },
              children: [
                /* @__PURE__ */ _jsx(Image, {
                  background: {
                    alt: '',
                    fit: 'fill',
                    intrinsicHeight: 24,
                    intrinsicWidth: 24,
                    pixelHeight: 48,
                    pixelWidth: 48,
                    src: 'https://framerusercontent.com/images/LfNQyujPzJWJhUf5SnbhM4mIluI.png',
                  },
                  className: 'framer-14e3rxy',
                  'data-framer-name': 'interface_user_circle',
                  layoutDependency,
                  layoutId: 'R1MH6KhvA',
                  transformTemplate: transformTemplate2,
                },),
                /* @__PURE__ */ _jsx(RichText, {
                  __fromCanvasComponent: true,
                  children: /* @__PURE__ */ _jsx(React.Fragment, {
                    children: /* @__PURE__ */ _jsx(motion.p, {
                      style: {
                        '--font-selector': 'R0Y7RE0gU2Fucy01MDA=',
                        '--framer-font-family': '"DM Sans", sans-serif',
                        '--framer-font-weight': '500',
                        '--framer-text-alignment': 'center',
                      },
                      children: 'Account',
                    },),
                  },),
                  className: 'framer-1f9fxrh',
                  fonts: ['GF;DM Sans-500',],
                  layoutDependency,
                  layoutId: 'RkU1t126J',
                  transformTemplate: transformTemplate3,
                  verticalAlignment: 'top',
                  withExternalLayout: true,
                },),
              ],
            },),
            /* @__PURE__ */ _jsxs(motion.button, {
              className: 'framer-be19h3',
              'data-border': true,
              'data-framer-name': 'Button',
              'data-highlight': true,
              'data-reset': 'button',
              layoutDependency,
              layoutId: 'AQuJhCIW9',
              onTap: onTap38jwjt,
              style: {
                '--border-bottom-width': '2px',
                '--border-color': 'rgb(0, 0, 0)',
                '--border-left-width': '2px',
                '--border-right-width': '2px',
                '--border-style': 'solid',
                '--border-top-width': '2px',
                backgroundColor: 'rgb(255, 255, 255)',
                borderBottomLeftRadius: 30,
                borderBottomRightRadius: 30,
                borderTopLeftRadius: 30,
                borderTopRightRadius: 30,
                boxShadow: '2px 2px 2px 0px rgba(0,0,0,0.25)',
              },
              children: [
                /* @__PURE__ */ _jsx(Image, {
                  background: {
                    alt: '',
                    fit: 'fill',
                    intrinsicHeight: 24,
                    intrinsicWidth: 24,
                    pixelHeight: 48,
                    pixelWidth: 48,
                    src: 'https://framerusercontent.com/images/IyMcvLEBAdtLnkDU1m8TSM7RI.png',
                  },
                  className: 'framer-kwtfk7',
                  'data-framer-name': 'interface_time_alarm',
                  layoutDependency,
                  layoutId: 'hUsuVZgxt',
                  transformTemplate: transformTemplate2,
                },),
                /* @__PURE__ */ _jsx(RichText, {
                  __fromCanvasComponent: true,
                  children: /* @__PURE__ */ _jsx(React.Fragment, {
                    children: /* @__PURE__ */ _jsx(motion.p, {
                      style: {
                        '--font-selector': 'R0Y7RE0gU2Fucy01MDA=',
                        '--framer-font-family': '"DM Sans", sans-serif',
                        '--framer-font-weight': '500',
                        '--framer-text-alignment': 'center',
                      },
                      children: 'Routine',
                    },),
                  },),
                  className: 'framer-lpq2ae',
                  fonts: ['GF;DM Sans-500',],
                  layoutDependency,
                  layoutId: 'zKNhzMJDh',
                  transformTemplate: transformTemplate2,
                  verticalAlignment: 'top',
                  withExternalLayout: true,
                },),
              ],
            },),
            /* @__PURE__ */ _jsxs(motion.button, {
              className: 'framer-169d247',
              'data-border': true,
              'data-framer-name': 'Button',
              'data-highlight': true,
              'data-reset': 'button',
              layoutDependency,
              layoutId: 'j2LLzcyyy',
              onTap: onTapo8c9yd,
              style: {
                '--border-bottom-width': '2px',
                '--border-color': 'rgb(0, 0, 0)',
                '--border-left-width': '2px',
                '--border-right-width': '2px',
                '--border-style': 'solid',
                '--border-top-width': '2px',
                backgroundColor: 'rgb(255, 255, 255)',
                borderBottomLeftRadius: 30,
                borderBottomRightRadius: 30,
                borderTopLeftRadius: 30,
                borderTopRightRadius: 30,
                boxShadow: '2px 2px 2px 0px rgba(0,0,0,0.25)',
              },
              children: [
                /* @__PURE__ */ _jsx(Image, {
                  background: {
                    alt: '',
                    fit: 'fill',
                    intrinsicHeight: 24,
                    intrinsicWidth: 24,
                    pixelHeight: 48,
                    pixelWidth: 48,
                    src: 'https://framerusercontent.com/images/YJsSI9EWlPdYVjg9iCzyPNFzc.png',
                  },
                  className: 'framer-7wwfm1',
                  'data-framer-name': 'interface_lock',
                  layoutDependency,
                  layoutId: 'ivag71pQB',
                  transformTemplate: transformTemplate2,
                },),
                /* @__PURE__ */ _jsx(RichText, {
                  __fromCanvasComponent: true,
                  children: /* @__PURE__ */ _jsx(React.Fragment, {
                    children: /* @__PURE__ */ _jsx(motion.p, {
                      style: {
                        '--font-selector': 'R0Y7RE0gU2Fucy01MDA=',
                        '--framer-font-family': '"DM Sans", sans-serif',
                        '--framer-font-weight': '500',
                        '--framer-text-alignment': 'center',
                      },
                      children: 'Privacy',
                    },),
                  },),
                  className: 'framer-igxfxf',
                  fonts: ['GF;DM Sans-500',],
                  layoutDependency,
                  layoutId: 'lFqpFymzk',
                  transformTemplate: transformTemplate2,
                  verticalAlignment: 'top',
                  withExternalLayout: true,
                },),
              ],
            },),
            /* @__PURE__ */ _jsxs(motion.button, {
              className: 'framer-nyzb4e',
              'data-border': true,
              'data-framer-name': 'Button',
              'data-reset': 'button',
              layoutDependency,
              layoutId: 'QK4kndZvB',
              style: {
                '--border-bottom-width': '2px',
                '--border-color': 'rgb(0, 0, 0)',
                '--border-left-width': '2px',
                '--border-right-width': '2px',
                '--border-style': 'solid',
                '--border-top-width': '2px',
                backgroundColor: 'rgb(255, 255, 255)',
                borderBottomLeftRadius: 30,
                borderBottomRightRadius: 30,
                borderTopLeftRadius: 30,
                borderTopRightRadius: 30,
                boxShadow: '2px 2px 2px 0px rgba(0,0,0,0.25)',
              },
              children: [
                /* @__PURE__ */ _jsx(Image, {
                  background: {
                    alt: '',
                    fit: 'fill',
                    intrinsicHeight: 24,
                    intrinsicWidth: 24,
                    pixelHeight: 48,
                    pixelWidth: 48,
                    src: 'https://framerusercontent.com/images/nIpi7a3u3jklHNkV9BnDtu61Uo.png',
                  },
                  className: 'framer-1q4bua8',
                  'data-framer-name': 'mail_smiley_happy_face',
                  layoutDependency,
                  layoutId: 'bPDpz2YOB',
                  transformTemplate: transformTemplate2,
                },),
                /* @__PURE__ */ _jsx(RichText, {
                  __fromCanvasComponent: true,
                  children: /* @__PURE__ */ _jsx(React.Fragment, {
                    children: /* @__PURE__ */ _jsx(motion.p, {
                      style: {
                        '--font-selector': 'R0Y7RE0gU2Fucy01MDA=',
                        '--framer-font-family': '"DM Sans", sans-serif',
                        '--framer-font-weight': '500',
                        '--framer-text-alignment': 'center',
                      },
                      children: 'About',
                    },),
                  },),
                  className: 'framer-ui17t',
                  fonts: ['GF;DM Sans-500',],
                  layoutDependency,
                  layoutId: 'tpe_D3T4J',
                  transformTemplate: transformTemplate2,
                  verticalAlignment: 'top',
                  withExternalLayout: true,
                },),
              ],
            },),
            /* @__PURE__ */ _jsx(motion.div, {
              className: 'framer-12xcw8o',
              'data-highlight': true,
              layoutDependency,
              layoutId: 'NBeh2S8D1',
              onTap: onTap1n0vklw,
            },),
          ],
        },),
      },),
    },),
  },);
},);
var css = [
  '@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }',
  '.framer-PNgVX.framer-1rrmsyy, .framer-PNgVX .framer-1rrmsyy { display: block; }',
  '.framer-PNgVX.framer-zvs2ng { height: 790px; overflow: hidden; position: relative; width: 386px; }',
  '.framer-PNgVX .framer-m3x619 { bottom: 15px; flex: none; height: 81px; left: calc(50.00000000000002% - 364px / 2); overflow: hidden; position: absolute; width: 364px; }',
  '.framer-PNgVX .framer-8xxbcv { aspect-ratio: 0.4888888888888889 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 790px); left: 0px; overflow: visible; position: absolute; right: 0px; top: 0px; }',
  '.framer-PNgVX .framer-1kvxwcl-container { flex: none; height: auto; left: 50%; position: absolute; top: 29px; width: 79px; }',
  '.framer-PNgVX .framer-9ktc76 { cursor: pointer; flex: none; height: 15px; left: calc(48.70466321243526% - 64px / 2); overflow: visible; position: absolute; top: 32px; width: 64px; }',
  '.framer-PNgVX .framer-1q3zebq-container { flex: none; height: 92px; left: calc(50.00000000000002% - 92px / 2); position: absolute; top: 73px; width: 92px; }',
  '.framer-PNgVX .framer-amjntt-container { bottom: 38px; flex: none; height: 37px; position: absolute; right: 72px; width: 37px; }',
  '.framer-PNgVX .framer-algmum-container { bottom: 38px; flex: none; height: 37px; left: calc(49.74093264248707% - 37px / 2); position: absolute; width: 37px; }',
  '.framer-PNgVX .framer-1idwncf-container { bottom: 38px; flex: none; height: 37px; left: 71px; position: absolute; width: 37px; }',
  '.framer-PNgVX .framer-1887mdg-container { flex: none; height: 14px; position: absolute; right: 147px; top: 151px; width: 14px; }',
  '.framer-PNgVX .framer-19t0hd4 { flex: none; height: 18px; left: calc(49.74093264248707% - 209px / 2); position: absolute; top: 176px; white-space: pre-wrap; width: 209px; word-break: break-word; word-wrap: break-word; }',
  '.framer-PNgVX .framer-1g9pk8g { align-content: center; align-items: center; cursor: pointer; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: 42px; justify-content: center; left: calc(49.74093264248707% - 299px / 2); padding: 10px 20px 10px 20px; position: absolute; top: 207px; width: 299px; }',
  '.framer-PNgVX .framer-14e3rxy, .framer-PNgVX .framer-kwtfk7 { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 24px); left: 16px; overflow: visible; position: absolute; top: 50%; width: 24px; z-index: 1; }',
  '.framer-PNgVX .framer-1f9fxrh { flex: none; height: auto; left: 26%; overflow: visible; position: absolute; top: 50%; white-space: pre; width: auto; z-index: 1; }',
  '.framer-PNgVX .framer-be19h3 { align-content: center; align-items: center; cursor: pointer; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: 42px; justify-content: center; left: calc(49.74093264248707% - 299px / 2); padding: 10px 20px 10px 20px; position: absolute; top: 277px; width: 299px; }',
  '.framer-PNgVX .framer-lpq2ae, .framer-PNgVX .framer-igxfxf, .framer-PNgVX .framer-ui17t { flex: none; height: auto; left: 46px; overflow: visible; position: absolute; top: 50%; white-space: pre; width: auto; z-index: 1; }',
  '.framer-PNgVX .framer-169d247 { align-content: center; align-items: center; cursor: pointer; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: 42px; justify-content: center; left: calc(49.74093264248707% - 299px / 2); padding: 10px 20px 10px 20px; position: absolute; top: calc(46.45569620253166% - 42px / 2); width: 299px; }',
  '.framer-PNgVX .framer-7wwfm1, .framer-PNgVX .framer-1q4bua8 { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 24px); left: 14px; overflow: visible; position: absolute; top: 50%; width: 24px; z-index: 1; }',
  '.framer-PNgVX .framer-nyzb4e { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: 42px; justify-content: center; left: calc(49.74093264248707% - 299px / 2); padding: 10px 20px 10px 20px; position: absolute; top: calc(54.81012658227851% - 42px / 2); width: 299px; }',
  '.framer-PNgVX .framer-12xcw8o { cursor: pointer; flex: none; height: 15px; left: calc(48.18652849740935% - 64px / 2); overflow: visible; position: absolute; top: 32px; width: 64px; }',
  '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-PNgVX .framer-1g9pk8g, .framer-PNgVX .framer-be19h3, .framer-PNgVX .framer-169d247, .framer-PNgVX .framer-nyzb4e { gap: 0px; } .framer-PNgVX .framer-1g9pk8g > *, .framer-PNgVX .framer-be19h3 > *, .framer-PNgVX .framer-169d247 > *, .framer-PNgVX .framer-nyzb4e > * { margin: 0px; margin-left: calc(8px / 2); margin-right: calc(8px / 2); } .framer-PNgVX .framer-1g9pk8g > :first-child, .framer-PNgVX .framer-be19h3 > :first-child, .framer-PNgVX .framer-169d247 > :first-child, .framer-PNgVX .framer-nyzb4e > :first-child { margin-left: 0px; } .framer-PNgVX .framer-1g9pk8g > :last-child, .framer-PNgVX .framer-be19h3 > :last-child, .framer-PNgVX .framer-169d247 > :last-child, .framer-PNgVX .framer-nyzb4e > :last-child { margin-right: 0px; } }',
  '.framer-PNgVX[data-border="true"]::after, .framer-PNgVX [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
];
var FramerLrdCUNwC_ = withCSS(Component, css, 'framer-PNgVX',);
var stdin_default = FramerLrdCUNwC_;
FramerLrdCUNwC_.displayName = 'account';
FramerLrdCUNwC_.defaultProps = { height: 790, width: 386, };
addPropertyControls(FramerLrdCUNwC_, {
  uCHkcFF9O: { title: 'Tap', type: ControlType.EventHandler, },
  qVqJLjYKC: { title: 'Tap 2', type: ControlType.EventHandler, },
  fNjFSaX_B: { title: 'Tap 3', type: ControlType.EventHandler, },
  F2SsauX5P: { title: 'Tap 4', type: ControlType.EventHandler, },
  P0Wem0kTv: { title: 'Tap 5', type: ControlType.EventHandler, },
  O6pta1Uek: { title: 'Tap 6', type: ControlType.EventHandler, },
  O29LlUj0x: { title: 'Tap 7', type: ControlType.EventHandler, },
  asIpoNqcE: { title: 'Tap 8', type: ControlType.EventHandler, },
  ysxh8LMBY: { title: 'Tap 9', type: ControlType.EventHandler, },
},);
addFonts(FramerLrdCUNwC_, [
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
      url: 'https://fonts.gstatic.com/s/dmsans/v15/rP2tp2ywxg089UriI5-g4vlH9VoD8CmcqZG40F9JadbnoEwARZthS2f3ZGMZpg.woff2',
      weight: '700',
    }, {
      family: 'DM Sans',
      source: 'google',
      style: 'normal',
      url: 'https://fonts.gstatic.com/s/dmsans/v15/rP2tp2ywxg089UriI5-g4vlH9VoD8CmcqZG40F9JadbnoEwAkJxhS2f3ZGMZpg.woff2',
      weight: '500',
    },],
  },
  ...ClockFonts,
  ...ConicFonts,
  ...IconoirFonts,
], { supportsExplicitInterCodegen: true, },);

// virtual:account
import { WithFramerBreakpoints, } from 'unframer';
import { jsx, } from 'react/jsx-runtime';
stdin_default.Responsive = (props,) => {
  return /* @__PURE__ */ jsx(WithFramerBreakpoints, { Component: stdin_default, ...props, },);
};
var account_default = stdin_default;
export { account_default as default, };
