import java.util.*;
import java.lang.*;

class CharValueOfASCII 
{
    char c;
    
    public static void main(String args[])
    {
        CharValueOfASCII a = new CharValueOfASCII();
        Scanner sc = new Scanner(System.in);

        // 3. Print Ascii value of a given String
        System.out.println("\n\n------------------------------------------");
        System.out.println("3. Print Ascii value of a given String");
        System.out.println("------------------------------------------");
        System.out.print("Enter c Character value (Single Char) : ");
        a.c = sc.next().charAt(0);
        int temp = (int)a.c;
        System.out.println("The ASCII Value for given Char " + a.c + " is : " + temp);
        System.out.println("------------------------------------------\n\n");
    }
}