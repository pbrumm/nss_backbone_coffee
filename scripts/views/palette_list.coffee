class window.PaletteListView extends Backbone.View
  el: $("#palette-list")
  initialize: =>
    Palettes.bind('add', @addOne)
    Palettes.bind('reset', @addAll)
  addOne: (palette)=>
    view = new PaletteView(model: palette)
    $("#palette-list").prepend(view.render().el)
  addAll: =>
    Palettes.each(this.addOne)