<script>
import { RouterLink } from 'vue-router';
export default{
    data(){
        return{

        }
    },
    methods:{
        berlanggananBtn:function(){
            window.location.href='../views/formLangganan/from.vue';
        }
    }
}
</script>

<template>
    <header>
        <div class="content">
            <h1>selamat datang di website kami !!</h1> 
            <p>website ini digunakan untuk anda yang ingin membuat tampilan web dan full website yang ada database nya menggunakan  template maupun coding
                dengan biaya yang bisa di jangkau
            </p> 
            <RouterLink to="/fromLangganan"><button>berlangganan sekarang</button></RouterLink>
            
        </div>    
    </header>
</template>

<style scoped>
header::before{
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background:url('../assets/test.jpg');
  -webkit-filter: blur(10px);
    box-shadow: inset 0 0 2000px rgba(255, 255, 255, .5);
    filter: blur(10px);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  content: '';
}
.content{
    width: 70%;
    display: flex;
    top: 25%;
    left: 15%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    position: absolute;
    text-align: center;
    z-index: 2;
    padding: 20px;
    background-color: rgb(244, 244, 244,.5);
}
.content h1{
    font-size: 3em;
    font-weight: 900;
    text-transform: uppercase;
    font-family: sans-serif;
}
.content p{
    text-align: center;
    width: 50%;
    font-size: 1.2em;
    font-weight: 300;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
.content button{
    background-color: red;
    color: white;
    padding: 6px 8px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1.1em;
    text-transform: capitalize;
    font-weight: 500;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    margin-bottom: 10px;
}
.content button:hover{
    opacity:.8;
    color: white;
}
@media only screen and (max-width: 600px) {
    .content h1{
        font-size: 1.5em;
    }
    .content p{
        font-size: .8em;
    }
}
@media only screen and (min-width: 600px) {
     .content h1{
        font-size: 2em;
    }
    .content p{
        font-size: 1.1em;
    }
}
</style>