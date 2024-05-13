"use strict";(self.webpackChunksauret_doc=self.webpackChunksauret_doc||[]).push([[4821],{1372:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>c,toc:()=>t});var r=s(5893),d=s(1151);const l={},i="POSTGRESQL",c={id:"sql/pgsql",title:"POSTGRESQL",description:"Liste des bdd",source:"@site/docs/sql/pgsql.md",sourceDirName:"sql",slug:"/sql/pgsql",permalink:"/documentation/docs/sql/pgsql",draft:!1,unlisted:!1,editUrl:"https://github.com/SAURETMathieu/docs/sql/pgsql.md",tags:[],version:"current",frontMatter:{}},o={},t=[{value:"Liste des bdd",id:"liste-des-bdd",level:2},{value:"Liste des r\xf4les/droits",id:"liste-des-r\xf4lesdroits",level:2},{value:"Creer une base de donn\xe9e",id:"creer-une-base-de-donn\xe9e",level:2},{value:"Se connecter",id:"se-connecter",level:2},{value:"Cr\xe9er une table",id:"cr\xe9er-une-table",level:2},{value:"Supprimer une table",id:"supprimer-une-table",level:2},{value:"Modifier une table",id:"modifier-une-table",level:2},{value:"Ins\xe9rer des donn\xe9es",id:"ins\xe9rer-des-donn\xe9es",level:2},{value:"Modifier des donn\xe9es",id:"modifier-des-donn\xe9es",level:2},{value:"Supprimer des donn\xe9es",id:"supprimer-des-donn\xe9es",level:2},{value:"Script pour cr\xe9er un BDD",id:"script-pour-cr\xe9er-un-bdd",level:2},{value:"Tout supprimer",id:"tout-supprimer",level:2}];function a(e){const n={code:"code",em:"em",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,d.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"postgresql",children:"POSTGRESQL"}),"\n",(0,r.jsx)(n.h2,{id:"liste-des-bdd",children:"Liste des bdd"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"\\l"})}),"\n",(0,r.jsx)(n.h2,{id:"liste-des-r\xf4lesdroits",children:"Liste des r\xf4les/droits"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"\\du"})}),"\n",(0,r.jsx)(n.h2,{id:"creer-une-base-de-donn\xe9e",children:"Creer une base de donn\xe9e"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"sudo -i -u postgres psql"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"CREATE ROLE trombi_admin WITH LOGIN PASSWORD 'trombi';"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"CREATE DATABASE trombi OWNER trombi_admin;"})}),"\n",(0,r.jsxs)(n.p,{children:["Ne pas oublier de changer le fichier ",(0,r.jsx)(n.code,{children:".env"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"Exemple:"})})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"PGUSER=trombi_admin \nPGHOST=localhost\nPGPASSWORD=trombi \nPGDATABASE=trombi \nPGPORT=5432\n"})}),"\n",(0,r.jsx)(n.h2,{id:"se-connecter",children:"Se connecter"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"psql -h localhost -U trombi_admin -d trombi;"})}),"\n",(0,r.jsx)(n.h2,{id:"cr\xe9er-une-table",children:"Cr\xe9er une table"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:'  CREATE TABLE "promo" (\n    "id" SERIAL PRIMARY KEY,\n    "name" VARCHAR(64),\n    "github_organization" VARCHAR\n  );\n'})}),"\n",(0,r.jsx)(n.h2,{id:"supprimer-une-table",children:"Supprimer une table"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:'  DROP TABLE "name_db";\n'})}),"\n",(0,r.jsx)(n.h2,{id:"modifier-une-table",children:"Modifier une table"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:'  ALTER TABLE "name_db" ADD COLUMN "date" DATE;\n'})}),"\n",(0,r.jsx)(n.h2,{id:"ins\xe9rer-des-donn\xe9es",children:"Ins\xe9rer des donn\xe9es"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:'  INSERT INTO "name_db"("col1","col2",...)\n  VALUES (\'val1\',\'val2\',...);\n'})}),"\n",(0,r.jsx)(n.h2,{id:"modifier-des-donn\xe9es",children:"Modifier des donn\xe9es"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:'  UPDATE "name_db" SET "col1" = \'val1\' WHERE id = 1;\n'})}),"\n",(0,r.jsx)(n.h2,{id:"supprimer-des-donn\xe9es",children:"Supprimer des donn\xe9es"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:'  DELETE FROM "promo" WHERE id = 1;\n'})}),"\n",(0,r.jsx)(n.h2,{id:"script-pour-cr\xe9er-un-bdd",children:"Script pour cr\xe9er un BDD"}),"\n",(0,r.jsx)(n.p,{children:"Dans le repo o\xf9 se trouve le fichier create_db.sql"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"  psql -U trombi_admin -d trombi -f data/create_db.sql\n"})}),"\n",(0,r.jsx)(n.h2,{id:"tout-supprimer",children:"Tout supprimer"}),"\n",(0,r.jsxs)(n.p,{children:["En dehors de la db seulement donc ",(0,r.jsx)(n.code,{children:"exit"})," puis ",(0,r.jsx)(n.code,{children:"sudo -i -u postgres psql"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:'  DROP DATABASE "trombi";\n'})})]})}function u(e={}){const{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>c,a:()=>i});var r=s(7294);const d={},l=r.createContext(d);function i(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);