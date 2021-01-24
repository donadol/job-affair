<template>
  <div class="content">
    <div class="md-layout">
      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-33"
        v-for="job in this.jobs.results"
        :key="job.id"
      >
        <job-card
          :type="job.type"
          :title="job.objective"
          :date="job.deadline"
          :image="
            job.organizations.lenght > 0 ? null : job.organizations[0].picture
          "
        >
        </job-card>
      </div>
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
    ...mapState("jobs", ["jobs"])
  },
  mounted() {
    this.getJobs({ size: 9, offset: 0 });
  },
  methods: {
    ...mapActions("jobs", ["getJobs"])
  },
  computed: {
    ...mapState("jobs", ["jobs"])
  }
};
</script>
