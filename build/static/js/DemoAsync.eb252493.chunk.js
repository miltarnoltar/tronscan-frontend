webpackJsonp([14],{1507:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,a){function n(r,o){try{var l=t[r](o),i=l.value}catch(e){return void a(e)}if(!l.done)return Promise.resolve(i).then(function(e){n("next",e)},function(e){n("throw",e)});e(i)}return n("next")})}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function s(e){return{}}Object.defineProperty(t,"__esModule",{value:!0});var u=a(10),f=n(u),A=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),d=a(0),v=n(d),m=a(17),p=a(9),g=a(268),h=n(g),y=a(14),w=a(75),b=a(18),C=a(2050),E=a(23),x=n(E),P=function(e){function t(){l(this,t);var e=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={volume:0,previousVolume:0,totalAccounts:0,previousTotalAccounts:0,transactionLastDay:0,previousTransactionLastDay:0,txOverviewStats:null},e}return c(t,e),A(t,[{key:"load",value:function(){function e(){return t.apply(this,arguments)}var t=o(f.default.mark(function e(){var t,a,n,r,o,l,i,c;return f.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.default.get("https://api.coinmarketcap.com/v1/ticker/tron/");case 2:return t=e.sent,a=t.data[0]["24h_volume_usd"],e.next=6,y.Client.getAccounts();case 6:return n=e.sent,e.next=9,y.Client.getTxOverviewStats();case 9:r=e.sent,o=r.txOverviewStats,l=[];for(i in o)c=parseInt(i),0===c?l.push(o[c]):l.push({date:o[c].date,totalTransaction:o[c].totalTransaction-o[c-1].totalTransaction,avgBlockTime:o[c].avgBlockTime,avgBlockSize:o[c].avgBlockSize,totalBlockCount:o[c].totalBlockCount-o[c-1].totalBlockCount,newAddressSeen:o[c].newAddressSeen});this.setState(function(e){return{volume:a,previousVolume:e.volume,transactionLastDay:l[l.length-1].totalTransaction,previousTransactionLastDay:e.transactionLastDay,txOverviewStats:l}});case 14:case"end":return e.stop()}},e,this)}));return e}()},{key:"loadAccount",value:function(){function e(){return t.apply(this,arguments)}var t=o(f.default.mark(function e(){var t;return f.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.Client.getAccounts();case 2:t=e.sent,this.setState(function(e){return{totalAccounts:t.total,previousTotalAccounts:e.totalAccounts}});case 4:case"end":return e.stop()}},e,this)}));return e}()},{key:"componentDidMount",value:function(){var e=this;this.load(),this.loadAccount(),this.props.setInterval(function(){e.load()},36e5),this.props.setInterval(function(){e.loadAccount()},1e4)}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){var e,t,n,o=this.props.intl,l=this.state,i=l.txOverviewStats,c=l.volume,s=l.totalAccounts,u=l.transactionLastDay;l.previousVolume,l.previousTotalAccounts,l.previousTransactionLastDay,document.getElementsByTagName("body")[0].style.height="95%";var f=.65*window.innerHeight;return window.innerWidth,v.default.createElement("main",{className:"home pb-0"},v.default.createElement("div",{className:"pb-5 mt-5"},v.default.createElement("div",{className:"container-fluid",style:{paddingLeft:"5%",paddingRight:"5%"}},v.default.createElement("div",{className:"row",style:{height:"150px"}},v.default.createElement("div",{className:"col-md-4 mt-3 mt-md-0"},v.default.createElement("div",{className:"card h-100 widget-icon"},v.default.createElement("div",{className:"card-body",style:{lineHeight:"50px",display:"flex"}},v.default.createElement("img",{src:a(1685),style:(e={float:"left",width:"100px",height:"100px"},r(e,"float","left"),r(e,"marginTop","5px"),r(e,"marginRight","20px"),r(e,"marginLeft","10px"),e)}),v.default.createElement("div",null,v.default.createElement("strong",{style:{whiteSpace:"nowrap"}},"TRON Transactions Last Day"),v.default.createElement("h1",{className:"text-danger"},v.default.createElement(p.FormattedNumber,{value:u})))))),v.default.createElement("div",{className:"col-md-4 mt-3 mt-md-0"},v.default.createElement("div",{className:"card h-100 widget-icon"},v.default.createElement("div",{className:"card-body",style:{lineHeight:"50px",display:"flex"}},v.default.createElement("img",{src:a(1686),style:(t={float:"left",width:"100px",height:"100px"},r(t,"float","left"),r(t,"marginTop","5px"),r(t,"marginRight","20px"),r(t,"marginLeft","10px"),t)}),v.default.createElement("div",null,v.default.createElement("strong",{style:{whiteSpace:"nowrap"}},"Total Accounts"),v.default.createElement("h1",{className:"text-danger"},v.default.createElement(h.default,{redraw:!0,separator:",",start:0,end:s,duration:1})))))),v.default.createElement("div",{className:"col-md-4 mt-3 mt-md-0"},v.default.createElement("div",{className:"card h-100 widget-icon"},v.default.createElement("div",{className:"card-body",style:{lineHeight:"50px",display:"flex"}},v.default.createElement("img",{src:a(1687),style:(n={float:"left",width:"100px",height:"100px"},r(n,"float","left"),r(n,"marginTop","5px"),r(n,"marginRight","20px"),r(n,"marginLeft","10px"),n)}),v.default.createElement("div",null,v.default.createElement("strong",{style:{whiteSpace:"nowrap"}},"Volume (24H)\uff08$\uff09"),v.default.createElement("h1",{className:"text-danger"},v.default.createElement(h.default,{redraw:!0,separator:",",start:0,end:c,duration:1}))))))),v.default.createElement("div",{className:"row mt-4"},v.default.createElement("div",{className:"col-md-12 mt-3 mt-md-0 "},v.default.createElement("div",{className:"card"},v.default.createElement("div",{className:"card-body"},v.default.createElement("div",{style:{height:f}},null===i?v.default.createElement(b.TronLoader,null):v.default.createElement(C.LineReactTx,{style:{height:f},data:i,intl:o,source:"home"})))))))))}}]),t}(d.Component),B={};t.default=(0,m.connect)(s,B)((0,w.withTimers)((0,p.injectIntl)(P)))},1685:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAACgBAMAAAB54XoeAAAAJ1BMVEUAAAD/mWbzckrzckv2cUzzckn0ckr0c0rzcUn/gID////zcUn4t6MY/FJrAAAACnRSTlMABdlVUdylivMCndcbOQAAAMpJREFUeF7t27EJwlAYReErOICNOwj2NjY2DiC4gaUTiJ2tA7iDdgoqedlAhxJTpAhYCAcEOad6pPgg/f2T9CajgrRbDfJuXrCWSXIoYJskWxK8Jf2CNsuQBReZsuAlaxa8ZsyC5+xZ8J4C9wNQUFBQUFBQUFBQULA6Np0gUFBQUFBQULD9KthNULB+Nj0+g9/8XOfJg4KCgq3yP6CgoKCgoCCZoKCgoKCgoKCgoCA+Tsbn0/jAG5+g4yN5fMZPHxrgpxD8sQZ+TvIClGkJix92qlcAAAAASUVORK5CYII="},1686:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAACgCAMAAAC8EZcfAAAAclBMVEUAAABO00RN0kRN0kNO0kVP00Vm/2ZM0URN0kOA/4Bi11v///+m6KFX1E9u2mZM0UPp+ee87rne99yE337p+ejT9NF53XL0/PSP4oqx663I8cWb5Zbd9tyl6KHS89DH8cT0/POw66y87ria5ZWD33143HFMEu2kAAAACnRSTlMAiqXzVVEF2dwCGNUxmAAAA1ZJREFUeAHMwccBw0AMAzCq617cf9oU28kMBHDp9AkKifFs/NVS0BZuxyjKDr6MsgwfRWEF9FLYNpLSEk5pjqG0QVBagOLe7d1Xr90gEATgd5bi3k5P+f9/MbGJhEN8PGksXGnnKbd/Eh4gFrIFKEABClCAAhSgAAUoQAEKUIACFKAABShAAQpQgAL88ED15fa4X7VzQ3V/3IbCgF9fFW1ZgUQ0WuecKQWobl4XgM1qs9fnSxUAVJ/IJwCXzfdcP55zA82NKAbW6xcmWjPazMChohjo493NOsSmzQd8ER0D/bD3P4b6YfIAzZWOgeZOa7ahbp9EdLX8QN+CQ6Dy8Eu4FDsGIPIFoPJfmMJQNzxDjH1hovb1NQ8/1KvPWl6gqegM2Nhwjc5+qJ+WExj343AlCUO9zTqVYQTOdAYM9aVxCJfihQ/Y0hlQ7+obhnpjMwHN8wzoovpa75sYS6LpFBjV1w/1tt61PEBF58CovmHWudLAAqwBMK7vbqjvHEBF50AV13e/P7QMwBkAh8P6Tp7NAawg8KC+n8P+MDWwJQxcovqG/SEDsMbAeM+/3x/a5MAKAvf1VfH+8JkaqAgBD/b8+/2hTQycIPB9fc3KviQGagQM9b3s6htmnToxcAHAUN94z2+rMNQJgT0E2uP6DmGBSQp8QuAQ1zfeH6YFEgQq/T3blHzRa9qt/HqLcZmBeK3NC+ysKxUYytreQBIDx/e+2vglDiTbNDP7eQ+lyzVRT36tgOmzLHV+ArbQx7DUte/ra59Qx7BZUG/rO9FvxSYGug7VF8SlBs6gviBLcuAA6gsyJQe6Dtf3JCY9UP/ki+qLUvPe+ojri6N4bx4tUX1het7bb3VUXxzLegMT1xdfgWmApttuukT1xRkVE9ANR/XFaR0X0GlcX7yIpAS6g/qiNIYRCOoL/sPHA1x4fH8PtN3f+3iG2DQMPgAEwuW3+6EcOzAsKTi1yXcspcG8sc168kiPwDebzEejzCmxVgUcLjOX7ljXaVXK8Tyrm1909VDWAUcz6LrvOyLq+1q3Ro6Ipo4ABShAAQpQgAIUoAAFKEABClCAAhSgAAUoQAEKUIDFP6y4+Mc9F//A7OIfOV78Q9uLf+x9+S8OKP/VC8W/vKLs1398A1MmueDixq7MAAAAAElFTkSuQmCC"},1687:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAACgCAMAAAC8EZcfAAABQVBMVEUAAABBlfdClPdClPdClvZmmf9DlvhClPdCl/mA//////9BlPbo8v1XoPdClPbz+P7p8v1Flvbn8f3B3PxmqPf+/v5QnPbD3fzF3vz2+v5nqfenzfppqvfH3/z2+f6jy/qlzPr3+v7J4Pz0+f6hyvpkqPdsrPjK4fypzvpRnfZMmvZurfjN4vxOm/ZLmfZvrvjO4/zy9/6cx/pKmfZyr/hPm/bx9/6bxvpJmfZzsPjT5vzw9v6YxfpJmPZ1sfjU5/zv9v6XxPpImPagyfrW5/3t9f6Vw/lHl/Z5s/jX6P3t9P6TwvlGl/Z7tPjZ6v3r9P6SwflGlvZ9tfjb6v3q8/6PwPlrq/h+tvjc6/2Ov/lNm/aBuPne7P13sviNvvlElvaCuPnf7f2eyPqKvflDlfas0Puz1PuHu/nl8P2WxPrQ5PxGbkzvAAAACnRSTlMA86XZVQWK3FEC31fJTwAAAadJREFUeAHM0QcBQ1EQAjBuvoF/vX+3GoiF4FHpYRRi4Vn4m4OCxsRrNUX1wq0pq59fCptADQobhaS0hFOaIygtYJRmoLizvXtWlCiKwSjcZzzXtm3btm28fz/X5tHeKdbq0n1P8AcgQIAAAWoOIECAAAECBOgggAABAgQIECBAgAAr0uLVNXqB6VkZIlKSl6kTmJstz+UUd+gD5hfIuwqLGnQBN0vlU2Xlu3qAlVXyTbGxWh3Aunr5odhpo31gU7P8Uktrm11g+638UWdXtz1gT6/8o77+ATvAwSH5Z8Mjo+aBB+PioInJKbPA6Rlx2OzcvDngwqK4aGl5xQxwdU1ctr6RCB64tS0eiu8kAgVG9/bFY+HDo8CA0eMT8aHk2XlAwAvxqcuAgFfXYV9K3jgHagogQIAAI685v40A5TV3N0CAAAECBAgQIECAAAECBAgQIECHwMhb8prz+zXfgeJzPgMBAgQIEGDY5xwA7QQQIECAAAECBAgQIECAAAECBAgQIECAAAGqHytWP/esfjBb/eS4+tF25bP32h8H6H+9oP95hfr3H3dSFFFHpWF4zgAAAABJRU5ErkJggg=="},2050:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e){return{}}Object.defineProperty(t,"__esModule",{value:!0}),t.LineReactTx=void 0;var c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},s=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),u=a(0),f=n(u),A=a(9),d=a(171),v=n(d),m=a(141),p=n(m);a(192),a(174),a(142),a(573),a(574),a(575);var g=a(17),h=a(16),y=t.LineReactTx=function(e){function t(e){r(this,t);var a=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e)),n=("_"+Math.random()).replace(".","_");return a.state={lineId:"lineTx"+n},a}return l(t,e),s(t,[{key:"initLine",value:function(e){var t=(0,h.cloneDeep)(v.default),a=this.props,n=a.intl,r=a.data,o=p.default.getInstanceByDom(document.getElementById(e));void 0===o&&(o=p.default.init(document.getElementById(e))),t.overviewChart.toolbox.feature={},t.overviewChart.dataZoom=[],t.overviewChart.series[0].smooth=!0,t.overviewChart.series[0].markPoint.symbolSize=80,t.overviewChart.series[0].lineStyle={normal:{type:"solid",color:"red",width:5}},t.overviewChart.grid[0].top=120,t.overviewChart.xAxis[0].data=[],t.overviewChart.series[0].data=[],t.overviewChart.yAxis[0].name=n.formatMessage({id:"Transactions Per Day"}),t.overviewChart.yAxis[0].nameGap=40,t.overviewChart.yAxis[0].nameTextStyle={fontWeight:"bolder",fontSize:"15"},t.overviewChart.tooltip.formatter=function(e){var t=new Date(parseInt(e[0].data.date)).toLocaleString().split(" ")[0];return n.formatMessage({id:"date"})+" : "+t+"<br/>"+n.formatMessage({id:"total_transactions"})+" : "+e[0].data.totalTransaction+"<br/>"+n.formatMessage({id:"avg_blockTime"})+" : "+e[0].data.avgBlockTime+"<br/>"+n.formatMessage({id:"avg_blockSize"})+" : "+e[0].data.avgBlockSize+"<br/>"+n.formatMessage({id:"total_BlockCount"})+" : "+e[0].data.totalBlockCount+"<br/>"+n.formatMessage({id:"new_address_seen"})+" : "+e[0].data.newAddressSeen+"<br/>"},r&&r.length>0&&r.map(function(e){var a=void 0;a=c({},e,{value:e.totalTransaction}),t.overviewChart.xAxis[0].data.push(n.formatDate(e.date)),t.overviewChart.series[0].data.push(a)}),r&&0===r.length&&(t.overviewChart.title.text="No data"),o.setOption(t.overviewChart)}},{key:"componentDidMount",value:function(){this.initLine(this.state.lineId)}},{key:"componentDidUpdate",value:function(){this.initLine(this.state.lineId)}},{key:"render",value:function(){return f.default.createElement("div",null,f.default.createElement("div",{id:this.state.lineId,style:this.props.style}))}}]),t}(f.default.Component),w={};t.default=(0,g.connect)(i,w,null,{pure:!1})((0,A.injectIntl)(y))}});