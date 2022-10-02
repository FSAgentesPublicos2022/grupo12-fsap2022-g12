using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using back_wallet.Data;
using back_wallet.Models;
using System.Web.Http;

namespace back_wallet.Controllers
{
    public class UsuariosController : ApiController
    {
        private back_walletContext db = new back_walletContext();

        // GET: Usuarios
        public List<Usuario> Get()
        {
            return new List<Usuario> { new Usuario { IdUsuario = 1, NombreUser = "probandotolo", Contrasenia = "LaPassw" } };
        }

        // GET: Usuarios/Details/5
        
        public Usuario Get(int id)
        {
            var lista= new List<Usuario> { new Usuario { IdUsuario = 1, NombreUser = "probandotolo", Contrasenia = "LaPassw" } };
            return lista.FirstOrDefault(t => t.IdUsuario == id);
        }



    }
}
