import { Migration } from '@mikro-orm/migrations';

export class Migration20240211004234 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table "Guest" add constraint "Guest_home_address_id_foreign" foreign key ("home_address_id") references "Address" ("id") on update cascade;');

    this.addSql('alter table "PG" add constraint "PG_owner_id_foreign" foreign key ("owner_id") references "Owner" ("id") on update cascade;');

    this.addSql('alter table "Amenity" add constraint "Amenity_pg_id_foreign" foreign key ("pg_id") references "PG" ("id") on update cascade;');

    this.addSql('alter table "Room" add constraint "Room_pg_id_foreign" foreign key ("pg_id") references "PG" ("id") on update cascade;');

    this.addSql('alter table "Stay" add constraint "Stay_guest_id_foreign" foreign key ("guest_id") references "Guest" ("id") on update cascade;');
    this.addSql('alter table "Stay" add constraint "Stay_bed_id_foreign" foreign key ("bed_id") references "Bed" ("id") on update cascade;');

    this.addSql('alter table "Bed" add constraint "Bed_room_id_foreign" foreign key ("room_id") references "Room" ("id") on update cascade;');
    this.addSql('alter table "Bed" add constraint "Bed_guest_id_foreign" foreign key ("guest_id") references "Guest" ("id") on update cascade;');
    this.addSql('alter table "Bed" add constraint "Bed_current_stay_id_foreign" foreign key ("current_stay_id") references "Stay" ("id") on update cascade;');
  }

    async down(): Promise<void> {
        // https://avc.com/2011/02/continuous-deployment/
        throw new Error("we don't roll back, we fix the code!");
    }
}
