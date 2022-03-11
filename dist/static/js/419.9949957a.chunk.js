"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[419],{4419:function(e,t,a){a.r(t);var r=a(885),i=a(2791),n=a(6151),o=a(7391),d=a(2419),s=(a(4361),a(2953)),c=a(9439),l=a(3967),u=a(5193),h=a(1286),f=a(4569),m=a.n(f),p=a(1924),v=a(364),g=a(184);t.default=(0,v.$j)(null,{successToast:p.Q,errorToast:p.J})((function(e){var t=(0,i.useState)(void 0),a=(0,r.Z)(t,2),f=a[0],p=a[1];(0,i.useEffect)((function(){m().get("/product/admin/getAllProduct").then((function(t){p(t.data.data),0===t.data.status&&e.errorToast(t.data.message)})).catch((function(t){e.errorToast("Issues while Fetching Product."),console.log(t)}))}),[]);var v=(0,l.Z)(),w=(0,u.Z)(v.breakpoints.down("md")),N=(0,i.useState)(null),x=(0,r.Z)(N,2),y=x[0],k=x[1],C=[{headerName:"Name",field:"name",width:250},{headerName:"Total Stocks",field:"totalstocks",width:120},{headerName:"Offer Price",field:"offerprice",width:120},{headerName:"Actual Price",field:"actualprice",width:150},{headerName:"Keep in stock till",field:"keepinstocktill",valueGetter:function(e){var t;return null!==(t=e.data.keepinstocktill)&&void 0!==t?t:"Always"}},{headerName:"Is Active",field:"isActive",width:100,valueGetter:function(e){return!0===e.data.isActive?"Yes":"No"}},{headerName:"Color",field:"color"},{headerName:"Items Sold",field:"itemsold",width:150},{headerName:"Categories",field:"Categories",width:250,valueGetter:function(e){return e.data.Categories.map((function(e){return e.name}))}},{headerName:"Material",field:"material",width:150},{headerName:"Product Code",field:"productCode"},{headerName:"Description",field:"description"},{headerName:"ID",field:"id",width:150},{headerName:"Created At",field:"createdAt",valueGetter:function(e){return new Date(e.data.createdAt).toLocaleString()}},{headerName:"Created By",field:"createdby"},{headerName:"Actions",width:w?120:70,pinned:"right",cellRenderer:function(t){return(0,g.jsx)("div",{children:(0,g.jsx)(h.Z,{className:"pointer",onClick:function(){e.history.push({pathname:"/admin/home/products/edit",state:t.data})}})})},resizable:!1,sortable:!1,filter:!1,suppressMovable:!0}];return(0,g.jsxs)("div",{children:[(0,g.jsxs)("div",{className:"hor",children:[(0,g.jsx)("h2",{style:{marginRight:"20px",flex:"1"},children:"Products"}),(0,g.jsxs)("div",{className:"hor createCategory",children:[(0,g.jsxs)(n.Z,{variant:"contained",onClick:function(){return e.history.push("/admin/home/products/new"),void console.log("Redirect to new page")},children:[(0,g.jsx)(d.Z,{})," ","  "," Create Product"]}),(0,g.jsx)(o.Z,{variant:"outlined",id:"search",name:"Search",label:"Search",onChange:function(e){return null===y||void 0===y?void 0:y.setQuickFilter(e.target.value)},autoFocus:!0,style:{marginLeft:"20px"},size:"small"})]})]}),(0,g.jsx)("div",{children:(0,g.jsx)("div",{className:c.$.Theme,style:{height:400,width:"100%",marginBottom:"20px"},children:(0,g.jsx)(s.AgGridReact,{rowData:f,columnDefs:C,defaultColDef:{sortable:!0,filter:!0,resizable:!0,width:200,filterParams:{buttons:["reset"],debounceMs:200}},onGridReady:function(e){k(e.api)},animateRows:!0,gridOptions:{pagination:!0,overlayNoRowsTemplate:"<h3>No Data Available.</h3>",tooltipShowDelay:0},getRowNodeId:function(e){return e.id},paginationPageSize:10})})})]})}))},1924:function(e,t,a){a.d(t,{Q:function(){return d},J:function(){return s}});var r=a(5861),i=a(7757),n=a.n(i),o=a(4327),d=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:6e3;return function(){var a=(0,r.Z)(n().mark((function a(r){return n().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:r({type:o.G,payload:{message:e,duration:t}});case 1:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},s=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:6e3;return function(){var a=(0,r.Z)(n().mark((function a(r){return n().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:r({type:o.W,payload:{message:e,duration:t}});case 1:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}},4361:function(){}}]);
//# sourceMappingURL=419.9949957a.chunk.js.map