"use strict";(self.webpackChunkyummy_app_front=self.webpackChunkyummy_app_front||[]).push([[126],{8126:function(n,e,r){r.r(e),r.d(e,{default:function(){return on}});r(2791);var i=r(168),t=r(8789);var a=r.p+"static/media/footer-bg-auth.31c9268a099e562b491a4960e7229dd5.svg";var o=r.p+"static/media/footer-bg-auth-desc.d5d5440654b186017ddacb2e9f52c512.svg";var s=r.p+"static/media/order-food-pana-white.e42bd30f99b1473f24f8bae33ca09571.svg";var d,p,c,l,m,h,u,x,g,b,f,w,v,Z,y,j,k=r.p+"static/media/order-food-pana-black.385bc53ff93756268481b368cafeeb4b.svg",z=t.ZP.div(d||(d=(0,i.Z)(["\n  position: relative;\n"]))),P=t.ZP.div(p||(p=(0,i.Z)(["\n  display: block;\n  justify-content: center;\n\n  min-width: 320px;\n  height: 100%;\n  padding: 87px 20px;\n  margin: 0 auto;\n\n  @media screen and (min-width: 768px) {\n    width: 768px;\n    padding: 96px 134px;\n  }\n  @media screen and (min-width: 1440px) {\n    display: flex;\n    justify-content: space-between;\n    width: 1440px;\n    padding: 115px 113px;\n  }\n"]))),C=t.ZP.div(c||(c=(0,i.Z)(["\n  width: 285px;\n  height: 250px;\n  background-image: url('","');\n  margin: 0 auto;\n\n  background-repeat: no-repeat;\n  background-size: cover;\n\n  @media screen and (min-width: 768px) {\n    width: 409px;\n    height: 359px;\n  }\n\n  @media screen and (min-width: 1440px) {\n    background-image: url('","');\n    width: 532px;\n    height: 468px;\n    margin: 0;\n  }\n"])),k,s),S=t.ZP.div(l||(l=(0,i.Z)(["\n  height: 58%;\n  background-image: url('","');\n  width: 100%;\n\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: 50% 0;\n  bottom: 0;\n\n  position: absolute;\n  z-index: -1;\n\n  @media screen and (min-width: 1440px) {\n    background-image: url('","');\n    height: 42%;\n  }\n\n  @media screen and (min-width: 1600px) {\n    height: 55%;\n  }\n"])),a,o),T=r(1413),U=r(4165),B=r(5987),E=r(5861),_=r(9434),F=r(7689),N=r(5264),O=r(2506),q=r(6727),A=function(){var n="/signin"===(0,F.TH)().pathname;return q.Ry().shape({name:n?q.Z_():q.Z_().required(" ").min(3,"Name must be at least 3 characters long").matches(/^[a-zA-Z\u0430-\u044f\u0410-\u042f\u0451\u0401\s-]+$/,"Name can only contain letters, spaces, and dashes"),email:q.Z_().email("Invalid email address").matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/,"Invalid email address").required(" "),password:n?q.Z_().min(5,"Password must be at least 5 characters long").max(20,"Password must be no more than 20 characters long").required("Enter a valid Password"):q.Z_().min(5,"Password must be at least 5 characters long").max(20,"Password must be no more than 20 characters long").matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{5,}$/,"Password must contain at least one uppercase letter, one lowercase letter, and one number").required("Enter a valid Password")})},G=r(5822),I=function(n){try{return A.validateSync(n),"strong"}catch(e){return n.length>=6&&n.length<20?"medium":"weak"}},Y=r(8013),D=r(1087),R=t.ZP.div(m||(m=(0,i.Z)(["\n  margin-top: -32px;\n\n  @media (min-width: 768px) {\n    margin-top: -24px;\n  }\n  @media (min-width: 1440px) {\n    margin-top: 0;\n  }\n"]))),W=t.ZP.div(h||(h=(0,i.Z)(["\n  margin: 0 auto;\n  width: 335px;\n  min-height: 315px;\n  padding: 32px 28px 40px;\n  background: var(--modal-background);\n  box-shadow: 0px 4px 48px rgba(0, 0, 0, 0.1);\n  border-radius: 30px;\n\n  @media (min-width: 768px) {\n    width: 500px;\n    min-height: 419px;\n    padding: 44px 50px;\n  }\n"]))),$=t.ZP.h1(u||(u=(0,i.Z)(["\n  margin-bottom: 18px;\n  font-weight: 600;\n  font-size: 24px;\n  line-height: 1.17;\n  color: var(--primary-white);\n\n  @media (min-width: 768px) {\n    margin-bottom: 32px;\n    font-size: 28px;\n    line-height: 1.07;\n  }\n"]))),H=t.ZP.form(x||(x=(0,i.Z)(["\n  display: flex;\n  flex-direction: column;\n\n  &.signin {\n    margin-top: 43px;\n\n    @media (min-width: 768px) {\n      margin-top: 53px;\n    }\n  }\n"]))),Q=t.ZP.div(g||(g=(0,i.Z)(["\n  display: flex;\n  position: relative;\n  width: 100%;\n  height: 45px;\n  margin-bottom: 12px;\n  padding: 12px;\n  border-radius: 6px;\n  border: 1px solid ",";\n  font-size: 18px;\n  color: var(--primary-white);\n  transition: border 250ms var(--transition-function);\n\n  &:hover {\n    border: 1px solid var(--primary-white);\n  }\n\n  &::placeholder {\n    margin-left: 40px;\n    font-size: 14px;\n    line-height: 1.5;\n    color: var(--primary-white);\n    opacity: 0.8;\n    letter-spacing: -0.02em;\n  }\n\n  &::before {\n    content: '';\n    position: absolute;\n    top: 50%;\n    transform: translateY(-50%);\n    width: 18px;\n    height: 18px;\n    background-image: url(",");\n    background-size: contain;\n    background-repeat: no-repeat;\n  }\n\n  &::after {\n    content: '';\n    position: absolute;\n    top: 50%;\n    transform: translateY(-50%);\n    width: 18px;\n    height: 18px;\n    right: 19px;\n    background-image: ",";\n\n\n    background-size: contain;\n    background-repeat: no-repeat;\n  }\n\n  @media (min-width: 768px) {\n    margin-bottom: 24px;\n    height: 59px;\n\n    &::before {\n      width: 24px;\n      height: 24px;\n      background-image: url(",");\n    }\n  }\n"])),(function(n){return n.correct?"#3CBC81":n.error?"#E74A3B":"rgba(250, 250, 250, 0.3)"}),(function(n){return n.correct?n.iconTabUrlG:n.error?n.iconTabUrlE:n.iconUrl}),(function(n){return n.error?"url(".concat(n.iconError,")"):n.warning?"url(".concat(n.iconWarning,")"):n.correct?"url(".concat(n.iconCorrect,")"):""}),(function(n){return n.correct?n.iconTabUrlG:n.error?n.iconTabUrlE:n.iconTabUrl})),V=t.ZP.input(b||(b=(0,i.Z)(["\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n\n  width: 100%;\n  height: 100%;\n  margin-left: -12px;\n  padding: 12px 5px 12px 40px;\n\n  background-color: transparent;\n  border-radius: 6px;\n  border: none;\n  outline: none;\n\n  font-size: 14px;\n  line-height: 1.5;\n  color: var(--primary-white);\n\n  &::placeholder {\n    margin-left: 40px;\n\n    font-size: 14px;\n    line-height: 1.5;\n    color: var(--primary-white);\n    opacity: 0.8;\n    letter-spacing: -0.02em;\n  }\n\n  @media (min-width: 768px) {\n    font-size: 18px;\n    padding: 16px 10px 16px 50px;\n\n    &::placeholder {\n      font-size: 18px;\n    }\n  }\n"]))),L=t.ZP.button(f||(f=(0,i.Z)(["\n  width: 100%;\n  margin-top: 16px;\n  padding: 12px 24px;\n\n  background: var(--primary-green);\n  border-radius: 6px;\n  outline: none;\n  border: 0;\n\n  font-size: 16px;\n  line-height: 1.12;\n  color: var(--primary-white);\n  text-align: center;\n\n  transition: color 250ms var(--transition-function);\n\n  cursor: pointer;\n\n  &:hover,\n  &:focus {\n    color: var(--secondary-black);\n  }\n\n  @media (min-width: 768px) {\n    margin-top: 26px;\n    padding: 19px 24px;\n  }\n"]))),M=t.ZP.div(w||(w=(0,i.Z)(["\n  margin-top: 18px;\n  text-align: center;\n"]))),J=(0,t.ZP)(D.OL)(v||(v=(0,i.Z)(["\n  font-size: 14px;\n  line-height: 1.5;\n  text-decoration-line: underline;\n  color: var(--primary-white);\n\n  transition: color 250ms var(--transition-function);\n\n  &:hover,\n  &:focus {\n    color: var(--primary-green);\n  }\n\n  @media (min-width: 768px) {\n    font-size: 16px;\n  }\n"]))),K=t.ZP.div(Z||(Z=(0,i.Z)(["\n  font-size: 10px;\n  color: #e74a3b;\n  position: relative;\n  left: -13px;\n  bottom: -170%;\n\n    @media (min-width: 768px) {\n  font-size: 14px;\n  left: -13px;\n  bottom: -150%;\n  }\n"]))),X=t.ZP.div(y||(y=(0,i.Z)(["\n  font-size: 10px;\n  color: #3CBC81;\n  position: relative;\n  left: -13px;\n  bottom: -170%;\n    @media (min-width: 768px) {\n  font-size: 14px;\n  left: -13px;\n  bottom: -150%;\n  }\n"]))),nn=t.ZP.div(j||(j=(0,i.Z)(["\n  font-size: 10px;\n  color: #F6C23E;\n  position: relative;\n  left: -13px;\n  bottom: -170%;\n\n  @media (min-width: 768px) {\n    font-size: 14px;\n    left: -13px;\n    bottom: -150%;\n  }\n"]))),en=r(184),rn=["passwordStrength"],tn=function(){var n="/signin"===(0,F.TH)().pathname,e=A(),r=(0,_.I0)(),i=(0,O.TA)({initialValues:{name:"",email:"",password:""},validationSchema:e,onSubmit:function(){var e=(0,E.Z)((0,U.Z)().mark((function e(t){var a;return(0,U.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.passwordStrength,a=(0,B.Z)(t,rn),console.log(a),e.prev=2,!n){e.next=8;break}return e.next=6,r(G.zB(a));case 6:e.next=17;break;case 8:return e.next=10,r(G.y1(a));case 10:if("auth/signup/rejected"!==e.sent.type){e.next=13;break}return e.abrupt("return");case 13:return N.Notify.success("Your registration is successful",{fontSize:"16px",width:"350px",padding:"10px"}),e.next=16,r(G.zB(a));case 16:i.resetForm();case 17:e.next=23;break;case 19:e.prev=19,e.t0=e.catch(2),console.error(e.t0),N.Notify.error("Something went wrong.",{fontSize:"16px",width:"350px",padding:"10px"});case 23:case"end":return e.stop()}}),e,null,[[2,19]])})));return function(n){return e.apply(this,arguments)}}(),validate:function(n){return{}}}),t=i.values.passwordStrength,a=i.touched.password&&i.errors.password,o="weak"===t&&!a,s=!a&&!o&&i.values.passwordStrength;return(0,en.jsxs)(R,{children:[(0,en.jsxs)(W,{children:[(0,en.jsx)($,{children:n?"Sign In":"Registration"}),(0,en.jsxs)(H,{className:n?"signin":"",onSubmit:i.handleSubmit,children:[!n&&(0,en.jsxs)(Q,(0,T.Z)((0,T.Z)({iconUrl:Y.FM,iconTabUrl:Y.c5,iconTabUrlE:Y.vl,iconTabUrlG:Y.ZN,iconError:Y.j2,iconCorrect:Y.bD},i.getFieldProps("name")),{},{error:Boolean(i.touched.name&&i.errors.name),correct:Boolean(i.touched.name&&!i.errors.name),children:[(0,en.jsx)(V,{placeholder:"Name",onChange:function(n){i.handleChange(n),i.setFieldTouched("name",!0)},onBlur:i.handleBlur,type:"text",name:"name",autoComplete:"name",value:i.values.name}),i.touched.name&&i.errors.name&&(0,en.jsx)(K,{children:i.errors.name})]})),(0,en.jsxs)(Q,(0,T.Z)((0,T.Z)({iconUrl:Y._b,iconTabUrl:Y.Cl,iconTabUrlE:Y.Sw,iconTabUrlG:Y.qn,iconError:Y.j2,iconCorrect:Y.bD},i.getFieldProps("email")),{},{error:Boolean(i.touched.email&&i.errors.email),correct:Boolean(i.touched.email&&!i.errors.email),children:[(0,en.jsx)(V,{placeholder:"Email",onChange:function(n){i.handleChange(n),i.setFieldTouched("email",!0)},onBlur:i.handleBlur,type:"email",name:"email",autoComplete:"email",value:i.values.email}),i.touched.email&&i.errors.email&&(0,en.jsx)(K,{children:i.errors.email})]})),(0,en.jsxs)(Q,{iconUrl:Y.T6,iconTabUrl:Y.b2,iconTabUrlE:Y.vQ,iconTabUrlG:Y.oW,iconError:Y.j2,iconWarning:Y.Qx,iconCorrect:Y.bD,error:a,warning:o,correct:s,children:[(0,en.jsx)(V,{placeholder:"Password",onChange:function(n){i.handleChange(n);var e=I(i.values.password);i.setFieldValue("passwordStrength",e)},onBlur:i.handleBlur,type:"password",name:"password",autoComplete:"current-password",value:i.values.password}),a&&(0,en.jsx)(K,{children:i.errors.password}),o&&!s&&(0,en.jsx)(nn,{children:"Your password is little secure"}),s&&(0,en.jsx)(X,{children:"Password is secure"})]}),(0,en.jsx)(L,{type:"submit",children:n?"Sign in":"Sign up"})]})]}),(0,en.jsx)(M,{children:(0,en.jsx)(J,{exact:!0,to:n?"/register":"/signin",children:n?"Registration":"Sign in"})})]})},an=function(){return(0,en.jsxs)(z,{children:[(0,en.jsx)(S,{}),(0,en.jsxs)(P,{children:[(0,en.jsx)(C,{}),(0,en.jsx)(tn,{})]})]})},on=function(){return(0,en.jsx)(en.Fragment,{children:(0,en.jsx)(an,{})})}},5987:function(n,e,r){r.d(e,{Z:function(){return t}});var i=r(3366);function t(n,e){if(null==n)return{};var r,t,a=(0,i.Z)(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(t=0;t<o.length;t++)r=o[t],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(n,r)&&(a[r]=n[r])}return a}}}]);
//# sourceMappingURL=126.b3263d39.chunk.js.map