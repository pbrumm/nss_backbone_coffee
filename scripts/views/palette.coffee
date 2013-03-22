class window.PaletteView extends Backbone.View
  tagName: "li"
  template: JST['item']
  events:
    'click': 'setPicker'
  render: =>
    @$el.html(
      @template(
        @model.toJSON()
      )
    )
    @
  setPicker: =>
    defaultPalette.set(
      colors: @model.get("colors")
    )