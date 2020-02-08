Vue.component('my-hello', {
    template: '<div>Hello, {{ name }} ! </div>',
    data: function(){
	return {
	    name: 'Vue.js'
	};
    }
});

new Vue({
    el: '#app'
});
