function verificarSituacao(nota, faltas) {
    if (nota < 5) {
      console.log("Reprovado");
    } else {
      if (faltas > 14) {
        if (nota >= 7) {
          console.log("Aprovado");
        } else {
          console.log("Reprovado");
        }
      } else {
        console.log("Aprovado");
      }
    }
  }

  // Exemplo de uso da função
  verificarSituacao(5, 18);