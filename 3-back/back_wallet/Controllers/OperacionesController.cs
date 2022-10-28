using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using System.Web.Http.Cors;
using back_wallet.Data;
using back_wallet.Models;

namespace back_wallet.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]

    public class OperacionesController : ApiController
    {
        private back_walletContext db = new back_walletContext();

        [HttpPost]
        [Route("api/Operaciones/comprar")]
        public IHttpActionResult comprar([FromBody] Compra oCompraCLS)
        {
            Cuenta oCuenta = new Cuenta();
            Persona persona = new Persona();
            Operaciones oOperacion = new Operaciones();
            Compra oCompra = new Compra();
            CRIPTOMONEDA oCripto = new CRIPTOMONEDA();
            oCompra.idUsuario = oCompraCLS.idUsuario;
            oCompra.precioCripto = oCompraCLS.precioCripto;
            oCompra.compraenDolar = oCompraCLS.compraenDolar;
            oCompra.NombreCripto = oCompraCLS.NombreCripto;

            int rpta = 0;
            //int idCripto=0;
            try
            {

                // using (back_walletContext bd = new back_walletContext())
                //  using (back_walletContext bd = new back_walletContext())
                //{

                  oCripto = db.Criptomonedas.Where(p => p.Nombre == oCompra.NombreCripto).First();

                 rpta = db.Cuentas.Where(p => p.IdUsuario == oCompra.idUsuario && p.IdCriptomoneda == oCripto.IdCriptomoneda).Count();
                //Evaluamos si existe o no la cuenta de cripto para el usuario.
                if (rpta == 1)
                {
                    oCuenta = db.Cuentas.Where(p => p.IdUsuario == oCompra.idUsuario && p.IdCriptomoneda == oCripto.IdCriptomoneda).First();
                    oCuenta.Balance = oCuenta.Balance - oCompra.compraenDolar;
                    oCuenta.Tenencia = oCuenta.Tenencia + oCompra.compraenDolar / oCompra.precioCripto;
                    // oCuenta = db.Cuentas.Where(p => p.IdCuenta == oCompra.idUsuario).First();
                    //Lacuenta existe debo operar en ella
                    
                    db.SaveChanges();
                }
                else
                {
                    //La Cuenta No existe Debe Crearse
                    //Si la primer compra supera los 500 dolares se rechaza el pedido.   
                    if (oCompra.compraenDolar > 500)
                    {
                        //Estamos dando la posibilidad que la primer inversion en cripto sea de hasta 500 dolares.!!!

                        return Unauthorized();
                    }
                    try
                    {
                        oCuenta.IdCuenta = 1;
                        oCuenta.IdUsuario = (int)oCompra.idUsuario;
                        oCuenta.Balance = 500 - oCompra.compraenDolar;
                        oCuenta.IdCriptomoneda = (int)oCripto.IdCriptomoneda;
                        oCuenta.Tenencia = oCompra.compraenDolar / oCompra.precioCripto;
                        oCuenta.NomCrypto = oCripto.Nombre;
                        try
                        {
                            db.Cuentas.Add(oCuenta);
                            int v = db.SaveChanges();
                        }
                        catch (Exception ex)
                        {
                            Console.WriteLine(ex);

                        }

                        //  return Ok("Se creó la cuenta exitosamente.");
                    }

                    catch (Exception ex)
                    {
                        Console.WriteLine(ex);

                    }

                    return Unauthorized(); //devuelve un 401 no autorizado.
                }

                //}
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
            }

            return Unauthorized();
        }

    }
}