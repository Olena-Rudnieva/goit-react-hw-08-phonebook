"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[91],{996:function(n,e,t){t.r(e),t.d(e,{default:function(){return F}});var r,a,o,i,s,c,d,u=t(9439),l=t(2791),p=t(168),x=t(6487),b=(x.ZP.h1(r||(r=(0,p.Z)(["\n  margin-top: 80px;\n"]))),x.ZP.form(a||(a=(0,p.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: start;\n  gap: 20px;\n  border: 1px solid #111;\n  padding: 20px;\n  border-radius: 8px;\n  box-shadow: 0px 1px 6px rgba(46, 47, 66, 0.08),\n    0px 1px 1px rgba(46, 47, 66, 0.16), 0px 2px 1px rgba(46, 47, 66, 0.08);\n"])))),f=(x.ZP.label(o||(o=(0,p.Z)(["\n  display: flex;\n  gap: 10px;\n  align-items: center;\n"]))),x.ZP.input(i||(i=(0,p.Z)(["\n  border: 1px solid #111;\n  border-radius: 4px;\n  padding: 4px;\n  font-size: 16px;\n"]))),x.ZP.button(s||(s=(0,p.Z)(["\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 1.5;\n  align-items: center;\n  letter-spacing: 0.04em;\n  background-color: #1976d2;\n  color: #ffffff;\n  border: none;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);\n  border-radius: 4px;\n  padding: 4px 8px;\n  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover,\n  &:focus {\n    background-color: #111b87;\n  }\n"]))),t(9434)),m=function(n){return n.contacts.items},h=function(n){return n.contacts.isLoading},g=function(n){return n.contacts.error},Z=function(n){var e=m(n),t=function(n){return n.filter}(n),r=t.toLowerCase();return e.filter((function(n){return n.name.toLowerCase().includes(r.toLowerCase())}))},v=t(3634),j=t(890),w=t(1165),y=t(6151),k=t(184),C=function(){var n=(0,l.useState)(""),e=(0,u.Z)(n,2),t=e[0],r=e[1],a=(0,l.useState)(""),o=(0,u.Z)(a,2),i=o[0],s=o[1],c={name:t,number:i},d=(0,f.I0)(),p=(0,f.v9)(m),x=function(n){switch(n.target.name){case"name":r(n.target.value);break;case"number":s(n.target.value);break;default:return}},h=function(){r(""),s("")};return(0,k.jsxs)("div",{children:[(0,k.jsx)(j.Z,{variant:"h2",component:"h1",sx:{mb:2},children:"Phonebook"}),(0,k.jsxs)(b,{onSubmit:function(n){n.preventDefault(),p.find((function(n){return c.name===n.name}))?alert("".concat(c.name," is already in contacts.")):(d((0,v.el)({name:t,number:i})),h())},children:[(0,k.jsx)(w.Z,{label:"Name",type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' \\-][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:t,onChange:x}),(0,k.jsx)(w.Z,{label:"Number",type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:i,onChange:x}),(0,k.jsx)(y.Z,{variant:"contained",type:"submit",children:"Add contact"})]})]})},P=x.ZP.li(c||(c=(0,p.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n\n  button {\n    border: 1px solid #1976d2;\n    border-radius: 6px;\n    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);\n  }\n"]))),z=(x.ZP.button(d||(d=(0,p.Z)(["\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 1.5;\n  align-items: center;\n  letter-spacing: 0.04em;\n  background-color: #1976d2;\n  color: #ffffff;\n  border: none;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);\n  border-radius: 4px;\n  padding: 4px 8px;\n  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  margin-left: 20px;\n\n  &:hover,\n  &:focus {\n    background-color: #111b87;\n  }\n"]))),t(1889)),A=t(3400),S=t(7247),_=function(n){var e=n.option,t=(0,f.I0)();return(0,k.jsx)(z.ZP,{item:!0,xs:12,children:(0,k.jsxs)(P,{children:[(0,k.jsxs)(j.Z,{variant:"body1",component:"span",children:[e.name,": ",e.number]}),(0,k.jsx)(A.Z,{type:"button",onClick:function(){return t((0,v._f)(e.id))},"aria-label":"delete",color:"primary",children:(0,k.jsx)(S.Z,{})})]})})},I=t(4808),L=function(){var n=(0,f.I0)();return(0,k.jsx)(w.Z,{label:" Find contacts by name",sx:{mb:2},fullWidth:!0,type:"text",onChange:function(e){return n((0,I.KJ)(e.target.value))}})},q=function(){var n=(0,f.v9)(Z);return(0,k.jsxs)("div",{children:[(0,k.jsx)(j.Z,{variant:"h4",component:"h3",sx:{my:2},children:"Contacts"}),(0,k.jsx)(L,{}),(0,k.jsx)(z.ZP,{container:!0,rowSpacing:1,columnSpacing:1,children:n.map((function(n){return(0,k.jsx)(_,{option:n},n.id)}))})]})};function F(){var n=(0,f.I0)(),e=(0,f.v9)(h),t=(0,f.v9)(g);return(0,l.useEffect)((function(){n((0,v.yF)())}),[n]),(0,k.jsxs)("div",{children:[(0,k.jsx)(C,{}),(0,k.jsx)(q,{}),e&&!t&&(0,k.jsx)("b",{children:"Request in progress..."})]})}}}]);
//# sourceMappingURL=91.39e727be.chunk.js.map