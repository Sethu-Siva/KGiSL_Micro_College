// Java Program to find if Given Number is Positive Value or Negative Value

import java.util.*;
import java.lang.*;

class PositiveOrNagative
{
    public static void main(String args[])
    {
        Scanner sc = new Scanner(System.in);

        int num = 0;

        System.out.println("\n\n-------------------------------------------------------");
        System.out.println("\tPositive OR Nagative");
        System.out.println("-------------------------------------------------------\n");
        System.out.print("Enter The Number : ");
        num = sc.nextInt();

        if (num < 0)
        {
            System.out.println("\nGiven Number " + num + " is : Negative");
        }
        else
        {
            System.out.println("\nGiven Number " + num + " is : Positive");
        }
    }
}