using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using back_wallet.Models;

namespace back_wallet
{
    public class JwtAuthenticationService : IJwtAuthenticationService
    {
        private readonly string _key;

        public JwtAuthenticationService(string key)
        {
            _key = key;
        }

        public LoginResponse getToken(int idUsuario)
        {
            var tokenHandler = new JwtSecurityTokenHandler();
            var tokenKey = Encoding.ASCII.GetBytes(_key);
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new System.Security.Claims.ClaimsIdentity(
                        new Claim[]
                        {
                            new Claim(ClaimTypes.Sid, idUsuario.ToString()),
                            new Claim(ClaimTypes.Expiration, 3600.ToString())
                        }
                    ),
                Expires = DateTime.UtcNow.AddHours(1),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(tokenKey),
                SecurityAlgorithms.HmacSha256Signature)
            };


            var token = tokenHandler.CreateToken(tokenDescriptor);

            string tokenId = tokenHandler.WriteToken(token);

            LoginResponse loginResponse = new LoginResponse();
            loginResponse.tokenId = tokenId;
            loginResponse.expiresAt = 3600;

            return loginResponse;
        }

        LoginResponse IJwtAuthenticationService.getToken(int idUsuario)
        {
            throw new NotImplementedException();
        }
    }
}
