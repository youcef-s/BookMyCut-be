import { IsDate, IsUUID, IsNotEmpty } from 'class-validator';

export class CreateAppointmentDto {
  @IsUUID()
  @IsNotEmpty()
  userId: string;

  @IsDate()
  @IsNotEmpty()
  date: Date;
} 