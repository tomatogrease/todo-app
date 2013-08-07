var TasklistsView = Backbone.View.extend({
	initialize: function(){
		this.render();
	},
	loadTasklistData: function(){

	},
	render: function(){
		/*
		var list_markup = "<% _.each(tasklists, function(list) { %> <li><%= list.name %></li> <% }); %>";
		var template = _.template(list_markup, tasklists);
		this.$el.html( template );
		*/
		var tasklists = this.options.data;
		console.log(tasklists);


		var list_markup = "<% _.each(tasklists, function(list) { %> <li><%= list.name %></li> <% }); %>";
		var template = _.template(list_markup, {tasklists : tasklists});
		this.$el.html( template );

	}
});
