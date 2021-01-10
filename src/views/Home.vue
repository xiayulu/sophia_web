<template>
  <v-row justify="center">
    <v-card max-width="720">
      <v-row justify="center">
        <v-col cols="12" sm="10" v-for="(item, i) in repos" :key="i">
          <router-link :to="convertLink(item.name)" class="tex">
            <v-card color="green">
              <div class="d-flex flex-no-wrap justify-start">
                <v-img class="ma-3" max-width="150" :src="item.src"></v-img>
                <div>
                  <v-card-title class="headline" v-text="item.name"></v-card-title>
                  <p class="ma-3">{{ item.description }}</p>
                  <p class="ma-3">作者：{{ item.author }}</p>
                  <p class="ma-3">{{ item.numbers }} 学习</p>
                </div>
              </div>
            </v-card>
          </router-link>
        </v-col>
      </v-row>
    </v-card>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    linkTocCourse: "",
    repos: [],
  }),
  computed: {
    convertLink() {
      return (link) => `course/${link}`;
    },
  },
  mounted() {
    this.axios
      .get("/api/repos/")
      .then((res) => {
        this.repos = res.data;
      })
      .catch((err) => console.log(err));
  },
};
</script>

<style lang="css" scoped>
a {
  text-decoration: none;
}
</style>
