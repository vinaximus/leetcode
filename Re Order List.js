
class node {
    constructor(n) {
        this.data=n;
        this.next=null;
    }
}

                                  m=new node(1);
var d=new node(1);
var ddhead=d;
d.next=new node(2);
d=d.next;
d.next=new node(3);
d=d.next;
d.next=new node(4);

function reorderList(head) {
    var tmp=head;
    var stk=[]; //stack
    while (tmp.next!=null) {
        tmp=tmp.next;
        stk.push(tmp);
        
    }

    var cur=head;
    while (cur.next!=null && cur.next!=stk[stk.length-1]) {
        cur=insert(cur,stk.pop());
        stk[stk.length-1].next=null;
    }

    
};

function insert(current,target) {
    if (current.next==null) {
        current.next=target;
        return target;
    }
    if (current.next==target) return target;
    let tmp=current.next;
    current.next=target;
    target.next=tmp;
    return tmp;
}


reorderList(ddhead);



var tmp=ddhead;
while (tmp!=null) {
    console.log (tmp.data);
    tmp=tmp.next;
}
