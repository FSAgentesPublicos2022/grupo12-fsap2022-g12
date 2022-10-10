using back_wallet.Models;

namespace back_wallet
{
    public interface IJwtAuthenticationService
    {
         LoginResponse getToken(int idUsuario);
    }
}
