const CPF_VALID_LENGTH = 11;
const FACTOR_FIRST_VERIFIER_DIGIT = 10
const FACTOR_SECOND_VERIFIER_DIGIT = 11

function cleanCpf  (cpf) {
    return cpf.replace(/\D/g, "")
}

function areDigitEquals (cpf) {
    const [firstDigit] = cpf
    return [...cpf].every((c) => c === firstDigit)
}

function calculateDigit (cpf,factor) {
    let total =0;
    for (const digit of cpf) {
        if (factor >1) total +=parseInt(digit)*factor--;
    }
    const rest = total%11
    return (rest<2) ? 0 : (11 - rest)
}

function extractVerifierDigit(cpf) {
    return cpf.slice(9)
}

function validate(cpf) {
  if (!cpf) return false;
  let cpfCleared = cleanCpf(cpf) ;
  if (cpfCleared.length !== CPF_VALID_LENGTH) return false;
  if (areDigitEquals(cpfCleared)) return false;
  const firstVerifierDigit = calculateDigit(cpfCleared,FACTOR_FIRST_VERIFIER_DIGIT);
  const secondVerifierDigit = calculateDigit(cpfCleared,FACTOR_SECOND_VERIFIER_DIGIT);
  const verifierDigit = extractVerifierDigit(cpfCleared);
  const calculateVerifierDigit = `${firstVerifierDigit}${secondVerifierDigit}`;
  return verifierDigit == calculateVerifierDigit;
}

module.exports = {
  validate,
};

console.log(validate("111.111.111-11"));
console.log(validate("123.456.789-99"));
console.log(validate("935.411.347-80"));
