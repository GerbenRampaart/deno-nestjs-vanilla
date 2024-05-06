import { Test, TestingModule } from '@nestjs/testing';

// @deno-types="npm:@types/supertest"
import st from 'supertest';

import { AppModule } from '../src/app.module.ts';
import { assertEquals } from "assert";
import '@nestjs/platform-express';
import { NestApplication } from "@nestjs/core";

Deno.test({
  name: 'AppController (e2e)',
  permissions: {
    env: true,
    read: true,
    net: true,
  }
}, async (t: Deno.TestContext) => {
  let app: NestApplication;

  await t.step(
    'Start the app',
    async (_t: Deno.TestContext) => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();
  
    app = moduleFixture.createNestApplication();
    await app.listen(3000);
  });

  await t.step('Invoke GET "/"', async (_t: Deno.TestContext) => {
    const req = st(app.getHttpServer()).get('/');
    const result = await req;
  
    assertEquals(result.ok, true);
    assertEquals(result.text, 'Hello World!');
  });

  await t.step('Close the app', async (_t: Deno.TestContext) => {
    await app.close();
  });
})

