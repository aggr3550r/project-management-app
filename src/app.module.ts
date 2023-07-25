import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './src/user/user.module';
import { UserModule } from './user/user.module';
import { UserModule } from './modules/user/user.module';
import { TicketModule } from './modules/ticket/ticket.module';

@Module({
  imports: [UserModule, TicketModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
