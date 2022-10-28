using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace back_wallet.Models
{
 
    public class Operaciones
    {
        [Key]
        public int IdOperacion { get; set; }
        public int IdTipoOperacion { get; set; }
        public int IdCuentaOrigen { get; set; }
        public int IdCuentaDestino { get; set; }
        public decimal CantidadDeCrypto { get; set; }
        public int IdPersona { get; set; }
        public DateTime? FechaOperacion { get; set; }
        public decimal Importe { get; set; }
        public int IdCriptomoneda { get; set; }

        public int idUsuario { get; set; }
        public Decimal compraenDolar { get; set; }
        public Decimal precioCripto { get; set; }

        public string NombreCripto { get; set; }
    }
}