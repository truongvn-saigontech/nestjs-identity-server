import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes, Types } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { SocialLoginModel } from './social-login.schema';
import { Exclude } from 'class-transformer';

const SALT_LENGTH = 10;

@Schema({ timestamps: true })
export class UserModel extends Document {
  @Prop({ type: String, required: false })
  @Exclude()
  password: string;

  @Prop({ type: String })
  userEmail: string;

  @Prop({ type: String })
  firstName: string;

  @Prop({ type: String, required: false })
  lastName: string;

  @Prop({ type: SchemaTypes.ObjectId, ref: SocialLoginModel.name })
  socialLogin: Types.ObjectId;

  public validatePassword(password): Promise<boolean> {
    return bcrypt.compare(password, this.password);
  }
}

export const UserSchema = SchemaFactory.createForClass(UserModel);
UserSchema.pre<UserModel>('save', async function (next) {
  if (!this.password.trim().length) return next();

  this.password = await bcrypt.hash(this.password, SALT_LENGTH);
  next();
});
