import { Injectable, Dependencies } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Dependencies(JwtService)
@Injectable()
export class AuthService {
    constructor(jwtService){
        this.jwtService = jwtService;
    }

    async login(user) {
        const data  = this.jwtService.sign(user);
        return {
            access_token: data
        };
    }
}
