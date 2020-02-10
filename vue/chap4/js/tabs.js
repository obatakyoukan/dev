Vue.component('tab-member', {
    template: `<div class="tab">
    <h3> WINGS member </h3>
    <p> Do you particiate in this project? </p>
    <label>Name: <input type="text" v-model="name" /> </label>
    <input type="submit" value="register" />
    </div>`,
    data: function(){
	return {
	    name: ''
	}
    }
});


Vue.component('tab-new', {
    template: `<div class="tab">
    <h3> New Sale [ Introduction to HTML5 ] </h3>
    <p> Do you want it? </p>
    </div>`
});


Vue.component('tab-env', {
    template: `<div class="tab">
    <h3> Warning Envioroment </h3>
    <p> Do you particiate in this project? </p>
    </div>`
});

new Vue({
    el: '#app',
    methods: {
	onclick: function(tab){
	    this.current = tab;
	}
    },
    computed: {
	tabNames: function(){
	    return Object.keys(this.tabs);
	},
	currentTab: function(){
	    return 'tab-'+ this.current;
	}
    },
    data: {
	current: 'member',
	tabs: {
	    'member': 'new member',
	    'new': 'new book',
	    'env': 'ENVIOROMENT'
	}
    }
});
