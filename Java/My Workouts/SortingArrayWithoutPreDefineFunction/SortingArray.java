import java.util.Arrays;
import java.util.Scanner;

class SortingArray
{
    public int[] sort(int[] array)
    {
        for ( int i = 0; i < array.length; i++ ) 
        {
            for ( int j = i + 1; j < array.length; j++ )
            {
                int temp = 0;

                if (array[i] > array[j])
                {
                    temp = array[i];
                    array[i] = array[j];
                    array[j] = temp;
                }
            }
        }

        return array;
    }

    public static void main(String[] args)
    {

        int arraySize = 0;

        Scanner sc = new Scanner(System.in);

        SortingArray sa = new SortingArray();

        System.out.print("\n---------------------------------------------");
        System.out.print("\n\t\tSorting Array");
        System.out.print("\n---------------------------------------------");
        System.out.print("\nEnter the Array Size : ");
        arraySize = sc.nextInt();

        int[] array = new int[arraySize];

        for ( int iterable = 0; iterable < array.length; iterable++ )
        {
            System.out.print("\nEnter the Value : ");
            array[iterable] = sc.nextInt();
        }
        
        System.out.print("\n---------------------------------------------");

        System.out.print("\nThe array u entered : " + Arrays.toString(array));

        System.out.print("\n---------------------------------------------");

        sa.sort(array);

        System.out.print("\nThe Sorted Array is : " + Arrays.toString(array));

        System.out.print("\n---------------------------------------------");

        sc.close();
    }
}