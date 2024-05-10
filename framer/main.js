/* eslint-disable */
'use client';
import { Conic, } from './chunk-WBH7D5FB.js';
import './chunk-JJFCSOIW.js';
import { Clock, } from './chunk-EIZOZDEQ.js';
import { className, css, fonts, Icon, } from './chunk-6MAF3TKJ.js';
import './chunk-ZBBVTMRC.js';

// https :https://framerusercontent.com/modules/HXymEkHPIaZc2RDzewa7/bJTVAFPZDwsWax2wk6D7/Ibtk5tWbC.js
import { jsx as _jsx7, jsxs as _jsxs5, } from 'react/jsx-runtime';
import {
  addFonts as addFonts6,
  addPropertyControls as addPropertyControls4,
  ComponentViewportProvider as ComponentViewportProvider6,
  ControlType as ControlType4,
  cx as cx6,
  getFonts as getFonts6,
  Scroll as Scroll2,
  useActiveVariantCallback as useActiveVariantCallback3,
  useComponentViewport as useComponentViewport6,
  useLocaleInfo as useLocaleInfo6,
  useVariantState as useVariantState6,
  withCSS as withCSS6,
} from 'unframer';
import { LayoutGroup as LayoutGroup6, motion as motion6, MotionConfigContext as MotionConfigContext6, } from 'unframer';
import * as React6 from 'react';

// https :https://framerusercontent.com/modules/p5Ljvq8T9eEhN3ULZJh3/q2oO4PXB5JkorNKpeJqo/BGUN3CRKp.js
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
var cycleOrder = ['O5TDOtZUz',];
var serializationHash = 'framer-3E4C1';
var variantClassNames = { O5TDOtZUz: 'framer-v-1albic8', };
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
    l4EmAYs9B: tap2 !== null && tap2 !== void 0 ? tap2 : props.l4EmAYs9B,
    o2wfaBicH: tap3 !== null && tap3 !== void 0 ? tap3 : props.o2wfaBicH,
    UbCBf8rh6: tap !== null && tap !== void 0 ? tap : props.UbCBf8rh6,
  };
};
var createLayoutDependency = (props, variants,) => variants.join('-',) + props.layoutDependency;
var Component = /* @__PURE__ */ React.forwardRef(function (props, ref,) {
  const { activeLocale, setLocale, } = useLocaleInfo();
  const { style, className: className2, layoutId, variant, UbCBf8rh6, l4EmAYs9B, o2wfaBicH, ...restProps } = getProps(props,);
  const { baseVariant, classNames, gestureVariant, setGestureState, setVariant, variants, } = useVariantState({
    cycleOrder,
    defaultVariant: 'O5TDOtZUz',
    variant,
    variantClassNames,
  },);
  const layoutDependency = createLayoutDependency(props, variants,);
  const { activeVariantCallback, delay, } = useActiveVariantCallback(baseVariant,);
  const onClick7mzv26 = activeVariantCallback(async (...args) => {
    if (UbCBf8rh6) {
      const res = await UbCBf8rh6(...args,);
      if (res === false) {
        return false;
      }
    }
  },);
  const onClick12ohw6h = activeVariantCallback(async (...args) => {
    if (l4EmAYs9B) {
      const res = await l4EmAYs9B(...args,);
      if (res === false) {
        return false;
      }
    }
  },);
  const onClick1o9a5v = activeVariantCallback(async (...args) => {
    if (o2wfaBicH) {
      const res = await o2wfaBicH(...args,);
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
          className: cx(serializationHash, ...sharedStyleClassNames, 'framer-1albic8', className2, classNames,),
          'data-framer-name': 'Variant 1',
          layoutDependency,
          layoutId: 'O5TDOtZUz',
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
                className: 'framer-1txh96z-container',
                'data-framer-name': 'icon-settings',
                layoutDependency,
                layoutId: 'zi1DMnvqr-container',
                name: 'icon-settings',
                children: /* @__PURE__ */ _jsx(Icon, {
                  color: 'rgb(255, 255, 255)',
                  height: '100%',
                  iconSearch: 'settings',
                  iconSelection: 'KeyframesCouple',
                  id: 'zi1DMnvqr',
                  layoutId: 'zi1DMnvqr',
                  mirrored: false,
                  name: 'icon-settings',
                  onClick: onClick7mzv26,
                  selectByList: false,
                  style: { height: '100%', width: '100%', },
                  width: '100%',
                },),
              },),
            },),
            /* @__PURE__ */ _jsx(ComponentViewportProvider, {
              children: /* @__PURE__ */ _jsx(motion.div, {
                className: 'framer-1jx5hek-container',
                'data-framer-name': 'icon-health',
                layoutDependency,
                layoutId: 'kcKlzxzEa-container',
                name: 'icon-health',
                children: /* @__PURE__ */ _jsx(Icon, {
                  color: 'rgb(255, 255, 255)',
                  height: '100%',
                  iconSearch: 'kayframe',
                  iconSelection: 'KeyframesCouple',
                  id: 'kcKlzxzEa',
                  layoutId: 'kcKlzxzEa',
                  mirrored: false,
                  name: 'icon-health',
                  onClick: onClick12ohw6h,
                  selectByList: true,
                  style: { height: '100%', width: '100%', },
                  width: '100%',
                },),
              },),
            },),
            /* @__PURE__ */ _jsx(ComponentViewportProvider, {
              children: /* @__PURE__ */ _jsx(motion.div, {
                className: 'framer-1jnmkwc-container',
                'data-framer-name': 'icon-chat',
                layoutDependency,
                layoutId: 'eg343YrlN-container',
                name: 'icon-chat',
                children: /* @__PURE__ */ _jsx(Icon, {
                  color: 'rgb(255, 255, 255)',
                  height: '100%',
                  iconSearch: 'chatbubble',
                  iconSelection: 'ChatBubble',
                  id: 'eg343YrlN',
                  layoutId: 'eg343YrlN',
                  mirrored: false,
                  name: 'icon-chat',
                  onClick: onClick1o9a5v,
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
var css2 = [
  '@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }',
  '.framer-3E4C1.framer-zarw9n, .framer-3E4C1 .framer-zarw9n { display: block; }',
  '.framer-3E4C1.framer-1albic8 { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 80px; height: 81px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 390px; }',
  '.framer-3E4C1 .framer-1txh96z-container, .framer-3E4C1 .framer-1jx5hek-container, .framer-3E4C1 .framer-1jnmkwc-container { flex: none; height: 37px; position: relative; width: 37px; }',
  '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-3E4C1.framer-1albic8 { gap: 0px; } .framer-3E4C1.framer-1albic8 > * { margin: 0px; margin-left: calc(80px / 2); margin-right: calc(80px / 2); } .framer-3E4C1.framer-1albic8 > :first-child { margin-left: 0px; } .framer-3E4C1.framer-1albic8 > :last-child { margin-right: 0px; } }',
];
var FramerBGUN3CRKp = withCSS(Component, css2, 'framer-3E4C1',);
var stdin_default = FramerBGUN3CRKp;
FramerBGUN3CRKp.displayName = 'navbar';
FramerBGUN3CRKp.defaultProps = { height: 81, width: 390, };
addPropertyControls(FramerBGUN3CRKp, {
  UbCBf8rh6: { title: 'Tap', type: ControlType.EventHandler, },
  l4EmAYs9B: { title: 'Tap 2', type: ControlType.EventHandler, },
  o2wfaBicH: { title: 'Tap 3', type: ControlType.EventHandler, },
},);
addFonts(FramerBGUN3CRKp, [{ explicitInter: true, fonts: [], }, ...IconoirFonts,], { supportsExplicitInterCodegen: true, },);

// https :https://framerusercontent.com/modules/cXTaKi4vytBfDn1r1821/2Y8PnW9SjYME6r5emfxg/fLExZKtD2.js
import { jsx as _jsx5, jsxs as _jsxs4, } from 'react/jsx-runtime';
import {
  addFonts as addFonts4,
  ComponentViewportProvider as ComponentViewportProvider4,
  cx as cx4,
  getFonts as getFonts4,
  getFontsFromSharedStyle,
  RichText,
  Scroll,
  useComponentViewport as useComponentViewport4,
  useLocaleInfo as useLocaleInfo4,
  useVariantState as useVariantState4,
  withCSS as withCSS4,
} from 'unframer';
import { LayoutGroup as LayoutGroup4, motion as motion4, MotionConfigContext as MotionConfigContext4, } from 'unframer';
import * as React4 from 'react';

// https :https://framerusercontent.com/modules/xFhv3ETdRBLjJusGaZ1P/d9ZONLqTB9uCj5kbWKll/Globe.js
import { jsx as _jsx2, } from 'react/jsx-runtime';
import { addPropertyControls as addPropertyControls2, Color, ControlType as ControlType2, RenderTarget, } from 'unframer';
import { useEffect, useRef as useRef2, } from 'react';

// https :https://esm.sh/v135/phenomenon@1.6.0/esnext/phenomenon.mjs
var m = ['x', 'y', 'z',];
var l = function (t,) {
  Object.assign(this, {
    uniforms: {},
    geometry: { vertices: [{ x: 0, y: 0, z: 0, },], },
    mode: 0,
    modifiers: {},
    attributes: [],
    multiplier: 1,
    buffers: [],
  },),
    Object.assign(this, t,),
    this.prepareProgram(),
    this.prepareUniforms(),
    this.prepareAttributes();
};
l.prototype.compileShader = function (t, e,) {
  var i = this.gl.createShader(t,);
  return this.gl.shaderSource(i, e,), this.gl.compileShader(i,), i;
},
  l.prototype.prepareProgram = function () {
    var t = this.gl, e = this.vertex, i = this.fragment, s2 = t.createProgram();
    t.attachShader(s2, this.compileShader(35633, e,),),
      t.attachShader(s2, this.compileShader(35632, i,),),
      t.linkProgram(s2,),
      t.useProgram(s2,),
      this.program = s2;
  },
  l.prototype.prepareUniforms = function () {
    for (var t = Object.keys(this.uniforms,), e = 0; e < t.length; e += 1) {
      var i = this.gl.getUniformLocation(this.program, t[e],);
      this.uniforms[t[e]].location = i;
    }
  },
  l.prototype.prepareAttributes = function () {
    this.geometry.vertices !== void 0 && this.attributes.push({ name: 'aPosition', size: 3, },),
      this.geometry.normal !== void 0 && this.attributes.push({ name: 'aNormal', size: 3, },),
      this.attributeKeys = [];
    for (var t = 0; t < this.attributes.length; t += 1) {
      this.attributeKeys.push(this.attributes[t].name,), this.prepareAttribute(this.attributes[t],);
    }
  },
  l.prototype.prepareAttribute = function (t,) {
    for (
      var e = this.geometry, i = this.multiplier, s2 = e.vertices, o = e.normal, h2 = new Float32Array(i * s2.length * t.size,), u2 = 0;
      u2 < i;
      u2 += 1
    ) {
      for (var r = t.data && t.data(u2, i,), a = u2 * s2.length * t.size, n = 0; n < s2.length; n += 1) {
        for (var f = 0; f < t.size; f += 1) {
          var p2 = this.modifiers[t.name];
          h2[a] = p2 !== void 0 ? p2(r, n, f, this,) : t.name === 'aPosition' ? s2[n][m[f]] : t.name === 'aNormal' ? o[n][m[f]] : r[f],
            a += 1;
        }
      }
    }
    this.attributes[this.attributeKeys.indexOf(t.name,)].data = h2,
      this.prepareBuffer(this.attributes[this.attributeKeys.indexOf(t.name,)],);
  },
  l.prototype.prepareBuffer = function (t,) {
    var e = t.data, i = t.name, s2 = t.size, o = this.gl.createBuffer();
    this.gl.bindBuffer(34962, o,), this.gl.bufferData(34962, e, 35044,);
    var h2 = this.gl.getAttribLocation(this.program, i,);
    this.gl.enableVertexAttribArray(h2,),
      this.gl.vertexAttribPointer(h2, s2, 5126, false, 0, 0,),
      this.buffers[this.attributeKeys.indexOf(t.name,)] = { buffer: o, location: h2, size: s2, };
  },
  l.prototype.render = function (t,) {
    var e = this, i = this.uniforms, s2 = this.multiplier, o = this.gl;
    o.useProgram(this.program,);
    for (var h2 = 0; h2 < this.buffers.length; h2 += 1) {
      var u2 = this.buffers[h2], r = u2.location, a = u2.buffer, n = u2.size;
      o.enableVertexAttribArray(r,), o.bindBuffer(34962, a,), o.vertexAttribPointer(r, n, 5126, false, 0, 0,);
    }
    Object.keys(t,).forEach(function (f,) {
      i[f].value = t[f].value;
    },),
      Object.keys(i,).forEach(function (f,) {
        var p2 = i[f];
        e.uniformMap[p2.type](p2.location, p2.value,);
      },),
      o.drawArrays(this.mode, 0, s2 * this.geometry.vertices.length,),
      this.onRender && this.onRender(this,);
  },
  l.prototype.destroy = function () {
    for (var t = 0; t < this.buffers.length; t += 1) {
      this.gl.deleteBuffer(this.buffers[t].buffer,);
    }
    this.gl.deleteProgram(this.program,), this.gl = null;
  };
var c = function (t,) {
  var e = this, i = t || {}, s2 = i.canvas;
  s2 === void 0 && (s2 = document.querySelector('canvas',));
  var o = i.context;
  o === void 0 && (o = {});
  var h2 = i.contextType;
  h2 === void 0 && (h2 = 'experimental-webgl');
  var u2 = i.settings;
  u2 === void 0 && (u2 = {});
  var r = s2.getContext(h2, Object.assign({ alpha: false, antialias: false, }, o,),);
  Object.assign(this, { gl: r, canvas: s2, uniforms: {}, instances: /* @__PURE__ */ new Map(), shouldRender: true, },),
    Object.assign(this, { devicePixelRatio: 1, clearColor: [1, 1, 1, 1,], position: { x: 0, y: 0, z: 2, }, clip: [1e-3, 100,], },),
    Object.assign(this, u2,),
    this.uniformMap = {
      float: function (a, n,) {
        return r.uniform1f(a, n,);
      },
      vec2: function (a, n,) {
        return r.uniform2fv(a, n,);
      },
      vec3: function (a, n,) {
        return r.uniform3fv(a, n,);
      },
      vec4: function (a, n,) {
        return r.uniform4fv(a, n,);
      },
      mat2: function (a, n,) {
        return r.uniformMatrix2fv(a, false, n,);
      },
      mat3: function (a, n,) {
        return r.uniformMatrix3fv(a, false, n,);
      },
      mat4: function (a, n,) {
        return r.uniformMatrix4fv(a, false, n,);
      },
    },
    r.enable(r.DEPTH_TEST,),
    r.depthFunc(r.LEQUAL,),
    r.getContextAttributes().alpha === false && (r.clearColor.apply(r, this.clearColor,), r.clearDepth(1,)),
    this.onSetup && this.onSetup(r,),
    window.addEventListener('resize', function () {
      return e.resize();
    },),
    this.resize(),
    this.render();
};
c.prototype.resize = function () {
  var t = this.gl, e = this.canvas, i = this.devicePixelRatio, s2 = this.position;
  e.width = e.clientWidth * i, e.height = e.clientHeight * i;
  var o = t.drawingBufferWidth, h2 = t.drawingBufferHeight, u2 = o / h2;
  t.viewport(0, 0, o, h2,);
  var r = Math.tan(Math.PI / 180 * 22.5,), a = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, s2.x, s2.y, (u2 < 1 ? 1 : u2) * -s2.z, 1,];
  this.uniforms.uProjectionMatrix = {
    type: 'mat4',
    value: [
      0.5 / r,
      0,
      0,
      0,
      0,
      u2 / r * 0.5,
      0,
      0,
      0,
      0,
      -(this.clip[1] + this.clip[0]) / (this.clip[1] - this.clip[0]),
      -1,
      0,
      0,
      -2 * this.clip[1] * (this.clip[0] / (this.clip[1] - this.clip[0])),
      0,
    ],
  },
    this.uniforms.uViewMatrix = { type: 'mat4', value: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1,], },
    this.uniforms.uModelMatrix = { type: 'mat4', value: a, };
},
  c.prototype.toggle = function (t,) {
    t !== this.shouldRender && (this.shouldRender = t !== void 0 ? t : !this.shouldRender, this.shouldRender && this.render());
  },
  c.prototype.render = function () {
    var t = this;
    this.gl.clear(16640,),
      this.instances.forEach(function (e,) {
        e.render(t.uniforms,);
      },),
      this.onRender && this.onRender(this,),
      this.shouldRender && requestAnimationFrame(function () {
        return t.render();
      },);
  },
  c.prototype.add = function (t, e,) {
    e === void 0 && (e = { uniforms: {}, }),
      e.uniforms === void 0 && (e.uniforms = {}),
      Object.assign(e.uniforms, JSON.parse(JSON.stringify(this.uniforms,),),),
      Object.assign(e, { gl: this.gl, uniformMap: this.uniformMap, },);
    var i = new l(e,);
    return this.instances.set(t, i,), i;
  },
  c.prototype.remove = function (t,) {
    var e = this.instances.get(t,);
    e !== void 0 && (e.destroy(), this.instances.delete(t,));
  },
  c.prototype.destroy = function () {
    var t = this;
    this.instances.forEach(function (e, i,) {
      e.destroy(), t.instances.delete(i,);
    },), this.toggle(false,);
  };
var d = c;

// https :https://esm.sh/v135/cobe@0.6.3/esnext/cobe.mjs
var p = 'phi';
var y = 'theta';
var h = 'mapSamples';
var b = 'mapBrightness';
var w = 'baseColor';
var C = 'markerColor';
var z = 'glowColor';
var c2 = 'markers';
var E = 'diffuse';
var g = 'devicePixelRatio';
var M = 'dark';
var B = 'offset';
var R = 'scale';
var D = 'opacity';
var Q = 'mapBaseBrightness';
var d2 = {
  [p]: 'A',
  [y]: 'B',
  [h]: 'l',
  [b]: 'E',
  [w]: 'R',
  [C]: 'S',
  [z]: 'y',
  [E]: 'F',
  [M]: 'G',
  [B]: 'x',
  [R]: 'C',
  [D]: 'H',
  [Q]: 'I',
};
var { PI: s, sin: m2, cos: u, } = Math;
var x = (n,) =>
  [].concat(
    ...n.map((o,) => {
      let [t, l2,] = o.location;
      t = t * s / 180, l2 = l2 * s / 180 - s;
      let r = u(t,);
      return [-r * u(l2,), m2(t,), r * m2(l2,), o.size,];
    },),
    [0, 0, 0, 0,],
  );
var I = (n, o,) => {
  let t = (a, e, i,) => ({ type: a, value: typeof o[e] > 'u' ? i : o[e], }),
    l2 = n.getContext('webgl',) ? 'webgl' : 'experimental-webgl',
    r = new d({
      canvas: n,
      contextType: l2,
      context: { alpha: true, stencil: false, antialias: true, depth: false, preserveDrawingBuffer: false, ...o.context, },
      settings: {
        [g]: o[g] || 1,
        onSetup: (a,) => {
          let e = a.RGB, i = a.UNSIGNED_BYTE, f = a.TEXTURE_2D, v = a.createTexture();
          a.bindTexture(f, v,), a.texImage2D(f, 0, e, 1, 1, 0, e, i, new Uint8Array([0, 0, 0, 0,],),);
          let A = new Image();
          A.onload = () => {
            a.bindTexture(f, v,), a.texImage2D(f, 0, e, e, i, A,), a.generateMipmap(f,);
            let F = a.getParameter(a.CURRENT_PROGRAM,), T = a.getUniformLocation(F, 'J',);
            a.texParameteri(f, a.TEXTURE_MIN_FILTER, a.NEAREST,), a.texParameteri(f, a.TEXTURE_MAG_FILTER, a.NEAREST,), a.uniform1i(T, 0,);
          },
            A.src =
              'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAACAAQAAAADMzoqnAAAAAXNSR0IArs4c6QAABA5JREFUeNrV179uHEUAx/Hf3JpbF+E2VASBsmVKTBcpKJs3SMEDcDwBiVJAAewYEBUivIHT0uUBIt0YCovKD0CRjUC4QfHYh8hYXu+P25vZ2Zm9c66gMd/GJ/tz82d3bk8GN4SrByYF2366FNTACIAkivVAAazQdnf3MvAlbNUQfOPAdQDvSAimMWhwy4I2g4SU+Kp04ISLpPBAKLxPyic3O/CCi+Y7rUJbiodcpDOFY7CgxCEXmdYD2EYK2s5lApOx5pEDDYCUwM1XdJUwBV11QQMg59kePSCaPAASQMEL2hwo6TJFgxpg+TgC2ymXPbuvc40awr3D1QCFfbH9kcoqAOkZozpQo0aqAGQRKCog/+tjkgbNFEtg2FffBvBGlSxHoAaAa1u6X4PBAwDiR8FFsrQgeUhfJTSALaB9jy5NCybJPn1SVFiWk7ywN+KzhH1aKAuydhGkbEF4lWohLXDXavlyFgHY7LBnLRdlAP6BS5Cc8RfVDXbkwN/oIvmY+6obbNeBP0JwTuMGu9gTzy1Q4RS/cWpfzszeYwd+CAFrtBW/Hur0gLbJGlD+/OjVwe/drfBxkbbg63dndEDfiEBlAd7ac0BPe1D6Jd8dfbLH+RI0OzseFB5s01/M+gMdAeluLOCAuaUA9Lezo/vSgXoCX9rtEiXnp7Q1W/CNyWcd8DXoS6jH/YZ5vAJEWY2dXFQe2TUgaFaNejCzJ98g6HnlVrsE58sDcYqg+9XY75fPqdoh/kRQWiXKg8MWlJQxUFMPjqnyujhFBE7UxIMjyszk0QwQlFsezImsyvUYYYVED2pk6m0Tg8T04Fwjk2kdAwSACqlM6gRRt3vQYAFGX0Ah7Ebx1H+MDRI5ui0QldH4j7FGcm90XdxD2Jg1AOEAVAKhEFXSn4cKUELurIAKwJ3MArypPscQaLhJFICJ0ohjDySAdH8AhDtCiTuMycH8CXzhH9jUACAO5uMhoAwA5i+T6WAKmmAqnLy80wxHqIPFYpqCwxGaYLt4Dyievg5kEoVEUAhs6pqKgFtDQYOuaXypaWKQfIuwwoGSZgfLsu/XAtI8cGN+h7Cc1A5oLOMhwlIPXuhu48AIvsSBkvtV9wsJRKCyYLfq5lTrQMFd1a262oqBck9K1V0YjQg0iEYYgpS1A9GlXQV5cykwm4A7BzVsxQqo7E+zCegO7Ma7yKgsuOcfKbMBwLC8wvVNYDsANYalEpOAa6zpWjTeMKGwEwC1CiQewJc5EKfgy7GmRAZA4vUVGwE2dPM/g0xuAInE/yG5aZ8ISxWGfYigUVbdyBElTHh2uCwGdfCkOLGgQVBh3Ewp+/QK4CDlR5Ws/Zf7yhCf8pH7vinWAvoVCQ6zz0NX5V/6GkAVV+2/5qsJ/gU8bsxpM8IeAQAAAABJRU5ErkJggg==';
        },
      },
    },);
  return r.add('', {
    vertex:
      'attribute vec3 aPosition;uniform mat4 uProjectionMatrix;uniform mat4 uModelMatrix;uniform mat4 uViewMatrix;void main(){gl_Position=uProjectionMatrix*uModelMatrix*uViewMatrix*vec4(aPosition,1.);}',
    fragment:
      'precision highp float;uniform vec2 t,x;uniform vec3 R,S,y;uniform vec4 z[64];uniform float A,B,l,C,D,E,F,G,H,I;uniform sampler2D J;float K=1./l;mat3 L(float a,float b){float c=cos(a),d=cos(b),e=sin(a),f=sin(b);return mat3(d,f*e,-f*c,0.,c,e,f,d*-e,d*c);}vec3 w(vec3 c,out float v){c=c.xzy;float p=max(2.,floor(log2(2.236068*l*3.141593*(1.-c.z*c.z))*.72021));vec2 g=floor(pow(1.618034,p)/2.236068*vec2(1.,1.618034)+.5),d=fract((g+1.)*.618034)*6.283185-3.883222,e=-2.*g,f=vec2(atan(c.y,c.x),c.z-1.),q=floor(vec2(e.y*f.x-d.y*(f.y*l+1.),-e.x*f.x+d.x*(f.y*l+1.))/(d.x*e.y-e.x*d.y));float n=3.141593;vec3 r;for(float h=0.;h<4.;h+=1.){vec2 s=vec2(mod(h,2.),floor(h*.5));float j=dot(g,q+s);if(j>l)continue;float a=j,b=0.;if(a>=524288.)a-=524288.,b+=.803894;if(a>=262144.)a-=262144.,b+=.901947;if(a>=131072.)a-=131072.,b+=.950973;if(a>=65536.)a-=65536.,b+=.475487;if(a>=32768.)a-=32768.,b+=.737743;if(a>=16384.)a-=16384.,b+=.868872;if(a>=8192.)a-=8192.,b+=.934436;if(a>=4096.)a-=4096.,b+=.467218;if(a>=2048.)a-=2048.,b+=.733609;if(a>=1024.)a-=1024.,b+=.866804;if(a>=512.)a-=512.,b+=.433402;if(a>=256.)a-=256.,b+=.216701;if(a>=128.)a-=128.,b+=.108351;if(a>=64.)a-=64.,b+=.554175;if(a>=32.)a-=32.,b+=.777088;if(a>=16.)a-=16.,b+=.888544;if(a>=8.)a-=8.,b+=.944272;if(a>=4.)a-=4.,b+=.472136;if(a>=2.)a-=2.,b+=.236068;if(a>=1.)a-=1.,b+=.618034;float k=fract(b)*6.283185,i=1.-2.*j*K,m=sqrt(1.-i*i);vec3 o=vec3(cos(k)*m,sin(k)*m,i);float u=length(c-o);if(u<n)n=u,r=o;}v=n;return r.xzy;}void main(){vec2 b=(gl_FragCoord.xy/t*2.-1.)/C-x*vec2(1.,-1.)/t;b.x*=t.x/t.y;float c=dot(b,b);vec4 M=vec4(0.);float m=0.;if(c<=.64){for(int d=0;d<2;d++){vec4 e=vec4(0.);float a;vec3 u=vec3(0.,0.,1.),f=normalize(vec3(b,sqrt(.64-c)));f.z*=d>0?-1.:1.,u.z*=d>0?-1.:1.;vec3 g=f*L(B,A),h=w(g,a);float n=asin(h.y),i=acos(-h.x/cos(n));i=h.z<0.?-i:i;float N=max(texture2D(J,vec2(i*.5/3.141593,-(n/3.141593+.5))).x,I),O=smoothstep(8e-3,0.,a),j=dot(f,u),v=pow(j,F)*E,o=N*O*v,T=mix((1.-o)*pow(j,.4),o,G)+.1;e+=vec4(R*T,1.);int U=int(D);float p=0.;for(int k=0;k<64;k++){if(k>=U)break;vec4 q=z[k];vec3 r=q.xyz,P=r-g;float s=q.w;if(dot(P,P)>s*s*4.)continue;vec3 V=w(r,a);a=length(V-g),a<s?p+=smoothstep(s*.5,0.,a):0.;}p=min(1.,p*v),e.xyz=mix(e.xyz,S,p),e.xyz+=pow(1.-j,4.)*y,M+=e*(1.+(d>0?-H:H))/2.;}m=pow(dot(normalize(vec3(-b,sqrt(1.-c))),vec3(0.,0.,1.)),4.)*smoothstep(0.,1.,.2/(c-.64));}else{float Q=sqrt(.2/(c-.64));m=smoothstep(.5,1.,Q/(Q+1.));}gl_FragColor=M+vec4(m*y,m);}',
    uniforms: {
      t: { type: 'vec2', value: [o.width, o.height,], },
      A: t('float', p,),
      B: t('float', y,),
      l: t('float', h,),
      E: t('float', b,),
      I: t('float', Q,),
      R: t('vec3', w,),
      S: t('vec3', C,),
      F: t('float', E,),
      y: t('vec3', z,),
      G: t('float', M,),
      z: { type: 'vec4', value: x(o[c2],), },
      D: { type: 'float', value: o[c2].length, },
      x: t('vec2', B, [0, 0,],),
      C: t('float', R, 1,),
      H: t('float', D, 1,),
    },
    mode: 4,
    geometry: {
      vertices: [{ x: -100, y: 100, z: 0, }, { x: -100, y: -100, z: 0, }, { x: 100, y: 100, z: 0, }, { x: 100, y: -100, z: 0, }, {
        x: -100,
        y: -100,
        z: 0,
      }, { x: 100, y: 100, z: 0, },],
    },
    onRender: ({ uniforms: a, },) => {
      let e = {};
      if (o.onRender) {
        e = o.onRender(e,) || e;
        for (let i in d2) {
          e[i] !== void 0 && (a[d2[i]].value = e[i]);
        }
        e[c2] !== void 0 && (a.z.value = x(e[c2],), a.D.value = e[c2].length), e.width && e.height && (a.t.value = [e.width, e.height,]);
      }
    },
  },),
    r;
};

// https :https://framerusercontent.com/modules/xFhv3ETdRBLjJusGaZ1P/d9ZONLqTB9uCj5kbWKll/Globe.js
import { useSpring, } from 'unframer';
function Globe(props,) {
  const {
    background,
    baseColor,
    glowColor,
    isDraggable,
    dragOptions,
    speed,
    theta,
    phi,
    dark,
    diffuse,
    maxSamples,
    mapBrightness,
    markerSize,
    markerArray,
    markerColor,
    scale,
    alignment,
    maxWidth,
    offset,
  } = props;
  const { offsetX, offsetY, } = offset;
  const { stiffness, damping, mass, } = dragOptions;
  const canvasRef = useRef2();
  const pointerInteracting = useRef2(null,);
  const pointerInteractionMovement = useRef2(0,);
  const isCanvas = RenderTarget.current() === RenderTarget.canvas;
  const r = useSpring(0, { stiffness, damping, mass, restDelta: 1e-4, restSpeed: 1e-4, },);
  const fadeMask = 'radial-gradient(circle at 50% 50%, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 70%)';
  useEffect(() => {
    let phiValue = phi;
    let width = 0;
    const onResize = () => {
      if (canvasRef.current && (width = canvasRef.current.offsetWidth)) {
        window.addEventListener('resize', onResize,);
      }
    };
    onResize();
    const baseConvert = convertRGB(baseColor,);
    const glowConvert = convertRGB(glowColor,);
    const markerConvert = convertRGB(markerColor,);
    const globe = I(canvasRef.current, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      phi,
      theta,
      dark,
      diffuse,
      mapSamples: maxSamples,
      mapBrightness,
      baseColor: [baseConvert.r, baseConvert.g, baseConvert.b,],
      glowColor: [glowConvert.r, glowConvert.g, glowConvert.b,],
      markerColor: [markerConvert.r, markerConvert.g, markerConvert.b,],
      markers: markerArray.map((marker,) => {
        return { location: [marker.latitude, marker.longitude,], size: markerSize, };
      },),
      scale,
      offset: [offsetX, offsetY,],
      onRender: (state,) => {
        if (!isCanvas) {
          state.phi = phiValue + r.get();
        }
        state.width = width * 2;
        state.height = width * 2;
        if (!isCanvas) {
          state.phi = phiValue + r.get();
          phiValue += speed / 200;
        }
      },
    },);
    return () => {
      globe.destroy();
    };
  }, [props,],);
  return /* @__PURE__ */ _jsx2('div', {
    style: { ...flexStyles, placeItems: alignment, background, },
    children: /* @__PURE__ */ _jsx2('div', {
      style: { width: '100%', aspectRatio: '1/1', maxWidth, WebkitMaskImage: fadeMask, MozMaskImage: fadeMask, maskImage: fadeMask, },
      children: /* @__PURE__ */ _jsx2('canvas', {
        ref: canvasRef,
        style: { width: '100%', height: '100%', contain: 'layout paint size', cursor: 'auto', userSelect: 'none', },
        onPointerDown: (e,) => {
          if (isDraggable) {
            pointerInteracting.current = e.clientX - pointerInteractionMovement.current;
            canvasRef.current.style.cursor = 'grabbing';
          }
        },
        onPointerUp: () => {
          if (isDraggable) {
            pointerInteracting.current = null;
            canvasRef.current.style.cursor = 'grab';
          }
        },
        onPointerOver: () => {
          if (isDraggable) {
            canvasRef.current.style.cursor = 'grab';
          }
        },
        onPointerOut: () => {
          if (isDraggable) {
            pointerInteracting.current = null;
            canvasRef.current.style.cursor = 'auto';
          }
        },
        onMouseMove: (e,) => {
          if (isDraggable) {
            if (pointerInteracting.current !== null) {
              const delta = e.clientX - pointerInteracting.current;
              pointerInteractionMovement.current = delta;
              r.set(delta / 100,);
            }
          }
        },
        onTouchMove: (e,) => {
          if (pointerInteracting.current !== null && e.touches[0]) {
            const delta = e.touches[0].clientX - pointerInteracting.current;
            pointerInteractionMovement.current = delta;
            r.set(delta / 100,);
          }
        },
      },),
    },),
  },);
}
Globe.defaultProps = {
  background: '#000000',
  baseColor: '#333333',
  glowColor: '#ffffff',
  markerColor: '#ffffff',
  isDraggable: true,
  dragOptions: { stiffness: 200, damping: 40, mass: 1, },
  speed: 1,
  phi: 0,
  theta: 0.3,
  dark: 1,
  diffuse: 2,
  mapBrightness: 20,
  maxSamples: 2e4,
  markerSize: 0.1,
  markerArray: { latitude: 52.3676, longitude: 4.9041, },
  scale: 1,
  alignment: 'center',
  maxWidth: 800,
  offset: { offsetX: 0, offsetY: 0, },
};
Globe.displayName = 'Globe';
var dp = Globe.defaultProps;
var dpOffset = Globe.defaultProps.offset;
var dpDrag = Globe.defaultProps.dragOptions;
addPropertyControls2(Globe, {
  background: { type: ControlType2.Color, title: 'Backdrop', defaultValue: dp.background, },
  baseColor: { type: ControlType2.Color, title: 'Base', defaultValue: dp.baseColor, },
  glowColor: { type: ControlType2.Color, title: 'Glow', defaultValue: dp.glowColor, },
  markerColor: { type: ControlType2.Color, title: 'Marker', defaultValue: dp.markerColor, },
  isDraggable: { type: ControlType2.Boolean, title: 'Draggable', defaultValue: dp.isDraggable, },
  dragOptions: {
    type: ControlType2.Object,
    title: 'Transition',
    controls: {
      stiffness: { type: ControlType2.Number, min: 0, max: 1e3, title: 'Stiffness', defaultValue: dpDrag.stiffness, },
      damping: { type: ControlType2.Number, min: 0, max: 100, title: 'Damping', defaultValue: dpDrag.damping, },
      mass: { type: ControlType2.Number, min: 0, title: 'Mass', displayStepper: true, defaultValue: dpDrag.mass, },
    },
    hidden(props,) {
      return !props.isDraggable;
    },
  },
  speed: { type: ControlType2.Number, min: 0, step: 0.1, displayStepper: true, title: 'Speed', defaultValue: dp.speed, },
  phi: { type: ControlType2.Number, min: 0, max: 6.28, step: 0.01, displayStepper: true, title: 'Phi', defaultValue: dp.phi, },
  theta: { type: ControlType2.Number, min: -1.57, max: 1.57, step: 0.01, title: 'Theta', defaultValue: dp.theta, },
  dark: { type: ControlType2.Number, min: 0, max: 1, step: 0.1, displayStepper: true, title: 'Dark', defaultValue: dp.dark, },
  diffuse: { type: ControlType2.Number, min: 0, max: 5, step: 0.01, title: 'Diffuse', defaultValue: dp.diffuse, },
  mapBrightness: { type: ControlType2.Number, min: 0, max: 12, step: 0.01, title: 'Brightness', defaultValue: dp.mapBrightness, },
  maxSamples: { type: ControlType2.Number, min: 0, max: 1e5, title: 'Samples', defaultValue: dp.maxSamples, },
  scale: { type: ControlType2.Number, min: 0, max: 5, step: 0.025, displayStepper: true, title: 'Scale', defaultValue: dp.scale, },
  alignment: {
    type: ControlType2.Enum,
    title: 'Align',
    options: ['flex-start', 'center', 'flex-end',],
    optionIcons: ['align-top', 'align-middle', 'align-bottom',],
    defaultValue: dp.alignment,
    displaySegmentedControl: true,
  },
  maxWidth: { type: ControlType2.Number, title: 'Max Width', min: 100, max: 5e3, defaultValue: dp.maxWidth, },
  offset: {
    type: ControlType2.Object,
    title: 'Offset',
    controls: {
      offsetX: { type: ControlType2.Number, min: -5e3, max: 5e3, title: 'X', defaultValue: dpOffset.offsetX, },
      offsetY: { type: ControlType2.Number, min: -5e3, max: 5e3, title: 'Y', defaultValue: dpOffset.offsetY, },
    },
  },
  markerSize: { type: ControlType2.Number, min: 0, max: 1, step: 0.01, title: 'Markers', defaultValue: dp.markerSize, },
  markerArray: {
    type: ControlType2.Array,
    title: 'Location',
    // defaultValue: [{ latitude: 52.3676, longitude: 4.9041 }],
    control: {
      type: ControlType2.Object,
      title: 'Location',
      controls: {
        latitude: { type: ControlType2.Number, min: -90, max: 90, title: 'Lat', step: 1e-4, defaultValue: dp.markerArray.latitude, },
        longitude: { type: ControlType2.Number, min: -180, max: 180, title: 'Long', step: 1e-4, defaultValue: dp.markerArray.longitude, },
      },
    },
  },
},);
var flexStyles = { width: '100%', height: '100%', display: 'flex', placeItems: 'center', placeContent: 'center', overflow: 'visible', };
var convertRGB = (color,) => {
  return { r: Color(color,).r / 255, g: Color(color,).g / 255, b: Color(color,).b / 255, };
};

// https :https://framerusercontent.com/modules/LUHr7AaF8n6aYR9A4VJD/LGXF6jC9dehR0S4C6leT/NaTB7MiaZ.js
import { jsx as _jsx3, jsxs as _jsxs2, } from 'react/jsx-runtime';
import {
  addFonts as addFonts2,
  addPropertyControls as addPropertyControls3,
  ComponentViewportProvider as ComponentViewportProvider2,
  ControlType as ControlType3,
  cx as cx2,
  getFonts as getFonts2,
  useActiveVariantCallback as useActiveVariantCallback2,
  useComponentViewport as useComponentViewport2,
  useLocaleInfo as useLocaleInfo2,
  useVariantState as useVariantState2,
  withCSS as withCSS2,
} from 'unframer';
import { LayoutGroup as LayoutGroup2, motion as motion2, MotionConfigContext as MotionConfigContext2, } from 'unframer';
import * as React2 from 'react';
var ConicFonts = getFonts2(Conic,);
var ClockFonts = getFonts2(Clock,);
var cycleOrder2 = ['DNAgQW0Bv',];
var serializationHash2 = 'framer-ntB1z';
var variantClassNames2 = { DNAgQW0Bv: 'framer-v-fefz7t', };
var transition12 = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: 'spring', };
var transformTemplate1 = (_, t,) => `translateY(-50%) ${t}`;
var transformTemplate2 = (_, t,) => `translate(-50%, -50%) ${t}`;
var Transition2 = ({ value, children, },) => {
  const config = React2.useContext(MotionConfigContext2,);
  const transition = value !== null && value !== void 0 ? value : config.transition;
  const contextValue = React2.useMemo(() => ({ ...config, transition, }), [JSON.stringify(transition,),],);
  return /* @__PURE__ */ _jsx3(MotionConfigContext2.Provider, { value: contextValue, children, },);
};
var Variants2 = motion2(React2.Fragment,);
var getProps2 = ({ height, id, tap, width, ...props },) => {
  return { ...props, I2ahzVrBC: tap !== null && tap !== void 0 ? tap : props.I2ahzVrBC, };
};
var createLayoutDependency2 = (props, variants,) => variants.join('-',) + props.layoutDependency;
var Component2 = /* @__PURE__ */ React2.forwardRef(function (props, ref,) {
  const { activeLocale, setLocale, } = useLocaleInfo2();
  const { style, className: className2, layoutId, variant, I2ahzVrBC, ...restProps } = getProps2(props,);
  const { baseVariant, classNames, gestureVariant, setGestureState, setVariant, variants, } = useVariantState2({
    cycleOrder: cycleOrder2,
    defaultVariant: 'DNAgQW0Bv',
    variant,
    variantClassNames: variantClassNames2,
  },);
  const layoutDependency = createLayoutDependency2(props, variants,);
  const { activeVariantCallback, delay, } = useActiveVariantCallback2(baseVariant,);
  const onClickmvgvsu = activeVariantCallback(async (...args) => {
    if (I2ahzVrBC) {
      const res = await I2ahzVrBC(...args,);
      if (res === false) {
        return false;
      }
    }
  },);
  const ref1 = React2.useRef(null,);
  const defaultLayoutId = React2.useId();
  const sharedStyleClassNames = [];
  const componentViewport = useComponentViewport2();
  return /* @__PURE__ */ _jsx3(LayoutGroup2, {
    id: layoutId !== null && layoutId !== void 0 ? layoutId : defaultLayoutId,
    children: /* @__PURE__ */ _jsx3(Variants2, {
      animate: variants,
      initial: false,
      children: /* @__PURE__ */ _jsx3(Transition2, {
        value: transition12,
        children: /* @__PURE__ */ _jsxs2(motion2.div, {
          ...restProps,
          className: cx2(serializationHash2, ...sharedStyleClassNames, 'framer-fefz7t', className2, classNames,),
          'data-framer-name': 'Variant 1',
          layoutDependency,
          layoutId: 'DNAgQW0Bv',
          onHoverEnd: () => setGestureState({ isHovered: false, },),
          onHoverStart: () => setGestureState({ isHovered: true, },),
          onTap: () => setGestureState({ isPressed: false, },),
          onTapCancel: () => setGestureState({ isPressed: false, },),
          onTapStart: () => setGestureState({ isPressed: true, },),
          ref: ref !== null && ref !== void 0 ? ref : ref1,
          style: { backgroundColor: 'rgb(255, 255, 255)', ...style, },
          children: [
            /* @__PURE__ */ _jsx3(ComponentViewportProvider2, {
              children: /* @__PURE__ */ _jsx3(motion2.div, {
                className: 'framer-1cgw7lr-container',
                layoutDependency,
                layoutId: 'mExa7m2IC-container',
                children: /* @__PURE__ */ _jsx3(Conic, {
                  blur: 17,
                  colors: 'cyan, magenta, yellow, cyan',
                  from: 0,
                  height: '100%',
                  id: 'mExa7m2IC',
                  layoutId: 'mExa7m2IC',
                  onClick: onClickmvgvsu,
                  radius: 126,
                  style: { height: '100%', width: '100%', },
                  width: '100%',
                  xPos: 91,
                  yPos: 50,
                },),
              },),
            },),
            /* @__PURE__ */ _jsx3(ComponentViewportProvider2, {
              children: /* @__PURE__ */ _jsx3(motion2.div, {
                className: 'framer-1eoi0vx-container',
                layoutDependency,
                layoutId: 'd5VNH5Vnt-container',
                children: /* @__PURE__ */ _jsx3(Conic, {
                  blur: 17,
                  colors: 'cyan, magenta, yellow, cyan',
                  from: 0,
                  height: '100%',
                  id: 'd5VNH5Vnt',
                  layoutId: 'd5VNH5Vnt',
                  radius: 126,
                  style: { height: '100%', width: '100%', },
                  width: '100%',
                  xPos: 42,
                  yPos: 0,
                },),
              },),
            },),
            /* @__PURE__ */ _jsx3(ComponentViewportProvider2, {
              children: /* @__PURE__ */ _jsx3(motion2.div, {
                className: 'framer-1zd7n7-container',
                layoutDependency,
                layoutId: 'cwYSoNkAw-container',
                children: /* @__PURE__ */ _jsx3(Conic, {
                  blur: 17,
                  colors: 'cyan, magenta, yellow, cyan',
                  from: 0,
                  height: '100%',
                  id: 'cwYSoNkAw',
                  layoutId: 'cwYSoNkAw',
                  radius: 126,
                  style: { height: '100%', width: '100%', },
                  width: '100%',
                  xPos: 55,
                  yPos: 36,
                },),
              },),
            },),
            /* @__PURE__ */ _jsx3(ComponentViewportProvider2, {
              children: /* @__PURE__ */ _jsx3(motion2.div, {
                className: 'framer-tukekt-container',
                layoutDependency,
                layoutId: 'z0eYEysfs-container',
                children: /* @__PURE__ */ _jsx3(Conic, {
                  blur: 17,
                  colors: 'cyan, magenta, yellow, cyan',
                  from: 0,
                  height: '100%',
                  id: 'z0eYEysfs',
                  layoutId: 'z0eYEysfs',
                  radius: 126,
                  style: { height: '100%', width: '100%', },
                  width: '100%',
                  xPos: 100,
                  yPos: 100,
                },),
              },),
            },),
            /* @__PURE__ */ _jsx3(ComponentViewportProvider2, {
              children: /* @__PURE__ */ _jsx3(motion2.div, {
                className: 'framer-hhva42-container',
                layoutDependency,
                layoutId: 'erCfiWZeI-container',
                children: /* @__PURE__ */ _jsx3(Conic, {
                  blur: 17,
                  colors: 'cyan, magenta, yellow, cyan',
                  from: 0,
                  height: '100%',
                  id: 'erCfiWZeI',
                  layoutId: 'erCfiWZeI',
                  radius: 126,
                  style: { height: '100%', width: '100%', },
                  width: '100%',
                  xPos: 42,
                  yPos: 0,
                },),
              },),
            },),
            /* @__PURE__ */ _jsx3(ComponentViewportProvider2, {
              children: /* @__PURE__ */ _jsx3(motion2.div, {
                className: 'framer-rc6yop-container',
                layoutDependency,
                layoutId: 'p5t28h7wK-container',
                transformTemplate: transformTemplate1,
                children: /* @__PURE__ */ _jsx3(Clock, {
                  ampmCase: 'uppercase',
                  color: 'rgb(0, 0, 0)',
                  font: {
                    fontFamily: '"Inter", sans-serif',
                    fontSize: '22px',
                    fontStyle: 'normal',
                    letterSpacing: '0em',
                    lineHeight: '1em',
                  },
                  height: '100%',
                  id: 'p5t28h7wK',
                  is12hour: true,
                  layoutId: 'p5t28h7wK',
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
            /* @__PURE__ */ _jsx3(motion2.div, { className: 'framer-koo07p', layoutDependency, layoutId: 'UE9biDFiR', },),
            /* @__PURE__ */ _jsx3(ComponentViewportProvider2, {
              children: /* @__PURE__ */ _jsx3(motion2.div, {
                className: 'framer-m7o9z1-container',
                layoutDependency,
                layoutId: 'OfwgIR2eQ-container',
                transformTemplate: transformTemplate1,
                children: /* @__PURE__ */ _jsx3(Clock, {
                  ampmCase: 'uppercase',
                  color: 'rgb(0, 0, 0)',
                  font: {
                    fontFamily: '"Inter", sans-serif',
                    fontSize: '22px',
                    fontStyle: 'normal',
                    letterSpacing: '0em',
                    lineHeight: '1em',
                  },
                  height: '100%',
                  id: 'OfwgIR2eQ',
                  is12hour: true,
                  layoutId: 'OfwgIR2eQ',
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
            /* @__PURE__ */ _jsx3(motion2.div, { className: 'framer-m5smwr', layoutDependency, layoutId: 'D8NzNigY2', },),
            /* @__PURE__ */ _jsx3(ComponentViewportProvider2, {
              children: /* @__PURE__ */ _jsx3(motion2.div, {
                className: 'framer-129xavi-container',
                layoutDependency,
                layoutId: 'P6FwUg9RB-container',
                transformTemplate: transformTemplate2,
                children: /* @__PURE__ */ _jsx3(Clock, {
                  ampmCase: 'uppercase',
                  color: 'rgb(0, 0, 0)',
                  font: {
                    fontFamily: '"Inter", sans-serif',
                    fontSize: '22px',
                    fontStyle: 'normal',
                    letterSpacing: '0em',
                    lineHeight: '1em',
                  },
                  height: '100%',
                  id: 'P6FwUg9RB',
                  is12hour: true,
                  layoutId: 'P6FwUg9RB',
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
            /* @__PURE__ */ _jsx3(motion2.div, { className: 'framer-7gp9vw', layoutDependency, layoutId: 'ndB4wlOcR', },),
            /* @__PURE__ */ _jsx3(ComponentViewportProvider2, {
              children: /* @__PURE__ */ _jsx3(motion2.div, {
                className: 'framer-1ay2b39-container',
                layoutDependency,
                layoutId: 'hrg3erol8-container',
                transformTemplate: transformTemplate1,
                children: /* @__PURE__ */ _jsx3(Clock, {
                  ampmCase: 'uppercase',
                  color: 'rgb(0, 0, 0)',
                  font: {
                    fontFamily: '"Inter", sans-serif',
                    fontSize: '22px',
                    fontStyle: 'normal',
                    letterSpacing: '0em',
                    lineHeight: '1em',
                  },
                  height: '100%',
                  id: 'hrg3erol8',
                  is12hour: true,
                  layoutId: 'hrg3erol8',
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
            /* @__PURE__ */ _jsx3(motion2.div, { className: 'framer-17l78v9', layoutDependency, layoutId: 'j2VWVHPa0', },),
            /* @__PURE__ */ _jsx3(ComponentViewportProvider2, {
              children: /* @__PURE__ */ _jsx3(motion2.div, {
                className: 'framer-jjr1ep-container',
                layoutDependency,
                layoutId: 'i5ekIdJLO-container',
                transformTemplate: transformTemplate1,
                children: /* @__PURE__ */ _jsx3(Clock, {
                  ampmCase: 'uppercase',
                  color: 'rgb(0, 0, 0)',
                  font: {
                    fontFamily: '"Inter", sans-serif',
                    fontSize: '22px',
                    fontStyle: 'normal',
                    letterSpacing: '0em',
                    lineHeight: '1em',
                  },
                  height: '100%',
                  id: 'i5ekIdJLO',
                  is12hour: true,
                  layoutId: 'i5ekIdJLO',
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
            /* @__PURE__ */ _jsx3(motion2.div, { className: 'framer-f4i1k8', layoutDependency, layoutId: 'yTrh5pAqg', },),
          ],
        },),
      },),
    },),
  },);
},);
var css3 = [
  '@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }',
  '.framer-ntB1z.framer-1mt9fd, .framer-ntB1z .framer-1mt9fd { display: block; }',
  '.framer-ntB1z.framer-fefz7t { height: 183px; overflow: hidden; position: relative; width: 807px; }',
  '.framer-ntB1z .framer-1cgw7lr-container { flex: none; height: 150px; left: 6px; position: absolute; top: calc(50.00000000000002% - 150px / 2); width: 150px; }',
  '.framer-ntB1z .framer-1eoi0vx-container { flex: none; height: 150px; left: 164px; position: absolute; top: calc(50.00000000000002% - 150px / 2); width: 149px; }',
  '.framer-ntB1z .framer-1zd7n7-container { flex: none; height: 150px; left: calc(48.949320148331296% - 150px / 2); position: absolute; top: calc(50.00000000000002% - 150px / 2); width: 150px; }',
  '.framer-ntB1z .framer-tukekt-container { flex: none; height: 150px; position: absolute; right: 181px; top: calc(50.00000000000002% - 150px / 2); width: 149px; }',
  '.framer-ntB1z .framer-hhva42-container { flex: none; height: 150px; position: absolute; right: 23px; top: calc(50.00000000000002% - 150px / 2); width: 150px; }',
  '.framer-ntB1z .framer-rc6yop-container { flex: none; height: auto; left: 51px; position: absolute; top: 51%; width: 79px; }',
  '.framer-ntB1z .framer-koo07p { flex: none; height: 15px; left: 54px; overflow: visible; position: absolute; top: calc(50.27322404371587% - 15px / 2); width: 64px; }',
  '.framer-ntB1z .framer-m7o9z1-container { flex: none; height: auto; left: 210px; position: absolute; top: 51%; width: 79px; }',
  '.framer-ntB1z .framer-m5smwr { flex: none; height: 15px; left: 213px; overflow: visible; position: absolute; top: calc(50.27322404371587% - 15px / 2); width: 64px; }',
  '.framer-ntB1z .framer-129xavi-container { flex: none; height: auto; left: 50%; position: absolute; top: 51%; width: 79px; }',
  '.framer-ntB1z .framer-7gp9vw { flex: none; height: 15px; left: calc(49.5662949194548% - 64px / 2); overflow: visible; position: absolute; top: calc(50.27322404371587% - 15px / 2); width: 64px; }',
  '.framer-ntB1z .framer-1ay2b39-container { flex: none; height: auto; position: absolute; right: 207px; top: 51%; width: 79px; }',
  '.framer-ntB1z .framer-17l78v9 { flex: none; height: 15px; overflow: visible; position: absolute; right: 218px; top: calc(50.27322404371587% - 15px / 2); width: 64px; }',
  '.framer-ntB1z .framer-jjr1ep-container { flex: none; height: auto; position: absolute; right: 45px; top: 51%; width: 79px; }',
  '.framer-ntB1z .framer-f4i1k8 { flex: none; height: 15px; overflow: visible; position: absolute; right: 56px; top: calc(50.27322404371587% - 15px / 2); width: 64px; }',
];
var FramerNaTB7MiaZ = withCSS2(Component2, css3, 'framer-ntB1z',);
var stdin_default2 = FramerNaTB7MiaZ;
FramerNaTB7MiaZ.displayName = 'scroll-MAIN-nearby';
FramerNaTB7MiaZ.defaultProps = { height: 183, width: 807, };
addPropertyControls3(FramerNaTB7MiaZ, { I2ahzVrBC: { title: 'Tap', type: ControlType3.EventHandler, }, },);
addFonts2(FramerNaTB7MiaZ, [
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
  ...ConicFonts,
  ...ClockFonts,
], { supportsExplicitInterCodegen: true, },);

// https :https://framerusercontent.com/modules/Yveis5w6RlXgK74sLnR2/SCMP0V4tYExNGlZVhGl7/uRlqfPp64.js
import { jsx as _jsx4, jsxs as _jsxs3, } from 'react/jsx-runtime';
import {
  addFonts as addFonts3,
  ComponentViewportProvider as ComponentViewportProvider3,
  cx as cx3,
  getFonts as getFonts3,
  useComponentViewport as useComponentViewport3,
  useLocaleInfo as useLocaleInfo3,
  useVariantState as useVariantState3,
  withCSS as withCSS3,
} from 'unframer';
import { LayoutGroup as LayoutGroup3, motion as motion3, MotionConfigContext as MotionConfigContext3, } from 'unframer';
import * as React3 from 'react';
var ConicFonts2 = getFonts3(Conic,);
var ClockFonts2 = getFonts3(Clock,);
var cycleOrder3 = ['k5dbfugPO',];
var serializationHash3 = 'framer-alg8l';
var variantClassNames3 = { k5dbfugPO: 'framer-v-1ev0b04', };
var transition13 = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: 'spring', };
var transformTemplate12 = (_, t,) => `translateY(-50%) ${t}`;
var Transition3 = ({ value, children, },) => {
  const config = React3.useContext(MotionConfigContext3,);
  const transition = value !== null && value !== void 0 ? value : config.transition;
  const contextValue = React3.useMemo(() => ({ ...config, transition, }), [JSON.stringify(transition,),],);
  return /* @__PURE__ */ _jsx4(MotionConfigContext3.Provider, { value: contextValue, children, },);
};
var Variants3 = motion3(React3.Fragment,);
var getProps3 = ({ height, id, width, ...props },) => {
  return { ...props, };
};
var createLayoutDependency3 = (props, variants,) => variants.join('-',) + props.layoutDependency;
var Component3 = /* @__PURE__ */ React3.forwardRef(function (props, ref,) {
  const { activeLocale, setLocale, } = useLocaleInfo3();
  const { style, className: className2, layoutId, variant, ...restProps } = getProps3(props,);
  const { baseVariant, classNames, gestureVariant, setGestureState, setVariant, variants, } = useVariantState3({
    cycleOrder: cycleOrder3,
    defaultVariant: 'k5dbfugPO',
    variant,
    variantClassNames: variantClassNames3,
  },);
  const layoutDependency = createLayoutDependency3(props, variants,);
  const ref1 = React3.useRef(null,);
  const defaultLayoutId = React3.useId();
  const sharedStyleClassNames = [];
  const componentViewport = useComponentViewport3();
  return /* @__PURE__ */ _jsx4(LayoutGroup3, {
    id: layoutId !== null && layoutId !== void 0 ? layoutId : defaultLayoutId,
    children: /* @__PURE__ */ _jsx4(Variants3, {
      animate: variants,
      initial: false,
      children: /* @__PURE__ */ _jsx4(Transition3, {
        value: transition13,
        children: /* @__PURE__ */ _jsxs3(motion3.div, {
          ...restProps,
          className: cx3(serializationHash3, ...sharedStyleClassNames, 'framer-1ev0b04', className2, classNames,),
          'data-framer-name': 'Variant 1',
          layoutDependency,
          layoutId: 'k5dbfugPO',
          onHoverEnd: () => setGestureState({ isHovered: false, },),
          onHoverStart: () => setGestureState({ isHovered: true, },),
          onTap: () => setGestureState({ isPressed: false, },),
          onTapCancel: () => setGestureState({ isPressed: false, },),
          onTapStart: () => setGestureState({ isPressed: true, },),
          ref: ref !== null && ref !== void 0 ? ref : ref1,
          style: { backgroundColor: 'rgb(255, 255, 255)', ...style, },
          children: [
            /* @__PURE__ */ _jsx4(ComponentViewportProvider3, {
              children: /* @__PURE__ */ _jsx4(motion3.div, {
                className: 'framer-1s8prrx-container',
                layoutDependency,
                layoutId: 'uDxjNmVrh-container',
                children: /* @__PURE__ */ _jsx4(Conic, {
                  blur: 17,
                  colors: 'cyan, magenta, yellow, cyan',
                  from: 0,
                  height: '100%',
                  id: 'uDxjNmVrh',
                  layoutId: 'uDxjNmVrh',
                  radius: 126,
                  style: { height: '100%', width: '100%', },
                  width: '100%',
                  xPos: 91,
                  yPos: 50,
                },),
              },),
            },),
            /* @__PURE__ */ _jsx4(ComponentViewportProvider3, {
              children: /* @__PURE__ */ _jsx4(motion3.div, {
                className: 'framer-pqg8m7-container',
                layoutDependency,
                layoutId: 'VLJ0P2qid-container',
                children: /* @__PURE__ */ _jsx4(Conic, {
                  blur: 17,
                  colors: 'cyan, magenta, yellow, cyan',
                  from: 0,
                  height: '100%',
                  id: 'VLJ0P2qid',
                  layoutId: 'VLJ0P2qid',
                  radius: 126,
                  style: { height: '100%', width: '100%', },
                  width: '100%',
                  xPos: 44,
                  yPos: 44,
                },),
              },),
            },),
            /* @__PURE__ */ _jsx4(motion3.div, {
              className: 'framer-16e9q7d',
              layoutDependency,
              layoutId: 'bKgV1Kl_L',
              style: { filter: 'grayscale(1)', WebkitFilter: 'grayscale(1)', },
              children: /* @__PURE__ */ _jsx4(ComponentViewportProvider3, {
                children: /* @__PURE__ */ _jsx4(motion3.div, {
                  className: 'framer-6tesu7-container',
                  layoutDependency,
                  layoutId: 'Z3cDF2BVb-container',
                  children: /* @__PURE__ */ _jsx4(Conic, {
                    blur: 17,
                    colors: 'cyan, magenta, yellow, cyan',
                    from: 0,
                    height: '100%',
                    id: 'Z3cDF2BVb',
                    layoutId: 'Z3cDF2BVb',
                    radius: 126,
                    style: { height: '100%', width: '100%', },
                    width: '100%',
                    xPos: 55,
                    yPos: 36,
                  },),
                },),
              },),
            },),
            /* @__PURE__ */ _jsx4(ComponentViewportProvider3, {
              children: /* @__PURE__ */ _jsx4(motion3.div, {
                className: 'framer-1oen9ib-container',
                layoutDependency,
                layoutId: 'fKLzDZr53-container',
                children: /* @__PURE__ */ _jsx4(Conic, {
                  blur: 17,
                  colors: 'cyan, magenta, yellow, cyan',
                  from: 0,
                  height: '100%',
                  id: 'fKLzDZr53',
                  layoutId: 'fKLzDZr53',
                  radius: 126,
                  style: { height: '100%', width: '100%', },
                  width: '100%',
                  xPos: 100,
                  yPos: 100,
                },),
              },),
            },),
            /* @__PURE__ */ _jsx4(motion3.div, {
              className: 'framer-hpno8m',
              layoutDependency,
              layoutId: 'FEIcFaF9x',
              style: { filter: 'grayscale(1)', WebkitFilter: 'grayscale(1)', },
              children: /* @__PURE__ */ _jsx4(ComponentViewportProvider3, {
                children: /* @__PURE__ */ _jsx4(motion3.div, {
                  className: 'framer-xvbzfj-container',
                  layoutDependency,
                  layoutId: 'Rm8Vvdh16-container',
                  children: /* @__PURE__ */ _jsx4(Conic, {
                    blur: 17,
                    colors: 'cyan, magenta, yellow, cyan',
                    from: 0,
                    height: '100%',
                    id: 'Rm8Vvdh16',
                    layoutId: 'Rm8Vvdh16',
                    radius: 126,
                    style: { height: '100%', width: '100%', },
                    width: '100%',
                    xPos: 42,
                    yPos: 0,
                  },),
                },),
              },),
            },),
            /* @__PURE__ */ _jsx4(ComponentViewportProvider3, {
              children: /* @__PURE__ */ _jsx4(motion3.div, {
                className: 'framer-sh1po6-container',
                layoutDependency,
                layoutId: 'pt01GEA86-container',
                transformTemplate: transformTemplate12,
                children: /* @__PURE__ */ _jsx4(Clock, {
                  ampmCase: 'uppercase',
                  color: 'rgb(0, 0, 0)',
                  font: {
                    fontFamily: '"Inter", sans-serif',
                    fontSize: '22px',
                    fontStyle: 'normal',
                    letterSpacing: '0em',
                    lineHeight: '1em',
                  },
                  height: '100%',
                  id: 'pt01GEA86',
                  is12hour: true,
                  layoutId: 'pt01GEA86',
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
            /* @__PURE__ */ _jsx4(motion3.div, { className: 'framer-1bxr64m', layoutDependency, layoutId: 'r9c6f_Vh3', },),
            /* @__PURE__ */ _jsx4(ComponentViewportProvider3, {
              children: /* @__PURE__ */ _jsx4(motion3.div, {
                className: 'framer-fkwbrh-container',
                layoutDependency,
                layoutId: 'gmKyx6FXU-container',
                transformTemplate: transformTemplate12,
                children: /* @__PURE__ */ _jsx4(Clock, {
                  ampmCase: 'uppercase',
                  color: 'rgb(0, 0, 0)',
                  font: {
                    fontFamily: '"Inter", sans-serif',
                    fontSize: '22px',
                    fontStyle: 'normal',
                    letterSpacing: '0em',
                    lineHeight: '1em',
                  },
                  height: '100%',
                  id: 'gmKyx6FXU',
                  is12hour: true,
                  layoutId: 'gmKyx6FXU',
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
            /* @__PURE__ */ _jsx4(motion3.div, { className: 'framer-12pd6cm', layoutDependency, layoutId: 'AlzRxduXA', },),
            /* @__PURE__ */ _jsx4(ComponentViewportProvider3, {
              children: /* @__PURE__ */ _jsx4(motion3.div, {
                className: 'framer-1f7d66x-container',
                layoutDependency,
                layoutId: 'mRTu09HyL-container',
                transformTemplate: transformTemplate12,
                children: /* @__PURE__ */ _jsx4(Clock, {
                  ampmCase: 'uppercase',
                  color: 'rgb(0, 0, 0)',
                  font: {
                    fontFamily: '"Inter", sans-serif',
                    fontSize: '22px',
                    fontStyle: 'normal',
                    letterSpacing: '0em',
                    lineHeight: '1em',
                  },
                  height: '100%',
                  id: 'mRTu09HyL',
                  is12hour: true,
                  layoutId: 'mRTu09HyL',
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
            /* @__PURE__ */ _jsx4(motion3.div, { className: 'framer-4rqzvx', layoutDependency, layoutId: 'JpxsfG0WH', },),
          ],
        },),
      },),
    },),
  },);
},);
var css4 = [
  '@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }',
  '.framer-alg8l.framer-1qmwzjs, .framer-alg8l .framer-1qmwzjs { display: block; }',
  '.framer-alg8l.framer-1ev0b04 { height: 183px; overflow: hidden; position: relative; width: 807px; }',
  '.framer-alg8l .framer-1s8prrx-container { flex: none; height: 150px; position: absolute; right: 21px; top: calc(50.27322404371587% - 150px / 2); width: 150px; }',
  '.framer-alg8l .framer-pqg8m7-container { flex: none; height: 150px; position: absolute; right: 179px; top: calc(50.27322404371587% - 150px / 2); width: 149px; }',
  '.framer-alg8l .framer-16e9q7d { flex: none; height: 150px; left: 6px; overflow: visible; position: absolute; top: calc(50.27322404371587% - 150px / 2); width: 150px; }',
  '.framer-alg8l .framer-6tesu7-container, .framer-alg8l .framer-xvbzfj-container { bottom: 0px; flex: none; left: 0px; position: absolute; right: 0px; top: 0px; }',
  '.framer-alg8l .framer-1oen9ib-container { flex: none; height: 150px; left: 164px; position: absolute; top: calc(50.27322404371587% - 150px / 2); width: 149px; }',
  '.framer-alg8l .framer-hpno8m { flex: none; height: 150px; left: calc(49.07063197026025% - 150px / 2); overflow: visible; position: absolute; top: calc(50.27322404371587% - 150px / 2); width: 150px; }',
  '.framer-alg8l .framer-sh1po6-container { flex: none; height: auto; left: 208px; position: absolute; top: 50%; width: 79px; }',
  '.framer-alg8l .framer-1bxr64m { flex: none; height: 15px; left: 211px; overflow: visible; position: absolute; top: calc(49.72677595628417% - 15px / 2); width: 64px; }',
  '.framer-alg8l .framer-fkwbrh-container { flex: none; height: auto; position: absolute; right: 204px; top: 50%; width: 79px; }',
  '.framer-alg8l .framer-12pd6cm { flex: none; height: 15px; overflow: visible; position: absolute; right: 215px; top: calc(49.72677595628417% - 15px / 2); width: 64px; }',
  '.framer-alg8l .framer-1f7d66x-container { flex: none; height: auto; position: absolute; right: 46px; top: 50%; width: 79px; }',
  '.framer-alg8l .framer-4rqzvx { flex: none; height: 15px; overflow: visible; position: absolute; right: 57px; top: calc(49.72677595628417% - 15px / 2); width: 64px; }',
];
var FrameruRlqfPp64 = withCSS3(Component3, css4, 'framer-alg8l',);
var stdin_default3 = FrameruRlqfPp64;
FrameruRlqfPp64.displayName = 'scroll-MAIN-lastchatted';
FrameruRlqfPp64.defaultProps = { height: 183, width: 807, };
addFonts3(FrameruRlqfPp64, [
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
  ...ConicFonts2,
  ...ClockFonts2,
], { supportsExplicitInterCodegen: true, },);

// https :https://framerusercontent.com/modules/cXTaKi4vytBfDn1r1821/2Y8PnW9SjYME6r5emfxg/fLExZKtD2.js
var ScrollMAINNearbyFonts = getFonts4(stdin_default2,);
var ScrollMAINLastchattedFonts = getFonts4(stdin_default3,);
var GlobeFonts = getFonts4(Globe,);
var cycleOrder4 = ['DnYO1gjcV',];
var serializationHash4 = 'framer-YgkO3';
var variantClassNames4 = { DnYO1gjcV: 'framer-v-1i19mzh', };
var transition14 = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: 'spring', };
var Transition4 = ({ value, children, },) => {
  const config = React4.useContext(MotionConfigContext4,);
  const transition = value !== null && value !== void 0 ? value : config.transition;
  const contextValue = React4.useMemo(() => ({ ...config, transition, }), [JSON.stringify(transition,),],);
  return /* @__PURE__ */ _jsx5(MotionConfigContext4.Provider, { value: contextValue, children, },);
};
var Variants4 = motion4(React4.Fragment,);
var getProps4 = ({ height, id, width, ...props },) => {
  return { ...props, };
};
var createLayoutDependency4 = (props, variants,) => variants.join('-',) + props.layoutDependency;
var Component4 = /* @__PURE__ */ React4.forwardRef(function (props, ref,) {
  const { activeLocale, setLocale, } = useLocaleInfo4();
  const { style, className: className2, layoutId, variant, ...restProps } = getProps4(props,);
  const { baseVariant, classNames, gestureVariant, setGestureState, setVariant, variants, } = useVariantState4({
    cycleOrder: cycleOrder4,
    defaultVariant: 'DnYO1gjcV',
    variant,
    variantClassNames: variantClassNames4,
  },);
  const layoutDependency = createLayoutDependency4(props, variants,);
  const ref1 = React4.useRef(null,);
  const defaultLayoutId = React4.useId();
  const sharedStyleClassNames = [className,];
  const componentViewport = useComponentViewport4();
  return /* @__PURE__ */ _jsx5(LayoutGroup4, {
    id: layoutId !== null && layoutId !== void 0 ? layoutId : defaultLayoutId,
    children: /* @__PURE__ */ _jsx5(Variants4, {
      animate: variants,
      initial: false,
      children: /* @__PURE__ */ _jsx5(Transition4, {
        value: transition14,
        children: /* @__PURE__ */ _jsxs4(motion4.div, {
          ...restProps,
          className: cx4(serializationHash4, ...sharedStyleClassNames, 'framer-1i19mzh', className2, classNames,),
          'data-framer-name': 'Variant 1',
          layoutDependency,
          layoutId: 'DnYO1gjcV',
          onHoverEnd: () => setGestureState({ isHovered: false, },),
          onHoverStart: () => setGestureState({ isHovered: true, },),
          onTap: () => setGestureState({ isPressed: false, },),
          onTapCancel: () => setGestureState({ isPressed: false, },),
          onTapStart: () => setGestureState({ isPressed: true, },),
          ref: ref !== null && ref !== void 0 ? ref : ref1,
          style: { backgroundColor: 'rgb(255, 255, 255)', ...style, },
          children: [
            /* @__PURE__ */ _jsx5(ComponentViewportProvider4, {
              children: /* @__PURE__ */ _jsx5(Scroll, {
                __fromCanvasComponent: true,
                __fromCodeComponentNode: true,
                _border: {},
                background: null,
                className: 'framer-11ugzxo',
                contentOffsetX: 0,
                contentOffsetY: 0,
                direction: 'horizontal',
                directionLock: true,
                dragEnabled: true,
                layoutDependency,
                layoutId: 'lK6sml63M',
                native: true,
                overdragEnabled: false,
                resetOffset: false,
                scrollBarVisible: false,
                wheelEnabled: true,
                children: /* @__PURE__ */ _jsx5(ComponentViewportProvider4, {
                  width: '807px',
                  children: /* @__PURE__ */ _jsx5(motion4.div, {
                    className: 'framer-1w6lvat-container',
                    layoutDependency,
                    layoutId: 'tZhdvakdA-container',
                    children: /* @__PURE__ */ _jsx5(stdin_default2, {
                      height: '100%',
                      id: 'tZhdvakdA',
                      layoutId: 'tZhdvakdA',
                      style: { height: '100%', width: '100%', },
                      width: '100%',
                    },),
                  },),
                },),
              },),
            },),
            /* @__PURE__ */ _jsx5(RichText, {
              __fromCanvasComponent: true,
              children: /* @__PURE__ */ _jsx5(React4.Fragment, {
                children: /* @__PURE__ */ _jsx5(motion4.h1, {
                  className: 'framer-styles-preset-ame1jg',
                  'data-styles-preset': 'e81t2mHNr',
                  children: 'Nearby',
                },),
              },),
              className: 'framer-1vil56d',
              fonts: ['Inter',],
              layoutDependency,
              layoutId: 'C4dkcCQ3m',
              style: { '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', },
              verticalAlignment: 'top',
              withExternalLayout: true,
            },),
            /* @__PURE__ */ _jsx5(ComponentViewportProvider4, {
              children: /* @__PURE__ */ _jsx5(Scroll, {
                __fromCanvasComponent: true,
                __fromCodeComponentNode: true,
                _border: {},
                background: null,
                className: 'framer-1to0gb7',
                contentOffsetX: 0,
                contentOffsetY: 0,
                direction: 'horizontal',
                directionLock: true,
                dragEnabled: true,
                layoutDependency,
                layoutId: 'vh5crfdgs',
                native: true,
                overdragEnabled: false,
                resetOffset: false,
                scrollBarVisible: false,
                wheelEnabled: true,
                children: /* @__PURE__ */ _jsx5(ComponentViewportProvider4, {
                  width: '807px',
                  children: /* @__PURE__ */ _jsx5(motion4.div, {
                    className: 'framer-3ms3gg-container',
                    layoutDependency,
                    layoutId: 'pNUVbfrva-container',
                    children: /* @__PURE__ */ _jsx5(stdin_default3, {
                      height: '100%',
                      id: 'pNUVbfrva',
                      layoutId: 'pNUVbfrva',
                      style: { height: '100%', width: '100%', },
                      width: '100%',
                    },),
                  },),
                },),
              },),
            },),
            /* @__PURE__ */ _jsx5(RichText, {
              __fromCanvasComponent: true,
              children: /* @__PURE__ */ _jsx5(React4.Fragment, {
                children: /* @__PURE__ */ _jsx5(motion4.h1, {
                  className: 'framer-styles-preset-ame1jg',
                  'data-styles-preset': 'e81t2mHNr',
                  children: 'Last Chatted',
                },),
              },),
              className: 'framer-ulqa5k',
              fonts: ['Inter',],
              layoutDependency,
              layoutId: 'p8SZYVxWs',
              style: { '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', },
              verticalAlignment: 'top',
              withExternalLayout: true,
            },),
            /* @__PURE__ */ _jsx5(ComponentViewportProvider4, {
              children: /* @__PURE__ */ _jsx5(motion4.div, {
                className: 'framer-1fnj2fq-container',
                layoutDependency,
                layoutId: 'prsiV4FOm-container',
                children: /* @__PURE__ */ _jsx5(Globe, {
                  alignment: 'center',
                  background: 'rgba(0, 0, 0, 0)',
                  baseColor: 'rgb(255, 255, 255)',
                  dark: 1,
                  diffuse: 1.86,
                  dragOptions: { damping: 40, mass: 1, stiffness: 200, },
                  glowColor: 'rgb(255, 255, 255)',
                  height: '100%',
                  id: 'prsiV4FOm',
                  isDraggable: true,
                  layoutId: 'prsiV4FOm',
                  mapBrightness: 12,
                  markerArray: [
                    { latitude: 52.3676, longitude: 4.9041, },
                    { latitude: 33.1821, longitude: 4.9041, },
                    { latitude: 52.3676, longitude: -15.2524, },
                    { latitude: 52.3676, longitude: 56.7909, },
                    { latitude: 42.1605, longitude: 28.0168, },
                    { latitude: -55.006, longitude: -9.8437, },
                    { latitude: 65.5529, longitude: -58.6298, },
                    { latitude: 40.1052, longitude: -39.5913, },
                    { latitude: 75.5859, longitude: 86.4303, },
                    { latitude: -50.1923, longitude: -29.4772, },
                    { latitude: -23.9062, longitude: -27.0974, },
                    { latitude: 65.4988, longitude: -159.0144, },
                    { latitude: 9.0595, longitude: 130.619, },
                    { latitude: 52.3676, longitude: 180, },
                    { latitude: 16.6046, longitude: 163.5577, },
                    { latitude: -79.372, longitude: -34.1827, },
                    { latitude: 31.3431, longitude: 122.7224, },
                  ],
                  markerColor: 'rgb(255, 121, 173)',
                  markerSize: 0.05,
                  maxSamples: 9135,
                  maxWidth: 800,
                  offset: { offsetX: -69, offsetY: -44, },
                  phi: 0,
                  scale: 1.05,
                  speed: 0.3,
                  style: { height: '100%', width: '100%', },
                  theta: 0.3,
                  width: '100%',
                },),
              },),
            },),
            /* @__PURE__ */ _jsx5(RichText, {
              __fromCanvasComponent: true,
              children: /* @__PURE__ */ _jsx5(React4.Fragment, {
                children: /* @__PURE__ */ _jsx5(motion4.h1, {
                  className: 'framer-styles-preset-ame1jg',
                  'data-styles-preset': 'e81t2mHNr',
                  children: 'Discover',
                },),
              },),
              className: 'framer-1fizh3a',
              fonts: ['Inter',],
              layoutDependency,
              layoutId: 'VbRWv6QUF',
              style: { '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', },
              verticalAlignment: 'top',
              withExternalLayout: true,
            },),
            /* @__PURE__ */ _jsx5(RichText, {
              __fromCanvasComponent: true,
              children: /* @__PURE__ */ _jsx5(React4.Fragment, {
                children: /* @__PURE__ */ _jsx5(motion4.h1, {
                  style: {
                    '--font-selector': 'R0Y7RE0gU2Fucy0zMDA=',
                    '--framer-font-family': '"DM Sans", "DM Sans Placeholder", sans-serif',
                    '--framer-font-size': '18px',
                    '--framer-font-weight': '300',
                    '--framer-text-alignment': 'left',
                    '--framer-text-color': 'var(--extracted-gdpscs, rgb(166, 166, 166))',
                  },
                  children: '18 people are sh*tting within 5 miles.',
                },),
              },),
              className: 'framer-w53fju',
              fonts: ['GF;DM Sans-300',],
              layoutDependency,
              layoutId: 'TFKLu0X1a',
              style: {
                '--extracted-gdpscs': 'rgb(166, 166, 166)',
                '--framer-link-text-color': 'rgb(0, 153, 255)',
                '--framer-link-text-decoration': 'underline',
              },
              verticalAlignment: 'top',
              withExternalLayout: true,
            },),
            /* @__PURE__ */ _jsx5(RichText, {
              __fromCanvasComponent: true,
              children: /* @__PURE__ */ _jsx5(React4.Fragment, {
                children: /* @__PURE__ */ _jsx5(motion4.h1, {
                  style: {
                    '--font-selector': 'R0Y7RE0gU2Fucy0zMDA=',
                    '--framer-font-family': '"DM Sans", "DM Sans Placeholder", sans-serif',
                    '--framer-font-size': '18px',
                    '--framer-font-weight': '300',
                    '--framer-text-alignment': 'center',
                    '--framer-text-color': 'var(--extracted-gdpscs, rgb(166, 166, 166))',
                  },
                  children: '3 out of 5 people chatted have similar routine.',
                },),
              },),
              className: 'framer-1qcxt9y',
              fonts: ['GF;DM Sans-300',],
              layoutDependency,
              layoutId: 'sFPw1n0lo',
              style: {
                '--extracted-gdpscs': 'rgb(166, 166, 166)',
                '--framer-link-text-color': 'rgb(0, 153, 255)',
                '--framer-link-text-decoration': 'underline',
              },
              verticalAlignment: 'top',
              withExternalLayout: true,
            },),
            /* @__PURE__ */ _jsx5(RichText, {
              __fromCanvasComponent: true,
              children: /* @__PURE__ */ _jsx5(React4.Fragment, {
                children: /* @__PURE__ */ _jsx5(motion4.h1, {
                  style: {
                    '--font-selector': 'R0Y7RE0gU2Fucy0zMDA=',
                    '--framer-font-family': '"DM Sans", "DM Sans Placeholder", sans-serif',
                    '--framer-font-size': '18px',
                    '--framer-font-weight': '300',
                    '--framer-text-alignment': 'center',
                    '--framer-text-color': 'var(--extracted-gdpscs, rgb(166, 166, 166))',
                  },
                  children: '2,394,562 people are sh*tting at the same time with you',
                },),
              },),
              className: 'framer-1ovebhh',
              fonts: ['GF;DM Sans-300',],
              layoutDependency,
              layoutId: 'f3LZNFzWd',
              style: {
                '--extracted-gdpscs': 'rgb(166, 166, 166)',
                '--framer-link-text-color': 'rgb(0, 153, 255)',
                '--framer-link-text-decoration': 'underline',
              },
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
  '.framer-YgkO3.framer-1ummqts, .framer-YgkO3 .framer-1ummqts { display: block; }',
  '.framer-YgkO3.framer-1i19mzh { height: 1089px; overflow: hidden; position: relative; width: 386px; }',
  '.framer-YgkO3 .framer-11ugzxo { flex: none; height: 165px; left: calc(48.96373056994821% - 319px / 2); position: absolute; top: calc(13.18027210884356% - 165px / 2); width: 319px; }',
  '.framer-YgkO3 .framer-1w6lvat-container, .framer-YgkO3 .framer-3ms3gg-container { height: 183px; position: relative; width: 807px; }',
  '.framer-YgkO3 .framer-1vil56d { flex: none; height: 18px; left: calc(37.04663212435235% - 209px / 2); position: absolute; top: calc(3.2139577594123274% - 18px / 2); white-space: pre-wrap; width: 209px; word-break: break-word; word-wrap: break-word; }',
  '.framer-YgkO3 .framer-1to0gb7 { flex: none; height: 165px; left: calc(48.96373056994821% - 319px / 2); position: absolute; top: calc(40.86317722681361% - 165px / 2); width: 319px; }',
  '.framer-YgkO3 .framer-ulqa5k { flex: none; height: 18px; left: calc(37.04663212435235% - 209px / 2); position: absolute; top: calc(30.578512396694236% - 18px / 2); white-space: pre-wrap; width: 209px; word-break: break-word; word-wrap: break-word; }',
  '.framer-YgkO3 .framer-1fnj2fq-container { flex: none; height: 324px; left: calc(54.40414507772024% - 345px / 2); position: absolute; top: calc(77.13498622589535% - 324px / 2); width: 345px; }',
  '.framer-YgkO3 .framer-1fizh3a { flex: none; height: 18px; left: calc(37.04663212435235% - 209px / 2); position: absolute; top: calc(58.76951331496788% - 18px / 2); white-space: pre-wrap; width: 209px; word-break: break-word; word-wrap: break-word; }',
  '.framer-YgkO3 .framer-w53fju { flex: none; height: 18px; left: calc(49.74093264248707% - 303px / 2); position: absolute; top: calc(22.865013774104707% - 18px / 2); white-space: pre-wrap; width: 303px; word-break: break-word; word-wrap: break-word; }',
  '.framer-YgkO3 .framer-1qcxt9y { flex: none; height: 42px; left: calc(49.74093264248707% - 303px / 2); position: absolute; top: calc(51.606978879706176% - 42px / 2); white-space: pre-wrap; width: 303px; word-break: break-word; word-wrap: break-word; }',
  '.framer-YgkO3 .framer-1ovebhh { flex: none; height: 42px; left: calc(50.777202072538884% - 303px / 2); position: absolute; top: calc(93.48025711662078% - 42px / 2); white-space: pre-wrap; width: 303px; word-break: break-word; word-wrap: break-word; }',
  ...css,
];
var FramerfLExZKtD2 = withCSS4(Component4, css5, 'framer-YgkO3',);
var stdin_default4 = FramerfLExZKtD2;
FramerfLExZKtD2.displayName = 'scroll-MAIN';
FramerfLExZKtD2.defaultProps = { height: 1089, width: 386, };
addFonts4(FramerfLExZKtD2, [
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
    },],
  },
  ...ScrollMAINNearbyFonts,
  ...ScrollMAINLastchattedFonts,
  ...GlobeFonts,
  ...getFontsFromSharedStyle(fonts,),
], { supportsExplicitInterCodegen: true, },);

// https :https://framerusercontent.com/modules/wFs68VIlZEGIGXaOv4gQ/LLDHltZwv3pIplXdZRls/OVmbzyyRm.js
import { jsx as _jsx6, } from 'react/jsx-runtime';
import {
  addFonts as addFonts5,
  ComponentViewportProvider as ComponentViewportProvider5,
  cx as cx5,
  getFonts as getFonts5,
  useComponentViewport as useComponentViewport5,
  useLocaleInfo as useLocaleInfo5,
  useVariantState as useVariantState5,
  withCSS as withCSS5,
} from 'unframer';
import { LayoutGroup as LayoutGroup5, motion as motion5, MotionConfigContext as MotionConfigContext5, } from 'unframer';
import * as React5 from 'react';
var ClockFonts3 = getFonts5(Clock,);
var cycleOrder5 = ['lNxAXWIIb',];
var serializationHash5 = 'framer-K58Mq';
var variantClassNames5 = { lNxAXWIIb: 'framer-v-7f7s4r', };
var transition15 = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: 'spring', };
var transformTemplate13 = (_, t,) => `translate(-50%, -50%) ${t}`;
var Transition5 = ({ value, children, },) => {
  const config = React5.useContext(MotionConfigContext5,);
  const transition = value !== null && value !== void 0 ? value : config.transition;
  const contextValue = React5.useMemo(() => ({ ...config, transition, }), [JSON.stringify(transition,),],);
  return /* @__PURE__ */ _jsx6(MotionConfigContext5.Provider, { value: contextValue, children, },);
};
var Variants5 = motion5(React5.Fragment,);
var getProps5 = ({ height, id, width, ...props },) => {
  return { ...props, };
};
var createLayoutDependency5 = (props, variants,) => variants.join('-',) + props.layoutDependency;
var Component5 = /* @__PURE__ */ React5.forwardRef(function (props, ref,) {
  const { activeLocale, setLocale, } = useLocaleInfo5();
  const { style, className: className2, layoutId, variant, ...restProps } = getProps5(props,);
  const { baseVariant, classNames, gestureVariant, setGestureState, setVariant, variants, } = useVariantState5({
    cycleOrder: cycleOrder5,
    defaultVariant: 'lNxAXWIIb',
    variant,
    variantClassNames: variantClassNames5,
  },);
  const layoutDependency = createLayoutDependency5(props, variants,);
  const ref1 = React5.useRef(null,);
  const defaultLayoutId = React5.useId();
  const sharedStyleClassNames = [];
  const componentViewport = useComponentViewport5();
  return /* @__PURE__ */ _jsx6(LayoutGroup5, {
    id: layoutId !== null && layoutId !== void 0 ? layoutId : defaultLayoutId,
    children: /* @__PURE__ */ _jsx6(Variants5, {
      animate: variants,
      initial: false,
      children: /* @__PURE__ */ _jsx6(Transition5, {
        value: transition15,
        children: /* @__PURE__ */ _jsx6(motion5.div, {
          ...restProps,
          className: cx5(serializationHash5, ...sharedStyleClassNames, 'framer-7f7s4r', className2, classNames,),
          'data-framer-name': 'Variant 1',
          layoutDependency,
          layoutId: 'lNxAXWIIb',
          onHoverEnd: () => setGestureState({ isHovered: false, },),
          onHoverStart: () => setGestureState({ isHovered: true, },),
          onTap: () => setGestureState({ isPressed: false, },),
          onTapCancel: () => setGestureState({ isPressed: false, },),
          onTapStart: () => setGestureState({ isPressed: true, },),
          ref: ref !== null && ref !== void 0 ? ref : ref1,
          style: { backgroundColor: 'rgb(255, 255, 255)', ...style, },
          children: /* @__PURE__ */ _jsx6(motion5.div, {
            className: 'framer-18omyck',
            layoutDependency,
            layoutId: 'fjS4wPsVo',
            style: {
              backgroundColor: 'rgb(12, 12, 12)',
              borderBottomLeftRadius: 20,
              borderBottomRightRadius: 20,
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
            },
            children: /* @__PURE__ */ _jsx6(ComponentViewportProvider5, {
              children: /* @__PURE__ */ _jsx6(motion5.div, {
                className: 'framer-8x9ulz-container',
                layoutDependency,
                layoutId: 'IJZVUgxEv-container',
                transformTemplate: transformTemplate13,
                children: /* @__PURE__ */ _jsx6(Clock, {
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
                  id: 'IJZVUgxEv',
                  is12hour: true,
                  layoutId: 'IJZVUgxEv',
                  prefix: '',
                  seconds: true,
                  suffix: '',
                  textSelect: true,
                  timeZone: false,
                  width: '100%',
                },),
              },),
            },),
          },),
        },),
      },),
    },),
  },);
},);
var css6 = [
  '@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }',
  '.framer-K58Mq.framer-r6vhcd, .framer-K58Mq .framer-r6vhcd { display: block; }',
  '.framer-K58Mq.framer-7f7s4r { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; height: 59px; justify-content: space-evenly; overflow: hidden; padding: 0px; position: relative; width: 390px; }',
  '.framer-K58Mq .framer-18omyck { flex: none; height: 36px; overflow: visible; position: relative; width: 120px; }',
  '.framer-K58Mq .framer-8x9ulz-container { flex: none; height: auto; left: 50%; position: absolute; top: 50%; width: auto; }',
];
var FramerOVmbzyyRm = withCSS5(Component5, css6, 'framer-K58Mq',);
var stdin_default5 = FramerOVmbzyyRm;
FramerOVmbzyyRm.displayName = 'topBar';
FramerOVmbzyyRm.defaultProps = { height: 59, width: 390, };
addFonts5(FramerOVmbzyyRm, [{
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
}, ...ClockFonts3,], { supportsExplicitInterCodegen: true, },);

// https :https://framerusercontent.com/modules/HXymEkHPIaZc2RDzewa7/bJTVAFPZDwsWax2wk6D7/Ibtk5tWbC.js
var ScrollMAINFonts = getFonts6(stdin_default4,);
var NavbarFonts = getFonts6(stdin_default,);
var TopBarFonts = getFonts6(stdin_default5,);
var cycleOrder6 = ['rI_uBlpkT',];
var serializationHash6 = 'framer-UC11C';
var variantClassNames6 = { rI_uBlpkT: 'framer-v-d255u8', };
var transition16 = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: 'spring', };
var Transition6 = ({ value, children, },) => {
  const config = React6.useContext(MotionConfigContext6,);
  const transition = value !== null && value !== void 0 ? value : config.transition;
  const contextValue = React6.useMemo(() => ({ ...config, transition, }), [JSON.stringify(transition,),],);
  return /* @__PURE__ */ _jsx7(MotionConfigContext6.Provider, { value: contextValue, children, },);
};
var Variants6 = motion6(React6.Fragment,);
var getProps6 = ({ height, id, tap, tap2, tap3, width, ...props },) => {
  return {
    ...props,
    Glgbacyr9: tap !== null && tap !== void 0 ? tap : props.Glgbacyr9,
    JgwibSzAf: tap3 !== null && tap3 !== void 0 ? tap3 : props.JgwibSzAf,
    PLI1T7Ax1: tap2 !== null && tap2 !== void 0 ? tap2 : props.PLI1T7Ax1,
  };
};
var createLayoutDependency6 = (props, variants,) => variants.join('-',) + props.layoutDependency;
var Component6 = /* @__PURE__ */ React6.forwardRef(function (props, ref,) {
  const { activeLocale, setLocale, } = useLocaleInfo6();
  const { style, className: className2, layoutId, variant, Glgbacyr9, PLI1T7Ax1, JgwibSzAf, ...restProps } = getProps6(props,);
  const { baseVariant, classNames, gestureVariant, setGestureState, setVariant, variants, } = useVariantState6({
    cycleOrder: cycleOrder6,
    defaultVariant: 'rI_uBlpkT',
    variant,
    variantClassNames: variantClassNames6,
  },);
  const layoutDependency = createLayoutDependency6(props, variants,);
  const { activeVariantCallback, delay, } = useActiveVariantCallback3(baseVariant,);
  const UbCBf8rh61da68a4 = activeVariantCallback(async (...args) => {
    if (Glgbacyr9) {
      const res = await Glgbacyr9(...args,);
      if (res === false) {
        return false;
      }
    }
  },);
  const l4EmAYs9B1qwzdkb = activeVariantCallback(async (...args) => {
    if (PLI1T7Ax1) {
      const res = await PLI1T7Ax1(...args,);
      if (res === false) {
        return false;
      }
    }
  },);
  const o2wfaBicHjs7ziu = activeVariantCallback(async (...args) => {
    if (JgwibSzAf) {
      const res = await JgwibSzAf(...args,);
      if (res === false) {
        return false;
      }
    }
  },);
  const ref1 = React6.useRef(null,);
  const defaultLayoutId = React6.useId();
  const sharedStyleClassNames = [];
  const componentViewport = useComponentViewport6();
  return /* @__PURE__ */ _jsx7(LayoutGroup6, {
    id: layoutId !== null && layoutId !== void 0 ? layoutId : defaultLayoutId,
    children: /* @__PURE__ */ _jsx7(Variants6, {
      animate: variants,
      initial: false,
      children: /* @__PURE__ */ _jsx7(Transition6, {
        value: transition16,
        children: /* @__PURE__ */ _jsxs5(motion6.div, {
          ...restProps,
          className: cx6(serializationHash6, ...sharedStyleClassNames, 'framer-d255u8', className2, classNames,),
          'data-framer-name': 'Variant 1',
          layoutDependency,
          layoutId: 'rI_uBlpkT',
          onHoverEnd: () => setGestureState({ isHovered: false, },),
          onHoverStart: () => setGestureState({ isHovered: true, },),
          onTap: () => setGestureState({ isPressed: false, },),
          onTapCancel: () => setGestureState({ isPressed: false, },),
          onTapStart: () => setGestureState({ isPressed: true, },),
          ref: ref !== null && ref !== void 0 ? ref : ref1,
          style: { backgroundColor: 'rgb(255, 255, 255)', ...style, },
          children: [
            /* @__PURE__ */ _jsx7(ComponentViewportProvider6, {
              children: /* @__PURE__ */ _jsx7(Scroll2, {
                __fromCanvasComponent: true,
                __fromCodeComponentNode: true,
                _border: {},
                background: null,
                className: 'framer-arok4m',
                contentOffsetX: 0,
                contentOffsetY: 0,
                direction: 'vertical',
                directionLock: true,
                dragEnabled: true,
                layoutDependency,
                layoutId: 'Lv80djk05',
                native: true,
                overdragEnabled: false,
                resetOffset: false,
                scrollBarVisible: false,
                wheelEnabled: true,
                children: /* @__PURE__ */ _jsx7(ComponentViewportProvider6, {
                  width: '386px',
                  children: /* @__PURE__ */ _jsx7(motion6.div, {
                    className: 'framer-1b9i5es-container',
                    layoutDependency,
                    layoutId: 'R2drSe8jH-container',
                    children: /* @__PURE__ */ _jsx7(stdin_default4, {
                      height: '100%',
                      id: 'R2drSe8jH',
                      layoutId: 'R2drSe8jH',
                      style: { height: '100%', width: '100%', },
                      width: '100%',
                    },),
                  },),
                },),
              },),
            },),
            /* @__PURE__ */ _jsx7(ComponentViewportProvider6, {
              width: (componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.width) || '100vw',
              children: /* @__PURE__ */ _jsx7(motion6.div, {
                className: 'framer-10jw8u3-container',
                'data-framer-name': 'navBar',
                layoutDependency,
                layoutId: 'duRxWsKLU-container',
                name: 'navBar',
                children: /* @__PURE__ */ _jsx7(stdin_default, {
                  height: '100%',
                  id: 'duRxWsKLU',
                  l4EmAYs9B: l4EmAYs9B1qwzdkb,
                  layoutId: 'duRxWsKLU',
                  name: 'navBar',
                  o2wfaBicH: o2wfaBicHjs7ziu,
                  style: { height: '100%', width: '100%', },
                  UbCBf8rh6: UbCBf8rh61da68a4,
                  width: '100%',
                },),
              },),
            },),
            /* @__PURE__ */ _jsx7(ComponentViewportProvider6, {
              width: (componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.width) || '100vw',
              children: /* @__PURE__ */ _jsx7(motion6.div, {
                className: 'framer-g4nkvh-container',
                layoutDependency,
                layoutId: 'G04IrugVF-container',
                children: /* @__PURE__ */ _jsx7(stdin_default5, {
                  height: '100%',
                  id: 'G04IrugVF',
                  layoutId: 'G04IrugVF',
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
var css7 = [
  '@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }',
  '.framer-UC11C.framer-139xkcl, .framer-UC11C .framer-139xkcl { display: block; }',
  '.framer-UC11C.framer-d255u8 { height: 844px; overflow: hidden; position: relative; width: 390px; }',
  '.framer-UC11C .framer-arok4m { flex: none; height: 704px; left: 0px; position: absolute; right: 0px; top: calc(48.696682464455% - 704px / 2); }',
  '.framer-UC11C .framer-1b9i5es-container { height: 1089px; position: relative; width: 386px; }',
  '.framer-UC11C .framer-10jw8u3-container { bottom: 0px; flex: none; height: 81px; left: 0px; position: absolute; right: 0px; }',
  '.framer-UC11C .framer-g4nkvh-container { flex: none; height: 59px; left: 0px; position: absolute; right: 0px; top: 0px; z-index: 1; }',
];
var FramerIbtk5tWbC = withCSS6(Component6, css7, 'framer-UC11C',);
var stdin_default6 = FramerIbtk5tWbC;
FramerIbtk5tWbC.displayName = 'V2 - main';
FramerIbtk5tWbC.defaultProps = { height: 844, width: 390, };
addPropertyControls4(FramerIbtk5tWbC, {
  Glgbacyr9: { title: 'Tap', type: ControlType4.EventHandler, },
  PLI1T7Ax1: { title: 'Tap 2', type: ControlType4.EventHandler, },
  JgwibSzAf: { title: 'Tap 3', type: ControlType4.EventHandler, },
},);
addFonts6(FramerIbtk5tWbC, [{ explicitInter: true, fonts: [], }, ...ScrollMAINFonts, ...NavbarFonts, ...TopBarFonts,], {
  supportsExplicitInterCodegen: true,
},);

// virtual:main
import { WithFramerBreakpoints, } from 'unframer';
import { jsx, } from 'react/jsx-runtime';
stdin_default6.Responsive = (props,) => {
  return /* @__PURE__ */ jsx(WithFramerBreakpoints, { Component: stdin_default6, ...props, },);
};
var main_default = stdin_default6;
export { main_default as default, };
