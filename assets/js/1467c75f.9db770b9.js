"use strict";(self.webpackChunkcodestar_documents=self.webpackChunkcodestar_documents||[]).push([[6959],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||i;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1851:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const i={title:"Clean Code",description:""},o=void 0,l={unversionedId:"software-engineering/phase03-clean-code",id:"software-engineering/phase03-clean-code",title:"Clean Code",description:"",source:"@site/docs/software-engineering/phase03-clean-code.md",sourceDirName:"software-engineering",slug:"/software-engineering/phase03-clean-code",permalink:"/codestar-documents/docs/software-engineering/phase03-clean-code",draft:!1,editUrl:"https://github.com/Star-Academy/codestar-documents/tree/master/docs/software-engineering/phase03-clean-code.md",tags:[],version:"current",frontMatter:{title:"Clean Code",description:""},sidebar:"tutorialSidebar",previous:{title:"Full-Text Search",permalink:"/codestar-documents/docs/software-engineering/phase02-full-text-search-project"},next:{title:"Unit Test",permalink:"/codestar-documents/docs/software-engineering/phase04-unit-test"}},s={},c=[{value:"\u0645\u0642\u062f\u0645\u0647",id:"\u0645\u0642\u062f\u0645\u0647",level:2},{value:"\u0627\u0647\u0645\u06cc\u062a Clean Code",id:"\u0627\u0647\u0645\u06cc\u062a-clean-code",level:2},{value:"Code Smell",id:"code-smell",level:2},{value:"\u0627\u0635\u0648\u0644 S.O.L.I.D",id:"\u0627\u0635\u0648\u0644-solid",level:2},{value:"Refactoring Techniques",id:"refactoring-techniques",level:2},{value:"Code Review",id:"code-review",level:2}],p={toc:c};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u0645\u0642\u062f\u0645\u0647"},"\u0645\u0642\u062f\u0645\u0647"),(0,a.kt)("p",null,"\u062f\u0631 \u0627\u06cc\u0646 \u0641\u0627\u0632 \u0628\u0627 \u0645\u0641\u0627\u0647\u06cc\u0645 \u0648 \u062a\u06a9\u0646\u06cc\u06a9\u200c\u0647\u0627\u06cc \u0645\u062e\u062a\u0644\u0641\u06cc \u0628\u0631\u0627\u06cc \u0627\u0641\u0632\u0627\u06cc\u0634 \u06a9\u06cc\u0641\u06cc\u062a \u06a9\u062f \u0622\u0634\u0646\u0627 \u0645\u06cc\u200c\u0634\u0648\u06cc\u062f \u0648 \u06a9\u062f \u0641\u0627\u0632 \u0642\u0628\u0644 \u0631\u0627 \u0628\u0647 \u06cc\u06a9 \u06a9\u062f \u0628\u0633\u06cc\u0627\u0631 \u0628\u0627 \u06a9\u06cc\u0641\u06cc\u062a \u062a\u0628\u062f\u06cc\u0644 \u0645\u06cc\u200c\u06a9\u0646\u06cc\u062f. \u0633\u067e\u0633 \u06a9\u062f \u062e\u0648\u062f \u0631\u0627 \u0628\u0627 \u0633\u0627\u06cc\u0631 \u06a9\u0627\u0631\u0622\u0645\u0648\u0632\u0627\u0646 \u0628\u0647 \u0627\u0634\u062a\u0631\u0627\u06a9 \u0645\u06cc\u200c\u06af\u0630\u0627\u0631\u06cc\u062f \u0648 \u0627\u0632 \u0622\u0646\u200c\u0647\u0627 \u0645\u06cc\u200c\u062e\u0648\u0627\u0647\u06cc\u062f \u06a9\u062f\u062a\u0627\u0646 \u0631\u0627 Review \u06a9\u0646\u0646\u062f."),(0,a.kt)("h2",{id:"\u0627\u0647\u0645\u06cc\u062a-clean-code"},"\u0627\u0647\u0645\u06cc\u062a Clean Code"),(0,a.kt)("p",null,"\u062f\u0631 \u0627\u0628\u062a\u062f\u0627 \u062f\u0631 \u0645\u0648\u0631\u062f \u062f\u0648 \u0633\u0648\u0627\u0644 \u0632\u06cc\u0631 \u0641\u06a9\u0631 \u06a9\u0646\u06cc\u062f \u0648 \u0628\u0627 \u0647\u0645 \u062a\u06cc\u0645\u06cc \u062e\u0648\u062f \u0628\u062d\u062b \u06a9\u0646\u06cc\u062f:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u0686\u0631\u0627 \u062a\u0645\u06cc\u0632 \u0628\u0648\u062f\u0646 \u06a9\u062f \u0648 \u062f\u0627\u0634\u062a\u0646 \u0645\u0639\u0645\u0627\u0631\u06cc \u062e\u0648\u0628 \u0645\u0647\u0645 \u0627\u0633\u062a\u061f \u0686\u0631\u0627 \u0628\u0627\u06cc\u062f \u0648\u0642\u062a \u0648 \u0627\u0646\u0631\u0698\u06cc \u0632\u06cc\u0627\u062f\u06cc \u0635\u0631\u0641 \u0637\u0631\u0627\u062d\u06cc \u0648 \u0646\u0648\u0634\u062a\u0646 \u06a9\u062f \u062a\u0645\u06cc\u0632 \u0634\u0648\u062f\u061f"),(0,a.kt)("li",{parentName:"ol"},"\u0686\u0631\u0627 \u0627\u06cc\u0646 \u0645\u0648\u0636\u0648\u0639 \u062f\u0631 \u0627\u0628\u0639\u0627\u062f \u0635\u0646\u0639\u062a\u06cc \u0627\u0647\u0645\u06cc\u062a \u0628\u0633\u06cc\u0627\u0631 \u0628\u06cc\u0634\u062a\u0631\u06cc \u067e\u06cc\u062f\u0627 \u0645\u06cc\u200c\u06a9\u0646\u062f\u061f")),(0,a.kt)("admonition",{title:"\u200c",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"\u062a\u0644\u0627\u0634 \u06a9\u0646\u06cc\u062f ",(0,a.kt)("strong",{parentName:"p"},"\u0641\u0642\u0637 \u0628\u0627 \u0641\u06a9\u0631 \u062e\u0648\u062f\u062a\u0627\u0646 \u0648 \u0628\u062d\u062b \u0628\u0627 \u0647\u0645 \u062a\u06cc\u0645\u06cc")," \u0628\u0647 \u062c\u0648\u0627\u0628 \u0633\u0648\u0627\u0644\u0627\u062a \u0628\u0627\u0644\u0627 \u0628\u0631\u0633\u06cc\u062f \u062a\u0627 \u0630\u0647\u0646 \u0634\u0645\u0627 \u0628\u0631\u0627\u06cc \u0645\u0631\u0627\u062d\u0644 \u0628\u0639\u062f \u0622\u0645\u0627\u062f\u0647 \u0634\u0648\u062f.")),(0,a.kt)("admonition",{title:"\u200c",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"\u0644\u0637\u0641\u0627 \u0642\u0628\u0644 \u0627\u0632 \u0641\u06a9\u0631 \u06a9\u0631\u062f\u0646 \u0628\u0647 \u0627\u06cc\u0646 \u0633\u0648\u0627\u0644\u0627\u062a \u0628\u0647 \u0633\u0631\u0627\u063a \u0645\u0631\u0627\u062d\u0644 \u0628\u0639\u062f\u06cc \u0648 \u062e\u0648\u0627\u0646\u062f\u0646 \u0645\u0642\u0627\u0644\u0627\u062a \u0646\u0631\u0648\u06cc\u062f!")),(0,a.kt)("p",null,"\u062d\u0627\u0644 \u0628\u0631\u0627\u06cc \u0641\u0647\u0645 \u062f\u0644\u0627\u06cc\u0644 \u0627\u0647\u0645\u06cc\u062a \u06a9\u062f \u062a\u0645\u06cc\u0632 \u062f\u0631 \u0635\u0646\u0639\u062a\u060c ",(0,a.kt)("a",{parentName:"p",href:"https://www.arcanys.com/blog/the-importance-of-clean-code"},"The Importance of Clean Code"),"\n\u0631\u0627 \u062f\u0631 \u062c\u0648\u0627\u0628 \u0633\u0648\u0627\u0644 \u0627\u0648\u0644 \u0648 ",(0,a.kt)("a",{parentName:"p",href:"https://techhq.com/2019/06/why-software-maintainability-is-crucial/"},"Why software maintainability is crucial - TechHQ"),"\n\u0631\u0627 \u062f\u0631 \u062c\u0648\u0627\u0628 \u0633\u0648\u0627\u0644 \u062f\u0648\u0645 \u0645\u0637\u0627\u0644\u0639\u0647 \u06a9\u0646\u06cc\u062f."),(0,a.kt)("h2",{id:"code-smell"},"Code Smell"),(0,a.kt)("p",null,"\u06cc\u06a9\u06cc \u0627\u0632 \u0631\u0627\u0647\u200c\u0647\u0627\u06cc \u0627\u0641\u0632\u0627\u06cc\u0634 \u06a9\u06cc\u0641\u06cc\u062a \u06a9\u062f\u060c \u067e\u06cc\u062f\u0627 \u06a9\u0631\u062f\u0646 \u0646\u0634\u0627\u0646\u0647\u200c\u0647\u0627\u06cc \u06a9\u062f \u06a9\u062b\u06cc\u0641 \u062f\u0631 \u0628\u0631\u0646\u0627\u0645\u0647 \u0648 \u0633\u067e\u0633 Refactor\n\u06a9\u0631\u062f\u0646 \u0622\u0646 \u0627\u0633\u062a\u060c \u0628\u0647 \u0635\u0648\u0631\u062a\u06cc \u06a9\u0647 \u0646\u0634\u0627\u0646\u0647\u200c\u0647\u0627\u06cc \u06a9\u062f \u06a9\u062b\u06cc\u0641 \u0627\u0632 \u0628\u06cc\u0646 \u0628\u0631\u0648\u0646\u062f. \u0628\u0647 \u0627\u06cc\u0646 \u0646\u0634\u0627\u0646\u0647\u200c\u0647\u0627 ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Code_smell"},"Code Smell"),"\n\u0645\u06cc\u200c\u06af\u0648\u06cc\u06cc\u0645. \u062f\u0631 \u0627\u06cc\u0646 \u0645\u0631\u062d\u0644\u0647 \u062f\u0631 \u0645\u0648\u0631\u062f Code Smell\u0647\u0627\u06cc\n\u0632\u06cc\u0631 \u0645\u0637\u0627\u0644\u0639\u0647 \u06a9\u0646\u06cc\u062f \u0648 \u0645\u0634\u062e\u0635 \u06a9\u0646\u06cc\u062f \u06a9\u062f\u0627\u0645 \u06cc\u06a9 \u0627\u0632 \u0645\u0648\u0627\u0631\u062f \u0632\u06cc\u0631 \u062f\u0631 \u06a9\u062f\u06cc \u06a9\u0647 \u0628\u0631\u0627\u06cc \u067e\u0631\u0648\u0698\u0647 \u062c\u0633\u062a\u062c\u0648 \u0628\u0647 \u0648\u062c\u0648\u062f \u0622\u0645\u062f\u0647 \u0627\u0633\u062a\u061f"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://refactoring.guru/smells/long-method"},"Long Method")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://refactoring.guru/smells/primitive-obsession"},"Primitive Obsession")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://refactoring.guru/smells/large-class"},"Large Class")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://refactoring.guru/smells/long-parameter-list"},"Long Parameter List")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://refactoring.guru/smells/temporary-field"},"Temporary Field")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://refactoring.guru/smells/duplicate-code"},"Duplicate Code"))),(0,a.kt)("h2",{id:"\u0627\u0635\u0648\u0644-solid"},"\u0627\u0635\u0648\u0644 S.O.L.I.D"),(0,a.kt)("p",null,"\u06cc\u06a9\u06cc \u0627\u0632 ",(0,a.kt)("strong",{parentName:"p"},"\u0645\u0647\u0645\u200c\u062a\u0631\u06cc\u0646")," \u0645\u062c\u0645\u0648\u0639\u0647 \u0627\u0635\u0648\u0644 \u062f\u0631 \u0645\u0647\u0646\u062f\u0633\u06cc \u0646\u0631\u0645\u200c\u0627\u0641\u0632\u0627\u0631\u060c \u0627\u0635\u0648\u0644 \u067e\u0646\u062c\u200c\u06af\u0627\u0646\u0647\u0654 SOLID\n\u0645\u06cc\u200c\u0628\u0627\u0634\u062f.\u0627\u06cc\u0646 \u0627\u0635\u0648\u0644 \u0639\u0628\u0627\u0631\u062a\u200c\u0627\u0646\u062f \u0627\u0632:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"S"),"ingle Responsibility"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"O"),"pen for Extension/Closed for Modification"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"L"),"iskov Substitution"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"I"),"nterface Segregation"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"D"),"ependency Inversion")),(0,a.kt)("p",null,"\u0628\u0631\u0627\u06cc \u0622\u0634\u0646\u0627\u06cc\u06cc \u0628\u0627 \u0627\u0635\u0648\u0644 SOLID \u0644\u06cc\u0646\u06a9\u200c\u0647\u0627\u06cc \u0632\u06cc\u0631 \u0631\u0627 \u0645\u0637\u0627\u0644\u0639\u0647 \u06a9\u0646\u06cc\u062f:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.c-sharpcorner.com/article/solid-with-net-core/"},"SOLID With .Net Core")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/archive/msdn-magazine/2014/may/csharp-best-practices-dangers-of-violating-solid-principles-in-csharp"},"C# Best Practices : Dangers of Violating SOLID Principles in C#"))),(0,a.kt)("admonition",{title:"\u200c",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"\u0628\u0631\u0627\u06cc \u0645\u0637\u0627\u0644\u0639\u0647 \u0628\u06cc\u0634\u062a\u0631 \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u06cc\u062f\n",(0,a.kt)("a",{parentName:"p",href:"https://www.syncfusion.com/blogs/post/mastering-solid-principles-csharp"},"Mastering SOLID Principles in C#: A Practical Guide"),"\n\u0631\u0627 \u0645\u0637\u0627\u0644\u0639\u0647 \u06a9\u0646\u06cc\u062f.")),(0,a.kt)("h2",{id:"refactoring-techniques"},"Refactoring Techniques"),(0,a.kt)("p",null,"\u0628\u0631\u0627\u06cc Refactor\n\u06a9\u0631\u062f\u0646 \u0628\u062e\u0634\u200c\u0647\u0627\u06cc \u0645\u062e\u062a\u0644\u0641 \u06a9\u062f\u062a\u0627\u0646 \u0648 \u0631\u0641\u0639 Code Smell\u0647\u0627\n\u062e\u0644\u0627\u0642\u06cc\u062a \u0628\u0647 \u062e\u0631\u062c \u062f\u0647\u06cc\u062f \u06cc\u0627 \u0628\u0647 \u0645\u062c\u0645\u0648\u0639\u06c0 ",(0,a.kt)("a",{parentName:"p",href:"https://refactoring.guru/refactoring/techniques"},"Refactoring Techniques"),"\n\u0645\u0631\u0627\u062c\u0639\u0647 \u06a9\u0646\u06cc\u062f."),(0,a.kt)("admonition",{title:"\u200c",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"\u0645\u0637\u0627\u0644\u0639\u06c0 \u062f\u0642\u06cc\u0642 \u062a\u0645\u0627\u0645 \u0645\u0648\u0627\u0631\u062f \u0645\u0648\u062c\u0648\u062f \u062f\u0631 \u0644\u06cc\u0646\u06a9 \u0645\u0630\u06a9\u0648\u0631 \u0646\u06cc\u0627\u0632 \u0646\u06cc\u0633\u062a \u0647\u0645\u06cc\u0646 \u06a9\u0647 \u0628\u0647 \u0641\u0647\u0631\u0633\u062a \u0622\u0646 \u0646\u06af\u0627\u0647 \u06a9\u0646\u06cc\u062f \u0648 \u0628\u0639\u0636\u06cc \u0627\u0632 \u0622\u0646\u200c\u0647\u0627 \u0631\u0627 \u0645\u0631\u0648\u0631 \u06a9\u0646\u06cc\u062f \u06a9\u0627\u0641\u06cc\u0633\u062a.")),(0,a.kt)("h2",{id:"code-review"},"Code Review"),(0,a.kt)("p",null,"\u0627\u0632 \u06cc\u06a9 \u062a\u06cc\u0645 \u062f\u06cc\u06af\u0631 \u0628\u062e\u0648\u0627\u0647\u06cc\u062f Pull Request\n\u0634\u0645\u0627 \u06a9\u0647 \u062f\u0631 \u0645\u0631\u062d\u0644\u0647\u200c\u06cc Refactor\n\u0633\u0627\u062e\u062a\u0647\u200c\u0627\u06cc\u062f \u0631\u0627 Review\n\u06a9\u0646\u0646\u062f \u0648 \u0628\u0631 \u0627\u0633\u0627\u0633 \u0644\u06cc\u0633\u062a Code Smell\u0647\u0627\n\u0628\u0647 \u0634\u0645\u0627 \u0628\u0627\u0632\u062e\u0648\u0631\u062f \u0628\u062f\u0647\u0646\u062f (\u0631\u0648\u06cc Pull Request\n\u06a9\u0627\u0645\u0646\u062a \u0628\u06af\u0630\u0627\u0631\u0646\u062f)\u060c \u062f\u0631 \u0627\u06cc\u0646 \u0645\u0631\u062d\u0644\u0647 \u062d\u062a\u0645\u0627 \u0627\u0632 \u062a\u06cc\u0645\u200c\u0647\u0627\u06cc \u062f\u06cc\u06af\u0631 \u0647\u0645 \u0633\u0631\u0627\u063a \u0634\u0645\u0627 \u0645\u06cc\u200c\u0622\u06cc\u0646\u062f \u0648 \u0645\u06cc\u200c\u062e\u0648\u0627\u0647\u0646\u062f \u06a9\u062f\u0634\u0627\u0646 \u0631\u0627 Review\n\u06a9\u0646\u06cc\u062f\u060c \u0642\u0628\u0644 \u0627\u0632 Review\n\u06a9\u062f \u062f\u06cc\u06af\u0631\u0627\u0646\u060c \u0631\u0627\u0647\u0646\u0645\u0627\u0647\u0627\u06cc \u0632\u06cc\u0631 \u0631\u0627 \u0645\u0637\u0627\u0644\u0639\u0647 \u06a9\u0646\u06cc\u062f \u0648 Review\n\u062e\u0648\u062f \u0631\u0627 \u0628\u0631 \u0627\u0633\u0627\u0633 \u0627\u06cc\u0646 \u0631\u0627\u0647\u0646\u0645\u0627\u0647\u0627 \u0627\u0646\u062c\u0627\u0645 \u062f\u0647\u06cc\u062f:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://google.github.io/eng-practices/review/reviewer/looking-for.html"},"What to look for in a code review")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/nyu-cds/effective-code-reviews/blob/master/_episodes/03-checklist.md"},"Effective Code Reviews: Code Review Checklist"))),(0,a.kt)("admonition",{title:"\u200c",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"\u0628\u0627 \u062a\u0648\u062c\u0647 \u0628\u0647 \u0627\u06cc\u0646 \u06a9\u0647 \u062f\u0631 \u0627\u06cc\u0646 \u0641\u0627\u0632 \u0635\u062d\u0628\u062a\u06cc \u062f\u0631 \u0645\u0648\u0631\u062f \u0627\u0646\u0648\u0627\u0639 \u062a\u0633\u062a \u0628\u0647 \u062e\u0635\u0648\u0635 Unit Test \u0646\u06a9\u0631\u062f\u06cc\u0645 \u0642\u0633\u0645\u062a\u200c\u0647\u0627\u06cc\u06cc \u0627\u0632 \u0644\u06cc\u0646\u06a9\u200c\u0647\u0627\u06cc \u0628\u0627\u0644\u0627 \u06a9\u0647 \u062f\u0631 \u0645\u0648\u0631\u062f \u062a\u0633\u062a \u0627\u0633\u062a \u0631\u0627 \u0646\u0627\u062f\u06cc\u062f\u0647 \u0628\u06af\u06cc\u0631\u06cc\u062f.")))}m.isMDXComponent=!0}}]);