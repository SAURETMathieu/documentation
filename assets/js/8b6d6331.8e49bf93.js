"use strict";(self.webpackChunksauret_doc=self.webpackChunksauret_doc||[]).push([[6695],{207:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>t,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var o=r(5893),i=r(1151);const s={id:"google-drive",title:"Google Drive",sidebar_label:"Google Drive",description:"Configuration de Google Drive"},t=void 0,l={id:"javascript/helpers/google-drive",title:"Google Drive",description:"Configuration de Google Drive",source:"@site/docs/javascript/helpers/googleDrive.md",sourceDirName:"javascript/helpers",slug:"/javascript/helpers/google-drive",permalink:"/documentation/docs/javascript/helpers/google-drive",draft:!1,unlisted:!1,editUrl:"https://github.com/SAURETMathieu/docs/javascript/helpers/googleDrive.md",tags:[],version:"current",frontMatter:{id:"google-drive",title:"Google Drive",sidebar_label:"Google Drive",description:"Configuration de Google Drive"},sidebar:"javascript",previous:{title:"Cloudinary",permalink:"/documentation/docs/javascript/helpers/cloudinary"},next:{title:"Journalisation",permalink:"/documentation/docs/javascript/helpers/logger"}},d={},c=[{value:"Installation des d\xe9pendances",id:"installation-des-d\xe9pendances",level:2},{value:"Configuration de Google Drive",id:"configuration-de-google-drive",level:2},{value:"Suppression d&#39;un fichier sur Google Drive",id:"suppression-dun-fichier-sur-google-drive",level:2}];function a(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"installation-des-d\xe9pendances",children:"Installation des d\xe9pendances"}),"\n",(0,o.jsx)(n.p,{children:"Pour commencer, installez les d\xe9pendances n\xe9cessaires avec la commande suivante :"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"  npm i googleapis\n"})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"googleapis"})," est une d\xe9pendance qui permet de se connecter \xe0 Google Drive."]}),"\n",(0,o.jsx)(n.h2,{id:"configuration-de-google-drive",children:"Configuration de Google Drive"}),"\n",(0,o.jsxs)(n.p,{children:["Cr\xe9ez un fichier ",(0,o.jsx)(n.code,{children:".env"})," \xe0 la racine de votre projet et ajoutez les variables d'environnement suivantes :"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"DRIVE_ID_CLIENT=id_client\nDRIVE_SECRET_CLIENT=secret_client\nREFRESH_TOKEN=refresh_token\nDRIVE_ID_FOLDER=id_folder\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Cr\xe9ez un fichier ",(0,o.jsx)(n.code,{children:"google.connexion.js"})," dans le dossier ",(0,o.jsx)(n.code,{children:"helpers"})," et ajoutez le code suivant :"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'import { google } from "googleapis";\nimport { OAuth2Client } from "google-auth-library";\n\nconst oAuth2Client = new OAuth2Client({\n  clientId: process.env.DRIVE_ID_CLIENT,\n  clientSecret: process.env.DRIVE_SECRET_CLIENT,\n  redirectUri: "https://developers.google.com/oauthplayground",\n});\n\noAuth2Client.setCredentials({ refresh_token: process.env.REFRESH_TOKEN });\nconst drive = google.drive({ version: "v3", auth: oAuth2Client });\n\nexport default drive;\n'})}),"\n",(0,o.jsx)(n.h2,{id:"suppression-dun-fichier-sur-google-drive",children:"Suppression d'un fichier sur Google Drive"}),"\n",(0,o.jsxs)(n.p,{children:["Pour supprimer un fichier sur Google Drive, vous pouvez utiliser la m\xe9thode ",(0,o.jsx)(n.code,{children:"files.delete"})," de l'API Google Drive. Voici un exemple de fonction pour supprimer un fichier :"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'import drive from "../helpers/google.connexion.js";\n\nexport default async function deleteDriveFile(fileId) {\n  try {\n    await drive.files.delete({ fileId });\n    if (response.status === 204) {\n      return true;\n    }\n    return false;\n  } catch (error) {\n    console.error("Erreur lors de la suppression du fichier:", error);\n    return false;\n  }\n}\n'})})]})}function u(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>l,a:()=>t});var o=r(7294);const i={},s=o.createContext(i);function t(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);