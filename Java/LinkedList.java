package Worker;

public class LinkedList {

    private class Node {
        int data;
        Node next;

        Node(int data, Node next) {
            this.data = data;
            this.next = next;
        }
    }

    private Node head, tail;
    int size;

    LinkedList() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    public void addFirst(int data) {
        if (this.head == null) {
            Node node = new Node(data, null);

            this.head = node;
            this.tail = node;
        } else {
            Node node = new Node(data, this.head);

            this.head = node;
        }

        this.size++;

    }

    public void addLast(int data) {
        Node node = this.head;

        while (node.next != null) {
            node = node.next;
        }

        Node tailNode = new Node(data, null);
        node.next = tailNode;

        this.tail = tailNode;

        this.size++;
    }

    public void addAt(int data, int index) {
        if (index < 1 && index + 1 > this.size)
            return;

        if (index == this.size + 1) {
            this.addLast(data);
            return;
        } else if (this.size == 0) {
            this.addFirst(data);
            return;
        }

        System.out.println(this.size);
        int traverse = 1;

        Node node = this.head;
        while (traverse < index) {
            node = node.next;
            traverse++;
        }

        Node newNode = new Node(data, node.next.next);

        node.next = newNode;

    }

    public void displayList() {
        Node node = this.head;

        while (node != null) {
            System.out.print(node.data + "=>");
            node = node.next;
        }

        System.out.println();
    }

    public static void main(String[] args) {

        LinkedList list = new LinkedList();

        list.addFirst(1);
        list.addAt(2, 2);
        list.addLast(3);

        list.displayList();

    }
}
