type Player = {
    name: string,
    age?: number,
    defaultAction?: void
};

// 명시적 타입으로 동일 타입의 객체 생성하기
const playerDam : Player = {
    name : "dam"
}
;

// 함수형태로 객체 생성하기
function makePlayerFunction(name : string) : Player {
    return {
        name
    }
};

function commonAction(player : Player) {
    console.log( player.age + "세 " + player.name + "님 환영합니다.");
}

// 화살표 형태로 함수 선언해 객체 생성하ㅣ
const makePlayerArrow = (name:string) : Player => ({name});

const playerSky = makePlayerFunction("sky");
const playerDwp = makePlayerArrow("dwp");

console.log(playerSky.name);
console.log(playerDam.name);