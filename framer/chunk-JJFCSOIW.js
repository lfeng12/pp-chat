/* eslint-disable */
// https :https://framerusercontent.com/modules/VTUDdizacRHpwbkOamr7/AykinQJbgwl92LvMGZwu/constants.js
import { ControlType, } from 'unframer';
var fontStack =
  `"Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`;
var containerStyles = {
  position: 'relative',
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};
var emptyStateStyle = {
  ...containerStyles,
  borderRadius: 6,
  background: 'rgba(136, 85, 255, 0.3)',
  color: '#85F',
  border: '1px dashed #85F',
  flexDirection: 'column',
};
var defaultEvents = {
  onClick: {
    type: ControlType.EventHandler,
  },
  onMouseEnter: {
    type: ControlType.EventHandler,
  },
  onMouseLeave: {
    type: ControlType.EventHandler,
  },
};
var fontSizeOptions = {
  type: ControlType.Number,
  title: 'Font Size',
  min: 2,
  max: 200,
  step: 1,
  displayStepper: true,
};
var fontControls = {
  font: {
    type: ControlType.Boolean,
    title: 'Font',
    defaultValue: false,
    disabledTitle: 'Default',
    enabledTitle: 'Custom',
  },
  fontFamily: {
    type: ControlType.String,
    title: 'Family',
    placeholder: 'Inter',
    hidden: ({ font, },) => !font,
  },
  fontWeight: {
    type: ControlType.Enum,
    title: 'Weight',
    options: [
      100,
      200,
      300,
      400,
      500,
      600,
      700,
      800,
      900,
    ],
    optionTitles: [
      'Thin',
      'Extra-light',
      'Light',
      'Regular',
      'Medium',
      'Semi-bold',
      'Bold',
      'Extra-bold',
      'Black',
    ],
    hidden: ({ font, },) => !font,
  },
};

// https :https://framerusercontent.com/modules/D4TWeLfcxT6Tysr2BlYg/iZjmqdxVx1EOiM3k1FaW/useOnNavigationTargetChange.js
import { useIsInCurrentNavigationTarget, } from 'unframer';
import { useEffect, } from 'react';
function useOnEnter(onEnter, enabled,) {
  return useOnSpecificTargetChange(true, onEnter, enabled,);
}
function useOnSpecificTargetChange(goal, callback, enabled = true,) {
  const isInTarget = useIsInCurrentNavigationTarget();
  useEffect(() => {
    if (enabled && isInTarget === goal) {
      callback();
    }
  }, [
    isInTarget,
  ],);
}

// https :https://framerusercontent.com/modules/cuQH4dmpDnV8YK1mSgQX/KqRXqunFjE6ufhpc7ZRu/useFontControls.js
import { fontStore, } from 'unframer';
import { useEffect as useEffect2, } from 'react';
var fontWeights = {
  100: 'Thin',
  200: 'Extra-light',
  300: 'Light',
  400: 'Regular',
  500: 'Medium',
  600: 'Semi-bold',
  700: 'Bold',
  800: 'Extra-bold',
  900: 'Black',
};
function useFontControls(props,) {
  const { fontFamily = 'Inter', fontSize = 16, fontWeight = 400, font = false, } = props;
  const fontWeightName = fontWeights[fontWeight];
  const customFontStack = `"${fontFamily} ${fontWeightName}", "${fontFamily}", ${fontStack}`;
  const fontFamilyStyle = fontFamily ? { fontSize, fontWeight, fontFamily: customFontStack, } : { fontSize, fontWeight, };
  const fetchCustomFonts = async () => {
    await fontStore.loadWebFontsFromSelectors([
      `CUSTOM;${fontFamily}`,
      `CUSTOM;${fontFamily} ${fontWeightName}`,
      `GF;${fontFamily}-${fontWeightName.toLowerCase()}`,
    ],).catch((e,) => console.error(e,));
  };
  useEffect2(() => {
    if (font) {
      fetchCustomFonts();
    }
  }, [font, fontFamily, fontWeight,],);
  return fontFamilyStyle;
}

// https :https://framerusercontent.com/modules/afBE9Yx1W6bY5q32qPxe/m3q7puE2tbo1S2C0s0CT/useRenderTarget.js
import { useMemo, } from 'react';
import { RenderTarget, } from 'unframer';
function useIsInPreview() {
  const inPreview = useMemo(
    () => RenderTarget.current() === RenderTarget.preview,
    [],
  );
  return inPreview;
}

// https :https://framerusercontent.com/modules/zGkoP8tPDCkoBzMdt5uq/0zFSjxIYliHxrQQnryFX/useControlledState.js
import * as React from 'react';
function useControlledState(value,) {
  const [controlledValue, setValue,] = React.useState(value,);
  React.useEffect(() => {
    setValue(value,);
  }, [
    value,
  ],);
  return [
    controlledValue,
    setValue,
  ];
}

// https :https://framerusercontent.com/modules/5SM58HxZHxjjv7aLMOgQ/WXz9i6mVki0bBCrKdqB3/propUtils.js
import { useMemo as useMemo2, } from 'react';
import { ControlType as ControlType2, } from 'unframer';
function useRadius(props,) {
  const { borderRadius, isMixedBorderRadius, topLeftRadius, topRightRadius, bottomRightRadius, bottomLeftRadius, } = props;
  const radiusValue = useMemo2(
    () => isMixedBorderRadius ? `${topLeftRadius}px ${topRightRadius}px ${bottomRightRadius}px ${bottomLeftRadius}px` : `${borderRadius}px`,
    [
      borderRadius,
      isMixedBorderRadius,
      topLeftRadius,
      topRightRadius,
      bottomRightRadius,
      bottomLeftRadius,
    ],
  );
  return radiusValue;
}
var borderRadiusControl = {
  borderRadius: {
    title: 'Radius',
    type: ControlType2.FusedNumber,
    toggleKey: 'isMixedBorderRadius',
    toggleTitles: [
      'Radius',
      'Radius per corner',
    ],
    valueKeys: [
      'topLeftRadius',
      'topRightRadius',
      'bottomRightRadius',
      'bottomLeftRadius',
    ],
    valueLabels: [
      'TL',
      'TR',
      'BR',
      'BL',
    ],
    min: 0,
  },
};
function usePadding(props,) {
  const { padding, paddingPerSide, paddingTop, paddingRight, paddingBottom, paddingLeft, } = props;
  const paddingValue = useMemo2(
    () => paddingPerSide ? `${paddingTop}px ${paddingRight}px ${paddingBottom}px ${paddingLeft}px` : padding,
    [
      padding,
      paddingPerSide,
      paddingTop,
      paddingRight,
      paddingBottom,
      paddingLeft,
    ],
  );
  return paddingValue;
}
var paddingControl = {
  padding: {
    type: ControlType2.FusedNumber,
    toggleKey: 'paddingPerSide',
    toggleTitles: [
      'Padding',
      'Padding per side',
    ],
    valueKeys: [
      'paddingTop',
      'paddingRight',
      'paddingBottom',
      'paddingLeft',
    ],
    valueLabels: [
      'T',
      'R',
      'B',
      'L',
    ],
    min: 0,
    title: 'Padding',
  },
};

// https :https://framerusercontent.com/modules/ExNgrA7EJTKUPpH6vIlN/eiOrSJ2Ab5M9jPCvVwUz/useConstant.js
import { useRef, } from 'react';

// https :https://framerusercontent.com/modules/D2Lz5CmnNVPZFFiZXalt/QaCzPbriZBfXWZIIycFI/colorFromToken.js
import { Color, } from 'unframer';

// https :https://framerusercontent.com/modules/3mKFSGQqKHV82uOV1eBc/5fbRLvOpxZC0JOXugvwm/isMotionValue.js
import { MotionValue, } from 'unframer';

// https :https://framerusercontent.com/modules/xDiQsqBGXzmMsv7AlEVy/uhunpMiNsbXxzjlXsg1y/useUniqueClassName.js
import * as React2 from 'react';

// https :https://framerusercontent.com/modules/ETACN5BJyFTSo0VVDJfu/NHRqowOiXkF9UwOzczF7/variantUtils.js
import { ControlType as ControlType3, } from 'unframer';

// https :https://framerusercontent.com/modules/eMBrwoqQK7h6mEeGQUH8/GuplvPJVjmxpk9zqOTcb/isBrowser.js
import { useMemo as useMemo3, } from 'react';

// https :https://framerusercontent.com/modules/v9AWX2URmiYsHf7GbctE/XxKAZ9KlhWqf5x1JMyyF/useOnChange.js
import { useEffect as useEffect5, } from 'react';

// https :https://framerusercontent.com/modules/kNDwabfjDEb3vUxkQlZS/fSIr3AOAYbGlfSPgXpYu/useAutoMotionValue.js
import { useCallback, useEffect as useEffect6, useRef as useRef2, } from 'react';
import { animate, motionValue, RenderTarget as RenderTarget2, } from 'unframer';

export {
  borderRadiusControl,
  defaultEvents,
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
};
