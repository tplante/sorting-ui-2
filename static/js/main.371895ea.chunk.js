(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),o=n(3),c=n.n(o),d=(n(14),n(4)),r=n(5),l=n(7),s=n(6),u=n(8),p=n(1),m=[{candidate:"Barack Obama",selected:!1},{candidate:"George Bush",selected:!1},{candidate:"Hillary Clinton",selected:!1},{candidate:"Bernie Sanders",selected:!1},{candidate:"Marco Rubio",selected:!1},{candidate:"George Washington",selected:!1},{candidate:"John Adams",selected:!1},{candidate:"Abraham Lincoln",selected:!1},{candidate:"Franklin D. Roosevelt",selected:!1},{candidate:"Ron Swanson",selected:!1}],h={width:"250px",margin:"0 auto"},b={width:"100%",padding:"8px 0",textAlign:"center",backgroundColor:"#d8d8d8",fontWeight:"bold",cursor:"pointer",borderRadius:"3px"},g=Object(p.a)({},b,{margin:"10px 0",padding:0,textAlign:"left"}),f={display:"inline-block",marginRight:"8px",padding:"8px",backgroundColor:"#2c5c6c",color:"white",borderRadius:"3px 0 0 3px"},v={fontSize:"15px"},k=Object(p.a)({},b,{marginTop:"20px",backgroundColor:"#00b06f",color:"white"}),w=function(e){function t(e){var n;return Object(d.a)(this,t),(n=Object(l.a)(this,Object(s.a)(t).call(this,e))).handleChange=function(e){var t=e.target,a=e.target,i=a.value,o=a.previousValue,c=(a.id,n.state.options);if(o&&"skip"!==o){var d=c.findIndex(function(e){return e.candidate===o});c[d].selected=!1}if("skip"!==i){var r=c.findIndex(function(e){return e.candidate===i});c[r].selected=!0}t.previousValue=i,n.setState({options:c})},n.handleSubmit=function(){n.setState({submitted:!n.state.submitted})},n.state={options:m,submitted:!1},n}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement(i.a.Fragment,null,i.a.createElement("h1",{style:{textAlign:"center"}},"Rank your favorite candidates"),i.a.createElement("form",{style:h},this.state.options.map(function(t,n){return i.a.createElement("div",{key:n,style:g},i.a.createElement("label",{style:f,htmlFor:"options-".concat(n)},n+1),i.a.createElement("select",{id:"options-".concat(n),style:v,onChange:e.handleChange},i.a.createElement("option",{defaultValue:!0,value:"skip"},"Select an option (or skip)"),e.state.options.map(function(e,t){return i.a.createElement("option",{key:"".concat(e.candidate,"-").concat(t),value:e.candidate,disabled:e.selected},e.candidate)})))}),i.a.createElement("div",{onClick:this.handleSubmit,style:k},this.state.submitted?"Nice!":"Submit")))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,n){e.exports=n(16)}},[[9,2,1]]]);
//# sourceMappingURL=main.371895ea.chunk.js.map