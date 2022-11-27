import express from 'express';
import { renderToHTMLStirng } from './render';

const server = express();
const port = process.env.PORT || 3000;

server.use(express.static('public'));

server.use((req, res, next) => {
    console.log(`access {path: ${req.path}} {time: ${new Date().toISOString()}}`);
    next();
});

server.get('*', (req, res) => {
    const html = renderToHTMLStirng(req.url);
    res.status(200).send(html);
});

server.listen(port, () => {
    console.log('server started.');
    console.log(`listening on port ${port}.`);
});
