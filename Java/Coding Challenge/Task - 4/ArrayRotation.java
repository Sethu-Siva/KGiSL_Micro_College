import java.util.Scanner;

public class ArrayRotation
{
    public void rotateArray(int[] elements, int noOfRotation)
    {
        int[] tempArr = new int[elements.length];

        for ( int i = 0; i < noOfRotation; i++ )
        {
            tempArr[i] = elements[elements.length - (i + 1)];
            
            for ( int j = 1; j < elements.length; j++ )
            {
                elements[j] = tempArr[j - 1];
            }
        }

        for ( int x = 0; x < elements.length; x++ )
        {
            System.out.print(elements[x] + " ");
        }
    }

    public static void main(String[] args)
    {
        ArrayRotation ar = new ArrayRotation();

        Scanner sc = new Scanner(System.in);

        int noOfTestCase, arraySize, noOfRotation;

        noOfTestCase = sc.nextInt();

        for ( int i = 0; i < noOfTestCase; i++ )
        {
            arraySize = sc.nextInt();
            noOfRotation = sc.nextInt();

            int[] elements = new int[arraySize];

            for ( int j = 0; j < elements.length; j++ )
            {
                elements[j] = sc.nextInt();
            }

            ar.rotateArray(elements,noOfRotation);
        }

        sc.close();
    }
}