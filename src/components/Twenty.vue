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
          img: 'https://images.genius.com/b9550271c897fcc72c850339cc88d238.1000x1000x1.png',
          href: 'https://open.spotify.com/album/0cZAE6guibfcYmTZD7hiae'

        },
        {
          
          img: 'https://media.pitchfork.com/photos/5e9e0f9b7b32470008c19537/1:1/w_600/A%20Muse%20In%20Her%20Feelings_dvsn.jpg',
          href:'https://open.spotify.com/album/153lLZKTVw25BTcLuXB8ME?autoplay=true'
        },
        {
          
          img: 'https://images.complex.com/complex/images/c_fill,dpr_auto,f_auto,q_90,w_1400/fl_lossy,pg_1/hiiho3hnyw1izjhjsfph/partynextdoor-partymobile',
          href:'https://open.spotify.com/album/4QTfWxMZjLRhQ9zxomi4t4?autoplay=true',
        },
        {
          
          img: 'https://m.media-amazon.com/images/I/81upm6APFFL._SS500_.jpg',
          href:'https://open.spotify.com/album/4ZfPehLCNr9bxpugRRiUyM?autoplay=true',
        },
        {
          
          img: 'https://m.media-amazon.com/images/I/91MqppHlPTL._SS500_.jpg',
          href:'https://open.spotify.com/album/56zJxGC8iUHqVwHh8efTSO?autoplay=true',
        },
        {
          
          img: 'https://cdn.vox-cdn.com/thumbor/7cOZU6uDACFjTRHaa8uVCMs0aQE=/1400x1400/filters:format(png)/cdn.vox-cdn.com/uploads/chorus_asset/file/20049918/547cd3b9ebd649e0514ffcf396e05f68.1000x1000x1.png',
          href:'https://open.spotify.com/album/2lTzPbjHdZgNyV5cvhT7qE',
        },
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
