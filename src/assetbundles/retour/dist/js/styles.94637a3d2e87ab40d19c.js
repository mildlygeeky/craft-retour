/*!
 * @project        nystudio107
 * @name           styles.94637a3d2e87ab40d19c.js
 * @author         andrew@nystudio107.com
 * @build          Wed, Sep 5, 2018 4:59 AM ET
 * @release        b9e18ba92fb58c39d98f859700a4c6bb3d7af1a1 [develop]
 * @copyright      Copyright (c) 2018 nystudio107
 *
 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1:function(t,e){},10:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this.$createElement;return(this._self._c||t)("main")};i._withStripped=!0;var s=a(2),l=a(7),n=a.n(l);s.default.use(n.a);var r={mounted:function(){this.$confetti.start(),setTimeout(()=>{this.$confetti.stop()},5e3)},methods:{}},o=a(0),c=Object(o.a)(r,i,[],!1,null,null,null);c.options.__file="src/assetbundles/retour/src/vue/Confetti.vue";e.default=c.exports},11:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this.$createElement;return(this._self._c||t)("apexcharts",{attrs:{width:"100%",height:"200px",type:"area",options:this.chartOptions,series:this.series}})};i._withStripped=!0;var s={components:{apexcharts:()=>a.e(12).then(a.t.bind(null,69,7))},props:{title:String,subTitle:String,range:String},methods:{getSeriesData:async function(){const t=(await a.e(10).then(a.t.bind(null,70,7))).create((t=>({baseURL:t,headers:{"X-Requested-With":"XMLHttpRequest"}}))("/retour/charts/dashboard/"));await((t,e,a)=>{t.get(e).then(t=>{a&&a(t.data),console.log(t.data)}).catch(t=>{console.log(t)})})(t,this.range,t=>{const e=Object.assign({},this.chartOptions);void 0!==t[0]&&(e.yaxis.max=Math.round((t=>t.map(function(t){return Math.max.apply(null,t)}))([t[0].data])[0]+1.5),e.labels=t[0].labels),this.chartOptions=e,this.series=t})}},created:function(){this.getSeriesData()},data:function(){return{chartOptions:{chart:{id:"vuechart-example",toolbar:{show:!1},sparkline:{enabled:!0}},colors:["#008FFB","#DCE6EC"],stroke:{curve:"straight",width:3},fill:{opacity:.2,gradient:{enabled:!0}},xaxis:{crosshairs:{width:1}},labels:[],yaxis:{min:0,max:0},title:{text:this.title,offsetX:0,style:{fontSize:"24px",cssClass:"apexcharts-yaxis-title"}},subtitle:{text:this.subTitle,offsetX:0,style:{fontSize:"14px",cssClass:"apexcharts-yaxis-title"}}},series:[{name:"placeholder",data:[0]}]}}},l=a(0),n=Object(l.a)(s,i,[],!1,null,null,null);n.options.__file="src/assetbundles/retour/src/vue/DashboardChart.vue";e.default=n.exports},12:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("vuetable",{ref:"vuetable",attrs:{"api-url":"/retour/tables/dashboard","per-page":20,fields:this.fields,css:this.css},on:{"vuetable:pagination-data":this.onPaginationData}}),this._v(" "),e("vuetable-pagination",{ref:"pagination",on:{"vuetable-pagination:change-page":this.onChangePage}})],1)};i._withStripped=!0;var s={components:{vuetable:()=>Promise.all([a.e(0),a.e(11)]).then(a.bind(null,74)),"vuetable-pagination":()=>a.e(0).then(a.bind(null,72))},props:{},data:function(){return{css:{tableClass:"data fullwidth",ascendingIcon:"ordered asc",descendingIcon:"ordered desc"},sortOrder:[{field:"hitCount",sortField:"hitCount",direction:"desc"}],fields:[{name:"redirectSrcUrl",sortField:"redirectSrcUrl",title:"404 File Not Found URL",titleClass:"center",dataClass:"center",callback:"urlFormatter"},{name:"referrerUrl",sortField:"referrerUrl",title:"Last Referrer URL",titleClass:"center",dataClass:"center",callback:"urlFormatter"},{name:"hitCount",sortField:"hitCount",title:"Hits",titleClass:"center",dataClass:"center"},{name:"hitLastTime",sortField:"hitLastTime",title:"Last Hit",titleClass:"center",dataClass:"center"},{name:"handledByRetour",sortField:"hitLastTime",title:"Handled",titleClass:"center",dataClass:"center",callback:"boolFormatter"}]}},methods:{onPaginationData(t){this.$refs.pagination.setPaginationData(t)},onChangePage(t){this.$refs.vuetable.changePage(t)},urlFormatter:t=>""===t?"":`\n            <a class="go" href="${t}" title="${t}">${t}</a>\n            `,boolFormatter:t=>t?'\n            <span style="color: green;">&#x2714;</span>\n            ':'\n            <span style="color: red;">&#x2716;</span>\n            '}},l=a(0),n=Object(l.a)(s,i,[],!1,null,null,null);n.options.__file="src/assetbundles/retour/src/vue/RedirectsTable.vue";e.default=n.exports},13:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"py-4"},[a("vuetable-filter-bar"),t._v(" "),a("div",{staticClass:"vuetable-pagination"},[a("vuetable-pagination-info",{ref:"paginationInfoTop"}),t._v(" "),a("vuetable-pagination",{ref:"paginationTop",on:{"vuetable-pagination:change-page":t.onChangePage}})],1),t._v(" "),a("vuetable",{ref:"vuetable",attrs:{"api-url":"/retour/tables/dashboard","per-page":20,fields:t.fields,css:t.css,"append-params":t.moreParams},on:{"vuetable:pagination-data":t.onPaginationData}}),t._v(" "),a("div",{staticClass:"vuetable-pagination"},[a("vuetable-pagination-info",{ref:"paginationInfo"}),t._v(" "),a("vuetable-pagination",{ref:"pagination",on:{"vuetable-pagination:change-page":t.onChangePage}})],1)],1)};i._withStripped=!0;var s={components:{vuetable:()=>Promise.all([a.e(0),a.e(11)]).then(a.bind(null,74)),"vuetable-pagination":()=>a.e(0).then(a.bind(null,72)),"vuetable-pagination-info":()=>a.e(0).then(a.bind(null,71)),"vuetable-filter-bar":()=>a.e(0).then(a.bind(null,73))},props:{},data:function(){return{moreParams:{},css:{tableClass:"data fullwidth",ascendingIcon:"ordered asc",descendingIcon:"ordered desc"},sortOrder:[{field:"hitCount",sortField:"hitCount",direction:"desc"}],fields:[{name:"redirectSrcUrl",sortField:"redirectSrcUrl",title:"404 File Not Found URL",titleClass:"center",dataClass:"center",callback:"urlFormatter"},{name:"referrerUrl",sortField:"referrerUrl",title:"Last Referrer URL",titleClass:"center",dataClass:"center",callback:"urlFormatter"},{name:"hitCount",sortField:"hitCount",title:"Hits",titleClass:"text-right",dataClass:"text-right"},{name:"hitLastTime",sortField:"hitLastTime",title:"Last Hit",titleClass:"center",dataClass:"center"},{name:"handledByRetour",sortField:"hitLastTime",title:"Handled",titleClass:"text-center",dataClass:"text-center",callback:"boolFormatter"},{name:"addLink",sortField:"addLink",title:"",titleClass:"text-center",dataClass:"text-center",callback:"addUrlFormatter"}]}},mounted(){this.$events.$on("filter-set",t=>this.onFilterSet(t)),this.$events.$on("filter-reset",t=>this.onFilterReset())},methods:{onFilterSet(t){this.moreParams={filter:t},console.log("onFilterSet"),this.$events.fire("refresh-table",this.$refs.vuetable)},onFilterReset(){this.moreParams={},this.$events.fire("refresh-table",this.$refs.vuetable)},onPaginationData(t){this.$refs.paginationTop.setPaginationData(t),this.$refs.paginationInfoTop.setPaginationData(t),this.$refs.pagination.setPaginationData(t),this.$refs.paginationInfo.setPaginationData(t)},onChangePage(t){this.$refs.vuetable.changePage(t)},urlFormatter:t=>""===t?"":`\n            <a class="go" href="${t}" title="${t}">${t}</a>\n            `,boolFormatter:t=>1==t?'\n            <span style="color: green;">&#x2714;</span>\n            ':'\n            <span style="color: red;">&#x2716;</span>\n            ',addUrlFormatter:t=>1==t?'\n            <a class="add icon" href="retour/add" title="Add"></a>\n            ':""}},l=a(0),n=Object(l.a)(s,i,[],!1,null,null,null);n.options.__file="src/assetbundles/retour/src/vue/DashboardTable.vue";e.default=n.exports},6:function(t,e){},71:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this.$createElement;return(this._self._c||t)("div",{class:["vuetable-pagination-info",this.css.infoClass],domProps:{innerHTML:this._s(this.paginationInfo)}})};i._withStripped=!0;var s={props:{css:{type:Object,default:()=>({infoClass:"left floated left aligned six wide column"})},infoTemplate:{type:String,default:()=>"Displaying {from} to {to} of {total} items"},noDataTemplate:{type:String,default:()=>"No relevant data"}},data:function(){return{tablePagination:null}},computed:{paginationInfo(){return null==this.tablePagination||0==this.tablePagination.total?this.noDataTemplate:this.infoTemplate.replace("{from}",this.tablePagination.from||0).replace("{to}",this.tablePagination.to||0).replace("{total}",this.tablePagination.total||0)}},methods:{setPaginationData(t){this.tablePagination=t},resetData(){this.tablePagination=null}}},l=a(0),n=Object(l.a)(s,void 0,void 0,!1,null,null,null);n.options.__file="src/assetbundles/retour/src/vue/VuetablePaginationInfoMixin.vue";var r={mixins:[n.exports]},o=Object(l.a)(r,i,[],!1,null,null,null);o.options.__file="src/assetbundles/retour/src/vue/VuetablePaginationInfo.vue";e.default=o.exports},72:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"show",rawName:"v-show",value:t.tablePagination&&t.tablePagination.last_page>1,expression:"tablePagination && tablePagination.last_page > 1"}],class:t.css.wrapperClass},[a("a",{class:["btn-nav",t.css.linkClass,t.isOnFirstPage?t.css.disabledClass:""],on:{click:function(e){t.loadPage(1)}}},[""!=t.css.icons.first?a("i",{class:[t.css.icons.first]}):a("span",[t._v("«")])]),t._v(" "),a("a",{class:["btn-nav",t.css.linkClass,t.isOnFirstPage?t.css.disabledClass:""],on:{click:function(e){t.loadPage("prev")}}},[""!=t.css.icons.next?a("i",{class:[t.css.icons.prev]}):a("span",[t._v(" ‹")])]),t._v(" "),t.notEnoughPages?[t._l(t.totalPage,function(e){return[a("a",{class:[t.css.pageClass,t.isCurrentPage(e)?t.css.activeClass:""],domProps:{innerHTML:t._s(e)},on:{click:function(a){t.loadPage(e)}}})]})]:[t._l(t.windowSize,function(e){return[a("a",{class:[t.css.pageClass,t.isCurrentPage(t.windowStart+e-1)?t.css.activeClass:""],domProps:{innerHTML:t._s(t.windowStart+e-1)},on:{click:function(a){t.loadPage(t.windowStart+e-1)}}})]})],t._v(" "),a("a",{class:["btn-nav",t.css.linkClass,t.isOnLastPage?t.css.disabledClass:""],on:{click:function(e){t.loadPage("next")}}},[""!=t.css.icons.next?a("i",{class:[t.css.icons.next]}):a("span",[t._v("› ")])]),t._v(" "),a("a",{class:["btn-nav",t.css.linkClass,t.isOnLastPage?t.css.disabledClass:""],on:{click:function(e){t.loadPage(t.totalPage)}}},[""!=t.css.icons.last?a("i",{class:[t.css.icons.last]}):a("span",[t._v("»")])])],2)};i._withStripped=!0;var s={props:{css:{type:Object,default:()=>({wrapperClass:"vuetable pagination float-right py-4",activeClass:"active large",disabledClass:"disabled",pageClass:"item p-3 bg-grey-lightest",linkClass:"item p-3 bg-grey-lightest",paginationClass:"ui bottom attached segment grid",paginationInfoClass:"left floated left aligned six wide column",dropdownClass:"ui search dropdown",icons:{first:"",prev:"",next:"",last:""}})},onEachSide:{type:Number,default:()=>2}},data:function(){return{eventPrefix:"vuetable-pagination:",tablePagination:null}},computed:{totalPage(){return null===this.tablePagination?0:this.tablePagination.last_page},isOnFirstPage(){return null!==this.tablePagination&&1===this.tablePagination.current_page},isOnLastPage(){return null!==this.tablePagination&&this.tablePagination.current_page===this.tablePagination.last_page},notEnoughPages(){return this.totalPage<2*this.onEachSide+4},windowSize(){return 2*this.onEachSide+1},windowStart(){return!this.tablePagination||this.tablePagination.current_page<=this.onEachSide?1:this.tablePagination.current_page>=this.totalPage-this.onEachSide?this.totalPage-2*this.onEachSide:this.tablePagination.current_page-this.onEachSide}},methods:{loadPage(t){this.$emit(this.eventPrefix+"change-page",t)},isCurrentPage(t){return t===this.tablePagination.current_page},setPaginationData(t){this.tablePagination=t},resetData(){this.tablePagination=null}}},l=a(0),n=Object(l.a)(s,void 0,void 0,!1,null,null,null);n.options.__file="src/assetbundles/retour/src/vue/VuetablePaginationMixin.vue";var r={mixins:[n.exports]},o=Object(l.a)(r,i,[],!1,null,null,null);o.options.__file="src/assetbundles/retour/src/vue/VuetablePagination.vue";e.default=o.exports},73:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"filter-bar ui basic segment grid"},[a("div",{staticClass:"ui form"},[a("div",{staticClass:"inline field"},[a("label",[t._v("Search for:")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.filterText,expression:"filterText"}],staticClass:"three wide column",attrs:{type:"text",placeholder:""},domProps:{value:t.filterText},on:{keyup:t.doFilter,input:function(e){e.target.composing||(t.filterText=e.target.value)}}}),t._v(" "),a("button",{staticClass:"btn delete icon",on:{click:t.resetFilter}},[t._v("Reset")])])])])};i._withStripped=!0;var s={data:()=>({filterText:""}),methods:{doFilter(){this.$events.fire("filter-set",this.filterText)},resetFilter(){this.filterText="",this.$events.fire("filter-reset")}}},l=a(0),n=Object(l.a)(s,i,[],!1,null,null,null);n.options.__file="src/assetbundles/retour/src/vue/VuetableFilterBar.vue";e.default=n.exports},74:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.isFixedHeader?a("div",[a("div",{staticClass:"vuetable-head-wrapper"},[a("table",{class:["vuetable",t.css.tableClass,t.css.tableHeaderClass]},[a("thead",[a("tr",[t._l(t.tableFields,function(e,i){return[e.visible?[t.isSpecialField(e.name)?["__checkbox"==t.extractName(e.name)?a("th",{key:i,class:["vuetable-th-checkbox-"+t.trackBy,e.titleClass],style:{width:e.width}},[a("input",{attrs:{type:"checkbox"},domProps:{checked:t.checkCheckboxesState(e.name)},on:{change:function(a){t.toggleAllCheckboxes(e.name,a)}}})]):t._e(),t._v(" "),"__component"==t.extractName(e.name)?a("th",{key:i,class:["vuetable-th-component-"+t.trackBy,e.titleClass,t.sortClass(e),{sortable:t.isSortable(e)}],style:{width:e.width},domProps:{innerHTML:t._s(t.renderTitle(e))},on:{click:function(a){t.orderBy(e,a)}}}):t._e(),t._v(" "),"__slot"==t.extractName(e.name)?a("th",{key:i,class:["vuetable-th-slot-"+t.extractArgs(e.name),e.titleClass,t.sortClass(e),{sortable:t.isSortable(e)}],style:{width:e.width},domProps:{innerHTML:t._s(t.renderTitle(e))},on:{click:function(a){t.orderBy(e,a)}}}):t._e(),t._v(" "),"__sequence"==t.extractName(e.name)?a("th",{key:i,class:["vuetable-th-sequence",e.titleClass||""],style:{width:e.width},domProps:{innerHTML:t._s(t.renderTitle(e))}}):t._e(),t._v(" "),t.notIn(t.extractName(e.name),["__sequence","__checkbox","__component","__slot"])?a("th",{key:i,class:["vuetable-th-"+e.name,e.titleClass||""],style:{width:e.width},domProps:{innerHTML:t._s(t.renderTitle(e))}}):t._e()]:[a("th",{key:i,class:["vuetable-th-"+e.name,e.titleClass,t.sortClass(e),{sortable:t.isSortable(e)}],style:{width:e.width},attrs:{id:"_"+e.name},domProps:{innerHTML:t._s(t.renderTitle(e))},on:{click:function(a){t.orderBy(e,a)}}})]]:t._e()]}),t._v(" "),t.scrollVisible?a("th",{staticClass:"vuetable-gutter-col",style:{width:t.scrollBarWidth}}):t._e()],2)])])]),t._v(" "),a("div",{staticClass:"vuetable-body-wrapper",style:{height:t.tableHeight}},[a("table",{class:["vuetable",t.css.tableClass,t.css.tableBodyClass]},[a("colgroup",[t._l(t.tableFields,function(e,i){return[e.visible?[a("col",{key:i,class:["vuetable-th-"+e.name,e.titleClass],style:{width:e.width},attrs:{id:"_col_"+e.name}})]:t._e()]})],2),t._v(" "),a("tbody",{staticClass:"vuetable-body"},[t._l(t.tableData,function(e,i){return[a("tr",{key:i,class:t.onRowClass(e,i),attrs:{"item-index":i,render:t.onRowChanged(e)},on:{click:function(a){t.onRowClicked(e,a)},dblclick:function(a){t.onRowDoubleClicked(e,a)}}},[t._l(t.tableFields,function(s,l){return[s.visible?[t.isSpecialField(s.name)?["__sequence"==t.extractName(s.name)?a("td",{key:l,class:["vuetable-sequence",s.dataClass],domProps:{innerHTML:t._s(t.renderSequence(i))}}):t._e(),t._v(" "),"__handle"==t.extractName(s.name)?a("td",{key:l,class:["vuetable-handle",s.dataClass],domProps:{innerHTML:t._s(t.renderIconTag(["handle-icon",t.css.handleIcon]))}}):t._e(),t._v(" "),"__checkbox"==t.extractName(s.name)?a("td",{key:l,class:["vuetable-checkboxes",s.dataClass]},[a("input",{attrs:{type:"checkbox"},domProps:{checked:t.rowSelected(e,s.name)},on:{change:function(a){t.toggleCheckbox(e,s.name,a)}}})]):t._e(),t._v(" "),"__component"===t.extractName(s.name)?a("td",{key:l,class:["vuetable-component",s.dataClass]},[a(t.extractArgs(s.name),{tag:"component",attrs:{"row-data":e,"row-index":i,"row-field":s.sortField}})],1):t._e(),t._v(" "),"__slot"===t.extractName(s.name)?a("td",{key:l,class:["vuetable-slot",s.dataClass]},[t._t(t.extractArgs(s.name),null,{rowData:e,rowIndex:i,rowField:s.sortField})],2):t._e()]:[a("td",{key:l,class:s.dataClass,domProps:{innerHTML:t._s(t.renderNormalField(s,e))},on:{click:function(a){t.onCellClicked(e,s,a)},dblclick:function(a){t.onCellDoubleClicked(e,s,a)},contextmenu:function(a){t.onCellRightClicked(e,s,a)}}})]]:t._e()]})],2),t._v(" "),t.useDetailRow?[a("transition",{key:i,attrs:{name:t.detailRowTransition}},[t.isVisibleDetailRow(e[t.trackBy])?a("tr",{class:[t.css.detailRowClass],on:{click:function(a){t.onDetailRowClick(e,a)}}},[a("td",{attrs:{colspan:t.countVisibleFields}},[a(t.detailRowComponent,{tag:"component",attrs:{"row-data":e,"row-index":i}})],1)]):t._e()])]:t._e()]}),t._v(" "),t.displayEmptyDataRow?[a("tr",[a("td",{staticClass:"vuetable-empty-result",attrs:{colspan:t.countVisibleFields},domProps:{innerHTML:t._s(t.noDataTemplate)}})])]:t._e(),t._v(" "),t.lessThanMinRows?t._l(t.blankRows,function(e){return a("tr",{key:e,staticClass:"blank-row"},[t._l(t.tableFields,function(e,i){return[e.visible?a("td",{key:i},[t._v(" ")]):t._e()]})],2)}):t._e()],2)])])]):a("table",{class:["vuetable",t.css.tableClass]},[a("thead",[a("tr",[t._l(t.tableFields,function(e,i){return[e.visible?[t.isSpecialField(e.name)?["__checkbox"==t.extractName(e.name)?a("th",{key:i,class:["vuetable-th-checkbox-"+t.trackBy,e.titleClass],style:{width:e.width}},[a("input",{attrs:{type:"checkbox"},domProps:{checked:t.checkCheckboxesState(e.name)},on:{change:function(a){t.toggleAllCheckboxes(e.name,a)}}})]):t._e(),t._v(" "),"__component"==t.extractName(e.name)?a("th",{key:i,class:["vuetable-th-component-"+t.trackBy,e.titleClass,t.sortClass(e),{sortable:t.isSortable(e)}],style:{width:e.width},domProps:{innerHTML:t._s(t.renderTitle(e))},on:{click:function(a){t.orderBy(e,a)}}}):t._e(),t._v(" "),"__slot"==t.extractName(e.name)?a("th",{key:i,class:["vuetable-th-slot-"+t.extractArgs(e.name),e.titleClass,t.sortClass(e),{sortable:t.isSortable(e)}],style:{width:e.width},domProps:{innerHTML:t._s(t.renderTitle(e))},on:{click:function(a){t.orderBy(e,a)}}}):t._e(),t._v(" "),"__sequence"==t.extractName(e.name)?a("th",{key:i,class:["vuetable-th-sequence",e.titleClass||"",t.sortClass(e)],style:{width:e.width},domProps:{innerHTML:t._s(t.renderTitle(e))}}):t._e(),t._v(" "),t.notIn(t.extractName(e.name),["__sequence","__checkbox","__component","__slot"])?a("th",{key:i,class:["vuetable-th-"+e.name,e.titleClass||"",t.sortClass(e)],style:{width:e.width},domProps:{innerHTML:t._s(t.renderTitle(e))}}):t._e()]:[a("th",{key:i,class:["vuetable-th-"+e.name,e.titleClass,t.sortClass(e),{sortable:t.isSortable(e)}],style:{width:e.width},attrs:{id:"_"+e.name},domProps:{innerHTML:t._s(t.renderTitle(e))},on:{click:function(a){t.orderBy(e,a)}}})]]:t._e()]})],2)]),t._v(" "),a("tbody",{staticClass:"vuetable-body"},[t._l(t.tableData,function(e,i){return[a("tr",{key:i,class:t.onRowClass(e,i),attrs:{"item-index":i,render:t.onRowChanged(e)},on:{dblclick:function(a){t.onRowDoubleClicked(e,a)},click:function(a){t.onRowClicked(e,a)}}},[t._l(t.tableFields,function(s,l){return[s.visible?[t.isSpecialField(s.name)?["__sequence"==t.extractName(s.name)?a("td",{key:l,class:["vuetable-sequence",s.dataClass],domProps:{innerHTML:t._s(t.renderSequence(i))}}):t._e(),t._v(" "),"__handle"==t.extractName(s.name)?a("td",{key:l,class:["vuetable-handle",s.dataClass],domProps:{innerHTML:t._s(t.renderIconTag(["handle-icon",t.css.handleIcon]))}}):t._e(),t._v(" "),"__checkbox"==t.extractName(s.name)?a("td",{key:l,class:["vuetable-checkboxes",s.dataClass]},[a("input",{attrs:{type:"checkbox"},domProps:{checked:t.rowSelected(e,s.name)},on:{change:function(a){t.toggleCheckbox(e,s.name,a)}}})]):t._e(),t._v(" "),"__component"===t.extractName(s.name)?a("td",{key:l,class:["vuetable-component",s.dataClass]},[a(t.extractArgs(s.name),{tag:"component",attrs:{"row-data":e,"row-index":i,"row-field":s.sortField}})],1):t._e(),t._v(" "),"__slot"===t.extractName(s.name)?a("td",{key:l,class:["vuetable-slot",s.dataClass]},[t._t(t.extractArgs(s.name),null,{rowData:e,rowIndex:i,rowField:s.sortField})],2):t._e()]:[t.hasCallback(s)?a("td",{key:l,class:s.dataClass,domProps:{innerHTML:t._s(t.callCallback(s,e))},on:{click:function(a){t.onCellClicked(e,s,a)},dblclick:function(a){t.onCellDoubleClicked(e,s,a)},contextmenu:function(a){t.onCellRightClicked(e,s,a)}}}):a("td",{key:l,class:s.dataClass,domProps:{innerHTML:t._s(t.getObjectValue(e,s.name,""))},on:{click:function(a){t.onCellClicked(e,s,a)},dblclick:function(a){t.onCellDoubleClicked(e,s,a)},contextmenu:function(a){t.onCellRightClicked(e,s,a)}}})]]:t._e()]})],2),t._v(" "),t.useDetailRow?[a("transition",{key:i,attrs:{name:t.detailRowTransition}},[t.isVisibleDetailRow(e[t.trackBy])?a("tr",{class:[t.css.detailRowClass],on:{click:function(a){t.onDetailRowClick(e,a)}}},[a("td",{attrs:{colspan:t.countVisibleFields}},[a(t.detailRowComponent,{tag:"component",attrs:{"row-data":e,"row-index":i}})],1)]):t._e()])]:t._e()]}),t._v(" "),t.displayEmptyDataRow?[a("tr",[a("td",{staticClass:"vuetable-empty-result",attrs:{colspan:t.countVisibleFields},domProps:{innerHTML:t._s(t.noDataTemplate)}})])]:t._e(),t._v(" "),t.lessThanMinRows?t._l(t.blankRows,function(e){return a("tr",{key:e,staticClass:"blank-row"},[t._l(t.tableFields,function(e,i){return[e.visible?a("td",{key:i},[t._v(" ")]):t._e()]})],2)}):t._e()],2)])};i._withStripped=!0;var s=a(8),l=a.n(s),n={props:{fields:{type:Array,required:!0},loadOnStart:{type:Boolean,default:!0},apiUrl:{type:String,default:""},httpMethod:{type:String,default:"get",validator:t=>["get","post"].indexOf(t)>-1},reactiveApiUrl:{type:Boolean,default:!0},apiMode:{type:Boolean,default:!0},data:{type:[Array,Object],default:null},dataTotal:{type:Number,default:0},dataManager:{type:Function,default:null},dataPath:{type:String,default:"data"},paginationPath:{type:[String],default:"links.pagination"},queryParams:{type:[Object,Function],default:()=>({sort:"sort",page:"page",perPage:"per_page"})},appendParams:{type:Object,default:()=>({})},httpOptions:{type:Object,default:()=>({})},httpFetch:{type:Function,default:null},perPage:{type:Number,default:10},initialPage:{type:Number,default:1},sortOrder:{type:Array,default:()=>[]},multiSort:{type:Boolean,default:()=>!1},tableHeight:{type:String,default:null},multiSortKey:{type:String,default:"alt"},rowClassCallback:{type:[String,Function],default:""},rowClass:{type:[String,Function],default:""},detailRowComponent:{type:String,default:""},detailRowTransition:{type:String,default:""},trackBy:{type:String,default:"id"},css:{type:Object,default:()=>({tableClass:"ui blue selectable celled stackable attached table",loadingClass:"loading",ascendingIcon:"blue chevron up icon",descendingIcon:"blue chevron down icon",ascendingClass:"sorted-asc",descendingClass:"sorted-desc",sortableIcon:"",detailRowClass:"vuetable-detail-row",handleIcon:"grey sidebar icon",tableBodyClass:"vuetable-semantic-no-top vuetable-fixed-layout",tableHeaderClass:"vuetable-fixed-layout"})},minRows:{type:Number,default:0},silent:{type:Boolean,default:!1},noDataTemplate:{type:String,default:()=>"No Data Available"},showSortIcons:{type:Boolean,default:!0}},data(){return{eventPrefix:"vuetable:",tableFields:[],tableData:null,tablePagination:null,currentPage:this.initialPage,selectedTo:[],visibleDetailRows:[],lastScrollPosition:0,scrollBarWidth:"17px",scrollVisible:!1}},mounted(){if(this.normalizeFields(),this.normalizeSortOrder(),this.isFixedHeader&&(this.scrollBarWidth=this.getScrollBarWidth()+"px"),this.$nextTick(function(){this.fireEvent("initialized",this.tableFields)}),this.loadOnStart&&this.loadData(),this.isFixedHeader){let t=this.$el.getElementsByClassName("vuetable-body-wrapper")[0];null!=t&&t.addEventListener("scroll",this.handleScroll)}},destroyed(){let t=this.$el.getElementsByClassName("vuetable-body-wrapper")[0];null!=t&&t.removeEventListener("scroll",this.handleScroll)},computed:{version:()=>VERSION,useDetailRow(){return this.tableData&&this.tableData[0]&&""!==this.detailRowComponent&&void 0===this.tableData[0][this.trackBy]?(this.warn("You need to define unique row identifier in order for detail-row feature to work. Use `track-by` prop to define one!"),!1):""!==this.detailRowComponent},countVisibleFields(){return this.tableFields.filter(function(t){return t.visible}).length},countTableData(){return null===this.tableData?0:this.tableData.length},displayEmptyDataRow(){return 0===this.countTableData&&this.noDataTemplate.length>0},lessThanMinRows(){return null===this.tableData||0===this.tableData.length||this.tableData.length<this.minRows},blankRows(){return null===this.tableData||0===this.tableData.length?this.minRows:this.tableData.length>=this.minRows?0:this.minRows-this.tableData.length},isApiMode(){return this.apiMode},isDataMode(){return!this.apiMode},isFixedHeader(){return null!=this.tableHeight}},methods:{getScrollBarWidth(){const t=document.createElement("div"),e=document.createElement("div");t.style.visibility="hidden",t.style.width="100px",e.style.width="100%",t.appendChild(e),document.body.appendChild(t);const a=t.offsetWidth;t.style.overflow="scroll";const i=e.offsetWidth;return document.body.removeChild(t),a-i},handleScroll(t){let e=t.currentTarget.scrollLeft;if(e!=this.lastScrollPosition){let t=this.$el.getElementsByClassName("vuetable-head-wrapper")[0];null!=t&&(t.scrollLeft=e),this.lastScrollPosition=e}},normalizeFields(){if(void 0===this.fields)return void this.warn('You need to provide "fields" prop.');this.tableFields=[];let t,e=this;this.fields.forEach(function(a,i){t="string"==typeof a?{name:a,title:e.setTitle(a),titleClass:"",dataClass:"",callback:null,visible:!0}:{name:a.name,width:a.width,title:void 0===a.title?e.setTitle(a.name):a.title,sortField:a.sortField,titleClass:void 0===a.titleClass?"":a.titleClass,dataClass:void 0===a.dataClass?"":a.dataClass,callback:void 0===a.callback?"":a.callback,visible:void 0===a.visible||a.visible},e.tableFields.push(t)})},setData(t){if(null!==t&&void 0!==t){if(this.fireEvent("loading"),Array.isArray(t))return this.tableData=t,void this.fireEvent("loaded");this.tableData=this.getObjectValue(t,this.dataPath,null),this.tablePagination=this.getObjectValue(t,this.paginationPath,null),this.$nextTick(function(){this.fixHeader(),this.fireEvent("pagination-data",this.tablePagination),this.fireEvent("loaded")})}},setTitle(t){return this.isSpecialField(t)?"":this.titleCase(t)},getTitle:t=>"function"==typeof t.title?t.title():void 0===t.title?t.name.replace("."," "):t.title,renderTitle(t){let e=this.getTitle(t);if(e.length>0&&this.isInCurrentSortGroup(t)||this.hasSortableIcon(t)){let a=`opacity:${this.sortIconOpacity(t)};position:relative;float:right`;return e+" "+(this.showSortIcons?this.renderIconTag(["sort-icon",this.sortIcon(t)],`style="${a}"`):"")}return e},renderSequence(t){return this.tablePagination?this.tablePagination.from+t:t},renderNormalField(t,e){return this.hasCallback(t)?this.callCallback(t,e):this.getObjectValue(e,t.name,"")},isSpecialField:t=>"__"===t.slice(0,2),titleCase:t=>t.replace(/\w+/g,function(t){return t.charAt(0).toUpperCase()+t.substr(1).toLowerCase()}),camelCase(t,e="_"){let a=this;return t.split(e).map(function(t){return a.titleCase(t)}).join("")},notIn:(t,e)=>-1===e.indexOf(t),loadData(t=this.loadSuccess,e=this.loadFailed){if(!this.isDataMode)return this.fireEvent("loading"),this.httpOptions.params=this.getAppendParams(this.getAllQueryParams()),this.fetch(this.apiUrl,this.httpOptions).then(t,e).catch(()=>e());this.callDataManager()},fetch(t,e){return this.httpFetch?this.httpFetch(t,e):l.a[this.httpMethod](t,e)},loadSuccess(t){this.fireEvent("load-success",t);let e=this.transform(t.data);this.tableData=this.getObjectValue(e,this.dataPath,null),this.tablePagination=this.getObjectValue(e,this.paginationPath,null),null===this.tablePagination&&this.warn('vuetable: pagination-path "'+this.paginationPath+'" not found. It looks like the data returned from the sever does not have pagination information or you may have set it incorrectly.\nYou can explicitly suppress this warning by setting pagination-path="".'),this.$nextTick(function(){this.fixHeader(),this.fireEvent("pagination-data",this.tablePagination),this.fireEvent("loaded")})},fixHeader(){if(!this.isFixedHeader)return;let t=this.$el.getElementsByClassName("vuetable-body-wrapper")[0];null!=t&&(t.scrollHeight>t.clientHeight?this.scrollVisible=!0:this.scrollVisible=!1)},loadFailed(t){console.error("load-error",t),this.fireEvent("load-error",t),this.fireEvent("loaded")},transform(t){return this.parentFunctionExists("transform")?this.$parent.transform.call(this.$parent,t):t},parentFunctionExists(t){return""!==t&&"function"==typeof this.$parent[t]},callParentFunction(t,e,a=null){return this.parentFunctionExists(t)?this.$parent[t].call(this.$parent,e):a},fireEvent(t,e){this.$emit(this.eventPrefix+t,e)},warn(t){this.silent||console.warn(t)},getAllQueryParams(){let t={};return"function"==typeof this.queryParams?"object"!=typeof(t=this.queryParams(this.sortOrder,this.currentPage,this.perPage))?{}:t:(t[this.queryParams.sort]=this.getSortParam(),t[this.queryParams.page]=this.currentPage,t[this.queryParams.perPage]=this.perPage,t)},getSortParam(){return this.sortOrder&&""!=this.sortOrder.field?"function"==typeof this.$parent.getSortParam?this.$parent.getSortParam.call(this.$parent,this.sortOrder):this.getDefaultSortParam():""},getDefaultSortParam(){let t="";for(let e=0;e<this.sortOrder.length;e++){t+=(void 0===this.sortOrder[e].sortField?this.sortOrder[e].field:this.sortOrder[e].sortField)+"|"+this.sortOrder[e].direction+(e+1<this.sortOrder.length?",":"")}return t},getAppendParams(t){for(let e in this.appendParams)t[e]=this.appendParams[e];return t},extractName:t=>t.split(":")[0].trim(),extractArgs:t=>t.split(":")[1],isSortable:t=>!(void 0===t.sortField),isInCurrentSortGroup(t){return!1!==this.currentSortOrderPosition(t)},hasSortableIcon(t){return this.isSortable(t)&&""!=this.css.sortableIcon},currentSortOrderPosition(t){if(!this.isSortable(t))return!1;for(let e=0;e<this.sortOrder.length;e++)if(this.fieldIsInSortOrderPosition(t,e))return e;return!1},fieldIsInSortOrderPosition(t,e){return this.sortOrder[e].field===t.name&&this.sortOrder[e].sortField===t.sortField},orderBy(t,e){if(!this.isSortable(t))return;let a=this.multiSortKey.toLowerCase()+"Key";this.multiSort&&e[a]?this.multiColumnSort(t):this.singleColumnSort(t),this.currentPage=1,(this.apiMode||this.dataManager)&&this.loadData()},multiColumnSort(t){let e=this.currentSortOrderPosition(t);!1===e?this.sortOrder.push({field:t.name,sortField:t.sortField,direction:"asc"}):"asc"===this.sortOrder[e].direction?this.sortOrder[e].direction="desc":this.sortOrder.splice(e,1)},singleColumnSort(t){0===this.sortOrder.length&&this.clearSortOrder(),this.sortOrder.splice(1),this.fieldIsInSortOrderPosition(t,0)?this.sortOrder[0].direction="asc"===this.sortOrder[0].direction?"desc":"asc":this.sortOrder[0].direction="asc",this.sortOrder[0].field=t.name,this.sortOrder[0].sortField=t.sortField},clearSortOrder(){this.sortOrder.push({field:"",sortField:"",direction:"asc"})},sortClass(t){let e="",a=this.currentSortOrderPosition(t);return!1!==a&&(e="asc"==this.sortOrder[a].direction?this.css.ascendingClass:this.css.descendingClass),e},sortIcon(t){let e=this.css.sortableIcon,a=this.currentSortOrderPosition(t);return!1!==a&&(e="asc"==this.sortOrder[a].direction?this.css.ascendingIcon:this.css.descendingIcon),e},sortIconOpacity(t){let e=.3,a=this.sortOrder.length,i=this.currentSortOrderPosition(t);return 1-a*e<.3&&(e=.7/(a-1)),1-i*e},hasCallback:t=>!!t.callback,callCallback(t,e){if(!this.hasCallback(t))return;if("function"==typeof t.callback)return t.callback(this.getObjectValue(e,t.name));let a=t.callback.split("|"),i=a.shift();if("function"==typeof this.$parent[i]){let s=this.getObjectValue(e,t.name);return a.length>0?this.$parent[i].apply(this.$parent,[s].concat(a)):this.$parent[i].call(this.$parent,s)}return null},getObjectValue(t,e,a){a=void 0===a?null:a;let i=t;if(""!=e.trim()){e.split(".").forEach(function(t){i=null!==i&&void 0!==i[t]&&null!==i[t]?i[t]:a})}return i},toggleCheckbox(t,e,a){let i=a.target.checked,s=this.trackBy;if(void 0===t[s])return void this.warn('__checkbox field: The "'+this.trackBy+'" field does not exist! Make sure the field you specify in "track-by" prop does exist.');let l=t[s];i?this.selectId(l):this.unselectId(l),this.$emit("vuetable:checkbox-toggled",i,t)},selectId(t){this.isSelectedRow(t)||this.selectedTo.push(t)},unselectId(t){this.selectedTo=this.selectedTo.filter(function(e){return e!==t})},isSelectedRow(t){return this.selectedTo.indexOf(t)>=0},rowSelected(t,e){let a=t[this.trackBy];return this.isSelectedRow(a)},checkCheckboxesState(t){if(!this.tableData)return;let e=this,a=this.trackBy,i="th.vuetable-th-checkbox-"+a+" input[type=checkbox]",s=document.querySelectorAll(i);void 0===s.forEach&&(s.forEach=function(t){[].forEach.call(s,t)});let l=this.tableData.filter(function(t){return e.selectedTo.indexOf(t[a])>=0});return l.length<=0?(s.forEach(function(t){t.indeterminate=!1}),!1):l.length<this.perPage?(s.forEach(function(t){t.indeterminate=!0}),!0):(s.forEach(function(t){t.indeterminate=!1}),!0)},toggleAllCheckboxes(t,e){let a=this,i=e.target.checked,s=this.trackBy;i?this.tableData.forEach(function(t){a.selectId(t[s])}):this.tableData.forEach(function(t){a.unselectId(t[s])}),this.$emit("vuetable:checkbox-toggled-all",i)},gotoPreviousPage(){this.currentPage>1&&(this.currentPage--,this.loadData())},gotoNextPage(){this.currentPage<this.tablePagination.last_page&&(this.currentPage++,this.loadData())},gotoPage(t){t!=this.currentPage&&t>0&&t<=this.tablePagination.last_page&&(this.currentPage=t,this.loadData())},isVisibleDetailRow(t){return this.visibleDetailRows.indexOf(t)>=0},showDetailRow(t){this.isVisibleDetailRow(t)||this.visibleDetailRows.push(t)},hideDetailRow(t){this.isVisibleDetailRow(t)&&this.visibleDetailRows.splice(this.visibleDetailRows.indexOf(t),1)},toggleDetailRow(t){this.isVisibleDetailRow(t)?this.hideDetailRow(t):this.showDetailRow(t)},showField(t){t<0||t>this.tableFields.length||(this.tableFields[t].visible=!0)},hideField(t){t<0||t>this.tableFields.length||(this.tableFields[t].visible=!1)},toggleField(t){t<0||t>this.tableFields.length||(this.tableFields[t].visible=!this.tableFields[t].visible)},renderIconTag(t,e=""){return void 0===this.css.renderIcon?`<i class="${t.join(" ")}" ${e}></i>`:this.css.renderIcon(t,e)},makePagination(t=null,e=null,a=null){return{total:t=null===t?this.dataTotal:t,per_page:e=null===e?this.perPage:e,current_page:a=null===a?this.currentPage:a,last_page:Math.ceil(t/e)||0,next_page_url:"",prev_page_url:"",from:(a-1)*e+1,to:Math.min(a*e,t)}},normalizeSortOrder(){this.sortOrder.forEach(function(t){t.sortField=t.sortField||t.field})},callDataManager(){if(null!==this.dataManager||null!==this.data)return Array.isArray(this.data)?this.setData(this.data):(this.normalizeSortOrder(),this.setData(this.dataManager?this.dataManager(this.sortOrder,this.makePagination()):this.data))},onRowClass(t,e){if(""===this.rowClassCallback)return"function"==typeof this.rowClass?this.rowClass(t,e):this.rowClass;this.warn('"row-class-callback" prop is deprecated, please use "row-class" prop instead.')},onRowChanged(t){return this.fireEvent("row-changed",t),!0},onRowClicked(t,e){return this.$emit(this.eventPrefix+"row-clicked",t,e),!0},onRowDoubleClicked(t,e){this.$emit(this.eventPrefix+"row-dblclicked",t,e)},onDetailRowClick(t,e){this.$emit(this.eventPrefix+"detail-row-clicked",t,e)},onCellClicked(t,e,a){this.$emit(this.eventPrefix+"cell-clicked",t,e,a)},onCellDoubleClicked(t,e,a){this.$emit(this.eventPrefix+"cell-dblclicked",t,e,a)},onCellRightClicked(t,e,a){this.$emit(this.eventPrefix+"cell-rightclicked",t,e,a)},changePage(t){"prev"===t?this.gotoPreviousPage():"next"===t?this.gotoNextPage():this.gotoPage(t)},reload(){return this.loadData()},refresh(){return this.currentPage=1,this.loadData()},resetData(){this.tableData=null,this.tablePagination=null,this.fireEvent("data-reset")}},watch:{multiSort(t,e){!1===t&&this.sortOrder.length>1&&(this.sortOrder.splice(1),this.loadData())},apiUrl(t,e){this.reactiveApiUrl&&t!==e&&this.refresh()},data(t,e){this.setData(t)},tableHeight(t,e){this.fixHeader()}}},r=(a(9),a(0)),o=Object(r.a)(n,i,[],!1,null,"15965e3b",null);o.options.__file="node_modules/vuetable-2/src/components/Vuetable.vue";e.default=o.exports},9:function(t,e,a){"use strict";var i=a(1);a.n(i).a}}]);
//# sourceMappingURL=styles.94637a3d2e87ab40d19c.js.map