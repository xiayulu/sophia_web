<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" sm="10">
        <v-sheet min-height="70vh" rounded="lg">
          <v-list dense>
            <v-list-item-group v-model="selectedItem" color="primary">
              <v-list-item v-for="(chapter, i) in chapters" :key="i">
                <v-list-item-icon>
                  <v-icon v-text="i"></v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title v-text="chapter.text"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "ChapterList",
  data: () => ({
    selectedItem: 1,
    chapters: [
      { text: "随机变量", icon: "mdi-clock" },
      { text: "规律分布", icon: "mdi-account" },
      { text: "多维概率分布Conversions", icon: "mdi-flag" },
    ],
  }),
};
</script>
