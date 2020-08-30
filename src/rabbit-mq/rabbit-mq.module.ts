import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';

import { RabbitMQController } from './rabbit-mq.controller';
import { RabbitMQService } from './rabbit-mq.service';
import { PenaltyModule } from '../penalty/penalty.module';

@Module({
    imports: [
        ClientsModule.register([
            {
                name: 'rabbit-mq-module',
                transport: Transport.RMQ,
                options: {
                    urls: [ 'amqp://localhost:5672', ],
                    queue: 'rabbit-mq-nest-js',
                },
            },
        ]),
        PenaltyModule,
    ],
    controllers: [ RabbitMQController ],
    providers: [ RabbitMQService ],
    exports: [ RabbitMQService ],
})
export class RabbitMQModule {}