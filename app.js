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

function encrypt(str){
    let encrypted_word = "";
    str.split("").forEach(character => {
        encrypted_word += ENCRYPTION_KEYS[character] || character;
    })
    return encrypted_word;
}
// Example
console.log(encrypt("gato"));

function decrypt(str){
    let decrypted_word = str;
    while (true){
        let indexes = []
        Object.keys(DECRYPTION_KEYS).forEach(key => {
            let index = decrypted_word.indexOf(key);
            if(index >= 0){
                indexes.push(index);
                decrypted_word = decrypted_word.replace(key, DECRYPTION_KEYS[key]);
            }
        })
        if(indexes.length === 0){
            break;
        }
    };
    
    return decrypted_word;
}
// Example
console.log(decrypt("gaitober"));

//Mensaje Secreto
let before = "fenterlimescimesdaidenters poberr enternfrenterntair enterstenter dentersaifimesober y haibenterrlober cobernclufatimesdober cobern enterximestober!";
let after = decrypt(before);
console.log(after);
