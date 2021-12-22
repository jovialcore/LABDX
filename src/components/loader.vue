<template>
    <div id="loader-wrapper">
    <div id="loader">
        <div class="loader-ellips">
            <span class="loader-ellips__dot"></span>
            <span class="loader-ellips__dot"></span>
            <span class="loader-ellips__dot"></span>
            <span class="loader-ellips__dot"></span>
        </div>
    </div>
    </div>
</template>

<script>
export default {
    name: 'App',
	beforeCreate() {
		$(window).on ('load', function (){ 
			$('#loader').delay(100).fadeOut('slow');
			$('#loader-wrapper').delay(500).fadeOut('slow');
			$('body').delay(500).css({'overflow':'visible'});
		});
	},
}
</script>

<style scoped>

#loader-wrapper {
	background-color: #fff;
	bottom: 0;
	height: 100%;
	left: 0;
	position: fixed;
	right: 0;
	top: 0;
	width: 100%;
	z-index: 9999;
}
#loader {
	background-position: center center;
	background-repeat: no-repeat;
	height: 200px;
	left: 50%;
	margin: -100px 0 0 -100px;
	position: absolute;
	top: 50%;
	width: 200px;
}
.loader-ellips {
	font-size: 20px;
	position: relative;
	width: 64px;
	margin: 100px auto 0;
}
.loader-ellips__dot {
	display: block;
	width: 1em;
	height: 1em;
	border-radius: 0.5em;
	position: absolute;
	animation-duration: 0.5s;
	animation-timing-function: ease;
	animation-iteration-count: infinite;
}
.loader-ellips__dot:nth-child(1),
.loader-ellips__dot:nth-child(2) {
	left: 0;  
}
.loader-ellips__dot:nth-child(3) { 
	left: 1.5em;   
}
.loader-ellips__dot:nth-child(4) { 
	left: 3em;   
}
.loader-ellips__dot:nth-child(1) {
	animation-name: reveal;  
}
.loader-ellips__dot:nth-child(2),
.loader-ellips__dot:nth-child(3) {
	animation-name: slide;
}
.loader-ellips__dot:nth-child(4) {
	animation-name: reveal;
	animation-direction: reverse;
}
@keyframes reveal {
	from { 
		transform: scale(0.001); 
	}
	to { 
		transform: scale(1); 
	}
}
@keyframes slide {
	to { 
		transform: translateX(1.5em) 
	}
}
.loader-ellips__dot:nth-child(1) { 
	background: #323584;  
}
.loader-ellips__dot:nth-child(2) { 
	background: #323584;  
}
.loader-ellips__dot:nth-child(3) { 
	background: #323584;  
}
.loader-ellips__dot:nth-child(4) { 
	background: #323584;  
}
</style>