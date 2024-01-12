var mergeTwoLists = function(list1, list2) {
    let head = tail = new ListNode(0);

    while (list1 && list2) {
        const l1 = list1.val <= list2.val;
        if (l1) {
            tail.next = list1;
            list1 = list1.next;
        } else {
            tail.next = list2;
            list2 = list2.next;
        }

        tail = tail.next;
    }

    tail.next = list1 || list2;

    return head.next;
};
var mergeKLists = function(lists) {

   let mergeLists = null;

    for(let i = 0; i < lists.length; i++) {
        mergeLists =  mergeTwoLists(mergeLists, lists[i]); 
    }
    
    return mergeLists;
};