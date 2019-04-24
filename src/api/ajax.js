import axios from 'axios'

const ajax = (url, data = {}, type = 'GET') => {
	return new Promise((resolve, reject) => {
		let promise
		
		// get方法,将data合并到url
		if(type === 'GET'){
			let dataStr = ''
			Object.keys(data).forEach(key => {
				dataStr += key + '=' + data[key] + '&'
			})
			if(dataStr !== ''){
				dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
				url = url + '?'+ dataStr
			}
			promise = axios.get(url)
		}
		
		// post方法,直接使用axios.post()
		else{
			promise = axios.post(url, data)
		}
		
		// 以便返回值可以直接使用,而不是response.data的形式使用
		promise.then((response) => {
			resolve(response.data)
		}).catch((error) => {
			reject(error)
		})
	})
}

export default ajax