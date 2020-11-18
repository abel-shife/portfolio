<template>
  <div>
    <v-app-bar app 
    flat
      elevation="0"
    dark
      >
  
        <v-app-bar-nav-icon class="hidden-md-and-up"
        @click="sideBarDrawer = !sideBarDrawer"
      >
        <v-icon large>dehaze</v-icon>
      </v-app-bar-nav-icon>
      <v-toolbar-title class="ml-10">
       <span class="font-weight-light">Abel</span>|Devs|
      </v-toolbar-title>

      <v-spacer></v-spacer>
      <div class="hidden-md-and-up">
        <v-menu offset-y>
          <template v-slot:activator="{ on }">
            <v-app-bar-nav-icon class="text-capitalize" v-on="on">
              <v-icon>more_vert</v-icon>
            </v-app-bar-nav-icon>
          </template>
          <v-list dark>
            <v-list-item text @click="navigator({ name: '' })" >
              <v-list-item-title class="white--text"
                >Hire Me</v-list-item-title
              >
            </v-list-item>
            <v-list-item @click="navigator({ name: '' })">
              <v-list-item-title class="white--text"
                >Abel's CV</v-list-item-title
              >
            </v-list-item>
          </v-list>
        </v-menu>
      </div>

      <v-toolbar-items class="hidden-sm-and-down" v-for="menu in menuList" :key="menu.title">
         
        <v-btn text dark @click="$router.push(menu.link).catch(err => {})">{{menu.title}}</v-btn>
        
    
      </v-toolbar-items>
    </v-app-bar>
    <v-navigation-drawer
      class="cyan darken-4"
      app
      v-model="sideBarDrawer"
      v-if="sideBarDrawer"
      src='@/assets/images/bg-2.jpg'
    >
      <v-list-item class="px-2">
        <v-list-item-avatar v-on:mouseover="mouseover" @mouseleave="mouseleave">
          <v-img :src="require(`@/assets/images/myImage.jpg`)" alt="Picture">
            <span class="mt-2 ml-2" v-if="editProfile">
              <v-icon sm color="yellow lighten-1">edit</v-icon>
            </span>
          </v-img>
        </v-list-item-avatar>
        <v-list-item-title class="white--text">
          Abel &nbsp; Shiferaw
        </v-list-item-title>
      </v-list-item>
      <v-divider></v-divider>
      <v-list-item class="px-2">
        <v-list-item-avatar color="cyan darken-3">
          <v-icon color="yellow lighten-1">phone</v-icon>
        </v-list-item-avatar>
        <v-list-item-title class="white--text"> 0947012893 </v-list-item-title>
      </v-list-item>

      <v-divider class="white"></v-divider>
      <v-list>
        <div v-for="menu in menuList" :key="menu.title">
          <v-list-item @click="$router.push(menu.link).catch(err => {}), sideBarDrawer=!sideBarDrawer">
            <v-list-item-icon>
              <v-icon color="yellow lighten-1">{{ menu.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>
              <span class="white--text">{{ menu.title }}</span>
            </v-list-item-title>
          </v-list-item>
        </div>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      editProfile: false,
      sideBarDrawer: false,
      menuList: [
        {
          title: "Home",
          icon: "dashboard",
          link: "/",
        },
         {
          title: "My Works",
          icon: "work",
          link: "myWorks",
        }
        // ,
        // {
        //   title: "Websites",
        //   icon: "restaurant",
        //   link: "websites",
        // },
        //  {
        //   title: "APIs",
        //   icon: "build",
        //   link: "RESTfulAPI",
        // }
      ],
    };
  },
  methods: {
    mouseover: function() {
      this.editProfile = true;
    },
    mouseleave: function() {
      this.editProfile = false;
    },
  },
};
</script>
<style scoped></style>
