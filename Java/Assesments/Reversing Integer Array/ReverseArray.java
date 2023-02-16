import java.util.*;
import java.lang.*;
import java.util.Arrays;

class ReverseArray
{
    public static void main(String args[])
    {
        int temp = 0;

        Scanner sc = new Scanner(System.in);
        ReverseArray mr = new ReverseArray();

        System.out.println("\n\n-------------------------------------------------------");
        System.out.println("\tReversing the Given Array");
        System.out.println("-------------------------------------------------------\n");
        System.out.print("Enter the limit of Array Size : ");
        int limit = sc.nextInt();
        System.out.print("\n");
        int actualArray[] = new int[limit];

        for(int i = 0; i < actualArray.length; i++)
        {
            temp = temp + 1;
            System.out.print("Enter the Value for " + temp + " : ");
            actualArray[i] = sc.nextInt();
        }

        System.out.println("-----------------------------------------");

        System.out.print("Given Order :\t");

        for (int x: actualArray)
        {
            System.out.print(" " + x + " ");
        }

        System.out.println("");
        System.out.print("Reverse Order :\t");

        for ( int i = actualArray.length-1; i >= 0; i-- )
        {
            System.out.print(" " + actualArray[i] + " ");
        }
        System.out.println("\n-----------------------------------------\n");
    }
}