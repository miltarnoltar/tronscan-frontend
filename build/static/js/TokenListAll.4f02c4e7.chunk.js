(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{1401:function(e,t,a){e.exports=a.p+"static/media/logo_default.22fc28d0.png"},2422:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD4AAAAoCAYAAACmTknCAAAAAXNSR0IArs4c6QAAAoNJREFUaAXtmT1oE2EYx5//NVPJUijiBy7qYh2leonQxaT2LIg4O+kiSAVBqFpQHAsqFQTBqZ0cCiIOuWhvKpIIIqKLIC46uDg5mH6E3ONzFxIud31zrWgJ77035N77P8/7Xn7Px3EfqE2VmLK3rVvZY24TG/CsZd5k3GQ8IxHIbKnn0hIM0Bvx+RD6Mc4z8UHlHNA3EL0M7Mw4Lr/Fti9eAfxFOS9iYMKYTD4dSsAqiD9GzNscYpyZ7X7O6eCEF7a78iBYpD5VOio7JTiYPheq3rXQ1ynPMlMIPmTR0smK9yzQ07a3zuQln9rgFui5XfEepc2J2+tOaU60vuCm1ONR+1/HtbOTt8D+vuj60h7fbde7H9WCsc90QbJ3OK5zfmS2uLy89ml6euS3v3EvbifCuLRZUo4oqaUe8f0nQ4G+KC0w1rMY8F6OE+DS6xPy9yd6fOUg32jcld3aeq6Z5w2aidvToAN/U+rJqCWVIcrdbsF/mLS0FQv8U2UbNH1HpX6iWn03aAB/+39MqW8ncnWnvCgXy1MqXwavFl3vsso+SPqOSl2usgfkKntEBSA3MF9VtkHTTanvVkYKrndst87V7zwm46ro+ODR2rkzYV/zpj/c766IgeGub5NHO76+j70dXXWerr7Z2tMdKwYNah6S9X5Rk/crXFJlmNfLqTHSyyGzPW7A9SrkdBqT8fQY6eWR2Yz3fUiRd2HMFs2DrR865VseplpK8AAasK4UKq+f6gTdYVGXOuiq7eoJHcBvDQ6akaeoJ53o6LhPgoOuy1uUxzrCRpl6etwCbsjnooWog67jbsYB3Ox8I9MVNsoVggv0XMFdmY8atB/XnPId7SG3APwDyyepJRx/RO8AAAAASUVORK5CYII="},3485:function(e,t,a){"use strict";a.r(t);var n,r=a(1405),l=a.n(r),c=a(1529),o=a.n(c),s=a(255),i=a.n(s),d=a(2),m=a.n(d),u=a(24),p=a(5),g=a(13),b=a(12),f=a(21),x=a(19),k=a(20),E=a(0),v=a.n(E),h=a(10),_=a(3),N=(a(16),a(23)),y=a(256),O=a(6),T=a(89),A=a(15),j=a.n(A),w=a(8),I=a(140),S=a(65),C=(a(137),a(31)),M=a(170);function R(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function z(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?R(a,!0).forEach(function(t){Object(u.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):R(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var U=Object(I.a)(n=function(e){function t(e){var n;return Object(g.a)(this,t),(n=Object(f.a)(this,Object(x.a)(t).call(this,e))).loadPage=Object(p.a)(m.a.mark(function e(){var t,a,r,l,c,o,s,i,d,u,p,g,b,f,x,k,E=arguments;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=E.length>0&&void 0!==E[0]?E[0]:1,a=E.length>1&&void 0!==E[1]?E[1]:20,n.setState({loading:!0}),r=n.state,l=r.filter,c=r.countTop,e.next=6,j.a.get(O.e+"/api/tokens/overview",{params:z({start:(t-1)*a,limit:a},l)}).catch(function(e){n.setState({loading:!1})});case 6:if(o=e.sent){e.next=9;break}return e.abrupt("return");case 9:return s=o.data,i=s.tokens,d=s.total,u=s.totalAll,p=s.all,g=s.currentWeekAll,b=s.currentWeekTotalAll,f=s.valueAtLeast,x=0,k=0,i.map(function(e,r){e.isTop?(k+=1,n.setState({countTop:k},function(){e.index=x+1+(t-1)*a-c})):(e.index=1==t?x+1+(t-1)*a:x+1+(t-1)*a-c,x++),void 0!=e.gain?(e.gain=100*e.gain,e.gain<0&&(e.color="col-red",e.gain=e.gain.toFixed(2)+"%"),e.gain>0&&(e.color="col-green",e.gain="+"+e.gain.toFixed(2)+"%"),0==e.gain&&(e.color="col-gray",e.gain="0%")):e.gain="-"}),n.setState({loading:!1,tokens:i,pagination:z({},n.state.pagination,{total:d}),total:d,totalAll:u,all:p,currentWeekAll:g,currentWeekTotalAll:b,valueAtLeast:f}),e.abrupt("return",d);case 15:case"end":return e.stop()}},e)})),n.onChange=function(e){n.setState({filter:z({},n.state.filter,{order:"desc",sort:"marketcap",filter:e.target.value,order_current:"descend"}),pagination:{current:1}},function(){return n.loadPage()})},n.handleTableChange=function(e,t,a){var r=z({},n.state.pagination);r.current=e.current,r.pageSize=e.pageSize;void 0===a.order&&(a.order="ascend"),n.setState({pagination:r,filter:z({},n.state.filter,{sort:{nrOfTokenHolders:"holderCount",gain:"gain",priceInTrx:"priceInTrx",volume24hInTrx:"volume24hInTrx",marketcap:"marketcap"}[a.columnKey]||"marketcap",order:{descend:"desc",ascend:"asc"}[a.order]||"desc",order_current:a.order})},function(){return n.loadPage(r.current,r.pageSize)})},n.customizedColumn=function(){var e=n.state,t=e.filter,r=e.valueAtLeast,l=n.props,c=l.intl,o=l.priceUSD,s=a(1401);return[{title:i()(c.formatMessage({id:"token_rank"})),dataIndex:"index",key:"index",width:"48px",align:"center",className:"ant_table _text_nowrap token-rank-wrap",render:function(e,t,n){return v.a.createElement("span",null,t.isTop?v.a.createElement("div",null,v.a.createElement("span",{className:"starbeat"},v.a.createElement("i",{className:"fas fa-star"})," "),v.a.createElement("span",{className:"star-tip"})):v.a.createElement("span",null,e),t.level>100?v.a.createElement("img",{src:a(2422)}):"")}},{title:i()(c.formatMessage({id:"token"})),dataIndex:"name",key:"name",width:"50%",render:function(e,t,a){return v.a.createElement("div",{className:"table-imgtext"},t.imgUrl?v.a.createElement("div",{style:{width:"42px",height:"42px",marginRight:"18px"}},"USDT"==t.abbr||"BTT"==t.abbr||"WIN"==t.abbr?v.a.createElement("div",{className:"token-img-top"},v.a.createElement("img",{style:{width:"42px",height:"42px"},src:t.imgUrl,onError:function(e){e.target.onerror=null,e.target.src=s}}),v.a.createElement("i",null)):v.a.createElement("img",{style:{width:"42px",height:"42px"},src:t.imgUrl,onError:function(e){e.target.onerror=null,e.target.src=s}})):v.a.createElement("div",{style:{width:"42px",height:"42px",marginRight:"18px"}},v.a.createElement("img",{style:{width:"42px",height:"42px"},src:s})),v.a.createElement("div",null,v.a.createElement("h5",null,t.isTop&&"TNYNLRkqq956bQc2buvoLbaLgh25RkJMiN"==t.contractAddress?v.a.createElement("a",{href:"javascript:;"},t.name+" ("+t.abbr+")"):v.a.createElement("div",null,"trc10"==t.tokenType&&v.a.createElement(N.f,{name:t.name,id:t.tokenId,namePlus:t.name+" ("+t.abbr+")"}),"trc20"==t.tokenType&&v.a.createElement(N.g,{name:t.name,namePlus:t.name+" ("+t.abbr+")",address:t.contractAddress}))),v.a.createElement("p",{className:"multi-line-overflow"},t.description)))}},{title:c.formatMessage({id:"price"}),dataIndex:"priceInTrx",key:"priceInTrx",sorter:!0,sortOrder:"priceInTrx"===t.sort&&t.order_current,align:"left",className:"ant_table d-none d-md-table-cell _text_nowrap",render:function(e,t,a){return e?v.a.createElement("div",{className:"d-flex flex-column"},v.a.createElement("span",null,(e*o).toFixed(6)," USD"),e&&"TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t"!=t.contractAddress?v.a.createElement("span",{className:"trx-price"},e.toFixed(6)," TRX"):""):"-"}},{title:function(){return v.a.createElement("div",null,v.a.createElement("span",{className:"mr-2"},v.a.createElement(y.a,{placement:"top",text:"gain_tip"})),i()(c.formatMessage({id:"gain"})))},sorter:!0,sortOrder:"gain"===t.sort&&t.order_current,dataIndex:"gain",key:"gain",render:function(e,t,a){return v.a.createElement("div",{className:t.color},t.gain)},align:"center",className:"ant_table d-none d-md-table-cell _text_nowrap"},{title:c.formatMessage({id:"volume_24_trx"}),dataIndex:"volume24hInTrx",key:"volume24hInTrx",align:"left",className:"ant_table",sorter:!0,sortOrder:"volume24hInTrx"===t.sort&&t.order_current,render:function(e,t,a){return e?v.a.createElement("div",{className:"d-flex flex-column"},v.a.createElement("span",null,v.a.createElement(h.c,{value:e*o,maximumFractionDigits:2})," USD"),e&&"TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t"!=t.contractAddress?v.a.createElement("span",{className:"trx-price"},v.a.createElement(h.c,{value:e,maximumFractionDigits:2})," TRX"):""):"-"}},{title:function(){var e=c.formatMessage({id:"total_supply_tip1"})+r+c.formatMessage({id:"total_supply_tip2"});return v.a.createElement("div",null,v.a.createElement("span",{className:"mr-2"},v.a.createElement(y.a,{placement:"top",text:e})),i()(c.formatMessage({id:"market_capitalization_t"})))},dataIndex:"marketcap",key:"marketcap",sorter:!0,sortOrder:"marketcap"===t.sort&&t.order_current,render:function(e,t,a){return e?v.a.createElement("div",{className:"d-flex flex-column"},v.a.createElement("span",null,v.a.createElement(h.c,{value:e*o,maximumFractionDigits:2})," USD"),e&&"TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t"!=t.contractAddress?v.a.createElement("span",{className:"trx-price"},v.a.createElement(h.c,{value:e,maximumFractionDigits:2})," TRX"):""):"-"},align:"left",className:"ant_table _text_nowrap"},{title:c.formatMessage({id:"token_holders"}),dataIndex:"nrOfTokenHolders",key:"nrOfTokenHolders",sorter:!0,sortOrder:"holderCount"===t.sort&&t.order_current,render:function(e,t,a){return e>0?v.a.createElement(h.c,{value:e}):"-"},align:"center",className:"ant_table d-none d-sm-table-cell"},{title:c.formatMessage({id:"trc20_cur_order_header_action"}),dataIndex:"abbr",key:"abbr",width:"11%",render:function(e,t,a){return v.a.createElement("div",null,"trc10"==t.tokenType&&v.a.createElement(S.a,{to:"/token/".concat(encodeURI(t.tokenId)),className:"token-details btn",style:{textTransform:"capitalize"}},Object(_.c)("details")),"trc20"==t.tokenType&&v.a.createElement(S.a,{to:"/token20/".concat(encodeURI(t.contractAddress)),className:"token-details btn",style:{textTransform:"capitalize"}},Object(_.c)("details")),O.v&&v.a.createElement("span",null,t.extra&&t.extra.url&&t.extra.desc?v.a.createElement("a",{href:t.extra.url,className:"token-active-details btn mt-2",style:{textTransform:"capitalize"}},Object(_.c)(t.extra.desc)):t.pairId?v.a.createElement(S.a,{to:"/exchange/trc20?id=".concat(t.pairId),className:"token-details btn mt-2",target:"_blank",style:{textTransform:"capitalize"}}," ",Object(_.c)("token_trade")):v.a.createElement("div",null,v.a.createElement("a",{href:"javascript:;",className:"token-disabled-exchange btn mt-2",style:{textTransform:"capitalize"},id:"trc20"==t.tokenType?"exchange_"+t.contractAddress:"exchange_"+t.tokenId,onMouseOver:function(e,a){return n.setState(Object(u.a)({},t.abbr+t.tokenId,!0))},onMouseOut:function(){return n.setState(Object(u.a)({},t.abbr+t.tokenId,!1))}},Object(_.c)("token_trade")),v.a.createElement(w.g,{placement:"top",target:"trc20"==t.tokenType?"exchange_"+t.contractAddress:"exchange_"+t.tokenId,isOpen:n.state[t.abbr+t.tokenId]}," ",v.a.createElement("span",{className:"text-capitalize"},Object(_.c)("token_does_not_support_exchange"))))))},align:"center",className:"ant_table d-sm-table-cell token-list-action"}]},n.suncustomizedColumn=function(){var e=n.state.filter,t=n.props.intl,r=a(1401);return[{title:"#",dataIndex:"index",key:"index",width:"48px",align:"center",className:"ant_table _text_nowrap",render:function(e,t,a){return v.a.createElement("span",null,t.isTop?v.a.createElement("div",null,v.a.createElement("span",{className:"starbeat"},v.a.createElement("i",{className:"fas fa-star"})," "),v.a.createElement("span",{className:"star-tip"})):v.a.createElement("span",null,e))}},{title:i()(t.formatMessage({id:"token"})),dataIndex:"name",key:"name",width:"50%",render:function(e,t,a){return v.a.createElement("div",{className:"table-imgtext"},t.imgUrl?v.a.createElement("div",{style:{width:"42px",height:"42px",marginRight:"18px"}},"USDT"==t.abbr||"BTT"==t.abbr||"WIN"==t.abbr?v.a.createElement("div",{className:"token-img-top"},v.a.createElement("img",{style:{width:"42px",height:"42px"},src:t.imgUrl,onError:function(e){e.target.onerror=null,e.target.src=r}}),v.a.createElement("i",null)):v.a.createElement("img",{style:{width:"42px",height:"42px"},src:t.imgUrl,onError:function(e){e.target.onerror=null,e.target.src=r}})):v.a.createElement("div",{style:{width:"42px",height:"42px",marginRight:"18px"}},v.a.createElement("img",{style:{width:"42px",height:"42px"},src:r})),v.a.createElement("div",null,v.a.createElement("h5",null,t.isTop&&"TNYNLRkqq956bQc2buvoLbaLgh25RkJMiN"==t.contractAddress?v.a.createElement("a",{href:"javascript:;"},t.name+" ("+t.abbr+")"):v.a.createElement("div",null,"trc10"==t.tokenType&&v.a.createElement(N.f,{name:t.name,id:t.tokenId,namePlus:t.name+" ("+t.abbr+")"}),"trc20"==t.tokenType&&v.a.createElement(N.g,{name:t.name,namePlus:t.name+" ("+t.abbr+")",address:t.contractAddress}))),v.a.createElement("p",{style:{wordBreak:"break-all"}},t.description)))}},{title:t.formatMessage({id:"DAppChain_holders"}),dataIndex:"nrOfTokenHolders",key:"nrOfTokenHolders",sorter:!0,sortOrder:"holderCount"===e.sort&&e.order_current,render:function(e,t,a){return e>0?v.a.createElement(h.c,{value:e}):"-"},align:"center",className:"ant_table d-none d-sm-table-cell"},{title:t.formatMessage({id:"trc20_cur_order_header_action"}),dataIndex:"abbr",key:"abbr",width:"10%",render:function(e,t,a){return v.a.createElement("div",null,"trc10"==t.tokenType&&v.a.createElement(S.a,{to:"/token/".concat(encodeURI(t.tokenId)),className:"token-details btn"},Object(_.c)("details")),"trc20"==t.tokenType&&v.a.createElement(S.a,{to:"/token20/".concat(encodeURI(t.contractAddress)),className:"token-details btn"},Object(_.c)("details")),O.v&&v.a.createElement("span",null,t.extra&&t.extra.url&&t.extra.desc?v.a.createElement("a",{href:t.extra.url,className:"token-active-details btn mt-2"},Object(_.c)(t.extra.desc)):t.pairId?v.a.createElement(S.a,{to:"/exchange/trc20?id=".concat(t.pairId),className:"token-details btn mt-2"}," ",Object(_.c)("token_trade")):v.a.createElement("div",null,v.a.createElement("a",{href:"javascript:;",className:"token-disabled-exchange btn mt-2",id:"trc20"==t.tokenType?"exchange_"+t.contractAddress:"exchange_"+t.tokenId,onMouseOver:function(e,a){return n.setState(Object(u.a)({},t.abbr+t.tokenId,!0))},onMouseOut:function(){return n.setState(Object(u.a)({},t.abbr+t.tokenId,!1))}},Object(_.c)("token_trade")),v.a.createElement(w.g,{placement:"top",target:"trc20"==t.tokenType?"exchange_"+t.contractAddress:"exchange_"+t.tokenId,isOpen:n.state[t.abbr+t.tokenId]}," ",v.a.createElement("span",{className:"text-capitalize"},Object(_.c)("token_does_not_support_exchange"))))))},align:"center",className:"ant_table d-sm-table-cell token-list-action"}]},n.state={tokens:[],loading:!1,total:0,totalAll:0,countTop:0,filter:{order:"desc",filter:"all",sort:"marketcap",order_current:"descend"},pagination:{showQuickJumper:!0,position:"bottom",showSizeChanger:!0,defaultPageSize:20,total:0},marketCapTip:!1,currentWeekAll:0,currentWeekTotalAll:0,valueAtLeast:0},n}return Object(k.a)(t,e),Object(b.a)(t,[{key:"componentDidMount",value:function(){this.loadPage(),this.props.loadUsdPrice()}},{key:"render",value:function(){var e=this.state,t=e.tokens,a=e.alert,n=e.loading,r=e.total,c=e.totalAll,s=e.all,i=e.currentWeekAll,d=e.currentWeekTotalAll,m=e.filter,u=this.props,p=(u.match,u.intl),g=O.v?this.customizedColumn():this.suncustomizedColumn(),b="".concat(p.formatMessage({id:"part_total"})," ").concat(r," ").concat(p.formatMessage({id:"token_unit"})),f="".concat(p.formatMessage({id:"token_list_count"})," : ").concat(r," , ").concat(p.formatMessage({id:"total_in_tronscan"})," : ").concat(c," "),x="https://poloniex.org/launchBase?utm_source=TS3";return"zh"==p.locale&&(x="https://poloniex.org/zh/launchBase?utm_source=TS3"),v.a.createElement("main",{className:"container header-overlap token_black"},a,n&&v.a.createElement("div",{className:"loading-style"},v.a.createElement(T.b,null)),v.a.createElement("div",{className:"row token-list-wrap"},v.a.createElement("div",{className:"col-md-12 table_pos trc20-ad-bg pt-5 pt-md-0"},O.v&&v.a.createElement(S.a,{to:"/tokens/create",className:"create-token-btn"},Object(_.c)("create_token")),r?v.a.createElement("div",{className:"d-md-block"},s&&O.v&&v.a.createElement("div",{className:"token-num-wrap d-flex d-sm-flex justify-content-between text-center my-3"},v.a.createElement("div",{className:"d-flex bg-white justify-content-center"},v.a.createElement("div",{className:"d-flex flex-column justify-content-center"},v.a.createElement("div",null,v.a.createElement(h.c,{value:s})),v.a.createElement("div",null,Object(_.c)("token_tron_total"))),v.a.createElement("div",null),v.a.createElement("div",{className:"d-flex flex-column justify-content-center"},v.a.createElement("div",null,v.a.createElement(h.c,{value:i})),v.a.createElement("div",null,Object(_.c)("token_week")))),v.a.createElement("div",{className:"d-flex bg-white justify-content-center"},v.a.createElement("div",{className:"d-flex flex-column justify-content-center"},v.a.createElement("div",null,v.a.createElement(h.c,{value:c})),v.a.createElement("div",null,Object(_.c)("token_scan_total"))),v.a.createElement("div",null),v.a.createElement("div",{className:"d-flex flex-column justify-content-center"},v.a.createElement("div",null,v.a.createElement(h.c,{value:d})),v.a.createElement("div",null,Object(_.c)("token_week"))))),v.a.createElement("div",{className:"d-flex justify-content-between align-items-center mb-2 filter-wrap"},v.a.createElement("div",null,v.a.createElement("div",null,s&&!O.v&&v.a.createElement("div",null,Object(_.c)("total_tron_ecosystem_tokens"),s),O.v?b:f," ",v.a.createElement("span",null,v.a.createElement(y.a,{placement:"top",text:"newly_issued_token_by_tronscan",className:"token-list-info"})))),v.a.createElement("div",{className:"d-md-flex apply-trc20 apply-all align-items-center"},v.a.createElement("div",{className:"d-flex align-items-center mb-2 mb-md-0"},v.a.createElement(o.a.Group,{size:"Small",value:m.filter,onChange:this.onChange},v.a.createElement(o.a.Button,{value:"all"},Object(_.c)("all")),v.a.createElement(o.a.Button,{value:"trc10"},"TRC10"),v.a.createElement(o.a.Button,{value:"trc20"},"TRC20")))))):"",v.a.createElement(l.a,{columns:g,rowKey:function(e,t){return t},dataSource:t,loading:n,onChange:this.handleTableChange,pagination:this.state.pagination,bordered:!0,rowClassName:function(e,t){if(e.isTop)return"trc20-star-ad"},onRow:function(e){return{onClick:function(t){e.isTop&&"TNYNLRkqq956bQc2buvoLbaLgh25RkJMiN"==e.contractAddress&&window.open(x)}}}}))))}}]),t}(E.Component))||n;var P={loadUsdPrice:M.g};t.default=Object(C.connect)(function(e){return{priceUSD:e.blockchain.usdPrice}},P)(Object(h.h)(U))}}]);