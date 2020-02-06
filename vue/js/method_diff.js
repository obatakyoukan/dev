new Vue({
    el: '#app',
    data: {
	current: new Date().toLocaleString()
    },

    //算出プロパティ
    computed: {
	randomc: function(){
	    return Math.random();
	}
    },

    methods: {
	onclick: function(){
	    this.current = new Date().toLocaleString();
	},
	// メソッド経由
	randomm: function(){
	    return Math.random();
	}
    }
});
