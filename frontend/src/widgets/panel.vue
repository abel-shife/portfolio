<template>
  <div class="white elevation-2">
    <slot name="leftAction" />

    <v-toolbar dense flat class="cyan darken-4" dark>
      <v-toolbar-title>
        {{title}}
        <span class="mr-10 white--text">{{subtitle}}</span>
      </v-toolbar-title>
      <slot name="rightAction" />
    </v-toolbar>

    <div class="pl-4 pr-4 pt-2 pb-2">
      <slot>no slote defined</slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "subtitle"]
};
</script>