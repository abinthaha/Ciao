(this.webpackJsonpciao=this.webpackJsonpciao||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),o=n(8),i=n.n(o),r=(n(13),n(14),n(7)),h=n(3),u=n(4),c=n(6),l=n(5),d=(n(15),n(0)),m=function(e){Object(c.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).handleQuestion=function(){var e=a.state,t=e.pages,n=e.currentSection,s=e.totalQuestions;n<s.length?(t.push(s[n]),a.setState(Object(r.a)(Object(r.a)({},a.state),{},{currentSection:n+1,pages:t}),(function(){console.log(t)}))):window.open("https://abinthaha.github.io/Dashboard")},a.state={totalQuestions:[{word:"Hi all, as you know, today is my last working day in EY",question:"I didn't knew"},{word:"Ok, then... As you sure don\xb4t know yet, aside from my only couple of teammates, today is my last day in EY",question:"Oh, well... Ok.. So ?"},{word:"So what? Thanks to all of you for all the learning and maturing this job has gifted me with",question:"Ok Thanks to you too!, whats your next plan?"},{word:"Somewhere else, doing the same things probably",question:"Oh is it? then why you wanted to change if it will be as same as EY?"},{word:"Just for fun, I felt it is not the perfect time to settle somewhere safe and comfortable, so taking the risks and going for an adventure",question:"Oh, well, any special thanks"},{word:"Yeah, you bet, how can I go without thanking those who were with me?",question:"That's good, Who's first?"},{word:"Anand, who was my mentor and my lead, who guided me personally and professionally",question:"Then who?",isName:"Anand"},{word:"Prateesh, my counsellor, who helped me to understand EY better, taught me the processes and etc",question:"hmm, seems like a professional, then who?",isName:"Prateesh"},{word:"Then.. Shaswath and Sreenu, how can I forget you guys. Even though we were in only a few projects, our collaborative work made the dream work happen",question:"Long list??? Can you just.. combine all?",isName:"Shaswath"},{word:"Hmm.. Let me see.. Aswathy P Kumar, Saumya Cherian, Senthil, Shubham, Jeffin Jacob, Nikhitha Prasad, Ashly Sunny, Arjun Sudhamol, Jinu Joy, Jasna, Sreelaskhmi, Vishnu K Kumar, Sujith Thomas, Aby Alex, Ashwin Kumar, Dibin Joseph, Harikrishnan, Arun Raj, Nandu R Nair, Vishnu G Sivan, Archish, Vignesh ........ Most of these people are not working in EY now, but those made my life in EY the best. There are more",question:"Hope you had a good time here in EY"},{word:"It was awesome, really good",question:"Ok, then I think this is the place where we wave our hands and say Good Bye, share your contact details"}],pages:[{word:"Hi all, as you know, today is my last working day in EY",question:"Mm..., I didn't knew"}],currentSection:1},a}return Object(u.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.pages,a=t.currentSection;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h2",{className:"page-heading",children:"Thank You"}),n.map((function(t,n){return n<a&&Object(d.jsx)(w,{text:t.word,isName:t.isName,question:t.question,handleQuestion:e.handleQuestion},"type_"+n)}))]})}}]),n}(s.a.Component),w=function(e){Object(c.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).handleClick=function(e){e.stopPropagation(),e.preventDefault(),e&&a.props.handleQuestion()},a.state={slice:""},a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.setTypeWriter(this.props.text)}},{key:"setTypeWriter",value:function(e){var t=0,n=setInterval(function(){this.setState({slice:e.slice(0,t)}),(t+=1)>e.length&&clearInterval(n)}.bind(this),50)}},{key:"getImage",value:function(e){if("Shaswath"!==e){var t="https://raw.githubusercontent.com/abinthaha/Ciao/master/src/assets/".concat(e,".jpg");return Object(d.jsx)("span",{className:"image",style:{backgroundImage:"url(".concat(t,")")}})}return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("span",{className:"image",style:{backgroundImage:"url(https://raw.githubusercontent.com/abinthaha/Ciao/master/src/assets/Shaswath.jpg)"}}),Object(d.jsx)("span",{className:"image",style:{backgroundImage:"url(https://raw.githubusercontent.com/abinthaha/Ciao/master/src/assets/Sreenu.jpg)"}})]})}},{key:"render",value:function(){var e=this,t=this.state.slice,n=this.props,a=n.question,s=n.text,o=n.isName;return Object(d.jsxs)("section",{className:"eachrow",children:[Object(d.jsxs)("span",{className:"typewriter-text",children:[o?this.getImage(o):"",t]}),t.length===s.length&&Object(d.jsx)("div",{className:"question",children:Object(d.jsx)("span",{className:t.length!==s.length?"disable":"",onClick:function(t){return e.handleClick(t)},children:a})})]})}}]),n}(s.a.Component),g=m;var p=function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsx)(g,{})})},b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),a(e),s(e),o(e),i(e)}))};i.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(p,{})}),document.getElementById("root")),b()}},[[17,1,2]]]);
//# sourceMappingURL=main.25ec033c.chunk.js.map