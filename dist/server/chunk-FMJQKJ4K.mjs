import './polyfills.server.mjs';
import{B as w,E as F,F as x,a,b as m,c as p,d as c,e as v,f as y,g as n,h as r,i as f,j as o,k as u,s as C,t as E,u as M,x as D}from"./chunk-64XZ7MH2.mjs";var L=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=m({type:t,selectors:[["app-home"]],decls:2,vars:0,template:function(i,d){i&1&&(n(0,"p"),o(1,"home works!"),r())}});let e=t;return e})();function U(e,t){if(e&1&&(n(0,"li"),o(1),f(2,"br"),o(3),f(4,"br"),o(5),r()),e&2){let g=t.$implicit;c(1),u(" Nome: ",g.name," "),c(2),u(" Data de Nascimento: ",g.birthDate," "),c(2),u(" Login: ",g.login," ")}}var S=(()=>{let t=class t{constructor(){this.users=[{name:"Lucas",birthDate:"15/08/1999",login:"lucas.silva",password:"leleh"},{name:"Let\xEDcia",birthDate:"27/04/2002",login:"leticia.menega",password:"luquinhas"},{name:"zequinha",birthDate:"01/01/1864",login:"ze.quinha",password:"zeze"}]}ngOnInit(){}};t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=m({type:t,selectors:[["app-user-list"]],decls:5,vars:1,consts:[[4,"ngFor","ngForOf"]],template:function(i,d){i&1&&(n(0,"div")(1,"h2"),o(2,"Usu\xE1rios:"),r(),n(3,"ul"),y(4,U,6,3,"li",0),r()()),i&2&&(c(4),v("ngForOf",d.users))},dependencies:[C]});let e=t;return e})();var I=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=m({type:t,selectors:[["app-user-registration"]],decls:4,vars:0,template:function(i,d){i&1&&(n(0,"p"),o(1,"user-registration works!"),r(),n(2,"p"),o(3,"implementar ap\xF3s aula 29"),r())}});let e=t;return e})();var j=[{path:"",component:L},{path:"userlist",component:S},{path:"userregistration",component:I}],b=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=p({type:t}),t.\u0275inj=a({imports:[x.forRoot(j),x]});let e=t;return e})();var h=(()=>{let t=class t{constructor(){this.title="site-modular"}};t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=m({type:t,selectors:[["app-root"]],decls:12,vars:0,consts:[["routerLink","/"],["routerLink","/userlist"],["routerLink","/userregistration"]],template:function(i,d){i&1&&(n(0,"p"),o(1,"Header (WIP)"),r(),n(2,"nav")(3,"a",0),o(4,"In\xEDcio"),r(),n(5,"a",1),o(6,"Lista Usu\xE1rios"),r(),n(7,"a",2),o(8,"Cadastro Usu\xE1rios"),r()(),f(9,"router-outlet"),n(10,"p"),o(11,"Footer (WIP)"),r())},dependencies:[w,F],styles:["nav[_ngcontent-%COMP%]{display:flex;flex-direction:column;margin-bottom:1rem}"]});let e=t;return e})();var N=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=p({type:t,bootstrap:[h]}),t.\u0275inj=a({providers:[M()],imports:[E,b]});let e=t;return e})();var k=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=p({type:t,bootstrap:[h]}),t.\u0275inj=a({imports:[N,D]});let e=t;return e})();export{k as a};