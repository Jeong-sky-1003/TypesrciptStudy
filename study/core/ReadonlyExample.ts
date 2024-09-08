// 타입 내 property readonly
type Cat = {
    readonly kind : string,
    name : string,
    age? : number
}
;

// 배열 자체 readonly
const numbers : readonly number [] = [1,2,3,4,5];
const names : readonly string [] = ["sky", "damdam"];

// 각 배열 출력해보기
// 함수형 프로그래밍 형태

console.log("숫자 배열 출력하기")
numbers.forEach(element => {
    console.log(element);
});

numbers.forEach(function print(element){
    console.log(element);
})

console.log("문자 배열 출력하기");
names.map(element => {
    console.log(element);
})

names.forEach(function print(element) {
    console.log(element)
})