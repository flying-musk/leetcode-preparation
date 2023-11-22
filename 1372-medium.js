/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var longestZigZag = function (root) {
  
  
  const dfs = (node, isLeft, length) => {
    if (!node) {
      return;
    }

    maxZigZag = Math.max(maxZigZag, length);

    if (isLeft) {
      dfs(node.right, false, length + 1);
      dfs(node.left, true, 1);
    } else {
      dfs(node.left, true, length + 1);
      dfs(node.right, false, 1);
    }
  };

  let maxZigZag = 0;

  dfs(root, true, 0);

  return maxZigZag;
};
