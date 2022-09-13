const express = require('express')
const app = express()
//const port = 3000

//app.get('/', function(req, res) {res.send('Hello World!')});
//app.get('/', (req, res) => {res.send('Hello World!')});

//app.listen(process.env.PORT || 3000);
//app.listen(port, () => {console.log(`Example app listening on port ${port}`)});
//const PORT = process.env.PORT || 3000; app.listen(PORT, () => { console.log(`Server is listening on port: ${PORT}`); });

const PORT = process.env.PORT || 3000; 
//app.listen(PORT, () => {console.log(`Our app is running on port ${ PORT }`);});

app.listen(PORT, () => {console.info(`Aplicação rodando em http://localhost:${PORT}`);});

app.get('/', (req, res) => {res.send('Wilson Julio - Hello, Nice World! - Porta: '+PORT)});
