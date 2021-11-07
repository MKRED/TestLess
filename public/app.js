//import Vue from 'vue'
//const Vue = require('vue')
//const sqlite3 = require('../sqlite3').verbose();


const App = {
    data () {
        return {
            test: 'Page.',
            dbnotes: ['Заметка 1'],
            servers: [],
            testC: [{ item: 'Россия' }, { item: 'Армения' }, { item: 'Украина' }, { item: 'USA' }, { item: 'Япония' }],
            name: '',
            country: '',
            description: '',
            file: null,
        }
    },
    methods: {
        async createServer() {
            //this.description == '' ? this.description = 'Описание отсутствует': this.description = this.description
            const data = {
                name: this.name,
                country: this.country,
                description: this.description,
                status: 'ok',
            }
            const  res = await fetch('/api/server', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            this.name = ''
            this.country = ''
            this.description = ''
            const newServer = await res.json()
            this.servers.unshift(newServer)
        },

        async remove(id) {
            await fetch(`/api/server/${id}`, {method: 'DELETE'})
            this.servers = this.servers.filter(s => s.id !== id)
        },

        handleFileUpload(event) {
            console.log(event)
            this.file = event.target.files[0];
        },

        async submitFile() {
            let formData = new FormData();
            formData.append('image', this.file, this.file.name);
            const res = await fetch('/api/server', {
                method: 'POST',
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
                body: formData
            })
            console.log('data', formData)
        },

    },
    async mounted() {
        const res = await fetch('/api/server')
        this.servers = await res.json()
    }
}


Vue.createApp(App).mount('#app')

console.log('app.js Work!');


//let db = new sqlite3.Database('db.sqlite3');

// db.serialize(function() {
//   db.run("CREATE TABLE lorem (info TEXT)");

//   var stmt = db.prepare("INSERT INTO lorem VALUES (?)");
//   for (var i = 0; i < 10; i++) {
//       stmt.run("Ipsum " + i);
//   }
//   stmt.finalize();

//   db.each("SELECT rowid AS id, info FROM lorem", function(err, row) {
//       console.log(row.id + ": " + row.info);
//   });
// });

// db.close();


// open database in memory
// let db = new sqlite3.Database(':memory:', (err) => {
//   if (err) {
//     return console.error(err.message);
//   }
//   console.log('Connected to the in-memory SQlite database.');
// });

// // close the database connection
// db.close((err) => {
//   if (err) {
//     return console.error(err.message);
//   }
//   console.log('Close the database connection.');
// });

