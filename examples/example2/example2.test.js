const example2 = require("./example2_after")

test('Deve validar um cpf válido',function() {
    const CPF = '063.088.145-63'
    const isValid = example2.validate(CPF);
    
    expect(isValid).toBeTruthy();
});

test('Não deve validar um CPF inválido',function() {
    const CPF = '063.011.111-11'
    const isValid = example2.validate(CPF);

    expect(isValid).toBeFalsy()
})

test('Não deve validar um CPF muito grande',function(){
    const CPF = '063.088.1156-12'
    const isValid = example2.validate(CPF);

    expect(isValid).toBeFalsy();
})

test('Não deve validar um CPF muito pequeno',function(){
    const CPF = '063088112'
    const isValid = example2.validate(CPF);

    expect(isValid).toBeFalsy();
})

test('Não validar um CPF nulo',function () {
    const isValid = example2.validate(null);

    expect(isValid).toBeFalsy();
})

test('Não validar um CPF undefined',function () {
    const isValid = example2.validate(undefined);

    expect(isValid).toBeFalsy();
})