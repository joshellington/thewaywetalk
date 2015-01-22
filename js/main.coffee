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

loaded = ->
  $('body').addClass('loaded')

setup = (active) ->
  $('.text').addClass(active.class)
  $('.background').css('background-image', 'url(../'+active.img+')')