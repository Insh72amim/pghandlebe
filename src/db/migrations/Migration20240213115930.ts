import { Migration } from '@mikro-orm/migrations';

export class Migration20240213115930 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table "Amenity" drop constraint "Amenity_pg_id_foreign";');

    this.addSql('alter table "Address" drop column "identity";');
    this.addSql('alter table "Address" drop column "identity_id";');

    this.addSql('alter table "Amenity" drop constraint "Amenity_pg_id_unique";');
    this.addSql('alter table "Amenity" drop column "pg_id";');
  }

    async down(): Promise<void> {
        // https://avc.com/2011/02/continuous-deployment/
        throw new Error("we don't roll back, we fix the code!");
    }
}
