import Users from 'App/Models/Users'
import Hash from '@ioc:Adonis/Core/Hash'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class LoginController {
  public async login({ auth, request, response, logger }: HttpContextContract) {
    const email = request.input('email')
    const password = request.input('password')

    const user = await Users.query().where('email', email).firstOrFail()

    if (!(await Hash.verify(password, user.password))) {
      return response.badRequest('Invalid credentials')
    }

    try {
      const token = await auth.use('api').generate(user, {
        expiresIn: '30mins',
      })

      return token
    } catch (error) {
      return logger.error(error.message), response.badRequest('Something wrong.')
    }
  }

  public async logout({ auth }: HttpContextContract) {
    await auth.use('api').revoke()

    return {
      revoked: true,
    }
  }
}
