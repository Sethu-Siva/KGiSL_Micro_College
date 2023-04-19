import java.util.*;

class Matrix
{
    char choise = ' ';

    int i = 0, temp = 1;

    public void getMatrix()
    {
        Scanner sc = new Scanner(System.in);

        System.out.print("\nHow many Elements to be Added : ");
        int limit = sc.nextInt();
        
        int[] arrList = new int[limit];

        for ( i = 0; i < arrList.length; i++ )
        {
            System.out.print("\nEnter the Value for " + (i+1) + " : " );
            arrList[i] = sc.nextInt();
        }

        System.out.print("\nThe Given Values are : " + Arrays.toString(arrList) );
        System.out.print("\nEnter the Coloum size : ");
        int colSize = sc.nextInt();
        
        System.out.print("[ ");

        for ( i = 0; i < arrList.length; i++ )
        {
            if ( temp == colSize )
            {
                System.out.print("\t" + arrList[i] + "\t");

                if ( i == arrList.length - 1 )
                {
                    System.out.print(" ]");
                }
                else
                {
                    System.out.println("\t");
                }

                temp = 1;
            }
            else
            {
                System.out.print("\t" + arrList[i] + "\t");
                temp++;
            }
        }
    }

    public static void main(String[] args)
    {
        Matrix mx = new Matrix();

        System.out.println("--------------------------------------------------");
        System.out.println("\t\tMatrix Program");
        System.out.println("--------------------------------------------------");

        mx.getMatrix();
    }
}