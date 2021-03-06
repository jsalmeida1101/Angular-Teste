﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;

namespace AspNetWebApi.Models
{
    [Table("Pedido")]
    public class Pedido : BaseModelo
    {
        public Pedido()
        {
            Produtos = new HashSet<Produto>();
        }

        [Required]
        public DateTime Data { get; set; }
        
        [Required]
        public decimal Valor { get; set; }

        [Required]
        public decimal Desconto { get; set; }

        [Required]
        public decimal ValorTotal { get; set; }

        [Required]
        public virtual ICollection<Produto> Produtos { get; set; }

        [Required]
        public virtual Cliente Cliente { get; set; }
    }
}