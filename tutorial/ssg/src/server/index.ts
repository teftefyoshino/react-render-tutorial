import express from 'express';

const server = express();
const port = process.env.PORT || 3000;

server.use(express.static('public'));

server.listen(port, () => {
    console.log('server started.');
    console.log(`listening on port ${port}.`);
});
