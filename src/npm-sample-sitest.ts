const hoge = 'hoge';

const greet = () => {
  console.log(hoge);
};

const displayMessage = (message: string) => {
  const element = document.createElement('h1');
  element.textContent = message;

  const body = document.querySelector('body');
  if (body instanceof HTMLBodyElement) body.prepend(element);
};

export { displayMessage };
