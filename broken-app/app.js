const express = require('express');
const axios = require('axios');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/', async function(req, res, next) { 
  try {
    let results = req.body.developers.map(async d => {
      return await axios.get(`https://api.github.com/users/${d}`);
    });

    Promise.all(results).then(resp => {
      let out = resp.map(r => ({ name: r.data.name, bio: r.data.bio }))
      return res.send(out);
    })
  } catch (err) {
    console.log('Server error: ', err)
    next(err);
  }
});

app.listen(3000, ()=>{ 
  console.log("App listening on port 3000")
});

module.exports = app;