/**
 *
 * @param {number} price
 * @param {boolean} [isYearlyMembership=false]
 * @returns {string}
 */
export function formatePrice(perMonth, isYearlyMembership = false) {
  const result = perMonth * (isYearlyMembership ? 10 : 1);
  return `$${result}/`.concat(isYearlyMembership ? "yr" : "mo");
}
