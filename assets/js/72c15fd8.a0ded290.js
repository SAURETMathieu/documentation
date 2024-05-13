"use strict";(self.webpackChunksauret_doc=self.webpackChunksauret_doc||[]).push([[3797],{4748:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>u,frontMatter:()=>t,metadata:()=>o,toc:()=>l});var i=r(5893),s=r(1151);const t={id:"upload-file",title:"T\xe9l\xe9charger des fichiers",sidebar_label:"T\xe9l\xe9charger des fichiers",description:"Middleware pour t\xe9l\xe9charger des fichiers"},a=void 0,o={id:"javascript/middlewares/upload-file",title:"T\xe9l\xe9charger des fichiers",description:"Middleware pour t\xe9l\xe9charger des fichiers",source:"@site/docs/javascript/middlewares/uploadFile.md",sourceDirName:"javascript/middlewares",slug:"/javascript/middlewares/upload-file",permalink:"/documentation/docs/javascript/middlewares/upload-file",draft:!1,unlisted:!1,editUrl:"https://github.com/SAURETMathieu/docs/javascript/middlewares/uploadFile.md",tags:[],version:"current",frontMatter:{id:"upload-file",title:"T\xe9l\xe9charger des fichiers",sidebar_label:"T\xe9l\xe9charger des fichiers",description:"Middleware pour t\xe9l\xe9charger des fichiers"},sidebar:"javascript",previous:{title:"Validation Joi",permalink:"/documentation/docs/javascript/middlewares/validation"},next:{title:"ORM",permalink:"/documentation/docs/javascript/orm"}},d={},l=[{value:"Installation des d\xe9pendances",id:"installation-des-d\xe9pendances",level:2},{value:"Middleware pour t\xe9l\xe9charger des fichiers",id:"middleware-pour-t\xe9l\xe9charger-des-fichiers",level:2}];function c(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"installation-des-d\xe9pendances",children:"Installation des d\xe9pendances"}),"\n",(0,i.jsx)(n.p,{children:"Pour commencer, installez les d\xe9pendances n\xe9cessaires avec la commande suivante :"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"  npm i multer music-metadata googleapis cloudinary\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"multer"})," est une d\xe9pendance qui permet de g\xe9rer les fichiers t\xe9l\xe9charg\xe9s."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"music-metadata"})," est une d\xe9pendance qui permet de r\xe9cup\xe9rer les m\xe9tadonn\xe9es d'un fichier audio."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"googleapis"})," est une d\xe9pendance qui permet de se connecter \xe0 Google Drive."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"cloudinary"})," est une d\xe9pendance qui permet de se connecter \xe0 Cloudinary."]}),"\n",(0,i.jsx)(n.h2,{id:"middleware-pour-t\xe9l\xe9charger-des-fichiers",children:"Middleware pour t\xe9l\xe9charger des fichiers"}),"\n",(0,i.jsx)(n.p,{children:"Ce middleware permet de t\xe9l\xe9charger des fichiers sur Google Drive et Cloudinary."}),"\n",(0,i.jsx)(n.p,{children:"Si le fichier est un fichier audio, il est t\xe9l\xe9charg\xe9 sur Google Drive. Si le fichier est une image, il est t\xe9l\xe9charg\xe9 sur Cloudinary."}),"\n",(0,i.jsx)(n.p,{children:"Si vous n'avez pas configur\xe9 Google Drive ou Cloudinary, vous pouvez modifier ce middleware pour t\xe9l\xe9charger les fichiers sur un autre service."}),"\n",(0,i.jsx)(n.p,{children:"Vous trouverez ci-dessous un lien pour configurer les connexions \xe0 Google Drive et Cloudinary."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"../helpers/google-drive",children:"Connexion \xe0 Google Drive"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"../helpers/cloudinary",children:"Connexion \xe0 Cloudinary"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'import multer from "multer";\nimport path from "path";\nimport fs from "fs";\nimport * as metadata from "music-metadata";\nimport drive from "../helpers/google.connexion.js";\nimport cloudinary from "../helpers/cloudinary.connexion.js";\n\nconst storage = multer.diskStorage({\n  destination(request, file, cb) {\n    cb(null, "./uploads");\n  },\n  filename(request, file, cb) {\n    cb(\n      null,\n      `${request.body.name}-${Date.now()}${path.extname(file.originalname)}`\n    );\n  },\n});\n\nconst upload = multer({ storage });\n\nconst options = {\n  use_filename: true,\n  unique_filename: false,\n  overwrite: true,\n  resource_type: "image",\n  format: "webp",\n  secure: true,\n};\n\nconst uploadFile = (request, response, next) => {\n  if (\n    request.url.includes("/api/admin/albums") ||\n    request.url.includes("/api/admin/tracks") ||\n    request.url.includes("/api/admin/artists")\n  ) {\n    options.transformation = {\n      width: 200,\n      height: 200,\n      crop: "fill",\n    };\n  } else {\n    delete options.transformation;\n  }\n\n  upload.any()(request, response, async (err) => {\n    if (err) {\n      return response\n        .status(400)\n        .json("Erreur lors de la r\xe9cup\xe9ration du fichier.");\n    }\n\n    if (!request.files || request.files.length === 0) {\n      delete request.body.url_image;\n      delete request.body.url_sound;\n      return next();\n    }\n\n    if (!request.body.url_image) {\n      delete request.body.url_image;\n    }\n\n    if (!request.body.url_sound) {\n      delete request.body.url_sound;\n    }\n\n    try {\n      const { files } = request;\n      const driveFolderId = process.env.DRIVE_ID_FOLDER;\n\n      const uploadPromises = files.map(async (file) => {\n        const filePath = file.path;\n        const fileStream = fs.createReadStream(filePath);\n\n        if (file.mimetype.startsWith("audio/")) {\n          const driveResponse = await drive.files.create({\n            requestBody: {\n              name: file.filename,\n              parents: [driveFolderId],\n            },\n            media: {\n              mimeType: file.mimetype,\n              body: fileStream,\n            },\n          });\n\n          if (driveResponse.status === 200) {\n            const fileUrl = `https://drive.google.com/thumbnail?id=${driveResponse.data.id}`;\n            const metadatas = await metadata.parseFile(filePath);\n            request.body.duration = Math.ceil(metadatas.format.duration);\n            request.body.url_sound = fileUrl;\n            request.sound = { id: driveResponse.data.id };\n          }\n        }\n\n        if (file.mimetype.startsWith("image/")) {\n          const result = await cloudinary.uploader.upload(filePath, options);\n          if (!result.secure_url) {\n            throw new Error("Erreur lors de l\'upload de l\'image");\n          }\n          request.body.url_image = result.secure_url;\n        }\n\n        fs.unlinkSync(filePath);\n        if (request.body.data && typeof request.body.data === "string") {\n          request.body = JSON.parse(request.body.data);\n        }\n      });\n\n      await Promise.all(uploadPromises);\n      return next();\n    } catch (error) {\n      return response\n        .status(500)\n        .json("Erreur lors de la r\xe9cup\xe9ration du fichier");\n    }\n  });\n};\n\nexport default uploadFile;\n'})})]})}function u(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>o,a:()=>a});var i=r(7294);const s={},t=i.createContext(s);function a(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);