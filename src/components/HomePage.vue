<template>
    <v-container fluid fill-height class="home-page">
        <v-layout justify-center align-center column pa-5>
            <!-- <div class="display-4 font-weight-black yellow--text text-xs-center">TOP ALBUMS</div> -->
            <!-- <div class="display-4 font-weight-black white--text text-xs-center mb-3">FOR YOUR TABLE</div> -->
            <!-- <div class="display-1 font-weight-bold yellow--text text-xs-center">Finally a place to compile my favorite albums by year!</div> -->
            <!-- <v-btn fab class="mt-5 brown darken-4">
            <v-icon large color="white">expand_more</v-icon>
            </v-btn> -->
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: 'HomePage'
};
</script>

<style scoped>
.home-page {
    background: url('https://i.postimg.cc/pTbjWwth/Albums-Collage.png');
    background-size: cover;
    width: 100%;
    height: 100%;
}
</style>