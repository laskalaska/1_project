import express from 'express';
import bodyParser from 'body-parser';
import { users } from "./data.js";
import cors from 'cors';

const app = express();
// app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.json());
app.use(cors());
const port = 3000;

app.listen(port, () => {
    console.log('We live on' + port);
})

app.get('/api/users', (request, response) => {
    response.send(JSON.stringify(users));
})

app.get('/api/users/:id', (req, res) => {
    const myUser = users.find( user => user.id == req.params.id);

    if (!myUser) {
        res.send('Not found');
    } else {
        res.send(JSON.stringify(myUser));
    }
})

app.post('/api/users', (req, res) => {
    console.log(req.body);
    const newUser = req.body;
    const maxId = users.reduce((max, user) => {
        if (user.id > max) {
            max = user.id
            return max
        }
    }, 0)
    newUser.id = maxId + 1;
    users.push(newUser);
    res.send('ok');
})

// ****** pure JS creating server ******
// import http from 'http';
// import { users } from './data.js';
//
// const PORT = 3000;
//
// const server = http.createServer(function (request, response) {
//
//     if (request.url === '/api/users' && request.method === 'GET') {
//         response.end(JSON.stringify(users ));
//     } else {
//
//         console.log('URL of page is ' + request.url);
//         console.log(request.method);
//         response.writeHead(200, {'Hillel': 'lesson-25'});
//         response.end('It is OK')
//     }
// });
//
// server.listen(PORT);
//
//
// console.log('listening to ' + PORT);