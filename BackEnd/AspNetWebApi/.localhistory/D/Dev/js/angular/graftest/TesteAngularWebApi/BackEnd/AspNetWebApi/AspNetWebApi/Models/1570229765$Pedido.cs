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
        public Cliente Cliente { get; set; }

        [Required, Column(TypeName = "decimal(18,2)")]
        public decimal Valor { get; set; }

        [Required, Column(TypeName = "decimal(18,2)")]
        public decimal Desconto { get; set; }

        [Required, Column(TypeName = "decimal(18,2)")]
        public decimal ValorTotal { get; set; }


        [Required]
        public virtual ICollection<Produto> Produtos { get; set; }

        public Pedido()
        {
            this.Produtos = new HashSet<Produto>();
        }

        protected override void OnModelCreating(System.Data.Entity.DbModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
        }
    }
}