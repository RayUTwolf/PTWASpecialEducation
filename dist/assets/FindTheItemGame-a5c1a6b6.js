import{$ as u}from"./jquery-c0e1e18e.js";import{G as _}from"./get_assets-e179de71.js";import{_ as j}from"./_plugin-vue_export-helper-c27b6911.js";import{o as c,c as h,a as o,t as m,F as f,k as O,n as v,p as G,e as w}from"./index-d6735393.js";const R={name:"FindTheItem",data(){return{ObjPosition:[],ObjPositionRange:[],answered:[],btn:{},inputNumber:""}},props:{GameData:{type:Object,required:!0},GameConfig:{type:Object,required:!0},id:{type:String,required:!0}},created(){},mounted(){var t=document.getElementById("cvs");const s=t.getContext("2d");var a=new Image;a.addEventListener("load",function(){s.drawImage(this,0,0,t.width,t.height)},!1),a.src=_(this.id,this.GameData.img);for(var e in this.GameData.Objs)this.answered.push(!1);for(var e in this.GameData.Objs)this.ObjPosition.push([this.GameData.Objs[e].Location[0],this.GameData.Objs[e].Location[1]]),this.ObjPositionRange.push([[this.GameData.Objs[e].LeftTop[0],this.GameData.Objs[e].LeftTop[1]],[this.GameData.Objs[e].RightBottom[0],this.GameData.Objs[e].RightBottom[1]]])},methods:{DrawCircle(t,s,a,e){var d=document.getElementById("cvs"),n=d.getContext("2d");let i=a-t,r=e-s,g=t+i/2,l=s+r/2,p=10,b=Math.max(i,r)/2+p;n.beginPath(),n.arc(g,l,b,0,2*Math.PI),n.stroke()},judge_position(t){var s=document.getElementById("cvs").getBoundingClientRect().left,a=document.getElementById("cvs").getBoundingClientRect().top;for(var e in this.ObjPositionRange)t.pageX>=this.ObjPositionRange[e][0][0]+s&&t.pageX<=this.ObjPositionRange[e][1][0]+s&&t.pageY>=this.ObjPositionRange[e][0][1]+a&&t.pageY<=this.ObjPositionRange[e][1][1]+a&&this.RightAns(e)},RightAns(t){this.$emit("play-effect","CorrectSound"),this.$emit("add-record",[this.GameData.Objs[t].Name,"被找到","正確"]),this.DrawCircle(this.ObjPositionRange[t][0][0],this.ObjPositionRange[t][0][1],this.ObjPositionRange[t][1][0],this.ObjPositionRange[t][1][1]),u("#bt-"+t).css("background-color","red"),this.detect_win(t)},detect_win(t){this.answered[t]=!0;var s=0;for(t in this.answered)this.answered[t]==!1&&(s+=1);s==0&&this.win()},win(){console.log("FindTheItemGame CheckAnswer :Wrong"),this.$emit("play-effect","HarraySound"),this.$emit("add-record",["全對","","正確"]),this.$emit("next-question",!0)}}},D=t=>(G("data-v-da510a5a"),t=t(),w(),t),I={class:"container"},P={class:"h1"},y={class:"Game"},x={class:"ObjList"},B=D(()=>o("p",{class:"h4"},"尚未被找到:",-1)),C={class:"Objects"};function $(t,s,a,e,d,n){return c(),h("div",I,[o("p",P,m(this.GameData.Text),1),o("div",y,[o("canvas",{id:"cvs",class:"center",width:"600",height:"400",style:{border:"1px solid #000"},onClick:s[0]||(s[0]=i=>n.judge_position(i))}),o("div",x,[B,o("div",C,[(c(!0),h(f,null,O(this.GameData.Objs,(i,r)=>(c(),h("button",{class:v(["Object",{activebutton:d.answered[r]}])},m(i.Name),3))),256))])])])])}const T=j(R,[["render",$],["__scopeId","data-v-da510a5a"]]);export{T as default};
