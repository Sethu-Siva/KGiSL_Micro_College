import java.util.*;
import java.lang.*;

class ArrayValueReplace
{
    public static void main(String args[])
    {
        int temp = 0;
        Scanner sc = new Scanner(System.in);
        System.out.println("\n\n-------------------------------------------------------");
        System.out.println("\tReplacing Value in Given Array");
        System.out.println("-------------------------------------------------------\n");
        System.out.print("Enter the limit of Array Size : ");
        int limit = sc.nextInt();
        System.out.print("\n");
        int values[] = new int[limit];

        for(int i = 0; i < values.length; i++)
        {
            temp = temp + 1;
            System.out.print("Enter the Value for " + temp + " : ");
            values[i] = sc.nextInt();
        }

        System.out.println("-----------------------------------------");

        System.out.print("Given Values are :");

        for (int x: values)
        {
            System.out.print(" " + x + " ");
        }

        System.out.println("\n------------------------------------------------------");
        System.out.print("Enter the number inwhich Value you need to Replace : ");
        int replacePosition = sc.nextInt();

        for(int i = 0; i < values.length; i++)
        {
            if(values[i] == replacePosition)
            {
                System.out.print("Enter the Value to Replace : ");
                int replace = sc.nextInt();
                values[i] = replace;
            }
        }
        System.out.print("Altered Array :");
        for (int x: values)
        {
            System.out.print(" " + x + " ");
        }
    }
}