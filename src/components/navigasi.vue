<script>
import { RouterLink } from 'vue-router';
</script>

<template>
<nav class="navigasi">
    <a href="" class="judul">ahmed <span>Website</span></a>
    <div class="link">
        <ul>
            <li><a href=""><RouterLink to="/">Home</RouterLink></a></li>
            <li><a href=""><RouterLink to="/about">about</RouterLink></a></li>
            <li><a href=""><RouterLink to="/project">project</RouterLink></a></li>
            <li><a href=""><RouterLink to="/contact">contact</RouterLink></a></li>
        </ul>
    </div>
</nav>  
</template>

<style scoped>
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
nav{
    width: 100%;
    padding: 15px 5px;
    box-shadow: 0 0 2px 1px gray;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: fixed;
    top: 0;
    z-index: 5;
    background-color: white;
}
.judul{
    font-weight: 900;
}
a{
    text-decoration: none;
    color: black;
    cursor: pointer;
}
span{
    color: red;
}
ul{
    display: flex;
    gap: 30px;
    list-style-type: none;
}
.judul{
    font-size: 2em;
    font-weight: 900;
    text-transform: capitalize;
}
ul li a{
    font-size: .9em;
    font-weight: 250;
}
ul li a:hover{
    opacity: .8;
    color: red;
}
</style>