import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { JwtGuard } from './auth/jwt.guard';
import { UserModule } from './user/user.module';
import { AppointmentModule } from './appointment/appointment.module';

@Module({
  imports: [AuthModule, UserModule, AppointmentModule],
  controllers: [AppController],
  providers: [AppService, {
		provide: APP_GUARD,
		useClass: JwtGuard,
	},
],
})
export class AppModule {}
