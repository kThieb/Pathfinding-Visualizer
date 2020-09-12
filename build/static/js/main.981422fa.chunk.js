(this["webpackJsonppathfinding-visualizer"]=this["webpackJsonppathfinding-visualizer"]||[]).push([[0],{24:function(e,t,n){e.exports=n(40)},29:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},32:function(e,t){},33:function(e,t,n){},34:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(10),l=n.n(i),o=(n(29),n(20)),u=n(1),c=n(11),s=n(3),h=(n(30),n(31),n(32),function(e,t){for(var n="",a=0;a<e.length;a++){var r=e[a],i=r[0][0],l=r[0][1],o=r[1];i===t.x+1&&(n+=1===o?" no-wall-bottom":" mud-bottom"),i===t.x-1&&(n+=1===o?" no-wall-top":" mud-top"),l===t.y+1&&(n+=1===o?" no-wall-right":" mud-right"),l===t.y-1&&(n+=1===o?" no-wall-left":" mud-left")}return t.hasCheese&&(n+=" cheese"),t.isShortestPath&&(n+=" shortest-path-node"),t.isVisited&&(n+=" visited-node"),n}),f=r.a.memo((function(e){e.numberOfElementsPerRow;var t=e.node,n=e.neighbors;return r.a.createElement("div",{className:"grid-node"+h(n,t)},function(e){return e.isStart?r.a.createElement("span",{role:"img","aria-label":"rat",className:"content"},"\ud83d\udc00"):e.isEnd?r.a.createElement("span",{role:"img","aria-label":"rat",className:"content"},"\ud83e\uddc0"):r.a.createElement("span",null)}(t))}),(function(e,t){return e.node.isVisited===t.node.isVisited&&e.node.isShortestPath===t.node.isShortestPath&&h(e.neighbors,e.node)===h(t.neighbors,t.node)})),m=(n(33),function(e){var t=e.grid,n=e.maze,a=e.pairGrid;return r.a.createElement("div",{className:"grid"},t.map((function(e,t){var i=e.length;return r.a.createElement("div",{className:"row",key:t},e.map((function(e,l){return r.a.createElement(f,{numberOfElementsPerRow:i,key:t+l*i,node:e,neighbors:d(n.get(a[e.x][e.y]))})})))})))});function d(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"This value was promised to be there.";if(void 0===e||null===e)throw new TypeError(t);return e}n(34);var v=function(e){return r.a.createElement("nav",{className:"navbar"},r.a.createElement("ul",{className:"navbar-nav"},e.children))},g=function(e){var t=[e.startClassName?e.startClassName:"",e.visualizingClassName,e.visualizedClassName];return r.a.createElement("li",{className:"nav-item "+t[e.isVisualized]+" "+e.className,onClick:function(t){e.handleClick()}},r.a.createElement("p",null,e.text))},p=function(e){var t=Object(a.useState)(!1),n=Object(s.a)(t,2),i=n[0],l=n[1];return r.a.createElement("li",{id:e.id,className:"nav-item"+(e.shouldGreyOut&&e.isVisualized?" greyed-out":"")},r.a.createElement("p",{className:"icon-button",onClick:function(t){e.shouldGreyOut&&e.isVisualized||l(!i),document.addEventListener("click",(function(t){var n=document.getElementById(e.id),a=t.target;do{if(a===n)return;a=a.parentNode}while(a);l(!1)}))}},e.text),i&&e.children)},E=function(e){return r.a.createElement("div",{className:"dropdown",style:{height:e.height}},e.children)},b=function(e){return r.a.createElement("div",{className:"menu-item",onClick:function(t){e.handleClick()}},r.a.createElement("span",null,e.leftIcon?e.leftIcon:""),e.children,r.a.createElement("span",null,e.rightIcon?e.rightIcon:""))},y=function(e){return r.a.createElement("div",{className:"slider-item"},r.a.createElement("div",null,r.a.createElement("p",null,e.text)),r.a.createElement("input",{className:"slider",type:"range",value:e.defaultValue,min:e.minValue.toString(),max:e.maxValue.toString(),step:.01,onChange:function(t){return e.handleChange(t.target.value)}}))},O=n(8),j=function(e,t,n){for(var a=[n],r=n;r!==t;)r=e[r.id],a.unshift(r);return a};function x(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"This value was promised to be there.";if(void 0===e||null===e)throw new TypeError(t);return e}var k=n(18),w=n(19),N=function(){function e(t){Object(k.a)(this,e),this.content=void 0,this.compare=void 0,this.index=void 0,this.content=[],this.index=1,this.compare=t}return Object(w.a)(e,[{key:"push",value:function(e){this.content.push([e,this.index++]),this.bubbleUp(this.content.length-1)}},{key:"pop",value:function(){var e=x(this.content[0]),t=this.content.pop();return this.content.length>0&&(this.content[0]=t,this.sinkDown(0)),x(e)[0]}},{key:"remove",value:function(e){for(var t=this.content.length,n=0;n<t;n++)if(x(this.content[n])[0]===e){var a=this.content.pop();if(n===t-1)break;this.content[n]=a,this.bubbleUp(n),this.sinkDown(n);break}}},{key:"size",value:function(){return this.content.length}},{key:"bubbleUp",value:function(e){for(var t=x(this.content[e]);e>0;){var n=Math.floor((e+1)/2)-1,a=x(this.content[n]);if(this.compare(a,t))break;this.content[n]=t,this.content[e]=a,e=n}}},{key:"sinkDown",value:function(e){for(var t=this.content.length,n=x(this.content[e]);;){var a=2*(e+1),r=a-1,i=e;if(r<t&&this.compare(x(this.content[r]),n)&&(i=r),a<t&&this.compare(x(this.content[a]),x(this.content[i]))&&(i=a),i===e)break;this.content[e]=this.content[i],this.content[i]=n,e=i}}}]),e}(),C=function(e,t){return Math.abs(t.x-e.x)+Math.abs(t.y-e.y)},S={"Depth First Search":function(e,t,n,a,r){var i=e.length,l=e[0].length,o=[];o.fill(a,0,i*l),o[a.id]=a;for(var u=[],c=[a],s=[a],h=function(){var h=x(s.pop());if(u.find((function(e){return e===h})))return"continue";if(u.push(h),h===r){var f=j(o,a,r);return{v:[u,f]}}var m,d=Object(O.a)(x(n.get(t[h.x][h.y])));try{var v=function(){var t=m.value,n=t[0][0],a=t[0][1];if(n<0||n>=i||a<0||a>=l||c.find((function(t){return t===e[n][a]})))return"continue";var r=e[n][a];o[r.id]=h,c.push(r),s.push(r)};for(d.s();!(m=d.n()).done;)v()}catch(g){d.e(g)}finally{d.f()}};s.length>0;){var f=h();if("continue"!==f&&"object"===typeof f)return f.v}return[u,[]]},"Breadth First Search":function(e,t,n,a,r){var i=e.length,l=e[0].length,o=[];o.fill(a,0,i*l),o[a.id]=a;for(var u=[],c=[a],s=[a],h=function(){var h=x(s.shift());if(u.find((function(e){return e===h})))return"continue";if(u.push(h),h===r){var f=j(o,a,r);return{v:[u,f]}}var m,d=Object(O.a)(x(n.get(t[h.x][h.y])));try{var v=function(){var t=m.value,n=t[0][0],a=t[0][1];if(n<0||n>=i||a<0||a>=l||c.find((function(t){return t===e[n][a]})))return"continue";var r=e[n][a];o[r.id]=h,c.push(r),s.push(r)};for(d.s();!(m=d.n()).done;)v()}catch(g){d.e(g)}finally{d.f()}};s.length>0;){var f=h();if("continue"!==f&&"object"===typeof f)return f.v}return[u,[]]},"Dijkstra's algorithm":function(e,t,n,a,r){for(var i=e.length,l=e[0].length,o=[],u=0;u<i;u++){o.push([]);for(var c=0;c<l;c++)o[u].push(Number.MAX_SAFE_INTEGER)}o[a.x][a.y]=0;var s=[];s.fill(a,0,i*l),s[a.id]=a;var h=[],f=new N((function(e,t){return o[e[0].x][e[0].y]!==o[t[0].x][t[0].y]?o[e[0].x][e[0].y]<o[t[0].x][t[0].y]:e[1]<t[1]}));for(f.push(a);f.size()>0;){var m=x(f.pop());if(h.push(m),m===r){var d=j(s,a,r);return[h,d]}var v,g=m.x,p=m.y,E=Object(O.a)(x(n.get(t[g][p])));try{var b=function(){var t=v.value,n=t[0][0],a=t[0][1];if(n<0||n>=i||a<0||a>=l)return"continue";var r=e[n][a],u=o[g][p]+t[1];u<o[n][a]&&(s[r.id]=m,o[n][a]=u),h.find((function(e){return e===r}))||(f.remove(r),f.push(r))};for(E.s();!(v=E.n()).done;)b()}catch(y){E.e(y)}finally{E.f()}}return[h,[]]},"A* algorithm":function(e,t,n,a,r){for(var i=e.length,l=e[0].length,o=[],u=0;u<i;u++){o.push([]);for(var c=0;c<l;c++)o[u].push(Number.MAX_SAFE_INTEGER)}o[a.x][a.y]=0;var s=[];s.fill(a,0,i*l),s[a.id]=a;var h=[],f=new N((function(e,t){var n=C(e[0],r),a=C(t[0],r);return o[e[0].x][e[0].y]+n!==o[t[0].x][t[0].y]+a?o[e[0].x][e[0].y]+n<o[t[0].x][t[0].y]+a:e[1]<t[1]}));for(f.push(a);f.size()>0;){var m=x(f.pop());if(h.push(m),m===r){var d=j(s,a,r);return[h,d]}var v,g=m.x,p=m.y,E=Object(O.a)(x(n.get(t[g][p])));try{var b=function(){var t=v.value,n=t[0][0],a=t[0][1];if(n<0||n>=i||a<0||a>=l)return"continue";var r=e[n][a],u=o[g][p]+t[1];u<o[n][a]&&(s[r.id]=m,o[n][a]=u),h.find((function(e){return e===r}))||(f.remove(r),f.push(r))};for(E.s();!(v=E.n()).done;)b()}catch(y){E.e(y)}finally{E.f()}}return[h,[]]}},z=function(e,t,n,a,r){for(var i=function(e,t,n){for(var a=[],r=0;r<t;r++){for(var i=[],l=0;l<e;l++){var o=n[r][l];i.push([o.x,o.y])}a.push(i)}for(var u=new Map,c=0;c<t;c++)for(var s=0;s<e;s++)u.set(a[c][s],[]);return[a,u]}(e,t,n),l=Object(s.a)(i,2),o=l[0],u=l[1],c=2*(e-1)*(t-1)+e+t-2,h=c,f=o[0][0],m=[f],d=[f];m.length>0;){var v=x(m.pop()),g=V(o,v,e,t,d);if(g.length>0){m.push(v);var p=g[Math.floor(Math.random()*g.length)];x(u.get(v)).push([p,1]),x(u.get(p)).push([v,1]),d.push(p),m.push(p),c--}}for(var E=c;c*(1/E)>a;){var b=Math.floor(Math.random()*e),y=Math.floor(Math.random()*t),O=o[y][b],j=M(o,O,e,t,u);if(j.length>0){var k=Math.floor(Math.random()*j.length),w=o[j[k][0]][j[k][1]];x(u.get(O)).push([w,1]),x(u.get(w)).push([O,1]),c--}}for(var N=0,C=h-c,S=function(){var n=Math.floor(Math.random()*e),a=Math.floor(Math.random()*t),r=o[a][n],i=x(u.get(r)).filter((function(e){return 1===e[1]}));if(i.length>0){var l=Math.floor(Math.random()*i.length),c=o[i[l][0][0]][i[l][0][1]];i[l][1]=5;var s=x(u.get(c));x(s.find((function(e){return e[0]===r})))[1]=5,N++}};N*(1/C)<r;)S();return console.log(u),[o,u]},V=function(e,t,n,a,r){for(var i=[],l=-1,o=-1,u=0,c=[[1,0],[0,-1],[-1,0],[0,1]];u<c.length;u++){var s=c[u];l=t[0]+s[0],o=t[1]+s[1],l>=0&&l<a&&o>=0&&o<n&&!r.includes(e[l][o])&&i.push(e[l][o])}return i},M=function(e,t,n,a,r){for(var i=[],l=-1,o=-1,u=function(t){return t[0]===e[l][o]},c=0,s=[[1,0],[0,-1],[-1,0],[0,1]];c<s.length;c++){var h,f=s[c];l=t[0]+f[0],o=t[1]+f[1],l>=0&&l<a&&o>=0&&o<n&&!(null===(h=r.get(t))||void 0===h?void 0:h.find(u))&&i.push(e[l][o])}return i},A=function(e,t,n,a){for(var r=[],i=0;i<t;i++){for(var l=[],o=0;o<e;o++){var u={id:i+o*t,x:i,y:o,isStart:!1,isEnd:!1,isVisited:!1,isShortestPath:!1,hasCheese:!1};l.push(u)}r.push(l)}return r[n[0]][n[1]].isStart=!0,r[a[0]][a[1]].isEnd=!0,[r,r[n[0]][n[1]],r[a[0]][a[1]]]},D=n(22),F=n(42),G=function(e){var t=e.handleEnter,n=Object(D.a)(e,["handleEnter"]),i=Object(a.useRef)(null);return r.a.createElement(F.a,Object.assign({nodeRef:i},n,{onEnter:function(e){var n=i.current,a=null!==n?n.offsetHeight:0;t(a)}}),r.a.createElement("div",{ref:i},n.children))},T=A(28,13,[6,3],[6,24]),I=Object(s.a)(T,3),B=I[0],P=I[1],R=I[2],_=z(28,13,B,.6,.3),U=Object(s.a)(_,2),J=U[0],W=U[1],X=function(){var e=Object(a.useState)(B),t=Object(s.a)(e,2),n=t[0],i=t[1],l=Object(a.useState)(W),o=Object(s.a)(l,2),u=o[0],h=o[1],f=Object(a.useState)(J),d=Object(s.a)(f,2),O=d[0],j=d[1],x=Object(a.useState)("Dijkstra's algorithm"),k=Object(s.a)(x,2),w=k[0],N=k[1],C=Object(a.useState)(.6),V=Object(s.a)(C,2),M=V[0],D=V[1],F=Object(a.useState)(.3),T=Object(s.a)(F,2),I=T[0],_=T[1],U=Object(a.useState)(0),X=Object(s.a)(U,2),H=X[0],L=X[1],$=Object(a.useState)("main"),q=Object(s.a)($,2),K=q[0],Q=q[1],Y=Object(a.useState)(void 0),Z=Object(s.a)(Y,2),ee=Z[0],te=Z[1],ne=Object(a.useState)(P),ae=Object(s.a)(ne,2),re=ae[0],ie=ae[1],le=Object(a.useState)(R),oe=Object(s.a)(le,2),ue=oe[0],ce=oe[1],se=function(e){return function(){N(e)}},he=function(e){return function(){return Q(e)}};return r.a.createElement("div",{className:"App"},r.a.createElement(v,null,r.a.createElement(g,{text:"Reinitialize",isVisualized:H,className:"reinitialize",startClassName:"greyed-out",visualizingClassName:"greyed-out",visualizedClassName:"highlight",handleClick:function(){if(2===H){var e=A(28,13,[re.x,re.y],[ue.x,ue.y]),t=Object(s.a)(e,3),n=t[0],a=t[1],r=t[2];i(n),ie(a),ce(r),L(0)}}}),r.a.createElement(g,{text:"Generate Maze",isVisualized:H,className:"generate-maze",visualizingClassName:"greyed-out",visualizedClassName:"greyed-out",handleClick:function(){if(0===H){var e=n.slice(),t=z(28,13,e,M,I),a=Object(s.a)(t,2),r=a[0],l=a[1];i(e),j(r),h(l)}}}),r.a.createElement(p,{text:"Maze options",id:"maze-options",isVisualized:H,shouldGreyOut:!0},r.a.createElement(E,null,r.a.createElement(y,{text:"Density of walls",minValue:0,maxValue:1,defaultValue:M,handleChange:D}),r.a.createElement(y,{text:"Density of mud",minValue:0,maxValue:1,defaultValue:I,handleChange:_}))),r.a.createElement(g,{text:"Visualize "+w+"!",isVisualized:H,className:"visualize-button",visualizingClassName:"greyed-out",visualizedClassName:"greyed-out",handleClick:function(){if(0===H){L(1);var e=S[w](n,O,u,re,ue),t=Object(s.a)(e,2),a=t[0],r=t[1],l=a.length,o=r.length;!function(e,t){for(var a=e.length,r=function(t){setTimeout((function(){var a=n.slice(),r=e[t],l=r.x,o=r.y,u=Object(c.a)(Object(c.a)({},r),{},{isVisited:!0});a[l][o]=u,i(a)}),35*t)},l=0;l<a;l++)r(l);for(var o=t.length,u=function(e){setTimeout((function(){var a=n.slice(),r=t[e],l=r.x,o=r.y,u=Object(c.a)(Object(c.a)({},r),{},{isVisited:!1,isShortestPath:!0});a[l][o]=u,i(a)}),35*a+60*e)},s=0;s<o;s++)u(s)}(a,r),setTimeout((function(){L(2)}),35*l+60*o)}}}),r.a.createElement(p,{text:"Algorithms",id:"algorithms",isVisualized:H,shouldGreyOut:!1},r.a.createElement(E,{height:ee},r.a.createElement(G,{in:"main"===K,unmountOnExit:!0,timeout:500,classNames:"menu-primary",handleEnter:te,appear:!0},r.a.createElement(b,{handleClick:he("unweighted")},"Algorithms for unweighted graphs"),r.a.createElement(b,{handleClick:he("weighted")},"Algorithms for weighted graphs")),r.a.createElement(G,{in:"unweighted"===K,unmountOnExit:!0,timeout:500,classNames:"menu-unweighted",handleEnter:te},r.a.createElement(b,{handleClick:he("main")},"<<<"),r.a.createElement(b,{handleClick:se("Depth First Search")},r.a.createElement("p",null,"Depth First Search"),"Depth First Search"===w?r.a.createElement("p",null,"\u2713"):""),r.a.createElement(b,{handleClick:se("Breadth First Search")},r.a.createElement("p",null,"Breadth First Search"),"Breadth First Search"===w?r.a.createElement("p",null,"\u2713"):"")),r.a.createElement(G,{in:"weighted"===K,unmountOnExit:!0,timeout:500,classNames:"menu-weighted",handleEnter:te},r.a.createElement(b,{handleClick:he("main")},"<<<"),r.a.createElement(b,{handleClick:se("Dijkstra's algorithm")},r.a.createElement("p",null,"Dijkstra's Algorithm"),"Dijkstra's algorithm"===w?r.a.createElement("p",null,"\u2713"):""),r.a.createElement(b,{handleClick:se("A* algorithm")},r.a.createElement("p",null,"A* Algorithm"),"A* algorithm"===w?r.a.createElement("p",null,"\u2713"):""))))),r.a.createElement(m,{grid:n,pairGrid:O,maze:u}))},H=function(){return r.a.createElement("div",null,r.a.createElement(o.a,null,r.a.createElement(u.c,null,r.a.createElement(u.a,{exact:!0,path:"/pathfinding-visualizer",component:X}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(H,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[24,1,2]]]);
//# sourceMappingURL=main.981422fa.chunk.js.map