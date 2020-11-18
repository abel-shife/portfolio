<template>
     <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
         <p class="display-1"> <span class="font-weight-thin">My</span> Professional  <span class="font-weight-thin">and</span>
          <br> Personal skills</p>
    <v-flex  xs12 sm8 md6 class="ml-12">
         <v-expansion-panels v-model="expanded">
    <v-expansion-panel>
      <v-expansion-panel-header>
       Professional Skills
      </v-expansion-panel-header>
      <v-expansion-panel-content>
       <v-timeline
            dense>
        <v-timeline-item icon="add" small fill-dot v-for="(Professional, i) in professionalSkills" :key="i">          
            <div>{{Professional.skillName}}</div>
            <v-progress-linear
                  background-color="pink lighten-3"
                  color="pink"
                  :value="Professional.value"
                ></v-progress-linear>
        </v-timeline-item>        
      </v-timeline>
      </v-expansion-panel-content>
    </v-expansion-panel>

    <v-expansion-panel>
      <v-expansion-panel-header >
       Personal Skills
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        <v-timeline
            dense>
        <v-timeline-item icon="add" small fill-dot v-for="(Personal, i) in personalSkills" :key="i"> 
          
            <div>{{Personal.skillName}}</div>
            <v-progress-linear
                  background-color="pink lighten-3"
                  color="pink"
                  :value="Personal.value"
                ></v-progress-linear>
        </v-timeline-item>        
      </v-timeline>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>   
    </v-flex>
        </v-row>
</template>

<script>
export default {
    data () {
      return {
      expanded:0,
      professionalSkills:[
       { skillName:'HTML, CSS and VUEJS',
         value:95},
        { skillName:'FLUTTER',
         value:90},
         {skillName:'NODEJS and JAVASCRIPT',
         value:90},
       { skillName:'C++ and JAVA',
         value:80}
      ],
       personalSkills:[
       { skillName:'Team Work',
         value:90},
        { skillName:'Creativity',
         value:90},
         {skillName:'Up-To Date',
         value:90},
       
      ],
      }
}
}
</script>