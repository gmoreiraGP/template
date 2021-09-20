import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Profile from 'App/Models/Profile'
import User from 'App/Models/User'

export default class ProfileController {
  public async store({ auth, request, response }: HttpContextContract) {
    await auth.use('api').authenticate()
    const userId = request.input('user_id')

    const user = await User.query().preload('profile').where('id', userId).firstOrFail()

    if (user.profile === null) {
      const newProfile = request.body()
      const profile = await Profile.create(newProfile)

      return profile
    } else {
      response.methodNotAllowed()
    }
  }

  public async editProfile() {}
}
