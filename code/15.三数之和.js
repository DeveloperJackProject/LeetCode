/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  let tempArr = []
  const newarr = nums.sort((a, b) => { return a - b })
  for (let i = 0; i < newarr.length; i++) {
    const current = newarr[i]
    if (current > 0) {
      break
    } else {
      for (let j = i + 1, k = newarr.length - 1; j < k;) {
        const val = newarr[j] + newarr[k]
        if (current + val < 0) {
          j++
        } else if (current + val > 0) {
          k--
        } else {
          tempArr.push([current, newarr[j], newarr[k]])
        }
      }
    }
  }
  return tempArr
}
// @lc code=end
