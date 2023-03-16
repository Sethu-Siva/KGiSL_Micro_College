import java.util.ArrayList;
import java.util.Scanner;

class IsDivicibleByTen
{

    public static void main(String []args)
    {
        int i = 0;
        String numbers = "";
        int count = 0;

        Scanner sc = new Scanner(System.in);

        ArrayList<Integer> arrayValues = new ArrayList<Integer>();

        try
        {
            int size = sc.nextInt();
            
            while ( sc.hasNext() )
            {
                arrayValues.add(sc.nextInt());
                count++;

                if ( size == count )
                {
                    break;
                }
            }
        }
        catch(Exception e)
        {
            System.out.println("Not Number");
            System.exit(0);
        }

        sc.close();
        
        for ( int j : arrayValues)
        {
            System.out.print(j);
        }

        for ( i = 0; i < arrayValues.size(); i++ )
        {
            numbers += arrayValues.get(i) % 10;
        }

        if ( ( Integer.parseInt(numbers) % 10 )  == 0 )
        {
            System.out.println("\nYes");
        }
        else
        {
            System.out.println("\nNo");
        }
    }
}