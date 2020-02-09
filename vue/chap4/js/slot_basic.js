Vue.component('my-hello',{
    props: ['yourName' ],
    template: `<div>Hello, <slot> Guest </slot> ! </div>`
})

new Vue({
    el: '#app'
});
