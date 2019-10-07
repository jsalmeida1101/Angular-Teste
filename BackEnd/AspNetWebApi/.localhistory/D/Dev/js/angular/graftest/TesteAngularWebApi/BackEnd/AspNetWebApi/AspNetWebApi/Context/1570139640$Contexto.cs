﻿using AspNetWebApi.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.ModelConfiguration.Conventions;
using System.Linq;
using System.Web;

namespace AspNetWebApi.Context
{
    public class Contexto : DbContext
    {
        public DbSet<Contato> Contatos { get; set; }
        public DbSet<Clientes> Clientes { get; set; }
        public DbSet<Mensagem> Mensagens { get; set; }

        public Contexto() : base("ConnectionString")
        {
        }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Conventions.Remove<PluralizingTableNameConvention>();
        }

    }
}