/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  const temp = {}
  s.split('').forEach(i => {
    if (temp[i] === undefined) {
      temp[i] = 1
    } else {
      temp[i] = temp[i] + 1
    }
  })
  t.split('').forEach(i => {
    if (temp[i] === undefined) {
      temp[i] = -1
    } else {
      temp[i] = temp[i] - 1
    }
  })
  return Object.values(temp).every(i => {
    return i === 0
  })
};
// @lc code=end

