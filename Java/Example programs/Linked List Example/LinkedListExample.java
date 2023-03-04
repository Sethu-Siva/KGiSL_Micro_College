import java.util.*;

class LinkedListExample
{
    public static void main(String[] args)
    {
        Scanner sc = new Scanner(System.in);

        LinkedList<String> names = new LinkedList<>();

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
        sc.close();
    }
}