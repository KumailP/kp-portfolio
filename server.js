const {createServer} = require('http')
const express = require('express')
const compression = require('compression')
const morgan = require('morgan')
const path = require('path')
var bodyParser = require('body-parser')
const favicon = require('serve-favicon')

const normalizePort = port => parseInt(port, 10);
const PORT = normalizePort(process.env.PORT || 3000);

const app = express();

app.use(express.static(path.resolve(__dirname, "build")));
app.use(favicon(path.join(__dirname, 'build', 'images', 'favicons', 'favicon.ico')));
app.use(bodyParser.urlencoded({
    extended:false
}));

app.use(bodyParser.json());

const dev = app.get("env") !== "production";

if(!dev){
    app.disable("x-powered-by");
    app.use(compression());
    app.use(morgan("common"));
}

if(dev){
    app.use(morgan("dev"));
}

app.post('/contact', (req, res) => {
    console.log("Oo, request!");
    res.end(JSON.stringify(req.body, null, 2))
});

app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "build", "index.html"));
});

const server = createServer(app);

server.listen(PORT, err => {
    if(err) throw err;

    console.log("Server started!");
})