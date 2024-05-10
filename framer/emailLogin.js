/* eslint-disable */
'use client';
import { Input, useIsomorphicLayoutEffect, } from './chunk-5IVOZXBX.js';
import {
  borderRadiusControl,
  fontControls,
  fontSizeOptions,
  fontStack,
  paddingControl,
  useControlledState,
  useFontControls,
  useIsInPreview,
  useOnEnter,
  usePadding,
  useRadius,
} from './chunk-JJFCSOIW.js';
import { className, css, fonts, } from './chunk-XH7W2HFD.js';
import { Pattern, } from './chunk-HEETZSPU.js';
import { className as className2, css as css2, fonts as fonts2, Icon, } from './chunk-6MAF3TKJ.js';
import './chunk-ZBBVTMRC.js';

// https :https://framerusercontent.com/modules/pzrE5r9MoImocuoI5WXn/HsQ9ELaeLl5TIRuYgMfc/aqBlkXmlJ.js
import { jsx as _jsx4, jsxs as _jsxs2, } from 'react/jsx-runtime';
import {
  addFonts as addFonts3,
  addPropertyControls as addPropertyControls4,
  ComponentViewportProvider as ComponentViewportProvider2,
  ControlType as ControlType4,
  cx as cx3,
  getFonts as getFonts2,
  getFontsFromSharedStyle as getFontsFromSharedStyle2,
  RichText as RichText3,
  useActiveVariantCallback as useActiveVariantCallback3,
  useComponentViewport as useComponentViewport3,
  useLocaleInfo as useLocaleInfo3,
  useVariantState as useVariantState3,
  withCSS as withCSS4,
} from 'unframer';
import { LayoutGroup as LayoutGroup3, motion as motion3, MotionConfigContext as MotionConfigContext3, } from 'unframer';
import * as React3 from 'react';

// https :https://framerusercontent.com/modules/koBilKb3GL3c3kmMo2ew/78f62ZxYX2ctDlTSzaqp/SahvSrjoN.js
import { jsx as _jsx3, jsxs as _jsxs, } from 'react/jsx-runtime';
import {
  addFonts as addFonts2,
  addPropertyControls as addPropertyControls3,
  ComponentViewportProvider,
  ControlType as ControlType3,
  cx as cx2,
  getFonts,
  getFontsFromSharedStyle,
  RichText as RichText2,
  useActiveVariantCallback as useActiveVariantCallback2,
  useComponentViewport as useComponentViewport2,
  useLocaleInfo as useLocaleInfo2,
  useVariantState as useVariantState2,
  withCSS as withCSS3,
} from 'unframer';
import { LayoutGroup as LayoutGroup2, motion as motion2, MotionConfigContext as MotionConfigContext2, } from 'unframer';
import * as React2 from 'react';

// https :https://framerusercontent.com/modules/1GD12NRenWIlMwW2i3Rx/ySj9GOIDEhv52U6LfC99/Input_3.js
import { jsx as _jsx, } from 'react/jsx-runtime';
import { addPropertyControls, ControlType, withCSS, } from 'unframer';
import { useCallback, useEffect, useMemo, useRef, } from 'react';
var Input2 = withCSS(function Input22(props,) {
  const {
    placeholder,
    backgroundColor,
    textColor,
    border,
    borderWidth,
    password,
    onSubmit,
    onFocus,
    onBlur,
    value,
    textAlign,
    multiLine,
    placeholderColor,
    focused,
    inputStyle,
    caretColor,
    fontFamily,
    blurOnSubmit,
    disabled,
    keyboard,
    truncate,
    onChange,
    onValueChange,
    maxLength,
    lineHeight,
    enableLimit,
    isRTL,
    style,
  } = props;
  const [inputValue, setValue,] = useControlledState(value,);
  const inputEle = useRef();
  const Tag = useMemo(() => multiLine ? 'textarea' : 'input', [multiLine,],);
  const inPreview = useIsInPreview();
  const fontStyles = useFontControls(props,);
  const paddingValue = usePadding(props,);
  const borderRadius = useRadius(props,);
  const handleChange = useCallback((event,) => {
    const element = multiLine ? event.nativeEvent.target : event.nativeEvent.target;
    const value2 = element.value;
    setValue(value2,);
    if (onChange) {
      onChange(value2,);
    }
    if (onValueChange) {
      onValueChange(value2,);
    }
  }, [onChange, multiLine,],);
  useOnEnter(() => {
    if (inPreview && focused) {
      inputEle.current.focus();
    }
  },);
  useEffect(() => {
    if (inPreview && focused) {
      inputEle.current.focus();
    }
  }, [focused,],);
  useIsomorphicLayoutEffect(() => {
    if (multiLine && props.style.height !== '100%') {
      inputEle.current.style.height = 'auto';
      inputEle.current.style.height = inputEle.current.scrollHeight + 'px';
    }
  }, [inputValue, multiLine, style === null || style === void 0 ? void 0 : style.height, placeholder,],);
  return /* @__PURE__ */ _jsx(Tag, {
    onChange: handleChange,
    ref: inputEle,
    value: inputValue,
    placeholder,
    onKeyDown: (e,) => {
      if (e.keyCode === 13) {
        if (blurOnSubmit && inputEle.current) {
          inputEle.current.blur();
        }
        if (onSubmit) {
          onSubmit();
        }
      }
    },
    disabled,
    onFocus: () => {
      if (onFocus) {
        onFocus();
      }
    },
    onBlur: () => {
      if (onBlur) {
        onBlur();
      }
    },
    maxLength: enableLimit ? maxLength : 524288,
    autoFocus: inPreview && focused,
    className: 'framer-default-input',
    rows: 1,
    style: {
      '--framer-default-input-border-width': `${props.borderWidth}px`,
      '--framer-default-input-border-color': props.focusColor,
      '--framer-default-input-placeholder-color': props.placeholderColor,
      ...baseInputStyles,
      color: textColor,
      backgroundColor,
      borderRadius,
      textAlign,
      lineHeight,
      caretColor,
      margin: 0,
      display: 'flex',
      height: 'auto',
      padding: paddingValue,
      direction: isRTL ? 'rtl' : 'ltr',
      overflow: 'show',
      textOverflow: truncate ? 'ellipsis' : 'unset',
      boxShadow: !inPreview && focused
        ? `inset 0 0 0 ${props.borderWidth}px ${props.focusColor}`
        : `inset 0 0 0 ${borderWidth}px ${border}`,
      ...inputStyle,
      ...style,
      ...fontStyles,
    },
    type: password ? 'password' : 'text',
    inputMode: keyboard,
  },);
}, [
  '.framer-default-input { --framer-default-input-border-width: 1px; --framer-default-input-border-color: #09f; --framer-default-input-placeholder-color: #aaa; }',
  '.framer-default-input:focus { box-shadow: inset 0 0 0 var(--framer-default-input-border-width) var(--framer-default-input-border-color) !important; }',
  '.framer-default-input::placeholder { color: var(--framer-default-input-placeholder-color) !important; }',
],);
Input2.defaultProps = {
  value: '',
  placeholder: 'Type something\u2026',
  width: 260,
  height: 50,
  backgroundColor: '#EBEBEB',
  textColor: '#333',
  focusColor: '#09F',
  fontSize: 16,
  fontWeight: 400,
  borderRadius: 8,
  lineHeight: 1.4,
  padding: 15,
  border: 'rgba(0,0,0,0)',
  placeholderColor: '#aaa',
  borderWidth: 1,
  truncate: false,
  alignment: 'left',
  caretColor: '#333',
  multiLine: false,
  maxLength: 10,
  password: false,
  keyboard: '',
};
addPropertyControls(Input2, {
  placeholder: { type: ControlType.String, title: 'Placeholder', },
  value: { type: ControlType.String, title: 'Value', },
  textColor: { type: ControlType.Color, title: 'Text', },
  caretColor: { type: ControlType.Color, title: 'Caret', },
  placeholderColor: { type: ControlType.Color, title: 'Placeholder', },
  backgroundColor: { type: ControlType.Color, title: 'Background', },
  border: { type: ControlType.Color, title: 'Border', },
  borderWidth: { type: ControlType.Number, title: ' ', min: 1, max: 5, displayStepper: true, },
  focusColor: { type: ControlType.Color, title: 'Focus', },
  focused: { type: ControlType.Boolean, title: 'Focused', defaultValue: false, disabledTitle: 'No', enabledTitle: 'Yes', },
  ...fontControls,
  fontSize: { ...fontSizeOptions, },
  lineHeight: { type: ControlType.Number, min: 0, step: 0.1, max: 2, displayStepper: true, },
  ...paddingControl,
  ...borderRadiusControl,
  textAlign: {
    title: 'Text Align',
    type: ControlType.Enum,
    displaySegmentedControl: true,
    optionTitles: ['Left', 'Center', 'Right',],
    options: ['left', 'center', 'right',],
  },
  isRTL: { type: ControlType.Boolean, title: 'Direction', enabledTitle: 'RTL', disabledTitle: 'LTR', defaultValue: false, },
  disabled: { type: ControlType.Boolean, title: 'Disabled', defaultValue: false, disabledTitle: 'No', enabledTitle: 'Yes', },
  multiLine: { type: ControlType.Boolean, title: 'Text Area', defaultValue: false, disabledTitle: 'No', enabledTitle: 'Yes', },
  truncate: {
    type: ControlType.Boolean,
    title: 'Truncate',
    defaultValue: false,
    disabledTitle: 'No',
    enabledTitle: 'Yes',
    hidden: ({ multiLine, },) => multiLine,
  },
  password: {
    type: ControlType.Boolean,
    title: 'Password',
    hidden: ({ multiLine, },) => multiLine,
    defaultValue: false,
    disabledTitle: 'No',
    enabledTitle: 'Yes',
  },
  enableLimit: {
    title: 'Limit',
    type: ControlType.Boolean,
    displayStepper: true,
    defaultValue: false,
    disabledTitle: 'No',
    enabledTitle: 'Yes',
  },
  maxLength: {
    title: ' ',
    type: ControlType.Number,
    // @ts-ignore
    defaultValue: Input2.defaultProps.maxLength,
    displayStepper: true,
    min: 1,
    hidden: ({ enableLimit, },) => !enableLimit,
  },
  keyboard: {
    type: ControlType.Enum,
    title: 'Keyboard',
    defaultValue: '',
    options: ['', 'numeric', 'tel', 'decimal', 'email', 'url', 'search',],
    optionTitles: ['Default', 'Numeric', 'Phone', 'Decimal', 'Email', 'URL', 'Search',],
  },
  onChange: { type: ControlType.EventHandler, },
  onSubmit: { type: ControlType.EventHandler, },
  onFocus: { type: ControlType.EventHandler, },
  onBlur: { type: ControlType.EventHandler, },
},);
var baseInputStyles = {
  pointerEvents: 'auto',
  border: 'none',
  width: '100%',
  boxSizing: 'border-box',
  outline: 'none',
  resize: 'none',
  margin: 0,
  fontFamily: fontStack,
  WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
  WebkitAppearance: 'none',
};

// https :https://framerusercontent.com/modules/pldL0yM6gJlV7Jk9zyur/RiarWDL24gcLS0TGqRhO/dZxTjx8hf.js
import { jsx as _jsx2, } from 'react/jsx-runtime';
import {
  addFonts,
  addPropertyControls as addPropertyControls2,
  ControlType as ControlType2,
  cx,
  RichText,
  useActiveVariantCallback,
  useComponentViewport,
  useLocaleInfo,
  useVariantState,
  withCSS as withCSS2,
} from 'unframer';
import { LayoutGroup, motion, MotionConfigContext, } from 'unframer';
import * as React from 'react';
var cycleOrder = ['kNha01kUl',];
var serializationHash = 'framer-rcUvf';
var variantClassNames = { kNha01kUl: 'framer-v-w54mzp', };
var transition1 = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: 'spring', };
var transformTemplate1 = (_, t,) => `translate(-50%, -50%) ${t}`;
var Transition = ({ value, children, },) => {
  const config = React.useContext(MotionConfigContext,);
  const transition = value !== null && value !== void 0 ? value : config.transition;
  const contextValue = React.useMemo(() => ({ ...config, transition, }), [JSON.stringify(transition,),],);
  return /* @__PURE__ */ _jsx2(MotionConfigContext.Provider, { value: contextValue, children, },);
};
var Variants = motion(React.Fragment,);
var getProps = ({ height, id, tap, width, ...props },) => {
  return { ...props, exr6QS_rj: tap !== null && tap !== void 0 ? tap : props.exr6QS_rj, };
};
var createLayoutDependency = (props, variants,) => variants.join('-',) + props.layoutDependency;
var Component = /* @__PURE__ */ React.forwardRef(function (props, ref,) {
  const { activeLocale, setLocale, } = useLocaleInfo();
  const { style, className: className3, layoutId, variant, exr6QS_rj, ...restProps } = getProps(props,);
  const { baseVariant, classNames, gestureVariant, setGestureState, setVariant, variants, } = useVariantState({
    cycleOrder,
    defaultVariant: 'kNha01kUl',
    variant,
    variantClassNames,
  },);
  const layoutDependency = createLayoutDependency(props, variants,);
  const { activeVariantCallback, delay, } = useActiveVariantCallback(baseVariant,);
  const onTap1pwogec = activeVariantCallback(async (...args) => {
    if (exr6QS_rj) {
      const res = await exr6QS_rj(...args,);
      if (res === false) {
        return false;
      }
    }
  },);
  const ref1 = React.useRef(null,);
  const defaultLayoutId = React.useId();
  const sharedStyleClassNames = [];
  const componentViewport = useComponentViewport();
  return /* @__PURE__ */ _jsx2(LayoutGroup, {
    id: layoutId !== null && layoutId !== void 0 ? layoutId : defaultLayoutId,
    children: /* @__PURE__ */ _jsx2(Variants, {
      animate: variants,
      initial: false,
      children: /* @__PURE__ */ _jsx2(Transition, {
        value: transition1,
        children: /* @__PURE__ */ _jsx2(motion.div, {
          ...restProps,
          className: cx(serializationHash, ...sharedStyleClassNames, 'framer-w54mzp', className3, classNames,),
          'data-framer-name': 'Variant 1',
          layoutDependency,
          layoutId: 'kNha01kUl',
          onHoverEnd: () => setGestureState({ isHovered: false, },),
          onHoverStart: () => setGestureState({ isHovered: true, },),
          onTap: () => setGestureState({ isPressed: false, },),
          onTapCancel: () => setGestureState({ isPressed: false, },),
          onTapStart: () => setGestureState({ isPressed: true, },),
          ref: ref !== null && ref !== void 0 ? ref : ref1,
          style: { ...style, },
          children: /* @__PURE__ */ _jsx2(motion.div, {
            className: 'framer-8ot8ky',
            'data-highlight': true,
            layoutDependency,
            layoutId: 'PZG_QczA1',
            onTap: onTap1pwogec,
            style: {
              backgroundColor: 'rgb(255, 121, 173)',
              borderBottomLeftRadius: 36,
              borderBottomRightRadius: 36,
              borderTopLeftRadius: 36,
              borderTopRightRadius: 36,
            },
            children: /* @__PURE__ */ _jsx2(RichText, {
              __fromCanvasComponent: true,
              children: /* @__PURE__ */ _jsx2(React.Fragment, {
                children: /* @__PURE__ */ _jsx2(motion.p, {
                  style: { '--framer-text-color': 'var(--extracted-r6o4lv, rgb(255, 255, 255))', },
                  children: 'Login',
                },),
              },),
              className: 'framer-1hyt64x',
              fonts: ['Inter',],
              layoutDependency,
              layoutId: 'PuCoAk8HA',
              style: {
                '--extracted-r6o4lv': 'rgb(255, 255, 255)',
                '--framer-link-text-color': 'rgb(0, 153, 255)',
                '--framer-link-text-decoration': 'underline',
              },
              transformTemplate: transformTemplate1,
              verticalAlignment: 'top',
              withExternalLayout: true,
            },),
          },),
        },),
      },),
    },),
  },);
},);
var css3 = [
  '@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }',
  '.framer-rcUvf.framer-b1qmxj, .framer-rcUvf .framer-b1qmxj { display: block; }',
  '.framer-rcUvf.framer-w54mzp { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 39px; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 304px; }',
  '.framer-rcUvf .framer-8ot8ky { cursor: pointer; flex: none; height: 39px; overflow: hidden; position: relative; width: 303px; will-change: var(--framer-will-change-override, transform); }',
  '.framer-rcUvf .framer-1hyt64x { flex: none; height: auto; left: 50%; position: absolute; top: 49%; white-space: pre; width: auto; }',
  '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-rcUvf.framer-w54mzp { gap: 0px; } .framer-rcUvf.framer-w54mzp > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-rcUvf.framer-w54mzp > :first-child { margin-left: 0px; } .framer-rcUvf.framer-w54mzp > :last-child { margin-right: 0px; } }',
];
var FramerdZxTjx8hf = withCSS2(Component, css3, 'framer-rcUvf',);
var stdin_default = FramerdZxTjx8hf;
FramerdZxTjx8hf.displayName = 'Login button';
FramerdZxTjx8hf.defaultProps = { height: 39, width: 304, };
addPropertyControls2(FramerdZxTjx8hf, { exr6QS_rj: { title: 'Tap', type: ControlType2.EventHandler, }, },);
addFonts(FramerdZxTjx8hf, [{
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
},], { supportsExplicitInterCodegen: true, },);

// https :https://framerusercontent.com/modules/koBilKb3GL3c3kmMo2ew/78f62ZxYX2ctDlTSzaqp/SahvSrjoN.js
var InputFonts = getFonts(Input2,);
var Input1Fonts = getFonts(Input,);
var LoginButtonFonts = getFonts(stdin_default,);
var cycleOrder2 = ['r9EgqgLZh',];
var serializationHash2 = 'framer-z4EQI';
var variantClassNames2 = { r9EgqgLZh: 'framer-v-ov61lt', };
var transition12 = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: 'spring', };
var Transition2 = ({ value, children, },) => {
  const config = React2.useContext(MotionConfigContext2,);
  const transition = value !== null && value !== void 0 ? value : config.transition;
  const contextValue = React2.useMemo(() => ({ ...config, transition, }), [JSON.stringify(transition,),],);
  return /* @__PURE__ */ _jsx3(MotionConfigContext2.Provider, { value: contextValue, children, },);
};
var Variants2 = motion2(React2.Fragment,);
var getProps2 = ({ email, height, id, onEmailChange, onPasswordChange, onSIGnIn, onSignUp, width, ...props },) => {
  return {
    ...props,
    BQAOi9_GF: onEmailChange !== null && onEmailChange !== void 0 ? onEmailChange : props.BQAOi9_GF,
    br1Tl4FvQ: onSIGnIn !== null && onSIGnIn !== void 0 ? onSIGnIn : props.br1Tl4FvQ,
    hQSFxRWSB: onSignUp !== null && onSignUp !== void 0 ? onSignUp : props.hQSFxRWSB,
    SthIwqkVS: email !== null && email !== void 0 ? email : props.SthIwqkVS,
    VWWH2otIi: onPasswordChange !== null && onPasswordChange !== void 0 ? onPasswordChange : props.VWWH2otIi,
  };
};
var createLayoutDependency2 = (props, variants,) => variants.join('-',) + props.layoutDependency;
var Component2 = /* @__PURE__ */ React2.forwardRef(function (props, ref,) {
  const { activeLocale, setLocale, } = useLocaleInfo2();
  const { style, className: className3, layoutId, variant, SthIwqkVS, BQAOi9_GF, VWWH2otIi, hQSFxRWSB, br1Tl4FvQ, ...restProps } =
    getProps2(props,);
  const { baseVariant, classNames, gestureVariant, setGestureState, setVariant, variants, } = useVariantState2({
    cycleOrder: cycleOrder2,
    defaultVariant: 'r9EgqgLZh',
    variant,
    variantClassNames: variantClassNames2,
  },);
  const layoutDependency = createLayoutDependency2(props, variants,);
  const { activeVariantCallback, delay, } = useActiveVariantCallback2(baseVariant,);
  const onChangenwg0kl = activeVariantCallback(async (...args) => {
    if (BQAOi9_GF) {
      const res = await BQAOi9_GF(...args,);
      if (res === false) {
        return false;
      }
    }
  },);
  const onChange11jrjjm = activeVariantCallback(async (...args) => {
    if (VWWH2otIi) {
      const res = await VWWH2otIi(...args,);
      if (res === false) {
        return false;
      }
    }
  },);
  const exr6QS_rjnhnvi5 = activeVariantCallback(async (...args) => {
    if (br1Tl4FvQ) {
      const res = await br1Tl4FvQ(...args,);
      if (res === false) {
        return false;
      }
    }
  },);
  const onTap1qmveyu = activeVariantCallback(async (...args) => {
    if (hQSFxRWSB) {
      const res = await hQSFxRWSB(...args,);
      if (res === false) {
        return false;
      }
    }
  },);
  const ref1 = React2.useRef(null,);
  const defaultLayoutId = React2.useId();
  const sharedStyleClassNames = [className2,];
  const componentViewport = useComponentViewport2();
  return /* @__PURE__ */ _jsx3(LayoutGroup2, {
    id: layoutId !== null && layoutId !== void 0 ? layoutId : defaultLayoutId,
    children: /* @__PURE__ */ _jsx3(Variants2, {
      animate: variants,
      initial: false,
      children: /* @__PURE__ */ _jsx3(Transition2, {
        value: transition12,
        children: /* @__PURE__ */ _jsxs(motion2.div, {
          ...restProps,
          className: cx2(serializationHash2, ...sharedStyleClassNames, 'framer-ov61lt', className3, classNames,),
          'data-framer-name': 'Variant 1',
          layoutDependency,
          layoutId: 'r9EgqgLZh',
          onHoverEnd: () => setGestureState({ isHovered: false, },),
          onHoverStart: () => setGestureState({ isHovered: true, },),
          onTap: () => setGestureState({ isPressed: false, },),
          onTapCancel: () => setGestureState({ isPressed: false, },),
          onTapStart: () => setGestureState({ isPressed: true, },),
          ref: ref !== null && ref !== void 0 ? ref : ref1,
          style: { ...style, },
          children: [
            /* @__PURE__ */ _jsx3(RichText2, {
              __fromCanvasComponent: true,
              children: /* @__PURE__ */ _jsx3(React2.Fragment, {
                children: /* @__PURE__ */ _jsx3(motion2.h1, {
                  className: 'framer-styles-preset-ame1jg',
                  'data-styles-preset': 'e81t2mHNr',
                  children: 'Log in with Email',
                },),
              },),
              className: 'framer-1bvyyux',
              fonts: ['Inter',],
              layoutDependency,
              layoutId: 'YwlG7h9_C',
              style: { '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', },
              verticalAlignment: 'top',
              withExternalLayout: true,
            },),
            /* @__PURE__ */ _jsx3(ComponentViewportProvider, {
              children: /* @__PURE__ */ _jsx3(motion2.div, {
                className: 'framer-y3k0yi-container',
                'data-framer-name': 'email',
                layoutDependency,
                layoutId: 'JS2xLdkNl-container',
                name: 'email',
                children: /* @__PURE__ */ _jsx3(Input2, {
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
                  id: 'JS2xLdkNl',
                  isMixedBorderRadius: false,
                  isRTL: false,
                  keyboard: '',
                  layoutId: 'JS2xLdkNl',
                  lineHeight: 1.4,
                  maxLength: 10,
                  multiLine: false,
                  name: 'email',
                  onChange: onChangenwg0kl,
                  padding: 15,
                  paddingBottom: 15,
                  paddingLeft: 15,
                  paddingPerSide: false,
                  paddingRight: 15,
                  paddingTop: 15,
                  password: false,
                  placeholder: 'Email',
                  placeholderColor: 'rgb(170, 170, 170)',
                  style: { height: '100%', width: '100%', },
                  textAlign: 'left',
                  textColor: 'rgb(51, 51, 51)',
                  topLeftRadius: 30,
                  topRightRadius: 30,
                  truncate: false,
                  value: SthIwqkVS,
                  width: '100%',
                },),
              },),
            },),
            /* @__PURE__ */ _jsx3(ComponentViewportProvider, {
              children: /* @__PURE__ */ _jsx3(motion2.div, {
                className: 'framer-2t6z4i-container',
                'data-framer-name': 'password',
                layoutDependency,
                layoutId: 'ElfR3q_LB-container',
                name: 'password',
                children: /* @__PURE__ */ _jsx3(Input, {
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
                  id: 'ElfR3q_LB',
                  isMixedBorderRadius: false,
                  isRTL: false,
                  keyboard: '',
                  layoutId: 'ElfR3q_LB',
                  lineHeight: 1.4,
                  maxLength: 10,
                  multiLine: false,
                  name: 'password',
                  onChange: onChange11jrjjm,
                  padding: 15,
                  paddingBottom: 15,
                  paddingLeft: 15,
                  paddingPerSide: false,
                  paddingRight: 15,
                  paddingTop: 15,
                  password: true,
                  placeholder: 'Password',
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
            /* @__PURE__ */ _jsx3(ComponentViewportProvider, {
              width: '304px',
              children: /* @__PURE__ */ _jsx3(motion2.div, {
                className: 'framer-1cfyzht-container',
                layoutDependency,
                layoutId: 'hUO65aUaO-container',
                children: /* @__PURE__ */ _jsx3(stdin_default, {
                  exr6QS_rj: exr6QS_rjnhnvi5,
                  height: '100%',
                  id: 'hUO65aUaO',
                  layoutId: 'hUO65aUaO',
                  style: { height: '100%', width: '100%', },
                  width: '100%',
                },),
              },),
            },),
            /* @__PURE__ */ _jsx3(RichText2, {
              __fromCanvasComponent: true,
              children: /* @__PURE__ */ _jsx3(React2.Fragment, {
                children: /* @__PURE__ */ _jsx3(motion2.p, {
                  style: {
                    '--font-selector': 'R0Y7RE0gU2Fucy0zMDA=',
                    '--framer-font-family': '"DM Sans", "DM Sans Placeholder", sans-serif',
                    '--framer-font-size': '14px',
                    '--framer-font-weight': '300',
                    '--framer-text-alignment': 'center',
                  },
                  children: 'Forgot Passrod?',
                },),
              },),
              className: 'framer-qmoktu',
              fonts: ['GF;DM Sans-300',],
              layoutDependency,
              layoutId: 'jPJvp9SPs',
              style: { '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', },
              verticalAlignment: 'top',
              withExternalLayout: true,
            },),
            /* @__PURE__ */ _jsxs(motion2.div, {
              className: 'framer-11rxymu',
              layoutDependency,
              layoutId: 'PK7JOuSic',
              children: [
                /* @__PURE__ */ _jsx3(RichText2, {
                  __fromCanvasComponent: true,
                  children: /* @__PURE__ */ _jsx3(React2.Fragment, {
                    children: /* @__PURE__ */ _jsx3(motion2.p, {
                      style: {
                        '--font-selector': 'R0Y7RE0gU2Fucy03MDA=',
                        '--framer-font-family': '"DM Sans", "DM Sans Placeholder", sans-serif',
                        '--framer-font-size': '14px',
                        '--framer-font-weight': '700',
                        '--framer-text-alignment': 'center',
                      },
                      children: 'Don\'t have account yet? ',
                    },),
                  },),
                  className: 'framer-deuppy',
                  fonts: ['GF;DM Sans-700',],
                  layoutDependency,
                  layoutId: 'Fr7sPwSmK',
                  style: { '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', },
                  verticalAlignment: 'top',
                  withExternalLayout: true,
                },),
                /* @__PURE__ */ _jsx3(RichText2, {
                  __fromCanvasComponent: true,
                  children: /* @__PURE__ */ _jsx3(React2.Fragment, {
                    children: /* @__PURE__ */ _jsx3(motion2.p, {
                      style: { '--framer-text-color': 'var(--extracted-r6o4lv, rgb(255, 121, 173))', },
                      children: 'Sign up',
                    },),
                  },),
                  className: 'framer-na13l2',
                  'data-highlight': true,
                  fonts: ['Inter',],
                  layoutDependency,
                  layoutId: 'z43g1tz6_',
                  onTap: onTap1qmveyu,
                  style: {
                    '--extracted-r6o4lv': 'rgb(255, 121, 173)',
                    '--framer-link-text-color': 'rgb(0, 153, 255)',
                    '--framer-link-text-decoration': 'underline',
                  },
                  verticalAlignment: 'top',
                  withExternalLayout: true,
                },),
              ],
            },),
          ],
        },),
      },),
    },),
  },);
},);
var css4 = [
  '@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }',
  '.framer-z4EQI.framer-i241bi, .framer-z4EQI .framer-i241bi { display: block; }',
  '.framer-z4EQI.framer-ov61lt { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 30px; height: 334px; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 300px; }',
  '.framer-z4EQI .framer-1bvyyux { flex: none; height: 18px; position: relative; white-space: pre-wrap; width: 157px; word-break: break-word; word-wrap: break-word; }',
  '.framer-z4EQI .framer-y3k0yi-container, .framer-z4EQI .framer-2t6z4i-container { flex: none; height: 42px; position: relative; width: 100%; }',
  '.framer-z4EQI .framer-1cfyzht-container { flex: none; height: 39px; position: relative; width: 304px; }',
  '.framer-z4EQI .framer-qmoktu, .framer-z4EQI .framer-deuppy { flex: none; height: auto; position: relative; white-space: pre; width: auto; }',
  '.framer-z4EQI .framer-11rxymu { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }',
  '.framer-z4EQI .framer-na13l2 { cursor: pointer; flex: none; height: auto; position: relative; white-space: pre; width: auto; }',
  '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-z4EQI.framer-ov61lt, .framer-z4EQI .framer-11rxymu { gap: 0px; } .framer-z4EQI.framer-ov61lt > * { margin: 0px; margin-bottom: calc(30px / 2); margin-top: calc(30px / 2); } .framer-z4EQI.framer-ov61lt > :first-child { margin-top: 0px; } .framer-z4EQI.framer-ov61lt > :last-child { margin-bottom: 0px; } .framer-z4EQI .framer-11rxymu > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-z4EQI .framer-11rxymu > :first-child { margin-left: 0px; } .framer-z4EQI .framer-11rxymu > :last-child { margin-right: 0px; } }',
  ...css2,
];
var FramerSahvSrjoN = withCSS3(Component2, css4, 'framer-z4EQI',);
var stdin_default2 = FramerSahvSrjoN;
FramerSahvSrjoN.displayName = 'LoginForm';
FramerSahvSrjoN.defaultProps = { height: 334, width: 300, };
addPropertyControls3(FramerSahvSrjoN, {
  SthIwqkVS: { defaultValue: '', title: 'email', type: ControlType3.String, },
  BQAOi9_GF: { title: 'onEmailChange', type: ControlType3.EventHandler, },
  VWWH2otIi: { title: 'onPasswordChange', type: ControlType3.EventHandler, },
  hQSFxRWSB: { title: 'onSignUp', type: ControlType3.EventHandler, },
  br1Tl4FvQ: { title: 'onSIgnIn', type: ControlType3.EventHandler, },
},);
addFonts2(FramerSahvSrjoN, [
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
      url: 'https://fonts.gstatic.com/s/dmsans/v15/rP2tp2ywxg089UriI5-g4vlH9VoD8CmcqZG40F9JadbnoEwARZthS2f3ZGMZpg.woff2',
      weight: '700',
    },],
  },
  ...InputFonts,
  ...Input1Fonts,
  ...LoginButtonFonts,
  ...getFontsFromSharedStyle(fonts2,),
], { supportsExplicitInterCodegen: true, },);

// https :https://framerusercontent.com/modules/pzrE5r9MoImocuoI5WXn/HsQ9ELaeLl5TIRuYgMfc/aqBlkXmlJ.js
var PatternFonts = getFonts2(Pattern,);
var LoginFormFonts = getFonts2(stdin_default2,);
var IconoirFonts = getFonts2(Icon,);
var cycleOrder3 = ['vVckMh7Uy',];
var serializationHash3 = 'framer-XEIfH';
var variantClassNames3 = { vVckMh7Uy: 'framer-v-jm4tdk', };
var transition13 = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: 'spring', };
var Transition3 = ({ value, children, },) => {
  const config = React3.useContext(MotionConfigContext3,);
  const transition = value !== null && value !== void 0 ? value : config.transition;
  const contextValue = React3.useMemo(() => ({ ...config, transition, }), [JSON.stringify(transition,),],);
  return /* @__PURE__ */ _jsx4(MotionConfigContext3.Provider, { value: contextValue, children, },);
};
var Variants3 = motion3(React3.Fragment,);
var getProps3 = ({ height, id, tap, width, ...props },) => {
  return { ...props, EZHwfETCV: tap !== null && tap !== void 0 ? tap : props.EZHwfETCV, };
};
var createLayoutDependency3 = (props, variants,) => variants.join('-',) + props.layoutDependency;
var Component3 = /* @__PURE__ */ React3.forwardRef(function (props, ref,) {
  const { activeLocale, setLocale, } = useLocaleInfo3();
  const { style, className: className3, layoutId, variant, EZHwfETCV, ...restProps } = getProps3(props,);
  const { baseVariant, classNames, gestureVariant, setGestureState, setVariant, variants, } = useVariantState3({
    cycleOrder: cycleOrder3,
    defaultVariant: 'vVckMh7Uy',
    variant,
    variantClassNames: variantClassNames3,
  },);
  const layoutDependency = createLayoutDependency3(props, variants,);
  const { activeVariantCallback, delay, } = useActiveVariantCallback3(baseVariant,);
  const onClick1hfm961 = activeVariantCallback(async (...args) => {
    if (EZHwfETCV) {
      const res = await EZHwfETCV(...args,);
      if (res === false) {
        return false;
      }
    }
  },);
  const ref1 = React3.useRef(null,);
  const defaultLayoutId = React3.useId();
  const sharedStyleClassNames = [className,];
  const componentViewport = useComponentViewport3();
  return /* @__PURE__ */ _jsx4(LayoutGroup3, {
    id: layoutId !== null && layoutId !== void 0 ? layoutId : defaultLayoutId,
    children: /* @__PURE__ */ _jsx4(Variants3, {
      animate: variants,
      initial: false,
      children: /* @__PURE__ */ _jsx4(Transition3, {
        value: transition13,
        children: /* @__PURE__ */ _jsxs2(motion3.div, {
          ...restProps,
          className: cx3(serializationHash3, ...sharedStyleClassNames, 'framer-jm4tdk', className3, classNames,),
          'data-framer-name': 'Variant 1',
          layoutDependency,
          layoutId: 'vVckMh7Uy',
          onHoverEnd: () => setGestureState({ isHovered: false, },),
          onHoverStart: () => setGestureState({ isHovered: true, },),
          onTap: () => setGestureState({ isPressed: false, },),
          onTapCancel: () => setGestureState({ isPressed: false, },),
          onTapStart: () => setGestureState({ isPressed: true, },),
          ref: ref !== null && ref !== void 0 ? ref : ref1,
          style: { backgroundColor: 'rgb(255, 255, 255)', ...style, },
          children: [
            /* @__PURE__ */ _jsx4(ComponentViewportProvider2, {
              children: /* @__PURE__ */ _jsx4(motion3.div, {
                className: 'framer-hn6y3x-container',
                layoutDependency,
                layoutId: 'vpywwcMem-container',
                style: { opacity: 0.2, },
                children: /* @__PURE__ */ _jsx4(Pattern, {
                  back: 'rgb(255, 121, 173)',
                  diagonal: true,
                  direction: 'left',
                  duration: 5,
                  front: 'rgb(255, 255, 255)',
                  height: '100%',
                  id: 'vpywwcMem',
                  layoutId: 'vpywwcMem',
                  patternType: 'wave-lines',
                  radius: 0,
                  scale: 22,
                  shouldAnimate: true,
                  style: { height: '100%', width: '100%', },
                  width: '100%',
                },),
              },),
            },),
            /* @__PURE__ */ _jsx4(ComponentViewportProvider2, {
              width: '300px',
              children: /* @__PURE__ */ _jsx4(motion3.div, {
                className: 'framer-1h5hohx-container',
                layoutDependency,
                layoutId: 'PdlWh_KMu-container',
                children: /* @__PURE__ */ _jsx4(stdin_default2, {
                  height: '100%',
                  id: 'PdlWh_KMu',
                  layoutId: 'PdlWh_KMu',
                  SthIwqkVS: '',
                  style: { height: '100%', width: '100%', },
                  width: '100%',
                },),
              },),
            },),
            /* @__PURE__ */ _jsx4(ComponentViewportProvider2, {
              children: /* @__PURE__ */ _jsx4(motion3.div, {
                className: 'framer-hkdqna-container',
                layoutDependency,
                layoutId: 'PoXVKY9MN-container',
                children: /* @__PURE__ */ _jsx4(Icon, {
                  color: 'rgb(0, 0, 0)',
                  height: '100%',
                  iconSearch: 'cancel',
                  iconSelection: 'ArrowLeft',
                  id: 'PoXVKY9MN',
                  layoutId: 'PoXVKY9MN',
                  mirrored: false,
                  onClick: onClick1hfm961,
                  selectByList: false,
                  style: { height: '100%', width: '100%', },
                  width: '100%',
                },),
              },),
            },),
            /* @__PURE__ */ _jsx4(RichText3, {
              __fromCanvasComponent: true,
              children: /* @__PURE__ */ _jsx4(React3.Fragment, {
                children: /* @__PURE__ */ _jsx4(motion3.h6, {
                  className: 'framer-styles-preset-136pxet',
                  'data-styles-preset': 'A_3jD2ulG',
                  children: 'Terms & Agreement',
                },),
              },),
              className: 'framer-3qaq93',
              fonts: ['Inter',],
              layoutDependency,
              layoutId: 'yJ35TYjUb',
              style: { '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', },
              verticalAlignment: 'top',
              withExternalLayout: true,
            },),
          ],
        },),
      },),
    },),
  },);
},);
var css5 = [
  '@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }',
  '.framer-XEIfH.framer-5dzt3o, .framer-XEIfH .framer-5dzt3o { display: block; }',
  '.framer-XEIfH.framer-jm4tdk { height: 844px; overflow: hidden; position: relative; width: 390px; }',
  '.framer-XEIfH .framer-hn6y3x-container { bottom: -2px; flex: none; left: 0px; position: absolute; right: -1px; top: 0px; z-index: 0; }',
  '.framer-XEIfH .framer-1h5hohx-container { flex: none; height: 334px; left: calc(51.538461538461554% - 300px / 2); position: absolute; top: 102px; width: 300px; }',
  '.framer-XEIfH .framer-hkdqna-container { flex: none; height: 44px; left: 30px; position: absolute; top: 30px; width: 44px; }',
  '.framer-XEIfH .framer-3qaq93 { bottom: 24px; flex: none; height: 18px; left: calc(49.743589743589766% - 157px / 2); position: absolute; white-space: pre-wrap; width: 157px; word-break: break-word; word-wrap: break-word; }',
  ...css,
];
var FrameraqBlkXmlJ = withCSS4(Component3, css5, 'framer-XEIfH',);
var stdin_default3 = FrameraqBlkXmlJ;
FrameraqBlkXmlJ.displayName = 'V2 - emailLogin';
FrameraqBlkXmlJ.defaultProps = { height: 844, width: 390, };
addPropertyControls4(FrameraqBlkXmlJ, { EZHwfETCV: { title: 'Tap', type: ControlType4.EventHandler, }, },);
addFonts3(FrameraqBlkXmlJ, [
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
    },],
  },
  ...PatternFonts,
  ...LoginFormFonts,
  ...IconoirFonts,
  ...getFontsFromSharedStyle2(fonts,),
], { supportsExplicitInterCodegen: true, },);

// virtual:emailLogin
import { WithFramerBreakpoints, } from 'unframer';
import { jsx, } from 'react/jsx-runtime';
stdin_default3.Responsive = (props,) => {
  return /* @__PURE__ */ jsx(WithFramerBreakpoints, { Component: stdin_default3, ...props, },);
};
var emailLogin_default = stdin_default3;
export { emailLogin_default as default, };
