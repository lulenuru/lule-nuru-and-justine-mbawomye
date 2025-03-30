import {assert} from "chai";
import {describe, it} from "node:test"
import multiply from "../multiply.js";

describe ('test to see if you can multiply well', () => {
    it.skip('test if 1 * 1 = 1', () => {
        assert.equal(multiply(1,1),1);
    })
    it.skip('test if 2 * 2 = 4', () => {
        assert.equal(multiply(2,2),4);
    })
    it.skip('test if 3 * 3 = 9', () => {
        assert.equal(multiply(3,3),9);
    })
    it.skip('test if 4 * 4 = 16', () => {
        assert.equal(multiply(4,4),16);
    })
    it('test if 23 * 45 = 23 * 45', () => {
        assert.equal(multiply(23,45),23 * 45);
    })
})

