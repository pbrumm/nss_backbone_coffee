PickerView = Backbone.View.extend({
  events: {
    "click #create-palette": "createPalette",
    "click #random-palette": "randomPalette"
  },
  initialize: function() {
    var self = this;
    this.setElement('#picker')
    this.model.bind('change', this.render, this);
    _.each(_.range(5), function(i) {
      $('#color-' + i).on('focus', function() {
        // this strange line sets the cursor to the end of text input when focused
        $(this).val( $(this).val() );
      });
      $('#swatch-'+ i).click(function() {
        $('#color-' + i).focus();
      });
    });
    $('#color-pickers input').each(function(i) {
      $(this).on('keyup', function() {
        var colors = _.clone( self.model.get('colors') );
        colors[i] = $(this).val();
        self.model.set('colors', colors, {silent: true});
        $('#swatch-' + i).animate({background: colors[i] }, 400)
      });
    });
    this.render();
  },
  render: function() {
    var colors = this.model.get('colors');
    _(colors).each(function(d,i) {
      $('#swatch-' + i).animate({background: d}, 640);
      $('#color-' + i).val(d);
    });
  },
  createPalette: function() {
    Palettes.create(this.model.toJSON());
    window.scrollTo( window.scrollX, 0);
  },
  randomPalette: function() {
    this.model.set({colors: _.map( _.range(5), randomColor ) });
  }
});
