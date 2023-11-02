import DashboardLayout from "@/pages/Layout/DashboardLayout.vue";

import Dashboard from "@/pages/Dashboard.vue";
import UserProfile from "@/pages/UserProfile.vue";
import TableList from "@/pages/TableList.vue";
import Typography from "@/pages/Typography.vue";
import Icons from "@/pages/Icons.vue";
import Maps from "@/pages/Maps.vue";
import Notifications from "@/pages/Notifications.vue";
import UpgradeToPRO from "@/pages/UpgradeToPRO.vue";
import Timeline from "@/pages/Timeline.vue";

const routes = [
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/maps",
    children: [
      {
        path: "dashboard",
        name: "儀表板",
        component: Dashboard,
      },
      {
        path: "user",
        name: "VMS 管理系統",
        component: UserProfile,
      },
      {
        path: "table",
        name: "漁獲速報",
        component: TableList,
      },
      {
        path: "maps",
        name: "地圖",
        meta: {
          hideFooter: true,
        },
        component: Maps,
      },
      {
        path: "upgrade",
        name: "Upgrade to PRO",
        component: UpgradeToPRO,
      },
      {
        path: "notifications",
        name: "Notifications",
        component: Timeline
      }
    ],
  },
];

export default routes;
