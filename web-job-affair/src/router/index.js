import DashboardLayout from "@/layout/DashboardLayout.vue";

import Dashboard from "@/views/Dashboard.vue";
import UserProfile from "@/views/UserProfile.vue";
import MetricsByPeople from "@/views/MetricsByPeople.vue";
import MetricsByJobs from "@/views/MetricsByJobs.vue";
import JobInfo from "@/views/JobInfo.vue";

const routes = [
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        name: "Dashboard",
        component: Dashboard
      },
      {
        path: "user",
        name: "User Profile",
        component: UserProfile
      },
      {
        path: "metrics-by-people",
        name: "Metrics By People",
        component: MetricsByPeople
      },
      {
        path: "metrics-by-jobs",
        name: "Metrics By Jobs",
        component: MetricsByJobs
      },
      {
        path: "jobs/:id",
        name: "Job Information",
        component: JobInfo
      }
    ]
  }
];

export default routes;
