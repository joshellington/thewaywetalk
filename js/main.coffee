
$ ->
  if window.innerHeight > 600
    setHeight('header')
    setMargin('.wrapper')

    $(window).on 'resize', =>
      setHeight('header')

  $(window).load ->
    loaded()

setHeight = (elements) ->
  $(elements).height(window.innerHeight)

setMargin = (elements) ->
  $(elements).css 'margin-top', window.innerHeight

loaded = ->
  $('body').addClass('loaded')