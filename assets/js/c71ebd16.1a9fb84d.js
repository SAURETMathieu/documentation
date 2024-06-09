"use strict";(self.webpackChunksauret_doc=self.webpackChunksauret_doc||[]).push([[5428],{7951:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var a=n(5893),r=n(1151);const o={id:"fetch-data",title:"Template fetch",sidebar_label:"Fonction template fetch"},s=void 0,c={id:"react/api/fetch-data",title:"Template fetch",description:"Fonction template pour les appels API",source:"@site/docs/react/api/fetchData.md",sourceDirName:"react/api",slug:"/react/api/fetch-data",permalink:"/documentation/docs/react/api/fetch-data",draft:!1,unlisted:!1,editUrl:"https://github.com/SAURETMathieu/docs/react/api/fetchData.md",tags:[],version:"current",frontMatter:{id:"fetch-data",title:"Template fetch",sidebar_label:"Fonction template fetch"},sidebar:"reactSidebar",previous:{title:"API",permalink:"/documentation/docs/react/api"},next:{title:"Templates",permalink:"/documentation/docs/react/templates"}},i={},l=[{value:"Fonction template pour les appels API",id:"fonction-template-pour-les-appels-api",level:2},{value:"Exemples d&#39;utilisation :",id:"exemples-dutilisation-",level:3}];function d(e){const t={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"fonction-template-pour-les-appels-api",children:"Fonction template pour les appels API"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:"import { toast } from 'react-toastify';\n\nconst fetchData = async (method, endpoint, requestData = null, needToken = false) => {\n  const apiUrl = import.meta.env.VITE_API_URL;\n  try {\n    const url = `${apiUrl}/${endpoint}`;\n    let headers = {};\n\n    if (method === 'GET' && method === 'DELETE') {\n      headers = {\n        'Content-Type': 'application/json',\n      };\n    }\n\n    if (needToken) {\n      const token = localStorage.getItem('authApiToken');\n      if (token) {\n        headers.Authorization = `Bearer ${token}`;\n      } else {\n        console.log('Un token est n\xe9cessaire mais n\\'a pas \xe9t\xe9 fourni.');\n      }\n    }\n\n    const options = {\n      method,\n      headers,\n    };\n\n    if (method !== 'GET' && method !== 'DELETE') {\n      const formData = new FormData();\n      Object.keys(requestData).forEach((key) => {\n        const value = requestData[key];\n        formData.append(key, value);\n      });\n      if (requestData === null) {\n        options.body = null;\n      } else {\n        options.body = formData instanceof FormData ? formData : JSON.stringify(formData);\n      }\n    }\n\n    const response = await fetch(url, options);\n    if (!response.ok) {\n      const data = await response.json();\n      if (response.status === 403 && data.error === 'Le token est invalide') {\n        localStorage.removeItem('authApiToken');\n        toast.error('Votre session a expir\xe9');\n        setTimeout(() => {\n          window.location.href = '/';\n        }, 3000);\n        return false;\n      }\n      if (data.error) {\n        toast.error(data.error);\n        throw new Error(data.error);\n      }\n    }\n\n    if (response.status === 204) {\n      toast.success('Suppression r\xe9ussie.');\n      return true;\n    }\n\n    const data = await response.json();\n\n    const datasArray = Array.isArray(data) ? data : [data];\n\n    datasArray.forEach((dataArray) => {\n      Object.keys(dataArray).forEach((columnName) => {\n        if (Array.isArray(dataArray[columnName]) && !dataArray[columnName][0]) {\n          dataArray[columnName] = [];\n        }\n      });\n    });\n\n    return datasArray;\n  } catch (error) {\n    console.error(error);\n    return null;\n  }\n};\n\nexport default fetchData;\n"})}),"\n",(0,a.jsx)(t.h3,{id:"exemples-dutilisation-",children:"Exemples d'utilisation :"}),"\n",(0,a.jsx)(t.p,{children:"GET request:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:"const labelsData = await fetchData('GET', 'labels');\n"})}),"\n",(0,a.jsx)(t.p,{children:"POST request avec des donn\xe9es :"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:"const postedData = await fetchData('POST', 'labels', postData, true);\n"})}),"\n",(0,a.jsx)(t.p,{children:"PATCH request avec des donn\xe9es :"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:"const patchedData = await fetchData('PATCH', 'labels/:id', patchData);\n"})}),"\n",(0,a.jsx)(t.p,{children:"DELETE request :"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:"const deletedData = await fetchData('DELETE', 'labels/:id', null, true);\n"})})]})}function p(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>s});var a=n(7294);const r={},o=a.createContext(r);function s(e){const t=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);