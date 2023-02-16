import java.util.*;
import java.lang.*;

class MethodExample
{
    MethodExample()
    {
        System.out.println("\n\n*******************************");
        System.out.println("\tWelcome To Java");
        System.out.println("*******************************");
    }

    public void myPrint()
    {
        System.out.println("Method Example - (Adding Two Numbers)");
        System.out.println("-------------------------------");
    }

    public int Add()
    {
        int number_1, number_2, sum;
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter the A value : ");
        number_1 = sc.nextInt();
        System.out.print("Enter the B value : ");
        number_2 = sc.nextInt();
        sum = number_1 + number_2;
        return sum;
    }

    public void result(int r)
    {
        System.out.println("\t\t------------");
        System.out.println("\t\tResult : " + r);
        System.out.println("\t\t------------");
    }

    public static void main(String[] args)
    {
        int r;
        String names;
        MethodExample me = new MethodExample();

        me.myPrint();
        r = me.Add();
        me.result(r);
    }
}