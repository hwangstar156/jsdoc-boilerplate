/**
 * 자판기를 만들어요
 * @constructor
 * @param {number} hotAmericanoQuantity - 뜨거운 아메리카노 총 개수
 * @param {number} iceAmericanoQuantity - 아이스 아메리카노 총 개수
 */

function VendingMachine() {
  /**@member {number} purchasedHotAmericano - 뜨거운 아메리카노 갯수*/
  /**@member {number} purchasedIceAmericano - 아이스 아메리카노 갯수*/
}

/**
 *
 * 내가 낸 돈에 따라 1000원 이상이면 true, 아니면 false
 * @param {number} money - 내가 낸 돈
 * @return {boolean} 커피의 종류를 반환한다.
 */

VendingMachine.prototype.chooseCofeeByMoney = function (money) {};

/**
 *
 * 아메리카노 종류에 따라 그 구매한 갯수를 파악함.
 * @param {boolean} isHotAmericano - 아메리카노의 종류를 판별
 * @return {number} 해당하는 아메리카노의 갯수를 반환함.
 */

VendingMachine.prototype.getAmericanoQuantity = function (isHotAmericano) {};

/**
 *
 * 아메리카노 종류에 따라 구매한 갯수를 하나 늘림.
 * @param {boolean} isHotAmericano - 아메리카노의 종류를 판별
 */

VendingMachine.prototype.purchaseAmericano = function (isHotAmericano) {};

/**
 *
 * 돈을 받고 아메리카노의 종류에 따라 산 갯수를 늘리고 콘솔을 보여줌
 * @abstract
 * @param {number} money - 내가 낸 돈
 *
 */

VendingMachine.prototype.getItem = function (money) {};
