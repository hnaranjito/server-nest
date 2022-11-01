import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { PostModule } from './post/post.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [PostModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
