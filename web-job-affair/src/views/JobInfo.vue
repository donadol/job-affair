<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-size-66">
        <job-profile data-background-color="green"
          :title="objective"
          :type="commitment.code"
          :responsabilities="getResponsabilities()"
          :benefits="getBenefits()"
          :stockcompensations="getStockCompensations()"
          :requirements="getRequirements()"
          :challenges="getChallenges()"
          :careerpath="getCareerPath()"
          :teamculture="getTeamCulture()"
          :teamstructure="getTeamStructure()"
          :additional="getAdditional()"
        > </job-profile>
      </div>
      <div class="md-layout-item md-medium-size-100 md-size-33" >
        <company-profile
          :title="getCompanyName()"
          :description="getDescription()"
          :image="getImage()"
        >
        </company-profile>
      </div>
    </div>
  </div>
</template>

<script>
import { CompanyProfile, JobProfile } from "@/components"
import { mapActions, mapState } from "vuex";

export default {
  components: {
    JobProfile,
    CompanyProfile
  },
  computed: {
    ...mapState("job", ["objective", "details", "commitment", "organizations"])
  },
  mounted() {
    this.getJob(this.$route.params.id);
  },
  methods: {
    ...mapActions("job", ["getJob"]),
    getDescription() {
      if (this.details == undefined) {
        return "";
      }

      for(let detail of this.details){
        if (detail.code == "reason") {
          return detail.content;
        }
      }

      return "";
    },
    getCompanyName() {
      if (this.organizations == undefined || this.organizations.length == 0) {
        return "";
      }

      return this.organizations[0].name;
    },
    getImage() {
      if (this.organizations == undefined || this.organizations.length == 0) {
        return "";
      }

      return this.organizations[0].picture;
    },
    getResponsabilities() {
      let responsabilities = new Set();
      if (this.details == undefined) {
        return responsabilities;
      }

      for(let detail of this.details){
        if (detail.code == "responsibilities") {
          detail.content.split("\n").forEach(responsabilities.add, responsabilities)
        }
      }

      return responsabilities;
    },
    getBenefits() {
      let benefits = new Set();
      if (this.details == undefined) {
        return benefits;
      }

      for(let detail of this.details){
        if (detail.code == "benefits") {
          benefits.add(detail.content);
        }
      }

      return benefits;
    },
    getStockCompensations() {
      let stockcompensations = new Set();
      if (this.details == undefined) {
        return stockcompensations;
      }

      for(let detail of this.details){
        if (detail.code == "stock-compensations") {
          stockcompensations.add(detail.content);
        }
      }

      return stockcompensations;
    },
    getRequirements() {
      let requirements = new Set();
      if (this.details == undefined) {
        return requirements;
      }

      for(let detail of this.details){
        if (detail.code == "requirements") {
          detail.content.split("\n").forEach(requirements.add, requirements)
        }
      }

      return requirements;
    },
    getChallenges() {
      let challenges = new Set();
      if (this.details == undefined) {
        return challenges;
      }

      for(let detail of this.details){
        if (detail.code == "challenges") {
          detail.content.split("\n").forEach(challenges.add, challenges)
        }
      }

      return challenges;
    },
    getCareerPath() {
      if (this.details == undefined) {
        return "";
      }

      for(let detail of this.details){
        if (detail.code == "career-path") {
          return detail.content
        }
      }

      return "";
    },
    getTeamCulture() {
      if (this.details == undefined) {
        return "";
      }

      for(let detail of this.details){
        if (detail.code == "team-culture") {
          return detail.content
        }
      }

      return "";
    },
    getTeamStructure() {
      if (this.details == undefined) {
        return "";
      }

      for(let detail of this.details){
        if (detail.code == "team-structure") {
          return detail.content
        }
      }

      return "";
    },
    getAdditional() {
      let additional = new Set();
      if (this.details == undefined) {
        return additional;
      }

      for(let detail of this.details){
        if (detail.code == "additional") {
          detail.content.split("\n").forEach(additional.add, additional)
        }
      }

      return additional;
    },
  },
  data() {
    return {};
  }
};
</script>
