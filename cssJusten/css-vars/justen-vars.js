const progress = document.querySelector('.progress');
const body = document.body;
const page = document.documentElement;
let scroll;

document.addEventListener('scroll', function() {
  scroll = body.scrollTop / (body.scrollHeight - page.clientHeight) * 100;
  progress.style.setProperty('--scroll', scroll + '%');
});