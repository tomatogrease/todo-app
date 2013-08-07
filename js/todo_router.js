/**
 * see http://backbonetutorials.com/what-is-a-router/
 * 
 * TODO:
 * [ ] Have an array of tasklists
 * [ ] Foreach through them and make a collection
 * [ ] Pass collection as parameter to view
 * [ ] Use collection in render
 */

var TodoRouter = Backbone.Router.extend({
	initialize: function(){
		// things that run when the router starts
	},
	routes: {
		"tasklist/:id" : "getTasks",
		"*path": "defaultRoute"
	},
	/**
	 * getData is supposed to give us the tasklist data.
	 * @param  {String} url location of Todo data.
	 */
	getData: function(url){
		/**
		 * TODO:
		 * [ ] Investigate why using $.ajax returns undefined data in defaultRoute definition.
		 *     Hardcoding data for now.
		$.ajax({
			dataType: 'json'
			url: url,
			async: false,
		}).done(function(data){
			console.log('show data!', data)
			return data;
		})
		*/

		var data = [{"tasks" : [
				{
					"name" : "Sort dirty laundry",
					"taskID" : 1,
					"tasklistID" : 0,
					"complete" : false
				},
				{
					"name" : "Wash dirty laundry",
					"taskID" : 2,
					"tasklistID" : 0,
					"complete" : false
				},
				{
					"name" : "Fold clean clothes",
					"taskID" : 3,
					"tasklistID" : 0,
					"complete" : false
				},
				{
					"name" : "Milk",
					"tasklistID" : 1,
					"taskID" : 4,
					"complete" : false
				}
			]},
			{"tasklists" : [
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
			]
		}];
		return data;
	},
	getPropertyList: function(todoData,property){

		// find index of taskslists object
		for (var i = todoData.length - 1; i >= 0; i--) {
			if( todoData[i].hasOwnProperty(property) ) {
				var objectIndex = i;
			}
		};

		console.log('tasklist ',objectIndex);

		if (typeof(objectIndex) !== 'undefined') {
			return todoData[objectIndex];
		} else {
			console.error('Could not find object with property \'' + property + '\'');
		}

	}
});

// Initiate router
var todo_router = new TodoRouter;

/*
// Get tasks for pages with specific tasklists
todo_router.on('route:getTasks',function(id){
	this.getTasks(id,todoData);
	return false; // quick nonav
});
*/

// "Default" page display.
todo_router.on('route:defaultRoute',function(path){

	// Show tasklist view
	var tasklists = this.getPropertyList(this.getData(),'tasklists');
	var tlData = tasklists.tasklists; // codesmell * tasklists should return the data as we need it, why target tasklists property of tasklists data?
	var tasklists_view = new TasklistsView({ el: $("#tasklists"), data: tlData});

	// Show tasks of first tasklist
	var tasks = this.getPropertyList(this.getData(),'tasks');
	var taskData = tasks.tasks;
	var tasks_view = new TasksView({ el: $("#tasks"), data: taskData });
});

// Start Backbone history for bookmarkable URL's
Backbone.history.start();

console.log('Router outside');