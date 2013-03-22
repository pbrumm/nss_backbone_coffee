Palette = Backbone.Model.extend({
  defaults: function() {
    return {
      name: "Untitled",
      colors: _.map( _.range(5), randomColor )
    };
  }
});