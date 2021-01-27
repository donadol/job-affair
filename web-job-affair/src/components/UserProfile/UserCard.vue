<template>
  <md-card class="md-card-profile">
    <div class="md-card-avatar">
      <img class="img" :src="image" />
    </div>

    <md-card-content>
      <h6 class="category text-gray">{{ headline }}</h6>
      <h4 class="card-title">{{ name }}</h4>
      <p class="card-description">
        {{ description }}
      </p>
      <md-button class="md-round md-success" disabled>Follow</md-button>
    </md-card-content>
  </md-card>
</template>
<script>
export default {
  name: "user-card",
  props: {
    image: {
      type: String,
      default: require("@/assets/img/unknown.png")
    },
    headline: {
      type: String,
      default: ""
    },
    name: {
      type: String,
      default: ""
    },
    description: {
      type: String,
      default: ""
    }
  },
  data() {
    return {};
  }
};
</script>
<style></style>
