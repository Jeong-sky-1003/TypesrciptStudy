// 1. 다형성 ( polymorpism )
//  예제. 배열 내 타입에 상관 없이 배열을 받고 요소를 하나씩 출력하기

// 하기와 같이 concrete type으로 받아줄 경우 다른 파라미터 타입이 추가되면 제대로 작동 안 함
type SuperPrint = {
    (arr : number[]) : void
    (arr : boolean[]) : void
}

const superPrint : SuperPrint = (arr) => {
    arr.forEach(element => console.log(element));
}

superPrint([1,2,3,4]);
superPrint([true, false, true, false]);

// any도 방법이 될수는 있음
// 하지만 any 는 받은 파라미터의 타입을 반환하지 못한다는 점이 Generic에서의 가장 큰 차이점이다.
type SuperPrintAny = {
    (arr : any[]) : void;
}

const superPrintAny : SuperPrintAny = arr => {
    arr.forEach(element => console.log(element))
}
;

superPrintAny(['a',1,"sky", true, false]);

// generic을 사용해 유연성 확보가 가능함
// placeholder인 generic을 사용함으로 타입 추론이 가능하게 변경해줄 수 있음
type SuperPrintGeneric = {
    // ts가 타입을 알아내줌
    <TypePlaceholder>(arr : TypePlaceholder[]) : void
}

const superPrintGeneric : SuperPrintGeneric = (arr) => {
    arr.forEach(element => console.log(element));
}
superPrintGeneric([1,3,true,"sky",false,'a']);

//  예제 2. 첫 번째 요소를 반환하라.
type SuperPrintGenericFirstElement = {
    <T> (arr : T[]) : T
}
const firstElement : SuperPrintGenericFirstElement = (arr) => {
    return arr[0];
}

console.log(firstElement([1,3,true,"sky",false,'a']));
console.log(firstElement(["sky",false,'a']));
console.log(firstElement([true, "sky",false,'a']));
// console.log(firstElement("34"));

// 'any'를 사용하는 것은 어떤 타입이든 받을 수 있다는 점에서 'generics'과 같지만 함수를 반환하는데 있어 'any'는 받았던 인수들의 타입을 활용하지 못한다
// 즉, 'generics'은 어떤 타입이든 받을 수 있다는 점에서 'any'와 같지만 해당 정보를 잃지 않고 타입에 대한 정보를 다른 쪽으로 전달할 수 있다는 점이 다르다