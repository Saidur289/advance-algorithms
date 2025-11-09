class Stack{
    constructor(){
        this.items= []
    }
    pop(){
        if(this.isEmpty()) return undefined
       return  this.items.pop()
    }
    push(value){
     return   this.items.push(value)
    }
    peek(){
        if(this.isEmpty()) return undefined;
        return this.items[this.items.length - 1]
    }
    isEmpty(){
        return this.items.length === 0
    }
    print(){
        console.log(this.items.slice().reverse().join("=>"));
    }
}
const bracketChecker = (str) => {
    const stack = new Stack()
    let bracketMap = {
        ")":"(",
        "}": "{",
        "]": "[",
    }
    for(let i = 0; i < str.length; i++){
        let char = str[i]
        if(char === "(" || char === "{" || char === "["){
            stack.push(char)
        }else if(char === ")" || char === "}" || char === "]"){
            if(stack.isEmpty()){
                return false;
            }
            const expected = bracketMap[char]
            const got = stack.pop()
            console.log("expected: ", expected, "got: ", got);
            if(got !== expected){
                return false
            }
        }
    }
    return stack.isEmpty()
}
console.log(bracketChecker("(){}[]"));
console.log(">>>>>>>>>>>>>>");
console.log(">>>>>>>>>>>>>>");
console.log(bracketChecker("([{})"));