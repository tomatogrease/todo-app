var TasklistsView = Backbone.View.extend({
	initialize: function(){
		this.render();
	},
	loadTasklistData: function(){

	},
	render: function(){
		var tasklists = this.options.data; // passed from router
		console.log(tasklists);


		var list_markup = "<% _.each(tasklists, function(list) { %> <li><%= list.name %></li> <% }); %>";
		var template = _.template(list_markup, {tasklists : tasklists});
		this.$el.html( template );
	}
});
