<template>
  <stats-card data-background-color="green">
    <template slot="header">
      <img class="img" :src="image" />
    </template>

    <template slot="content">
      <h3 class="title">{{ title }}</h3>
      <p class="category">{{ getJobTypes(type) }}</p>
    </template>

    <template slot="footer">
      <div class="stats">
        <md-icon>date_range</md-icon>
        {{ formatDate(date) }}
      </div>
    </template>
  </stats-card>
</template>
<script>
import StatsCard from "./StatsCard";
import JOB_TYPES from "@/models/jobtypes";

export default {
  name: "job-card",
  components: {
    StatsCard
  },
  props: {
    image: {
      type: String,
      default: require("@/assets/img/faces/marc.jpg")
    },
    type: {
      type: String,
      default: "Type"
    },
    title: {
      type: String,
      default: "Title"
    },
    date: {
      type: String,
      default: "Date"
    }
  },
  methods: {
    formatDate(date) {
      if (date == null) {
        return "No deadline";
      }
      var d = new Date(date),
        month = "" + (d.getMonth() + 1),
        day = "" + d.getDate(),
        year = d.getFullYear();

      if (month.length < 2) month = "0" + month;
      if (day.length < 2) day = "0" + day;

      return [year, month, day].join("-");
    },
    getJobTypes(type) {
      //return JOB_TYPES[type];// FIXME
      return type;
    }
  },
  data() {
    return {};
  }
};
</script>

<style scoped>
.img {
  width: 70px;
  margin: 0;
}
</style>
