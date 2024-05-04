function isPalindrome(str) {
    str = str.replace(/\W+|_/g, '');
    return str == str.split('').reverse().join('');
}

const express = require('express');
const bodyParser = require('body-parser');
 
const app = express();
 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
 
app.get('/resultado', (req, res) => {
  res.send('Get test');
})
 
app.post('/api/manipulacao-string', (req, res) => {
    var var1 = req.body.texto;
    if (var1) {// String com conteúdo válido
        let pal = {};
        var1 = var1.toLowerCase();
        pal['palindromo'] = isPalindrome(var1);
        let obj ={};
        for(let s of var1)if(!obj[s])obj[s] = 1;else obj[s] = obj[s]  + 1;
        let result = pal;
        result['ocorrencias_caracteres'] = obj;
        res.send(JSON.stringify(result));
    }
    else res.send('Json inválido.');
})
 
 
app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
})
