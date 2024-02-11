import { Migration } from '@mikro-orm/migrations';

export class Migration20240211033511 extends Migration {
  async up(): Promise<void> {
    this.addSql(
      'create table "Address" ("id" uuid not null, "createdAt" timestamptz not null default CURRENT_TIMESTAMP, "updatedAt" timestamptz not null default CURRENT_TIMESTAMP, "identity" varchar(255) null, "identity_id" varchar(255) null, "address_line1" varchar(255) not null, "address_line2" varchar(255) not null, "address_line3" varchar(255) not null, "zipcode" varchar(255) not null, "city" varchar(255) not null, "state" varchar(255) not null, "country" varchar(255) not null, constraint "Address_pkey" primary key ("id"));',
    );

    this.addSql(
      'create table "Guest" ("id" uuid not null, "createdAt" timestamptz not null default CURRENT_TIMESTAMP, "updatedAt" timestamptz not null default CURRENT_TIMESTAMP, "name" varchar(255) not null, "email" varchar(255) not null, "mobile_number" varchar(255) not null, "address_id" uuid null, constraint "Guest_pkey" primary key ("id"));',
    );
    this.addSql('alter table "Guest" add constraint "Guest_address_id_unique" unique ("address_id");');

    this.addSql(
      'create table "Owner" ("id" uuid not null, "createdAt" timestamptz not null default CURRENT_TIMESTAMP, "updatedAt" timestamptz not null default CURRENT_TIMESTAMP, "name" varchar(255) not null, "email" varchar(255) not null, "password" varchar(255) not null, "mobile_number" varchar(255) not null, "address_id" uuid null, constraint "Owner_pkey" primary key ("id"));',
    );
    this.addSql('alter table "Owner" add constraint "Owner_address_id_unique" unique ("address_id");');

    this.addSql(
      'create table "PG" ("id" uuid not null, "createdAt" timestamptz not null default CURRENT_TIMESTAMP, "updatedAt" timestamptz not null default CURRENT_TIMESTAMP, "name" varchar(255) not null, "contact_number" varchar(255) not null, "total_floors" int not null, "total_rooms" int not null, "address_id" uuid null, "amenity_id" uuid null, "owner_id" uuid not null, constraint "PG_pkey" primary key ("id"));',
    );
    this.addSql('alter table "PG" add constraint "PG_address_id_unique" unique ("address_id");');
    this.addSql('alter table "PG" add constraint "PG_amenity_id_unique" unique ("amenity_id");');

    this.addSql(
      'create table "Amenity" ("id" uuid not null, "createdAt" timestamptz not null default CURRENT_TIMESTAMP, "updatedAt" timestamptz not null default CURRENT_TIMESTAMP, "pg_id" uuid not null, "food" boolean not null, "internet" boolean not null, "television" boolean not null, "washing_machine" boolean not null, "refrigerator" boolean not null, "air_conditioned" boolean not null, "gym" boolean not null, "swimming_pool" boolean not null, "bike_parking" boolean not null, "car_parking" boolean not null, constraint "Amenity_pkey" primary key ("id"));',
    );
    this.addSql('alter table "Amenity" add constraint "Amenity_pg_id_unique" unique ("pg_id");');

    this.addSql(
      'create table "Room" ("id" uuid not null, "createdAt" timestamptz not null default CURRENT_TIMESTAMP, "updatedAt" timestamptz not null default CURRENT_TIMESTAMP, "number" varchar(255) not null, "floor" varchar(255) not null, "block" varchar(255) not null, "sharing" int not null, "is_air_conditioned" boolean not null, "pg_id" uuid not null, constraint "Room_pkey" primary key ("id"));',
    );

    this.addSql(
      'create table "Bed" ("id" uuid not null, "createdAt" timestamptz not null default CURRENT_TIMESTAMP, "updatedAt" timestamptz not null default CURRENT_TIMESTAMP, "is_available" boolean not null, "bed_number" int not null, "room_id" uuid not null, "guest_id" uuid null, "current_stay_id" uuid null, constraint "Bed_pkey" primary key ("id"));',
    );
    this.addSql('alter table "Bed" add constraint "Bed_guest_id_unique" unique ("guest_id");');
    this.addSql('alter table "Bed" add constraint "Bed_current_stay_id_unique" unique ("current_stay_id");');

    this.addSql(
      'create table "Stay" ("id" uuid not null, "createdAt" timestamptz not null default CURRENT_TIMESTAMP, "updatedAt" timestamptz not null default CURRENT_TIMESTAMP, "check_in_date" timestamptz not null, "check_out_date" timestamptz not null, "first_payment_date" timestamptz not null, "latest_payment_date" timestamptz not null, "is_active" boolean not null, "reccuring_days_for_payment" int not null, "guest_id" uuid not null, "bed_id" uuid not null, constraint "Stay_pkey" primary key ("id"));',
    );
    this.addSql('alter table "Stay" add constraint "Stay_guest_id_unique" unique ("guest_id");');
    this.addSql('alter table "Stay" add constraint "Stay_bed_id_unique" unique ("bed_id");');

    this.addSql(
      'alter table "Guest" add constraint "Guest_address_id_foreign" foreign key ("address_id") references "Address" ("id") on update cascade on delete set null;',
    );

    this.addSql(
      'alter table "Owner" add constraint "Owner_address_id_foreign" foreign key ("address_id") references "Address" ("id") on update cascade on delete set null;',
    );

    this.addSql(
      'alter table "PG" add constraint "PG_address_id_foreign" foreign key ("address_id") references "Address" ("id") on update cascade on delete set null;',
    );
    this.addSql(
      'alter table "PG" add constraint "PG_amenity_id_foreign" foreign key ("amenity_id") references "Amenity" ("id") on update cascade on delete set null;',
    );
    this.addSql(
      'alter table "PG" add constraint "PG_owner_id_foreign" foreign key ("owner_id") references "Owner" ("id") on update cascade;',
    );

    this.addSql(
      'alter table "Amenity" add constraint "Amenity_pg_id_foreign" foreign key ("pg_id") references "PG" ("id") on update cascade;',
    );

    this.addSql(
      'alter table "Room" add constraint "Room_pg_id_foreign" foreign key ("pg_id") references "PG" ("id") on update cascade;',
    );

    this.addSql(
      'alter table "Bed" add constraint "Bed_room_id_foreign" foreign key ("room_id") references "Room" ("id") on update cascade;',
    );
    this.addSql(
      'alter table "Bed" add constraint "Bed_guest_id_foreign" foreign key ("guest_id") references "Guest" ("id") on update cascade on delete set null;',
    );
    this.addSql(
      'alter table "Bed" add constraint "Bed_current_stay_id_foreign" foreign key ("current_stay_id") references "Stay" ("id") on update cascade on delete set null;',
    );

    this.addSql(
      'alter table "Stay" add constraint "Stay_guest_id_foreign" foreign key ("guest_id") references "Guest" ("id") on update cascade;',
    );
    this.addSql(
      'alter table "Stay" add constraint "Stay_bed_id_foreign" foreign key ("bed_id") references "Bed" ("id") on update cascade;',
    );
  }

  async down(): Promise<void> {
    // https://avc.com/2011/02/continuous-deployment/
    throw new Error("we don't roll back, we fix the code!");
  }
}
