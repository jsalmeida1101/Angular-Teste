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
            public string Descricao { get; set; }
            public decimal Valor { get; set; }
            public string Foto { get; set; }
        }
    }
}