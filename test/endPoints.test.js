const frisby = require("frisby");
const fs = require("fs");
const Joi = frisby.Joi;

const url = "http://localhost:3000";

describe("Teste de endpoints", () => {
  it("1 - Obtenha os produtos que estão disponíveis para compra", () => {
    return frisby
      .get(`${url}/products/1`)
      .expect("status", 200)
      .expect("header", "content-type", "application/json; charset=utf-8")
      .expect("jsonTypes", "*", {
        id: Joi.number(),
        productName: Joi.string(),
      });
  });
  it("2 - Insira items na sacola", () => {
    const body = {
      cartId: 1,
      restaurantId: 1,
      productId: 1,
      quantity: 1,
    };
    return frisby
      .post(`${url}/cart`, body)
      .expect("status", 200)
      .expect("header", "content-type", "application/json; charset=utf-8")
      .expect("jsonTypes", {
        create: "sucessful",
      });
  });

  it("2.1 - Caso o id não exista retorne error", () => {
    const body = {
      cartId: 1,
      restaurantId: 1,
      productId: 1000,
      quantity: 1,
    };
    return frisby
      .post(`${url}/cart`, body)
      .expect("status", 404)
      .expect("header", "content-type", "application/json; charset=utf-8")
      .expect("jsonTypes", {
        error: "not found",
      });
  });
  it("3 - Obtenha a sacola", () => {
    return frisby
      .get(`${url}/cart/1`)
      .expect("status", 200)
      .expect("header", "content-type", "application/json; charset=utf-8")
      .expect("jsonTypes", "*", {
        CardId: Joi.number(),
        RestaurantId: Joi.number(),
        ProductId: Joi.number(),
        productName: Joi.string(),
        quantity: Joi.number(),
      });
  });

  it("4 - modifique a quantidade de um item na sacola", () => {
    const body = {
      quantity: 5,
    };
    return frisby
      .put(`${url}/cart/1/1`, body)
      .expect("status", 200)
      .expect("header", "content-type", "application/json; charset=utf-8")
      .expect("jsonTypes", {
        update: "sucessful",
      });
  });

  it("4.1 - Caso o item a ser modificado não existir retorne erro", () => {
    const body = {
      quantity: 5,
    };
    return frisby
      .put(`${url}/cart/1/25`, body)
      .expect("status", 404)
      .expect("header", "content-type", "application/json; charset=utf-8")
      .expect("jsonTypes", {
        error: "not found",
      });
  });

  it("5 - Remova um item da sacola", () => {
    return frisby
      .delete(`${url}/cart/1/1`)
      .expect("status", 200)
      .expect("header", "content-type", "application/json; charset=utf-8")
      .expect("jsonTypes", {
        delete: "sucessful",
      });
  });

  it("5.1 - Caso o item a ser deletado não existir retorne erro", () => {
    return frisby
      .delete(`${url}/cart/1/25`)
      .expect("status", 404)
      .expect("header", "content-type", "application/json; charset=utf-8")
      .expect("jsonTypes", {
        error: "not found",
      });
  });

  it("6 - Remova todos os itens da sacola", () => {
    return frisby
      .delete(`${url}/cart/1`)
      .expect("status", 200)
      .expect("header", "content-type", "application/json; charset=utf-8")
      .expect("jsonTypes", {
        delete: "sucessful",
      });
  });
});
