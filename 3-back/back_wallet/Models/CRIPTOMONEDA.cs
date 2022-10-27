using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace back_wallet.Models
{
    public class CRIPTOMONEDA
    {
        [Key]
        public int IdCriptomoneda { get; set; }
        public int BHabilitado { get; set; }
        public string Nombre { get; set; }
        public decimal Precio { get; set; }
       
    }
}