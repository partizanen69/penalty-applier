import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { RabbitMQModule } from './rabbit-mq/rabbit-mq.module';
import { PenaltyModule } from './penalty/penalty.module';

@Module({
  imports: [ 
        MongooseModule.forRoot('mongodb://localhost/crud-api'),
        RabbitMQModule,
        PenaltyModule,
    ],
  controllers: [],
})
export class AppModule {}