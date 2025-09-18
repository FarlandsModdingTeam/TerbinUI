using Microsoft.AspNetCore.Components.Web;
using Microsoft.AspNetCore.Components.WebAssembly.Hosting;
using TerbinUI;

/*
var builder = WebAssemblyHostBuilder.CreateDefault(args);
builder.RootComponents.Add<App>("#app");
builder.RootComponents.Add<HeadOutlet>("head::after");

builder.Services.AddScoped(sp => new HttpClient { BaseAddress = new Uri(builder.HostEnvironment.BaseAddress) });

await builder.Build().RunAsync();
*/

using ElectronNET.API;

var builder = WebApplication.CreateBuilder(args);

// Configuración para Blazor Server
builder.Services.AddRazorPages();
builder.Services.AddServerSideBlazor();

// Configuración para ElectronNET
builder.WebHost.UseElectron(args);

var app = builder.Build();

// No caching
app.UseStaticFiles();
app.UseRouting();

app.MapBlazorHub();
app.MapFallbackToPage("/_Host");

// Configuración de Electron
if (HybridSupport.IsElectronActive)
{
    Task.Run(async () =>
    {
        var window = await Electron.WindowManager.CreateWindowAsync();
        window.OnClosed += () => Electron.App.Quit();
    });
}

app.Run();
