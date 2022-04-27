import operate from "./operate.js";

test('should be one of the operators and should not be string', ()=>{
    expect(operate('1', '4', '-')).toMatch(/.+/i);
    expect(operate('1', '4', '-')).not.toMatch(/a-zA-Z/i)
})
