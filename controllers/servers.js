import sqlite3 from 'sqlite3'

// //../database/db.sqlite3
// //:memory:
// let db = new sqlite3.Database('../db/db.sqlite3',sqlite3.OPEN_READWRITE , (err) => {
//     if (err) {
//       return console.error(err.message);
//     }
//     console.log('Connected to the in-memory SQlite database.');
//     });
  
//   // close the database connection
//   db.close((err) => {
//     if (err) {
//       return console.error(err.message);
//     }
//     console.log('Close the database connection.');
//   });

let servers = [
    {id: '1', name: 'Борщ', status: 'ok', country: 'Украина', description: ''},
    {id: '2', name: 'Суши', status: 'ok', country: 'Япония', description: ''},
    {id: '3', name: 'Кимчхи', status: 'ok', country: 'Корея', description: 'Главное место в корейской кухне занимает кимчхи — квашеные овощи с острыми приправами. Основным компонентом блюда является пекинская капуста. К ней добавляют острый перец, лук, имбирь и чеснок и другие овощи по вкусу или растения семейства крестоцветных.'},
    {id: '4', name: 'Пельмени', status: 'ok', country: 'Россия', description: 'Одна из первых ассоциаций, возникающих при упоминании русской кухни, конечно же, пельмени. Блюдо из пресного теста с начинкой из рубленого мяса не отказался бы попробовать ни один иностранец, мечтающий однажды доехать до необъятной России.'}
]

export const getALL = (req, res) => {
    res.status(200).json(servers)
}

export const create = (req, res) => {
    const newServer = {
        id: Date.now().toString(),
        ...req.body
    }
    servers.unshift(newServer)
    res.status(201).json(newServer)
}

export const remove = (req, res) => {
    console.log('ID', req.params.id)
    servers = servers.filter(s => s.id !== req.params.id)
    res.json({message: 'Server has been removed.'})
}