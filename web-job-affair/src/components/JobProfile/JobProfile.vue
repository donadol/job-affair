<template>
  <div class="content">
    <md-card>
      <md-card-header :data-background-color="dataBackgroundColor">
        <h4 class="title">{{title}}</h4>
        <p class="category">{{type}}</p>
      </md-card-header>

      <md-card-content>
        <div class="md-layout-item md-medium-size-100" v-if="responsabilities.size > 0">
          <h5>Responsibilities</h5>
          <div class="alert alert-info" data-notify="container">
            <span 
              v-for="(resp, i) in responsabilities" :key="i"
            >
              {{resp}}
            </span>
          </div>
        </div>

        <div class="md-layout-item md-medium-size-100" v-if="benefits.size > 0">
          <h5>Benefits</h5>
          <div class="alert alert-info" data-notify="container">
            <span 
              v-for="(ben, i) in benefits" :key="i"
            >
              {{ben}}
            </span>
          </div>
        </div>

        <div class="md-layout-item md-medium-size-100" v-if="stockcompensations.size > 0">
          <h5>Stock Compensations</h5>
          <div class="alert alert-info" data-notify="container">
            <span
              v-for="(stock, i) in stockcompensations" :key="i"
            >
              • {{stock}}
            </span>
          </div>
        </div>

        <div class="md-layout-item md-medium-size-100" v-if="requirements.size > 0">
          <h5>Requirements</h5>
          <div class="alert alert-info" data-notify="container">
            <span   
              v-for="(req, i) in requirements" :key="i"
            >
              {{req}}
            </span>
          </div>
        </div>

        <div class="md-layout-item md-medium-size-100" v-if="challenges.size > 0">
          <h5>Challenges</h5>
          <div class="alert alert-info" data-notify="container">
            <span   
              v-for="(cha, i) in challenges" :key="i"
            >
              {{cha}}
            </span>
          </div>
        </div>

        <div class="md-layout-item md-medium-size-100" v-if="careerpath">
          <h5>Career path</h5>
          <div class="alert alert-info" data-notify="container">
            <span>
              {{careerpath}}
            </span>
          </div>
        </div>

        <div class="md-layout-item md-medium-size-100" v-if="teamculture">
          <h5>Team culture</h5>
          <div class="alert alert-info" data-notify="container">
            <span>
              {{teamculture}}
            </span>
          </div>
        </div>

        <div class="md-layout-item md-medium-size-100" v-if="teamstructure">
          <h5>Team structure</h5>
          <div class="alert alert-info" data-notify="container">
            <span 
              v-html="teamstructure"
              class="video"
            >
            </span>
          </div>
        </div>

        <div class="md-layout-item md-medium-size-100" v-if="additional.size > 0">
          <h5>Additional information</h5>
          <div class="alert alert-info" data-notify="container">
            <span   
              v-for="(add, i) in additional" :key="i"
            >
              {{add}}
            </span>
          </div>
        </div>
        
        <div class="md-layout-item md-size-100 text-right">
          <md-button class="md-raised md-success" disabled>Apply</md-button>
        </div>
      </md-card-content>
    </md-card>
  </div>
</template>

<script>
export default {
  name: "job-profile",
  props: {
    dataBackgroundColor: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: "title"
    },
    type: {
      type: String,
      default: "type"
    },
    responsabilities: {
      type: Set,
      default: () => []
    },
    benefits:  {
      type: Set,
      default: () => []
    },
    stockcompensations: {
      type: Set,
      default: () => []
    },
    requirements: {
      type: Set,
      default: () => []
    },
    challenges: {
      type: Set,
      default: () => []
    },
    careerpath: {
      type: String,
      default: ""
    },
    teamculture: {
      type: String,
      default: ""
    },
    teamstructure: {
      type: String,
      default: ""
    },
    additional: {
      type: Set,
      default: () => []
    },
  },
  data() {
    return {};
  },
};
</script>
<style scoped>
.video >>> iframe{
  height: 350px;
}
</style>
