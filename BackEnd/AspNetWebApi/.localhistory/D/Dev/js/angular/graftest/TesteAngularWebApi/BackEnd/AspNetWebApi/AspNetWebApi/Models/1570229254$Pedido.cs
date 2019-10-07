﻿using System;
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
        Produtos

            [Required]
        Cliente

        [Required] 
            Valor

        Desconto

            [Required]
        ValorTotal
    }
}