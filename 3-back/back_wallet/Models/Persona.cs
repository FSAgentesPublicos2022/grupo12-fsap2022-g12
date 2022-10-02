using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace back_wallet.Models
{
    public class Persona
    {
        [Key]
        public int IdPersona { get; set; }
        public string Nombre { get; set; }
        public string Apellido { get; set; }
        public string Telefono { get; set; }
        public string Cuil { get; set; }
        public string Mail { get; set; }
        public string Domicilio { get; set; }
        public string Altura { get; set; }
        public DateTime FechaNac { get; set; }
        public int Bhabilitado { get; set; }
    }
}