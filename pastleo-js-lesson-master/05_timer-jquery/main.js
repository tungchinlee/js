// let's start coding:
$(document).ready(function(){
  let cnt = 0, running = false, interval;
  $('button').click(function(){
    if (running){
      $('button').text('start')
      clearInterval(interval)
      running = false
      $('#running').slideUp()
    }else{
      interval = setInterval(function(){
        cnt = cnt + 1;
        $('#seconds').text(Math.floor(cnt / 10))
        $('.dots div:last-child').prependTo('.dots')
      }, 100)
      $('button').text('stop')
      running = true
      $('#running').slideDown()
    }  
  })
})