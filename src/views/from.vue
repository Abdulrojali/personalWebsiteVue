<script>
export default{
    data(){
        return{
            namaUser:'',
            email:'',
            password:'',
            menuItems:''
        }
    },
    methods:{
        submitMassage:function(){
            if(this.namaUser==='' || this.email==='' || this.password===''||this.menuItems===''){
            alert('tolong masukkan input!!')    
        }
        else{
           alert('sukses');
        }
    },
    cancelMassage:function(){
        this.username=''
        this.email=''
        this.password=''
        window.location.reload()
    }
 }
}
</script>

<template>
    <div class="content">
        <h1 class="judul">berlangganan <span>menu</span></h1>
        <div class="contentFrom">
            <div class="col">
                <input type="text" placeholder="nama Anda" v-model="namaUser">
            </div>
            <div class="col">
                <input type="email" placeholder="email" v-model="email">
            </div>
            <div class="col">
                <input type="password" placeholder="password" v-model="password">
            </div>
            <div class="menuPaket">
                <h3>pilih <span>paket</span></h3>
                <select name="" id="" v-model="menuItems">
                <option value="100.000">RP 100.000</option>
                <option value="125.000">RP 125.000</option>
                <option value="200.000">RP 200.000</option>
                <option value="250.000">RP 250.000</option>
                <option value="300.000">RP 300.000</option>
                </select>
            </div>
            <div class="btn">
                <button class="submit" @click="submitMassage">langganan</button>
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
.menuPaket{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 5px;
}
.menuPaket select{
    padding: 10px 20px;
    border:1px solid red;
}
.menuPaket h3{
    color: white;
    text-transform: capitalize;
}
.menuPaket h3 span{
    color: red;
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