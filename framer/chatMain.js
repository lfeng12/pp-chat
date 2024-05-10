/* eslint-disable */
'use client';
import { stdin_default as stdin_default2, } from './chunk-GJCZY2ER.js';
import { Conic, } from './chunk-WBH7D5FB.js';
import { Input, } from './chunk-5IVOZXBX.js';
import './chunk-JJFCSOIW.js';
import { stdin_default, } from './chunk-GYUMUFYO.js';
import './chunk-EIZOZDEQ.js';
import { className, css, fonts, } from './chunk-6MAF3TKJ.js';
import { defaultEvents, NullState, useIconSelection, } from './chunk-ZBBVTMRC.js';

// https :https://framerusercontent.com/modules/mWyWpiyf7YhnLcFOfMJN/6eVBxVaVAW1d8v9TgZpB/fOqr60mxE.js
import { jsx as _jsx4, jsxs as _jsxs2, } from 'react/jsx-runtime';
import {
  addFonts as addFonts2,
  addPropertyControls as addPropertyControls4,
  ComponentViewportProvider as ComponentViewportProvider2,
  ControlType as ControlType4,
  cx as cx2,
  getFonts as getFonts2,
  Scroll,
  useActiveVariantCallback as useActiveVariantCallback2,
  useComponentViewport as useComponentViewport2,
  useLocaleInfo as useLocaleInfo2,
  useVariantState as useVariantState2,
  withCSS as withCSS2,
} from 'unframer';
import { LayoutGroup as LayoutGroup2, motion as motion2, MotionConfigContext as MotionConfigContext2, } from 'unframer';
import * as React3 from 'react';

// https :https://framerusercontent.com/modules/QcvdYoJdqXWeVZX8NX96/GqMv6OS4u6HsSdF0Pl8e/ChatList.js
import { jsx as _jsx3, } from 'react/jsx-runtime';
import { addPropertyControls as addPropertyControls3, ControlType as ControlType3, } from 'unframer';

// https :https://framer.com/m/Chat-OkK8.js@2us0Rf1FMZLBSmsACVXk
import { jsx as _jsx2, jsxs as _jsxs, } from 'react/jsx-runtime';
import {
  addFonts,
  addPropertyControls as addPropertyControls2,
  ComponentViewportProvider,
  ControlType as ControlType2,
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
import * as React2 from 'react';

// https :https://framerusercontent.com/modules/f0DboytQenYh21kfme7W/zb1zVBMZJKgPMiedOi0y/Feather.js
import { jsx as _jsx, } from 'react/jsx-runtime';
import * as React from 'react';
import { useEffect, useRef, useState, } from 'react';
import { addPropertyControls, ControlType, RenderTarget, } from 'unframer';

// https :https://framer.com/m/feather-icons/home.js@0.0.29
var r;
var s = (o,) => {
  if (!r) {
    const n = o.forwardRef(({ color: t = 'currentColor', size: e = 24, ...i }, l,) =>
      o.createElement(
        'svg',
        {
          ref: l,
          xmlns: 'http://www.w3.org/2000/svg',
          width: e,
          height: e,
          viewBox: '0 0 24 24',
          fill: 'none',
          stroke: t,
          strokeWidth: '2',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          ...i,
        },
        o.createElement('path', { d: 'M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z', },),
        o.createElement('polyline', { points: '9 22 9 12 15 12 15 22', },),
      )
    );
    n.displayName = 'Home', r = n;
  }
  return r;
};

// https :https://framerusercontent.com/modules/f0DboytQenYh21kfme7W/zb1zVBMZJKgPMiedOi0y/Feather.js
var iconKeys = [
  'activity',
  'airplay',
  'alert-circle',
  'alert-octagon',
  'alert-triangle',
  'align-center',
  'align-justify',
  'align-left',
  'align-right',
  'anchor',
  'aperture',
  'archive',
  'arrow-down',
  'arrow-down-circle',
  'arrow-down-left',
  'arrow-down-right',
  'arrow-left',
  'arrow-left-circle',
  'arrow-right',
  'arrow-right-circle',
  'arrow-up',
  'arrow-up-circle',
  'arrow-up-left',
  'arrow-up-right',
  'at-sign',
  'award',
  'bar-chart',
  'bar-chart-2',
  'battery',
  'battery-charging',
  'bell',
  'bell-off',
  'bluetooth',
  'bold',
  'book',
  'book-open',
  'bookmark',
  'box',
  'briefcase',
  'calendar',
  'camera',
  'camera-off',
  'cast',
  'check',
  'check-circle',
  'check-square',
  'chevron-down',
  'chevron-left',
  'chevron-right',
  'chevron-up',
  'chevrons-down',
  'chevrons-left',
  'chevrons-right',
  'chevrons-up',
  'chrome',
  'circle',
  'clipboard',
  'clock',
  'cloud',
  'cloud-drizzle',
  'cloud-lightning',
  'cloud-off',
  'cloud-rain',
  'cloud-snow',
  'code',
  'codepen',
  'codesandbox',
  'coffee',
  'columns',
  'command',
  'compass',
  'copy',
  'corner-down-left',
  'corner-down-right',
  'corner-left-down',
  'corner-left-up',
  'corner-right-down',
  'corner-right-up',
  'corner-up-left',
  'corner-up-right',
  'cpu',
  'credit-card',
  'crop',
  'crosshair',
  'database',
  'delete',
  'disc',
  'divide',
  'divide-circle',
  'divide-square',
  'dollar-sign',
  'download',
  'download-cloud',
  'dribbble',
  'droplet',
  'edit',
  'edit-2',
  'edit-3',
  'external-link',
  'eye',
  'eye-off',
  'facebook',
  'fast-forward',
  'feather',
  'figma',
  'file',
  'file-minus',
  'file-plus',
  'file-text',
  'film',
  'filter',
  'flag',
  'folder',
  'folder-minus',
  'folder-plus',
  'framer',
  'frown',
  'gift',
  'git-branch',
  'git-commit',
  'git-merge',
  'git-pull-request',
  'github',
  'gitlab',
  'globe',
  'grid',
  'hard-drive',
  'hash',
  'headphones',
  'heart',
  'help-circle',
  'hexagon',
  'home',
  'image',
  'inbox',
  'info',
  'instagram',
  'italic',
  'key',
  'layers',
  'layout',
  'life-buoy',
  'link',
  'link-2',
  'linkedin',
  'list',
  'loader',
  'lock',
  'log-in',
  'log-out',
  'mail',
  'map',
  'map-pin',
  'maximize',
  'maximize-2',
  'meh',
  'menu',
  'message-circle',
  'message-square',
  'mic',
  'mic-off',
  'minimize',
  'minimize-2',
  'minus',
  'minus-circle',
  'minus-square',
  'monitor',
  'moon',
  'more-horizontal',
  'more-vertical',
  'mouse-pointer',
  'move',
  'music',
  'navigation',
  'navigation-2',
  'octagon',
  'package',
  'paperclip',
  'pause',
  'pause-circle',
  'pen-tool',
  'percent',
  'phone',
  'phone-call',
  'phone-forwarded',
  'phone-incoming',
  'phone-missed',
  'phone-off',
  'phone-outgoing',
  'pie-chart',
  'play',
  'play-circle',
  'plus',
  'plus-circle',
  'plus-square',
  'pocket',
  'power',
  'printer',
  'radio',
  'refresh-ccw',
  'refresh-cw',
  'repeat',
  'rewind',
  'rotate-ccw',
  'rotate-cw',
  'rss',
  'save',
  'scissors',
  'search',
  'send',
  'server',
  'settings',
  'share',
  'share-2',
  'shield',
  'shield-off',
  'shopping-bag',
  'shopping-cart',
  'shuffle',
  'sidebar',
  'skip-back',
  'skip-forward',
  'slack',
  'slash',
  'sliders',
  'smartphone',
  'smile',
  'speaker',
  'square',
  'star',
  'stop-circle',
  'sun',
  'sunrise',
  'sunset',
  'tablet',
  'tag',
  'target',
  'terminal',
  'thermometer',
  'thumbs-down',
  'thumbs-up',
  'toggle-left',
  'toggle-right',
  'tool',
  'trash',
  'trash-2',
  'trello',
  'trending-down',
  'trending-up',
  'triangle',
  'truck',
  'tv',
  'twitch',
  'twitter',
  'type',
  'umbrella',
  'underline',
  'unlock',
  'upload',
  'upload-cloud',
  'user',
  'user-check',
  'user-minus',
  'user-plus',
  'user-x',
  'users',
  'video',
  'video-off',
  'voicemail',
  'volume',
  'volume-1',
  'volume-2',
  'volume-x',
  'watch',
  'wifi',
  'wifi-off',
  'wind',
  'x',
  'x-circle',
  'x-octagon',
  'x-square',
  'youtube',
  'zap',
  'zap-off',
  'zoom-in',
  'zoom-out',
];
var moduleBaseUrl = 'https://framer.com/m/feather-icons/';
var uppercaseIconKeys = iconKeys.map((name,) => name.charAt(0,).toUpperCase() + name.slice(1,));
var lowercaseIconKeyPairs = iconKeys.reduce((res, key,) => {
  res[key.toLowerCase()] = key;
  return res;
}, {},);
function Icon(props,) {
  const { color, selectByList, iconSearch, iconSelection, onClick, onMouseDown, onMouseUp, onMouseEnter, onMouseLeave, mirrored, } = props;
  const isMounted = useRef(false,);
  const iconKey = useIconSelection(iconKeys, selectByList, iconSearch, iconSelection, lowercaseIconKeyPairs,);
  const [SelectedIcon, setSelectedIcon,] = useState(iconKey === 'Home' ? s(React,) : null,);
  async function importModule() {
    let active = true;
    try {
      const iconModuleUrl = `${moduleBaseUrl}${iconKey}.js@0.0.29`;
      const module = await import(
        /* webpackIgnore: true */
        iconModuleUrl
      );
      if (active) {
        setSelectedIcon(module.default(React,),);
      }
    } catch (e) {
      console.log(e,);
      if (active) {
        setSelectedIcon(null,);
      }
    }
    return () => {
      active = false;
    };
  }
  useEffect(() => {
    importModule();
  }, [iconKey,],);
  const isOnCanvas = RenderTarget.current() === RenderTarget.canvas;
  const emptyState = isOnCanvas ? /* @__PURE__ */ _jsx(NullState, {},) : null;
  return /* @__PURE__ */ _jsx('div', {
    style: { display: 'contents', },
    onClick,
    onMouseEnter,
    onMouseLeave,
    onMouseDown,
    onMouseUp,
    children: SelectedIcon
      ? /* @__PURE__ */ _jsx(SelectedIcon, {
        style: { width: '100%', height: '100%', transform: mirrored ? 'scale(-1, 1)' : void 0, },
        color,
      },)
      : emptyState,
  },);
}
Icon.displayName = 'Feather';
Icon.defaultProps = {
  width: 24,
  height: 24,
  iconSelection: 'home',
  iconSearch: 'Home',
  color: '#66F',
  selectByList: true,
  mirrored: false,
};
addPropertyControls(Icon, {
  selectByList: {
    type: ControlType.Boolean,
    title: 'Select',
    enabledTitle: 'List',
    disabledTitle: 'Search',
    defaultValue: Icon.defaultProps.selectByList,
  },
  iconSelection: {
    type: ControlType.Enum,
    options: iconKeys,
    optionTitles: uppercaseIconKeys,
    defaultValue: Icon.defaultProps.iconSelection,
    title: 'Name',
    hidden: ({ selectByList, },) => !selectByList,
    description: 'Find every icon name on the [Feather site](https://feathericons.com/)',
  },
  iconSearch: {
    type: ControlType.String,
    title: 'Name',
    placeholder: 'Menu, Wifi, Box\u2026',
    hidden: ({ selectByList, },) => selectByList,
  },
  mirrored: { type: ControlType.Boolean, enabledTitle: 'Yes', disabledTitle: 'No', defaultValue: Icon.defaultProps.mirrored, },
  color: { type: ControlType.Color, title: 'Color', defaultValue: Icon.defaultProps.color, },
  ...defaultEvents,
},);

// https :https://framer.com/m/Chat-OkK8.js@2us0Rf1FMZLBSmsACVXk
var ConicFonts = getFonts(Conic,);
var FeatherFonts = getFonts(Icon,);
var cycleOrder = ['Ir0KroMry',];
var serializationHash = 'framer-o7PGj';
var variantClassNames = { Ir0KroMry: 'framer-v-1arz0p4', };
var transition1 = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: 'spring', };
var Transition = ({ value, children, },) => {
  const config = React2.useContext(MotionConfigContext,);
  const transition = value !== null && value !== void 0 ? value : config.transition;
  const contextValue = React2.useMemo(() => ({ ...config, transition, }), [JSON.stringify(transition,),],);
  return /* @__PURE__ */ _jsx2(MotionConfigContext.Provider, { value: contextValue, children, },);
};
var Variants = motion(React2.Fragment,);
var getProps = ({ colors, details, handle, height, id, message, tap, when, width, ...props },) => {
  var _ref, _ref1, _ref2, _ref3;
  return {
    ...props,
    C5lPnhwoh: (_ref = colors !== null && colors !== void 0 ? colors : props.C5lPnhwoh) !== null && _ref !== void 0
      ? _ref
      : 'cyan, magenta, yellow, cyan',
    foRxHWgM8: (_ref1 = handle !== null && handle !== void 0 ? handle : props.foRxHWgM8) !== null && _ref1 !== void 0
      ? _ref1
      : 'CurryEater',
    KfDOzmyKZ: (_ref2 = when !== null && when !== void 0 ? when : props.KfDOzmyKZ) !== null && _ref2 !== void 0 ? _ref2 : 'just now',
    KiCnaeBUl: tap !== null && tap !== void 0 ? tap : props.KiCnaeBUl,
    sFF3XK1qU: details !== null && details !== void 0 ? details : props.sFF3XK1qU,
    tb7eWcyvs: (_ref3 = message !== null && message !== void 0 ? message : props.tb7eWcyvs) !== null && _ref3 !== void 0
      ? _ref3
      : 'Oh hi again!',
  };
};
var createLayoutDependency = (props, variants,) => variants.join('-',) + props.layoutDependency;
var Component = /* @__PURE__ */ React2.forwardRef(function (props, ref,) {
  const { activeLocale, setLocale, } = useLocaleInfo();
  const {
    style,
    className: className2,
    layoutId,
    variant,
    KiCnaeBUl,
    foRxHWgM8,
    tb7eWcyvs,
    KfDOzmyKZ,
    sFF3XK1qU,
    C5lPnhwoh,
    ...restProps
  } = getProps(props,);
  const { baseVariant, classNames, gestureVariant, setGestureState, setVariant, variants, } = useVariantState({
    cycleOrder,
    defaultVariant: 'Ir0KroMry',
    variant,
    variantClassNames,
  },);
  const layoutDependency = createLayoutDependency(props, variants,);
  const { activeVariantCallback, delay, } = useActiveVariantCallback(baseVariant,);
  const onTap60zlar = activeVariantCallback(async (...args) => {
    setGestureState({ isPressed: false, },);
    if (KiCnaeBUl) {
      const res = await KiCnaeBUl(...args,);
      if (res === false) {
        return false;
      }
    }
  },);
  const onClick1dxe04r = activeVariantCallback(async (...args) => {
    if (sFF3XK1qU) {
      const res = await sFF3XK1qU(...args,);
      if (res === false) {
        return false;
      }
    }
  },);
  const ref1 = React2.useRef(null,);
  const defaultLayoutId = React2.useId();
  const sharedStyleClassNames = [className,];
  const componentViewport = useComponentViewport();
  return /* @__PURE__ */ _jsx2(LayoutGroup, {
    id: layoutId !== null && layoutId !== void 0 ? layoutId : defaultLayoutId,
    children: /* @__PURE__ */ _jsx2(Variants, {
      animate: variants,
      initial: false,
      children: /* @__PURE__ */ _jsx2(Transition, {
        value: transition1,
        children: /* @__PURE__ */ _jsxs(motion.div, {
          ...restProps,
          className: cx(serializationHash, ...sharedStyleClassNames, 'framer-1arz0p4', className2, classNames,),
          'data-framer-name': 'Variant 1',
          'data-highlight': true,
          layoutDependency,
          layoutId: 'Ir0KroMry',
          onHoverEnd: () => setGestureState({ isHovered: false, },),
          onHoverStart: () => setGestureState({ isHovered: true, },),
          onTap: onTap60zlar,
          onTapCancel: () => setGestureState({ isPressed: false, },),
          onTapStart: () => setGestureState({ isPressed: true, },),
          ref: ref !== null && ref !== void 0 ? ref : ref1,
          style: { backgroundColor: 'rgb(255, 255, 255)', ...style, },
          children: [
            /* @__PURE__ */ _jsx2(ComponentViewportProvider, {
              children: /* @__PURE__ */ _jsx2(motion.div, {
                className: 'framer-16bai8l-container',
                layoutDependency,
                layoutId: 'QQxVDkw06-container',
                children: /* @__PURE__ */ _jsx2(Conic, {
                  blur: 8,
                  colors: C5lPnhwoh,
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
            /* @__PURE__ */ _jsxs(motion.div, {
              className: 'framer-avdmvv',
              'data-framer-name': 'content',
              layoutDependency,
              layoutId: 'MeaLnt2LS',
              children: [
                /* @__PURE__ */ _jsxs(motion.div, {
                  className: 'framer-1jiq0ua',
                  'data-framer-name': 'handle + message',
                  layoutDependency,
                  layoutId: 'jGU3DPD6q',
                  children: [
                    /* @__PURE__ */ _jsx2(RichText, {
                      __fromCanvasComponent: true,
                      children: /* @__PURE__ */ _jsx2(React2.Fragment, {
                        children: /* @__PURE__ */ _jsx2(motion.h1, {
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
                      text: foRxHWgM8,
                      verticalAlignment: 'top',
                      withExternalLayout: true,
                    },),
                    /* @__PURE__ */ _jsx2(RichText, {
                      __fromCanvasComponent: true,
                      children: /* @__PURE__ */ _jsx2(React2.Fragment, {
                        children: /* @__PURE__ */ _jsx2(motion.h1, {
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
                      text: tb7eWcyvs,
                      verticalAlignment: 'top',
                      withExternalLayout: true,
                    },),
                  ],
                },),
                /* @__PURE__ */ _jsxs(motion.div, {
                  className: 'framer-1ayb3qz',
                  'data-framer-name': 'icon + when',
                  layoutDependency,
                  layoutId: 'N53Ou09yX',
                  children: [
                    /* @__PURE__ */ _jsx2(ComponentViewportProvider, {
                      children: /* @__PURE__ */ _jsx2(motion.div, {
                        className: 'framer-t029o5-container',
                        layoutDependency,
                        layoutId: 'akqIxE92h-container',
                        children: /* @__PURE__ */ _jsx2(Icon, {
                          color: 'rgb(102, 102, 255)',
                          height: '100%',
                          iconSearch: 'Home',
                          iconSelection: 'chevron-right',
                          id: 'akqIxE92h',
                          layoutId: 'akqIxE92h',
                          mirrored: false,
                          onClick: onClick1dxe04r,
                          selectByList: true,
                          style: { height: '100%', width: '100%', },
                          width: '100%',
                        },),
                      },),
                    },),
                    /* @__PURE__ */ _jsx2(RichText, {
                      __fromCanvasComponent: true,
                      children: /* @__PURE__ */ _jsx2(React2.Fragment, {
                        children: /* @__PURE__ */ _jsx2(motion.h1, {
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
                      text: KfDOzmyKZ,
                      verticalAlignment: 'top',
                      withExternalLayout: true,
                    },),
                  ],
                },),
              ],
            },),
          ],
        },),
      },),
    },),
  },);
},);
var css2 = [
  '@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }',
  '.framer-o7PGj.framer-afmupb, .framer-o7PGj .framer-afmupb { display: block; }',
  '.framer-o7PGj.framer-1arz0p4 { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 12px; height: auto; justify-content: flex-start; overflow: visible; padding: 12px; position: relative; width: 390px; }',
  '.framer-o7PGj .framer-16bai8l-container { flex: none; height: 53px; position: relative; width: 53px; }',
  '.framer-o7PGj .framer-avdmvv { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: visible; padding: 0px; position: relative; width: 1px; }',
  '.framer-o7PGj .framer-1jiq0ua { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: visible; padding: 0px 0px 0px 12px; position: relative; width: 1px; }',
  '.framer-o7PGj .framer-1fyqsgw, .framer-o7PGj .framer-13d9u7u { flex: none; height: 18px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }',
  '.framer-o7PGj .framer-1ayb3qz { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }',
  '.framer-o7PGj .framer-t029o5-container { flex: none; height: 12px; position: relative; width: 12px; }',
  '.framer-o7PGj .framer-11h1ta7 { flex: none; height: 18px; position: relative; white-space: pre; width: auto; }',
  '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-o7PGj.framer-1arz0p4, .framer-o7PGj .framer-1jiq0ua, .framer-o7PGj .framer-1ayb3qz { gap: 0px; } .framer-o7PGj.framer-1arz0p4 > * { margin: 0px; margin-left: calc(12px / 2); margin-right: calc(12px / 2); } .framer-o7PGj.framer-1arz0p4 > :first-child { margin-left: 0px; } .framer-o7PGj.framer-1arz0p4 > :last-child { margin-right: 0px; } .framer-o7PGj .framer-1jiq0ua > *, .framer-o7PGj .framer-1ayb3qz > * { margin: 0px; margin-bottom: calc(8px / 2); margin-top: calc(8px / 2); } .framer-o7PGj .framer-1jiq0ua > :first-child, .framer-o7PGj .framer-1ayb3qz > :first-child { margin-top: 0px; } .framer-o7PGj .framer-1jiq0ua > :last-child, .framer-o7PGj .framer-1ayb3qz > :last-child { margin-bottom: 0px; } }',
  ...css,
];
var FramerKooG0WQaY = withCSS(Component, css2, 'framer-o7PGj',);
var stdin_default3 = FramerKooG0WQaY;
FramerKooG0WQaY.displayName = 'Chat';
FramerKooG0WQaY.defaultProps = { height: 77, width: 390, };
addPropertyControls2(FramerKooG0WQaY, {
  KiCnaeBUl: { title: 'Tap', type: ControlType2.EventHandler, },
  foRxHWgM8: { defaultValue: 'CurryEater', displayTextArea: false, title: 'handle', type: ControlType2.String, },
  tb7eWcyvs: { defaultValue: 'Oh hi again!', displayTextArea: false, title: 'message', type: ControlType2.String, },
  KfDOzmyKZ: { defaultValue: 'just now', displayTextArea: false, title: 'when', type: ControlType2.String, },
  sFF3XK1qU: { title: 'Details', type: ControlType2.EventHandler, },
  C5lPnhwoh: { defaultValue: 'cyan, magenta, yellow, cyan', title: 'Colors', type: ControlType2.String, },
},);
addFonts(FramerKooG0WQaY, [
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
      url: 'https://fonts.gstatic.com/s/dmsans/v15/rP2tp2ywxg089UriI5-g4vlH9VoD8CmcqZG40F9JadbnoEwAopxhS2f3ZGMZpg.woff2',
      weight: '400',
    }, {
      family: 'DM Sans',
      source: 'google',
      style: 'normal',
      url: 'https://fonts.gstatic.com/s/dmsans/v15/rP2tp2ywxg089UriI5-g4vlH9VoD8CmcqZG40F9JadbnoEwA_JxhS2f3ZGMZpg.woff2',
      weight: '300',
    },],
  },
  ...ConicFonts,
  ...FeatherFonts,
  ...getFontsFromSharedStyle(fonts,),
], { supportsExplicitInterCodegen: true, },);

// https :https://framerusercontent.com/modules/QcvdYoJdqXWeVZX8NX96/GqMv6OS4u6HsSdF0Pl8e/ChatList.js
function ChatList(props,) {
  const { list, } = props;
  return /* @__PURE__ */ _jsx3('div', {
    style: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 12,
      overflow: 'hidden',
    },
    children: list.map((item,) =>
      /* @__PURE__ */ _jsx3(stdin_default3, {
        colors: item.colors,
        handle: item.handle,
        message: item.message,
        when: item.when,
        details: () => {
          console.log('more info',);
        },
      },)
    ),
  },);
}
addPropertyControls3(ChatList, {
  list: {
    type: ControlType3.Array,
    title: 'Chats',
    control: {
      type: ControlType3.Object,
      title: 'Chat',
      controls: {
        colors: { type: ControlType3.String, title: 'Colors', },
        handle: { type: ControlType3.String, title: 'Handle', },
        message: { type: ControlType3.String, title: 'Message', },
        when: { type: ControlType3.String, title: 'Date', },
      },
    },
    defaultValue: [{ colors: 'blue, gray, cyan, yellow', handle: 'NewUser', message: 'I\'m new here', when: 'yesterday', }, {
      colors: 'red, blue, pink, orange',
      handle: 'LastUser',
      message: 'I\'m active here',
      when: '5 minutes ago',
    },],
  },
},);

// https :https://framerusercontent.com/modules/mWyWpiyf7YhnLcFOfMJN/6eVBxVaVAW1d8v9TgZpB/fOqr60mxE.js
var NavBarFonts = getFonts2(stdin_default2,);
var TopBarFonts = getFonts2(stdin_default,);
var InputFonts = getFonts2(Input,);
var ChatListFonts = getFonts2(ChatList,);
var cycleOrder2 = ['kZIg7BS_U',];
var serializationHash2 = 'framer-gBQZC';
var variantClassNames2 = { kZIg7BS_U: 'framer-v-gtunfr', };
var transition12 = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: 'spring', };
var Transition2 = ({ value, children, },) => {
  const config = React3.useContext(MotionConfigContext2,);
  const transition = value !== null && value !== void 0 ? value : config.transition;
  const contextValue = React3.useMemo(() => ({ ...config, transition, }), [JSON.stringify(transition,),],);
  return /* @__PURE__ */ _jsx4(MotionConfigContext2.Provider, { value: contextValue, children, },);
};
var Variants2 = motion2(React3.Fragment,);
var getProps2 = ({ height, id, tap, tap2, tap3, width, ...props },) => {
  return {
    ...props,
    bEIOQQukc: tap3 !== null && tap3 !== void 0 ? tap3 : props.bEIOQQukc,
    FCzHNEJyL: tap2 !== null && tap2 !== void 0 ? tap2 : props.FCzHNEJyL,
    JrBg2qz0l: tap !== null && tap !== void 0 ? tap : props.JrBg2qz0l,
  };
};
var createLayoutDependency2 = (props, variants,) => variants.join('-',) + props.layoutDependency;
var Component2 = /* @__PURE__ */ React3.forwardRef(function (props, ref,) {
  const { activeLocale, setLocale, } = useLocaleInfo2();
  const { style, className: className2, layoutId, variant, JrBg2qz0l, FCzHNEJyL, bEIOQQukc, ...restProps } = getProps2(props,);
  const { baseVariant, classNames, gestureVariant, setGestureState, setVariant, variants, } = useVariantState2({
    cycleOrder: cycleOrder2,
    defaultVariant: 'kZIg7BS_U',
    variant,
    variantClassNames: variantClassNames2,
  },);
  const layoutDependency = createLayoutDependency2(props, variants,);
  const { activeVariantCallback, delay, } = useActiveVariantCallback2(baseVariant,);
  const KP1WGen7f1cien72 = activeVariantCallback(async (...args) => {
    if (JrBg2qz0l) {
      const res = await JrBg2qz0l(...args,);
      if (res === false) {
        return false;
      }
    }
  },);
  const WULCj3z2a4kr6yi = activeVariantCallback(async (...args) => {
    if (FCzHNEJyL) {
      const res = await FCzHNEJyL(...args,);
      if (res === false) {
        return false;
      }
    }
  },);
  const G_6MlVoRT6hoyzv = activeVariantCallback(async (...args) => {
    if (bEIOQQukc) {
      const res = await bEIOQQukc(...args,);
      if (res === false) {
        return false;
      }
    }
  },);
  const ref1 = React3.useRef(null,);
  const defaultLayoutId = React3.useId();
  const sharedStyleClassNames = [];
  const componentViewport = useComponentViewport2();
  return /* @__PURE__ */ _jsx4(LayoutGroup2, {
    id: layoutId !== null && layoutId !== void 0 ? layoutId : defaultLayoutId,
    children: /* @__PURE__ */ _jsx4(Variants2, {
      animate: variants,
      initial: false,
      children: /* @__PURE__ */ _jsx4(Transition2, {
        value: transition12,
        children: /* @__PURE__ */ _jsxs2(motion2.div, {
          ...restProps,
          className: cx2(serializationHash2, ...sharedStyleClassNames, 'framer-gtunfr', className2, classNames,),
          'data-framer-name': 'Variant 1',
          layoutDependency,
          layoutId: 'kZIg7BS_U',
          onHoverEnd: () => setGestureState({ isHovered: false, },),
          onHoverStart: () => setGestureState({ isHovered: true, },),
          onTap: () => setGestureState({ isPressed: false, },),
          onTapCancel: () => setGestureState({ isPressed: false, },),
          onTapStart: () => setGestureState({ isPressed: true, },),
          ref: ref !== null && ref !== void 0 ? ref : ref1,
          style: { backgroundColor: 'rgb(255, 255, 255)', ...style, },
          children: [
            /* @__PURE__ */ _jsx4(ComponentViewportProvider2, {
              width: (componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.width) || '100vw',
              children: /* @__PURE__ */ _jsx4(motion2.div, {
                className: 'framer-15v4fk0-container',
                layoutDependency,
                layoutId: 'Ul7PUAaZm-container',
                children: /* @__PURE__ */ _jsx4(stdin_default2, {
                  G_6MlVoRT: G_6MlVoRT6hoyzv,
                  height: '100%',
                  id: 'Ul7PUAaZm',
                  KP1WGen7f: KP1WGen7f1cien72,
                  layoutId: 'Ul7PUAaZm',
                  style: { height: '100%', width: '100%', },
                  width: '100%',
                  WULCj3z2a: WULCj3z2a4kr6yi,
                },),
              },),
            },),
            /* @__PURE__ */ _jsx4(ComponentViewportProvider2, {
              width: (componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.width) || '100vw',
              children: /* @__PURE__ */ _jsx4(motion2.div, {
                className: 'framer-b96ds7-container',
                layoutDependency,
                layoutId: 'zk7RmXQXX-container',
                children: /* @__PURE__ */ _jsx4(stdin_default, {
                  height: '100%',
                  id: 'zk7RmXQXX',
                  layoutId: 'zk7RmXQXX',
                  style: { height: '100%', width: '100%', },
                  width: '100%',
                },),
              },),
            },),
            /* @__PURE__ */ _jsx4(ComponentViewportProvider2, {
              children: /* @__PURE__ */ _jsx4(motion2.div, {
                className: 'framer-48u67g-container',
                layoutDependency,
                layoutId: 'URg95wNLy-container',
                children: /* @__PURE__ */ _jsx4(Input, {
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
                  id: 'URg95wNLy',
                  isMixedBorderRadius: false,
                  isRTL: false,
                  keyboard: '',
                  layoutId: 'URg95wNLy',
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
            /* @__PURE__ */ _jsx4(ComponentViewportProvider2, {
              children: /* @__PURE__ */ _jsx4(Scroll, {
                __fromCanvasComponent: true,
                __fromCodeComponentNode: true,
                _border: {},
                background: null,
                className: 'framer-1sg2y0x',
                contentOffsetX: 0,
                contentOffsetY: 0,
                direction: 'vertical',
                directionLock: true,
                dragEnabled: true,
                layoutDependency,
                layoutId: 'TaJGgfGba',
                native: true,
                overdragEnabled: false,
                resetOffset: false,
                scrollBarVisible: false,
                wheelEnabled: true,
                children: /* @__PURE__ */ _jsx4(ComponentViewportProvider2, {
                  children: /* @__PURE__ */ _jsx4(motion2.div, {
                    className: 'framer-1q84s8g-container',
                    layoutDependency,
                    layoutId: 'CbYVXBP1m-container',
                    children: /* @__PURE__ */ _jsx4(ChatList, {
                      height: '100%',
                      id: 'CbYVXBP1m',
                      layoutId: 'CbYVXBP1m',
                      list: [{ colors: 'blue, gray, cyan, yellow', handle: 'NewUser', message: 'I\'m new here', when: 'yesterday', }, {
                        colors: 'red, blue, pink, orange',
                        handle: 'LastUser',
                        message: 'I\'m active here',
                        when: '5 minutes ago',
                      }, { colors: 'pink, white, red, green', handle: 'Sienna', message: 'Hey quick question\u2026', when: '7/18/2023', },],
                      width: '100%',
                    },),
                  },),
                },),
              },),
            },),
            /* @__PURE__ */ _jsx4(ComponentViewportProvider2, {
              children: /* @__PURE__ */ _jsx4(motion2.div, {
                className: 'framer-g6la4c-container',
                layoutDependency,
                layoutId: 'prQFt5glrBc1fe6eSq-container',
                children: /* @__PURE__ */ _jsx4(Input, {
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
                  id: 'prQFt5glrBc1fe6eSq',
                  isMixedBorderRadius: false,
                  isRTL: false,
                  keyboard: '',
                  layoutId: 'prQFt5glrBc1fe6eSq',
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
          ],
        },),
      },),
    },),
  },);
},);
var css3 = [
  '@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }',
  '.framer-gBQZC.framer-peq4w9, .framer-gBQZC .framer-peq4w9 { display: block; }',
  '.framer-gBQZC.framer-gtunfr { height: 844px; overflow: hidden; position: relative; width: 390px; }',
  '.framer-gBQZC .framer-15v4fk0-container { bottom: 0px; flex: none; height: 81px; left: 0px; position: absolute; right: 0px; }',
  '.framer-gBQZC .framer-b96ds7-container { flex: none; height: 64px; left: 0px; position: absolute; right: 0px; top: 0px; z-index: 1; }',
  '.framer-gBQZC .framer-48u67g-container { flex: none; height: 42px; left: calc(-70.98445595854919% - 294px / 2); position: absolute; top: calc(120.12658227848104% - 42px / 2); width: 294px; }',
  '.framer-gBQZC .framer-1sg2y0x { bottom: 81px; flex: none; height: 596px; left: 0px; position: absolute; right: 0px; z-index: 5; }',
  '.framer-gBQZC .framer-1q84s8g-container { height: auto; position: relative; width: auto; }',
  '.framer-gBQZC .framer-g6la4c-container { flex: none; height: 42px; left: 48px; position: absolute; top: 86px; width: 294px; }',
];
var FramerfOqr60mxE = withCSS2(Component2, css3, 'framer-gBQZC',);
var stdin_default4 = FramerfOqr60mxE;
FramerfOqr60mxE.displayName = 'V2 - chatMain';
FramerfOqr60mxE.defaultProps = { height: 844, width: 390, };
addPropertyControls4(FramerfOqr60mxE, {
  JrBg2qz0l: { title: 'Tap', type: ControlType4.EventHandler, },
  FCzHNEJyL: { title: 'Tap 2', type: ControlType4.EventHandler, },
  bEIOQQukc: { title: 'Tap 3', type: ControlType4.EventHandler, },
},);
addFonts2(FramerfOqr60mxE, [{ explicitInter: true, fonts: [], }, ...NavBarFonts, ...TopBarFonts, ...InputFonts, ...ChatListFonts,], {
  supportsExplicitInterCodegen: true,
},);

// virtual:chatMain
import { WithFramerBreakpoints, } from 'unframer';
import { jsx, } from 'react/jsx-runtime';
stdin_default4.Responsive = (props,) => {
  return /* @__PURE__ */ jsx(WithFramerBreakpoints, { Component: stdin_default4, ...props, },);
};
var chatMain_default = stdin_default4;
export { chatMain_default as default, };
