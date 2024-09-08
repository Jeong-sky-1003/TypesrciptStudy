// TS에서만 존재하는 타입
//  TS에서 중요한건 Type checker와 소통한다는 것

// 1. unknown
// 타입에따라 유동적으로 관리하기 위함
let a:unknown;
let resultNum : number;
let resultStr : string;
if (typeof a === 'number') {
    resultNum = a + 3
} else if (typeof a === 'string') {
    a = a.toUpperCase();
    resultStr = a + " 호호잇";
}

// 2. void
//  아무것도 retur하지 않는 function을 대상으로 동작함
//  기본으로 리턴 타입 생략 가능
function hello() : string {
    return "sky";
}

function voidSample() {
    console.log("sky");
}

// 3. never
//  아무것도 return하지 않을때 발생
//  함수에서 exception 발생시 사용
function neverSample():never {
    // return "X"; -> 에러 발생
    throw new Error("excepton")
}

// 혹은 타입이 두 가지일 수 있는 상황에서도 사용할 수 있음
function neverSampe2 (name : string|number) {
    if (typeof name === "string") {
        console.log("this value is string type");
    } else if (typeof name === "number") {
        console.log("this value is number type");
    } else {
        // 이곳으로 들어온 타입은 무조건 never로 잡힘
        name;
    }
    return name;
}