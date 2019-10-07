using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace AspNetWebApi.Models
{
    [Table("Cliente")]
    public class Cliente : BaseModelo
    {
        [Required]
        public string Nome { get; set; }

        [Required, EmailAddress, Index("IDX_CLIENT_MAIL_UNIQUE", 1, IsUnique = true)]
        public string Email { get; set; }


        public string ByEmail(string email)
        {

        }
    }
}