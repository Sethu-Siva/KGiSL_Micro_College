import java.util.Scanner;

public class RangeOfNumbersDivisible 
{
    public static void main(String[] args)
    {
        Scanner sc = new Scanner(System.in);
        
        int startingNumber = 0, endingNumber = 0, divisibleNumber = 0, count = 0;

        startingNumber = sc.nextInt();
        endingNumber = sc.nextInt();
        divisibleNumber = sc.nextInt();

        for ( int i = startingNumber; i <= endingNumber; i++ )
        {
            if ( (i % divisibleNumber) == 0 )
            {
                count++;
            }
            else
            {
                continue;
            }
        }

        System.out.println(count);
    }
}
