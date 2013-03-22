PaletteListView = Backbone.View.extend({
  el: $("#palette-list"),
  initialize: function() {
    Palettes.bind('add', this.addOne, this);
    Palettes.bind('reset', this.addAll, this);
  },
  addOne: function(palette) {
    var view = new PaletteView({model: palette});
    $("#palette-list").prepend(view.render().el);
  },
  addAll: function() {
    Palettes.each(this.addOne);
  },
});