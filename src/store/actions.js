import {
	RECEVIE_MOVIEONINFOLIST,
	RECEVIE_MOVIECOMINGLIST,
	RECEVIE_CINEMALIST,
	RECEVIE_CITYLIST,
	RECEVIE_LOCATION,
	RECEVIE_DETAILMOVIE,
	RECEVIE_SEARCHLIST
} from "./mutations-type";

import {
	reqMovieOnInfoList,
	reqMovieComingList,
	reqCinemaList,
	reqCityList,
	reqLocation,
	reqDetailMovie,
	reqSearchList
} from '@/api'


export default {
	async getMovieOnInfoList({commit}, {cityId, callback}) {
		const result = await reqMovieOnInfoList(cityId)
		const movieOnInfoList = result.data.movieList
		commit(RECEVIE_MOVIEONINFOLIST, {movieOnInfoList})
		callback && callback()
	},
	
	async getMovieComingList({commit}, {cityId, callback}) {
		const result = await reqMovieComingList(cityId)
		const movieComingList = result.data.comingList
		commit(RECEVIE_MOVIECOMINGLIST, {movieComingList})
		callback && callback()
	},
	
	async getCinemaList({commit}, cityId) {
		const result = await reqCinemaList(cityId)
		const cinemaList = result.data.cinemas
		commit(RECEVIE_CINEMALIST, {cinemaList})
	},
	
	async getCityList({commit}) {
		const result = await reqCityList()
		const cityList = result.data.cities
		commit(RECEVIE_CITYLIST, {cityList})
	},
	
	async getLocation({commit}, callback) {
		const result = await reqLocation()
		const location = result.data
		commit(RECEVIE_LOCATION, {location})
		callback && callback()
	},
	
	async getDetailMovie({commit}, movieId) {
		const result = await reqDetailMovie(movieId)
		const detailMovie = result.data.detailMovie
		commit(RECEVIE_DETAILMOVIE, {detailMovie})
	},
	
	async getSearchList({commit}, {cityId, kw}) {
		const result = await reqSearchList(cityId, kw)
		const searchList = result.data.movies.list
		commit(RECEVIE_SEARCHLIST, {searchList})
	}
}