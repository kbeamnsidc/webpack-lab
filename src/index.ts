import { Tooltip } from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import './style.css';

function component() {
  const element = document.createElement('div');

  const message = 'Hello webpack, this is TypeScript.';
  console.log(message);
  element.innerHTML = message;
  element.setAttribute('title', 'TOOLTIPS R GREAT');

  return element;
}

const e: Element = component();
document.body.appendChild(e);
new Tooltip(e);

