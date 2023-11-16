<script>
export default{
    data(){
        return{
            listProject:[
                {nameProject:'landing page',img:'./landingpage.jpg',about:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, rem illum. Omnis, ea molestiae! Soluta!',path:''},
                {nameProject:'portfolio website',img:'portfolio.jpg',about:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, rem illum. Omnis, ea molestiae! Soluta!',path:''},
                {nameProject:'company profile',img:'companyprofile.jpg',about:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, rem illum. Omnis, ea molestiae! Soluta!',path:''},
                {nameProject:'blog website',img:'blogWebsite.jpg',about:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, rem illum. Omnis, ea molestiae! Soluta!',path:''},
                {nameProject:'marketplace website',img:'marketplace.jpg',about:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, rem illum. Omnis, ea molestiae! Soluta!',path:''}
            ]
        }
    }
}
</script>

<template>
        <section class="project">
        <h3 class="judul">my <span>project</span></h3>
        <div class="content">
            <div class="col"
            v-for="(data,index) in listProject" 
            :key="index">
        <img :src="data.img" alt="">
        <h3>{{data.nameProject}}</h3>
        <p>{{data.about}}</p>
        <button @click="view">view</button>
        </div>
        </div>
    </section>
</template>

<style scoped>
*{
    padding: 0;
    margin:0;
    box-sizing: border-box;
}
.project{
    width: 100%;
    height: 150vh;
    background-color: black;
    display: flex;
    flex-direction: column;
    gap: 30px;
    justify-content: center;
    align-items: center;
    color: white;
}
.judul{
    font-size: 2em;
    font-weight: 900;
    text-transform: capitalize;
    font-family: sans-serif;
    color: white;
}
.judul span{
    color: red;
}
.content{
    width: 60%;
    height: 50%;
    padding: 10px;
    display: grid;
    grid-template-columns: repeat(auto-fill,minmax(200px,1fr));
    justify-content: center;
    align-items: center;
    grid-gap: 20px;
}
.col{
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    text-align: start;
    gap: 5px;
}
.col img{
    display: inline-block;
    width: 100%;
    height: 100px;
    object-fit: contain;
    border-radius: 5px;
}
.col h3{
    font-size: 1.2em;
    font-weight: 800;
    text-transform: capitalize;
       text-align: start;
}
.col p{
    font-size: .8em;
    font-weight: 500;
    text-transform: lowercase;
    font-family: sans-serif;
}
.col button{
    display: inline-block;
    width: 70px;
    height: 25px;
    border: none;
    border-radius: 5px;
    background-color: red;
    color: white;
    cursor: pointer;
}
.col button:hover{
    opacity: .8;
}
</style>