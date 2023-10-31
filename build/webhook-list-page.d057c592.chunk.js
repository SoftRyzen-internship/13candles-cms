"use strict";(self.webpackChunk_13_candles_cms=self.webpackChunk_13_candles_cms||[]).push([[4121],{21162:(R,h,t)=>{t.r(h),t.d(h,{default:()=>ue});var e=t(67294),s=t(20297),c=t(86706),u=t(36364),g=t(7836),L=t(67242),S=t(85841),D=t(57497),j=t(44175),l=t(50922),C=t(39219),k=t(24),U=t(97554),_=t(54571),ee=t(20613),te=t(67245),K=t(40313),i=t(28873),V=t(89310),ne=t(45147),ae=t(22500),w=t(61697),E=t(85893),F=t(88972);const P=F.default.div`
  background: ${({theme:o})=>o.colors.danger500};
  border: none;
  border-radius: 16px;
  position: relative;
  height: ${24/16}rem;
  width: ${40/16}rem;

  & span {
    font-size: ${({visibleLabels:o})=>o?"1rem":0};
  }

  &:before {
    content: '';
    background: ${({theme:o})=>o.colors.neutral0};
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    position: absolute;
    transition: all 0.5s;
    left: ${({theme:o})=>o.spaces[1]};
    top: ${({theme:o})=>o.spaces[1]};
  }

  @media (prefers-reduced-motion: reduce) {
    &:before {
      transition: none;
    }
  }
`,se=F.default.button`
  background: transparent;
  padding: 0;
  border: none;

  &[aria-checked='true'] ${P} {
    background: ${({theme:o})=>o.colors.success500};
  }

  &[aria-checked='true'] ${P}:before {
    transform: translateX(1rem);
  }
`,oe=e.forwardRef(({label:o,onChange:m,onLabel:f="On",offLabel:d="Off",selected:M,visibleLabels:a=!1,...v},b)=>(0,E.jsx)(se,{ref:b,role:"switch","aria-checked":M,"aria-label":o,onClick:m,visibleLabels:a,type:"button",...v,children:(0,E.jsxs)(w.k,{children:[(0,E.jsxs)(P,{children:[(0,E.jsx)("span",{children:f}),(0,E.jsx)("span",{children:d})]}),a&&(0,E.jsx)(U.x,{as:"span","aria-hidden":!0,paddingLeft:2,color:M?"success600":"danger600",children:M?f:d})]})}));var z=t(61829),le=t(22949),$=t(26911),H=t(19171),re=t(19600),ie=t(24425),de=t(86896),B=t(88767),N=t(16550);const ce=()=>{const[o,m]=(0,e.useState)(!1),[f,d]=(0,e.useState)([]),M=(0,c.v9)(u._),{formatMessage:a}=(0,de.Z)(),{formatAPIError:v}=(0,s.So)(),b=(0,s.lm)();(0,s.go)();const{push:me}=(0,N.k6)(),{pathname:Q}=(0,N.TH)(),{isLoading:he,allowedActions:{canCreate:O,canUpdate:Y,canDelete:G}}=(0,s.ss)(M.settings.webhooks),{get:ge,post:Ee,put:fe}=(0,s.kY)(),{notifyStatus:X}=(0,g.G)(),ve="webhooks",{isLoading:be,data:x,error:W,refetch:J}=(0,B.useQuery)(ve,async()=>{const{data:{data:n}}=await ge("/admin/webhooks");return n});(0,e.useEffect)(()=>{if(W){b({type:"warning",message:v(W)});return}x&&X(a({id:"Settings.webhooks.list.loading.success",defaultMessage:"Webhooks have been loaded"}))},[x,W,b,a,X,v]);const q=(0,B.useMutation)(async()=>{await Ee("/admin/webhooks/batch-delete",{ids:f})},{onError(n){b({type:"warning",message:v(n)}),m(!1)},onSuccess(){d([]),m(!1),J()}}),xe=(0,B.useMutation)(async({isEnabled:n,id:r})=>{const{id:p,...I}=x.find(pe=>pe.id===r)??{},Te={...I,isEnabled:n};await fe(`/admin/webhooks/${r}`,Te)},{onError(n){b({type:"warning",message:v(n)})},onSuccess(){J()}}),Me=()=>q.mutate(),ye=n=>d(n?x.map(r=>r.id):[]),Ce=(n,r)=>d(n?p=>[...p,r]:p=>p.filter(I=>I!==r)),A=n=>me(`${Q}/${n}`),Z=he||be,T=x?.length??0,y=f.length;return e.createElement(L.A,null,e.createElement(s.SL,{name:"Webhooks"}),e.createElement(S.o,{"aria-busy":Z},e.createElement(D.T,{title:a({id:"Settings.webhooks.title",defaultMessage:"Webhooks"}),subtitle:a({id:"Settings.webhooks.list.description",defaultMessage:"Get POST changes notifications"}),primaryAction:O&&!Z&&e.createElement(s.Qj,{startIcon:e.createElement($.Z,null),variant:"default",to:`${Q}/create`,size:"S"},a({id:"Settings.webhooks.list.button.add",defaultMessage:"Create new webhook"}))}),y>0&&G&&e.createElement(j.Z,{startActions:e.createElement(e.Fragment,null,e.createElement(l.Z,{variant:"epsilon",textColor:"neutral600"},a({id:"Settings.webhooks.to.delete",defaultMessage:"{webhooksToDeleteLength, plural, one {# webhook} other {# webhooks}} selected"},{webhooksToDeleteLength:y})),e.createElement(C.z,{onClick:()=>m(!0),startIcon:e.createElement(H.Z,null),size:"L",variant:"danger-light"},a({id:"global.delete",defaultMessage:"Delete"})))}),e.createElement(k.D,null,Z?e.createElement(U.x,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0},e.createElement(s.dO,null)):T>0?e.createElement(_.i,{colCount:5,rowCount:T+1,footer:e.createElement(ee.c,{onClick:()=>O?A("create"):{},icon:e.createElement($.Z,null)},a({id:"Settings.webhooks.list.button.add",defaultMessage:"Create new webhook"}))},e.createElement(te.h,null,e.createElement(K.Tr,null,e.createElement(i.Th,null,e.createElement(V.C,{"aria-label":a({id:"global.select-all-entries",defaultMessage:"Select all entries"}),indeterminate:y>0&&y<T,value:y===T,onValueChange:ye})),e.createElement(i.Th,{width:"20%"},e.createElement(l.Z,{variant:"sigma",textColor:"neutral600"},a({id:"global.name",defaultMessage:"Name"}))),e.createElement(i.Th,{width:"60%"},e.createElement(l.Z,{variant:"sigma",textColor:"neutral600"},a({id:"Settings.webhooks.form.url",defaultMessage:"URL"}))),e.createElement(i.Th,{width:"20%"},e.createElement(l.Z,{variant:"sigma",textColor:"neutral600"},a({id:"Settings.webhooks.list.th.status",defaultMessage:"Status"}))),e.createElement(i.Th,null,e.createElement(ne.T,null,a({id:"Settings.webhooks.list.th.actions",defaultMessage:"Actions"}))))),e.createElement(ae.p,null,x.map(n=>e.createElement(K.Tr,{key:n.id,...(0,s.X7)({fn:()=>A(n.id),condition:Y})},e.createElement(i.Td,{...s.UW},e.createElement(V.C,{"aria-label":`${a({id:"global.select",defaultMessage:"Select"})} ${n.name}`,value:f?.includes(n.id),onValueChange:r=>Ce(r,n.id),name:"select"})),e.createElement(i.Td,null,e.createElement(l.Z,{fontWeight:"semiBold",textColor:"neutral800"},n.name)),e.createElement(i.Td,null,e.createElement(l.Z,{textColor:"neutral800"},n.url)),e.createElement(i.Td,null,e.createElement(w.k,null,e.createElement(oe,{onLabel:a({id:"global.enabled",defaultMessage:"Enabled"}),offLabel:a({id:"global.disabled",defaultMessage:"Disabled"}),label:`${n.name} ${a({id:"Settings.webhooks.list.th.status",defaultMessage:"Status"})}`,selected:n.isEnabled,onChange:r=>{r.stopPropagation(),xe.mutate({isEnabled:!n.isEnabled,id:n.id})},visibleLabels:!0}))),e.createElement(i.Td,null,e.createElement(w.k,{gap:1},Y&&e.createElement(z.h,{label:a({id:"Settings.webhooks.events.update",defaultMessage:"Update"}),icon:e.createElement(re.Z,null),noBorder:!0}),G&&e.createElement(z.h,{onClick:r=>{r.stopPropagation(),d([n.id]),m(!0)},label:a({id:"Settings.webhooks.events.delete",defaultMessage:"Delete webhook"}),icon:e.createElement(H.Z,null),noBorder:!0}))))))):e.createElement(le.x,{icon:e.createElement(ie.Z,{width:"160px"}),content:a({id:"Settings.webhooks.list.empty.description",defaultMessage:"No webhooks found"}),action:e.createElement(C.z,{variant:"secondary",startIcon:e.createElement($.Z,null),onClick:()=>O?A("create"):{}},a({id:"Settings.webhooks.list.button.add",defaultMessage:"Create new webhook"}))}))),e.createElement(s.QH,{isOpen:o,onToggleDialog:()=>m(n=>!n),onConfirm:Me,isConfirmButtonLoading:q.isLoading}))},ue=()=>{const o=(0,c.v9)(u._);return e.createElement(s.O4,{permissions:o.settings.webhooks.main},e.createElement(ce,null))}},44175:(R,h,t)=>{t.d(h,{Z:()=>c});var e=t(85893),s=t(61697);const c=({startActions:u,endActions:g})=>!u&&!g?null:(0,e.jsxs)(s.k,{justifyContent:"space-between",alignItems:"flex-start",paddingBottom:4,paddingLeft:10,paddingRight:10,children:[(0,e.jsx)(s.k,{gap:2,wrap:"wrap",children:u}),(0,e.jsx)(s.k,{gap:2,shrink:0,wrap:"wrap",children:g})]})},20613:(R,h,t)=>{t.d(h,{c:()=>j});var e=t(85893),s=t(88972),c=t(97554),u=t(7223),g=t(61697),L=t(50922);const S=(0,s.default)(c.x)`
  height: ${24/16}rem;
  width: ${24/16}rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    height: ${10/16}rem;
    width: ${10/16}rem;
  }

  svg path {
    fill: ${({theme:l})=>l.colors.primary600};
  }
`,D=(0,s.default)(c.x)`
  border-radius: 0 0 ${({theme:l})=>l.borderRadius} ${({theme:l})=>l.borderRadius};
  display: block;
  width: 100%;
  border: none;
`,j=({children:l,icon:C,...k})=>(0,e.jsxs)("div",{children:[(0,e.jsx)(u.i,{}),(0,e.jsx)(D,{as:"button",background:"primary100",padding:5,...k,children:(0,e.jsxs)(g.k,{children:[(0,e.jsx)(S,{"aria-hidden":!0,background:"primary200",children:C}),(0,e.jsx)(c.x,{paddingLeft:3,children:(0,e.jsx)(L.Z,{variant:"pi",fontWeight:"bold",textColor:"primary600",children:l})})]})})]})}}]);
