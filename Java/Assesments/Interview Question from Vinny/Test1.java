import java.util.Scanner;

class Test1
{
    public static void main(String []args)
    {
        Scanner sc = new Scanner(System.in);
        
        int a = sc.nextInt();
        int b = sc.nextInt();

        int sum = a + b;

        if ( sum % 2 == 0 )
        {
            System.out.println(sum);
        }
        else
        {
            System.out.println("InAppropriate Range");
        }
    }
}