(this["webpackJsonppic-fetch"]=this["webpackJsonppic-fetch"]||[]).push([[0],{18:function(e,t,a){},22:function(e,t,a){e.exports=a(45)},45:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a(3),c=a(5),i=a(4),s=a(6),o=a(0),u=a.n(o),l=a(19),m=a.n(l),h=a(8),p=a.n(h),f=a(20),b=a(7),d=a(21),g=a.n(d).a.create({baseURL:"https://api.unsplash.com",headers:{Authorization:"Client-ID d058d99844024ff46d1a068ce97e06f2aca463dce21e345e7ca26e1479b620de"}}),v=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,s=new Array(r),o=0;o<r;o++)s[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(s)))).state={term:""},a.onFormSubmit=function(e){e.preventDefault(),a.props.submitText(a.state.term)},a}return Object(s.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this;return u.a.createElement("div",{className:"ui segment"},u.a.createElement("form",{onSubmit:this.onFormSubmit,action:"",className:"ui form"},u.a.createElement("div",{className:"field"},u.a.createElement("label",{htmlFor:""},"Image Search"),u.a.createElement("input",{type:"text",value:this.state.term,onChange:function(t){e.setState({term:t.target.value})}}))))}}]),t}(o.Component);function j(e){console.log(e.images);var t=e.images.map((function(e){return u.a.createElement("img",{key:e.id,src:e.urls.regular})}));return u.a.createElement("div",null,t)}a(18);var O=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,s=new Array(r),o=0;o<r;o++)s[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(s)))).state={images:[]},a.onSearchSubmit=function(){var e=Object(f.a)(p.a.mark((function e(t){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,g.get("/search/photos",{params:{query:t}});case 3:n=e.sent,console.log(Object(b.a)(a)),a.setState({images:n.data.results});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a}return Object(s.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return u.a.createElement("div",{className:"ui container",style:{marginTop:"10px",backgroundColor:""}},u.a.createElement(v,{submitText:this.onSearchSubmit}),u.a.createElement("h2",null,"Found ",this.state.images.length," images."),u.a.createElement(j,{images:this.state.images}))}}]),t}(u.a.Component);a.d(t,"default",(function(){return y}));var y=function(e){function t(){return Object(n.a)(this,t),Object(c.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return u.a.createElement(O,null)}}]),t}(o.Component);m.a.render(u.a.createElement(y,null),document.querySelector("#root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.02738647.chunk.js.map