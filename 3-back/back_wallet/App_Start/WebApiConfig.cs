using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Graph;
using Microsoft.IdentityModel.Tokens;
using back_wallet.Controllers;

//using Microsoft.Authentication.JwtBearer;


namespace back_wallet
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            // Configuración y servicios de API web
            //añadimos cors   
            config.EnableCors();


            config.MessageHandlers.Add(new TokenValidationHandler());
            //var builder = WebApplication.CreateBuilder(Args);
            //string cors = "ConfigurarCors";
            //// Add services to the container.

            //builder.Services.AddControllersWithViews();
            //builder.Services.AddCors(options =>
            //{
            //    options.AddPolicy(name: cors, builder =>
            //    {
            //        builder.WithOrigins("*");
            //    });

            //});
          

            // Rutas de API web
            config.MapHttpAttributeRoutes();

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );
        }
    }
}
