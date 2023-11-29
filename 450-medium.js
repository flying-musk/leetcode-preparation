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
 * @param {number} key
 * @return {TreeNode}
 */
function deleteNode(root, key) {
  if (root === null) {
    return null;
  }
  if (key < root.val) {
    root.left = deleteNode(root.left, key);
  } else if (key > root.val) {
    root.right = deleteNode(root.right, key);
  } else {
    if (root.left === null) {
      return root.right;
    } else if (root.right === null) {
      return root.left;
    }
    root.val = minValue(root.right);
    root.right = deleteNode(root.right, root.val);
  }
  return root;
}

function minValue(node) {
  let minValue = node.val;
  while (node.left !== null) {
    minValue = node.left.val;
    node = node.left;
  }
  return minValue;
}
