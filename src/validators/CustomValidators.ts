import { AbstractControl } from "@angular/forms";

interface ValidatonResult {
  [key: string]: boolean;
}

export class CustomValidators {

  public static cpfValidator(control: AbstractControl): any/*ValidationResult*/ {
    var strCPF = control.value.replace(/[.-]/g, "");
    if (strCPF.length == 11) {
      var soma = 0, resto, i;
      if (strCPF == "00000000000" || strCPF == "11111111111" || strCPF == "22222222222"
        || strCPF == "33333333333" || strCPF == "44444444444" || strCPF == "55555555555"
        || strCPF == "66666666666" || strCPF == "77777777777" || strCPF == "88888888888"
        || strCPF == "99999999999") {
         return { cpfValidator: true }
      }

      for (i = 1; i <= 9; i++) soma = soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
      resto = (soma * 10) % 11;
      if ((resto == 10) || (resto == 11)) resto = 0;
      if (resto != parseInt(strCPF.substring(9, 10))) return { cpfValidator: true };
      soma = 0;
      for (i = 1; i <= 10; i++) soma = soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i);
      resto = (soma * 10) % 11;

      if ((resto == 10) || (resto == 11)) resto = 0;
      if (resto != parseInt(strCPF.substring(10, 11))) return { cpfValidator: true };
      return null;
    }
  }
}
