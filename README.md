# Enacom

## EnaFood

### Como rodar o projeto localmente

para rodar o projeto localmente é necessario os seguintes programas instalados na sua maquina:

**MongoDB**

```
https://www.mongodb.com/docs/manual/installation/
```

**Node**

```
https://nodejs.dev/learn/how-to-install-nodejs
```

Depois de instalados dentro da pasta do projeto execute os seguintes comandos

```
npm install
```

```
npm start
```

### Explicação sobre a abordagem do projeto

##### O projeto contem as seguintes rotas:

```
***POST*** restaurant/post
```

Apesar de no desafio não ser pedido a criação do documento do restaurante, eu decidi colocar para facilitar ao testar, e rodar localmente o projeto. Essa rota insere altomaticamente um restaurante. Fiz o documento pensando que vai aver varios restaurantes ja que é baseado no Ifood.

</br>
</br>
</br>

```
**GET** products/:id
```

Pega todos os itens contidos no restaurante cujo o id é igual a o que foi passado .

</br>
</br>
</br>

```
**GET** cart/:id
```

Pega todos os itens contidos na sacola cujo o id é igual a o que foi passado.

</br>
</br>
</br>

```
**POST** cart/
```

Exemplo do formato do JSON aceito pela rota:

```
{
      cartId: 1,
      restaurantId: 1,
      productId: 1,
      quantity: 1,
}
```

insere na sacola um produto passando tambem o Id do restaurante para facilitar assim o consumo da api e tambem poder adicionar o nome do produto no documento.

</br>
</br>
</br>

```
**DELETE** /cart/:cartId/:prouctId
```

Remove um item especifico de uma sacola especifica.

</br>
</br>
</br>

```
**DELETE** /cart/:cartId
```

Remove uma sacola e todos os itens contidos nela.
</br>
</br>
</br>

```
**PUT** /cart/:cartId/:productId
```

Exemplo do formato do JSON aceito pela rota:

```
{
    quantity:21
}
```

altera a quantidade de um determinado item contido em uma determinada sacola.

###### Outras observações

Durante a programação decidi usar a organização dos arquivos no padrão MVC porem sem o view. Alem disso opitei por fazer as validações por meio de middlewares, por acreditar que fica mais organizado deste geito.
