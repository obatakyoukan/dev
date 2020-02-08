Vue.component('my-hello',{
    props: [ 'yourName' ],
    template: '<div> Hello, {{ yourName }} ! </div>'
})

new Vue({
    el: '#app'
});
