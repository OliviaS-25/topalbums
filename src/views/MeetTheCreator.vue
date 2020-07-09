<template>
      <div class="MeetTheCreator">
            <br>
            <h1 class= "display-2 font-weight-black text-center">Hello All!</h1>
            <h3 class=text-center> 
            <a
                  v-for="(next, i) in clickhere"
                  :key="i"
                  :href="next.href"
                  class="subheading mx-3"
                  target="_blank">
            {{ next.text }}
          </a> </h3>
            <MeetMe/>
      </div>
</template>

<script>
import MeetMe from '@/components/MeetMe.vue'
export default {
      name: 'MeetTheCreator',
      components: {
            MeetMe,
      },
      data: () => ({
    clickhere: [
      {
        text: 'LinkedIn',
        href: 'https://www.linkedin.com/in/olivia-sackitey-563039167/',
      },
      {
        text: 'Email',
        href: 'mailto:oliviadsackitey@gmail.com',
      },
      {
        text: 'Spotify',
        href: 'https://open.spotify.com/user/olivia679',
      },
    ],
  }),
}
</script>