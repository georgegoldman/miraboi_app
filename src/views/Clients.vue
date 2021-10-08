<template>
  <div class=" row h-100 overflow-auto" >
    <div class="col-12 p-3 mt-5">
        <masonry
          :cols="{default: 6, 1000: 4, 700: 3, 400: 2}"
          :gutter="{default: '30px', 700: '15px'}"
          >
          <div v-for="client in items" :key="client.url" class="row" >
            <div class="dot my-1 col-3 col-12">
              <img v-lazy="client.url"
               class=" my-2 "
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
export default {
  name: 'About',
  data () {
    return {
      items: [
        {
          url: '../img/clients/image00001.jpeg',
          name: 'Dann Visbal',
          description: [
              {descp: 'Google branding'},
              {descp :'Wikipedia page'}
            ]
        },
        {
          url: '../img/clients/image00002.jpeg',
          name: 'Mery Racauchi',
          description: [
              {descp: 'Instagram Page verification'},
              {descp: 'Instagram Page verification'}
          ]
        },
        {
          url: '../img/clients/image00003.jpeg',
          name: 'Bella Shmurda',
          description: [
              {descp: 'Facebook Page Verification'}
          ]
        },
        {
          url: '../img/clients/image00004.jpeg',
          name: 'Ks1 Malaika',
          description: [
              {descp: 'Wikipedia Page'},
              {descp: 'Google Branding'},
              {descp: 'Facebook Page Verification.'},
              {descp: 'Instagram Page Verification.'},
          ]
        },
        {
          url: '../img/clients/image00005.jpeg',
          name: 'La Mafia',
          description: [
              {descp: 'Claim Instagram Inactive Username'}
          ]
        },
        {
          url: '../img/clients/image00006.jpeg',
          name: 'Toto Tamuz',
          description: [
              {descp: 'Instagram Page Verification'}
          ]
        },
        {
          url: '../img/clients/image00007.jpeg',
          name: 'Alahna Ly',
          description: [
              {descp: 'Instagram Page Verification'}
          ]
        },
        {
          url: '../img/clients/image00008.jpeg',
          name: 'Kevin Eze',
          description: [
              {descp: 'Wikipedia Page.'},
              {descp: 'Google Branding.'},
              {descp: 'Instagram Page Verification.'}
          ]
        },
        {
          url: '../img/clients/image00009.jpeg',
          name: 'Sean Tizzle',
          description: [
              {descp: 'Wikipedia Page Instagram Page Verification.'},
              {descp: 'Page Verification.'}
          ]
        }
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