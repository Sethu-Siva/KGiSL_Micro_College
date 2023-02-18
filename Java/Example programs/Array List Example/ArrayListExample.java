import java.util.*;
import java.lang.*;

class ArrayListExample
{
    public static void main(String[] args)
    {
        Scanner sc = new Scanner(System.in);

        ArrayList<String> names = new ArrayList<>();

        for ( int i = 0; i < 5; i++ )
        {
            System.out.print("Enter the Value : ");
            names.add(i,sc.nextLine());
        }

        System.out.print("\nList Values are : ");

        for ( String s : names )
        {
            System.out.print(s + " ");
        }
    }
}