package Worker;

public class BST {

    private class Node {
        int data;
        Node left;
        Node right;

        Node(int data, Node left, Node right) {
            this.data = data;
            this.left = left;
            this.right = right;
        }
    }

    Node root;

    public BST() {
        this.root = null;
    }

    public void add(int data) {
        if (this.root == null) {
            Node node = new Node(data, null, null);
            this.root = node;
            return;
        }

        this.add(this.root, data);
    }

    private void add(Node node, int data) {
        if (data < node.data) {
            if (node.left != null)
                this.add(node.left, data);
            else {
                node.left = new Node(data, null, null);
                return;
            }
        } else if (data > node.data) {
            if (node.right != null)
                this.add(node.right, data);
            else {
                node.right = new Node(data, null, null);
                return;
            }
        }
    }

    public void display() {
        this.display(this.root);
    }

    private void display(Node node) {
        if (node.left != null) {
            System.out.print(node.left.data + "=>");
        } else {
            System.out.print("END=>");
        }

        System.out.print(node.data);
        if (node.right != null) {
            System.out.print("<=" + node.right.data);
        } else {
            System.out.print("<=END");
        }

        System.out.println();

        if (node.left != null) {
            this.display(node.left);
        }

        if (node.right != null) {
            this.display(node.right);
        }
    }

    public static void main(String[] args) {
        BST bst = new BST();
        bst.add(7);
        bst.add(2);
        bst.add(1);
        bst.add(4);
        bst.add(5);
        bst.add(6);
        bst.add(7);
        bst.add(8);

        bst.display();
    }
}
