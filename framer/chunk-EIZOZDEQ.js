/* eslint-disable */
// https :https://framerusercontent.com/modules/qCV470OeJRk23S9WBZau/Qu1BH7PBEOaR7yVW0Iw4/Clock.js
import { jsxs as _jsxs, } from 'react/jsx-runtime';
import { addPropertyControls, ControlType, } from 'unframer';
import { useEffect, useState, } from 'react';
function Clock(props,) {
  const [currentTime, setCurrentTime,] = useState(/* @__PURE__ */ new Date(),);
  useEffect(() => {
    console.log('effect',);
    const timerID = setInterval(() => {
      updateCurrentTime();
      console.log('tick',);
    }, 1e3,);
    return () => {
      clearInterval(timerID,);
    };
  }, [],);
  const updateCurrentTime = () => {
    setCurrentTime(/* @__PURE__ */ new Date(),);
  };
  let text = '';
  const ampmText = props.ampmCase == 'uppercase' ? ['AM', 'PM',] : ['am', 'pm',];
  const hours = '00';
  const minutes = '00';
  const seconds = '00';
  const ampm = '';
  if (props.seconds) {
    const seconds2 = currentTime.getSeconds().toString().padStart(2, '0',);
    text = `${minutes}:${seconds2}${ampm}`;
  } else {
    text = `${minutes}${ampm}`;
  }
  if (props.timeZone) {
    const timeZoneAbbreviation =
      new Intl.DateTimeFormat('en-US', { timeZoneName: 'short', },).formatToParts(/* @__PURE__ */ new Date(),).find((part,) =>
        part.type === 'timeZoneName'
      ).value;
    text += ' ' + timeZoneAbbreviation;
  }
  return /* @__PURE__ */ _jsxs('p', {
    style: { color: props.color, userSelect: props.textSelect ? 'auto' : 'none', margin: 0, ...props.font, fontSize: 24, },
    children: [props.prefix, text, props.suffix,],
  },);
}
addPropertyControls(Clock, {
  seconds: { type: ControlType.Boolean, defaultValue: 0, enabledTitle: 'Show', disabledTitle: 'Hide', },
  timeZone: { type: ControlType.Boolean, defaultValue: false, enabledTitle: 'Show', disabledTitle: 'Hide', },
  is12hour: { type: ControlType.Boolean, defaultValue: true, enabledTitle: '12 Hour', disabledTitle: '24 Hour', title: 'Mode', },
  ampmCase: {
    type: ControlType.Enum,
    defaultValue: 'uppercase',
    options: ['uppercase', 'lowercase',],
    optionTitles: ['AM / PM', 'am / pm',],
    title: 'Case',
    hidden(props,) {
      return !props.is12hour;
    },
  },
  color: { type: ControlType.Color, defaultValue: '#000', title: 'Font Color', },
  font: { type: 'font', controls: 'extended', },
  prefix: { type: ControlType.String, },
  suffix: { type: ControlType.String, },
  textSelect: { type: ControlType.Boolean, defaultValue: true, },
},);

export { Clock, };
