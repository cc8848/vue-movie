import ajax from './ajax'

// 正在热映
export const reqMovieOnInfoList = (cityId) => ajax('/api/movieOnInfoList', {cityId})

// 即将上映
export const reqMovieComingList = (cityId) => ajax('/api/movieComingList', {cityId})

// 影院列表
export const reqCinemaList = (cityId) => ajax('/api/cinemaList', {cityId})

// 城市列表
export const reqCityList = () => ajax('/api/cityList')

// 定位当前城市
export const reqLocation = () => ajax('/api/getLocation')

// 电影详情页
export const reqDetailMovie = (movieId) => ajax('/api/detailMovie', {movieId})

// 搜索电影
export const reqSearchList = (cityId, kw) => ajax('/api/searchList', {cityId, kw})