import { Migration } from '@mikro-orm/migrations';

export class Migration20240212143626 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table "Stay" add column "rent_per_month" int not null;');
  }

    async down(): Promise<void> {
        // https://avc.com/2011/02/continuous-deployment/
        throw new Error("we don't roll back, we fix the code!");
    }
}
