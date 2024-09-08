const person : [string, number, boolean] = ["sky", 29, true]
;

// Tupple 배열에 각 위치에 필요한 타입과 개수를 알림
//  항상 정해진 개수와 요소를 사용하는 곳에 사용됨
const player: readonly [string, number, boolean] = ["sky", 29, true]
;

// optional에 대해서 undefined로 선언 가능
let a : undefined = undefined;
let b : null = null;

// any는 타입스크립트의 보호 장치에서 나올떄 사용함
// 즉, 타입의존성 없이 사용하고자 할 때 사용함
// 그렇기에 any는 타입스크립트에서 비권장됨
let anySample = [];

const anyArray1 : any[] = [1,2,3,4];
const anyArray2 : any = true;

// 상위에 any로 선언했기에 오류가 발생하지 안흠
anyArray1 + anyArray2;