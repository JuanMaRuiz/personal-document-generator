[![Build Status](https://travis-ci.org/JuanMaRuiz/document-generator.svg?branch=master)](https://travis-ci.org/JuanMaRuiz/document-generator)
[![Coverage Status](https://coveralls.io/repos/github/JuanMaRuiz/document-generator/badge.svg?branch=master)](https://coveralls.io/github/JuanMaRuiz/document-generator?branch=master)

# Personal document (DNI, NIF, NIE) generator

Generate a random and valid Spanish DNI/NIF or NIE.

## Install

```bash
npm i personal-document-generator --save-dev
```

## Usage

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

