"use strict";(self.webpackChunk_13_candles_cms=self.webpackChunk_13_candles_cms||[]).push([[2282],{1431:(T,b,s)=>{s.r(b),s.d(b,{ProvidersPage:()=>de,default:()=>Oe});var t=s(67294),i=s(67242),r=s(85841),l=s(57497),g=s(24),e=s(54571),n=s(67245),m=s(40313),p=s(28873),$=s(50922),O=s(45147),c=s(22500),u=s(61829),o=s(20297),d=s(19600),a=s(11700),x=s.n(a),P=s(86896),S=s(88767),K=s(36956),X=s(67366),N=s(162),he=s(61697),ge=s(54033),pe=s(89899),ve=s(289),ne=s(39219),be=s(29595),$e=s(73208),ye=s(41054),xe=s(45697),f=s.n(xe),Ee=s(35141),Pe=s(22790);const Q=({description:E,disabled:A,intlLabel:z,error:j,name:R,onChange:U,placeholder:y,providerToEditName:I,type:Z,value:B})=>{const{formatMessage:L}=(0,P.Z)(),D=R==="noName"?`${window.strapi.backendURL}/api/connect/${I}/callback`:B,w=L({id:z.id,defaultMessage:z.defaultMessage},{provider:I,...z.values}),C=E?L({id:E.id,defaultMessage:E.defaultMessage},{provider:I,...E.values}):"";if(Z==="bool")return t.createElement(Ee.s,{"aria-label":R,checked:B,disabled:A,hint:C,label:w,name:R,offLabel:L({id:"app.components.ToggleCheckbox.off-label",defaultMessage:"Off"}),onLabel:L({id:"app.components.ToggleCheckbox.on-label",defaultMessage:"On"}),onChange:F=>{U({target:{name:R,value:F.target.checked}})}});const q=y?L({id:y.id,defaultMessage:y.defaultMessage},{...y.values}):"",_=j?L({id:j,defaultMessage:j}):"";return t.createElement(Pe.o,{"aria-label":R,disabled:A,error:_,label:w,name:R,onChange:U,placeholder:q,type:Z,value:D})};Q.defaultProps={description:null,disabled:!1,error:"",placeholder:null,value:""},Q.propTypes={description:f().shape({id:f().string.isRequired,defaultMessage:f().string.isRequired,values:f().object}),disabled:f().bool,error:f().string,intlLabel:f().shape({id:f().string.isRequired,defaultMessage:f().string.isRequired,values:f().object}).isRequired,name:f().string.isRequired,onChange:f().func.isRequired,placeholder:f().shape({id:f().string.isRequired,defaultMessage:f().string.isRequired,values:f().object}),providerToEditName:f().string.isRequired,type:f().string.isRequired,value:f().oneOfType([f().bool,f().string])};const Me=Q,k=({headerBreadcrumbs:E,initialData:A,isSubmiting:z,layout:j,isOpen:R,onSubmit:U,onToggle:y,providerToEditName:I})=>{const{formatMessage:Z}=(0,P.Z)();return R?t.createElement(K.P,{onClose:y,labelledBy:"title"},t.createElement(X.x,null,t.createElement(be.O,{label:E.join(", ")},E.map((B,L,D)=>t.createElement($e.$,{isCurrent:L===D.length-1,key:B},B)))),t.createElement(ye.J9,{onSubmit:B=>U(B),initialValues:A,validationSchema:j.schema,validateOnChange:!1},({errors:B,handleChange:L,values:D})=>t.createElement(o.l0,null,t.createElement(N.f,null,t.createElement(he.k,{direction:"column",alignItems:"stretch",gap:1},t.createElement(ge.r,{gap:5},j.form.map(w=>w.map(C=>t.createElement(pe.P,{key:C.name,col:C.size,xs:12},t.createElement(Me,{...C,error:B[C.name],onChange:L,value:D[C.name],providerToEditName:I}))))))),t.createElement(ve.m,{startActions:t.createElement(ne.z,{variant:"tertiary",onClick:y,type:"button"},Z({id:"app.components.Button.cancel",defaultMessage:"Cancel"})),endActions:t.createElement(ne.z,{type:"submit",loading:z},Z({id:"global.save",defaultMessage:"Save"}))})))):null};k.defaultProps={initialData:null,providerToEditName:null},k.propTypes={headerBreadcrumbs:f().arrayOf(f().string).isRequired,initialData:f().object,layout:f().shape({form:f().arrayOf(f().array),schema:f().object}).isRequired,isOpen:f().bool.isRequired,isSubmiting:f().bool.isRequired,onSubmit:f().func.isRequired,onToggle:f().func.isRequired,providerToEditName:f().string};const Le=k;var se=s(84419),M=s(99688),h=s(87561);const ae={id:(0,M.OB)("PopUpForm.Providers.redirectURL.front-end.label"),defaultMessage:"The redirect URL to your front-end app"},re={id:"http://www.client-app.com",defaultMessage:"http://www.client-app.com"},G={id:(0,M.OB)("PopUpForm.Providers.enabled.description"),defaultMessage:"If disabled, users won't be able to use this provider."},J={id:(0,M.OB)("PopUpForm.Providers.enabled.label"),defaultMessage:"Enable"},ie={id:(0,M.OB)("PopUpForm.Providers.key.label"),defaultMessage:"Client ID"},oe={id:(0,M.OB)("PopUpForm.Providers.redirectURL.label"),defaultMessage:"The redirect URL to add in your {provider} application configurations"},W={id:(0,M.OB)("PopUpForm.Providers.key.placeholder"),defaultMessage:"TEXT"},le={id:(0,M.OB)("PopUpForm.Providers.secret.label"),defaultMessage:"Client Secret"},Y={email:{form:[[{intlLabel:J,name:"enabled",type:"bool",description:G,size:6}]],schema:h.Ry().shape({enabled:h.Xg().required(o.I0.required)})},providers:{form:[[{intlLabel:J,name:"enabled",type:"bool",description:G,size:6,validations:{required:!0}}],[{intlLabel:ie,name:"key",type:"text",placeholder:W,size:12,validations:{required:!0}}],[{intlLabel:le,name:"secret",type:"text",placeholder:W,size:12,validations:{required:!0}}],[{intlLabel:ae,placeholder:re,name:"callback",type:"text",size:12,validations:{required:!0}}],[{intlLabel:oe,name:"noName",type:"text",validations:{},size:12,disabled:!0}]],schema:h.Ry().shape({enabled:h.Xg().required(o.I0.required),key:h.Z_().when("enabled",{is:!0,then:h.Z_().required(o.I0.required),otherwise:h.Z_()}),secret:h.Z_().when("enabled",{is:!0,then:h.Z_().required(o.I0.required),otherwise:h.Z_()}),callback:h.Z_().when("enabled",{is:!0,then:h.Z_().required(o.I0.required),otherwise:h.Z_()})})},providersWithSubdomain:{form:[[{intlLabel:J,name:"enabled",type:"bool",description:G,size:6,validations:{required:!0}}],[{intlLabel:ie,name:"key",type:"text",placeholder:W,size:12,validations:{required:!0}}],[{intlLabel:le,name:"secret",type:"text",placeholder:W,size:12,validations:{required:!0}}],[{intlLabel:{id:(0,M.OB)({id:"PopUpForm.Providers.jwksurl.label"}),defaultMessage:"JWKS URL"},name:"jwksurl",type:"text",placeholder:W,size:12,validations:{required:!1}}],[{intlLabel:{id:(0,M.OB)("PopUpForm.Providers.subdomain.label"),defaultMessage:"Host URI (Subdomain)"},name:"subdomain",type:"text",placeholder:{id:(0,M.OB)("PopUpForm.Providers.subdomain.placeholder"),defaultMessage:"my.subdomain.com"},size:12,validations:{required:!0}}],[{intlLabel:ae,placeholder:re,name:"callback",type:"text",size:12,validations:{required:!0}}],[{intlLabel:oe,name:"noName",type:"text",validations:{},size:12,disabled:!0}]],schema:h.Ry().shape({enabled:h.Xg().required(o.I0.required),key:h.Z_().when("enabled",{is:!0,then:h.Z_().required(o.I0.required),otherwise:h.Z_()}),secret:h.Z_().when("enabled",{is:!0,then:h.Z_().required(o.I0.required),otherwise:h.Z_()}),subdomain:h.Z_().when("enabled",{is:!0,then:h.Z_().required(o.I0.required),otherwise:h.Z_()}),callback:h.Z_().when("enabled",{is:!0,then:h.Z_().required(o.I0.required),otherwise:h.Z_()})})}},de=()=>{const{formatMessage:E,locale:A}=(0,P.Z)(),z=(0,S.useQueryClient)(),{trackUsage:j}=(0,o.rS)(),[R,U]=t.useState(!1),[y,I]=t.useState(null),Z=(0,o.lm)(),{lockApp:B,unlockApp:L}=(0,o.o1)(),{get:D,put:w}=(0,o.kY)(),{formatAPIError:C}=(0,o.So)(),q=(0,o.Xe)(A,{sensitivity:"base"});(0,o.go)();const{isLoading:_,allowedActions:{canUpdate:F}}=(0,o.ss)({update:se._.updateProviders}),{isLoading:Te,data:ee}=(0,S.useQuery)(["users-permissions","get-providers"],async()=>{const{data:v}=await D("/users-permissions/providers");return v},{initialData:{}}),ue=(0,S.useMutation)(v=>w("/users-permissions/providers",v),{async onSuccess(){await z.invalidateQueries(["users-permissions","providers"]),Z({type:"success",message:{id:(0,M.OB)("notification.success.submit")}}),j("didEditAuthenticationProvider"),te(),L()},onError(v){Z({type:"warning",message:C(v)}),L()},refetchActive:!1}),V=Object.entries(ee).reduce((v,[H,Ce])=>{const{icon:me,enabled:Se,subdomain:Ze}=Ce;return v.push({name:H,icon:me==="envelope"?["fas","envelope"]:["fab",me],enabled:Se,subdomain:Ze}),v},[]).sort((v,H)=>q.compare(v.name,H.name)),Be=Te||_,ce=t.useMemo(()=>y?!!V.find(H=>H.name===y)?.subdomain:!1,[V,y]),Re=t.useMemo(()=>y==="email"?Y.email:ce?Y.providersWithSubdomain:Y.providers,[y,ce]),te=()=>{U(v=>!v)},fe=v=>{F&&(I(v.name),te())},je=async v=>{B(),j("willEditAuthenticationProvider"),ue.mutate({providers:{...ee,[y]:v}})};return t.createElement(i.A,null,t.createElement(o.SL,{name:E({id:(0,M.OB)("HeaderNav.link.providers"),defaultMessage:"Providers"})}),t.createElement(r.o,null,t.createElement(l.T,{title:E({id:(0,M.OB)("HeaderNav.link.providers"),defaultMessage:"Providers"})}),Be?t.createElement(o.dO,null):t.createElement(g.D,null,t.createElement(e.i,{colCount:3,rowCount:V.length+1},t.createElement(n.h,null,t.createElement(m.Tr,null,t.createElement(p.Th,null,t.createElement($.Z,{variant:"sigma",textColor:"neutral600"},E({id:"global.name",defaultMessage:"Name"}))),t.createElement(p.Th,null,t.createElement($.Z,{variant:"sigma",textColor:"neutral600"},E({id:(0,M.OB)("Providers.status"),defaultMessage:"Status"}))),t.createElement(p.Th,null,t.createElement($.Z,{variant:"sigma"},t.createElement(O.T,null,E({id:"global.settings",defaultMessage:"Settings"})))))),t.createElement(c.p,null,V.map(v=>t.createElement(m.Tr,{key:v.name,...(0,o.X7)({fn:()=>fe(v),condition:F})},t.createElement(p.Td,{width:"45%"},t.createElement($.Z,{fontWeight:"semiBold",textColor:"neutral800"},v.name)),t.createElement(p.Td,{width:"65%"},t.createElement($.Z,{textColor:v.enabled?"success600":"danger600","data-testid":`enable-${v.name}`},v.enabled?E({id:"global.enabled",defaultMessage:"Enabled"}):E({id:"global.disabled",defaultMessage:"Disabled"}))),t.createElement(p.Td,{...o.UW},F&&t.createElement(u.h,{onClick:()=>fe(v),noBorder:!0,icon:t.createElement(d.Z,null),label:"Edit"})))))))),t.createElement(Le,{initialData:ee[y],isOpen:R,isSubmiting:ue.isLoading,layout:Re,headerBreadcrumbs:[E({id:(0,M.OB)("PopUpForm.header.edit.providers"),defaultMessage:"Edit Provider"}),x()(y)],onToggle:te,onSubmit:je,providerToEditName:y}))},Oe=()=>t.createElement(o.O4,{permissions:se._.readProviders},t.createElement(de,null))},99688:(T,b,s)=>{s.d(b,{YX:()=>l,OB:()=>g.Z});var t=s(41609),i=s.n(t);const l=e=>Object.keys(e).reduce((n,m)=>{const p=e[m].controllers,$=Object.keys(p).reduce((O,c)=>(i()(p[c])||(O[c]=p[c]),O),{});return i()($)||(n[m]={controllers:$}),n},{});var g=s(58655)},24:(T,b,s)=>{s.d(b,{D:()=>r});var t=s(85893),i=s(97554);const r=({children:l})=>(0,t.jsx)(i.x,{paddingLeft:10,paddingRight:10,children:l})},57497:(T,b,s)=>{s.d(b,{T:()=>$});var t=s(85893),i=s(67294),r=s(88972);const l=u=>{const o=(0,i.useRef)(null),[d,a]=(0,i.useState)(!0),x=([P])=>{a(P.isIntersecting)};return(0,i.useEffect)(()=>{const P=o.current,S=new IntersectionObserver(x,u);return P&&S.observe(o.current),()=>{P&&S.disconnect()}},[o,u]),[o,d]};var g=s(79698);const e=(u,o)=>{const d=(0,g.W)(o);(0,i.useLayoutEffect)(()=>{const a=new ResizeObserver(d);return Array.isArray(u)?u.forEach(x=>{x.current&&a.observe(x.current)}):u.current&&a.observe(u.current),()=>{a.disconnect()}},[u,d])};var n=s(97554),m=s(61697),p=s(50922);const $=u=>{const o=(0,i.useRef)(null),[d,a]=(0,i.useState)(null),[x,P]=l({root:null,rootMargin:"0px",threshold:0});return e(x,()=>{x.current&&a(x.current.getBoundingClientRect())}),(0,i.useEffect)(()=>{o.current&&a(o.current.getBoundingClientRect())},[o]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{style:{height:d?.height},ref:x,children:P&&(0,t.jsx)(c,{ref:o,...u})}),!P&&(0,t.jsx)(c,{...u,sticky:!0,width:d?.width})]})};$.displayName="HeaderLayout";const O=(0,r.default)(n.x)`
  width: ${({width:u})=>u?`${u/16}rem`:void 0};
  z-index: ${({theme:u})=>u.zIndices[1]};
`,c=i.forwardRef(({navigationAction:u,primaryAction:o,secondaryAction:d,subtitle:a,title:x,sticky:P,width:S,...K},X)=>{const N=typeof a=="string";return P?(0,t.jsx)(O,{paddingLeft:6,paddingRight:6,paddingTop:3,paddingBottom:3,position:"fixed",top:0,right:0,background:"neutral0",shadow:"tableShadow",width:S,"data-strapi-header-sticky":!0,children:(0,t.jsxs)(m.k,{justifyContent:"space-between",children:[(0,t.jsxs)(m.k,{children:[u&&(0,t.jsx)(n.x,{paddingRight:3,children:u}),(0,t.jsxs)(n.x,{children:[(0,t.jsx)(p.Z,{variant:"beta",as:"h1",...K,children:x}),N?(0,t.jsx)(p.Z,{variant:"pi",textColor:"neutral600",children:a}):a]}),d?(0,t.jsx)(n.x,{paddingLeft:4,children:d}):null]}),(0,t.jsx)(m.k,{children:o?(0,t.jsx)(n.x,{paddingLeft:2,children:o}):void 0})]})}):(0,t.jsxs)(n.x,{ref:X,paddingLeft:10,paddingRight:10,paddingBottom:8,paddingTop:u?6:8,background:"neutral100","data-strapi-header":!0,children:[u?(0,t.jsx)(n.x,{paddingBottom:2,children:u}):null,(0,t.jsxs)(m.k,{justifyContent:"space-between",children:[(0,t.jsxs)(m.k,{minWidth:0,children:[(0,t.jsx)(p.Z,{as:"h1",variant:"alpha",...K,children:x}),d?(0,t.jsx)(n.x,{paddingLeft:4,children:d}):null]}),o]}),N?(0,t.jsx)(p.Z,{variant:"epsilon",textColor:"neutral600",as:"p",children:a}):a]})})},67242:(T,b,s)=>{s.d(b,{A:()=>e});var t=s(85893),i=s(88972),r=s(97554);const l=(0,i.default)(r.x)`
  display: grid;
  grid-template-columns: ${({hasSideNav:n})=>n?"auto 1fr":"1fr"};
`,g=(0,i.default)(r.x)`
  overflow-x: hidden;
`,e=({sideNav:n,children:m})=>(0,t.jsxs)(l,{hasSideNav:Boolean(n),children:[n,(0,t.jsx)(g,{paddingBottom:10,children:m})]})},85841:(T,b,s)=>{s.d(b,{o:()=>g});var t=s(85893),i=s(88972),r=s(97554);const l=(0,i.default)(r.x)`
  // To prevent global outline on focus visible to force an outline when Main is focused
  &:focus-visible {
    outline: none;
  }
`,g=({labelledBy:e="main-content-title",...n})=>(0,t.jsx)(l,{"aria-labelledby":e,as:"main",id:"main-content",tabIndex:-1,...n})},39896:(T,b,s)=>{s.d(b,{x:()=>g});var t=s(88972),i=s(16294),r=s(7214);const l={color:!0,cursor:!0,height:!0,width:!0},g=t.default.div.withConfig({shouldForwardProp:(e,n)=>!l[e]&&n(e)})`
  // Font
  font-size: ${({fontSize:e,theme:n})=>(0,r.$)(n.fontSizes,e,e)};

  // Colors
  background: ${({theme:e,background:n})=>(0,r.$)(e.colors,n,n)};
  color: ${({theme:e,color:n})=>(0,r.$)(e.colors,n,void 0)};

  // Spaces
  ${({theme:e,padding:n})=>(0,i.Z)("padding",n,e)}
  ${({theme:e,paddingTop:n})=>(0,i.Z)("padding-top",n,e)}
  ${({theme:e,paddingRight:n})=>(0,i.Z)("padding-right",n,e)}
  ${({theme:e,paddingBottom:n})=>(0,i.Z)("padding-bottom",n,e)}
  ${({theme:e,paddingLeft:n})=>(0,i.Z)("padding-left",n,e)}
  ${({theme:e,marginLeft:n})=>(0,i.Z)("margin-left",n,e)}
  ${({theme:e,marginRight:n})=>(0,i.Z)("margin-right",n,e)}
  ${({theme:e,marginTop:n})=>(0,i.Z)("margin-top",n,e)}
  ${({theme:e,marginBottom:n})=>(0,i.Z)("margin-bottom",n,e)}

  // Responsive hiding
  ${({theme:e,hiddenS:n})=>n?`${e.mediaQueries.tablet} { display: none; }`:void 0}
  ${({theme:e,hiddenXS:n})=>n?`${e.mediaQueries.mobile} { display: none; }`:void 0}
  

  // Borders
  border-radius: ${({theme:e,hasRadius:n,borderRadius:m})=>n?e.borderRadius:m};
  border-style: ${({borderStyle:e})=>e};
  border-width: ${({borderWidth:e})=>e};
  border-color: ${({borderColor:e,theme:n})=>(0,r.$)(n.colors,e,void 0)};
  border: ${({theme:e,borderColor:n,borderStyle:m,borderWidth:p})=>{if(n&&!m&&typeof p>"u")return`1px solid ${e.colors[n]}`}};

  // Shadows
  box-shadow: ${({theme:e,shadow:n})=>(0,r.$)(e.shadows,n,void 0)};

  // Handlers
  pointer-events: ${({pointerEvents:e})=>e};
  &:hover {
    ${({_hover:e,theme:n})=>e?e(n):void 0}
  }

  // Display
  display: ${({display:e})=>e};

  // Position
  position: ${({position:e})=>e};
  left: ${({left:e,theme:n})=>(0,r.$)(n.spaces,e,e)};
  right: ${({right:e,theme:n})=>(0,r.$)(n.spaces,e,e)};
  top: ${({top:e,theme:n})=>(0,r.$)(n.spaces,e,e)};
  bottom: ${({bottom:e,theme:n})=>(0,r.$)(n.spaces,e,e)};
  z-index: ${({zIndex:e})=>e};
  overflow: ${({overflow:e})=>e};

  // Size
  width: ${({width:e,theme:n})=>(0,r.$)(n.spaces,e,e)};
  max-width: ${({maxWidth:e,theme:n})=>(0,r.$)(n.spaces,e,e)};
  min-width: ${({minWidth:e,theme:n})=>(0,r.$)(n.spaces,e,e)};
  height: ${({height:e,theme:n})=>(0,r.$)(n.spaces,e,e)};
  max-height: ${({maxHeight:e,theme:n})=>(0,r.$)(n.spaces,e,e)};
  min-height: ${({minHeight:e,theme:n})=>(0,r.$)(n.spaces,e,e)};

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
  line-height: ${({theme:e,lineHeight:n})=>(0,r.$)(e.lineHeights,n,n)};

  // Cursor
  cursor: ${({cursor:e})=>e};
`},4037:(T,b,s)=>{s.d(b,{Z:()=>o});var t=s(88972);const i="alpha",r="beta",l="delta",g="epsilon",e="omega",n="pi",m="sigma",p=[i,r,l,g,e,n,m],$=({ellipsis:d=!1})=>d&&`
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `,O=({variant:d=e,theme:a})=>{switch(d){case i:return`
        font-weight: ${a.fontWeights.bold};
        font-size: ${a.fontSizes[5]};
        line-height: ${a.lineHeights[2]};
      `;case r:return`
        font-weight: ${a.fontWeights.bold};
        font-size: ${a.fontSizes[4]};
        line-height: ${a.lineHeights[1]};
      `;case l:return`
        font-weight: ${a.fontWeights.semiBold};
        font-size: ${a.fontSizes[3]};
        line-height: ${a.lineHeights[2]};
      `;case g:return`
        font-size: ${a.fontSizes[3]};
        line-height: ${a.lineHeights[6]};
      `;case e:return`
        font-size: ${a.fontSizes[2]};
        line-height: ${a.lineHeights[4]};
      `;case n:return`
        font-size: ${a.fontSizes[1]};
        line-height: ${a.lineHeights[3]};
      `;case m:return`
        font-weight: ${a.fontWeights.bold};
        font-size: ${a.fontSizes[0]};
        line-height: ${a.lineHeights[5]};
        text-transform: uppercase;
      `;default:return`
        font-size: ${a.fontSizes[2]};
      `}};var c=s(7214);const u={fontSize:!0,fontWeight:!0},o=t.default.span.withConfig({shouldForwardProp:(d,a)=>!u[d]&&a(d)})`
  ${O}
  ${$}

  // These properties need to come after {variantStyle}, because they might
  // overwrite a variant attribute
  font-weight: ${({theme:d,fontWeight:a})=>(0,c.$)(d.fontWeights,a,void 0)};
  font-size: ${({theme:d,fontSize:a})=>(0,c.$)(d.fontSizes,a,void 0)};
  line-height: ${({theme:d,lineHeight:a})=>(0,c.$)(d.lineHeights,a,a)};
  color: ${({theme:d,textColor:a})=>d.colors[a||"neutral800"]};
  text-align: ${({textAlign:d})=>d};
  text-decoration: ${({textDecoration:d})=>d};
  text-transform: ${({textTransform:d})=>d};
`},16294:(T,b,s)=>{s.d(b,{Z:()=>t});const t=(i,r,l)=>{if(!r)return;if(typeof r=="object")return(Array.isArray(r)?r:[r?.desktop,r?.tablet,r?.mobile]).reduce((m,p,$)=>{if(p)switch($){case 0:return`${m}${i}: ${l.spaces[p]};`;case 1:return`${m}${l.mediaQueries.tablet}{${i}: ${l.spaces[p]};}`;case 2:return`${m}${l.mediaQueries.mobile}{${i}: ${l.spaces[p]};}`;default:return m}return m},"");const g=l.spaces[r]??r;return`${i}: ${g};`}},7214:(T,b,s)=>{s.d(b,{$:()=>r});function t(l,g){return typeof l=="string"?!1:g in l}function i(l){return l&&typeof l=="object"&&!Array.isArray(l)}function r(l,g,e){return g&&t(l,g)?l[g]:e}},29595:(T,b,s)=>{s.d(b,{O:()=>O});var t=s(85893),i=s(67294),r=s(88972),l=s(39896),g=s(4037);const e=()=>(0,t.jsx)(l.x,{"aria-hidden":!0,paddingLeft:1,paddingRight:1,children:(0,t.jsx)(g.Z,{variant:"pi",textColor:"neutral500",children:"/"})});e.displayName="Divider";var n=s(16294);const m={direction:!0},p=(0,r.default)(l.x).withConfig({shouldForwardProp:(c,u)=>!m[c]&&u(c)})`
  align-items: ${({alignItems:c="center"})=>c};
  display: ${({display:c="flex",inline:u})=>u?"inline-flex":c};
  flex-direction: ${({direction:c="row"})=>c};
  flex-shrink: ${({shrink:c})=>c};
  flex-wrap: ${({wrap:c})=>c};
  ${({gap:c,theme:u})=>(0,n.Z)("gap",c,u)};
  justify-content: ${({justifyContent:c})=>c};
`,$=(0,r.default)(p)`
  // CrumbLinks do have padding-x, because they need to have a
  // interaction effect, which mis-aligns the breadcrumbs on the left.
  // This normalizes the behavior by moving the first item to left by
  // the same amount it has inner padding
  :first-child {
    margin-left: ${({theme:c})=>`calc(-1*${c.spaces[2]})`};
  }
`,O=({label:c,children:u,...o})=>{const d=i.Children.toArray(u);return(0,t.jsx)(l.x,{"aria-label":c,...o,children:(0,t.jsx)($,{as:"ol",children:i.Children.map(d,(a,x)=>{const P=d.length>1&&x+1<d.length;return(0,t.jsxs)(p,{inline:!0,as:"li",children:[a,P&&(0,t.jsx)(e,{})]})})})})};O.displayName="Breadcrumbs"},73208:(T,b,s)=>{s.d(b,{$:()=>l});var t=s(85893),i=s(39896),r=s(4037);const l=({children:g,isCurrent:e=!1,...n})=>(0,t.jsx)(i.x,{paddingLeft:2,paddingRight:2,paddingTop:1,paddingBottom:1,children:(0,t.jsx)(r.Z,{variant:"pi",textColor:"neutral800",fontWeight:e?"bold":"normal","aria-current":e,...n,children:g})});l.displayName="Crumb"}}]);
