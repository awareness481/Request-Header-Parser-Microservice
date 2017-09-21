const express = require('express');
const requestIp = require('request-ip');

const app = express();
const port = process.env.PORT || 3000;

app.use(requestIp.mw())


app.get('/', (req, res) => {
  console.log(req.headers);
  var ip = req.clientIp;
  console.log(ip)
});

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});