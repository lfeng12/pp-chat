/* eslint-disable */
// https :https://framerusercontent.com/modules/2rGdY3xNPdGAC1LGc2Ew/gQcpGdBaDKqalAQX5HN3/Pattern.js
import { jsx as _jsx, } from 'react/jsx-runtime';
import { addPropertyControls, Color, ControlType, RenderTarget, } from 'unframer';
import { motion, } from 'unframer';
function Pattern(props,) {
  const { patternType, front, back, radius, scale, shouldAnimate, direction, diagonal, duration, } = props;
  const isCanvas = RenderTarget.current() === RenderTarget.canvas;
  let pattern;
  let position;
  let size;
  let repeat;
  let blendMode;
  let filter;
  let addBackground;
  let backgroundPosAnimation;
  const frontHex = Color.toHexString(Color(front,),);
  const backHex = Color.toHexString(Color(back,),);
  const frontWithoutHex = frontHex.replace('#', '',);
  const backWithoutHex = backHex.replace('#', '',);
  const factor = direction === 'left' || direction === 'top' ? -1 : 1;
  const xScale = direction === 'left' || direction === 'right' ? factor * scale : 0;
  const yScale = direction === 'top' || direction === 'bottom' ? factor * scale : 0;
  if (patternType === 'wave') {
    pattern =
      `radial-gradient(circle at center center, ${front}, ${back}), repeating-radial-gradient(circle at center center, ${front}, ${front}, ${scale}px, transparent ${
        scale * 2
      }px, transparent ${scale}px)`;
    blendMode = 'multiply';
  }
  if (patternType === 'zigzag') {
    pattern =
      `linear-gradient(135deg, ${front} 25%, transparent 25%), linear-gradient(225deg, ${front} 25%, transparent 25%), linear-gradient(45deg, ${front} 25%, transparent 25%), linear-gradient(315deg, ${front} 25%, ${back} 25%)`;
    position = `${scale}px 0, ${scale}px 0, 0 0, 0 0`;
    size = `${scale * 2}px ${scale * 2}px`;
    repeat = `repeat`;
  }
  if (patternType === 'diagonal') {
    pattern = `repeating-linear-gradient(45deg, ${front}, ${front} ${scale / 2}px, ${back} ${scale / 2}px, ${back} ${scale * 2}px )`;
  }
  if (patternType === 'diagonal-two') {
    pattern = `repeating-linear-gradient( 135deg, ${front}, ${front} ${scale / 2}px, ${back} ${scale / 2}px, ${back} ${scale * 2}px )`;
  }
  if (patternType === 'blocks') {
    pattern =
      `linear-gradient(30deg, ${front} 12%, transparent 12.5%, transparent 87%, ${front} 87.5%, ${front}), linear-gradient(150deg, ${front} 12%, transparent 12.5%, transparent 87%, ${front} 87.5%, ${front}), linear-gradient(30deg, ${front} 12%, transparent 12.5%, transparent 87%, ${front} 87.5%, ${front}), linear-gradient(150deg, ${front} 12%, transparent 12.5%, transparent 87%, ${front} 87.5%, ${front}), linear-gradient(60deg, ${back} 25%, transparent 25.5%, transparent 75%, ${back} 75%, ${back}), linear-gradient(60deg, ${back} 25%, transparent 25.5%, transparent 75%, ${back} 75%, ${back})`;
    size = `${scale * 8}px ${scale * 14}px`;
    position = `0 0, 0 0, ${scale * 4}px ${scale * 7}px, ${scale * 4}px ${scale * 7}px, 0 0, ${scale * 4}px ${scale * 7}px`;
  }
  if (patternType === 'polka') {
    pattern = `radial-gradient(${front} 1px, transparent 1px), radial-gradient(${front} 1px, ${back} 1px)`;
    size = `${scale * 2}px ${scale * 2}px`;
    position = `0 0, ${scale}px ${scale}px`;
  }
  if (patternType === 'rhombus') {
    pattern =
      `linear-gradient(135deg, ${front} 25%, transparent 25%), linear-gradient(225deg, ${front} 25%, transparent 25%), linear-gradient(45deg, ${front} 25%, transparent 25%), linear-gradient(315deg, ${front} 25%, ${back} 25%)`;
    position = `${scale}px 0, ${scale}px 0, 0 0, 0 0`;
    size = `${scale}px ${scale}px`;
    repeat = 'repeat';
  }
  if (patternType === 'stars') {
    pattern = `radial-gradient(ellipse ${scale}px ${scale}px, ${front}, ${front} 25%, ${back} 25%)`;
    size = `${scale / 2}px ${scale / 2}px`;
    if (shouldAnimate) {
      backgroundPosAnimation = `${xScale}px ${yScale}px`;
    }
  }
  if (patternType === 'circles') {
    pattern =
      `radial-gradient(circle at 100% 50%, ${back} 20%, ${front} 21%, ${front} 34%, transparent 35%, transparent), radial-gradient(circle at 0% 50%, ${back} 20%, ${front} 21%, ${front} 34%, ${back} 35%, ${back})`;
    size = `${scale * 2}px ${scale * 2}px`;
  }
  if (patternType === 'rectangles') {
    pattern =
      `repeating-linear-gradient(45deg, ${front} 25%, transparent 25%, transparent 75%, ${front} 75%, ${front}), repeating-linear-gradient(45deg, ${front} 25%, ${back} 25%, ${back} 75%, ${front} 75%, ${front})`;
    position = `0 0, ${scale}px ${scale}px`;
    size = `${scale * 2}px ${scale * 2}px`;
  }
  if (patternType === 'lines') {
    pattern = `linear-gradient(0deg, ${front} 50%, ${back} 50%)`;
    size = `${scale}px ${scale}px`;
  }
  if (patternType === 'lines-vertical') {
    pattern = `linear-gradient(to right, ${front} 50%, ${back} 50%)`;
    size = `${scale}px ${scale}px`;
  }
  if (patternType === 'paper') {
    pattern =
      `linear-gradient(${front} 2px, transparent 2px), linear-gradient(90deg, ${front} 2px, transparent 2px), linear-gradient(${front} 1px, transparent 1px), linear-gradient(90deg, ${front} 1px, ${back} 1px)`;
    size = `${scale * 5}px ${scale * 5}px, ${scale * 5}px ${scale * 5}px, ${scale}px ${scale}px, ${scale}px ${scale}px`;
    position = `-2px -2px, -2px -2px, -1px -1px, -1px -1px`;
  }
  if (patternType === 'crosses') {
    pattern =
      `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' %3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23${frontWithoutHex}' %3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`;
    size = `${scale * 4}px ${scale * 4}px`;
    addBackground = back;
  }
  if (patternType === 'wave-lines') {
    pattern =
      `url("data:image/svg+xml,%3Csvg width='100' height='20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M21.184 20c.357-.13.72-.264 1.088-.402l1.768-.661C33.64 15.347 39.647 14 50 14c10.271 0 15.362 1.222 24.629 4.928.955.383 1.869.74 2.75 1.072h6.225c-2.51-.73-5.139-1.691-8.233-2.928C65.888 13.278 60.562 12 50 12c-10.626 0-16.855 1.397-26.66 5.063l-1.767.662c-2.475.923-4.66 1.674-6.724 2.275h6.335zm0-20C13.258 2.892 8.077 4 0 4V2c5.744 0 9.951-.574 14.85-2h6.334zM77.38 0C85.239 2.966 90.502 4 100 4V2c-6.842 0-11.386-.542-16.396-2h-6.225zM0 14c8.44 0 13.718-1.21 22.272-4.402l1.768-.661C33.64 5.347 39.647 4 50 4c10.271 0 15.362 1.222 24.629 4.928C84.112 12.722 89.438 14 100 14v-2c-10.271 0-15.362-1.222-24.629-4.928C65.888 3.278 60.562 2 50 2 39.374 2 33.145 3.397 23.34 7.063l-1.767.662C13.223 10.84 8.163 12 0 12v2z' fill='%23${frontWithoutHex}' fill-rule='evenodd'/%3E%3C/svg%3E")`;
    size = `${scale * 10}px ${scale * 2}px`;
    addBackground = back;
    if (shouldAnimate) {
      backgroundPosAnimation = `${xScale * 10}px ${yScale * 2}px`;
    }
  }
  if (patternType === 'clouds') {
    pattern =
      `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='56' height='28'%3E%3Cpath fill='%23${frontWithoutHex}' d='M56 26v2h-7.75c2.3-1.27 4.94-2 7.75-2zm-26 2a2 2 0 1 0-4 0h-4.09A25.98 25.98 0 0 0 0 16v-2c.67 0 1.34.02 2 .07V14a2 2 0 0 0-2-2v-2a4 4 0 0 1 3.98 3.6 28.09 28.09 0 0 1 2.8-3.86A8 8 0 0 0 0 6V4a9.99 9.99 0 0 1 8.17 4.23c.94-.95 1.96-1.83 3.03-2.63A13.98 13.98 0 0 0 0 0h7.75c2 1.1 3.73 2.63 5.1 4.45 1.12-.72 2.3-1.37 3.53-1.93A20.1 20.1 0 0 0 14.28 0h2.7c.45.56.88 1.14 1.29 1.74 1.3-.48 2.63-.87 4-1.15-.11-.2-.23-.4-.36-.59H26v.07a28.4 28.4 0 0 1 4 0V0h4.09l-.37.59c1.38.28 2.72.67 4.01 1.15.4-.6.84-1.18 1.3-1.74h2.69a20.1 20.1 0 0 0-2.1 2.52c1.23.56 2.41 1.2 3.54 1.93A16.08 16.08 0 0 1 48.25 0H56c-4.58 0-8.65 2.2-11.2 5.6 1.07.8 2.09 1.68 3.03 2.63A9.99 9.99 0 0 1 56 4v2a8 8 0 0 0-6.77 3.74c1.03 1.2 1.97 2.5 2.79 3.86A4 4 0 0 1 56 10v2a2 2 0 0 0-2 2.07 28.4 28.4 0 0 1 2-.07v2c-9.2 0-17.3 4.78-21.91 12H30zM7.75 28H0v-2c2.81 0 5.46.73 7.75 2zM56 20v2c-5.6 0-10.65 2.3-14.28 6h-2.7c4.04-4.89 10.15-8 16.98-8zm-39.03 8h-2.69C10.65 24.3 5.6 22 0 22v-2c6.83 0 12.94 3.11 16.97 8zm15.01-.4a28.09 28.09 0 0 1 2.8-3.86 8 8 0 0 0-13.55 0c1.03 1.2 1.97 2.5 2.79 3.86a4 4 0 0 1 7.96 0zm14.29-11.86c1.3-.48 2.63-.87 4-1.15a25.99 25.99 0 0 0-44.55 0c1.38.28 2.72.67 4.01 1.15a21.98 21.98 0 0 1 36.54 0zm-5.43 2.71c1.13-.72 2.3-1.37 3.54-1.93a19.98 19.98 0 0 0-32.76 0c1.23.56 2.41 1.2 3.54 1.93a15.98 15.98 0 0 1 25.68 0zm-4.67 3.78c.94-.95 1.96-1.83 3.03-2.63a13.98 13.98 0 0 0-22.4 0c1.07.8 2.09 1.68 3.03 2.63a9.99 9.99 0 0 1 16.34 0z'%3E%3C/path%3E%3C/svg%3E")`;
    size = `${scale * 5.6}px ${scale * 2.8}px`;
    addBackground = back;
    if (shouldAnimate) {
      backgroundPosAnimation = `${xScale * 5.6}px ${yScale * 2.8}px`;
    }
  }
  if (patternType === 'stars-two') {
    pattern =
      `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32'%3E%3Cpath fill='%23${frontWithoutHex}' d='m16 8.764 2.351 4.764 5.257.764L19.804 18l.898 5.236L16 20.764l-4.702 2.472.898-5.236-3.804-3.708 5.257-.764Z'%3E%3C/path%3E%3C/svg%3E")`;
    size = `${scale * 3.2}px ${scale * 3.2}px`;
    addBackground = back;
  }
  if (patternType === 'wiggle') {
    pattern =
      `url("data:image/svg+xml,%3Csvg width='52' height='26' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23${frontWithoutHex}' %3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`;
    addBackground = back;
    size = `${scale * 5.2}px ${scale * 2.6}px`;
    if (shouldAnimate) {
      if (diagonal) {
        backgroundPosAnimation = `-${scale * 5.2}px -${scale * 5.2}px`;
      } else {
        backgroundPosAnimation = `${scale * 5.2}px ${scale * 5.2}px`;
      }
    }
  }
  if (patternType === 'groovy') {
    pattern =
      `url("data:image/svg+xml,%3Csvg width='24' height='40' viewBox='0 0 24 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 40c5.523 0 10-4.477 10-10V0C4.477 0 0 4.477 0 10v30zm22 0c-5.523 0-10-4.477-10-10V0c5.523 0 10 4.477 10 10v30z' fill='%23${frontWithoutHex}' fill-rule='evenodd'/%3E%3C/svg%3E")`;
    addBackground = back;
    size = `${scale * 2.4}px ${scale * 4}px`;
    if (shouldAnimate) {
      backgroundPosAnimation = `${xScale * 2.4}px ${yScale * 4}px`;
    }
  }
  if (patternType === 'plus') {
    pattern =
      `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23${frontWithoutHex}' %3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`;
    addBackground = back;
    size = `${scale * 6}px ${scale * 6}px`;
  }
  return /* @__PURE__ */ _jsx(motion.div, {
    style: {
      width: '100%',
      height: '100%',
      backgroundColor: addBackground ? addBackground : 'transparent',
      backgroundImage: pattern,
      backgroundPosition: position,
      backgroundSize: size,
      backgroundRepeat: repeat,
      backgroundBlendMode: blendMode,
      borderRadius: radius,
      filter,
    },
    animate: shouldAnimate && { backgroundPosition: backgroundPosAnimation, },
    transition: { type: 'tween', ease: 'linear', duration, repeat: Infinity, repeatType: 'loop', },
  },);
}
Pattern.displayName = 'Pattern';
addPropertyControls(Pattern, {
  patternType: {
    type: ControlType.Enum,
    defaultValue: 'wave-lines',
    options: [
      'wave-lines',
      'clouds',
      'wiggle',
      'groovy',
      'plus',
      'circles',
      'rectangles',
      'lines',
      'lines-vertical',
      'diagonal',
      'diagonal-two',
      'blocks',
      'wave',
      'zigzag',
      'polka',
      'rhombus',
      'stars',
      'stars-two',
      'paper',
      'crosses',
    ],
    optionTitles: [
      'Wave Lines',
      'Clouds',
      'Wiggle',
      'Groovy',
      'Plus',
      'Circles',
      'Rectangles',
      'Lines',
      'Lines Vertical',
      'Diagonal',
      'Diagonal 2',
      'Blocks',
      'Wave',
      'ZigZag',
      'Polka',
      'Rhombus',
      'Stars',
      'Stars 2',
      'Paper',
      'Crosses',
    ],
    title: 'Type',
  },
  front: { type: ControlType.Color, title: 'Front', defaultValue: '#FFF', },
  back: { type: ControlType.Color, title: 'Back', defaultValue: '#2DD', },
  scale: { type: ControlType.Number, min: 1, max: 100, step: 1, defaultValue: 10, },
  radius: { type: ControlType.Number, min: 0, max: 100, step: 1, defaultValue: 0, },
  shouldAnimate: {
    type: ControlType.Boolean,
    title: 'Animate',
    defaultValue: false,
    hidden(props,) {
      return props.patternType !== 'wave-lines' && props.patternType !== 'wiggle' && props.patternType !== 'clouds' &&
        props.patternType !== 'stars' && props.patternType !== 'groovy';
    },
  },
  direction: {
    type: ControlType.Enum,
    title: 'Direction',
    options: ['left', 'right', 'top', 'bottom',],
    optionIcons: ['direction-left', 'direction-right', 'direction-up', 'direction-down',],
    optionTitles: ['Left', 'Right', 'Top', 'Bottom',],
    defaultValue: 'left',
    displaySegmentedControl: true,
    hidden(props,) {
      return props.patternType === 'wiggle' || props.shouldAnimate === false;
    },
  },
  diagonal: {
    type: ControlType.Boolean,
    title: 'Direction',
    defaultValue: true,
    enabledTitle: 'TL',
    disabledTitle: 'BR',
    hidden(props,) {
      return props.patternType !== 'wiggle';
    },
  },
  duration: {
    type: ControlType.Number,
    min: 0,
    max: 50,
    step: 0.1,
    defaultValue: 5,
    hidden(props,) {
      return props.shouldAnimate === false;
    },
  },
},);

export { Pattern, };
