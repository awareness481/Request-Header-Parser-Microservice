const express = require('express');

const app = express();
const port = process.env.PORT || 3000;



app.get('/', (req, res) => { 
  let ip = req.header('x-forwarded-for');
  const index = ip.indexOf(',');
  ip = ip.substr(0, index);
  
  res.send({
      ip,
      lang: req.header('accept-language'),
      OS: req.header('user-agent')
    }
  );
});

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});