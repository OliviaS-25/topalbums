<template>
    <span>
        <v-navigation-drawer app v-model="drawer" class="pink accent-1" dark disable-resize-watcher>
            <v-list>
                <template v-for="(item, index) in items">
                    <v-list-tile :key="index">
                        <v-list-tile-content>
                            {{item.title}}
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-divider :key="`divider-${index}`"></v-divider>
                </template>
            </v-list>
        </v-navigation-drawer>
        
        <v-toolbar app color="pink accent-1" dark>
            <v-toolbar-side-icon class="hidden-md-and-up" @click="drawer = !drawer"></v-toolbar-side-icon>
            <v-spacer class="hidden-md-and-up"></v-spacer>
            <v-toolbar-title class="black--text" @click="routeTo('home-page') ">{{appTitle}}</v-toolbar-title>
            

            <v-btn text small class="hidden-sm-and-down black--text" @click="routeTo('aboutpage')">About</v-btn> 
            

            <div class="text-center">
            <v-menu top :close-on-content-click="closeOnContentClick" offset-y>
            <template v-slot:activator="{ on, attrs }">
                <v-btn
                text small class="hidden-sm-and-down "
                color="black"
                dark
                v-bind="attrs"
                v-on="on"
                >
                Years
                </v-btn>
            </template>

            <v-list>
                <v-list-item
                v-for="(item, index) in items"
                :key="index"
                @click="routeTo(item.title)"
                >
                <v-list-item-title >{{ item.title }}</v-list-item-title>
                </v-list-item>
            </v-list>
            </v-menu>
            </div>
            <v-spacer class="hidden-sm-and-down"></v-spacer>
            <v-btn color="pink lighten-4" class="hidden-sm-and-down black--text" @click="routeTo('meetthecreator')">Meet the Creator</v-btn>
        </v-toolbar>
    </span>
</template>

<script>
export default {
    name: 'AppNavigation',
    data() {
        return {
            appTitle: 'Top Albums',
            drawer: false,
            items: [
                { title: '2020' },
                { title: '2019' },
                { title: '2018' },
                
            ],
            closeOnContentClick: true,
            

        };
    },
    methods: {
    routeTo(newPath) {
      this.$router.push({ path: newPath })
    },
  },
};
</script>

<style scoped>
</style>