const fs = require('fs');


setTimeout(() => {
    fs.writeFile('employees.json', '{"name": "Employee 1 Name", "salary": 2000}', 'utf-8', (err) => {
        console.log('file is creating')
        if (err) console.log(err);
    })
}, 1000)
setTimeout(() => {
    fs.readFile('employees.json', 'utf-8', (err, data) => {
        console.log('file is reading')
        if (err) console.log(err)
        console.log(data)
    })
}, 2000)
setTimeout(() => {
    fs.appendFile('employees.json', '{"name": "Employee 2 Name", "salary": 5000}', 'utf-8', (err) => {
        if (err) console.log(err)
    })

}, 3000)
setTimeout(() => {
    fs.unlink('employees.json', (err) => {
        console.log('file is deleting...')
        if (err) console.log(err)
        console.log('file is deleted.')
    })
}, 4000)