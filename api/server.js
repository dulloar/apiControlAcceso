const express = require('express');

class Server {
    constructor({config, router}){
        this._config = config;
        this._express = express();
        this._express.use(router);
        this._express.use((req, res, next) => {
            res.append('Access-Control-Allow-Origin', ['*']);
            res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
            res.append('Access-Control-Allow-Headers', 'Content-Type');
            next();
        });
        
    }

    start(){
        return new Promise((resolve,reject) => {
            const http = this._express.listen(this._config.PORT, () => {
                const { port } = http.address();
                console.log('Application runing on port ' + port);
                resolve();
            });
        });
    }
}

module.exports = Server;