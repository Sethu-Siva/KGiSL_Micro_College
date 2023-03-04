import java.util.*;

class ForLoopEvenNumbers
{
    public static void main(String[] args)
    {
        
        int limit, temp = 1;
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter the Limit : ");
        limit = sc.nextInt();
        int evenNumbers[] = new int[limit];

        for (int i = 0; i<= limit-1; i++)
        {
            evenNumbers[i] = i;
            
        }
        for (int i = 0; i<= limit-1; i++)
        {
            temp = i%2;
            if (temp == 0)
            {
                System.out.print(evenNumbers[i] + "\n");
            }
        }
        sc.close();
    }
}