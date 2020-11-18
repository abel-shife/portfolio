<template>
     <v-row justify='space-around' >

      <v-card
        v-for="(service, i) in servicesGiven" :key="i" class="mt-8 rounded-lg"
        data-aos="slide-up"
        :data-aos-duration="service.duration" 
        max-width="350"
      >
        <v-img :src="require('../assets/images/'+service.serviceImage)" height='220px' ></v-img>

            <v-card-title style="position: relative"  class="title primary--text">
                {{service.serviceTitle}}
              <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  color="primary"
                  dark small absolute top right fab
                  v-bind="attrs"
                  v-on="on"
                >
                  <v-icon>chat</v-icon>
                </v-btn>
              </template>
              <span>Contact me</span>
            </v-tooltip>
            </v-card-title>

        <v-card-text > 
         {{service.serviceDiscription}}
        </v-card-text>

        <v-card-title>
          <span class="font-weight-thin" absolute bottom>What you Imagined, gets delivered</span>
        </v-card-title>
<!-- 
        <v-fade-transition>
          <v-overlay
            v-if="hover"
            absolute
            color="#036358"
          >
          </v-overlay>
       </v-fade-transition> -->
      </v-card>
    
 

  </v-row>
</template>

<script>
export default {
    data(){
        return{
               servicesGiven:[
           { 
           duration: '1000',
           serviceImage: 'web.jpg',
           serviceTitle: 'Web App Development ',
           serviceDiscription: 'Based on the requirements that you give me, I can develop a full-stack and fully responsive website as you imagined using vue.js and vuetify.js as front end and node.js as a backend. ',
           },
            { 
          duration: '2000',
           serviceImage: 'mobile.jpg',
           serviceTitle: 'Mobile App Development ',
           serviceDiscription: ' Based on the requirements that you give me, I can develop a mobile application as you imagined using flutter. Used for personal or business use. The app can run both on android and IOS',
           },
            { 
            duration: '3000',
           serviceImage: 'contract.jpg',
           serviceTitle: 'Finish Started Project',
           serviceDiscription: 'If there is any project that was started and got stuck on the way, I can write codes that integrate easily and work as a freelancer or full-time worker till the project ends and fulfill its objectives. ',
           },
            { 
             duration: '1000',
           serviceImage: 'contentdevelopment.jpg',
           serviceTitle: 'Content Development/UI ',
           serviceDiscription: 'The look and feel of your company are one of the important aspects you should consider. I can provide you with a defining user interface and branding concepts that get your company memorable and easy to use designs. ',
           },
            { 
             duration: '2000',
           serviceImage: 'backend.jpg',
           serviceTitle: 'Back End/RESTful API ',
           serviceDiscription: 'If you already have a front end website or a mobile app that needs a server-side API, I can develop simple secure, and fast RESTful API that works for both web and mobile apps. I can work with MYSQL or MongoDB databases.',
           },
            { 
            duration: '3000',
           serviceImage: 'ITsupport.jpg',
           serviceTitle: 'IT Support',
           serviceDiscription: 'I can provide you with miscellaneous IT-related help and tips. If you are facing any technical problems, I can always be there to help,  maintain integrate, your software products. I can also provide you open-source software products. ',
           }
       ]
        }
    }
}
</script>