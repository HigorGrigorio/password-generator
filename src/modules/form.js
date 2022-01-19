import generatePassword from './generator';

const number = document.querySelector('.number-of-characters');
const upercase = document.querySelector('.capital-letters');
const lowercase = document.querySelector('.lowercase');
const numbers = document.querySelector('.numbers');
const symbols = document.querySelector('.symbols');

export default function generate() {
    return generatePassword(number.value,
        upercase.checked,
        lowercase.checked,
        numbers.checked,
        symbols.checked) || 'Not selected';
};