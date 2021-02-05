<template lang="html">
  <div class="information-boxes">
    <div class="information-box-content">
      <figure>
        <a href="#"><img src="@/assets/img/nieuws.jpg" alt="nieuws"></a>
        <figcaption><a href="#">Nieuws</a></figcaption>
      </figure>


    </div>
    <div class="information-box-content">
      <figure>
      <a href="#"><img src="@/assets/img/winterstalling.png" alt="Winterstalling"></a>
      <figcaption><a href="#">Winterstalling</a></figcaption>
      </figure>


    </div>
    <div class="information-box-content">
      <figure>
        <a href="#"><img src="@/assets/img/occasion.jpg" alt="Occasions"></a>
        <figcaption><a href="#">Occasions</a></figcaption>
      </figure>


    </div>
    <div class="information-box-content">
      <figure>
          <a href="#"><img src="@/assets/img/werf.jpeg" alt="De werf"></a>
          <figcaption><a href="#">De Werf</a></figcaption>
      </figure>


    </div>

  </div>


</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
img{
  width: 100%;
  height: 300px;
  padding: 10px 20px;
}
figure{
  width: 100%;
}
figcaption{
  text-transform: uppercase;
  font-family: FuturaStd;
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.02px;
  color: #3d4333;
  padding: 0px 20px;
}
a{
  color: #3d4333;
  text-decoration: none;
}

.information-boxes{
  margin-top: 20px;
  margin-bottom: 20px;
  width: 100%;
}

@media (min-width: 768px) {
  .information-boxes{
    height: auto;
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    grid-template-rows: repeat(2, minmax(0, 1fr));
    grid-gap: 8px;
  }
  .information-boxes > .information-box-content:nth-of-type(1){
    grid-column: 1 / span 2;
    grid-row: 1 / span 2;

  }
  .information-boxes > .information-box-content:nth-of-type(2){
    grid-column: 3 / span 2;
    grid-row: 1 / span 2

  }
  .information-boxes > .information-box-content:nth-of-type(3){
    grid-column: 1 / span 2;
    grid-row: 2 / span 2

  }
  .information-boxes > .information-box-content:nth-of-type(4){
    grid-column: 3 / span 2;
    grid-row: 2 / span 2

  }

  .information-box-content{
    max-width: 447px;
    height: 300px;
    margin-top: 41px;
    margin-left: auto;
    margin-right: auto;
  }

}

@media (min-width: 1520px) {
.information-boxes{
  height: 400px;
  width: 100%;
  /* margin: 0px 54px; */
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-template-rows: repeat(1, minmax(0, 1fr));
  grid-gap: 8px;
  margin-bottom: 100px;
}
img{
  width: 100%;
  height: 300px;
}
.information-box-content{
  width: 100%;
  height: 300px;
  margin-top: 41px;
}
.information-boxes > .information-box-content:nth-of-type(1){
  grid-column: 1 / span 1;
  grid-row: 1;

}
.information-boxes > .information-box-content:nth-of-type(2){
  grid-column: 2 / span 1;
  grid-row: 1;

}
.information-boxes > .information-box-content:nth-of-type(3){
  grid-column: 3 / span 1;
  grid-row: 1;

}
.information-boxes > .information-box-content:nth-of-type(4){
  grid-column: 4 / span 1;
  grid-row: 1;
}
figcaption{
  text-transform: uppercase;
  font-family: FuturaStd;
  font-size: 22px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.02px;
  margin-top: 20px;
  color: #3d4333;

}
}
</style>
