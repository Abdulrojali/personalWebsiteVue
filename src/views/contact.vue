<script>
import { setTransitionHooks } from 'vue';

export default{
    data(){
        return{
            username:'',
            email:'',
            to:'',
            massage:''
        }
    },
    methods:{
        submitMassage:function(){
            if(this.username==='' || this.email==='' || this.to==='' || this.massage===''){
            alert('please input your username or email or to massage!!')    
        }
        else{
            alert('massage sukses to send!!');
        }
    },
    cancelMassage:function(){
        this.username=''
        this.email=''
        this.to=''
        this.massage==''
        window.location.reload()
    }
 }
}
</script>

<template>
    <div class="content">
        <h1 class="judul">contact <span>me</span></h1>
        <div class="contentFrom">
            <div class="col">
                <input type="text" placeholder="username" v-model="username">
            </div>
            <div class="col">
                <input type="email" placeholder="email" v-model="email">
            </div>
            <div class="col">
                <input type="text" placeholder="massage to" v-model="to">
            </div>
            <div class="col">
                <textarea name="" id="" cols="30" rows="10" 
                placeholder="massage input"
                v-model="massage"></textarea>
            </div>
            <div class="btn">
                <button class="submit" @click="submitMassage">submit</button>
                <button class="cancel" @click="cancelMassage">cancel</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
.content{
    width: 100%;
    height: 150vh;
    display: flex;
    flex-direction: column;
    gap: 8px;
    justify-content: center;
    align-items: center;
    background-color: black;
}
.contentFrom{
    padding: 20px;
    width: 80%;
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    gap: 20px;
}
.col{
    width: 100%;
}
.contentFrom input{
    display: inline-block;
    width: 100%;
    height: 30px;
    padding: 10px 20px;
    cursor: pointer;
}
.contentFrom textarea{
    display: inline-block;
    width: 100%;
    height:150px;
    padding: 5px 20px;
}
.judul{
    font-size: 2.3em;
    font-weight: 800;
    text-transform: capitalize;
    color:white;
}
.judul span{
    color: red;
}
.btn{
    margin-top: 20px;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.btn button{
    padding: 6px 8px;
    border: none;
    background-color: red;
    color: white;
    font-size: .8em;
    font-weight: 800;
    text-transform: capitalize;
    cursor: pointer;
    border-radius: 5px;
}
.btn button:hover{
    opacity: .8;
}
</style>