import { Injectable } from '@nestjs/common';
import { Model, Types as MongooseTypes } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { DecideApplyPenaltyDto } from './penalty.dto';
import { Penalty } from './penalty.schema';

@Injectable()
export class PenaltyService {
    constructor(
        @InjectModel(Penalty.name) private penaltyModel: Model<Penalty>,
    ) {}

    async decideApplyPenalty(decideApplyPenaltyDto: DecideApplyPenaltyDto): Promise<void> {
        const { assignedDriver, speed } = decideApplyPenaltyDto;

        let penaltyPoints = 0;
        if (speed > 60 && speed <= 81) {
            const penaltySpeed = speed - 60;
            penaltyPoints = penaltySpeed * 2;
        }
        else if (speed > 80) {
            const penaltySpeed = speed - 80;
            penaltyPoints = 20 * 2 + penaltySpeed * 5;
        }

        if (penaltyPoints === 0) return;

        console.log(`Applying ${penaltyPoints} penalty points to the driver` +
            `${assignedDriver}`);

        const penalty = new this.penaltyModel({
            penaltyPoints,
            driver: assignedDriver,
            date: new Date(),
        });
        await penalty.save();
    }
}