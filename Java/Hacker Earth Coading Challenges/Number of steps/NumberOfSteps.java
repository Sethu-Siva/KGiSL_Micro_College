import java.util.*;

class NumberOfSteps
{

    public int findSteps(int[] a, int[] b)
    {
        return -1;
    }

    public static void main(String args[] ) throws Exception {
        
        NumberOfSteps ns = new NumberOfSteps();

        Scanner sc = new Scanner(System.in);

        int arraySize = sc.nextInt();

        int a[] = new int[arraySize];

        int b[] = new int[arraySize];

        for ( int i = 0; i < a.length; i++ )
        {
            a[i] = sc.nextInt();
        }

        for ( int j = 0; j < b.length; j++ )
        {
            b[j] = sc.nextInt();
        }

        System.out.println(ns.findSteps(a, b));

        sc.close();
    }
}