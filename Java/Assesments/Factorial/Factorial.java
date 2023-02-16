import java.util.*;
import java.lang.*;

class Factorial
{
    public static void main(String[] args)
    {
        Scanner sc = new Scanner(System.in);

        System.out.println("\n--------------------------------");
        System.out.println("\tFactorial");
        System.out.println("--------------------------------\n");

        System.out.print("Enter the value : ");
        int limit = sc.nextInt();

        long fact = 1;

        System.out.print("Factorial of " + limit + "! = ");
        for ( int i = limit; i >= 1; i-- )
        {
            fact = fact * i;
            System.out.print(i);
            if ( i > 1 )
            {
                System.out.print(" x ");
            }
        }
        System.out.print(" = " + fact);
        System.out.println("\n-------------------------------------\n");

    }
}