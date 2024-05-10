/* eslint-disable */
import { defaultEvents, } from './chunk-JJFCSOIW.js';

// https :https://framerusercontent.com/modules/gwopb529pvzz5XkTXQdN/KkKOttw1GZS7egTUfMRP/Conic.js
import { jsx as _jsx, } from 'react/jsx-runtime';
import { addPropertyControls, Color, ControlType, motion, } from 'unframer';
var colorToValue = (c,) => Color(c,).toValue();
function Conic(props,) {
  const { colors, radius, from, xPos, yPos, blur, onClick, onMouseEnter, onMouseLeave, onMouseDown, onMouseUp, transition, } = props;
  const colorsArr = colors.split(',',);
  const background = `conic-gradient(from ${from}deg at ${xPos}% ${yPos * 0.5 + 25}%, ${
    colorsArr.map((c,) => colorToValue(c,)).join(',',)
  })`;
  let message = '';
  let isEmpty = false;
  let fallBackColor = colorsArr[0];
  if (colorsArr.length == 0) {
    message = '\u{1F44B} Please add 2+ colors.';
    fallBackColor = 'rgba(136, 85, 255, 0.1)';
    isEmpty = true;
  } else if (colorsArr.length == 1) {
    isEmpty = true;
    fallBackColor = colors[0];
  } else {
    isEmpty = false;
  }
  return /* @__PURE__ */ _jsx('div', {
    style: { width: '100%', height: '100%', overflow: 'hidden', borderRadius: radius, },
    children: /* @__PURE__ */ _jsx(motion.div, {
      onClick,
      onMouseEnter,
      onMouseLeave,
      onMouseDown,
      onMouseUp,
      transition,
      initial: false,
      animate: { filter: `blur(${blur}px)`, background: isEmpty ? fallBackColor : background, },
      style: { width: '100%', height: '100%', display: 'flex', placeItems: 'center', placeContent: 'center', color: '#85F', },
      children: message,
    },),
  },);
}
Conic.defaultProps = { colors: 'cyan, magenta, yellow, cyan', blur: 0, radius: 0, from: 0, xPos: 50, yPos: 50, };
addPropertyControls(Conic, {
  // colors: {
  //     type: ControlType.Array,
  //     title: "Colors",
  //     control: {
  //         type: ControlType.Color,
  //         title: "Color",
  //     },
  //     defaultValue: Conic.defaultProps.colors,
  // },
  colors: { type: ControlType.String, title: 'Colors', defaultValue: Conic.defaultProps.colors, },
  radius: { type: ControlType.Number, title: 'Radius', min: 0, max: 500, },
  blur: { type: ControlType.Number, title: 'Blur', min: 0, max: 100, },
  from: { type: ControlType.Number, title: 'Angle', unit: '\xB0', min: 0, max: 1080, displayStepper: true, step: 15, },
  xPos: { type: ControlType.Number, title: 'X', unit: '%', min: 0, max: 100, },
  yPos: { type: ControlType.Number, title: 'Y', unit: '%', min: 0, max: 100, },
  ...defaultEvents,
},);

export { Conic, };
