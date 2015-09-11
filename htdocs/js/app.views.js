
///////////////
// Views
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

var Header = Marionette.CompositeView.extend({
    template: "#template-header",
    triggers: {
        "click #bt-1": "click:bt-1",
        "click #bt-2": "click:bt-2"
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

var View1 = Marionette.CompositeView.extend({
    template: "#template-view1"
});

var View2 = Marionette.CompositeView.extend({
    template: "#template-view2"
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
