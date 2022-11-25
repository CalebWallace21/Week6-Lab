import { textSpanContainsPosition } from "typescript"
import {expect, jest, test, describe} from '@jest/globals';

const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    test(`be an Array`, () => {        
        expect(Array.isArray(shuffleArray([1,2,3]))).toBeTruthy()
    });

    test(`include the one even after its shuffled`, () => {        
        expect(shuffleArray([1,2,3])).toContain(1)
    });
})