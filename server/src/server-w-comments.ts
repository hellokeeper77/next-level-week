import express, { response } from 'express'

const app = express()

app.use(express.json())

// Rota é o endereço completo da requisição
// Recurso: a entidade que estamos acessando do sistema

// Tipos de requisição:

// GET: Buscar uma ou mais informação do back-end
// POST: Criar nova informação no back-end
// PUT: Atualizar uma informação existente no back-enf
// DELETE: Remover uma informação no back-end

// Exemplos:

// POST http://localhost:3333/users -> cria um usuário
// GET  http://localhost:3333/users -> lista usuários
// GET  http://localhost:3333/users/5 -> Buscar dados do usuário com ID 5

// Request Param: Parâmetros que vem na própria rota que identificam um recurso
// Query Param: Parâmetros que vem na própria rora geralmente pcionais para filtros, paginação
// Request Body: Parâmetros para criação e atualização de informações

const users = [
  'Rodrigo',
  'Thais',
  'Guilherme',
  'Murilo',
  'Família'
]

app.get('/users', (request, response) => {
  const search = String(request.query.search) // Query Param: Parâmetros que vem na própria rora geralmente pcionais para filtros, paginação

  const filteredUsers = search ? users.filter(user => user.includes(search)) : users

  return response.json(filteredUsers)
})

app.get('/users/:id', (request, response) => {
  const id = Number(request.params.id) // Request Param: Parâmetros que vem na própria rota que identificam um recurso
  const user = users[id]
  return response.json(user)
})

app.post('/users', (request, response) => {
  const data = request.body
  const user = {
    name: data.name,
    email: data.email
  }

  return response.json(user)
})

app.listen(3333)