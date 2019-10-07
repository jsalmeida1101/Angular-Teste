using AspNetWebApi.Context;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;

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

        public class NovoProduto
        {
            public string Descricao { get; set; }
            public decimal Valor { get; set; }
            public string Foto { get; set; }
        }

        [HttpPost]
        public HttpResponseMessage Post(NovoProduto novoProduto)
        {
            try
            {
                using (var contexto = new Contexto())
                {
                    var produtoModelo = new Models.Produto()
                    {
                        Descricao = novoProduto.Descricao,
                        Valor = novoProduto.Valor,
                        Foto = novoProduto.Foto
                    };

                    contexto.Produtos.Add(produtoModelo);
                    contexto.SaveChanges();
                    return Request.CreateResponse(HttpStatusCode.OK);
                }
            }
            catch (Exception ex)
            {
                return Error("Erro ao cadastrar: " + ex.Message);
            }
        }

        private HttpResponseMessage Error(string message)
        {
            return Request.CreateResponse(HttpStatusCode.InternalServerError, message);
        }
    }
}