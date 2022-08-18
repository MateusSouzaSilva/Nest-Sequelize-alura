import { Injectable } from "@nestjs/common";
import { Produto } from "./produto.model";

@Injectable()
export class ProdutosService {
    produtos: Produto[] = [
        new Produto("LIVRO01", "TDD e BDD na prática", 29.30),
        new Produto("LIVRO02", "Iniciando em Javascript", 49.90),
        new Produto("LIVRO03", "Código Limpo", 70.00)
    ];

    obterTodos(): Produto[] {
        return this.produtos;
    }

    obterUm(id: number): Produto {
        return this.produtos[0];
    }

    criar(produto: Produto) {
        this.produtos.push(produto);
    }

    alterar(produto: Produto): Produto {
        return produto;
    }

    apagar(id: number) {
        this.produtos.pop();
    }
 }