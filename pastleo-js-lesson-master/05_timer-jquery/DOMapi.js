window.addEventListener('DOMContextLoaded', function(){

  let cnt = 0, running = false, interval;
  
  document.querySelector('button').addEventListener('click', function(){
    if (running){
      document.querySelector('button').textContent = 'start'
      clearInterval(interval)
      running = false
      document.getElementById('running').slideUp()
    }else{
      interval = setInterval(function(){
        cnt = cnt + 1;
        document.getElementById('seconds').textContent = ( Math.floor ( cnt / 10 ) )
        document.querySelector('.dots div:last-child').prependTo('.dots')
      }, 100)
      document.querySelector('button').textContent = 'stop'
      running = true
      document.getElementById('running').slideDown()
    }
  })
})