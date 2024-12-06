import { Injectable } from '@nestjs/common';
import { prisma } from 'src/prisma.service'
import { CreateUserDto } from './create-user.dto';
import { User } from '@prisma/client';

@Injectable()
export class UserService {
  constructor() {}

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const existingUser = await prisma.user.findUnique({
      where: {
        email: createUserDto.email,
      },
    });

    if (existingUser) {
      return existingUser;
    }

    return prisma.user.create({
      data: {
        email: createUserDto.email,
      },
    });
  }
}