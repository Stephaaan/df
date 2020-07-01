<template>
  <div class="w-full h-20 flex justify-between items-center font-poppins z-50 absolute bg-white ">
    <!-- LOGO -->
    <div class="mx-5 flex flex-col justify-center items-center">
      <img class="h-16 font-poppins" src="../assets/logo.svg" />
    </div>
    <!-- DESKTOP MENU -->
    <div class="hidden md:flex">
      <ul id="menu" class="flex flex-row">
        <li v-for="(menuItem, index) in menu"
            :key="menuItem.link"

        >
          <a
                  class="mx-5 lg:mx-10 cursor-pointer text-sm xl:text-lg"
                  :href="'#page'+(index + 1)"
          >{{$t(menuItem.translation)}}</a>
        </li>

      </ul>

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
            <ul id="menu">
              <li v-for="(menuItem, index) in menu"
                  :key="menuItem.link"

              >
                <a
                        class="mx-10 my-2 cursor-pointer"
                        :href="'#page'+(index + 1)"
                >{{$t(menuItem.translation)}}</a>
              </li>

            </ul>
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
