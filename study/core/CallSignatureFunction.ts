// call signature 타입스크립트의 함수 
//  다형성, 오버로딩, 제네릭

// 1. 화살표 함수
//  a와 b를 받아 a+b를 리턴한다.
const addArrow = (a: number, b: number) => a+b;

// 여기서 나만의 타입을 만들어서 활용이 가능하다.
type Numbers = {
    a : number;
    b : number;
}
// 이렇게 타입을 만들어서 타입을 받은 다음에 넘기는 것도 방법인데 signature type은 다르다
const addType = (element : Numbers) => element.a + element.b;

// AddNumbers라는 타입은 a와 b 두 지를 받아 number를 반환하겠다는 뜻이다.
// 이게 바로 signature 함수이다. 파라미터와 리턴 타입을 명시하지 않아도 된다.
type AddNumbers = (a:number, b:number) => number;
const addSignature : AddNumbers = (a, b) => a + b;
console.log("this is signature function.  3 + 5 = " + addSignature(3,5));