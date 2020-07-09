<template>
  <v-container class="pa-4 text-center">
    <v-row class="fill-height" align="center" justify="center">
      <template v-for="(item, i) in items">
        <v-col
          :key="i"
          cols="12"
          md="4"
        >
          <v-hover v-slot:default="{ hover }">
            <v-card
              class="mx-auto"
              color= "transparent"
              max-width="225"
              :elevation="hover ? 12 : 2"
              :class="{ 'on-hover': hover }"
              :href="item.href"
            >
              <v-img
                :src="item.img"
                height="225px"
                
              >
              </v-img>
            </v-card>
          </v-hover>
        </v-col>
      </template>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      icons: ['mdi-rewind', 'mdi-play', 'mdi-fast-forward'],
      items: [
        {
          img: 'https://media.pitchfork.com/photos/5df01a9129131e0008fba8fc/1:1/w_600/antisocial.jpg',
          href: 'https://open.spotify.com/album/52u4anZbHd6UInnmHRFzba'

        },
        {
          
          img: 'https://upload.wikimedia.org/wikipedia/en/0/0c/Chance_the_Rapper_-_The_Big_Day.png',
          href:'https://open.spotify.com/album/7bgi7zCoDsZdlLKPonHZqP'
        },
        {
          
          img: 'https://resources.tidal.com/images/efe6ec6b/4a48/4b20/98ab/e9c3a5d0b731/1280x1280.jpg',
          href:'https://open.spotify.com/album/1dBQx0jexEZG6lTJXfSE5d',
        },
        {
          
          img: 'https://upload.wikimedia.org/wikipedia/en/a/ab/Beyonc%C3%A9_-_Homecoming-_The_Live_Album.png',
          href:'https://open.spotify.com/album/35S1JCj5paIfElT2GODl6x',
        },
       {
          
          img: 'https://images.genius.com/0070f3ca3a8b104d38dad4ccc320c43a.1000x1000x1.png',
          href:'https://open.spotify.com/album/06vukn88R2dOCd6sfMaogd',
        }
      ],
      transparent: 'rgba(255, 255, 255, 0)',
    }),
  }
</script>


<style scoped>
.v-card {
  transition: opacity .4s ease-in-out;
}
.v-card:not(.on-hover) {
  opacity: 0.6;
 }

</style>
