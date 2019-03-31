<template>
  <div class="home">
    <!--
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    -->

    <b-container class="bv-example-row">
      <b-row>
        <b-col md="3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus explicabo suscipit cum esse blanditiis, eligendi consectetur aut ipsam repellendus saepe? Ab, similique! Et totam atque consequuntur impedit facere ex provident.</b-col>
        <b-col md="6">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam fugiat similique qui ex. Distinctio, consequuntur, veritatis dolore modi necessitatibus sequi quaerat laborum sint voluptatum quod minima praesentium pariatur esse vitae.</b-col>
        <b-col md="3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, ullam optio iste tempore hic aperiam perferendis ratione assumenda qui molestias soluta odit architecto incidunt magni reprehenderit exercitationem iusto labore sit!</b-col>
      </b-row>
    </b-container>

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  }
};
</script>

<style scoped>
</style>

