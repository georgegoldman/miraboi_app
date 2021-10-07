<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->

    <!-- <div class="page-container h-100 ">
      <md-app md-mode="reveal" class="h-100 row" >
        <md-app-toolbar class="md-primary" style="height: 5%">
          <md-button class="md-icon-button" @click="menuVisible = !menuVisible">
            <md-icon>menu</md-icon>
          </md-button>
          <span class="md-title">My Title</span>
        </md-app-toolbar>

        <md-app-drawer :md-active.sync="menuVisible">
          <md-toolbar class="md-transparent" md-elevation="0">Navigation</md-toolbar>

          <md-list>
            <md-list-item>
              <md-icon>move_to_inbox</md-icon>
              <span class="md-list-item-text"><router-link to="/">Home</router-link></span>
            </md-list-item>

            <md-list-item>
              <md-icon>send</md-icon>
              <span class="md-list-item-text"><router-link to="/about">About</router-link></span>
            </md-list-item>

            <md-list-item>
              <md-icon>delete</md-icon>
              <span class="md-list-item-text">Trash</span>
            </md-list-item>

            <md-list-item>
              <md-icon>error</md-icon>
              <span class="md-list-item-text">Spam</span>
            </md-list-item>
          </md-list>
        </md-app-drawer>

        <md-app-content style="height: 90%">
            <router-view/>
        </md-app-content>
      </md-app>
    </div> -->


    
    <div class="page-container md-layout-column h-100 row">
      <nav class="navbar fixed-top navbar-light ">
        <md-toolbar class="bg-transparent ">

        <div class="md-toolbar-section-end">
          <md-button @click="showSidepanel = true" class="md-icon-button">
            <md-icon>menu</md-icon>
          </md-button>
        </div>
      </md-toolbar>
      </nav>

      <md-drawer class="md-right" :md-active.sync="showSidepanel">
        <md-toolbar class="md-transparent" md-elevation="0">
          <span class="md-title">Menu</span>
        </md-toolbar>

        <md-list>
          <md-list-item>
            <md-icon>home</md-icon>
            <span class="md-list-item-text" style="cursor: pointer" ><h5 style="font-family: 'Limelight', cursive;"><md-button to="/">Home</md-button></h5></span>
          </md-list-item>

          <md-list-item>
            <md-icon>work</md-icon>
            <span class="md-list-item-text" style="cursor: pointer" ><h5 style="font-family: 'Limelight', cursive;"><md-button to="/about">Clients</md-button></h5></span>
          </md-list-item>

        <md-list-item>
          <md-icon>album</md-icon>
          <span class="md-list-item-text" style="cursor: pointer" v-on:click="redirect('https://ffm.bio/miraboi')" ><h5 style="font-family: 'Limelight', cursive;">Music Profile</h5></span>
        </md-list-item>

          <!-- <md-list-item>
            <span class="md-list-item-text">Mary Johnson</span>

            <md-button class="md-icon-button md-list-action">
              <md-icon>chat_bubble</md-icon>
            </md-button>
          </md-list-item> -->
        </md-list>
      </md-drawer>

      
      <router-view/>
     
    </div>

  </div>
</template>

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

  .page-container {
    overflow: hidden;
    position: relative;
    border: 1px solid rgba(#000, .12);
  }

  .md-drawer {
    width: 230px;
    max-width: calc(100vw - 125px);
  }

  .md-content {
    padding: 16px;
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
  text-decoration: none !important;
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

