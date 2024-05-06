import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller.ts';
import { AppService } from './app.service.ts';
import { assert } from "jsr:@std/assert";

Deno.test({
  name: 'AppController',
}, async () => {
  const app: TestingModule = await Test.createTestingModule({
    controllers: [AppController],
    providers: [AppService],
  }).compile();

  const appController = app.get<AppController>(AppController);
  assert(appController.getHello() === 'Hello World!');
});
