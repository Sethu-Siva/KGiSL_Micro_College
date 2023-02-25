// Java Program for Performing Fibonacci Series

import java.util.*;

class FibonacciSeries
{
    public static void main(String args[])
    {
        Scanner sc = new Scanner(System.in);

        System.out.println("\n\n***************************************************");
        System.out.println("\t\tFibonacci Series");
        System.out.println("***************************************************\n");

        System.out.print("Enter the limit to Stop : ");
        int limit = sc.nextInt();

        int a = 0, b = 1, c = 1;

        System.out.print(" " + a + " " + b);
        
        do
        {
            a = b;
            b = c;
            c = a + b;
            if(c > limit)
            {
                break;
            }
            System.out.print(" " + c);
        }
        while(c <= limit);
        System.out.println("\n***************************************************\n");
    }
}       