// See http://backbonetutorials.com/what-is-a-model/
var TasklistModel = Backbone.Model.extend({
	initialize: function(){}
});

var TasklistCollection = Backbone.Collection.extend({
	model: TasklistModel
});