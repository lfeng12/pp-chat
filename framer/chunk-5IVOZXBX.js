/* eslint-disable */
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

// https :https://framerusercontent.com/modules/4TG0CA0xFC8r92HZNVLs/oNHmObL27xLBv67Gbys4/Input.js
import { jsx as _jsx, } from 'react/jsx-runtime';
import { addPropertyControls, ControlType, withCSS, } from 'unframer';
import { useCallback, useEffect as useEffect2, useMemo, useRef, } from 'react';

// https :https://framer.com/m/framer/useIsomorphicLayoutEffect.js@0.2.0
import { useEffect, useLayoutEffect, } from 'react';
var useIsomorphicLayoutEffect = typeof document !== 'undefined' ? useLayoutEffect : useEffect;

// https :https://framerusercontent.com/modules/4TG0CA0xFC8r92HZNVLs/oNHmObL27xLBv67Gbys4/Input.js
var Input = withCSS(function Input2(props,) {
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
  useEffect2(() => {
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
Input.defaultProps = {
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
addPropertyControls(Input, {
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
    defaultValue: Input.defaultProps.maxLength,
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

export { Input, useIsomorphicLayoutEffect, };
