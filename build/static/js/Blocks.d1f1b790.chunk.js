(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{1445:function(e,t,a){"use strict";a.d(t,"a",function(){return k});var n=a(1450),r=a.n(n),o=a(2),i=a.n(o),c=a(30),s=a(5),l=a(15),u=a(14),d=a(20),p=a(19),m=a(21),f=a(0),b=a.n(f),g=a(16);function h(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function v(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?h(a,!0).forEach(function(t){Object(c.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):h(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var k=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e))).loadDatas=Object(s.a)(i.a.mark(function e(){var t,n,r,o,c=arguments;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=0<c.length&&void 0!==c[0]?c[0]:1,n=1<c.length&&void 0!==c[1]?c[1]:40,r=a.state.filter,e.next=5,g.b.getTokens(v({sort:"rank",limit:n,start:(t-1)*n},r));case 5:return o=e.sent,e.abrupt("return",o);case 7:case"end":return e.stop()}},e)})),a.handleTableChange=function(e,t,n){var r=v({},a.state.pagination);r.current=e.current,a.setState({pagination:r}),a.fetch(v({pageSize:e.pageSize,page:e.current,sortField:n.field,sortOrder:n.order},t))},a.fetch=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};a.setState({loading:!0}),a.props.onPageChange&&a.props.onPageChange(e.page,e.pageSize),a.setState({loading:!1})},a.onInputChange=function(e){a.setState({searchText:e.target.value})},a.onReset=function(){a.setState({searchText:""},function(){a.onSearch()})},a.onSearch=function(){var e=a.props,t=e.tableData,n=(e.filterDropdownVisible,a.state.searchText),r=new RegExp(n,"gi");a.setState({filterDropdownVisible:!1,filtered:!!n,data:t.map(function(e){return e.name.match(r)?v({},e,{name:b.a.createElement("span",null," ",e.name.split(new RegExp("(?<=".concat(n,")|(?=").concat(n,")"),"i")).map(function(e,t){return e.toLowerCase()===n.toLowerCase()?b.a.createElement("span",{key:t,className:"highlight"}," ",e," "):e})," ")}):null}).filter(function(e){return!!e})})},a.setColumn=function(e){function t(e){return function(t,a){return t[e]>a[e]?1:t[e]<a[e]?-1:0}}var a={},n=[],r=!0,o=!1,i=void 0;try{for(var c,s=e[Symbol.iterator]();!(r=(c=s.next()).done);r=!0){var l=c.value;if(l.sorter&&!l.filterDropdown){var u={sorter:t(l.key)};n.push(v({},l,{},u))}else if(!l.sorter&&l.filterDropdown){var d=v({},a);n.push(v({},l,{},d))}else if(l.sorter&&l.filterDropdown){var p=v({sorter:t(l.key)},a);n.push(v({},l,{},p))}else n.push(l)}}catch(e){o=!0,i=e}finally{try{r||null==s.return||s.return()}finally{if(o)throw i}}return n},a.state={filterDropdownVisible:!1,data:[],searchText:"",filtered:!1,pagination:{showQuickJumper:!0,position:e.position||"both",showSizeChanger:!0,defaultPageSize:20,current:e.current||1},loading:!1},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){}},{key:"componentDidUpdate",value:function(e){var t=this.props.current,a=this.state.pagination;e.current!=t&&this.setState({pagination:v({},a,{current:t})})}},{key:"render",value:function(){var e=this.props,t=e.total,a=e.loading,n=e.data,o=e.column,i=e.bordered,c=e.pagination,s=void 0===c||c,l=e.scroll,u=e.Footer,d=e.locale,p=e.addr,m=e.transfers,f=e.nopadding,g=(e.contractAddress,e.isPaddingTop,this.setColumn(o)),h=s?v({total:t},this.state.pagination):s;return b.a.createElement("div",null," ",p?b.a.createElement("div",{className:"card table_pos table_pos_addr "+(0==n.length?"table_pos_addr_data":"")+("address"==m?" transfer-mt-100":" transfer-pt-100")+(f?" transfer-mp-0":"")},b.a.createElement(r.a,{bordered:i,columns:g,rowKey:function(e,t){return t},dataSource:n,locale:d,scroll:l,footer:u,pagination:h,loading:a,onChange:this.handleTableChange})," "):b.a.createElement("div",{className:"card table_pos"},b.a.createElement(r.a,{bordered:i,columns:g,footer:u,rowKey:function(e,t){return t},dataSource:n,locale:d,scroll:l,pagination:h,loading:a,onChange:this.handleTableChange})," ")," ")}}]),t}(f.Component)},1478:function(e,t,a){"use strict";var n=a(15),r=a(14),o=a(20),i=a(19),c=a(21),s=a(0),l=a.n(s),u=a(10),d=a(1479),p=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(o.a)(this,Object(i.a)(t).call(this,e))).state={time:e.time,newTime:Object(d.d)(e.time),timer:null},a}return Object(c.a)(t,e),Object(r.a)(t,[{key:"componentWillMount",value:function(){this.updateTime()}},{key:"updateTime",value:function(){var e=this,t=setInterval(function(){e.setState({newTime:Object(d.d)(e.props.time)})},1e3);this.setState({timer:t})}},{key:"componentWillUnmount",value:function(){clearInterval(this.state.timer)}},{key:"render",value:function(){var e=this.state.newTime;return l.a.createElement("div",{className:"token_black table_pos"},l.a.createElement("div",null,e))}}]),t}(l.a.Component);t.a=Object(u.h)(p)},1479:function(e,t,a){"use strict";a.d(t,"a",function(){return o}),a.d(t,"d",function(){return c}),a.d(t,"b",function(){return s}),a.d(t,"c",function(){return l});var n=a(266),r=a.n(n);function o(e){var t=e.indexOf("T"),a=e.indexOf("Z"),n=e.substr(0,t),r=e.substr(t+1,a-t-1),o=n.replace(/\-/g,"/")+" "+r,i=new Date(Date.parse(o));return i=i.getTime(),i/=1e3,i+=28800,new Date(1e3*parseInt(i)).toLocaleDatetimeObj()+" "+new Date(1e3*parseInt(i)).totimeObj().match(/\d{2}:\d{2}:\d{2}/)[0]}function i(e,t,a,n){var r=t[n[a+1]]-e[n[a]].unit*t[n[a]],o=1<t[n[a]]?e[n[a]].plural:e[n[a]].odd,i=1<r?e[n[a+1]].plural:e[n[a+1]].odd,c=t[n[a]],s=r;return{firstTime:c,secondTime:s,firstUnit:o,secondUnit:i,string:s&&0<s?"".concat(c).concat(o," ").concat(s).concat(i):"".concat(c," ").concat(o)}}function c(e){return function(e){var t=r()(e),a=r()(),n="",o={day:{key:"days",plural:"days",odd:"day",unit:24},hour:{key:"hours",plural:"hrs",odd:"hr",unit:60},minute:{key:"minutes",plural:"mins",odd:"min",unit:60},second:{key:"seconds",plural:"secs",odd:"sec"}},c={};for(var s in o)c[s]=a.diff(t,o[s].key);var l=["day","hour","minute","second"],u="",d="";return 1<=c[l[0]]?n=i(o,c,0,l):1<=c[l[1]]?n=i(o,c,1,l):1<=c[l[2]]?n=i(o,c,2,l):(u=1<c[l[3]]?o[l[3]].plural:o[l[3]].odd,n={firstTime:d=c[l[3]],secondTime:0,firstUnit:u,secondUnit:null,string:d<1?"less than 1sec":"".concat(d).concat(u)}),n}(e).string+" ago"}function s(){var e=window.performance;if(e){var t=e.timing,a={};return a.loadPage=t.loadEventEnd-t.navigationStart,a.domReady=t.domContentLoadedEventEnd-t.navigationStart,a.redirect=t.redirectEnd-t.redirectStart,a.lookupDomain=t.domainLookupEnd-t.domainLookupStart,a.ttfb=t.responseStart-t.navigationStart,a.request=t.responseEnd-t.requestStart,a.loadEvent=t.loadEventEnd-t.loadEventStart,a.appcache=t.domainLookupStart-t.fetchStart,a.unloadEvent=t.unloadEventEnd-t.unloadEventStart,a.connect=t.connectEnd-t.connectStart,a}console.log("\u4f60\u7684\u6d4f\u89c8\u5668\u4e0d\u652f\u6301 performance \u63a5\u53e3")}function l(){var e=[];return window.performance.getEntries().forEach(function(t,a){var n={};n.Type=t.initiatorType,"first-paint"==t.name&&(n.Type="first-paint"),n.tSize=t.transferSize,n.sTime=parseInt(t.startTime),n.name=t.name,n.dur=parseInt(t.duration),n.rStart=parseInt(t.requestStart),e.push(n)}),e}},1506:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAABGdBTUEAALGPC/xhBQAAA9RJREFUWAnNmc9vG0UUx78zsxsbh0iJ1fyASIRUSBwoN86Vqt4QAgI0nJC4JeKARCu1gnDwpUJCHLhy4tJTWqUcuMAB/gFOICGEECVCgfxAsZGIieOdeX1vnfXaztpe/0jsJ9k7M/vem4/f7vx6VuhXvixkMZmbhrE5eNpHpTIBY/zQnbVVZDInCFwVnjuCP1XCy+9X+ulK9WT0wxc+fj+Yg6dm4Cjbky28/+GCEoqz+1hbq6a1TQe4uWmAXxdg1DyIdFrniXpKOZx4uzDLe1hdtYk6DY3dAb/+ZAZltwRNXoPd4EXtVaEy21j5oNTJGUemjRApvOAvwtIzUBgsakldkDOgah5vXydsfvdfkoq0JUeQChpf5ZZhT2baGQ61XZlD/FT5A4WCa/V7NjISuYuEEyKyebyYebYVTupnH7E8VtjZJOXzbaMnkh53cwRlQGg8db4gHbwTLeJhYbpRIwaUqURG66iFskuQMXAq9QIyj+aHPpVEvfRydYGPLX8+MqkBygoRBAtR48ivpBfwfSGcd2uAsnwNukKk+VWOl0iFXHdVa3DohwO1Bihr63mLUrcY7ls49Q2gr3btztaYFGRXMuVd6WowiAKpj9n8tboLpX4B3Dv1eruCC37U4ZapncIw2lvhxCe5f1K59iandbifS6Xdh1ISHGifPX2WyltwPKnDzWYq7R6V2sGRWed3cSeVN8/4OtwJp9JmJc07Z9J3QOoeV95ta9YJTts/29q13nDa98JtOlHrreS6w1v8AvGHheh5hpyDcp82KQ8LTpwayxHsSahpnWTKGxzR23UXw4Q7depBDjhaZ+qddCoY8wCBfZVVLsVqISRXaYK/4qkkVOABIe9cL481dsybKlPV4emrsbFT2QYHULTOKi3TBEMOG044+FSow6OhVNLLdjJko4MBIxe50pYBrSlH9R6uHSCHBCcwXvZI46jc8VTVATqCbDzjFgd651o7C45KtUPT1t0rvR/ET71p9RwcbrL9v3xu/pynn73WfvqqO13G6kc/1866ARX73uo7+o0B3mN7mRv7Ykk0MszEUpsHL3M6Qk78YyPGIl89iAFf4lyJx+mIcRHldnGtEMSAUqpwrsSpsHGknJISeaNaf4/jpU4SOTm9PVI46Vwd8+wQZxhiQLn5yodFHpF/S3EkotQOVgpN014zoFDd2PgLZiIcQRcKKfmZNzfOBOcsoFKE18uPLhQySh4lRCQ5uyWKkkS6f/fpvufHhM4Sm+SxJkQu0m0PGGmMOIHZHVBAxzoFHEVSrmObRG+EjMpp/4awlTKezBf7/RviMUwweV8zgtReAAAAAElFTkSuQmCC"},1507:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAABGdBTUEAALGPC/xhBQAABBhJREFUWAnNWUtPGlEUZmZ4ikQwFGiN0K7qot250MT0J7Qb665rTbsxNGlddOHOTWNMXOmqa+0faNOFTUx04aqbsmik2Gh9oICCPIZHvzPhkplhgJkBpCRw75x7zrnffPeecx9wFpOf5eVlZy6X85bL5SEbPqIo2mu1mo3ccRwnQlSCTHS5XLmbm5v0+vp60UxXnBGjjY0NWywWCwiC4KtUKk4jttDN45vGS51vbm6Kem11Adza2hL29vZCYCgIdni9zrX04KNqt9tP4/H42fb2dkVLRy7rCHBpaclXKBQiAGaVG3Zbp2lQrVYTa2tr6Xa+hFaNeFPu+vp6DEMZ7pa1Fn0I8Ds6NTVV29/fz7bQsWgyiADgMVceIQB8rQx7LL8aGRn5jX6rar9N84mYu2NwhGk0k8k8VIOj56YhpmHF3LinpdxnmUtruBUMUkAAxP0+A2npHnNybHFx0StXaACkVELRKm8cRJ3n+QjFAOu7UTk4OKAc19NUwjoxUiIGbOl0OshsJIC0QpRKpRATDroEiyGwKJElAaTlq0+5TvGuHo/Hh1VkSCHUeACLAgiTAlUCSGurhl5PRZFI5G0gEPg6Pj7+JRgMPuvkvFgsSpg4UOlEDnrSyaCb9nA4/AG7mxfMBxiKHR4evmLPrUok7x+0YijCupWyWbkaHPlBnk3q8ZfNZr087ef0KJvR0QIHP+eXl5cfdfpz87TZ1KlsSK0NuAVsYI/1OAPTNivthPUok47T6bSFQqEoguop7L4dHR190rJtBw457o+WjZaMciJPP1qNWjK/3z8LcLNoewzi3yAy36n1egWO/FqtVltjJVF3pPUMA0VA4fmlHGQvwbH+rUjQdD5wMEG7EpP7M3LYc7DuZ3p1kBbI7PJUUm+ngFgwMqzML5UIYJGCpCQXtqtjcl+kUqkFvJQiTRDIXoMjHEQeT0fDdqDUbWAkoQVSpdcVc8wX1mSRx9vfMoHesgPInoCrY8nxbrc7rReYXI+BhEw+Aqlu5pzcP9WHh4fTws7OTnlmZmYUk9zwXjCfz2eQdr5jhxJBUv2JoX+PgDhRd2TmGcN7u7KyciqBwtEyBSemtvrJZPIXvq/NgGhn43A4CJNFyoMTExPnYLDpyNfOQT/bEL0VjMpFA+D8/LxI1xH97NSIb0yXU2wDyw2AVJmcnDwDi5LQiLNe61Lu83q9Z8xvY6mbm5urYDOQYA2DKsFeAuw1ppvi4L67u1uYnp6m6xDPIABiBI9xmaRYpRoMMkCrq6snSN5SBDHZHZVXAPdX3VcTQMyBGpJ3/I5BSpdHanD0rHm7RQ2gm4tGow9QNZUfyYeeT31Ym5hjti0BMoVBX2B2BEhA/+srYMYklf/tJbocJKvTgZ/O1J3+hqDtHG7NUmb/hvgH1qMV7a6f7wwAAAAASUVORK5CYII="},1528:function(e,t,a){"use strict";var n=a(15),r=a(14),o=a(20),i=a(19),c=a(21),s=a(0),l=a.n(s),u=a(10),d=a(3),p=a(268),m=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(o.a)(this,Object(i.a)(t).call(this,e))).state={},a}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props,t=e.total,a=e.rangeTotal,n=e.typeText,r=e.common,o=void 0!==r&&r,i=e.intl,c=e.markName,u=void 0===c?"table-question-mark":c,m=e.top,f=void 0===m?"26px":m,b=e.isQuestionMark,g=void 0===b||b,h=e.selected,v=i.formatMessage({id:"view_total"})+" "+a+" "+i.formatMessage({id:n}),k=i.formatMessage({id:"view_total"})+" "+a+" "+i.formatMessage({id:n})+"<br/>("+i.formatMessage({id:"table_info_big"})+")",A=1e4<a?k:v,w=i.formatMessage({id:"table_info_new_tip"});return l.a.createElement(s.Fragment,null,h?l.a.createElement("div",{className:"table_pos_info d-none d-md-block",style:{left:"auto",top:f}},0!==t?l.a.createElement("div",null,Object(d.c)("a_totle")," ",t," ",Object(d.c)(n),g?l.a.createElement("span",{className:"ml-1"},l.a.createElement(p.a,{placement:"top",info:i.formatMessage({id:"select_tip"})})):"",l.a.createElement("br",null),l.a.createElement("span",null,Object(d.d)("date_number_tip",{total:a}),2e3<a?l.a.createElement("span",null,", ",Object(d.c)("date_list_tip")):"")):l.a.createElement("span",null,Object(d.c)("a_totle")," ",t," ",Object(d.c)(n))):o?l.a.createElement("div",{className:"table_pos_info d-none d-md-block",style:{left:"auto",top:f}},A,l.a.createElement("span",{className:"ml-1"},l.a.createElement(p.a,{placement:"top",text:"to_provide_a_better_experience"}))):l.a.createElement("div",{className:"table_pos_info d-none d-md-block",style:{left:"auto",top:f}},1e4<a?l.a.createElement("div",null,Object(d.c)("view_total")," ",a," ",Object(d.c)(n),g?l.a.createElement(p.a,{placement:"top",info:w}):"",l.a.createElement("br",null)," ",l.a.createElement("span",null,"(",Object(d.c)("table_info_big1")),l.a.createElement("span",null,t),l.a.createElement("span",null,Object(d.c)("table_info_big2"),")")):l.a.createElement("span",null,Object(d.c)("view_total")," ",a," ",Object(d.c)(n)),l.a.createElement("span",{className:1e4<a?u:"table-question-mark-small"})))}}]),t}(l.a.Component);t.a=Object(u.h)(m)},3483:function(e,t,a){"use strict";a.r(t);var n=a(267),r=a.n(n),o=a(2),i=a.n(o),c=a(205),s=a(5),l=a(15),u=a(14),d=a(20),p=a(19),m=a(21),f=a(1531),b=a.n(f),g=a(0),h=a.n(g),v=a(383),k=a(29),A=(a(266),a(3)),w=a(10),E=a(16),O=a(23),y=a(1445),j=a(92),S=a(1528),T=a(1478),C=(a(9),b.a.RangePicker,function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(d.a)(this,Object(p.a)(t).call(this))).onChange=function(t,a){e.loadBlocks(t,a)},e.loadBlocks=Object(s.a)(i.a.mark(function t(){var a,n,r,o,s,l,u,d,p,m,f=arguments;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a=0<f.length&&void 0!==f[0]?f[0]:1,n=1<f.length&&void 0!==f[1]?f[1]:20,(r=e.props).location,(o=r.match).params.date,parseInt(o.params.date),e.setState({loading:!0,page:a,pageSize:n}),t.next=8,Promise.all([E.b.getBlocks({limit:n,start:(a-1)*n,sort:"-number",start_timestamp:e.start,end_timestamp:e.end}),E.b.getBlocks({limit:0})]).catch(function(e){console.log("error:"+e)});case 8:s=t.sent,l=Object(c.a)(s,2),u=l[0].blocks,d=l[1],p=d.total,m=d.rangeTotal,e.setState({loading:!1,blocks:u,total:p,rangeTotal:m});case 11:case"end":return t.stop()}},t)})),e.setProducedName=function(e){return e.witnessName?h.a.createElement("span",null,e.witnessName):e.number?h.a.createElement("span",null,e.witnessAddress):h.a.createElement("span",null)},e.customizedColumn=function(){var t=e.props.intl;return[{title:r()(t.formatMessage({id:"height"})),dataIndex:"number",key:"number",align:"center",className:"ant_table",width:"12%",render:function(e){return h.a.createElement(O.b,{number:e})}},{title:r()(t.formatMessage({id:"age"})),dataIndex:"timestamp",key:"timestamp",align:"left",className:"ant_table",render:function(e){return h.a.createElement(T.a,{time:e})}},{title:r()(t.formatMessage({id:"status"})),dataIndex:"status",key:"status",align:"left",render:function(e,t){return h.a.createElement("span",null,t.confirmed?h.a.createElement("span",null,h.a.createElement("img",{style:{width:"20px",height:"20px"},src:a(1506)})," ",Object(A.c)("full_node_version_confirmed")):h.a.createElement("span",null,h.a.createElement("img",{style:{width:"20px",height:"20px"},src:a(1507)})," ",Object(A.c)("full_node_version_unconfirmed")))}},{title:r()(t.formatMessage({id:"transactions"})),dataIndex:"nrOfTrx",key:"nrOfTrx",align:"center",render:function(e){return h.a.createElement(w.c,{value:e})}},{title:r()(t.formatMessage({id:"produced_by"})),dataIndex:"witnessName",key:"witnessName",align:"left",width:"40%",className:"ant_table",render:function(t,a){return h.a.createElement(O.a,{address:a.witnessAddress},e.setProducedName(a))}},{title:r()(t.formatMessage({id:"bytes"})),dataIndex:"size",key:"size",align:"center",className:"ant_table",render:function(e){return h.a.createElement(w.c,{value:e})}}]},e.start="",e.end="",e.state={loading:!1,blocks:[],total:0},e}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.loadBlocks()}},{key:"componentDidUpdate",value:function(){}},{key:"onDateOk",value:function(e,t){this.start=e.valueOf(),this.end=t.valueOf();var a=this.state,n=a.page,r=a.pageSize;this.loadBlocks(n,r)}},{key:"render",value:function(){var e=this,t=this.state,a=t.blocks,n=t.total,r=t.rangeTotal,o=t.loading,i=(t.page,t.pageSize,this.props),c=(i.match,i.intl,this.customizedColumn());return h.a.createElement("main",{className:"container header-overlap pb-3 token_black"},o&&h.a.createElement("div",{className:"loading-style"},h.a.createElement(j.b,null)),h.a.createElement("div",{className:"row"},h.a.createElement("div",{className:"col-md-12 table_pos"},n?h.a.createElement(S.a,{total:n,rangeTotal:r,isQuestionMark:!1,typeText:"block_unit"}):"",h.a.createElement(y.a,{bordered:!0,loading:o,column:c,data:a,total:n,onPageChange:function(t,a){e.loadBlocks(t,a)}}))))}}]),t}(h.a.Component)),x={loadTokens:v.b};t.default=Object(k.connect)(function(e){return{}},x)(Object(w.h)(C))}}]);