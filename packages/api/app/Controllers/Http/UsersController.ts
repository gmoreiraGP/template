import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Users from 'App/Models/Users'

export default class UsersController {
  public async index({ auth }: HttpContextContract) {
    await auth.use('api').authenticate()

    const users = await Users.all()

    return {
      users,
    }
  }

  public async store({ auth, request }: HttpContextContract) {
    await auth.use('api').authenticate()

    const newUser = request.body()
    const user = await Users.create(newUser)

    return {
      user,
    }
  }
  public async getUser() {}
}
