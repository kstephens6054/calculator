import speak from './modules/my-module';

window.onload = () => {
  console.log('Loaded!');
  speak('Called from index.js!');
};
