import java.util.*;
import java.lang.*;

class OddOrEven
{
    public static void main(String[] args)
    {
        Scanner sc = new Scanner(System.in);

        System.out.println("\n\n----------------------------------------");
        System.out.println("  Finding Given Number is Odd or Even");
        System.out.println("----------------------------------------\n");

        System.out.print("Enter The Number : ");
        int num = sc.nextInt();

        if( num % 2 == 1 )
        {
            System.out.println("Given Number " + num + " is Odd Number...!");
        }
        else
        {
            System.out.println("Given Number " + num + " is Even Number...!");
        }
        
        System.out.println("----------------------------------------\n");
    }
}