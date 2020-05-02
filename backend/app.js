const express = require('express');

const app = express();

app.use('/api/posts', (req, res, next) => {
  const posts = [
    {
      id: 'asdfasd',
      title: 'First server-side post',
      content: 'This comes from the server...'
    },
    {
      id: 'kajsldnf123',
      title: 'Second server-side post',
      content: 'This comes from the server!'
    }

  ];
  res.status(200).json({
    message: 'Posts fetched succesfully!',
    posts: posts
  });
});

module.exports = app;

