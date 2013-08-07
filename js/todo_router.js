// see http://backbonetutorials.com/what-is-a-router/

/**
 * TODO:
 * [ ] Have an array of tasklists
 * [ ] Foreach through them and make a collection
 * [ ] Pass collection as parameter to view
 * [ ] Use collection in render
 * 
 */
var TodoRouter = Backbone.Router.extend({
	initialize: function(){
		// things that run when the router starts
	},
	routes: {
		"tasklist/:id" : "tasklist",
		"*path": "defaultRoute"
	},
	getData: function(url){
		/**
		 * TODO:
		 * [ ] Investigate why using $.ajax returns undefined data in defaultRoute definition.
		 *     Hardcoding tasklists for now.
		 */
		
		/*
		$.ajax({
			url: url,
			async: false,
			dataType: 'json'
		}).done(function(data){
			return data;
		})
	
		*/
	
		var data = {"tasklists" : [
			{
				"name" : "Unsorted",
				"id" : 0
			},
			{
				"name" : "Laundry",
				"id" : 1
			},
			{
				"name" : "Groceries",
				"id" : 2
			}
		]};
		return data;
	},
	getTasks: function(Object){
		
	}
});


// Initiate router
var todo_router = new TodoRouter;


todo_router.on('route:getTaskList',function(id){
	console.log('hey' + id);
});


// "Default" page display.
todo_router.on('route:defaultRoute',function(path){
	var todoData = this.getData('js/todo.json');
	var tasklists = todoData.tasklists;

	var tasklists_view = new TasklistsView({ el: $("#tasklists"), data: tasklists });
});

// Start Backbone history for bookmarkable URL's
Backbone.history.start();

console.log('Router loads, outside extend.');