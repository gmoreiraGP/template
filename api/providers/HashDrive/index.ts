import { HashDriverContract } from '@ioc:Adonis/Core/Hash'
import bcrypt from 'bcryptjs'

export class BcryptJsDriver implements HashDriverContract {
  public async make(value: string) {
    const salt = bcrypt.genSaltSync(10)
    const hashedValue = bcrypt.hashSync(value, salt)

    return hashedValue
  }

  public async verify(plainValue: string, hashedValue: string) {
    const compare = bcrypt.compareSync(plainValue, hashedValue)
    return compare
  }
}
