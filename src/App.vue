<template>
  <div id="app">
    <router-view></router-view>
		<Footer></Footer>
  </div>
</template>

<script>
	import {mapState, mapActions} from 'vuex'
	import Footer from '@/components/Footer/Footer.vue'
	
	export default {
		mounted() {
			this.getLocation(() => {
				window.localStorage.location = JSON.stringify(this.location)
			})
		},
		
		methods: {
			...mapActions(['getLocation'])
		},
		
		computed: {
			...mapState(['location'])
		},
		
		components: {
			Footer
		}
	}
</script>