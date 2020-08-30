import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Penalty extends Document {
    @Prop({ required: true })
    driver: string;

    @Prop({ required: true })
    penaltyPoints: number;
    
    @Prop({ required: true })
    date: Date;
}

export const PenaltySchema = SchemaFactory.createForClass(Penalty);