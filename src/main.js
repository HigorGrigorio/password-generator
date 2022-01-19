import './assets/css/style.css'
import newPassword from './modules/form';

const button = document.querySelector('.generate');
const result = document.querySelector('.result');

button.addEventListener('click', () => {
    result.innerHTML = newPassword() || 'Not selected';
})