import java.util.*;
import java.lang.*;

class StackExample
{
    public static void main(String[] args)
    {
        Scanner sc = new Scanner(System.in);

        Stack<String> names = new Stack<>();

        for ( int i = 0; i < 5; i++ )
        {
            System.out.print("Enter the Value : ");
            names.add(i,sc.nextLine());
        }

        System.out.print("\nStack Values are : ");

        Iterator<String> it = names.iterator();

        while (it.hasNext())
        {
            System.out.print(it.next() + " ");
        }

        System.out.print("\nRemoving " + names.pop());

        System.out.print("\nAfter Removing, Stack Values are : ");

        for ( String s : names )
        {
            System.out.print(s + " ");
        }

        System.out.print("\nPeek Value : " + names.peek());

    }
}