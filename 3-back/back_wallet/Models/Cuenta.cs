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
        public int BHabilitado { get; set; }
        public float Saldo { get; set; }
        public float Balance { get; set; }
        public DateTime FechaAlta { get; set; }
        public DateTime? FechaBaja { get; set; }

    }
}


