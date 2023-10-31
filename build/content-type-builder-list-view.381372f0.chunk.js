"use strict";(self.webpackChunk_13_candles_cms=self.webpackChunk_13_candles_cms||[]).push([[5905],{3500:(oe,w,n)=>{n.r(w),n.d(w,{default:()=>rt});var e=n(67294),v=n(57497),u=n(61697),k=n(39219),H=n(24),f=n(97554),l=n(20297),M=n(26911),O=n(42195),D=n(19600),X=n(87370),V=n(27361),r=n.n(V),g=n(18721),T=n.n(g),b=n(18446),x=n.n(b),j=n(11700),z=n.n(j),A=n(86896),J=n(16550),G=n(54571),fe=n(67245),ge=n(40313),_=n(28873),Z=n(50922),Be=n(20613),ke=n(45697),o=n.n(ke),K=n(27523),he=n(47558),C=n(90635),$=n(88972);const ye=$.default.tr`
  &.component-row,
  &.dynamiczone-row {
    position: relative;
    border-top: none !important;

    table tr:first-child {
      border-top: none;
    }

    > td:first-of-type {
      padding: 0 0 0 ${(0,l.Q1)(20)};
      position: relative;

      &::before {
        content: '';
        width: ${(0,l.Q1)(4)};
        height: calc(100% - 40px);
        position: absolute;
        top: -7px;
        left: 1.625rem;
        border-radius: 4px;

        ${({isFromDynamicZone:t,isChildOfDynamicZone:a,theme:s})=>a?`background-color: ${s.colors.primary200};`:t?`background-color: ${s.colors.primary200};`:`background: ${s.colors.neutral150};`}
      }
    }
  }

  &.dynamiczone-row > td:first-of-type {
    padding: 0;
  }
`;function ae({customRowComponent:t,component:a,isFromDynamicZone:s,isNestedInDZComponent:i,firstLoopComponentUid:m}){const{modifiedData:d}=(0,K.Z)(),{schema:{attributes:h}}=r()(d,["components",a],{schema:{attributes:[]}});return e.createElement(ye,{isChildOfDynamicZone:s,className:"component-row"},e.createElement("td",{colSpan:12},e.createElement(xe,{customRowComponent:t,items:h,targetUid:a,firstLoopComponentUid:m||a,editTarget:"components",isFromDynamicZone:s,isNestedInDZComponent:i,isSub:!0,secondLoopComponentUid:m?a:null})))}ae.defaultProps={component:null,customRowComponent:null,firstLoopComponentUid:null,isFromDynamicZone:!1,isNestedInDZComponent:!1},ae.propTypes={component:o().string,customRowComponent:o().func,firstLoopComponentUid:o().string,isFromDynamicZone:o().bool,isNestedInDZComponent:o().bool};const Ee=ae;var je=n(54912),Ie=n(502),be=n(25237);function le({isActive:t,icon:a}){return e.createElement(u.k,{alignItems:"center",background:t?"primary200":"neutral200",justifyContent:"center",height:8,width:8,borderRadius:"50%"},e.createElement(Ie.J,{as:be.c[a]||be.c.cube,height:5,width:5}))}le.defaultProps={isActive:!1,icon:"Cube"},le.propTypes={isActive:o().bool,icon:o().string};const Ce=(0,$.default)(f.x)`
  position: absolute;
  display: none;
  top: 5px;
  right: ${(0,l.Q1)(8)};

  svg {
    width: ${(0,l.Q1)(10)};
    height: ${(0,l.Q1)(10)};

    path {
      fill: ${({theme:t})=>t.colors.primary600};
    }
  }
`,Fe=(0,$.default)(u.k)`
  width: ${(0,l.Q1)(140)};
  height: ${(0,l.Q1)(80)};
  position: relative;
  border: 1px solid ${({theme:t})=>t.colors.neutral200};
  background: ${({theme:t})=>t.colors.neutral100};
  border-radius: ${({theme:t})=>t.borderRadius};
  max-width: 100%;

  &.active,
  &:focus,
  &:hover {
    border: 1px solid ${({theme:t})=>t.colors.primary200};
    background: ${({theme:t})=>t.colors.primary100};

    ${Ce} {
      display: block;
    }

    ${Z.Z} {
      color: ${({theme:t})=>t.colors.primary600};
    }

    /* > ComponentIcon */
    > div:first-child {
      background: ${({theme:t})=>t.colors.primary200};
      color: ${({theme:t})=>t.colors.primary600};

      svg {
        path {
          fill: ${({theme:t})=>t.colors.primary600};
        }
      }
    }
  }
`;function re({component:t,dzName:a,index:s,isActive:i,isInDevelopmentMode:m,onClick:d}){const{modifiedData:h,removeComponentFromDynamicZone:I}=(0,K.Z)(),{schema:{icon:L,displayName:R}}=r()(h,["components",t],{schema:{}}),y=c=>{c.stopPropagation(),I(a,s)};return e.createElement(Fe,{alignItems:"center",direction:"column",className:i?"active":"",borderRadius:"borderRadius",justifyContent:"center",paddingLeft:4,paddingRight:4,shrink:0,onClick:d,role:"tab",tabIndex:i?0:-1,cursor:"pointer","aria-selected":i,"aria-controls":`dz-${a}-panel-${s}`,id:`dz-${a}-tab-${s}`},e.createElement(le,{icon:L,isActive:i}),e.createElement(f.x,{marginTop:1,maxWidth:"100%"},e.createElement(Z.Z,{variant:"pi",fontWeight:"bold",ellipsis:!0},R)),m&&e.createElement(Ce,{as:"button",onClick:y},e.createElement(je.Z,null)))}re.defaultProps={component:null,isActive:!1,isInDevelopmentMode:!1,onClick(){}},re.propTypes={component:o().string,dzName:o().string.isRequired,index:o().number.isRequired,isActive:o().bool,isInDevelopmentMode:o().bool,onClick:o().func};const Ae=re,Pe=(0,$.default)(M.Z)`
  width: ${(0,l.Q1)(32)};
  height: ${(0,l.Q1)(32)};
  padding: ${(0,l.Q1)(9)};
  border-radius: ${(0,l.Q1)(64)};
  background: ${({theme:t})=>t.colors.primary100};
  path {
    fill: ${({theme:t})=>t.colors.primary600};
  }
`,Se=(0,$.default)(f.x)`
  height: ${(0,l.Q1)(90)};
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
`,we=(0,$.default)(u.k)`
  width: 100%;
  overflow-x: auto;
`,Oe=(0,$.default)(f.x)`
  padding-top: ${(0,l.Q1)(90)};
`,Ue=(0,$.default)(u.k)`
  flex-shrink: 0;
  width: ${(0,l.Q1)(140)};
  height: ${(0,l.Q1)(80)};
  justify-content: center;
  align-items: center;
`;function se({customRowComponent:t,components:a,addComponent:s,name:i,targetUid:m}){const{isInDevelopmentMode:d}=(0,K.Z)(),[h,I]=(0,e.useState)(0),{formatMessage:L}=(0,A.Z)(),R=c=>{h!==c&&I(c)},y=()=>{s(i)};return e.createElement(ye,{className:"dynamiczone-row",isFromDynamicZone:!0},e.createElement("td",{colSpan:12},e.createElement(Se,{paddingLeft:8},e.createElement(we,{gap:2},d&&e.createElement("button",{type:"button",onClick:y},e.createElement(Ue,{direction:"column",alignItems:"stretch",gap:1},e.createElement(Pe,null),e.createElement(Z.Z,{variant:"pi",fontWeight:"bold",textColor:"primary600"},L({id:(0,C.Z)("button.component.add"),defaultMessage:"Add a component"})))),e.createElement(u.k,{role:"tablist",gap:2},a.map((c,p)=>e.createElement(Ae,{key:c,dzName:i,index:p,component:c,isActive:h===p,isInDevelopmentMode:d,onClick:()=>R(p)}))))),e.createElement(Oe,null,a.map((c,p)=>{const E={customRowComponent:t,component:c};return e.createElement(f.x,{id:`dz-${i}-panel-${p}`,role:"tabpanel",tabindex:0,"aria-labelledby":`dz-${i}-tab-${p}`,key:c,style:{display:h===p?"block":"none"}},e.createElement("table",null,e.createElement("tbody",null,e.createElement(Ee,{...E,isFromDynamicZone:!0,targetUid:m,key:c}))))}))))}se.defaultProps={addComponent(){},components:[],customRowComponent:null,name:null},se.propTypes={addComponent:o().func,components:o().instanceOf(Array),customRowComponent:o().func,name:o().string,targetUid:o().string.isRequired};const We=se,ze=(0,$.default)(f.x)`
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
    fill: ${({theme:t,color:a})=>t.colors[`${a}600`]};
  }
`,Ne=(0,$.default)(f.x)`
  border-radius: 0 0 ${({theme:t})=>t.borderRadius} ${({theme:t})=>t.borderRadius};
  display: block;
  width: 100%;
  border: none;
  position: relative;
  left: -0.25rem;
`,ve=({children:t,icon:a,color:s,...i})=>e.createElement(Ne,{paddingBottom:4,paddingTop:4,as:"button",type:"button",...i},e.createElement(u.k,null,e.createElement(ze,{color:s,"aria-hidden":!0,background:`${s}200`},a),e.createElement(f.x,{paddingLeft:3},e.createElement(Z.Z,{variant:"pi",fontWeight:"bold",textColor:`${s}600`},t))));ve.propTypes={color:o().string.isRequired,children:o().string.isRequired,icon:o().node.isRequired};const Qe=ve,Ve=(0,$.default)(f.x)`
  table {
    width: 100%;
    white-space: nowrap;
  }

  thead {
    border-bottom: 1px solid ${({theme:t})=>t.colors.neutral150};

    tr {
      border-top: 0;
    }
  }

  tr {
    border-top: 1px solid ${({theme:t})=>t.colors.neutral150};

    & td,
    & th {
      padding: ${({theme:t})=>t.spaces[4]};
    }

    & td:first-of-type,
    & th:first-of-type {
      padding: 0 ${({theme:t})=>t.spaces[1]};
    }
  }

  th,
  td {
    vertical-align: middle;
    text-align: left;
    color: ${({theme:t})=>t.colors.neutral600};
    outline-offset: -4px;
  }
`;function ie({addComponentToDZ:t,customRowComponent:a,editTarget:s,firstLoopComponentUid:i,isFromDynamicZone:m,isMain:d,isNestedInDZComponent:h,isSub:I,items:L,secondLoopComponentUid:R,targetUid:y}){const{formatMessage:c}=(0,A.Z)(),{trackUsage:p}=(0,l.rS)(),{isInDevelopmentMode:E,modifiedData:N,isInContentTypeView:P}=(0,K.Z)(),{onOpenModalAddField:U}=(0,he.Z)(),F=()=>{p("hasClickedCTBAddFieldBanner"),U({forTarget:s,targetUid:y})};return y?L.length===0&&d?e.createElement(G.i,{colCount:2,rowCount:2},e.createElement(fe.h,null,e.createElement(ge.Tr,null,e.createElement(_.Th,null,e.createElement(Z.Z,{variant:"sigma",textColor:"neutral600"},c({id:"global.name",defaultMessage:"Name"}))),e.createElement(_.Th,null,e.createElement(Z.Z,{variant:"sigma",textColor:"neutral600"},c({id:"global.type",defaultMessage:"Type"}))))),e.createElement(l.c4,{action:e.createElement(k.z,{onClick:F,size:"L",startIcon:e.createElement(M.Z,null),variant:"secondary"},c({id:(0,C.Z)("table.button.no-fields"),defaultMessage:"Add new field"})),colSpan:2,content:P?{id:(0,C.Z)("table.content.no-fields.collection-type"),defaultMessage:"Add your first field to this Collection-Type"}:{id:(0,C.Z)("table.content.no-fields.component"),defaultMessage:"Add your first field to this component"}})):e.createElement(Ve,null,e.createElement(f.x,{paddingLeft:6,paddingRight:d?6:0,...d&&{style:{overflowX:"auto"}}},e.createElement("table",null,d&&e.createElement("thead",null,e.createElement("tr",null,e.createElement("th",null,e.createElement(Z.Z,{variant:"sigma",textColor:"neutral600"},c({id:"global.name",defaultMessage:"Name"}))),e.createElement("th",{colSpan:"2"},e.createElement(Z.Z,{variant:"sigma",textColor:"neutral600"},c({id:"global.type",defaultMessage:"Type"}))))),e.createElement("tbody",null,L.map(S=>{const{type:Q}=S,Y=a;return e.createElement(e.Fragment,{key:S.name},e.createElement(Y,{...S,isNestedInDZComponent:h,targetUid:y,editTarget:s,firstLoopComponentUid:i,isFromDynamicZone:m,secondLoopComponentUid:R}),Q==="component"&&e.createElement(Ee,{...S,customRowComponent:a,targetUid:y,isNestedInDZComponent:m,editTarget:s,firstLoopComponentUid:i}),Q==="dynamiczone"&&e.createElement(We,{...S,customRowComponent:a,addComponent:t,targetUid:y}))})))),d&&E&&e.createElement(Be.c,{icon:e.createElement(M.Z,null),onClick:F},c({id:(0,C.Z)(`form.button.add.field.to.${N.contentType?N.contentType.schema.kind:s||"collectionType"}`),defaultMessage:"Add another field"})),I&&E&&e.createElement(Qe,{icon:e.createElement(M.Z,null),onClick:F,color:m?"primary":"neutral"},c({id:(0,C.Z)("form.button.add.field.to.component"),defaultMessage:"Add another field"}))):e.createElement(G.i,{colCount:2,rowCount:2},e.createElement(fe.h,null,e.createElement(ge.Tr,null,e.createElement(_.Th,null,e.createElement(Z.Z,{variant:"sigma",textColor:"neutral600"},c({id:"global.name",defaultMessage:"Name"}))),e.createElement(_.Th,null,e.createElement(Z.Z,{variant:"sigma",textColor:"neutral600"},c({id:"global.type",defaultMessage:"Type"}))))),e.createElement(l.c4,{colSpan:2,content:{id:(0,C.Z)("table.content.create-first-content-type"),defaultMessage:"Create your first Collection-Type"}}))}ie.defaultProps={addComponentToDZ(){},customRowComponent:null,firstLoopComponentUid:null,isFromDynamicZone:!1,isNestedInDZComponent:!1,isMain:!1,isSub:!1,items:[],secondLoopComponentUid:null,targetUid:null},ie.propTypes={addComponentToDZ:o().func,customRowComponent:o().func,editTarget:o().string.isRequired,firstLoopComponentUid:o().string,isFromDynamicZone:o().bool,isNestedInDZComponent:o().bool,isMain:o().bool,items:o().instanceOf(Array),secondLoopComponentUid:o().string,targetUid:o().string,isSub:o().bool};const xe=ie;var Te=n(61829),Ke=n(19171),He=n(63364);const Xe=(0,$.default)(f.x)`
  position: absolute;
  left: -1.125rem;
  top: 0px;

  &:before {
    content: '';
    width: ${4/16}rem;
    height: ${12/16}rem;
    background: ${({theme:t,color:a})=>t.colors[a]};
    display: block;
  }
`,Je=$.default.svg`
  position: relative;
  flex-shrink: 0;
  transform: translate(-0.5px, -1px);

  * {
    fill: ${({theme:t,color:a})=>t.colors[a]};
  }
`,Ze=t=>e.createElement(Xe,null,e.createElement(Je,{width:"20",height:"23",viewBox:"0 0 20 23",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},e.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.02477 14.7513C8.65865 17.0594 11.6046 18.6059 17.5596 18.8856C18.6836 18.9384 19.5976 19.8435 19.5976 20.9688V20.9688C19.5976 22.0941 18.6841 23.0125 17.5599 22.9643C10.9409 22.6805 6.454 20.9387 3.75496 17.1258C0.937988 13.1464 0.486328 7.39309 0.486328 0.593262H4.50974C4.50974 7.54693 5.06394 11.9813 7.02477 14.7513Z"})));Ze.propTypes={color:o().string.isRequired};const Ge=Ze;var Ye=n(9699);const ce=({content:t})=>z()(t);ce.defaultProps={content:null},ce.propTypes={content:o().string};const qe=ce,_e=(0,$.default)(f.x)`
  position: relative;
`,de=({type:t,customField:a,repeatable:s})=>{const{formatMessage:i}=(0,A.Z)();let m=t;return["integer","biginteger","float","decimal"].includes(t)?m="number":["string"].includes(t)&&(m="text"),a?e.createElement(Z.Z,null,i({id:(0,C.Z)("attribute.customField"),defaultMessage:"Custom field"})):e.createElement(Z.Z,null,i({id:(0,C.Z)(`attribute.${m}`),defaultMessage:t}),"\xA0",s&&i({id:(0,C.Z)("component.repeatable"),defaultMessage:"(repeatable)"}))};de.defaultProps={customField:null,repeatable:!1},de.propTypes={type:o().string.isRequired,customField:o().string,repeatable:o().bool};const et=de;function ue({configurable:t,customField:a,editTarget:s,firstLoopComponentUid:i,isFromDynamicZone:m,name:d,onClick:h,relation:I,repeatable:L,secondLoopComponentUid:R,target:y,targetUid:c,type:p}){const{contentTypes:E,isInDevelopmentMode:N,removeAttribute:P}=(0,K.Z)(),{formatMessage:U}=(0,A.Z)(),F=p==="relation"&&I.includes("morph"),S=["integer","biginteger","float","decimal"].includes(p)?"number":p,Q=r()(E,[y],{}),Y=r()(Q,["schema","displayName"],""),q=r()(Q,"plugin"),pe=y?"relation":S,ee=()=>{F||t!==!1&&h(s,R||i||c,d,p,a)};let W;return R&&i?W=2:i?W=1:W=0,e.createElement(_e,{as:"tr",...(0,l.X7)({fn:ee,condition:N&&t&&!F})},e.createElement("td",{style:{position:"relative"}},W!==0&&e.createElement(Ge,{color:m?"primary200":"neutral150"}),e.createElement(u.k,{paddingLeft:2,gap:4},e.createElement(Ye.Z,{type:pe,customField:a}),e.createElement(Z.Z,{fontWeight:"bold"},d))),e.createElement("td",null,y?e.createElement(Z.Z,null,U({id:(0,C.Z)(`modelPage.attribute.${F?"relation-polymorphic":"relationWith"}`),defaultMessage:"Relation with"}),"\xA0",e.createElement("span",{style:{fontStyle:"italic"}},e.createElement(qe,{content:Y}),"\xA0",q&&`(${U({id:(0,C.Z)("from"),defaultMessage:"from"})}: ${q})`)):e.createElement(et,{type:p,customField:a,repeatable:L})),e.createElement("td",null,N?e.createElement(u.k,{justifyContent:"flex-end",...l.UW},t?e.createElement(u.k,{gap:1},!F&&e.createElement(Te.h,{onClick:ee,label:`${U({id:"app.utils.edit",defaultMessage:"Edit"})} ${d}`,noBorder:!0,icon:e.createElement(D.Z,null)}),e.createElement(Te.h,{onClick:te=>{te.stopPropagation(),P(s,d,R||i||"")},label:`${U({id:"global.delete",defaultMessage:"Delete"})} ${d}`,noBorder:!0,icon:e.createElement(Ke.Z,null)})):e.createElement(He.Z,null)):e.createElement(f.x,{height:(0,l.Q1)(32)})))}ue.defaultProps={configurable:!0,customField:null,firstLoopComponentUid:null,isFromDynamicZone:!1,onClick(){},relation:"",repeatable:!1,secondLoopComponentUid:null,target:null,targetUid:null,type:null},ue.propTypes={configurable:o().bool,customField:o().string,editTarget:o().string.isRequired,firstLoopComponentUid:o().string,isFromDynamicZone:o().bool,name:o().string.isRequired,onClick:o().func,relation:o().string,repeatable:o().bool,secondLoopComponentUid:o().string,target:o().string,targetUid:o().string,type:o().string};const tt=(0,e.memo)(ue),nt=t=>{let a;switch(t){case"date":case"datetime":case"time":case"timestamp":a="date";break;case"integer":case"biginteger":case"decimal":case"float":a="number";break;case"string":case"text":a="text";break;case"":a="relation";break;default:a=t}return a};var ot=n(41327);const at={collectionTypesConfigurations:[{action:"plugin::content-manager.collection-types.configure-view",subject:null}],componentsConfigurations:[{action:"plugin::content-manager.components.configure-layout",subject:null}],singleTypesConfigurations:[{action:"plugin::content-manager.single-types.configure-view",subject:null}]},me=({disabled:t,isTemporary:a,isInContentTypeView:s,contentTypeKind:i,targetUid:m})=>{const{formatMessage:d}=(0,A.Z)(),{push:h}=(0,J.k6)(),{collectionTypesConfigurations:I,componentsConfigurations:L,singleTypesConfigurations:R}=at,y=d({id:"content-type-builder.form.button.configure-view",defaultMessage:"Configure the view"});let c=I;const p=()=>(a||h(s?`/content-manager/collectionType/${m}/configurations/edit`:`/content-manager/components/${m}/configurations/edit`),!1);return s&&i==="singleType"&&(c=R),s||(c=L),e.createElement(l.jW,{permissions:c},e.createElement(k.z,{startIcon:e.createElement(ot.Z,null),variant:"tertiary",onClick:p,disabled:a||t},y))};me.defaultProps={contentTypeKind:"collectionType",isInContentTypeView:!0,isTemporary:!1,targetUid:""},me.propTypes={disabled:o().bool.isRequired,contentTypeKind:o().string,isInContentTypeView:o().bool,isTemporary:o().bool,targetUid:o().string};const lt=(0,e.memo)(me),rt=()=>{const{initialData:t,modifiedData:a,isInDevelopmentMode:s,isInContentTypeView:i,submitData:m}=(0,K.Z)(),{formatMessage:d}=(0,A.Z)(),{trackUsage:h}=(0,l.rS)(),I=(0,J.$B)("/plugins/content-type-builder/:kind/:currentUID"),{onOpenModalAddComponentsToDZ:L,onOpenModalAddField:R,onOpenModalEditField:y,onOpenModalEditSchema:c,onOpenModalEditCustomField:p}=(0,he.Z)(),E=i?"contentType":"component",N=[E,"schema","attributes"],P=r()(a,[E,"uid"]),U=r()(a,[E,"isTemporary"],!1),F=r()(a,[E,"schema","kind"],null),S=r()(a,N,[]),Q=T()(t,[E,"plugin"]),Y=!x()(a,t),q=i?"contentType":"component",pe=B=>{L({dynamicZoneTarget:B,targetUid:P})},ee=async(B,$e,Me,De,Re)=>{const Le=nt(De);Re?p({forTarget:B,targetUid:$e,attributeName:Me,attributeType:Le,customFieldUid:Re}):y({forTarget:B,targetUid:$e,attributeName:Me,attributeType:Le,step:De==="component"?"2":null})};let W=r()(a,[E,"schema","displayName"],"");const te=r()(a,[E,"schema","kind"],""),ne=I?.params.currentUID==="create-content-type";!W&&ne&&(W=d({id:(0,C.Z)("button.model.create"),defaultMessage:"Create new collection type"}));const st=()=>{const B=te||E;B==="collectionType"&&h("willEditNameOfContentType"),B==="singleType"&&h("willEditNameOfSingleType"),c({modalType:E,forTarget:E,targetUid:P,kind:B})};return e.createElement(e.Fragment,null,e.createElement(J.NL,{message:B=>B.hash==="#back"?!1:d({id:(0,C.Z)("prompt.unsaved")}),when:Y}),e.createElement(v.T,{id:"title",primaryAction:s&&e.createElement(u.k,{gap:2},!ne&&e.createElement(k.z,{startIcon:e.createElement(M.Z,null),variant:"secondary",onClick:()=>{R({forTarget:q,targetUid:P})}},d({id:(0,C.Z)("button.attributes.add.another"),defaultMessage:"Add another field"})),e.createElement(k.z,{startIcon:e.createElement(O.Z,null),onClick:()=>m(),type:"submit",disabled:x()(a,t)},d({id:"global.save",defaultMessage:"Save"}))),secondaryAction:s&&!Q&&!ne&&e.createElement(k.z,{startIcon:e.createElement(D.Z,null),variant:"tertiary",onClick:st},d({id:"app.utils.edit",defaultMessage:"Edit"})),title:z()(W),subtitle:d({id:(0,C.Z)("listView.headerLayout.description"),defaultMessage:"Build the data architecture of your content"}),navigationAction:e.createElement(l.rU,{startIcon:e.createElement(X.Z,null),to:"/plugins/content-type-builder/"},d({id:"global.back",defaultMessage:"Back"}))}),e.createElement(H.D,null,e.createElement(u.k,{direction:"column",alignItems:"stretch",gap:4},e.createElement(u.k,{justifyContent:"flex-end"},e.createElement(u.k,{gap:2},e.createElement(lt,{key:"link-to-cm-settings-view",targetUid:P,isTemporary:U,isInContentTypeView:i,contentTypeKind:F,disabled:ne}))),e.createElement(f.x,{background:"neutral0",shadow:"filterShadow",hasRadius:!0},e.createElement(xe,{items:S,customRowComponent:B=>e.createElement(tt,{...B,onClick:ee}),addComponentToDZ:pe,targetUid:P,editTarget:q,isMain:!0})))))}},24:(oe,w,n)=>{n.d(w,{D:()=>u});var e=n(85893),v=n(97554);const u=({children:k})=>(0,e.jsx)(v.x,{paddingLeft:10,paddingRight:10,children:k})},57497:(oe,w,n)=>{n.d(w,{T:()=>D});var e=n(85893),v=n(67294),u=n(88972);const k=r=>{const g=(0,v.useRef)(null),[T,b]=(0,v.useState)(!0),x=([j])=>{b(j.isIntersecting)};return(0,v.useEffect)(()=>{const j=g.current,z=new IntersectionObserver(x,r);return j&&z.observe(g.current),()=>{j&&z.disconnect()}},[g,r]),[g,T]};var H=n(79698);const f=(r,g)=>{const T=(0,H.W)(g);(0,v.useLayoutEffect)(()=>{const b=new ResizeObserver(T);return Array.isArray(r)?r.forEach(x=>{x.current&&b.observe(x.current)}):r.current&&b.observe(r.current),()=>{b.disconnect()}},[r,T])};var l=n(97554),M=n(61697),O=n(50922);const D=r=>{const g=(0,v.useRef)(null),[T,b]=(0,v.useState)(null),[x,j]=k({root:null,rootMargin:"0px",threshold:0});return f(x,()=>{x.current&&b(x.current.getBoundingClientRect())}),(0,v.useEffect)(()=>{g.current&&b(g.current.getBoundingClientRect())},[g]),(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{style:{height:T?.height},ref:x,children:j&&(0,e.jsx)(V,{ref:g,...r})}),!j&&(0,e.jsx)(V,{...r,sticky:!0,width:T?.width})]})};D.displayName="HeaderLayout";const X=(0,u.default)(l.x)`
  width: ${({width:r})=>r?`${r/16}rem`:void 0};
  z-index: ${({theme:r})=>r.zIndices[1]};
`,V=v.forwardRef(({navigationAction:r,primaryAction:g,secondaryAction:T,subtitle:b,title:x,sticky:j,width:z,...A},J)=>{const G=typeof b=="string";return j?(0,e.jsx)(X,{paddingLeft:6,paddingRight:6,paddingTop:3,paddingBottom:3,position:"fixed",top:0,right:0,background:"neutral0",shadow:"tableShadow",width:z,"data-strapi-header-sticky":!0,children:(0,e.jsxs)(M.k,{justifyContent:"space-between",children:[(0,e.jsxs)(M.k,{children:[r&&(0,e.jsx)(l.x,{paddingRight:3,children:r}),(0,e.jsxs)(l.x,{children:[(0,e.jsx)(O.Z,{variant:"beta",as:"h1",...A,children:x}),G?(0,e.jsx)(O.Z,{variant:"pi",textColor:"neutral600",children:b}):b]}),T?(0,e.jsx)(l.x,{paddingLeft:4,children:T}):null]}),(0,e.jsx)(M.k,{children:g?(0,e.jsx)(l.x,{paddingLeft:2,children:g}):void 0})]})}):(0,e.jsxs)(l.x,{ref:J,paddingLeft:10,paddingRight:10,paddingBottom:8,paddingTop:r?6:8,background:"neutral100","data-strapi-header":!0,children:[r?(0,e.jsx)(l.x,{paddingBottom:2,children:r}):null,(0,e.jsxs)(M.k,{justifyContent:"space-between",children:[(0,e.jsxs)(M.k,{minWidth:0,children:[(0,e.jsx)(O.Z,{as:"h1",variant:"alpha",...A,children:x}),T?(0,e.jsx)(l.x,{paddingLeft:4,children:T}):null]}),g]}),G?(0,e.jsx)(O.Z,{variant:"epsilon",textColor:"neutral600",as:"p",children:b}):b]})})},20613:(oe,w,n)=>{n.d(w,{c:()=>O});var e=n(85893),v=n(88972),u=n(97554),k=n(7223),H=n(61697),f=n(50922);const l=(0,v.default)(u.x)`
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
    fill: ${({theme:D})=>D.colors.primary600};
  }
`,M=(0,v.default)(u.x)`
  border-radius: 0 0 ${({theme:D})=>D.borderRadius} ${({theme:D})=>D.borderRadius};
  display: block;
  width: 100%;
  border: none;
`,O=({children:D,icon:X,...V})=>(0,e.jsxs)("div",{children:[(0,e.jsx)(k.i,{}),(0,e.jsx)(M,{as:"button",background:"primary100",padding:5,...V,children:(0,e.jsxs)(H.k,{children:[(0,e.jsx)(l,{"aria-hidden":!0,background:"primary200",children:X}),(0,e.jsx)(u.x,{paddingLeft:3,children:(0,e.jsx)(f.Z,{variant:"pi",fontWeight:"bold",textColor:"primary600",children:D})})]})})]})}}]);
