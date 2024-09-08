// 1. 다형성 ( polymorpism )
//  예제. 배열 내 타입에 상관 없이 배열을 받고 요소를 하나씩 출력하기
var superPrint = function (arr) {
    arr.forEach(function (element) { return console.log(element); });
};
superPrint([1, 2, 3, 4]);
superPrint([true, false, true, false]);
var superPrintAny = function (arr) {
    arr.forEach(function (element) { return console.log(element); });
};
superPrintAny(['a', 1, "sky", true, false]);
var superPrintGeneric = function (arr) {
    arr.forEach(function (element) { return console.log(element); });
};
superPrintGeneric([1, 3, true, "sky", false, 'a']);
var firstElement = function (arr) {
    return arr[0];
};
console.log(firstElement([1, 3, true, "sky", false, 'a']));
console.log(firstElement(["sky", false, 'a']));
console.log(firstElement([true, "sky", false, 'a']));
// console.log(firstElement("34"));
// 'any'를 사용하는 것은 어떤 타입이든 받을 수 있다는 점에서 'generics'과 같지만 함수를 반환하는데 있어 'any'는 받았던 인수들의 타입을 활용하지 못한다
// 즉, 'generics'은 어떤 타입이든 받을 수 있다는 점에서 'any'와 같지만 해당 정보를 잃지 않고 타입에 대한 정보를 다른 쪽으로 전달할 수 있다는 점이 다르다
