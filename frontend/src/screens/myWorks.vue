<template>

<div>
  <v-tabs
      color="deep-purple accent-4"
      centered
    >
      <v-tab>Websites</v-tab>
      <v-tab>Mobile Apps</v-tab>
        <v-tab>Others</v-tab>
 
      <v-tab-item
      >
        <v-container fluid>
          <v-row>
            
            <v-card
            v-for="i in 3"
              :key="i"
              
    class="mx-auto my-12"
    max-width="374"
  >
  
    <v-img
      height="250"
      src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
    ></v-img>

    <v-card-title>App Name</v-card-title>
 <v-card-subtitle >Made 2 years ago</v-card-subtitle>
    <v-card-text>
    <p>
     I made this web app is for a school project 2 years ago.
     It focuses on herbal nutrient buying and selling demo.
     It is made with Html, CSS, Bootstrap,PHP(no framework), MySql.
     </p> 
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn
     class="align-self-end"
        color="deep-purple lighten-2"
      >
        Check Website
      </v-btn>
    </v-card-actions>
  </v-card>

         
          </v-row>
        </v-container>
      </v-tab-item>
        <v-tab-item
      >
        <v-container fluid>
          <v-row>
            
            <v-card
            v-for="i in 3"
              :key="i"
              
    class="mx-auto my-12"
    max-width="374"
  >
  
    <v-img
      height="250"
      src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
    ></v-img>

    <v-card-title>App Name</v-card-title>
 <v-card-subtitle >Made 2 years ago</v-card-subtitle>
    <v-card-text>
    <p>
     I made this web app is for a school project 2 years ago.
     It focuses on herbal nutrient buying and selling demo.
     It is made with Html, CSS, Bootstrap,PHP(no framework), MySql.
     </p> 
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn
     class="align-self-end"
        color="deep-purple lighten-2"
      >
        Check Website
      </v-btn>
    </v-card-actions>
  </v-card>

         
          </v-row>
        </v-container>
      </v-tab-item>
           <v-tab-item>
        <v-container fluid>
          <v-row>
            
            <v-card
            v-for="i in 3"
              :key="i"
              
    class="mx-auto my-12"
    max-width="374"
  >
  
    <v-img
      height="250"
      src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
    ></v-img>

    <v-card-title>App Name</v-card-title>
 <v-card-subtitle >Made 2 years ago</v-card-subtitle>
    <v-card-text>
    <p>
     I made this web app is for a school project 2 years ago.
     It focuses on herbal nutrient buying and selling demo.
     It is made with Html, CSS, Bootstrap,PHP(no framework), MySql.
     </p> 
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn
     class="align-self-end"
        color="deep-purple lighten-2"
      >
        Check Website
      </v-btn>
    </v-card-actions>
  </v-card>

         
          </v-row>

        </v-container>
      </v-tab-item>
      
    </v-tabs>
     <v-col align="center">
        <div class="display-1 mt-2"> Under progress ... </div>
        <v-progress-linear
      :size="50"
      color="primary"
      indeterminate
    ></v-progress-linear>
   
     </v-col>
    <v-row justify='center' class="mt-8" ><h1>Contact Me</h1></v-row> 
  <contact-widget/>
  <page-footer/>
</div>

  
</template>

<script>
import contactWidget from "@/widgets/contactWidget";
import pageFooter from "@/widgets/pageFooter";

export default {
  components: { contactWidget, pageFooter },

  data() {
    return {
      
      };
  }
};
</script>
