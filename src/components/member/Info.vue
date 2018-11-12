<template>

	<div class="page">
		<headersec tabname="个人信息"></headersec>
		<transition name="slide-go">
			<div class="container" v-show="mainarea">
				<img src="../../../static/img/github.png" alt="" />
				<p>wechat:374139613</p>
			</div>
		</transition>
	</div>

</template>

<script>
	import Headersec from '../base/HeaderSec.vue';
	export default {
		metaInfo: {
      title: 'fancy个人信息', // set a title
      meta: [{                 // set meta
        name: 'keyWords',
        content: 'fancy-store'
      }]
    },
		data() {
			return {
				mainarea: false,
			}
		},
		components: {
			Headersec,
		},
		mounted() {
			this.mainarea = true;
		},

	}
</script>

<style lang="less" scoped>
	.container {
		text-align: center;
		img {
			margin-top: .3rem;
		}
		p {
			margin-top: .3rem;
			font-size: .28rem;
		}
	}
</style>
