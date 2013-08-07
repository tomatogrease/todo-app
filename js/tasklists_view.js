var TasklistsView = Backbone.View.extend({
	initialize: function(){
		this.render();
	},
	render: function(){
		var tasklists = this.options.data;
		var list_markup = '<% _.each(tasklists, function(list) { %> <li><a href="/#/tasklist/<%= list.id %> "><%= list.name %></a></li> <% }); %>';
		var template = _.template(list_markup, {tasklists : tasklists});
		this.$el.html( template );
	}
});
