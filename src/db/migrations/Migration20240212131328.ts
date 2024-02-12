import { Migration } from '@mikro-orm/migrations';

export class Migration20240212131328 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table "Bed" add column "pg_id" uuid not null;');
    this.addSql('alter table "Bed" add constraint "Bed_pg_id_foreign" foreign key ("pg_id") references "PG" ("id") on update cascade;');
  }

    async down(): Promise<void> {
        // https://avc.com/2011/02/continuous-deployment/
        throw new Error("we don't roll back, we fix the code!");
    }
}
