var TasksView = Backbone.View.extend({
	initialize: function(){
		this.render();
	},
	render: function(){
		var tasks = this.options.data;
		console.log('tasks ',tasks);

		var list_markup = '<% _.each(tasks, function(list) { %> <li><% list.name %></li> <% }); %>';
		var template = _.template(list_markup, {tasks : tasks});
		this.$el.html( template );
	}
});


console.log('tasks_view.js loaded')