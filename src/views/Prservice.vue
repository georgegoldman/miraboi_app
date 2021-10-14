<template>
    <div class=" row h-100 overflow-auto" >
        
        <div class="col-12 mt-5">
            <masonry
        :cols="{default: 4, 1000: 4, 700: 3, 400: 1}"
          :gutter="{default: '30px', 700: '15px', 400: '30px'}"
        >
            <div v-for="service in services" :key="service.name" >
            <div class=" col-12  my-3" >
                <md-card class="md-primary" md-theme="orange-card" md-with-hover>
                    <md-card-media>
                        <img v-lazy="service.img">
                    </md-card-media>

                    <md-card-header>
                        <div class="md-title">{{service.name}}</div>
                        <div class="md-subhead">$<b>{{service.price}}</b> </div>
                    </md-card-header>

                    <md-card-actions>
                        <!-- <md-button>Action</md-button> -->
                        <md-button class="text-light">
                            <a v-bind:href="'mailto:info@miraboi.com?subject='+service.name">Book</a>
                        </md-button>
                    </md-card-actions>

                    <md-card-content>
                        {{service.content}}
                    </md-card-content>
                </md-card>
            </div>
        </div>
        </masonry>
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
                    price: '2,500',
                    content: "Knowledge panels are information boxes that appear on Google when you search for entities (people, places, organizations, things) that are in the Knowledge Graph. They are meant to help you get a quick snapshot of information on a topic based on Google's understanding of available content on the web. This service takes within 2 weeks.",
                    img: "https://res.cloudinary.com/ukony/image/upload/v1634216270/MIRABOI/pr_services/googleKnowledgePanel_jjjgbp.png",
                },

                {
                    name: 'Wikipedia Page',
                    price: '3,500',
                    content: "Wikipedia is a biographical platform where Google extract informations to design and build up your Google knowledge panel for a professional look. This service takes up to a week.",
                    img: 'https://res.cloudinary.com/ukony/image/upload/v1634146572/MIRABOI/pr_services/image00001_1_ralbrz.jpg',
                },
                {
                    name: 'Facebook Page Verification',
                    price: '2,500',
                    content: "A Facebook verification checkmark provides credibility to official pages and puts a clear distinction between the real Pages and the Pages run by fans or imposters. In addition, Facebook prioritizes verified profiles and Pages in its search results. This service takes within 3 business days.",
                    img: "https://res.cloudinary.com/ukony/image/upload/v1634216394/MIRABOI/pr_services/facebookVerification_dheirt.png",
                },
                {
                    name: 'Instagram Page Verification',
                    price: '3,500',
                    content: "Once your account is verified, you'll automatically rank at the top of relevant Instagram searches. For many people, getting the Instagram check is a badge of honor. It looks cool, it builds your public presence and differentiate your account between fake profiles. This service takes within a week.",
                    img: 'https://res.cloudinary.com/ukony/image/upload/v1634216073/MIRABOI/pr_services/instagramverification_ihhygt.png',
                },
                {
                    name: 'Claim Instagram Inactive Username',
                    price: '3,500',
                    content: "It’s always nice having a unique username as your brand on your Instagram account but always frustrating when it’s being used by an inactive Instagram account or is currently not available but not in use by any account. This service takes within a week.",
                    img: "https://res.cloudinary.com/ukony/image/upload/v1634216745/MIRABOI/pr_services/claimInstagramInactiveUsername_bzkhj6.jpg",
                },
                {
                    name: 'Claim Facebook Unavailable Username',
                    price: '2,500',
                    content: "Sometimes your preferred usernames are not available on Facebook for you to use on your Facebook page and this could somehow be frustrating in making you putting up a tough decision. This service takes within a week.",
                    img: "https://res.cloudinary.com/ukony/image/upload/v1634216913/MIRABOI/pr_services/claimInactiveFacebookUsername_f99fh1.png",
                },
                {
                    name: 'Need An Official Website',
                    price: '1,700',
                    content: "Having the control over what information you would like to share (including your achievements) is such a powerful thing. website can function similarly to a resume. However, a personal website has the freedom to be much more extensive and engaging, since it allows for the inclusion of photos, work samples, and even testimonials. This service takes within 9 weeks.",
                    img: "https://res.cloudinary.com/ukony/image/upload/v1634216558/MIRABOI/pr_services/officailwebsite_vab0gs.png",
                },
                {
                    name: 'Twitter Page Verification',
                    price: '3,500',
                    content: "Having a blue tick on your Twitter account offers more credibility and helps increase trustworthiness among followers. With it, you are more likely to be taken seriously by your followers and prospective followers. Don’t we all love to hear from “credible” sources?",
                    // img: 'https://res.cloudinary.com/ukony/image/upload/v1634139428/MIRABOI/pr_services/twitter-verified-accounts_qfyrgi.jpg'
                },
                {
                    name: 'Recover Disabled Instagram Page',
                    price: '3,500',
                    content: "Now you have your account, find out what's next. Get the complete picture with a free marketing plan or explore three key tips to hit the ground running.",
                    // img: 'https://res.cloudinary.com/ukony/image/upload/v1634139425/MIRABOI/pr_services/your-account-has-been-disabled_ipoimj.jpg'
                },
                {
                    name: 'EPK',
                    price: '1,000',
                    content: "What is an EPK? EPK, short for electronic press kit, is a pre-packaged set of promotional materials of a person, company, or organization distributed to members of the media for promotional use. They are often distributed to announce a release or for a news conference.",
                    // img: 'https://res.cloudinary.com/ukony/image/upload/v1634139429/MIRABOI/pr_services/bzblog-new-epk-templates_ku9srd.jpg'
                },
            ]
        }
    }
}
</script>


// you have to run