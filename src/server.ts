import fastify from "fastify"

const app = fastify();

let db = [
  { '1' : { Nome: 'Cliente 1', idade: '20'} },
  { '2' : { Nome: 'Cliente 2', idade: '18'} },
  { '3' : { Nome: 'Cliente 3', idade: '1'} },
]

let body = { '2' : { Nome: 'Abraham', idade: '19'} }

//Listar usuarios
app.get('/user', () => {
  return db;
})

app.post('/user', () => {
  db.push(body)
  return db
})

app.put('/user', () => {
  db.push(body)
  return db
})

app.delete('/user', () => {
  let newDB = db.filter((item) => {
    if(!item){
      return item
    }
  })
  db = newDB;
  return db;
})

app.listen({
  host: '0.0.0.0',
  port: 3333
}).then(() => {
  console.log("Server is running http://localhost:3333")
})