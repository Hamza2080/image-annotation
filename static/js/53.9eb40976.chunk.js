(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{517:function(e,t,a){"use strict";a.r(t);var s=a(85),n=a(86),i=a(88),r=a(87),o=a(89),u=a(0),m=a.n(u),c=(a(518),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(r.a)(t).call(this,e))).optionSelected=function(e,t,s){for(var n=0;n<a.state.imageQuestionArray.length;n++)if(a.state.currentImage.id===a.state.imageQuestionArray[n].id)for(var i=0;i<a.state.imageQuestionArray[n].questions.length;i++)a.state.currentImageQuestion.id===a.state.imageQuestionArray[n].questions[i].id&&(a.state.imageQuestionArray[n].questions[i].answer=e,a.setState({isNextEnable:!0}),a.state.currentImageQuestion.id===a.state.imageQuestionArray[n].questions[a.state.imageQuestionArray[n].questions.length-1].id&&a.setState({isDoneEnable:!0}))},a.questionFinished=function(){for(var e=0;e<a.state.imageQuestionArray.length;e++)a.state.currentImage.id===a.state.imageQuestionArray[e].id&&e!=a.state.imageQuestionArray.length-1&&a.setState({currentImage:a.state.imageQuestionArray[e+1],currentImageQuestion:a.state.imageQuestionArray[e+1].questions[0],isDoneEnable:!1,isNextEnable:!0,questionCounter:1,imageCounter:a.state.imageCounter+1});a.state.currentImage.id===a.state.imageQuestionArray[a.state.imageQuestionArray.length-1].id&&a.state.currentImageQuestion.id===a.state.imageQuestionArray[a.state.imageQuestionArray.length-1].questions[a.state.imageQuestionArray[a.state.imageQuestionArray.length-1].questions.length-1].id&&a.setState({isAllQuestionAnswered:!0})},a.questionNext=function(){for(var e=0;e<a.state.imageQuestionArray.length;e++)if(a.state.currentImage.id===a.state.imageQuestionArray[e].id)for(var t=0;t<a.state.imageQuestionArray[e].questions.length;t++)a.state.currentImageQuestion.id===a.state.imageQuestionArray[e].questions[t].id&&t!=a.state.imageQuestionArray[e].questions.length-1&&a.setState({currentImageQuestion:a.state.imageQuestionArray[e].questions[t+1],questionCounter:a.state.questionCounter+1})},a.state={imageQuestionArray:[{id:1,imagePath:"/assets/img/avatars/2.jpg",questions:[{id:1,question:"question 1?",answer:"",options:["options1-1-1","options2-1-1","option3-1-1","option4-1-1"]},{id:2,question:"question 2?",answer:"",options:["options1-2-1","options2-2-1","option3-2-1","option4-2-1"]}]},{id:2,imagePath:"/assets/img/avatars/3.jpg",questions:[{id:1,question:"question 1?",answer:"",options:["options1-1-2","options2-1-2","option3-1-2","option4-1-2"]},{id:2,question:"question 2?",answer:"",options:["options1-2-2","options2-2-2","option3-2-2","option4-2-2"]}]}],currentImage:{},currentImageQuestion:{},isNextEnable:!1,isDoneEnable:!1,imageCounter:1,questionCounter:1,isAllQuestionAnswered:!1},a.state.currentImage=a.state.imageQuestionArray[0],a.state.currentImageQuestion=a.state.currentImage.questions[0],a}return Object(o.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){return m.a.createElement("div",{className:"animated fadeIn container container"},m.a.createElement("div",{className:"container"},m.a.createElement("div",{className:"row mb-3"},m.a.createElement("div",{className:"col d-flex justify-content-center image-counter"},this.state.imageCounter," / ",this.state.imageQuestionArray.length)),this.checkAllQuestionAnswered()))}},{key:"checkAllQuestionAnswered",value:function(){return this.state.isAllQuestionAnswered?m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:"col d-flex justify-content-center"},m.a.createElement("h3",{style:{color:"#89daf3"}},"Congratulation You have answered all question successfully!"))):m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:"col"},m.a.createElement("img",{className:"image questionImage",alt:"questionImage",src:this.state.currentImage.imagePath})),m.a.createElement("div",{className:"col justify-content-center align-self-center"},m.a.createElement("h3",{style:{color:"#20a8d8",margin:"25px 0px"}},"Q",this.state.questionCounter,"/",this.state.currentImage.questions.length," : ",this.state.currentImageQuestion.question),this.iterateOptions(),m.a.createElement("div",{className:"row d-flex flex-row-reverse"},this.imageQuestionCompleted())))}},{key:"iterateOptions",value:function(){var e=this;return m.a.createElement("div",{className:"my-2 d-flex justify-content-center question-options"},this.state.currentImageQuestion.options.map(function(t,a){return m.a.createElement("label",{className:"container",key:t},t,m.a.createElement("input",{type:"radio",name:"radio",onChange:function(s){return e.optionSelected(t,a,s)}}),m.a.createElement("span",{className:"checkmark"}))}))}},{key:"imageQuestionCompleted",value:function(){for(var e=null,t=0;t<this.state.imageQuestionArray.length;t++)this.state.currentImage.id===this.state.imageQuestionArray[t].id&&this.state.currentImageQuestion.id===this.state.imageQuestionArray[t].questions[this.state.imageQuestionArray[t].questions.length-1].id&&(e=m.a.createElement("button",{className:"btn btn-primary btn-md px-3 mx-2",disabled:!this.state.isDoneEnable,onClick:this.questionFinished},"Next Image"));return e||(e=m.a.createElement("button",{className:"btn btn-md bg-primary px-3 mx-2",disabled:!this.state.isNextEnable,onClick:this.questionNext},"Next Question")),e}}]),t}(u.Component));t.default=c},518:function(e,t,a){}}]);
//# sourceMappingURL=53.9eb40976.chunk.js.map