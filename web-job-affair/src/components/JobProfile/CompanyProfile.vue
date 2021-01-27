<template>
  <md-card class="md-card-profile">
    <div class="md-card-avatar">
      <img class="img" :src="image" />
    </div>

    <md-card-content>
      <h6 class="category text-gray">Company</h6>
      <h4 class="card-title">{{ title }}</h4>
      <p class="card-description">
        {{ description }}
      </p>
      <md-button class="md-round md-success" disabled>
        More about the company
      </md-button>
    </md-card-content>
  </md-card>
</template>
<script>
export default {
  name: "job-profile",
  props: {
    image: {
      type: String,
      default: require("@/assets/img/unknown.png")
    },
    title: {
      type: String,
      default: "title"
    },
    description: {
      type: String,
      default: "description"
    }
  },
  data() {
    return {};
  }
};
</script>
<style></style>
