"use strict";(self.webpackChunk_13_candles_cms=self.webpackChunk_13_candles_cms||[]).push([[3981],{92686:(O,T,n)=>{n.d(T,{G:()=>B});var e=n(67294),r=n(20297),L=n(88767);function B(){const{get:b}=(0,r.kY)(),{formatAPIError:k}=(0,r.So)(),l=(0,r.lm)(),P=(0,L.useQueries)(["components","content-types"].map(p=>({queryKey:["content-manager",p],async queryFn(){const{data:{data:v}}=await b(`/content-manager/${p}`);return v},onError(v){l({type:"warning",message:k(v)})}}))),[M,E]=P,c=M.isLoading||E.isLoading,d=e.useMemo(()=>(E?.data??[]).filter(p=>p.kind==="collectionType"&&p.isDisplayed),[E?.data]),u=e.useMemo(()=>(E?.data??[]).filter(p=>p.kind!=="collectionType"&&p.isDisplayed),[E?.data]);return{isLoading:c,components:e.useMemo(()=>M?.data??[],[M?.data]),collectionTypes:d,singleTypes:u}}},96753:(O,T,n)=>{n.r(T),n.d(T,{HomePageCE:()=>W,default:()=>Pe});var e=n(67294),r=n(97554),L=n(67242),B=n(85841),b=n(54033),k=n(89899),l=n(20297),P=n(64593),M=n(44012),E=n(16550),c=n(88972),d=n(61697),u=n(50922),p=n(39219),v=n(20995),C=n(86896),Q=n(99571),F=n(45697),s=n.n(F),g=n(16334),$=n(43234),A=n(2364);const x=({type:t,title:a,number:o,content:i,hasLine:m})=>{const{formatMessage:y}=(0,C.Z)();return e.createElement(r.x,null,e.createElement(d.k,null,e.createElement(r.x,{minWidth:(0,l.Q1)(30),marginRight:5},e.createElement(A.Z,{type:t,number:o})),e.createElement(u.Z,{variant:"delta",as:"h3"},y(a))),e.createElement(d.k,{alignItems:"flex-start"},e.createElement(d.k,{justifyContent:"center",minWidth:(0,l.Q1)(30),marginBottom:3,marginTop:3,marginRight:5},m&&e.createElement($.Z,{type:t,minHeight:t===g.lW?(0,l.Q1)(85):(0,l.Q1)(65)})),e.createElement(r.x,{marginTop:2},t===g.lW&&i)))};x.defaultProps={content:void 0,number:void 0,type:g.VM,hasLine:!0},x.propTypes={content:s().node,number:s().number,title:s().shape({id:s().string,defaultMessage:s().string}).isRequired,type:s().oneOf([g.lW,g.hx,g.VM]),hasLine:s().bool};const Y=x,z=(t,a)=>t===-1||a<t?g.hx:a>t?g.VM:g.lW,Z=({sections:t,currentSectionKey:a})=>{const o=t.findIndex(i=>i.key===a);return e.createElement(r.x,null,t.map((i,m)=>e.createElement(Y,{key:i.key,title:i.title,content:i.content,number:m+1,type:z(o,m),hasLine:m!==t.length-1})))};Z.defaultProps={currentSectionKey:void 0},Z.propTypes={sections:s().arrayOf(s().shape({key:s().string.isRequired,title:s().shape({id:s().string,defaultMessage:s().string}).isRequired,content:s().node})).isRequired,currentSectionKey:s().string};const K=Z,V=()=>{const{guidedTourState:t,setSkipped:a}=(0,l.c1)(),{formatMessage:o}=(0,C.Z)(),{trackUsage:i}=(0,l.rS)(),m=Object.entries(Q.Z).map(([f,h])=>({key:f,title:h.home.title,content:e.createElement(l.Qj,{onClick:()=>i(h.home.trackingEvent),to:h.home.cta.target,endIcon:e.createElement(v.Z,null)},o(h.home.cta.title))})),I=m.map(f=>({isDone:Object.entries(t[f.key]).every(([,h])=>h),...f})).find(f=>!f.isDone)?.key,j=()=>{a(!0),i("didSkipGuidedtour")};return e.createElement(r.x,{hasRadius:!0,shadow:"tableShadow",paddingTop:7,paddingRight:4,paddingLeft:7,paddingBottom:4,background:"neutral0"},e.createElement(d.k,{direction:"column",alignItems:"stretch",gap:6},e.createElement(u.Z,{variant:"beta",as:"h2"},o({id:"app.components.GuidedTour.title",defaultMessage:"3 steps to get started"})),e.createElement(K,{sections:m,currentSectionKey:I})),e.createElement(d.k,{justifyContent:"flex-end"},e.createElement(p.z,{variant:"tertiary",onClick:j},o({id:"app.components.GuidedTour.skip",defaultMessage:"Skip the tour"}))))},U=t=>Object.entries(t).every(([,a])=>Object.entries(a).every(([,o])=>o));var N=n(92686),J=n(48232);const w=n.p+"7e9af4fb7e723fcebf1f.svg";var X=n(85013),q=n(36946),_=n(19179),ee=n(86759);const te=n.p+"27d16aefee06412db90a.png",ne=n.p+"bb4d0d527bdfb161bc5a.svg",oe=n.p+"bb3108f7fd1e6179bde1.svg",ae=c.default.a`
  text-decoration: none;
`,le=(0,c.default)(r.x)`
  background-image: url(${({backgroundImage:t})=>t});
`,se=(0,c.default)(d.k)`
  background: rgba(255, 255, 255, 0.3);
`,re=()=>{const{formatMessage:t}=(0,C.Z)(),{trackUsage:a}=(0,l.rS)();return e.createElement(ae,{href:"https://cloud.strapi.io",target:"_blank",rel:"noopener noreferrer nofollow",onClick:()=>{a("didClickOnTryStrapiCloudSection")}},e.createElement(d.k,{shadow:"tableShadow",hasRadius:!0,padding:6,background:"neutral0",position:"relative",gap:6},e.createElement(le,{backgroundImage:te,hasRadius:!0,padding:3},e.createElement(se,{width:(0,l.Q1)(32),height:(0,l.Q1)(32),justifyContent:"center",hasRadius:!0,alignItems:"center"},e.createElement("img",{src:oe,alt:t({id:"app.components.BlockLink.cloud",defaultMessage:"Strapi Cloud"})}))),e.createElement(d.k,{gap:1,direction:"column",alignItems:"start"},e.createElement(d.k,null,e.createElement(u.Z,{fontWeight:"semiBold",variant:"pi"},t({id:"app.components.BlockLink.cloud",defaultMessage:"Strapi Cloud"}))),e.createElement(u.Z,{textColor:"neutral600"},t({id:"app.components.BlockLink.cloud.content",defaultMessage:"A fully composable, and collaborative platform to boost your team velocity."})),e.createElement(r.x,{src:ne,position:"absolute",top:0,right:0,as:"img"}))))},H=c.default.a`
  text-decoration: none;
`,ie=()=>{const{formatMessage:t}=(0,C.Z)(),{trackUsage:a}=(0,l.rS)(),o=i=>{a(i)};return e.createElement(d.k,{direction:"column",alignItems:"stretch",gap:5},e.createElement(re,null),e.createElement(H,{href:"https://strapi.io/resource-center",target:"_blank",rel:"noopener noreferrer nofollow",onClick:()=>o("didClickonReadTheDocumentationSection")},e.createElement(l.Y_,{title:t({id:"global.documentation",defaultMessage:"Documentation"}),subtitle:t({id:"app.components.BlockLink.documentation.content",defaultMessage:"Discover the essential concepts, guides and instructions."}),icon:e.createElement(X.Z,null),iconBackground:"primary100"})),e.createElement(H,{href:"https://strapi.io/starters",target:"_blank",rel:"noopener noreferrer nofollow",onClick:()=>o("didClickonCodeExampleSection")},e.createElement(l.Y_,{title:t({id:"app.components.BlockLink.code",defaultMessage:"Code example"}),subtitle:t({id:"app.components.BlockLink.code.content",defaultMessage:"Learn by using ready-made starters for your projects."}),icon:e.createElement(q.Z,null),iconBackground:"warning100"})),e.createElement(H,{href:"https://strapi.io/blog/categories/tutorials",target:"_blank",rel:"noopener noreferrer nofollow",onClick:()=>o("didClickonTutorialSection")},e.createElement(l.Y_,{title:t({id:"app.components.BlockLink.tutorial",defaultMessage:"Tutorials"}),subtitle:t({id:"app.components.BlockLink.tutorial.content",defaultMessage:"Follow step-by-step instructions to use and customize Strapi."}),icon:e.createElement(_.Z,null),iconBackground:"secondary100"})),e.createElement(H,{href:"https://strapi.io/blog",target:"_blank",rel:"noopener noreferrer nofollow",onClick:()=>o("didClickonBlogSection")},e.createElement(l.Y_,{title:t({id:"app.components.BlockLink.blog",defaultMessage:"Blog"}),subtitle:t({id:"app.components.BlockLink.blog.content",defaultMessage:"Read the latest news about Strapi and the ecosystem."}),icon:e.createElement(ee.Z,null),iconBackground:"alternative100"})))};var D=n(29430);const ce=(0,c.default)(u.Z)`
  word-break: break-word;
`,G=({hasCreatedContentType:t,onCreateCT:a})=>{const{formatMessage:o}=(0,C.Z)();return e.createElement("div",null,e.createElement(r.x,{paddingLeft:6,paddingBottom:10},e.createElement(d.k,{direction:"column",alignItems:"flex-start",gap:5},e.createElement(u.Z,{as:"h1",variant:"alpha"},o(t?{id:"app.components.HomePage.welcome.again",defaultMessage:"Welcome \u{1F44B}"}:{id:"app.components.HomePage.welcome",defaultMessage:"Welcome on board!"})),e.createElement(ce,{textColor:"neutral600",variant:"epsilon"},o(t?{id:"app.components.HomePage.welcomeBlock.content.again",defaultMessage:"We hope you are making progress on your project! Feel free to read the latest news about Strapi. We are giving our best to improve the product based on your feedback."}:{id:"app.components.HomePage.welcomeBlock.content",defaultMessage:"Congrats! You are logged as the first administrator. To discover the powerful features provided by Strapi, we recommend you to create your first Content type!"})),t?e.createElement(D.r,{isExternal:!0,href:"https://strapi.io/blog"},o({id:"app.components.HomePage.button.blog",defaultMessage:"See more on the blog"})):e.createElement(p.z,{size:"L",onClick:a,endIcon:e.createElement(v.Z,null)},o({id:"app.components.HomePage.create",defaultMessage:"Create your first Content type"})))))};G.defaultProps={hasCreatedContentType:void 0,onCreateCT:void 0},G.propTypes={hasCreatedContentType:s().bool,onCreateCT:s().func};const de=G;var me=n(94101),pe=n(74275),ue=n(49957),ge=n(39639),fe=n(88388),he=n(9195),Ee=n(81771),ye=n(59019);const ke=(0,c.default)(pe.Z)`
  path {
    fill: #7289da !important;
  }
`,ve=(0,c.default)(ue.Z)`
  > path:first-child {
    fill: #ff4500;
  }
`,R=(0,c.default)(ge.Z)`
  > path:first-child {
    fill: #4945ff;
  }
  > path:nth-child(2) {
    fill: #fff;
  }
  > path:nth-child(4) {
    fill: #9593ff;
  }
`,Ce=(0,c.default)(fe.Z)`
  path {
    fill: #1da1f2 !important;
  }
`,Se=(0,c.default)(he.Z)`
  > path:first-child {
    fill: #231f20;
  }
  > path:nth-child(2) {
    fill: #fff9ae;
  }
  > path:nth-child(3) {
    fill: #00aeef;
  }
  > path:nth-child(4) {
    fill: #00a94f;
  }
  > path:nth-child(5) {
    fill: #f15d22;
  }
  > path:nth-child(6) {
    fill: #e31b23;
  }
`,be=[{name:{id:"app.components.HomePage.community.links.github",defaultMessage:"Github"},link:"https://github.com/strapi/strapi/",icon:e.createElement(Ee.Z,{fill:"#7289DA"}),alt:"github"},{name:{id:"app.components.HomePage.community.links.discord",defaultMessage:"Discord"},link:"https://discord.strapi.io/",icon:e.createElement(ke,null),alt:"discord"},{name:{id:"app.components.HomePage.community.links.reddit",defaultMessage:"Reddit"},link:"https://www.reddit.com/r/Strapi/",icon:e.createElement(ve,null),alt:"reddit"},{name:{id:"app.components.HomePage.community.links.twitter",defaultMessage:"Twitter"},link:"https://twitter.com/strapijs",icon:e.createElement(Ce,null),alt:"twitter"},{name:{id:"app.components.HomePage.community.links.forum",defaultMessage:"Forum"},link:"https://forum.strapi.io",icon:e.createElement(Se,null),alt:"forum"},{name:{id:"app.components.HomePage.community.links.blog",defaultMessage:"Blog"},link:"https://strapi.io/blog?utm_source=referral&utm_medium=admin&utm_campaign=career%20page",icon:e.createElement(R,null),alt:"blog"},{name:{id:"app.components.HomePage.community.links.career",defaultMessage:"We are hiring!"},link:"https://strapi.io/careers?utm_source=referral&utm_medium=admin&utm_campaign=blog",icon:e.createElement(R,null),alt:"career"}],Me=(0,c.default)(me.Q)`
  display: flex;
  align-items: center;
  border: none;

  svg {
    width: ${({theme:t})=>t.spaces[6]};
    height: ${({theme:t})=>t.spaces[6]};
  }

  span {
    word-break: keep-all;
  }
`,Te=(0,c.default)(b.r)`
  row-gap: ${({theme:t})=>t.spaces[2]};
  column-gap: ${({theme:t})=>t.spaces[4]};
`,He=()=>{const{formatMessage:t}=(0,C.Z)(),{communityEdition:a}=(0,l.L7)(),o=[...be,{icon:e.createElement(R,null),link:a?"https://discord.strapi.io":"https://support.strapi.io/support/home",name:{id:"Settings.application.get-help",defaultMessage:"Get help"}}];return e.createElement(r.x,{as:"aside","aria-labelledby":"join-the-community",background:"neutral0",hasRadius:!0,paddingRight:5,paddingLeft:5,paddingTop:6,paddingBottom:6,shadow:"tableShadow"},e.createElement(r.x,{paddingBottom:7},e.createElement(d.k,{direction:"column",alignItems:"stretch",gap:5},e.createElement(d.k,{direction:"column",alignItems:"stretch",gap:3},e.createElement(u.Z,{variant:"delta",as:"h2",id:"join-the-community"},t({id:"app.components.HomePage.community",defaultMessage:"Join the community"})),e.createElement(u.Z,{textColor:"neutral600"},t({id:"app.components.HomePage.community.content",defaultMessage:"Discuss with team members, contributors and developers on different channels"}))),e.createElement(D.r,{href:"https://feedback.strapi.io/",isExternal:!0,endIcon:e.createElement(ye.Z,null)},t({id:"app.components.HomePage.roadmap",defaultMessage:"See our road map"})))),e.createElement(Te,null,o.map(({icon:i,link:m,name:y})=>e.createElement(k.P,{col:6,s:12,key:y.id},e.createElement(Me,{size:"L",startIcon:i,variant:"tertiary",href:m,isExternal:!0},t(y))))))},Le=(0,c.default)(r.x)`
  position: absolute;
  top: 0;
  right: 0;

  img {
    width: ${150/16}rem;
  }
`,W=()=>{const{collectionTypes:t,singleTypes:a,isLoading:o}=(0,N.G)(),{guidedTourState:i,isGuidedTourVisible:m,isSkipped:y}=(0,l.c1)(),I=!U(i)&&m&&!y,{push:j}=(0,E.k6)(),f=S=>{S.preventDefault(),j("/plugins/content-type-builder/content-types/create-content-type")},h=(0,e.useMemo)(()=>{const S=xe=>xe.filter(Ze=>Ze.isDisplayed);return S(t).length>1||S(a).length>0},[t,a]);return o?e.createElement(l.dO,null):e.createElement(L.A,null,e.createElement(M.Z,{id:"HomePage.helmet.title",defaultMessage:"Homepage"},S=>e.createElement(P.q,{title:S[0]})),e.createElement(B.o,null,e.createElement(Le,null,e.createElement("img",{alt:"","aria-hidden":!0,src:w})),e.createElement(r.x,{padding:10},e.createElement(b.r,null,e.createElement(k.P,{col:8,s:12},e.createElement(de,{onCreateCT:f,hasCreatedContentType:h}))),e.createElement(b.r,{gap:6},e.createElement(k.P,{col:8,s:12},I?e.createElement(V,null):e.createElement(ie,null)),e.createElement(k.P,{col:4,s:12},e.createElement(He,null))))))};function Be(){const t=(0,J.c)(W,async()=>(await n.e(8296).then(n.bind(n,66831))).HomePageEE);return t?e.createElement(t,null):null}const Pe=Be}}]);
