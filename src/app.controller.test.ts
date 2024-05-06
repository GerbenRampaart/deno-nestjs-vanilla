import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller.ts';
import { AppService } from './app.service.ts';
import { assertEquals } from "assert";

Deno.test({
  name: 'AppController',
}, async () => {
  const app: TestingModule = await Test.createTestingModule({
    controllers: [AppController],
    providers: [AppService],
  }).compile();

  const appController = app.get<AppController>(AppController);
  assertEquals(appController.getHello(), 'Hello World!');
});
