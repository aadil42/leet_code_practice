# Definition for a nested integer in Python
# The same code is in js with the same file name and js extension. 
# The code is the same but for some reason js is not working as intended in the leetcode.

# Recursion
# Time O(n) | Space O(n)
# https://leetcode.com/problems/flatten-nested-list-iterator
class NestedInteger:
    def isInteger(self):
        """
        Return True if this NestedInteger holds a single integer, rather than a nested list.
        :rtype bool
        """
        pass

    def getInteger(self):
        """
        Return the single integer that this NestedInteger holds, if it holds a single integer.
        Return None if this NestedInteger holds a nested list.
        :rtype int
        """
        pass

    def getList(self):
        """
        Return the nested list that this NestedInteger holds, if it holds a nested list.
        Return None if this NestedInteger holds a single integer.
        :rtype List[NestedInteger]
        """
        pass

class NestedIterator:
    def __init__(self, nestedList):
        def dfs(nested, flat):
            for item in nested:
                if item.isInteger():
                    flat.append(item.getInteger())
                else:
                    dfs(item.getList(), flat)
            return flat

        self.nestedList = dfs(nestedList, [])
        self.index = 0

    def hasNext(self):
        return self.index < len(self.nestedList)

    def next(self):
        next_val = self.nestedList[self.index]
        self.index += 1
        return next_val

# Example usage
# i = NestedIterator(nestedList)
# a = []
# while i.hasNext():
#     a.append(i.next())
