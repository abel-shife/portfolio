<template>
     <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
         <p class="display-1"> <span class="font-weight-thin">My</span> Educational
          <br> Status</p>
    <v-flex  xs12 sm8 md6 class="ml-12">
         <v-card>
           <v-card-title>
             Educational Status
           </v-card-title>
           <v-card-text>
              <v-timeline
            dense>
        <v-timeline-item icon="add" small fill-dot v-for="(Educational, i) in educationalExperience" :key="i"> 
            <strong class="white--text">{{Educational.place}}</strong> 
            <div class="white--text">{{Educational.skillName}}</div>
        </v-timeline-item>        
      </v-timeline>
           </v-card-text>
           </v-card>  
    </v-flex>
        </v-row>
</template>

<script>
export default {
    data () {
      return {
      expanded:0,
      
      educationalExperience:[
       { 
         place: 'Addis Ababa Science and Technology University(AASTU)',
         skillName:'Bachelors Degree in Software Engineering',
         },
        { place: 'Addis Ababa University(AAU)',
          skillName:'Cisco CCNA routing and switching certification ',
         },
      ],
      }
}
}
</script>