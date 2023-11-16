
<template>
    <main>
        <div class="aboutContent">
        <div class="content">
            <img src="../assets/man.jpg" class="contentImg">
            <div class="aboutMe">
                <h3>my name  <span>ahmad</span> , saya seorang <span>web developers</span> </h3>
                <p>saya memiliki keterkatrikan dalam pembuatan website baik slincing ui, optimasi ui, 
                    seo webiste, dan perfomance webiste. dengan teknologi yang saya pakai yaitu full javascript
                    mulai dari frontend maupun backend untuk database saya biasa menggunakan mongodb 
                </p>
                <div class="skillset">
                    <h3>my <span>skill</span></h3>
                    <ul>
                        <li>html</li>
                        <li>css</li>
                        <li>javascript</li>
                        <li>boostrap</li>
                        <li>tailwindcss</li>
                        <li>vue js</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    </main>
</template>


<style scoped>
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
main{
    width: 100%;
    height: 100vh;
    background-color: black;
    color: white;
}
.aboutContent{
    width: 100%;
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
.content{
    margin-top: 10%;
    width: 100%;
    display: flex;
    gap: 30px;
    justify-content: space-around;
    align-items: center;
    padding: 0 20px;
}
.contentImg{
    display: inline-block;
    width: 100%;
    height: 250px;
    object-fit: contain;
    border-radius: 5px;
}

.aboutMe{
    display: flex;
    flex-direction: column;
    gap: 5px;
}
.aboutMe h3 {
    font-size: 1.5em;
    font-weight: 900;
    text-transform: capitalize;
    margin-bottom: 5px;
    margin-top: 20px;
}
.aboutMe h3 span{
    color: red;
}
.aboutMe p{
    width: 80%;
    font-size: .9em;
    font-weight: 500;
    text-transform: capitalize;
    font-family: 'Times New Roman', Times, serif;
    line-height: 23px;
}
.skillset ul{
    display: flex;
    gap: 20px;
    list-style-type: none;
}
@media only screen and (max-width: 600px){
    .content{
        text-align: center;
    }
}
@media only screen and (max-width: 900px) {
    .aboutContent,main{
        height: 100%;
        padding: 10px 0;
    }
    .content{
        padding: 10px 0;
        height: 100%;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 15px;
    }
    .aboutMe{
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
}
</style>