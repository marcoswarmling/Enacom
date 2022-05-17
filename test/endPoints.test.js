const frisby = require('frisby');
const fs = require('fs');

const url = 'http://localhost:3000';

describe('Teste de endpoints', () => {
    it('1 - Obtenha os produtos que estão disponíveis para compra', () => {
        return frisby
        .get(`${url}/products/1`)
        .expect('status', 200)
        .expect('header', 'content-type', 'application/json; charset=utf-8')
        .expect('jsonTypes', '*', {
            id: 'number',
            productName: 'string',
        });
    });
    it('2 - Insira items na sacola', () => {
        const body = {
            productId: 1,
            quantity: 1,
        };
        return frisby
        .post(`${url}/cart`, body)
        .expect('status', 200)
        .expect('header', 'content-type', 'application/json; charset=utf-8')
        .expect('jsonTypes', '*', {
            create: "sucessful",
        });
    });

    it('2.1 - Caso o id não exista retorne error', () => {
        const body = {
            productId: 100,
            quantity: 1,
        };
        return frisby
        .post(`${url}/cart`, body)
        .expect('status', 404)
        .expect('header', 'content-type', 'application/json; charset=utf-8')
        .expect('jsonTypes', '*', {
            error: "not found",
        });
    })
    it('3 - Obtenha a sacola', () => {
        return frisby
        .get(`${url}/cart/1`)
        .expect('status', 200)
        .expect('header', 'content-type', 'application/json; charset=utf-8')
        .expect('jsonTypes', '*', {
            id: 'number',
            productName: 'string',
            quantity: 'number',
        });
    });

    it('3.1 - Obtenha a sacola de um usuário que não existe', () => {
        return frisby
        .get(`${url}/cart/100`)
        .expect('status', 404)
        .expect('header', 'content-type', 'application/json; charset=utf-8')
        .expect('jsonTypes', '*', {
            error: "not found",
        });
    });


    it('4 - Remova um item da sacola', () => {
        return frisby
        .delete(`${url}/cart/?cartId=1&productId=1`)
        .expect('status', 200)
        .expect('header', 'content-type', 'application/json; charset=utf-8')
        .expect('jsonTypes', '*', {
            delete: "sucessful",
        });
    });

    it('4.1 - Caso o item a ser deletado não existir retorne erro', () => {
        return frisby
        .delete(`${url}/cart/?cartId=1&productId=100`)
        .expect('status', 404)
        .expect('header', 'content-type', 'application/json; charset=utf-8')
        .expect('jsonTypes', '*', {
            error: "not found",
        });
    });

    it('5 - Remova todos os itens da sacola', () => {
        return frisby
        .delete(`${url}/cart/1`)
        .expect('status', 200)
        .expect('header', 'content-type', 'application/json; charset=utf-8')
        .expect('jsonTypes', '*', {
            delete: "sucessful",
        });
    });

    it('6 - modifique a quantidade de um item na sacola', () => {
        const body = {
            productId: 1,
            quantity: 5,
        };
        return frisby
        .put(`${url}/cart`, body)
        .expect('status', 200)
        .expect('header', 'content-type', 'application/json; charset=utf-8')
        .expect('jsonTypes', '*', {
            update: "sucessful",
        });
    });

    it('6.1 - Caso o item a ser modificado não existir retorne erro', () => {
        const body = {
            productId: 100,
            quantity: 5,
        };
        return frisby
        .put(`${url}/cart`, body)
        .expect('status', 404)
        .expect('header', 'content-type', 'application/json; charset=utf-8')
        .expect('jsonTypes', '*', {
            error: "not found",
        });
    }
    );


});