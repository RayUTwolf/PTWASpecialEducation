/* empty css                                                                  */import{_ as a}from"./_plugin-vue_export-helper-c27b6911.js";import{o as l,c as u,a as o,p,e as r}from"./index-d6735393.js";const i={name:"Fractions",props:{Data:{type:Object,required:!0}},data(){return{Num:[null,null]}},methods:{Reply(e){e==0?this.Num[0]=document.getElementById("Input1").value:this.Num[1]=document.getElementById("Input2").value,console.log(this.Num[0],this.Num[1]),console.log(this.Data.Son,this.Data.Mother),this.Data.Mother==this.Num[1]&&this.Data.Son==this.Num[0]?this.$emit("ReplyAnswer",!0):this.$emit("ReplyAnswer",!1)}},mounted(){}},d=e=>(p("data-v-84f488a8"),e=e(),r(),e),m={class:"Container"},h=d(()=>o("hr",null,null,-1));function c(e,t,f,y,I,n){return l(),u("div",m,[o("input",{id:"Input1",type:"text",onChange:t[0]||(t[0]=s=>n.Reply(0)),onInput:t[1]||(t[1]=s=>n.Reply(0))},null,32),h,o("input",{id:"Input2",type:"text",onChange:t[2]||(t[2]=s=>n.Reply(1)),onInput:t[3]||(t[3]=s=>n.Reply(1))},null,32)])}const R=a(i,[["render",c],["__scopeId","data-v-84f488a8"]]);export{R as default};
