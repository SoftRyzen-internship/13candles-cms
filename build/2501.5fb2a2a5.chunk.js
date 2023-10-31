"use strict";(self.webpackChunk_13_candles_cms=self.webpackChunk_13_candles_cms||[]).push([[2501],{84409:(D,d,e)=>{e.d(d,{p:()=>o});var t=e(67294),u=e(20297),c=e(88767);const o=(l={})=>{const{get:s}=(0,u.kY)(),{data:E,isLoading:a}=(0,c.useQuery)(["ee","providers"],async()=>{const{data:g}=await s("/admin/providers");return g},l);return{providers:t.useMemo(()=>E??[],[E]),isLoading:a}}},80090:(D,d,e)=>{e.d(d,{Z:()=>f});var t=e(67294),u=e(61697),c=e(31798),o=e(50922),l=e(54033),s=e(89899),E=e(45697),a=e.n(E),h=e(86896),g=e(73727),P=e(88972);const p=P.default.a`
  width: ${136/16}rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${48/16}rem;
  border: 1px solid ${({theme:n})=>n.colors.neutral150};
  border-radius: ${({theme:n})=>n.borderRadius};
  text-decoration: inherit;
  &:link {
    text-decoration: none;
  }
  color: ${({theme:n})=>n.colors.neutral600};
`,O=(0,P.default)(u.k)`
  & a:not(:first-child):not(:last-child) {
    margin: 0 ${({theme:n})=>n.spaces[2]};
  }
  & a:first-child {
    margin-right: ${({theme:n})=>n.spaces[2]};
  }
  & a:last-child {
    margin-left: ${({theme:n})=>n.spaces[2]};
  }
`,i=({provider:n})=>t.createElement(c.u,{label:n.displayName},t.createElement(p,{href:`${window.strapi.backendURL}/admin/connect/${n.uid}`},n.icon?t.createElement("img",{src:n.icon,"aria-hidden":!0,alt:"",height:"32px"}):t.createElement(o.Z,null,n.displayName)));i.propTypes={provider:a().shape({icon:a().string,displayName:a().string.isRequired,uid:a().string.isRequired}).isRequired};const v=({providers:n,displayAllProviders:M})=>{const{formatMessage:y}=(0,h.Z)();return M?t.createElement(l.r,{gap:4},n.map(r=>t.createElement(s.P,{key:r.uid,col:4},t.createElement(i,{provider:r})))):n.length>2&&!M?t.createElement(l.r,{gap:4},n.slice(0,2).map(r=>t.createElement(s.P,{key:r.uid,col:4},t.createElement(i,{provider:r}))),t.createElement(s.P,{col:4},t.createElement(c.u,{label:y({id:"global.see-more"})},t.createElement(p,{as:g.rU,to:"/auth/providers"},t.createElement("span",{"aria-hidden":!0},"\u2022\u2022\u2022"))))):t.createElement(O,{justifyContent:"center"},n.map(r=>t.createElement(i,{key:r.uid,provider:r})))};v.defaultProps={displayAllProviders:!0},v.propTypes={providers:a().arrayOf(a().object).isRequired,displayAllProviders:a().bool};const f=v},52501:(D,d,e)=>{e.r(d),e.d(d,{FORMS:()=>r});var t=e(67294),u=e(7223),c=e(85841),o=e(97554),l=e(50922),s=e(61697),E=e(70257),a=e(39219),h=e(20297),g=e(86896),P=e(16550),p=e(88972),O=e(43847),i=e(50745),v=e(84409),f=e(80090);const n=(0,p.default)(u.i)`
  flex: 1;
`,r={providers:{Component:()=>{const{push:R}=(0,P.k6)(),{formatMessage:m}=(0,g.Z)(),{isLoading:C,providers:A}=(0,v.p)({enabled:window.strapi.features.isEnabled(window.strapi.features.SSO)}),T=()=>{R("/auth/login")};return!window.strapi.features.isEnabled(window.strapi.features.SSO)||!C&&A.length===0?t.createElement(P.l_,{to:"/auth/login"}):t.createElement(i.ZP,null,t.createElement(c.o,null,t.createElement(i.bU,null,t.createElement(i.sg,null,t.createElement(O.T,null),t.createElement(o.x,{paddingTop:6,paddingBottom:1},t.createElement(l.Z,{as:"h1",variant:"alpha"},m({id:"Auth.form.welcome.title"}))),t.createElement(o.x,{paddingBottom:7},t.createElement(l.Z,{variant:"epsilon",textColor:"neutral600"},m({id:"Auth.login.sso.subtitle"})))),t.createElement(s.k,{direction:"column",alignItems:"stretch",gap:7},C?t.createElement(s.k,{justifyContent:"center"},t.createElement(E.a,null,m({id:"Auth.login.sso.loading"}))):t.createElement(f.Z,{providers:A}),t.createElement(s.k,null,t.createElement(n,null),t.createElement(o.x,{paddingLeft:3,paddingRight:3},t.createElement(l.Z,{variant:"sigma",textColor:"neutral600"},m({id:"or"}))),t.createElement(n,null)),t.createElement(a.z,{fullWidth:!0,size:"L",onClick:T},m({id:"Auth.form.button.login.strapi"})))),t.createElement(s.k,{justifyContent:"center"},t.createElement(o.x,{paddingTop:4},t.createElement(h.rU,{to:"/auth/forgot-password"},t.createElement(l.Z,{variant:"pi"},m({id:"Auth.link.forgot-password"})))))))},endPoint:null,fieldsToDisable:[],fieldsToOmit:[],schema:null,inputsPrefix:""}}}}]);
