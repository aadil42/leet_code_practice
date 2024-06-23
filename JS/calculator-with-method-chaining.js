class Calculator {
    
    /** 
     * @param {number} value
     */
    constructor(value) {
        this.val = value;
        this.divisionByZeroError = false;
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     */
    add(value){
        this.val += value;
        return this;
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     */
    subtract(value){
        this.val -= value;
        return this;
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     */  
    multiply(value) {
        this.val *= value;
        return this;
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     */
    divide(value) {
        if(value === 0) {
            this.divisionByZeroError = true;
            return this;
        }
        this.val /= value;
        return this;
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     */
    power(value) {
        this.val **= value;
        return this;
    }
    
    /** 
     * @return {number}
     */
    getResult() {
        if(this.divisionByZeroError) throw("Division by zero is not allowed");
        return this.val;
    }
}

// const calc = new Calculator(10);
// calc.subtract(0);