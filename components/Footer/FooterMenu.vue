<template lang="html">
  <div class="wrapper">


      <div class="footer-menu-container">
          <div class="footer-menu">
            <div class="col_1">
               <div class="title">
                 Sign up for our newsletter
               </div>
               <form>

              <div class="group">
                <input type="text" required>
                <span class="highlight"></span>
                <span class="bar"></span>
                <label>First name</label>
              </div>

              <div class="group">
                <input type="text" required>
                <span class="highlight"></span>
                <span class="bar"></span>
                <label>Email address</label>
              </div>

            </form>

            </div>
             <div class="col_2">
                <div class="title">
                  Algemeen
                </div>
                <ul>
                  <li><a href="#">Werf</a></li>
                  <li><a href="#">Occasions</a></li>
                  <li><a href="#">Contact</a></li>
                  <li><a href="#">Other things</a></li>
                </ul>
             </div>
             <div class="col_3">
               <div class="title">
                  Boten
                </div>
                <ul>
                  <li><a href="#">Moon</a></li>
                  <li><a href="#">Rasor</a></li>
                  <li><a href="#">Alu</a></li>
                  <li><a href="#">Items</a></li>
                </ul>
             </div>
             <div class="col_4">
               <div class="title">
                  About
                </div>
                <ul>
                  <li><a href="#">Moon</a></li>
                  <li><a href="#">Rasor</a></li>
                  <li><a href="#">Alu</a></li>
                  <li><a href="#">Items</a></li>
                </ul>
             </div>
             <div class="col_5">
               <div class="title">
                  Contact
                </div>
                <ul>
                  <li><a href="#">+31(6)53244451</a></li>
                  <li><a href="#">info@davy-orsted.nl</a></li>
                  <li><a href="#">Davy 	&amp; Orsted</a></li>
                  <li><a href="#">Boeierspad 24, 1081 KE Amsterdam Netherlands</a></li>
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
.wrapper .navbar {
  background: #222222;
  height: 65px;
  display: flex;
  justify-content: space-between;
  padding: 0 50px;
  align-items: center;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
}

.footer-menu-container{
   padding: 0 30px;
   margin-top: 30px;
}
.col_1{
  max-width: 600px;
}

/* .footer-menu-container .footer-menu{
  display: flex;
  margin-bottom: 20px;
  justify-content: space-between;
  margin-right: 290px;
} */

.footer-menu-container .footer-menu .title{
 height: 40px;
 font-family: Baskerville;
 font-size: 21px;
 font-weight: normal;
 font-stretch: normal;
 font-style: normal;
 line-height: 1.52;
 letter-spacing: normal;
 color: #4c565c;
}

.footer-menu-container .footer-menu ul li a{
  height: 260px;
  font-family: FuturaStd;
  font-size: 15px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.4;
  letter-spacing: 1px;
  color: #acadaf;
}
ul{
  width: 200px;
}

.footer-menu-container .footer-menu ul li a:hover{
  text-decoration: underline;
}
.footer-menu-container a  { color:#53B2C8; }

/* form starting stylings ------------------------------- */
.group 			  {
  position:relative;
  margin-bottom:20px;


}
input 				{
  font-size:18px;
  padding:10px 10px 10px 5px;
  display:block;
  width:200px;
  border:none;
  border-bottom:1px solid rgba(217, 216, 214, 0.5);
}
input:focus 		{ outline:none; }

/* LABEL ======================================= */
label 				 {
  color: rgba(217, 216, 214, 0.5);;
  font-size:18px;
  font-family: FuturaStd;
  font-weight:normal;
  position:absolute;
  pointer-events:none;
  left:5px;
  top:10px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.78;
  letter-spacing: normal;
}

/* BOTTOM BARS ================================= */
.bar 	{ position:relative; display:block; width:300px; }
.bar:before, .bar:after 	{
  content:'';
  height:2px;
  width:0;
  bottom:1px;
  position:absolute;

}
.bar:before {
  left:50%;
}
.bar:after {
  right:50%;
}

/* active state */
input:focus ~ .bar:before, input:focus ~ .bar:after {
  width:50%;
}

/* HIGHLIGHTER ================================== */
.highlight {
  position:absolute;
  height:60%;
  width:100px;
  top:25%;
  left:0;
  pointer-events:none;
  opacity:0.5;
}

.footer .social_media{
  color: #adadad;
}

.footer-menu{
 display: grid;
 grid-template-columns: repeat(6, minmax(0, 1fr));
 grid-template-rows: repeat(5, minmax(0, 1fr));
 width: 100%;
 margin-bottom: 20px;
}
.footer-menu > .col_1{
 grid-column: 1 / span 5;
 grid-row: 1;

}

.footer-menu > .col_2{
 grid-column: 1 / span 5;
 grid-row: 2;

}
.footer-menu > .col_3{
 grid-column: 1 / span 5;
 grid-row: 3;

}

.footer-menu > .col_4{
 grid-column: 1 / span 5;
 grid-row: 4;

}

.footer-menu > .col_5{
 grid-column: 1 / span 5;
 grid-row: 5;

}

@media (min-width: 750px) {
  .footer-menu{
   display: grid;
   grid-template-columns: repeat(6, minmax(0, 1fr));
   grid-template-rows: repeat(3, minmax(0, 1fr));
   width: 100%;
   margin-bottom: 20px;
  }

  .footer-menu > .col_1{
   grid-column: 1 / span 3;
   grid-row: 1;

  }

  .footer-menu > .col_2{
   grid-column: 4 / span 1;
   grid-row: 1;

  }
  .footer-menu > .col_3{
   grid-column: 1 / span 1;
   grid-row: 2;

  }

  .footer-menu > .col_4{
   grid-column: 4 / span 1;
   grid-row: 2;

  }

  .footer-menu > .col_5{
   grid-column: 1 / span 5;
   grid-row: 3;

  }
}

@media (min-width:1200px) {
  .footer-menu{
   display: grid;
   grid-template-columns: repeat(6, minmax(0, 1fr));
   grid-template-rows: repeat(2, minmax(0, 1fr));
   width: 100%;
   margin-bottom: 20px;
  }

  .footer-menu > .col_1{
   grid-column: 1 / span 3;
   grid-row: 1;

  }

  .footer-menu > .col_2{
   grid-column: 1 / span 1;
   grid-row: 2;

  }
  .footer-menu > .col_3{
   grid-column: 2 / span 1;
   grid-row: 2;

  }

  .footer-menu > .col_4{
   grid-column: 3 / span 1;
   grid-row: 2;

  }

  .footer-menu > .col_5{
   grid-column: 4 / span 1;
   grid-row: 2;

  }

}

@media (min-width: 1600px) {
  .footer-menu{
   display: grid;
   grid-template-columns: repeat(6, minmax(0, 1fr));
   grid-template-rows: repeat(1, minmax(0, 1fr));
   width: 100%;
   margin-bottom: 20px;
  }

  .footer-menu > .col_1{
   grid-column: 1 / span 2;
   grid-row: 1;

  }

  .footer-menu > .col_2{
   grid-column: 3 / span 1;
   grid-row: 1;

  }
  .footer-menu > .col_3{
   grid-column: 4 / span 1;
   grid-row: 1;

  }

  .footer-menu > .col_4{
   grid-column: 5 / span 1;
   grid-row: 1;

  }

  .footer-menu > .col_5{
   grid-column: 6 / span 1;
   grid-row: 1;

  }
}

</style>
