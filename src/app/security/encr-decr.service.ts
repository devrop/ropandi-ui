import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class EncrDecrService {
    //encryptKey: string = '6Eh2LM7g6yUeTGgD';
    encryptKey: string = 'R0p4ND1aHmAdCOoL';
    constructor() { }
  
  encryptData(dataEncrypt) {
    var salt = CryptoJS.lib.WordArray.random(128 / 8);

    var key = CryptoJS.PBKDF2(this.encryptKey, salt, {
        keySize: 256 / 32,
        iterations: 100
    });

    var iv = CryptoJS.lib.WordArray.random(128 / 8);

    var encrypted = CryptoJS.AES.encrypt(dataEncrypt, key, {
        iv: iv,
        padding: CryptoJS.pad.Pkcs7,
        mode: CryptoJS.mode.CBC

    });
    var transitmessage = salt.toString() + iv.toString() + encrypted.toString();
    return transitmessage;
}

decryptData(encryptData) {
    if (encryptData == null || encryptData === undefined) {
      //console.log('sini');
    } else {
        var salt = CryptoJS.enc.Hex.parse(encryptData.substr(0, 32));
        var iv = CryptoJS.enc.Hex.parse(encryptData.substr(32, 32))
        var encrypted = encryptData.substring(64);

        var key = CryptoJS.PBKDF2(this.encryptKey, salt, {
            keySize: 256 / 32,
            iterations: 100
        });

        var decrypted = CryptoJS.AES.decrypt(encrypted, key, {
            iv: iv,
            padding: CryptoJS.pad.Pkcs7,
            mode: CryptoJS.mode.CBC
        })
        return decrypted.toString(CryptoJS.enc.Utf8);
    }


   
}
enCrypPassword(keys,value){
    var key = CryptoJS.enc.Utf8.parse(keys);
    var iv = CryptoJS.enc.Utf8.parse(keys);
    var encrypted = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(value.toString()), key,
    {
        keySize: 128 / 8,
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    });

    return encrypted.toString();
}
decrypPassword(keys,value){
    var key = CryptoJS.enc.Utf8.parse(keys);
    var iv = CryptoJS.enc.Utf8.parse(keys);
    var decrypted = CryptoJS.AES.decrypt(value, key, {
        keySize: 128 / 8,
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    });

    return decrypted.toString(CryptoJS.enc.Utf8);
}
}
