import { ExecutionContext, ForbiddenException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';


@Injectable()
export class JwtAdminGuard extends AuthGuard('jwt') {
    canActivate(context: ExecutionContext) {
        return super.canActivate(context);
    }
    
    handleRequest(err: any, user: any, info: any, context: ExecutionContext, status?: any) {
        if (err || !user) {
                throw err || new UnauthorizedException();//401
               }
               if (user.user_permission !== 'admin') {
                        throw new ForbiddenException('เฉพาะ admin เท่านั้น');//403
            
                    }
        return user
    
    }

}
