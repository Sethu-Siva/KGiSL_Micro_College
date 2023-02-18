import java.util.*;
import java.lang.*;

class VectorListExample
{
    public static void main(String[] args)
    {
        Scanner sc = new Scanner(System.in);

        Vector<String> names = new Vector<>();

        for ( int i = 0; i < 5; i++ )
        {
            System.out.print("Enter the Value : ");
            names.add(i,sc.nextLine());
        }

        System.out.print("\nList Values are : ");

        Iterator<String> it = names.iterator();

        while (it.hasNext())
        {
            System.out.print(it.next() + " ");
        }

        System.out.print("\nRemoving " + names.remove(2));

        System.out.print("\nAfter Removing List Values are : ");

        for ( String s : names )
        {
            System.out.print(s + " ");
        }
    }
}