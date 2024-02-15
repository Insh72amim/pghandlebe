import { Migration } from '@mikro-orm/migrations';

export class Migration20240212213336 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table "Bed" alter column "is_available" type boolean using ("is_available"::boolean);');
    this.addSql('alter table "Bed" alter column "is_available" set default true;');
  }

    async down(): Promise<void> {
        // https://avc.com/2011/02/continuous-deployment/
        throw new Error("we don't roll back, we fix the code!");
    }
}
