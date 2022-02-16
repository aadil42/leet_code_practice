// !IMPORTENT, This code will give you error because there are no linked list defined
// and no list1 and list2 are defined. You need proper linked list input to run this funciton
// just copy paste this code in your leetcode code editor. it will run


var mergeTwoLists = function(list1, list2) {
    let pointA = list1;
    let pointB = list2;
    let dummyNode = new ListNode(null);
    let startingPoint = dummyNode;
    while(pointA && pointB) {
        if(pointB.val < pointA.val ) {
            dummyNode.next = new ListNode(pointB.val);
            dummyNode = dummyNode.next;
            pointB = pointB.next;
        } else {
            dummyNode.next = new ListNode(pointA.val);
            dummyNode = dummyNode.next;
            pointA = pointA.next;
        }
    }
    
    if(pointA) dummyNode.next = pointA;
    if(pointB) dummyNode.next = pointB;
    
    return startingPoint.next;
};