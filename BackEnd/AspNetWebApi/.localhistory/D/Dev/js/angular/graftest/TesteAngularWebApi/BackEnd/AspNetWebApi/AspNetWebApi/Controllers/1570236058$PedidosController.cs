using AspNetWebApi.Context;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Web;
using System.Web.Http;

namespace AspNetWebApi.Controllers
{
    public class PedidoController
    {
        public class Pedido
        {
            public long Id { get; set; }
            public string Descricao { get; set; }
            public decimal Valor { get; set; }
            public string Foto { get; set; }
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
                    var pedidoProxy = new Pedido()
                    {
                        Id = pedidoModelo.Id,
                        Descricao = pedidoModelo.Descricao,
                        Valor = pedidoModelo.Valor,
                        Foto = pedidoModelo.Foto,
                    };

                    pedidosProxy.Add(pedidoProxy);
                }

                return pedidosProxy;
            }
        }

        public class NovoPedido
        {
            public string Descricao { get; set; }
            public decimal Valor { get; set; }
            public string Foto { get; set; }
        }

        [HttpPost]
        public HttpResponseMessage Post(NovoPedido novoPedido)
        {
            try
            {
                using (var contexto = new Contexto())
                {
                    var pedidoModelo = new Models.Pedido()
                    {
                        Descricao = novoPedido.Descricao,
                        Valor = novoPedido.Valor,
                        Foto = novoPedido.Foto
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