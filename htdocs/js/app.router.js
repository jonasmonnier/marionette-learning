var Router = Marionette.AppRouter.extend({

    routes : {
        "users" : "loadUsers"
    },

    loadUsers: function()
    {
        loadUsers();
    }
});

window.AppRouter = new Router();

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
