# Copilot Instructions — Personal Document Generator

Purpose
-------
This repository contains small generators and utilities for producing Spanish personal document identifiers (DNI, NIE, etc.) and their supporting helpers. The code uses ES modules and includes unit tests and coverage artifacts.

Project layout
--------------
- `index.js` — project entry (lightweight CLI or example runner).
- `generators/` — main generator modules (`dni-generator.js`, `nie-generator.js`).
- `generators/utils/` — helper utilities (`letter-generator.js`, `number-generator.js`).
- `__test__/` — Jest test files for generators and utils.
- `coverage/` — collected coverage output (do not edit).

How to run and test
-------------------
- Install dependencies: `npm install`.
- Run tests: `npm test`.
- Generate coverage (if npm script exists): `npm run coverage`.

Conventions and style
---------------------
- Use ES module syntax (`import` / `export`). Files under `generators/` export named functions (e.g. `export const getValidDNI = () => { ... }`).
- Keep functions small and pure where possible; helpers live in `generators/utils/`.
- Tests live in `__test__/` and follow Jest conventions already used in this repo.
- Follow existing lint/formatting rules (project has `eslint.config.js` and Prettier may be used).

What Copilot should do (task patterns)
-------------------------------------
- Implement a new generator (e.g. `nif-generator.js`):
  - Create a file in `generators/` exporting a named function.
  - Use helpers from `generators/utils/` where appropriate.
  - Add unit tests in `__test__/generators` that validate valid/invalid outputs and edge cases.
- Improve or refactor helpers (e.g. `number-generator.js` or `letter-generator.js`) while keeping public behavior the same.
- Add tests for uncovered edge cases and maintain coverage thresholds.

Suggested prompt templates for Copilot
------------------------------------
- "Create a new generator `generators/<name>-generator.js` that exports a named function `getValid<Name>()` using existing utils; include Jest tests under `__test__/generators` and wire up any new helper functions under `generators/utils/`." 
- "Refactor `generators/utils/number-generator.js` to simplify logic but preserve its output for existing inputs; update tests to cover boundary cases." 
- "Add unit tests for `generators/nie-generator.js` covering both letters and numbers and expected formatting." 

Testing and verification checklist
---------------------------------
- Run `npm test` and ensure all tests pass locally.
- Run coverage script (if present) and check the `coverage/lcov-report` for regressions.
- Keep changes minimal and targeted; update README or docs only if behavior or public API changes.

PR & commit guidance
--------------------
- Use short, descriptive commit messages: `feat(generator): add <name> generator` or `fix(utils): correct control-letter calc`.
- Open a topic branch per feature: `feat/<short-description>`.
- Include unit tests for every new feature and ensure CI passes before merging.

If something isn't clear
------------------------
If Copilot is unsure about an API shape, check `generators/dni-generator.js` and other files in `generators/` for examples of imports/exports and follow the same pattern.

Contact
-------
If you need more context about project goals or desired output formats, ask the repository owner before making breaking changes.
