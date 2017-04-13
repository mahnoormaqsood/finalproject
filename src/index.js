// change require to es6 import style
import $ from 'jquery';
import './style.scss';

console.log('starting up!');


let num = 0;
const a = `Youve been on this page for ${num} seconds!!`;

$('#main').html(a);

function updateTime() {
  num += 1;
  $('#main').html(a);
}

window.setInterval(() => {
  updateTime();
}, 1000);
