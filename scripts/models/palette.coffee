class window.Palette extends Backbone.Model
  defaults: =>
    {
      name: "Untitled"
      colors: _.map( _.range(5), randomColor )
    }