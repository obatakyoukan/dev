new Vue({
    el: '#app',
    data: {
	todo: '',
	items: [
	]
    },
    methods: {
	onadd: function(){
	    this.items.unshift(this.todo);
	    this.todo = '';
	},
	ondel: function(){
	    let that = this;
	    this.items = this.items.filter( function(value){
		return value !== that.todo;
	    });
	    this.todo = '';
	},
	onsort: function(){
	    this.items.sort();
	}
    }
});
