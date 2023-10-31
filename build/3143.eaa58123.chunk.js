(self.webpackChunk_13_candles_cms=self.webpackChunk_13_candles_cms||[]).push([[3143],{98601:(M,v,n)=>{var e=n(57406);function o(p,s){return p==null?!0:e(p,s)}M.exports=o},20501:(M,v,n)=>{"use strict";n.d(v,{G:()=>l,Y:()=>f});var e=n(85893),o=n(67294),p=n(88972),s=n(66362),d=n(96987);const l=(0,p.default)(d.k)`
  > svg {
    height: ${({theme:c})=>c.spaces[3]};
    width: ${({theme:c})=>c.spaces[3]};

    > g,
    path {
      fill: ${({theme:c})=>c.colors.neutral0};
    }
  }

  &[aria-disabled='true'] {
    pointer-events: none;
  }

  ${s.BF}
`,f=o.forwardRef(({disabled:c,children:x,background:i="neutral0",...g},D)=>(0,e.jsx)(l,{ref:D,"aria-disabled":c,as:"button",type:"button",disabled:c,padding:2,hasRadius:!0,background:i,borderColor:"neutral200",cursor:"pointer",...g,children:x}));f.displayName="BaseButton"},66362:(M,v,n)=>{"use strict";n.d(v,{BF:()=>s,k3:()=>p});var e=n(88972);const o=d=>({theme:l,size:f})=>l.sizes[d][f],p=(d="&")=>({theme:l,hasError:f=!1})=>(0,e.css)`
    outline: none;
    box-shadow: 0;
    transition-property: border-color, box-shadow, fill;
    transition-duration: 0.2s;

    ${d}:focus-within {
      border: 1px solid ${f?l.colors.danger600:l.colors.primary600};
      box-shadow: ${f?l.colors.danger600:l.colors.primary600} 0px 0px 0px 2px;
    }
  `,s=({theme:d})=>(0,e.css)`
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
      border: 2px solid ${d.colors.primary600};
    }
  }
`},66712:(M,v,n)=>{"use strict";n.d(v,{m:()=>x});var e=n(85893),o=n(88972),p=n(33368),s=n(16607);const d=(0,o.default)(s.x)`
  display: grid;
  grid-template-columns: repeat(${({gridCols:i})=>i}, 1fr);
  ${({theme:i,gap:g})=>(0,p.Z)("gap",g,i)}
`,l=i=>{const{gap:g="0",gridCols:D=12,...u}=i;return(0,e.jsx)(d,{gap:g,gridCols:D,...u})},f=`${232/16}rem`,c=(0,o.default)(l)`
  width: ${f};
  background: ${({theme:i})=>i.colors.neutral100};
  position: sticky;
  top: 0;
  height: 100vh;
  overflow-y: auto;
  border-right: 1px solid ${({theme:i})=>i.colors.neutral200};
  z-index: 1;
`,x=({ariaLabel:i,...g})=>(0,e.jsx)(c,{"aria-label":i,as:"nav",...g})},5330:(M,v,n)=>{"use strict";n.d(v,{p:()=>fr});var e=n(85893),o=n(67294),p=n(63216),s=n(88972);const d={DOWN:"ArrowDown",UP:"ArrowUp",RIGHT:"ArrowRight",LEFT:"ArrowLeft",ESCAPE:"Escape",ENTER:"Enter",SPACE:" ",TAB:"Tab",END:"End",HOME:"Home",DELETE:"Delete",PAGE_UP:"PageUp",PAGE_DOWN:"PageDown",BACKSPACE:"Backspace",CLEAR:"Clear"};var l=n(92058);const f=r=>{const t=(0,o.useRef)();return(0,o.useEffect)(()=>{t.current=r}),t.current};var c=n(26910),x=n(16607);const i=r=>(0,e.jsx)("form",{...r,role:"search"});var g=n(54912);function D(r,t){typeof r=="function"?r(t):r!=null&&(r.current=t)}function u(...r){return t=>r.forEach(a=>D(a,t))}function I(...r){return React.useCallback(u(...r),r)}var m=n(66362);const P=(0,o.createContext)({id:"",required:!1}),B=()=>(0,o.useContext)(P);var j=n(96987);const S={S:6.5,M:10.5},k=(0,o.forwardRef)(({endAction:r,startAction:t,disabled:a=!1,onChange:h,size:R="M",...C},$)=>{const{id:E,error:y,hint:b,name:T,required:L}=B();let O;y?O=`${E}-error`:b&&(O=`${E}-hint`);const A=Boolean(y),W=N=>{!a&&h&&h(N)};return(0,e.jsxs)(_,{justifyContent:"space-between",hasError:A,disabled:a,children:[t?(0,e.jsx)(x.x,{paddingLeft:3,paddingRight:2,children:t}):null,(0,e.jsx)(Z,{id:E,name:T,ref:$,"aria-describedby":O,"aria-invalid":A,"aria-disabled":a,disabled:a,"data-disabled":a?"":void 0,hasLeftAction:Boolean(t),hasRightAction:Boolean(r),onChange:W,"aria-required":L,$size:R,...C}),r?(0,e.jsx)(x.x,{paddingLeft:2,paddingRight:3,children:r}):null]})}),Z=s.default.input`
  border: none;
  border-radius: ${({theme:r})=>r.borderRadius};
  padding-bottom: ${({$size:r})=>`${S[r]/16}rem`};
  padding-left: ${({theme:r,hasLeftAction:t})=>t?0:r.spaces[4]};
  padding-right: ${({theme:r,hasRightAction:t})=>t?0:r.spaces[4]};
  padding-top: ${({$size:r})=>`${S[r]/16}rem`};
  cursor: ${r=>r["aria-disabled"]?"not-allowed":void 0};

  color: ${({theme:r})=>r.colors.neutral800};
  font-weight: 400;
  font-size: ${r=>r.theme.fontSizes[2]};
  display: block;
  width: 100%;
  background: inherit;

  ::placeholder {
    color: ${({theme:r})=>r.colors.neutral500};
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
`,_=(0,s.default)(j.k)`
  border: 1px solid ${({theme:r,hasError:t})=>t?r.colors.danger600:r.colors.neutral200};
  border-radius: ${({theme:r})=>r.borderRadius};
  background: ${({theme:r})=>r.colors.neutral0};
  ${(0,m.k3)()}

  ${({theme:r,disabled:t})=>t?(0,s.css)`
          color: ${r.colors.neutral600};
          background: ${r.colors.neutral150};
        `:void 0}
`;var U=n(22304);const w=(0,s.default)(j.k)`
  font-size: 1.6rem;
  padding: 0;
`,z=(0,o.forwardRef)(({label:r,children:t,...a},h)=>(0,e.jsxs)(w,{justifyContent:"unset",background:"transparent",borderStyle:"none",type:"button",...a,as:"button",ref:h,children:[(0,e.jsx)(U.T,{as:"span",children:r}),(0,o.cloneElement)(t,{"aria-hidden":!0,focusable:!1})]})),X=(0,o.forwardRef)(({children:r,name:t,error:a,hint:h,id:R,required:C=!1,...$},E)=>{const y=(0,l.M)(R),b=(0,o.useMemo)(()=>({name:t,id:y,error:a,hint:h,required:C}),[a,y,h,t,C]);return(0,e.jsx)(x.x,{ref:E,...$,children:(0,e.jsx)(P.Provider,{value:b,children:r})})}),J="[@strapi/design-system]:",Q=r=>{const t=r;let a=!1;if(typeof t!="function")throw new TypeError(`${J} once requires a function parameter`);return(...h)=>{a||(t(...h),a=!0)}};var G=n(10574);const q=Q(console.warn),rr=(0,o.forwardRef)(({children:r,action:t,required:a,...h},R)=>{const{id:C,required:$}=B(),E=$||a;return a!==void 0&&q('Deprecation warning: Usage of "required" prop in FieldLabel component is deprecated. This is discouraged and will be removed in the next major release. Please use the Field component to share the required prop.'),(0,e.jsxs)(er,{ref:R,variant:"pi",textColor:"neutral800",htmlFor:C,fontWeight:"bold",as:"label",...h,children:[r,E&&(0,e.jsx)(nr,{textColor:"danger600",children:"*"}),t&&(0,e.jsx)(tr,{marginLeft:1,children:t})]})}),er=(0,s.default)(G.Z)`
  display: flex;
  align-items: center;
`,nr=(0,s.default)(G.Z)`
  line-height: 0;
`,tr=(0,s.default)(j.k)`
  line-height: 0;

  svg path {
    fill: ${({theme:r})=>r.colors.neutral500};
  }
`,or=(0,s.default)(g.Z)`
  font-size: 0.5rem;
  path {
    fill: ${({theme:r})=>r.colors.neutral400};
  }
`,V=(0,s.default)(p.Z)`
  font-size: 0.8rem;
  path {
    fill: ${({theme:r})=>r.colors.neutral800};
  }
`,sr=s.default.div`
  border-radius: ${({theme:r})=>r.borderRadius};
  box-shadow: ${({theme:r})=>r.shadows.filterShadow};

  &:focus-within {
    ${V} {
      path {
        fill: ${({theme:r})=>r.colors.primary600};
      }
    }
  }

  ${_} {
    border: 1px solid transparent;
  }

  ${(0,m.k3)(_)}
`,ar=(0,o.forwardRef)(({name:r,size:t="M",children:a,value:h="",onClear:R,clearLabel:C,...$},E)=>{const y=(0,o.useRef)(null),b=h.length>0,T=O=>{R(O),y.current.focus()},L=u(E,y);return(0,e.jsx)(sr,{children:(0,e.jsxs)(X,{name:r,children:[(0,e.jsx)(U.T,{children:(0,e.jsx)(rr,{children:a})}),(0,e.jsx)(k,{ref:L,value:h,startAction:(0,e.jsx)(V,{"aria-hidden":!0}),size:t,endAction:b?(0,e.jsx)(z,{label:C,onClick:T,children:(0,e.jsx)(or,{})}):void 0,...$})]})})});var lr=n(79838),ir=n(20501);const dr="tertiary",K="secondary",cr=["S","M","L"],ur=[dr,K],pr=o.forwardRef(({label:r,background:t,borderWidth:a,noBorder:h=!1,children:R,icon:C,disabled:$=!1,onClick:E,size:y=cr[0],"aria-label":b,variant:T=ur[0],...L},O)=>{const A=N=>{!$&&E&&E(N)},W=(0,e.jsxs)(H,{"aria-disabled":$,background:$?"neutral150":t,borderWidth:h?0:a,justifyContent:"center",...L,ref:O,size:y,onClick:A,variant:T,children:[(0,e.jsx)(U.T,{as:"span",children:r??b}),o.cloneElement(C||R,{"aria-hidden":!0,focusable:!1})]});return r?(0,e.jsx)(lr.u,{label:r,children:W}):W}),H=(0,s.default)(ir.Y)`
  background-color: ${({theme:r,variant:t})=>{if(t===K)return r.colors.primary100}};
  border-color: ${({theme:r,variant:t})=>t===K?r.colors.primary200:r.colors.neutral200};
  height: ${({theme:r,size:t})=>r.sizes.button[t]};
  width: ${({theme:r,size:t})=>r.sizes.button[t]};

  svg {
    g,
    path {
      fill: ${({theme:r,variant:t})=>t===K?r.colors.primary500:r.colors.neutral500};
    }
  }

  :hover,
  :focus {
    svg {
      g,
      path {
        fill: ${({theme:r,variant:t})=>t===K?r.colors.primary600:r.colors.neutral600};
      }
    }
  }

  &[aria-disabled='true'] {
    svg {
      path {
        fill: ${({theme:r})=>r.colors.neutral600};
      }
    }
  }
`,vr=(0,s.default)(j.k)`
  & span:first-child button {
    border-left: 1px solid ${({theme:r})=>r.colors.neutral200};
    border-radius: ${({theme:r})=>`${r.borderRadius} 0 0 ${r.borderRadius}`};
  }

  & span:last-child button {
    border-radius: ${({theme:r})=>`0 ${r.borderRadius} ${r.borderRadius} 0`};
  }

  & ${H} {
    border-radius: 0;
    border-left: none;

    svg {
      path {
        fill: ${({theme:r})=>r.colors.neutral700};
      }
    }

    &:hover {
      background-color: ${({theme:r})=>r.colors.neutral100};

      svg {
        path {
          fill: ${({theme:r})=>r.colors.neutral800};
        }
      }
    }

    &:active {
      background-color: ${({theme:r})=>r.colors.neutral150};
      svg {
        path {
          fill: ${({theme:r})=>r.colors.neutral900};
        }
      }
    }

    &[aria-disabled='true'] {
      svg {
        path {
          fill: ${({theme:r})=>r.colors.neutral600};
        }
      }
    }
  }
`,Y=(0,s.default)(c.i)`
  width: ${24/16}rem;
  background-color: ${({theme:r})=>r.colors.neutral200};
`,fr=({as:r="h2",label:t,searchLabel:a="",searchable:h=!1,onChange:R=()=>{},value:C="",onClear:$=()=>{},onSubmit:E=()=>{},id:y})=>{const[b,T]=(0,o.useState)(!1),L=f(b),O=(0,l.M)(y),A=(0,o.useRef)(void 0),W=(0,o.useRef)(void 0);(0,o.useEffect)(()=>{b&&A.current&&A.current.focus(),L&&!b&&W.current&&W.current.focus()},[b,L]);const N=()=>{T(F=>!F)},hr=F=>{$(F),A.current.focus()},xr=F=>{F.relatedTarget?.id!==O&&T(!1)},gr=F=>{F.key===d.ESCAPE&&T(!1)};return b?(0,e.jsxs)(x.x,{paddingLeft:4,paddingTop:5,paddingBottom:2,paddingRight:4,children:[(0,e.jsx)(i,{children:(0,e.jsx)(ar,{name:"searchbar",value:C,onChange:R,placeholder:"e.g: strapi-plugin-abcd",onKeyDown:gr,ref:A,onBlur:xr,onClear:hr,onSubmit:E,clearLabel:"Clear",size:"S",children:a})}),(0,e.jsx)(x.x,{paddingLeft:2,paddingTop:4,children:(0,e.jsx)(Y,{})})]}):(0,e.jsxs)(x.x,{paddingLeft:6,paddingTop:6,paddingBottom:2,paddingRight:4,children:[(0,e.jsxs)(j.k,{justifyContent:"space-between",alignItems:"flex-start",children:[(0,e.jsx)(G.Z,{variant:"beta",as:r,children:t}),h&&(0,e.jsx)(pr,{ref:W,onClick:N,label:a,icon:(0,e.jsx)(p.Z,{})})]}),(0,e.jsx)(x.x,{paddingTop:4,children:(0,e.jsx)(Y,{})})]})}},36636:(M,v,n)=>{"use strict";n.d(v,{E:()=>D});var e=n(85893),o=n(67294),p=n(69004),s=n(88972),d=n(16607),l=n(10574),f=n(96987),c=n(53342);const x=(0,s.default)(d.x)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  color: ${({theme:u})=>u.colors.neutral800};
  svg > * {
    fill: ${({theme:u})=>u.colors.neutral600};
  }

  &.active {
    ${({theme:u})=>`
      background-color: ${u.colors.primary100};
      border-right: 2px solid ${u.colors.primary600};
      svg > * {
        fill: ${u.colors.primary700};
      }
      ${l.Z} {
        color: ${u.colors.primary700};
        font-weight: 500;
      }
      `}
  }

  &:focus-visible {
    outline-offset: -2px;
  }
`,i=(0,s.default)(p.Z)`
  width: ${12/16}rem;
  height: ${4/16}rem;
  * {
    fill: ${({theme:u,$active:I})=>I?u.colors.primary600:u.colors.neutral600};
  }
`,g=s.default.div`
  svg {
    height: ${12/16}rem;
    width: ${12/16}rem;
  }
`,D=o.forwardRef(({children:u,icon:I=null,withBullet:m=!1,as:P=c.f,isSubSectionChild:B=!1,...j},S)=>(0,e.jsxs)(x,{as:P,icon:I,background:"neutral100",paddingLeft:B?9:7,paddingBottom:2,paddingTop:2,ref:S,...j,children:[(0,e.jsxs)(f.k,{children:[I?(0,e.jsx)(g,{children:I}):(0,e.jsx)(i,{}),(0,e.jsx)(d.x,{paddingLeft:2,children:(0,e.jsx)(l.Z,{as:"span",children:u})})]}),m&&(0,e.jsx)(d.x,{as:f.k,paddingRight:4,children:(0,e.jsx)(i,{$active:!0})})]}))},21660:(M,v,n)=>{"use strict";n.d(v,{D:()=>I});var e=n(85893),o=n(67294),p=n(88972),s=n(97407),d=n(96987),l=n(16607),f=n(10574);const c=(0,p.default)(d.k)`
  border: none;
  padding: 0;
  background: transparent;
`,x=p.default.div`
  display: flex;
  align-items: center;
  transform: rotateX(${({rotated:m})=>m?"0deg":"180deg"});
`,i=({collapsable:m=!1,label:P,onClick:B=()=>{},ariaExpanded:j,ariaControls:S})=>m?(0,e.jsxs)(c,{as:"button",onClick:B,"aria-expanded":j,"aria-controls":S,textAlign:"left",children:[(0,e.jsx)(l.x,{paddingRight:1,children:(0,e.jsx)(f.Z,{variant:"sigma",textColor:"neutral600",children:P})}),m&&(0,e.jsx)(x,{rotated:j,children:(0,e.jsx)(s.Z,{"aria-hidden":!0})})]}):(0,e.jsx)(c,{children:(0,e.jsx)(l.x,{paddingRight:1,children:(0,e.jsx)(f.Z,{variant:"sigma",textColor:"neutral600",children:P})})});var g=n(92058),D=n(18787);const u=(0,p.default)(l.x)`
  svg {
    height: ${4/16}rem;
    path {
      fill: ${({theme:m})=>m.colors.neutral500};
    }
  }
`,I=({collapsable:m=!1,label:P,badgeLabel:B,children:j,id:S})=>{const[k,Z]=(0,o.useState)(!0),_=(0,g.M)(S),U=()=>{Z(w=>!w)};return(0,e.jsxs)(d.k,{direction:"column",alignItems:"stretch",gap:1,children:[(0,e.jsx)(u,{paddingLeft:6,paddingTop:2,paddingBottom:2,paddingRight:4,children:(0,e.jsxs)(l.x,{position:"relative",paddingRight:B?6:0,children:[(0,e.jsx)(i,{onClick:U,ariaExpanded:k,ariaControls:_,collapsable:m,label:P}),B&&(0,e.jsx)(D.C,{backgroundColor:"neutral150",textColor:"neutral600",position:"absolute",right:0,top:"50%",transform:"translateY(-50%)",children:B})]})}),(!m||k)&&(0,e.jsx)("ol",{id:_,children:o.Children.map(j,(w,z)=>(0,e.jsx)("li",{children:w},z))})]})}},61499:(M,v,n)=>{"use strict";n.d(v,{Z:()=>d});var e=n(85893),o=n(67294),p=n(16607),s=n(96987);const d=({children:l,spacing:f=2,horizontal:c=!1,...x})=>(0,e.jsx)(p.x,{paddingTop:2,paddingBottom:4,children:(0,e.jsx)(s.k,{as:"ol",gap:f,direction:c?"row":"column",alignItems:c?"center":"stretch",...x,children:o.Children.map(l,(i,g)=>(0,e.jsx)("li",{children:i},g))})})}}]);
