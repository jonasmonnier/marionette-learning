///////////////
// Layout
///////////////

var RootView = Marionette.LayoutView.extend({
    el: 'body',

    regions: {
        header: "#header",
        footer: "#footer",
        content: "#content"
    },

    onShow: function() {
        console.log("onShow");
    }
});

///////////////
// Views
///////////////

var Header = Marionette.CompositeView.extend({
    template: "#template-header",
    triggers: {
        "click #bt-home": "click:bt-home",
        "click #bt-users": "click:bt-users"
    }
});

var Footer = Marionette.CompositeView.extend({
    template: "#template-footer",
    templateHelpers: function () {
        return {
            version: this.model.get("version")
        };
    }
});

var HomeView = Marionette.CompositeView.extend({
    template: "#template-home"
});



var UserView = Marionette.ItemView.extend({
    tagName: 'li',
    template: "#template-user",

    serializeData: function() {
        console.log("serialize", this.model.get("name"));
        return {
            text: this.model.get('name')
        };
    }
});

var UserListView = Marionette.CollectionView.extend({
    childView: UserView,
    tagName: 'ul'
});
