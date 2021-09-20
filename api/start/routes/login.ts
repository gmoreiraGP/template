import Route from '@ioc:Adonis/Core/Route'

Route.post('/login', 'LoginController.login')
Route.post('/logout', 'LoginController.logout')
Route.post('/login/me', 'LoginController.me')
