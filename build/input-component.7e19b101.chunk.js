"use strict";(self.webpackChunk_13_candles_cms=self.webpackChunk_13_candles_cms||[]).push([[1077],{60665:(g,o,t)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const l=t(88972),i=t(91554),s=t(60468),r=(e=>e&&e.__esModule?e:{default:e})(l),u={color:!0,cursor:!0,height:!0,width:!0},c=r.default.div.withConfig({shouldForwardProp:(e,n)=>!u[e]&&n(e)})`
  // Font
  font-size: ${({fontSize:e,theme:n})=>s.extractStyleFromTheme(n.fontSizes,e,e)};

  // Colors
  background: ${({theme:e,background:n})=>s.extractStyleFromTheme(e.colors,n,n)};
  color: ${({theme:e,color:n})=>s.extractStyleFromTheme(e.colors,n,void 0)};

  // Spaces
  ${({theme:e,padding:n})=>i("padding",n,e)}
  ${({theme:e,paddingTop:n})=>i("padding-top",n,e)}
  ${({theme:e,paddingRight:n})=>i("padding-right",n,e)}
  ${({theme:e,paddingBottom:n})=>i("padding-bottom",n,e)}
  ${({theme:e,paddingLeft:n})=>i("padding-left",n,e)}
  ${({theme:e,marginLeft:n})=>i("margin-left",n,e)}
  ${({theme:e,marginRight:n})=>i("margin-right",n,e)}
  ${({theme:e,marginTop:n})=>i("margin-top",n,e)}
  ${({theme:e,marginBottom:n})=>i("margin-bottom",n,e)}

  // Responsive hiding
  ${({theme:e,hiddenS:n})=>n?`${e.mediaQueries.tablet} { display: none; }`:void 0}
  ${({theme:e,hiddenXS:n})=>n?`${e.mediaQueries.mobile} { display: none; }`:void 0}
  

  // Borders
  border-radius: ${({theme:e,hasRadius:n,borderRadius:p})=>n?e.borderRadius:p};
  border-style: ${({borderStyle:e})=>e};
  border-width: ${({borderWidth:e})=>e};
  border-color: ${({borderColor:e,theme:n})=>s.extractStyleFromTheme(n.colors,e,void 0)};
  border: ${({theme:e,borderColor:n,borderStyle:p,borderWidth:S})=>{if(n&&!p&&typeof S>"u")return`1px solid ${e.colors[n]}`}};

  // Shadows
  box-shadow: ${({theme:e,shadow:n})=>s.extractStyleFromTheme(e.shadows,n,void 0)};

  // Handlers
  pointer-events: ${({pointerEvents:e})=>e};
  &:hover {
    ${({_hover:e,theme:n})=>e?e(n):void 0}
  }

  // Display
  display: ${({display:e})=>e};

  // Position
  position: ${({position:e})=>e};
  left: ${({left:e,theme:n})=>s.extractStyleFromTheme(n.spaces,e,e)};
  right: ${({right:e,theme:n})=>s.extractStyleFromTheme(n.spaces,e,e)};
  top: ${({top:e,theme:n})=>s.extractStyleFromTheme(n.spaces,e,e)};
  bottom: ${({bottom:e,theme:n})=>s.extractStyleFromTheme(n.spaces,e,e)};
  z-index: ${({zIndex:e})=>e};
  overflow: ${({overflow:e})=>e};

  // Size
  width: ${({width:e,theme:n})=>s.extractStyleFromTheme(n.spaces,e,e)};
  max-width: ${({maxWidth:e,theme:n})=>s.extractStyleFromTheme(n.spaces,e,e)};
  min-width: ${({minWidth:e,theme:n})=>s.extractStyleFromTheme(n.spaces,e,e)};
  height: ${({height:e,theme:n})=>s.extractStyleFromTheme(n.spaces,e,e)};
  max-height: ${({maxHeight:e,theme:n})=>s.extractStyleFromTheme(n.spaces,e,e)};
  min-height: ${({minHeight:e,theme:n})=>s.extractStyleFromTheme(n.spaces,e,e)};

  // Animation
  transition: ${({transition:e})=>e};
  transform: ${({transform:e})=>e};
  animation: ${({animation:e})=>e};

  //Flexbox children props
  flex-shrink: ${({shrink:e})=>e};
  flex-grow: ${({grow:e})=>e};
  flex-basis: ${({basis:e})=>e};
  flex: ${({flex:e})=>e};

  // Text
  text-align: ${({textAlign:e})=>e};
  text-transform: ${({textTransform:e})=>e};
  line-height: ${({theme:e,lineHeight:n})=>s.extractStyleFromTheme(e.lineHeights,n,n)};

  // Cursor
  cursor: ${({cursor:e})=>e};
`;o.Box=c},58674:(g,o,t)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const l=t(85893),i=t(67294),s=t(44158),d=t(52423),r=t(60665),u=i.forwardRef(({children:c,name:e,error:n,hint:p,id:S,required:h=!1,...m},a)=>{const f=d.useId(S),y=i.useMemo(()=>({name:e,id:f,error:n,hint:p,required:h}),[n,f,p,e,h]);return l.jsx(r.Box,{ref:a,...m,children:l.jsx(s.FieldContext.Provider,{value:y,children:c})})});o.Field=u},70072:(g,o,t)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const l=t(85893),i=t(67294),s=t(88972),d=t(90291),r=t(98365),e=(p=>p&&p.__esModule?p:{default:p})(s).default(d.Flex)`
  font-size: 1.6rem;
  padding: 0;
`,n=i.forwardRef(({label:p,children:S,...h},m)=>l.jsxs(e,{justifyContent:"unset",background:"transparent",borderStyle:"none",type:"button",...h,as:"button",ref:m,children:[l.jsx(r.VisuallyHidden,{as:"span",children:p}),i.cloneElement(S,{"aria-hidden":!0,focusable:!1})]}));o.FieldAction=n},44158:(g,o,t)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const l=t(67294),i=l.createContext({id:"",required:!1}),s=()=>l.useContext(i);o.FieldContext=i,o.useField=s},73582:(g,o,t)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const l=t(85893),i=t(44158),s=t(4583),d=()=>{const{id:r,error:u}=i.useField();return!u||typeof u!="string"?null:l.jsx(s.Typography,{variant:"pi",as:"p",id:`${r}-error`,textColor:"danger600","data-strapi-field-error":!0,children:u})};o.FieldError=d},92298:(g,o,t)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const l=t(85893),i=t(44158),s=t(4583),d=()=>{const{id:r,hint:u,error:c}=i.useField();return!u||c?null:l.jsx(s.Typography,{variant:"pi",as:"p",id:`${r}-hint`,textColor:"neutral600",children:u})};o.FieldHint=d},30969:(g,o,t)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const l=t(85893),i=t(67294),s=t(88972),d=t(44158),r=t(69186),u=t(60665),c=t(90291),n=(a=>a&&a.__esModule?a:{default:a})(s),p={S:6.5,M:10.5},S=i.forwardRef(({endAction:a,startAction:f,disabled:y=!1,onChange:b,size:$="M",...x},w)=>{const{id:T,error:j,hint:z,name:B,required:I}=d.useField();let v;j?v=`${T}-error`:z&&(v=`${T}-hint`);const A=Boolean(j),R=F=>{!y&&b&&b(F)};return l.jsxs(m,{justifyContent:"space-between",hasError:A,disabled:y,children:[f?l.jsx(u.Box,{paddingLeft:3,paddingRight:2,children:f}):null,l.jsx(h,{id:T,name:B,ref:w,"aria-describedby":v,"aria-invalid":A,"aria-disabled":y,disabled:y,"data-disabled":y?"":void 0,hasLeftAction:Boolean(f),hasRightAction:Boolean(a),onChange:R,"aria-required":I,$size:$,...x}),a?l.jsx(u.Box,{paddingLeft:2,paddingRight:3,children:a}):null]})}),h=n.default.input`
  border: none;
  border-radius: ${({theme:a})=>a.borderRadius};
  padding-bottom: ${({$size:a})=>`${p[a]/16}rem`};
  padding-left: ${({theme:a,hasLeftAction:f})=>f?0:a.spaces[4]};
  padding-right: ${({theme:a,hasRightAction:f})=>f?0:a.spaces[4]};
  padding-top: ${({$size:a})=>`${p[a]/16}rem`};
  cursor: ${a=>a["aria-disabled"]?"not-allowed":void 0};

  color: ${({theme:a})=>a.colors.neutral800};
  font-weight: 400;
  font-size: ${a=>a.theme.fontSizes[2]};
  display: block;
  width: 100%;
  background: inherit;

  ::placeholder {
    color: ${({theme:a})=>a.colors.neutral500};
    opacity: 1;
  }

  &[aria-disabled='true'] {
    color: inherit;
  }

  //focus managed by InputWrapper
  &:focus {
    outline: none;
    box-shadow: none;
  }
`,m=n.default(c.Flex)`
  border: 1px solid ${({theme:a,hasError:f})=>f?a.colors.danger600:a.colors.neutral200};
  border-radius: ${({theme:a})=>a.borderRadius};
  background: ${({theme:a})=>a.colors.neutral0};
  ${r.inputFocusStyle()}

  ${({theme:a,disabled:f})=>f?s.css`
          color: ${a.colors.neutral600};
          background: ${a.colors.neutral150};
        `:void 0}
`;o.FieldInput=S,o.InputWrapper=m},64919:(g,o,t)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const l=t(85893),i=t(67294),s=t(88972),d=t(44158),r=t(52075),u=t(4583),c=t(90291),n=(f=>f&&f.__esModule?f:{default:f})(s),p=r.once(console.warn),S=i.forwardRef(({children:f,action:y,required:b,...$},x)=>{const{id:w,required:T}=d.useField(),j=T||b;return b!==void 0&&p('Deprecation warning: Usage of "required" prop in FieldLabel component is deprecated. This is discouraged and will be removed in the next major release. Please use the Field component to share the required prop.'),l.jsxs(h,{ref:x,variant:"pi",textColor:"neutral800",htmlFor:w,fontWeight:"bold",as:"label",...$,children:[f,j&&l.jsx(m,{textColor:"danger600",children:"*"}),y&&l.jsx(a,{marginLeft:1,children:y})]})}),h=n.default(u.Typography)`
  display: flex;
  align-items: center;
`,m=n.default(u.Typography)`
  line-height: 0;
`,a=n.default(c.Flex)`
  line-height: 0;

  svg path {
    fill: ${({theme:f})=>f.colors.neutral500};
  }
`;o.FieldLabel=S},83534:(g,o,t)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const l=t(58674),i=t(64919),s=t(30969),d=t(92298),r=t(73582),u=t(44158),c=t(70072);o.Field=l.Field,o.FieldLabel=i.FieldLabel,o.FieldInput=s.FieldInput,o.InputWrapper=s.InputWrapper,o.FieldHint=d.FieldHint,o.FieldError=r.FieldError,o.FieldContext=u.FieldContext,o.useField=u.useField,o.FieldAction=c.FieldAction},90291:(g,o,t)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const l=t(88972),i=t(91554),s=t(60665),r=(e=>e&&e.__esModule?e:{default:e})(l),u={direction:!0},c=r.default(s.Box).withConfig({shouldForwardProp:(e,n)=>!u[e]&&n(e)})`
  align-items: ${({alignItems:e="center"})=>e};
  display: ${({display:e="flex",inline:n})=>n?"inline-flex":e};
  flex-direction: ${({direction:e="row"})=>e};
  flex-shrink: ${({shrink:e})=>e};
  flex-wrap: ${({wrap:e})=>e};
  ${({gap:e,theme:n})=>i("gap",e,n)};
  justify-content: ${({justifyContent:e})=>e};
`;o.Flex=c},29382:(g,o,t)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const l=t(85893),i=t(67294),s=t(88972),d=t(60468),r=t(90291),c=(h=>h&&h.__esModule?h:{default:h})(s),e={size:!0,spacing:!0},n=c.default(r.Flex).withConfig({shouldForwardProp:(h,m)=>!e[h]&&m(h)})`
  & > * {
    margin-top: 0;
    margin-bottom: 0;
  }

  & > * + * {
    margin-top: ${({theme:h,spacing:m})=>d.extractStyleFromTheme(h.spaces,m,void 0)};
  }
`,p=c.default(r.Flex).withConfig({shouldForwardProp:(h,m)=>!e[h]&&m(h)})`
  & > * {
    margin-left: 0;
    margin-right: 0;
  }

  & > * + * {
    margin-left: ${({theme:h,spacing:m})=>d.extractStyleFromTheme(h.spaces,m,void 0)};
  }
`,S=i.forwardRef(({horizontal:h=!1,spacing:m,size:a,...f},y)=>(a&&console.warn('Deprecation warning: Usage of "size" prop in Stack component is deprecated. This is discouraged and will be removed in the next major release. Please use "spacing" instead'),h?l.jsx(p,{ref:y,spacing:m||a,...f}):l.jsx(n,{direction:"column",alignItems:"stretch",ref:y,spacing:m||a,...f})));S.displayName="Stack",o.Stack=S},42919:(g,o,t)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const l=t(29382);o.Stack=l.Stack},4583:(g,o,t)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const l=t(88972),i=t(50933),s=t(60468),r=(e=>e&&e.__esModule?e:{default:e})(l),u={fontSize:!0,fontWeight:!0},c=r.default.span.withConfig({shouldForwardProp:(e,n)=>!u[e]&&n(e)})`
  ${i.variantStyle}
  ${i.ellipsisStyle}

  // These properties need to come after {variantStyle}, because they might
  // overwrite a variant attribute
  font-weight: ${({theme:e,fontWeight:n})=>s.extractStyleFromTheme(e.fontWeights,n,void 0)};
  font-size: ${({theme:e,fontSize:n})=>s.extractStyleFromTheme(e.fontSizes,n,void 0)};
  line-height: ${({theme:e,lineHeight:n})=>s.extractStyleFromTheme(e.lineHeights,n,n)};
  color: ${({theme:e,textColor:n})=>e.colors[n||"neutral800"]};
  text-align: ${({textAlign:e})=>e};
  text-decoration: ${({textDecoration:e})=>e};
  text-transform: ${({textTransform:e})=>e};
`;o.Typography=c},24866:(g,o)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const t="alpha",l="beta",i="delta",s="epsilon",d="omega",r="pi",u="sigma",c=[t,l,i,s,d,r,u];o.ALPHA=t,o.BETA=l,o.DELTA=i,o.EPSILON=s,o.OMEGA=d,o.PI=r,o.SIGMA=u,o.TEXT_VARIANTS=c},50933:(g,o,t)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const l=t(24866),i=({ellipsis:d=!1})=>d&&`
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `,s=({variant:d=l.OMEGA,theme:r})=>{switch(d){case l.ALPHA:return`
        font-weight: ${r.fontWeights.bold};
        font-size: ${r.fontSizes[5]};
        line-height: ${r.lineHeights[2]};
      `;case l.BETA:return`
        font-weight: ${r.fontWeights.bold};
        font-size: ${r.fontSizes[4]};
        line-height: ${r.lineHeights[1]};
      `;case l.DELTA:return`
        font-weight: ${r.fontWeights.semiBold};
        font-size: ${r.fontSizes[3]};
        line-height: ${r.lineHeights[2]};
      `;case l.EPSILON:return`
        font-size: ${r.fontSizes[3]};
        line-height: ${r.lineHeights[6]};
      `;case l.OMEGA:return`
        font-size: ${r.fontSizes[2]};
        line-height: ${r.lineHeights[4]};
      `;case l.PI:return`
        font-size: ${r.fontSizes[1]};
        line-height: ${r.lineHeights[3]};
      `;case l.SIGMA:return`
        font-weight: ${r.fontWeights.bold};
        font-size: ${r.fontSizes[0]};
        line-height: ${r.lineHeights[5]};
        text-transform: uppercase;
      `;default:return`
        font-size: ${r.fontSizes[2]};
      `}};o.ellipsisStyle=i,o.variantStyle=s},98365:(g,o,t)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const l=t(88972),d=(r=>r&&r.__esModule?r:{default:r})(l).default.div`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`;o.VisuallyHidden=d},52075:(g,o)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const t="[@strapi/design-system]:",l=i=>{const s=i;let d=!1;if(typeof s!="function")throw new TypeError(`${t} once requires a function parameter`);return(...r)=>{d||(s(...r),d=!0)}};o.PREFIX=t,o.once=l},91554:g=>{const o=(t,l,i)=>{if(!l)return;if(typeof l=="object")return(Array.isArray(l)?l:[l?.desktop,l?.tablet,l?.mobile]).reduce((u,c,e)=>{if(c)switch(e){case 0:return`${u}${t}: ${i.spaces[c]};`;case 1:return`${u}${i.mediaQueries.tablet}{${t}: ${i.spaces[c]};}`;case 2:return`${u}${i.mediaQueries.mobile}{${t}: ${i.spaces[c]};}`;default:return u}return u},"");const s=i.spaces[l]??l;return`${t}: ${s};`};g.exports=o},79511:(g,o)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});function t(i,s){return typeof i=="string"?!1:s in i}function l(i){return i&&typeof i=="object"&&!Array.isArray(i)}o.isKeyOf=t,o.isObject=l},60468:(g,o,t)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const l=t(79511);function i(s,d,r){return d&&l.isKeyOf(s,d)?s[d]:r}o.extractStyleFromTheme=i},52423:(g,o,t)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const l=t(67294),d=(c=>c&&c.__esModule?c:{default:c})(l).default["useId".toString()]||(()=>{});let r=0;const u=c=>{const[e,n]=l.useState(d());return l.useLayoutEffect(()=>{c||n(p=>p??String(r++))},[c]),c?.toString()??(e||"")};o.useId=u},69186:(g,o,t)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const l=t(88972),i=r=>({theme:u,size:c})=>u.sizes[r][c],s=(r="&")=>({theme:u,hasError:c=!1})=>l.css`
    outline: none;
    box-shadow: 0;
    transition-property: border-color, box-shadow, fill;
    transition-duration: 0.2s;

    ${r}:focus-within {
      border: 1px solid ${c?u.colors.danger600:u.colors.primary600};
      box-shadow: ${c?u.colors.danger600:u.colors.primary600} 0px 0px 0px 2px;
    }
  `,d=({theme:r})=>l.css`
  position: relative;
  outline: none;

  &:after {
    transition-property: all;
    transition-duration: 0.2s;
    border-radius: 8px;
    content: '';
    position: absolute;
    top: -4px;
    bottom: -4px;
    left: -4px;
    right: -4px;
    border: 2px solid transparent;
  }

  &:focus-visible {
    outline: none;
    &:after {
      border-radius: 8px;
      content: '';
      position: absolute;
      top: -5px;
      bottom: -5px;
      left: -5px;
      right: -5px;
      border: 2px solid ${r.colors.primary600};
    }
  }
`;o.buttonFocusStyle=d,o.getThemeSize=i,o.inputFocusStyle=s},80633:(g,o,t)=>{const l=t(85893),i=d=>l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...d,children:l.jsx("path",{fill:"#212134",fillRule:"evenodd",d:"M15.681 2.804A9.64 9.64 0 0 0 11.818 2C6.398 2 2 6.48 2 12c0 5.521 4.397 10 9.818 10 2.03 0 4.011-.641 5.67-1.835a9.987 9.987 0 0 0 3.589-4.831 1.117 1.117 0 0 0-.664-1.418 1.086 1.086 0 0 0-1.393.676 7.769 7.769 0 0 1-2.792 3.758 7.546 7.546 0 0 1-4.41 1.428V4.222h.002a7.492 7.492 0 0 1 3.003.625 7.61 7.61 0 0 1 2.5 1.762l.464.551-2.986 3.042a.186.186 0 0 0 .129.316H22V3.317a.188.188 0 0 0-.112-.172.179.179 0 0 0-.199.04l-2.355 2.4-.394-.468-.02-.02a9.791 9.791 0 0 0-3.239-2.293Zm-3.863 1.418V2v2.222Zm0 0v15.556c-4.216 0-7.636-3.484-7.636-7.778s3.42-7.777 7.636-7.778Z",clipRule:"evenodd"})}),s=i;g.exports=s},6604:(g,o,t)=>{const l=t(85893),i=d=>l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...d,children:l.jsx("path",{fill:"#32324D",d:"M16.39 2.17c.68.1 1.17.2 1.46.39.39.2.58.39.78.58.2.3.3.78.39 1.18l.78 3.5h1.95V1H2.84l-.59 6.83H4l.98-3.9a5 5 0 0 1 .39-.98c.2-.2.49-.39.88-.58.39-.1.88-.3 1.56-.3.58 0 1.36-.1 2.34-.1v8.78h-7.8v1.95h7.8v7.41c0 .2.1.3-.1.39-.2.1-.39.2-.88.2l-2.04.39-.1 1.36h9.94l-.1-1.36-2.04-.3c-.49 0-.69-.1-.78-.2-.2-.09-.1-.19-.1-.38V12.7h7.8v-1.95h-7.8V1.97c.98 0 1.85.1 2.44.2Z"})}),s=i;g.exports=s},94893:(g,o,t)=>{t.r(o),t.d(o,{FieldActionWrapper:()=>a,default:()=>m});var l=t(67294),i=t(20297),s=t(83534),d=t(42919),r=t(80633),u=t.n(r),c=t(6604),e=t.n(c),n=t(88972);function p(f){const y={\u0430:"a",\u0431:"b",\u0432:"v",\u0433:"g",\u0434:"d",\u0435:"e",\u0451:"yo",\u0436:"zh",\u0437:"z",\u0438:"i",\u0439:"y",\u043A:"k",\u043B:"l",\u043C:"m",\u043D:"n",\u043E:"o",\u043F:"p",\u0440:"r",\u0441:"s",\u0442:"t",\u0443:"u",\u0444:"f",\u0445:"kh",\u0446:"ts",\u0447:"ch",\u0448:"sh",\u0449:"sch",\u044A:"",\u044B:"y",\u044C:"",\u044D:"e",\u044E:"yu",\u044F:"ya",\u0456:"i",\u0457:"yi",\u0454:"ye",\u0491:"g",\u045E:"u",\u04D9:"a",\u0456:"i",\u04A3:"n",\u049B:"k",\u04BB:"h",\u04E9:"o",\u04B1:"u",\u04AF:"u",\u04B7:"j",\u0459:"lj",\u045A:"nj",\u045F:"dzh",\u0452:"dj",\u045B:"c",\u0458:"j",\u045E:"u",\u0455:"dz",\u0454:"ye",\u0457:"yi",\u045C:"kj",\u045E:"u",\u04C2:"zh",\u04E9:"o",\u04B1:"u",\u04A3:"n",\u04BB:"h",\u04B3:"h",\u04B7:"j",\u049B:"k",\u0493:"g",\u045E:"u",\u04B3:"h",\u04B7:"j",\u049B:"q",\u0493:"g",\u04E3:"i",\u04EF:"u",\u04B3:"h",\u0451:"yo",\u0452:"dj",\u0458:"j",\u045B:"ch",\u045C:"kj",\u0459:"lj",\u045A:"nj",\u045F:"dzh",\u0455:"dz",\u0401:"Yo",\u0406:"I"},b=new RegExp(Object.keys(y).join("|"),"g");return f.replace(b,function($){return y[$]||$})}const S=p,m=({name:f,value:y,intlLabel:b,attribute:$})=>{const x=new Date;let w=x.getFullYear(),T=("0"+(x.getMonth()+1)).slice(-2),j=("0"+x.getDate()).slice(-2),z=("0"+x.getHours()).slice(-2),B=("0"+x.getMinutes()).slice(-2),I=("0"+x.getSeconds()).slice(-2),v,A=`${w}-${T}-${j}-${z}-${B}-${I}`;$.options?.kw&&$.options?.kw,$.options?.pattern&&$.options?.pattern,$.options?.kw?v=M($.options?.kw)+"-"+A:v=A;const R=()=>{E({target:{name:f,value:v}})},{modifiedData:F,onChange:E}=(0,i.Wq)();let O,C;function M(P){return P=P.toLowerCase(),S(P).replace(/[^a-zA-Z0-9]/g," ").trim().replaceAll(/\s\s+/g," ").replaceAll(" ","-")}Number(F.id)&&($.options?.kw?O=M($.options?.kw)+"-"+F.id:O=F.id);const H=()=>{E({target:{name:f,value:O}})};F.title&&($.options?.kw?C=M($.options?.kw+"-"+F.title):C=M(F.title)),console.log("data_title",C);const D=async()=>{E({target:{name:f,value:C,type:"text"}})};y==null&&R(),$.options?.pattern=="title"?(0,l.useEffect)(()=>{F.title&&D()},[F.title]):$.options?.pattern=="id"&&(0,l.useEffect)(()=>{F.id&&H()},[F.id]);const L=()=>{E({target:{name:f,value:""}})};return l.createElement(d.Stack,{spacing:1},l.createElement(s.FieldLabel,null,b?.defaultMessage),l.createElement(s.FieldInput,{label:"slug",name:"slug",value:y||"",onChange:P=>E({target:{name:f,value:M(P.target.value)}}),endAction:l.createElement(d.Stack,{horizontal:!0,spacing:2},l.createElement(a,{onClick:()=>D(),label:"regenerate"},l.createElement(e(),null)),l.createElement(a,{onClick:()=>R()},l.createElement(u(),null)))}))},a=(0,n.default)(s.FieldAction)`
  svg {
    height: 1rem;
    width: 1rem;
    path {
      fill: ${({theme:f})=>f.colors.neutral400};
    }
  }
  svg:hover {
    path {
      fill: ${({theme:f})=>f.colors.primary600};
    }
  }
`}}]);
