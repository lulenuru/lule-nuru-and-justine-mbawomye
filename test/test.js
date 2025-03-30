import {assert} from "chai";
import {describe, it} from "node:test"
import multiply from "../multiply.js";

describe ('test to see if you can multiply well', () => {
    it('test if 1 * 1 = 1', () => {
        assert.equal(multiply(1,1),1);
    })
})