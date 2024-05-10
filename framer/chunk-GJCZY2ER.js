/* eslint-disable */
import { Icon, } from './chunk-6MAF3TKJ.js';

// https :https://framerusercontent.com/modules/Y6I5bPWr6qiUKfNlLRH8/IXpsuSdvMNjmp4f7pxhj/TMBejSvYE.js
import { jsx as _jsx, jsxs as _jsxs, } from 'react/jsx-runtime';
import {
  addFonts,
  addPropertyControls,
  ComponentViewportProvider,
  ControlType,
  cx,
  getFonts,
  useActiveVariantCallback,
  useComponentViewport,
  useLocaleInfo,
  useVariantState,
  withCSS,
} from 'unframer';
import { LayoutGroup, motion, MotionConfigContext, } from 'unframer';
import * as React from 'react';
var IconoirFonts = getFonts(Icon,);
var cycleOrder = ['BOOvbCsUV',];
var serializationHash = 'framer-TKFY7';
var variantClassNames = { BOOvbCsUV: 'framer-v-2e9p2k', };
var transition1 = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: 'spring', };
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
    G_6MlVoRT: tap3 !== null && tap3 !== void 0 ? tap3 : props.G_6MlVoRT,
    KP1WGen7f: tap !== null && tap !== void 0 ? tap : props.KP1WGen7f,
    WULCj3z2a: tap2 !== null && tap2 !== void 0 ? tap2 : props.WULCj3z2a,
  };
};
var createLayoutDependency = (props, variants,) => variants.join('-',) + props.layoutDependency;
var Component = /* @__PURE__ */ React.forwardRef(function (props, ref,) {
  const { activeLocale, setLocale, } = useLocaleInfo();
  const { style, className, layoutId, variant, KP1WGen7f, WULCj3z2a, G_6MlVoRT, ...restProps } = getProps(props,);
  const { baseVariant, classNames, gestureVariant, setGestureState, setVariant, variants, } = useVariantState({
    cycleOrder,
    defaultVariant: 'BOOvbCsUV',
    variant,
    variantClassNames,
  },);
  const layoutDependency = createLayoutDependency(props, variants,);
  const { activeVariantCallback, delay, } = useActiveVariantCallback(baseVariant,);
  const onClickcbq49j = activeVariantCallback(async (...args) => {
    if (KP1WGen7f) {
      const res = await KP1WGen7f(...args,);
      if (res === false) {
        return false;
      }
    }
  },);
  const onClicke3ha2d = activeVariantCallback(async (...args) => {
    if (WULCj3z2a) {
      const res = await WULCj3z2a(...args,);
      if (res === false) {
        return false;
      }
    }
  },);
  const onClick1in4gxm = activeVariantCallback(async (...args) => {
    if (G_6MlVoRT) {
      const res = await G_6MlVoRT(...args,);
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
          className: cx(serializationHash, ...sharedStyleClassNames, 'framer-2e9p2k', className, classNames,),
          'data-framer-name': 'Variant 1',
          layoutDependency,
          layoutId: 'BOOvbCsUV',
          onHoverEnd: () => setGestureState({ isHovered: false, },),
          onHoverStart: () => setGestureState({ isHovered: true, },),
          onTap: () => setGestureState({ isPressed: false, },),
          onTapCancel: () => setGestureState({ isPressed: false, },),
          onTapStart: () => setGestureState({ isPressed: true, },),
          ref: ref !== null && ref !== void 0 ? ref : ref1,
          style: { backgroundColor: 'rgb(255, 121, 173)', ...style, },
          children: [
            /* @__PURE__ */ _jsx(ComponentViewportProvider, {
              children: /* @__PURE__ */ _jsx(motion.div, {
                className: 'framer-qgw2fl-container',
                'data-framer-name': 'icon-settings',
                layoutDependency,
                layoutId: 'bXnQIgkvG-container',
                name: 'icon-settings',
                children: /* @__PURE__ */ _jsx(Icon, {
                  color: 'rgb(255, 255, 255)',
                  height: '100%',
                  iconSearch: 'settings',
                  iconSelection: 'KeyframesCouple',
                  id: 'bXnQIgkvG',
                  layoutId: 'bXnQIgkvG',
                  mirrored: false,
                  name: 'icon-settings',
                  onClick: onClickcbq49j,
                  selectByList: false,
                  style: { height: '100%', width: '100%', },
                  width: '100%',
                },),
              },),
            },),
            /* @__PURE__ */ _jsx(ComponentViewportProvider, {
              children: /* @__PURE__ */ _jsx(motion.div, {
                className: 'framer-12bnqkv-container',
                'data-framer-name': 'icon-health',
                layoutDependency,
                layoutId: 'cb7YRznwG-container',
                name: 'icon-health',
                children: /* @__PURE__ */ _jsx(Icon, {
                  color: 'rgb(255, 255, 255)',
                  height: '100%',
                  iconSearch: 'kayframe',
                  iconSelection: 'KeyframesCouple',
                  id: 'cb7YRznwG',
                  layoutId: 'cb7YRznwG',
                  mirrored: false,
                  name: 'icon-health',
                  onClick: onClicke3ha2d,
                  selectByList: true,
                  style: { height: '100%', width: '100%', },
                  width: '100%',
                },),
              },),
            },),
            /* @__PURE__ */ _jsx(ComponentViewportProvider, {
              children: /* @__PURE__ */ _jsx(motion.div, {
                className: 'framer-itp6c7-container',
                'data-framer-name': 'icon-chat',
                layoutDependency,
                layoutId: 'QLmzMbhID-container',
                name: 'icon-chat',
                children: /* @__PURE__ */ _jsx(Icon, {
                  color: 'rgb(255, 255, 255)',
                  height: '100%',
                  iconSearch: 'chatbubble',
                  iconSelection: 'ChatBubble',
                  id: 'QLmzMbhID',
                  layoutId: 'QLmzMbhID',
                  mirrored: false,
                  name: 'icon-chat',
                  onClick: onClick1in4gxm,
                  selectByList: false,
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
  '.framer-TKFY7.framer-gipvfi, .framer-TKFY7 .framer-gipvfi { display: block; }',
  '.framer-TKFY7.framer-2e9p2k { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 80px; height: 81px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 390px; }',
  '.framer-TKFY7 .framer-qgw2fl-container, .framer-TKFY7 .framer-12bnqkv-container, .framer-TKFY7 .framer-itp6c7-container { flex: none; height: 37px; position: relative; width: 37px; }',
  '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-TKFY7.framer-2e9p2k { gap: 0px; } .framer-TKFY7.framer-2e9p2k > * { margin: 0px; margin-left: calc(80px / 2); margin-right: calc(80px / 2); } .framer-TKFY7.framer-2e9p2k > :first-child { margin-left: 0px; } .framer-TKFY7.framer-2e9p2k > :last-child { margin-right: 0px; } }',
];
var FramerTMBejSvYE = withCSS(Component, css, 'framer-TKFY7',);
var stdin_default = FramerTMBejSvYE;
FramerTMBejSvYE.displayName = 'navBar';
FramerTMBejSvYE.defaultProps = { height: 81, width: 390, };
addPropertyControls(FramerTMBejSvYE, {
  KP1WGen7f: { title: 'Tap', type: ControlType.EventHandler, },
  WULCj3z2a: { title: 'Tap 2', type: ControlType.EventHandler, },
  G_6MlVoRT: { title: 'Tap 3', type: ControlType.EventHandler, },
},);
addFonts(FramerTMBejSvYE, [{ explicitInter: true, fonts: [], }, ...IconoirFonts,], { supportsExplicitInterCodegen: true, },);

export { stdin_default, };
