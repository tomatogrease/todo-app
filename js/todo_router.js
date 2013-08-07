// see http://backbonetutorials.com/what-is-a-router/
var TodoRouter = Backbone.Router.extend({
	initialize: function(){
		// have an array of tasklists
		// for each thruogh them and make a collection
		// pass collection as parameter to view, 
		// use collection in render()

		// things that run when the router starts
		// var todoURL = 'js/todo.json';
	},
	routes: {
		"tasklist/:id" : "getTasks",
		"*path": "defaultRoute"
	},
	getData: function(url){
		/**
		 * using $.ajax returns undefined data in defaultRoute definition
		 * Hardcoding tasklists for now

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
	}
});


// Initiate router
var todo_router = new TodoRouter;

/**
 * Display tasks
todo_router.on('route:getTasks',function(id){
	console.log('hey' + id);
});
*/

// "Default" page display.
todo_router.on('route:defaultRoute',function(path){
	var todoData = this.getData('js/todo.json');
	var tasklists = todoData.tasklists;

	var tasklists_view = new TasklistsView({ el: $("#tasklists"), data: tasklists});
});

// Start Backbone history for bookmarkable URL's
Backbone.history.start();


console.log('Router loads -- outside extend.');
 