<template>
  <div class="w-full h-20 flex justify-between items-center font-poppins">
    <!-- LOGO -->
    <div class="mx-5 flex flex-col justify-center items-center">
      <img class="h-16 font-poppins" src="../assets/logo.svg" />
    </div>
    <!-- DESKTOP MENU -->
    <div class="hidden md:flex">
      <a
        class="mx-10 cursor-pointer"
        v-for="menuItem in menu"
        :key="menuItem.link"
      >{{$t(menuItem.translation)}}</a>
      <LanguagePicker />
    </div>
    <!-- MOBILE MENU -->
    <div class="flex items-center md:hidden h-full mx-10">
      <img class="h-10 cursor-pointer" src="../assets/menu.svg" @click="toggle()" />
    </div>
    <div class="absolute">
      <Drawer @close="toggle()" align="right" :closeable="true">
        <div v-if="drawer.isOpen">
          <div class="flex flex-col text-lg">
            <a
              class="mx-10 my-2 cursor-pointer"
              v-for="menuItem in menu"
              :key="menuItem.link"
            >{{$t(menuItem.translation)}}</a>
            <LanguagePicker />
          </div>
        </div>
      </Drawer>
    </div>
  </div>
</template>

<script>
import LanguagePicker from "./LanguagePicker.vue";
import Drawer from "vue-simple-drawer";
export default {
  components: { LanguagePicker, Drawer },
  methods: {
    toggle() {
      this.drawer.isOpen = !this.drawer.isOpen;
    }
  },
  data() {
    return {
      drawer: {
        isOpen: false
      },
      menu: [
        {
          link: "#services",
          translation: "menu.services"
        },
        {
          link: "#projects",
          translation: "menu.projects"
        },
        {
          link: "#about",
          translation: "menu.about"
        },
        {
          link: "#contact",
          translation: "menu.contact"
        }
      ]
    };
  }
};
</script>