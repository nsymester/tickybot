import { Goodbye, World } from './components/GoodbyeWorld';

console.log(`${Goodbye()} ${World}`);

document.getElementById('js-back-to-top-btn').addEventListener(
  'click',
  function(evt) {
    evt.preventDefault();
    console.log('hello world');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    //$("html, body").animate({ scrollTop: 0 }, 300);
  },
  true
);
