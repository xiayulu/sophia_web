<template>
  <v-container>
    <v-toolbar color="purple" dark dense>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Settings</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-toolbar>

    <v-list subheader three-line>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>Content filtering</v-list-item-title>
          <v-list-item-subtitle
            >Set the content filtering level to restrict appts that can be
            downloaded</v-list-item-subtitle
          >
        </v-list-item-content>
      </v-list-item>

      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>Password</v-list-item-title>
          <v-list-item-subtitle
            >Require password for purchase or use password to restrict
            purchase</v-list-item-subtitle
          >
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-container>
</template>
