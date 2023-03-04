import java.util.*;
class ForLoopWithArray
{
    public static void main(String[] args)
    {
        String fruites[] = new String[5];
        Scanner sc = new Scanner(System.in);

        for (int i = 0; i<= fruites.length-1; i++)
        {
            System.out.print("Enter the fruite name : ");
            fruites[i] = sc.next();
        }
        System.out.println("---------------------------------------");
        for (int i = 0; i<= fruites.length-1; i++)
        {
            int temp = i + 1;
            System.out.print("Fruite " + temp + " : " + fruites[i] + "\n");
        }
        sc.close();
    }
}