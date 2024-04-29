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
import { className as className2, css as css2, fonts as fonts2, } from './chunk-DCG3Q45P.js';
import { Icon, } from './chunk-NTBY4HVU.js';
import './chunk-ZBBVTMRC.js';

// https :https://framerusercontent.com/modules/xtT3YsjFVMSbtsAE8FEX/D9tMttBftbi6S1rReiK1/ukF6KLpcC.js
import { jsx as _jsx2, jsxs as _jsxs, } from 'react/jsx-runtime';
import {
  addFonts,
  addPropertyControls as addPropertyControls2,
  ComponentViewportProvider,
  ControlType as ControlType2,
  cx,
  getFonts,
  getFontsFromSharedStyle,
  Image,
  RichText,
  useActiveVariantCallback,
  useComponentViewport,
  useLocaleInfo,
  useVariantState,
  withCSS as withCSS2,
} from 'unframer';
import { LayoutGroup, motion, MotionConfigContext, } from 'unframer';
import * as React from 'react';

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

// https :https://framerusercontent.com/modules/xtT3YsjFVMSbtsAE8FEX/D9tMttBftbi6S1rReiK1/ukF6KLpcC.js
var InputFonts = getFonts(Input2,);
var Input1Fonts = getFonts(Input,);
var IconoirFonts = getFonts(Icon,);
var cycleOrder = ['QgZRZ7lSW',];
var serializationHash = 'framer-IAGeJ';
var variantClassNames = { QgZRZ7lSW: 'framer-v-ycfbc2', };
var transition1 = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: 'spring', };
var transformTemplate1 = (_, t,) => `translate(-50%, -50%) ${t}`;
var Transition = ({ value, children, },) => {
  const config = React.useContext(MotionConfigContext,);
  const transition = value !== null && value !== void 0 ? value : config.transition;
  const contextValue = React.useMemo(() => ({ ...config, transition, }), [JSON.stringify(transition,),],);
  return /* @__PURE__ */ _jsx2(MotionConfigContext.Provider, { value: contextValue, children, },);
};
var Variants = motion(React.Fragment,);
var getProps = (
  { email, forgetPassword, height, id, login, onEmailChange, onPasswordChange, onSignUp, password, tap, width, ...props },
) => {
  return {
    ...props,
    bL90RH7td: onEmailChange !== null && onEmailChange !== void 0 ? onEmailChange : props.bL90RH7td,
    kNqW5FcA0: onPasswordChange !== null && onPasswordChange !== void 0 ? onPasswordChange : props.kNqW5FcA0,
    mXYxBY_nh: forgetPassword !== null && forgetPassword !== void 0 ? forgetPassword : props.mXYxBY_nh,
    n5IWueUXC: email !== null && email !== void 0 ? email : props.n5IWueUXC,
    RHCKcI6ht: onSignUp !== null && onSignUp !== void 0 ? onSignUp : props.RHCKcI6ht,
    rvh8J3cx7: password !== null && password !== void 0 ? password : props.rvh8J3cx7,
    SLR_M8IOH: login !== null && login !== void 0 ? login : props.SLR_M8IOH,
    wg9Cpf9R2: tap !== null && tap !== void 0 ? tap : props.wg9Cpf9R2,
  };
};
var createLayoutDependency = (props, variants,) => variants.join('-',) + props.layoutDependency;
var Component = /* @__PURE__ */ React.forwardRef(function (props, ref,) {
  const { activeLocale, setLocale, } = useLocaleInfo();
  const {
    style,
    className: className3,
    layoutId,
    variant,
    wg9Cpf9R2,
    SLR_M8IOH,
    bL90RH7td,
    kNqW5FcA0,
    rvh8J3cx7,
    n5IWueUXC,
    RHCKcI6ht,
    mXYxBY_nh,
    ...restProps
  } = getProps(props,);
  const { baseVariant, classNames, gestureVariant, setGestureState, setVariant, variants, } = useVariantState({
    cycleOrder,
    defaultVariant: 'QgZRZ7lSW',
    variant,
    variantClassNames,
  },);
  const layoutDependency = createLayoutDependency(props, variants,);
  const { activeVariantCallback, delay, } = useActiveVariantCallback(baseVariant,);
  const onTapjkg5nu = activeVariantCallback(async (...args) => {
    if (RHCKcI6ht) {
      const res = await RHCKcI6ht(...args,);
      if (res === false) {
        return false;
      }
    }
  },);
  const onTap1fyrrj = activeVariantCallback(async (...args) => {
    if (mXYxBY_nh) {
      const res = await mXYxBY_nh(...args,);
      if (res === false) {
        return false;
      }
    }
  },);
  const onChange8zdiz1 = activeVariantCallback(async (...args) => {
    if (bL90RH7td) {
      const res = await bL90RH7td(...args,);
      if (res === false) {
        return false;
      }
    }
  },);
  const onChanges1ilbm = activeVariantCallback(async (...args) => {
    if (kNqW5FcA0) {
      const res = await kNqW5FcA0(...args,);
      if (res === false) {
        return false;
      }
    }
  },);
  const onClick1wdro3c = activeVariantCallback(async (...args) => {
    if (wg9Cpf9R2) {
      const res = await wg9Cpf9R2(...args,);
      if (res === false) {
        return false;
      }
    }
  },);
  const onTaptkha7l = activeVariantCallback(async (...args) => {
    if (SLR_M8IOH) {
      const res = await SLR_M8IOH(...args,);
      if (res === false) {
        return false;
      }
    }
  },);
  const ref1 = React.useRef(null,);
  const defaultLayoutId = React.useId();
  const sharedStyleClassNames = [className2, className,];
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
          className: cx(serializationHash, ...sharedStyleClassNames, 'framer-ycfbc2', className3, classNames,),
          'data-framer-name': 'Variant 1',
          layoutDependency,
          layoutId: 'QgZRZ7lSW',
          onHoverEnd: () => setGestureState({ isHovered: false, },),
          onHoverStart: () => setGestureState({ isHovered: true, },),
          onTap: () => setGestureState({ isPressed: false, },),
          onTapCancel: () => setGestureState({ isPressed: false, },),
          onTapStart: () => setGestureState({ isPressed: true, },),
          ref: ref !== null && ref !== void 0 ? ref : ref1,
          style: { backgroundColor: 'rgb(255, 255, 255)', ...style, },
          children: [
            /* @__PURE__ */ _jsx2(Image, {
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
              className: 'framer-1dcx39n',
              'data-framer-name': 'iphone14pro',
              layoutDependency,
              layoutId: 'wVsgzaZFn',
            },),
            /* @__PURE__ */ _jsxs(motion.div, {
              className: 'framer-1exyhg9',
              layoutDependency,
              layoutId: 'Vqye5FzLN',
              transformTemplate: transformTemplate1,
              children: [
                /* @__PURE__ */ _jsx2(RichText, {
                  __fromCanvasComponent: true,
                  children: /* @__PURE__ */ _jsx2(React.Fragment, {
                    children: /* @__PURE__ */ _jsx2(motion.p, {
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
                  className: 'framer-ulwi4h',
                  fonts: ['GF;DM Sans-700',],
                  layoutDependency,
                  layoutId: 'WjXBFk8Te',
                  style: { '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', },
                  verticalAlignment: 'top',
                  withExternalLayout: true,
                },),
                /* @__PURE__ */ _jsx2(RichText, {
                  __fromCanvasComponent: true,
                  children: /* @__PURE__ */ _jsx2(React.Fragment, {
                    children: /* @__PURE__ */ _jsx2(motion.p, {
                      style: { '--framer-text-color': 'var(--extracted-r6o4lv, rgb(255, 121, 173))', },
                      children: 'Sign up',
                    },),
                  },),
                  className: 'framer-12fat4b',
                  'data-highlight': true,
                  fonts: ['Inter',],
                  layoutDependency,
                  layoutId: 'Zm4QayCFG',
                  onTap: onTapjkg5nu,
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
            /* @__PURE__ */ _jsx2(RichText, {
              __fromCanvasComponent: true,
              children: /* @__PURE__ */ _jsx2(React.Fragment, {
                children: /* @__PURE__ */ _jsx2(motion.p, {
                  style: {
                    '--font-selector': 'R0Y7RE0gU2Fucy0zMDA=',
                    '--framer-font-family': '"DM Sans", sans-serif',
                    '--framer-font-size': '14px',
                    '--framer-font-weight': '300',
                    '--framer-text-alignment': 'center',
                  },
                  children: 'Forgot Passrod?',
                },),
              },),
              className: 'framer-177i9g3',
              'data-highlight': true,
              fonts: ['GF;DM Sans-300',],
              layoutDependency,
              layoutId: 'OVPSJT5LD',
              onTap: onTap1fyrrj,
              style: { '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', },
              transformTemplate: transformTemplate1,
              verticalAlignment: 'top',
              withExternalLayout: true,
            },),
            /* @__PURE__ */ _jsx2(RichText, {
              __fromCanvasComponent: true,
              children: /* @__PURE__ */ _jsx2(React.Fragment, {
                children: /* @__PURE__ */ _jsx2(motion.h1, {
                  className: 'framer-styles-preset-ame1jg',
                  'data-styles-preset': 'e81t2mHNr',
                  children: 'Log in with Email',
                },),
              },),
              className: 'framer-1eh0its',
              fonts: ['Inter',],
              layoutDependency,
              layoutId: 'l5mRCdC9L',
              style: { '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', },
              verticalAlignment: 'top',
              withExternalLayout: true,
            },),
            /* @__PURE__ */ _jsx2(ComponentViewportProvider, {
              children: /* @__PURE__ */ _jsx2(motion.div, {
                className: 'framer-1g9xhdp-container',
                layoutDependency,
                layoutId: 'UVxn7n4x7-container',
                children: /* @__PURE__ */ _jsx2(Input2, {
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
                  id: 'UVxn7n4x7',
                  isMixedBorderRadius: false,
                  isRTL: false,
                  keyboard: '',
                  layoutId: 'UVxn7n4x7',
                  lineHeight: 1.4,
                  maxLength: 10,
                  multiLine: false,
                  onChange: onChange8zdiz1,
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
                  value: n5IWueUXC,
                  width: '100%',
                },),
              },),
            },),
            /* @__PURE__ */ _jsx2(ComponentViewportProvider, {
              children: /* @__PURE__ */ _jsx2(motion.div, {
                className: 'framer-nd9mdf-container',
                layoutDependency,
                layoutId: 'j7rk3EvnE-container',
                children: /* @__PURE__ */ _jsx2(Input, {
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
                  id: 'j7rk3EvnE',
                  isMixedBorderRadius: false,
                  isRTL: false,
                  keyboard: '',
                  layoutId: 'j7rk3EvnE',
                  lineHeight: 1.4,
                  maxLength: 10,
                  multiLine: false,
                  onChange: onChanges1ilbm,
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
                  value: rvh8J3cx7,
                  width: '100%',
                },),
              },),
            },),
            /* @__PURE__ */ _jsx2(ComponentViewportProvider, {
              children: /* @__PURE__ */ _jsx2(motion.div, {
                className: 'framer-rj1g1w-container',
                layoutDependency,
                layoutId: 'H5okqAzoO-container',
                children: /* @__PURE__ */ _jsx2(Icon, {
                  color: 'rgb(0, 0, 0)',
                  height: '100%',
                  iconSearch: 'cancel',
                  iconSelection: 'ArrowLeft',
                  id: 'H5okqAzoO',
                  layoutId: 'H5okqAzoO',
                  mirrored: false,
                  onClick: onClick1wdro3c,
                  selectByList: false,
                  style: { height: '100%', width: '100%', },
                  width: '100%',
                },),
              },),
            },),
            /* @__PURE__ */ _jsx2(motion.button, {
              className: 'framer-1mg6t5s',
              'data-framer-name': 'Button',
              'data-highlight': true,
              'data-reset': 'button',
              layoutDependency,
              layoutId: 'y2FXpud8N',
              onTap: onTaptkha7l,
              style: {
                backgroundColor: 'rgb(255, 121, 173)',
                borderBottomLeftRadius: 30,
                borderBottomRightRadius: 30,
                borderTopLeftRadius: 30,
                borderTopRightRadius: 30,
                boxShadow: '2px 2px 2px 0px rgba(0,0,0,0.25)',
              },
              children: /* @__PURE__ */ _jsx2(RichText, {
                __fromCanvasComponent: true,
                children: /* @__PURE__ */ _jsx2(React.Fragment, {
                  children: /* @__PURE__ */ _jsx2(motion.p, {
                    style: {
                      '--font-selector': 'R0Y7RE0gU2Fucy01MDA=',
                      '--framer-font-family': '"DM Sans", sans-serif',
                      '--framer-font-weight': '500',
                      '--framer-text-alignment': 'center',
                      '--framer-text-color': 'var(--extracted-r6o4lv, rgb(255, 255, 255))',
                    },
                    children: 'Login',
                  },),
                },),
                className: 'framer-1nlw9xp',
                fonts: ['GF;DM Sans-500',],
                layoutDependency,
                layoutId: 'pWjRQDxsL',
                style: { '--extracted-r6o4lv': 'rgb(255, 255, 255)', },
                transformTemplate: transformTemplate1,
                verticalAlignment: 'top',
                withExternalLayout: true,
              },),
            },),
            /* @__PURE__ */ _jsx2(RichText, {
              __fromCanvasComponent: true,
              children: /* @__PURE__ */ _jsx2(React.Fragment, {
                children: /* @__PURE__ */ _jsx2(motion.h6, {
                  className: 'framer-styles-preset-136pxet',
                  'data-styles-preset': 'A_3jD2ulG',
                  children: 'Terms & Agreement',
                },),
              },),
              className: 'framer-tfmdiu',
              fonts: ['Inter',],
              layoutDependency,
              layoutId: 'vAtXvSxV6',
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
var css3 = [
  '@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }',
  '.framer-IAGeJ.framer-17imdfe, .framer-IAGeJ .framer-17imdfe { display: block; }',
  '.framer-IAGeJ.framer-ycfbc2 { height: 790px; overflow: hidden; position: relative; width: 386px; }',
  '.framer-IAGeJ .framer-1dcx39n { aspect-ratio: 0.4888888888888889 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 790px); left: 0px; overflow: visible; position: absolute; right: 0px; top: 0px; }',
  '.framer-IAGeJ .framer-1exyhg9 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; left: 49%; overflow: visible; padding: 0px; position: absolute; top: 54%; width: min-content; }',
  '.framer-IAGeJ .framer-ulwi4h { flex: none; height: auto; position: relative; white-space: pre; width: auto; }',
  '.framer-IAGeJ .framer-12fat4b { cursor: pointer; flex: none; height: auto; position: relative; white-space: pre; width: auto; }',
  '.framer-IAGeJ .framer-177i9g3 { cursor: pointer; flex: none; height: auto; left: 49%; position: absolute; top: 48%; white-space: pre; width: auto; }',
  '.framer-IAGeJ .framer-1eh0its { flex: none; height: 18px; left: 43px; position: absolute; top: 115px; white-space: pre-wrap; width: 157px; word-break: break-word; word-wrap: break-word; }',
  '.framer-IAGeJ .framer-1g9xhdp-container { flex: none; height: 42px; left: calc(49.74093264248707% - 299px / 2); position: absolute; top: 161px; width: 299px; }',
  '.framer-IAGeJ .framer-nd9mdf-container { flex: none; height: 42px; left: calc(49.74093264248707% - 299px / 2); position: absolute; top: 231px; width: 299px; }',
  '.framer-IAGeJ .framer-rj1g1w-container { flex: none; height: 44px; left: 30px; position: absolute; top: 58px; width: 44px; }',
  '.framer-IAGeJ .framer-1mg6t5s { align-content: center; align-items: center; cursor: pointer; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: 42px; justify-content: center; left: calc(49.74093264248707% - 299px / 2); padding: 10px 20px 10px 20px; position: absolute; top: 301px; width: 299px; }',
  '.framer-IAGeJ .framer-1nlw9xp { flex: none; height: auto; left: 50%; overflow: visible; position: absolute; top: 50%; white-space: pre; width: auto; z-index: 1; }',
  '.framer-IAGeJ .framer-tfmdiu { bottom: 32px; flex: none; height: 18px; left: calc(49.48186528497411% - 157px / 2); position: absolute; white-space: pre-wrap; width: 157px; word-break: break-word; word-wrap: break-word; }',
  '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-IAGeJ .framer-1exyhg9, .framer-IAGeJ .framer-1mg6t5s { gap: 0px; } .framer-IAGeJ .framer-1exyhg9 > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-IAGeJ .framer-1exyhg9 > :first-child, .framer-IAGeJ .framer-1mg6t5s > :first-child { margin-left: 0px; } .framer-IAGeJ .framer-1exyhg9 > :last-child, .framer-IAGeJ .framer-1mg6t5s > :last-child { margin-right: 0px; } .framer-IAGeJ .framer-1mg6t5s > * { margin: 0px; margin-left: calc(8px / 2); margin-right: calc(8px / 2); } }',
  ...css2,
  ...css,
];
var FramerukF6KLpcC = withCSS2(Component, css3, 'framer-IAGeJ',);
var stdin_default = FramerukF6KLpcC;
FramerukF6KLpcC.displayName = 'login3';
FramerukF6KLpcC.defaultProps = { height: 790, width: 386, };
addPropertyControls2(FramerukF6KLpcC, {
  wg9Cpf9R2: { title: 'Tap', type: ControlType2.EventHandler, },
  SLR_M8IOH: { title: 'Login', type: ControlType2.EventHandler, },
  bL90RH7td: { title: 'onEmailChange', type: ControlType2.EventHandler, },
  kNqW5FcA0: { title: 'On Password Change', type: ControlType2.EventHandler, },
  rvh8J3cx7: { defaultValue: '', placeholder: '', title: 'Password', type: ControlType2.String, },
  n5IWueUXC: { defaultValue: '', title: 'Email', type: ControlType2.String, },
  RHCKcI6ht: { title: 'On Sign Up', type: ControlType2.EventHandler, },
  mXYxBY_nh: { title: 'Forget Password', type: ControlType2.EventHandler, },
},);
addFonts(FramerukF6KLpcC, [
  {
    explicitInter: true,
    fonts: [{
      family: 'DM Sans',
      source: 'google',
      style: 'normal',
      url: 'https://fonts.gstatic.com/s/dmsans/v15/rP2tp2ywxg089UriI5-g4vlH9VoD8CmcqZG40F9JadbnoEwARZthS2f3ZGMZpg.woff2',
      weight: '700',
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
      url: 'https://fonts.gstatic.com/s/dmsans/v15/rP2tp2ywxg089UriI5-g4vlH9VoD8CmcqZG40F9JadbnoEwAkJxhS2f3ZGMZpg.woff2',
      weight: '500',
    },],
  },
  ...InputFonts,
  ...Input1Fonts,
  ...IconoirFonts,
  ...getFontsFromSharedStyle(fonts2,),
  ...getFontsFromSharedStyle(fonts,),
], { supportsExplicitInterCodegen: true, },);

// virtual:emailLogin
import { WithFramerBreakpoints, } from 'unframer';
import { jsx, } from 'react/jsx-runtime';
stdin_default.Responsive = (props,) => {
  return /* @__PURE__ */ jsx(WithFramerBreakpoints, { Component: stdin_default, ...props, },);
};
var emailLogin_default = stdin_default;
export { emailLogin_default as default, };
