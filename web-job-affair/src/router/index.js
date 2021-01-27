import DashboardLayout from "@/layout/DashboardLayout.vue";

import Dashboard from "@/views/Dashboard.vue";
import Compatibility from "@/views/Compatibility.vue";
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
        path: "compatibility",
        name: "Compatibility Test",
        component: Compatibility
      },
      {
        path: "metrics-by-people",
        name: "People metrics",
        component: MetricsByPeople
      },
      {
        path: "metrics-by-jobs",
        name: "Jobs metrics",
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
