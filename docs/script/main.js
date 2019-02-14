/**
 * Transitions effects on mouse move
 */
document.addEventListener('mousemove', function (e) {
  X = (e.clientX * -1 / 7);
  Y = (e.clientY * -1 / 7);
  document.querySelector('.mario--background').style.backgroundPosition = X + 'px ' + Y + 'px';
  [].slice.call(document.querySelectorAll('.paralax')).forEach(function (el) {
    el.style.transform = 'translate(' + (e.clientX/155) + '%, ' + (e.clientY/155) + '%)';
  });
  
});

/**
 * Effects on scroll move
 */
document.addEventListener('scroll', function (e) {
  if (window.scrollY > 40 && window.innerWidth > 480) {
    document.querySelector('main .logo').classList.add('sticky');
    document.querySelector('main').classList.add('scrolled');
    
  } else if (window.innerWidth > 480) {
    document.querySelector('main .logo').classList.remove('sticky');
    document.querySelector('main').classList.remove('scrolled');
    
  }
});

/**
 * Wait dom locaded
 */
window.addEventListener('DOMContentLoaded',function(){
  
  /**
   * Bind event click button to generate text
   */
  document.querySelector('.mario-btn').addEventListener('click', function () {
    if (MIpsum) {
      var marioIpsum = new MIpsum;
      var type = document.querySelector('#type').value;
      var length = document.querySelector('#length').value;
      marioIpsum.element = document.querySelector('.mario-text');
      marioIpsum.createText(type, length);
    }
  });
  
  if (window.innerWidth < 480) {
    document.querySelector('main .logo').classList.add('sticky');
    document.querySelector('main').classList.add('scrolled');
  }
  
});