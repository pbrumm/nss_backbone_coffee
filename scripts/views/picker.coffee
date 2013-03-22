class window.PickerView extends Backbone.View
  events:
    "click #create-palette": "createPalette"
    "click #random-palette": "randomPalette"
  initialize: =>
    self = @
    @setElement('#picker')
    @model.bind('change', @render)
    _.each(_.range(5), (i)=>
      $('#color-' + i).on('focus', ()->
        # this strange line sets the cursor to the end of text input when focused
        $(@).val($(@).val() )
      )
      $('#swatch-'+ i).click(()=>
        $('#color-' + i).focus()
      )
    )
    $('#color-pickers input').each((i)->
      $(@).on('keyup', ()->
        colors = _.clone( self.model.get('colors') )
        colors[i] = $(@).val()
        self.model.set('colors', colors, {silent: true})
        $('#swatch-' + i).animate({background: colors[i]}, 400 )
      )
    )
    @render()
  render: =>
    colors = @model.get('colors')
    _(colors).each((d,i)=>
      @$('#swatch-' + i).animate({background: d}, 640)
      @$('#color-' + i).val(d)
    )
  createPalette: =>
    Palettes.create(@model.toJSON())
    window.scrollTo(window.scrollX, 0)
  randomPalette: =>
    @model.set(
      colors: _.map( _.range(5), randomColor )
    )
