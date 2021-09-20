import Route from '@ioc:Adonis/Core/Route'
import './login'
import './users'
import './profile'

Route.get('/', async () => {
  return { hello: 'world' }
})
