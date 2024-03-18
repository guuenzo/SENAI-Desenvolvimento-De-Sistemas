using Microsoft.AspNetCore.Mvc;
using projeto_gamer_MVC.Infra;
using projeto_gamer_MVC.Models;

namespace projeto_gamer_MVC.Controllers
{
    [Route("[controller]")]
    public class LoginController : Controller
    {
        private readonly ILogger<LoginController> _logger;

        public LoginController(ILogger<LoginController> logger)
        {
            _logger = logger;
        }

        [TempData]
        public string Message { get; set; }

        Context c = new Context();

        [Route("Login")]
        public IActionResult Index()
        {
            ViewBag.Username = HttpContext.Session.GetString("Username");
            return View();
        }

        [Route("Logar")]
        public IActionResult Logar(IFormCollection form)
        {
            string email = form["Email"].ToString();
            string senha = form["Senha"].ToString();

            Jogador jogadorBuscado = c.Jogador.FirstOrDefault(j => j.Email == email && j.Senha == senha)!;

            //lógica da sessão
            if (jogadorBuscado != null)
            {
                HttpContext.Session.SetString("Username", jogadorBuscado.Nome);
                return LocalRedirect("~/");
            }
            Message = "Dados inválidos, tente novamente!";
            return LocalRedirect("~/Login/Login");
        }

        [Route("Logout")]
        public IActionResult Logout()
        {
            HttpContext.Session.Remove("Username");
            return LocalRedirect("~/");
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View("Error!");
        }
    }
}