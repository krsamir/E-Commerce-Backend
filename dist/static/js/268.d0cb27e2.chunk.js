"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[268],{8268:function(e,t,r){r.r(t),r.d(t,{default:function(){return ne}});var n=r(5861),a=r(885),o=r(1413),i=r(7757),s=r.n(i),c=r(2791),u=r(1489),l=r(168),d=r(3366),h=r(7462),m=r(8182),f=r(767),x=r(2554),p=r(4036),v=r(3736),g=r(7630),Z=r(5159);function k(e){return(0,Z.Z)("MuiCircularProgress",e)}(0,r(208).Z)("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);var b,w,S,y,T,j,W,P,C=r(184),M=["className","color","disableShrink","size","style","thickness","value","variant"],R=44,D=(0,x.F4)(T||(T=b||(b=(0,l.Z)(["\n  0% {\n    transform: rotate(0deg);\n  }\n\n  100% {\n    transform: rotate(360deg);\n  }\n"])))),G=(0,x.F4)(j||(j=w||(w=(0,l.Z)(["\n  0% {\n    stroke-dasharray: 1px, 200px;\n    stroke-dashoffset: 0;\n  }\n\n  50% {\n    stroke-dasharray: 100px, 200px;\n    stroke-dashoffset: -15px;\n  }\n\n  100% {\n    stroke-dasharray: 100px, 200px;\n    stroke-dashoffset: -125px;\n  }\n"])))),N=(0,g.ZP)("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:function(e,t){var r=e.ownerState;return[t.root,t[r.variant],t["color".concat((0,p.Z)(r.color))]]}})((function(e){var t=e.ownerState,r=e.theme;return(0,h.Z)({display:"inline-block"},"determinate"===t.variant&&{transition:r.transitions.create("transform")},"inherit"!==t.color&&{color:r.palette[t.color].main})}),(function(e){return"indeterminate"===e.ownerState.variant&&(0,x.iv)(W||(W=S||(S=(0,l.Z)(["\n      animation: "," 1.4s linear infinite;\n    "]))),D)})),I=(0,g.ZP)("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:function(e,t){return t.svg}})({display:"block"}),F=(0,g.ZP)("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:function(e,t){var r=e.ownerState;return[t.circle,t["circle".concat((0,p.Z)(r.variant))],r.disableShrink&&t.circleDisableShrink]}})((function(e){var t=e.ownerState,r=e.theme;return(0,h.Z)({stroke:"currentColor"},"determinate"===t.variant&&{transition:r.transitions.create("stroke-dashoffset")},"indeterminate"===t.variant&&{strokeDasharray:"80px, 200px",strokeDashoffset:0})}),(function(e){var t=e.ownerState;return"indeterminate"===t.variant&&!t.disableShrink&&(0,x.iv)(P||(P=y||(y=(0,l.Z)(["\n      animation: "," 1.4s ease-in-out infinite;\n    "]))),G)})),z=c.forwardRef((function(e,t){var r=(0,v.Z)({props:e,name:"MuiCircularProgress"}),n=r.className,a=r.color,o=void 0===a?"primary":a,i=r.disableShrink,s=void 0!==i&&i,c=r.size,u=void 0===c?40:c,l=r.style,x=r.thickness,g=void 0===x?3.6:x,Z=r.value,b=void 0===Z?0:Z,w=r.variant,S=void 0===w?"indeterminate":w,y=(0,d.Z)(r,M),T=(0,h.Z)({},r,{color:o,disableShrink:s,size:u,thickness:g,value:b,variant:S}),j=function(e){var t=e.classes,r=e.variant,n=e.color,a=e.disableShrink,o={root:["root",r,"color".concat((0,p.Z)(n))],svg:["svg"],circle:["circle","circle".concat((0,p.Z)(r)),a&&"circleDisableShrink"]};return(0,f.Z)(o,k,t)}(T),W={},P={},D={};if("determinate"===S){var G=2*Math.PI*((R-g)/2);W.strokeDasharray=G.toFixed(3),D["aria-valuenow"]=Math.round(b),W.strokeDashoffset="".concat(((100-b)/100*G).toFixed(3),"px"),P.transform="rotate(-90deg)"}return(0,C.jsx)(N,(0,h.Z)({className:(0,m.Z)(j.root,n),style:(0,h.Z)({width:u,height:u},P,l),ownerState:T,ref:t,role:"progressbar"},D,y,{children:(0,C.jsx)(I,{className:j.svg,ownerState:T,viewBox:"".concat(22," ").concat(22," ").concat(R," ").concat(R),children:(0,C.jsx)(F,{className:j.circle,style:W,ownerState:T,cx:R,cy:R,r:(R-g)/2,fill:"none",strokeWidth:g})})}))})),L=r(9271),V=r(4569),O=r.n(V),q=r(1924),H=r(364),X=r(890),Y=r(3060),B=r(6445),E=r(4708),J=r(4554),Q=r(3044),U=r(7391),$=r(6151),A=r(1889),K=r(403),_=r(1979),ee=r(7012);function te(e){return(0,C.jsxs)(X.Z,(0,o.Z)((0,o.Z)({variant:"body2",color:"text.secondary",align:"center"},e),{},{children:["Copyright \xa9 ",(0,C.jsx)(Y.Z,{color:"inherit",href:"https://mui.com/",children:"Your Website"})," ",(new Date).getFullYear(),"."]}))}var re=(0,_.Z)();var ne=(0,H.$j)(null,{successToast:q.Q,errorToast:q.J})((function(e){var t=(0,c.useState)(!0),r=(0,a.Z)(t,2),o=r[0],i=r[1],l=(0,c.useState)(""),d=(0,a.Z)(l,2),h=d[0],m=d[1],f=function(){var e=(0,L.TH)().search;return c.useMemo((function(){return new URLSearchParams(e)}),[e])}(),x=f.get("token"),p=f.get("email"),v=f.get("flag"),g=function(){var t=(0,n.Z)(s().mark((function t(r){var n,a;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r.preventDefault(),n=new FormData(r.currentTarget),a=n.get("password"),t.next=5,O().post("/auth/reset/final",{email:p,token:x,password:a}).then((function(t){var r=t.data;1===r.status&&(e.successToast(r.message),setTimeout((function(){e.history.push("/login")}),2e3)),0===r.status&&e.errorToast(r.data.message,3e3)})).catch((function(t){console.log(t),e.errorToast("Some issue while verification.")}));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return(0,c.useEffect)((function(){null===x&&null===p||"true"!==v&&"false"!==v?(e.errorToast("Invalid Request.",{duration:3e3}),setTimeout((function(){e.history.push("/login")}),3e3)):setTimeout((0,n.Z)(s().mark((function t(){return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("true"!==v){t.next=5;break}return t.next=3,O().post("/auth/verify",{username:p,token:x}).then((function(t){0===t.data.status&&(e.errorToast(t.data.message),setTimeout((function(){e.history.push("/login")}),3e3)),1===t.data.status&&(e.successToast("Token Verification Successfull."),window.localStorage.setItem("sid",t.data.token),window.localStorage.setItem("rid",t.data.rid),setTimeout((function(){e.history.push("/profile")}),1e3))})).catch((function(t){console.log(t),429===t.response.status?e.errorToast(t.response.data):e.errorToast("Some issue while OTP Verification!!"),setTimeout((function(){e.history.push("/login")}),3e3)}));case 3:t.next=6;break;case 5:setTimeout((0,n.Z)(s().mark((function t(){return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O().post("/auth/reset/verify",{username:p,token:x}).then((function(t){0===t.data.status&&(e.errorToast(t.data.message),setTimeout((function(){e.history.push("/login")}),3e3)),1===t.data.status&&(i(!1),e.successToast("Token Verification Successfull."))})).catch((function(t){console.log(t),429===t.response.status?e.errorToast(t.response.data,{duration:6e3}):e.errorToast("Some issue while OTP Verification!!"),setTimeout((function(){e.history.push("/login")}),2e3)}));case 2:case"end":return t.stop()}}),t)}))),200);case 6:case"end":return t.stop()}}),t)}))),200)}),[]),(0,C.jsxs)("div",{children:[(0,C.jsx)(u.Z,{sx:{color:"#fff",zIndex:function(e){return e.zIndex.drawer+1}},open:o,children:(0,C.jsx)(z,{color:"primary"})}),!o&&(0,C.jsx)(ee.Z,{theme:re,children:(0,C.jsxs)(B.Z,{component:"main",maxWidth:"xs",children:[(0,C.jsx)(E.ZP,{}),(0,C.jsxs)(J.Z,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,C.jsx)(Q.Z,{sx:{m:1,bgcolor:"secondary.main"},children:(0,C.jsx)(K.Z,{})}),(0,C.jsx)(X.Z,{component:"h1",variant:"h5",children:"Change Password"}),(0,C.jsxs)(J.Z,{component:"form",onSubmit:g,noValidate:!0,sx:{mt:1},children:[(0,C.jsx)(U.Z,{margin:"normal",required:!0,fullWidth:!0,id:"New password",label:"New Password",name:"password",autoFocus:!0,onChange:function(e){return m(e.target.value)},helperText:"Password should be minimum 8 characters."}),(0,C.jsx)($.Z,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},disabled:h.length<8,children:"Change Password"}),(0,C.jsx)(A.ZP,{container:!0,children:(0,C.jsx)(A.ZP,{item:!0,xs:!0,children:(0,C.jsx)(Y.Z,{href:"/",variant:"body2",children:"Go to Home"})})})]})]}),(0,C.jsx)(te,{sx:{mt:8,mb:4}})]})})]})}))},6445:function(e,t,r){r.d(t,{Z:function(){return v}});var n=r(4942),a=r(3366),o=r(7462),i=r(2791),s=r(8182),c=r(767),u=r(3736),l=r(7630),d=r(5159);function h(e){return(0,d.Z)("MuiContainer",e)}(0,r(208).Z)("MuiContainer",["root","disableGutters","fixed","maxWidthXs","maxWidthSm","maxWidthMd","maxWidthLg","maxWidthXl"]);var m=r(4036),f=r(184),x=["className","component","disableGutters","fixed","maxWidth"],p=(0,l.ZP)("div",{name:"MuiContainer",slot:"Root",overridesResolver:function(e,t){var r=e.ownerState;return[t.root,t["maxWidth".concat((0,m.Z)(String(r.maxWidth)))],r.fixed&&t.fixed,r.disableGutters&&t.disableGutters]}})((function(e){var t=e.theme,r=e.ownerState;return(0,o.Z)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!r.disableGutters&&(0,n.Z)({paddingLeft:t.spacing(2),paddingRight:t.spacing(2)},t.breakpoints.up("sm"),{paddingLeft:t.spacing(3),paddingRight:t.spacing(3)}))}),(function(e){var t=e.theme;return e.ownerState.fixed&&Object.keys(t.breakpoints.values).reduce((function(e,r){var n=t.breakpoints.values[r];return 0!==n&&(e[t.breakpoints.up(r)]={maxWidth:"".concat(n).concat(t.breakpoints.unit)}),e}),{})}),(function(e){var t=e.theme,r=e.ownerState;return(0,o.Z)({},"xs"===r.maxWidth&&(0,n.Z)({},t.breakpoints.up("xs"),{maxWidth:Math.max(t.breakpoints.values.xs,444)}),r.maxWidth&&"xs"!==r.maxWidth&&(0,n.Z)({},t.breakpoints.up(r.maxWidth),{maxWidth:"".concat(t.breakpoints.values[r.maxWidth]).concat(t.breakpoints.unit)}))})),v=i.forwardRef((function(e,t){var r=(0,u.Z)({props:e,name:"MuiContainer"}),n=r.className,i=r.component,l=void 0===i?"div":i,d=r.disableGutters,v=void 0!==d&&d,g=r.fixed,Z=void 0!==g&&g,k=r.maxWidth,b=void 0===k?"lg":k,w=(0,a.Z)(r,x),S=(0,o.Z)({},r,{component:l,disableGutters:v,fixed:Z,maxWidth:b}),y=function(e){var t=e.classes,r=e.fixed,n=e.disableGutters,a=e.maxWidth,o={root:["root",a&&"maxWidth".concat((0,m.Z)(String(a))),r&&"fixed",n&&"disableGutters"]};return(0,c.Z)(o,h,t)}(S);return(0,f.jsx)(p,(0,o.Z)({as:l,ownerState:S,className:(0,s.Z)(y.root,n),ref:t},w))}))}}]);
//# sourceMappingURL=268.d0cb27e2.chunk.js.map