import { Injectable } from '@nestjs/common';
import { UserModel } from '../schema/user.schema';
import { InjectModel } from '@nestjs/mongoose';
import { RegisterDTO } from '../dto/register.dto';

@Injectable()
export class AuthService {
  constructor(@InjectModel(UserModel.name) userModel: UserModel) {}

  async registerUser(createUserDto: RegisterDTO) {}
}
