import Vue from "vue";
import store from "./store";
// import {isMobile} from "mobile-device-detect";
import Router from "vue-router";
import NProgress from "nprogress";
import authenticate from "./auth/authenticate";

Vue.use(Router);

// create new router

const routes = [
  {
    path: "/",
    component: () => import("./views/app"), //webpackChunkName app
    beforeEnter: authenticate,
    redirect: "/app/dashboards/dashboard.v1",

    children: [
      {
        path: "/app/dashboards",
        component: () => import("./views/app/dashboards"), //dashboard
        children: [
          {
            path: "dashboard.v1",
            name: "dashboard.v1",
            component: () => import("./views/app/dashboards/dashboard.v1"),
          },
          {
            path: "dashboard.v2",
            name: "dashboard.v2",
            component: () => import("./views/app/dashboards/dashboard.v2"),
          },
          {
            path: "dashboard.v3",
            name: "dashboard.v3",
            component: () => import("./views/app/dashboards/dashboard.v3"),
          },
          {
            path: "dashboard.v4",
            name: "dashboard.v4",
            component: () => import("./views/app/dashboards/dashboard.v4"),
          },
        ],
      },
      // Sites
      {
        path: "/app/sites",
        component: () => import("./views/app/sites"),
        redirect: "/app/sites/list",
        children: [
          {
            path: "list",
            component: () => import("./views/app/sites/list"),
          },
          {
            path: "create",
            component: () => import("./views/app/sites/create"),
          },
          {
            path: "id",
            component: () => import("./views/app/sites/id"),
          },
        ],
      },
      // Users
      {
        path: "/app/users",
        component: () => import("./views/app/users"),
        redirect: "/app/users/list",
        children: [
          {
            path: "list",
            component: () => import("./views/app/users/list"),
          },
          {
            path: "create",
            component: () => import("./views/app/users/create"),
          },
          {
            path: "id",
            component: () => import("./views/app/users/id"),
          },
        ],
      },
      // Permissions
      {
        path: "/app/permissions",
        component: () => import("./views/app/permissions"),
        redirect: "/app/permissions/list",
        children: [
          {
            path: "list",
            component: () => import("./views/app/permissions/list"),
          },
        ],
      },
      // Programs
      {
        path: "/app/programs",
        component: () => import("./views/app/programs"),
        redirect: "/app/programs/list",
        children: [
          {
            path: "list",
            component: () => import("./views/app/programs/list"),
          },
          {
            path: "create",
            component: () => import("./views/app/programs/create"),
          },
          {
            path: "id",
            component: () => import("./views/app/programs/id"),
          },
        ],
      },
      // Values
      {
        path: "/app/values",
        component: () => import("./views/app/values"),
        redirect: "/app/values/list",
        children: [
          {
            path: "list",
            component: () => import("./views/app/values/list"),
          },
          {
            path: "create",
            component: () => import("./views/app/values/create"),
          },
          {
            path: "id",
            component: () => import("./views/app/values/id"),
          },
        ],
      },
      // Value-Lists
      {
        path: "/app/value-lists",
        component: () => import("./views/app/value-lists"),
        redirect: "/app/value-lists/list",
        children: [
          {
            path: "list",
            component: () => import("./views/app/value-lists/list"),
          },
          {
            path: "create",
            component: () => import("./views/app/value-lists/create"),
          },
          {
            path: "id",
            component: () => import("./views/app/value-lists/id"),
          },
        ],
      },
      // Program Posts
      {
        path: "/app/program-posts",
        component: () => import("./views/app/program-posts"),
        redirect: "/app/program-posts/list",
        children: [
          {
            path: "list",
            component: () => import("./views/app/program-posts/list"),
          },
          {
            path: "create",
            component: () => import("./views/app/program-posts/create"),
          },
          {
            path: "id",
            component: () => import("./views/app/program-posts/id"),
          },
        ],
      },
      // Program Tasks
      {
        path: "/app/programs/id/program-tasks",
        component: () => import("./views/app/program-tasks"),
        redirect: "/app/programs/id/program-tasks/list",
        children: [
          {
            path: "list",
            component: () => import("./views/app/program-tasks/list"),
          },
          {
            path: "create",
            component: () => import("./views/app/program-tasks/create"),
          },
          {
            path: "id",
            component: () => import("./views/app/program-tasks/id"),
          },
        ],
      },
      // User Programs
      {
        path: "/app/user-programs",
        component: () => import("./views/app/user-programs"),
        redirect: "/app/user-programs/list",
        children: [
          {
            path: "list",
            component: () => import("./views/app/user-programs/list"),
          },
          {
            path: "create",
            component: () => import("./views/app/user-programs/create"),
          },
          {
            path: "id",
            component: () => import("./views/app/user-programs/id"),
          },
        ],
      },
      // User Program Posts
      {
        path: "/app/user-program-posts",
        component: () => import("./views/app/user-program-posts"),
        redirect: "/app/user-program-posts/list",
        children: [
          {
            path: "list",
            component: () => import("./views/app/user-program-posts/list"),
          },
          {
            path: "create",
            component: () => import("./views/app/user-program-posts/create"),
          },
          {
            path: "id",
            component: () => import("./views/app/user-program-posts/id"),
          },
        ],
      },
      // User Program Tasks
      {
        path: "/app/user-program-tasks",
        component: () =>
          import("./views/app/user-program-tasks/user-program-task-list"),
        redirect: "/app/user-program-tasks/list",
        children: [
          {
            path: "list",
            component: () =>
              import("./views/app/user-program-tasks/user-program-task-list"),
          },
        ],
      },
      // User Program Tasks details
      {
        path: "/app/user-program/id/user-program-tasks",
        component: () => import("./views/app/user-program-tasks"),
        redirect: "/app/user-program/id/user-program-tasks/list",
        children: [
          {
            path: "list",
            component: () => import("./views/app/user-program-tasks/list"),
          },
          {
            path: "create",
            component: () => import("./views/app/user-program-tasks/create"),
          },
          {
            path: "id",
            component: () => import("./views/app/user-program-tasks/id"),
          },
        ],
      },
      //ui-kits
      {
        path: "/app/ui-kits",
        component: () => import("./views/app/ui-kits"),
        redirect: "/app/ui-kits/alerts",
        children: [
          {
            path: "alerts",
            name: "alerts",
            component: () => import("./views/app/ui-kits/alerts"),
          },
          {
            path: "accordion",
            name: "accordion",
            component: () => import("./views/app/ui-kits/accordion"),
          },
          {
            path: "badges",
            name: "badges",
            component: () => import("./views/app/ui-kits/badges"),
          },
          {
            path: "buttons",
            name: "buttons",
            component: () => import("./views/app/ui-kits/buttons"),
          },
          {
            path: "bootstrap-tab",
            name: "bootstrap-tab",
            component: () => import("./views/app/ui-kits/bootstrap-tab"),
          },
          {
            path: "cards",
            name: "cards",
            component: () => import("./views/app/ui-kits/cards"),
          },
          {
            path: "list",
            name: "list",
            component: () => import("./views/app/ui-kits/list"),
          },
          {
            path: "popover",
            name: "popover",
            component: () => import("./views/app/ui-kits/popover"),
          },
          {
            path: "progressbar",
            name: "progressbar",
            component: () => import("./views/app/ui-kits/progressbar"),
          },
          {
            path: "collapsible",
            name: "collapsible",
            component: () => import("./views/app/ui-kits/collapsible"),
          },
          {
            path: "modals",
            name: "modals",
            component: () => import("./views/app/ui-kits/modals"),
          },
          {
            path: "typography",
            name: "typography",
            component: () => import("./views/app/ui-kits/typography"),
          },
          {
            path: "carousel",
            name: "carousel",
            component: () => import("./views/app/ui-kits/carousel"),
          },
          {
            path: "pagination",
            name: "pagination",
            component: () => import("./views/app/ui-kits/pagination"),
          },
          // {
          //   path: "slider",
          //   component: () => import("./views/app/ui-kits/sliders")
          // }
        ],
      },

      //uiExtraK+its
      {
        path: "/app/extraKits",
        component: () => import("./views/app/extraKits"),
        redirect: "/app/extraKits/dropdown",
        children: [
          {
            path: "dropdown",
            component: () => import("./views/app/extraKits/dropdown"),
          },
          {
            path: "loaders",
            component: () => import("./views/app/extraKits/loaders"),
          },
          {
            path: "sweetAlerts",
            component: () => import("./views/app/extraKits/sweetAlerts"),
          },
          {
            path: "toasts",
            component: () => import("./views/app/extraKits/toasts"),
          },
          {
            path: "tour",
            component: () => import("./views/app/extraKits/tour"),
          },
          {
            path: "calendar",
            component: () => import("./views/app/extraKits/calendar"),
          },
          {
            path: "rating",
            component: () => import("./views/app/extraKits/rating"),
          },
          {
            path: "spinButton",
            component: () => import("./views/app/extraKits/spinButton"),
          },
          {
            path: "datePicker",
            component: () => import("./views/app/extraKits/datePicker"),
          },
          {
            path: "timePicker",
            component: () => import("./views/app/extraKits/timePicker"),
          },
          {
            path: "imageCropper",
            component: () => import("./views/app/extraKits/imageCropper"),
          },
          {
            path: "vuedraggable",
            component: () => import("./views/app/extraKits/vuedraggable"),
          },
          {
            path: "avatar",
            component: () => import("./views/app/extraKits/avatar"),
          },
          {
            path: "sidebar",
            component: () => import("./views/app/extraKits/sidebar"),
          },
          {
            path: "spinners",
            component: () => import("./views/app/extraKits/spinners"),
          },
          {
            path: "vueTree",
            component: () => import("./views/app/extraKits/vueTree"),
          },
        ],
      },
      //  apps
      {
        path: "/app/apps",
        component: () => import("./views/app/apps"),
        redirect: "/app/apps/chat",
        children: [
          {
            path: "scrumboard",
            name: "scrumboard",
            component: () => import("./views/app/apps/scrumboard"),
          },
          {
            path: "add-scrumboard",
            name: "add-scrumboard",
            component: () => import("./views/app/apps/scrumboardAddBoard"),
          },
          {
            path: "edit-scrumboard",
            name: "edit-scrumboard",
            component: () =>
              import("./views/app/apps/scrumboard/editScrumBoard"),
          },
          // {
          //   path: "scrumboard-one",
          //   component: () => import("./views/app/apps/scrumboard/scrumboard-content-one")
          // },
          {
            path: "contact-list-table",
            name: "contact-list-table",
            component: () => import("./views/app/apps/contactListTable"),
          },
          {
            path: "todo-list",
            name: "todo-list",
            component: () => import("./views/app/apps/todo-list"),
          },
          {
            path: "invoice",
            name: "invoice",
            component: () => import("./views/app/apps/invoice"),
          },
          {
            path: "createInvoice",
            name: "createInvoice",
            component: () => import("./views/app/apps/createInvoice"),
          },
          {
            path: "edit-invoice",
            name: "edit-invoice",
            component: () => import("./views/app/apps/editInvoice"),
          },
          {
            path: "products",
            name: "products",
            component: () => import("./views/app/apps/products"),
          },
          {
            path: "product-detail",
            name: "product-detail",
            component: () => import("./views/app/apps/productDetails"),
          },
          {
            path: "checkout",
            name: "checkout",
            component: () => import("./views/app/apps/cart"),
          },
          {
            path: "checkout-address",
            name: "checkout-address",
            component: () => import("./views/app/apps/checkoutAddress"),
          },
          {
            path: "printInvoice",
            name: "printInvoice",
            component: () => import("./views/app/apps/printInvoice"),
          },
          {
            path: "taskManager",
            name: "taskManager",
            component: () => import("./views/app/apps/taskManager"),
          },
          {
            path: "calendar",
            name: "calendar",
            component: () => import("./views/app/apps/calendar"),
          },
          {
            path: "table",
            name: "table",
            component: () => import("./views/app/apps/table"),
          },
          {
            path: "vue-table",
            path: "vue-table",
            component: () => import("./views/app/apps/vue-tables"),
          },
          {
            path: "inbox",
            name: "inbox",
            component: () => import("./views/app/apps/inbox"),
          },
          {
            path: "chat",
            component: () => import("./views/app/apps/chat"),
          },
          {
            path: "contact-details",
            component: () => import("./views/app/apps/contact-details"),
          },
          {
            path: "contact-grid",
            component: () => import("./views/app/apps/contact-grid"),
          },
          {
            path: "contact-list",
            component: () => import("./views/app/apps/contact-list"),
          },
          {
            path: "payment-checkout",
            component: () => import("./views/app/apps/paymentCheckout"),
          },
        ],
      },

      // form
      {
        path: "/app/forms",
        component: () => import("./views/app/form"),
        redirect: "/app/form/basicForms",
        children: [
          {
            path: "basicForms",
            component: () => import("./views/app/form/basicForms"),
          },
          {
            path: "basicActionBar",
            component: () => import("./views/app/form/basicActionBar"),
          },
          {
            path: "formLayouts",
            component: () => import("./views/app/form/formLayouts"),
          },
          {
            path: "formWizard",
            component: () => import("./views/app/form/formWizard"),
          },
          {
            path: "tagInput",
            component: () => import("./views/app/form/tagInput"),
          },
          {
            path: "mask",
            component: () => import("./views/app/form/masks"),
          },
          {
            path: "formComponent",
            component: () => import("./views/app/form/formComponent"),
          },
          {
            path: "datepicker",
            component: () => import("./views/app/form/datepicker"),
          },
          {
            path: "V2Datepicker",
            component: () => import("./views/app/form/V2Datepicker"),
          },
        ],
      },
      // datatables
      {
        path: "/app/datatables",
        component: () => import("./views/app/datatables"),
        redirect: "/app/datatables/list",
        children: [
          {
            path: "paging",
            name: "paging",
            component: () => import("./views/app/datatables/paging"),
          },
          {
            path: "filter",
            name: "filter",
            component: () => import("./views/app/datatables/filter"),
          },
          {
            path: "list",
            name: "list",
            component: () => import("./views/app/datatables/list"),
          },
          {
            path: "vue-good-table",
            name: "vue-good-table",
            component: () => import("./views/app/apps/vue-good-table"),
          },
        ],
      },

      // widget
      {
        path: "/app/widgets",
        component: () => import("./views/app/widgets"),
        redirect: "/app/widgets/widgetCard",
        children: [
          {
            path: "widgetCard",
            component: () => import("./views/app/widgets/widgetCard"),
          },
          {
            path: "widgetStatistics",
            component: () => import("./views/app/widgets/widgetStatistics"),
          },
          {
            path: "weatherApp",
            component: () => import("./views/app/widgets/weatherApp"),
          },
          {
            path: "widgetApp",
            component: () => import("./views/app/widgets/widgetApp"),
          },
          {
            path: "widgetList",
            component: () => import("./views/app/widgets/widgetList"),
          },
        ],
      },
      // pages
      {
        path: "/app/pages",
        component: () => import("./views/app/pages"),
        redirect: "/app/pages/profile",
        children: [
          {
            path: "profile",
            component: () => import("./views/app/pages/profile"),
          },
          {
            path: "error",
            component: () => import("./views/app/pages/notFound"),
          },
          {
            path: "icons",
            component: () => import("./views/app/pages/icons"),
          },
          {
            path: "search-result",
            component: () => import("./views/app/pages/search-result"),
          },
          {
            path: "pricing-table",
            component: () => import("./views/app/pages/pricingTable"),
          },
          {
            path: "faq",
            component: () => import("./views/app/pages/faq"),
          },
        ],
      },

      // chart_componnent//////////----------------------////////////////////////

      {
        path: "/app/charts",
        component: () => import("./views/app/chart"),
        redirect: "/app/charts/eChart",
        children: [
          {
            path: "eChart",
            component: () => import("./views/app/chart/echart"),
          },
          {
            // problem
            path: "apexAreaChart",
            component: () => import("./views/app/chart/apexChart"),
          },
          {
            path: "apexBarChart",
            component: () => import("./views/app/chart/apexBarChart"),
          },
          // {
          //   path: "apexBasicChart",
          //   component: () => import("./views/app/chart/apexBasicChart")
          // },
          {
            path: "apexLineChart",
            component: () => import("./views/app/chart/apexLineChart"),
          },
          {
            path: "apexMixChart",
            component: () => import("./views/app/chart/apexMixChart"),
          },
          {
            path: "apexColumnChart",
            component: () => import("./views/app/chart/apexColumnChart"),
          },
          {
            path: "apexPieDonutsChart",
            component: () => import("./views/app/chart/apexPieDonutsChart"),
          },
          {
            path: "apexRadarChart",
            component: () => import("./views/app/chart/apexRadarChart"),
          },
          {
            path: "apexRadialBarChart",
            component: () => import("./views/app/chart/apexRadialBarChart"),
          },
          {
            path: "apexScatterChart",
            component: () => import("./views/app/chart/apexScatterChart"),
          },
          {
            path: "apexSparklineChart",
            component: () => import("./views/app/chart/apexSparklineChart"),
          },
        ],
      },
    ],
  },
  // sessions
  {
    path: "/app/sessions",
    component: () => import("./views/app/sessions"),
    redirect: "/app/sessions/signIn",
    children: [
      {
        path: "signIn",
        component: () => import("./views/app/sessions/signIn"),
      },
      {
        path: "signUp",
        component: () => import("./views/app/sessions/signUp"),
      },
      {
        path: "forgot",
        component: () => import("./views/app/sessions/forgot"),
      },
    ],
  },

  {
    path: "/vertical-sidebar",
    component: () => import("./containers/layouts/verticalSidebar"),
  },
  {
    path: "*",
    component: () => import("./views/app/pages/notFound"),
  },
];

const router = new Router({
  mode: "history",
  linkActiveClass: "open",
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  },
});

router.beforeEach((to, from, next) => {
  // If this isn't an initial page load.
  if (to.path) {
    // Start the route progress bar.

    NProgress.start();
    NProgress.set(0.1);
  }
  next();
});

router.afterEach(() => {
  // Remove initial loading
  const gullPreLoading = document.getElementById("loading_wrap");
  if (gullPreLoading) {
    gullPreLoading.style.display = "none";
  }
  // Complete the animation of the route progress bar.
  setTimeout(() => NProgress.done(), 500);
  // NProgress.done();
  // if (isMobile) {
  if (window.innerWidth <= 1200) {
    // console.log("mobile");
    store.dispatch("changeSidebarProperties");
    if (store.getters.getSideBarToggleProperties.isSecondarySideNavOpen) {
      store.dispatch("changeSecondarySidebarProperties");
    }

    if (store.getters.getCompactSideBarToggleProperties.isSideNavOpen) {
      store.dispatch("changeCompactSidebarProperties");
    }
  } else {
    if (store.getters.getSideBarToggleProperties.isSecondarySideNavOpen) {
      store.dispatch("changeSecondarySidebarProperties");
    }

    // store.state.sidebarToggleProperties.isSecondarySideNavOpen = false;
  }
});

export default router;
