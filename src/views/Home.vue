<template>
  <v-row justify="center">
    <v-card max-width="720">
      <v-row justify="center">
        <v-col cols="12" sm="10" v-for="(item, i) in items" :key="i">
          <router-link to="/course" class="tex">
            <v-card :color="item.color" dark>
              <div class="d-flex flex-no-wrap justify-start">
                <v-img class="ma-3" max-width="150" :src="item.src"></v-img>
                <div>
                  <v-card-title class="headline" v-text="item.title"></v-card-title>
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
    items: [
      {
        color: "#1F7087",
        src: "https://cdn.vuetifyjs.com/images/cards/foster.jpg",
        title: "概率论",
        description:
          "用户每天都在对“看过”的电影进行“很差”到“力荐”的评价,豆瓣根据每部影片看过的人数以及该影片所得的评价等综合数据,通过算法分析产生豆瓣电影 Top 250。",
        author: "乔布斯",
        numbers: 2890822,
      },
      {
        color: "#952175",
        src: "https://cdn.vuetifyjs.com/images/cards/halcyon.png",
        title: "高等数学",
        description:
          "用户每天都在对“看过”的电影进行“很差”到“力荐”的评价,豆瓣根据每部影片看过的人数以及该影片所得的评价等综合数据,通过算法分析产生豆瓣电影 Top 250。",
        author: "马云",
        numbers: 2890822,
      },
    ],
  }),
};
</script>

<style lang="css" scoped>
a {
  text-decoration: none;
}
</style>
