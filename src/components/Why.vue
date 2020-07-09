<template>
    <v-container fluid fill-height class="why">
        <v-layout justify-center align-center column pa-5>
            <div class="display-3 font-weight-black black--text text-xs-center">Welcome to Top Albums</div>
            <br><br>
            <!-- <div class="display-4 font-weight-black white--text text-xs-center mb-3">FOR YOUR TABLE</div> -->
            <!-- <div class="display-2 font-weight-bold white--text text-xs-center">Finally a place to compile your favorite albums by year!</div> -->
            <h3 class="font-weight-medium black--text text-center">Every year we are exposed to a countless amount of music, whether it is through friends, family, curated playlists, strangers, random songs you hear on TV, or even in the grocery store, and you need to ask Siri or Shazam for some help. Many times our favorite songs, albums, and sometimes genres change throughout the year. Albums we binged in January could be a distant memory by the time June rolls around.</h3>
            <br>
            <h3 class="font-weight-medium black--text text-center">At the end of the year, many music platforms typically do a pretty good job giving us, its users, a well-rounded summary of our top listened to artists,  songs, and even genres. But there is one major category that most times slip through the crack, and that is our favorite albums. While not everyone likes to listen to full albums, it would be great to have the option of being able to have a section to put our top albums of each year, so we can go back and reminisce about the time when we listened to a handful of albums on repeat.</h3>
            <br>
            <h3 class="font-weight-medium black--text text-xs-center">Top Albums is a personalized website that serves as a place to store and update my top albums of the year.</h3>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: 'Why'
};
</script>

<style >
.why {
    background:rgb(251, 243, 243);
    background-size: cover;
    width: 100%; 
    height: 100%;
    min-width: 580px;
    min-height: 580px
}
</style>