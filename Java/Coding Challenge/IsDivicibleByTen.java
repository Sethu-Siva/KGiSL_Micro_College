import java.util.Scanner;

class IsDivicibleByTen
{

    public static void main(String []args)
    {
        int i = 0;
        String numbers = "";

        Scanner sc = new Scanner(System.in);

        System.out.print("Enter How many Numbers you want to Calculate : ");
        int arrSize = sc.nextInt();

        int[] arrayValues = new int[arrSize];

        System.out.print("Enter Only " + arrSize + " values followed By Space : ");

        for ( i = 0; i < arrSize; i++ )
        {
            arrayValues[i] = sc.nextInt();

            if ( arrayValues[i] < 0 )
            {
                System.out.println("No negative Values are Allowed...!");
                System.exit(0);
            }
            else
            {
                continue;
            }
        }

        for ( i = 0; i < arrayValues.length; i++ )
        {
            numbers += arrayValues[i] % 10;
        }

        if ( ( Integer.parseInt(numbers) % 10 )  == 0 )
        {
            System.out.println("\nYes");
            System.out.println("The number formed is " + numbers + ", which is divisible by 10. So, the output is Yes.");
        }
        else
        {
            System.out.println("\nNo");
            System.out.println("The number formed is " + numbers + ", which is divisible by 10. So, the output is No.");
        }
    }
}