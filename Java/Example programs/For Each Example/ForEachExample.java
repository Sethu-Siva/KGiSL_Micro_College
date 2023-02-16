import java.util.*;
import java.lang.*;

class ForEachExample
{
    public static void main(String[] args)
    {

        int limit,temp = 0;
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter the Limit \t: ");
        limit = sc.nextInt();

        String names[] = new String[limit];
        
        for ( int i = 0; i < names.length; i++ )
        {
            temp = temp + 1; 
            System.out.print("Enter the Name of " + temp + " : ");  
            names[i] = sc.next();
        }
        System.out.println("-----------------------------------------");
        for ( String n : names)
        {
            System.out.println(n);  
        }
    }
}