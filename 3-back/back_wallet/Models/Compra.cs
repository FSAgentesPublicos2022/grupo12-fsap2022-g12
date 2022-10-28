using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace back_wallet.Models
{
    public class Compra
    {
        public int idUsuario { get; set; }
        public Decimal compraenDolar { get; set; }
        public Decimal precioCripto { get; set; }

        public string NombreCripto { get; set; }

    }
}