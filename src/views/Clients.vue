<template>
  <div class=" row h-100 overflow-auto" >
    <div class="col-12 py-4 px-3 mt-5">
        <masonry
          :cols="{default: 6, 1000: 4, 700: 3, 400: 2}"
          :gutter="{default: '30px', 700: '15px', 400: '30px'}"
          >
          <div v-for="client in items" :key="client.url" class="row" >
            <div class="px-1 rounded-3 pt-0 my-1  col-12 border-light border ">
              <img v-lazy="client.url"
               class=" my-1 "
               style="border-radius: 7px;"
                alt="">
                <p style="font-family: 'Birthstone', cursive;" id="client_name" >{{client.name}}
                </p>
                <p id="work_dscp" class="" style="font-family: 'Comfortaa', cursive; ">
                    <ul v-for="work in client.description" :key="work" style="text-align: left" >
                        <li>{{work.descp}}</li>
                    </ul>
                </p>
                
            </div>
          </div>
        </masonry>
    </div>
  </div>
</template>


<script>

// on js
export default {
  name: 'About',
  data () {
    return {
      items: [
        {
          url: '../img/clients/image00001.jpeg',
          name: 'Dann Visbal',
          description: [
              {descp: 'Google Branding.'},
              {descp :'Wikipedia Page.'}
            ]
        },
        {
          url: '../img/clients/image00002.jpeg',
          name: 'Mery Racauchi',
          description: [
            {descp: 'Google Branding.'},
              {descp: 'Facebook Page verification.'},
              {descp: 'Instagram Page verification.'},
          ]
        },
        {
          url: '../img/clients/image00003.jpeg',
          name: 'Bella Shmurda',
          description: [
              {descp: 'Facebook Page Verification.'}
          ]
        },
        {
          url: '../img/clients/image00004.jpeg',
          name: 'Ks1 Malaika',
          description: [
            {descp: 'Google Branding.'},
              {descp: 'Wikipedia Page.'},
              {descp: 'Facebook Page Verification.'},
              {descp: 'Instagram Page Verification.'},
          ]
        },
        {
          url: '../img/clients/image00005.jpeg',
          name: 'La Mafia',
          description: [
              {descp: 'Claim Instagram Inactive Username.'}
          ]
        },
        {
          url: '../img/clients/image00006.jpeg',
          name: 'Toto Tamuz',
          description: [
              {descp: 'Instagram Page Verification.'}
          ]
        },
        {
          url: '../img/clients/image00007.jpeg',
          name: 'Alahna Ly',
          description: [
              {descp: 'Instagram Page Verification.'}
          ]
        },
        {
          url: '../img/clients/image00008.jpeg',
          name: 'Kelvin Eze',
          description: [
            {descp: 'Google Branding.'},
              {descp: 'Wikipedia Page.'},
              {descp: 'Instagram Page Verification.'},
              {descp: 'Claim Facebook Page unavailable username'}
          ]
        },
        {
          url: '../img/clients/image00009.jpeg',
          name: 'Sean Tizzle',
          description: [
            {descp: 'Google Branding.'},
              {descp: 'Wikipedia Page '},
              {descp: 'Instagram Page Verification.'},

          ]
        },
        {
          url: '../img/clients/image00010.jpeg',
          name: 'Mr Real',
          description: [
            {descp: 'Google Branding.'},
              {descp: 'Wikipedia Page '},
          ]
        },
        {
          url: '../img/clients/image00011.jpeg',
          name: 'Eniola Badmus',
          description: [
              {descp: 'Instagram Page Verification.'},

          ]
        },
        {
          url: '../img/clients/image00012.jpeg',
          name: 'Cynthia Morgan',
          description: [
            {descp: 'Google Branding.'},
              {descp: 'Wikipedia Page '},
              {descp: 'Twitter Page Verification.'},
              {descp: 'Instagram Page Verification.'},

          ]
        },
        {
          url: '../img/clients/image00013.jpeg',
          name: 'African Food Network',
          description: [
            {descp: 'Google Branding.'},
              {descp: 'Wikipedia Page'},
              {descp: 'Facebook Page Verification.'},
              {descp: 'Instagram Page Verification.'},

          ]
        },
        {
          url: '../img/clients/image00014.jpeg',
          name: 'P Clothing',
          description: [
            // {descp: 'Google Branding.'},
              // {descp: 'Wikipedia Page '},
              {descp: 'Facebook Page Verification.'},

          ]
        },
        {
          url: '../img/clients/image00015.png',
          name: 'Aje Filmworks',
          description: [
            {descp: 'Google Branding.'},
              {descp: 'Wikipedia Page '},

          ]
        },
        {
          url: '../img/clients/image00016.jpeg',
          name: 'Dj Bally',
          description: [
            {descp: 'Google Branding.'},
              {descp: 'Wikipedia Page '},
              {descp: 'Twitter Page Verification.'},
              // {descp: 'Instagram Page Verification.'},
              {descp: 'Facebook Page Verification.'},

          ]
        },
        // {
        //   url: '../img/clients/image00017.jpeg',
        //   name: 'The Sinstress',
        //   description: [
        //     {descp: 'Google Branding.'},
        //   ]
        // },
        {
          url: '../img/clients/image00018.jpeg',
          name: 'Zoro',
          description: [
            {descp: 'Google Branding.'},
              {descp: 'Wikipedia Page '},

          ]
        },
        {
          url: '../img/clients/image00019.jpeg',
          name: 'Small Doctor',
          description: [
            // {descp: 'Google Branding.'},
              {descp: 'Twitter Page Verification '},

          ]
        },
        {
          url: '../img/clients/image00020.jpeg',
          name: 'Hg2 Films',
          description: [
            {descp: 'Google Branding.'},
              {descp: 'Twitter Page Verification '},

          ]
        },
        {
          url: '../img/clients/image00021.jpeg',
          name: 'Fliptyce',
          description: [
            // {descp: 'Google Branding.'},
              {descp: 'Twitter Page Verification '},

          ]
        },
        {
          url: '../img/clients/image00023.jpeg',
          name: 'Guchi',
          description: [
            // {descp: 'Google Branding.'},
              // {descp: 'Twitter Page Verification '},
              {descp: 'Wikipedia Page '},

          ]
        },
        {
          url: '../img/clients/image00024.jpeg',
          name: 'Mc Lively',
          description: [
            // {descp: 'Google Branding.'},
              // {descp: 'Twitter Page Verification '},
              // {descp: 'Wikipedia Page '},
              {descp: 'Instagram Page Verification.'},

          ]
        },
        // {
        //   url: '../img/clients/image00022.jpeg',
        //   name: 'Isoko Boy',
        //   description: [
        //     {descp: 'Google Branding.'},
        //       {descp: 'Wikipedia Page'},

        //   ]
        // },
        // {
        //   url: 'https://res.cloudinary.com/ukony/image/upload/v1634260608/MIRABOI/clients/Rudy_Bundini_g7pwki.jpg',
        //   name: 'Rudy Bundini',
        //   description: [
        //     {descp: 'Google Branding.'},
        //       {descp: 'Wikipedia Page'},

        //   ]
        // }
      ],
    }
  }
}
</script>

<style>
.dot > img {
  
  /* height: 462px !important; */
}
#work_dscp {
  font-size: 1.4vh ;
  /* text-overflow: ellipsis; */
  /* white-space: nowrap; */
  /* overflow: hidden; */
}
#client_name{
  font-size: 2.8vh;
  font-weight: bold;
}
</style>