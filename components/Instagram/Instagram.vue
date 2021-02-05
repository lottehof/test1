<template lang="html">
  <div class="instagram-page">

<div class="instagram-container">
  <div class="container-one">
      <h1 class="instagram-title">Join the Davy family</h1>
  </div>
  <div class="container-two">
    <p class="instagram-name"><a href="https://www.instagram.com/davyorsted/?hl=nl">@davyandOrsted</a></p>
    <a href="https://www.instagram.com/davyorsted/?hl=nl"><i class="fab fa-instagram"></i></a>
  </div>

</div>



<section class="section__flex__grid">

<div class="grid__container">
<div class="grid__container__content">
    <div class="grid__container__content--overlay"></div>
    <figure>
      <img class="grid__container__content--image"
      src="@/assets/img/grid2.png"
      alt="Instagram-post">
    </figure>

</div>
<div class="grid__container__content">
    <div class="grid__container__content--overlay"></div>
    <figure>
      <img class="grid__container__content--image"
      src="@/assets/img/grid1.png"
      alt="Instagram-post">
    </figure>


</div>
<div class="grid__container__content">
    <div class="grid__container__content--overlay"></div>
    <figure>
      <img class="grid__container__content--image"
      src="@/assets/img/grid3.png"
      alt="Instagram-post">
    </figure>


</div>
<div class="grid__container__content">
    <div class="grid__container__content--overlay"></div>
    <figure>
      <img class="grid__container__content--image"
      src="@/assets/img/grid2.png"
      alt="Wereld bol rond boekenkasten">
    </figure>


</div>

<div class="grid__container__content">
    <div class="grid__container__content--overlay"></div>
    <figure>
      <img class="grid__container__content--image"
      src="@/assets/img/grid1.png"
      alt="Wereld bol rond boekenkasten">
    </figure>
</div>
<div class="grid__container__content">
    <div class="grid__container__content--overlay"></div>
    <figure>
      <img class="grid__container__content--image"
      src="@/assets/img/grid3.png"
      alt="Wereld bol rond boekenkasten">
    </figure>
</div>
<div class="grid__container__content">
    <div class="grid__container__content--overlay"></div>
    <figure>
      <img class="grid__container__content--image"
      src="@/assets/img/grid2.png"
      alt="Wereld bol rond boekenkasten">
    </figure>
</div>
<div class="grid__container__content">
    <div class="grid__container__content--overlay"></div>
    <figure>
      <img class="grid__container__content--image"
      src="@/assets/img/grid1.png"
      alt="Wereld bol rond boekenkasten">
    </figure>
</div>
<div class="grid__container__content">
    <div class="grid__container__content--overlay"></div>
    <figure>
      <img class="grid__container__content--image"
      src="@/assets/img/grid3.png"
      alt="Wereld bol rond boekenkasten">
    </figure>
</div>
<div class="grid__container__content">
    <div class="grid__container__content--overlay"></div>
    <figure>
      <img class="grid__container__content--image"
      src="@/assets/img/grid2.png"
      alt="Wereld bol rond boekenkasten">
    </figure>
</div>
<div class="grid__container__content">
    <div class="grid__container__content--overlay"></div>
    <figure>
      <img class="grid__container__content--image"
      src="@/assets/img/grid1.png"
      alt="Wereld bol rond boekenkasten">
    </figure>
</div>
<div class="grid__container__content">
    <div class="grid__container__content--overlay"></div>
    <figure>
      <img class="grid__container__content--image"
      src="@/assets/img/grid3.png"
      alt="Wereld bol rond boekenkasten">
    </figure>
</div>
</div>

</section>
  </div>

</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
.instagram-page{
  width: 100vw;
}
.instagram-container{
  margin-top: 50px;
  padding: 0;
  height: 20px;
}
.container-two, .container-one{
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
}
.instagram-title{
  font-family: 'Baskerville', sans-serif;
  font-size: 22px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.27;
  letter-spacing: normal;
  text-align: center;
  color: #4c565c;
}
.instagram-name{
  width: 115px;
  /* height: 48px; */
  font-family: FuturaStd;
  font-size: 12px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 4;
  letter-spacing: 1px;
  text-align: center;
  color: #4c565c;
}

a{
  text-decoration: none;
  color: #4c565c;
}
.fa-instagram{
  color: #4c565c;
  font-size: 24px;
}

.section__flex__grid{
  margin-top: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.grid__container{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 100%;
}
.grid__container > figure{
  position: relative;
}

.grid__container__content figure > img{
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.grid__container > .grid__container__content:nth-of-type(7),
.grid__container > .grid__container__content:nth-of-type(8),
.grid__container > .grid__container__content:nth-of-type(9),
.grid__container > .grid__container__content:nth-of-type(10),
.grid__container > .grid__container__content:nth-of-type(11),
.grid__container > .grid__container__content:nth-of-type(12){
  display: none;
}



@media (min-width:1250px) {
  .instagram-container{
    margin-top: 100px;
    padding: 0;
    height: 20px;
  }

.section__flex__grid{
  margin-top: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.grid__container{
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  grid-template-rows: repeat(4, minmax(0, 1fr));
  width: 100%;
  height: 600px;
  border-radius: 0.5rem;
  margin-bottom: 2rem;
}

.grid__container > .grid__container__content:nth-of-type(1){
  grid-column: 1 / span 2;
  grid-row: span 2 ;
}

.grid__container > .grid__container__content:nth-of-type(2){
  grid-column: 3 / span 2;
  grid-row: 1 / span 2 ;
}
.grid__container > .grid__container__content:nth-of-type(3){
  grid-column: 5 / span 2;
  grid-row: 1 / span 2 ;
}

.grid__container > .grid__container__content:nth-of-type(4){
  grid-column: 7 / span 2;
  grid-row: 1/ span 2;
}
.grid__container > .grid__container__content:nth-of-type(5){
  grid-column: 9 / span 2;
  grid-row: 1/ span 2;
}
.grid__container > .grid__container__content:nth-of-type(6){
  grid-column: 11 / span 2;
  grid-row: 1/ span 2;
}
.grid__container > .grid__container__content:nth-of-type(7){
  grid-column: 1 / span 2;
  grid-row: 3 / span 2;
}
.grid__container > .grid__container__content:nth-of-type(8){
  grid-column: 3 / span 2;
  grid-row: 3 / span 2;
}
.grid__container > .grid__container__content:nth-of-type(9){
  grid-column: 5 / span 2;
  grid-row: 3 / span 2;
}

.grid__container > .grid__container__content:nth-of-type(10){
  grid-column: 7 / span 2;
  grid-row: 3 / span 2;
}

.grid__container > .grid__container__content:nth-of-type(11){
  grid-column: 9 / span 2;
  grid-row: 3 / span 2;
}

.grid__container > .grid__container__content:nth-of-type(12){
  grid-column: 11 / span 2;
  grid-row: 3 / span 2;
}

.grid__container > .grid__container__content:nth-of-type(7),
.grid__container > .grid__container__content:nth-of-type(8),
.grid__container > .grid__container__content:nth-of-type(9),
.grid__container > .grid__container__content:nth-of-type(10),
.grid__container > .grid__container__content:nth-of-type(11),
.grid__container > .grid__container__content:nth-of-type(12){
  display: block;
}


.grid__container__content {
  position: relative;
  overflow: hidden;
}
.grid__container > figure{
  position: relative;
}

.grid__container__content figure > img{
  height: 100%;
  width: 100%;
  object-fit: cover;
}
.grid__container__content .grid__container__content--overlay {
  background: var(--black);
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  opacity: 0;
  -webkit-transition: all 0.4s ease-in-out 0s;
  -moz-transition: all 0.4s ease-in-out 0s;
  transition: all 0.4s ease-in-out 0s;
}

.grid__container__content:hover .grid__container__content--overlay{
  opacity: 1;
}
.grid__container__content--details {
  position: absolute;
  text-align: center;
  top: 50%;
  left: 50%;
  opacity: 0;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  -webkit-transition: all 0.6s ease-in-out 0s;
  -moz-transition: all 0.6s ease-in-out 0s;
  transition: all 0.6s ease-in-out 0s;
}
}


figure{
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
}

.grid__container__content:hover .grid__container__content--details{
  top: 50%;
  left: 50%;
  opacity: 1;
}

</style>
