using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace back_wallet.Models
{
    public class Usuario
    {
        public int IdUsuario { get; set; }
        public string NombreUser { get; set; }
        public string Contrasenia { get; set; }
        public Boolean IsAdmin { get; set; }
        public int? IdPersona { get; set; }
        public DateTime FechaAlta { get; set; }
        public DateTime FechaBaja { get; set; }

    }
}