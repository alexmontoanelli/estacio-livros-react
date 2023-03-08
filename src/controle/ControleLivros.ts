import livro from '../modelo/Livro';

let livros : Array<livro> = [
    {codigo: 1, titulo: 'Titulo livro1', resumo: 'Resumo 1', codEditora: 1, autores: ['autor1']},
    {codigo: 2, titulo: 'Titulo livro2', resumo: 'Resumo 2', codEditora: 2, autores: ['autor2']},
    {codigo: 3, titulo: 'Titulo livro3', resumo: 'Resumo 3', codEditora: 3, autores: ['autor1', 'autor2']},
    {codigo: 4, titulo: 'Titulo livro4', resumo: 'Resumo 4', codEditora: 4, autores: ['autor1']},
]


class ControleLivro {

    obterLivros()  {
        return livros;
    }

    incluir(l: livro) {

        let max = 0;
        livros.forEach((e : livro)=> {
            if (e.codigo > max)
                max = e.codigo+1;
        })


        l.codigo = max;
        livros.push(l);
    }

    excluir(codigo: number){
        
        let  index = livros.findIndex((l) => {
            return l.codigo == codigo;
        });

        console.log([index, codigo, livros.length]);
        if (index >= 0){
            livros.splice(index,1);
        }

    }

}

export default ControleLivro;