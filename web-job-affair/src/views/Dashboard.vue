<template>
  <div class="content">
    <div class="md-layout">
      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-33"
        v-for="job in this.results"
        :key="job.id"
      >
        <div @click="goToJob(job.id)">
          <job-card
            :type="job.type"
            :title="job.objective"
            :date="job.deadline"
            :organization="job.organizations[0].name"
            :image="
              job.organizations.lenght > 0 ? null : job.organizations[0].picture
            "
          >
          </job-card>
        </div>
      </div>
    </div>
    <div class="button">
      <md-button class="md-raised" @click="nextPage()">
        Load More
      </md-button>
    </div>
  </div>
</template>

<script>
import { JobCard } from "@/components";
import { mapActions, mapState } from "vuex";

export default {
  components: {
    JobCard
  },
  data() {
    return {};
  },
  computed: {
    ...mapState("jobs", ["results", "size", "total"])
  },
  mounted() {
    this.getJobs({ size: 9, offset: 0 });
  },
  methods: {
    ...mapActions("jobs", ["getJobs"]),
    nextPage() {
      if (this.size > this.total) {
        alert("No more jobs");
        return;
      }

      this.getJobs({ size: 9, offset: this.size });
    },
    goToJob(id) {
      this.$router.push({ path: `/jobs/${id}` });
    }
  }
};
</script>

<style scoped>
.button {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
