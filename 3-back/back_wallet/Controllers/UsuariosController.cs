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
using back_wallet.DTOs;

namespace back_wallet.Controllers
{

    [EnableCors(origins: "http://localhost:4200", headers: "*", methods: "*")]
  //[EnableCors(origins: "http://localhost:4200", headers: "*", methods: "*")]

    public class UsuariosController : ApiController
    {

        private back_walletContext bd = new back_walletContext();


        public UsuariosController()
        {
            // OJO DESPUES DE LAS PRUEBAS BORRAR ESTE CONSTRUCTOR SIN PARAMETROS
        }
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
                        oUsuario.IdUsuario = oUsuarioRecuerar.IdUsuario;
                        oUsuario.NombreUser = oUsuarioRecuerar.NombreUser;
                        oUsuario.IsAdmin = oUsuarioRecuerar.IsAdmin;
                        oUsuario.Mail = oUsuarioRecuerar.Mail;
                        var token = TokenGenerator.GenerateTokenJwt(oUsuario.NombreUser, oUsuario.Mail, oUsuario.IsAdmin);
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

        //----------------<<<<<< Cierre de Sesion >>>>>>>>***************
        [HttpGet]
        [Route("api/Usuarios/cerrarSession")]
        public IHttpActionResult cerrarSession()
        {
            try
            {

                return Ok("ok");
            }
            catch (Exception ex) { Console.WriteLine(ex); }
            return Unauthorized();
        }
        //*****************FIN CIERRE DE SESION **************************************

        //----------------<<<<<< Gestion de Accesibilidad. >>>>>>>>***************
        //// Listar paginas a las que puede acceder el usuario 
        [EnableCors(origins: "http://localhost:4200", headers: "*", methods: "*")]

        [HttpGet]
         [Route("api/Usuarios/listarpaginas/{rol}")]
        public  List<PaginaCLS> listarpaginas(string rol)
        {
            List<PaginaCLS> listapagina = new List<PaginaCLS>();
            try
            {
                using (back_walletContext bd = new back_walletContext())
                {
                    if (rol == "{Admin}")
                    {
                        listapagina = (from paginauser in bd.Pagina
                                       where paginauser.IsAdmin == 1
                                       select new PaginaCLS
                                       {
                                           Nombre = paginauser.Nombre,
                                           url = paginauser.url

                                       }).ToList();
                    }
                    else
                    { //rol no admin
                        listapagina = (from paginauser in bd.Pagina
                                       where paginauser.IsAdmin == 0
                                       select new PaginaCLS
                                       {
                                           Nombre = paginauser.Nombre,
                                           url = paginauser.url

                                       }).ToList();

                    }

                }
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
                            }
            return listapagina;
            
        }


    }
}








