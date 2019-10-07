using AspNetWebApi.Context;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;

namespace AspNetWebApi.Controllers
{
    public class ProdutosController : ApiController
    {

        public class Produto
        {
            public long Id { get; set; }
            public string Descricao { get; set; }
            public decimal Valor { get; set; }
            public string Foto { get; set; }
        }

        [HttpGet] 
        public List<Produto> Get()
        {
            using (var contexto = new Contexto())
            {
                var produtosModelo = contexto.Produtos.ToList();
                var produtosProxy = new List<Produto>();

                foreach (var produtoModelo in produtosModelo)
                {
                    var produtoProxy = new Produto()
                    {
                        Id = produtoModelo.Id,
                        Descricao = produtoModelo.Descricao,
                        Valor = produtoModelo.Valor,
                        Foto = produtoModelo.Foto,
                    };

                    produtosProxy.Add(produtoProxy);
                }

                return produtosProxy;
            }
        }
    }
}