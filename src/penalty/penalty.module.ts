import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { PenaltyService } from './penalty.service';
import { PenaltySchema, Penalty } from './penalty.schema';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: Penalty.name, schema: PenaltySchema }]),
    ],
    controllers: [],
    providers: [ PenaltyService ],
    exports: [ PenaltyService ],
})
export class PenaltyModule {}