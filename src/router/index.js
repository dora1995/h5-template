import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/Home/HomeView.vue";
import AddContactRecord from "../views/AddContactRecord/AddContactRecordView.vue";
import AddTrip from "../views/AddTrip/AddTripView.vue";
import SubmitSuccess from "../views/SubmitSuccess/SubmitSuccessView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: {
      keepAlive: true
    }
  },
  {
    path: "/addContactRecord",
    name: "addContactRecord",
    component: AddContactRecord,

  },
  {
    path: "/addTrip",
    name: "addTrip",
    component: AddTrip,
  },
  {
    path: "/submitSuccess",
    name: "submitSuccess",
    component: SubmitSuccess,
  },

];

const router = new VueRouter({
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
});

export default router;
