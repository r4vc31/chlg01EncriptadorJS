let alphabet = 'abcdefghijklmnopqrstuvwxyz '; //se incluye el espacio por practicidad

const ENCRYPTION_KEYS = {
    e: "enter",
    i: "imes",
    a: "ai",
    o: "ober",
    u: "ufat",
}

const DECRYPTION_KEYS = {
    enter: "e",
    imes: "i",
    ai: "a",
    ober: "o",
    ufat: "u",
}

function encrypt(str) {
    let encrypted_word = "";
    str.split("").forEach(character => {
        encrypted_word += ENCRYPTION_KEYS[character] || character;
    })
    return encrypted_word;
}

function decrypt(str) {
    let decrypted_word = str;
    while (true) {
        let indexes = []
        Object.keys(DECRYPTION_KEYS).forEach(key => {
            let index = decrypted_word.indexOf(key);
            if (index >= 0) {
                indexes.push(index);
                decrypted_word = decrypted_word.replace(key, DECRYPTION_KEYS[key]);
            }
        })
        if (indexes.length === 0) {
            break;
        }
    };

    return decrypted_word;
}

window.addEventListener("load", function () {

    let btn_encriptar = document.getElementById("btn-encriptar");
    btn_encriptar.addEventListener("click", function (evt) {
        evt.preventDefault();
        //Get User Input
        let word = document.getElementById("user-input").value;
        //Check conditions: only lowercase letters and no accents
        if (word.length) {
            let isValid = true;
            for (let index = 0; index < word.split("").length; index++) {
                const letter = word[index];
                console.log(letter);
                if (!alphabet.includes(letter)) {
                    isValid = false;
                    break;
                }
            }
            if (isValid) {
                let result = encrypt(word);
                let result_area = document.getElementById("operation-result");
                result_area.disabled = false;
                result_area.value = result;
                result_area.disabled = true;
            } else {
                alert("Lo ingresado no es válido, siga las recomendaciones")
            }

        } else {
            alert("Ingrese el texto a encriptar/desencriptar")
        }
    })

    let btn_desencriptar = document.getElementById("btn-desencriptar");
    btn_desencriptar.addEventListener("click", function (evt) {
        evt.preventDefault();
        //Get User Input
        let word = document.getElementById("user-input").value;
        //Check conditions: only lowercase letters and no accents
        if (word.length) {
            let isValid = true;
            for (let index = 0; index < word.split("").length; index++) {
                const letter = word[index];
                console.log(letter);
                if (!alphabet.includes(letter)) {
                    isValid = false;
                    break;
                }
            }
            if (isValid) {
                let result = decrypt(word);
                let result_area = document.getElementById("operation-result");
                result_area.disabled = false;
                result_area.value = result;
                result_area.disabled = true;
            } else {
                alert("Lo ingresado no es válido, siga las recomendaciones")
            }

        } else {
            alert("Ingrese el texto a encriptar/desencriptar");
        }
    })

    let btn_copiar = document.getElementById("btn-result");
    btn_copiar.addEventListener("click", function (evt) {
        evt.preventDefault();
        let textoCopiado = document.getElementById('operation-result').value;
        if (textoCopiado.length) {
            navigator.clipboard.writeText(textoCopiado);
        } else {
            alert("Nada que copiar");
        }
    })

});
