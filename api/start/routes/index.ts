import Route from '@ioc:Adonis/Core/Route'
import './login'
import './users'

Route.get('/', async () => {
  return { hello: 'world' }
})
