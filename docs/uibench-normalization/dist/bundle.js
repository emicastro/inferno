!function(n){"use strict";function e(e){var l=e.children;return n.createVNode(1,"li","TreeLeaf",l,0,null,null,null)}function l(n,e){return n!==e}function t(o){for(var r=o.data,a=r.children.length,u=new Array(a),d=0;d<a;d++){var i=r.children[d],c=i.id;i.container?u[d]=n.createComponentVNode(2,t,{data:i},c,{onComponentShouldUpdate:l}):u[d]=n.createComponentVNode(2,e,{children:c},c,{onComponentShouldUpdate:l})}return n.createVNode(1,"ul","TreeNode",u,0,null,null,null)}function o(e){var l=e.data,t=l.time%10,o="border-radius:"+t+"px;background:rgba(0,0,0,"+(.5+t/10)+")";return n.createVNode(1,"div","AnimBox",null,1,{"data-id":l.id,style:o},null,null)}function r(n,e){console.log("Clicked",n),e.stopPropagation()}function a(e){var l=e.children;return n.createVNode(1,"td","TableCell",[null,!1,[l]],0,{onClick:n.linkEvent(l,r)},null,null)}function u(e){var t=e.data,o="TableRow";t.active&&(o="TableRow active");var r=t.props,u=r.length+1,d=new Array(u);d[0]=n.createComponentVNode(2,a,{children:"#"+t.id},null,{onComponentShouldUpdate:l});for(var i=1;i<u;i++)d[i]=n.createComponentVNode(2,a,{children:r[i-1]},null,{onComponentShouldUpdate:l});return n.createVNode(1,"tr",o,[null,d,!1],0,{"data-id":t.id},null,null)}uibench.init("Inferno (normalization test)",n.version),document.addEventListener("DOMContentLoaded",(function(e){var r=document.querySelector("#App");uibench.run((function(e){var a,d,i;n.render(("table"===(i=(a=e).location)?d=function(e){for(var t=e.items,o=t.length,r=new Array(o),a=0;a<o;a++){var d=t[a];r[a]=n.createComponentVNode(2,u,{data:d,children:d},d.id,{onComponentShouldUpdate:l})}return n.createVNode(1,"table","Table",[[],r,[[]]],0,null,null,null)}(a.table):"anim"===i?d=function(e){for(var t=e.items,r=t.length,a=new Array(r),u=0;u<r;u++){var d=t[u];a[u]=n.createComponentVNode(2,o,{data:d},d.id,{onComponentShouldUpdate:l})}return n.createVNode(1,"div","Anim",a,0,null,null,null)}(a.anim):"tree"===i&&(d=function(e){return n.createVNode(1,"div","Tree",n.createComponentVNode(2,t,{data:e.root},null,{onComponentShouldUpdate:l}),2,null,null,null)}(a.tree)),n.createVNode(1,"div","Main",d,0,null,null,null)),r)}),(function(e){n.render(n.createVNode(1,"pre",null,JSON.stringify(e,null," "),0,null,null,null),r)}))}))}(inferno);
