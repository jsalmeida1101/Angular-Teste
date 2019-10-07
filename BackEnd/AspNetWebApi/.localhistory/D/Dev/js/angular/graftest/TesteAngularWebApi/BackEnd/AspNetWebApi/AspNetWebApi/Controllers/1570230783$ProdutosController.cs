using AspNetWebApi.Context;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
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

        public class NovoProduto
        {
            public string Nome { get; set; }
            public string Email { get; set; }
        }

        [HttpPost]
        public HttpResponseMessage Post(NovoProduto novoProduto)
        {
            try
            {
                using (var contexto = new Contexto())
                {
                    var contains = contexto.Produtos.Where(b => b.Email == novoProduto.Email).FirstOrDefault() != null;
                    if (contains)
                    {
                        return Error("Já existe alguém cadastrado com este e-mail");
                    }
                    var produtoModelo = new Models.Produto()
                    {
                        Nome = novoProduto.Nome,
                        Email = novoProduto.Email
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