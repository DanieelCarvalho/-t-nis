# TenisExpress

Este é o projeto de entrega do curso "JavaScript + React: Atividade Prática" oferecido pelo Instituto Nu em parceria com Descomplica. O objetivo deste projeto foi criar uma loja virtual utilizando o framework ReactJS.

## Descrição
Neste projeto, foi desenvolvida uma loja virtual utilizando ReactJS. A aplicação consiste em uma página de visualização dos produtos disponíveis, onde os produtos são carregados dinamicamente a partir de um array de objetos. Cada objeto contém informações como nome, descrição e valor do produto.

Além da página de visualização dos produtos, foi implementado um carrinho de compras. Os usuários podem adicionar os produtos desejados ao carrinho, e os itens selecionados são armazenados no localStorage. Na página do carrinho de compras, é exibida a quantidade de cada produto escolhido pelo usuário, juntamente com o total da compra.

## Funcionalidades

O projeto possui as seguintes funcionalidades:

Visualização dos produtos disponíveis: Ao acessar a página inicial, o usuário poderá ver os produtos disponíveis para compra. Os dados dos produtos são carregados dinamicamente a partir de uma API REST simulada pelo JSON Server, que fornece um array de objetos com informações como nome, descrição e valor de cada produto.

Adição de produtos ao carrinho de compra: O usuário poderá adicionar os produtos ao carrinho de compra. Ao clicar no botão "Adicionar ao Carrinho" em um determinado produto, o item será adicionado ao carrinho e a quantidade correspondente será atualizada.

Armazenamento do carrinho de compra: Os itens selecionados pelo usuário serão armazenados no localStorage. Dessa forma, mesmo se o usuário fechar a página e retornar posteriormente, o carrinho de compra será restaurado com os itens escolhidos anteriormente.

Exibição do carrinho de compra: A página do carrinho de compra apresentará os itens selecionados pelo usuário. Cada produto exibirá o seu nome, quantidade escolhida, valor unitário e valor total (calculado multiplicando a quantidade pelo valor unitário). Além disso, o valor total da compra será exibido no final da página.
