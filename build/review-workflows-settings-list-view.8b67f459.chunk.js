"use strict";(self.webpackChunk_13_candles_cms=self.webpackChunk_13_candles_cms||[]).push([[349],{40784:(p,g,t)=>{t.d(g,{r:()=>u});var e=t(85893),s=t(97554),r=t(99168),d=t.n(r);function E(i,n,o){if(!i||!n||!o)return{display:"none"};const{x:l,y:a}=o;return{transform:`translate(${l}px, ${a}px)`}}const u=({renderItem:i})=>{const{itemType:n,isDragging:o,item:l,initialOffset:a,currentOffset:c,mouseOffset:y}=(0,r.useDragLayer)(f=>({item:f.getItem(),itemType:f.getItemType(),initialOffset:f.getInitialSourceClientOffset(),currentOffset:f.getSourceClientOffset(),isDragging:f.isDragging(),mouseOffset:f.getClientOffset()}));return o?(0,e.jsx)(s.x,{height:"100%",left:0,position:"fixed",pointerEvents:"none",top:0,zIndex:100,width:"100%",children:(0,e.jsx)(s.x,{style:E(a,c,y),children:i({type:n,item:l})})}):null}},75021:(p,g,t)=>{t.d(g,{q:()=>d});var e=t(67294),s=t(20297),r=t(88767);function d({enabled:E}={enabled:!0}){const{get:u}=(0,s.kY)(),{data:i,isError:n,isLoading:o}=(0,r.useQuery)(["ee","license-limit-info"],async()=>{const{data:{data:c}}=await u("/admin/license-limit-information");return c},{enabled:E}),l=e.useMemo(()=>i??{},[i]),a=e.useCallback(c=>(l?.features??[]).find(f=>f.name===c)?.options??{},[l?.features]);return{license:l,getFeature:a,isError:n,isLoading:o}}},43390:(p,g,t)=>{t.d(g,{eJ:()=>P,lx:()=>C,h4:()=>v,fC:()=>h});var e=t(67294),s=t(67242),r=t(85841),d=t(24),E=t(57497),u=t(20297),i=t(87370),n=t(86896),o=t(40784),l=t(86978),a=t(61697),c=t(50922),y=t(97407),f=t(45697),L=t.n(f),w=t(88972);const A=(0,w.default)(a.k)`
  svg path {
    fill: ${({theme:O})=>O.colors.neutral600};
  }
`;function D({name:O}){return e.createElement(a.k,{background:"primary100",borderStyle:"dashed",borderColor:"primary600",borderWidth:"1px",gap:3,hasRadius:!0,padding:3,shadow:"tableShadow",width:(0,u.Q1)(300)},e.createElement(A,{alignItems:"center",background:"neutral200",borderRadius:"50%",height:6,justifyContent:"center",width:6},e.createElement(y.Z,{width:`${8/16}rem`})),e.createElement(c.Z,{fontWeight:"bold"},O))}D.propTypes={name:L().string.isRequired};function S({type:O,item:M}){switch(O){case l.uL.STAGE:return e.createElement(D,{...M});default:return null}}function C(){return e.createElement(o.r,{renderItem:S})}function h({children:O}){return e.createElement(s.A,null,e.createElement(r.o,{tabIndex:-1},e.createElement(d.D,null,O)))}function P({href:O}){const{formatMessage:M}=(0,n.Z)();return e.createElement(u.rU,{startIcon:e.createElement(i.Z,null),to:O},M({id:"global.back",defaultMessage:"Back"}))}function v({title:O,subtitle:M,navigationAction:W,primaryAction:R}){return e.createElement(e.Fragment,null,e.createElement(u.SL,{name:O}),e.createElement(E.T,{navigationAction:W,primaryAction:R,title:O,subtitle:M}))}},38705:(p,g,t)=>{t.d(g,{uT:()=>S,fC:()=>P,Dx:()=>D});var e=t(67294),s=t(50922),r=t(61697),d=t(36956),E=t(162),u=t(97554),i=t(61829),n=t(94101),o=t(54912),l=t(45697),a=t.n(l),c=t(86896),y=t(88972);const f=t.p+"0cd5f8915b265d5b1856.png",L="limits-title",w="https://strapi.io/pricing-cloud",A="https://strapi.io/contact-sales";function D({children:v}){return e.createElement(s.Z,{variant:"alpha",id:L},v)}D.propTypes={children:a().node.isRequired};function S({children:v}){return e.createElement(s.Z,{variant:"omega"},v)}S.propTypes={children:a().node.isRequired};function C(){const{formatMessage:v}=(0,c.Z)();return e.createElement(r.k,{gap:2,paddingTop:4},e.createElement(n.Q,{variant:"default",isExternal:!0,href:w},v({id:"Settings.review-workflows.limit.cta.learn",defaultMessage:"Learn more"})),e.createElement(n.Q,{variant:"tertiary",isExternal:!0,href:A},v({id:"Settings.review-workflows.limit.cta.sales",defaultMessage:"Contact Sales"})))}const h=y.default.img`
  // Margin top|right reverse the padding of ModalBody
  margin-right: ${({theme:v})=>`-${v.spaces[7]}`};
  margin-top: ${({theme:v})=>`-${v.spaces[7]}`};
  width: 360px;
`;function P({children:v,isOpen:O,onClose:M}){const{formatMessage:W}=(0,c.Z)();return O?e.createElement(d.P,{labelledBy:L},e.createElement(E.f,null,e.createElement(r.k,{gap:2,paddingLeft:7,position:"relative"},e.createElement(r.k,{alignItems:"start",direction:"column",gap:2,width:"60%"},v,e.createElement(C,null)),e.createElement(r.k,{justifyContent:"end",height:"100%",width:"40%"},e.createElement(h,{src:f,"aria-hidden":!0,alt:"",loading:"lazy"}),e.createElement(u.x,{display:"flex",position:"absolute",right:0,top:0},e.createElement(i.h,{icon:e.createElement(o.Z,null),"aria-label":W({id:"global.close",defaultMessage:"Close"}),onClick:M})))))):null}P.defaultProps={isOpen:!1},P.propTypes={children:a().node.isRequired,isOpen:a().bool,onClose:a().func.isRequired}},86978:(p,g,t)=>{t.d(g,{$k:()=>f,Ef:()=>S,FT:()=>A,Nj:()=>c,Ot:()=>l,QM:()=>n,VS:()=>L,_X:()=>C,bc:()=>a,gu:()=>r,k_:()=>y,lv:()=>w,qZ:()=>i,rg:()=>E,sN:()=>s,uL:()=>D,x4:()=>o,yq:()=>d,zn:()=>u});var e=t(19829);const s="settings_review-workflows",r="Settings/Review_Workflows/RESET_WORKFLOW",d="Settings/Review_Workflows/SET_CONTENT_TYPES",E="Settings/Review_Workflows/SET_IS_LOADING",u="Settings/Review_Workflows/SET_ROLES",i="Settings/Review_Workflows/SET_WORKFLOW",n="Settings/Review_Workflows/SET_WORKFLOWS",o="Settings/Review_Workflows/WORKFLOW_DELETE_STAGE",l="Settings/Review_Workflows/WORKFLOW_ADD_STAGE",a="Settings/Review_Workflows/WORKFLOW_CLONE_STAGE",c="Settings/Review_Workflows/WORKFLOW_UPDATE_STAGE",y="Settings/Review_Workflows/WORKFLOW_UPDATE_STAGES",f="Settings/Review_Workflows/WORKFLOW_UPDATE_STAGE_POSITION",L="Settings/Review_Workflows/WORKFLOW_UPDATE",w={primary600:"Blue",primary200:"Lilac",alternative600:"Violet",alternative200:"Lavender",success600:"Green",success200:"Pale Green",danger500:"Cherry",danger200:"Pink",warning600:"Orange",warning200:"Yellow",secondary600:"Teal",secondary200:"Baby Blue",neutral400:"Gray",neutral0:"White"},A=e.W.colors.primary600,D={STAGE:"stage"},S="numberOfWorkflows",C="stagesPerWorkflow"},52258:(p,g,t)=>{t.d(g,{n:()=>d});var e=t(67294),s=t(20297),r=t(88767);function d(E={}){const{get:u}=(0,s.kY)(),{id:i="",...n}=E,o={populate:"stages"},{data:l,isLoading:a,status:c,refetch:y}=(0,r.useQuery)(["review-workflows","workflows",i],async()=>(await u(`/admin/review-workflows/workflows/${i}`,{params:{...o,...n}})).data),f=e.useMemo(()=>i&&l?.data?[l.data]:Array.isArray(l?.data)?l.data:[],[l?.data,i]);return{meta:e.useMemo(()=>l?.meta??{},[l?.meta]),workflows:f,isLoading:a,status:c,refetch:y}}},26259:(p,g,t)=>{t.r(g),t.d(g,{default:()=>_});var e=t(67294),s=t(20297),r=t(86706),d=t(36364),E=t(61697),u=t(70257),i=t(54571),n=t(20613),o=t(67245),l=t(40313),a=t(28873),c=t(50922),y=t(45147),f=t(22500),L=t(61829),w=t(26911),A=t(19600),D=t(19171),S=t(86896),C=t(88767),h=t(16550),P=t(88972),v=t(92686),O=t(75021),M=t(43390),W=t(38705),R=t(86978),H=t(52258);const Q=(0,P.default)(s.rU)`
  align-items: center;
  height: ${(0,s.Q1)(32)};
  display: flex;
  justify-content: center;
  padding: ${({theme:m})=>`${m.spaces[2]}}`};
  width: ${(0,s.Q1)(32)};

  svg {
    height: ${(0,s.Q1)(12)};
    width: ${(0,s.Q1)(12)};

    path {
      fill: ${({theme:m})=>m.colors.neutral500};
    }
  }

  &:hover,
  &:focus {
    svg {
      path {
        fill: ${({theme:m})=>m.colors.neutral800};
      }
    }
  }
`;function Y(){const{formatMessage:m}=(0,S.Z)(),{push:U}=(0,h.k6)(),{collectionTypes:X,singleTypes:z,isLoading:J}=(0,v.G)(),{meta:I,workflows:G,isLoading:k,refetch:q}=(0,H.n)(),[j,K]=e.useState(null),[ee,x]=e.useState(!1),{del:te}=(0,s.kY)(),{formatAPIError:ne}=(0,s.So)(),F=(0,s.lm)(),{getFeature:oe,isLoading:Z}=(0,O.q)(),{trackUsage:b}=(0,s.rS)(),se=(0,r.v9)(d._),{allowedActions:{canCreate:V,canDelete:re}}=(0,s.ss)(se.settings["review-workflows"]),$=oe("review-workflows"),{mutateAsync:le,isLoading:ae}=(0,C.useMutation)(async({workflowId:T,stages:B})=>{const{data:{data:N}}=await te(`/admin/review-workflows/workflows/${T}`,{data:B});return N},{onSuccess(){F({type:"success",message:{id:"notification.success.deleted",defaultMessage:"Deleted"}})}}),ie=T=>[...X,...z].find(N=>N.uid===T).info.displayName,de=T=>{K(T)},ce=()=>{K(null)},ue=async()=>{try{const T=await le({workflowId:j});return await q(),K(null),T}catch(T){return F({type:"warning",message:ne(T)}),null}};return e.useEffect(()=>{!k&&!Z&&$?.[R.Ef]&&I?.workflowCount>parseInt($[R.Ef],10)&&x(!0)},[Z,k,$,I?.workflowCount,I.workflowsTotal]),e.createElement(e.Fragment,null,e.createElement(M.h4,{primaryAction:V&&e.createElement(s.Qj,{startIcon:e.createElement(w.Z,null),size:"S",to:"/settings/review-workflows/create",onClick:T=>{$?.[R.Ef]&&I?.workflowCount>=parseInt($[R.Ef],10)?(T.preventDefault(),x(!0)):b("willCreateWorkflow")}},m({id:"Settings.review-workflows.list.page.create",defaultMessage:"Create new workflow"})),subtitle:m({id:"Settings.review-workflows.list.page.subtitle",defaultMessage:"Manage your content review process"}),title:m({id:"Settings.review-workflows.list.page.title",defaultMessage:"Review Workflows"})}),e.createElement(M.fC,null,k||J?e.createElement(E.k,{justifyContent:"center"},e.createElement(u.a,null,m({id:"Settings.review-workflows.page.list.isLoading",defaultMessage:"Workflows are loading"}))):e.createElement(i.i,{colCount:3,footer:V&&e.createElement(n.c,{icon:e.createElement(w.Z,null),onClick:()=>{$?.[R.Ef]&&I?.workflowCount>=parseInt($[R.Ef],10)?x(!0):(U("/settings/review-workflows/create"),b("willCreateWorkflow"))}},m({id:"Settings.review-workflows.list.page.create",defaultMessage:"Create new workflow"})),rowCount:1},e.createElement(o.h,null,e.createElement(l.Tr,null,e.createElement(a.Th,null,e.createElement(c.Z,{variant:"sigma"},m({id:"Settings.review-workflows.list.page.list.column.name.title",defaultMessage:"Name"}))),e.createElement(a.Th,null,e.createElement(c.Z,{variant:"sigma"},m({id:"Settings.review-workflows.list.page.list.column.stages.title",defaultMessage:"Stages"}))),e.createElement(a.Th,null,e.createElement(c.Z,{variant:"sigma"},m({id:"Settings.review-workflows.list.page.list.column.contentTypes.title",defaultMessage:"Content Types"}))),e.createElement(a.Th,null,e.createElement(y.T,null,m({id:"Settings.review-workflows.list.page.list.column.actions.title",defaultMessage:"Actions"}))))),e.createElement(f.p,null,G.map(T=>e.createElement(l.Tr,{...(0,s.X7)({fn(B){B.target.nodeName!=="BUTTON"&&U(`/settings/review-workflows/${T.id}`)}}),key:`workflow-${T.id}`},e.createElement(a.Td,{width:(0,s.Q1)(250)},e.createElement(c.Z,{textColor:"neutral800",fontWeight:"bold",ellipsis:!0},T.name)),e.createElement(a.Td,null,e.createElement(c.Z,{textColor:"neutral800"},T.stages.length)),e.createElement(a.Td,null,e.createElement(c.Z,{textColor:"neutral800"},(T?.contentTypes??[]).map(ie).join(", "))),e.createElement(a.Td,null,e.createElement(E.k,{alignItems:"center",justifyContent:"end"},e.createElement(Q,{to:`/settings/review-workflows/${T.id}`,"aria-label":m({id:"Settings.review-workflows.list.page.list.column.actions.edit.label",defaultMessage:"Edit {name}"},{name:T.name})},e.createElement(A.Z,null)),G.length>1&&re&&e.createElement(L.h,{"aria-label":m({id:"Settings.review-workflows.list.page.list.column.actions.delete.label",defaultMessage:"Delete {name}"},{name:"Default workflow"}),icon:e.createElement(D.Z,null),noBorder:!0,onClick:()=>{de(T.id)}}))))))),e.createElement(s.QH,{bodyText:{id:"Settings.review-workflows.list.page.delete.confirm.body",defaultMessage:"If you remove this worfklow, all stage-related information will be removed for this content-type. Are you sure you want to remove it?"},isConfirmButtonLoading:ae,isOpen:!!j,onToggleDialog:ce,onConfirm:ue}),e.createElement(W.fC,{isOpen:ee,onClose:()=>x(!1)},e.createElement(W.Dx,null,m({id:"Settings.review-workflows.list.page.workflows.limit.title",defaultMessage:"You\u2019ve reached the limit of workflows in your plan"})),e.createElement(W.uT,null,m({id:"Settings.review-workflows.list.page.workflows.limit.body",defaultMessage:"Delete a workflow or contact Sales to enable more workflows."})))))}function _(){const m=(0,r.v9)(d._);return e.createElement(s.O4,{permissions:m.settings["review-workflows"].main},e.createElement(Y,null))}},20613:(p,g,t)=>{t.d(g,{c:()=>o});var e=t(85893),s=t(88972),r=t(97554),d=t(7223),E=t(61697),u=t(50922);const i=(0,s.default)(r.x)`
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
`,n=(0,s.default)(r.x)`
  border-radius: 0 0 ${({theme:l})=>l.borderRadius} ${({theme:l})=>l.borderRadius};
  display: block;
  width: 100%;
  border: none;
`,o=({children:l,icon:a,...c})=>(0,e.jsxs)("div",{children:[(0,e.jsx)(d.i,{}),(0,e.jsx)(n,{as:"button",background:"primary100",padding:5,...c,children:(0,e.jsxs)(E.k,{children:[(0,e.jsx)(i,{"aria-hidden":!0,background:"primary200",children:a}),(0,e.jsx)(r.x,{paddingLeft:3,children:(0,e.jsx)(u.Z,{variant:"pi",fontWeight:"bold",textColor:"primary600",children:l})})]})})]})},87370:(p,g,t)=>{t.d(g,{Z:()=>r});var e=t(85893);const s=d=>(0,e.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...d,children:(0,e.jsx)("path",{fill:"#212134",d:"M24 13.3a.2.2 0 0 1-.2.2H5.74l8.239 8.239a.2.2 0 0 1 0 .282L12.14 23.86a.2.2 0 0 1-.282 0L.14 12.14a.2.2 0 0 1 0-.282L11.86.14a.2.2 0 0 1 .282 0L13.98 1.98a.2.2 0 0 1 0 .282L5.74 10.5H23.8c.11 0 .2.09.2.2v2.6Z"})}),r=s},4071:(p,g,t)=>{t.d(g,{G$:()=>s,Gt:()=>a,MG:()=>e,MR:()=>i,T:()=>u,TP:()=>r,Vb:()=>E,Vv:()=>o,ZC:()=>l,gK:()=>d,wG:()=>n});const e="success-light",s="danger-light",r="default",d="tertiary",E="secondary",u="danger",i="success",n="ghost",o=[e,s],l=[r,d,E,u,i,n,...o],a=["S","M","L"]},62485:(p,g,t)=>{t.d(g,{PD:()=>i,sg:()=>d,tB:()=>u,yP:()=>E});var e=t(4071),s=t(10574);const r=n=>n===e.MG||n===e.G$?`${n.substring(0,n.lastIndexOf("-"))}`:n===e.gK?"neutral":n===e.TP||n===e.Vb||e.ZC.every(o=>o!==n)?"primary":`${n}`,d=({theme:n})=>`
    border: 1px solid ${n.colors.neutral200};
    background: ${n.colors.neutral150};
    ${s.Z} {
      color: ${n.colors.neutral600};
    }
    svg {
      > g, path {
        fill: ${n.colors.neutral600};
      }
    }
  `,E=({theme:n,variant:o})=>[...e.Vv,e.Vb].includes(o)?`
      background-color: ${n.colors.neutral0};
    `:o===e.gK?`
      background-color: ${n.colors.neutral100};
    `:o===e.wG?`
      background-color: ${n.colors.neutral100};
    `:o===e.TP?`
      border: 1px solid ${n.colors.buttonPrimary500};
      background: ${n.colors.buttonPrimary500};
    `:`
    border: 1px solid ${n.colors[`${r(o)}500`]};
    background: ${n.colors[`${r(o)}500`]};
  `,u=({theme:n,variant:o})=>[...e.Vv,e.Vb].includes(o)?`
      background-color: ${n.colors.neutral0};
      border: 1px solid ${n.colors[`${r(o)}600`]};
      ${s.Z} {
        color: ${n.colors[`${r(o)}600`]};
      }
      svg {
        > g, path {
          fill: ${n.colors[`${r(o)}600`]};
        }
      }
    `:o===e.gK?`
      background-color: ${n.colors.neutral150};
    `:`
    border: 1px solid ${n.colors[`${r(o)}600`]};
    background: ${n.colors[`${r(o)}600`]};
  `,i=({theme:n,variant:o})=>{switch(o){case e.G$:case e.MG:case e.Vb:return`
          border: 1px solid ${n.colors[`${r(o)}200`]};
          background: ${n.colors[`${r(o)}100`]};
          ${s.Z} {
            color: ${n.colors[`${r(o)}700`]};
          }
          svg {
            > g, path {
              fill: ${n.colors[`${r(o)}700`]};
            }
          }
        `;case e.gK:return`
          border: 1px solid ${n.colors.neutral200};
          background: ${n.colors.neutral0};
          ${s.Z} {
            color: ${n.colors.neutral800};
          }
          svg {
            > g, path {
              fill: ${n.colors.neutral800};
            }
          }
        `;case e.wG:return`
        border: 1px solid transparent;
        background: transparent;

        ${s.Z} {
          color: ${n.colors.neutral800};
        }

        svg {
          > g, path {
            fill: ${n.colors.neutral500};
          }
        }
      `;case e.MR:case e.T:return`
          border: 1px solid ${n.colors[`${r(o)}600`]};
          background: ${n.colors[`${r(o)}600`]};
          ${s.Z} {
            color: ${n.colors.neutral0};
          }
        `;default:return`
          svg {
            > g, path {
              fill: ${n.colors.buttonNeutral0};
            }
          }
        `}}},94101:(p,g,t)=>{t.d(g,{Q:()=>l});var e=t(85893),s=t(67294),r=t(88972),d=t(62485),E=t(20501),u=t(53342),i=t(96987),n=t(10574);const o=(0,r.default)(E.G)`
  text-decoration: none;

  &[aria-disabled='true'] {
    ${d.sg}
    &:active {
      ${d.sg}
    }
  }

  &:hover {
    ${d.yP}
  }

  &:active {
    ${d.tB}
  }

  ${d.PD}
`,l=s.forwardRef(({variant:a="default",startIcon:c,endIcon:y,disabled:f=!1,children:L,size:w="S",as:A=u.f,...D},S)=>{const C=w==="S"?2:"10px",h=4;return(0,e.jsxs)(o,{ref:S,"aria-disabled":f,size:w,variant:a,background:"buttonPrimary600",borderColor:"buttonPrimary600",hasRadius:!0,gap:2,inline:!0,paddingBottom:C,paddingLeft:h,paddingRight:h,paddingTop:C,pointerEvents:f?"none":void 0,...D,as:A||u.f,children:[c&&(0,e.jsx)(i.k,{"aria-hidden":!0,children:c}),(0,e.jsx)(n.Z,{variant:w==="S"?"pi":void 0,fontWeight:"bold",textColor:"buttonNeutral0",children:L}),y&&(0,e.jsx)(i.k,{"aria-hidden":!0,children:y})]})});l.displayName="LinkButton"}}]);
