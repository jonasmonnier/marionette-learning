console.log('Hello');

var App = Marionette.Application.extend({
    initialize: function(options) {
        console.log('My container:', options.container);
    }
});

var app = new App({container: '#app'});
window.AppRoot = app;

app.on('start', function(options) {
    Backbone.history.start(); // Great time to do this
    console.log('on start');
    loadUsers();
});


///////////////
// Models
///////////////

var versionModel = new Backbone.Model({
    name: "Version",
    version: "0.3"
});

var UserModel = Backbone.Model.extend({
    url:"data/user.json"
});

var UserCollection = Backbone.Collection.extend({
    url:"data/users.json",
    model : UserModel
});

userModel = new UserModel();
userModel.fetch({
    success: function(model) {
        console.log("JSON file load was successful", model.get("name"));
    },
    error: function(){
        console.log('There was some error in loading and processing the JSON file');
    }
});


var header = new Header();
header.on("click:bt-1", function(args){
    console.log("click on bt 1 from", args.view);
    app.rootView.getRegion('content').show(new View1());


});
header.on("click:bt-2", function(args){
    console.log("click on bt 2 from", args.view);
    app.rootView.getRegion('content').show(new View2());
});

header.on("click:bt-users", function(args){
    loadUsers();
});

var footer = new Footer({
    model: versionModel
});

app.rootView = new RootView();
app.rootView.getRegion('header').show(header);
app.rootView.getRegion('footer').show(footer);

AppRoot.start({});


function loadUsers()
{
    userCollection = new UserCollection();
    userCollection.fetch({
        success: function(collection) {
            console.log("JSON file load was successful", collection);

            var view = new UserListView({collection: collection});
            app.rootView.getRegion('content').show(view);
        },
        error: function(){
            console.log('There was some error in loading and processing the JSON file');
        }
    });
}
