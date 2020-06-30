<template>
    <div class="w-full h-full flex flex-col items-center">
        <div class="w-full relative">
            <div class="relative w-full" style="top:-80px">
                <img class="w-full" src="../assets/down-up-web.svg"/>
            </div>
            <div class="absolute top-80 w-full z-10 flex flex-col justify-center items-center text-3xl md:text-5xl text-white h-64">
                <p class="mt-10">S cim Vam vieme pomoct?</p>
                <div class="h-1 my-10 w-2/3 md:w-1/3">
                    <div class="w-full h-px bg-white"></div>
                </div>
                <div class="flex justify-around w-full">
                    <div v-for="item in buttons" :key="item" class=" btn-shadow bg-white text-black rounded-lg w-104 text-center">{{item}}</div>
                </div>
                <div class="text-center text-2xl md:text-4xl mt-10 w-4/5 md:w-2/3">
                    Zaoberáme sa najmä vývojom mobilných aplikácií, vývojom web aplikácií haplih aplikácií, vývojom web aplia vývojom desktop aplikáciíale nevyhýbame sa novým výzvam.
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                buttons: ["Android aplikacie", "Desktop aplikacie", "Web aplikacie"]
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
</style>
