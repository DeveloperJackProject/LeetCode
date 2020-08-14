/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  const baseStr = s.toUpperCase()
  const filterStr = _filterNonNumberAndChar(baseStr)
  const reverseStr = _reversedString(filterStr)
  return filterStr === reverseStr
}

function _filterNonNumberAndChar (s) {
  return s.replace(/[^A-Za-z0-9]/g, '')
}

function _reversedString (s) {
  return s.split('').reverse().join('')
}

// @lc code=end

