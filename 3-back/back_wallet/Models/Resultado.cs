using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace back_wallet.Models
{
    public class Resultado
    {
        public object ObjetoGenerico { get; set; }
        public string Texto { get; set; }
        public string Error { get; set; }
    }
}
