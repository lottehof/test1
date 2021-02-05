<template lang="html">
  <div class="fourthscreen">
    <div class="modellen-header">
      <div class="model">
      <h2>Aluminium sportboten</h2>
      </div>
    </div>
    <div class="wrap">
    <div class="modellen-container">
      <div class="modellen-content">
        <figure>
          <img src="@/assets/img/haven.png" alt="haven" class="modellen-image">
        </figure>
        <div class="grey-box">

        </div>

      </div>
      <div class="modellen-content">
        <div class="modellen-title">
        <h2>Sloep D&amp;Ø crafter</h2>
        <h3>650 / 750 / 900 / 900+</h3>
          </div>
        <ul>
          <li class="list-items">Een blikvanger met klassieke lijnen</li>
          <li class="list-items">100% aluminium, 100% onderhoudsvrij</li>
          <li class="list-items">Zelflozend</li>
          <li class="list-items">Een stabiele sloep met een ruig karakter</li>
          <li class="list-items">Familie, party of weekendje weg</li>
        </ul>

      </div>
      <div class="modellen-content">
        <figure>
          <img src="@/assets/img/haven.png" alt="haven" class="modellen-image">
        </figure>

        <div class="grey-box-second">

        </div>

      </div>


      <div class="modellen-content">
        <div class="modellen-title">
        <h2>Sloep D&amp;ø Raptor</h2>
        <h3>650 / 750 / 900 / 900+</h3>
          </div>
        <ul>
          <li class="list-items">Een no-nonsens sloep met een opvliegend karakter</li>
          <li class="list-items">100% aluminium, 100% onderhoudsvrij</li>
          <li class="list-items">Zelflozend</li>
          <li class="list-items">Een stabiele sloep met een ruig karakter</li>
          <li class="list-items">Familie, party of weekendje weg</li>
        </ul>

      </div>

    </div>
    </div>
  </div>

</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
.fourthscreen{
  width: 100vw;
  height: auto;
  border: solid 1px #979797;
  background-color: #2a393f;
}

.grey-box{
  width: 80%;
  height: 100%;
  background-color: #5e686c;
  position: absolute;
  top: 18px;
  left: 22px;
  display: block;
  z-index: 0;

}
.grey-box-second{
  width: 80%;
  height: 100%;
  background-color: #5e686c;
  position: absolute;
  top: 18px;
  right: 18px;
  display: block;
  z-index: 1;
}
.modellen-content{
  position: relative;
}

.modellen-header > .model > h2{
  height: 21px;
  font-family: FuturaStd;
  font-size: 17px;
  font-weight: 500;
  text-transform: uppercase;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.02px;
  text-align: center;
  color: #ffffff;
  margin-bottom: 30px;
  margin-top: 30px;
}


.modellen-image{
  width: 80%;
  height: 100%;
  z-index: 2;
}

.modellen-title > h2{
  height: 22px;
  margin-top: 37px;
  margin-left: 3px;
  margin-bottom: 10px;
  font-family: FuturaStd;
  font-size: 17px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.02px;
  color: #ffffff;;
  text-transform: uppercase;
  text-align: center;
}

.modellen-title > h3{
  height: 16px;
  margin-left: 3px;
  margin-bottom: 20px;
  font-family: FuturaStd;
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.01px;
  text-align: center;
  color: #ffffff;;
}

ul{
  list-style: none;
  padding: 0;
}

li:before{
  content: "+";
  margin-right: 13px;

}
.list-items{
  width: 100%;
  margin-bottom: 16px;
  margin-left: 3px;
  font-family: FuturaStd;
  font-size: 10px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.71;
  letter-spacing: 2px;
  color: #ffffff;
  text-transform: uppercase;
  text-align: center;
}

.modellen-content:nth-of-type(2), .modellen-content:nth-of-type(4) {
  padding: 0 20px;
  margin-bottom: 35px;

}

figure{
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}

@media (min-width: 550px) {
  .grey-box{
    top: 20px;
    left: 48px;
  }
  .grey-box-second{
    top: 20px;
    right: 48px;
  }
  .modellen-header > .model > h2{
    font-size: 28px;
    margin-bottom: 60px;
    margin-top: 60px;
  }
  .list-items{
    font-size: 13px;
  }
  .modellen-title > h2{
    font-size: 20px;

  }

  .modellen-title > h3{
    font-size: 17px;

  }

}

/*Media queries*/

@media (min-width: 800px) {
  .grey-box{
    top: 20px;
    left: 48px;
  }
  .grey-box-second{
    top: 20px;
    right: 48px;
  }

}

@media (min-width: 1000px) {
  .grey-box{
    top: 35px;
    left: 75px;
  }
  .grey-box-second{
    top: 35px;
    right: 75px;

  }
  .modellen-content:nth-of-type(2), .modellen-content:nth-of-type(4) {
    margin-top: 50px;

  }
  .modellen-header > .model > h2{
    font-size: 30px;
    margin-bottom: 60px;
    margin-top: 60px;
  }
  .list-items{
    font-size: 20px;
  }
  .modellen-title > h2{
    font-size: 26px;
  }

  .modellen-title > h3{
    font-size: 24px;

  }

}

@media (min-width: 1400px) {

  .modellen-content:nth-of-type(2), .modellen-content:nth-of-type(4) {
    margin-top: 20px;

  }
.aluSloepen{
  width: 100vw;
  height: 1146px;
}
.grey-box{
  width: 90%;
  height: 100%;
  background-color: #5e686c;
  position: absolute;
  top: 48px;
  left: -22px;
  display: block;
  z-index: 1;

}
.grey-box-second{
  width: 90%;
  height: 100%;
  background-color: #5e686c;
  position: absolute;
  top: 48px;
  right: -35px;
  display: block;
  z-index: 1;
}

.modellen-header{
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
}

.model{
  width: 100%;
  text-align: center;
}

.modellen-header > .model > h2{
  height: 21px;
  font-family: FuturaStd;
  font-size: 21px;
  font-weight: 500;
  text-transform: uppercase;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.02px;
  text-align: center;
  color: #ffffff;
  margin-bottom: 77px;
  margin-top: 77px;
}

.modellen-image{
  width: 100%;
  height: 100%;
}
.modellen-title{
  display: flex;
  justify-content: left;

}
.modellen-title > h2{
  /* width: 250px;; */
  height: 22px;
  margin-top: 37px;
  margin-left: 0px;
  margin-bottom: 20px;;
  font-size: 22px;

}

.modellen-title > h3{
  width: 175px;
  height: 16px;
  margin-top: 43px;
  margin-left: 3px;
  margin-bottom: 20px;
  font-size: 16px;

}
ul{
  list-style: none;
  padding: 0;
}

li:before{
  content: "+";
  margin-right: 13px;

}
.wrap{
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
}
.list-items{
  width: 100%;
  margin-bottom: 16px;
  margin-left: 3px;
  font-family: FuturaStd;
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.71;
  letter-spacing: 2px;
  color: #ffffff;
  text-transform: uppercase;
  text-align: left;
}

.modellen-container{
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-template-rows: repeat(4, minmax(0, 1fr));
  width: 90vw;
  height: auto;
  border-radius: 0.5rem;
  grid-gap: 15px;
}
.modellen-content{
  max-width: 90vw;
}

.modellen-container > .modellen-content:nth-of-type(1){
  grid-column: 1 / span 2;
  grid-row: 1 / span 2 ;
}
.modellen-container > .modellen-content:nth-of-type(2){
  grid-column: 1 / span 2;
  grid-row: 3 / span 2 ;
}
.modellen-container > .modellen-content:nth-of-type(3){
  grid-column: 3 / span 2;
    grid-row: 1 / span 2 ;
}
.modellen-container > .modellen-content:nth-of-type(4){
  grid-column: 3 / span 2;
  grid-row: 3 / span 2 ;
}

.modellen-content:nth-of-type(2), .modellen-content:nth-of-type(4) {
  padding: 0px;
  margin-bottom: 0px;
}

}

@media (min-width:1401px) {
  .grey-box{
    width: 90%;
    height: 100%;
    top: 28px;
    left: -22px;
  }
  .grey-box-second{
    width: 90%;
    height: 100%;
    top: 28px;
    right: -35px;
  }

}

@media (min-width:1800px) {
  .grey-box{
    width: 760px;
    height: 444px;
    top: 78px;
    left: -22px;


  }
  .grey-box-second{
    width: 760px;
    height: 444px;
    top: 78px;
    right: -35px;

  }


}
</style>
