<template>
    <!--sorry future Stefan-->
    <div style="top:-80px; padding-top:80px" class="w-full h-full bg-image flex flex-col items-center text-white text-2xl md:text-3xl lg:text-4xl relative" :style="'background-image:url('+background+')'">
        <p class="mt-5 md:mt-10">S cim Vam vieme pomoct?</p>
        <div class="h-1 my-5 md:my-10 w-2/3 md:w-1/3">
            <div class="w-full h-px bg-white"></div>
        </div>
        <div class="flex flex-col md:flex-row justify-around w-full justify-center items-center text-2xl md:text-3xl lg:text-4xl">
            <div v-for="item in buttons" :key="item" class="my-5 md:my-0 btn-shadow bg-white text-black rounded-lg w-2/3 md:w-1/4 text-center">{{$t(item)}}</div>
        </div>
        <div class="hidden md:flex text-center mt-10 w-4/5 md:w-2/3">
            Zaoberáme sa najmä vývojom mobilných aplikácií, vývojom web aplikácií haplih aplikácií, vývojom web aplia vývojom desktop aplikáciíale nevyhýbame sa novým výzvam.
        </div>
    </div>
</template>
<script>
    import { config } from '../config/page.js'
    import background from '../assets/down-up-web.svg'
    export default {
        data() {
            return {
                buttons: config.services.buttons,
                //some kind of workaround with background image, need to be imported and used as an url param in style tag
                //why? ...
                background
            }
        }
    }
</script>
<style scoped>
    .btn-shadow {
        -webkit-box-shadow: 0px 10px 0px 0px rgba(230,230,230,1);
        -moz-box-shadow: 0px 10px 0px 0px rgba(230,230,230,1);
        box-shadow: 0px 10px 0px 0px rgba(230,230,230,1);
    }
    .bg-image{
        overflow: hidden;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
    }
</style>
