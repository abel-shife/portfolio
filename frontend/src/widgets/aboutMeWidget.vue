<template>
    <v-row justify='space-around' class="mt-8" >
   <v-flex  xs12 sm8 md5 >
     <!-- <v-skeleton-loader
      class="mx-auto"
      max-width="300"
      type="image"
    ></v-skeleton-loader> -->
         <v-img
          src="@/assets/images/myImage.jpg"
          height="740px"
          class="rounded-lg"
        />   
 
    </v-flex> 
    <v-flex  xs12 sm8 md6>
        <v-card elevation=0 class="mt-8"> 
          <v-card-text>
            <!-- <div class="ml-1 "><span class="display-2 text--primary">Hello  </span> I am</div> -->
            <p class="ml-1 mt-2 display-2 text--primary"  data-aos="slide-up" data-aos-duration="1000"> 
              <span class="font-weight-thin text--disabled">I am</span> 
             Abel shiferw</p>
            <p class="display-2 text--primary"  data-aos="slide-up" data-aos-duration="1000">
              Mobile App <span class="font-weight-thin text--disabled">and</span>  Web Developer
            </p>

            <p class="body-1" data-aos="slide-up" data-aos-duration="1000">
              Hello, I am Abel Shiferaw, A web, and mobile app developer.
              I got my bachelors degree at Addis Ababa Science and Technology in Software Engineering(SE) in 2020.
              I have been learning different programming languages in the 
              past four years. I can write c++, java, flutter, and web development languages like html,css,
              bootstrap, javascript, php, vue.js, vuetify.js, and node.js. 
            </p>
<p  class="body-1" data-aos="slide-up" data-aos-duration="1000" >
              I have been teaching myself daily on web and mobile app development.
              I can develop a full-stack web app using the latest technologies of 
              vue.js, vuetify.js, javascript, and node.js. 
              I made this website with the tools mentioned above. </p> 
              <p class="body-1" data-aos="slide-up" data-aos-duration="1000">
                 I can also develop a mobile app using dart's framework, flutter for developing mobile apps. 
              I am always ready to learn new stuff since our web and mobile technologies are getting better and
               better these days. 
               <br> Check me out for more details. <br> Thank you.
              </p>
                 <v-card-actions >
            <v-btn
              outlined
              class="ma-2"
              color="deep-purple accent-4"
               data-aos="slide-up" data-aos-duration="1000"
            >
              Check More
            </v-btn>
            <v-btn
              outlined
              class="ma-2"
              color="deep-purple accent-4"
               data-aos="slide-down" data-aos-duration="1000"
            >
              Contact Me
            </v-btn>
          </v-card-actions>
           
          </v-card-text>
        
        </v-card>  
    </v-flex>
   
 </v-row>
</template>