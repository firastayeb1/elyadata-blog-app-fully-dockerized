'use strict';
 /*
  * This code runs on Node v12.22.                                             *
  */

const http = require('http');
const cors = require('cors');
const { Client } = require('pg');
var express = require('express');
var bodyParser = require('body-parser')

var app = express();
app.use(cors());
app.options('*', cors());

var jsonParser = bodyParser.json()

let dbClientObj = {
  'host': process.env.DB_HOST,
  'user': process.env.DB_USER,
  'password': process.env.DB_PASSWORD,
  'database': process.env.DB,
  'port': 5432,
  'max': 10000,
  'idleTimeoutMillis': 30000,
  'connectionTimeoutMillis': 2000,
};



const getAll = async () => { 
  const client = new Client(dbClientObj);
  await client.connect();
  const result = await client.query('select * from t_property');
  await client.end();

  let body = [];
  const bodyResult = result
    .rows
    .map((property) => body.push(property));
  return body;
}
const getById = async (id) => { 
  const client = new Client(dbClientObj);
  await client.connect();
  const result = await client.query(`select * from t_property where id = '${id}'`);
  await client.end();

  let body;
  const bodyResult = result.rows
  body = bodyResult[0];

  return body;
}

const insert = async (blog) => { 
  const client = new Client(dbClientObj);
  await client.connect();
  const result = await client.query(`INSERT INTO t_property
  (title, content, author, dislikes, likes)
  VALUES
  ('${blog.title}', '${blog.content}', '${blog.author}',
    0, 0);`);
  await client.end();

  return blog;
}

const update = async (blog) => { 
  const client = new Client(dbClientObj);
  await client.connect();
  const result = await client.query(`UPDATE t_property SET
  title = '${blog.title}', content = '${blog.content}', 
  author = '${blog.author}', dislikes = ${blog.dislikes}, likes = ${blog.likes}
  WHERE id = '${blog.id}' ;`);
  await client.end();

  let body = [];
  const bodyResult = result
    .rows
    .map((property) => body.push(property));
  return body;
}

const port = 3000;

app.get('/', async (req, res) => {

  let body;
  try {
    body = await getAll()

  } catch (error) {
    console.error(error);
    body = error;
  }
 
  res.json(body);
});

app.get('/fetchBlogById/:id', async (req, res) => {

  let body;
  try {
    body = await getById(req.params.id)

  } catch (error) {
    console.error(error);
    body = error;
  }

  res.json(body);
});

app.post('/addTuto', jsonParser, async (request, response)=>{

  let body;
  try {
    body = await insert(request.body)

  } catch (error) {
    console.error(error);
    body = error;
  }
  response.send(body);

});

app.put('/updateTuto', jsonParser, async (request, response)=>{
  let body;
  try {
    body = await update(request.body)

  } catch (error) {
    console.error(error);
    body = error;
  }
  response.send(body);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
