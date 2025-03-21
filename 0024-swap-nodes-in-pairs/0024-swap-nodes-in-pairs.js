var swapPairs = function(head) {
    let dummy = new ListNode(0, head);
    let prev = dummy, cur = head;

    while (cur && cur.next) {
        let npn = cur.next.next;
        let second = cur.next;

        second.next = cur;
        cur.next = npn;
        prev.next = second;

        prev = cur;
        cur = npn;
    }

    return dummy.next;    
};