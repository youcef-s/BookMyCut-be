import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { prisma } from 'src/prisma.service'
import { CreateAppointmentDto } from './create-appointment.dto';
import { Appointment } from '@prisma/client';

@Injectable()
export class AppointmentService {
  constructor() {}

	async createAppointment(createAppointmentDto: CreateAppointmentDto): Promise<Appointment> {
		const date = new Date(createAppointmentDto.date).toISOString();
	
		try {
			return await prisma.appointment.create({
				data: {
					userId: createAppointmentDto.userId,
					date: date,
				},
			});
		} catch (error) {
			if (error.code === 'P2002') {
				throw new HttpException('An appointment with this date already exists.', HttpStatus.BAD_REQUEST);
			}
			throw new HttpException('An unexpected error occurred.', HttpStatus.BAD_REQUEST);
		}
	}
}
