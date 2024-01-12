from sortedcontainers import SortedSet

# Sorted set | (I don't know what they are yet. they're not available  in js. Hence using python)
# Time O(n) | Space O(n)
class FoodRatings:

    def __init__(self, foods: List[str], cuisines: List[str], ratings: List[int]):
        self.foodToCuisine = {}
        self.rating = {}
        self.cuisines = defaultdict(SortedSet)

        for i in range(len(foods)):
            self.rating[foods[i]] = -ratings[i]
            self.foodToCuisine[foods[i]] = cuisines[i]
            self.cuisines[cuisines[i]].add((-ratings[i], foods[i]))

# Time O(n*log(n)) | Space O(1)
    def changeRating(self, food: str, newRating: int) -> None:
        cuisine = self.foodToCuisine[food]
        rating = self.rating[food]

        self.cuisines[cuisine].remove((rating, food))
        self.cuisines[cuisine].add((-newRating, food))

        self.rating[food] = -newRating
# Time O(1) | Space O(1)
    def highestRated(self, cuisine: str) -> str:
        return self.cuisines[cuisine][0][1]


# Your FoodRatings object will be instantiated and called as such:
# obj = FoodRatings(foods, cuisines, ratings)
# obj.changeRating(food,newRating)
# param_2 = obj.highestRated(cuisine)