#!/bin/bash

npm install
npm run build

mkdir testing
cd testing

npm init -y
npm install

touch index.js
echo "const ixc = require('../dist/index.js')

const api = new ixc.Ixc({
    token: 'token',
    baseUrl: 'https://api-ixc.com.br'
})" > index.js