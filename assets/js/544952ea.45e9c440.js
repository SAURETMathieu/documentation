"use strict";(self.webpackChunksauret_doc=self.webpackChunksauret_doc||[]).push([[2391],{810:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>a,contentTitle:()=>i,default:()=>l,frontMatter:()=>s,metadata:()=>u,toc:()=>p});var t=n(5893),o=n(1151);const s={id:"router",title:"Routeur",sidebar_label:"Routeur"},i=void 0,u={id:"javascript/express/router",title:"Routeur",description:"Installation des d\xe9pendences",source:"@site/docs/javascript/express/router.md",sourceDirName:"javascript/express",slug:"/javascript/express/router",permalink:"/documentation/docs/javascript/express/router",draft:!1,unlisted:!1,editUrl:"https://github.com/SAURETMathieu/docs/javascript/express/router.md",tags:[],version:"current",frontMatter:{id:"router",title:"Routeur",sidebar_label:"Routeur"},sidebar:"javascript",previous:{title:"Express server",permalink:"/documentation/docs/javascript/express/express-server"},next:{title:"Init projet",permalink:"/documentation/docs/javascript/express/init"}},a={},p=[{value:"Installation des d\xe9pendences",id:"installation-des-d\xe9pendences",level:2},{value:"Configuration du routeur",id:"configuration-du-routeur",level:2},{value:"Sous-routeurs",id:"sous-routeurs",level:3},{value:"Utilisation du routeur",id:"utilisation-du-routeur",level:2}];function d(e){const r={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h2,{id:"installation-des-d\xe9pendences",children:"Installation des d\xe9pendences"}),"\n",(0,t.jsx)(r.p,{children:"Pour commencer, installez les d\xe9pendances n\xe9cessaires avec la commande suivante :"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"  npm i express\n"})}),"\n",(0,t.jsx)(r.h2,{id:"configuration-du-routeur",children:"Configuration du routeur"}),"\n",(0,t.jsxs)(r.p,{children:["Cr\xe9ez un dossier ",(0,t.jsx)(r.code,{children:"routers"})," dans le dossier ",(0,t.jsx)(r.code,{children:"app"})," puis cr\xe9ez le fichier ",(0,t.jsx)(r.code,{children:"index.js"})]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-js",children:"import express from 'express';\nimport apiRouter from './api/index.router.js';\n\nconst router = express.Router();\n\nrouter.use('/api', apiRouter);\n\nexport default router;\n"})}),"\n",(0,t.jsxs)(r.p,{children:["Une fois le routeur principal cr\xe9\xe9. Cr\xe9ez un nouveau dossier par exemple ",(0,t.jsx)(r.code,{children:"api"}),"\nPuis cr\xe9ez un fichier ",(0,t.jsx)(r.code,{children:"index"})]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-js",children:"import express from 'express';\nimport apiRouter from './site/index.router.js';\nimport adminRouter from './admin/index.router.js';\nimport errorHandler from '../../helpers/error.handler.js';\nimport authenticateToken from '../../middlewares/authenticate.token.js';\nimport authorizeAdmin from '../../middlewares/authorize.admin.js';\n\nconst router = express.Router();\n\nrouter.use('/admin', authenticateToken, authorizeAdmin, adminRouter);\n\nrouter.use('/', apiRouter);\n\nrouter.use(errorHandler);\n\nexport default router;\n"})}),"\n",(0,t.jsx)(r.h3,{id:"sous-routeurs",children:"Sous-routeurs"}),"\n",(0,t.jsxs)(r.p,{children:["Ensuite vous pouvez cr\xe9er autant de ",(0,t.jsx)(r.code,{children:"sous-dossier"})," que vous avez besoin pour faire des ",(0,t.jsx)(r.code,{children:"sous-routeurs"}),"\nIl faudra cr\xe9er un fichier index \xe0 chaque sous-dossier"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-js",children:"import express from 'express';\nimport ApiError from '../../../errors/api.error.js';\nimport apiUserRouter from './user.router.js';\nimport apiAuthRouter from './auth.router.js';\nimport apiLabelRouter from './label.router.js';\nimport apiAlbumRouter from './album.router.js';\nimport apiEventRouter from './event.router.js';\nimport apiContactRouter from './contact.router.js';\nimport apiTrackRouter from './track.router.js';\n\nconst apiSiteRouter = express.Router();\n\napiSiteRouter.use('/users', apiUserRouter);\n\napiSiteRouter.use('/auth', apiAuthRouter);\n\napiSiteRouter.use('/labels', apiLabelRouter);\n\napiSiteRouter.use('/albums', apiAlbumRouter);\n\napiSiteRouter.use('/events', apiEventRouter);\n\napiSiteRouter.use('/contact', apiContactRouter);\n\napiSiteRouter.use('/tracks', apiTrackRouter);\n\napiSiteRouter.use((_, __, next) => {\n  next(new ApiError('Resource not found', { httpStatus: 404 }));\n});\n\nexport default apiSiteRouter;\n"})}),"\n",(0,t.jsx)(r.p,{children:"Ainsi vous pourrez cr\xe9er un fichier pour chaque sous-routeur"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-js",children:"import express from 'express';\nimport userController from '../../../controllers/user.controller.js';\nimport controllerWrapper from '../../../helpers/controller.wrapper.js';\nimport validationMiddleware from '../../../middlewares/validation.middleware.js';\nimport userCreateSchema from '../../../schemas/user.create.schema.js';\nimport userUpdateSchema from '../../../schemas/user.update.schema.js';\nimport authenticateToken from '../../../middlewares/authenticate.token.js';\n\nconst userRouter = express.Router();\n\nuserRouter\n  .route('/')\n  /**\n   * POST /api/users\n   * @summary Create a new user\n   * @tags Users\n   * @param {userInput} request.body.required - user info\n   * @return {User} 201 - success response - application/json\n   * @return {ApiJsonError} 400 - Bad request response - application/json\n   * @return {ApiJsonError} 500 - Internal Server Error - application/json\n   */\n  .post(\n    validationMiddleware('body', userCreateSchema),\n    controllerWrapper(userController.create.bind(userController)),\n  );\n\nuserRouter\n  .route('/:id(\\\\d+)')\n  /**\n   * GET /api/users/{id}\n   * @summary Get a user from its id\n   * @tags Users\n   * @param {number} id.path.required - Id of the user to get\n   * @return {User} 200 - success response - application/json\n   * @return {ApiJsonError} 400 - Bad request response - application/json\n   * @return {ApiJsonError} 404 - Not found response - application/json\n   * @return {ApiJsonError} 500 - Internal Server Error - application/json\n   */\n  .get(\n    authenticateToken,\n    controllerWrapper(userController.getByPk.bind(userController)),\n  )\n  /**\n   * PATCH /api/users/{id}\n   * @summary Update a user\n   * @tags Users\n   * @param {number} id.path.required - Id of the user to update\n   * @param {userInput} request.body.required - user info\n   * @return {User} 200 - success response - application/json\n   * @return {ApiJsonError} 400 - Bad request response - application/json\n   * @return {ApiJsonError} 404 - Not found response - application/json\n   * @return {ApiJsonError} 500 - Internal Server Error - application/json\n   */\n  .patch(\n    authenticateToken,\n    validationMiddleware('body', userUpdateSchema),\n    controllerWrapper(userController.update.bind(userController)),\n  )\n  /**\n   * DELETE /api/users/{id}\n   * @summary Delete a user\n   * @tags Users\n   * @param {number} id.path.required - Id of the user to delete\n   * @return {User} 203 - success response - application/json\n   * @return {ApiJsonError} 400 - Bad request response - application/json\n   * @return {ApiJsonError} 404 - Not found response - application/json\n   * @return {ApiJsonError} 500 - Internal Server Error - application/json\n   */\n  .delete(\n    authenticateToken,\n    controllerWrapper(userController.delete.bind(userController)),\n  );\n\nuserRouter.route('/:id(\\\\d+)/likes')\n  .get(\n    authenticateToken,\n    controllerWrapper(userController.getOneUserWithLikes.bind(userController)),\n  );\n\nexport default userRouter;\n"})}),"\n",(0,t.jsx)(r.h2,{id:"utilisation-du-routeur",children:"Utilisation du routeur"}),"\n",(0,t.jsx)(r.p,{children:"Int\xe9grez le routeur dans votre application en l'ajoutant \xe0 la liste des middlewares utilis\xe9s. Par exemple :"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-js",children:"import router from './routers/index.router.js';\n\napp.use(router);\n"})})]})}function l(e={}){const{wrapper:r}={...(0,o.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},1151:(e,r,n)=>{n.d(r,{Z:()=>u,a:()=>i});var t=n(7294);const o={},s=t.createContext(o);function i(e){const r=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function u(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),t.createElement(s.Provider,{value:r},e.children)}}}]);