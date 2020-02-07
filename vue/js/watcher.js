new Vue({
    el: '#app',
    data: {
	name:''
	,
	upperName:''
    },
    created: function(){
	this.delayFunc = _.debounce(this.getUpper , 2000 );
    },
    //遅延
    
    watch: {
	name: function( newValue , oldValue ){
	    this.delayFunc();
	}
    },
    //直ぐに
    /*
     computed: {
     	upperName: function() {
	return this.name.toUpperCase();
	}
     }
    ,
    */
    methods:{
	getUpper: function(){
	    this.upperName = this.name.toUpperCase();
	}
    }
});
