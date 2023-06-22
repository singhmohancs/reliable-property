import { Spin } from 'antd';
import ReactDom from 'react-dom/client';

const createLoader = () => {
  const div = document.createElement('div');
  div.style.position = 'fixed';
  div.style.top = '0';
  div.style.left = '0';
  div.style.width = '100%';
  div.style.height = '100%';
  div.style.zIndex = '9999';
  div.style.backGroundColor = 'rgpa(0,0,0,0)';
  div.style.display = 'flex';
  div.style.justifyContent = 'center';
  div.style.alignItems = 'center';
  document.body.appendChild(div);

  return div;
};

const showLoader = () => {
  const spin = <Spin />
  const div = document.createElement("div");
  document.body.appendChild(div);
  const root = ReactDom.createRoot(div);
  root.render(spin);
  return { root, div };
}

const hideLoader = ({ root, div }) => {
  setTimeout(() => {
    root.unmount();
    document.body.removeChild(div);
  }, 500);

};

export default { showLoader, hideLoader }