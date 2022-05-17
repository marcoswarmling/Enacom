const frisby = require('frisby');
const fs = require('fs');

const url = 'http://localhost:3000';

describe('Teste de endpoints', () => {
    it('1 - Obtenha os produtos que estão disponíveis para compra', () => {
        return frisby
        .get(`${url}/products`)
        .expect('status', 200)
        .expect('header', 'content-type', 'application/json; charset=utf-8')
        .expect('jsonTypes', '*', {
            id: 'number',
            productName: 'string',
        });
    });
});