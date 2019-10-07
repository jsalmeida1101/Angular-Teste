using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace AspNetWebApi.Models
{
    [Table("Pedido")]
    public class Pedido : BaseModelo
    {
        [Required]
        public DateTime Data { get; set; }

        [Required]
        public List<Produto> Produtos { get; set; }

        [Required]
        public Cliente Cliente { get; set; }

        [Required, Column(TypeName = "decimal(18,2)")]
        public decimal Valor { get; set; }

        [Required, Column(TypeName = "decimal(18,2)")]
        public decimal Desconto { get; set; }

        [Required, Column(TypeName = "decimal(18,2)")]
        public decimal ValorTotal { get; set; }
    }
}