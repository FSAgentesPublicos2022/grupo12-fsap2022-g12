using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace back_wallet.DTOs
{
    public class LoginDTO
    {
       [Required]
        public string NombreUser { get; set; }
        [Required]
        public string Contrasenia { get; set; }
    }
}