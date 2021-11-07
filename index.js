import express from 'express'
import path from 'path'
import serverRoutes from './routes/servers.js'




const __dirname = path.resolve()
const PORT = process.env.PORT ?? 3000
const appE = express()

appE.use(express.static(path.resolve(__dirname, 'public')))
appE.use(express.json())
appE.use(express.urlencoded({extended: false}))

appE.use(serverRoutes)

appE.listen(PORT, () => {
  console.log(`Server started on port ${PORT}...`)
})

// const express = require('express')
// const path = require('path')


//var sqlite3 = require('sqlite3').verbose();
//"type": "module",


// appE.get('/', (req, res) => {
//   res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
// })

// appE.get('/create_item', (req, res) => {
//   res.sendFile(path.resolve(__dirname, 'public', 'create_item.html'))
// })

// const http = require('http');
// const fs = require('fs')
// const path = require('path')

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   if (req.url === '/'){
//       fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, data) => {
//         if (err) {
//             throw err
//         }

//         res.statusCode = 200; 
//         res.setHeader('Content-Type', 'text/html');

//         res.end(data);
//       })
//   }
//   console.log(req.url)
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });