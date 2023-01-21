package Worker;

import java.util.HashMap;
import java.util.Map;
import java.util.Set;

public class Trie {
    private class Node {
        char data;
        boolean isTerminal;
        HashMap<Character, Node> children;

        Node(char data, boolean isTerminal) {
            this.data = data;
            this.isTerminal = isTerminal;
            this.children = new HashMap<>();
        }
    }

    Node root;

    Trie() {
        this.root = new Node('\0', false);
    }

    public void add(String word) {
        this.add(this.root, word);
    }

    private void add(Node node, String word) {

        if (word.length() == 0) {
            node.isTerminal = true;
            return;
        }

        char c = word.charAt(0);
        String ros = word.substring(1);

        Node child = node.children.get(c);
        if (child == null) {
            child = new Node(c, false);
            node.children.put(c, child);
        }

        this.add(child, ros);
    }

    public void display() {
        this.display(this.root, "");
    }

    private void display(Node node, String word) {
        if (node.isTerminal)
            System.out.println(word);

        Set<Map.Entry<Character, Node>> entries = node.children.entrySet();

        for (Map.Entry<Character, Node> entry : entries) {
            this.display(entry.getValue(), word + entry.getKey());
        }
    }

    // public char getHeaviestNode(){
    // return this.getHeaviestNode(this.root);
    // }

    // private char getHeaviestNode(Node node) {

    // }

    public static void main(String[] args) {
        Trie trie = new Trie();

        trie.add("anu");
        trie.add("anuj");

        trie.display();
    }
}