<template lang="html">
  <div class="history">
    <div class="quote">
      <h1 class="quote-text">Ontstaan, ontworpen en ontwikkeld in Amsterdam. </br> Davy & Ørsted een merk met een Amsterdamse heritage en Scandinavische uitstraling.</h1>
    </div>

    <div class="history-container">
      <div class="history-content">
        <figure>
          <img src="@/assets/img/haven.png" alt="haven" class="history-image">
        </figure>

      </div>

      <div class="history-content">
        <div class="history-text">
          <p>Op de werf in Amsterdam werd in 2005 de eerste zelf ontworpen aluminium sloep gebouwd naar idee van Tim Klijn,
            Tiddo Sijpkens en Gerard Kellerman. Het moest een sloep worden die onderhoudsarm en zelflozend moest zijn.
            Een sloep waar je lekker mee door te grachten kan varen en op open water het gas open kan gooien om erachter te kunnen waterskiën.
            Waar je de kussens droog in kan opbergen en een dekzeil overbodig is. Een sloep met een stoere en toch chique uitstraling.
            Kortom, een sloep waar iedereen zijn hoofd voor omdraait als deze langs vaart.
            De ontwikkeling en ook de bouw werd volledig op de werf in Amsterdam gedaan. In 2006 werd de eerste Davy&amp;Ørsted boot te water gelaten.
            De eerste (FIRST geheten) is nog tijdens de bouw verkocht. Ook de 2de sloep werd al tijdens de bouw verkocht en was de eerste matzwarte sloep op de Nederlandse markt.
          </p>
            <p>De heren waren al enige tijd bekend met het maken van aluminium boten en hebben met Davy&amp;Ørsted de moderne botenwereld om zijn kop gezet.
            Ze waren het eerste merk met een sloep van aluminium en toen ze een jaar later met een matzwarte sloep op de Hiswa kwamen te staan, was
            het duidelijk, Davy&amp;Ørsted schrijft geschiedenis als grondlegger van de matzwarte aluminium sloep! <a href="#">
             LEES MEER > </a>
            </p>

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

.history{
  width: 100vw;
  height: auto;
  margin-bottom: 30px;
}
.quote{
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 55px;
  margin-top: 35px;
  width: 90%;
  height: auto;
  margin-left: auto;
  margin-right: auto;
}
.quote-text{
  width: 100%;
  height: 82px;
  font-family: Baskerville;
  font-size: 20px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #3e4b51;
}
.history-image{
  width: 100%;
}

.history-text{
  width: 100%;
  height: auto;
  padding: 16px 20px 20px 30px;
  font-family: FuturaStd;
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.43;
  letter-spacing: normal;
  color: #3e4b51;
}

.history-text > p {
  padding-bottom: 25px;
}

figure{
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
}

a{
  color: #3e4b51;
  text-decoration: none;
}
.history-container{
  width: 100vw;
  height: auto;
  background-color: rgba(203, 203, 197, 0.4);
  border-radius: 0.5rem;
}

@media (min-width: 500px) {
  .quote{
    margin-bottom: 5px;
    margin-top: 45px;
  }

}

@media (min-width: 1300px) {
  .quote-text{
    font-size: 30px;
  }
  .quote{
    margin-bottom: 25px;
    margin-top: 65px;
  }

}

@media (min-width: 1600px) {
  .history-container{
    width: 100vw;
    height: 665px;
    background-color: rgba(203, 203, 197, 0.4);
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    border-radius: 0.5rem;
    margin-bottom: 2rem;
  }

  .history-content:nth-of-type(1){
    grid-column: 1 / span 3;
  }
  .history-content:nth-of-type(2){
    grid-column: 4 / span 2;
  }
  .history-text{
    width: 100%;
    height: auto;
    padding: 32px 40px 40px 63px;
    font-family: FuturaStd;
    font-size: 14px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.43;
    letter-spacing: normal;
    color: #3e4b51;
  }
  .history-image{
    width: 100%;
    height: 665px;
  }
  .quote-text{
    width: 100vw;
  height: 82px;
  font-size: 40px;
  }
  .quote{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 80px;
    margin-top: 85px;
    width: 100vw;
  }

}

@media (min-width: 1700px) {
  .history-container{
    width: 100vw;
    height: 665px;
    background-color: rgba(203, 203, 197, 0.4);
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    border-radius: 0.5rem;
    margin-bottom: 2rem;
  }

  .history-content:nth-of-type(1){
    grid-column: 1 / span 3;
  }
  .history-content:nth-of-type(2){
    grid-column: 4 / span 2;
  }
  .history-image{
    width: 100%;
    height: 665px;
  }
  .history-text{
    width: 679px;
    height: 665px;
    padding: 32px 40px 40px 63px;
    font-family: FuturaStd;
    font-size: 14px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.43;
    letter-spacing: normal;
    color: #3e4b51;
  }
  .quote-text{
    width: 100vw;
  height: 82px;
  font-size: 46px;
  }
}
</style>
