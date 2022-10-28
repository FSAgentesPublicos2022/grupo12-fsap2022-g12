using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace back_wallet.Models
{
    public class Cuenta
    {
        [Key]
        public int IdCuenta { get; set; }
        public decimal Tenencia { get; set; }
        public decimal Balance { get; set; }
        public int IdUsuario { get; set; }
        public int IdCriptomoneda { get; set; }
        public DateTime? FechaAlta { get; set; }
        public string NomCrypto { get; set; }

    }
}


