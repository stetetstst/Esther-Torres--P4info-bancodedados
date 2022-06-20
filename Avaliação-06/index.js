const express = require('express')

const server = express()

server.use(express.json())

const PORT = 3000

server.get('/', (req,res) => {
    res.json ({ message: 'Criação de Tabelas'});
});


//inicio
const sqlite3 = require('sqlite3');

const db = new sqlite3.Database('./database/av04.db', (error) => {
    if (error) console.log(error);
});

db.serialize(() => {
    db.run('create table if not exists TB_PESSOAS (id integer primary key autoincrement , name text)', (error) => {
        if (error) console.log(error);
    });

    db.run('insert into TB_PESSOAS (name) values (?)', ['Adriana Carvalho'], (error) => {
        if (error) console.log(error);
    });

    db.run('insert into TB_PESSOAS (name) values (?)', ['Almeida Neves'], (error) => {
        if (error) console.log(error);
    });

    db.run('insert into TB_PESSOAS (name) values (?)', ['Paula Rodrigues'], (error) => {
        if (error) console.log(error);
    });
    console.log("TB_PESSOAS")

    //sgvdsh
    db.all('select * from TB_PESSOAS', (error, rows) => {
        console.log(error, rows);
    });

    db.run('UPDATE "TB_PESSOAS" SET name= "Esther Oliveira" WHERE id=1', (error) => {
        if (error) console.log(error);
    });
    db.run('DELETE FROM TB_PESSOAS WHERE id = 2', (error) => {
        if (error) console.log(error)
    });
    db.all('select * from TB_PESSOAS', (error, rows) => {
        console.log(error, rows);
    });
});


server.listen(PORT, () => {
    console.log(`\n*** Server running on port: ${PORT} ***\n`);
});