(function() {
  var configs, initYoutube, loaded, setup;

  window.player = false;

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

  initYoutube = function() {
    return window.onYouTubePlayerAPIReady = function() {
      return window.player = new YT.Player('trailer', {
        height: 480,
        width: 853,
        videoId: 'fnws0X4hsuA',
        events: {
          'onStateChange': function(state) {
            console.log(state);
            if (state = 1) {
              return $('body').addClass('playing');
            } else {
              return $('body').removeClass('playing');
            }
          }
        }
      });
    };
  };

  window.onStateChange = function(state) {
    if (state = 1) {
      return $('body').addClass('playing');
    } else {
      return $('body').removeClass('playing');
    }
  };

}).call(this);
