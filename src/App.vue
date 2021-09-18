<template>
  <div id="app">

    <div class="row h-100">
      <div class="col-12 col-xl-6 col-sm-12 col-md-12 col-lg-6 col-xxl-6 pt-1 pb-2 p-md-0" id="profilebox">

        <div class="pt-4 p-md-0" id="profileText">
          <img src="https://scontent.fabb1-2.fna.fbcdn.net/v/t1.6435-9/237272282_370510311298178_5353209160180182899_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeFfOJ6gBGr-BbkFZyaQPHnRcVO0RwAe5VVxU7RHAB7lVViLELeWZoFPzFAzuYAS9DVpzRYtkHFOo0ynrbE7g3es&_nc_ohc=4utWBdiJEu8AX8FP10W&_nc_ht=scontent.fabb1-2.fna&oh=2f7412bed0e310054349a1ee1235d14d&oe=6167231B" id="profile_pix" class="rounded-circle p-xxl-5 p-lg-5 p-md-3 p-xl-5" alt="" srcset="">
          <h4 class="xxl-sm mt-2 " style="font-family: 'Sacramento', cursive;"><b>Miraboi</b></h4>
          <p class="xxl-d" style="font-family: 'Sacramento', cursive;"><b>Miraboi</b></p>
          <p class=""><small>This Is The Official Website Of Miraboi</small></p>
        </div>
        
      </div>

      <div class="col-12 col-xl-12 col-sm-12 col-md-12 col-lg-6 col-xxl-6 pt-5 px-3" id="content" >
        <p class="" id="content-text" style="font-family: 'Alike', serif;" >
          For Business & Enquiries Kindly Reach Out To Any Of The Social Media Profile Below.
        </p>

        <img src="../public/img/right.svg" class="p-2 my-md-5 mt-3" id="arrow" alt="" srcset="">

        <div class="d-flex justify-content-evenly p-xxl-5 my-xxl-5" >

          <a href="https://twitter.com/miraboi"><i class="fab fa-3x fa-twitter"></i></a>

          <a href="https://www.facebook.com/Miraboiofficial"><i class="fab fa-3x fa-facebook"></i></a>

          <a href="https://www.instagram.com/miraboi"><i class="fab fa-3x fa-instagram"></i></a>

        </div>

        <h1 class="mt-md-4 my-5 " style="font-family: 'Mrs Saint Delafield', cursive;">Contact Me</h1>

      </div>
    </div>
    
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {}
}
</script>

<style>
html, body {
  height: 100%
}
body{
  background-color: #000;
  color: white;
}
#profilebox{
  background-color: rgb(28, 28, 28);
}

a{
  color: #fff !important;
  text-decoration: none
}

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px)
and (orientation: portrait)
 {
  #profile_pix{
      width: 30% !important;
      height: 30% !important;
    }
  #profilebox{
    height: 31% !important;
  }
  #content{
    height: 69%
  }
  #arrow{
    height: 40%;
    width: 30%
  }
  #content-text{
    font-size: large;
    text-align: left; 
  }
  .xxl-d{
    display: none;
  }
}

/* Extra small devices (phones, 600px and down) */
@media only screen and (min-width: 600px) 
and (orientation: landscape)
{
  #profile_pix{
      width: 20% ;
      height: 20%;
    }
  #profilebox{
    height: 70%;
  }
  #content{
    height: 69%
  }
  #arrow{
    height: 40%;
    width: 40%
  }
  #content-text{
    font-size: large;
    text-align: left; 
  }
  .xxl-d{
    display: none;
  }
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) 
  and (orientation: portrait)
{
  #profile_pix{
      width: 40%;
      height: 40%
    }

    #profilebox{
    height: 45% !important;
  }
  #content{
    height: 6%
  }
  .xxl-d{
    display: none;
  }
    
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px)
and (orientation: landscape) {


    #profile_pix{
      width: 27% !important;
      height: 27% !important;
    }
  #profilebox{
    height: 50% !important;
  }
  #content{
    height: 60%;
  }
  #arrow{
    height: 25%;
    width: 25%
  }
  #content-text{
    font-size: large
  }
  .xxl-d{
    display: none;
  }

}

@media only screen and (min-width: 768px)
and (orientation: portrait) {


    #profile_pix{
      width: 15% !important;
      height: 15% !important;
    }
  #profilebox{
    height: 50% !important;
  }
  #content{
    height: 60%;
  }
  #arrow{
    height: 25%;
    width: 25%
  }
  #content-text{
    font-size: large
  }
  .xxl-d{
    display: none;
  }

}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
    #profile_pix{
      width: 80%;
    }
    .xxl-d{
      display: none
    }
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1024px) {
  #profile_pix{
        width: 80% !important;
        height: 80% !important;
      }
    #profilebox{
      height: 100% !important;
    }
    #content{
      height: 100%;
      font-size: xx-large
    }
    #arrow{
      height: 25%;
      width: 25%
    }
    #content-text{
      font-size: x-large
    }
    .xxl-d{
      display: none
    }
}

@media only screen and (min-width: 2560px) {
  #profile_pix{
        width: 100% !important;
        height: 100% !important;
      }
    #profilebox{
      height: 100% !important;
    }
    #content{
      height: 100%;
      font-size: xx-large
    }
    #arrow{
      height: 25%;
      width: 25%
    }
    #content-text{
      font-size: 3rem
    }
    #profileText, #profile_text > h4{
      font-size: 5rem !important;
    }
    .xxl-d{
      display: inline-block;
    }
    .xxl-sm{
      display: none
    }
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100%;
}
</style>
