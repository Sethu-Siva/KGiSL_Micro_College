// Java Program to display Odd Numbers

import java.util.*;
import java.lang.*;

class OddNumbers
{
    public static void main(String[] args)
    {
        Scanner sc = new Scanner(System.in);

        System.out.println("\n\n----------------------------------------");
        System.out.println("\tPrint Odd Numbers");
        System.out.println("----------------------------------------\n");

        System.out.print("Enter the Limit 1 To ? : ");
        int limit = sc.nextInt();

        int num = 1;
        System.out.print("\n Odd Numbers of 1 to " + limit + " are : ");
        do
        {
            if (num % 2 == 1)
            {
                System.out.print(" " + num + " ");
            }
            num++;
        }
        while(num<=limit);
        System.out.println("\n----------------------------------------\n\n");
    }
}