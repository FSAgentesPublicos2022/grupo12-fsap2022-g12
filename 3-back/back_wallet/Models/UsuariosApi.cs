using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace back_wallet.Models
{
    public  class UsuariosApi
    {
        public int Id { get; set; }
        public string Email { get; set; } 
        public byte[] Password { get; set; } 
        public DateTime FechaAlta { get; set; }
        public DateTime? FechaBaja { get; set; }
    }
}
