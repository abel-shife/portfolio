<template>
  <v-app>
    
<nave-bar />
    <v-main>
       <!-- <v-container fluid> -->
        <router-view></router-view>
      <!-- </v-container> -->
    </v-main>
  </v-app>
</template>

<script>
import naveBar from "@/widgets/naveBar";
export default {
  name: "App",
  components: {
    naveBar,
  },
  data: () => ({
    //
  })
};
</script>

