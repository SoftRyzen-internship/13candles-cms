(self.webpackChunk_13_candles_cms=self.webpackChunk_13_candles_cms||[]).push([[2544],{98374:(V,$,s)=>{"use strict";s.d($,{F:()=>O});var e=s(67294),f=s(20297),b=s(86896),h=s(88767);const O=(x={},R={})=>{const{id:C="",...T}=x,{get:W}=(0,f.kY)(),{locale:a}=(0,b.Z)(),k=(0,f.Xe)(a,{sensitivity:"base"}),{data:u,error:S,isError:N,isLoading:g,refetch:A}=(0,h.useQuery)(["roles",C,T],async()=>{const{data:Q}=await W(`/admin/roles/${C??""}`,{params:T});return Q},R);return{roles:e.useMemo(()=>{let Q=[];return u&&(Array.isArray(u.data)?Q=u.data:Q=[u.data]),[...Q].sort((oe,ee)=>k.compare(oe.name,ee.name))},[u,k]),error:S,isError:N,isLoading:g,refetch:A}}},24233:(V,$,s)=>{"use strict";s.d($,{V:()=>b});var e=s(20297),f=s(88767);const b=(h={id:null},O={})=>{const{id:x,...R}=h,{get:C}=(0,e.kY)(),{data:T,error:W,isError:a,isLoading:k,refetch:u}=(0,f.useQuery)(["roles",x,"permissions",R],async()=>{const{data:{data:S}}=await C(`/admin/roles/${x}/permissions`,{params:R});return S},O);return{permissions:T,error:W,isError:a,isLoading:k,refetch:u}}},25545:(V,$,s)=>{"use strict";s.r($),s.d($,{CreatePage:()=>me,default:()=>Te});var e=s(67294),f=s(85841),b=s(57497),h=s(61697),O=s(39219),x=s(24),R=s(97554),C=s(50922),T=s(54033),W=s(89899),a=s(22790),k=s(37252),u=s(20297),S=s(87370),N=s(66115),g=s(41054),A=s(41609),z=s.n(A),Q=s(86896),oe=s(86706),ee=s(16550),v=s(88972),de=s(36364),J=s(30909),te=s(90065),Y=s(24233),ue=s(87561);const Le=ue.Ry().shape({name:ue.Z_().required(u.I0.required),description:ue.Z_().required(u.I0.required)}),ce=v.default.div`
  border: 1px solid ${({theme:X})=>X.colors.primary200};
  background: ${({theme:X})=>X.colors.primary100};
  padding: ${({theme:X})=>`${X.spaces[2]} ${X.spaces[4]}`};
  color: ${({theme:X})=>X.colors.primary600};
  border-radius: ${({theme:X})=>X.borderRadius};
  font-size: ${12/16}rem;
  font-weight: bold;
`,me=()=>{const X=(0,ee.$B)("/settings/roles/duplicate/:id"),xe=(0,u.lm)(),{lockApp:Z,unlockApp:w}=(0,u.o1)(),{formatMessage:j}=(0,Q.Z)(),[_,re]=(0,e.useState)(!1),{replace:he}=(0,ee.k6)(),G=(0,e.useRef)(),{trackUsage:Re}=(0,u.rS)(),{post:ye,put:ke}=(0,u.kY)(),{params:Ce}=X??{},{isLoading:Fe,data:Ne}=(0,te.d)(Ce?.id,{cacheTime:0}),{permissions:pe,isLoading:Pe}=(0,Y.V)({id:Ce?.id},{cacheTime:0,enabled:!!Ce?.id}),We=Se=>{Z(),re(!0),Ce?.id?Re("willDuplicateRole"):Re("willCreateNewRole"),Promise.resolve(ye("/admin/roles",Se)).then(async({data:ae})=>{const{permissionsToSend:le}=G.current.getPermissions();return Ce?.id?Re("didDuplicateRole"):Re("didCreateNewRole"),ae.data.id&&!z()(le)&&await ke(`/admin/roles/${ae.data.id}/permissions`,{permissions:le}),ae}).then(ae=>{re(!1),xe({type:"success",message:{id:"Settings.roles.created",defaultMessage:"created"}}),he(`/settings/roles/${ae.data.id}`)}).catch(ae=>{console.error(ae),re(!1),xe({type:"warning",message:{id:"notification.error"}})}).finally(()=>{w()})},Ze=`${j({id:"Settings.roles.form.created",defaultMessage:"Created"})} ${(0,N.Z)(new Date,"PPP")}`;return e.createElement(f.o,null,e.createElement(u.SL,{name:"Roles"}),e.createElement(g.J9,{initialValues:{name:"",description:Ze},onSubmit:We,validationSchema:Le,validateOnChange:!1},({handleSubmit:Se,values:ae,errors:le,handleReset:Ee,handleChange:ne})=>e.createElement(u.l0,{noValidate:!0},e.createElement(e.Fragment,null,e.createElement(b.T,{primaryAction:e.createElement(h.k,{gap:2},e.createElement(O.z,{variant:"secondary",onClick:()=>{Ee(),G.current.resetForm()},size:"L"},j({id:"app.components.Button.reset",defaultMessage:"Reset"})),e.createElement(O.z,{onClick:Se,loading:_,size:"L"},j({id:"global.save",defaultMessage:"Save"}))),title:j({id:"Settings.roles.create.title",defaultMessage:"Create a role"}),subtitle:j({id:"Settings.roles.create.description",defaultMessage:"Define the rights given to the role"}),navigationAction:e.createElement(u.rU,{startIcon:e.createElement(S.Z,null),to:"/settings/roles"},j({id:"global.back",defaultMessage:"Back"}))}),e.createElement(x.D,null,e.createElement(h.k,{direction:"column",alignItems:"stretch",gap:6},e.createElement(R.x,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0},e.createElement(h.k,{direction:"column",alignItems:"stretch",gap:4},e.createElement(h.k,{justifyContent:"space-between"},e.createElement(R.x,null,e.createElement(R.x,null,e.createElement(C.Z,{fontWeight:"bold"},j({id:"global.details",defaultMessage:"Details"}))),e.createElement(R.x,null,e.createElement(C.Z,{variant:"pi",textColor:"neutral600"},j({id:"Settings.roles.form.description",defaultMessage:"Name and description of the role"})))),e.createElement(ce,null,j({id:"Settings.roles.form.button.users-with-role",defaultMessage:"{number, plural, =0 {# users} one {# user} other {# users}} with this role"},{number:0}))),e.createElement(T.r,{gap:4},e.createElement(W.P,{col:6},e.createElement(a.o,{name:"name",error:le.name&&j({id:le.name}),label:j({id:"global.name",defaultMessage:"Name"}),onChange:ne,required:!0,value:ae.name})),e.createElement(W.P,{col:6},e.createElement(k.g,{label:j({id:"global.description",defaultMessage:"Description"}),id:"description",error:le.description&&j({id:le.description}),onChange:ne},ae.description))))),!Fe&&!Pe?e.createElement(R.x,{shadow:"filterShadow",hasRadius:!0},e.createElement(J.Z,{isFormDisabled:!1,ref:G,permissions:pe,layout:Ne})):e.createElement(R.x,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0},e.createElement(u.dO,null))))))))};function Te(){const X=(0,oe.v9)(de._);return e.createElement(u.O4,{permissions:X.settings.roles.create},e.createElement(me,null))}},30909:(V,$,s)=>{"use strict";s.d($,{Z:()=>ts});var e=s(67294),f=s(67765),b=s(63575),h=s(65454),O=s(20297),x=s(18721),R=s.n(x),C=s(41609),T=s.n(C),W=s(45697),a=s.n(W),k=s(86896),u=s(97554),S=s(89734),N=s.n(S),g=s(88972),A=s(61697),z=s(89310),Q=s(6849),oe=s(37883),ee=s(27361),v=s.n(ee),de=s(57557),J=s.n(de);const te=e.createContext(null),Y=()=>e.useContext(te);var ue=s(39219),be=s(41235);const Le=g.default.div`
  position: relative;

  ${({hasConditions:t,disabled:n,theme:r})=>t&&`
    &:before {
      content: '';
      position: absolute;
      top: -3px;
      left: -10px;
      width: 6px;
      height: 6px;
      border-radius: ${20/16}rem;;
      background: ${n?r.colors.neutral100:r.colors.primary600};
    }
  `}
`,ce=({onClick:t,className:n,hasConditions:r,variant:o})=>{const{formatMessage:i}=(0,k.Z)();return e.createElement(Le,{hasConditions:r,className:n},e.createElement(ue.z,{variant:o,startIcon:e.createElement(be.Z,null),onClick:t},i({id:"global.settings",defaultMessage:"Settings"})))};ce.defaultProps={className:null,hasConditions:!1,variant:"tertiary"},ce.propTypes={onClick:a().func.isRequired,className:a().string,hasConditions:a().bool,variant:a().string};const me=(0,g.default)(ce)``;var Te=s(36956),X=s(67366),xe=s(162),Z=s(50922),w=s(289),j=s(82392),_=s(75071),re=s(18172),he=s(7739),G=s.n(he),Re=s(11700),ye=s.n(Re),ke=s(73685);const Ce=t=>Object.values(t).map(n=>Object.entries(n).filter(([,r])=>r).map(([r])=>r)).flat(),Fe=t=>t.reduce((n,[r,o])=>(n.push({label:ye()(r),children:o.map(i=>({label:i.displayName,value:i.id}))}),n),[]),Ne=(t,n)=>t.map(([,r])=>r).flat().reduce((r,o)=>({[o.id]:n.includes(o.id),...r}),{}),pe=({arrayOfOptionsGroupedByCategory:t,isFormDisabled:n,isGrey:r,label:o,name:i,onChange:l,value:c})=>{const{formatMessage:d}=(0,k.Z)(),p=m=>{l(i,Ne(t,m))};return e.createElement(A.k,{as:"li",background:r?"neutral100":"neutral0",paddingBottom:3,paddingTop:3},e.createElement(A.k,{paddingLeft:6,style:{width:180}},e.createElement(Z.Z,{variant:"sigma",textColor:"neutral600"},d({id:"Settings.permissions.conditions.can",defaultMessage:"Can"}),"\xA0"),e.createElement(Z.Z,{variant:"sigma",title:o,textColor:"primary600",ellipsis:!0},d({id:`Settings.roles.form.permissions.${o.toLowerCase()}`,defaultMessage:o})),e.createElement(Z.Z,{variant:"sigma",textColor:"neutral600"},"\xA0",d({id:"Settings.permissions.conditions.when",defaultMessage:"When"}))),e.createElement(u.x,{style:{maxWidth:430,width:"100%"}},e.createElement(ke.Q,{id:i,customizeContent:m=>`${m.length} currently selected`,onChange:p,value:Ce(c),options:Fe(t),disabled:n})))};pe.propTypes={arrayOfOptionsGroupedByCategory:a().array.isRequired,isFormDisabled:a().bool.isRequired,isGrey:a().bool.isRequired,label:a().string.isRequired,name:a().string.isRequired,value:a().object.isRequired,onChange:a().func.isRequired};const Pe=pe,We=(t,n)=>t.reduce((r,o)=>(r[o.id]=v()(n,o.id,!1),r),{}),Ze=(t,n)=>t.reduce((r,o)=>{const[i,l]=o,c=We(l,n);return r[i]=c,r},{}),ae=(t,n,r)=>t.reduce((o,i)=>{const l=v()(n,[...i.pathToConditionsObject,"conditions"],{}),c=Ze(r,l);return o[i.pathToConditionsObject.join("..")]=c,o},{}),le=({actions:t,headerBreadCrumbs:n,isFormDisabled:r,onClosed:o,onToggle:i})=>{const{formatMessage:l}=(0,k.Z)(),{availableConditions:c,modifiedData:d,onChangeConditions:p}=Y(),m=(0,e.useMemo)(()=>Object.entries(G()(c,"category")),[c]),y=t.filter(({isDisplayed:E,hasSomeActionsSelected:B,hasAllActionsSelected:L})=>E&&(B||L)),P=(0,e.useMemo)(()=>ae(y,d,m),[y,d,m]),[D,K]=(0,e.useState)(P),I=(E,B)=>{K((0,re.ZP)(L=>{L[E]||(L[E]={}),L[E].default||(L[E].default={}),L[E].default=B}))},M=()=>{const E=Object.entries(D).reduce((B,L)=>{const[F,se]=L,H=Object.values(se).reduce((q,U)=>({...q,...U}),{});return B[F]=H,B},{});p(E),i()};return e.createElement(Te.P,{labelledBy:"condition-modal-breadcrumbs",onClose:o},e.createElement(X.x,null,e.createElement(j.O,{id:"condition-modal-breadcrumbs",label:n.join(", ")},n.map((E,B,L)=>e.createElement(_.$,{isCurrent:B===L.length-1,key:E},ye()(l({id:E,defaultMessage:E})))))),e.createElement(xe.f,null,y.length===0&&e.createElement(Z.Z,null,l({id:"Settings.permissions.conditions.no-actions",defaultMessage:"You first need to select actions (create, read, update, ...) before defining conditions on them."})),e.createElement("ul",null,y.map(({actionId:E,label:B,pathToConditionsObject:L},F)=>{const se=L.join("..");return e.createElement(Pe,{key:E,arrayOfOptionsGroupedByCategory:m,label:B,isFormDisabled:r,isGrey:F%2===0,name:se,onChange:I,value:v()(D,se,{})})}))),e.createElement(w.m,{startActions:e.createElement(ue.z,{variant:"tertiary",onClick:i},l({id:"app.components.Button.cancel",defaultMessage:"Cancel"})),endActions:e.createElement(ue.z,{onClick:M},l({id:"Settings.permissions.conditions.apply",defaultMessage:"Apply"}))}))};le.propTypes={actions:a().arrayOf(a().shape({actionId:a().string.isRequired,checkboxName:a().string,hasSomeActionsSelected:a().bool.isRequired,hasAllActionsSelected:a().bool,isDisplayed:a().bool.isRequired,label:a().string})).isRequired,headerBreadCrumbs:a().arrayOf(a().string).isRequired,isFormDisabled:a().bool.isRequired,onClosed:a().func.isRequired,onToggle:a().func.isRequired};const Ee=le,ne=`${120/16}rem`,Me=`${200/16}rem`,je=`${53/16}rem`,Ge=g.default.div`
  width: ${ne};
`,at=(0,g.default)(A.k)`
  padding-right: ${({theme:t})=>t.spaces[2]};
  overflow: hidden;
  flex: 1;
  ${({isCollapsable:t})=>t&&"cursor: pointer;"}
`,ze=({children:t,isCollapsable:n,isActive:r,isFormDisabled:o,label:i,onChange:l,onClick:c,checkboxName:d,someChecked:p,value:m})=>{const{formatMessage:y}=(0,k.Z)();return e.createElement(A.k,{alignItems:"center",paddingLeft:6,style:{width:Me,flexShrink:0}},e.createElement(u.x,{paddingRight:2},e.createElement(z.C,{name:d,"aria-label":y({id:"Settings.permissions.select-all-by-permission",defaultMessage:"Select all {label} permissions"},{label:i}),disabled:o,onValueChange:P=>l({target:{name:d,value:P}}),indeterminate:p,value:m})),e.createElement(at,{title:i,alignItems:"center",isCollapsable:n,...n&&{onClick:c,"aria-expanded":r,onKeyDown:({key:P})=>(P==="Enter"||P===" ")&&c(),tabIndex:0,role:"button"}},e.createElement(Z.Z,{fontWeight:r?"bold":"",textColor:r?"primary600":"neutral800",ellipsis:!0},ye()(i)),t))};ze.defaultProps={children:null,checkboxName:"",onChange(){},value:!1,someChecked:!1,isCollapsable:!1},ze.propTypes={checkboxName:a().string,children:a().node,label:a().string.isRequired,isCollapsable:a().bool,isFormDisabled:a().bool.isRequired,onChange:a().func,onClick:a().func.isRequired,someChecked:a().bool,value:a().bool,isActive:a().bool.isRequired};const it=(0,e.memo)(ze);var Zt=s(42348),Vt=s.n(Zt),Kt=s(13218),Ae=s.n(Kt);const lt=t=>Ae()(t)?Vt()(Object.values(t).map(n=>Ae()(n)?lt(n):n)):[],Ie=lt,Ye=t=>t?Object.keys(t).reduce((n,r)=>(r!=="conditions"&&(n[r]=t[r]),n),{}):null,Oe=t=>{const n=Ye(t),r=Ie(n);if(!r.length)return{hasAllActionsSelected:!1,hasSomeActionsSelected:!1};const o=r.every(l=>l),i=r.some(l=>l)&&!o;return{hasAllActionsSelected:o,hasSomeActionsSelected:i}};var Ut=s(97407);const Ve=(0,g.default)(Ut.Z)`
  display: none;
  width: ${10/16}rem;
  transform: rotate(${({$isActive:t})=>t?"180":"0"}deg);
  margin-left: ${({theme:t})=>t.spaces[2]};
`,Ke=t=>`
  ${Z.Z} {
    color: ${t.colors.primary600};
    font-weight: ${t.fontWeights.bold}
  }
  ${Ve} {
    display: block;
    path {
      fill: ${t.colors.primary600}
    };
  }
`,Ht=(t,n,r)=>t.map(({actionId:o,isDisplayed:i,applyToProperties:l,label:c})=>{if(!i)return{actionId:o,hasSomeActionsSelected:!1,isDisplayed:i};const d=[...r.split(".."),o],p=T()(l)?[...d,"properties","enabled"]:d,m=p.join(".."),y=v()(n,[...d,"conditions"],null),P=Ie(y).some(M=>M);if(T()(l)){const M=v()(n,p,!1);return{actionId:o,checkboxName:m,hasAllActionsSelected:M,hasConditions:P,hasSomeActionsSelected:M,isDisplayed:i,isParentCheckbox:!1,label:c,pathToConditionsObject:d}}const D=v()(n,p,null),{hasAllActionsSelected:K,hasSomeActionsSelected:I}=Oe(D);return{actionId:o,checkboxName:m,hasAllActionsSelected:K,hasConditions:P,hasSomeActionsSelected:I,isDisplayed:i,isParentCheckbox:!0,label:c,pathToConditionsObject:d}}),Xe=(t,n)=>`
  ${ct} {
    background-color: ${t.colors.primary100};
    color: ${t.colors.primary600};
    border-radius: ${n?"2px 2px 0 0":"2px"};
  }
  ${ut} {
    display: flex;
  }
  ${me} {
    display: block;
  }
  &:hover {
   ${Ke(t)}
  }

  &:focus-within {
    ${({theme:r,isActive:o})=>Xe(r,o)}
  }
  
`,ct=g.default.div`
  flex: 1;
  display: flex;
  align-items: center;
  height: ${je};
  background-color: ${({isGrey:t,theme:n})=>t?n.colors.neutral100:n.colors.neutral0};
  border: 1px solid transparent;
`,Gt=g.default.div`
  display: inline-flex;
  min-width: 100%;

  ${me} {
    display: none;
  }
  ${({isActive:t,theme:n})=>t&&Xe(n,t)}
  &:hover {
    ${({theme:t,isActive:n})=>Xe(t,n)}
  }
`,dt=(0,g.default)(A.k)`
  width: ${ne};
  position: relative;
`,ut=(0,g.default)(u.x)`
  display: none;
  svg {
    width: 11px;
  }
  * {
    fill: ${({theme:t})=>t.colors.primary600};
  }
`,mt=g.default.span`
  position: absolute;
  top: -6px;
  left: 37px;
  width: 6px;
  height: 6px;
  border-radius: 20px;
  background: ${({theme:t})=>t.colors.primary600};
`,zt=(0,g.default)(u.x)`
  position: absolute;
  right: 9px;
  transform: translateY(10px);
`,pt=({availableActions:t,isActive:n,isGrey:r,isFormDisabled:o,label:i,onClickToggle:l,pathToData:c})=>{const[d,p]=(0,e.useState)(!1),{formatMessage:m}=(0,k.Z)(),{modifiedData:y,onChangeParentCheckbox:P,onChangeSimpleCheckbox:D}=Y(),K=()=>{p(H=>!H)},I=()=>{p(!1)},M=v()(y,c.split(".."),{}),E=(0,e.useMemo)(()=>Object.keys(M).reduce((H,q)=>(H[q]=J()(M[q],"conditions"),H),{}),[M]),{hasAllActionsSelected:B,hasSomeActionsSelected:L}=Oe(E),F=(0,e.useMemo)(()=>Ht(t,y,c),[t,y,c]),se=F.some(({hasConditions:H})=>H);return e.createElement(Gt,{isActive:n},e.createElement(ct,{isGrey:r},e.createElement(it,{isCollapsable:!0,isFormDisabled:o,label:i,checkboxName:c,onChange:P,onClick:l,someChecked:L,value:B,isActive:n},e.createElement(ut,{paddingLeft:2},n?e.createElement(Q.Z,null):e.createElement(oe.Z,null))),e.createElement(A.k,{style:{flex:1}},F.map(({actionId:H,hasConditions:q,hasAllActionsSelected:U,hasSomeActionsSelected:fe,isDisplayed:Be,isParentCheckbox:ie,checkboxName:ve,label:Ue})=>Be?ie?e.createElement(dt,{key:H,justifyContent:"center",alignItems:"center"},q&&e.createElement(mt,null),e.createElement(z.C,{disabled:o,name:ve,"aria-label":m({id:"Settings.permissions.select-by-permission",defaultMessage:"Select {label} permission"},{label:`${Ue} ${i}`}),onValueChange:$e=>{P({target:{name:ve,value:$e}})},indeterminate:fe,value:U})):e.createElement(dt,{key:H,justifyContent:"center",alignItems:"center"},q&&e.createElement(mt,null),e.createElement(z.C,{disabled:o,indeterminate:q,name:ve,onValueChange:$e=>{D({target:{name:ve,value:$e}})},value:U})):e.createElement(Ge,{key:H}))),d&&e.createElement(Ee,{headerBreadCrumbs:[i,"Settings.permissions.conditions.conditions"],actions:F,isFormDisabled:o,onClosed:I,onToggle:K})),e.createElement(zt,null,e.createElement(me,{onClick:K,hasConditions:se})))};pt.propTypes={availableActions:a().array.isRequired,isActive:a().bool.isRequired,isGrey:a().bool.isRequired,isFormDisabled:a().bool.isRequired,label:a().string.isRequired,onClickToggle:a().func.isRequired,pathToData:a().string.isRequired};const Yt=pt,Xt=g.default.span`
  color: ${({theme:t})=>t.colors.danger700};
  padding-left: ${({theme:t})=>t.spaces[1]}px;
`,gt=()=>e.createElement(Xt,null,"*"),wt=(t,n)=>t.map(r=>{const o=Array.isArray(r.subjects)&&r.subjects.indexOf(n)!==-1;return{...r,isDisplayed:o}}),Qt=(0,g.default)(u.x)`
  transform: translate(-4px, -12px);

  &:before {
    content: '';
    width: ${4/16}rem;
    height: ${12/16}rem;
    background: ${({theme:t})=>t.colors.primary200};
    display: block;
  }
`,Jt=g.default.svg`
  position: relative;
  flex-shrink: 0;
  transform: translate(-0.5px, -1px);

  * {
    fill: ${({theme:t,color:n})=>t.colors[n]};
  }
`,we=t=>e.createElement(Qt,null,e.createElement(Jt,{width:"20",height:"23",viewBox:"0 0 20 23",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},e.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.02477 14.7513C8.65865 17.0594 11.6046 18.6059 17.5596 18.8856C18.6836 18.9384 19.5976 19.8435 19.5976 20.9688V20.9688C19.5976 22.0941 18.6841 23.0125 17.5599 22.9643C10.9409 22.6805 6.454 20.9387 3.75496 17.1258C0.937988 13.1464 0.486328 7.39309 0.486328 0.593262H4.50974C4.50974 7.54693 5.06394 11.9813 7.02477 14.7513Z",fill:"#D9D8FF"})));we.defaultProps={fill:"primary200"},we.propTypes={fill:a().string};const qt=(0,e.memo)(we),ft=(0,g.default)(A.k)`
  width: ${ne};
  position: relative;
`,_t=(0,g.default)(A.k)`
  height: ${je};
`,en=(0,g.default)(u.x)`
  padding-left: ${31/16}rem;
`,tn=(0,g.default)(u.x)`
  border-left: ${({isVisible:t,theme:n})=>t?`4px solid ${n.colors.primary200}`:"4px solid transparent"};
`,nn=(0,g.default)(A.k)`
  padding-left: ${({theme:t})=>t.spaces[4]};
  width: ${({level:t})=>145-t*36}px;

  ${({isCollapsable:t,theme:n})=>t&&`
      ${Ve} {
        display: block;
        color: ${n.colors.neutral100};
      }
      &:hover {
        ${Ke(n)}
      }
  `}
  ${({isActive:t,theme:n})=>t&&Ke(n)};
`,sn=g.default.div`
  padding-top: ${({theme:t})=>t.spaces[2]};
  margin-top: ${({theme:t})=>t.spaces[2]};
  width: ${4/16}rem;
  background-color: ${({theme:t})=>t.colors.primary200};
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
`,Qe=({childrenForm:t,isFormDisabled:n,recursiveLevel:r,pathToDataFromActionRow:o,propertyActions:i,parentName:l,propertyName:c})=>{const{formatMessage:d}=(0,k.Z)(),{modifiedData:p,onChangeParentCheckbox:m,onChangeSimpleCheckbox:y}=Y(),[P,D]=(0,e.useState)(null),K=M=>{D(E=>E===M?null:M)},I=(0,e.useMemo)(()=>P?t.find(({value:M})=>M===P):null,[P,t]);return e.createElement(en,null,e.createElement(sn,null),t.map(({label:M,value:E,required:B,children:L},F)=>{const se=F+1<t.length,H=Array.isArray(L),q=P===E;return e.createElement(tn,{key:E,isVisible:se},e.createElement(_t,null,e.createElement(qt,{color:"primary200"}),e.createElement(A.k,{style:{flex:1}},e.createElement(nn,{level:r,isActive:q,isCollapsable:H},e.createElement(at,{alignItems:"center",isCollapsable:H,...H&&{onClick:()=>K(E),"aria-expanded":q,onKeyDown:({key:U})=>(U==="Enter"||U===" ")&&K(E),tabIndex:0,role:"button"},title:M},e.createElement(Z.Z,{ellipsis:!0},ye()(M)),B&&e.createElement(gt,null),e.createElement(Ve,{$isActive:q}))),e.createElement(A.k,{style:{flex:1}},i.map(({actionId:U,label:fe,isActionRelatedToCurrentProperty:Be})=>{if(!Be)return e.createElement(Ge,{key:U});const ie=[...o.split(".."),U,"properties",c,...l.split(".."),E],ve=v()(p,ie,!1);if(!L)return e.createElement(ft,{key:fe,justifyContent:"center",alignItems:"center"},e.createElement(z.C,{disabled:n,name:ie.join(".."),"aria-label":d({id:"Settings.permissions.select-by-permission",defaultMessage:"Select {label} permission"},{label:`${l} ${M} ${fe}`}),onValueChange:De=>{y({target:{name:ie.join(".."),value:De}})},value:ve}));const{hasAllActionsSelected:Ue,hasSomeActionsSelected:$e}=Oe(ve);return e.createElement(ft,{key:fe,justifyContent:"center",alignItems:"center"},e.createElement(z.C,{key:fe,disabled:n,name:ie.join(".."),"aria-label":d({id:"Settings.permissions.select-by-permission",defaultMessage:"Select {label} permission"},{label:`${l} ${M} ${fe}`}),onValueChange:De=>{m({target:{name:ie.join(".."),value:De}})},value:Ue,indeterminate:$e}))})))),I&&q&&e.createElement(u.x,{paddingBottom:2},e.createElement(Qe,{isFormDisabled:n,parentName:`${l}..${E}`,pathToDataFromActionRow:o,propertyActions:i,propertyName:c,recursiveLevel:r+1,childrenForm:I.children})))}))};Qe.propTypes={childrenForm:a().array.isRequired,isFormDisabled:a().bool.isRequired,parentName:a().string.isRequired,pathToDataFromActionRow:a().string.isRequired,propertyActions:a().array.isRequired,propertyName:a().string.isRequired,recursiveLevel:a().number.isRequired};const on=(0,e.memo)(Qe),rn=t=>t.reduce((r,o)=>(o.isActionRelatedToCurrentProperty&&r.push(o.actionId),r),[]),an=(t,n,r,o,i)=>{const c=rn(t).reduce((d,p)=>{const m=[...r.split(".."),p,"properties",o,i],y=v()(n,m,!1);return d[p]=y,d},{});return Oe(c)},ht=(0,g.default)(A.k)`
  width: ${ne};
  position: relative;
`,ln=(0,g.default)(A.k)`
  height: ${je};
  flex: 1;

  ${({isCollapsable:t,theme:n})=>t&&`
      ${Ve} {
        display: block;
        color: ${n.colors.neutral100};
      }
      &:hover {
        ${Ke(n)}
      }
  `}
  ${({isActive:t,theme:n})=>t&&Ke(n)};
`,Je=({childrenForm:t,label:n,isFormDisabled:r,name:o,required:i,pathToData:l,propertyActions:c,propertyName:d,isOdd:p})=>{const{formatMessage:m}=(0,k.Z)(),[y,P]=(0,e.useState)(null),{modifiedData:D,onChangeCollectionTypeLeftActionRowCheckbox:K,onChangeParentCheckbox:I,onChangeSimpleCheckbox:M}=Y(),E=y===o,B=(0,e.useMemo)(()=>Array.isArray(t)?t:[],[t]),L=B.length>0,F=(0,e.useCallback)(()=>{L&&P(U=>U===o?null:o)},[L,o]),se=({target:{value:U}})=>{K(l,d,o,U)},{hasAllActionsSelected:H,hasSomeActionsSelected:q}=(0,e.useMemo)(()=>an(c,D,l,d,o),[c,D,l,d,o]);return e.createElement(e.Fragment,null,e.createElement(ln,{alignItems:"center",isCollapsable:L,isActive:E,background:p?"neutral100":"neutral0"},e.createElement(A.k,null,e.createElement(it,{onChange:se,onClick:F,isCollapsable:L,isFormDisabled:r,label:n,someChecked:q,value:H,isActive:E},i&&e.createElement(gt,null),e.createElement(Ve,{$isActive:E})),e.createElement(A.k,null,c.map(({label:U,isActionRelatedToCurrentProperty:fe,actionId:Be})=>{if(!fe)return e.createElement(Ge,{key:U});const ie=[...l.split(".."),Be,"properties",d,o];if(!L){const De=v()(D,ie,!1);return e.createElement(ht,{key:Be,justifyContent:"center",alignItems:"center"},e.createElement(z.C,{disabled:r,name:ie.join(".."),"aria-label":m({id:"Settings.permissions.select-by-permission",defaultMessage:"Select {label} permission"},{label:`${o} ${U}`}),onValueChange:ns=>{M({target:{name:ie.join(".."),value:ns}})},value:De}))}const ve=v()(D,ie,{}),{hasAllActionsSelected:Ue,hasSomeActionsSelected:$e}=Oe(ve);return e.createElement(ht,{key:U,justifyContent:"center",alignItems:"center"},e.createElement(z.C,{disabled:r,name:ie.join(".."),onValueChange:De=>{I({target:{name:ie.join(".."),value:De}})},"aria-label":m({id:"Settings.permissions.select-by-permission",defaultMessage:"Select {label} permission"},{label:`${o} ${U}`}),value:Ue,indeterminate:$e}))})))),E&&e.createElement(on,{childrenForm:B,isFormDisabled:r,parentName:o,pathToDataFromActionRow:l,propertyName:d,propertyActions:c,recursiveLevel:0}))};Je.defaultProps={childrenForm:[],required:!1},Je.propTypes={childrenForm:a().array,label:a().string.isRequired,isFormDisabled:a().bool.isRequired,name:a().string.isRequired,pathToData:a().string.isRequired,propertyActions:a().array.isRequired,propertyName:a().string.isRequired,required:a().bool,isOdd:a().bool.isRequired};const cn=(0,e.memo)(Je),yt=(0,g.default)(A.k)`
  width: ${ne};
  flex-shrink: 0;
`,dn=(0,g.default)(A.k)`
  width: ${Me};
  height: ${je};
  flex-shrink: 0;
`,Ct=({headers:t,label:n})=>{const{formatMessage:r}=(0,k.Z)(),o=r({id:"Settings.roles.form.permission.property-label",defaultMessage:"{label} permissions"},{label:n});return e.createElement(A.k,null,e.createElement(dn,{alignItems:"center",paddingLeft:6},e.createElement(Z.Z,{variant:"sigma",textColor:"neutral500"},o)),t.map(i=>i.isActionRelatedToCurrentProperty?e.createElement(yt,{justifyContent:"center",key:i.label},e.createElement(Z.Z,{variant:"sigma",textColor:"neutral500"},r({id:`Settings.roles.form.permissions.${i.label.toLowerCase()}`,defaultMessage:i.label}))):e.createElement(yt,{key:i.label})))};Ct.propTypes={headers:a().arrayOf(a().shape({label:a().string.isRequired,isActionRelatedToCurrentProperty:a().bool.isRequired})).isRequired,label:a().string.isRequired};const un=Ct,mn=(t,n)=>t.map(r=>{const o=Array.isArray(r.applyToProperties)&&r.applyToProperties.indexOf(n)!==-1&&r.isDisplayed;return{label:r.label,actionId:r.actionId,isActionRelatedToCurrentProperty:o}}),pn=g.default.div`
  display: inline-flex;
  flex-direction: column;
  min-width: 0;
`,Et=({availableActions:t,childrenForm:n,isFormDisabled:r,label:o,pathToData:i,propertyName:l})=>{const c=(0,e.useMemo)(()=>mn(t,l),[t,l]);return e.createElement(pn,null,e.createElement(un,{label:o,headers:c}),e.createElement(u.x,null,n.map(({children:d,label:p,value:m,required:y},P)=>e.createElement(cn,{childrenForm:d,key:m,label:p,isFormDisabled:r,name:m,required:y,propertyActions:c,pathToData:i,propertyName:l,isOdd:P%2===0}))))};Et.propTypes={childrenForm:a().array.isRequired,availableActions:a().array.isRequired,isFormDisabled:a().bool.isRequired,label:a().string.isRequired,pathToData:a().string.isRequired,propertyName:a().string.isRequired};const gn=Et,fn=g.default.div`
  flex-direction: column;
  display: inline-flex;
  min-width: 100%;
  ${({theme:t,isActive:n})=>n&&`border: 1px solid ${t.colors.primary600};`}
`,vt=({allActions:t,contentTypeName:n,label:r,index:o,isActive:i,isFormDisabled:l,onClickToggleCollapse:c,pathToData:d,properties:p})=>{const m=(0,e.useCallback)(()=>{c(n)},[n,c]),y=(0,e.useMemo)(()=>wt(t,n),[t,n]);return e.createElement(fn,{isActive:i},e.createElement(Yt,{availableActions:y,isActive:i,isGrey:o%2===0,isFormDisabled:l,label:r,onClickToggle:m,pathToData:d}),i&&p.map(({label:P,value:D,children:K})=>e.createElement(gn,{availableActions:y,childrenForm:K,isFormDisabled:l,label:P,pathToData:d,propertyName:D,key:D})))};vt.propTypes={allActions:a().array.isRequired,contentTypeName:a().string.isRequired,index:a().number.isRequired,isActive:a().bool.isRequired,isFormDisabled:a().bool.isRequired,label:a().string.isRequired,onClickToggleCollapse:a().func.isRequired,pathToData:a().string.isRequired,properties:a().array.isRequired};const hn=vt,qe=({actions:t,isFormDisabled:n,pathToData:r,subjects:o})=>{const[i,l]=(0,e.useState)(null),c=d=>{l(i===d?null:d)};return o.map(({uid:d,label:p,properties:m},y)=>e.createElement(hn,{allActions:t,key:d,contentTypeName:d,label:p,isActive:i===d,isFormDisabled:n,index:y,onClickToggleCollapse:c,pathToData:`${r}..${d}`,properties:m}))};qe.defaultProps={actions:[],subjects:[]},qe.propTypes={actions:a().array.isRequired,isFormDisabled:a().bool.isRequired,pathToData:a().string.isRequired,subjects:a().arrayOf(a().shape({uid:a().string.isRequired,label:a().string.isRequired,properties:a().array.isRequired}))};const yn=(0,e.memo)(qe),Cn=t=>t.filter(({subjects:n})=>n&&n.length),En=t=>t.map(({actionId:n})=>n),vn=(t,n)=>t.reduce((r,o)=>(Object.keys(n).forEach(i=>{const l=v()(n,[i,o],{}),c={[i]:Ye(l)};r[o]?r[o]={...r[o],...c}:r[o]=c}),r),{}),bn=(t,n)=>{const r=En(t),o=vn(r,n);return Object.keys(o).reduce((l,c)=>(l[c]=Oe(o[c]),l),{})},xn=(0,g.default)(A.k)`
  width: ${ne};
  flex-shrink: 0;
`,_e=({actions:t,isFormDisabled:n,kind:r})=>{const{formatMessage:o}=(0,k.Z)(),{modifiedData:i,onChangeCollectionTypeGlobalActionCheckbox:l}=Y(),c=(0,e.useMemo)(()=>Cn(t),[t]),d=(0,e.useMemo)(()=>bn(c,i[r]),[i,c,r]);return e.createElement(u.x,{paddingBottom:4,paddingTop:6,style:{paddingLeft:Me}},e.createElement(A.k,{gap:0},c.map(({label:p,actionId:m})=>e.createElement(xn,{direction:"column",alignItems:"center",justifyContent:"center",key:m,gap:3},e.createElement(Z.Z,{variant:"sigma",textColor:"neutral500"},o({id:`Settings.roles.form.permissions.${p.toLowerCase()}`,defaultMessage:p})),e.createElement(z.C,{disabled:n,onValueChange:y=>{l(r,m,y)},name:m,"aria-label":o({id:"Settings.permissions.select-all-by-permission",defaultMessage:"Select all {label} permissions"},{label:o({id:`Settings.roles.form.permissions.${p.toLowerCase()}`,defaultMessage:p})}),value:v()(d,[m,"hasAllActionsSelected"],!1),indeterminate:v()(d,[m,"hasSomeActionsSelected"],!1)})))))};_e.defaultProps={actions:[]},_e.propTypes={actions:a().arrayOf(a().shape({label:a().string.isRequired,actionId:a().string.isRequired,subjects:a().array.isRequired})),isFormDisabled:a().bool.isRequired,kind:a().string.isRequired};const Rn=(0,e.memo)(_e),An=(0,g.default)(u.x)`
  overflow-x: auto;
`,bt=({isFormDisabled:t,kind:n,layout:{actions:r,subjects:o}})=>{const i=N()([...o],"label");return e.createElement(An,{background:"neutral0"},e.createElement(Rn,{actions:r,kind:n,isFormDisabled:t}),e.createElement(yn,{actions:r,isFormDisabled:t,pathToData:n,subjects:i}))};bt.propTypes={isFormDisabled:a().bool.isRequired,kind:a().string.isRequired,layout:a().shape({actions:a().array,subjects:a().arrayOf(a().shape({uid:a().string.isRequired,label:a().string.isRequired,properties:a().array.isRequired}))}).isRequired};const xt=(0,e.memo)(bt),Rt=({children:t,value:n})=>e.createElement(te.Provider,{value:n},t);Rt.propTypes={children:a().node.isRequired,value:a().exact({availableConditions:a().array.isRequired,modifiedData:a().object.isRequired,onChangeCollectionTypeLeftActionRowCheckbox:a().func.isRequired,onChangeConditions:a().func.isRequired,onChangeSimpleCheckbox:a().func.isRequired,onChangeParentCheckbox:a().func.isRequired,onChangeCollectionTypeGlobalActionCheckbox:a().func.isRequired}).isRequired};const Tn=Rt;var Pn=s(48855),Sn=s(69983),Mn=s(74579),At=s(44380),On=s(54033),$n=s(89899);const Dn=(t,n,r)=>t.map(o=>{const i=[...r,o.action,"properties","enabled"],l=v()(n,i,!1),c=v()(n,[...r,o.action,"conditions"],{}),d=Ie(c).some(p=>p);return{...o,isDisplayed:l,checkboxName:i.join(".."),hasSomeActionsSelected:l,value:l,hasConditions:d,label:o.displayName,actionId:o.action,pathToConditionsObject:[...r,o.action]}}),Ln=t=>{const n=Object.entries(t).reduce((o,i)=>{const[l,{conditions:c}]=i;return o[l]=c,o},{});return Ie(n).some(o=>o)},jn=g.default.div`
  flex: 1;
  align-self: center;
  border-top: 1px solid ${({theme:t})=>t.colors.neutral150};
`,In=g.default.div`
  position: relative;
  word-break: keep-all;
  ${({hasConditions:t,disabled:n,theme:r})=>t&&`
    &:before {
      content: '';
      position: absolute;
      top: ${-4/16}rem;
      left: ${-8/16}rem;
      width: ${6/16}rem;
      height: ${6/16}rem;
      border-radius: ${20/16}rem;
      background: ${n?r.colors.neutral100:r.colors.primary600};
    }
  `}
`,Tt=({categoryName:t,isFormDisabled:n,subCategoryName:r,actions:o,pathToData:i})=>{const[l,c]=(0,e.useState)(!1),{modifiedData:d,onChangeParentCheckbox:p,onChangeSimpleCheckbox:m}=Y(),{formatMessage:y}=(0,k.Z)(),P=v()(d,i,{}),D=(0,e.useMemo)(()=>Object.keys(P).reduce((F,se)=>(F[se]=Ye(P[se]),F),{}),[P]),{hasAllActionsSelected:K,hasSomeActionsSelected:I}=Oe(D),M=()=>{c(F=>!F)},E=()=>{c(!1)},B=Dn(o,d,i),L=Ln(v()(d,[...i],{}));return e.createElement(e.Fragment,null,e.createElement(u.x,null,e.createElement(A.k,{justifyContent:"space-between",alignItems:"center"},e.createElement(u.x,{paddingRight:4},e.createElement(Z.Z,{variant:"sigma",textColor:"neutral600"},r)),e.createElement(jn,null),e.createElement(u.x,{paddingLeft:4},e.createElement(At.X,{name:i.join(".."),disabled:n,onValueChange:F=>{p({target:{name:i.join(".."),value:F}})},indeterminate:I,value:K},y({id:"app.utils.select-all",defaultMessage:"Select all"})))),e.createElement(A.k,{paddingTop:6,paddingBottom:6},e.createElement(On.r,{gap:2,style:{flex:1}},B.map(({checkboxName:F,value:se,action:H,displayName:q,hasConditions:U})=>e.createElement($n.P,{col:3,key:H},e.createElement(In,{disabled:n,hasConditions:U},e.createElement(At.X,{name:F,disabled:n,onValueChange:fe=>{m({target:{name:F,value:fe}})},value:se},q))))),e.createElement(me,{hasConditions:L,onClick:M}))),l&&e.createElement(Ee,{headerBreadCrumbs:[t,r],actions:B,isFormDisabled:n,onClosed:E,onToggle:M}))};Tt.propTypes={actions:a().array.isRequired,categoryName:a().string.isRequired,isFormDisabled:a().bool.isRequired,subCategoryName:a().string.isRequired,pathToData:a().array.isRequired};const Bn=Tt,et=({childrenForm:t,kind:n,name:r,isOpen:o,isFormDisabled:i,isWhite:l,onOpenCategory:c,pathToData:d})=>{const{formatMessage:p}=(0,k.Z)(),m=()=>{c(r)},y=(0,e.useMemo)(()=>r.split("::").pop(),[r]);return e.createElement(Pn.U,{expanded:o,onToggle:m,id:`accordion-${r}`,variant:l?"primary":"secondary"},e.createElement(Sn.B,{title:ye()(y),description:`${p({id:"Settings.permissions.category"},{category:y})} ${n==="plugins"?"plugin":n}`}),e.createElement(Mn.v,null,e.createElement(u.x,{padding:6},t.map(({actions:P,subCategoryName:D,subCategoryId:K})=>e.createElement(Bn,{key:D,actions:P,categoryName:y,isFormDisabled:i,subCategoryName:D,pathToData:[...d,K]})))))};et.defaultProps={},et.propTypes={childrenForm:a().array.isRequired,isOpen:a().bool.isRequired,isFormDisabled:a().bool.isRequired,isWhite:a().bool.isRequired,kind:a().string.isRequired,name:a().string.isRequired,onOpenCategory:a().func.isRequired,pathToData:a().array.isRequired};const kn=et,Pt=({isFormDisabled:t,kind:n,layout:r})=>{const[o,i]=(0,e.useState)(null),l=c=>{i(c===o?null:c)};return e.createElement(u.x,{padding:6,background:"neutral0"},r.map(({category:c,categoryId:d,childrenForm:p},m)=>e.createElement(kn,{key:c,childrenForm:p,kind:n,isFormDisabled:t,isOpen:o===c,isWhite:m%2===1,name:c,onOpenCategory:l,pathToData:[n,d]})))};Pt.propTypes={isFormDisabled:a().bool.isRequired,kind:a().string.isRequired,layout:a().arrayOf(a().shape({category:a().string.isRequired,categoryId:a().string.isRequired,childrenForm:a().arrayOf(a().shape({actions:a().array.isRequired})).isRequired}).isRequired).isRequired};const St=Pt;var Fn=s(82492),Nn=s.n(Fn),Wn=s(36968),ge=s.n(Wn);const Mt=(t,n,r)=>t.find(o=>o.action===n&&o.subject===r),Ot=(t,n=[])=>t.reduce((r,o)=>(r[o.id]=n.indexOf(o.id)!==-1,r),{}),$t=({children:t},n,r="")=>t.reduce((o,i)=>{if(i.children)return{...o,[i.value]:$t(i,n,`${r}${i.value}.`)};const l=n.indexOf(`${r}${i.value}`)!==-1;return o[i.value]=l,o},{}),Zn=(t,n,r)=>t.reduce((o,i)=>{const l=n.properties.find(({value:c})=>c===i);if(l){const c=v()(r,["properties",l.value],[]),d=$t(l,c);o.properties[i]=d}return o},{properties:{}}),Vn=(t,n)=>n.reduce((r,o)=>{const i=t.find(({uid:l})=>l===o)||null;return i&&(r[o]=i),r},{}),Dt=({subjects:t},n,r,o=[])=>n.reduce((i,l)=>{const c=l.subjects,d=Vn(t,c);if(T()(d))return i;const p=Object.keys(d).reduce((m,y)=>{const{actionId:P,applyToProperties:D}=l,M=d[y].properties.map(({value:F})=>F).every(F=>(D||[]).indexOf(F)===-1),E=Mt(o,P,y),B=Ot(r,v()(E,"conditions",[]));if(T()(D)||M)return ge()(m,[y,P],{properties:{enabled:E!==void 0},conditions:B}),m;const L=Zn(D,d[y],E);return ge()(m,[y,P],{...L,conditions:B}),m},{});return Nn()(i,p)},{}),Kn=(t,n,r)=>t.reduce((o,i)=>{const l=Mt(r,i.action,null);return o[i.action]={properties:{enabled:l!==void 0},conditions:Ot(n,l?.conditions??[])},o},{}),Un=(t,n,r)=>t.reduce((o,i)=>(o[i.subCategoryId]=Kn(i.actions,n,r),o),{}),Lt=(t,n,r=[])=>t.reduce((o,{categoryId:i,childrenForm:l})=>{const c=Un(l,n,r);return o[i]=c,o},{}),jt=t=>t.split(" ").join("-"),It=(t,n)=>Object.entries(G()(t,n)).map(([r,o])=>({category:r,categoryId:jt(r),childrenForm:Object.entries(G()(o,"subCategory")).map(([i,l])=>({subCategoryName:i,subCategoryId:jt(i),actions:l}))})),Hn=(t,n)=>{const{conditions:r,sections:{collectionTypes:o,singleTypes:i,plugins:l,settings:c}}=t,d={collectionTypes:o,singleTypes:i,plugins:It(l,"plugin"),settings:It(c,"category")},p={collectionTypes:Dt(o,o.actions||[],r,n),singleTypes:Dt(i,i.actions||[],r,n),plugins:Lt(d.plugins,r,n),settings:Lt(d.settings,r,n)};return{initialData:p,modifiedData:p,layouts:d}};var Gn=s(50361),tt=s.n(Gn);const Bt=t=>Object.keys(t).reduce((n,r)=>{const o=t[r];if(Ae()(o)&&!R()(o,"conditions"))return{...n,[r]:Bt(o)};if(Ae()(o)&&R()(o,"conditions")&&!Ie(J()(o,"conditions")).some(l=>l)){const l=Object.keys(o.conditions).reduce((c,d)=>(c[d]=!1,c),{});return{...n,[r]:{...o,conditions:l}}}return n[r]=o,n},{}),nt=Bt,kt=(t,n,r=!1)=>Object.keys(t).reduce((o,i)=>{const l=t[i];return i==="conditions"&&!r?(o[i]=l,o):Ae()(l)?{...o,[i]:kt(l,n,i==="fields")}:(o[i]=n,o)},{}),He=kt,zn={initialData:{},modifiedData:{},layouts:{}},Yn=(t,n)=>(0,re.ZP)(t,r=>{switch(n.type){case"ON_CHANGE_COLLECTION_TYPE_GLOBAL_ACTION_CHECKBOX":{const{collectionTypeKind:o,actionId:i,value:l}=n,c=["modifiedData",o];Object.keys(v()(t,c)).forEach(d=>{const p=v()(t,[...c,d,i],void 0);if(p){let m=He(p,l);if(!l&&m.conditions){const y=He(m.conditions,!1);m={...m,conditions:y}}ge()(r,[...c,d,i],m)}});break}case"ON_CHANGE_COLLECTION_TYPE_ROW_LEFT_CHECKBOX":{const{pathToCollectionType:o,propertyName:i,rowName:l,value:c}=n;let d=tt()(t.modifiedData);const p=o.split(".."),m=v()(d,p,{});Object.keys(m).forEach(y=>{if(R()(m[y],`properties.${i}`)){const P=v()(m,[y,"properties",i,l]),D=[...p,y,"properties",i,l];if(!Ae()(P))ge()(d,D,c);else{const K=He(P,c);ge()(d,D,K)}}}),c||(d=nt(d)),ge()(r,"modifiedData",d);break}case"ON_CHANGE_CONDITIONS":{Object.entries(n.conditions).forEach(o=>{const[i,l]=o;ge()(r,["modifiedData",...i.split(".."),"conditions"],l)});break}case"ON_CHANGE_SIMPLE_CHECKBOX":{let o=tt()(t.modifiedData);ge()(o,[...n.keys.split("..")],n.value),n.value||(o=nt(o)),ge()(r,"modifiedData",o);break}case"ON_CHANGE_TOGGLE_PARENT_CHECKBOX":{const{keys:o,value:i}=n,l=[...o.split("..")];let c=tt()(t.modifiedData);const d=v()(c,l,{}),p=He(d,i);ge()(c,l,p),i||(c=nt(c)),ge()(r,["modifiedData"],c);break}case"RESET_FORM":{r.modifiedData=t.initialData;break}case"SET_FORM_AFTER_SUBMIT":{r.initialData=t.modifiedData;break}default:return r}}),st=t=>Object.entries(t).filter(([,n])=>n).map(([n])=>n),Xn=t=>{const[n,{conditions:r}]=t;return{action:n,subject:null,conditions:st(r),properties:{}}},wn=t=>Object.values(t).reduce((n,r)=>{const o=Object.entries(r).reduce((i,l)=>{const[,{properties:{enabled:c}}]=l;if(!c)return i;const d=Xn(l);return i.push(d),i},[]);return[...n,...o]},[]),Ft=t=>Object.values(t).reduce((n,r)=>{const o=wn(r);return[...n,...o]},[]),Nt=(t,n="")=>Object.entries(t).reduce((r,o)=>{const[i,l]=o;return Ae()(l)?[...r,...Nt(l,`${n}${i}.`)]:(l&&!Ae()(l)&&r.push(`${n}${i}`),r)},[]),Qn=(t,n,{conditions:r,properties:o})=>Object.entries(o).reduce((i,l)=>{const[c,d]=l;return i.properties[c]=Nt(d),i},{action:t,subject:n,conditions:st(r),properties:{}}),Jn=(t,n,{conditions:r})=>({action:t,subject:n,properties:{},conditions:st(r)}),qn=(t,n)=>Object.entries(n).reduce((o,i)=>{const[l,c]=i;if(!Ie(c).some(m=>m))return o;if(!c?.properties?.enabled){const m=Qn(l,t,c);return[...o,m]}if(!c.properties.enabled)return o;const p=Jn(l,t,c);return o.push(p),o},[]),Wt=t=>Object.entries(t).reduce((r,o)=>{const[i,l]=o,c=qn(i,l);return[...r,...c]},[]),_n=t=>{const n=Ft(t.plugins),r=Ft(t.settings),o=Wt(t.collectionTypes),i=Wt(t.singleTypes);return[...n,...r,...o,...i]},es=[{labelId:"app.components.LeftMenuLinkContainer.collectionTypes",defaultMessage:"Collection Types",id:"collectionTypes"},{labelId:"app.components.LeftMenuLinkContainer.singleTypes",id:"singleTypes",defaultMessage:"Single Types"},{labelId:"app.components.LeftMenuLinkContainer.plugins",defaultMessage:"Plugins",id:"plugins"},{labelId:"app.components.LeftMenuLinkContainer.settings",defaultMessage:"Settings",id:"settings"}],ot=(0,e.forwardRef)(({layout:t,isFormDisabled:n,permissions:r},o)=>{const[{initialData:i,layouts:l,modifiedData:c},d]=(0,e.useReducer)(Yn,zn,()=>Hn(t,r)),{formatMessage:p}=(0,k.Z)();(0,e.useImperativeHandle)(o,()=>({getPermissions(){const I=(0,O.e5)(i.collectionTypes,c.collectionTypes),M=(0,O.e5)(i.singleTypes,c.singleTypes),E={...I,...M};let B;return T()(E)?B=!1:B=Object.values(E).some(L=>Object.values(L).some(F=>R()(F,"conditions"))),{permissionsToSend:_n(c),didUpdateConditions:B}},resetForm(){d({type:"RESET_FORM"})},setFormAfterSubmit(){d({type:"SET_FORM_AFTER_SUBMIT"})}}));const m=(I,M,E,B)=>{d({type:"ON_CHANGE_COLLECTION_TYPE_ROW_LEFT_CHECKBOX",pathToCollectionType:I,propertyName:M,rowName:E,value:B})},y=(I,M,E)=>{d({type:"ON_CHANGE_COLLECTION_TYPE_GLOBAL_ACTION_CHECKBOX",collectionTypeKind:I,actionId:M,value:E})},P=I=>{d({type:"ON_CHANGE_CONDITIONS",conditions:I})},D=(0,e.useCallback)(({target:{name:I,value:M}})=>{d({type:"ON_CHANGE_SIMPLE_CHECKBOX",keys:I,value:M})},[]),K=(0,e.useCallback)(({target:{name:I,value:M}})=>{d({type:"ON_CHANGE_TOGGLE_PARENT_CHECKBOX",keys:I,value:M})},[]);return e.createElement(Tn,{value:{availableConditions:t.conditions,modifiedData:c,onChangeConditions:P,onChangeSimpleCheckbox:D,onChangeParentCheckbox:K,onChangeCollectionTypeLeftActionRowCheckbox:m,onChangeCollectionTypeGlobalActionCheckbox:y}},e.createElement(f.v,{id:"tabs",label:p({id:"Settings.permissions.users.tabs.label",defaultMessage:"Tabs Permissions"})},e.createElement(b.m,null,es.map(I=>e.createElement(b.O,{key:I.id},p({id:I.labelId,defaultMessage:I.defaultMessage})))),e.createElement(h.n,{style:{position:"relative"}},e.createElement(h.x,null,e.createElement(xt,{layout:l.collectionTypes,kind:"collectionTypes",isFormDisabled:n})),e.createElement(h.x,null,e.createElement(xt,{layout:l.singleTypes,kind:"singleTypes",isFormDisabled:n})),e.createElement(h.x,null,e.createElement(St,{layout:l.plugins,kind:"plugins",isFormDisabled:n})),e.createElement(h.x,null,e.createElement(St,{layout:l.settings,kind:"settings",isFormDisabled:n})))))});ot.defaultProps={permissions:[],layout:{conditions:[],sections:{collectionTypes:{},singleTypes:{actions:[]},settings:[],plugins:[]}}},ot.propTypes={layout:a().object,isFormDisabled:a().bool.isRequired,permissions:a().array};const ts=(0,e.memo)(ot)},63727:(V,$,s)=>{"use strict";s.r($),s.d($,{default:()=>xe});var e=s(67294),f=s(20297),b=s(86706),h=s(16550),O=s(36364),x=s(85841),R=s(57497),C=s(61697),T=s(39219),W=s(24),a=s(97554),k=s(87370),u=s(41054),S=s(86896),N=s(98374),g=s(90065),A=s(24233),z=s(30909),Q=s(50922),oe=s(54033),ee=s(89899),v=s(22790),de=s(37252),J=s(45697),te=s.n(J);const Y=({disabled:Z,role:w,values:j,errors:_,onChange:re,onBlur:he})=>{const{formatMessage:G}=(0,S.Z)();return e.createElement(a.x,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0},e.createElement(C.k,{direction:"column",alignItems:"stretch",gap:4},e.createElement(C.k,{justifyContent:"space-between"},e.createElement(a.x,null,e.createElement(a.x,null,e.createElement(Q.Z,{fontWeight:"bold"},w?w.name:G({id:"global.details",defaultMessage:"Details"}))),e.createElement(a.x,null,e.createElement(Q.Z,{textColor:"neutral500",variant:"pi"},w?w.description:G({id:"Settings.roles.form.description",defaultMessage:"Name and description of the role"})))),e.createElement(T.z,{disabled:!0,variant:"secondary"},G({id:"Settings.roles.form.button.users-with-role",defaultMessage:"{number, plural, =0 {# users} one {# user} other {# users}} with this role"},{number:w.usersCount}))),e.createElement(oe.r,{gap:4},e.createElement(ee.P,{col:6},e.createElement(v.o,{disabled:Z,name:"name",error:_.name&&G({id:_.name}),label:G({id:"global.name",defaultMessage:"Name"}),onChange:re,onBlur:he,required:!0,value:j.name||""})),e.createElement(ee.P,{col:6},e.createElement(de.g,{disabled:Z,label:G({id:"global.description",defaultMessage:"Description"}),id:"description",error:_.name&&G({id:_.name}),onChange:re,onBlur:he},j.description||"")))))};Y.defaultProps={disabled:!1,role:null,values:{name:"",description:""}},Y.propTypes={disabled:te().bool,errors:te().object.isRequired,onBlur:te().func.isRequired,onChange:te().func.isRequired,role:te().object,values:te().object};const ue=Y;var be=s(87561);const ce=be.Ry().shape({name:be.Z_().required(f.I0.required)}),Te=()=>{const Z=(0,f.lm)(),{formatMessage:w}=(0,S.Z)(),{params:{id:j}}=(0,h.$B)("/settings/roles/:id"),{put:_}=(0,f.kY)(),[re,he]=(0,e.useState)(!1),G=(0,e.useRef)(),{lockApp:Re,unlockApp:ye}=(0,f.o1)(),{trackUsage:ke}=(0,f.rS)(),{formatAPIError:Ce}=(0,f.So)(),{isLoading:Fe,data:Ne}=(0,g.d)(j,{cacheTime:0}),{roles:[pe={}],isLoading:Pe,refetch:We}=(0,N.F)({id:j},{cacheTime:0}),{permissions:Ze,isLoading:Se}=(0,A.V)({id:j},{cacheTime:0}),ae=async Ee=>{try{Re(),he(!0);const{permissionsToSend:ne,didUpdateConditions:Me}=G.current.getPermissions();await _(`/admin/roles/${j}`,Ee),pe.code!=="strapi-super-admin"&&(await _(`/admin/roles/${j}/permissions`,{permissions:ne}),Me&&ke("didUpdateConditions")),G.current.setFormAfterSubmit(),await We(),Z({type:"success",message:{id:"notification.success.saved"}})}catch(ne){Z({type:"warning",message:Ce(ne)})}finally{he(!1),ye()}},le=!Pe&&pe.code==="strapi-super-admin";return e.createElement(x.o,null,e.createElement(f.SL,{name:"Roles"}),e.createElement(u.J9,{enableReinitialize:!0,initialValues:{name:pe.name,description:pe.description},onSubmit:ae,validationSchema:ce,validateOnChange:!1},({handleSubmit:Ee,values:ne,errors:Me,handleChange:je,handleBlur:rt})=>e.createElement("form",{onSubmit:Ee},e.createElement(R.T,{primaryAction:e.createElement(C.k,{gap:2},e.createElement(T.z,{disabled:pe.code==="strapi-super-admin",onClick:Ee,loading:re,size:"L"},w({id:"global.save",defaultMessage:"Save"}))),title:w({id:"Settings.roles.edit.title",defaultMessage:"Edit a role"}),subtitle:w({id:"Settings.roles.create.description",defaultMessage:"Define the rights given to the role"}),navigationAction:e.createElement(f.rU,{startIcon:e.createElement(k.Z,null),to:"/settings/roles"},w({id:"global.back",defaultMessage:"Back"}))}),e.createElement(W.D,null,e.createElement(C.k,{direction:"column",alignItems:"stretch",gap:6},e.createElement(ue,{isLoading:Pe||Se,disabled:le,errors:Me,values:ne,onChange:je,onBlur:rt,role:pe}),!Fe&&!Pe&&!Se?e.createElement(a.x,{shadow:"filterShadow",hasRadius:!0},e.createElement(z.Z,{isFormDisabled:le,permissions:Ze,ref:G,layout:Ne})):e.createElement(a.x,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0},e.createElement(f.dO,null)))))))},xe=()=>{const Z=(0,b.v9)(O._),{isLoading:w,allowedActions:{canRead:j,canUpdate:_}}=(0,f.ss)({read:Z.settings.roles.read,update:Z.settings.roles.update});return w?e.createElement(f.dO,null):!j&&!_?e.createElement(h.l_,{to:"/"}):e.createElement(Te,null)}},90065:(V,$,s)=>{"use strict";s.d($,{d:()=>b});var e=s(20297),f=s(88767);const b=(h,O={})=>{const{get:x}=(0,e.kY)(),{data:R,error:C,isError:T,isLoading:W}=(0,f.useQuery)(["permissions",h],async()=>{const{data:{data:a}}=await x("/admin/permissions",{params:{role:h}});return a},O);return{data:R,error:C,isError:T,isLoading:W}}},44174:V=>{function $(s,e,f,b){for(var h=-1,O=s==null?0:s.length;++h<O;){var x=s[h];e(b,x,f(x),s)}return b}V.exports=$},81119:(V,$,s)=>{var e=s(89881);function f(b,h,O,x){return e(b,function(R,C,T){h(x,R,O(R),T)}),x}V.exports=f},55189:(V,$,s)=>{var e=s(44174),f=s(81119),b=s(67206),h=s(1469);function O(x,R){return function(C,T){var W=h(C)?e:f,a=R?R():{};return W(C,x,b(T,2),a)}}V.exports=O},42348:(V,$,s)=>{var e=s(21078),f=1/0;function b(h){var O=h==null?0:h.length;return O?e(h,f):[]}V.exports=b},7739:(V,$,s)=>{var e=s(89465),f=s(55189),b=Object.prototype,h=b.hasOwnProperty,O=f(function(x,R,C){h.call(x,C)?x[C].push(R):e(x,C,[R])});V.exports=O},48855:(V,$,s)=>{"use strict";s.d($,{U:()=>k,y:()=>W});var e=s(85893),f=s(67294),b=s(88972),h=s(32574),O=s(97718),x=s(50922),R=s(61697),C=s(97554);const T=({theme:u,expanded:S,variant:N,disabled:g,error:A})=>A?`1px solid ${u.colors.danger600} !important`:g?`1px solid ${u.colors.neutral150}`:S?`1px solid ${u.colors.primary600}`:N==="primary"?`1px solid ${u.colors.neutral0}`:`1px solid ${u.colors.neutral100}`,W=(0,b.default)(x.Z)``,a=(0,b.default)(C.x)`
  border: ${T};

  &:hover:not([aria-disabled='true']) {
    border: 1px solid ${({theme:u})=>u.colors.primary600};

    ${W} {
      color: ${({theme:u,expanded:S})=>S?void 0:u.colors.primary700};
    }

    ${x.Z} {
      color: ${({theme:u,expanded:S})=>S?void 0:u.colors.primary600};
    }

    & > ${R.k} {
      background: ${({theme:u})=>u.colors.primary100};
    }

    [data-strapi-dropdown='true'] {
      background: ${({theme:u})=>u.colors.primary200};
    }
  }
`,k=({children:u,disabled:S=!1,error:N,expanded:g=!1,hasErrorMessage:A=!0,id:z,onToggle:Q,toggle:oe,size:ee="M",variant:v="primary",shadow:de})=>{const J=(0,O.M)(z),te=f.useMemo(()=>({expanded:g,onToggle:Q,toggle:oe,id:J,size:ee,variant:v,disabled:S}),[S,g,J,Q,ee,oe,v]);return(0,e.jsxs)(h.S.Provider,{value:te,children:[(0,e.jsx)(a,{"data-strapi-expanded":g,disabled:S,"aria-disabled":S,expanded:g,hasRadius:!0,variant:v,error:N,shadow:de,children:u}),N&&A&&(0,e.jsx)(C.x,{paddingTop:1,children:(0,e.jsx)(x.Z,{variant:"pi",textColor:"danger600",children:N})})]})}},74579:(V,$,s)=>{"use strict";s.d($,{v:()=>h});var e=s(85893),f=s(32574),b=s(97554);const h=({children:O,...x})=>{const{expanded:R,id:C}=(0,f.A)();if(!R)return null;const T=`accordion-content-${C}`,W=`accordion-label-${C}`,a=`accordion-desc-${C}`;return(0,e.jsx)(b.x,{role:"region",id:T,"aria-labelledby":W,"aria-describedby":a,...x,children:O})}},32574:(V,$,s)=>{"use strict";s.d($,{A:()=>b,S:()=>f});var e=s(67294);const f=(0,e.createContext)({disabled:!1,expanded:!1,id:"",size:"M",variant:"primary"}),b=()=>(0,e.useContext)(f)},69983:(V,$,s)=>{"use strict";s.d($,{B:()=>u});var e=s(85893),f=s(97407),b=s(88972),h=s(48855),O=s(32574);const x=({expanded:S,disabled:N,variant:g})=>{let A="neutral100";return S?A="primary100":N?A="neutral150":g==="primary"&&(A="neutral0"),A};var R=s(86990),C=s(502),T=s(61697),W=s(50922);const a=(0,b.default)(R.A)`
  text-align: left;

  // necessary to make the ellipsis prop work on the title
  > span {
    max-width: 100%;
  }

  svg {
    width: ${14/16}rem;
    height: ${14/16}rem;

    path {
      fill: ${({theme:S,expanded:N})=>N?S.colors.primary600:S.colors.neutral500};
    }
  }
`,k=(0,b.default)(T.k)`
  min-height: ${({theme:S,size:N})=>S.sizes.accordions[N]};
  border-radius: ${({theme:S,expanded:N})=>N?`${S.borderRadius} ${S.borderRadius} 0 0`:S.borderRadius};

  &:hover {
    svg {
      path {
        fill: ${({theme:S})=>S.colors.primary600};
      }
    }
  }
`,u=({title:S,description:N,as:g="span",togglePosition:A="right",action:z,...Q})=>{const{onToggle:oe,toggle:ee,expanded:v,id:de,size:J,variant:te,disabled:Y}=(0,O.A)(),ue=`accordion-content-${de}`,be=`accordion-label-${de}`,Le=`accordion-desc-${de}`,ce=J==="M"?6:4,me=J==="M"?ce:ce-2,Te=x({expanded:v,disabled:Y,variant:te}),xe={as:g,fontWeight:J==="S"?"bold":void 0,id:be,textColor:v?"primary600":"neutral700",ellipsis:!0,variant:J==="M"?"delta":void 0},Z=v?"primary600":"neutral600",w=v?"primary200":"neutral200",j=J==="M"?`${32/16}rem`:`${24/16}rem`,_=()=>{Y||(ee&&!oe?(console.warn('Deprecation warning: Usage of "toggle" prop in Accordion component is deprecated. This is discouraged and will be removed in the next major release. Please use "onToggle" instead'),ee()):oe&&oe())},re=(0,e.jsx)(T.k,{justifyContent:"center",borderRadius:"50%",height:j,width:j,transform:v?"rotate(180deg)":void 0,"data-strapi-dropdown":!0,"aria-hidden":!0,as:"span",background:w,cursor:Y?"not-allowed":"pointer",onClick:_,shrink:0,children:(0,e.jsx)(C.J,{as:f.Z,width:J==="M"?`${11/16}rem`:`${8/16}rem`,color:v?"primary600":"neutral600"})});return(0,e.jsx)(k,{paddingBottom:me,paddingLeft:ce,paddingRight:ce,paddingTop:me,background:Te,expanded:v,size:J,justifyContent:"space-between",cursor:Y?"not-allowed":"",children:(0,e.jsxs)(T.k,{gap:3,flex:1,maxWidth:"100%",children:[A==="left"&&re,(0,e.jsx)(a,{onClick:_,"aria-disabled":Y,"aria-expanded":v,"aria-controls":ue,"aria-labelledby":be,"data-strapi-accordion-toggle":!0,expanded:v,type:"button",flex:1,minWidth:0,...Q,children:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(h.y,{...xe,children:S}),N&&(0,e.jsx)(W.Z,{as:"p",id:Le,textColor:Z,children:N})]})}),A==="right"&&(0,e.jsxs)(T.k,{gap:3,children:[re,z]}),A==="left"&&z]})})}},73685:(V,$,s)=>{"use strict";s.d($,{Q:()=>h});var e=s(85893),f=s(88972),b=s(65744);const h=({options:x,...R})=>(0,e.jsx)(b.NU,{...R,children:x.map(C=>"children"in C?(0,e.jsx)(b.Ab,{label:C.label,values:C.children.map(T=>T.value.toString()),children:C.children.map(T=>(0,e.jsx)(O,{value:T.value,children:T.label},T.value))},C.label):(0,e.jsx)(b.ML,{value:C.value,children:C.label},C.value))}),O=(0,f.default)(b.ML)`
  padding-left: ${({theme:x})=>x.spaces[7]};
`},82392:(V,$,s)=>{"use strict";s.d($,{O:()=>T});var e=s(85893),f=s(67294),b=s(88972),h=s(16607),O=s(10574);const x=()=>(0,e.jsx)(h.x,{"aria-hidden":!0,paddingLeft:1,paddingRight:1,children:(0,e.jsx)(O.Z,{variant:"pi",textColor:"neutral500",children:"/"})});x.displayName="Divider";var R=s(96987);const C=(0,b.default)(R.k)`
  // CrumbLinks do have padding-x, because they need to have a
  // interaction effect, which mis-aligns the breadcrumbs on the left.
  // This normalizes the behavior by moving the first item to left by
  // the same amount it has inner padding
  :first-child {
    margin-left: ${({theme:W})=>`calc(-1*${W.spaces[2]})`};
  }
`,T=({label:W,children:a,...k})=>{const u=f.Children.toArray(a);return(0,e.jsx)(h.x,{"aria-label":W,...k,children:(0,e.jsx)(C,{as:"ol",children:f.Children.map(u,(S,N)=>{const g=u.length>1&&N+1<u.length;return(0,e.jsxs)(R.k,{inline:!0,as:"li",children:[S,g&&(0,e.jsx)(x,{})]})})})})};T.displayName="Breadcrumbs"},75071:(V,$,s)=>{"use strict";s.d($,{$:()=>h});var e=s(85893),f=s(16607),b=s(10574);const h=({children:O,isCurrent:x=!1,...R})=>(0,e.jsx)(f.x,{paddingLeft:2,paddingRight:2,paddingTop:1,paddingBottom:1,children:(0,e.jsx)(b.Z,{variant:"pi",textColor:"neutral800",fontWeight:x?"bold":"normal","aria-current":x,...R,children:O})});h.displayName="Crumb"}}]);
