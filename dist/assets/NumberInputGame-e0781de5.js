import{m as a,_ as o,r as u,o as s,c as n,q as l,s as c,j as d,a as r,t as _,b as p}from"./index-d6735393.js";import h from"./VirtualNumPad-f7f97e8d.js";import{_ as f}from"./_plugin-vue_export-helper-c27b6911.js";const D={name:"NumberInputGame",data(){return{imageUrl:"",SlotComponentSwitch:!1,SlotComponent:"",SlotData:{}}},props:{GameData:{type:Object,required:!0},GameConfig:{type:Object,required:!0},id:{type:String,required:!0}},methods:{GetSubmitData(e){console.log("Number Input Game Get:"+e),this.CheckAnswer(e)},CheckAnswer(e){var t=!1;e==this.GameData.Answer?t=!0:t=!1,console.log(t),t?(this.$emit("play-effect","CorrectSound"),this.$emit("add-record",[this.answer,e,"正確"]),this.$refs.VirtualNumPad.delete_num(),this.$emit("next-question")):(this.$emit("play-effect","WrongSound"),this.$emit("add-record",[this.answer,e,"錯誤"]),this.$refs.VirtualNumPad.delete_num())}},created(){this.GameData.SlotComponents!=null&&(this.SlotComponentSwitch=!0,this.SlotComponent=this.GameData.SlotComponents[0].Name,this.SlotData=this.GameData.SlotComponents[0].Data)},components:{VirtualNumPad:h,ImageContainer:a(()=>o(()=>import("./ImageContainer-af1b21ab.js"),["assets/ImageContainer-af1b21ab.js","assets/get_assets-e179de71.js","assets/_plugin-vue_export-helper-c27b6911.js","assets/index-d6735393.js","assets/index-797b4968.css","assets/ImageContainer-0167eafa.css"])),FreeDrag:a(()=>o(()=>import("./FreeDrag-08cfc1a8.js"),["assets/FreeDrag-08cfc1a8.js","assets/get_assets-e179de71.js","assets/ImageContainer-af1b21ab.js","assets/_plugin-vue_export-helper-c27b6911.js","assets/index-d6735393.js","assets/index-797b4968.css","assets/ImageContainer-0167eafa.css","assets/FreeDrag-e0c817c0.css"])),NumberLine:a(()=>o(()=>import("./NumberLine-cf4a9bb7.js"),["assets/NumberLine-cf4a9bb7.js","assets/index-d6735393.js","assets/index-797b4968.css","assets/_plugin-vue_export-helper-c27b6911.js","assets/NumberLine-15701d11.css"]))}},S={class:"container"},C={key:0,class:"ImageCard"},b={class:"AnswerArea"};function G(e,t,N,v,I,i){const m=u("VirtualNumPad");return s(),n("div",S,[this.GameData.SlotComponents!=null?(s(),n("div",C,[(s(),l(c(this.SlotComponent),{class:"component",ID:this.id,Data:this.SlotData},null,8,["ID","Data"]))])):d("",!0),r("div",b,[r("p",null,_(this.GameData.Question),1),p(m,{onSubmit:i.GetSubmitData,ref:"VirtualNumPad"},null,8,["onSubmit"])])])}const P=f(D,[["render",G],["__scopeId","data-v-3f45b6bf"]]);export{P as default};
