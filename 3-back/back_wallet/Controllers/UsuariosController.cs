using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using back_wallet.Data;
using back_wallet.Models;
using System.Web.Http;
using System.Security.Cryptography;
using System.Text;
using System.IdentityModel.Tokens.Jwt;
using System.Web.Http.Cors;


namespace back_wallet.Controllers
{

    [EnableCors(origins: "http://localhost:4200", headers: "*", methods: "*")]
 
    
    public class UsuariosController : ApiController
    {
        
        private back_walletContext bd = new back_walletContext();
        
        
        public UsuariosController()
        {
            // OJO DESPUES DE LAS PRUEBAS BORRAR ESTE CONSTRUCTOR SIN PARAMETROS
        }
        // GET: Usuarios
        //public List<Usuario> Get()
        //{
        //    // OJO DESPUES DE LAS PRUEBAS BORRAR ESTE CONSTRUCTOR SIN PARAMETROS
        //    return new List<Usuario> { new Usuario { IdUsuario = 1, NombreUser = "probandotolo", Contrasenia = "LaPassw" } };
        //}

        // GET: Usuarios/Details/5

        //public Usuario Get(int id)
        //{
        //    // OJO DESPUES DE LAS PRUEBAS BORRAR ESTE CONSTRUCTOR SIN PARAMETROS
        //    var lista = new List<Usuario> { new Usuario { IdUsuario = 1, NombreUser = "probandotolo", Contrasenia = "LaPassw" } };
        //    return lista.FirstOrDefault(t => t.IdUsuario == id);
        //}



        //Insertar metodo para obtener user.
        [HttpPost]
        [Route("api/Usuarios/login")]
        public IHttpActionResult login([FromBody] Usuario oUsuarioCLS)
        {
            Usuario oUsuario = new Usuario();
            Usuario oUsuarioRecuerar = new Usuario();
            int rpta = 0;
            try
            {
                using (back_walletContext bd = new back_walletContext())
                {

                    SHA256Managed sha = new SHA256Managed();
                    byte[] dataNocifrada = Encoding.Default.GetBytes(oUsuarioCLS.Contrasenia);
                    byte[] dataCifrada = sha.ComputeHash(dataNocifrada);
                    string claveCifrada = BitConverter.ToString(dataCifrada).Replace("-", "");

                    rpta = bd.Usuario.Where(p => p.NombreUser.ToUpper() == oUsuarioCLS.NombreUser.ToUpper() && p.Contrasenia == claveCifrada).Count();
                    if (rpta == 1)
                    {
                         oUsuarioRecuerar = bd.Usuario.Where(p => p.NombreUser.ToUpper() == oUsuarioCLS.NombreUser.ToUpper()
                        && p.Contrasenia == claveCifrada).First();
                        //HttpContext.Session.SetString("empleado", oUsuarioRecuerar.IdUsuario.ToString());
                        oUsuario.IdUsuario = oUsuarioRecuerar.IdUsuario;
                        oUsuario.NombreUser = oUsuarioRecuerar.NombreUser;
                        oUsuario.IsAdmin = oUsuarioRecuerar.IsAdmin;
                        oUsuario.Mail = oUsuarioRecuerar.Mail;
                        var token = TokenGenerator.GenerateTokenJwt(oUsuario.NombreUser,oUsuario.Mail,oUsuario.IsAdmin);
                        //Mañana en el return ok debo devolver una lista y en el servicio debo mapear los tres objetos para ver que recibo.
                        //quizas deba crear una clase o interfaz en angular para poder mapear lo que viene.
                       
                        return Ok(token);
                    }
                    else
                    {
                        return Unauthorized(); //devuelve un 401 no autorizado.
                    }
                }
            }
            catch (Exception ex) {
                Console.WriteLine(ex); }

            return Unauthorized();
        }

      
        //*****************FIN LOGIN **************************************
    }
}








