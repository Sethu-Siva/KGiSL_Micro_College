import java.util.*;
import java.lang.*;

class ArrayIndexException
{
    public static void main(String[] args)
    {

        int limit = 5;
        Scanner sc = new Scanner(System.in);
        int[] myArray = new int[limit];

        try
        {
            for ( int i = 0; i <= myArray.length; i++ )
            {
                System.out.print("Enter a Value : ");
                myArray[i] = sc.nextInt();
            }
        }
        
        catch(ArrayIndexOutOfBoundsException ae)
        {
            System.out.println("Array Size limit is : " + limit);
            System.out.println("You Are trying to Store More than that...!");
        }

        catch(Exception e)
        {
            System.out.println(e);
        }
    }
}