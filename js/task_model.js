// See http://backbonetutorials.com/what-is-a-model/
var TaskModel = Backbone.Model.extend({
	initialize: function(){}
});

var TaskCollection = Backbone.Collection.extend({
	model: TaskModel
});