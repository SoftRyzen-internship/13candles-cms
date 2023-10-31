(self.webpackChunk_13_candles_cms=self.webpackChunk_13_candles_cms||[]).push([[7146],{51584:(_,d,r)=>{var o=r(44239),e=r(37005),n="[object Boolean]";function c(p){return p===!0||p===!1||e(p)&&o(p)==n}_.exports=c},7654:(_,d,r)=>{var o=r(81763);function e(n){return o(n)&&n!=+n}_.exports=e},81763:(_,d,r)=>{var o=r(44239),e=r(37005),n="[object Number]";function c(p){return typeof p=="number"||e(p)&&o(p)==n}_.exports=c},48855:(_,d,r)=>{"use strict";r.d(d,{U:()=>y,y:()=>u});var o=r(85893),e=r(67294),n=r(88972),c=r(32574),p=r(97718),i=r(50922),b=r(61697),t=r(97554);const s=({theme:g,expanded:a,variant:f,disabled:m,error:$})=>$?`1px solid ${g.colors.danger600} !important`:m?`1px solid ${g.colors.neutral150}`:a?`1px solid ${g.colors.primary600}`:f==="primary"?`1px solid ${g.colors.neutral0}`:`1px solid ${g.colors.neutral100}`,u=(0,n.default)(i.Z)``,x=(0,n.default)(t.x)`
  border: ${s};

  &:hover:not([aria-disabled='true']) {
    border: 1px solid ${({theme:g})=>g.colors.primary600};

    ${u} {
      color: ${({theme:g,expanded:a})=>a?void 0:g.colors.primary700};
    }

    ${i.Z} {
      color: ${({theme:g,expanded:a})=>a?void 0:g.colors.primary600};
    }

    & > ${b.k} {
      background: ${({theme:g})=>g.colors.primary100};
    }

    [data-strapi-dropdown='true'] {
      background: ${({theme:g})=>g.colors.primary200};
    }
  }
`,y=({children:g,disabled:a=!1,error:f,expanded:m=!1,hasErrorMessage:$=!0,id:C,onToggle:v,toggle:T,size:O="M",variant:E="primary",shadow:P})=>{const j=(0,p.M)(C),R=e.useMemo(()=>({expanded:m,onToggle:v,toggle:T,id:j,size:O,variant:E,disabled:a}),[a,m,j,v,O,T,E]);return(0,o.jsxs)(c.S.Provider,{value:R,children:[(0,o.jsx)(x,{"data-strapi-expanded":m,disabled:a,"aria-disabled":a,expanded:m,hasRadius:!0,variant:E,error:f,shadow:P,children:g}),f&&$&&(0,o.jsx)(t.x,{paddingTop:1,children:(0,o.jsx)(i.Z,{variant:"pi",textColor:"danger600",children:f})})]})}},74579:(_,d,r)=>{"use strict";r.d(d,{v:()=>c});var o=r(85893),e=r(32574),n=r(97554);const c=({children:p,...i})=>{const{expanded:b,id:t}=(0,e.A)();if(!b)return null;const s=`accordion-content-${t}`,u=`accordion-label-${t}`,x=`accordion-desc-${t}`;return(0,o.jsx)(n.x,{role:"region",id:s,"aria-labelledby":u,"aria-describedby":x,...i,children:p})}},32574:(_,d,r)=>{"use strict";r.d(d,{A:()=>n,S:()=>e});var o=r(67294);const e=(0,o.createContext)({disabled:!1,expanded:!1,id:"",size:"M",variant:"primary"}),n=()=>(0,o.useContext)(e)},69983:(_,d,r)=>{"use strict";r.d(d,{B:()=>g});var o=r(85893),e=r(97407),n=r(88972),c=r(48855),p=r(32574);const i=({expanded:a,disabled:f,variant:m})=>{let $="neutral100";return a?$="primary100":f?$="neutral150":m==="primary"&&($="neutral0"),$};var b=r(86990),t=r(502),s=r(61697),u=r(50922);const x=(0,n.default)(b.A)`
  text-align: left;

  // necessary to make the ellipsis prop work on the title
  > span {
    max-width: 100%;
  }

  svg {
    width: ${14/16}rem;
    height: ${14/16}rem;

    path {
      fill: ${({theme:a,expanded:f})=>f?a.colors.primary600:a.colors.neutral500};
    }
  }
`,y=(0,n.default)(s.k)`
  min-height: ${({theme:a,size:f})=>a.sizes.accordions[f]};
  border-radius: ${({theme:a,expanded:f})=>f?`${a.borderRadius} ${a.borderRadius} 0 0`:a.borderRadius};

  &:hover {
    svg {
      path {
        fill: ${({theme:a})=>a.colors.primary600};
      }
    }
  }
`,g=({title:a,description:f,as:m="span",togglePosition:$="right",action:C,...v})=>{const{onToggle:T,toggle:O,expanded:E,id:P,size:j,variant:R,disabled:D}=(0,p.A)(),K=`accordion-content-${P}`,L=`accordion-label-${P}`,G=`accordion-desc-${P}`,A=j==="M"?6:4,I=j==="M"?A:A-2,N=i({expanded:E,disabled:D,variant:R}),V={as:m,fontWeight:j==="S"?"bold":void 0,id:L,textColor:E?"primary600":"neutral700",ellipsis:!0,variant:j==="M"?"delta":void 0},F=E?"primary600":"neutral600",H=E?"primary200":"neutral200",w=j==="M"?`${32/16}rem`:`${24/16}rem`,Z=()=>{D||(O&&!T?(console.warn('Deprecation warning: Usage of "toggle" prop in Accordion component is deprecated. This is discouraged and will be removed in the next major release. Please use "onToggle" instead'),O()):T&&T())},S=(0,o.jsx)(s.k,{justifyContent:"center",borderRadius:"50%",height:w,width:w,transform:E?"rotate(180deg)":void 0,"data-strapi-dropdown":!0,"aria-hidden":!0,as:"span",background:H,cursor:D?"not-allowed":"pointer",onClick:Z,shrink:0,children:(0,o.jsx)(t.J,{as:e.Z,width:j==="M"?`${11/16}rem`:`${8/16}rem`,color:E?"primary600":"neutral600"})});return(0,o.jsx)(y,{paddingBottom:I,paddingLeft:A,paddingRight:A,paddingTop:I,background:N,expanded:E,size:j,justifyContent:"space-between",cursor:D?"not-allowed":"",children:(0,o.jsxs)(s.k,{gap:3,flex:1,maxWidth:"100%",children:[$==="left"&&S,(0,o.jsx)(x,{onClick:Z,"aria-disabled":D,"aria-expanded":E,"aria-controls":K,"aria-labelledby":L,"data-strapi-accordion-toggle":!0,expanded:E,type:"button",flex:1,minWidth:0,...v,children:(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(c.y,{...V,children:a}),f&&(0,o.jsx)(u.Z,{as:"p",id:G,textColor:F,children:f})]})}),$==="right"&&(0,o.jsxs)(s.k,{gap:3,children:[S,C]}),$==="left"&&C]})})}},87370:(_,d,r)=>{"use strict";r.d(d,{Z:()=>n});var o=r(85893);const e=c=>(0,o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...c,children:(0,o.jsx)("path",{fill:"#212134",d:"M24 13.3a.2.2 0 0 1-.2.2H5.74l8.239 8.239a.2.2 0 0 1 0 .282L12.14 23.86a.2.2 0 0 1-.282 0L.14 12.14a.2.2 0 0 1 0-.282L11.86.14a.2.2 0 0 1 .282 0L13.98 1.98a.2.2 0 0 1 0 .282L5.74 10.5H23.8c.11 0 .2.09.2.2v2.6Z"})}),n=e},75070:(_,d,r)=>{"use strict";r.d(d,{Z:()=>n});var o=r(85893);const e=c=>(0,o.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...c,children:[(0,o.jsx)("path",{fill:"#212134",d:"M16.563 5.587a2.503 2.503 0 1 0 0-5.007 2.503 2.503 0 0 0 0 5.007Z"}),(0,o.jsx)("path",{fill:"#212134",d:"M18.487 3.083c-.012.788-.487 1.513-1.229 1.797a1.954 1.954 0 0 1-2.184-.574A1.943 1.943 0 0 1 14.9 2.11c.4-.684 1.2-1.066 1.981-.927a1.954 1.954 0 0 1 1.606 1.9c.011.748 1.17.748 1.158 0A3.138 3.138 0 0 0 17.565.17c-1.176-.423-2.567-.03-3.36.933-.83 1.002-.968 2.45-.284 3.575.678 1.124 1.993 1.674 3.273 1.431 1.432-.272 2.428-1.593 2.451-3.019.012-.753-1.147-.753-1.158-.006ZM16.563 14.372a2.503 2.503 0 1 0 0-5.007 2.503 2.503 0 0 0 0 5.007Z"}),(0,o.jsx)("path",{fill:"#212134",d:"M18.487 11.867c-.012.789-.487 1.513-1.229 1.797a1.954 1.954 0 0 1-2.184-.574 1.943 1.943 0 0 1-.174-2.196c.4-.684 1.2-1.066 1.981-.927.928.156 1.588.968 1.606 1.9.011.748 1.17.748 1.158 0a3.138 3.138 0 0 0-2.08-2.914c-1.176-.423-2.567-.029-3.36.933-.83 1.002-.968 2.45-.284 3.575.678 1.124 1.993 1.675 3.273 1.431 1.432-.272 2.428-1.593 2.451-3.019.012-.753-1.147-.753-1.158-.005ZM16.563 23.392a2.503 2.503 0 1 0 0-5.006 2.503 2.503 0 0 0 0 5.006Z"}),(0,o.jsx)("path",{fill:"#212134",d:"M18.487 20.89c-.012.787-.487 1.512-1.229 1.796a1.954 1.954 0 0 1-2.184-.574 1.943 1.943 0 0 1-.174-2.196c.4-.684 1.2-1.066 1.981-.927.928.156 1.588.967 1.606 1.9.011.748 1.17.748 1.158 0a3.138 3.138 0 0 0-2.08-2.914c-1.176-.423-2.567-.03-3.36.933-.83 1.002-.968 2.45-.284 3.575.678 1.124 1.993 1.674 3.273 1.431 1.432-.272 2.428-1.593 2.451-3.019.012-.753-1.147-.753-1.158-.006ZM7.378 5.622a2.503 2.503 0 1 0 0-5.007 2.503 2.503 0 0 0 0 5.007Z"}),(0,o.jsx)("path",{fill:"#212134",d:"M9.302 3.119c-.011.788-.486 1.512-1.228 1.796a1.954 1.954 0 0 1-2.185-.574 1.943 1.943 0 0 1-.173-2.196c.4-.684 1.199-1.066 1.981-.927a1.943 1.943 0 0 1 1.605 1.9c.012.748 1.17.748 1.16 0A3.138 3.138 0 0 0 8.38.205c-1.176-.423-2.567-.029-3.36.933-.83 1.002-.968 2.45-.285 3.575.678 1.124 1.994 1.675 3.274 1.431 1.431-.272 2.428-1.593 2.451-3.019.012-.753-1.147-.753-1.159-.005ZM7.378 14.406a2.503 2.503 0 1 0 0-5.006 2.503 2.503 0 0 0 0 5.006Z"}),(0,o.jsx)("path",{fill:"#212134",d:"M9.302 11.902c-.011.788-.486 1.513-1.228 1.797a1.954 1.954 0 0 1-2.185-.574 1.943 1.943 0 0 1-.173-2.196c.4-.684 1.199-1.066 1.981-.927a1.943 1.943 0 0 1 1.605 1.9c.012.748 1.17.748 1.16 0A3.138 3.138 0 0 0 8.38 8.988c-1.176-.423-2.567-.03-3.36.933-.83 1.002-.968 2.45-.285 3.575.678 1.124 1.994 1.674 3.274 1.431 1.431-.272 2.428-1.593 2.451-3.019.012-.753-1.147-.753-1.159-.006ZM7.378 23.427a2.503 2.503 0 1 0 0-5.007 2.503 2.503 0 0 0 0 5.007Z"}),(0,o.jsx)("path",{fill:"#212134",d:"M9.302 20.924c-.011.788-.486 1.513-1.228 1.797a1.954 1.954 0 0 1-2.185-.574 1.943 1.943 0 0 1-.173-2.196c.4-.684 1.199-1.066 1.981-.927.933.156 1.594.967 1.605 1.9.012.748 1.17.748 1.16 0A3.139 3.139 0 0 0 8.38 18.01c-1.176-.423-2.567-.03-3.36.933-.83 1.002-.968 2.45-.285 3.569.678 1.124 1.994 1.675 3.274 1.431 1.431-.272 2.428-1.593 2.451-3.019.012-.747-1.147-.747-1.159 0Z"})]}),n=e},78273:(_,d,r)=>{"use strict";r.d(d,{Z:()=>n});var o=r(85893);const e=c=>(0,o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...c,children:(0,o.jsx)("path",{fill:"#32324D",d:"M3.5 14.6a2.6 2.6 0 1 0 0-5.2 2.6 2.6 0 0 0 0 5.2Zm8.5 0a2.6 2.6 0 1 0 0-5.2 2.6 2.6 0 0 0 0 5.2Zm8.5 0a2.6 2.6 0 1 0 0-5.2 2.6 2.6 0 0 0 0 5.2Z"})}),n=e},30065:(_,d,r)=>{"use strict";r.d(d,{Z:()=>n});var o=r(85893);const e=c=>(0,o.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...c,children:[(0,o.jsx)("circle",{cx:12,cy:12,r:12,fill:"#212134"}),(0,o.jsx)("path",{fill:"#F6F6F9",d:"M17 12.569c0 .124-.1.224-.225.224h-3.981v3.982c0 .124-.101.225-.226.225h-1.136a.225.225 0 0 1-.226-.225v-3.981H7.226A.225.225 0 0 1 7 12.567v-1.136c0-.125.1-.226.225-.226h3.982V7.226c0-.124.1-.225.224-.225h1.138c.124 0 .224.1.224.225v3.982h3.982c.124 0 .225.1.225.224v1.138Z"})]}),n=e},4071:(_,d,r)=>{"use strict";r.d(d,{G$:()=>e,Gt:()=>x,MG:()=>o,MR:()=>b,T:()=>i,TP:()=>n,Vb:()=>p,Vv:()=>s,ZC:()=>u,gK:()=>c,wG:()=>t});const o="success-light",e="danger-light",n="default",c="tertiary",p="secondary",i="danger",b="success",t="ghost",s=[o,e],u=[n,c,p,i,b,t,...s],x=["S","M","L"]},62485:(_,d,r)=>{"use strict";r.d(d,{PD:()=>b,sg:()=>c,tB:()=>i,yP:()=>p});var o=r(4071),e=r(10574);const n=t=>t===o.MG||t===o.G$?`${t.substring(0,t.lastIndexOf("-"))}`:t===o.gK?"neutral":t===o.TP||t===o.Vb||o.ZC.every(s=>s!==t)?"primary":`${t}`,c=({theme:t})=>`
    border: 1px solid ${t.colors.neutral200};
    background: ${t.colors.neutral150};
    ${e.Z} {
      color: ${t.colors.neutral600};
    }
    svg {
      > g, path {
        fill: ${t.colors.neutral600};
      }
    }
  `,p=({theme:t,variant:s})=>[...o.Vv,o.Vb].includes(s)?`
      background-color: ${t.colors.neutral0};
    `:s===o.gK?`
      background-color: ${t.colors.neutral100};
    `:s===o.wG?`
      background-color: ${t.colors.neutral100};
    `:s===o.TP?`
      border: 1px solid ${t.colors.buttonPrimary500};
      background: ${t.colors.buttonPrimary500};
    `:`
    border: 1px solid ${t.colors[`${n(s)}500`]};
    background: ${t.colors[`${n(s)}500`]};
  `,i=({theme:t,variant:s})=>[...o.Vv,o.Vb].includes(s)?`
      background-color: ${t.colors.neutral0};
      border: 1px solid ${t.colors[`${n(s)}600`]};
      ${e.Z} {
        color: ${t.colors[`${n(s)}600`]};
      }
      svg {
        > g, path {
          fill: ${t.colors[`${n(s)}600`]};
        }
      }
    `:s===o.gK?`
      background-color: ${t.colors.neutral150};
    `:`
    border: 1px solid ${t.colors[`${n(s)}600`]};
    background: ${t.colors[`${n(s)}600`]};
  `,b=({theme:t,variant:s})=>{switch(s){case o.G$:case o.MG:case o.Vb:return`
          border: 1px solid ${t.colors[`${n(s)}200`]};
          background: ${t.colors[`${n(s)}100`]};
          ${e.Z} {
            color: ${t.colors[`${n(s)}700`]};
          }
          svg {
            > g, path {
              fill: ${t.colors[`${n(s)}700`]};
            }
          }
        `;case o.gK:return`
          border: 1px solid ${t.colors.neutral200};
          background: ${t.colors.neutral0};
          ${e.Z} {
            color: ${t.colors.neutral800};
          }
          svg {
            > g, path {
              fill: ${t.colors.neutral800};
            }
          }
        `;case o.wG:return`
        border: 1px solid transparent;
        background: transparent;

        ${e.Z} {
          color: ${t.colors.neutral800};
        }

        svg {
          > g, path {
            fill: ${t.colors.neutral500};
          }
        }
      `;case o.MR:case o.T:return`
          border: 1px solid ${t.colors[`${n(s)}600`]};
          background: ${t.colors[`${n(s)}600`]};
          ${e.Z} {
            color: ${t.colors.neutral0};
          }
        `;default:return`
          svg {
            > g, path {
              fill: ${t.colors.buttonNeutral0};
            }
          }
        `}}},29430:(_,d,r)=>{"use strict";r.d(d,{r:()=>s});var o=r(85893),e=r(67294),n=r(59019),c=r(88972),p=r(66362),i=r(53342),b=r(10574);const t=(0,c.default)(i.f)`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  gap: ${({theme:u})=>u.spaces[2]};
  pointer-events: ${({disabled:u})=>u?"none":void 0};

  svg {
    font-size: ${10/16}rem;

    path {
      fill: ${({disabled:u,theme:x})=>u?x.colors.neutral600:x.colors.primary600};
    }
  }

  &:hover {
    color: ${({theme:u})=>u.colors.primary500};
  }

  &:active {
    color: ${({theme:u})=>u.colors.primary700};
  }

  ${p.BF};
`,s=e.forwardRef(({children:u,href:x,disabled:y=!1,startIcon:g,endIcon:a,isExternal:f=!0,...m},$)=>(0,o.jsxs)(t,{ref:$,href:x,disabled:y,isExternal:f,...m,children:[g,(0,o.jsx)(b.Z,{textColor:y?"neutral600":"primary600",children:u}),a,x&&!a&&f&&(0,o.jsx)(n.Z,{})]}));s.displayName="Link"},53363:(_,d,r)=>{"use strict";r.d(d,{VY:()=>w,ck:()=>Z,__:()=>S,fC:()=>F,tu:()=>oo,rl:()=>Q,fF:()=>q,xz:()=>H});var o=r(85893),e=r(67294),n=r(66466),c=r(97407),p=r(88743),i=r(88972),b=r(79581),t=r(29430),s=r(65326),u=r(4071),x=r(62485),y=r(20501),g=r(16607),a=r(10574),f=r(96987);const m=(0,i.keyframes)`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`,$=(0,i.default)(s.Z)`
  animation: ${m} 2s infinite linear;
  will-change: transform;
`,C=(0,i.default)(y.Y)`
  height: ${({theme:l,size:h})=>l.sizes.button[h]};

  svg {
    height: ${12/16}rem;
    width: auto;
  }

  &[aria-disabled='true'] {
    ${x.sg}

    &:active {
      ${x.sg}
    }
  }

  &:hover {
    ${x.yP}
  }

  &:active {
    ${x.tB}
  }

  ${x.PD}
`,v=e.forwardRef(({variant:l=u.TP,startIcon:h,endIcon:M,disabled:B=!1,children:z,onClick:k,size:W=u.Gt[0],loading:Y=!1,fullWidth:U=!1,...ro},to)=>{const J=B||Y,no=so=>{!J&&k&&k(so)};return(0,o.jsxs)(C,{ref:to,"aria-disabled":J,disabled:J,size:W,variant:l,onClick:no,fullWidth:U,alignItems:"center",background:"buttonPrimary600",borderColor:"buttonPrimary600",gap:2,inline:U,justifyContent:U?"center":void 0,paddingLeft:4,paddingRight:4,width:U?"100%":void 0,...ro,children:[(h||Y)&&(0,o.jsx)(g.x,{"aria-hidden":!0,children:Y?(0,o.jsx)($,{}):h}),(0,o.jsx)(a.Z,{variant:W==="S"?"pi":void 0,fontWeight:"bold",textColor:"buttonNeutral0",children:z}),M&&(0,o.jsx)(f.k,{"aria-hidden":!0,children:M})]})});v.displayName="Button";const T=n.fC,O=(0,e.forwardRef)(({size:l,endIcon:h=(0,o.jsx)(c.Z,{width:`${6/16}rem`,height:`${4/16}rem`,"aria-hidden":!0}),...M},B)=>(0,o.jsx)(n.xz,{asChild:!0,children:(0,o.jsx)(v,{ref:B,type:"button",variant:"ghost",endIcon:h,paddingTop:l==="S"?1:2,paddingBottom:l==="S"?1:2,paddingLeft:l==="S"?3:4,paddingRight:l==="S"?3:4,...M})})),E=(0,e.forwardRef)(({children:l,intersectionId:h,popoverPlacement:M="bottom-start",...B},z)=>{const[k,W]=M.split("-");return(0,o.jsx)(n.Uv,{children:(0,o.jsx)(n.VY,{align:W,side:k,loop:!0,asChild:!0,children:(0,o.jsxs)(P,{ref:z,direction:"column",borderStyle:"solid",borderWidth:"1px",borderColor:"neutral150",hasRadius:!0,background:"neutral0",shadow:"filterShadow",maxHeight:"15rem",padding:1,alignItems:"flex-start",position:"relative",overflow:"auto",...B,children:[l,(0,o.jsx)(g.x,{id:h,width:"100%",height:"1px"})]})})})}),P=(0,i.default)(f.k)`
  scrollbar-width: none;
  -ms-overflow-style: none;
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar {
    display: none;
  }
`,j=({onSelect:l,disabled:h=!1,...M})=>(0,o.jsx)(n.ck,{asChild:!0,onSelect:l,disabled:h,children:M.isLink||M.isExternal?(0,o.jsx)(K,{color:"neutral800",...M,isExternal:M.isExternal??!1,children:(0,o.jsx)(a.Z,{children:M.children})}):(0,o.jsx)(D,{cursor:"pointer",color:"neutral800",background:"transparent",borderStyle:"none",...M,children:(0,o.jsx)(a.Z,{children:M.children})})}),R=({theme:l})=>(0,i.css)`
  text-align: left;
  width: 100%;
  border-radius: ${l.borderRadius};
  padding: ${l.spaces[2]} ${l.spaces[4]};

  ${a.Z} {
    color: inherit;
  }

  &[aria-disabled] {
    cursor: not-allowed;

    ${a.Z} {
      color: ${l.colors.neutral500};
    }
  }

  &[data-highlighted] {
    background-color: ${l.colors.primary100};
  }

  &:focus-visible {
    outline: none;

    &:after {
      content: none;
    }
  }
`,D=(0,i.default)(f.k)`
  ${R}
`,K=(0,i.default)(t.r)`
  /* We include this here again because typically when people use OptionLink they provide an as prop which cancels the Box props */
  color: ${({theme:l,color:h})=>(0,b.$)(l.colors,h,void 0)};
  text-decoration: none;

  &:hover {
    color: unset;
  }

  svg > path,
  &:focus-visible svg > path {
    fill: currentColor;
  }

  ${R}
`,L=(0,e.forwardRef)((l,h)=>(0,o.jsx)(n.__,{asChild:!0,children:(0,o.jsx)(G,{ref:h,variant:"sigma",textColor:"neutral600",...l})})),G=(0,i.default)(a.Z)`
  padding: ${({theme:l})=>l.spaces[2]} ${({theme:l})=>l.spaces[4]};
`,A=n.Tr,I=(0,e.forwardRef)(({disabled:l=!1,...h},M)=>(0,o.jsx)(n.fF,{asChild:!0,disabled:l,children:(0,o.jsxs)(N,{ref:M,color:"neutral800",as:"button",type:"button",background:"transparent",borderStyle:"none",gap:5,...h,children:[(0,o.jsx)(a.Z,{children:h.children}),(0,o.jsx)(X,{height:12,width:12})]})})),N=(0,i.default)(D)`
  &[data-state='open'] {
    background-color: ${({theme:l})=>l.colors.primary100};
  }
`,X=(0,i.default)(p.Z)`
  path {
    fill: ${({theme:l})=>l.colors.neutral500};
  }
`,V=(0,e.forwardRef)((l,h)=>(0,o.jsx)(n.Uv,{children:(0,o.jsx)(n.tu,{sideOffset:8,asChild:!0,children:(0,o.jsx)(P,{ref:h,direction:"column",borderStyle:"solid",borderWidth:"1px",borderColor:"neutral150",hasRadius:!0,background:"neutral0",shadow:"filterShadow",maxHeight:"15rem",padding:1,alignItems:"flex-start",overflow:"auto",...l})})})),F=T,H=O,w=E,Z=j,S=L,Q=A,q=I,oo=V},52575:(_,d,r)=>{"use strict";r.d(d,{sN:()=>p});var o=r(85893),e=r(67294),n=r(53363);const c=({children:i,onOpen:b,onClose:t,popoverPlacement:s,onReachEnd:u,...x})=>{const y=useRef(null),[g,a]=useState(!1),f=v=>{u&&u(v)},m=v=>{v&&typeof b=="function"?b():!v&&typeof t=="function"&&t(),a(v)},$=useId(),C=`intersection-${stripReactIdOfColon($)}`;return useIntersection(y,f,{selectorToWatch:`#${C}`,skipWhen:!g}),jsxs(Root,{onOpenChange:m,children:[jsx(Trigger,{...x,children:x.label}),jsx(Content,{intersectionId:C,popoverPlacement:s,children:i})]})},p=n.ck}}]);
