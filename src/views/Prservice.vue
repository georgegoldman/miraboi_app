<template>
    <div class=" row h-100 overflow-auto" >
        
        <div v-for="service in services" :key="service.name" class="col-12 col-xl-4 col-sm-12 col-lg-6 col-xxl-4 col-md-6  py-4 px-3 mt-5">
            <div class="row g-2" >
                <md-card class="md-primary " md-theme="orange-card" md-with-hover>
                    <md-ripple>
                        <md-card-header>
                        <div class="md-title">{{service.name}}</div>
                        <!-- <div class="md-subhead">With hover and ripple effects</div> -->
                        </md-card-header>

                        <md-card-content>
                            ${{service.price}}
                        </md-card-content>

                        <md-card-actions>
                        <md-button><a v-bind:href="'mailto:info@miraboi.com?subject='+service.name">Book</a></md-button>
                        <!-- <md-button>Action</md-button> -->
                        </md-card-actions>
                    </md-ripple>
                </md-card>
            </div>
        </div>
        
  </div>
</template>

<script>
export default {
    data () {
        return {
            services: [
                {
                    name: 'Google Knowledge Panel',
                    price: '2,500'
                },

                {
                    name: 'Wikipedia Page',
                    price: '3,500'
                },
                {
                    name: 'Facebook Page Verification',
                    price: '2,500'
                },
                {
                    name: 'Instagram Page Verification',
                    price: '3,500'
                },
                {
                    name: 'Claim Instagram Inactive Username',
                    price: '3,500'
                },
                {
                    name: 'Claim Facebook Unavailable Username',
                    price: '2,500'
                },
                {
                    name: 'Need An Official Website',
                    price: '1,700'
                },
                {
                    name: 'Twitter Page Verification',
                    price: '3,500'
                },
                {
                    name: 'Recover Disabled Instagram Page',
                    price: '3,500'
                },
                {
                    name: 'EPK',
                    price: '1,000'
                },
            ]
        }
    }
}
</script>


// you have to run