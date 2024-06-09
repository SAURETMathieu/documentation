"use strict";(self.webpackChunksauret_doc=self.webpackChunksauret_doc||[]).push([[4681],{7055:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>d,toc:()=>l});var t=r(5893),n=r(1151);const s={id:"core-datamapper",title:"Core Datamapper",sidebar_label:"Core Datamapper",description:"Core Datamapper"},i=void 0,d={id:"javascript/datamappers/core-datamapper",title:"Core Datamapper",description:"Core Datamapper",source:"@site/docs/javascript/datamappers/coreDatamapper.md",sourceDirName:"javascript/datamappers",slug:"/javascript/datamappers/core-datamapper",permalink:"/docs/javascript/datamappers/core-datamapper",draft:!1,unlisted:!1,editUrl:"https://github.com/SAURETMathieu/docs/javascript/datamappers/coreDatamapper.md",tags:[],version:"current",frontMatter:{id:"core-datamapper",title:"Core Datamapper",sidebar_label:"Core Datamapper",description:"Core Datamapper"},sidebar:"javascript",previous:{title:"Datamappers",permalink:"/docs/javascript/datamappers"},next:{title:"Error",permalink:"/docs/javascript/error"}},c={},l=[{value:"Core Datamapper",id:"core-datamapper",level:2},{value:"Exemple d&#39;utilisation",id:"exemple-dutilisation",level:2}];function o(e){const a={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,n.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.h2,{id:"core-datamapper",children:"Core Datamapper"}),"\n",(0,t.jsx)(a.p,{children:"Le core datamapper est un module qui permet de mapper les donn\xe9es d'une entit\xe9 avec une base de donn\xe9es."}),"\n",(0,t.jsxs)(a.p,{children:["Cr\xe9ez un fichier ",(0,t.jsx)(a.code,{children:"coreDatamapper.js"})," dans le dossier ",(0,t.jsx)(a.code,{children:"datamappers"})," et ajoutez le code suivant :"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-js",children:'import client from "../helpers/pg.client.js";\n\nexport default class CoreDatamapper {\n  static readTableName;\n\n  static writeTableName;\n\n  static orderedTableName;\n\n  static async findAll() {\n    const result = await client.query(\n      `SELECT * FROM "${this.readTableName}" ORDER BY "id"`\n    );\n    return result.rows;\n  }\n\n  static async findByPk(id) {\n    const result = await client.query(\n      `SELECT * FROM "${this.readTableName}" WHERE "id" = $1`,\n      [id]\n    );\n    return result.rows[0];\n  }\n\n  static async insert(data) {\n    const result = await client.query(\n      `SELECT * FROM create_${this.writeTableName}($1)`,\n      [data]\n    );\n    return result.rows[0];\n  }\n\n  static async update(data) {\n    const result = await client.query(\n      `SELECT * FROM update_${this.writeTableName}($1)`,\n      [data]\n    );\n    return result.rows[0];\n  }\n\n  static async delete(id) {\n    const result = await client.query(\n      `DELETE FROM "${this.writeTableName}" WHERE "id" = $1`,\n      [id]\n    );\n    return !!result.rowCount;\n  }\n}\n'})}),"\n",(0,t.jsx)(a.p,{children:"A noter que ce module est con\xe7u pour fonctionner avec PostgreSQL. Vous pouvez l'adapter pour fonctionner avec d'autres bases de donn\xe9es."}),"\n",(0,t.jsxs)(a.p,{children:["\u26a0\ufe0f"," Les m\xe9thodes ",(0,t.jsx)(a.code,{children:"create_${this.writeTableName}"})," et ",(0,t.jsx)(a.code,{children:"update_${this.writeTableName}"})," doivent \xeatre cr\xe9\xe9es dans la base de donn\xe9es pour ins\xe9rer et mettre \xe0 jour les donn\xe9es."]}),"\n",(0,t.jsxs)(a.p,{children:["Vous pouvez trouver un exemple de client PostgreSQL dans le fichier ",(0,t.jsx)(a.code,{children:"pg.client.js"})," du dossier ",(0,t.jsx)(a.code,{children:"databases"}),"."]}),"\n",(0,t.jsxs)(a.p,{children:["Lien vers le fichier ",(0,t.jsx)(a.a,{href:"../databases/pgsql",children:"pg.client.js"}),"."]}),"\n",(0,t.jsxs)(a.p,{children:["Le module ",(0,t.jsx)(a.code,{children:"CoreDatamapper"})," contient les m\xe9thodes suivantes :"]}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:[(0,t.jsx)(a.code,{children:"findAll"})," : R\xe9cup\xe8re toutes les donn\xe9es de la table."]}),"\n",(0,t.jsxs)(a.li,{children:[(0,t.jsx)(a.code,{children:"findByPk"})," : R\xe9cup\xe8re une ligne de la table par sa cl\xe9 primaire."]}),"\n",(0,t.jsxs)(a.li,{children:[(0,t.jsx)(a.code,{children:"insert"})," : Ins\xe8re une nouvelle ligne dans la table."]}),"\n",(0,t.jsxs)(a.li,{children:[(0,t.jsx)(a.code,{children:"update"})," : Met \xe0 jour une ligne de la table."]}),"\n",(0,t.jsxs)(a.li,{children:[(0,t.jsx)(a.code,{children:"delete"})," : Supprime une ligne de la table."]}),"\n"]}),"\n",(0,t.jsx)(a.p,{children:"Vous pouvez \xe9tendre ce module pour ajouter des m\xe9thodes sp\xe9cifiques \xe0 une entit\xe9."}),"\n",(0,t.jsx)(a.h2,{id:"exemple-dutilisation",children:"Exemple d'utilisation"}),"\n",(0,t.jsxs)(a.p,{children:["Voici un exemple d'utilisation du ",(0,t.jsx)(a.code,{children:"CoreDatamapper"})," :"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-js",children:'import CoreDatamapper from "./datamappers/coreDatamapper.js";\n\nexport default class UserDatamapper extends CoreDatamapper {\n  static readTableName = "users";\n  static writeTableName = "users";\n  static orderedTableName = "users";\n}\n'})}),"\n",(0,t.jsxs)(a.p,{children:["Dans cet exemple, nous avons cr\xe9\xe9 un ",(0,t.jsx)(a.code,{children:"UserDatamapper"})," qui \xe9tend le ",(0,t.jsx)(a.code,{children:"CoreDatamapper"})," et d\xe9finit les noms des tables de lecture, d'\xe9criture et d'ordonnancement."]}),"\n",(0,t.jsxs)(a.p,{children:["Vous pouvez maintenant utiliser le ",(0,t.jsx)(a.code,{children:"UserDatamapper"})," pour interagir avec la table ",(0,t.jsx)(a.code,{children:"users"})," de la base de donn\xe9es."]})]})}function p(e={}){const{wrapper:a}={...(0,n.a)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},1151:(e,a,r)=>{r.d(a,{Z:()=>d,a:()=>i});var t=r(7294);const n={},s=t.createContext(n);function i(e){const a=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function d(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),t.createElement(s.Provider,{value:a},e.children)}}}]);