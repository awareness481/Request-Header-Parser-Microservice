const express = require('express');

const app = express();
const port = process.env.PORT || 3000;


app.get('/', (req, res) => {
  console.log(req.headers);
  console.log(req.clientAddress);

  res.send({
      ip: req.clientAddress,
      lang: req.get['accept-language'],
      OS: req.get['user-agent']
    }
  );
});

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});