(this["webpackJsonpcv-justin-rankin"]=this["webpackJsonpcv-justin-rankin"]||[]).push([[0],{105:function(e,a,n){e.exports=n(159)},115:function(e,a,n){},12:function(e,a,n){e.exports={row:"Counter_row__1C_4f",value:"Counter_value__1d0te",button:"Counter_button__1xpSV",textbox:"Counter_textbox__3ODaX",asyncButton:"Counter_asyncButton__2UAr3 Counter_button__1xpSV"}},159:function(e,a,n){"use strict";n.r(a);var o=n(0),t=n.n(o),i=n(36),l=n.n(i),r=n(99),s=n(93),c=n.n(s),d=n(98),u=n(29),p=n(39),m=Object(p.b)({name:"counter",initialState:{value:0},reducers:{increment:function(e){e.value+=1},decrement:function(e){e.value-=1},incrementByAmount:function(e,a){e.value+=a.payload}}}),g=m.actions,S=g.increment,v=g.decrement,E=g.incrementByAmount,f=function(e){return e.counter.value},b=m.reducer,A=n(12),y=n.n(A);n(57);function h(){var e=Object(u.c)(f),a=Object(u.b)(),n=Object(o.useState)("2"),i=Object(d.a)(n,2),l=i[0],r=i[1];return t.a.createElement("div",null,t.a.createElement("div",{className:y.a.row},t.a.createElement("button",{className:y.a.button,"aria-label":"Increment value",onClick:function(){return a(S())}},"+"),t.a.createElement("span",{className:y.a.value},e),t.a.createElement("button",{className:y.a.button,"aria-label":"Decrement value",onClick:function(){return a(v())}},"-")),t.a.createElement("div",{className:y.a.row},t.a.createElement("input",{className:y.a.textbox,"aria-label":"Set increment amount",value:l,onChange:function(e){return r(e.target.value)}}),t.a.createElement("button",{className:y.a.button,onClick:function(){return a(E(Number(l)||0))}},"Add Amount"),t.a.createElement("button",{className:y.a.asyncButton,onClick:function(){return a((e=Number(l)||0,function(a){setTimeout((function(){a(E(e))}),1e3)}));var e}},"Add Async")))}n(115);var P=n(61),I=n(96),C=n(1),T=n(58),O=n(8),w=n(37),k=n(64),U=n(97),x={"en-US":P,"es-ES":I};console.log("MESSAGES-EN: ",P);var D=Object(C.c)(),R=Object(T.a)({locale:"en-US",messages:Object(r.a)({},x["en-US"])},D);console.log(navigator.languages);var N=function(e){console.log("APP PROPS: ",e);var a=new Date(1459913574887);return console.log(R),R.messages,t.a.createElement(t.a.Fragment,null,t.a.createElement(O.b,{value:R},t.a.createElement("header",{className:"cv-header"},t.a.createElement("div",{className:"col-photo"},t.a.createElement("img",{src:c.a,alt:"Jusitn Rankin",className:"me"})),t.a.createElement("div",{className:"col-title"},t.a.createElement("h1",null,"Justin Rankin"),t.a.createElement("h2",null,"Full-stack developer"))),t.a.createElement("ul",null,t.a.createElement("li",null,t.a.createElement("strong",null,"navigator.language:")," ",navigator.language),t.a.createElement("li",null,t.a.createElement("strong",null,"localeCurrent:")," ","en-US"),t.a.createElement("li",null,t.a.createElement("strong",null,"fullBrowserVersion:")," ",U.fullBrowserVersion),t.a.createElement("li",null,t.a.createElement("strong",null,"example localized date:")," ",t.a.createElement(w.a,{value:a,year:"numeric",month:"long",day:"numeric",weekday:"long"})),t.a.createElement("li",null,t.a.createElement("strong",null,"process.env.GITHUB_GIST:")," ",Object({NODE_ENV:"production",PUBLIC_URL:"/cv-justin-rankin",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).GITHUB_GIST),t.a.createElement("li",null,t.a.createElement("strong",null,"process.env.REACT_APP_GITHUB_GIST:")," ",Object({NODE_ENV:"production",PUBLIC_URL:"/cv-justin-rankin",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_GITHUB_GIST)),t.a.createElement("h2",null,t.a.createElement(k.a,{id:"Profile.title"})),t.a.createElement(k.a,{id:"Profile"},(function(e){return t.a.createElement("h2",null,e)})),t.a.createElement(h,null)))},L=Object(p.a)({reducer:{counter:b}});n(117),n(49),n(131),n(133),n(90),n(91),n(146),n(150),n(152),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(t.a.createElement(t.a.StrictMode,null,t.a.createElement(u.a,{store:L},t.a.createElement(N,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},61:function(e){e.exports=JSON.parse('{"words":"-------------------------------------------------------------","words.Technologies":"Technologies","Sidebar":"-----------------------------------------------------------","Sidebar.nav.list":[{"label":"Profile","url":"profile"},{"label":"Technologies","url":"technologies"},{"label":"Principles","url":"principles"},{"label":"Work Experience","url":"work-experience"},{"label":"University Education","url":"education"},{"label":"My Stack","url":"my-stack"},{"label":"Example Projects","url":"example-projects"},{"label":"Connected Study","url":"connected-study"},{"label":"Languages","url":"languages"}],"Contact":{"title":"CONTACT","_end":"-----------------------------------------------"},"Profile":{"title":"PROFILE","text":["Over 10 years of international experience in front-end and back-end development, focussing on mobile-first websites, dashboard and CMS back-office systems, RESTful API services, SaaS, SEO and UX design.","Study, testing, and adoption of new technologies, coding best practices, and design trends, ensure projects are modern and future-proofed.","University education in design and communication, provide additional perspective to development, product structure, UX and design."],"_end":"-----------------------------------------------"},"Technologies":"---------------------------------------------------------","Technologies.title":"TECHNOLOGIES","Technologies.proficient":"Proficient","Technologies.proficient.list":["Node.js","React","Javascript: vanilla + ES6","PHP","MongoDB","MySQL","HTML5","CSS3 + SASS","CSS3 animations","RESTful services","SEO","Git","Linux Terminal"],"Technologies.experienced":"Experienced","Technologies.experienced.list":["AngularJS v6","TypeScript","GraphQL","Ruby","Webpack","SysOps (Linux server)","AWS","Jenkins","Docker","i18n","OAuth","JWT","Google Analytics","Markdown"],"Principles":"-----------------------------------------------------------","Principles.title":"PRINCIPLES","Principles.list":["SCRUM agile team framework","Atlassian suite: JIRA, Confluence, Bitbucket","Best practices, naming-conventions, linting","Symantic variable, function, and file names","Code comments, annotations and TODOs","Reusable code, modules, and components","Product future-proofing","Tidy, standardized, project structures","Clear UX with evident function. Reduce clicks!"],"Connected":"-----------------------------------------------------------","Connected.title":"CONNECTED STUDY","Connected.text":"Following framework updates, news on security breaches and political decisions affecting the tech industry, articles on top design and UX trends; even pop culture, all affect how I think about my development process and code, and thus stay connected.","Connected.resources":"Resources used to study + connect :","Connected.list":[{"label":"Podcasts: ie. \\"Syntax\\" with Wes Bos"},{"label":"github.com"},{"label":"Medium"},{"label":"alligator.io"},{"label":"dev.to"},{"label":"stackoverflow.com"},{"label":"codesandbox.io"},{"label":"caniuse.com"},{"label":"csstricks.com"},{"label":"webdesignerdepot.com"},{"label":"awwwards.com"}],"Experience":"-----------------------------------------------------------","Experience.title":"WORK EXPERIENCE","Experience.list":[{"company":"PANGEALAND S.L. / exoticca.com","url":"https://www.exoticca.com","position":"Senior full-stack Developer","time":"2019 - 2018","location":"Barcelona, Spain","text":["Back-end development and maintenance of company internal dashboard used by 50+ employees, across multiple departments. Apart from response to Jira requests, often took personal initiative, both identifying possible improvements, and adding new functionality.","Development of front-end client and APIs, including a big project refactor to prepare client and server for adding locales as per global market expansion."],"technologies":"Node.js, Javacript vanilla + ES6/Babel, Angular, MongoDB, MySQL, RESTful API services, PHP, SASS, AWS, and server SysOps."},{"company":"DIGITAL DIMENSION SPAIN / ECONOCOM","url":"https://www.econocom.com/en","position":"Full-stack Developer / UX + UI Designer","time":"2016 - 2017","location":"Barcelona, Spain","text":["Front-end and back-end development of SaaS application (serving France and Spain), including integration of multiple service APIs, parsing the JSON response data to display in React. Fluid workflow within dynamic SCRUM team framework.","Dashboard design, project refactor and UX improvement."],"technologies":"Node.js, React, Javacript vanilla + ES6/Babel, Docker, RESTful API services, SASS."},{"company":"70 MAIN STREET STUDIOS","url":"http://www.70mainstreet.com","position":"Front-end Developer / UX + UI Designer","time":"2015 - 2016","location":"Toronto, Canada","text":["Development, design, and UX of websites. Coded Angular components for integration into existing products.  Newsletter design, development, and testing.","Fluid team collaboration via Slack, JIRA, and GitLab.","International clients: Scotiabank, TD Bank, Rogers, Nickelodeon."],"technologies":"Node.js, Javascript vanilla + ES6/Babel + jQuery, Angular, Ruby, SASS, MySQL, Jenkins."},{"company":"APPLE UK & SPAIN","url":"https://www.apple.com/uk","position":"Full-stack developer, Tech Support + Sales","time":"2010 - 2012","location":"Barcelona, Spain","text":["Promoted to IT team, for my initiative to code new call-tracker app, from initial position of tech support and sales.","The new app was initially meant for personal use, replacing the existing tool that of one with superior UX design, improving workflow speed, and providing additional statistics on calls and orders.","Management decided to adopt the app for use by 300+ employees on Black Friday (highest volume of the year). Important data and statistics, previously unavailable, were now accessible to team managers."],"technologies":"PHP, CSS3, Javacript vanilla + jQuery, MySQL"},{"company":"METROPOLIS MEDIA GROUP SL","url":"http://metropolismedia.us","position":"Full-stack developer, Designer, Project Manager","time":"2003 - 2014","location":"Barcelona, Spain","text":["Trusted regular contractor for front-end and back-end web development, UX design, and product management. Print and layout design of an upscale monthly lifestyle magazine."],"technologies":"PHP, WordPress, Javacript vanilla + jQuery, SASS, MySQL, SysOps"}],"Education":"------------------------------------------------------------","Education.title":"UNIVERSITY EDUCATION","Education.university":{"name":"Ontario College of Art and Design University (OCADU)","url":"https://www.ocadu.ca/"},"Education.diploma":"Design, Advertising Art Direction","Education.location":"Toronto, Canada","Education.text":"Multidisciplinary program based on core design principles, graphic design, multimedia, and communication in advertising. Focus on critical thinking, conceptual development and collaboration.","Projects":"-------------------------------------------------------------","Projects.title":"EXAMPLE PROJECTS","Projects.list":[{"name":"Personal CV","text":["curriculum vitae designed and developed as mobile-first single-page app in React.","Multi-locale (EN + ES) with option to download PDF version in either language."]},{"name":"NodeJS + PM2 cron manager","text":["cron job admin with human-readable schedules, optional categorization and batch time-offset. Logs and suggestions to avoid simultaneous jobs and lower server CPU load."]},{"name":"Call Tracker","text":["intranet application for call centres. Data storage of call metadata, customer info, sales data, and opportunity status, used for follow-up calls. Performance reports - team and individuals. Live stats for sales incentive contests etc."]},{"name":"Custom CMS platform","text":["lightweight, effortless installation and configuration. Offering the client a more tailored administrative experience, and a streamlined alternative to other CMS platforms."]},{"name":"Aggregated Social Feed","text":["for portfolio site, combining posts from various social media accounts, parsing data from connected APIs, creating a single, unified feed, with custom look and feel. Data cached in database for fast loading."]},{"name":"Online store","text":["developed and designed without any framework, in an era before Shopify etc. Front-end: shopping cart, share with a friend, PayPal gateway. Back-end: customized CMS platform (mentioned above) provided the ability to administer item info categorize items into collections, and discount system."]}],"Languages":"------------------------------------------------------------","Languages.title":"LANGUAGES","Languages.list":[{"language":"English","level":"native language"},{"language":"Spanish","level":"fluent, spoken + written"},{"language":"Catalan","level":"basic, spoken + written"}],"Stack":"---------------------------------------------------------------","Stack.title":"MY STACK","Stack.list":["Linux Kubuntu","MacOS","VSCode","Node.js","Node SASS","Babel","MongoDB","Postman","ESLint","Prettier","ZSH shell"],"":"--------------------------------------------------------------------"}')},93:function(e,a){e.exports="data:image/png;base64,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"},96:function(e){e.exports=JSON.parse('{"words":"-------------------------------------------------------------","words.Technologies":"Tecnolog\xedas","Sidebar":"-----------------------------------------------------------","Sidebar.nav.list":[{"label":"PERFIL","url":"profile"},{"label":"TECNOLOG\xcdAS","url":"technologies"},{"label":"PRINCIPIOS","url":"principles"},{"label":"EXPERIENCIA LABORAL","url":"work-experience"},{"label":"EDUCACI\xd3N UNIVERSITARIA","url":"education"},{"label":"MI CONFIGURACI\xd3N","url":"my-stack"},{"label":"EJEMPLOS DE PROYECTOS","url":"example-projects"},{"label":"CONECTADO V\xcdA ESTUDIO","url":"connected-study"},{"label":"IDIOMAS","url":"languages"}],"Contact":"-----------------------------------------------------------","Contact.title":"CONTACTO","Profile":{"title":"PERFIL","text":["M\xe1s de 10 a\xf1os de experiencia internacional en desarrollo frontend y back-end, centrado en sitios web mobile-first, dashboards y sistemas de administraci\xf3n CMS, servicios API RESTful, SaaS, SEO y dise\xf1o UX.","Siempre estudiando, probando y integrando nuevas tecnolog\xedas, codifique con mejores pr\xe1cticas y las tendencias de dise\xf1o, para aseg\xfarese que los proyectos sean modernos y est\xe9n preparados para futuro.","Educaci\xf3n universitaria en dise\xf1o y comunicaci\xf3n, ofrece una perspectiva adicional al desarrollo, estructura de producto, y la experiencia de usuario y el dise\xf1o."]},"Technologies":"---------------------------------------------------------","Technologies.title":"TECNOLOG\xcdAS","Technologies.proficient":"NIVEL AVANZADO","Technologies.proficient.list":["Node.js","React","Javascript: vanilla + ES6","PHP","MongoDB","MySQL","HTML5","CSS3 + SASS","CSS3 animations","RESTful services","SEO","Git","Linux Terminal"],"Technologies.experienced":"NIVEL MEDIO","Technologies.experienced.list":["AngularJS v6","TypeScript","GraphQL","Ruby","Webpack","SysOps (Linux server)","AWS","Jenkins","Docker","i18n","OAuth","JWT","Google Analytics","Markdown"],"Principles":"-----------------------------------------------------------","Principles.title":"PRINCIPIOS","Principles.list":["Estructura de equipo con framework SCRUM \xe1gil","Suite Atlassian: JIRA, Confluence, Bitbucket","Buenas pr\xe1cticas, convenciones de nomenclatura, linting","Variables, funciones y nombres de archivo sim\xe1nticos","Incluir en el c\xf3digo: comentarios, anotaciones y TODOs","C\xf3digo, m\xf3dulos y componentes reutilizable","Projectos con potencia de aumetaci\xf3n a prueba de futuro","Estructuras de proyectos ordenadas y estandarizadas","UX limpio con funci\xf3n evidente y reducci\xf3n de clics"],"Connected":"-----------------------------------------------------------","Connected.title":"CONECTADO V\xcdA ESTUDIO","Connected.text":"Actualizaciones de frameworks, noticias sobre violaciones de seguridad y las decisiones pol\xedticas que afectan a la industria tecnol\xf3gica, art\xedculos sobre el dise\xf1o superior y las tendencias UX; incluso la cultura pop, todos afectan la forma de como pienso en mi proceso de desarrollo y c\xf3digo, y por lo tanto, me mantengo conectado al d\xeda.","Connected.resources":"Recursos para continuar ser conectado :","Connected.list":[{"label":"Podcasts: ej. \\"Syntax\\" con Wes Bos"},{"label":"github.com"},{"label":"Medium"},{"label":"alligator.io"},{"label":"dev.to"},{"label":"stackoverflow.com"},{"label":"codesandbox.io"},{"label":"caniuse.com"},{"label":"csstricks.com"},{"label":"webdesignerdepot.com"},{"label":"awwwards.com"}],"Experience":"-----------------------------------------------------------","Experience.title":"EXPERIENCIA LABORAL","Experience.list":[{"company":"PANGEALAND SL / exoticca.com","url":"https://exoticca.com","position":"Senior full-stack Developer","time":"2019 - 2018","location":"Barcelona, Espa\xf1a","text":["Desarrollo back-end y mantenimiento del dashboard interno de la empresa utilizado por m\xe1s de 50 empleados, en m\xfaltiples departamentos. Adem\xe1s de responder a las solicitudes de Jira, a menudo tomaba una iniciativa personal, identificando posibles mejoras y agregando nuevas funcionalidades.","Desarrollo de clientes front-end y servicios API, incluyendo un refactorizaci\xf3n de proyectos grandes para preparar clientes y servidores poder agregar locales seg\xfan la expansi\xf3n del mercado global."],"technologies":"Node.js, Javacript vanilla + ES6/Babel, Angular, MongoDB, MySQL, RESTful API services, PHP, SASS, AWS, and server SysOps."},{"company":"DIGITAL DIMENSION ESPA\xd1A / ECONOCOM","url":"https://www.econocom.com/en","position":"Full-stack Developer / Dise\xf1ador UX + UI","time":"2016 - 2017","location":"Barcelona, Espa\xf1a","text":["Desarrollo de aplicaciones para usuario y servidor de aplicaciones para usuario (que sirve a Francia y Espa\xf1a), incluida la integraci\xf3n de m\xfaltiples servicios API, analizando las respuestas JSON para mostrar en React. Flujo de trabajo dentro del marco din\xe1mico del equipo SCRUM.","Dise\xf1o, refactor y mejora de UX de la parte front-end del dashboard."],"technologies":"Node.js, React, Javacript vanilla + ES6/Babel, Docker, RESTful API services, SASS."},{"company":"70 MAIN STREET STUDIOS","url":"http://70mainstreet.com","position":"Front-end Developer / Dise\xf1ador UX + UI","time":"2015 - 2016","location":"Toronto, Canad\xe1","text":["Desarrollo, dise\xf1o y UX de sitios web. Componentes codificados Angular para integraci\xf3n en productos existentes. Dise\xf1o, desarrollo y pruebas de newsletters e-mail.","Colaboraci\xf3n fluida en equipo a trav\xe9s de Slack, JIRA y GitLab.","Clientes internacionales: Scotiabank, TD Bank, Rogers, Nickelodeon."],"technologies":"Node.js, Javascript vanilla + ES6/Babel + jQuery, Angular, Ruby, SASS, MySQL, Jenkins."},{"company":"APPLE UK y ESPA\xd1A","url":"https://www.apple.com/es","position":"Full-stack developer, soporte t\xe9cnico y ventas","time":"2010 - 2012","location":"Barcelona, Espa\xf1a","text":["Promovido al equipo de IT, por mi iniciativa de codificar la nueva aplicaci\xf3n de seguimiento de llamadas, desde la posici\xf3n inicial de soporte t\xe9cnico y ventas.","La nueva aplicaci\xf3n inicialmente fue dise\xf1ada para uso personal, reemplazando la herramienta existente con una de dise\xf1o de UX superior, mejorando la velocidad del flujo de trabajo y proporcionando estad\xedsticas adicionales sobre llamadas y pedidos. La gerencia decidi\xf3 adoptar la aplicaci\xf3n para el uso de m\xe1s de 300 empleados en el Black Friday (el mayor volumen del a\xf1o).","Los gerentes del equipo ahora ten\xedan acceso a datos y estad\xedsticas importantes, que anteriormente no estaban disponibles."],"technologies":"PHP, CSS3, Javacript vanilla + jQuery, MySQL"},{"company":"METROPOLIS MEDIA GROUP SL","url":"http://metropolismedia.us","position":"Full-stack developer, dise\xf1ador, gerente de proyecto","time":"2003 - 2014","location":"Barcelona, Espa\xf1a","text":["Contratista regular y confiable para dise\xf1o y desarrollo front-end y back-end, dise\xf1o UX y gesti\xf3n de productos. Maquetaci\xf3n y dise\xf1o de una revista mensual de estilo de vida lujoso."],"technologies":"PHP, WordPress, Javacript vanilla + jQuery, SASS, MySQL, SysOps"}],"Education":"------------------------------------------------------------","Education.title":"EDUCACI\xd3N UNIVERSITARIA","Education.university":{"name":"Ontario College of Art and Design University (OCADU)","url":"https://www.ocadu.ca/"},"Education.diploma":"Dise\xf1o, Direcci\xf3n de Arte Publicitario.","Education.location":"Toronto, Canad\xe1","Education.text":"Programa multidisciplinar basado en principios de dise\xf1o, dise\xf1o gr\xe1fico, multimedia, comunicaci\xf3n, publicidad. Centrarse en el pensamiento cr\xedtico, el desarrollo conceptual y la colaboraci\xf3n.","Projects":"-------------------------------------------------------------","Projects.title":"EJEMPLOS DE PROYECTOS","Projects.list":[{"name":"CV Personal","text":["curriculum vitae dise\xf1ado y desarrollado como aplicaci\xf3n de p\xe1gina singular en React. Optimizada para dispositivos m\xf3viles. Multi-locale (EN + ES), y posibilidad de descargar versi\xf3n PDF en ambos idiomas."]},{"name":"NodeJS + PM2 manager de crons","text":["programaci\xf3n de crons con horarios legibles por humanos, categorizaci\xf3n opcional, y desplazamiento de tiempo por lotes. Registros y sugerencias para evitar trabajos simult\xe1neos y reducir la carga de CPU del servidor."]},{"name":"Call Tracker","text":["aplicaci\xf3n de intranet para call centers. Almacenamiento de datos de metadatos de llamadas, informaci\xf3n del cliente, datos de ventas y estado de oportunidad, utilizados para el seguimiento de llamadas y pedidos. Informes de rendimiento - equipo e individuos. Estad\xedsticas en directo para concursos de incentivos de ventas, etc."]},{"name":"Plataforma CMS personalizada","text":["instalaci\xf3n y configuraci\xf3n ligera y f\xe1cil. Dispone al cliente una experiencia administrativa m\xe1s personalizada y una alternativa simplificada en comparaci\xf3n con otras plataformas CMS."]},{"name":"Social Feed Agregada","text":["para sitio portafolio, combinando publicaciones a trav\xe9s de varias cuentas de redes sociales a trav\xe9s de conexiones a los API asociados, creando un solo social feed unificado, con apariencia personalizada. Datos tirados en cach\xe9 / base de datos para una carga r\xe1pida."]},{"name":"Tienda online","text":["desarrollado y dise\xf1ado en la era pre-Shopify. Front-end: shopping cart, enviar a un amigo, pagar con PayPal. Back-end: atrav\xe9s de un CMS personalizado (mencionado arriba) dispone de administrar las colecciones, descuentos de varios tipos."]}],"Languages":"------------------------------------------------------------","Languages.title":"IDIOMAS","Languages.list":[{"language":"Ingl\xe9s","level":"lengua materna"},{"language":"Castellano","level":"fluido, hablado y escrito"},{"language":"Catal\xe0","level":"b\xe0sic, parlat i escrit"}],"Stack":"---------------------------------------------------------------","Stack.title":"CONFIGURACI\xd3N PERSONAL","Stack.list":["Linux Kubuntu","MacOS","VSCode","Node.js","Node SASS","Babel","MongoDB","Postman","ESLint","Prettier","ZSH shell"],"":"--------------------------------------------------------------------"}')}},[[105,1,2]]]);