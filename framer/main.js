/* eslint-disable */
'use client';
import { Conic, } from './chunk-VOFWIACZ.js';
import './chunk-JJFCSOIW.js';
import { Clock, } from './chunk-YQS4D325.js';
import { className, css, fonts, } from './chunk-DCG3Q45P.js';
import { Icon, } from './chunk-NTBY4HVU.js';
import './chunk-ZBBVTMRC.js';

// https :https://framerusercontent.com/modules/cOBZ24ERfie5L39kiB0e/sdaQyX2ERzlhLc9qV1EB/a4fbduHHq.js
import { jsx as _jsx2, jsxs as _jsxs, } from 'react/jsx-runtime';
import {
  addFonts,
  addPropertyControls as addPropertyControls2,
  ComponentViewportProvider,
  ControlType as ControlType2,
  cx,
  getFonts,
  getFontsFromSharedStyle,
  Image as Image2,
  RichText,
  Scroll,
  useActiveVariantCallback,
  useComponentViewport,
  useLocaleInfo,
  useVariantState,
  withCSS,
} from 'unframer';
import { LayoutGroup, motion, MotionConfigContext, } from 'unframer';
import * as React from 'react';

// https :https://framerusercontent.com/modules/xFhv3ETdRBLjJusGaZ1P/d9ZONLqTB9uCj5kbWKll/Globe.js
import { jsx as _jsx, } from 'react/jsx-runtime';
import { addPropertyControls, Color, ControlType, RenderTarget, } from 'unframer';
import { useEffect, useRef, } from 'react';

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
  const canvasRef = useRef();
  const pointerInteracting = useRef(null,);
  const pointerInteractionMovement = useRef(0,);
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
  return /* @__PURE__ */ _jsx('div', {
    style: { ...flexStyles, placeItems: alignment, background, },
    children: /* @__PURE__ */ _jsx('div', {
      style: { width: '100%', aspectRatio: '1/1', maxWidth, WebkitMaskImage: fadeMask, MozMaskImage: fadeMask, maskImage: fadeMask, },
      children: /* @__PURE__ */ _jsx('canvas', {
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
addPropertyControls(Globe, {
  background: { type: ControlType.Color, title: 'Backdrop', defaultValue: dp.background, },
  baseColor: { type: ControlType.Color, title: 'Base', defaultValue: dp.baseColor, },
  glowColor: { type: ControlType.Color, title: 'Glow', defaultValue: dp.glowColor, },
  markerColor: { type: ControlType.Color, title: 'Marker', defaultValue: dp.markerColor, },
  isDraggable: { type: ControlType.Boolean, title: 'Draggable', defaultValue: dp.isDraggable, },
  dragOptions: {
    type: ControlType.Object,
    title: 'Transition',
    controls: {
      stiffness: { type: ControlType.Number, min: 0, max: 1e3, title: 'Stiffness', defaultValue: dpDrag.stiffness, },
      damping: { type: ControlType.Number, min: 0, max: 100, title: 'Damping', defaultValue: dpDrag.damping, },
      mass: { type: ControlType.Number, min: 0, title: 'Mass', displayStepper: true, defaultValue: dpDrag.mass, },
    },
    hidden(props,) {
      return !props.isDraggable;
    },
  },
  speed: { type: ControlType.Number, min: 0, step: 0.1, displayStepper: true, title: 'Speed', defaultValue: dp.speed, },
  phi: { type: ControlType.Number, min: 0, max: 6.28, step: 0.01, displayStepper: true, title: 'Phi', defaultValue: dp.phi, },
  theta: { type: ControlType.Number, min: -1.57, max: 1.57, step: 0.01, title: 'Theta', defaultValue: dp.theta, },
  dark: { type: ControlType.Number, min: 0, max: 1, step: 0.1, displayStepper: true, title: 'Dark', defaultValue: dp.dark, },
  diffuse: { type: ControlType.Number, min: 0, max: 5, step: 0.01, title: 'Diffuse', defaultValue: dp.diffuse, },
  mapBrightness: { type: ControlType.Number, min: 0, max: 12, step: 0.01, title: 'Brightness', defaultValue: dp.mapBrightness, },
  maxSamples: { type: ControlType.Number, min: 0, max: 1e5, title: 'Samples', defaultValue: dp.maxSamples, },
  scale: { type: ControlType.Number, min: 0, max: 5, step: 0.025, displayStepper: true, title: 'Scale', defaultValue: dp.scale, },
  alignment: {
    type: ControlType.Enum,
    title: 'Align',
    options: ['flex-start', 'center', 'flex-end',],
    optionIcons: ['align-top', 'align-middle', 'align-bottom',],
    defaultValue: dp.alignment,
    displaySegmentedControl: true,
  },
  maxWidth: { type: ControlType.Number, title: 'Max Width', min: 100, max: 5e3, defaultValue: dp.maxWidth, },
  offset: {
    type: ControlType.Object,
    title: 'Offset',
    controls: {
      offsetX: { type: ControlType.Number, min: -5e3, max: 5e3, title: 'X', defaultValue: dpOffset.offsetX, },
      offsetY: { type: ControlType.Number, min: -5e3, max: 5e3, title: 'Y', defaultValue: dpOffset.offsetY, },
    },
  },
  markerSize: { type: ControlType.Number, min: 0, max: 1, step: 0.01, title: 'Markers', defaultValue: dp.markerSize, },
  markerArray: {
    type: ControlType.Array,
    title: 'Location',
    // defaultValue: [{ latitude: 52.3676, longitude: 4.9041 }],
    control: {
      type: ControlType.Object,
      title: 'Location',
      controls: {
        latitude: { type: ControlType.Number, min: -90, max: 90, title: 'Lat', step: 1e-4, defaultValue: dp.markerArray.latitude, },
        longitude: { type: ControlType.Number, min: -180, max: 180, title: 'Long', step: 1e-4, defaultValue: dp.markerArray.longitude, },
      },
    },
  },
},);
var flexStyles = { width: '100%', height: '100%', display: 'flex', placeItems: 'center', placeContent: 'center', overflow: 'visible', };
var convertRGB = (color,) => {
  return { r: Color(color,).r / 255, g: Color(color,).g / 255, b: Color(color,).b / 255, };
};

// https :https://framerusercontent.com/modules/cOBZ24ERfie5L39kiB0e/sdaQyX2ERzlhLc9qV1EB/a4fbduHHq.js
var ClockFonts = getFonts(Clock,);
var IconoirFonts = getFonts(Icon,);
var ConicFonts = getFonts(Conic,);
var GlobeFonts = getFonts(Globe,);
var cycleOrder = ['HmGvKmFVu',];
var serializationHash = 'framer-FfuU5';
var variantClassNames = { HmGvKmFVu: 'framer-v-cu5isx', };
var transition1 = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: 'spring', };
var transformTemplate1 = (_, t,) => `translateX(-50%) ${t}`;
var transformTemplate2 = (_, t,) => `translateY(-50%) ${t}`;
var transformTemplate3 = (_, t,) => `translate(-50%, -50%) ${t}`;
var Transition = ({ value, children, },) => {
  const config = React.useContext(MotionConfigContext,);
  const transition = value !== null && value !== void 0 ? value : config.transition;
  const contextValue = React.useMemo(() => ({ ...config, transition, }), [JSON.stringify(transition,),],);
  return /* @__PURE__ */ _jsx2(MotionConfigContext.Provider, { value: contextValue, children, },);
};
var Variants = motion(React.Fragment,);
var getProps = ({ height, id, tap, tap2, tap3, tap4, width, ...props },) => {
  return {
    ...props,
    Fx4ipBJTf: tap2 !== null && tap2 !== void 0 ? tap2 : props.Fx4ipBJTf,
    h6UG5esH9: tap4 !== null && tap4 !== void 0 ? tap4 : props.h6UG5esH9,
    Nm_Wn7C7e: tap !== null && tap !== void 0 ? tap : props.Nm_Wn7C7e,
    vWkvp9dsR: tap3 !== null && tap3 !== void 0 ? tap3 : props.vWkvp9dsR,
  };
};
var createLayoutDependency = (props, variants,) => variants.join('-',) + props.layoutDependency;
var Component = /* @__PURE__ */ React.forwardRef(function (props, ref,) {
  const { activeLocale, setLocale, } = useLocaleInfo();
  const { style, className: className2, layoutId, variant, Nm_Wn7C7e, Fx4ipBJTf, vWkvp9dsR, h6UG5esH9, ...restProps } = getProps(props,);
  const { baseVariant, classNames, gestureVariant, setGestureState, setVariant, variants, } = useVariantState({
    cycleOrder,
    defaultVariant: 'HmGvKmFVu',
    variant,
    variantClassNames,
  },);
  const layoutDependency = createLayoutDependency(props, variants,);
  const { activeVariantCallback, delay, } = useActiveVariantCallback(baseVariant,);
  const onTapcli6fb = activeVariantCallback(async (...args) => {
    if (Nm_Wn7C7e) {
      const res = await Nm_Wn7C7e(...args,);
      if (res === false) {
        return false;
      }
    }
  },);
  const onClick10201fo = activeVariantCallback(async (...args) => {
    if (Fx4ipBJTf) {
      const res = await Fx4ipBJTf(...args,);
      if (res === false) {
        return false;
      }
    }
  },);
  const onClickdfmpom = activeVariantCallback(async (...args) => {
    if (vWkvp9dsR) {
      const res = await vWkvp9dsR(...args,);
      if (res === false) {
        return false;
      }
    }
  },);
  const onClick1dhtbjt = activeVariantCallback(async (...args) => {
    if (h6UG5esH9) {
      const res = await h6UG5esH9(...args,);
      if (res === false) {
        return false;
      }
    }
  },);
  const ref1 = React.useRef(null,);
  const defaultLayoutId = React.useId();
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
          className: cx(serializationHash, ...sharedStyleClassNames, 'framer-cu5isx', className2, classNames,),
          'data-framer-name': 'Variant 1',
          layoutDependency,
          layoutId: 'HmGvKmFVu',
          onHoverEnd: () => setGestureState({ isHovered: false, },),
          onHoverStart: () => setGestureState({ isHovered: true, },),
          onTap: () => setGestureState({ isPressed: false, },),
          onTapCancel: () => setGestureState({ isPressed: false, },),
          onTapStart: () => setGestureState({ isPressed: true, },),
          ref: ref !== null && ref !== void 0 ? ref : ref1,
          style: { backgroundColor: 'rgb(255, 255, 255)', ...style, },
          children: [
            /* @__PURE__ */ _jsx2(motion.div, {
              className: 'framer-h3p0s1',
              layoutDependency,
              layoutId: 'EeZ9O38Uw',
              style: { backgroundColor: 'rgb(255, 121, 173)', },
            },),
            /* @__PURE__ */ _jsxs(Image2, {
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
              className: 'framer-emedg8',
              'data-framer-name': 'iphone14pro',
              layoutDependency,
              layoutId: 'MdN5ccUmG',
              children: [
                /* @__PURE__ */ _jsx2(ComponentViewportProvider, {
                  children: /* @__PURE__ */ _jsx2(motion.div, {
                    className: 'framer-1nytdig-container',
                    layoutDependency,
                    layoutId: 'qKQacUBTL-container',
                    transformTemplate: transformTemplate1,
                    children: /* @__PURE__ */ _jsx2(Clock, {
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
                      id: 'qKQacUBTL',
                      is12hour: true,
                      layoutId: 'qKQacUBTL',
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
                /* @__PURE__ */ _jsx2(motion.div, {
                  className: 'framer-1xwtt6l',
                  'data-highlight': true,
                  layoutDependency,
                  layoutId: 'FZ1CbHCuu',
                  onTap: onTapcli6fb,
                },),
              ],
            },),
            /* @__PURE__ */ _jsx2(ComponentViewportProvider, {
              children: /* @__PURE__ */ _jsx2(motion.div, {
                className: 'framer-agc84h-container',
                'data-framer-name': 'icon-settings',
                layoutDependency,
                layoutId: 'xxx4qs419-container',
                name: 'icon-settings',
                children: /* @__PURE__ */ _jsx2(Icon, {
                  color: 'rgb(255, 255, 255)',
                  height: '100%',
                  iconSearch: 'settings',
                  iconSelection: 'KeyframesCouple',
                  id: 'xxx4qs419',
                  layoutId: 'xxx4qs419',
                  mirrored: false,
                  name: 'icon-settings',
                  onClick: onClick10201fo,
                  selectByList: false,
                  style: { height: '100%', width: '100%', },
                  width: '100%',
                },),
              },),
            },),
            /* @__PURE__ */ _jsx2(ComponentViewportProvider, {
              children: /* @__PURE__ */ _jsx2(motion.div, {
                className: 'framer-1399mgx-container',
                'data-framer-name': 'icon-health',
                layoutDependency,
                layoutId: 'mNy66AvsB-container',
                name: 'icon-health',
                children: /* @__PURE__ */ _jsx2(Icon, {
                  color: 'rgb(255, 255, 255)',
                  height: '100%',
                  iconSearch: 'kayframe',
                  iconSelection: 'KeyframesCouple',
                  id: 'mNy66AvsB',
                  layoutId: 'mNy66AvsB',
                  mirrored: false,
                  name: 'icon-health',
                  onClick: onClickdfmpom,
                  selectByList: true,
                  style: { height: '100%', width: '100%', },
                  width: '100%',
                },),
              },),
            },),
            /* @__PURE__ */ _jsx2(ComponentViewportProvider, {
              children: /* @__PURE__ */ _jsx2(motion.div, {
                className: 'framer-l6hkuc-container',
                'data-framer-name': 'icon-chat',
                layoutDependency,
                layoutId: 'GeIIfA2tS-container',
                name: 'icon-chat',
                children: /* @__PURE__ */ _jsx2(Icon, {
                  color: 'rgb(255, 255, 255)',
                  height: '100%',
                  iconSearch: 'chatbubble',
                  iconSelection: 'ChatBubble',
                  id: 'GeIIfA2tS',
                  layoutId: 'GeIIfA2tS',
                  mirrored: false,
                  name: 'icon-chat',
                  onClick: onClick1dhtbjt,
                  selectByList: false,
                  style: { height: '100%', width: '100%', },
                  width: '100%',
                },),
              },),
            },),
            /* @__PURE__ */ _jsx2(ComponentViewportProvider, {
              children: /* @__PURE__ */ _jsx2(Scroll, {
                __fromCanvasComponent: true,
                __fromCodeComponentNode: true,
                _border: {},
                background: null,
                className: 'framer-1jjo2l1',
                contentOffsetX: 0,
                contentOffsetY: 0,
                direction: 'vertical',
                directionLock: true,
                dragEnabled: true,
                layoutDependency,
                layoutId: 'vgNX25mfa',
                native: true,
                overdragEnabled: false,
                resetOffset: false,
                scrollBarVisible: false,
                wheelEnabled: true,
                children: /* @__PURE__ */ _jsxs(motion.div, {
                  className: 'framer-17h88q3',
                  'data-framer-name': 'scroll-MAIN',
                  layoutDependency,
                  layoutId: 'CS0usKIgt',
                  style: { backgroundColor: 'rgb(255, 255, 255)', },
                  children: [
                    /* @__PURE__ */ _jsx2(ComponentViewportProvider, {
                      children: /* @__PURE__ */ _jsx2(Scroll, {
                        __fromCanvasComponent: true,
                        __fromCodeComponentNode: true,
                        _border: {},
                        background: null,
                        className: 'framer-1ju2mjk',
                        contentOffsetX: 0,
                        contentOffsetY: 0,
                        direction: 'horizontal',
                        directionLock: true,
                        dragEnabled: true,
                        layoutDependency,
                        layoutId: 'eUnJDSt4F',
                        native: true,
                        overdragEnabled: false,
                        resetOffset: false,
                        scrollBarVisible: false,
                        wheelEnabled: true,
                        children: /* @__PURE__ */ _jsxs(motion.div, {
                          className: 'framer-pyhjcm',
                          'data-framer-name': 'scroll-MAIN-nearby',
                          layoutDependency,
                          layoutId: 'SHtl5bqst',
                          style: { backgroundColor: 'rgb(255, 255, 255)', },
                          children: [
                            /* @__PURE__ */ _jsx2(ComponentViewportProvider, {
                              children: /* @__PURE__ */ _jsx2(motion.div, {
                                className: 'framer-17j2xs3-container',
                                layoutDependency,
                                layoutId: 'lgk5DSS8N-container',
                                children: /* @__PURE__ */ _jsx2(Conic, {
                                  blur: 17,
                                  colors: ['rgb(0, 255, 255)', 'rgb(255, 0, 255)', 'rgb(255, 255, 0)', 'rgb(0, 255, 255)',],
                                  from: 0,
                                  height: '100%',
                                  id: 'lgk5DSS8N',
                                  layoutId: 'lgk5DSS8N',
                                  radius: 126,
                                  style: { height: '100%', width: '100%', },
                                  width: '100%',
                                  xPos: 91,
                                  yPos: 50,
                                },),
                              },),
                            },),
                            /* @__PURE__ */ _jsx2(ComponentViewportProvider, {
                              children: /* @__PURE__ */ _jsx2(motion.div, {
                                className: 'framer-1dcx8zh-container',
                                layoutDependency,
                                layoutId: 'o4tMfmEEe-container',
                                children: /* @__PURE__ */ _jsx2(Conic, {
                                  blur: 17,
                                  colors: ['rgb(0, 255, 255)', 'rgb(255, 0, 255)', 'rgb(255, 255, 0)', 'rgb(0, 255, 255)',],
                                  from: 0,
                                  height: '100%',
                                  id: 'o4tMfmEEe',
                                  layoutId: 'o4tMfmEEe',
                                  radius: 126,
                                  style: { height: '100%', width: '100%', },
                                  width: '100%',
                                  xPos: 42,
                                  yPos: 0,
                                },),
                              },),
                            },),
                            /* @__PURE__ */ _jsx2(ComponentViewportProvider, {
                              children: /* @__PURE__ */ _jsx2(motion.div, {
                                className: 'framer-4m0fpj-container',
                                layoutDependency,
                                layoutId: 'Gju8BbJsP-container',
                                children: /* @__PURE__ */ _jsx2(Conic, {
                                  blur: 17,
                                  colors: ['rgb(0, 255, 255)', 'rgb(255, 255, 0)', 'rgb(255, 153, 0)', 'rgb(0, 67, 112)',],
                                  from: 0,
                                  height: '100%',
                                  id: 'Gju8BbJsP',
                                  layoutId: 'Gju8BbJsP',
                                  radius: 126,
                                  style: { height: '100%', width: '100%', },
                                  width: '100%',
                                  xPos: 55,
                                  yPos: 36,
                                },),
                              },),
                            },),
                            /* @__PURE__ */ _jsx2(ComponentViewportProvider, {
                              children: /* @__PURE__ */ _jsx2(motion.div, {
                                className: 'framer-nm1qoy-container',
                                layoutDependency,
                                layoutId: 'HWKLs8er6-container',
                                children: /* @__PURE__ */ _jsx2(Conic, {
                                  blur: 17,
                                  colors: ['rgb(0, 255, 255)', 'rgb(255, 0, 255)', 'rgb(255, 255, 0)', 'rgb(0, 255, 255)',],
                                  from: 0,
                                  height: '100%',
                                  id: 'HWKLs8er6',
                                  layoutId: 'HWKLs8er6',
                                  radius: 126,
                                  style: { height: '100%', width: '100%', },
                                  width: '100%',
                                  xPos: 100,
                                  yPos: 100,
                                },),
                              },),
                            },),
                            /* @__PURE__ */ _jsx2(ComponentViewportProvider, {
                              children: /* @__PURE__ */ _jsx2(motion.div, {
                                className: 'framer-1igp7ei-container',
                                layoutDependency,
                                layoutId: 'OUAQdYZTf-container',
                                children: /* @__PURE__ */ _jsx2(Conic, {
                                  blur: 17,
                                  colors: ['rgb(0, 255, 255)', 'rgb(255, 0, 255)', 'rgb(255, 255, 0)', 'rgb(73, 61, 34)',],
                                  from: 0,
                                  height: '100%',
                                  id: 'OUAQdYZTf',
                                  layoutId: 'OUAQdYZTf',
                                  radius: 126,
                                  style: { height: '100%', width: '100%', },
                                  width: '100%',
                                  xPos: 42,
                                  yPos: 0,
                                },),
                              },),
                            },),
                            /* @__PURE__ */ _jsx2(ComponentViewportProvider, {
                              children: /* @__PURE__ */ _jsx2(motion.div, {
                                className: 'framer-1k1wgkf-container',
                                layoutDependency,
                                layoutId: 'a3IDoNBPR-container',
                                transformTemplate: transformTemplate2,
                                children: /* @__PURE__ */ _jsx2(Clock, {
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
                                  id: 'a3IDoNBPR',
                                  is12hour: true,
                                  layoutId: 'a3IDoNBPR',
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
                            /* @__PURE__ */ _jsx2(motion.div, { className: 'framer-17cpsnd', layoutDependency, layoutId: 'nBafXejQ0', },),
                            /* @__PURE__ */ _jsx2(ComponentViewportProvider, {
                              children: /* @__PURE__ */ _jsx2(motion.div, {
                                className: 'framer-1hlfwbm-container',
                                layoutDependency,
                                layoutId: 'ZPpSUGXbt-container',
                                transformTemplate: transformTemplate2,
                                children: /* @__PURE__ */ _jsx2(Clock, {
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
                                  id: 'ZPpSUGXbt',
                                  is12hour: true,
                                  layoutId: 'ZPpSUGXbt',
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
                            /* @__PURE__ */ _jsx2(motion.div, { className: 'framer-1xdn9by', layoutDependency, layoutId: 'YX9qtdlY2', },),
                            /* @__PURE__ */ _jsx2(ComponentViewportProvider, {
                              children: /* @__PURE__ */ _jsx2(motion.div, {
                                className: 'framer-13p09ur-container',
                                layoutDependency,
                                layoutId: 'LsOvnAb_5-container',
                                transformTemplate: transformTemplate3,
                                children: /* @__PURE__ */ _jsx2(Clock, {
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
                                  id: 'LsOvnAb_5',
                                  is12hour: true,
                                  layoutId: 'LsOvnAb_5',
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
                            /* @__PURE__ */ _jsx2(motion.div, { className: 'framer-1jbbaq3', layoutDependency, layoutId: 'ry2ChvGpq', },),
                            /* @__PURE__ */ _jsx2(ComponentViewportProvider, {
                              children: /* @__PURE__ */ _jsx2(motion.div, {
                                className: 'framer-18wej7g-container',
                                layoutDependency,
                                layoutId: 'dJPjBfcBW-container',
                                transformTemplate: transformTemplate2,
                                children: /* @__PURE__ */ _jsx2(Clock, {
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
                                  id: 'dJPjBfcBW',
                                  is12hour: true,
                                  layoutId: 'dJPjBfcBW',
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
                            /* @__PURE__ */ _jsx2(motion.div, { className: 'framer-14gfx5i', layoutDependency, layoutId: 'idCaAcLzz', },),
                            /* @__PURE__ */ _jsx2(ComponentViewportProvider, {
                              children: /* @__PURE__ */ _jsx2(motion.div, {
                                className: 'framer-owupxq-container',
                                layoutDependency,
                                layoutId: 'OXGTBV02P-container',
                                transformTemplate: transformTemplate2,
                                children: /* @__PURE__ */ _jsx2(Clock, {
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
                                  id: 'OXGTBV02P',
                                  is12hour: true,
                                  layoutId: 'OXGTBV02P',
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
                            /* @__PURE__ */ _jsx2(motion.div, { className: 'framer-1jpdh45', layoutDependency, layoutId: 'nqEZoSlda', },),
                          ],
                        },),
                      },),
                    },),
                    /* @__PURE__ */ _jsx2(RichText, {
                      __fromCanvasComponent: true,
                      children: /* @__PURE__ */ _jsx2(React.Fragment, {
                        children: /* @__PURE__ */ _jsx2(motion.h1, {
                          className: 'framer-styles-preset-ame1jg',
                          'data-styles-preset': 'e81t2mHNr',
                          children: 'Nearby',
                        },),
                      },),
                      className: 'framer-a1pias',
                      fonts: ['Inter',],
                      layoutDependency,
                      layoutId: 'kaUcgJJGf',
                      style: { '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', },
                      verticalAlignment: 'top',
                      withExternalLayout: true,
                    },),
                    /* @__PURE__ */ _jsx2(ComponentViewportProvider, {
                      children: /* @__PURE__ */ _jsx2(Scroll, {
                        __fromCanvasComponent: true,
                        __fromCodeComponentNode: true,
                        _border: {},
                        background: null,
                        className: 'framer-ixfcli',
                        contentOffsetX: 0,
                        contentOffsetY: 0,
                        direction: 'horizontal',
                        directionLock: true,
                        dragEnabled: true,
                        layoutDependency,
                        layoutId: 'YczPUfyeS',
                        native: true,
                        overdragEnabled: false,
                        resetOffset: false,
                        scrollBarVisible: false,
                        wheelEnabled: true,
                        children: /* @__PURE__ */ _jsxs(motion.div, {
                          className: 'framer-1ru9kum',
                          'data-framer-name': 'scroll-MAIN-lastchatted',
                          layoutDependency,
                          layoutId: 'NIfxpBgaT',
                          style: { backgroundColor: 'rgb(255, 255, 255)', },
                          children: [
                            /* @__PURE__ */ _jsx2(ComponentViewportProvider, {
                              children: /* @__PURE__ */ _jsx2(motion.div, {
                                className: 'framer-101axot-container',
                                layoutDependency,
                                layoutId: 'gydCGIOTc-container',
                                children: /* @__PURE__ */ _jsx2(Conic, {
                                  blur: 17,
                                  colors: ['rgb(0, 255, 255)', 'rgb(255, 0, 255)', 'rgb(255, 255, 0)', 'rgb(0, 255, 255)',],
                                  from: 0,
                                  height: '100%',
                                  id: 'gydCGIOTc',
                                  layoutId: 'gydCGIOTc',
                                  radius: 126,
                                  style: { height: '100%', width: '100%', },
                                  width: '100%',
                                  xPos: 91,
                                  yPos: 50,
                                },),
                              },),
                            },),
                            /* @__PURE__ */ _jsx2(ComponentViewportProvider, {
                              children: /* @__PURE__ */ _jsx2(motion.div, {
                                className: 'framer-1tnrd59-container',
                                layoutDependency,
                                layoutId: 'JmKmdOM1m-container',
                                children: /* @__PURE__ */ _jsx2(Conic, {
                                  blur: 17,
                                  colors: ['rgb(0, 255, 255)', 'rgb(255, 0, 255)', 'rgb(255, 255, 0)', 'rgb(0, 255, 255)',],
                                  from: 0,
                                  height: '100%',
                                  id: 'JmKmdOM1m',
                                  layoutId: 'JmKmdOM1m',
                                  radius: 126,
                                  style: { height: '100%', width: '100%', },
                                  width: '100%',
                                  xPos: 44,
                                  yPos: 44,
                                },),
                              },),
                            },),
                            /* @__PURE__ */ _jsx2(motion.div, {
                              className: 'framer-754ovr',
                              layoutDependency,
                              layoutId: 'lqYsFfcmq',
                              style: { filter: 'grayscale(1)', WebkitFilter: 'grayscale(1)', },
                              children: /* @__PURE__ */ _jsx2(ComponentViewportProvider, {
                                children: /* @__PURE__ */ _jsx2(motion.div, {
                                  className: 'framer-5afurw-container',
                                  layoutDependency,
                                  layoutId: 'Fqn9I_AJb-container',
                                  children: /* @__PURE__ */ _jsx2(Conic, {
                                    blur: 17,
                                    colors: ['rgb(0, 255, 255)', 'rgb(255, 255, 0)', 'rgb(255, 153, 0)', 'rgb(0, 67, 112)',],
                                    from: 0,
                                    height: '100%',
                                    id: 'Fqn9I_AJb',
                                    layoutId: 'Fqn9I_AJb',
                                    radius: 126,
                                    style: { height: '100%', width: '100%', },
                                    width: '100%',
                                    xPos: 55,
                                    yPos: 36,
                                  },),
                                },),
                              },),
                            },),
                            /* @__PURE__ */ _jsx2(ComponentViewportProvider, {
                              children: /* @__PURE__ */ _jsx2(motion.div, {
                                className: 'framer-qqq4rk-container',
                                layoutDependency,
                                layoutId: 'Ls8JInBWM-container',
                                children: /* @__PURE__ */ _jsx2(Conic, {
                                  blur: 17,
                                  colors: ['rgb(0, 255, 255)', 'rgb(255, 0, 255)', 'rgb(255, 255, 0)', 'rgb(0, 255, 255)',],
                                  from: 0,
                                  height: '100%',
                                  id: 'Ls8JInBWM',
                                  layoutId: 'Ls8JInBWM',
                                  radius: 126,
                                  style: { height: '100%', width: '100%', },
                                  width: '100%',
                                  xPos: 100,
                                  yPos: 100,
                                },),
                              },),
                            },),
                            /* @__PURE__ */ _jsx2(motion.div, {
                              className: 'framer-1y8s7uj',
                              layoutDependency,
                              layoutId: 'OrCtZxCZK',
                              style: { filter: 'grayscale(1)', WebkitFilter: 'grayscale(1)', },
                              children: /* @__PURE__ */ _jsx2(ComponentViewportProvider, {
                                children: /* @__PURE__ */ _jsx2(motion.div, {
                                  className: 'framer-1ax11a3-container',
                                  layoutDependency,
                                  layoutId: 'H97ZSeZ6H-container',
                                  children: /* @__PURE__ */ _jsx2(Conic, {
                                    blur: 17,
                                    colors: ['rgb(0, 255, 255)', 'rgb(255, 0, 255)', 'rgb(255, 255, 0)', 'rgb(73, 61, 34)',],
                                    from: 0,
                                    height: '100%',
                                    id: 'H97ZSeZ6H',
                                    layoutId: 'H97ZSeZ6H',
                                    radius: 126,
                                    style: { height: '100%', width: '100%', },
                                    width: '100%',
                                    xPos: 42,
                                    yPos: 0,
                                  },),
                                },),
                              },),
                            },),
                            /* @__PURE__ */ _jsx2(ComponentViewportProvider, {
                              children: /* @__PURE__ */ _jsx2(motion.div, {
                                className: 'framer-1fcly34-container',
                                layoutDependency,
                                layoutId: 'Wgs_kMP7e-container',
                                transformTemplate: transformTemplate2,
                                children: /* @__PURE__ */ _jsx2(Clock, {
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
                                  id: 'Wgs_kMP7e',
                                  is12hour: true,
                                  layoutId: 'Wgs_kMP7e',
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
                            /* @__PURE__ */ _jsx2(motion.div, { className: 'framer-ef4rbq', layoutDependency, layoutId: 'KqWi7z8qT', },),
                            /* @__PURE__ */ _jsx2(ComponentViewportProvider, {
                              children: /* @__PURE__ */ _jsx2(motion.div, {
                                className: 'framer-29ubu7-container',
                                layoutDependency,
                                layoutId: 'CUCZ7Ti3I-container',
                                transformTemplate: transformTemplate2,
                                children: /* @__PURE__ */ _jsx2(Clock, {
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
                                  id: 'CUCZ7Ti3I',
                                  is12hour: true,
                                  layoutId: 'CUCZ7Ti3I',
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
                            /* @__PURE__ */ _jsx2(motion.div, { className: 'framer-4ni5zo', layoutDependency, layoutId: 'sRMhvVHOP', },),
                            /* @__PURE__ */ _jsx2(ComponentViewportProvider, {
                              children: /* @__PURE__ */ _jsx2(motion.div, {
                                className: 'framer-ys3xfw-container',
                                layoutDependency,
                                layoutId: 'wZOsAo0OV-container',
                                transformTemplate: transformTemplate2,
                                children: /* @__PURE__ */ _jsx2(Clock, {
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
                                  id: 'wZOsAo0OV',
                                  is12hour: true,
                                  layoutId: 'wZOsAo0OV',
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
                            /* @__PURE__ */ _jsx2(motion.div, { className: 'framer-1vxexsj', layoutDependency, layoutId: 'TgFHYh587', },),
                          ],
                        },),
                      },),
                    },),
                    /* @__PURE__ */ _jsx2(RichText, {
                      __fromCanvasComponent: true,
                      children: /* @__PURE__ */ _jsx2(React.Fragment, {
                        children: /* @__PURE__ */ _jsx2(motion.h1, {
                          className: 'framer-styles-preset-ame1jg',
                          'data-styles-preset': 'e81t2mHNr',
                          children: 'Last Chatted',
                        },),
                      },),
                      className: 'framer-cmc2uy',
                      fonts: ['Inter',],
                      layoutDependency,
                      layoutId: 'sdFVOjSWF',
                      style: { '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', },
                      verticalAlignment: 'top',
                      withExternalLayout: true,
                    },),
                    /* @__PURE__ */ _jsx2(ComponentViewportProvider, {
                      children: /* @__PURE__ */ _jsx2(motion.div, {
                        className: 'framer-r1xlzr-container',
                        layoutDependency,
                        layoutId: 'mVMTxKpij-container',
                        children: /* @__PURE__ */ _jsx2(Globe, {
                          alignment: 'center',
                          background: 'rgba(0, 0, 0, 0)',
                          baseColor: 'rgb(255, 255, 255)',
                          dark: 1,
                          diffuse: 1.86,
                          dragOptions: { damping: 40, mass: 1, stiffness: 200, },
                          glowColor: 'rgb(255, 255, 255)',
                          height: '100%',
                          id: 'mVMTxKpij',
                          isDraggable: true,
                          layoutId: 'mVMTxKpij',
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
                    /* @__PURE__ */ _jsx2(RichText, {
                      __fromCanvasComponent: true,
                      children: /* @__PURE__ */ _jsx2(React.Fragment, {
                        children: /* @__PURE__ */ _jsx2(motion.h1, {
                          className: 'framer-styles-preset-ame1jg',
                          'data-styles-preset': 'e81t2mHNr',
                          children: 'Discover',
                        },),
                      },),
                      className: 'framer-143eqw0',
                      fonts: ['Inter',],
                      layoutDependency,
                      layoutId: 'PBbhLyMzT',
                      style: { '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', },
                      verticalAlignment: 'top',
                      withExternalLayout: true,
                    },),
                    /* @__PURE__ */ _jsx2(RichText, {
                      __fromCanvasComponent: true,
                      children: /* @__PURE__ */ _jsx2(React.Fragment, {
                        children: /* @__PURE__ */ _jsx2(motion.h1, {
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
                      className: 'framer-19jcjv8',
                      fonts: ['GF;DM Sans-300',],
                      layoutDependency,
                      layoutId: 'MGF6VhM65',
                      style: {
                        '--extracted-gdpscs': 'rgb(166, 166, 166)',
                        '--framer-link-text-color': 'rgb(0, 153, 255)',
                        '--framer-link-text-decoration': 'underline',
                      },
                      verticalAlignment: 'top',
                      withExternalLayout: true,
                    },),
                    /* @__PURE__ */ _jsx2(RichText, {
                      __fromCanvasComponent: true,
                      children: /* @__PURE__ */ _jsx2(React.Fragment, {
                        children: /* @__PURE__ */ _jsx2(motion.h1, {
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
                      className: 'framer-pjpuoc',
                      fonts: ['GF;DM Sans-300',],
                      layoutDependency,
                      layoutId: 'Ty3tsne4u',
                      style: {
                        '--extracted-gdpscs': 'rgb(166, 166, 166)',
                        '--framer-link-text-color': 'rgb(0, 153, 255)',
                        '--framer-link-text-decoration': 'underline',
                      },
                      verticalAlignment: 'top',
                      withExternalLayout: true,
                    },),
                    /* @__PURE__ */ _jsx2(RichText, {
                      __fromCanvasComponent: true,
                      children: /* @__PURE__ */ _jsx2(React.Fragment, {
                        children: /* @__PURE__ */ _jsx2(motion.h1, {
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
                      className: 'framer-9lx7v6',
                      fonts: ['GF;DM Sans-300',],
                      layoutDependency,
                      layoutId: 'GYF1NVfFP',
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
          ],
        },),
      },),
    },),
  },);
},);
var css2 = [
  '@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }',
  '.framer-FfuU5.framer-15bpjuw, .framer-FfuU5 .framer-15bpjuw { display: block; }',
  '.framer-FfuU5.framer-cu5isx { height: 790px; overflow: hidden; position: relative; width: 386px; }',
  '.framer-FfuU5 .framer-h3p0s1 { bottom: 15px; flex: none; height: 81px; left: calc(50.00000000000002% - 364px / 2); overflow: hidden; position: absolute; width: 364px; }',
  '.framer-FfuU5 .framer-emedg8 { aspect-ratio: 0.4888888888888889 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 790px); left: 0px; overflow: visible; position: absolute; right: 0px; top: 0px; }',
  '.framer-FfuU5 .framer-1nytdig-container { flex: none; height: auto; left: 50%; position: absolute; top: 29px; width: 79px; }',
  '.framer-FfuU5 .framer-1xwtt6l { cursor: pointer; flex: none; height: 15px; left: calc(47.66839378238344% - 64px / 2); overflow: visible; position: absolute; top: 32px; width: 64px; }',
  '.framer-FfuU5 .framer-agc84h-container { bottom: 38px; flex: none; height: 37px; position: absolute; right: 72px; width: 37px; }',
  '.framer-FfuU5 .framer-1399mgx-container { bottom: 38px; flex: none; height: 37px; left: calc(49.74093264248707% - 37px / 2); position: absolute; width: 37px; }',
  '.framer-FfuU5 .framer-l6hkuc-container { bottom: 38px; flex: none; height: 37px; left: 71px; position: absolute; width: 37px; }',
  '.framer-FfuU5 .framer-1jjo2l1 { flex: none; height: 633px; left: calc(50.00000000000002% - 348px / 2); position: absolute; top: calc(47.721518987341796% - 633px / 2); width: 348px; }',
  '.framer-FfuU5 .framer-17h88q3 { height: 1089px; overflow: hidden; position: relative; width: 386px; }',
  '.framer-FfuU5 .framer-1ju2mjk { flex: none; height: 165px; left: calc(48.96373056994821% - 319px / 2); position: absolute; top: calc(13.18027210884356% - 165px / 2); width: 319px; }',
  '.framer-FfuU5 .framer-pyhjcm, .framer-FfuU5 .framer-1ru9kum { height: 183px; overflow: hidden; position: relative; width: 807px; }',
  '.framer-FfuU5 .framer-17j2xs3-container { flex: none; height: 150px; left: 6px; position: absolute; top: calc(50.00000000000002% - 150px / 2); width: 150px; }',
  '.framer-FfuU5 .framer-1dcx8zh-container { flex: none; height: 150px; left: 164px; position: absolute; top: calc(50.00000000000002% - 150px / 2); width: 149px; }',
  '.framer-FfuU5 .framer-4m0fpj-container { flex: none; height: 150px; left: calc(48.949320148331296% - 150px / 2); position: absolute; top: calc(50.00000000000002% - 150px / 2); width: 150px; }',
  '.framer-FfuU5 .framer-nm1qoy-container { flex: none; height: 150px; position: absolute; right: 181px; top: calc(50.00000000000002% - 150px / 2); width: 149px; }',
  '.framer-FfuU5 .framer-1igp7ei-container { flex: none; height: 150px; position: absolute; right: 23px; top: calc(50.00000000000002% - 150px / 2); width: 150px; }',
  '.framer-FfuU5 .framer-1k1wgkf-container { flex: none; height: auto; left: 51px; position: absolute; top: 51%; width: 79px; }',
  '.framer-FfuU5 .framer-17cpsnd { flex: none; height: 15px; left: 54px; overflow: visible; position: absolute; top: calc(50.27322404371587% - 15px / 2); width: 64px; }',
  '.framer-FfuU5 .framer-1hlfwbm-container { flex: none; height: auto; left: 210px; position: absolute; top: 51%; width: 79px; }',
  '.framer-FfuU5 .framer-1xdn9by { flex: none; height: 15px; left: 213px; overflow: visible; position: absolute; top: calc(50.27322404371587% - 15px / 2); width: 64px; }',
  '.framer-FfuU5 .framer-13p09ur-container { flex: none; height: auto; left: 50%; position: absolute; top: 51%; width: 79px; }',
  '.framer-FfuU5 .framer-1jbbaq3 { flex: none; height: 15px; left: calc(49.5662949194548% - 64px / 2); overflow: visible; position: absolute; top: calc(50.27322404371587% - 15px / 2); width: 64px; }',
  '.framer-FfuU5 .framer-18wej7g-container { flex: none; height: auto; position: absolute; right: 207px; top: 51%; width: 79px; }',
  '.framer-FfuU5 .framer-14gfx5i { flex: none; height: 15px; overflow: visible; position: absolute; right: 218px; top: calc(50.27322404371587% - 15px / 2); width: 64px; }',
  '.framer-FfuU5 .framer-owupxq-container { flex: none; height: auto; position: absolute; right: 45px; top: 51%; width: 79px; }',
  '.framer-FfuU5 .framer-1jpdh45 { flex: none; height: 15px; overflow: visible; position: absolute; right: 56px; top: calc(50.27322404371587% - 15px / 2); width: 64px; }',
  '.framer-FfuU5 .framer-a1pias { flex: none; height: 18px; left: calc(37.04663212435235% - 209px / 2); position: absolute; top: calc(3.2139577594123274% - 18px / 2); white-space: pre-wrap; width: 209px; word-break: break-word; word-wrap: break-word; }',
  '.framer-FfuU5 .framer-ixfcli { flex: none; height: 165px; left: calc(48.96373056994821% - 319px / 2); position: absolute; top: calc(40.86317722681361% - 165px / 2); width: 319px; }',
  '.framer-FfuU5 .framer-101axot-container { flex: none; height: 150px; position: absolute; right: 21px; top: calc(50.27322404371587% - 150px / 2); width: 150px; }',
  '.framer-FfuU5 .framer-1tnrd59-container { flex: none; height: 150px; position: absolute; right: 179px; top: calc(50.27322404371587% - 150px / 2); width: 149px; }',
  '.framer-FfuU5 .framer-754ovr { flex: none; height: 150px; left: 6px; overflow: visible; position: absolute; top: calc(50.27322404371587% - 150px / 2); width: 150px; }',
  '.framer-FfuU5 .framer-5afurw-container, .framer-FfuU5 .framer-1ax11a3-container { bottom: 0px; flex: none; left: 0px; position: absolute; right: 0px; top: 0px; }',
  '.framer-FfuU5 .framer-qqq4rk-container { flex: none; height: 150px; left: 164px; position: absolute; top: calc(50.27322404371587% - 150px / 2); width: 149px; }',
  '.framer-FfuU5 .framer-1y8s7uj { flex: none; height: 150px; left: calc(49.07063197026025% - 150px / 2); overflow: visible; position: absolute; top: calc(50.27322404371587% - 150px / 2); width: 150px; }',
  '.framer-FfuU5 .framer-1fcly34-container { flex: none; height: auto; left: 208px; position: absolute; top: 50%; width: 79px; }',
  '.framer-FfuU5 .framer-ef4rbq { flex: none; height: 15px; left: 211px; overflow: visible; position: absolute; top: calc(49.72677595628417% - 15px / 2); width: 64px; }',
  '.framer-FfuU5 .framer-29ubu7-container { flex: none; height: auto; position: absolute; right: 204px; top: 50%; width: 79px; }',
  '.framer-FfuU5 .framer-4ni5zo { flex: none; height: 15px; overflow: visible; position: absolute; right: 215px; top: calc(49.72677595628417% - 15px / 2); width: 64px; }',
  '.framer-FfuU5 .framer-ys3xfw-container { flex: none; height: auto; position: absolute; right: 46px; top: 50%; width: 79px; }',
  '.framer-FfuU5 .framer-1vxexsj { flex: none; height: 15px; overflow: visible; position: absolute; right: 57px; top: calc(49.72677595628417% - 15px / 2); width: 64px; }',
  '.framer-FfuU5 .framer-cmc2uy { flex: none; height: 18px; left: calc(37.04663212435235% - 209px / 2); position: absolute; top: calc(30.578512396694236% - 18px / 2); white-space: pre-wrap; width: 209px; word-break: break-word; word-wrap: break-word; }',
  '.framer-FfuU5 .framer-r1xlzr-container { flex: none; height: 324px; left: calc(54.40414507772024% - 345px / 2); position: absolute; top: calc(77.13498622589535% - 324px / 2); width: 345px; }',
  '.framer-FfuU5 .framer-143eqw0 { flex: none; height: 18px; left: calc(37.04663212435235% - 209px / 2); position: absolute; top: calc(58.76951331496788% - 18px / 2); white-space: pre-wrap; width: 209px; word-break: break-word; word-wrap: break-word; }',
  '.framer-FfuU5 .framer-19jcjv8 { flex: none; height: 18px; left: calc(49.74093264248707% - 303px / 2); position: absolute; top: calc(22.865013774104707% - 18px / 2); white-space: pre-wrap; width: 303px; word-break: break-word; word-wrap: break-word; }',
  '.framer-FfuU5 .framer-pjpuoc { flex: none; height: 42px; left: calc(49.74093264248707% - 303px / 2); position: absolute; top: calc(51.606978879706176% - 42px / 2); white-space: pre-wrap; width: 303px; word-break: break-word; word-wrap: break-word; }',
  '.framer-FfuU5 .framer-9lx7v6 { flex: none; height: 42px; left: calc(50.777202072538884% - 303px / 2); position: absolute; top: calc(93.48025711662078% - 42px / 2); white-space: pre-wrap; width: 303px; word-break: break-word; word-wrap: break-word; }',
  ...css,
];
var Framera4fbduHHq = withCSS(Component, css2, 'framer-FfuU5',);
var stdin_default = Framera4fbduHHq;
Framera4fbduHHq.displayName = 'MAIN';
Framera4fbduHHq.defaultProps = { height: 790, width: 386, };
addPropertyControls2(Framera4fbduHHq, {
  Nm_Wn7C7e: { title: 'Tap', type: ControlType2.EventHandler, },
  Fx4ipBJTf: { title: 'Tap 2', type: ControlType2.EventHandler, },
  vWkvp9dsR: { title: 'Tap 3', type: ControlType2.EventHandler, },
  h6UG5esH9: { title: 'Tap 4', type: ControlType2.EventHandler, },
},);
addFonts(Framera4fbduHHq, [
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
  ...ClockFonts,
  ...IconoirFonts,
  ...ConicFonts,
  ...GlobeFonts,
  ...getFontsFromSharedStyle(fonts,),
], { supportsExplicitInterCodegen: true, },);

// virtual:main
import { WithFramerBreakpoints, } from 'unframer';
import { jsx, } from 'react/jsx-runtime';
stdin_default.Responsive = (props,) => {
  return /* @__PURE__ */ jsx(WithFramerBreakpoints, { Component: stdin_default, ...props, },);
};
var main_default = stdin_default;
export { main_default as default, };
