// Java Program to find Prime Numbers & their Sum Value

import java.util.*;

class PrimeNumbers
{
    public static void main(String[] args)
    {
        Scanner sc = new Scanner(System.in);

        System.out.println("\n-----------------------------------");
        System.out.println("   Prime Numbers & their Sum");
        System.out.println("-----------------------------------\n");

        System.out.print("Enter limit 1 to ? : ");
        int limit = sc.nextInt();
        int sumOfPrimes = 0, num;

        System.out.print("\nPrime Numbers of Given Range from 1 to " + limit + " is : \n\t");
        for ( int i = 1; i <= limit; i++ )
        {
            num = 0;
            for ( int j = 2; j <= i/2; j++ )
            {
                if ( i % j == 0 )
                {
                    num++;
                    break;
                }
            }
            if ( i > 1 )
            {
                if ( num == 0 )
                {
                    System.out.print( " " + i + " ");
                    sumOfPrimes += i;
                }
            }
        }

        System.out.println("\n\nSum of these Prime Numbers is : " + sumOfPrimes);
        System.out.println("----------------------------------------------\n");
        
        sc.close();
    }
}