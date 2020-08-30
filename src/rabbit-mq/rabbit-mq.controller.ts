import { Controller } from '@nestjs/common';
import { EventPattern, Payload, Ctx, RmqContext } from '@nestjs/microservices';

import { RabbitMQService } from './rabbit-mq.service';
import { PenaltyService } from '../penalty/penalty.service';
import { DecideApplyPenaltyDto } from '../penalty/penalty.dto';

@Controller()
export class RabbitMQController {
  constructor(
      private rabbitMQService: RabbitMQService,
      private penaltyService: PenaltyService,
      ) {}

    @EventPattern('car-heartbeat')
    getNotifications(@Payload() data: DecideApplyPenaltyDto, @Ctx() context: RmqContext): void {
        console.log(
            `Received pattern "car-heartbeat" with payload`, 
            JSON.stringify(data)
        );

        this.penaltyService.decideApplyPenalty(data);
    }
}