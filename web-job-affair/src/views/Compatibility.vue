<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-size-66">
        <search-form
          data-background-color="green"
          @clicked="calculateCompatibility"
        >
        </search-form>

        <md-card v-show="skills">
          <md-card-content>
            <vue-ellipse-progress
							class="md-size-66"
              :progress="match"
              :angle="-90"
              color="#4caf50"
              :size="300"
              :thickness="10"
              :legendValue="match"
              :legendFormatter="
                ({ currentValue }) =>
                  new Intl.NumberFormat('de-DE').format(currentValue)
              "
              legendClass="legend-custom-style"
              animation="reverse 700 400"
              fontColor="black"
              :gap="10"
              fontSize="5rem"
            >
              <span slot="legend-value">%</span>
            </vue-ellipse-progress>

            <div class="alert alert-info md-size-33">
              <h4>Matching skills:</h4>
              <span v-for="skill in skills" :key="skill"> • {{ skill }} </span>
            </div>
          </md-card-content>
        </md-card>
      </div>

      <div class="md-layout-item md-medium-size-100 md-size-33">
        <company-profile
          v-show="objective != ''"
          :title="getCompanyName()"
          :description="getDescription()"
          :image="getImage()"
        >
        </company-profile>
        <user-card
          v-show="person.name != ''"
          :headline="person.professionalHeadline"
          :name="person.name"
          :description="person.summaryOfBio"
          :image="person.picture"
        >
        </user-card>
      </div>
    </div>
  </div>
</template>

<script>
import { UserCard, CompanyProfile, SearchForm } from "@/components";
import { mapActions, mapState } from "vuex";

export default {
  components: {
    UserCard,
    CompanyProfile,
    SearchForm
  },
  data() {
    return {};
  },
  computed: {
    ...mapState("user", ["person"]),
    ...mapState("job", ["objective", "details", "organizations"]),
    ...mapState("compatibility", ["match", "skills"])
  },
  methods: {
    ...mapActions("job", ["getJob"]),
    ...mapActions("user", ["getUser"]),
    ...mapActions("compatibility", ["getCompatibility"]),
    getDescription() {
      if (this.details == undefined) {
        return "";
      }

      for (let detail of this.details) {
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
    calculateCompatibility(username, opportunityid) {
      this.getJob(opportunityid);
      this.getUser(username);
      this.getCompatibility({ jobid: opportunityid, username: username });
    }
  }
};
</script>
