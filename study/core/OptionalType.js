// 명시적 타입으로 동일 타입의 객체 생성하기
var playerDam = {
    name: "dam"
};
// 함수형태로 객체 생성하기
function makePlayerFunction(name) {
    return {
        name: name
    };
}
;
function commonAction(player) {
    console.log(player.age + "세 " + player.name + "님 환영합니다.");
}
// 화살표 형태로 함수 선언해 객체 생성하ㅣ
var makePlayerArrow = function (name) { return ({ name: name }); };
var playerSky = makePlayerFunction("sky");
var playerDwp = makePlayerArrow("dwp");
console.log(playerSky.name);
console.log(playerDam.name);
