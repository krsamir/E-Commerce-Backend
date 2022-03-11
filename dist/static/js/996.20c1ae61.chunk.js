"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[996],{5996:function(e,t,r){r.r(t);var n=r(2982),a=r(5861),i=r(885),o=r(1413),s=r(5987),l=r(7757),c=r.n(l),d=r(2791),u=r(5705),p=r(905),m=r(1889),h=r(7391),f=r(9012),x=r(5523),v=r(9174),g=r(6151),j=r(3400),Z=r(1924),k=r(7630),C=r(364),b=r(4569),y=r.n(b),T=r(8561),P=(r(4361),r(5228)),w=r(3896),S=r(890),F=r(4554),N=r(9388),I=r(4583),V=r(1009),A=r(8996),B=r(22),E=r(184),L=["children","value","index"],R=new Date,W=new Date(R.setDate(R.getDate()-1)).toISOString(),D=p.Ry({name:p.Z_("Enter Name").required("Name is required"),description:p.Z_("Enter Description"),totalstocks:p.Rx("Enter Total Stocks in (numbers)").required("No of total stocks is madatory field"),offerprice:p.Rx("Enter Offer Price in (numbers)"),actualprice:p.Rx("Enter Actual Price in (numbers)").required("Actual Price is a madatory field."),keepinstocktill:p.hT().min(W,"Past dates cannot be selected."),isActive:p.O7("Mention Active State"),color:p.Z_("Enter Color"),itemsold:p.Rx("Enter Item Sold in (numbers)"),material:p.Z_("Enter Material"),productCode:p.Z_(),id:p.Rx()});function O(e){var t=e.children,r=e.value,n=e.index,a=(0,s.Z)(e,L);return(0,E.jsx)("div",(0,o.Z)((0,o.Z)({role:"tabpanel",hidden:r!==n,id:"simple-tabpanel-".concat(n),"aria-labelledby":"simple-tab-".concat(n)},a),{},{children:r===n&&(0,E.jsx)(F.Z,{sx:{p:3},children:(0,E.jsx)(S.Z,{component:"div",children:t})})}))}function _(e){return{id:"simple-tab-".concat(e),"aria-controls":"simple-tabpanel-".concat(e)}}t.default=(0,C.$j)(null,{successToast:Z.Q,errorToast:Z.J})((function(e){var t=(0,d.useState)([]),r=(0,i.Z)(t,2),s=r[0],l=r[1],p=(0,d.useState)(null),Z=(0,i.Z)(p,2),C=Z[0],b=Z[1],S=(0,k.ZP)("input")({display:"none"}),L=(0,d.useState)([]),R=(0,i.Z)(L,2),W=R[0],U=R[1],q=(0,d.useState)([]),M=(0,i.Z)(q,2),z=M[0],J=M[1];(0,d.useEffect)((function(){return y().get("/product/category").then((function(t){U(t.data.data.map((function(e){var t=e.id,r=e.name;return{value:r,label:r,id:t}}))),0===t.data.status&&e.errorToast(t.data.message)})).catch((function(t){console.log(t),e.errorToast("Issues while Fetching category.")})),function(){}}),[]),(0,d.useEffect)((function(){return function(){z.map((function(e){return URL.revokeObjectURL(e)}))}}),[]),(0,d.useEffect)((function(){if(e.location.state){var t=e.location.state,r=t.Categories,n=t.actualprice,a=t.color,i=t.description,o=t.id,s=t.isActive,c=t.itemsold,d=t.keepinstocktill,u=t.material,p=t.name,m=t.offerprice,h=t.productCode,f=t.totalstocks;K.setFieldValue("name",p,!0),K.setFieldValue("actualprice",n,!0),K.setFieldValue("color",a,!0),K.setFieldValue("description",i,!0),K.setFieldValue("id",o,!0),K.setFieldValue("isActive",s,!0),K.setFieldValue("itemsold",c,!0),K.setFieldValue("keepinstocktill",null!==d&&void 0!==d?d:"",!0),K.setFieldValue("material",u,!0),K.setFieldValue("offerprice",m,!0),K.setFieldValue("productCode",h,!0),K.setFieldValue("totalstocks",f,!0),K.setFieldValue("name",p,!0),l(r.map((function(e){var t=e.id,r=e.name;return{value:r,label:r,id:t}}))),b(o)}}),[]);var K=(0,u.TA)({initialValues:{name:"",totalstocks:"",offerprice:"",actualprice:"",isActive:!0,keepinstocktill:"",material:"",color:"",description:"",itemsold:"",productCode:"",id:""},validationSchema:D,onSubmit:function(){var e=(0,a.Z)(c().mark((function e(t){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:""===t.id?Q((0,o.Z)((0,o.Z)({},t),{},{keepinstocktill:""===t.keepinstocktill?null:t.keepinstocktill})):G((0,o.Z)((0,o.Z)({},t),{},{keepinstocktill:""===t.keepinstocktill?null:t.keepinstocktill}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}),Q=function(){var t=(0,a.Z)(c().mark((function t(r){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y().post("/product/create",r).then((function(t){0===t.data.status&&e.errorToast(t.data.message),1===t.data.status&&(e.successToast(t.data.message),b(t.data.data.id),te(1))})).catch((function(t){e.errorToast("Some issue while creating the product."),console.log(t)}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),G=function(){var t=(0,a.Z)(c().mark((function t(r){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y().put("/product/update",r).then((function(t){0===t.data.status&&e.errorToast(t.data.message),1===t.data.status&&(e.successToast(t.data.message),te(1))})).catch((function(t){e.errorToast("Some issue while updating the product."),console.log(t)}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),$=function(){var t=(0,a.Z)(c().mark((function t(r){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y().post("/product/createProCat",r).then((function(t){1===t.data.status?e.successToast(t.data.message):e.errorToast(t.data.message)})).catch((function(t){e.errorToast("Some issue while adding category to this product."),console.log(t)}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),H=function(){var t=(0,a.Z)(c().mark((function t(r){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y().post("/product/deleteProCat",r).then((function(t){1===t.data.status?e.successToast(t.data.message):e.errorToast(t.data.message)})).catch((function(t){e.errorToast("Some issue while adding category to this product."),console.log(t)}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),X=d.useState(0),Y=(0,i.Z)(X,2),ee=Y[0],te=Y[1],re=function(){var t=(0,a.Z)(c().mark((function t(r,n){var a;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return K.setFieldTouched("name"),K.setFieldTouched("actualprice"),K.setFieldTouched("totalstocks"),t.next=5,K.validateForm();case 5:a=t.sent,0!==Object.keys(a).length?e.errorToast("Please remove all the errors first!"):null===C?e.errorToast("Please save the product first"):te(n);case 7:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}(),ne=function(){var e=(0,a.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log(z),t=new FormData,z.map((function(e,r){return t.append("myFile[]",z[r])})),t.append("ProductId",C),console.log(z[0]);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ae=(0,d.useState)(0),ie=(0,i.Z)(ae,2),oe=ie[0],se=ie[1],le=z.map((function(e){return URL.createObjectURL(e)}));return(0,E.jsx)("div",{children:(0,E.jsxs)(F.Z,{sx:{width:"100%"},children:[(0,E.jsx)(F.Z,{sx:{borderBottom:1,borderColor:"divider"},children:(0,E.jsxs)(P.Z,{value:ee,onChange:re,"aria-label":"basic tabs example",children:[(0,E.jsx)(w.Z,(0,o.Z)({label:"Product Details"},_(0))),(0,E.jsx)(w.Z,(0,o.Z)({label:"Images & Categories"},_(1)))]})}),(0,E.jsx)(O,{value:ee,index:0,children:(0,E.jsxs)("form",{onSubmit:K.handleSubmit,children:[(0,E.jsx)("div",{style:{marginTop:"20px"},children:(0,E.jsxs)(m.ZP,{container:!0,spacing:2,children:[(0,E.jsx)(m.ZP,{item:!0,xs:12,sm:6,md:4,lg:3,children:(0,E.jsx)(h.Z,{fullWidth:!0,variant:"outlined",id:"name",name:"name",label:"Name",value:K.values.name,onChange:K.handleChange,error:K.touched.name&&Boolean(K.errors.name),helperText:K.touched.name&&K.errors.name,autoFocus:!0})}),(0,E.jsx)(m.ZP,{item:!0,xs:12,sm:6,md:4,lg:3,children:(0,E.jsx)(h.Z,{fullWidth:!0,variant:"outlined",id:"totalstocks",name:"totalstocks",label:"Total Stocks",value:K.values.totalstocks,onChange:K.handleChange,error:K.touched.totalstocks&&Boolean(K.errors.totalstocks),helperText:K.touched.totalstocks&&K.errors.totalstocks})}),(0,E.jsx)(m.ZP,{item:!0,xs:12,sm:6,md:4,lg:3,children:(0,E.jsx)(h.Z,{fullWidth:!0,variant:"outlined",id:"offerprice",name:"offerprice",label:"Offer Price",value:K.values.offerprice,onChange:K.handleChange,error:K.touched.offerprice&&Boolean(K.errors.offerprice),helperText:K.touched.offerprice&&K.errors.offerprice})}),(0,E.jsx)(m.ZP,{item:!0,xs:12,sm:6,md:4,lg:3,children:(0,E.jsx)(h.Z,{fullWidth:!0,variant:"outlined",id:"actualprice",name:"actualprice",label:"Actual Price",value:K.values.actualprice,onChange:K.handleChange,error:K.touched.actualprice&&Boolean(K.errors.actualprice),helperText:K.touched.actualprice&&K.errors.actualprice})}),(0,E.jsx)(m.ZP,{item:!0,xs:12,sm:6,md:4,lg:3,children:(0,E.jsx)(h.Z,{fullWidth:!0,variant:"outlined",id:"material",name:"material",label:"Material",value:K.values.material,onChange:K.handleChange,error:K.touched.material&&Boolean(K.errors.material),helperText:K.touched.material&&K.errors.material})}),(0,E.jsx)(m.ZP,{item:!0,xs:12,sm:6,md:4,lg:3,children:(0,E.jsx)(h.Z,{fullWidth:!0,variant:"outlined",id:"color",name:"color",label:"color",value:K.values.color,onChange:K.handleChange,error:K.touched.color&&Boolean(K.errors.color),helperText:K.touched.color&&K.errors.color})}),""!==K.values.id&&(0,E.jsx)(m.ZP,{item:!0,xs:12,sm:6,md:4,lg:3,children:(0,E.jsx)(h.Z,{fullWidth:!0,variant:"outlined",id:"itemsold",name:"itemsold",label:"Item Sold",value:K.values.itemsold,onChange:K.handleChange,error:K.touched.itemsold&&Boolean(K.errors.itemsold),helperText:K.touched.itemsold&&K.errors.itemsold})}),""!==K.values.id&&(0,E.jsx)(m.ZP,{item:!0,xs:12,sm:6,md:4,lg:3,children:(0,E.jsx)(h.Z,{fullWidth:!0,variant:"outlined",id:"productCode",name:"productCode",label:"Product Code",value:K.values.productCode,onChange:K.handleChange,error:K.touched.productCode&&Boolean(K.errors.productCode),helperText:K.touched.productCode&&K.errors.productCode,disabled:!0})}),(0,E.jsx)(m.ZP,{item:!0,xs:12,sm:12,md:12,lg:12,children:(0,E.jsx)(h.Z,{fullWidth:!0,variant:"outlined",id:"description",name:"description",label:"Description",type:"description",value:K.values.description,onChange:K.handleChange,error:K.touched.description&&Boolean(K.errors.description),helperText:K.touched.description&&K.errors.description,multiline:!0})}),(0,E.jsxs)(m.ZP,{item:!0,xs:12,sm:6,md:4,lg:3,children:[(0,E.jsx)("label",{htmlFor:"keepinstocktill",className:"detepickerLabel",children:"Keep In Stock Till"}),(0,E.jsx)("br",{}),(0,E.jsx)("input",{type:"date",name:"keepinstocktill",id:"keepinstocktill",value:K.values.keepinstocktill,onChange:K.handleChange,className:"datepickers",min:(new Date).toISOString().split("T")[0]}),(0,E.jsxs)("div",{className:"error",style:{color:"#0e406a"},children:[(0,E.jsx)(N.Z,{style:{paddingTop:"5px"}}),(0,E.jsx)("span",{children:"Keep the field empty to keep product in stock forever."})]}),K.touched.keepinstocktill&&Boolean(K.errors.keepinstocktill)&&(0,E.jsx)("div",{className:"error",children:K.errors.keepinstocktill})]}),(0,E.jsx)(m.ZP,{item:!0,xs:12,sm:6,md:4,lg:3,children:(0,E.jsx)(f.Z,{children:(0,E.jsx)(x.Z,{control:(0,E.jsx)(v.Z,{id:"name",name:"isActive",checked:K.values.isActive,onChange:K.handleChange}),label:"Is Active"})})})]})}),(0,E.jsxs)("div",{style:{marginTop:"20px",display:"flex",justifyContent:"flex-end"},children:[(0,E.jsx)(g.Z,{variant:"contained",onClick:function(){return e.history.push({pathname:"/admin/home/products",state:""})},children:"Cancel"}),(0,E.jsx)(g.Z,{variant:"contained",type:"submit",style:{marginLeft:"20px"},children:"Save"})]})]})}),(0,E.jsx)(O,{value:ee,index:1,children:(0,E.jsx)("div",{className:"image_categories",children:(0,E.jsxs)(m.ZP,{container:!0,spacing:2,children:[(0,E.jsx)(m.ZP,{item:!0,xs:12,sm:6,children:(0,E.jsx)(T.ZP,{options:W,value:s,isMulti:!0,isSearchable:!0,onChange:function(e,t){l(e),"select-option"===t.action&&$({ProductId:C,CategoryId:t.option.id}),"remove-value"!==t.action&&"pop-value"!==t.action||H({ProductId:C,CategoryId:t.removedValue.id})},isClearable:!1})}),(0,E.jsx)(m.ZP,{item:!0,xs:12,sm:6,children:(0,E.jsxs)("label",{htmlFor:"contained-button-file",children:[(0,E.jsx)(S,{name:"myFile[]",accept:"image/*",id:"contained-button-file",multiple:!0,type:"file",encType:"multipart/form-data",onChange:function(e){var t=(0,n.Z)(z);J(t.concat(Array.from(e.target.files)))}}),(0,E.jsxs)(g.Z,{variant:"contained",component:"span",children:[(0,E.jsx)(I.Z,{}),"  ","Upload Product Images"]})]})}),(0,E.jsx)(m.ZP,{item:!0,xs:12,sm:12,md:2,children:(0,E.jsx)("div",{className:"leftCounter",children:oe>0&&(0,E.jsx)(j.Z,{size:"large","aria-label":"Left",color:"primary",onClick:function(){return se((function(e){return e-1}))},children:(0,E.jsx)(V.Z,{className:"left"})})})}),(0,E.jsx)(m.ZP,{item:!0,xs:12,sm:12,md:8,children:(0,E.jsx)("div",{className:"imageBox",children:le.length>0&&(0,E.jsxs)("div",{className:"imagesmallbox",children:[(0,E.jsx)("img",{src:le[oe],className:"displayImage pointer",alt:""}),le.length>0&&(0,E.jsxs)("div",{className:"counter hor",children:[(0,E.jsxs)("div",{className:"hor",style:{flex:1},children:[oe+1,"  ",(0,E.jsx)("div",{children:" Of "}),"  ",(0,E.jsx)("span",{children:le.length})]}),(0,E.jsx)(j.Z,{size:"large","aria-label":"Left",color:"primary",onClick:function(){return function(e){var t=(0,n.Z)(z);e===t.length-1&&se((function(e){return e-1})),t.splice(e,1),J(t)}(oe)},children:(0,E.jsx)(B.Z,{})})]})]})})}),(0,E.jsx)(m.ZP,{item:!0,xs:12,sm:12,md:2,children:(0,E.jsx)("div",{className:"rightCounter",children:oe<le.length-1&&(0,E.jsx)(j.Z,{size:"large","aria-label":"Left",color:"primary",onClick:function(){return se((function(e){return e+1}))},children:(0,E.jsx)(A.Z,{className:"right"})})})}),(0,E.jsx)(m.ZP,{item:!0,xs:12,sm:12,children:(0,E.jsxs)("div",{style:{marginTop:"20px",display:"flex",justifyContent:"flex-end"},children:[(0,E.jsx)(g.Z,{variant:"contained",onClick:function(){return e.history.push({pathname:"/admin/home/products",state:null})},children:"Cancel"}),(0,E.jsx)(g.Z,{variant:"contained",style:{marginLeft:"20px"},onClick:ne,children:"Save Images"})]})})]})})})]})})}))},1924:function(e,t,r){r.d(t,{Q:function(){return s},J:function(){return l}});var n=r(5861),a=r(7757),i=r.n(a),o=r(4327),s=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:6e3;return function(){var r=(0,n.Z)(i().mark((function r(n){return i().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:n({type:o.G,payload:{message:e,duration:t}});case 1:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()},l=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:6e3;return function(){var r=(0,n.Z)(i().mark((function r(n){return i().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:n({type:o.W,payload:{message:e,duration:t}});case 1:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}},4361:function(){}}]);
//# sourceMappingURL=996.20c1ae61.chunk.js.map