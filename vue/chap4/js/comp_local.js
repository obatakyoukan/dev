let MyHello ={
    template: '<div> Hello, Vue.js </div>' 
};

new Vue({
    el: '#app',
    //local 
    components: {
	'my-hello': MyHello
    }
});
