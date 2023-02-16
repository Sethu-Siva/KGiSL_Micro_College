// Finding Minimum & Maximum Value in Given Array

import java.util.*;
import java.lang.*;

class MinMaxinArray
{
    public int min(int n[])
    {
        int min = n[0];
        for(int i=0; i<n.length; i++)
        {
            if(n[i]<min)
            {
                min = n[i];
            }
      }
        return min;
    }

    public int max(int n[])
    {
        int max = 0;
        for(int i=0; i<n.length; i++)
        {
            if(n[i]>max) 
            {
                max = n[i];
            }
        }
        return max;
    }

    public static void main(String args[])
    {
        int min_num, max_num, temp = 0;

        Scanner sc = new Scanner(System.in);
        MinMaxinArray mr = new MinMaxinArray();

        System.out.println("\n\n-------------------------------------------------------");
        System.out.println("\tFinding Min & Max values in Given Array");
        System.out.println("-------------------------------------------------------\n");
        System.out.print("Enter the limit of Array Size : ");
        int limit = sc.nextInt();
        System.out.print("\n");
        int numbers[] = new int[limit];

        for(int i = 0; i < numbers.length; i++)
        {
            temp = temp + 1;
            System.out.print("Enter the Value for " + temp + " : ");
            numbers[i] = sc.nextInt();
        }

        System.out.println("-----------------------------------------");

        System.out.print("Given Values are :");

        for (int x: numbers)
        {
            System.out.print(" " + x + " ");
        }

        min_num = mr.min(numbers);
        max_num = mr.max(numbers);

        System.out.println("\n----------------------------------------------");
        System.out.println("\nMinimum Value in Given Array is : " + min_num);
        System.out.println("\nMaximum Value in Given Array is : " + max_num);
        System.out.println("\n----------------------------------------------\n");
    }
}