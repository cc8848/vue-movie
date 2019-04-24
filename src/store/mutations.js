import {
	RECEVIE_MOVIEONINFOLIST,
	RECEVIE_MOVIECOMINGLIST,
	RECEVIE_CINEMALIST,
	RECEVIE_CITYLIST,
	RECEVIE_LOCATION,
	RECEVIE_DETAILMOVIE,
	RECEVIE_SEARCHLIST
} from "./mutations-type";

export default {
	[RECEVIE_MOVIEONINFOLIST](state, {movieOnInfoList}) {
		state.movieOnInfoList = movieOnInfoList
	},
	
	[RECEVIE_MOVIECOMINGLIST](state, {movieComingList}) {
		state.movieComingList = movieComingList
	},
	
	[RECEVIE_CINEMALIST](state, {cinemaList}) {
		state.cinemaList = cinemaList
	},
	
	[RECEVIE_CITYLIST](state, {cityList}) {
		state.cityList = cityList
	},
	
	[RECEVIE_LOCATION](state, {location}) {
		state.location = location
	},
	
	[RECEVIE_DETAILMOVIE](state, {detailMovie}) {
		state.detailMovie = detailMovie
	},
	
	[RECEVIE_SEARCHLIST](state, {searchList}) {
		state.searchList = searchList
	}
}