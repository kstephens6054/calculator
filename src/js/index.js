import speak from './modules/my-module';
import Calculator from './modules/Calculator';

window.onload = () => {
  console.log('Loaded!');
  speak('Called from index.js!');
  let calc = new Calculator();
  console.log(`The default calc.value is ${calc.value}`);
  calc.value = 42;
  console.log(`The new calc.value is ${calc.value}`);
};
