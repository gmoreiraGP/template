import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Extensions extends BaseSchema {
  protected tableName = 'extensions'

  public async up() {
    await this.db.rawQuery(
      'CREATE EXTENSION IF NOT EXISTS "uuid-ossp" SCHEMA pg_catalog VERSION "1.1";'
    ).knexQuery
  }

  public async down() {}
}
