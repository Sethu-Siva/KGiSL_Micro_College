// Java Program for Finding Second Largest Number in Given Series

import java.util.*;

class SecondLargestNumber
{
    public static void main(String args[])
    {
        int temp = 0;
        Scanner sc = new Scanner(System.in);

        System.out.println("\n\n-------------------------------------------------------");
        System.out.println("\tFinding Second Largest Number");
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

        int temprory = 0;

        for(int i = 0; i < values.length; i++)
        {
            for (int j = i + 1; j < values.length; j++)
            {
                if (values[i] > values[j])   
                {  
                    temprory = values[i];
                    values[i] = values[j];  
                    values[j] = temprory;
                }  
            }
        }

        int SecondLarge = values[values.length-2];

        System.out.println("\n-----------------------------------------");
        System.out.print("Second Largest Number in Given Array is : " + SecondLarge);
        System.out.println("\n-----------------------------------------\n");

        sc.close();
    }
}