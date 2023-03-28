import _ from 'lodash';

function component() {
    const element = document.createElement('div');
//   lodash, now imported by the script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  
    return element;
  }
  
  document.body.appendChild(component());