const Movie = () => import('@/views/Movie/Movie.vue')
import position from './position'
import ing from './ing'
import soon from './soon'
import search from './search'
	
export default {
	path: '/movie',
	redirect: '/movie/ing',
	component: Movie,
	children: [
		position,
		ing,
		soon,
		search
	]
}