using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Hosting;
using System;
using static LifeSpot.Logger;


namespace LifeSpot
{
    public class Program
    {
        public static void Main(string[] args)
        {
            CreateHostBuilder(args).Build().Run();
        }
        
        //private static void Target(string str)
        //{
        //    throw new NotImplementedException();
        //}

        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder => { webBuilder.UseStartup<Startup>(); });
    }
}