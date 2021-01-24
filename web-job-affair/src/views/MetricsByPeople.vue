<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item">
        <chart-card
          :chart-data="getMostCommonSkills.data"
          :chart-options="getMostCommonSkills.settings.options"
          :chart-responsive-options="
            getMostCommonSkills.settings.responsiveOptions
          "
          :chart-type="'Bar'"
          data-background-color="red"
        >
          <template slot="content">
            <h4 class="title">5 most common skills</h4>
          </template>
        </chart-card>
      </div>

      <div class="md-layout-item">
        <chart-card
          :chart-data="getMoreOpenTo.data"
          :chart-options="getMoreOpenTo.settings.options"
          :chart-responsive-options="getMoreOpenTo.settings.responsiveOptions"
          :chart-type="'Pie'"
          data-background-color="blue"
        >
          <template slot="content">
            <h4 class="title">People are open to</h4>
          </template>
        </chart-card>
      </div>
    </div>

    <div class="md-layout">
      <div class="md-layout-item">
        <chart-card
          :chart-data="getRemoter.data"
          :chart-options="getRemoter.settings.options"
          :chart-responsive-options="getRemoter.settings.responsiveOptions"
          :chart-type="'Pie'"
          data-background-color="green"
        >
          <template slot="content">
            <h4 class="title">Remote work</h4>
          </template>
        </chart-card>
      </div>

      <div class="md-layout-item">
        <chart-card
          :chart-data="getCompensationRange.data"
          :chart-options="getCompensationRange.settings.options"
          :chart-responsive-options="
            getCompensationRange.settings.responsiveOptions
          "
          :chart-type="'Bar'"
          data-background-color="purple"
        >
          <template slot="content">
            <h4 class="title">Compensation range</h4>
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
    ...mapGetters("people", [
      "getMostCommonSkills",
      "getMoreOpenTo",
      "getRemoter",
      "getCompensationRange"
    ])
  },
  mounted() {
    this.getMetrics();
  },
  methods: {
    ...mapActions("people", ["getMetrics"])
  },
  data() {
    return {};
  }
};
</script>
