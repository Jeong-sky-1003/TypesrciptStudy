// call signature 타입스크립트의 함수 
//  다형성, 오버로딩, 제네릭
// 1. 화살표 함수
//  a와 b를 받아 a+b를 리턴한다.
var addArrow = function (a, b) { return a + b; };
// 이렇게 타입을 만들어서 타입을 받은 다음에 넘기는 것도 방법인데 signature type은 다르다
var addType = function (element) { return element.a + element.b; };
var addSignature = function (a, b) { return a + b; };
console.log("this is signature function.  3 + 5 = " + addSignature(3, 5));
var add = function (a, b) {
    if (typeof b === "string") {
        return a;
    }
    else {
        return a + b;
    }
};
var push = function (config) {
    if (typeof config === "string") {
        console.log(config);
    }
    else {
        console.log(config.path, config.state);
    }
};
// a와 b는 모든 signature 함수에 들어가는데 c는 아니다.
// 그렇기에 선언시 c는 선택사항이라는 것을 알리기위해 물음표를 추가한다.
var add3 = function (a, b, c) {
    if (c)
        return a + b + c;
    return a + b;
};
add3(1, 3);
add3(1, 5, 2);
var humanMaker = function (name, age) {
    if (age) {
        return {
            name: name,
            age: age
        };
    }
    else {
        return {
            name: name
        };
    }
};
var sky = humanMaker("sky");
var dam = humanMaker("dam", 3);
console.log(sky.name + ", " + sky.age);
console.log(dam.name + ", " + dam.age);
