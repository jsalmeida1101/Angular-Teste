using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;

namespace AspNetWebApi.Models
{
    [Table("Produto")]
    public class Produto : BaseModelo
    {
        [Required]
        public string Descricao { get; set; }

        [Required]
        public decimal Valor { get; set; }

        [Column(TypeName = "ntext"), MaxLength]
        public string Foto { get; set; }

    }
}