<template>
  <div id="app">
    <div v-if='loading'>
      <h1>loading</h1>
    </div>
    <nav class="navbar fixed-top navbar-light ">
      <md-toolbar class="bg-transparent">
        <md-button class="md-icon-button" @click="showNavigation = true">
          <md-icon>menu</md-icon>
        </md-button>
        <!-- <span class="md-title">MIRABOI</span> -->

        <!-- <div class="md-toolbar-section-end">
          <md-button @click="showSidepanel = true">Favorites</md-button>
        </div> -->
      </md-toolbar>
    </nav>
    <md-drawer :md-active.sync="showNavigation" md-swipeable>
      <md-toolbar class="md-transparent" md-elevation="0">
        <span class="md-title ms-3 ps-5 pt-3" style="" >MENU</span>
      </md-toolbar>

      <md-list>
        <md-list-item>
          <md-icon>album</md-icon>
          <span class="md-list-item-text" style="cursor: pointer" v-on:click="redirect('https://ffm.bio/miraboi')" ><h5 style="font-family: 'Limelight', cursive;">Music Profile</h5></span>
        </md-list-item>

        
      </md-list>
    </md-drawer>

    <!-- <md-drawer class="md-right" :md-active.sync="showSidepanel">
      <md-toolbar class="md-transparent" md-elevation="0">
        <span class="md-title">Favorites</span>
      </md-toolbar>

      <md-list>
        <md-list-item>
          <span class="md-list-item-text">Abbey Christansen</span>

          <md-button class="md-icon-button md-list-action">
            <md-icon class="md-primary">chat_bubble</md-icon>
          </md-button>
        </md-list-item>

        <md-list-item>
          <span class="md-list-item-text">Alex Nelson</span>

          <md-button class="md-icon-button md-list-action">
            <md-icon class="md-primary">chat_bubble</md-icon>
          </md-button>
        </md-list-item>

        <md-list-item>
          <span class="md-list-item-text">Mary Johnson</span>

          <md-button class="md-icon-button md-list-action">
            <md-icon>chat_bubble</md-icon>
          </md-button>
        </md-list-item>
      </md-list>
    </md-drawer> -->
    
    <div class="row h-100">
      <div class="col-12 col-xl-6 col-sm-12 col-md-12 col-lg-6 col-xxl-6 pt-1 pb-2 p-md-0" id="profilebox">
        <div class="row h-100">
          <div class="col-12 bg-transparent" id="top-space"></div>
          <div class="col-12 bg-transparent col-sm-3 col-md-12" v-lazy-container="{ selector: 'img' }" id="profile_picture">
            <img class="rounded-circle" data-src="https://res.cloudinary.com/ukony/image/upload/v1632488132/MIRABOI/image00001_k603it.jpg" alt="" srcset="">
          </div>
          <div class="col-12 col-sm-9 col-md-12">
            <div class="row">
              <div class="col-12 bg-transparent" id="profile_name">
                <h3 class="xxl-sm pt- " style="font-family: 'Sacramento', cursive;"><b>Miraboi</b></h3>
                <p class="xxl-d" style="font-family: 'Sacramento', cursive;"><b>Miraboi</b></p>
              </div>
              <div class="col-12 bg-transparent" id="profile_detail" >
                <p class="pb-" style="font-family: 'Alike', serif; font-size: medium"><small>Welcome To The Official Website Of Miraboi</small></p>
              </div>
            </div>
          </div>
          <div class="col-12"></div>
        </div>
      </div>

      <div class="col-12 col-xl-6 col-sm-12 col-md-12 col-lg-6 col-xxl-6 pt-5 px-5" id="content" >
        <h3 class="" id="content-text" style="" >
          For Business & Enquiries Kindly Reach Out To Any Of The Social Media Profile Below.
        </h3>

        <!-- <?xml version="1.0" encoding="UTF-8" standalone="no"?> -->
        <i class="fas fa-caret-down my-5 fa-3x" id="arrow"></i>


        <div class="d-flex justify-content-evenly text animated bounce p-xxl-5 my-xxl-5" >

          <a href="https://twitter.com/miraboi"><i class="fab fa-3x fa-twitter"></i></a>

          <a href="https://www.facebook.com/Miraboiofficial"><i class="fab fa-3x fa-facebook"></i></a>

          <a href="https://www.instagram.com/miraboi"><i class="fab fa-3x fa-instagram"></i></a>

        </div>

        <div class="mt-md-4 my-5 animated pulse">
          <a class="  text  " href="mailto:info@miraboi.com"  style="font-family: 'Mrs Saint Delafield', cursive; "><h1>Email Me</h1></a>
        </div>

      </div>
    </div>
    
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  data () {
    return {
      loading: false,
      showNavigation: false,
      showSidepanel: false
    }
  },
  components: {},
  beforeCreate(){
    this.loading = true
    window.console.log('loading')
 },
 mounted(){
    this.loading = false
  },
  methods: {
    redirect(url) {
      window.open(""+url)
    }
  }
}
</script>

<style>
html, body {
  height: 100%
}
body{
  /* background-image: linear-gradient(to right, red, yellow, green); */
  background-color: black;
  color: white;
  /* animation: mymove 5s infinite; */
}

.md-elevation-4{
  box-shadow: none !important;
}

@keyframes mymove {
  from {background-image: linear-gradient(to right, rgb(77, 33, 33), rgb(49, 49, 11), rgb(15, 70, 15));}
  to {background-image: linear-gradient(to right, green, red, yellow);}
}

/* text animation */
.animated {
  animation-duration: 2.5s;
  animation-fill-mode: both;
  animation-iteration-count: infinite;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {transform: translateY(0);}
  40% {transform: translateY(-30px);}
  60% {transform: translateY(-15px);}
}

.bounce {
  animation-name: bounce;
}

@keyframes wobble {
  0% {transform: translateX(0%);}
  15% {transform: translateX(-25%) rotate(-5deg);}
  30% {transform: translateX(20%) rotate(3deg);}
  45% {transform: translateX(-15%) rotate(-3deg);}
  60% {transform: translateX(10%) rotate(2deg);}
  75% {transform: translateX(-5%) rotate(-1deg);}
  100% {transform: translateX(0%);}
}
.wobble {
  animation-name: wobble;
}

@keyframes pulse {
  0% {transform: scale(1);}
  50% {transform: scale(1.1);}
  100% {transform: scale(1);}
}
.pulse {
  animation-name: pulse;
  animation-duration: 1s;
}

/* animate the arrow */
 #arrow {
  animation: color-change 0.3s infinite;
}

@keyframes color-change {
  0% { color: green; }
  50% { color: white; }
  100% {color: green }
}

#profilebox{
  background-color: rgba(28, 28, 28, 0.658);
}

a{
  color: #fff !important;
  text-decoration: none
}

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px)
and (orientation: portrait)
 {
   #top-space{
     height: 15%;
   }
   #profile_picture{
     height: 50%;
   }
   #profile_picture > img {
     height: 100%;
   }
   #profile_name{
     height: 10%;
   }
   #profile_detail{
     height: 10%;
   }
    #profilebox{
      height: 31% ;
    }
    #content{
      height: 69%
    }
    #profile_detail > p {
      font-size: small;
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
@media only screen and (max-width: 600px) 
and (orientation: landscape)
 {
   #top-space{
     height: 15%;
   }
   #profile_picture{
     height: 50%;
   }
   #profile_picture > img {
     height: 100%;
   }
   #profile_name{
     height: 10%;
   }
   #profile_detail{
     height: 10%;
   }
    #profilebox{
      height: 50% ;
    }
    #content{
      height: 50%
    }
    #profile_detail > p {
      font-size: small;
    }
    #content-text{
      font-size: large;
      text-align: left; 
    }
    .xxl-d{
      display: none;
    }
}

@media only screen and (min-width: 600px) 
and (orientation: landscape)
 {
   #top-space{
     height: 15%;
   }
   #profile_picture{
     height: 80%;
   }
   #profile_picture > img {
     height: 100%;
   }
   #profile_name{
     height: 10%;
     text-align: left;
   }
   #profile_detail{
     height: 10%;
     text-align: left;
   }
    #profilebox{
      height: 40% ;
    }
    #content{
      height: 60%
    }
    #profile_detail > p {
      font-size: small;
    }
    #content-text{
      font-size: large;
      text-align: left; 
    }
    .xxl-d{
      display: none;
    }
}

/* Medium devices (landscape tablets, 768px and up) */
/* @media only screen and (min-width: 320px)
and (orientation: landscape) {


    #profile_pix{
      width: 27% !important;
      height: 27% !important;
    }
  #profilebox{
    height: 40% ;
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

} */

@media only screen and (min-width: 768px)
and (orientation: portrait) 
 {
   #top-space{
     height: 15%;
   }
   #profile_picture{
     height: 50%;
   }
   #profile_picture > img {
     height: 100%;
   }
   #profile_name{
     height: 10%;
   }
   #profile_detail{
     height: 10%;
   }
    #profilebox{
      height: 31% ;
    }
    #content{
      height: 69%
    }
    #profile_detail > p {
      font-size: small;
    }
    #content-text{
      font-size: large;
      text-align: left; 
    }
    .xxl-d{
      display: none;
    }
}

@media only screen and (min-width: 768px)
and (orientation: landscape) 
 {
   #top-space{
     height: 15%;
   }
   #profile_picture{
     height: 50%;
   }
   #profile_picture > img {
     height: 100%;
   }
   #profile_name{
     height: 10%;
     text-align: center;
   }
   #profile_detail{
     height: 10%;
     text-align: center;
   }
    #profilebox{
      height: 50% ;
    }
    #content{
      height: 50%
    }
    #profile_detail > p {
      font-size: small;
    }
    #content-text{
      font-size: large;
      text-align: center; 
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
