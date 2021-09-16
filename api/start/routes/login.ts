import Route from '@ioc:Adonis/Core/Route'

Route.post('/login', 'LoginController.login')
Route.post('/logout', 'LoginController.logout')
