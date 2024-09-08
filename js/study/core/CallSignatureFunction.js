// call signature 타입스크립트의 함수 
//  다형성, 오버로딩, 제네릭
// 1. 화살표 함수
//  a와 b를 받아 a+b를 리턴한다.
var addArrow = function (a, b) { return a + b; };
// 이렇게 타입을 만들어서 타입을 받은 다음에 넘기는 것도 방법인데 signature type은 다르다
var addType = function (element) { return element.a + element.b; };
var addSignature = function (a, b) { return a + b; };
console.log("this is signature function.  3 + 5 = " + addSignature(3, 5));
