Vue.component('banner-member', {
    template: `<div class="banner">
    <h3> WINGS member </h3>
    <p> Do you particiate in this project? </p>
    </div>`
});


Vue.component('banner-new', {
    template: `<div class="banner">
    <h3> New Sale [ Introduction to HTML5 ] </h3>
    <p> Do you want it? </p>
    </div>`
});


Vue.component('banner-env', {
    template: `<div class="banner">
    <h3> Warning Envioroment </h3>
    <p> Do you particiate in this project? </p>
    </div>`
});

new Vue({
    el: '#app',
    created: function(){
	let that = this;
	this.interval = setInterval( function(){
	    that.current = (that.current+1)%that.components.length;
	},3000);
    },
    beforeDestroy: function(){
	clearInterval( this.interval );
    },
    computed: {
	currentBanner: function(){
	    return 'banner-'+this.components[this.current];
	}
    },
    data: {
	current: 0,
	components: ['member' , 'new' , 'env' ]
    }
});
