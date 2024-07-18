"use strict";(self.webpackChunkcodestar_documents=self.webpackChunkcodestar_documents||[]).push([[6254],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(7294);function A(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){A(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,A=function(e,t){if(null==e)return{};var n,r,A={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(A[n]=e[n]);return A}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(A[n]=e[n])}return A}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,A=e.mdxType,a=e.originalType,i=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=p(n),m=A,d=u["".concat(i,".").concat(m)]||u[m]||c[m]||a;return n?r.createElement(d,l(l({ref:t},s),{},{components:n})):r.createElement(d,l({ref:t},s))}));function m(e,t){var n=arguments,A=t&&t.mdxType;if("string"==typeof e||A){var a=n.length,l=new Array(a);l[0]=u;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:A,l[1]=o;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6808:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var r=n(7462),A=(n(7294),n(3905));const a={title:"Network",description:""},l=void 0,o={unversionedId:"software-engineering/phase11-network",id:"software-engineering/phase11-network",title:"Network",description:"",source:"@site/docs/software-engineering/phase11-network.md",sourceDirName:"software-engineering",slug:"/software-engineering/phase11-network",permalink:"/codestar-documents/docs/software-engineering/phase11-network",draft:!1,editUrl:"https://github.com/Star-Academy/codestar-documents/tree/master/docs/software-engineering/phase11-network.md",tags:[],version:"current",frontMatter:{title:"Network",description:""},sidebar:"tutorialSidebar",previous:{title:"Nest (\u0627\u062e\u062a\u06cc\u0627\u0631\u06cc)",permalink:"/codestar-documents/docs/software-engineering/phase08-optional02-nest"},next:{title:"ASP.NET Core",permalink:"/codestar-documents/docs/software-engineering/phase12-web"}},i={},p=[{value:"\u0645\u0642\u062f\u0645\u0647",id:"\u0645\u0642\u062f\u0645\u0647",level:2},{value:"\u0645\u0641\u0627\u0647\u06cc\u0645 \u0627\u0648\u0644\u06cc\u0647",id:"\u0645\u0641\u0627\u0647\u06cc\u0645-\u0627\u0648\u0644\u06cc\u0647",level:2},{value:"\u0634\u0628\u06a9\u0647 \u0686\u06cc\u0633\u062a\u061f",id:"\u0634\u0628\u06a9\u0647-\u0686\u06cc\u0633\u062a",level:3},{value:"\u067e\u0631\u0648\u062a\u06a9\u0644 \u0686\u06cc\u0633\u062a\u061f",id:"\u067e\u0631\u0648\u062a\u06a9\u0644-\u0686\u06cc\u0633\u062a",level:3},{value:"\u067e\u0631\u0648\u062a\u06a9\u0644\u200c\u0647\u0627\u06cc \u0634\u0628\u06a9\u0647",id:"\u067e\u0631\u0648\u062a\u06a9\u0644\u0647\u0627\u06cc-\u0634\u0628\u06a9\u0647",level:2},{value:"Http",id:"http",level:3},{value:"RESTful Api",id:"restful-api",level:3},{value:"\u0633\u0627\u06cc\u0631 \u067e\u0631\u0648\u062a\u06a9\u0644\u200c\u0647\u0627 (\u0627\u062e\u062a\u06cc\u0627\u0631\u06cc)",id:"\u0633\u0627\u06cc\u0631-\u067e\u0631\u0648\u062a\u06a9\u0644\u0647\u0627-\u0627\u062e\u062a\u06cc\u0627\u0631\u06cc",level:2},{value:"TCP",id:"tcp",level:3},{value:"UDP",id:"udp",level:3},{value:"FTP",id:"ftp",level:3},{value:"\u0627\u0628\u0632\u0627\u0631\u0647\u0627\u06cc \u062a\u0633\u062a \u0648 \u062a\u0648\u0633\u0639\u0647 \u0634\u0628\u06a9\u0647",id:"\u0627\u0628\u0632\u0627\u0631\u0647\u0627\u06cc-\u062a\u0633\u062a-\u0648-\u062a\u0648\u0633\u0639\u0647-\u0634\u0628\u06a9\u0647",level:2},{value:"Wireshark",id:"wireshark",level:3},{value:"Postman",id:"postman",level:3},{value:"\u062a\u0645\u0631\u06cc\u0646",id:"\u062a\u0645\u0631\u06cc\u0646",level:2}],s={toc:p};function c(e){let{components:t,...a}=e;return(0,A.kt)("wrapper",(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,A.kt)("h2",{id:"\u0645\u0642\u062f\u0645\u0647"},"\u0645\u0642\u062f\u0645\u0647"),(0,A.kt)("p",null,"\u062f\u0631 \u0627\u06cc\u0646 \u0641\u0627\u0632 \u0628\u0627 \u0645\u0641\u0627\u0647\u06cc\u0645 \u0627\u0648\u0644\u06cc\u0647 \u0634\u0628\u06a9\u0647\n\u0648 \u067e\u0631\u0648\u062a\u06a9\u0644\u200c\u0647\u0627\u06cc \u0645\u0647\u0645\u06cc \u06a9\u0647\n\u062f\u0631 \u0627\u0631\u062a\u0628\u0627\u0637\u0627\u062a \u0634\u0628\u06a9\u0647\u200c\u0627\u06cc \u0646\u0642\u0634 \u062f\u0627\u0631\u0646\u062f \u0622\u0634\u0646\u0627 \u062e\u0648\u0627\u0647\u06cc\u062f \u0634\u062f.\n\u0634\u0628\u06a9\u0647\u200c\u0647\u0627 \u0627\u0628\u0632\u0627\u0631\u0647\u0627\u06cc \u0642\u062f\u0631\u062a\u0645\u0646\u062f\u06cc \u0628\u0631\u0627\u06cc \u0627\u0631\u062a\u0628\u0627\u0637\n\u0648 \u062a\u0628\u0627\u062f\u0644 \u0627\u0637\u0644\u0627\u0639\u0627\u062a \u0628\u06cc\u0646 \u062f\u0633\u062a\u06af\u0627\u0647\u200c\u0647\u0627 \u0648 \u0633\u06cc\u0633\u062a\u0645\u200c\u0647\u0627 \u0641\u0631\u0627\u0647\u0645 \u0645\u06cc\u200c\u06a9\u0646\u0646\u062f\n\u0648 \u067e\u0627\u06cc\u0647 \u0648 \u0627\u0633\u0627\u0633 \u0627\u06cc\u0646\u062a\u0631\u0646\u062a\n\u0648 \u0628\u0633\u06cc\u0627\u0631\u06cc \u0627\u0632 \u0641\u0646\u0627\u0648\u0631\u06cc\u200c\u0647\u0627\u06cc \u0645\u062f\u0631\u0646 \u0631\u0627 \u062a\u0634\u06a9\u06cc\u0644 \u0645\u06cc\u200c\u062f\u0647\u0646\u062f."),(0,A.kt)("h2",{id:"\u0645\u0641\u0627\u0647\u06cc\u0645-\u0627\u0648\u0644\u06cc\u0647"},"\u0645\u0641\u0627\u0647\u06cc\u0645 \u0627\u0648\u0644\u06cc\u0647"),(0,A.kt)("h3",{id:"\u0634\u0628\u06a9\u0647-\u0686\u06cc\u0633\u062a"},"\u0634\u0628\u06a9\u0647 \u0686\u06cc\u0633\u062a\u061f"),(0,A.kt)("p",null,"\u0634\u0628\u06a9\u0647 \u0645\u062c\u0645\u0648\u0639\u0647\u200c\u0627\u06cc \u0627\u0632 \u062f\u0633\u062a\u06af\u0627\u0647\u200c\u0647\u0627 \u0627\u0633\u062a\n\u06a9\u0647 \u0628\u0647 \u0648\u0633\u06cc\u0644\u0647\u200c\u06cc \u0627\u062a\u0635\u0627\u0644\u0627\u062a \u0641\u06cc\u0632\u06cc\u06a9\u06cc \u06cc\u0627 \u0628\u06cc\u200c\u0633\u06cc\u0645\n\u0628\u0647 \u06cc\u06a9\u062f\u06cc\u06af\u0631 \u0645\u062a\u0635\u0644 \u0634\u062f\u0647\u200c\u0627\u0646\u062f\n\u0648 \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u0646\u062f \u0627\u0637\u0644\u0627\u0639\u0627\u062a \u0631\u0627 \u0628\u06cc\u0646 \u062e\u0648\u062f \u062a\u0628\u0627\u062f\u0644 \u06a9\u0646\u0646\u062f.\n\u0634\u0628\u06a9\u0647\u200c\u0647\u0627 \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u0646\u062f \u06a9\u0648\u0686\u06a9 \u0645\u0627\u0646\u0646\u062f \u06cc\u06a9 \u0634\u0628\u06a9\u0647 \u062e\u0627\u0646\u06af\u06cc\n\u06cc\u0627 \u0628\u0632\u0631\u06af \u0645\u0627\u0646\u0646\u062f \u0627\u06cc\u0646\u062a\u0631\u0646\u062a \u0628\u0627\u0634\u0646\u062f."),(0,A.kt)("h3",{id:"\u067e\u0631\u0648\u062a\u06a9\u0644-\u0686\u06cc\u0633\u062a"},"\u067e\u0631\u0648\u062a\u06a9\u0644 \u0686\u06cc\u0633\u062a\u061f"),(0,A.kt)("p",null,"\u067e\u0631\u0648\u062a\u06a9\u0644\u200c\u0647\u0627 \u0645\u062c\u0645\u0648\u0639\u0647\u200c\u0627\u06cc \u0627\u0632 \u0642\u0648\u0627\u0646\u06cc\u0646 \u0648 \u0627\u0633\u062a\u0627\u0646\u062f\u0627\u0631\u062f\u0647\u0627 \u0647\u0633\u062a\u0646\u062f\n\u06a9\u0647 \u0686\u06af\u0648\u0646\u06af\u06cc \u0627\u0631\u062a\u0628\u0627\u0637 \u0648 \u062a\u0628\u0627\u062f\u0644 \u0627\u0637\u0644\u0627\u0639\u0627\u062a\n\u0628\u06cc\u0646 \u062f\u0633\u062a\u06af\u0627\u0647\u200c\u0647\u0627\u06cc \u0634\u0628\u06a9\u0647 \u0631\u0627 \u062a\u0639\u06cc\u06cc\u0646 \u0645\u06cc\u200c\u06a9\u0646\u0646\u062f.\n\u067e\u0631\u0648\u062a\u06a9\u0644\u200c\u0647\u0627 \u062a\u0636\u0645\u06cc\u0646 \u0645\u06cc\u200c\u06a9\u0646\u0646\u062f \u06a9\u0647 \u062f\u0633\u062a\u06af\u0627\u0647\u200c\u0647\u0627\u06cc \u0645\u062e\u062a\u0644\u0641\n\u0628\u062a\u0648\u0627\u0646\u0646\u062f \u0628\u0647 \u0635\u0648\u0631\u062a \u0647\u0645\u0627\u0647\u0646\u06af \u0648 \u0628\u062f\u0648\u0646 \u0645\u0634\u06a9\u0644\n\u0628\u0627 \u06cc\u06a9\u062f\u06cc\u06af\u0631 \u0627\u0631\u062a\u0628\u0627\u0637 \u0628\u0631\u0642\u0631\u0627\u0631 \u06a9\u0646\u0646\u062f."),(0,A.kt)("h2",{id:"\u067e\u0631\u0648\u062a\u06a9\u0644\u0647\u0627\u06cc-\u0634\u0628\u06a9\u0647"},"\u067e\u0631\u0648\u062a\u06a9\u0644\u200c\u0647\u0627\u06cc \u0634\u0628\u06a9\u0647"),(0,A.kt)("h3",{id:"http"},"Http"),(0,A.kt)("p",null,"\u067e\u0631\u0648\u062a\u06a9\u0644 HTTP\n\u0645\u062e\u0641\u0641 \u0639\u0628\u0627\u0631\u062a ",(0,A.kt)("inlineCode",{parentName:"p"},"Hyper Text Transfer Protocol"),"\n\u0627\u0633\u062a \u0648 \u0628\u0647 \u0627\u0631\u062a\u0628\u0627\u0637 \u0645\u06cc\u0627\u0646 \u0633\u0631\u0648\u06cc\u0633\u200c\u062f\u0647\u0646\u062f\u0647 (server)\n\u0648 \u0633\u0631\u0648\u06cc\u0633\u200c\u06af\u06cc\u0631\u0646\u062f\u0647 (client)\n\u062f\u0631 \u0648\u0628 \u0645\u06cc\u200c\u067e\u0631\u062f\u0627\u0632\u062f."),(0,A.kt)("p",null,"\u0627\u0631\u062a\u0628\u0627\u0637 \u0628\u06cc\u0646 client\u0647\u0627\n\u0648 server\u0647\u0627\n\u0627\u0632 \u0637\u0631\u06cc\u0642 \u0627\u0631\u0633\u0627\u0644 \u062f\u0631\u062e\u0648\u0627\u0633\u062a\u200c\u0647\u0627\u06cc http\n\u0648 \u062f\u0631\u06cc\u0627\u0641\u062a \u067e\u0627\u0633\u062e\u200c\u0647\u0627\u06cc http\n\u0627\u0646\u062c\u0627\u0645 \u0645\u06cc\u200c\u0634\u0648\u062f.\n\u0628\u0647 \u0632\u0628\u0627\u0646 \u0633\u0627\u062f\u0647\u200c\u062a\u0631\u060c http\n\u06cc\u06a9 \u0646\u0648\u0639 \u0642\u0627\u0646\u0648\u0646 \u0627\u0633\u062a \u06a9\u0647 \u0627\u0631\u0633\u0627\u0644 \u0648 \u062f\u0631\u06cc\u0627\u0641\u062a \u0627\u0637\u0644\u0627\u0639\u0627\u062a \u0628\u06cc\u0646 client\n\u0648 server\n\u0628\u0631 \u0627\u0633\u0627\u0633 \u0622\u0646 \u0627\u0646\u062c\u0627\u0645 \u0645\u06cc\u200c\u0634\u0648\u062f."),(0,A.kt)("admonition",{title:"\u200c",type:"tip"},(0,A.kt)("p",{parentName:"admonition"},"\u0628\u0631\u0627\u06cc \u0622\u0634\u0646\u0627\u06cc\u06cc \u0628\u0647\u062a\u0631 \u0628\u0627 Http\n\u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u06cc\u062f \u0627\u0632 \u0644\u06cc\u0646\u06a9\u200c\u0647\u0627\u06cc \u0632\u06cc\u0631 \u06a9\u0645\u06a9 \u0628\u06af\u06cc\u0631\u06cc\u062f:"),(0,A.kt)("ul",{parentName:"admonition"},(0,A.kt)("li",{parentName:"ul"},(0,A.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview"},"An overview of HTTP")),(0,A.kt)("li",{parentName:"ul"},(0,A.kt)("a",{parentName:"li",href:"https://www.extrahop.com/resources/protocols/http/"},"Hypertext Transfer Protocol (HTTP)")))),(0,A.kt)("h3",{id:"restful-api"},"RESTful Api"),(0,A.kt)("p",null,(0,A.kt)("inlineCode",{parentName:"p"},"API"),"\n\u06cc\u0627 ",(0,A.kt)("inlineCode",{parentName:"p"},"Application Programming Interface"),"\n(\u06a9\u0647 \u0628\u0647 \u0631\u0627\u0628\u0637 \u0628\u0631\u0646\u0627\u0645\u0647\u200c\u0646\u0648\u06cc\u0633\u06cc \u06a9\u0627\u0631\u0628\u0631\u062f\u06cc \u062a\u0631\u062c\u0645\u0647 \u0645\u06cc\u200c\u0634\u0648\u062f) \u0645\u062c\u0645\u0648\u0639\u0647\u200c\u0627\u06cc \u0627\u0632 \u0642\u0648\u0627\u0639\u062f \u0648 \u0645\u06a9\u0627\u0646\u06cc\u0632\u0645\u200c\u0647\u0627 \u0627\u0633\u062a \u06a9\u0647 \u0627\u0632 \u0637\u0631\u06cc\u0642 \u0622\u0646 \u0646\u0631\u0645\u200c\u0627\u0641\u0632\u0627\u0631\u0647\u0627 \u0648 \u06cc\u0627 \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a\u200c\u0647\u0627\u06cc \u0645\u062e\u062a\u0644\u0641 \u06cc\u06a9 \u0628\u0631\u0646\u0627\u0645\u0647 \u0628\u0627 \u0647\u0645\u062f\u06cc\u06af\u0631 \u0627\u0631\u062a\u0628\u0627\u0637 \u0628\u0631\u0642\u0631\u0627\u0631 \u0645\u06cc\u200c\u06a9\u0646\u0646\u062f. \u0645\u0646\u0638\u0648\u0631 \u0627\u0632 \u0631\u0627\u0628\u0637 \u0686\u06cc\u0632\u06cc\u200c \u0627\u0633\u062a \u06a9\u0647 \u062f\u0648 \u0634\u0626 \u06cc\u0627 \u062f\u0648 \u0645\u0648\u062c\u0648\u062f\u06cc\u062a \u0645\u062e\u062a\u0644\u0641 \u0631\u0627 \u0628\u0647 \u0647\u0645\u062f\u06cc\u06af\u0631 \u0631\u0628\u0637 \u0645\u06cc\u200c\u062f\u0647\u062f. API\n\u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u062f \u062f\u0627\u062f\u0647\u200c\u0647\u0627\u06cc\u06cc \u06a9\u0647 \u0634\u0645\u0627 \u0628\u0631\u0627\u06cc \u0646\u0631\u0645\u200c\u0627\u0641\u0632\u0627\u0631\u062a\u0627\u0646 \u0646\u06cc\u0627\u0632 \u062f\u0627\u0631\u06cc\u062f \u0631\u0627 \u0627\u0632 \u0637\u0631\u06cc\u0642 \u06cc\u06a9 \u0641\u0631\u0645\u062a \u0645\u0646\u0627\u0633\u0628 \u0628\u0647 \u062e\u0631\u0648\u062c\u06cc \u0628\u0641\u0631\u0633\u062a\u062f \u0648 \u06cc\u0627 \u0622\u0646\u200c \u0631\u0627 \u0628\u0631\u06af\u0634\u062a \u062f\u0647\u062f. \u0641\u0631\u0645\u062a JSON\n\u0648 XML\n\u0627\u0632 \u0627\u06cc\u0646 \u062f\u0633\u062a \u0641\u0631\u0645\u062a\u200c\u0647\u0627 \u0647\u0633\u062a\u0646\u062f. \u062f\u0631 \u0627\u06cc\u0646 \u0645\u0637\u0644\u0628 \u0645\u0627 \u0642\u0635\u062f \u062f\u0627\u0631\u06cc\u0645 \u0631\u0648\u06cc JSON\n\u062a\u0645\u0631\u06a9\u0632 \u06a9\u0646\u06cc\u0645."),(0,A.kt)("p",null,(0,A.kt)("img",{alt:"api schema",src:n(704).Z,width:"780",height:"250"})),(0,A.kt)("p",null,"\u0628\u0631\u0627\u06cc \u0622\u0634\u0646\u0627\u06cc\u06cc \u0628\u06cc\u0634\u062a\u0631 \u0628\u0627 ",(0,A.kt)("inlineCode",{parentName:"p"},"RESTful api"),"\n\u0644\u06cc\u0646\u06a9\u200c\u0647\u0627\u06cc \u0632\u06cc\u0631 \u0631\u0627 \u0645\u0637\u0627\u0644\u0639\u0647 \u06a9\u0646\u06cc\u062f."),(0,A.kt)("ul",null,(0,A.kt)("li",{parentName:"ul"},(0,A.kt)("a",{parentName:"li",href:"https://www.restapitutorial.com/"},"Learn REST: A RESTful Tutorial")),(0,A.kt)("li",{parentName:"ul"},(0,A.kt)("a",{parentName:"li",href:"https://roocket.ir/articles/a-beginners-tutorial-for-understanding-restful-api"},"RESTful API \u0628\u0647 \u0632\u0628\u0627\u0646 \u0633\u0627\u062f\u0647 \u0686\u06cc\u0633\u062a\u061f")),(0,A.kt)("li",{parentName:"ul"},(0,A.kt)("a",{parentName:"li",href:"https://www.sitepoint.com/developers-rest-api/"},"What Is a REST API?"))),(0,A.kt)("h2",{id:"\u0633\u0627\u06cc\u0631-\u067e\u0631\u0648\u062a\u06a9\u0644\u0647\u0627-\u0627\u062e\u062a\u06cc\u0627\u0631\u06cc"},"\u0633\u0627\u06cc\u0631 \u067e\u0631\u0648\u062a\u06a9\u0644\u200c\u0647\u0627 (\u0627\u062e\u062a\u06cc\u0627\u0631\u06cc)"),(0,A.kt)("h3",{id:"tcp"},"TCP"),(0,A.kt)("p",null,"TCP/IP\n\u0645\u062c\u0645\u0648\u0639\u0647\u200c\u0627\u06cc \u0627\u0632 \u067e\u0631\u0648\u062a\u06a9\u0644\u200c\u0647\u0627 \u0627\u0633\u062a\n\u06a9\u0647 \u0627\u0633\u0627\u0633 \u0627\u0631\u062a\u0628\u0627\u0637\u0627\u062a \u0627\u06cc\u0646\u062a\u0631\u0646\u062a \u0631\u0627 \u062a\u0634\u06a9\u06cc\u0644 \u0645\u06cc\u200c\u062f\u0647\u062f.\n",(0,A.kt)("inlineCode",{parentName:"p"},"TCP (Transmission Control Protocol)"),"\n\u062a\u0636\u0645\u06cc\u0646 \u0645\u06cc\u200c\u06a9\u0646\u062f \u06a9\u0647 \u062f\u0627\u062f\u0647\u200c\u0647\u0627 \u0628\u0647 \u062f\u0631\u0633\u062a\u06cc\n\u0648 \u0628\u0647 \u062a\u0631\u062a\u06cc\u0628 \u0628\u0647 \u0645\u0642\u0635\u062f \u0645\u06cc\u200c\u0631\u0633\u0646\u062f\u060c\n\u062f\u0631 \u062d\u0627\u0644\u06cc \u06a9\u0647\n",(0,A.kt)("inlineCode",{parentName:"p"},"IP (Internet Protocol)"),"\n\u0622\u062f\u0631\u0633\u200c\u062f\u0647\u06cc \u0648 \u0645\u0633\u06cc\u0631\u06cc\u0627\u0628\u06cc \u062f\u0627\u062f\u0647\u200c\u0647\u0627 \u0631\u0627 \u0628\u0631 \u0639\u0647\u062f\u0647 \u062f\u0627\u0631\u062f."),(0,A.kt)("p",null,"\u0644\u06cc\u0646\u06a9\u200c\u0647\u0627\u06cc \u0645\u0637\u0627\u0644\u0639\u0647: "),(0,A.kt)("ul",null,(0,A.kt)("li",{parentName:"ul"},(0,A.kt)("a",{parentName:"li",href:"https://www.techtarget.com/searchnetworking/definition/TCP-IP#:~:text=TCP%2FIP%20stands%20for%20Transmission,%2D%2D%20an%20intranet%20or%20extranet."},"TCP/IP")),(0,A.kt)("li",{parentName:"ul"},(0,A.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=2QGgEk20RXM&ab_channel=TechTerms"},"TCP IP Protocol"))),(0,A.kt)("h3",{id:"udp"},"UDP"),(0,A.kt)("p",null,"\u06cc\u0627\nUser Datagram Protocol\n\u06cc\u06a9 \u067e\u0631\u0648\u062a\u06a9\u0644 \u0627\u0631\u062a\u0628\u0627\u0637\u06cc \u062c\u0627\u06cc\u06af\u0632\u06cc\u0646 \u0628\u0631\u0627\u06cc \u067e\u0631\u0648\u062a\u06a9\u0644\nTCP\n\u0627\u0633\u062a \u06a9\u0647 \u062f\u0631 \u062f\u0631\u062c\u0647 \u0627\u0648\u0644 \u0628\u0631\u0627\u06cc \u0628\u0631\u0642\u0631\u0627\u0631\u06cc \u0627\u062a\u0635\u0627\u0644\u0627\u062a \u06a9\u0645\u200c\u0632\u0645\u0627\u0646 \u06a9\u0647 \u0627\u0632 \u062f\u0633\u062a \u0631\u0641\u062a\u0646 \u0628\u0633\u062a\u0647\u200c\u0647\u0627 \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u062f \u0627\u0647\u0645\u06cc\u062a\u06cc \u0646\u062f\u0627\u0634\u062a\u0647 \u0628\u0627\u0634\u062f\u060c \u062f\u0631 \u0628\u0633\u062a\u0631 \u0627\u06cc\u0646\u062a\u0631\u0646\u062a \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0645\u06cc\u200c\u0634\u0648\u062f. \u0633\u0631\u0628\u0627\u0631 \u062d\u0627\u0635\u0644 \u062f\u0631 \u0627\u06cc\u0646 \u067e\u0631\u0648\u062a\u06a9\u0644 \u0628\u0633\u06cc\u0627\u0631 \u06a9\u0645\u062a\u0631 \u0627\u0632\nTCP\n\u0628\u0648\u062f\u0647 \u0633\u0631\u0639\u062a \u0628\u0627\u0644\u0627\u062a\u0631\u06cc \u0646\u06cc\u0632 \u062f\u0627\u0631\u062f. "),(0,A.kt)("p",null,"\u0644\u06cc\u0646\u06a9\u200c\u0647\u0627\u06cc \u0645\u0631\u0628\u0648\u0637:"),(0,A.kt)("ul",null,(0,A.kt)("li",{parentName:"ul"},(0,A.kt)("a",{parentName:"li",href:"https://www.cloudflare.com/learning/ddos/glossary/user-datagram-protocol-udp/"},"What is the User Datagram Protocol (UDP/IP)?")),(0,A.kt)("li",{parentName:"ul"},(0,A.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=jE_FcgpQ7Co&ab_channel=PracticalNetworking"},"TCP vs UDP"))),(0,A.kt)("h3",{id:"ftp"},"FTP"),(0,A.kt)("p",null,(0,A.kt)("inlineCode",{parentName:"p"},"FTP"),"\n\u06cc\u0627 ",(0,A.kt)("inlineCode",{parentName:"p"},"File Transfer Protocol"),"\n\u0628\u0631\u0627\u06cc \u0627\u0646\u062a\u0642\u0627\u0644 \u0641\u0627\u06cc\u0644\u200c\u0647\u0627 \u0628\u06cc\u0646 \u062f\u0633\u062a\u06af\u0627\u0647\u200c\u0647\u0627 \u062f\u0631 \u06cc\u06a9 \u0634\u0628\u06a9\u0647 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0645\u06cc\u200c\u0634\u0648\u062f. \u0627\u06cc\u0646 \u067e\u0631\u0648\u062a\u06a9\u0644 \u0627\u0645\u06a9\u0627\u0646 \u0627\u0631\u0633\u0627\u0644 \u0648 \u062f\u0631\u06cc\u0627\u0641\u062a \u0641\u0627\u06cc\u0644\u200c\u0647\u0627 \u0631\u0627 \u0628\u0647 \u0635\u0648\u0631\u062a \u06a9\u0627\u0631\u0622\u0645\u062f \u0648 \u0627\u0645\u0646 \u0641\u0631\u0627\u0647\u0645 \u0645\u06cc\u200c\u06a9\u0646\u062f."),(0,A.kt)("p",null,"\u0644\u06cc\u0646\u06a9\u200c\u0647\u0627\u06cc \u0645\u0631\u0628\u0648\u0637:"),(0,A.kt)("ul",null,(0,A.kt)("li",{parentName:"ul"},(0,A.kt)("a",{parentName:"li",href:"https://www.investopedia.com/terms/f/ftp-file-transfer-protocol.asp"},"File Transfer Protocol (FTP) Meaning and Uses")),(0,A.kt)("li",{parentName:"ul"},(0,A.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=tOj8MSEIbfA&ab_channel=PowerCertAnimatedVideos"},"FTP (File Transfer Protocol), SFTP, TFTP Explained."))),(0,A.kt)("h2",{id:"\u0627\u0628\u0632\u0627\u0631\u0647\u0627\u06cc-\u062a\u0633\u062a-\u0648-\u062a\u0648\u0633\u0639\u0647-\u0634\u0628\u06a9\u0647"},"\u0627\u0628\u0632\u0627\u0631\u0647\u0627\u06cc \u062a\u0633\u062a \u0648 \u062a\u0648\u0633\u0639\u0647 \u0634\u0628\u06a9\u0647"),(0,A.kt)("h3",{id:"wireshark"},"Wireshark"),(0,A.kt)("p",null,"Wireshark\n\u06cc\u06a9 \u0627\u0628\u0632\u0627\u0631 \u062a\u062c\u0632\u06cc\u0647 \u0648 \u062a\u062d\u0644\u06cc\u0644 \u067e\u0631\u0648\u062a\u06a9\u0644 \u0634\u0628\u06a9\u0647 \u0627\u0633\u062a\n\u06a9\u0647 \u0628\u0647 \u06a9\u0627\u0631\u0628\u0631\u0627\u0646 \u0627\u062c\u0627\u0632\u0647 \u0645\u06cc\u200c\u062f\u0647\u062f \u062a\u0631\u0627\u0641\u06cc\u06a9 \u0634\u0628\u06a9\u0647 \u0631\u0627 \u0645\u0634\u0627\u0647\u062f\u0647 \u0648 \u0628\u0631\u0631\u0633\u06cc \u06a9\u0646\u0646\u062f.\n\u0648\u0627\u06cc\u0631\u0634\u0627\u0631\u06a9 \u0628\u0633\u062a\u0647\u200c\u0647\u0627\u06cc \u062f\u0627\u062f\u0647\u200c\u0627\u06cc \u0631\u0627 \u06a9\u0647 \u062f\u0631 \u0634\u0628\u06a9\u0647 \u062f\u0631 \u062d\u0627\u0644 \u062d\u0631\u06a9\u062a \u0647\u0633\u062a\u0646\u062f\u060c \u062f\u0631\u06cc\u0627\u0641\u062a \u0645\u06cc\u200c\u06a9\u0646\u062f.\n\u0627\u06cc\u0646 \u0628\u0633\u062a\u0647\u200c\u0647\u0627 \u062d\u0627\u0648\u06cc \u0627\u0637\u0644\u0627\u0639\u0627\u062a \u0645\u062e\u062a\u0644\u0641\u06cc \u0645\u0627\u0646\u0646\u062f \u0645\u0646\u0628\u0639 \u0648 \u0645\u0642\u0635\u062f \u0622\u062f\u0631\u0633\u200c\u0647\u0627\u06cc IP\u060c\n\u067e\u0631\u0648\u062a\u06a9\u0644\u200c\u0647\u0627 \u0648 \u0634\u0645\u0627\u0631\u0647 \u067e\u0648\u0631\u062a\u200c\u0647\u0627\u06cc \u0645\u062e\u062a\u0644\u0641 \u0648 \u062f\u0627\u062f\u0647\u200c\u0647\u0627\u06cc \u0648\u0627\u0642\u0639\u06cc \u0627\u0631\u0633\u0627\u0644 \u0634\u062f\u0647 \u0627\u0632 \u0637\u0631\u06cc\u0642 \u0634\u0628\u06a9\u0647 \u0647\u0633\u062a\u0646\u062f.\nWireshark\n\u062f\u0627\u062f\u0647\u200c\u0647\u0627 \u0631\u0627 \u062c\u0645\u0639\u200c\u0622\u0648\u0631\u06cc \u06a9\u0631\u062f\u0647\n\u0648 \u0628\u0647 \u0634\u06a9\u0644 \u0642\u0627\u0628\u0644 \u062e\u0648\u0627\u0646\u062f\u0646 \u062a\u0648\u0633\u0637 \u0627\u0646\u0633\u0627\u0646 \u0627\u0631\u0627\u0626\u0647 \u0645\u06cc\u200c\u062f\u0647\u062f."),(0,A.kt)("p",null,"\u0644\u06cc\u0646\u06a9\u200c\u0647\u0627\u06cc \u0645\u0631\u0628\u0648\u0637:"),(0,A.kt)("ul",null,(0,A.kt)("li",{parentName:"ul"},(0,A.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=qTaOZrDnMzQ&ab_channel=AnsonAlexander"},"Wireshark Tutorial for Beginners"))),(0,A.kt)("h3",{id:"postman"},"Postman"),(0,A.kt)("p",null,"Postman\n\u06cc\u06a9 \u0627\u0628\u0632\u0627\u0631 \u0642\u062f\u0631\u062a\u0645\u0646\u062f \u0628\u0631\u0627\u06cc \u062a\u0633\u062a \u0648 \u062a\u0648\u0633\u0639\u0647 API\u0647\u0627 \u0627\u0633\u062a.\n\u0628\u0627 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 Postman\n\u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u06cc\u062f \u062f\u0631\u062e\u0648\u0627\u0633\u062a\u200c\u0647\u0627\u06cc HTTP \u0627\u06cc\u062c\u0627\u062f \u06a9\u0646\u06cc\u062f\u060c\n\u0622\u0646\u200c\u0647\u0627 \u0631\u0627 \u0627\u0631\u0633\u0627\u0644 \u0648 \u067e\u0627\u0633\u062e\u200c\u0647\u0627\u06cc \u062f\u0631\u06cc\u0627\u0641\u062a\u06cc \u0631\u0627 \u062a\u062c\u0632\u06cc\u0647 \u0648 \u062a\u062d\u0644\u06cc\u0644 \u06a9\u0646\u06cc\u062f."),(0,A.kt)("admonition",{title:"\u200c",type:"note"},(0,A.kt)("p",{parentName:"admonition"},"\u0628\u0631\u0627\u06cc \u0646\u0635\u0628 \u0627\u06cc\u0646 \u0646\u0631\u0645\u200c\u0627\u0641\u0632\u0627\u0631 \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u06cc\u062f \u0622\u0646 \u0631\u0627 \u0627\u0632 \u0633\u0627\u06cc\u062a \u0631\u0633\u0645\u06cc ",(0,A.kt)("a",{parentName:"p",href:"https://www.postman.com/downloads/"},"Postman"),"\n\u062f\u0627\u0646\u0644\u0648\u062f \u06a9\u0646\u06cc\u062f.")),(0,A.kt)("admonition",{title:"\u200c",type:"tip"},(0,A.kt)("p",{parentName:"admonition"},"\u0628\u0631\u0627\u06cc \u0622\u0634\u0646\u0627\u06cc\u06cc \u0628\u06cc\u0634\u062a\u0631 \u0628\u0627 \u0627\u06cc\u0646 \u0646\u0631\u0645\u200c\u0627\u0641\u0632\u0627\u0631 \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u06cc\u062f ",(0,A.kt)("a",{parentName:"p",href:"https://www.guru99.com/postman-tutorial.html"},"Postman Tutorial for Beginners with API Testing Example"),"\n\u0631\u0627 \u0645\u0637\u0627\u0644\u0639\u0647 \u06a9\u0646\u06cc\u062f.")),(0,A.kt)("h2",{id:"\u062a\u0645\u0631\u06cc\u0646"},"\u062a\u0645\u0631\u06cc\u0646"))}c.isMDXComponent=!0},704:(e,t,n)=>{n.d(t,{Z:()=>r});const r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAwwAAAD6CAMAAAA7gjDQAAABjFBMVEX///9ha26ssbOnzs8Ak7/P4eMH2vDZ9/kAq+wAzG2CiosAte/19fVrdnj7/PzLz893gIGMk5W3u7xKz/UAvNeiqKkbyvOYnaDS4+UAuu+T4Pj0+Pi66/v4+/vg4uPR8PIAvO0AtO0Axu+66vp+2vYAru3BxcYAwPF6iIoAwu7X9ff1/f77/v/W2dns+/wiyvPx/P0A1PAA0fDi+fre+O1i5reS7MoAs93b+Prf+PoAzvAAv+7q7O39/v4Ay/DW8fTo+vzk+vyZrrD3/f4Ase2v1NWq0dIAue3J6uwAmMMA2fDv9PXM7vDI9eMA1vDX5+m22drC3N7v/PzU9PXd6uwAqObt/PYAz3fo8PK43d6Spafq+vwAodnj7u8AmszC5ecA1olw6Ly+4uOit7qxycvF6/MApspyf4GBkZOL1+mc5PkAs9KKm5611dZd0/af79BS5LPL7/yJ3fcA3Jy16foAibRpzuM2w9zB7fup5/mh3+xUyd+08dmJ68ce4al11u/K3+Ecv9lEz/S05e+FwQBHAAAWRklEQVR42uyd6VsaSxaHu8CkSRS3G0dnHEXIYBQIg5CZAQ3GDdxwjXGLSzRxyzLJnSz3mWx35pl/fKpoRFB6g66m6f69H4hSgMrTb+qcOqcKQQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWI8vTSq8WcebBJxA7F6TKqc+vE/A/jw5bdLA/Fe8U8DufJ1v0sa3CN4sYGu+NWnmzXO8XcDG/P4PHYzh/QI25hePDprxfjmC6Vg0Gl0PRyADZHA2kedJsUBqHTJABgerMCGWklyHDJDBEaTD0YnJRGIiGk4X7gknxWskLoOlSOw5fezkxPq07WWYGVDADxlsSGyy9JqPsbvWxZsk2cWfjqZK7pmYtrUMzQu3lRiGDLZTIXXtok/FhJhYiWQkEr1+3+S0jWWI31ZmBjLYKzVIVLjqE2JlUskKd0btK8Oyigx+yGAnwkmxZhIRu8qAmcFRLohGkIrYVIYBZRfGkTPYiGnRGBJ2XU3yDyswYNhqUjjlOzn538nJk+fo+jPx6mcV5WisUFJOpwySQZwoJCBhqWI9bRcZeNcZIicXv705LW2QnT+99+1rClcq71Q5WpIXp6L0gp0QDSMsCLGJq/wjORmDDGr4vryR6xM/vXcRxRXLLzu4sUKUihrnAn2xG5l4I0/5/GVIfFHbPPTmaxqXLZfwKCHWgShkkCH1Xy17h04voIPxRMX6kJqGDBVIf9G6je70xJHXaxvJ06n/mXdJi8ojJsW6EYMMN4i90b6Nbv7CmTLcdblc7VXYoCZDOiHWkWhDy9A8HJCnyqXVaR0uUC4cKUM3vW1p97YYLUNdXWhQG3gW3b7pcqFp/olTZRC6SZsg9HcQcneQfveYftHdT1yCi90tXfbFwcF2OvhY8NLgymvNGKlxIyWO7RjheX0yNP3mWBk6yEPhISEul5cGTC3tpMPlbS+ToTjYRryuLtLe0knHFWKr9Xq7ICYjDSsDj0a9C50uNB04VYY20k6v+XYW99z1tnSRrrwCpTIUB11UG/oElTApItafhF1nhoUgZOC5muTtF/rzqbSrgwx68wnEYKkMV4ODLEZSzRkSFpChAQOlggx+Dpt7PumVYc+hq0nt7H/7ghaEdEq5QFupDFeDwmA3IV39yjKEreCCmGpUGTzBWcO3fd7f0ynDjEPDJGoEzZBJR+E+7zUZ2tnM0FH6pA7SryjDpCVkaLypgWOd4b7nQN/E0OxQGeiFPciueXbld3cKXVQDKWfoZPWHQUIv++JgP50U6P1tSjKYnjHkjn22yBq4yqDLhj2PY2XoZwn0Q0K6XV6qxWMv6XC1MxnYGlI36aZKFAfbaVzVRWhW0UE67j6s/KJmt2E8zbozFQcikKFEBo/mSOngmce5MgjdbDLIlxLYBMC+6GRhEp0CSEfbQ/aY4iDNMEgHnR76vdL3FkifD90yMsQgQ6kMnmeaJof5PWyku6GJq9qnmh0lZdzuQ6XNP5ChIAPVYU+t+Hawh12lBsowbXaU5Ha7n9hiPYm/DHkfZOeH+UsTIMONCkRLdc80e2F1Ti5KEkXz3q7Nv+lhSVmGsfFReQLB2mSQhNg7mC/X4GBv7xlOr5Sh5W61MsRMluHY7d6puwyP7ujh74oyDCtXoOO1y3DpxCU4ypUXZvcl7cilDGYuJxkpwwiH3qT7Hp3USwbx9Z+M5/WvTpFh1e2es5UMy86VITzu4cODOi2mxKwjQ2OGSaMcGvUaRIaAjt+w6fPnZ9of/cc6FJ0i4fWEdWSIxqYbUIYZxThpYcBjWxl+1fMbftYlg+e1yX/LdLQe7aoKOYN0llK6wWTwePwKBD32leFfHn78Ym54lBLrgsJq0uUB9mFD/sDtno1ec2TgWWewsgx/oT/4D5/+bDT3/8le18y0OSnWCYU6w1XPngE6pG9RVhbTkIGnDHx+7gMzZQinxLrBKtA+1UdN1p5AbTAbbvVs90EGfjI84PLCfzVRhgmxntAM+ljDpuhYzX9mr6TDrQrREmSADNIKUqquLoRonJR9qv3Q7lro2++5VTFaggyQIR8iJcX6EsqoptCFzMGAdaX04ooULe33QQbbyJDuM4S0BTY806nBfRi65Ik8oV4j2F4pREuLfGQIBkYUGPVDBqNl6JXm+5pZscJuZ5o1uFdvmU8PFxkCyhXoEchgtAzbBl0OISvIwAIld+Y/5tvQykMG5zbq1UuGvpUeI7CEC6LoYza4362Z7MOK3MzwUXif/1fauPB+686WsIlGPZsn0DUdCjNE1sq+82l8VqXHhXbcEtmsO6NoaM3lt9ZCztCz3SqbM7wXNrckGX4cHX0XlnTJMK7swnIQMlhRhtoaVI2UQRRzGfclc4r1htqWlGQWV8tl2Np8L3yQZHiRV+OnHhmC40pH6sWRQFtThqSFZGDHJxV8eMqt3LBYKLvt9yoW3T4IL5aWrmT4KPzQIwOWVhtRhhoPSGIyDHl9u4Sc+8T8Gfc0+KffeV/Sf8nbtbMhdntOyK54NVB4nGxvxqp6zaHatu7W7Z6b8VFFGZa+Mx+KMvwUjiCDzWVI6+gfmgvJyTB0NnVGpsSX9Oal6Dsjb6eGyFsqAx15yW7Ppwh5dTUgPU7x3Jg5tTalKv/elUJ1oVKc9ag8ff5JI6WjSxm2loSPkMHmMmieGHz0v+tVGRnIuSi+Yzf58GeKvKMDu+SVj5D8/EA1EV/SL4sDKuFUSDVKqno3aDpfd5Zp4i6T4Qe78N8/Kq4mCUd3IIPNZdCaMczlV3nkZFhj1/xQQQavd4qyS3Z95IxZlL99RY0oDqjIwFpYVX+h59UmDBXio0oybEr3fSysJh3RL+otwyfIwPU3D+txIZOTk8FXIoPv8uj7t/m7pAEmw9WAugxZ9QZW49+MUhl+Ct+pAUes1CDlDHfqL8O/9cowBhn0oLFvO5StrEIlGegEcBlZlctwNaAhTFIvBIa5yvBdMmBpc6taGYIKVCfD61mdMoxDBg5R0qFsg3UFGXZZjiBOTfmuy1AcUFuCperleMVJ2mR4ISwV1lc/VCfDjOLxGCPNVckwEtTlwsAyZNCB1iNVd2S33pTLcE7Oh975zsj51BDNDK7LUByQHlfjTp8UTxmOpHpbXoqqZOBRgX59O67HhtkFyKAHDdXnkC+XY11DOS0yrHnJ0KuSOkO5DMWBwuOUMpSsepwU4SiDSYeIzejqovqdTil+zS4ML9wegQxGpgxzq9lCe0RONI+nWcWTY3glDeZ3reqT4YKduBTQNjk0s48bjUMGHagckeR7V2wVMlUGdnJMVrWxI2ZlGbTtZ9ApQ/7zdBcCM+oRkpSxBJwsw+LGRp+u11fe+JyTZoVMJqNxg7JxexvY6pXaT4xaWQbPcFyB8cL13Nyqh0+Xn6cbH1PyoTlQiNHizq0zSF3J28YtJvmYCzs5Frw/zZnqglTXyPhMXk6y/h7ogWIr7EhgzH8zYJqZHb7qlh2ZcaoMvYWu5EVdr694sbH5ICfWiUNW8D4McT4oo9Fk8MyWJeYjo+OB4TH2wdJjY8OB8XhZ1/ho0KEVaNmu5BpkmDM7Ubhpgzu7czg3l4MMRRk8MyprtsW12wFntmModSXXECatajy7hVuklFXJ3Z87UQaPx6+4bagwZYwFHdmb1Lt/88wTIxLokKYDH7lm0cdZxU1vUWfK4PEEx0aVfFgONDvz3KTKp2EZIYNPS7cc93P2jndWVw9FyFAmA/NhNlBRiJHxMb9Du1YXOR4asabhXOz6smLMH7rPVwZ/cwnXF4Bq288wM8vS5tHReDw+ylLpgdpevsFlWHG0DAadoHYrzVGGYPxaCOPH5p7GmxlYG0bW2jIY9Jdu8JwZhmU+8xYyGJ8zFI//2e9trYa+UGXYlnyrzwyT6VYjSHPNGW4shC5DBp6rSfKfN1B9Br2TX+P3WVoGw/NnHjIEZJqSIAOnOoPs5w1oICpbbzsOWTtI4vD50Bxk8F9f8hmGDJwr0NWvsEbk6m2rFldBTAiNIIPHHxgvZQCnY3Bvx7iKlvSW3hKWrLdpINYYMuComDrIcNmVsa/zJ4Qr19syVnchKVgUyGCN/QzpxY0V3ZXoSin0TmbO6jJEIQNkMJyw2IhYdmKADA19CvdkI8oQgwyQgQORZOO5MClABsjAg/+3dwa/beNYGCeJAi1YEaKUaoXZgzApJgpmbQcGfElQddZBAhQd7KnXnGcOXSBAiwWmPS2wf/m+R4qSbKeN3TiOJX+/g6PQimPL/MT3Hh8fp/0zkt72RgwnP7/pcg0x7LcYxE3fxDASfRHD9VLJmN/fQQz7LYa+uQ1T0RsxIB2jd2K4r34Soqo/KgYk6vVPDOMeqeGDEBgZIAZYSvtuI636DMs1V3+GGPZfDOJDL6RwcSV6JYYX129+7XKMaFIfxCCuLvZfC/Ox6JkYMM+wKzFEfluofFuDw55Pv81GQkAMEMO3xGCUUolMtvTv3p7tsRwu+iAFiOEpxcA/Ehlv7T9O74grXZzt1IK6vFmV5Pm8H1KAGJ5aDKlUdJxJaVL6rbRkOFUilmkqpXYySY3kU4Q2fFYSNSf5p7JoIcw6nXf6/sXllOz08XxnUjjncNHobNYK4nx21hclQAxODI+zy+hva4ohFZGVudLkPsRkOmXSRrG0UuVSTnjksPSUZjFoq6i5OYmeSsjM0tHKxMNoNJ2ORm3sZnTX4PBAo+riuy7y2yt6C/QexqJXQAwvXpx8eYTXvbheRwyVlYVQ3OtFJmN/EFN/t3Tnp0dRsg5ETorR7F1M6KE9yY0lbti4j9HSVMT5zVjMHxYlHS3ZZOdnPev594vh+NfXXd4dhBhenPy0fbha4BrRJO7Rhl1puttnpTd/qJ8r708Uuev5FclCk2roj7QIJ+Uy4z8zdj3/ujGgGstlZcCg/nzHDX9+NVs571svOSgxrFTHeLNLMVw/lRjW4eS4Zd1NTO+NJiWshSALspNKso2yIohBydhJwI0iWkZeDOEkXf+VWf+zjsdX428OGBcf3lIHv7grm2j1vFZk9JJjMRAeMR3j75uK4WSfxdAtNvjbdsRAD8ZEPDJ02mMaD2KZ+ZFh0h0Zghjqk/xTD2V0Np/NZpc309CjF6sxnY8Wz5tPB9Pz7xXDVhP1vvbGTFqH484yj+NtiYFu/hl7CzwQKBUVhXOpY/KRi+AzJI3PUIshnOSfKrNiyxfkar5sDx0Mj1hr9XJTMbzeZzH8CGtEk9iBjqxMlCZZWKnJdTBRLOm3TMqyG00KYggnuaeSeqjYKuPp2eVsNh+GH/DjYliuwv37y4fcuk837Dtfd/vRn796/+zxef/vf30/tJp05hmUlTJxPkNppS0X5hkaM6k+qZ5nEODRQqsv33V52AYKz6/3eWD4xy6k4OTwx6ZvLV4rXgp6NM8gxJdN1HC641H51bNd8SfEADHQ2PDT2q99u+swxfudieHZDGKAGMgX+7ze4HD6aeeffHdaePYHxAAxuAD153tHh5PXX57gk++xGMBAxUB8uv2OHk5OP988ySf/c2daeD9FP4MYWi4/3p6uGkwvX//3y5MtjP3nX692w18YGHrCx79twNHD/tfZp6+ff7k9Ovrf0dHtLx//83yMyw8AAAAAAAAAAAAAAAAAAAAAAAAAAAAYOJWr16INl6IofD2KQPQYi+7BvqK5BE9GD1z5kx7y7lPRYVyDnGtRpDIWhlfod+vUQQwHRcpFFgqpROJuj7I4QDFwGVNRcYnHsq6NDTEcJs5GsLbyotDiAMUgLBe3S0ze3A9CARcSQ5HIxm6K6ViXolM3vltBHvSejLfMIPOIzSXlvvZQ+1/LKpcyPwBFOBOxdBtLVXw/aArFR9LaRIUSRbHUin5xpbLruvGdCvJgCDaC6wLSNnfIUPtfy0QrewiGglNAJb3XlIq2UHzk2lzx+AAXQ23rxrdHYDA2gmVJOF20tf/dtgAi6QRXBuxCFyQD9p+tEZ1C8ZHv5Wl9DVLeOIeE09aNb4/QkYZiI0wkuw4cVOrU/iczKYwcQ4f7tLVKFhO2iNpC8bUDXXf5lEvJ61YMiusEhyN0pCEQGU0yYEm4oGJb+9870IcRULF2ItNCKnc/aAvF1x++Hhk0j6GFE0OoG98eoSMNxEaoTC6sLt1X3tb+92LYYGSInYr0olm1GJPa11uoktzTtbXWBxXqQvGRc42Dz+DEUDoxhLrx7REYiI2gqYtSd3BmUVv7XztxbOAzuGiLkov7G/dDDIULJZV1FLUpFB9JI3Ml66mHlD5fYi0bR6FufKeCPBiGjcA3tipsWd/U/tfGJMpusHV37F8hWaiQ2A8x1Jsyu910RHeeIS+tLxnv371MKu8p1HXjuxXkwTBcaCU6e3SH2v/a8ITTBrsA1GKI2OSu6u5k/NZjqfYbC1BPSsMWAzocSH/rbbYq6IW/vXwEwB1iYHcy4ugkb12c0kNKGkhUzlvO0IGhccdU3SYyPmj8aWa6IAYwHDGo2oR2OW+tmcTNirf0pse8bdJuU+SqnemCGMCwxMBpPImRUS0GsrYN+xK1TtiQCk1Z3Z+amS6IAQzKTCrI2SDjJ4gh5ziTcWKIa6+6aRIpmU0uihm2RN4hq7Mo9TwL+viBQfdmmaRbFwM70L7Th5HBd7m0FYMxbZPz2a1d3BJ5d9cgXREDz8CbQ0hCAS2ckZdt8x7YCa26Tl8tiiFz7YlTYd42lZH7m6iZ6Xraq+KXdMQbRJRB/6mnlrNoi2Lwk245T2IZEhrLgiSnJzlPYrHVpKThWQxbidBEBpXLkm1nunZtJsUyLXUzb+bFUJAYuJ0+AEd8beqyVoTNheVsPi1KztnjSco64T2SeWGxEqivpG2/68wx0TfqVoLS0+VS+xpiaNMxSiO1S2Mr+CByExaaxUDCkAn1oqapUtKvmniKeQYvhkTmLsrbioFXdnB7EjuNGnqrijNbTeGWM6SxE7uNmoR3eiGjYVr1190NFlJnLQt/oz5HKTHL7UO8CF4MbNOFXLvWgY6lXx/OeayaYwKKFz5YIXIT+Thw3Ca8RxJeRr99Bhr/VbSylsVlr1buXrjYPlgx5KJNFPEOdOJGhkyEDNaSRzHWAdtNJqffnY3UJrzXKx9AXylzvgfGK2tZMjIIShLCcvtgxaAWxOAyVK2JXHskTYgNcP0M7X5O/LVzyYx1wjtKBwzAViJn9o61LKlI7Ooal0MSQ85rFdTCyCBMXsjMRNo2165oEt4hhiFgZLS8lkVYHRm1usbloEaGsKTTRXwjX17KZFaYjE3GwmcYxk3CO8TQ80GBrV5WQmcti/9GeeFbIVbbD0MM7AVoF1pVol7bYJz7MGHXKZN+zbhW7igkvEMMvYbMXe2nWjtrWfw3OvHFMlbaD0MMjqzJO6rnGfxwUYXpGWVDArpPeIcYeu4/Z2FWoFMzS9TfeiruagcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACHwP8Bohj1TPywTAIAAAAASUVORK5CYII="}}]);