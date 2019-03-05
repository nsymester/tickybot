import { Hello, World } from './components/HelloWorld';

console.log(`${Hello()} ${World}`);

document.getElementById('js-back-to-top-btn').addEventListener(
  'click',
  function(evt) {
    evt.preventDefault();
    console.log('hello world');
    //$("html, body").animate({ scrollTop: 0 }, 300);
  },
  true
);
