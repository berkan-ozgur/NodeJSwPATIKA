const fs = require('fs');


//Dosya oluşturmak
fs.writeFile('password.txt', 'yenisifrembu', 'utf-8', (err) => {
    if (err) console.log(err);
    console.log('Dosya yazıldı')
})

//Dosyadan okumak
fs.readFile('password.txt', 'utf-8', (err, data) => {
    if (err) console.log(err);
    console.log(data);
    console.log('Dosya okundu')
})
//Dosyaya yazı eklemek
fs.appendFile('password.txt', '\ncokzorbirsifre', 'utf-8', (err) => {
    if (err) console.log(err);
    console.log('Dosya yazıldı')
})
//Dosyayı silmek
fs.unlink('password.txt', (err) => {
    if (err) console.log(err);
    console.log('Dosya silindi')
})
//Klasör oluşturmak {recursive dediğimiz zaman upload ve img klasörlerini iç içe oluşturabiliyor}
fs.mkdir('uploads/img', { recursive: true }, (err) => {
    if (err) console.log(err)
    console.log('klasorler olusturuldu')
})
//Klasör silmek
fs.rmdir('uploads', { recursive: true }, (err) => {
    if (err) console.log(err)
    console.log('klasorler silindi')
})
