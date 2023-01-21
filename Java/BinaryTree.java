package Worker;

import java.util.Scanner;

public class BinaryTree {
    private class Node {
        int data;
        Node left, right;

        Node(int data, Node left, Node right) {
            this.data = data;
            this.left = left;
            this.right = right;
        }
    }

    private Node root;

    BinaryTree(int data) {
        this.root = new Node(data, null, null);
    }

    public Node add(int data) {
        this.add(data, this.root);
    }

    private Node add(int data, Node parent) {

    }
}
