(function() {
  var configs, loaded, setup;

  configs = [
    {
      img: 'img/photo1.jpg',
      "class": ''
    }, {
      img: 'img/photo2.jpg',
      "class": 'two'
    }, {
      img: 'img/photo3.jpg',
      "class": 'three'
    }
  ];

  $(function() {
    var active;
    active = configs[Math.floor(Math.random() * configs.length)];
    setup(active);
    return $(window).load(function() {
      return loaded();
    });
  });

  loaded = function() {
    $('body, .background').addClass('loaded');
    return setTimeout(function() {
      return $('.text').addClass('loaded');
    }, 750);
  };

  setup = function(active) {
    $('.text').addClass(active["class"]);
    return $('.background').css('background-image', 'url(' + active.img + ')');
  };

}).call(this);
