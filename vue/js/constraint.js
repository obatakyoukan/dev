let app = new Vue({
    el: '#app',
    data: {
	author: {
	    name: 'yamada'
	    //,
	    //company: ''
	}
    },
    created: function() {
	let that = this;
	this.timer = setTimeout( function(){ 
	    //that.author.name='Y.Yamada';
	    //that.author.company ='WINGS';
	    Vue.set( that.author , 'company' , 'WINGS project');
	},3000);
    },
    beforeDestroy: function(){
	clearInterval( this.timer );
    }
});
