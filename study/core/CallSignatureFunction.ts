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

// 2. 오버로딩(over loading) function
//  시크니쳐 함수보다 길이가 길지만 오버로딩을 사용하기 위해 이 형태로도 작성된다.
//  오버로딩은 함수가 여러개의 call signature를 가질떄 사용한다.
//  파라미터 내 서로 다른 케이스를 잘 파악해야함
type AddNumbers2 = {
    (a: number, b: number) : number
    (a: number, b: string) : number
}

const add: AddNumbers2 = (a, b) => {
        if (typeof b === "string") {
            return a;
        } else {
            return a + b;
        }
    }

type Config = {
    path: string,
    state: object
}

type Push = {
    (path: string) : void
    (config: Config) : void
}

const push : Push = (config) => {
    if (typeof config === "string") {
        console.log(config);
    } else {
        console.log(config.path, config.state);
    }
}

type AddNumber3 = {
    (a: number, b: number) : number
    (a: number, b: number, c: number) : number
}

// a와 b는 모든 signature 함수에 들어가는데 c는 아니다.
// 그렇기에 선언시 c는 선택사항이라는 것을 알리기위해 물음표를 추가한다.
const add3 : AddNumber3 = (a, b, c?: number) => {
    if (c) return a + b + c;
    return a + b;
}

add3(1, 3);
add3(1, 5, 2);

type Human = {
    name : string
    age? : number
}
;

type MakeHumanType = {
    (name : string) : Human
    (name : string, age: number) : Human
}
;

const humanMaker : MakeHumanType = (name: string, age? : number) => {
    if (age) {
        return {
            name : name
            , age : age
        }
    } else {
        return {
            name : name
        }
    }
}

const sky = humanMaker("sky");
const dam = humanMaker("dam", 3);

console.log(sky.name + ", " + sky.age);
console.log(dam.name + ", " + dam.age);