# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
# Time O(N) | Space O(N)

from typing import Optional
from collections import deque

class Solution:
    def widthOfBinaryTree(self, root: Optional[TreeNode]) -> int:
        if root is None:
            return 0
        
        max_width = 0
        q = deque([(root, 0)])  # Store both node and its position index

        while q:
            level_size = len(q)
            start_idx = q[0][1]  # Get the index of the first node in the level
            end_idx = q[-1][1]  # Get the index of the last node in the level
            max_width = max(max_width, end_idx - start_idx + 1)  # Calculate the width of the current level

            for _ in range(level_size):
                node, idx = q.popleft()
                if node.left:
                    q.append((node.left, 2 * idx))  # Calculate the index for left child
                if node.right:
                    q.append((node.right, 2 * idx + 1))  # Calculate the index for right child

        return max_width
