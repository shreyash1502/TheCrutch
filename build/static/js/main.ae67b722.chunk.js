(this.webpackJsonppoorcare=this.webpackJsonppoorcare||[]).push([[0],{101:function(e,t,a){},103:function(e,t,a){"use strict";a.r(t);var c=a(0),s=a.n(c),n=a(20),r=a.n(n),l=(a(83),a(14)),i=(a.p,a(84),a(30)),o=a(126),j=a(127),d=a(63),b=a(129),h=(a(85),a(55)),x=h.a.initializeApp({apiKey:"AIzaSyAkRrOYobRY9e5sUolzKSvJ08-5O3wUyYo",authDomain:"thecrutch-82557.firebaseapp.com",projectId:"thecrutch-82557",storageBucket:"thecrutch-82557.appspot.com",messagingSenderId:"28550238708",appId:"1:28550238708:web:8e059c613fc362202969a1"}).firestore(),u=h.a.auth(),p=new h.a.auth.GoogleAuthProvider,m=a(25),O=a(34),g=a(125),f=a(15),v=a(36),y=(a(57),a(65),a(3));v.a.configure();var w={background:"linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",borderRadius:10,border:0,color:"white",height:48,textDecoration:"none",width:150,padding:"0 30px",marginLeft:"10px",boxShadow:"0 3px 5px 2px rgba(255, 105, 135, .3)"};var C=function(){var e=Object(m.a)(u),t=Object(l.a)(e,1)[0],a=Object(c.useState)(""),s=Object(l.a)(a,2),n=s[0],r=s[1],i=Object(c.useState)(""),o=Object(l.a)(i,2),d=o[0],b=o[1],h=Object(c.useState)(""),p=Object(l.a)(h,2),O=p[0],v=p[1],C=Object(c.useState)(""),A=Object(l.a)(C,2),D=A[0],M=A[1],E=Object(c.useState)(""),I=Object(l.a)(E,2),Z=I[0],S=I[1],B=Object(c.useState)(""),k=Object(l.a)(B,2),Y=k[0],G=k[1];return Object(y.jsx)("div",{children:t?Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(N,{}),Object(y.jsxs)(g.a,{className:"donateForm",children:[Object(y.jsxs)(g.a.Group,{controlId:"formBasicPassword",children:[Object(y.jsx)(g.a.Label,{children:"Donated by : "}),Object(y.jsx)(g.a.Control,{className:"control",value:n,onChange:function(e){return r(e.target.value)},type:"text",placeholder:"Institution name"})]}),Object(y.jsxs)(g.a.Group,{controlId:"formBasicEmail",children:[Object(y.jsx)(g.a.Label,{children:"Email address :"}),Object(y.jsx)(g.a.Control,{type:"email",value:Y,onChange:function(e){return G(e.target.value)},placeholder:t.email}),Object(y.jsx)(g.a.Text,{className:"text-muted",children:"We'll never share your email with anyone else."})]}),Object(y.jsxs)(g.a.Group,{controlId:"formBasicPassword",children:[Object(y.jsx)(g.a.Label,{children:"Equipment"}),Object(y.jsx)(g.a.Control,{type:"text",value:d,onChange:function(e){return b(e.target.value)},placeholder:"Equipment"})]}),Object(y.jsxs)(g.a.Group,{controlId:"formBasicPassword",children:[Object(y.jsx)(g.a.Label,{children:" Description of Equipment"}),Object(y.jsx)(g.a.Control,{type:"text",value:O,onChange:function(e){return v(e.target.value)},placeholder:"Describe the condition of your equipment"})]}),Object(y.jsxs)(g.a.Group,{controlId:"formBasicPassword",children:[Object(y.jsx)(g.a.Label,{children:"quantity"}),Object(y.jsx)(g.a.Control,{type:"text",value:D,onChange:function(e){return M(e.target.value)},placeholder:"quantity"})]}),Object(y.jsxs)(g.a.Group,{controlId:"formBasicPassword",children:[Object(y.jsx)(g.a.Label,{children:"Address"}),Object(y.jsx)(g.a.Control,{type:"text",value:Z,onChange:function(e){return S(e.target.value)},placeholder:"Address"})]}),Object(y.jsxs)(g.a.Group,{controlId:"formBasicPassword",children:[Object(y.jsx)(g.a.Label,{children:"Age"}),Object(y.jsx)(g.a.Control,{type:"Number",placeholder:"Age"})]}),Object(y.jsx)(j.a,{style:w,onClick:function(e){e.preventDefault(),x.collection("Available").add({mail:Y,name:n,equipment:d,description:O,address:Z}).then((function(){alert("Submitted Successfully \ud83d\udc4d")})).catch((function(e){alert(e.message)})),S(""),r(""),M(""),v(""),b(""),G("")},type:"submit",children:"Submit"})]})]}):Object(y.jsx)(y.Fragment,{children:Object(y.jsx)(f.a,{to:"/"})})})},A={background:"linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",borderRadius:10,border:0,color:"white",height:48,textDecoration:"none",width:150,padding:"0 30px",marginLeft:"10px",boxShadow:"0 3px 5px 2px rgba(255, 105, 135, .3)"};var N=function(){var e=Object(m.a)(u),t=Object(l.a)(e,2),a=t[0],c=(t[1],function(){a||v.a.error("You need to login first ! ",{position:v.a.POSITION.TOP_CENTER})});return Object(y.jsx)("div",{children:Object(y.jsx)(d.a,{className:"sticky-nav",children:Object(y.jsxs)(o.a,{className:"mr-auto",children:[a?Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(b.a,{style:{marginRight:"20px"},src:null===a||void 0===a?void 0:a.photoURL}),Object(y.jsx)(d.a.Brand,{style:{color:"#7e685a"},href:"/profile",children:null===a||void 0===a?void 0:a.displayName}),Object(y.jsx)(j.a,{style:A,type:"submit",onClick:function(){return u.signOut()},children:"Logout"}),Object(y.jsx)(O.b,{style:{textDecoration:"none"},to:"/profile",children:Object(y.jsx)(j.a,{style:A,className:"mr-2",variant:"outline-success",children:"Profile"})})]}):Object(y.jsx)(y.Fragment,{children:Object(y.jsx)(j.a,{style:A,variant:"contained",type:"submit",onClick:function(e){e.preventDefault(),u.signInWithPopup(p).catch((function(e){return alert(e.message)}))},children:"Login"})}),Object(y.jsx)(O.b,{style:{textDecoration:"none"},to:"/donate",children:Object(y.jsx)(j.a,{style:A,className:"mr-2",variant:"outline-success",onClick:c,children:"Donate"})}),Object(y.jsx)(O.b,{style:{textDecoration:"none"},to:"/demand",children:Object(y.jsx)(j.a,{style:A,className:"mr-2",variant:"outline-success",onClick:c,children:"Demand"})}),Object(y.jsx)(O.b,{style:{textDecoration:"none"},to:"/",children:Object(y.jsx)(j.a,{style:A,className:"mr-2",variant:"outline-success",children:"Home"})}),Object(y.jsx)(O.b,{style:{textDecoration:"none"},to:"/data",children:Object(y.jsx)(j.a,{style:A,className:"mr-2",variant:"outline-success",children:"Explore  "})})]})})})},D=(a.p,a.p+"static/media/shravan-k-acharya-cuStP_i-xPg-unsplash.3a50eadc.jpg"),M=(a(95),a(128)),E=(a(96),a.p+"static/media/pina-messina-iIDiRMITYik-unsplash.10ae61d3.jpg"),I=a.p+"static/media/theodore-goutas-aeq3jJj0sUw-unsplash.9e70f324.jpg";var Z=function(){return Object(y.jsx)("div",{children:Object(y.jsxs)(M.a,{controls:!1,fade:!0,wrap:!0,children:[Object(y.jsxs)(M.a.Item,{interval:3e3,children:[Object(y.jsx)("div",{className:"active",children:Object(y.jsx)("img",{className:"imgclass",src:I,alt:"First slide"})}),Object(y.jsx)(M.a.Caption,{})]}),Object(y.jsxs)(M.a.Item,{interval:3e3,children:[Object(y.jsx)("img",{width:"100%",height:"20%",className:"imgclass",src:D,alt:"Second slide"}),Object(y.jsx)(M.a.Caption,{})]}),Object(y.jsxs)(M.a.Item,{interval:3e3,children:[Object(y.jsx)("img",{className:"imgclass",src:E}),Object(y.jsx)(M.a.Caption,{})]})]})})};a(97);var S,B=function(){return Object(y.jsx)("div",{children:Object(y.jsx)("h1",{children:Object(y.jsx)("span",{className:"gradient-text",children:"The Crutch."})})})};a(98),a.p,a(99),S={marginLeft:"5px",color:"white",backgroundColor:"#E7717D",shadow:"5px",borderRadius:"30px",width:"33rem",height:"300px"},Object(i.a)(S,"backgroundColor","#36096D"),Object(i.a)(S,"backgroundImage","linear-gradient(315deg, #36096d 0%, #37d5d6 74%)");var k=function(){var e,t,a,s=Object(c.useState)(!1),n=Object(l.a)(s,2);return n[0],n[1],Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(N,{}),Object(y.jsx)(Z,{}),Object(y.jsx)(B,{}),Object(y.jsx)("div",{className:"midtext",children:Object(y.jsx)("p",{children:"Donate Medical supplies to save the life of a poor."})}),Object(y.jsx)("div",{className:"quote",children:Object(y.jsxs)("p",{children:['"Health Cannot be a question of income , it is a fundamental human right"',Object(y.jsx)("sub",{children:"-Nelson Mandela"})]})}),Object(y.jsx)("br",{}),Object(y.jsx)("br",{}),Object(y.jsx)("div",{class:"card text-center cardss",children:Object(y.jsxs)("div",{class:"card-body",children:[Object(y.jsx)("h2",(e={class:"card-title"},Object(i.a)(e,"class","lined"),Object(i.a)(e,"children","ABOUT US"),e)),Object(y.jsx)("p",{class:"card-text",children:"Founded in 2021, TheCrutch an online fundraising platform that connects communities providing a tool for hospitals and NGO's to formalize their fundraising efforts and a channel for funders to find hospitals they wish to support. Our team is young, diverse, and passionate about healthcare. We believe that access to good hospital equipments should not be dependent on wealth."})]})}),Object(y.jsx)("br",{}),Object(y.jsx)("div",{class:"card text-center cardss",children:Object(y.jsxs)("div",{class:"card-body",children:[Object(y.jsx)("h2",(t={class:"card-title"},Object(i.a)(t,"class","lined"),Object(i.a)(t,"children","OUR SERVICES"),t)),Object(y.jsx)("p",{class:"card-text",children:"We know that you care about how effectively your donation is being used. That\u2019s why we show you how every rupee was spent, how you made a difference, and how grateful the hospitals are in which your equipments were donated!"})]})}),Object(y.jsx)("br",{}),Object(y.jsx)("div",{class:"card text-center cardss",children:Object(y.jsxs)("div",{class:"card-body",children:[Object(y.jsx)("h2",(a={class:"card-title"},Object(i.a)(a,"class","lined"),Object(i.a)(a,"children","HOW IT WORKS"),a)),Object(y.jsx)("p",{class:"card-text",children:"To ensure integrity, we\u2019re there through every step of every project. We vet all requests, purchase each item, and ship materials directly to verified locations using leading e-commerce platforms or other NGO services"})]})})]})},Y=a(62),G=a.n(Y),R=a(75),z=(a(101),a(76));a(102);var W=function(e){var t=e.equip,a=e.desc;return Object(y.jsx)("div",{className:"card",children:Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)("h4",{children:t}),Object(y.jsx)("p",{children:a}),Object(y.jsx)(z.a,{trigger:Object(y.jsx)(j.a,{className:"button",size:"small",children:" Request"}),children:Object(y.jsx)("div",{children:Object(y.jsxs)("form",{children:[Object(y.jsxs)("label",{children:["Name:",Object(y.jsx)("input",{type:"text",name:"name"})]}),Object(y.jsxs)("label",{children:["Name:",Object(y.jsx)("input",{type:"text",name:"name"})]})," ",Object(y.jsxs)("label",{children:["Name:",Object(y.jsx)("input",{type:"text",name:"name"})]})," ",Object(y.jsxs)("label",{children:["Name:",Object(y.jsx)("input",{type:"text",name:"name"})]})," ",Object(y.jsxs)("label",{children:["Name:",Object(y.jsx)("input",{type:"text",name:"name"})]}),Object(y.jsx)("input",{type:"submit",value:"Submit"})]})})})]})})};var q=function(){var e=Object(c.useState)([]),t=Object(l.a)(e,2),a=t[0],s=t[1],n=function(){var e=Object(R.a)(G.a.mark((function e(){var t,a;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=x.collection("Available"),e.next=3,t.get();case 3:a=e.sent,s(a.docs.map((function(e){return e.data()})));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){n()}),[]),a.forEach((function(e){})),Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(N,{style:{position:"Sticky"}}),a&&a.map((function(e){return Object(y.jsx)("div",{style:{display:"flex",flexDirection:"row"},children:Object(y.jsx)(W,{style:{display:"flex",flexDirection:"row"},equip:e.equipment,desc:e.description})},e.uid)}))]})},T=function(){var e=Object(m.a)(u),t=Object(l.a)(e,2),a=t[0];t[1];return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(N,{}),Object(y.jsx)("div",{className:"my-3",children:Object(y.jsx)("h1",{className:"text-center",children:" My Profile "})}),Object(y.jsx)("div",{class:"card mb-3 ",children:Object(y.jsxs)("div",{className:"row g-0 bg-warning ",children:[Object(y.jsx)("div",{className:"col-md-1 justify-content-center mx-auto ",children:Object(y.jsx)("img",{src:"data:image/png;base64,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",alt:"...",className:"animatedtwice"})}),Object(y.jsx)("div",{class:"col-md-8 text-center",children:Object(y.jsxs)("div",{class:"card-body",children:[Object(y.jsxs)("h1",{style:{fontSize:"50px"},class:"card-title",children:[a.displayName," "]}),Object(y.jsx)("p",{class:"card-text",children:Object(y.jsx)("center",{children:Object(y.jsxs)("h4",{children:["Age: 21",Object(y.jsx)("br",{}),"State: WEST BENGAL",Object(y.jsx)("br",{}),"Item Donated: 8",Object(y.jsx)("br",{})]})})}),Object(y.jsxs)("p",{children:[Object(y.jsx)("a",{class:"btn btn-primary","data-bs-toggle":"collapse",href:"#multiCollapseExample1",role:"button","aria-expanded":"false","aria-controls":"multiCollapseExample1",children:"Watch History of Donation"}),"\xa0\xa0\xa0\xa0",Object(y.jsx)("button",{class:"btn btn-primary",type:"button","data-bs-toggle":"collapse","data-bs-target":"#multiCollapseExample2","aria-expanded":"false","aria-controls":"multiCollapseExample2",children:"Current Wishlist"}),"\xa0\xa0\xa0\xa0",Object(y.jsx)("button",{class:"btn btn-primary",type:"button","data-bs-toggle":"collapse","data-bs-target":"#multiCollapseExample3","aria-expanded":"false","aria-controls":"multiCollapseExample3",children:"Additional Info"})]}),Object(y.jsxs)("div",{class:"row",children:[Object(y.jsx)("div",{class:"col",children:Object(y.jsx)("div",{class:"collapse multi-collapse",id:"multiCollapseExample1",children:Object(y.jsx)("div",{class:"card card-body",children:"Some placeholder content for the first collapse component of this multi-collapse example. This panel is hidden by default but revealed when the user activates the relevant trigger."})})}),Object(y.jsx)("div",{class:"col",children:Object(y.jsx)("div",{class:"collapse multi-collapse",id:"multiCollapseExample2",children:Object(y.jsx)("div",{class:"card card-body",children:"Some placeholder content for the second collapse component of this multi-collapse example. This panel is hidden by default but revealed when the user activates the relevant trigger."})})}),Object(y.jsx)("div",{class:"col",children:Object(y.jsx)("div",{class:"collapse multi-collapse",id:"multiCollapseExample3",children:Object(y.jsx)("div",{class:"card card-body",children:"Some placeholder content for the second collapse component of this multi-collapse example. This panel is hidden by default but revealed when the user activates the relevant trigger."})})})]}),Object(y.jsx)("p",{class:"card-text",children:Object(y.jsx)("small",{class:"text-muted",children:"Last updated 3 mins ago"})})]})})]})}),Object(y.jsx)("br",{})]})};v.a.configure();var J={background:"linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",borderRadius:10,border:0,color:"white",height:48,textDecoration:"none",width:150,padding:"0 30px",marginLeft:"10px",boxShadow:"0 3px 5px 2px rgba(255, 105, 135, .3)"};var L=function(){var e=Object(m.a)(u),t=Object(l.a)(e,1)[0],a=Object(c.useState)(""),s=Object(l.a)(a,2),n=s[0],r=s[1],i=Object(c.useState)(""),o=Object(l.a)(i,2),d=o[0],b=o[1],h=Object(c.useState)(""),p=Object(l.a)(h,2),O=p[0],v=p[1],w=Object(c.useState)(""),C=Object(l.a)(w,2),A=C[0],D=C[1],M=Object(c.useState)(""),E=Object(l.a)(M,2),I=E[0],Z=E[1],S=Object(c.useState)(""),B=Object(l.a)(S,2),k=B[0],Y=B[1];return Object(y.jsx)("div",{children:t?Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(N,{}),Object(y.jsxs)(g.a,{className:"donateForm",children:[Object(y.jsxs)(g.a.Group,{controlId:"formBasicPassword",children:[Object(y.jsx)(g.a.Label,{children:"Demand made by : "}),Object(y.jsx)(g.a.Control,{className:"control",value:n,onChange:function(e){return r(e.target.value)},type:"text",placeholder:"Institution name"})]}),Object(y.jsxs)(g.a.Group,{controlId:"formBasicEmail",children:[Object(y.jsx)(g.a.Label,{children:"Email address :"}),Object(y.jsx)(g.a.Control,{type:"email",value:k,onChange:function(e){return Y(e.target.value)},placeholder:t.email}),Object(y.jsx)(g.a.Text,{className:"text-muted",children:"We'll never share your email with anyone else."})]}),Object(y.jsxs)(g.a.Group,{controlId:"formBasicPassword",children:[Object(y.jsx)(g.a.Label,{children:"Equipments needed"}),Object(y.jsx)(g.a.Control,{type:"text",value:d,onChange:function(e){return b(e.target.value)},placeholder:"Equipment"})]}),Object(y.jsxs)(g.a.Group,{controlId:"formBasicPassword",children:[Object(y.jsx)(g.a.Label,{children:" Description of each Equipment"}),Object(y.jsx)(g.a.Control,{type:"text",value:O,onChange:function(e){return v(e.target.value)},placeholder:"Describe equipments you need"})]}),Object(y.jsxs)(g.a.Group,{controlId:"formBasicPassword",children:[Object(y.jsx)(g.a.Label,{children:"Quantity of each equipment"}),Object(y.jsx)(g.a.Control,{type:"text",value:A,onChange:function(e){return D(e.target.value)},placeholder:"Quantity"})]}),Object(y.jsxs)(g.a.Group,{controlId:"formBasicPassword",children:[Object(y.jsx)(g.a.Label,{children:"Address of place where the equipments are to be supplied"}),Object(y.jsx)(g.a.Control,{type:"text",value:I,onChange:function(e){return Z(e.target.value)},placeholder:"Address"})]}),Object(y.jsx)("form",{children:Object(y.jsxs)("div",{class:"form-group",children:[Object(y.jsx)("label",{for:"formControlRange",children:"Urgency Level"}),Object(y.jsx)("input",{type:"range",class:"form-control-range",id:"formControlRange"})]})}),Object(y.jsx)("h5",{children:"Number of people getting affected"}),Object(y.jsxs)("div",{class:"form-check",children:[Object(y.jsx)("input",{class:"form-check-input",type:"radio",name:"exampleRadios",id:"exampleRadios1",value:"option1"}),Object(y.jsx)("label",{class:"form-check-label",for:"exampleRadios1",children:"Less than 50"})]}),Object(y.jsxs)("div",{class:"form-check",children:[Object(y.jsx)("input",{class:"form-check-input",type:"radio",name:"exampleRadios",id:"exampleRadios1",value:"option1"}),Object(y.jsx)("label",{class:"form-check-label",for:"exampleRadios1",children:"Less than 200"})]}),Object(y.jsxs)("div",{class:"form-check",children:[Object(y.jsx)("input",{class:"form-check-input",type:"radio",name:"exampleRadios",id:"exampleRadios1",value:"option1"}),Object(y.jsx)("label",{class:"form-check-label",for:"exampleRadios1",children:"Less than 500"})]}),Object(y.jsxs)("div",{class:"form-check",children:[Object(y.jsx)("input",{class:"form-check-input",type:"radio",name:"exampleRadios",id:"exampleRadios1",value:"option1"}),Object(y.jsx)("label",{class:"form-check-label",for:"exampleRadios1",children:"More than 500"})]}),Object(y.jsx)("br",{}),Object(y.jsx)(j.a,{style:J,onClick:function(e){e.preventDefault(),x.collection("requested").add({mail:k,name:n,equipment:d,description:O,address:I}).then((function(){alert("Submitted Successfully \ud83d\udc4d")})).catch((function(e){alert(e.message)})),Z(""),r(""),D(""),v(""),b(""),Y("")},type:"submit",children:"Submit"})]})]}):Object(y.jsx)(y.Fragment,{children:Object(y.jsx)(f.a,{to:"/"})})})};var F=function(){var e=Object(m.a)(u);return Object(l.a)(e,1)[0],Object(y.jsxs)("div",{className:"App",children:[Object(y.jsx)(O.a,{children:Object(y.jsxs)(f.d,{children:[Object(y.jsx)(f.b,{path:"/",exact:!0,children:Object(y.jsx)(k,{})}),Object(y.jsx)(f.b,{path:"/donate",exact:!0,children:Object(y.jsx)(C,{})}),Object(y.jsx)(f.b,{path:"/profile",exact:!0,children:Object(y.jsx)(T,{})}),Object(y.jsx)(f.b,{path:"/data",children:Object(y.jsx)(q,{})}),Object(y.jsx)(f.b,{path:"/demand",exact:!0,children:Object(y.jsx)(L,{})}),Object(y.jsx)(f.a,{to:"/"})]})}),Object(y.jsx)("br",{})]})},P=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,130)).then((function(t){var a=t.getCLS,c=t.getFID,s=t.getFCP,n=t.getLCP,r=t.getTTFB;a(e),c(e),s(e),n(e),r(e)}))};r.a.render(Object(y.jsx)(s.a.StrictMode,{children:Object(y.jsx)(F,{})}),document.getElementById("root")),P()},65:function(e,t,a){},83:function(e,t,a){},84:function(e,t,a){},85:function(e,t,a){},96:function(e,t,a){},97:function(e,t,a){},98:function(e,t,a){}},[[103,1,2]]]);
//# sourceMappingURL=main.ae67b722.chunk.js.map