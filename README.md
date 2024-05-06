# NestJs Deno test

This is a vanilla nestjs project generated by the nestjs cli version 10.3.2.

## Changes
The goal of this project is to get as close as possible to having the project run with Deno. For this, the following changes have been made.

- app.controller.spec.ts was renamed to app.controller.test.ts
- app.controller.test.ts now has a unit test according to Deno.test
- All imports have .ts postfixed to them to prevent sloppy imports warning.
- Deno initialize workspace was run to add the settings.json.
- Deno init was run to add a deno.json
- "experimentalDecorators": true was added to compilerOptions in deno.json
- Removed prettier and lint dependencies, configs and scripts. Only using deno lint and deno fmt.
- Removed package.json and moved dependencies to deno.json imports
- Change the nestjs vanilla integration test to a Deno.test still using supertest.
- Added some deno tasks for testing

# Error
[Nest] 78635  - 05/06/2024, 2:26:08 PM   ERROR [PackageLoader] No driver (HTTP) has been selected. In order to take advantage of the default driver, please, ensure to install the "@nestjs/platform-express" package ($ npm install @nestjs/platform-express).

This turns out the be caused by the fact that deno isn't caching that module when it's not referenced anywhere.
Fix by adding to main.ts: 
import '@nestjs/platform-express';