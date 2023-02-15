import java.util.*;
import java.lang.*;

class MultiDimentionalArray
{
    public static void main(String[] args)
    {

        int rowLimit, colLimit;
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter the Row Limit \t\t: ");
        rowLimit = sc.nextInt();
        System.out.print("Enter the Column Limit \t\t: ");
        colLimit = sc.nextInt();

        int matrix[][] = new int[rowLimit][colLimit];

        for (int i = 0; i <= rowLimit-1; i++)
        {
            for (int j = 0; j <= colLimit-1; j++)
            {
                System.out.print("Enter the (" + i + " x " + j +") value : ");
                matrix[i][j] = sc.nextInt();
            }
        }
        System.out.println("----------------------------------------");
        System.out.println("\t\tMatrix");
        System.out.println("----------------------------------------");

        for (int i = 0; i <= rowLimit-1; i++)
        {
            for (int j = 0; j <= colLimit-1; j++)
            {
                System.out.print(" " + matrix[i][j] + " ");
            }
            System.out.print("\n");
        }
    }
}