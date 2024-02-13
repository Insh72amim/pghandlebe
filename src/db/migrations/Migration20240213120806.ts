import { Migration } from '@mikro-orm/migrations';

export class Migration20240213120806 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table "Address" alter column "address_line2" type varchar(255) using ("address_line2"::varchar(255));');
    this.addSql('alter table "Address" alter column "address_line2" drop not null;');
    this.addSql('alter table "Address" alter column "address_line3" type varchar(255) using ("address_line3"::varchar(255));');
    this.addSql('alter table "Address" alter column "address_line3" drop not null;');
  }

    async down(): Promise<void> {
        // https://avc.com/2011/02/continuous-deployment/
        throw new Error("we don't roll back, we fix the code!");
    }
}
