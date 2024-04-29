/* eslint-disable */
'use client';
import { Conic, } from './chunk-VOFWIACZ.js';
import { Input, } from './chunk-5IVOZXBX.js';
import './chunk-JJFCSOIW.js';
import { Clock, } from './chunk-YQS4D325.js';
import { className, css, fonts, } from './chunk-DCG3Q45P.js';
import { Icon, } from './chunk-NTBY4HVU.js';
import './chunk-ZBBVTMRC.js';

// https :https://framerusercontent.com/modules/jrrEHDdXR7cOsJ4R1iAP/3QhbdFvbenQpWQufbb0f/ShV26ewff.js
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
  Scroll,
  SVG,
  useActiveVariantCallback,
  useComponentViewport,
  useLocaleInfo,
  useVariantState,
  withCSS,
} from 'unframer';
import { LayoutGroup, motion, MotionConfigContext, } from 'unframer';
import * as React from 'react';
var InputFonts = getFonts(Input,);
var ClockFonts = getFonts(Clock,);
var IconoirFonts = getFonts(Icon,);
var ConicFonts = getFonts(Conic,);
var cycleOrder = ['NqPRYqKSV',];
var serializationHash = 'framer-7ricS';
var variantClassNames = { NqPRYqKSV: 'framer-v-1uvfmp7', };
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
    P7BghB_4w: tap3 !== null && tap3 !== void 0 ? tap3 : props.P7BghB_4w,
    RvCbYenvN: tap !== null && tap !== void 0 ? tap : props.RvCbYenvN,
    TnJKJ_iNZ: tap4 !== null && tap4 !== void 0 ? tap4 : props.TnJKJ_iNZ,
    yqKc2EOdU: tap2 !== null && tap2 !== void 0 ? tap2 : props.yqKc2EOdU,
  };
};
var createLayoutDependency = (props, variants,) => variants.join('-',) + props.layoutDependency;
var Component = /* @__PURE__ */ React.forwardRef(function (props, ref,) {
  const { activeLocale, setLocale, } = useLocaleInfo();
  const { style, className: className2, layoutId, variant, RvCbYenvN, yqKc2EOdU, P7BghB_4w, TnJKJ_iNZ, ...restProps } = getProps(props,);
  const { baseVariant, classNames, gestureVariant, setGestureState, setVariant, variants, } = useVariantState({
    cycleOrder,
    defaultVariant: 'NqPRYqKSV',
    variant,
    variantClassNames,
  },);
  const layoutDependency = createLayoutDependency(props, variants,);
  const { activeVariantCallback, delay, } = useActiveVariantCallback(baseVariant,);
  const onTap1mtio4a = activeVariantCallback(async (...args) => {
    if (RvCbYenvN) {
      const res = await RvCbYenvN(...args,);
      if (res === false) {
        return false;
      }
    }
  },);
  const onClickuj7km8 = activeVariantCallback(async (...args) => {
    if (yqKc2EOdU) {
      const res = await yqKc2EOdU(...args,);
      if (res === false) {
        return false;
      }
    }
  },);
  const onClick19ahk8d = activeVariantCallback(async (...args) => {
    if (P7BghB_4w) {
      const res = await P7BghB_4w(...args,);
      if (res === false) {
        return false;
      }
    }
  },);
  const onClick1jx2d92 = activeVariantCallback(async (...args) => {
    if (TnJKJ_iNZ) {
      const res = await TnJKJ_iNZ(...args,);
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
          className: cx(serializationHash, ...sharedStyleClassNames, 'framer-1uvfmp7', className2, classNames,),
          'data-framer-name': 'Variant 1',
          layoutDependency,
          layoutId: 'NqPRYqKSV',
          onHoverEnd: () => setGestureState({ isHovered: false, },),
          onHoverStart: () => setGestureState({ isHovered: true, },),
          onTap: () => setGestureState({ isPressed: false, },),
          onTapCancel: () => setGestureState({ isPressed: false, },),
          onTapStart: () => setGestureState({ isPressed: true, },),
          ref: ref !== null && ref !== void 0 ? ref : ref1,
          style: { backgroundColor: 'rgb(255, 255, 255)', ...style, },
          children: [
            /* @__PURE__ */ _jsx(motion.div, {
              className: 'framer-qvbr9e',
              layoutDependency,
              layoutId: 'NP4yvv5vg',
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
              className: 'framer-yh446t',
              'data-framer-name': 'iphone14pro',
              layoutDependency,
              layoutId: 'UU8FY95EW',
              children: [
                /* @__PURE__ */ _jsx(ComponentViewportProvider, {
                  children: /* @__PURE__ */ _jsx(motion.div, {
                    className: 'framer-sglcq1-container',
                    layoutDependency,
                    layoutId: 'Bc1fe6eSq-container',
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
                      id: 'Bc1fe6eSq',
                      isMixedBorderRadius: false,
                      isRTL: false,
                      keyboard: '',
                      layoutId: 'Bc1fe6eSq',
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
                      placeholder: 'Search',
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
                /* @__PURE__ */ _jsx(ComponentViewportProvider, {
                  children: /* @__PURE__ */ _jsx(motion.div, {
                    className: 'framer-8glp9l-container',
                    layoutDependency,
                    layoutId: 'HRJ7yIpj0-container',
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
                      id: 'HRJ7yIpj0',
                      is12hour: true,
                      layoutId: 'HRJ7yIpj0',
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
                  className: 'framer-pgv34o',
                  'data-highlight': true,
                  layoutDependency,
                  layoutId: 'mCgr2rSrE',
                  onTap: onTap1mtio4a,
                },),
              ],
            },),
            /* @__PURE__ */ _jsx(ComponentViewportProvider, {
              children: /* @__PURE__ */ _jsx(motion.div, {
                className: 'framer-1qegj5x-container',
                'data-framer-name': 'icon-settings',
                layoutDependency,
                layoutId: 'TsN4TWJuz-container',
                name: 'icon-settings',
                children: /* @__PURE__ */ _jsx(Icon, {
                  color: 'rgb(255, 255, 255)',
                  height: '100%',
                  iconSearch: 'settings',
                  iconSelection: 'KeyframesCouple',
                  id: 'TsN4TWJuz',
                  layoutId: 'TsN4TWJuz',
                  mirrored: false,
                  name: 'icon-settings',
                  onClick: onClickuj7km8,
                  selectByList: false,
                  style: { height: '100%', width: '100%', },
                  width: '100%',
                },),
              },),
            },),
            /* @__PURE__ */ _jsx(ComponentViewportProvider, {
              children: /* @__PURE__ */ _jsx(motion.div, {
                className: 'framer-1b01uhk-container',
                'data-framer-name': 'icon-health',
                layoutDependency,
                layoutId: 'LdGfvL3f9-container',
                name: 'icon-health',
                children: /* @__PURE__ */ _jsx(Icon, {
                  color: 'rgb(255, 255, 255)',
                  height: '100%',
                  iconSearch: 'kayframe',
                  iconSelection: 'KeyframesCouple',
                  id: 'LdGfvL3f9',
                  layoutId: 'LdGfvL3f9',
                  mirrored: false,
                  name: 'icon-health',
                  onClick: onClick19ahk8d,
                  selectByList: true,
                  style: { height: '100%', width: '100%', },
                  width: '100%',
                },),
              },),
            },),
            /* @__PURE__ */ _jsx(ComponentViewportProvider, {
              children: /* @__PURE__ */ _jsx(motion.div, {
                className: 'framer-1hobkt9-container',
                'data-framer-name': 'icon-chat',
                layoutDependency,
                layoutId: 'bvGA7ixGd-container',
                name: 'icon-chat',
                children: /* @__PURE__ */ _jsx(Icon, {
                  color: 'rgb(255, 255, 255)',
                  height: '100%',
                  iconSearch: 'chatbubble',
                  iconSelection: 'ChatBubble',
                  id: 'bvGA7ixGd',
                  layoutId: 'bvGA7ixGd',
                  mirrored: false,
                  name: 'icon-chat',
                  onClick: onClick1jx2d92,
                  selectByList: true,
                  style: { height: '100%', width: '100%', },
                  width: '100%',
                },),
              },),
            },),
            /* @__PURE__ */ _jsx(ComponentViewportProvider, {
              children: /* @__PURE__ */ _jsx(Scroll, {
                __fromCanvasComponent: true,
                __fromCodeComponentNode: true,
                _border: {},
                background: null,
                className: 'framer-s3kelo',
                contentOffsetX: 0,
                contentOffsetY: 0,
                direction: 'vertical',
                directionLock: true,
                dragEnabled: true,
                layoutDependency,
                layoutId: 'fEzfD6hsL',
                native: true,
                overdragEnabled: false,
                resetOffset: false,
                scrollBarVisible: false,
                wheelEnabled: true,
                children: /* @__PURE__ */ _jsxs(motion.div, {
                  className: 'framer-1lljz7a',
                  'data-framer-name': 'scroll-chat1',
                  layoutDependency,
                  layoutId: 'm9jk6_TXx',
                  style: { backgroundColor: 'rgb(255, 255, 255)', },
                  children: [
                    /* @__PURE__ */ _jsxs(motion.div, {
                      className: 'framer-1arz0p4',
                      'data-highlight': true,
                      layoutDependency,
                      layoutId: 'Ir0KroMry',
                      style: { backgroundColor: 'rgb(255, 255, 255)', },
                      children: [
                        /* @__PURE__ */ _jsx(RichText, {
                          __fromCanvasComponent: true,
                          children: /* @__PURE__ */ _jsx(React.Fragment, {
                            children: /* @__PURE__ */ _jsx(motion.h1, {
                              className: 'framer-styles-preset-ame1jg',
                              'data-styles-preset': 'e81t2mHNr',
                              children: 'CurryEater',
                            },),
                          },),
                          className: 'framer-1fyqsgw',
                          fonts: ['Inter',],
                          layoutDependency,
                          layoutId: 'A8IuL7NYw',
                          style: { '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', },
                          verticalAlignment: 'top',
                          withExternalLayout: true,
                        },),
                        /* @__PURE__ */ _jsx(RichText, {
                          __fromCanvasComponent: true,
                          children: /* @__PURE__ */ _jsx(React.Fragment, {
                            children: /* @__PURE__ */ _jsx(motion.h1, {
                              style: {
                                '--font-selector': 'R0Y7RE0gU2Fucy0zMDA=',
                                '--framer-font-family': '"DM Sans", "DM Sans Placeholder", sans-serif',
                                '--framer-font-size': '14px',
                                '--framer-font-weight': '300',
                                '--framer-text-alignment': 'right',
                                '--framer-text-color': 'var(--extracted-gdpscs, rgb(156, 156, 156))',
                              },
                              children: 'just now',
                            },),
                          },),
                          className: 'framer-11h1ta7',
                          fonts: ['GF;DM Sans-300',],
                          layoutDependency,
                          layoutId: 'yhFF_7uMm',
                          style: {
                            '--extracted-gdpscs': 'rgb(156, 156, 156)',
                            '--framer-link-text-color': 'rgb(0, 153, 255)',
                            '--framer-link-text-decoration': 'underline',
                          },
                          verticalAlignment: 'top',
                          withExternalLayout: true,
                        },),
                        /* @__PURE__ */ _jsx(RichText, {
                          __fromCanvasComponent: true,
                          children: /* @__PURE__ */ _jsx(React.Fragment, {
                            children: /* @__PURE__ */ _jsx(motion.h1, {
                              style: {
                                '--font-selector': 'R0Y7RE0gU2Fucy1yZWd1bGFy',
                                '--framer-font-family': '"DM Sans", "DM Sans Placeholder", sans-serif',
                                '--framer-font-size': '14px',
                                '--framer-text-alignment': 'left',
                                '--framer-text-color': 'var(--extracted-gdpscs, rgb(156, 156, 156))',
                              },
                              children: 'Oh hi again!',
                            },),
                          },),
                          className: 'framer-13d9u7u',
                          fonts: ['GF;DM Sans-regular',],
                          layoutDependency,
                          layoutId: 'ZEfNNB8o3',
                          style: {
                            '--extracted-gdpscs': 'rgb(156, 156, 156)',
                            '--framer-link-text-color': 'rgb(0, 153, 255)',
                            '--framer-link-text-decoration': 'underline',
                          },
                          verticalAlignment: 'top',
                          withExternalLayout: true,
                        },),
                        /* @__PURE__ */ _jsx(ComponentViewportProvider, {
                          children: /* @__PURE__ */ _jsx(motion.div, {
                            className: 'framer-16bai8l-container',
                            layoutDependency,
                            layoutId: 'QQxVDkw06-container',
                            children: /* @__PURE__ */ _jsx(Conic, {
                              blur: 8,
                              colors: ['rgb(0, 255, 255)', 'rgb(255, 0, 255)', 'rgb(255, 255, 0)', 'rgb(0, 255, 255)',],
                              from: 0,
                              height: '100%',
                              id: 'QQxVDkw06',
                              layoutId: 'QQxVDkw06',
                              radius: 126,
                              style: { height: '100%', width: '100%', },
                              width: '100%',
                              xPos: 91,
                              yPos: 50,
                            },),
                          },),
                        },),
                        /* @__PURE__ */ _jsx(SVG, {
                          className: 'framer-1hcq04x',
                          layout: 'position',
                          layoutDependency,
                          layoutId: 'WfFxa47Ch',
                          opacity: 1,
                          svg:
                            '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 249 2"><path d="M 0.5 0.5 L 248 0.5" fill="transparent" stroke="#AAA"></path></svg>',
                          svgContentId: 299392219,
                          withExternalLayout: true,
                        },),
                        /* @__PURE__ */ _jsx(SVG, {
                          className: 'framer-ayy49t',
                          layout: 'position',
                          layoutDependency,
                          layoutId: 'H07KbPT5_',
                          opacity: 1,
                          svg:
                            '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 7 11"><path d="M 0.5 0.5 L 6.5 5 L 0.5 10" fill="transparent" stroke="#AAA"></path></svg>',
                          svgContentId: 3388095525,
                          withExternalLayout: true,
                        },),
                      ],
                    },),
                    /* @__PURE__ */ _jsxs(motion.div, {
                      className: 'framer-1ngquee',
                      'data-highlight': true,
                      layoutDependency,
                      layoutId: 'gSiQRvYlt',
                      style: { backgroundColor: 'rgb(255, 255, 255)', },
                      children: [
                        /* @__PURE__ */ _jsx(RichText, {
                          __fromCanvasComponent: true,
                          children: /* @__PURE__ */ _jsx(React.Fragment, {
                            children: /* @__PURE__ */ _jsx(motion.h1, {
                              className: 'framer-styles-preset-ame1jg',
                              'data-styles-preset': 'e81t2mHNr',
                              children: 'Amber',
                            },),
                          },),
                          className: 'framer-cvaslu',
                          fonts: ['Inter',],
                          layoutDependency,
                          layoutId: 'wqVUvYlB7',
                          style: { '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', },
                          verticalAlignment: 'top',
                          withExternalLayout: true,
                        },),
                        /* @__PURE__ */ _jsx(RichText, {
                          __fromCanvasComponent: true,
                          children: /* @__PURE__ */ _jsx(React.Fragment, {
                            children: /* @__PURE__ */ _jsx(motion.h1, {
                              style: {
                                '--font-selector': 'R0Y7RE0gU2Fucy1yZWd1bGFy',
                                '--framer-font-family': '"DM Sans", "DM Sans Placeholder", sans-serif',
                                '--framer-font-size': '14px',
                                '--framer-text-alignment': 'left',
                                '--framer-text-color': 'var(--extracted-gdpscs, rgb(156, 156, 156))',
                              },
                              children: '[image]',
                            },),
                          },),
                          className: 'framer-klll17',
                          fonts: ['GF;DM Sans-regular',],
                          layoutDependency,
                          layoutId: 'd6tqYy6pm',
                          style: {
                            '--extracted-gdpscs': 'rgb(156, 156, 156)',
                            '--framer-link-text-color': 'rgb(0, 153, 255)',
                            '--framer-link-text-decoration': 'underline',
                          },
                          verticalAlignment: 'top',
                          withExternalLayout: true,
                        },),
                        /* @__PURE__ */ _jsx(ComponentViewportProvider, {
                          children: /* @__PURE__ */ _jsx(motion.div, {
                            className: 'framer-9r82ur-container',
                            layoutDependency,
                            layoutId: 'MBHUnthyp-container',
                            children: /* @__PURE__ */ _jsx(Conic, {
                              blur: 8,
                              colors: ['rgb(255, 0, 255)', 'rgb(255, 255, 0)', 'rgb(0, 255, 255)', 'rgb(84, 170, 227)',],
                              from: 0,
                              height: '100%',
                              id: 'MBHUnthyp',
                              layoutId: 'MBHUnthyp',
                              radius: 126,
                              style: { height: '100%', width: '100%', },
                              width: '100%',
                              xPos: 91,
                              yPos: 50,
                            },),
                          },),
                        },),
                        /* @__PURE__ */ _jsx(RichText, {
                          __fromCanvasComponent: true,
                          children: /* @__PURE__ */ _jsx(React.Fragment, {
                            children: /* @__PURE__ */ _jsx(motion.h1, {
                              style: {
                                '--font-selector': 'R0Y7RE0gU2Fucy0zMDA=',
                                '--framer-font-family': '"DM Sans", "DM Sans Placeholder", sans-serif',
                                '--framer-font-size': '14px',
                                '--framer-font-weight': '300',
                                '--framer-text-alignment': 'right',
                                '--framer-text-color': 'var(--extracted-gdpscs, rgb(156, 156, 156))',
                              },
                              children: '11:53am',
                            },),
                          },),
                          className: 'framer-1frz9jb',
                          fonts: ['GF;DM Sans-300',],
                          layoutDependency,
                          layoutId: 's3hFuFR3b',
                          style: {
                            '--extracted-gdpscs': 'rgb(156, 156, 156)',
                            '--framer-link-text-color': 'rgb(0, 153, 255)',
                            '--framer-link-text-decoration': 'underline',
                          },
                          verticalAlignment: 'top',
                          withExternalLayout: true,
                        },),
                        /* @__PURE__ */ _jsx(SVG, {
                          className: 'framer-1rsod9i',
                          layout: 'position',
                          layoutDependency,
                          layoutId: 'Gz3WJG4n5',
                          opacity: 1,
                          svg:
                            '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 249 2"><path d="M 0.5 0.5 L 248 0.5" fill="transparent" stroke="#AAA"></path></svg>',
                          svgContentId: 299392219,
                          withExternalLayout: true,
                        },),
                        /* @__PURE__ */ _jsx(SVG, {
                          className: 'framer-1qgu9cc',
                          layout: 'position',
                          layoutDependency,
                          layoutId: 'yWo32Y3sx',
                          opacity: 1,
                          svg:
                            '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 7 11"><path d="M 0.5 0.5 L 6.5 5 L 0.5 10" fill="transparent" stroke="#AAA"></path></svg>',
                          svgContentId: 3388095525,
                          withExternalLayout: true,
                        },),
                      ],
                    },),
                    /* @__PURE__ */ _jsxs(motion.div, {
                      className: 'framer-sesnee',
                      layoutDependency,
                      layoutId: 'czXDmHY8y',
                      style: { backgroundColor: 'rgb(255, 255, 255)', },
                      children: [
                        /* @__PURE__ */ _jsx(RichText, {
                          __fromCanvasComponent: true,
                          children: /* @__PURE__ */ _jsx(React.Fragment, {
                            children: /* @__PURE__ */ _jsx(motion.h1, {
                              className: 'framer-styles-preset-ame1jg',
                              'data-styles-preset': 'e81t2mHNr',
                              children: 'Bruno',
                            },),
                          },),
                          className: 'framer-157s1or',
                          fonts: ['Inter',],
                          layoutDependency,
                          layoutId: 'FsBsNHNIt',
                          style: { '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', },
                          verticalAlignment: 'top',
                          withExternalLayout: true,
                        },),
                        /* @__PURE__ */ _jsx(RichText, {
                          __fromCanvasComponent: true,
                          children: /* @__PURE__ */ _jsx(React.Fragment, {
                            children: /* @__PURE__ */ _jsx(motion.h1, {
                              style: {
                                '--font-selector': 'R0Y7RE0gU2Fucy1yZWd1bGFy',
                                '--framer-font-family': '"DM Sans", "DM Sans Placeholder", sans-serif',
                                '--framer-font-size': '14px',
                                '--framer-text-alignment': 'left',
                                '--framer-text-color': 'var(--extracted-gdpscs, rgb(156, 156, 156))',
                              },
                              children: 'What did you eat for\u2026',
                            },),
                          },),
                          className: 'framer-1wdka8u',
                          fonts: ['GF;DM Sans-regular',],
                          layoutDependency,
                          layoutId: 'JXrHbkkfg',
                          style: {
                            '--extracted-gdpscs': 'rgb(156, 156, 156)',
                            '--framer-link-text-color': 'rgb(0, 153, 255)',
                            '--framer-link-text-decoration': 'underline',
                          },
                          verticalAlignment: 'top',
                          withExternalLayout: true,
                        },),
                        /* @__PURE__ */ _jsx(motion.div, {
                          className: 'framer-tcxfue',
                          layoutDependency,
                          layoutId: 'u5PnLJfSt',
                          style: { filter: 'grayscale(1)', WebkitFilter: 'grayscale(1)', },
                          children: /* @__PURE__ */ _jsx(ComponentViewportProvider, {
                            children: /* @__PURE__ */ _jsx(motion.div, {
                              className: 'framer-cwc3xf-container',
                              layoutDependency,
                              layoutId: 'M1TpS_O7e-container',
                              children: /* @__PURE__ */ _jsx(Conic, {
                                blur: 8,
                                colors: ['rgb(0, 255, 255)', 'rgb(84, 170, 227)', 'rgb(235, 247, 255)', 'rgb(147, 142, 57)',],
                                from: 0,
                                height: '100%',
                                id: 'M1TpS_O7e',
                                layoutId: 'M1TpS_O7e',
                                radius: 126,
                                style: { height: '100%', width: '100%', },
                                width: '100%',
                                xPos: 66,
                                yPos: 50,
                              },),
                            },),
                          },),
                        },),
                        /* @__PURE__ */ _jsx(RichText, {
                          __fromCanvasComponent: true,
                          children: /* @__PURE__ */ _jsx(React.Fragment, {
                            children: /* @__PURE__ */ _jsx(motion.h1, {
                              style: {
                                '--font-selector': 'R0Y7RE0gU2Fucy0zMDA=',
                                '--framer-font-family': '"DM Sans", "DM Sans Placeholder", sans-serif',
                                '--framer-font-size': '14px',
                                '--framer-font-weight': '300',
                                '--framer-text-alignment': 'right',
                                '--framer-text-color': 'var(--extracted-gdpscs, rgb(156, 156, 156))',
                              },
                              children: '8:29am',
                            },),
                          },),
                          className: 'framer-14wawa0',
                          fonts: ['GF;DM Sans-300',],
                          layoutDependency,
                          layoutId: 'HvKBvQwhm',
                          style: {
                            '--extracted-gdpscs': 'rgb(156, 156, 156)',
                            '--framer-link-text-color': 'rgb(0, 153, 255)',
                            '--framer-link-text-decoration': 'underline',
                          },
                          verticalAlignment: 'top',
                          withExternalLayout: true,
                        },),
                        /* @__PURE__ */ _jsx(SVG, {
                          className: 'framer-5oq03v',
                          layout: 'position',
                          layoutDependency,
                          layoutId: 'S0L9w5Lf5',
                          opacity: 1,
                          svg:
                            '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 249 2"><path d="M 0.5 0.5 L 248 0.5" fill="transparent" stroke="#AAA"></path></svg>',
                          svgContentId: 299392219,
                          withExternalLayout: true,
                        },),
                        /* @__PURE__ */ _jsx(SVG, {
                          className: 'framer-m7wmag',
                          layout: 'position',
                          layoutDependency,
                          layoutId: 'CQU9sNSrW',
                          opacity: 1,
                          svg:
                            '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 7 11"><path d="M 0.5 0.5 L 6.5 5 L 0.5 10" fill="transparent" stroke="#AAA"></path></svg>',
                          svgContentId: 3388095525,
                          withExternalLayout: true,
                        },),
                      ],
                    },),
                    /* @__PURE__ */ _jsxs(motion.div, {
                      className: 'framer-1si7pyb',
                      layoutDependency,
                      layoutId: 'Lbolsdced',
                      style: { backgroundColor: 'rgb(255, 255, 255)', },
                      children: [
                        /* @__PURE__ */ _jsx(RichText, {
                          __fromCanvasComponent: true,
                          children: /* @__PURE__ */ _jsx(React.Fragment, {
                            children: /* @__PURE__ */ _jsx(motion.h1, {
                              className: 'framer-styles-preset-ame1jg',
                              'data-styles-preset': 'e81t2mHNr',
                              children: 'Hazel',
                            },),
                          },),
                          className: 'framer-1md6xwu',
                          fonts: ['Inter',],
                          layoutDependency,
                          layoutId: 'wAtESNpmi',
                          style: { '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', },
                          verticalAlignment: 'top',
                          withExternalLayout: true,
                        },),
                        /* @__PURE__ */ _jsx(RichText, {
                          __fromCanvasComponent: true,
                          children: /* @__PURE__ */ _jsx(React.Fragment, {
                            children: /* @__PURE__ */ _jsx(motion.h1, {
                              style: {
                                '--font-selector': 'R0Y7RE0gU2Fucy1yZWd1bGFy',
                                '--framer-font-family': '"DM Sans", "DM Sans Placeholder", sans-serif',
                                '--framer-font-size': '14px',
                                '--framer-text-alignment': 'left',
                                '--framer-text-color': 'var(--extracted-gdpscs, rgb(156, 156, 156))',
                              },
                              children: 'Congratulations!',
                            },),
                          },),
                          className: 'framer-zkshon',
                          fonts: ['GF;DM Sans-regular',],
                          layoutDependency,
                          layoutId: 'Ozvyj50MJ',
                          style: {
                            '--extracted-gdpscs': 'rgb(156, 156, 156)',
                            '--framer-link-text-color': 'rgb(0, 153, 255)',
                            '--framer-link-text-decoration': 'underline',
                          },
                          verticalAlignment: 'top',
                          withExternalLayout: true,
                        },),
                        /* @__PURE__ */ _jsx(ComponentViewportProvider, {
                          children: /* @__PURE__ */ _jsx(motion.div, {
                            className: 'framer-13dyvvc-container',
                            layoutDependency,
                            layoutId: 'ep8XFtGmj-container',
                            children: /* @__PURE__ */ _jsx(Conic, {
                              blur: 8,
                              colors: ['rgb(84, 170, 227)', 'rgb(235, 247, 255)', 'rgb(147, 142, 57)', 'rgb(250, 51, 134)',],
                              from: 0,
                              height: '100%',
                              id: 'ep8XFtGmj',
                              layoutId: 'ep8XFtGmj',
                              radius: 126,
                              style: { height: '100%', width: '100%', },
                              width: '100%',
                              xPos: 66,
                              yPos: 50,
                            },),
                          },),
                        },),
                        /* @__PURE__ */ _jsx(RichText, {
                          __fromCanvasComponent: true,
                          children: /* @__PURE__ */ _jsx(React.Fragment, {
                            children: /* @__PURE__ */ _jsx(motion.h1, {
                              style: {
                                '--font-selector': 'R0Y7RE0gU2Fucy0zMDA=',
                                '--framer-font-family': '"DM Sans", "DM Sans Placeholder", sans-serif',
                                '--framer-font-size': '14px',
                                '--framer-font-weight': '300',
                                '--framer-text-alignment': 'right',
                                '--framer-text-color': 'var(--extracted-gdpscs, rgb(156, 156, 156))',
                              },
                              children: '7/20/23',
                            },),
                          },),
                          className: 'framer-ll06uj',
                          fonts: ['GF;DM Sans-300',],
                          layoutDependency,
                          layoutId: 'fBWOHvoZB',
                          style: {
                            '--extracted-gdpscs': 'rgb(156, 156, 156)',
                            '--framer-link-text-color': 'rgb(0, 153, 255)',
                            '--framer-link-text-decoration': 'underline',
                          },
                          verticalAlignment: 'top',
                          withExternalLayout: true,
                        },),
                        /* @__PURE__ */ _jsx(SVG, {
                          className: 'framer-1mylx8f',
                          layout: 'position',
                          layoutDependency,
                          layoutId: 'No3NJXVOA',
                          opacity: 1,
                          svg:
                            '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 249 2"><path d="M 0.5 0.5 L 248 0.5" fill="transparent" stroke="#AAA"></path></svg>',
                          svgContentId: 299392219,
                          withExternalLayout: true,
                        },),
                        /* @__PURE__ */ _jsx(SVG, {
                          className: 'framer-1ndaots',
                          layout: 'position',
                          layoutDependency,
                          layoutId: 'qFjrP2NaY',
                          opacity: 1,
                          svg:
                            '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 7 11"><path d="M 0.5 0.5 L 6.5 5 L 0.5 10" fill="transparent" stroke="#AAA"></path></svg>',
                          svgContentId: 3388095525,
                          withExternalLayout: true,
                        },),
                      ],
                    },),
                    /* @__PURE__ */ _jsxs(motion.div, {
                      className: 'framer-1vb68q0',
                      layoutDependency,
                      layoutId: 'y7D7p3ASd',
                      style: { backgroundColor: 'rgb(255, 255, 255)', },
                      children: [
                        /* @__PURE__ */ _jsx(RichText, {
                          __fromCanvasComponent: true,
                          children: /* @__PURE__ */ _jsx(React.Fragment, {
                            children: /* @__PURE__ */ _jsx(motion.h1, {
                              className: 'framer-styles-preset-ame1jg',
                              'data-styles-preset': 'e81t2mHNr',
                              children: 'Sienna',
                            },),
                          },),
                          className: 'framer-llbux8',
                          fonts: ['Inter',],
                          layoutDependency,
                          layoutId: 'lwDLJ3NbB',
                          style: { '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', },
                          verticalAlignment: 'top',
                          withExternalLayout: true,
                        },),
                        /* @__PURE__ */ _jsx(RichText, {
                          __fromCanvasComponent: true,
                          children: /* @__PURE__ */ _jsx(React.Fragment, {
                            children: /* @__PURE__ */ _jsx(motion.h1, {
                              style: {
                                '--font-selector': 'R0Y7RE0gU2Fucy1yZWd1bGFy',
                                '--framer-font-family': '"DM Sans", "DM Sans Placeholder", sans-serif',
                                '--framer-font-size': '14px',
                                '--framer-text-alignment': 'left',
                                '--framer-text-color': 'var(--extracted-gdpscs, rgb(156, 156, 156))',
                              },
                              children: 'Small yellow river\u2026',
                            },),
                          },),
                          className: 'framer-1iy44no',
                          fonts: ['GF;DM Sans-regular',],
                          layoutDependency,
                          layoutId: 'OWD7eq1DG',
                          style: {
                            '--extracted-gdpscs': 'rgb(156, 156, 156)',
                            '--framer-link-text-color': 'rgb(0, 153, 255)',
                            '--framer-link-text-decoration': 'underline',
                          },
                          verticalAlignment: 'top',
                          withExternalLayout: true,
                        },),
                        /* @__PURE__ */ _jsx(ComponentViewportProvider, {
                          children: /* @__PURE__ */ _jsx(motion.div, {
                            className: 'framer-10y9c1n-container',
                            layoutDependency,
                            layoutId: 'sJD_NhCv5-container',
                            children: /* @__PURE__ */ _jsx(Conic, {
                              blur: 8,
                              colors: ['rgb(84, 170, 227)', 'rgb(235, 247, 255)', 'rgb(143, 58, 212)', 'rgb(250, 51, 134)',],
                              from: 0,
                              height: '100%',
                              id: 'sJD_NhCv5',
                              layoutId: 'sJD_NhCv5',
                              radius: 126,
                              style: { height: '100%', width: '100%', },
                              width: '100%',
                              xPos: 84,
                              yPos: 86,
                            },),
                          },),
                        },),
                        /* @__PURE__ */ _jsx(RichText, {
                          __fromCanvasComponent: true,
                          children: /* @__PURE__ */ _jsx(React.Fragment, {
                            children: /* @__PURE__ */ _jsx(motion.h1, {
                              style: {
                                '--font-selector': 'R0Y7RE0gU2Fucy0zMDA=',
                                '--framer-font-family': '"DM Sans", "DM Sans Placeholder", sans-serif',
                                '--framer-font-size': '14px',
                                '--framer-font-weight': '300',
                                '--framer-text-alignment': 'right',
                                '--framer-text-color': 'var(--extracted-gdpscs, rgb(156, 156, 156))',
                              },
                              children: '7/19/23',
                            },),
                          },),
                          className: 'framer-e4iuk5',
                          fonts: ['GF;DM Sans-300',],
                          layoutDependency,
                          layoutId: 'RYjPo8hBO',
                          style: {
                            '--extracted-gdpscs': 'rgb(156, 156, 156)',
                            '--framer-link-text-color': 'rgb(0, 153, 255)',
                            '--framer-link-text-decoration': 'underline',
                          },
                          verticalAlignment: 'top',
                          withExternalLayout: true,
                        },),
                        /* @__PURE__ */ _jsx(SVG, {
                          className: 'framer-7o4s2m',
                          layout: 'position',
                          layoutDependency,
                          layoutId: 'y57lxRo3H',
                          opacity: 1,
                          svg:
                            '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 249 2"><path d="M 0.5 0.5 L 248 0.5" fill="transparent" stroke="#AAA"></path></svg>',
                          svgContentId: 299392219,
                          withExternalLayout: true,
                        },),
                        /* @__PURE__ */ _jsx(SVG, {
                          className: 'framer-1w1g16r',
                          layout: 'position',
                          layoutDependency,
                          layoutId: 'SZ_IUNrly',
                          opacity: 1,
                          svg:
                            '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 7 11"><path d="M 0.5 0.5 L 6.5 5 L 0.5 10" fill="transparent" stroke="#AAA"></path></svg>',
                          svgContentId: 3388095525,
                          withExternalLayout: true,
                        },),
                      ],
                    },),
                    /* @__PURE__ */ _jsxs(motion.div, {
                      className: 'framer-flr35',
                      layoutDependency,
                      layoutId: 'AUhOO44AJ',
                      style: { backgroundColor: 'rgb(255, 255, 255)', },
                      children: [
                        /* @__PURE__ */ _jsx(RichText, {
                          __fromCanvasComponent: true,
                          children: /* @__PURE__ */ _jsx(React.Fragment, {
                            children: /* @__PURE__ */ _jsx(motion.h1, {
                              className: 'framer-styles-preset-ame1jg',
                              'data-styles-preset': 'e81t2mHNr',
                              children: 'Rusty',
                            },),
                          },),
                          className: 'framer-iltydz',
                          fonts: ['Inter',],
                          layoutDependency,
                          layoutId: 'sBtBJOrCW',
                          style: { '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', },
                          verticalAlignment: 'top',
                          withExternalLayout: true,
                        },),
                        /* @__PURE__ */ _jsx(RichText, {
                          __fromCanvasComponent: true,
                          children: /* @__PURE__ */ _jsx(React.Fragment, {
                            children: /* @__PURE__ */ _jsx(motion.h1, {
                              style: {
                                '--font-selector': 'R0Y7RE0gU2Fucy1yZWd1bGFy',
                                '--framer-font-family': '"DM Sans", "DM Sans Placeholder", sans-serif',
                                '--framer-font-size': '14px',
                                '--framer-text-alignment': 'left',
                                '--framer-text-color': 'var(--extracted-gdpscs, rgb(156, 156, 156))',
                              },
                              children: 'Hey quick question\u2026',
                            },),
                          },),
                          className: 'framer-1f7zien',
                          fonts: ['GF;DM Sans-regular',],
                          layoutDependency,
                          layoutId: 'iRFfZqV57',
                          style: {
                            '--extracted-gdpscs': 'rgb(156, 156, 156)',
                            '--framer-link-text-color': 'rgb(0, 153, 255)',
                            '--framer-link-text-decoration': 'underline',
                          },
                          verticalAlignment: 'top',
                          withExternalLayout: true,
                        },),
                        /* @__PURE__ */ _jsx(motion.div, {
                          className: 'framer-1ec599f',
                          layoutDependency,
                          layoutId: 'bcs9mJBoE',
                          style: { filter: 'grayscale(1)', WebkitFilter: 'grayscale(1)', },
                          children: /* @__PURE__ */ _jsx(ComponentViewportProvider, {
                            children: /* @__PURE__ */ _jsx(motion.div, {
                              className: 'framer-3yirid-container',
                              layoutDependency,
                              layoutId: 'eTKX2M7PB-container',
                              children: /* @__PURE__ */ _jsx(Conic, {
                                blur: 8,
                                colors: ['rgb(250, 51, 134)', 'rgb(10, 145, 235)', 'rgb(255, 204, 0)',],
                                from: 0,
                                height: '100%',
                                id: 'eTKX2M7PB',
                                layoutId: 'eTKX2M7PB',
                                radius: 126,
                                style: { height: '100%', width: '100%', },
                                width: '100%',
                                xPos: 84,
                                yPos: 86,
                              },),
                            },),
                          },),
                        },),
                        /* @__PURE__ */ _jsx(RichText, {
                          __fromCanvasComponent: true,
                          children: /* @__PURE__ */ _jsx(React.Fragment, {
                            children: /* @__PURE__ */ _jsx(motion.h1, {
                              style: {
                                '--font-selector': 'R0Y7RE0gU2Fucy0zMDA=',
                                '--framer-font-family': '"DM Sans", "DM Sans Placeholder", sans-serif',
                                '--framer-font-size': '14px',
                                '--framer-font-weight': '300',
                                '--framer-text-alignment': 'right',
                                '--framer-text-color': 'var(--extracted-gdpscs, rgb(156, 156, 156))',
                              },
                              children: '7/19/23',
                            },),
                          },),
                          className: 'framer-1wnr63g',
                          fonts: ['GF;DM Sans-300',],
                          layoutDependency,
                          layoutId: 'NI7RyZpjr',
                          style: {
                            '--extracted-gdpscs': 'rgb(156, 156, 156)',
                            '--framer-link-text-color': 'rgb(0, 153, 255)',
                            '--framer-link-text-decoration': 'underline',
                          },
                          verticalAlignment: 'top',
                          withExternalLayout: true,
                        },),
                        /* @__PURE__ */ _jsx(SVG, {
                          className: 'framer-jmrvq5',
                          layout: 'position',
                          layoutDependency,
                          layoutId: 'shLoz1t5l',
                          opacity: 1,
                          svg:
                            '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 249 2"><path d="M 0.5 0.5 L 248 0.5" fill="transparent" stroke="#AAA"></path></svg>',
                          svgContentId: 299392219,
                          withExternalLayout: true,
                        },),
                        /* @__PURE__ */ _jsx(SVG, {
                          className: 'framer-1g75fy7',
                          layout: 'position',
                          layoutDependency,
                          layoutId: 'RMfsBKyAX',
                          opacity: 1,
                          svg:
                            '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 7 11"><path d="M 0.5 0.5 L 6.5 5 L 0.5 10" fill="transparent" stroke="#AAA"></path></svg>',
                          svgContentId: 3388095525,
                          withExternalLayout: true,
                        },),
                      ],
                    },),
                    /* @__PURE__ */ _jsxs(motion.div, {
                      className: 'framer-1f06ect',
                      layoutDependency,
                      layoutId: 'wGgF7T2Q9',
                      style: { backgroundColor: 'rgb(255, 255, 255)', },
                      children: [
                        /* @__PURE__ */ _jsx(RichText, {
                          __fromCanvasComponent: true,
                          children: /* @__PURE__ */ _jsx(React.Fragment, {
                            children: /* @__PURE__ */ _jsx(motion.h1, {
                              className: 'framer-styles-preset-ame1jg',
                              'data-styles-preset': 'e81t2mHNr',
                              children: 'Cinnamon',
                            },),
                          },),
                          className: 'framer-1m4kqpd',
                          fonts: ['Inter',],
                          layoutDependency,
                          layoutId: 'XDpIlcBq8',
                          style: { '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', },
                          verticalAlignment: 'top',
                          withExternalLayout: true,
                        },),
                        /* @__PURE__ */ _jsx(RichText, {
                          __fromCanvasComponent: true,
                          children: /* @__PURE__ */ _jsx(React.Fragment, {
                            children: /* @__PURE__ */ _jsx(motion.h1, {
                              style: {
                                '--font-selector': 'R0Y7RE0gU2Fucy1yZWd1bGFy',
                                '--framer-font-family': '"DM Sans", "DM Sans Placeholder", sans-serif',
                                '--framer-font-size': '14px',
                                '--framer-text-alignment': 'left',
                                '--framer-text-color': 'var(--extracted-gdpscs, rgb(156, 156, 156))',
                              },
                              children: 'How do you think of\u2026',
                            },),
                          },),
                          className: 'framer-1nwbz61',
                          fonts: ['GF;DM Sans-regular',],
                          layoutDependency,
                          layoutId: 'V4cGeG9rG',
                          style: {
                            '--extracted-gdpscs': 'rgb(156, 156, 156)',
                            '--framer-link-text-color': 'rgb(0, 153, 255)',
                            '--framer-link-text-decoration': 'underline',
                          },
                          verticalAlignment: 'top',
                          withExternalLayout: true,
                        },),
                        /* @__PURE__ */ _jsx(ComponentViewportProvider, {
                          children: /* @__PURE__ */ _jsx(motion.div, {
                            className: 'framer-1nrs70n-container',
                            layoutDependency,
                            layoutId: 'r1jgvPELz-container',
                            children: /* @__PURE__ */ _jsx(Conic, {
                              blur: 8,
                              colors: ['rgb(84, 170, 227)', 'rgb(250, 51, 134)', 'rgb(253, 204, 255)',],
                              from: 0,
                              height: '100%',
                              id: 'r1jgvPELz',
                              layoutId: 'r1jgvPELz',
                              radius: 126,
                              style: { height: '100%', width: '100%', },
                              width: '100%',
                              xPos: 84,
                              yPos: 86,
                            },),
                          },),
                        },),
                        /* @__PURE__ */ _jsx(RichText, {
                          __fromCanvasComponent: true,
                          children: /* @__PURE__ */ _jsx(React.Fragment, {
                            children: /* @__PURE__ */ _jsx(motion.h1, {
                              style: {
                                '--font-selector': 'R0Y7RE0gU2Fucy0zMDA=',
                                '--framer-font-family': '"DM Sans", "DM Sans Placeholder", sans-serif',
                                '--framer-font-size': '14px',
                                '--framer-font-weight': '300',
                                '--framer-text-alignment': 'right',
                                '--framer-text-color': 'var(--extracted-gdpscs, rgb(156, 156, 156))',
                              },
                              children: '7/18/23',
                            },),
                          },),
                          className: 'framer-1nsk6er',
                          fonts: ['GF;DM Sans-300',],
                          layoutDependency,
                          layoutId: 'RRqO4Y76o',
                          style: {
                            '--extracted-gdpscs': 'rgb(156, 156, 156)',
                            '--framer-link-text-color': 'rgb(0, 153, 255)',
                            '--framer-link-text-decoration': 'underline',
                          },
                          verticalAlignment: 'top',
                          withExternalLayout: true,
                        },),
                        /* @__PURE__ */ _jsx(SVG, {
                          className: 'framer-uychix',
                          layout: 'position',
                          layoutDependency,
                          layoutId: 'TdmyHk_Pc',
                          opacity: 1,
                          svg:
                            '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 249 2"><path d="M 0.5 0.5 L 248 0.5" fill="transparent" stroke="#AAA"></path></svg>',
                          svgContentId: 299392219,
                          withExternalLayout: true,
                        },),
                        /* @__PURE__ */ _jsx(SVG, {
                          className: 'framer-ujyihl',
                          layout: 'position',
                          layoutDependency,
                          layoutId: 'bWES00ojF',
                          opacity: 1,
                          svg:
                            '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 7 11"><path d="M 0.5 0.5 L 6.5 5 L 0.5 10" fill="transparent" stroke="#AAA"></path></svg>',
                          svgContentId: 3388095525,
                          withExternalLayout: true,
                        },),
                      ],
                    },),
                    /* @__PURE__ */ _jsxs(motion.div, {
                      className: 'framer-1exja0p',
                      layoutDependency,
                      layoutId: 'wAvvhxPyX',
                      style: { backgroundColor: 'rgb(255, 255, 255)', },
                      children: [
                        /* @__PURE__ */ _jsx(RichText, {
                          __fromCanvasComponent: true,
                          children: /* @__PURE__ */ _jsx(React.Fragment, {
                            children: /* @__PURE__ */ _jsx(motion.h1, {
                              className: 'framer-styles-preset-ame1jg',
                              'data-styles-preset': 'e81t2mHNr',
                              children: 'Maroon',
                            },),
                          },),
                          className: 'framer-2wdwdy',
                          fonts: ['Inter',],
                          layoutDependency,
                          layoutId: 'tsZ7uURMS',
                          style: { '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', },
                          verticalAlignment: 'top',
                          withExternalLayout: true,
                        },),
                        /* @__PURE__ */ _jsx(RichText, {
                          __fromCanvasComponent: true,
                          children: /* @__PURE__ */ _jsx(React.Fragment, {
                            children: /* @__PURE__ */ _jsx(motion.h1, {
                              style: {
                                '--font-selector': 'R0Y7RE0gU2Fucy1yZWd1bGFy',
                                '--framer-font-family': '"DM Sans", "DM Sans Placeholder", sans-serif',
                                '--framer-font-size': '14px',
                                '--framer-text-alignment': 'left',
                                '--framer-text-color': 'var(--extracted-gdpscs, rgb(156, 156, 156))',
                              },
                              children: 'Wait but how do you\u2026',
                            },),
                          },),
                          className: 'framer-1dzcyyv',
                          fonts: ['GF;DM Sans-regular',],
                          layoutDependency,
                          layoutId: 'Jcdc4r3X3',
                          style: {
                            '--extracted-gdpscs': 'rgb(156, 156, 156)',
                            '--framer-link-text-color': 'rgb(0, 153, 255)',
                            '--framer-link-text-decoration': 'underline',
                          },
                          verticalAlignment: 'top',
                          withExternalLayout: true,
                        },),
                        /* @__PURE__ */ _jsx(ComponentViewportProvider, {
                          children: /* @__PURE__ */ _jsx(motion.div, {
                            className: 'framer-4mgdar-container',
                            layoutDependency,
                            layoutId: 'YylFy_5a_-container',
                            children: /* @__PURE__ */ _jsx(Conic, {
                              blur: 8,
                              colors: ['rgb(84, 170, 227)', 'rgb(250, 51, 134)', 'rgb(253, 204, 255)', 'rgb(158, 216, 255)',],
                              from: 0,
                              height: '100%',
                              id: 'YylFy_5a_',
                              layoutId: 'YylFy_5a_',
                              radius: 126,
                              style: { height: '100%', width: '100%', },
                              width: '100%',
                              xPos: 84,
                              yPos: 86,
                            },),
                          },),
                        },),
                        /* @__PURE__ */ _jsx(RichText, {
                          __fromCanvasComponent: true,
                          children: /* @__PURE__ */ _jsx(React.Fragment, {
                            children: /* @__PURE__ */ _jsx(motion.h1, {
                              style: {
                                '--font-selector': 'R0Y7RE0gU2Fucy0zMDA=',
                                '--framer-font-family': '"DM Sans", "DM Sans Placeholder", sans-serif',
                                '--framer-font-size': '14px',
                                '--framer-font-weight': '300',
                                '--framer-text-alignment': 'right',
                                '--framer-text-color': 'var(--extracted-gdpscs, rgb(156, 156, 156))',
                              },
                              children: '7/18/23',
                            },),
                          },),
                          className: 'framer-1rt2ry',
                          fonts: ['GF;DM Sans-300',],
                          layoutDependency,
                          layoutId: 'pEvSTM2EF',
                          style: {
                            '--extracted-gdpscs': 'rgb(156, 156, 156)',
                            '--framer-link-text-color': 'rgb(0, 153, 255)',
                            '--framer-link-text-decoration': 'underline',
                          },
                          verticalAlignment: 'top',
                          withExternalLayout: true,
                        },),
                        /* @__PURE__ */ _jsx(SVG, {
                          className: 'framer-6v4tfd',
                          layout: 'position',
                          layoutDependency,
                          layoutId: 'SkADwXgG1',
                          opacity: 1,
                          svg:
                            '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 249 2"><path d="M 0.5 0.5 L 248 0.5" fill="transparent" stroke="#AAA"></path></svg>',
                          svgContentId: 299392219,
                          withExternalLayout: true,
                        },),
                        /* @__PURE__ */ _jsx(SVG, {
                          className: 'framer-1rsr11v',
                          layout: 'position',
                          layoutDependency,
                          layoutId: 'qUcaxumuF',
                          opacity: 1,
                          svg:
                            '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 7 11"><path d="M 0.5 0.5 L 6.5 5 L 0.5 10" fill="transparent" stroke="#AAA"></path></svg>',
                          svgContentId: 3388095525,
                          withExternalLayout: true,
                        },),
                      ],
                    },),
                    /* @__PURE__ */ _jsxs(motion.div, {
                      className: 'framer-1y6nd82',
                      layoutDependency,
                      layoutId: 'dzcGoXjTg',
                      style: { backgroundColor: 'rgb(255, 255, 255)', },
                      children: [
                        /* @__PURE__ */ _jsx(RichText, {
                          __fromCanvasComponent: true,
                          children: /* @__PURE__ */ _jsx(React.Fragment, {
                            children: /* @__PURE__ */ _jsx(motion.h1, {
                              className: 'framer-styles-preset-ame1jg',
                              'data-styles-preset': 'e81t2mHNr',
                              children: 'Maroon',
                            },),
                          },),
                          className: 'framer-10154jg',
                          fonts: ['Inter',],
                          layoutDependency,
                          layoutId: 'zRTiUNOZ4',
                          style: { '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', },
                          verticalAlignment: 'top',
                          withExternalLayout: true,
                        },),
                        /* @__PURE__ */ _jsx(RichText, {
                          __fromCanvasComponent: true,
                          children: /* @__PURE__ */ _jsx(React.Fragment, {
                            children: /* @__PURE__ */ _jsx(motion.h1, {
                              style: {
                                '--font-selector': 'R0Y7RE0gU2Fucy1yZWd1bGFy',
                                '--framer-font-family': '"DM Sans", "DM Sans Placeholder", sans-serif',
                                '--framer-font-size': '14px',
                                '--framer-text-alignment': 'left',
                                '--framer-text-color': 'var(--extracted-gdpscs, rgb(156, 156, 156))',
                              },
                              children: 'Wait but how do you\u2026',
                            },),
                          },),
                          className: 'framer-o70eyz',
                          fonts: ['GF;DM Sans-regular',],
                          layoutDependency,
                          layoutId: 'MxKATJMgd',
                          style: {
                            '--extracted-gdpscs': 'rgb(156, 156, 156)',
                            '--framer-link-text-color': 'rgb(0, 153, 255)',
                            '--framer-link-text-decoration': 'underline',
                          },
                          verticalAlignment: 'top',
                          withExternalLayout: true,
                        },),
                        /* @__PURE__ */ _jsx(ComponentViewportProvider, {
                          children: /* @__PURE__ */ _jsx(motion.div, {
                            className: 'framer-1nxndmk-container',
                            layoutDependency,
                            layoutId: 'tWAEwUcvc-container',
                            children: /* @__PURE__ */ _jsx(Conic, {
                              blur: 8,
                              colors: ['rgb(253, 204, 255)', 'rgb(158, 216, 255)', 'rgb(174, 247, 105)', 'rgb(159, 114, 29)',],
                              from: 0,
                              height: '100%',
                              id: 'tWAEwUcvc',
                              layoutId: 'tWAEwUcvc',
                              radius: 126,
                              style: { height: '100%', width: '100%', },
                              width: '100%',
                              xPos: 84,
                              yPos: 86,
                            },),
                          },),
                        },),
                        /* @__PURE__ */ _jsx(RichText, {
                          __fromCanvasComponent: true,
                          children: /* @__PURE__ */ _jsx(React.Fragment, {
                            children: /* @__PURE__ */ _jsx(motion.h1, {
                              style: {
                                '--font-selector': 'R0Y7RE0gU2Fucy0zMDA=',
                                '--framer-font-family': '"DM Sans", "DM Sans Placeholder", sans-serif',
                                '--framer-font-size': '14px',
                                '--framer-font-weight': '300',
                                '--framer-text-alignment': 'right',
                                '--framer-text-color': 'var(--extracted-gdpscs, rgb(156, 156, 156))',
                              },
                              children: '7/17/23',
                            },),
                          },),
                          className: 'framer-1e9o2lo',
                          fonts: ['GF;DM Sans-300',],
                          layoutDependency,
                          layoutId: 'bUOkkWUop',
                          style: {
                            '--extracted-gdpscs': 'rgb(156, 156, 156)',
                            '--framer-link-text-color': 'rgb(0, 153, 255)',
                            '--framer-link-text-decoration': 'underline',
                          },
                          verticalAlignment: 'top',
                          withExternalLayout: true,
                        },),
                        /* @__PURE__ */ _jsx(SVG, {
                          className: 'framer-15n6lts',
                          layout: 'position',
                          layoutDependency,
                          layoutId: 'afzMmB8WV',
                          opacity: 1,
                          svg:
                            '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 249 2"><path d="M 0.5 0.5 L 248 0.5" fill="transparent" stroke="#AAA"></path></svg>',
                          svgContentId: 299392219,
                          withExternalLayout: true,
                        },),
                        /* @__PURE__ */ _jsx(SVG, {
                          className: 'framer-1on6dw6',
                          layout: 'position',
                          layoutDependency,
                          layoutId: 'cfsqgB58_',
                          opacity: 1,
                          svg:
                            '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 7 11"><path d="M 0.5 0.5 L 6.5 5 L 0.5 10" fill="transparent" stroke="#AAA"></path></svg>',
                          svgContentId: 3388095525,
                          withExternalLayout: true,
                        },),
                      ],
                    },),
                  ],
                },),
              },),
            },),
            /* @__PURE__ */ _jsx(SVG, {
              className: 'framer-2dgkkz',
              layout: 'position',
              layoutDependency,
              layoutId: 'ykBR54GPu',
              opacity: 1,
              svg:
                '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 352 2"><path d="M 0.989 0.5 L 351.011 0.5" fill="transparent" stroke-width="0.98" stroke="#AAA"></path></svg>',
              svgContentId: 2144154235,
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
  '.framer-7ricS.framer-t32mbh, .framer-7ricS .framer-t32mbh { display: block; }',
  '.framer-7ricS.framer-1uvfmp7 { height: 790px; overflow: hidden; position: relative; width: 386px; }',
  '.framer-7ricS .framer-qvbr9e { bottom: 15px; flex: none; height: 81px; left: calc(50.00000000000002% - 364px / 2); overflow: hidden; position: absolute; width: 364px; }',
  '.framer-7ricS .framer-yh446t { aspect-ratio: 0.4888888888888889 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 790px); left: 0px; overflow: visible; position: absolute; right: 0px; top: 0px; }',
  '.framer-7ricS .framer-sglcq1-container { flex: none; height: 42px; left: calc(50.00000000000002% - 294px / 2); position: absolute; top: 75px; width: 294px; }',
  '.framer-7ricS .framer-8glp9l-container { flex: none; height: auto; left: 50%; position: absolute; top: 29px; width: 79px; }',
  '.framer-7ricS .framer-pgv34o { cursor: pointer; flex: none; height: 15px; left: calc(48.96373056994821% - 64px / 2); overflow: visible; position: absolute; top: 32px; width: 64px; }',
  '.framer-7ricS .framer-1qegj5x-container { bottom: 38px; flex: none; height: 37px; position: absolute; right: 72px; width: 37px; }',
  '.framer-7ricS .framer-1b01uhk-container { bottom: 38px; flex: none; height: 37px; left: calc(49.74093264248707% - 37px / 2); position: absolute; width: 37px; }',
  '.framer-7ricS .framer-1hobkt9-container { bottom: 38px; flex: none; height: 37px; left: 71px; position: absolute; width: 37px; }',
  '.framer-7ricS .framer-s3kelo { flex: none; height: 555px; left: calc(50.00000000000002% - 350px / 2); position: absolute; top: calc(52.65822784810129% - 555px / 2); width: 350px; z-index: 5; }',
  '.framer-7ricS .framer-1lljz7a { height: 696px; overflow: hidden; position: relative; width: 386px; }',
  '.framer-7ricS .framer-1arz0p4 { cursor: pointer; flex: none; height: 76px; left: 0px; overflow: visible; position: absolute; right: 0px; top: 5px; }',
  '.framer-7ricS .framer-1fyqsgw, .framer-7ricS .framer-cvaslu, .framer-7ricS .framer-157s1or, .framer-7ricS .framer-1md6xwu, .framer-7ricS .framer-llbux8, .framer-7ricS .framer-iltydz, .framer-7ricS .framer-1m4kqpd, .framer-7ricS .framer-2wdwdy, .framer-7ricS .framer-10154jg { flex: none; height: 18px; position: absolute; right: 50px; top: 13px; white-space: pre-wrap; width: 209px; word-break: break-word; word-wrap: break-word; }',
  '.framer-7ricS .framer-11h1ta7, .framer-7ricS .framer-1frz9jb, .framer-7ricS .framer-14wawa0, .framer-7ricS .framer-ll06uj, .framer-7ricS .framer-e4iuk5, .framer-7ricS .framer-1wnr63g, .framer-7ricS .framer-1nsk6er, .framer-7ricS .framer-1rt2ry, .framer-7ricS .framer-1e9o2lo { flex: none; height: 18px; position: absolute; right: 15px; top: calc(48.684210526315816% - 18px / 2); white-space: pre-wrap; width: 60px; word-break: break-word; word-wrap: break-word; }',
  '.framer-7ricS .framer-13d9u7u, .framer-7ricS .framer-klll17, .framer-7ricS .framer-1wdka8u, .framer-7ricS .framer-zkshon, .framer-7ricS .framer-1iy44no, .framer-7ricS .framer-1f7zien, .framer-7ricS .framer-1nwbz61, .framer-7ricS .framer-1dzcyyv, .framer-7ricS .framer-o70eyz { bottom: 21px; flex: none; height: 18px; position: absolute; right: 50px; white-space: pre-wrap; width: 209px; word-break: break-word; word-wrap: break-word; }',
  '.framer-7ricS .framer-16bai8l-container, .framer-7ricS .framer-9r82ur-container, .framer-7ricS .framer-13dyvvc-container, .framer-7ricS .framer-10y9c1n-container, .framer-7ricS .framer-1nrs70n-container, .framer-7ricS .framer-4mgdar-container, .framer-7ricS .framer-1nxndmk-container { flex: none; height: 53px; left: 23px; position: absolute; top: calc(46.05263157894739% - 53px / 2); width: 53px; }',
  '.framer-7ricS .framer-1hcq04x, .framer-7ricS .framer-1rsod9i, .framer-7ricS .framer-5oq03v, .framer-7ricS .framer-1mylx8f, .framer-7ricS .framer-7o4s2m, .framer-7ricS .framer-jmrvq5, .framer-7ricS .framer-uychix, .framer-7ricS .framer-6v4tfd, .framer-7ricS .framer-15n6lts { bottom: 6px; flex: none; height: 2px; position: absolute; right: 11px; width: 249px; }',
  '.framer-7ricS .framer-ayy49t, .framer-7ricS .framer-1qgu9cc, .framer-7ricS .framer-m7wmag, .framer-7ricS .framer-1ndaots, .framer-7ricS .framer-1w1g16r, .framer-7ricS .framer-1g75fy7, .framer-7ricS .framer-ujyihl, .framer-7ricS .framer-1rsr11v, .framer-7ricS .framer-1on6dw6 { flex: none; height: 11px; position: absolute; right: 15px; top: 7px; width: 7px; }',
  '.framer-7ricS .framer-1ngquee { cursor: pointer; flex: none; height: 76px; left: 0px; overflow: visible; position: absolute; right: 0px; top: 81px; }',
  '.framer-7ricS .framer-sesnee { flex: none; height: 76px; left: 0px; overflow: visible; position: absolute; right: 0px; top: 157px; }',
  '.framer-7ricS .framer-tcxfue, .framer-7ricS .framer-1ec599f { flex: none; height: 53px; left: 23px; overflow: visible; position: absolute; top: calc(46.05263157894739% - 53px / 2); width: 53px; }',
  '.framer-7ricS .framer-cwc3xf-container, .framer-7ricS .framer-3yirid-container { bottom: 0px; flex: none; left: 0px; position: absolute; right: 0px; top: 0px; }',
  '.framer-7ricS .framer-1si7pyb { flex: none; height: 76px; left: 0px; overflow: visible; position: absolute; right: 0px; top: 233px; }',
  '.framer-7ricS .framer-1vb68q0 { flex: none; height: 76px; left: 0px; overflow: visible; position: absolute; right: 0px; top: calc(49.85632183908048% - 76px / 2); }',
  '.framer-7ricS .framer-flr35 { flex: none; height: 76px; left: 0px; overflow: visible; position: absolute; right: 0px; top: 385px; }',
  '.framer-7ricS .framer-1f06ect { flex: none; height: 76px; left: 0px; overflow: visible; position: absolute; right: 0px; top: 461px; }',
  '.framer-7ricS .framer-1exja0p { flex: none; height: 76px; left: 0px; overflow: visible; position: absolute; right: 0px; top: 537px; }',
  '.framer-7ricS .framer-1y6nd82 { flex: none; height: 76px; left: 0px; overflow: visible; position: absolute; right: 0px; top: 613px; }',
  '.framer-7ricS .framer-2dgkkz { flex: none; height: 2px; left: calc(50.00000000000002% - 352px / 2); position: absolute; top: 139px; width: 352px; }',
  ...css,
];
var FramerShV26ewff = withCSS(Component, css2, 'framer-7ricS',);
var stdin_default = FramerShV26ewff;
FramerShV26ewff.displayName = 'chat1';
FramerShV26ewff.defaultProps = { height: 790, width: 386, };
addPropertyControls(FramerShV26ewff, {
  RvCbYenvN: { title: 'Tap', type: ControlType.EventHandler, },
  yqKc2EOdU: { title: 'Tap 2', type: ControlType.EventHandler, },
  P7BghB_4w: { title: 'Tap 3', type: ControlType.EventHandler, },
  TnJKJ_iNZ: { title: 'Tap 4', type: ControlType.EventHandler, },
},);
addFonts(FramerShV26ewff, [
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
      url: 'https://fonts.gstatic.com/s/dmsans/v15/rP2tp2ywxg089UriI5-g4vlH9VoD8CmcqZG40F9JadbnoEwA_JxhS2f3ZGMZpg.woff2',
      weight: '300',
    }, {
      family: 'DM Sans',
      source: 'google',
      style: 'normal',
      url: 'https://fonts.gstatic.com/s/dmsans/v15/rP2tp2ywxg089UriI5-g4vlH9VoD8CmcqZG40F9JadbnoEwAopxhS2f3ZGMZpg.woff2',
      weight: '400',
    },],
  },
  ...InputFonts,
  ...ClockFonts,
  ...IconoirFonts,
  ...ConicFonts,
  ...getFontsFromSharedStyle(fonts,),
], { supportsExplicitInterCodegen: true, },);

// virtual:chat1
import { WithFramerBreakpoints, } from 'unframer';
import { jsx, } from 'react/jsx-runtime';
stdin_default.Responsive = (props,) => {
  return /* @__PURE__ */ jsx(WithFramerBreakpoints, { Component: stdin_default, ...props, },);
};
var chat1_default = stdin_default;
export { chat1_default as default, };
