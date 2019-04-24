import Vue from "vue";
import Router from "vue-router";
import movie from "./movie";
import cinema from "./cinema";
import mine from "./mine";
import pageDetail from "./pageDetail";

Vue.use(Router);

export default new Router({
  routes: [
		{
			path: '/',
			redirect: '/movie/ing'
		},
    movie,
		cinema,
		mine,
		pageDetail
  ]
});
