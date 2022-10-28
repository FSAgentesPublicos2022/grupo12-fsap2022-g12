using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.ModelConfiguration.Conventions;
using System.Linq;
using System.Web;

namespace back_wallet.Data
{
    public class back_walletContext : DbContext
    {
        // You can add custom code to this file. Changes will not be overwritten.
        // 
        // If you want Entity Framework to drop and regenerate your database
        // automatically whenever you change your model schema, please use data migrations.
        // For more information refer to the documentation:
        // http://msdn.microsoft.com/en-us/data/jj591621.aspx
    
        public back_walletContext() : base("name=back_walletContext")
        {
            //disable initializer
            Database.SetInitializer<back_walletContext>(null);
        }

        protected override void OnModelCreating(DbModelBuilder dbModelBuilder)
        {
            dbModelBuilder.Conventions.Remove<PluralizingTableNameConvention>();
         }
        public System.Data.Entity.DbSet<back_wallet.Models.Usuario> Usuario { get; set; }

        public System.Data.Entity.DbSet<back_wallet.Models.Persona> Persona { get; set; }

        public System.Data.Entity.DbSet<back_wallet.Models.Cuenta> Cuenta { get; set; }

        public System.Data.Entity.DbSet<back_wallet.Models.Pagina> Pagina { get; set; }
    }
}
