import {assert} from "chai";
import {describe, it} from "node:test"
import multiply from "../multiply.js";

describe ('test to see if you can multiply well', () => {
    it('test if 1 * 1 = 1', () => {
        assert.strictEqual(multiply(1,1),1);
    })
    it('test if 2 * 2 = 4', () => {
        assert.strictEqual(multiply(2,2),4);
    })
    it('test if 3 * 3 = 9', () => {
        assert.strictEqual(multiply(3,3),9);
    })
    it('test if 4 * 4 = 16', () => {
        assert.strictEqual(multiply(4,4),16);
    })
    it('test if 23 * 45 = 23 * 45', () => {
        assert.strictEqual(multiply(23,45),23 * 45);
    })
    it('test if 0 * 45 = 0', () => {
        assert.strictEqual(multiply(0,45),0);
    })
    it('test if -45 * 2 = -45 * 2', () => {
        assert.strictEqual(multiply(-45,2),-45 * 2);
    })
})

