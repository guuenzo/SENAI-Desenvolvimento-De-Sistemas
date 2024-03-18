namespace Programa_contato
{
    public class ContatoPessoal : Contato, IContatoPessoal
    {
        public string Cpf { get; set; }

        public bool ValidarCpf(string _cpf)
        {
            Cpf = _cpf;

            if(Cpf.Length == 11)
            {
                return true;
            }
            else
            {
                return false;
            }
        }
    }
}