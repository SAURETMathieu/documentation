"use strict";(self.webpackChunksauret_doc=self.webpackChunksauret_doc||[]).push([[9662],{2656:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var t=r(5893),s=r(1151);const o={id:"core-controller",title:"Core Controller",sidebar_label:"Core Controller",description:"Core Controller"},l=void 0,i={id:"javascript/controllers/core-controller",title:"Core Controller",description:"Core Controller",source:"@site/docs/javascript/controllers/coreController.md",sourceDirName:"javascript/controllers",slug:"/javascript/controllers/core-controller",permalink:"/docs/javascript/controllers/core-controller",draft:!1,unlisted:!1,editUrl:"https://github.com/SAURETMathieu/docs/javascript/controllers/coreController.md",tags:[],version:"current",frontMatter:{id:"core-controller",title:"Core Controller",sidebar_label:"Core Controller",description:"Core Controller"},sidebar:"javascript",previous:{title:"Controllers",permalink:"/docs/javascript/controllers"},next:{title:"Datamappers",permalink:"/docs/javascript/datamappers"}},a={},c=[{value:"Core Controller",id:"core-controller",level:2},{value:"Exemple d&#39;utilisation",id:"exemple-dutilisation",level:2},{value:"M\xe9thodes disponibles",id:"m\xe9thodes-disponibles",level:2}];function d(e){const n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"core-controller",children:"Core Controller"}),"\n",(0,t.jsx)(n.p,{children:"Le core controller est un module qui permet de g\xe9rer les requ\xeates HTTP d'une entit\xe9."}),"\n",(0,t.jsxs)(n.p,{children:["Cr\xe9ez un fichier ",(0,t.jsx)(n.code,{children:"coreController.js"})," dans le dossier ",(0,t.jsx)(n.code,{children:"controllers"})," et ajoutez le code suivant :"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"export default class Controller {\n  static datamapper;\n\n  static async getAll(_, res) {\n    const rows = await this.datamapper.findAll();\n    res.status(200).json(rows);\n  }\n\n  static async getByPk({ params }, res, next) {\n    const { id } = params;\n    const row = await this.datamapper.findByPk(id);\n    if (!row) {\n      return next();\n    }\n    return res.status(200).json(row);\n  }\n\n  static async create({ body }, res) {\n    const row = await this.datamapper.insert(body);\n    res.status(201).json(row);\n  }\n\n  static async update({ params, body }, res, next) {\n    const { id } = params;\n    const dbData = await this.datamapper.findByPk(id);\n\n    if (!dbData) {\n      return next();\n    }\n\n    const data = { ...dbData, ...body };\n\n    const row = await this.datamapper.update(data);\n    if (!row) {\n      return next();\n    }\n    return res.status(200).json(row);\n  }\n\n  static async delete({ params }, res, next) {\n    const { id } = params;\n    const deleted = await this.datamapper.delete(id);\n    if (!deleted) {\n      return next();\n    }\n    return res.status(204).json();\n  }\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Dans cet exemple, nous avons cr\xe9\xe9 un ",(0,t.jsx)(n.code,{children:"Controller"})," qui d\xe9finit les m\xe9thodes pour g\xe9rer les requ\xeates HTTP d'une entit\xe9."]}),"\n",(0,t.jsxs)(n.p,{children:["Vous pouvez maintenant utiliser le ",(0,t.jsx)(n.code,{children:"Controller"})," pour g\xe9rer les requ\xeates HTTP d'une entit\xe9."]}),"\n",(0,t.jsx)(n.h2,{id:"exemple-dutilisation",children:"Exemple d'utilisation"}),"\n",(0,t.jsxs)(n.p,{children:["Voici un exemple d'utilisation du ",(0,t.jsx)(n.code,{children:"CoreController"})," :"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'import UserDatamapper from "../datamappers/user.datamapper.js";\nimport Controller from "./controllers/coreController.js";\n\nexport default class UserController extends Controller {\n  static datamapper = UserDatamapper;\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Dans cet exemple, nous avons cr\xe9\xe9 un ",(0,t.jsx)(n.code,{children:"UserController"})," qui \xe9tend le ",(0,t.jsx)(n.code,{children:"Controller"})," et d\xe9finit le datamapper de l'entit\xe9 ",(0,t.jsx)(n.code,{children:"Exemple"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Vous pouvez maintenant utiliser le ",(0,t.jsx)(n.code,{children:"UserController"})," pour g\xe9rer les requ\xeates HTTP de l'entit\xe9 ",(0,t.jsx)(n.code,{children:"Exemple"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"m\xe9thodes-disponibles",children:"M\xe9thodes disponibles"}),"\n",(0,t.jsxs)(n.p,{children:["Le module ",(0,t.jsx)(n.code,{children:"CoreController"})," contient les m\xe9thodes suivantes :"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"getAll"})," : R\xe9cup\xe8re toutes les donn\xe9es de l'entit\xe9."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"getByPk"})," : R\xe9cup\xe8re une ligne de l'entit\xe9 par sa cl\xe9 primaire."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"create"})," : Ins\xe8re une nouvelle ligne dans l'entit\xe9."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"update"})," : Met \xe0 jour une ligne de l'entit\xe9."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"delete"})," : Supprime une ligne de l'entit\xe9."]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>i,a:()=>l});var t=r(7294);const s={},o=t.createContext(s);function l(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);