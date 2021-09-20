import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class UsersController {
  public async index({ auth, response }: HttpContextContract) {
    await auth.use('api').authenticate()

    const usersWithProfile = await User.query().preload('profile')

    return usersWithProfile
  }

  public async store({ auth, request }: HttpContextContract) {
    await auth.use('api').authenticate()

    const newUser = request.body()
    const user = await User.create(newUser)

    return {
      user,
    }
  }
  public async getUser() {}
}
