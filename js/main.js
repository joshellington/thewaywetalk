(function() {
  var loaded, setHeight, setMargin;

  $(function() {
    if (window.innerHeight > 600) {
      setHeight('header');
      setMargin('.wrapper');
      $(window).on('resize', (function(_this) {
        return function() {
          return setHeight('header');
        };
      })(this));
    }
    return $(window).load(function() {
      return loaded();
    });
  });

  setHeight = function(elements) {
    return $(elements).height(window.innerHeight);
  };

  setMargin = function(elements) {
    return $(elements).css('margin-top', window.innerHeight);
  };

  loaded = function() {
    return $('body').addClass('loaded');
  };

}).call(this);
