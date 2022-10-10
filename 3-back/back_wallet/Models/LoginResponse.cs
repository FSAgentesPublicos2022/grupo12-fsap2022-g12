using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace back_wallet.Models
{
    public class LoginResponse
    {
            public string tokenId { get; set; }
            public long expiresAt { get; set; }
    }

}
