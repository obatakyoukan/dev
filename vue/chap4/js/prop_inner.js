Vue.component('my-counter', {
    props: [ 'init' ],
    template: `<div> value: {{ current }}! 
    <input type="button" v-on:click="onclick" value="add" /> </div>`,
    data: function(){
	return {
	    current: this.init
	};
    },
    methods: {
	onclick: function(){
	    this.current++;
	}
    }

})

new Vue({
    el: '#app'
});
