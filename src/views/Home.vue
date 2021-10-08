<template>


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
    
    <div class="row h-100 overflow-auto " >
      <div class="col-12 col-xl-6 col-sm-12 col-md-12 col-lg-6 col-xxl-6 pt-1 pb-2 p-md-0" id="profilebox">
        <div class="row h-100 ">
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
    

</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
export default {
  name: 'LandingPaage',
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