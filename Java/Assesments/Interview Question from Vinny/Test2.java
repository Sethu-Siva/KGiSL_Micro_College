import java.util.Scanner;

public class Test2 
{
    public static void main(String[] args)
    {
        int i,index;

        Scanner sc = new Scanner(System.in);
        
        int n = sc.nextInt();

        int a[] = new int[n];

        for ( i = 0; i < a.length; i++ )
        {
            a[i] = sc.nextInt();
        }

        for ( i = 0; i < a.length; i++)
        {
            index = i;
            for (int j = i ; j <= a.length-1; j++)
            {
                if (a[j] < a[index])
                {
                    index = j;
                }
            }
            int temp = a[i];
            a[i] = a[index];
            a[index] = temp;
        }

        for ( i = 0; i < a.length; i++)
        {
            System.out.print(a[i] + ",");
        }
    }
}