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


// we are creating a new list but try to do it in place.
var mergeTwoListsR = function(list1, list2) {

    let dummyNode = new ListNode(null);
    let startingPoint = dummyNode;
    while(list1 && list2) {
        if(list1.val < list2.val) {
            dummyNode.next = new ListNode(list1.val);
            dummyNode = dummyNode.next;
            list1 = list1.next;
        } else {
            dummyNode.next = new ListNode(list2.val);
            dummyNode = dummyNode.next;
            list2 = list2.next;
        }
    }

    if(list1) dummyNode.next = list1;
    if(list2) dummyNode.next = list2;

    return startingPoint.next;
};


// without making new list. We're just referancing the pointers.
var mergeTwoListsRR = function(list1, list2) {

    let currunt = new ListNode(null);
    const start = currunt;
    
    while(list1 && list2) {
        if(list1.val < list2.val) {
            currunt.next = list1;
            currunt = currunt.next;
            list1 = list1.next;
        } else {
            currunt.next = list2;
            currunt = currunt.next;
            list2 = list2.next;
        }
    }

    if(list1) currunt.next = list1;
    if(list2) currunt.next = list2;
    
    return start.next;
};