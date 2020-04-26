[![Build Status](https://travis-ci.org/JuanMaRuiz/document-generator.svg?branch=master)](https://travis-ci.org/JuanMaRuiz/document-generator)

# Personal document (DNI, NIF, NIE) generator

Generate a random and valid DNI/NIF or NIE.

## Install

```bash
npm i document-generator --save-dev
```

## Usage

```bash
const { ge = require('document-generator');

slugify('I ♥ Dogs');
//=> 'i-love-dogs'

slugify('  Déjà Vu!  ');
//=> 'deja-vu'

slugify('fooBar 123 $#%');
//=> 'foo-bar-123'

slugify('я люблю единорогов');
//=> 'ya-lyublyu-edinorogov'
```

### Why this tool?

If you work in a project where you need to test the user forms where the user has to fill an input with his/her id.

If you have an automated tool to fill for you user forms, and that forms contains an DNI/NIF/NIE input. And you need to generate a different one every time.

This tool can help you.

