<template>
  <v-card max-width="480">
    <v-form ref="form">
      <v-text-field v-model="phone" required> </v-text-field>
      <v-btn @click="validate"> 获取验证码 </v-btn>
    </v-form>
  </v-card>
</template>

<script>
export default {
  data: () => ({}),
  methods: {
    validate() {
      this.$refs.form.validate();
    },
  },
};
</script>
