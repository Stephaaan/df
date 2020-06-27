<template>
  <div class="flex w-20 justify-between h-full items-center mx-10">
    <img class="w-8 h-4 cursor-pointer" src="../assets/eng.jpg" v-on:click="changeLang('en')" />
    <p>|</p>
    <img class="w-8 h-4 cursor-pointer" src="../assets/svk.jpg" v-on:click="changeLang('sk')" />
  </div>
</template>

<script>
export default {
  methods: {
    changeLang(langCode) {
      this.$i18n.locale = langCode;
    }
  }
};
</script>
