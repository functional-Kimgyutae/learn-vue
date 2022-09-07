<template>
    <div>
      <div v-for="ask in fetchedAsk" v-bind:key="ask.id">{{ ask.title }}</div>
    </div>
  </template>
  
  <script>
import { mapGetters } from 'vuex';

  export default {
      computed: {
        ...mapGetters({
            fetchedAsk:"fetchedAsk",
        })
        // ask() {
        //     return this.$store.state;
        // }
      },
      created() {
        this.$store.dispatch("FETCH_ASKS")
      }
  }
  </script>
  
  <style>
  
  </style>