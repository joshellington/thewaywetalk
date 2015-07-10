window.player = false;

configs = [
  {
    img: 'img/photo1.jpg'
    class: ''
  },
  {
    img: 'img/photo2.jpg'
    class: 'two'
  },
  {
    img: 'img/photo3.jpg'
    class: 'three'
  }
]


$ ->
  active = configs[Math.floor(Math.random()*configs.length)]
  setup(active)

  $(window).load ->
    loaded()
    # initYoutube()

loaded = ->
  $('body, .background').addClass('loaded')
  setTimeout ->
    $('.text').addClass('loaded')
  , 750

setup = (active) ->
  $('.text').addClass(active.class)
  $('.background').css('background-image', 'url('+active.img+')')

initYoutube = ->
  window.onYouTubePlayerAPIReady = ->
    window.player = new YT.Player('trailer', {
      height: 480
      width: 853
      videoId: 'fnws0X4hsuA'
      events: {
        'onStateChange': (state) ->
          console.log state
          if state = 1
            $('body').addClass('playing')
          else
            $('body').removeClass('playing')        
      }
    })

window.onStateChange = (state) ->
  if state = 1
    $('body').addClass('playing')
  else
    $('body').removeClass('playing')