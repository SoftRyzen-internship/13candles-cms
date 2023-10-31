"use strict";(self.webpackChunk_13_candles_cms=self.webpackChunk_13_candles_cms||[]).push([[8418],{38977:(B,f,a)=>{a.r(f),a.d(f,{default:()=>ie});var t=a(67294),o=a(7836),l=a(85841),r=a(57497),p=a(24),e=a(20297),n=a(86896),u=a(88767),g=a(84419),d=a(99688),b=a(36956),c=a(67366),m=a(162),h=a(54033),i=a(89899),s=a(37252),E=a(289),v=a(39219),S=a(29595),z=a(73208),I=a(41054),Z=a(45697),x=a.n(Z),C=a(87561);const Y=C.Ry().shape({options:C.Ry().shape({from:C.Ry().shape({name:C.Z_().required(e.I0.required),email:C.Z_().email(e.I0.email).required(e.I0.required)}).required(),response_email:C.Z_().email(e.I0.email),object:C.Z_().required(e.I0.required),message:C.Z_().required(e.I0.required)}).required(e.I0.required)}),W=({template:$,onToggle:O,onSubmit:y})=>{const{formatMessage:M}=(0,n.Z)();return t.createElement(b.P,{onClose:O,labelledBy:`${M({id:(0,d.OB)("PopUpForm.header.edit.email-templates"),defaultMessage:"Edit email template"})}, ${M({id:(0,d.OB)($.display),defaultMessage:$.display})}`},t.createElement(c.x,null,t.createElement(S.O,{label:`${M({id:(0,d.OB)("PopUpForm.header.edit.email-templates"),defaultMessage:"Edit email template"})}, ${M({id:(0,d.OB)($.display),defaultMessage:$.display})}`},t.createElement(z.$,null,M({id:(0,d.OB)("PopUpForm.header.edit.email-templates"),defaultMessage:"Edit email template"})),t.createElement(z.$,{isCurrent:!0},M({id:(0,d.OB)($.display),defaultMessage:$.display})))),t.createElement(I.J9,{onSubmit:y,initialValues:$,validateOnChange:!1,validationSchema:Y,enableReinitialize:!0},({errors:P,values:R,handleChange:L,isSubmitting:U})=>t.createElement(e.l0,null,t.createElement(m.f,null,t.createElement(h.r,{gap:5},t.createElement(i.P,{col:6,s:12},t.createElement(e.jm,{intlLabel:{id:(0,d.OB)("PopUpForm.Email.options.from.name.label"),defaultMessage:"Shipper name"},name:"options.from.name",onChange:L,value:R.options.from.name,error:P?.options?.from?.name,type:"text"})),t.createElement(i.P,{col:6,s:12},t.createElement(e.jm,{intlLabel:{id:(0,d.OB)("PopUpForm.Email.options.from.email.label"),defaultMessage:"Shipper email"},name:"options.from.email",onChange:L,value:R.options.from.email,error:P?.options?.from?.email,type:"text"})),t.createElement(i.P,{col:6,s:12},t.createElement(e.jm,{intlLabel:{id:(0,d.OB)("PopUpForm.Email.options.response_email.label"),defaultMessage:"Response email"},name:"options.response_email",onChange:L,value:R.options.response_email,error:P?.options?.response_email,type:"text"})),t.createElement(i.P,{col:6,s:12},t.createElement(e.jm,{intlLabel:{id:(0,d.OB)("PopUpForm.Email.options.object.label"),defaultMessage:"Subject"},name:"options.object",onChange:L,value:R.options.object,error:P?.options?.object,type:"text"})),t.createElement(i.P,{col:12,s:12},t.createElement(s.g,{label:M({id:(0,d.OB)("PopUpForm.Email.options.message.label"),defaultMessage:"Message"}),id:"options.message",onChange:L,value:R.options.message,error:P?.options?.message&&M({id:P.options.message,defaultMessage:P.options.message})})))),t.createElement(E.m,{startActions:t.createElement(v.z,{onClick:O,variant:"tertiary"},"Cancel"),endActions:t.createElement(v.z,{loading:U,type:"submit"},"Finish")}))))};W.propTypes={template:x().shape({display:x().string,icon:x().string,options:x().shape({from:x().shape({name:x().string,email:x().string}),message:x().string,object:x().string,response_email:x().string})}).isRequired,onSubmit:x().func.isRequired,onToggle:x().func.isRequired};const k=W;var q=a(54571),_=a(67245),D=a(40313),j=a(28873),H=a(45147),A=a(50922),ee=a(22500),w=a(502),K=a(61829),te=a(4378),N=a(19600),ne=a(42195);const V=({canUpdate:$,onEditClick:O})=>{const{formatMessage:y}=(0,n.Z)();return t.createElement(q.i,{colCount:3,rowCount:3},t.createElement(_.h,null,t.createElement(D.Tr,null,t.createElement(j.Th,{width:"1%"},t.createElement(H.T,null,y({id:(0,d.OB)("Email.template.table.icon.label"),defaultMessage:"icon"}))),t.createElement(j.Th,null,t.createElement(A.Z,{variant:"sigma",textColor:"neutral600"},y({id:(0,d.OB)("Email.template.table.name.label"),defaultMessage:"name"}))),t.createElement(j.Th,{width:"1%"},t.createElement(H.T,null,y({id:(0,d.OB)("Email.template.table.action.label"),defaultMessage:"action"}))))),t.createElement(ee.p,null,t.createElement(D.Tr,{...(0,e.X7)({fn:()=>O("reset_password")})},t.createElement(j.Td,null,t.createElement(w.J,null,t.createElement(te.Z,{"aria-label":y({id:"global.reset-password",defaultMessage:"Reset password"})}))),t.createElement(j.Td,null,t.createElement(A.Z,null,y({id:"global.reset-password",defaultMessage:"Reset password"}))),t.createElement(j.Td,{...e.UW},t.createElement(K.h,{onClick:()=>O("reset_password"),label:y({id:(0,d.OB)("Email.template.form.edit.label"),defaultMessage:"Edit a template"}),noBorder:!0,icon:$&&t.createElement(N.Z,null)}))),t.createElement(D.Tr,{...(0,e.X7)({fn:()=>O("email_confirmation")})},t.createElement(j.Td,null,t.createElement(w.J,null,t.createElement(ne.Z,{"aria-label":y({id:(0,d.OB)("Email.template.email_confirmation"),defaultMessage:"Email address confirmation"})}))),t.createElement(j.Td,null,t.createElement(A.Z,null,y({id:(0,d.OB)("Email.template.email_confirmation"),defaultMessage:"Email address confirmation"}))),t.createElement(j.Td,{...e.UW},t.createElement(K.h,{onClick:()=>O("email_confirmation"),label:y({id:(0,d.OB)("Email.template.form.edit.label"),defaultMessage:"Edit a template"}),noBorder:!0,icon:$&&t.createElement(N.Z,null)})))))};V.propTypes={canUpdate:x().bool.isRequired,onEditClick:x().func.isRequired};const ae=V,se=()=>t.createElement(e.O4,{permissions:g._.readEmailTemplates},t.createElement(le,null)),le=()=>{const{formatMessage:$}=(0,n.Z)(),{trackUsage:O}=(0,e.rS)(),{notifyStatus:y}=(0,o.G)(),M=(0,e.lm)(),{lockApp:P,unlockApp:R}=(0,e.o1)(),L=(0,u.useQueryClient)(),{get:U,put:oe}=(0,e.kY)(),{formatAPIError:Q}=(0,e.So)();(0,e.go)();const[re,de]=t.useState(!1),[G,me]=t.useState(null),{isLoading:ce,allowedActions:{canUpdate:ue}}=(0,e.ss)({update:g._.updateEmailTemplates}),{isLoading:pe,data:X}=(0,u.useQuery)(["users-permissions","email-templates"],async()=>{const{data:T}=await U("/users-permissions/email-templates");return T},{onSuccess(){y($({id:(0,d.OB)("Email.template.data.loaded"),defaultMessage:"Email templates has been loaded"}))},onError(T){M({type:"warning",message:Q(T)})}}),fe=ce||pe,F=()=>{de(T=>!T)},ge=T=>{me(T),F()},J=(0,u.useMutation)(T=>oe("/users-permissions/email-templates",{"email-templates":T}),{async onSuccess(){await L.invalidateQueries(["users-permissions","email-templates"]),M({type:"success",message:{id:"notification.success.saved",defaultMessage:"Saved"}}),O("didEditEmailTemplates"),R(),F()},onError(T){M({type:"warning",message:Q(T)}),R()},refetchActive:!0}),he=T=>{P(),O("willEditEmailTemplates");const Ee={...X,[G]:T};J.mutate(Ee)};return fe?t.createElement(l.o,{"aria-busy":"true"},t.createElement(e.SL,{name:$({id:(0,d.OB)("HeaderNav.link.emailTemplates"),defaultMessage:"Email templates"})}),t.createElement(r.T,{title:$({id:(0,d.OB)("HeaderNav.link.emailTemplates"),defaultMessage:"Email templates"})}),t.createElement(p.D,null,t.createElement(e.dO,null))):t.createElement(l.o,{"aria-busy":J.isLoading},t.createElement(e.SL,{name:$({id:(0,d.OB)("HeaderNav.link.emailTemplates"),defaultMessage:"Email templates"})}),t.createElement(r.T,{title:$({id:(0,d.OB)("HeaderNav.link.emailTemplates"),defaultMessage:"Email templates"})}),t.createElement(p.D,null,t.createElement(ae,{onEditClick:ge,canUpdate:ue}),re&&t.createElement(k,{template:X[G],onToggle:F,onSubmit:he})))},ie=se},99688:(B,f,a)=>{a.d(f,{YX:()=>r,OB:()=>p.Z});var t=a(41609),o=a.n(t);const r=e=>Object.keys(e).reduce((n,u)=>{const g=e[u].controllers,d=Object.keys(g).reduce((b,c)=>(o()(g[c])||(b[c]=g[c]),b),{});return o()(d)||(n[u]={controllers:d}),n},{});var p=a(58655)},24:(B,f,a)=>{a.d(f,{D:()=>l});var t=a(85893),o=a(97554);const l=({children:r})=>(0,t.jsx)(o.x,{paddingLeft:10,paddingRight:10,children:r})},57497:(B,f,a)=>{a.d(f,{T:()=>d});var t=a(85893),o=a(67294),l=a(88972);const r=m=>{const h=(0,o.useRef)(null),[i,s]=(0,o.useState)(!0),E=([v])=>{s(v.isIntersecting)};return(0,o.useEffect)(()=>{const v=h.current,S=new IntersectionObserver(E,m);return v&&S.observe(h.current),()=>{v&&S.disconnect()}},[h,m]),[h,i]};var p=a(79698);const e=(m,h)=>{const i=(0,p.W)(h);(0,o.useLayoutEffect)(()=>{const s=new ResizeObserver(i);return Array.isArray(m)?m.forEach(E=>{E.current&&s.observe(E.current)}):m.current&&s.observe(m.current),()=>{s.disconnect()}},[m,i])};var n=a(97554),u=a(61697),g=a(50922);const d=m=>{const h=(0,o.useRef)(null),[i,s]=(0,o.useState)(null),[E,v]=r({root:null,rootMargin:"0px",threshold:0});return e(E,()=>{E.current&&s(E.current.getBoundingClientRect())}),(0,o.useEffect)(()=>{h.current&&s(h.current.getBoundingClientRect())},[h]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{style:{height:i?.height},ref:E,children:v&&(0,t.jsx)(c,{ref:h,...m})}),!v&&(0,t.jsx)(c,{...m,sticky:!0,width:i?.width})]})};d.displayName="HeaderLayout";const b=(0,l.default)(n.x)`
  width: ${({width:m})=>m?`${m/16}rem`:void 0};
  z-index: ${({theme:m})=>m.zIndices[1]};
`,c=o.forwardRef(({navigationAction:m,primaryAction:h,secondaryAction:i,subtitle:s,title:E,sticky:v,width:S,...z},I)=>{const Z=typeof s=="string";return v?(0,t.jsx)(b,{paddingLeft:6,paddingRight:6,paddingTop:3,paddingBottom:3,position:"fixed",top:0,right:0,background:"neutral0",shadow:"tableShadow",width:S,"data-strapi-header-sticky":!0,children:(0,t.jsxs)(u.k,{justifyContent:"space-between",children:[(0,t.jsxs)(u.k,{children:[m&&(0,t.jsx)(n.x,{paddingRight:3,children:m}),(0,t.jsxs)(n.x,{children:[(0,t.jsx)(g.Z,{variant:"beta",as:"h1",...z,children:E}),Z?(0,t.jsx)(g.Z,{variant:"pi",textColor:"neutral600",children:s}):s]}),i?(0,t.jsx)(n.x,{paddingLeft:4,children:i}):null]}),(0,t.jsx)(u.k,{children:h?(0,t.jsx)(n.x,{paddingLeft:2,children:h}):void 0})]})}):(0,t.jsxs)(n.x,{ref:I,paddingLeft:10,paddingRight:10,paddingBottom:8,paddingTop:m?6:8,background:"neutral100","data-strapi-header":!0,children:[m?(0,t.jsx)(n.x,{paddingBottom:2,children:m}):null,(0,t.jsxs)(u.k,{justifyContent:"space-between",children:[(0,t.jsxs)(u.k,{minWidth:0,children:[(0,t.jsx)(g.Z,{as:"h1",variant:"alpha",...z,children:E}),i?(0,t.jsx)(n.x,{paddingLeft:4,children:i}):null]}),h]}),Z?(0,t.jsx)(g.Z,{variant:"epsilon",textColor:"neutral600",as:"p",children:s}):s]})})},85841:(B,f,a)=>{a.d(f,{o:()=>p});var t=a(85893),o=a(88972),l=a(97554);const r=(0,o.default)(l.x)`
  // To prevent global outline on focus visible to force an outline when Main is focused
  &:focus-visible {
    outline: none;
  }
`,p=({labelledBy:e="main-content-title",...n})=>(0,t.jsx)(r,{"aria-labelledby":e,as:"main",id:"main-content",tabIndex:-1,...n})},39896:(B,f,a)=>{a.d(f,{x:()=>p});var t=a(88972),o=a(16294),l=a(7214);const r={color:!0,cursor:!0,height:!0,width:!0},p=t.default.div.withConfig({shouldForwardProp:(e,n)=>!r[e]&&n(e)})`
  // Font
  font-size: ${({fontSize:e,theme:n})=>(0,l.$)(n.fontSizes,e,e)};

  // Colors
  background: ${({theme:e,background:n})=>(0,l.$)(e.colors,n,n)};
  color: ${({theme:e,color:n})=>(0,l.$)(e.colors,n,void 0)};

  // Spaces
  ${({theme:e,padding:n})=>(0,o.Z)("padding",n,e)}
  ${({theme:e,paddingTop:n})=>(0,o.Z)("padding-top",n,e)}
  ${({theme:e,paddingRight:n})=>(0,o.Z)("padding-right",n,e)}
  ${({theme:e,paddingBottom:n})=>(0,o.Z)("padding-bottom",n,e)}
  ${({theme:e,paddingLeft:n})=>(0,o.Z)("padding-left",n,e)}
  ${({theme:e,marginLeft:n})=>(0,o.Z)("margin-left",n,e)}
  ${({theme:e,marginRight:n})=>(0,o.Z)("margin-right",n,e)}
  ${({theme:e,marginTop:n})=>(0,o.Z)("margin-top",n,e)}
  ${({theme:e,marginBottom:n})=>(0,o.Z)("margin-bottom",n,e)}

  // Responsive hiding
  ${({theme:e,hiddenS:n})=>n?`${e.mediaQueries.tablet} { display: none; }`:void 0}
  ${({theme:e,hiddenXS:n})=>n?`${e.mediaQueries.mobile} { display: none; }`:void 0}
  

  // Borders
  border-radius: ${({theme:e,hasRadius:n,borderRadius:u})=>n?e.borderRadius:u};
  border-style: ${({borderStyle:e})=>e};
  border-width: ${({borderWidth:e})=>e};
  border-color: ${({borderColor:e,theme:n})=>(0,l.$)(n.colors,e,void 0)};
  border: ${({theme:e,borderColor:n,borderStyle:u,borderWidth:g})=>{if(n&&!u&&typeof g>"u")return`1px solid ${e.colors[n]}`}};

  // Shadows
  box-shadow: ${({theme:e,shadow:n})=>(0,l.$)(e.shadows,n,void 0)};

  // Handlers
  pointer-events: ${({pointerEvents:e})=>e};
  &:hover {
    ${({_hover:e,theme:n})=>e?e(n):void 0}
  }

  // Display
  display: ${({display:e})=>e};

  // Position
  position: ${({position:e})=>e};
  left: ${({left:e,theme:n})=>(0,l.$)(n.spaces,e,e)};
  right: ${({right:e,theme:n})=>(0,l.$)(n.spaces,e,e)};
  top: ${({top:e,theme:n})=>(0,l.$)(n.spaces,e,e)};
  bottom: ${({bottom:e,theme:n})=>(0,l.$)(n.spaces,e,e)};
  z-index: ${({zIndex:e})=>e};
  overflow: ${({overflow:e})=>e};

  // Size
  width: ${({width:e,theme:n})=>(0,l.$)(n.spaces,e,e)};
  max-width: ${({maxWidth:e,theme:n})=>(0,l.$)(n.spaces,e,e)};
  min-width: ${({minWidth:e,theme:n})=>(0,l.$)(n.spaces,e,e)};
  height: ${({height:e,theme:n})=>(0,l.$)(n.spaces,e,e)};
  max-height: ${({maxHeight:e,theme:n})=>(0,l.$)(n.spaces,e,e)};
  min-height: ${({minHeight:e,theme:n})=>(0,l.$)(n.spaces,e,e)};

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
  line-height: ${({theme:e,lineHeight:n})=>(0,l.$)(e.lineHeights,n,n)};

  // Cursor
  cursor: ${({cursor:e})=>e};
`},4037:(B,f,a)=>{a.d(f,{Z:()=>h});var t=a(88972);const o="alpha",l="beta",r="delta",p="epsilon",e="omega",n="pi",u="sigma",g=[o,l,r,p,e,n,u],d=({ellipsis:i=!1})=>i&&`
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `,b=({variant:i=e,theme:s})=>{switch(i){case o:return`
        font-weight: ${s.fontWeights.bold};
        font-size: ${s.fontSizes[5]};
        line-height: ${s.lineHeights[2]};
      `;case l:return`
        font-weight: ${s.fontWeights.bold};
        font-size: ${s.fontSizes[4]};
        line-height: ${s.lineHeights[1]};
      `;case r:return`
        font-weight: ${s.fontWeights.semiBold};
        font-size: ${s.fontSizes[3]};
        line-height: ${s.lineHeights[2]};
      `;case p:return`
        font-size: ${s.fontSizes[3]};
        line-height: ${s.lineHeights[6]};
      `;case e:return`
        font-size: ${s.fontSizes[2]};
        line-height: ${s.lineHeights[4]};
      `;case n:return`
        font-size: ${s.fontSizes[1]};
        line-height: ${s.lineHeights[3]};
      `;case u:return`
        font-weight: ${s.fontWeights.bold};
        font-size: ${s.fontSizes[0]};
        line-height: ${s.lineHeights[5]};
        text-transform: uppercase;
      `;default:return`
        font-size: ${s.fontSizes[2]};
      `}};var c=a(7214);const m={fontSize:!0,fontWeight:!0},h=t.default.span.withConfig({shouldForwardProp:(i,s)=>!m[i]&&s(i)})`
  ${b}
  ${d}

  // These properties need to come after {variantStyle}, because they might
  // overwrite a variant attribute
  font-weight: ${({theme:i,fontWeight:s})=>(0,c.$)(i.fontWeights,s,void 0)};
  font-size: ${({theme:i,fontSize:s})=>(0,c.$)(i.fontSizes,s,void 0)};
  line-height: ${({theme:i,lineHeight:s})=>(0,c.$)(i.lineHeights,s,s)};
  color: ${({theme:i,textColor:s})=>i.colors[s||"neutral800"]};
  text-align: ${({textAlign:i})=>i};
  text-decoration: ${({textDecoration:i})=>i};
  text-transform: ${({textTransform:i})=>i};
`},16294:(B,f,a)=>{a.d(f,{Z:()=>t});const t=(o,l,r)=>{if(!l)return;if(typeof l=="object")return(Array.isArray(l)?l:[l?.desktop,l?.tablet,l?.mobile]).reduce((u,g,d)=>{if(g)switch(d){case 0:return`${u}${o}: ${r.spaces[g]};`;case 1:return`${u}${r.mediaQueries.tablet}{${o}: ${r.spaces[g]};}`;case 2:return`${u}${r.mediaQueries.mobile}{${o}: ${r.spaces[g]};}`;default:return u}return u},"");const p=r.spaces[l]??l;return`${o}: ${p};`}},7214:(B,f,a)=>{a.d(f,{$:()=>l});function t(r,p){return typeof r=="string"?!1:p in r}function o(r){return r&&typeof r=="object"&&!Array.isArray(r)}function l(r,p,e){return p&&t(r,p)?r[p]:e}},29595:(B,f,a)=>{a.d(f,{O:()=>b});var t=a(85893),o=a(67294),l=a(88972),r=a(39896),p=a(4037);const e=()=>(0,t.jsx)(r.x,{"aria-hidden":!0,paddingLeft:1,paddingRight:1,children:(0,t.jsx)(p.Z,{variant:"pi",textColor:"neutral500",children:"/"})});e.displayName="Divider";var n=a(16294);const u={direction:!0},g=(0,l.default)(r.x).withConfig({shouldForwardProp:(c,m)=>!u[c]&&m(c)})`
  align-items: ${({alignItems:c="center"})=>c};
  display: ${({display:c="flex",inline:m})=>m?"inline-flex":c};
  flex-direction: ${({direction:c="row"})=>c};
  flex-shrink: ${({shrink:c})=>c};
  flex-wrap: ${({wrap:c})=>c};
  ${({gap:c,theme:m})=>(0,n.Z)("gap",c,m)};
  justify-content: ${({justifyContent:c})=>c};
`,d=(0,l.default)(g)`
  // CrumbLinks do have padding-x, because they need to have a
  // interaction effect, which mis-aligns the breadcrumbs on the left.
  // This normalizes the behavior by moving the first item to left by
  // the same amount it has inner padding
  :first-child {
    margin-left: ${({theme:c})=>`calc(-1*${c.spaces[2]})`};
  }
`,b=({label:c,children:m,...h})=>{const i=o.Children.toArray(m);return(0,t.jsx)(r.x,{"aria-label":c,...h,children:(0,t.jsx)(d,{as:"ol",children:o.Children.map(i,(s,E)=>{const v=i.length>1&&E+1<i.length;return(0,t.jsxs)(g,{inline:!0,as:"li",children:[s,v&&(0,t.jsx)(e,{})]})})})})};b.displayName="Breadcrumbs"},73208:(B,f,a)=>{a.d(f,{$:()=>r});var t=a(85893),o=a(39896),l=a(4037);const r=({children:p,isCurrent:e=!1,...n})=>(0,t.jsx)(o.x,{paddingLeft:2,paddingRight:2,paddingTop:1,paddingBottom:1,children:(0,t.jsx)(l.Z,{variant:"pi",textColor:"neutral800",fontWeight:e?"bold":"normal","aria-current":e,...n,children:p})});r.displayName="Crumb"}}]);
