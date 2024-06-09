"use strict";(self.webpackChunksauret_doc=self.webpackChunksauret_doc||[]).push([[9126],{9309:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>t,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var i=r(5893),o=r(1151);const a={id:"cloudinary",title:"Cloudinary",sidebar_label:"Cloudinary",description:"Configuration de Cloudinary"},s=void 0,l={id:"javascript/helpers/cloudinary",title:"Cloudinary",description:"Configuration de Cloudinary",source:"@site/docs/javascript/helpers/cloudinary.md",sourceDirName:"javascript/helpers",slug:"/javascript/helpers/cloudinary",permalink:"/documentation/docs/javascript/helpers/cloudinary",draft:!1,unlisted:!1,editUrl:"https://github.com/SAURETMathieu/docs/javascript/helpers/cloudinary.md",tags:[],version:"current",frontMatter:{id:"cloudinary",title:"Cloudinary",sidebar_label:"Cloudinary",description:"Configuration de Cloudinary"},sidebar:"javascript",previous:{title:"Helpers",permalink:"/documentation/docs/javascript/helpers"},next:{title:"Google Drive",permalink:"/documentation/docs/javascript/helpers/google-drive"}},d={},u=[{value:"Installation des d\xe9pendences",id:"installation-des-d\xe9pendences",level:2},{value:"Configuration de Cloudinary",id:"configuration-de-cloudinary",level:2},{value:"Suppression d&#39;une image sur Cloudinary",id:"suppression-dune-image-sur-cloudinary",level:2},{value:"T\xe9l\xe9charger une image sur Cloudinary",id:"t\xe9l\xe9charger-une-image-sur-cloudinary",level:2}];function c(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"installation-des-d\xe9pendences",children:"Installation des d\xe9pendences"}),"\n",(0,i.jsx)(n.p,{children:"Pour commencer, installez les d\xe9pendances n\xe9cessaires avec la commande suivante :"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"  npm i cloudinary\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"cloudinary"})," est une d\xe9pendance qui permet de se connecter \xe0 Cloudinary."]}),"\n",(0,i.jsx)(n.h2,{id:"configuration-de-cloudinary",children:"Configuration de Cloudinary"}),"\n",(0,i.jsxs)(n.p,{children:["Cr\xe9ez un fichier ",(0,i.jsx)(n.code,{children:".env"})," \xe0 la racine de votre projet et ajoutez les variables d'environnement suivantes :"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"CLOUDINARY_URL=cloudinary://api_key:api_secret@cloud_name\nCLOUD_NAME=cloud_name\nAPI_KEY=api_key\nAPI_SECRET=api_secret\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Cr\xe9ez un fichier ",(0,i.jsx)(n.code,{children:"cloudinary.connexion.js"})," dans le dossier ",(0,i.jsx)(n.code,{children:"helpers"})," et ajoutez le code suivant :"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'import { v2 as cloudinary } from "cloudinary";\n\ncloudinary.config({\n  secure: true,\n  cloud_name: process.env.CLOUD_NAME,\n  api_key: process.env.API_KEY,\n  api_secret: process.env.API_SECRET,\n});\n\nexport default cloudinary;\n'})}),"\n",(0,i.jsx)(n.h2,{id:"suppression-dune-image-sur-cloudinary",children:"Suppression d'une image sur Cloudinary"}),"\n",(0,i.jsxs)(n.p,{children:["Pour supprimer une image sur Cloudinary, vous pouvez utiliser la m\xe9thode ",(0,i.jsx)(n.code,{children:"destroy"})," de l'API Cloudinary. Voici un exemple de fonction pour supprimer une image :"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"import cloudinary from '../helpers/cloudinary.connexion.js';\n\nexport default async function deleteCloudinaryFile(fileId) {\n  try {\n    const result = await cloudinary.uploader.destroy(fileId);\n    if (result.result !== 'ok') {\n      throw new Error('Erreur lors de la suppression du fichier');\n    }\n    return true;\n  } catch (error) {\n    console.error('Erreur lors de la suppression du fichier:', error);\n    return false;\n  }\n}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"t\xe9l\xe9charger-une-image-sur-cloudinary",children:"T\xe9l\xe9charger une image sur Cloudinary"}),"\n",(0,i.jsxs)(n.p,{children:["Pour t\xe9l\xe9charger une image sur Cloudinary, vous pouvez utiliser la m\xe9thode ",(0,i.jsx)(n.code,{children:"upload"})," de l'API Cloudinary. Voici un exemple de fonction pour t\xe9l\xe9charger une image :"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"import cloudinary from '../helpers/cloudinary.connexion.js';\n\nexport default async function uploadCloudinaryFile(file) {\n  try {\n    const result = await cloudinary.uploader.upload(file, options);\n    return result.secure_url;\n  } catch (error) {\n    console.error('Erreur lors du t\xe9l\xe9chargement du fichier:', error);\n    return false;\n  }\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Vous pouvez personnaliser cette fonction en ajoutant des options suppl\xe9mentaires pour le t\xe9l\xe9chargement de l'image. Consultez la ",(0,i.jsx)(n.a,{href:"https://cloudinary.com/documentation/image_upload_api_reference",children:"documentation Cloudinary"})," pour plus d'informations sur les options disponibles."]})]})}function t(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>l,a:()=>s});var i=r(7294);const o={},a=i.createContext(o);function s(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);