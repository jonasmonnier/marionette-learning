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
});


///////////////
// Models
///////////////

var versionModel = new Backbone.Model({
    name: "Version",
    version: "0.3"
});


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


var header = new Header();
header.on("click:bt-1", function(args){
    console.log("click on bt 1 from", args.view);
    app.rootView.getRegion('content').show(new View1());
});
header.on("click:bt-2", function(args){
    console.log("click on bt 2 from", args.view);
    app.rootView.getRegion('content').show(new View2());
});

var footer = new Footer({
    model: versionModel
});

app.rootView = new RootView();
app.rootView.getRegion('header').show(header);
app.rootView.getRegion('footer').show(footer);

AppRoot.start({});


