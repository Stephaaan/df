<template>
  <div id="app">
    <Header />
    <full-page ref="fullpage" :options="options">
      <div class="section">
        <Home/>
      </div>
      <div class="section">
        <Services/>
      </div>
      <div class="section">
        third section ...
      </div>
      <div class="section">
        fourth section ...
      </div>
    </full-page>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Home from "./components/Home.vue";
import Services from "./components/Services";

export default {
  name: "App",
  components: {
    Header, Home, Services
  },
  data() {
    return {
      options: {
        menu: '#menu',
        paddingTop: '80px',
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5'],
      },
    }
  }
};
</script>
