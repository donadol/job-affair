<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item">
        <chart-card
          :chart-data="getOrganization.data"
          :chart-options="getOrganization.settings.options"
          :chart-responsive-options="getOrganization.settings.responsiveOptions"
          :chart-type="'Bar'"
          data-background-color="red"
        >
          <template slot="content">
            <h4 class="title">5 top companies actively seeking</h4>
          </template>
        </chart-card>
      </div>

      <div class="md-layout-item">
        <chart-card
          :chart-data="getTypes.data"
          :chart-options="getTypes.settings.options"
          :chart-responsive-options="getTypes.settings.responsiveOptions"
          :chart-type="'Pie'"
          data-background-color="green"
        >
          <template slot="content">
            <h4 class="title">Type of work</h4>
          </template>
        </chart-card>
      </div>
      
    </div>

    <div class="md-layout">
      <div class="md-layout-item">
        <chart-card
          :chart-data="getRemote.data"
          :chart-options="getRemote.settings.options"
          :chart-responsive-options="getRemote.settings.responsiveOptions"
          :chart-type="'Pie'"
          data-background-color="blue"
        >
          <template slot="content">
            <h4 class="title">Remote work</h4>
          </template>
        </chart-card>
      </div>
      
      <div class="md-layout-item">
        <chart-card
          :chart-data="getWantedSkills.data"
          :chart-options="getWantedSkills.settings.options"
          :chart-responsive-options="getWantedSkills.settings.responsiveOptions"
          :chart-type="'Bar'"
          data-background-color="purple"
        >
          <template slot="content">
            <h4 class="title">5 most wanted skills</h4>
          </template>
        </chart-card>
      </div>
    </div>
  </div>
</template>

<script>
import { ChartCard } from "@/components";
import { mapActions, mapGetters } from "vuex";

export default {
  components: {
    ChartCard
  },
  computed: {
    ...mapGetters("jobs", [
      "getOrganization",
      "getRemote",
      "getWantedSkills",
      "getTypes"])
  },
  mounted() {
    this.getMetrics();
  },
  methods: {
    ...mapActions("jobs", ["getMetrics"])
  },
  data() {
    return {};
  }
};
</script>
