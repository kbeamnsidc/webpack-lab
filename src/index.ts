import './style.css';

function component() {
  const element = document.createElement('div');

  const message = 'Hello webpack, this is TypeScript.';
  console.log(message);
  element.innerHTML = message;

  return element;
}

document.body.appendChild(component());
