import { Test, TestingModule } from '@nestjs/testing';
import { Oauth2ModelService } from './oauth2-model.service';

describe('Oauth2ModelService', () => {
  let service: Oauth2ModelService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Oauth2ModelService],
    }).compile();

    service = module.get<Oauth2ModelService>(Oauth2ModelService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
