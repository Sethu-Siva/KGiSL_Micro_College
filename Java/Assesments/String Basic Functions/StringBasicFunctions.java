import java.util.*;
import java.lang.*;

class StringBasicFunctions 
{

    String firstName, secondName;

    public static void main(String args[])
    {
        StringBasicFunctions a = new StringBasicFunctions();
        Scanner sc = new Scanner(System.in);

        // 4, 5 String Methods
        System.out.print("Enter Your First Name : ");
        a.firstName = sc.next();
        System.out.print("Enter Your Second Name : ");
        a.secondName = sc.next();
        System.out.println("----------------------------");
        System.out.println("Concat Method : " + a.firstName.concat(a.secondName));
        System.out.println("Concat using '+' : " + a.firstName + " " + a.secondName);
        System.out.println("In LowerCase : " + a.firstName.toLowerCase());
        System.out.println("In UpperCase : " + a.secondName.toUpperCase());
    }
}