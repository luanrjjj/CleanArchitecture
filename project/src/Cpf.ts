export default class Cpf {
    value:string
    CPF_VALID_LENGTH = 11;
    FACTOR_FIRST_VERIFIER_DIGIT = 10
    FACTOR_SECOND_VERIFIER_DIGIT = 11

    constructor(value:string) {
        if (!this.validate(value)) throw new Error ("Invalid CPF");
        this.value=value
    }


    public  cleanCpf (cpf:string) :string {
        return cpf.replace(/\D/g, "")
    }
    
    public areDigitEquals (cpf:string) {
        const [firstDigit] = cpf
        return [...cpf].every((c) => c === firstDigit)
    }
    
    public  calculateDigit (cpf:string,factor:number) {
        let total =0;
        for (const digit of cpf) {
            if (factor >1) total +=parseInt(digit)*factor--;
        }
        const rest = total%11
        return (rest<2) ? 0 : (11 - rest)
    }
    
    public  extractVerifierDigit(cpf:string) {
        return cpf.slice(9)
    }
    
    public  validate(cpf:string) {
      if (!cpf) return false;
      let cpfCleared = this.cleanCpf(cpf) ;
      if (cpfCleared.length !== this.CPF_VALID_LENGTH) return false;
      if (this.areDigitEquals(cpfCleared)) return false;
      const firstVerifierDigit = this.calculateDigit(cpfCleared,this.FACTOR_FIRST_VERIFIER_DIGIT);
      const secondVerifierDigit = this.calculateDigit(cpfCleared,this.FACTOR_SECOND_VERIFIER_DIGIT);
      const verifierDigit = this.extractVerifierDigit(cpfCleared);
      const calculateVerifierDigit = `${firstVerifierDigit}${secondVerifierDigit}`;
      return verifierDigit == calculateVerifierDigit;
    }


}