const btn = document.getElementById('send');

btn.addEventListener('click', () => {
  // if (document.getElementByClassName('is-success')) {
    btn.classList.add('is-loading');
  
    // fake API call
    setTimeout( () => {
      btn.classList.add('is-success');
      btn.classList.remove('is-loading');
    }, 4000);
  // }
});