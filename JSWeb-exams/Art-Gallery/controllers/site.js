const siteController = require('express').Router;

siteController.get('create', (req, res) => {
  res.render('create', {
    title: 'Create',
  });
});

siteController.post("create", async (req,res) => { 
    const data = { 
      title: req.body.title,

    }
})


