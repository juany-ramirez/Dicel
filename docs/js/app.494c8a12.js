(function(t){function e(e){for(var r,n,o=e[0],c=e[1],l=e[2],u=0,v=[];u<o.length;u++)n=o[u],s[n]&&v.push(s[n][0]),s[n]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);d&&d(e);while(v.length)v.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],r=!0,o=1;o<a.length;o++){var c=a[o];0!==s[c]&&(r=!1)}r&&(i.splice(e--,1),t=n(n.s=a[0]))}return t}var r={},s={app:0},i=[];function n(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=r,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(a,r,function(e){return t[e]}.bind(null,r));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var d=c;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var r=a("04f5"),s=a.n(r);s.a},"04f5":function(t,e,a){},"152b":function(t,e,a){},"1b9d":function(t,e,a){"use strict";var r=a("55b4"),s=a.n(r);s.a},2869:function(t,e,a){"use strict";var r=a("52bd"),s=a.n(r);s.a},"2fa6":function(t,e,a){},"334e":function(t,e,a){},"3dea":function(t,e,a){},4851:function(t,e,a){"use strict";var r=a("3dea"),s=a.n(r);s.a},"4dfa":function(t,e,a){"use strict";var r=a("152b"),s=a.n(r);s.a},"52bd":function(t,e,a){},"55b4":function(t,e,a){},"561f":function(t,e,a){"use strict";var r=a("7a06"),s=a.n(r);s.a},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("e829");var r=a("f5af"),s=a.n(r),i=a("2b0e"),n=a("ce5b"),o=a.n(n);a("bf40");i["default"].use(o.a,{theme:{primary:"#263238",secondary:"#37474F",accent:"#C62828",error:"#FF6D00",warning:"#FFD600",info:"#90A4AE",success:"#00796B"}});var c=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{ref:"ap",attrs:{id:"webpage"}},[r("v-app",{attrs:{color:"secondary",dark:"",id:"inspire"}},[r("v-toolbar",{staticClass:"nav-bar",attrs:{app:"",fixed:"","clipped-left":"",color:"primary"}},[r("a",{on:{click:function(e){t.scroll(0)}}},[r("img",{staticClass:"dicel-logo",attrs:{alt:"dicel-logo",src:a("d2d4"),height:"64px;",width:"auto;"}})]),r("v-divider",{staticClass:"mx-3",attrs:{inset:"",vertical:""}}),r("v-spacer"),r("v-toolbar-items",{staticClass:"hidden-sm-and-down"},[r("v-btn",{attrs:{flat:""},on:{click:function(e){t.scroll(2)}}},[t._v("\n            Nosotros\n          ")]),r("v-divider",{attrs:{vertical:""}}),r("v-btn",{attrs:{flat:""},on:{click:function(e){t.scroll(4)}}},[t._v("\n            Servicios\n          ")]),r("v-divider",{attrs:{vertical:""}}),r("v-btn",{attrs:{flat:""},on:{click:function(e){t.scroll(6)}}},[t._v("\n            Contáctanos\n          ")])],1)],1),r("transition",{staticClass:"animated swing delay-5s",attrs:{mode:"out-in"}},[t.loader?t._e():r("div",[r("router-view")],1),t.loader?r("div",{ref:"prueba",staticClass:"prueba theme-three loader-background",attrs:{id:"prueba"}},[r("v-card",{attrs:{color:"primary",dark:""}},[r("v-card-text",[t._v("\n            Cargando\n            "),r("v-progress-linear",{staticClass:"mb-0",attrs:{indeterminate:"",color:"white"}})],1)],1)],1):t._e()])],1)],1)},l=[],d={name:"App",data:function(){return{drawer:!1,loader:!0,options:{duration:600,offset:20,easing:"easeInOutCubic"}}},mounted:function(){this.loader=!1},methods:{scroll:function(t){var e=this.$children[0].$children[1].$children[0].$children[t].$el.offsetTop;this.$vuetify.goTo(e,this.options)}}},u=d,v=(a("034f"),a("2877")),m=Object(v["a"])(u,c,l,!1,null,null,null),p=m.exports,f=a("8c4f"),C=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"home"}},[a("v-app",{attrs:{color:"primary",dark:""}},[a("ASectionView",{attrs:{id:"View"}}),a("BSectionSlogan",{attrs:{id:"Slogan"}}),a("CSectionNosotros",{attrs:{id:"Nosotros"}}),a("DSectionMV",{attrs:{id:"MV"}}),a("ESectionServicios",{attrs:{id:"Servicios"}}),a("FSectionClientes",{attrs:{id:"Clientes"}}),a("GSectionContacto",{attrs:{id:"Contacto"}}),a("HSectionFooter",{attrs:{id:"Footer"}})],1)],1)},b=[],g=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},x=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"theme-one"},[a("div",{staticClass:"box"},[a("div",{staticClass:"background-image"},[a("div",{staticClass:"caption text-sm-center"},[a("span",{staticClass:"headline-theme",attrs:{"data-aos":"zoom-out","data-aos-delay":"300","data-aos-once":"true"}},[t._v("\n          DICEL\n        ")]),a("div",{staticClass:"slogan",attrs:{"data-aos":"fade-up","data-aos-delay":"600","data-aos-once":"true"}},[t._v("\n          Diseños y Construcciones Eléctricas\n        ")])])])])])}],h={name:"ASectionView",props:{id:String}},_=h,y=(a("4851"),Object(v["a"])(_,g,x,!1,null,"6074532c",null)),S=y.exports,E=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"theme-two"},[a("v-content",{staticClass:"container",attrs:{dark:"",color:"primary"}},[a("section",[a("v-layout",{staticClass:"my-5",attrs:{column:"","align-center":""}},[a("v-flex",{staticClass:"my-3",attrs:{xs12:"",sm4:""}},[a("div",{staticClass:"text-md-center font-weight-thin subheader-theme",attrs:{"data-aos":"fade-up","data-aos-delay":"300","data-aos-once":"true"}},[t._v("\n            DICEL tiene una permanente actitud enfocada en el respeto y responsabilidad\n            en cuanto a las demandas de nuestros clientes internos y externos.\n            Innovamos para mejorar nuestro servicio.\n            Nos centramos en la búsqueda de soluciones eficientes para nuestros\n            clientes con los mejores precios del mercado.\n          ")])])],1)],1)])],1)},A=[],O={name:"BSectionSlogan",props:{id:String}},w=O,I=(a("98e5"),Object(v["a"])(w,E,A,!1,null,"32ae45a8",null)),R=I.exports,L=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"theme-five"},[r("section",[r("v-layout",{attrs:{row:"",wrap:"","align-center":""}},[r("v-flex",{attrs:{xs12:"",md4:"","offset-xs0":"","offset-md1":""}},[r("v-content",[r("div",[r("v-card",{staticClass:"elevation-0 transparent"},[r("v-card-title",{staticClass:"layout justify-center",attrs:{"primary-title":""}},[r("div",{staticClass:"text-lg-left"},[r("div",{staticClass:"headline-theme white--text pr-5"},[t._v("\n                      ¿Quiénes Somos?\n                    ")])])]),r("v-card-text",[r("div",{staticClass:"sobre-nosotros",attrs:{"data-aos":"fade-up","data-aos-delay":"500","data-aos-once":"true"}},[t._v("\n                      DICEL es una empresa de ingeniería de diseño y construcción en\n                      la rama de ingeniería electromecánica, comprometidos con el\n                      bienestar de nuestros clientes, personal y comunidad; para\n                      lo cual trabajamos bajo principios de calidad, seguridad y beneficio mutuo.\n                      Procuramos maximizar la inversión de nuestros clientes\n                      con los mejores técnicos de la región; cuidamos la seguridad de\n                      nuestro personal y respetamos el entorno natural de la comunidad.\n                      Las principales líneas de negocio son construcción de\n                      redes eléctricas ern media tensión aéreas y subterráneas,\n                      instalaciones eléctricas comerciales e industriales,\n                      infraestructura y vivienda; con clientes\n                      tanto en el sector público como en el sector privado.\n                      "),r("br"),r("br")])])],1)],1)])],1),r("v-flex",{attrs:{xs12:"","offset-md1":"",md5:""}},[r("img",{staticClass:"bg",attrs:{alt:"dicel-img",src:a("dc5b"),height:"auto;",srcset:a("5f73")+" 400w, "+a("d82b")+" 1000w, "+a("dc5b")+" 1800w",width:"100%;"}})])],1)],1)])},P=[],T={name:"CSectionNosotros",props:{id:String}},N=T,M=(a("6389"),Object(v["a"])(N,L,P,!1,null,"41f1c2a2",null)),D=M.exports,k=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"theme-four"},[a("v-content",{attrs:{dark:"",color:"primary"}},[a("section",[a("v-layout",{staticClass:"my-5",attrs:{column:"",wrap:"","align-center":""}},[a("v-flex",{attrs:{xs12:""}},[a("v-container",{attrs:{"grid-list-xl":""}},[a("v-layout",{attrs:{row:"",wrap:"","align-center":""}},[a("v-flex",{attrs:{xs12:"",md6:""}},[a("v-card",{staticClass:"elevation-0 transparent",attrs:{dark:"",color:"secondary"}},[a("v-card-text",{staticClass:"text-xs-center"},[a("v-icon",{attrs:{"x-large":"",color:"accent"}},[t._v("lightbulb_outline")])],1),a("v-card-title",{staticClass:"layout justify-center",attrs:{"primary-title":""}},[a("div",{staticClass:"header-theme"},[t._v("Misión")])]),a("v-card-text",[a("p",{staticClass:"content-group",attrs:{"data-aos":"zoom-out","data-aos-delay":"500","data-aos-once":"true"}},[t._v("\n                      Ofrecer soluciones a nuestros clientes proporcionando servicios\n                      en energía eléctrica; garantizando la seguridad\n                      y calidad de nuestro trabajo basados en las normas eléctricas.\n                    ")])])],1)],1),a("v-flex",{attrs:{xs12:"",md6:""}},[a("v-card",{staticClass:"elevation-0 transparent",attrs:{dark:"",color:"secondary"}},[a("v-card-text",{staticClass:"text-xs-center"},[a("v-icon",{attrs:{"x-large":"",color:"accent"}},[t._v("visibility")])],1),a("v-card-title",{staticClass:"layout justify-center",attrs:{"primary-title":""}},[a("div",{staticClass:"header-theme text-xs-center"},[t._v("Visión")])]),a("v-card-text",[a("p",{staticClass:"content-group",attrs:{"data-aos":"zoom-out","data-aos-delay":"500","data-aos-once":"true"}},[t._v("\n                      Ser la empresa líder en la región, en servicios y proyectos\n                      de energía eléctrica, ofreciendo a nuestros\n                      clientes obras con calidad integral.\n                    ")]),a("br")])],1)],1)],1)],1)],1)],1)],1)]),t._m(0)],1)},j=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[a("div",{staticClass:"diagonal-divider"})])}],V={name:"DSectionMV",props:{id:String}},H=V,U=(a("7126"),Object(v["a"])(H,k,j,!1,null,"f93ebf24",null)),z=U.exports,$=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"theme-three"},[t._m(0),a("section",[a("v-content",{attrs:{dark:"",color:"primary"}},[a("div",{staticClass:"text-xs-center"},[a("span",{staticClass:"headline-theme white--text mb-3"},[t._v("\n          Servicios\n        ")])]),a("br"),a("br"),a("v-container",{attrs:{"grid-list-md":"","text-xs-center":""}},[a("v-layout",{attrs:{row:"",wrap:"","align-top":"","justify-center":""}},[a("v-flex",{attrs:{xs12:"",sm6:"",md3:""}},[a("v-card",{attrs:{"data-aos":"zoom-in-down","data-aos-delay":"300","data-aos-once":"true","align-center":"",flat:"",color:"transparent"}},[a("v-card-text",{staticClass:"text-xs-center"},[a("v-icon",{attrs:{"x-large":"",color:"accent"}},[t._v("wifi_tethering")])],1),a("v-card-title",{attrs:{"primary-title":""}},[a("div",{staticClass:"theme-five-subheader text-xs-center"},[t._v(" Diseño y Contrucción")]),a("div",{staticClass:"theme-five-header font-weight-light text-xs-center"},[t._v("\n                  Líneas de transmisión.\n                ")])])],1)],1),a("v-flex",{attrs:{xs12:"",sm6:"",md3:""}},[a("v-card",{attrs:{"data-aos":"zoom-in-down","data-aos-delay":"300","data-aos-once":"true","align-center":"",flat:"",color:"transparent"}},[a("v-card-text",{staticClass:"text-xs-center"},[a("v-icon",{attrs:{"x-large":"",color:"accent"}},[t._v("import_export")])],1),a("v-card-title",{attrs:{"primary-title":""}},[a("div",{staticClass:"theme-five-subheader text-xs-center"},[t._v(" Diseño y Contrucción")]),a("div",{staticClass:"theme-five-header font-weight-light text-xs-center"},[t._v("\n                  Redes primarias\n                  "),a("br"),t._v("-Aéreas\n                  "),a("br"),t._v("-Subterráneas\n                ")])])],1)],1),a("v-flex",{attrs:{xs12:"",sm6:"",md3:""}},[a("v-card",{attrs:{"data-aos":"zoom-in-down","data-aos-delay":"300","data-aos-once":"true","align-center":"",flat:"",color:"transparent"}},[a("v-card-text",{staticClass:"text-xs-center"},[a("v-icon",{attrs:{"x-large":"",color:"accent"}},[t._v("wb_sunny")])],1),a("v-card-title",{attrs:{"primary-title":""}},[a("div",{staticClass:"theme-five-subheader text-xs-center"},[t._v(" Diseño y Contrucción")]),a("div",{staticClass:"theme-five-header font-weight-light text-xs-center"},[t._v("\n                  Sistema de generación de\n                  "),a("br"),t._v("-Energía Solar\n                ")])])],1)],1),a("v-flex",{attrs:{xs12:"",sm6:"",md3:""}},[a("v-card",{attrs:{"data-aos":"zoom-in-down","data-aos-delay":"300","data-aos-once":"true","align-center":"",flat:"",color:"transparent"}},[a("v-card-text",{staticClass:"text-xs-center"},[a("v-icon",{attrs:{"x-large":"",color:"accent"}},[t._v("account_balance")])],1),a("v-card-title",{attrs:{"primary-title":""}},[a("div",{staticClass:"theme-five-subheader text-xs-center"},[t._v("Contrucción")]),a("div",{staticClass:"theme-five-header font-weight-light text-xs-center"},[t._v("\n                  Obras civiles.\n                ")])])],1)],1),a("v-flex",{attrs:{xs12:"",sm6:"",md3:""}},[a("v-card",{attrs:{"data-aos":"zoom-in-down","data-aos-offset":"200","data-aos-delay":"300","data-aos-once":"true","align-center":"",flat:"",color:"transparent"}},[a("v-card-text",{staticClass:"text-xs-center"},[a("v-icon",{attrs:{"x-large":"",color:"accent"}},[t._v("home")])],1),a("v-card-title",{attrs:{"primary-title":""}},[a("div",{staticClass:"theme-five-subheader text-xs-center"},[t._v(" Diseño y "),a("br"),t._v(" Contrucción")]),a("div",{staticClass:"theme-five-header font-weight-light text-xs-center"},[t._v("\n                  Sistema eléctrico de obras:"),a("br"),a("br"),t._v("-Residenciales "),a("br"),a("br"),t._v("-Habitacionales "),a("br"),a("br"),t._v("-Urbanizaciones"),a("br"),a("br"),a("br")])])],1)],1),a("v-flex",{attrs:{xs12:"",sm6:"",md3:""}},[a("v-card",{attrs:{"data-aos":"zoom-in-down","data-aos-offset":"200","data-aos-delay":"300","data-aos-once":"true","align-center":"",flat:"",color:"transparent"}},[a("v-card-text",{staticClass:"text-xs-center"},[a("v-icon",{attrs:{"x-large":"",color:"accent"}},[t._v("highlight")])],1),a("v-card-title",{attrs:{"primary-title":""}},[a("div",{staticClass:"theme-five-subheader text-xs-center"},[t._v("\n                  Desarrollo y puesta en marcha\n                ")]),a("div",{staticClass:"theme-five-header font-weight-light text-xs-center"},[t._v("\n                    Plantas de generación de\n                    "),a("br"),t._v("energía eléctrica.\n                ")])])],1)],1),a("v-flex",{attrs:{xs12:"",sm6:"",md3:""}},[a("v-card",{attrs:{"data-aos":"zoom-in-down","data-aos-offset":"200","data-aos-delay":"300","data-aos-once":"true","align-center":"",flat:"",color:"transparent"}},[a("v-card-text",{staticClass:"text-xs-center"},[a("v-icon",{attrs:{"x-large":"",color:"accent"}},[t._v("location_city")])],1),a("v-card-title",{attrs:{"primary-title":""}},[a("div",{staticClass:"theme-five-subheader text-xs-center"},[t._v(" Diseño y "),a("br"),t._v(" Contrucción")]),a("div",{staticClass:"theme-five-header font-weight-light text-xs-center"},[t._v("\n                  Sistema eléctrico de edificios de oficinas.\n                ")])])],1)],1),a("v-flex",{attrs:{xs12:"",sm6:"",md3:""}},[a("v-card",{attrs:{"data-aos":"zoom-in-down","data-aos-offset":"200","data-aos-delay":"300","data-aos-once":"true","align-center":"",flat:"",color:"transparent"}},[a("v-card-text",{staticClass:"text-xs-center"},[a("v-icon",{attrs:{"x-large":"",color:"accent"}},[t._v("store_mall_directory")])],1),a("v-card-title",{attrs:{"primary-title":""}},[a("div",{staticClass:"theme-five-subheader text-xs-center"},[t._v(" Diseño y "),a("br"),t._v(" Contrucción")]),a("div",{staticClass:"theme-five-header font-weight-light text-xs-center"},[t._v("\n                  Sistema eléctrico de obras: "),a("br"),a("br"),t._v("-Comerciales e Industriales.\n                  "),a("br"),t._v("-Supermercados.\n                  "),a("br"),t._v("-Edificios de tiendas.\n                  "),a("br"),t._v("-Agroindustria.\n                ")])])],1)],1)],1)],1)],1)],1),t._m(1)])},F=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[a("div",{staticClass:"diagonal-divider-one"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[a("div",{staticClass:"diagonal-divider-two"})])}],G={name:"ESectionServicios",props:{id:String}},B=G,K=(a("edd8"),Object(v["a"])(B,$,F,!1,null,"729cc8a5",null)),Y=K.exports,q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"theme-two"},[t._m(0),a("br"),a("br"),a("br"),a("v-carousel",{attrs:{id:"carousel",lazy:"","elevation-0":"","delimiter-icon":"flash_on"}},t._l(t.items,function(e,r){return a("v-carousel-item",{key:r,staticClass:"text-lg-center"},[a("v-container",[a("v-content",{staticClass:"text-xs-center"},[a("a",{staticClass:"header-theme white--text mb-3"},[t._v("\n            "+t._s(e.title)+"\n          ")]),a("br"),a("div",{staticClass:"container text-xs-center"},t._l(e.details,function(e,r){return a("v-chip",{key:r},[a("v-avatar",{attrs:{color:"primary"}}),t._v("\n              "+t._s(e.nombre)+" -\n              "),a("span",{staticClass:"chip-detail"},[t._v(t._s(e.lugar))])],1)})),a("br"),a("br")])],1)],1)}))],1)},J=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"text-xs-center",attrs:{"data-aos":"zoom-out","data-aos-delay":"500","data-aos-once":"true"}},[a("div",{staticClass:"font-weight-thin subheader-theme"},[t._v("Algunos de nuestros")]),a("br"),a("span",{staticClass:"headline-theme white--text mb-3"},[t._v("\n      Proyectos\n    ")])])}],Z={name:"FSectionClientes",props:{id:String},data:function(){return{item:{nombre:"",lugar:"",descripcion:""},items:[{title:"Sistema Eléctrico",details:[{nombre:"HIPER ANTORCHA",lugar:"",descripcion:"Sistema eléctrico primario y secundario"},{nombre:"SUPERMERCADO SUPER BARATO",lugar:"Centro, Pto. Cortés",descripcion:"Sistema eléctrico primario y secundario"},{nombre:"SUPERMERCADO SUPER BARATO 2",lugar:"Salida a Omoa",descripcion:"Sistema eléctrico primario y secundario"},{nombre:"SUPERMERCADO LA ANTORCHA",lugar:"Villanueva",descripcion:"Sistema eléctrico primario y secundario"},{nombre:"SUPERMERCADO EL ÉXITO",lugar:"Villanueva",descripcion:"Sistema eléctrico primario y secundario"},{nombre:"HOTEL CLARION",lugar:"SPS",descripcion:"Sistema eléctrico para unidades de aire acondicionado"},{nombre:"AGENCIA LA MUNDIAL TONCONTÍN",lugar:"Puerto Cortés",descripcion:"Sistema eléctrico"},{nombre:"AGENCIA LA MUNDIAL PUERTO CORTÉS",lugar:"Toncontín, Tegucigalpa",descripcion:"Sistema eléctrico"},{nombre:"AGENCIA LA MUNDIAL SUYAPA",lugar:"Suyapa, Tegucigalpa",descripcion:"Sistema eléctrico"},{nombre:"AGENCIA LA MUNDIAL",lugar:"Pedregal, SPS",descripcion:"Sistema eléctrico"},{nombre:"Micro Torre II Panorama",lugar:"Toncontín, Tegucigalpa",descripcion:"Sistema eléctrico en niveles 5, 8, 11, 14, 17, 20, 23, 27 y 31"},{nombre:"SUPERMALL",lugar:"Puerto Cortés",descripcion:"Sistema eléctrico"},{nombre:"ALUTECH",lugar:"Río Nance",descripcion:"Sistema eléctrico Máquina de tubo 6”"},{nombre:"ALUTECH",lugar:"Choluteca",descripcion:"Sistema eléctrico Planta proceso de metálicos"},{nombre:"ALUTECH",lugar:"Río Nance III",descripcion:"Sistema eléctrico Planta proceso de metálicos"},{nombre:"GREEN VALLEY INDUSTRIAL PARK ",lugar:"Edificio Administrativo y Clínicas",descripcion:"Instalaciones eléctricas primarias y secundarias"}]},{title:"Circuito Primario",details:[{nombre:"PROYECTO HIDROELÉCTRICO [12KM]",lugar:"La Vegona, Enersa",descripcion:"Circuito primario 34.5KV, Servicio de construcción"},{nombre:"PROYECTO HIDROELÉCTRICO [8.5KM]",lugar:"Chamelecón-Chiquila, Cohersa",descripcion:"Circuito primario 34.5KV, entrega ENEE"},{nombre:"PLANTA ELCOSA-SUBESTACIÓN ZULTZER [1KM]",lugar:"Pto. Cortés, Elcosa",descripcion:"Circuito primario 34.5KV, interconexión 5 hilos 3/0 por fase"},{nombre:"HIDROELÉCTRICA COHCUY-ENEE [10KM]",lugar:"Omoa-Pto. Cortés",descripcion:"Circuito primario 34.5KV"},{nombre:"PROYECTO HIDROELÉCTRICO [12.6KM]",lugar:"Potrerillos-El Tornillito, Hidrovolcán",descripcion:"Circuito primario 34.5KV, servicio de construcción"}]},{title:"Obra Civil",details:[{nombre:"PROYECTO HIDROELÉCTRICO [12KM]",lugar:"La Vegona, Enersa",descripcion:"Circuito primario 34.5KV, Servicio de construcción"},{nombre:"EDIFICIO PLAZA LA SALLE",lugar:"San Pedro Sula",descripcion:"Obra civil y sistema eléctrico"},{nombre:"EDIFICIO CENTRO QUIRURGICO CODATEC",lugar:"San Pedro Sula",descripcion:"Obra civil y sistema eléctrico"}]},{title:"Electrificación de urbanización",details:[{nombre:"VARAGAS CANALES Y ASOCIADOS",lugar:"Col. Las Palmeras II Y III, Azacualpa, S.B.",descripcion:"Electrificación de urbanización"},{nombre:"VARAGAS CANALES Y ASOCIADOS",lugar:"Col. San Ramón IV etapa, Villanueva",descripcion:"Electrificación de urbanización"}]},{title:"Red telefónica",details:[{nombre:"CERVECERÍA HONDUREÑA",lugar:"Planta de Refrescos",descripcion:"Red telefónica de 100 pares."}]},{title:"Alimentador Eléctrico",details:[{nombre:"TABACALERA HONDUREÑA",lugar:"",descripcion:"Alimentador eléctrico SHILLER 200CV"}]},{title:"Cableado de Control",details:[{nombre:"Subestación BIJAO",lugar:"",descripcion:"Cableado de Control"}]},{title:"Red de tierra",details:[{nombre:"GAS DEL CARIBE",lugar:"Omoa, Cortés",descripcion:"Red de tierra para sistema depósito gas"}]},{title:"Sistema de Iluminación",details:[{nombre:"ESTADIO LAS AMÉRICAS",lugar:"Trinidad, S.B.",descripcion:"Sistema de Iluminación"}]}]}}},Q=Z,X=(a("561f"),Object(v["a"])(Q,q,J,!1,null,"0b49f426",null)),W=X.exports,tt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"background-image"},[a("section",[a("v-container",[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:"",md8:"",lg6:"","offset-xs0":"","offset-md2":"","offset-lg3":""}},[a("v-content",{staticClass:"container",attrs:{dark:"",color:"primary"}},[a("div",{attrs:{id:"mc_embed_signup"}},[a("form",{staticClass:"validate",attrs:{"data-aos":"zoom-out","data-aos-delay":"500","data-aos-once":"true",action:"https://dicelhn.us18.list-manage.com/subscribe/post?u=8604a82a8053406718668b1bf&id=1f416478e8",method:"post",id:"mc-embedded-subscribe-form",name:"mc-embedded-subscribe-form",target:"_blank",novalidate:""}},[a("div",{attrs:{id:"mc_embed_signup_scroll header-theme white--text"}},[a("h2",[t._v("Conéctate con Nosotros")]),a("div",{staticClass:"indicates-required"},[a("span",{staticClass:"asterisk"},[t._v("*")]),t._v("\n                  indica obligatorio\n                ")]),a("div",{staticClass:"mc-field-group"},[a("label",{attrs:{for:"mce-EMAIL"}},[t._v("\n                    Correo Electrónico\n                    "),a("span",{staticClass:"asterisk"},[t._v("*")])]),a("input",{staticClass:"required email",attrs:{type:"email",value:"",name:"EMAIL",id:"mce-EMAIL"}})]),a("div",{staticClass:"mc-field-group"},[a("label",{attrs:{for:"mce-FNAME"}},[t._v("\n                    Nombre Completo\n                    "),a("span",{staticClass:"asterisk"},[t._v("*")])]),a("input",{staticClass:"required",attrs:{type:"text",value:"",name:"FNAME",id:"mce-FNAME"}})]),a("div",{staticClass:"mc-field-group size1of2"},[a("label",{attrs:{for:"mce-PHONE"}},[t._v("\n                    Teléfono\n                  ")]),a("input",{attrs:{type:"text",name:"PHONE",value:"",id:"mce-PHONE"}})]),a("div",{staticClass:"mc-field-group"},[a("label",{attrs:{for:"mce-MMERGE2"}},[t._v("Mensaje ")]),a("input",{attrs:{type:"text",value:"",name:"MMERGE2",id:"mce-MMERGE2"}})]),a("div",{staticClass:"clear",attrs:{id:"mce-responses"}},[a("div",{staticClass:"response",staticStyle:{display:"none"},attrs:{id:"mce-error-response"}}),a("div",{staticClass:"response",staticStyle:{display:"none"},attrs:{id:"mce-success-response"}})]),a("div",{staticStyle:{position:"absolute",left:"-5000px"},attrs:{"aria-hidden":"true"}},[a("input",{attrs:{type:"text",name:"b_8604a82a8053406718668b1bf_1f416478e8",tabindex:"-1",value:""}})]),a("div",{staticClass:"clear"},[a("input",{staticClass:"button",attrs:{type:"submit",value:"Enviar Información",name:"subscribe",id:"mc-embedded-subscribe"}})])])])])])],1)],1)],1)],1)])},et=[],at={name:"GSectionContacto",props:{id:String}},rt=at,st=(a("4dfa"),Object(v["a"])(rt,tt,et,!1,null,"94e5cec0",null)),it=st.exports,nt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"footer"},[a("section",[a("v-container",{attrs:{dark:"",color:"primary"}},[a("v-layout",{attrs:{row:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-card",{attrs:{dark:"",tile:"",flat:"",color:"secondary"}},[a("v-card-title",{attrs:{"primary-title":""}},[a("div",{staticClass:"header-theme",attrs:{"data-aos":"zoom-out","data-aos-delay":"500","data-aos-once":"true"}},[t._v("\n                  Información General\n                ")])])],1)],1)],1),a("v-layout",{attrs:{wrap:"",row:""}},[a("v-flex",{attrs:{flat:"",xs12:"",md6:""}},[a("v-card",{staticClass:"transparent",attrs:{flat:""}},[a("v-card-text",[a("v-icon",{staticClass:"blue-grey-text text-lighten-2"},[t._v("place")]),t._v("\n                Colonia Las Mercedes, 10 avenida, 10 y 12 calle C, B8.\n                San Pedro Sula, Honduras, C.A.\n              ")],1)],1)],1),a("v-flex",{attrs:{flat:"",xs12:"",md6:""}},[a("v-card",{staticClass:"transparent",attrs:{flat:""}},[a("v-card-text",[a("v-icon",{staticClass:"blue-grey-text text-lighten-2"},[t._v("query_builder")]),t._v("\n                Lunes-Viernes\n                7:00am-5:00pm\n              ")],1)],1)],1),a("v-flex",{attrs:{xs12:"",md6:"",flat:""}},[a("v-card",{staticClass:"transparent",attrs:{flat:""}},[a("v-card-text",[a("v-icon",{staticClass:"blue-grey-text text-lighten-2"},[t._v("phone")]),t._v("\n                2551-7576 / 9553-0236\n              ")],1)],1)],1),a("v-flex",{attrs:{xs12:"",md6:"",flat:""}},[a("v-card",{staticClass:"transparent",attrs:{flat:""}},[a("v-card-text",[a("v-icon",{staticClass:"blue-grey-text text-lighten-2"},[t._v("email")]),t._v("\n                dicel_sdrl@yahoo.com\n              ")],1)],1)],1)],1)],1)],1),a("v-footer",{staticClass:"pa-3",attrs:{dark:"",color:"primary"}},[a("v-spacer"),a("div",[t._v("© "+t._s((new Date).getFullYear()))])],1)],1)},ot=[],ct={name:"HSectionFooter",props:{id:String}},lt=ct,dt=(a("2869"),Object(v["a"])(lt,nt,ot,!1,null,"25754907",null)),ut=dt.exports,vt={name:"home",components:{ASectionView:S,BSectionSlogan:R,CSectionNosotros:D,DSectionMV:z,ESectionServicios:Y,FSectionClientes:W,GSectionContacto:it,HSectionFooter:ut},props:["scroll"]},mt=vt,pt=(a("1b9d"),Object(v["a"])(mt,C,b,!1,null,"6857529d",null)),ft=pt.exports;i["default"].use(f["a"]);var Ct=new f["a"]({routes:[{path:"/",name:"home",component:ft}]}),bt=a("9483");Object(bt["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},cached:function(){console.log("Content has been cached for offline use.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}}),i["default"].config.productionTip=!1,new i["default"]({created:function(){s.a.init({disable:"phone"})},router:Ct,render:function(t){return t(p)}}).$mount("#app")},"5ce4":function(t,e,a){},"5f73":function(t,e,a){t.exports=a.p+"/Dicel/img/dusk-electric-400C.43d9a333.jpg"},6389:function(t,e,a){"use strict";var r=a("2fa6"),s=a.n(r);s.a},7126:function(t,e,a){"use strict";var r=a("5ce4"),s=a.n(r);s.a},"7a06":function(t,e,a){},9892:function(t,e,a){},"98e5":function(t,e,a){"use strict";var r=a("334e"),s=a.n(r);s.a},d2d4:function(t,e,a){t.exports=a.p+"/Dicel/img/dicel-original.cc5e79f7.png"},d82b:function(t,e,a){t.exports=a.p+"/Dicel/img/dusk-electric-1000C.611a35c7.jpg"},dc5b:function(t,e,a){t.exports=a.p+"/Dicel/img/dusk-electric-1800C.fa0d7bd6.jpg"},edd8:function(t,e,a){"use strict";var r=a("9892"),s=a.n(r);s.a}});
//# sourceMappingURL=app.494c8a12.js.map