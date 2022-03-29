"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[155],{155:function(e,t,n){n.r(t),n.d(t,{default:function(){return G}});var a=n(5861),r=n(885),i=n(1413),s=n(5987),o=n(7757),l=n.n(o),c=n(2791),d=n(5705),u=n(905),m=n(1889),h=n(7391),p=n(9012),x=n(5523),f=n(9174),g=n(6151),v=n(1924),j=n(364),Z=n(4569),k=n.n(Z),C=n(8561),y=(n(4361),n(5228)),b=n(3896),T=n(890),P=n(4554),S=n(9388),I=n(2982),N=n(5931),w=n(5289),F=n(4395),R=n(4663),B=n(3400),L=n(9823),A=n(4583),V=n(9013),D=n(1009),U=n(8996),E=n(22),O=n(184),W=c.forwardRef((function(e,t){return(0,O.jsx)(N.Z,(0,i.Z)({direction:"up",ref:t},e))}));function z(e){var t=e.productId,n=e.imageData,i=(0,c.useState)(!1),s=(0,r.Z)(i,2),o=s[0],d=s[1],u=(0,c.useState)([]),h=(0,r.Z)(u,2),p=h[0],x=h[1],f=(0,c.useState)(0),v=(0,r.Z)(f,2),j=v[0],Z=v[1];(0,c.useEffect)((function(){return function(){p.map((function(e){return URL.revokeObjectURL(e)}))}}),[p]);var C=function(){d(!1)},y=function(){var n=(0,a.Z)(l().mark((function n(){var a;return l().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a=new FormData,p.map((function(e,t){return a.append("myFile[]",p[t])})),a.append("ProductId",t),n.next=5,k().post("/product/images/profile",a).then((function(t){1===t.data.status?(e.successToast(t.data.message,2e3),d(!1),setTimeout((function(){e.history.push("/admin/home/products")}),500)):0===t.data.status&&e.errorToast(t.data.message)})).catch((function(t){console.log(t),e.errorToast("Some issue while uploading Images.")}));case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),b=p.map((function(e){return URL.createObjectURL(e)}));return(0,O.jsxs)("div",{children:[(0,O.jsxs)(g.Z,{variant:"contained",component:"span",onClick:function(){d(!0)},children:[(0,O.jsx)(A.Z,{}),"  ","Upload Profile Image"]}),(0,O.jsxs)(w.Z,{fullScreen:!0,open:o,onClose:C,TransitionComponent:W,children:[(0,O.jsx)(F.Z,{sx:{position:"relative"},children:(0,O.jsxs)(R.Z,{children:[(0,O.jsx)(B.Z,{edge:"start",color:"inherit",onClick:C,"aria-label":"close",children:(0,O.jsx)(L.Z,{})}),(0,O.jsx)(T.Z,{sx:{ml:2,flex:1},variant:"h6",component:"div",children:"Add Product Profile Image"}),(0,O.jsx)(g.Z,{autoFocus:!0,color:"inherit",onClick:C,children:"Close"})]})}),(0,O.jsxs)("div",{children:[(0,O.jsxs)("label",{htmlFor:"contained-button-file",className:"imageUploadBox pointer",children:[(0,O.jsx)("div",{className:"innerBox",children:(0,O.jsx)(V.Z,{className:"uploadIcon"})}),(0,O.jsx)("input",{name:"myFile[]",accept:"image/*",id:"contained-button-file",multiple:!1,type:"file",encType:"multipart/form-data",onChange:function(e){var t=(0,I.Z)(p);x(t.concat(Array.from(e.target.files)))},hidden:!0})]}),n.length>0&&(0,O.jsx)("h3",{children:"\xa0\xa0\xa0\xa0Saved Images"}),(0,O.jsx)("div",{className:"storedImage",children:n.map((function(e){var t=e.file,n=e.data;e.id;return(0,O.jsx)("img",{src:"data:image/*;base64,".concat(n),alt:t,loading:"lazy",className:"demoImages"},t)}))}),(0,O.jsxs)(m.ZP,{container:!0,spacing:2,children:[(0,O.jsx)(m.ZP,{item:!0,xs:12,sm:12,md:2,children:(0,O.jsx)("div",{className:"leftCounter",children:j>0&&(0,O.jsx)(B.Z,{size:"large","aria-label":"Left",color:"primary",onClick:function(){return Z((function(e){return e-1}))},children:(0,O.jsx)(D.Z,{className:"left"})})})}),(0,O.jsxs)(m.ZP,{item:!0,xs:12,sm:12,md:8,children:[b.length>0&&(0,O.jsx)("h3",{children:"Uploaded Images"}),(0,O.jsx)("div",{className:"imageBox",children:b.length>0&&(0,O.jsxs)("div",{className:"imagesmallbox",children:[(0,O.jsx)("img",{src:b[j],className:"displayImage",alt:""}),b.length>0&&(0,O.jsxs)("div",{className:"counter hor",children:[(0,O.jsxs)("div",{className:"hor",style:{flex:1},children:[j+1,"  ",(0,O.jsx)("div",{children:" Of "}),"  ",(0,O.jsx)("span",{children:b.length})]}),(0,O.jsx)(B.Z,{size:"large","aria-label":"Left",color:"primary",onClick:function(){return function(e){var t=(0,I.Z)(p);e===t.length-1&&Z((function(e){return e-1})),t.splice(e,1),x(t)}(j)},children:(0,O.jsx)(E.Z,{})})]})]})})]}),(0,O.jsx)(m.ZP,{item:!0,xs:12,sm:12,md:2,children:(0,O.jsx)("div",{className:"rightCounter",children:j<b.length-1&&(0,O.jsx)(B.Z,{size:"large","aria-label":"Left",color:"primary",onClick:function(){return Z((function(e){return e+1}))},children:(0,O.jsx)(U.Z,{className:"right"})})})})]}),(0,O.jsx)(m.ZP,{item:!0,xs:12,sm:12,children:(0,O.jsxs)("div",{style:{marginTop:"20px",display:"flex",justifyContent:"flex-end"},children:[(0,O.jsx)(g.Z,{variant:"contained",style:{marginRight:"20px",marginBottom:"20px"},onClick:function(){return e.history.push({pathname:"/admin/home/products",state:null})},children:"Redirect to Product Home"}),b.length>0&&(0,O.jsx)(g.Z,{variant:"contained",style:{marginLeft:"20px"},onClick:y,children:"Save Images"})]})})]})]})]})}var _=c.forwardRef((function(e,t){return(0,O.jsx)(N.Z,(0,i.Z)({direction:"up",ref:t},e))}));function q(e){var t=e.productId,n=e.imageData,i=(0,c.useState)(!1),s=(0,r.Z)(i,2),o=s[0],d=s[1],u=(0,c.useState)([]),h=(0,r.Z)(u,2),p=h[0],x=h[1],f=(0,c.useState)(0),v=(0,r.Z)(f,2),j=v[0],Z=v[1];(0,c.useEffect)((function(){return function(){p.map((function(e){return URL.revokeObjectURL(e)}))}}),[p]);var C=function(){d(!1)},y=function(){var n=(0,a.Z)(l().mark((function n(){var a;return l().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a=new FormData,p.map((function(e,t){return a.append("myFile[]",p[t])})),a.append("ProductId",t),n.next=5,k().post("/product/images/all",a).then((function(t){1===t.data.status?(e.successToast(t.data.message,2e3),d(!1),setTimeout((function(){e.history.push("/admin/home/products")}),500)):0===t.data.status&&e.errorToast(t.data.message)})).catch((function(t){console.log(t),e.errorToast("Some issue while uploading Images.")}));case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),b=p.map((function(e){return URL.createObjectURL(e)}));return(0,O.jsxs)("div",{children:[(0,O.jsxs)(g.Z,{variant:"contained",component:"span",onClick:function(){d(!0)},children:[(0,O.jsx)(A.Z,{}),"  ","Upload Product Images"]}),(0,O.jsxs)(w.Z,{fullScreen:!0,open:o,onClose:C,TransitionComponent:_,children:[(0,O.jsx)(F.Z,{sx:{position:"relative"},children:(0,O.jsxs)(R.Z,{children:[(0,O.jsx)(B.Z,{edge:"start",color:"inherit",onClick:C,"aria-label":"close",children:(0,O.jsx)(L.Z,{})}),(0,O.jsx)(T.Z,{sx:{ml:2,flex:1},variant:"h6",component:"div",children:"Add Product Images"}),(0,O.jsx)(g.Z,{autoFocus:!0,color:"inherit",onClick:C,children:"Close"})]})}),(0,O.jsxs)("div",{children:[(0,O.jsxs)("label",{htmlFor:"contained-button-file",className:"imageUploadBox pointer",children:[(0,O.jsx)("div",{className:"innerBox",children:(0,O.jsx)(V.Z,{className:"uploadIcon"})}),(0,O.jsx)("input",{name:"myFile[]",accept:"image/*",id:"contained-button-file",multiple:!0,type:"file",encType:"multipart/form-data",onChange:function(e){var t=(0,I.Z)(p);x(t.concat(Array.from(e.target.files)))},hidden:!0})]}),n.length>0&&(0,O.jsx)("h3",{children:"\xa0\xa0\xa0\xa0Saved Images"}),(0,O.jsx)("div",{className:"storedImage",children:n.map((function(e){var t=e.file,n=e.data;e.id;return(0,O.jsx)("img",{src:"data:image/*;base64,".concat(n),alt:t,loading:"lazy",className:"demoImages"},t)}))}),(0,O.jsxs)(m.ZP,{container:!0,spacing:2,children:[(0,O.jsx)(m.ZP,{item:!0,xs:12,sm:12,md:2,children:(0,O.jsx)("div",{className:"leftCounter",children:j>0&&(0,O.jsx)(B.Z,{size:"large","aria-label":"Left",color:"primary",onClick:function(){return Z((function(e){return e-1}))},children:(0,O.jsx)(D.Z,{className:"left"})})})}),(0,O.jsxs)(m.ZP,{item:!0,xs:12,sm:12,md:8,children:[b.length>0&&(0,O.jsx)("h3",{children:"Uploaded Images"}),(0,O.jsx)("div",{className:"imageBox",children:b.length>0&&(0,O.jsxs)("div",{className:"imagesmallbox",children:[(0,O.jsx)("img",{src:b[j],className:"displayImage",alt:""}),b.length>0&&(0,O.jsxs)("div",{className:"counter hor",children:[(0,O.jsxs)("div",{className:"hor",style:{flex:1},children:[j+1,"  ",(0,O.jsx)("div",{children:" Of "}),"  ",(0,O.jsx)("span",{children:b.length})]}),(0,O.jsx)(B.Z,{size:"large","aria-label":"Left",color:"primary",onClick:function(){return function(e){var t=(0,I.Z)(p);e===t.length-1&&Z((function(e){return e-1})),t.splice(e,1),x(t)}(j)},children:(0,O.jsx)(E.Z,{})})]})]})})]}),(0,O.jsx)(m.ZP,{item:!0,xs:12,sm:12,md:2,children:(0,O.jsx)("div",{className:"rightCounter",children:j<b.length-1&&(0,O.jsx)(B.Z,{size:"large","aria-label":"Left",color:"primary",onClick:function(){return Z((function(e){return e+1}))},children:(0,O.jsx)(U.Z,{className:"right"})})})})]}),(0,O.jsx)(m.ZP,{item:!0,xs:12,sm:12,children:(0,O.jsxs)("div",{style:{marginTop:"20px",display:"flex",justifyContent:"flex-end"},children:[(0,O.jsx)(g.Z,{style:{marginRight:"20px",marginBottom:"20px"},variant:"contained",onClick:function(){return e.history.push({pathname:"/admin/home/products",state:null})},children:"Redirect to Product Home"}),b.length>0&&(0,O.jsx)(g.Z,{variant:"contained",style:{marginLeft:"20px"},onClick:y,children:"Save Images"})]})})]})]})]})}var M=["children","value","index"],H=new Date,K=new Date(H.setDate(H.getDate()-1)).toISOString(),J=u.Ry({name:u.Z_("Enter Name").required("Name is required"),description:u.Z_("Enter Description"),totalstocks:u.Rx("Enter Total Stocks in (numbers)").required("No of total stocks is madatory field"),offerprice:u.Rx("Enter Offer Price in (numbers)"),actualprice:u.Rx("Enter Actual Price in (numbers)").required("Actual Price is a madatory field."),keepinstocktill:u.hT().min(K,"Past dates cannot be selected."),isActive:u.O7("Mention Active State"),color:u.Z_("Enter Color"),itemsold:u.Rx("Enter Item Sold in (numbers)"),material:u.Z_("Enter Material"),productCode:u.Z_(),id:u.Rx()});function Q(e){var t=e.children,n=e.value,a=e.index,r=(0,s.Z)(e,M);return(0,O.jsx)("div",(0,i.Z)((0,i.Z)({role:"tabpanel",hidden:n!==a,id:"simple-tabpanel-".concat(a),"aria-labelledby":"simple-tab-".concat(a)},r),{},{children:n===a&&(0,O.jsx)(P.Z,{sx:{p:3},children:(0,O.jsx)(T.Z,{component:"div",children:t})})}))}function $(e){return{id:"simple-tab-".concat(e),"aria-controls":"simple-tabpanel-".concat(e)}}var G=(0,j.$j)(null,{successToast:v.Q,errorToast:v.J})((function(e){var t=(0,c.useState)([]),n=(0,r.Z)(t,2),s=n[0],o=n[1],u=(0,c.useState)(null),v=(0,r.Z)(u,2),j=v[0],Z=v[1],T=(0,c.useState)([]),I=(0,r.Z)(T,2),N=I[0],w=I[1],F=(0,c.useState)({all:[],profile:[]}),R=(0,r.Z)(F,2),B=R[0],L=R[1];(0,c.useEffect)((function(){return k().get("/product/category").then((function(t){w(t.data.data.map((function(e){var t=e.id,n=e.name;return{value:n,label:n,id:t}}))),0===t.data.status&&e.errorToast(t.data.message)})).catch((function(t){console.log(t),e.errorToast("Issues while Fetching category.")})),function(){}}),[]),(0,c.useEffect)((function(){if(e.location.state){var t=e.location.state,n=t.Categories,a=t.actualprice,r=t.color,i=t.description,s=t.id,l=t.isActive,c=t.itemsold,d=t.keepinstocktill,u=t.material,m=t.name,h=t.offerprice,p=t.productCode,x=t.totalstocks;A.setFieldValue("name",m,!0),A.setFieldValue("actualprice",a,!0),A.setFieldValue("color",r,!0),A.setFieldValue("description",i,!0),A.setFieldValue("id",s,!0),A.setFieldValue("isActive",l,!0),A.setFieldValue("itemsold",c,!0),A.setFieldValue("keepinstocktill",null!==d&&void 0!==d?d:"",!0),A.setFieldValue("material",u,!0),A.setFieldValue("offerprice",h,!0),A.setFieldValue("productCode",p,!0),A.setFieldValue("totalstocks",x,!0),A.setFieldValue("name",m,!0),o(n.map((function(e){var t=e.id,n=e.name;return{value:n,label:n,id:t}}))),Z(s),D(s)}}),[]);var A=(0,d.TA)({initialValues:{name:"",totalstocks:"",offerprice:"",actualprice:"",isActive:!0,keepinstocktill:"",material:"",color:"",description:"",itemsold:"",productCode:"",id:""},validationSchema:J,onSubmit:function(){var e=(0,a.Z)(l().mark((function e(t){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:""===t.id?V((0,i.Z)((0,i.Z)({},t),{},{keepinstocktill:""===t.keepinstocktill?null:t.keepinstocktill})):U((0,i.Z)((0,i.Z)({},t),{},{keepinstocktill:""===t.keepinstocktill?null:t.keepinstocktill}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}),V=function(){var t=(0,a.Z)(l().mark((function t(n){return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k().post("/product/create",n).then((function(t){0===t.data.status&&e.errorToast(t.data.message),1===t.data.status&&(e.successToast(t.data.message),Z(t.data.data.id),D(t.data.data.id),K(1))})).catch((function(t){e.errorToast("Some issue while creating the product."),console.log(t)}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),D=function(){var e=(0,a.Z)(l().mark((function e(t){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k().get("/product/images/".concat(t)).then((function(e){L(e.data)})).catch((function(e){return console.log(e)}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),U=function(){var t=(0,a.Z)(l().mark((function t(n){return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k().put("/product/update",n).then((function(t){0===t.data.status&&e.errorToast(t.data.message),1===t.data.status&&(e.successToast(t.data.message),K(1))})).catch((function(t){e.errorToast("Some issue while updating the product."),console.log(t)}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),E=function(){var t=(0,a.Z)(l().mark((function t(n){return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k().post("/product/createProCat",n).then((function(t){1===t.data.status?e.successToast(t.data.message):e.errorToast(t.data.message)})).catch((function(t){e.errorToast("Some issue while adding category to this product."),console.log(t)}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),W=function(){var t=(0,a.Z)(l().mark((function t(n){return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k().post("/product/deleteProCat",n).then((function(t){1===t.data.status?e.successToast(t.data.message):e.errorToast(t.data.message)})).catch((function(t){e.errorToast("Some issue while adding category to this product."),console.log(t)}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),_=c.useState(0),M=(0,r.Z)(_,2),H=M[0],K=M[1],G=function(){var t=(0,a.Z)(l().mark((function t(n,a){var r;return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return A.setFieldTouched("name"),A.setFieldTouched("actualprice"),A.setFieldTouched("totalstocks"),t.next=5,A.validateForm();case 5:r=t.sent,0!==Object.keys(r).length?e.errorToast("Please remove all the errors first!"):null===j?e.errorToast("Please save the product first"):K(a);case 7:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}();return(0,O.jsx)("div",{children:(0,O.jsxs)(P.Z,{sx:{width:"100%"},children:[(0,O.jsx)(P.Z,{sx:{borderBottom:1,borderColor:"divider"},children:(0,O.jsxs)(y.Z,{value:H,onChange:G,"aria-label":"basic tabs example",children:[(0,O.jsx)(b.Z,(0,i.Z)({label:"Product Details"},$(0))),(0,O.jsx)(b.Z,(0,i.Z)({label:"Images & Categories"},$(1)))]})}),(0,O.jsx)(Q,{value:H,index:0,children:(0,O.jsxs)("form",{onSubmit:A.handleSubmit,children:[(0,O.jsx)("div",{style:{marginTop:"20px"},children:(0,O.jsxs)(m.ZP,{container:!0,spacing:2,children:[(0,O.jsx)(m.ZP,{item:!0,xs:12,sm:6,md:4,lg:3,children:(0,O.jsx)(h.Z,{fullWidth:!0,variant:"outlined",id:"name",name:"name",label:"Name",value:A.values.name,onChange:A.handleChange,error:A.touched.name&&Boolean(A.errors.name),helperText:A.touched.name&&A.errors.name,autoFocus:!0})}),(0,O.jsx)(m.ZP,{item:!0,xs:12,sm:6,md:4,lg:3,children:(0,O.jsx)(h.Z,{fullWidth:!0,variant:"outlined",id:"totalstocks",name:"totalstocks",label:"Total Stocks",value:A.values.totalstocks,onChange:A.handleChange,error:A.touched.totalstocks&&Boolean(A.errors.totalstocks),helperText:A.touched.totalstocks&&A.errors.totalstocks})}),(0,O.jsx)(m.ZP,{item:!0,xs:12,sm:6,md:4,lg:3,children:(0,O.jsx)(h.Z,{fullWidth:!0,variant:"outlined",id:"offerprice",name:"offerprice",label:"Offer Price",value:A.values.offerprice,onChange:A.handleChange,error:A.touched.offerprice&&Boolean(A.errors.offerprice),helperText:A.touched.offerprice&&A.errors.offerprice})}),(0,O.jsx)(m.ZP,{item:!0,xs:12,sm:6,md:4,lg:3,children:(0,O.jsx)(h.Z,{fullWidth:!0,variant:"outlined",id:"actualprice",name:"actualprice",label:"Actual Price",value:A.values.actualprice,onChange:A.handleChange,error:A.touched.actualprice&&Boolean(A.errors.actualprice),helperText:A.touched.actualprice&&A.errors.actualprice})}),(0,O.jsx)(m.ZP,{item:!0,xs:12,sm:6,md:4,lg:3,children:(0,O.jsx)(h.Z,{fullWidth:!0,variant:"outlined",id:"material",name:"material",label:"Material",value:A.values.material,onChange:A.handleChange,error:A.touched.material&&Boolean(A.errors.material),helperText:A.touched.material&&A.errors.material})}),(0,O.jsx)(m.ZP,{item:!0,xs:12,sm:6,md:4,lg:3,children:(0,O.jsx)(h.Z,{fullWidth:!0,variant:"outlined",id:"color",name:"color",label:"color",value:A.values.color,onChange:A.handleChange,error:A.touched.color&&Boolean(A.errors.color),helperText:A.touched.color&&A.errors.color})}),""!==A.values.id&&(0,O.jsx)(m.ZP,{item:!0,xs:12,sm:6,md:4,lg:3,children:(0,O.jsx)(h.Z,{fullWidth:!0,variant:"outlined",id:"itemsold",name:"itemsold",label:"Item Sold",value:A.values.itemsold,onChange:A.handleChange,error:A.touched.itemsold&&Boolean(A.errors.itemsold),helperText:A.touched.itemsold&&A.errors.itemsold})}),""!==A.values.id&&(0,O.jsx)(m.ZP,{item:!0,xs:12,sm:6,md:4,lg:3,children:(0,O.jsx)(h.Z,{fullWidth:!0,variant:"outlined",id:"productCode",name:"productCode",label:"Product Code",value:A.values.productCode,onChange:A.handleChange,error:A.touched.productCode&&Boolean(A.errors.productCode),helperText:A.touched.productCode&&A.errors.productCode,disabled:!0})}),(0,O.jsx)(m.ZP,{item:!0,xs:12,sm:12,md:12,lg:12,children:(0,O.jsx)(h.Z,{fullWidth:!0,variant:"outlined",id:"description",name:"description",label:"Description",type:"description",value:A.values.description,onChange:A.handleChange,error:A.touched.description&&Boolean(A.errors.description),helperText:A.touched.description&&A.errors.description,multiline:!0})}),(0,O.jsxs)(m.ZP,{item:!0,xs:12,sm:6,md:4,lg:3,children:[(0,O.jsx)("label",{htmlFor:"keepinstocktill",className:"detepickerLabel",children:"Keep In Stock Till"}),(0,O.jsx)("br",{}),(0,O.jsx)("input",{type:"date",name:"keepinstocktill",id:"keepinstocktill",value:A.values.keepinstocktill,onChange:A.handleChange,className:"datepickers",min:(new Date).toISOString().split("T")[0]}),(0,O.jsxs)("div",{className:"error",style:{color:"#0e406a"},children:[(0,O.jsx)(S.Z,{style:{paddingTop:"5px"}}),(0,O.jsx)("span",{children:"Keep the field empty to keep product in stock forever."})]}),A.touched.keepinstocktill&&Boolean(A.errors.keepinstocktill)&&(0,O.jsx)("div",{className:"error",children:A.errors.keepinstocktill})]}),(0,O.jsx)(m.ZP,{item:!0,xs:12,sm:6,md:4,lg:3,children:(0,O.jsx)(p.Z,{children:(0,O.jsx)(x.Z,{control:(0,O.jsx)(f.Z,{id:"name",name:"isActive",checked:A.values.isActive,onChange:A.handleChange}),label:"Is Active"})})})]})}),(0,O.jsxs)("div",{style:{marginTop:"20px",display:"flex",justifyContent:"flex-end"},children:[(0,O.jsx)(g.Z,{variant:"contained",onClick:function(){return e.history.push({pathname:"/admin/home/products",state:""})},children:"Cancel"}),(0,O.jsx)(g.Z,{variant:"contained",type:"submit",style:{marginLeft:"20px"},children:"Save"})]})]})}),(0,O.jsx)(Q,{value:H,index:1,children:(0,O.jsx)("div",{className:"image_categories",children:(0,O.jsxs)(m.ZP,{container:!0,spacing:2,children:[(0,O.jsx)(m.ZP,{item:!0,xs:12,sm:6,children:(0,O.jsx)(C.ZP,{options:N,value:s,isMulti:!0,isSearchable:!0,onChange:function(e,t){o(e),"select-option"===t.action&&E({ProductId:j,CategoryId:t.option.id}),"remove-value"!==t.action&&"pop-value"!==t.action||W({ProductId:j,CategoryId:t.removedValue.id})},isClearable:!1})}),(0,O.jsx)(m.ZP,{item:!0,xs:12,sm:12,children:(0,O.jsx)(z,(0,i.Z)((0,i.Z)({},e),{},{productId:j,imageData:B.profile}))}),(0,O.jsx)(m.ZP,{item:!0,xs:12,sm:12,children:(0,O.jsx)(q,(0,i.Z)((0,i.Z)({},e),{},{productId:j,imageData:B.all}))})]})})})]})})}))},4361:function(){}}]);
//# sourceMappingURL=155.1204a0e1.chunk.js.map