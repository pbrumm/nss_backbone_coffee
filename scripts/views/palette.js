PaletteView = Backbone.View.extend({
  tagName: "li",
  template: JST['item'],
  events: {
    'click': 'setPicker'
  },
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  },
  setPicker: function() {
    defaultPalette.set({
      colors: this.model.get("colors")
    });
  }
});