const dotenv = require('dotenv');
dotenv.config();

let Express = require('express');
const path = require('path');

const app = Express();

app.use(Express.static(path.join(__dirname, 'public')));
//app.set('views', path.join(__dirname, './views'));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
});

app.listen(process.env.PORT || 3000, () => {
    console.log(`server started`);
});