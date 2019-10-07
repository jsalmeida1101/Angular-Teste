using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AspNetWebApi.Models
{
    [Table("Produto")]
    public class Produto : BaseModelo
    {
        [Required]
        public string Descricao { get; set; }

        [Required, Column(TypeName = "decimal(18,2)")]
        public double Valor { get; set; }

        [Column(TypeName = "ntext"), MaxLength]
        public byte[] Imagem { get; set; }

    }
}