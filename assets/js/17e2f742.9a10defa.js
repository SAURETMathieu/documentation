"use strict";(self.webpackChunksauret_doc=self.webpackChunksauret_doc||[]).push([[3482],{926:(i,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var e=t(5893),o=t(1151);const s={id:"notifications",title:"Notifications",sidebar_label:"Notifications"},c="Notifications en js",a={id:"javascript/utils/notifications",title:"Notifications",description:"En d\xe9veloppement web, une notification c\xf4t\xe9 front-end fait r\xe9f\xe9rence \xe0 un message ou une alerte qui est affich\xe9 \xe0 l'utilisateur dans l'interface utilisateur de l'application. Ces notifications sont g\xe9n\xe9ralement utilis\xe9es pour informer l'utilisateur sur divers \xe9v\xe9nements ou actions importantes qui se produisent dans l'application.",source:"@site/docs/javascript/utils/notifications.md",sourceDirName:"javascript/utils",slug:"/javascript/utils/notifications",permalink:"/docs/javascript/utils/notifications",draft:!1,unlisted:!1,editUrl:"https://github.com/SAURETMathieu/docs/javascript/utils/notifications.md",tags:[],version:"current",frontMatter:{id:"notifications",title:"Notifications",sidebar_label:"Notifications"},sidebar:"javascript",previous:{title:"R\xe9cup\xe9rer des fichiers audio",permalink:"/docs/javascript/utils/get-audio"},next:{title:"Validation de donn\xe9es",permalink:"/docs/javascript/validate"}},l={},d=[{value:"Exemple d&#39;impl\xe9mentation de notifications",id:"exemple-dimpl\xe9mentation-de-notifications",level:2}];function r(i){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...i.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(n.h1,{id:"notifications-en-js",children:"Notifications en js"}),"\n",(0,e.jsxs)(n.p,{children:["En d\xe9veloppement web, une notification c\xf4t\xe9 ",(0,e.jsx)(n.code,{children:"front-end"})," fait r\xe9f\xe9rence \xe0 un message ou une alerte qui est affich\xe9 \xe0 l'utilisateur dans l'interface utilisateur de l'application. Ces notifications sont g\xe9n\xe9ralement utilis\xe9es pour informer l'utilisateur sur divers \xe9v\xe9nements ou actions importantes qui se produisent dans l'application."]}),"\n",(0,e.jsx)(n.h2,{id:"exemple-dimpl\xe9mentation-de-notifications",children:"Exemple d'impl\xe9mentation de notifications"}),"\n",(0,e.jsx)(n.pre,{children:(0,e.jsx)(n.code,{className:"language-js",children:"let successTimeoutId;\nlet failTimeoutId;\n\nconst notifications = {\n\n// fonction qui permet d'afficher la notification en cas de succes\n  showSuccessNotification() {\n    const notification = document.getElementById('successNotification');\n    notification.classList.remove('hidden');\n\n    if (successTimeoutId) {\n      clearTimeout(successTimeoutId);\n    }\n\n    successTimeoutId = setTimeout(() => {\n      notifications.closeSuccessNotification();\n    }, 3000);\n  },\n\n// fonction qui permet de fermer la notification de succes\n  closeSuccessNotification() {\n    const notification = document.getElementById('successNotification');\n    notification.classList.add('hidden');\n  },\n\n// fonction qui permet d'afficher la notification en cas d'\xe9chec\n  showFailNotification() {\n    const notification = document.getElementById('failNotification');\n    notification.classList.remove('hidden');\n\n    if (failTimeoutId) {\n      clearTimeout(failTimeoutId);\n    }\n\n    failTimeoutId = setTimeout(() => {\n      notifications.closeFailNotification();\n    }, 3000);\n  },\n\n// fonction qui permet de fermer la notification d'\xe9chec\n  closeFailNotification() {\n    const notification = document.getElementById('failNotification');\n    notification.classList.add('hidden');\n  },\n\n// initialisation des \xe9v\xe9nements sur les \xe9l\xe9ments de notifications \n  initCloseNotification() {\n    document\n      .getElementById('closeButtonSuccess')\n      .addEventListener('click', notifications.closeSuccessNotification);\n    document\n      .getElementById('closeButtonFail')\n      .addEventListener('click', notifications.closeFailNotification);\n  },\n\n// fonction qui permet de changer le message dans la notification de succes\n  editAndShowSuccessNotification(message) {\n    const notificationMessage = document.querySelector('.success-message');\n    notificationMessage.textContent = message;\n    notifications.showSuccessNotification();\n  },\n\n// fonction qui permet de changer le message dans la notification d'\xe9chec\n  editAndShowFailNotification(message) {\n    const notificationMessage = document.querySelector('.fail-message');\n    notificationMessage.textContent = message;\n    notifications.showFailNotification();\n  },\n};\n\nexport default notifications;\n\n"})})]})}function u(i={}){const{wrapper:n}={...(0,o.a)(),...i.components};return n?(0,e.jsx)(n,{...i,children:(0,e.jsx)(r,{...i})}):r(i)}},1151:(i,n,t)=>{t.d(n,{Z:()=>a,a:()=>c});var e=t(7294);const o={},s=e.createContext(o);function c(i){const n=e.useContext(s);return e.useMemo((function(){return"function"==typeof i?i(n):{...n,...i}}),[n,i])}function a(i){let n;return n=i.disableParentContext?"function"==typeof i.components?i.components(o):i.components||o:c(i.components),e.createElement(s.Provider,{value:n},i.children)}}}]);