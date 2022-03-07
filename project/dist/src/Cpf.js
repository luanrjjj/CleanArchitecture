"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Cpf {
    constructor(value) {
        this.CPF_VALID_LENGTH = 11;
        this.FACTOR_FIRST_VERIFIER_DIGIT = 10;
        this.FACTOR_SECOND_VERIFIER_DIGIT = 11;
        if (!this.validate(value))
            throw new Error("Invalid CPF");
        this.value = value;
    }
    cleanCpf(cpf) {
        return cpf.replace(/\D/g, "");
    }
    areDigitEquals(cpf) {
        const [firstDigit] = cpf;
        return [...cpf].every((c) => c === firstDigit);
    }
    calculateDigit(cpf, factor) {
        let total = 0;
        for (const digit of cpf) {
            if (factor > 1)
                total += parseInt(digit) * factor--;
        }
        const rest = total % 11;
        return (rest < 2) ? 0 : (11 - rest);
    }
    extractVerifierDigit(cpf) {
        return cpf.slice(9);
    }
    validate(cpf) {
        if (!cpf)
            return false;
        let cpfCleared = this.cleanCpf(cpf);
        if (cpfCleared.length !== this.CPF_VALID_LENGTH)
            return false;
        if (this.areDigitEquals(cpfCleared))
            return false;
        const firstVerifierDigit = this.calculateDigit(cpfCleared, this.FACTOR_FIRST_VERIFIER_DIGIT);
        const secondVerifierDigit = this.calculateDigit(cpfCleared, this.FACTOR_SECOND_VERIFIER_DIGIT);
        const verifierDigit = this.extractVerifierDigit(cpfCleared);
        const calculateVerifierDigit = `${firstVerifierDigit}${secondVerifierDigit}`;
        return verifierDigit == calculateVerifierDigit;
    }
}
exports.default = Cpf;
