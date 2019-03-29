<template>
	<div class="pa aside-content" :class="{show}" @click.stop="show = true">
		<slot></slot>
	</div>
</template>

<script>
import Q from 'jquery';
export default {
    name: 'aside-content',
    components: {},
	props: {
    	show: {
    		type: Boolean,
			default: false
		}
	},
	mounted() {
    	Q('body').on('click', () => {
    		this.show = false;
		});
	}
};
</script>

<style lang="less">
.aside-content{
	display: none;
	top: 0;
	right: -100%;
	height: 100%;
	width: 400px;
	background: #fff;
	z-index: 1;
	transition: all .2s ease-in 0s;
	&.show{
		display: block;
		right: 0;
	}
}
</style>
