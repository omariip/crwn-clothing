"use strict";(self.webpackChunkcrwn_clothing=self.webpackChunkcrwn_clothing||[]).push([[737],{4833:function(n,e,r){r.d(e,{O:function(){return c}});var t=r(1413),o=r(4925),i=r(4942),a=r(3189),s=r(184),l=["children","buttonType","isLoading"],c=function(n){return n.base="base",n.google="google-sign-in",n.inverted="inverted",n}({});e.Z=function(n){var e=n.children,r=n.buttonType,u=n.isLoading,d=(0,o.Z)(n,l),p=function(){var n,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c.base;return(n={},(0,i.Z)(n,c.base,a.Yd),(0,i.Z)(n,c.google,a.NY),(0,i.Z)(n,c.inverted,a.OZ),n)[e]}(r);return(0,s.jsx)(p,(0,t.Z)((0,t.Z)({disabled:u},d),{},{children:u?(0,s.jsx)(a.X4,{}):e}))}},3189:function(n,e,r){r.d(e,{NY:function(){return d},OZ:function(){return p},X4:function(){return f},Yd:function(){return u}});var t,o,i,a,s=r(168),l=r(6444),c=r(7415),u=l.ZP.button(t||(t=(0,s.Z)(["\n    min-width: 165px;\n    width: auto;\n    height: 50px;\n    letter-spacing: 0.5px;\n    line-height: 50px;\n    padding: 0 35px 0 35px;\n    font-size: 15px;\n    background-color: black;\n    color: white;\n    text-transform: uppercase;\n    font-family: 'Open Sans';\n    font-weight: bolder;\n    border: none;\n    cursor: pointer;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    \n    &:hover {\n      background-color: white;\n      color: black;\n      border: 1px solid black;\n    }\n"]))),d=(0,l.ZP)(u)(o||(o=(0,s.Z)(["\n      background-color: #4285f4;\n      color: white;\n      &:hover {\n        background-color: #357ae8;\n        border: none;\n      }\n"]))),p=(0,l.ZP)(u)(i||(i=(0,s.Z)(["\n      background-color: white;\n      color: black;\n      border: 1px solid black;\n  \n      &:hover {\n        background-color: black;\n        color: white;\n        border: none;\n      }\n"]))),f=(0,l.ZP)(c.e)(a||(a=(0,s.Z)(["\n  width: 30px;\n  height: 30px;\n"])))},5737:function(n,e,r){r.r(e),r.d(e,{default:function(){return A}});var t,o,i,a,s,l,c,u,d=r(4942),p=r(1413),f=r(4165),h=r(5861),x=r(9439),b=r(2791),g=r(5689),m=r(9434),Z=r(4925),w=r(168),v=r(6444),y="grey",j=(0,v.iv)(t||(t=(0,w.Z)(["\n  top: -14px;\n  font-size: 12px;\n  color: ",";\n"])),"black"),k=v.ZP.label(o||(o=(0,w.Z)(["\n  color: ",";\n  font-size: 16px;\n  font-weight: normal;\n  position: absolute;\n  pointer-events: none;\n  left: 5px;\n  top: 10px;\n  transition: 300ms ease all;\n\n  ",";\n  &.shrink {\n    @include shrinkLabel();\n  }\n"])),y,(function(n){return n.shrink&&j})),P=v.ZP.input(i||(i=(0,w.Z)(["\n  background: none;\n  background-color: white;\n  color: ",";\n  font-size: 18px;\n  padding: 10px 10px 10px 5px;\n  display: block;\n  width: 100%;\n  border: none;\n  border-radius: 0;\n  border-bottom: 1px solid ",";\n  margin: 25px 0;\n\n  &:focus {\n    outline: none;\n  }\n\n  &:focus ~ "," {\n    ",";\n  }\n"])),y,y,k,j),S=v.ZP.div(a||(a=(0,w.Z)(["\n  position: relative;\n  margin: 45px 0;\n  input[type = 'password'] {\n  letter-spacing: 0.3em;\n  }\n"]))),O=r(184),C=["label"],I=function(n){var e=n.label,r=(0,Z.Z)(n,C);return(0,O.jsxs)(S,{children:[(0,O.jsx)(P,(0,p.Z)({},r)),(0,O.jsx)(k,{shrink:Boolean(r.value&&"string"===typeof r.value&&r.value.length),children:e})]})},q=r(4833),N=v.ZP.div(s||(s=(0,w.Z)(["\n  display: flex;\n  flex-direction: column;\n  width: 380px;\n\n  h2 {\n    margin: 10px 0;\n  }\n"]))),E=r(2542),z={displayName:"",email:"",password:"",confirmPassword:""},D=function(){var n=(0,b.useState)(z),e=(0,x.Z)(n,2),r=e[0],t=e[1],o=r.displayName,i=r.email,a=r.password,s=r.confirmPassword,l=(0,m.I0)(),c=function(){var n=(0,h.Z)((0,f.Z)().mark((function n(e){return(0,f.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e.preventDefault(),a===s){n.next=4;break}return alert("passwords do not match"),n.abrupt("return");case 4:try{l((0,E.hI)(i,a,o)),t(z)}catch(r){r.code===g.kq.EMAIL_EXISTS?alert("Cannot create user, email already in use"):console.log("user creation encountered an error",r)}case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),u=function(n){var e=n.target,o=e.name,i=e.value;t((0,p.Z)((0,p.Z)({},r),{},(0,d.Z)({},o,i)))};return(0,O.jsxs)(N,{children:[(0,O.jsx)("h2",{children:"Don't have an account?"}),(0,O.jsx)("span",{children:"Sign up with your email and password"}),(0,O.jsxs)("form",{onSubmit:c,children:[(0,O.jsx)(I,{label:"Display Name",type:"text",required:!0,onChange:u,name:"displayName",value:o}),(0,O.jsx)(I,{label:"Email",type:"email",required:!0,onChange:u,name:"email",value:i}),(0,O.jsx)(I,{label:"Password",type:"password",required:!0,onChange:u,name:"password",value:a}),(0,O.jsx)(I,{label:"Confirm Password",type:"password",required:!0,onChange:u,name:"confirmPassword",value:s}),(0,O.jsx)(q.Z,{type:"submit",children:"Sign Up"})]})]})},L=v.ZP.div(l||(l=(0,w.Z)(["\n  display: flex;\n  flex-direction: column;\n  width: 380px;\n\n  h2 {\n    margin: 10px 0;\n  }\n"]))),T=v.ZP.div(c||(c=(0,w.Z)(["\n  display: flex;\n  justify-content: space-between;\n"]))),X={email:"",password:""},Y=function(){var n=(0,b.useState)(X),e=(0,x.Z)(n,2),r=e[0],t=e[1],o=r.email,i=r.password,a=(0,m.I0)(),s=function(){var n=(0,h.Z)((0,f.Z)().mark((function n(){return(0,f.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:a((0,E.Pd)());case 1:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),l=function(){var n=(0,h.Z)((0,f.Z)().mark((function n(e){return(0,f.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e.preventDefault();try{a((0,E.Xu)(o,i)),t(X)}catch(r){console.log("user sign in failed",r)}case 2:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),c=function(n){var e=n.target,o=e.name,i=e.value;t((0,p.Z)((0,p.Z)({},r),{},(0,d.Z)({},o,i)))};return(0,O.jsxs)(L,{children:[(0,O.jsx)("h2",{children:"Already have an account?"}),(0,O.jsx)("span",{children:"Sign in with your email and password"}),(0,O.jsxs)("form",{onSubmit:l,children:[(0,O.jsx)(I,{label:"Email",type:"email",required:!0,onChange:c,name:"email",value:o}),(0,O.jsx)(I,{label:"Password",type:"password",required:!0,onChange:c,name:"password",value:i}),(0,O.jsxs)(T,{children:[(0,O.jsx)(q.Z,{type:"submit",children:"Sign In"}),(0,O.jsx)(q.Z,{buttonType:q.O.google,type:"button",onClick:s,children:"Sign In With Google"})]})]})]})},_=v.ZP.div(u||(u=(0,w.Z)(["\n  display: flex;\n  width: 900px;\n  justify-content: space-between;\n  margin: 30px auto;\n"]))),A=function(){return(0,O.jsxs)(_,{children:[(0,O.jsx)(Y,{}),(0,O.jsx)(D,{})]})}},4925:function(n,e,r){function t(n,e){if(null==n)return{};var r,t,o=function(n,e){if(null==n)return{};var r,t,o={},i=Object.keys(n);for(t=0;t<i.length;t++)r=i[t],e.indexOf(r)>=0||(o[r]=n[r]);return o}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(t=0;t<i.length;t++)r=i[t],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(n,r)&&(o[r]=n[r])}return o}r.d(e,{Z:function(){return t}})}}]);
//# sourceMappingURL=737.e12c8a2c.chunk.js.map