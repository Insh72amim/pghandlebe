import { ApiProperty } from '@nestjs/swagger';
import { Address } from 'src/db/entities/address.entity';
import { Amenity } from 'src/db/entities/amenity.entity';
import { Owner } from 'src/db/entities/owner.entity';
import { Room } from 'src/db/entities/room.entity';

export class PgDTO {
  @ApiProperty({
    example: 'ownerId',
  })
  owner: string;

  @ApiProperty({
    description: 'Name of the PG',
    example: 'Sunshine Residency',
  })
  name: string;

  @ApiProperty({
    description: 'Contact number for the PG',
    example: '+1-800-555-1234',
  })
  contactNumber: string;

  @ApiProperty({
    description: 'Total number of floors in the PG',
    example: 3,
  })
  totalFloors: number;

  @ApiProperty({
    description: 'Total number of rooms in the PG',
    example: 30,
  })
  totalRooms: number;

  @ApiProperty({
    description: 'Address of the PG',
    type: Address,
    nullable: true,
    example: {
      addressLine1: '123 Main St',
      addressLine2: 'Suite 100',
      addressLine3: 'Floor 2',
      zipcode: '94105',
      city: 'San Francisco',
      state: 'CA',
      country: 'US',
    },
  })
  address?: Address;

  @ApiProperty({
    description: 'Amenities available in the PG',
    type: Amenity,
    nullable: true,
    example: {
      food: true,
      internet: true,
      television: true,
      washingMachine: true,
      refrigerator: true,
      airConditioned: true,
      gym: true,
      swimmingPool: true,
      bikeParking: true,
      carParking: true,
    },
  })
  amenity?: Amenity;
}
