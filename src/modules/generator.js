function rand(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

export default function generatePassword(size, uppercase, lowercase, numbers, symbols) {
    let password = "";
    const ascii = [];

    uppercase && ascii.push([65, 90]);
    lowercase && ascii.push([97, 122]);
    numbers && ascii.push([48, 57]);
    symbols && ascii.push(",.;~^[]{}!@#$%*()_+=-");

    for (let i = 0; i < size; i++) {
        let nrand = rand(0, ascii.length);
        console.log(nrand);

        if (symbols) {
            if (typeof ascii[nrand] === "string") {
                password += ascii[nrand][rand(0, ascii[nrand].length - 1)];
                continue;
            }
        }

        password += String.fromCharCode(rand(ascii[nrand][0], ascii[nrand][1]));
    }

    return password;
}