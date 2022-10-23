using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace back_wallet.Models
{
    public class Pagina
    {
        [Key]
        public int IdPagina { get; set; }
        public byte Visible { get; set; }

        public byte IsAdmin { get; set; }

        public int BHabilitado { get; set; }

        public String Nombre { get; set; }

        public String url { get; set; }

    }
}
