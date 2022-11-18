import { proxy } from "valtio/vanilla";

const counter = proxy({count:0});

export function setupCounter(element: HTMLButtonElement) {
  const render = () => {
    element.innerHTML = `count is ${counter.count}`
  }
  element.addEventListener('click', () => {
    counter.count += 1;
    render()
  });
  render()
}
