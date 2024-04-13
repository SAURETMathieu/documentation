"use strict";(self.webpackChunksauret_doc=self.webpackChunksauret_doc||[]).push([[2840],{4425:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var n=a(5893),r=a(1151);const i={id:"validation",title:"Validation Joi",sidebar_label:"Validation Joi"},s=void 0,o={id:"javascript/Middlewares/validation",title:"Validation Joi",description:"Installation des d\xe9pendences",source:"@site/docs/javascript/Middlewares/validation.md",sourceDirName:"javascript/Middlewares",slug:"/javascript/Middlewares/validation",permalink:"/docs/javascript/Middlewares/validation",draft:!1,unlisted:!1,editUrl:"https://github.com/SAURETMathieu/docs/javascript/Middlewares/validation.md",tags:[],version:"current",frontMatter:{id:"validation",title:"Validation Joi",sidebar_label:"Validation Joi"},sidebar:"javascriptSidebar",previous:{title:"Cors",permalink:"/docs/javascript/Middlewares/cors"},next:{title:"Les Promesses",permalink:"/docs/javascript/Promise/"}},d={},l=[{value:"Installation des d\xe9pendences",id:"installation-des-d\xe9pendences",level:2},{value:"Middleware de Validation Joi",id:"middleware-de-validation-joi",level:2}];function c(e){const t={code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"installation-des-d\xe9pendences",children:"Installation des d\xe9pendences"}),"\n",(0,n.jsx)(t.p,{children:"Pour commencer, installez les d\xe9pendances n\xe9cessaires avec la commande suivante :"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"  npm i joi\n"})}),"\n",(0,n.jsx)(t.h2,{id:"middleware-de-validation-joi",children:"Middleware de Validation Joi"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:"import ApiError from '../errors/api.error.js';\n\nexport default (sourceProperty, schema) => async (request, _, next) => {\n  try {\n    await schema.validateAsync(request[sourceProperty]);\n    next();\n  } catch (error) {\n    next(new ApiError(error.message, { httpStatus: 400 }));\n  }\n};\n"})}),"\n",(0,n.jsx)(t.p,{children:"Utilisez ce middleware dans un routeur"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",metastring:"{4}",children:"adminArtistRouter.route('/')\n  .get(controllerWrapper(artistController.getAll.bind(artistController)))\n  .post(\n    validationMiddleware('body', artistCreateSchema),\n    controllerWrapper(artistController.create.bind(artistController)),\n  );\n"})})]})}function p(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},1151:(e,t,a)=>{a.d(t,{Z:()=>o,a:()=>s});var n=a(7294);const r={},i=n.createContext(r);function s(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);