[![Build Status](https://travis-ci.org/JuanMaRuiz/personal-document-generator.svg?branch=master)](https://travis-ci.org/JuanMaRuiz/personal-document-generator)
[![Coverage Status](https://coveralls.io/repos/github/JuanMaRuiz/personal-document-generator/badge.svg?branch=master)](https://coveralls.io/github/JuanMaRuiz/personal-document-generator?branch=master)

# Personal document (DNI, NIF, NIE) generator

> **Breaking change** from **version 1.0.0**. From v1.0.0 this module should be used as esm module. If you prefer use as CommonJS Module, install previous **v0.1.6**

Generate a random and valid Spanish DNI/NIF or NIE.

## Install

```bash
npm i personal-document-generator --save-dev
```

## Usage


**Version v1.0.0**

```bash
import { getValidDNI, generateValidNIE } from 'personal-document-generator';

getValidDNI();
//=> '30292557Q'

getValidNIE();
//=> 'Z5247524X'
```

**Version v0.1.6**

```bash
const { getValidDNI, generateValidNIE } = require('personal-document-generator');

getValidDNI();
//=> '30292557Q'

getValidNIE();
//=> 'Z5247524X'
```

### Why this tool?

If you work in a project where you need to test the user forms where the user has to fill an input with his/her id.

If you have an automated tool to fill for you user forms, and that forms contains an DNI/NIF/NIE input. And you need to generate a different one every time.

This tool can help you.

