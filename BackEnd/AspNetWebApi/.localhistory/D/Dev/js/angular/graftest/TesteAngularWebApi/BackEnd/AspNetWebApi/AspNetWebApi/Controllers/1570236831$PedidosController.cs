using AspNetWebApi.Context;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;

namespace AspNetWebApi.Controllers
{
    public class PedidoController
    {
     
        public class Cliente
        {
            public long Id { get; set; }
            public string Nome { get; set; }
        }

        public class Produto
        {
            public long Id { get; set; }
            public string Descricao { get; set; }
            public decimal Valor { get; set; }
        }

        public class Pedido
        {
            public long Id { get; set; }
            public DateTime Data { get; set; }
            public long ClienteId { get; set; }
            public Cliente Cliente { get; set; }
            public decimal Valor { get; set; }
            public decimal Desconto { get; set; }
            public decimal ValorTotal { get; set; }
            public virtual ICollection<Produto> Produtos { get; set; }
        }

        [HttpGet]
        public List<Pedido> Get()
        {
            using (var contexto = new Contexto())
            {
                var pedidosModelo = contexto.Pedidos.ToList();
                var pedidosProxy = new List<Pedido>();

                foreach (var pedidoModelo in pedidosModelo)
                {
                    var produtosProxy = new List<Produto>();
                    foreach (var produto in pedidoModelo.Produtos)
                    {
                        var produtoProxy = new Produto()
                        {
                            Descricao = produto.Descricao,
                            Valor = produto.Valor,
                            Id = produto.Id,
                        };
                        produtosProxy.Add(produtoProxy);
                    };

                    var pedidoProxy = new Pedido()
                    {
                        Id = pedidoModelo.Id,
                        Data = pedidoModelo.Data,
                        Valor = pedidoModelo.Valor,
                        Desconto = pedidoModelo.Desconto,
                        ValorTotal = pedidoModelo.ValorTotal,
                        Cliente = new Cliente()
                        {
                            Nome = pedidoModelo.Cliente.Nome,
                            Id = pedidoModelo.Cliente.Id,
                        },
                        Produtos = produtosProxy
                    };

                    pedidosProxy.Add(pedidoProxy);
                }

                return pedidosProxy;
            }
        }

        public class NovoPedido
        {
            public DateTime Data { get; set; }
            public long ClienteId { get; set; }
            public Cliente Cliente { get; set; }
            public decimal Valor { get; set; }
            public decimal Desconto { get; set; }
            public decimal ValorTotal { get; set; }
            public virtual ICollection<Produto> Produtos { get; set; }
        }

        [HttpPost]
        public HttpResponseMessage Post(NovoPedido novoPedido)
        {
            try
            {
                using (var contexto = new Contexto())
                {
                    var clienteModelo = contexto.Clientes
                        .Where(x => x.Id == novoPedido.ClienteId)
                        .Single();

                    var pedidoModelo = new Models.Pedido()
                    {
                        Data = novoPedido.Data,
                        Valor = novoPedido.Valor,
                        Desconto = novoPedido.Desconto,
                        ValorTotal = novoPedido.ValorTotal,
                        Cliente = clienteModelo,
                        Produtos = produtosProxy
                    };

                    contexto.Pedidos.Add(pedidoModelo);
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