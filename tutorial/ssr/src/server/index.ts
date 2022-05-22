import express from 'express';
import { rootRouter } from './routes/root';
import { userRouter } from './routes/user';

const server = express();
const port = process.env.PORT || 3000;

server.use("/", rootRouter())
server.use("/user", userRouter())
// server.use("/user", require("./routes/index"))

server.listen(port, () => {
    console.log('server started.');
    console.log(`listening on port ${port}.`);
});
