﻿using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace webapi.inlock_codefirst.Domains
{
    [Table("Jogo")]
    public class Jogo
    {
        [Key]
        public Guid IdJogo { get; set; } = Guid.NewGuid();

        [Column(TypeName = "VARCHAR(100)")]
        [Required(ErrorMessage = "Nome do jogo é obrigatório!")]
        public string? Nome { get; set; }

        [Column(TypeName = "TEXT")]
        [Required(ErrorMessage = "Descrição do jogo é obrigatória!")]
        public string? Descricao { get; set; }

        [Column(TypeName = "DATE")]
        [Required(ErrorMessage = "Data de lançamento do jogo é obrigatória!")]
        public DateTime DataLancamento { get; set; }

        [Column(TypeName = "Decimal(4,2)")]
        [Required(ErrorMessage = "Preço do jogo é obrigatório")]
        public decimal Preco { get; set; }

        //referencia tabela Estudio (FOREIGN KEY / FK)
        public Guid IdEstudio { get; set; }

        [ForeignKey("IdEstudio")]
        public Estudio? estudio { get; set; }
    }
}
