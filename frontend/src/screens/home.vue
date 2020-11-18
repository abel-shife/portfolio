<template>
<div>
     <v-parallax
    src="../assets/images/background2.jpg"
   height="500"
  >
    <v-row
      align="center"
      justify="center"
    >
      <v-col
        class="text-center"
      >
        <h1 class="display-3 mb-4" data-aos="slide-up" data-aos-duration="1000">
          Abel Shiferaw
        </h1>
        <h4 class="subheading display-1" data-aos="slide-up" data-aos-duration="2000">
         Fullstack Web and Mobile App Developer
        </h4>
         <p data-aos="slide-up" data-aos-duration="2000" class="font-weight-thin">What you Imagined, gets delivered</p>
      </v-col>
    </v-row>
  </v-parallax> 

<v-container > 
  <v-row justify='center' class="mt-8" ><h1>About Me</h1></v-row> 
  <about-Me-Widget/>

 <v-row justify='center' class="mt-8 mb-8" ><h1> <span class="text--disabled">My</span>  Resume</h1></v-row> 
   <v-carousel
    class="rounded-lg"
    hide-delimiter-background
    height="550px"
  >
    <v-carousel-item
    >
      <v-sheet
        height="100%"
      >
       <skills-widget/>
      </v-sheet>
    </v-carousel-item>
     <v-carousel-item 
    >
   <v-sheet
        height="100%"
      >
       <education-widget/>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>

  <v-row justify='center' class="mt-8" ><h1>Services I can Provide</h1></v-row> 
  <service-widget/>

  <v-row justify='center' class="mt-8" ><h1>Contact Me</h1></v-row> 
  <contact-widget/>
  
</v-container>
<page-footer/>
</div>
  
</template>

<script>

import skillsWidget from "@/widgets/skillsWidget";
import educationWidget from "@/widgets/educationWidget";
import serviceWidget from "@/widgets/serviceWidget";
import aboutMeWidget from "@/widgets/aboutMeWidget";
import contactWidget from "@/widgets/contactWidget";
import pageFooter from "@/widgets/pageFooter";

  export default {
  components: {
    skillsWidget,
    educationWidget,
    serviceWidget,
    aboutMeWidget,
    contactWidget,
    pageFooter
  },
    data () {
      return {
    
      }
    },
    methods:{
     
    }
  }
</script>

<style scoped>

</style>

