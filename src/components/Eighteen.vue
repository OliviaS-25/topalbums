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
          img: 'https://rb.gy/qrdeed',
          href: 'https://open.spotify.com/album/690IaVCcNRCfhoL2epFzbo'

        },
        {
          
          img: 'https://www.rap-up.com/app/uploads/2018/09/ella-mai-debut.jpg',
          href:'https://open.spotify.com/artist/7HkdQ0gt53LP4zmHsL0nap'
        },
        {
          
          img: 'https://images-na.ssl-images-amazon.com/images/I/81mNK-hAafL._AC_SL1400_.jpg',
          href:'https://open.spotify.com/album/3r5hf3Cj3EMh1C2saQ8jyt',
        },
        {
          
          img: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/Drip_Harder_by_Lil_Baby_%26_Gunna.jpg/220px-Drip_Harder_by_Lil_Baby_%26_Gunna.jpg',
          href:'https://open.spotify.com/album/2yXnY2NiaZk9QiJJittS81',
        },
        {
          
          img: 'https://upload.wikimedia.org/wikipedia/en/0/0b/Thecheifjidenna.jpg',
          href:'https://open.spotify.com/album/6mTxdHN68ChHeURs6cl0OC',
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
