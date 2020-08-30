import { IsNotEmpty } from 'class-validator';

export class DecideApplyPenaltyDto {
    @IsNotEmpty()
    carId: string;
    
    @IsNotEmpty()
    assignedDriver: string;
    
    @IsNotEmpty()
    lat: number;
    
    @IsNotEmpty()
    long: number;
    
    @IsNotEmpty()
    speed: number;
}