// import calculate from "./calculate.js";
import isNumber from './calculate.js';

test('should be number', ()=>{
    expect(isNumber('5')).toMatch(/[0-9]/gi)
})