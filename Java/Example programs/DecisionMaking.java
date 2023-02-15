import java.util.*;
import java.lang.*;

class DecisionMaking
{
    int tamil, english, maths, science, social, total;
    float avg;
    char grade;
    String names;

    public static void main(String[] args)
    {
        
        Scanner sc = new Scanner(System.in);
        DecisionMaking dm = new DecisionMaking();

        /*
        System.out.println("----------------------------------------------");
        System.out.println("\t\tGrading System");
        System.out.println("----------------------------------------------");
        System.out.print("Enter Your Tamil mark \t\t : ");
        dm.tamil = sc.nextInt();
        System.out.print("Enter Your English mark \t : ");
        dm.english = sc.nextInt();
        System.out.print("Enter Your Maths mark \t\t : ");
        dm.maths = sc.nextInt();
        System.out.print("Enter Your Science mark \t : ");
        dm.science = sc.nextInt();
        System.out.print("Enter Your Social mark \t\t : ");
        dm.social = sc.nextInt();
        System.out.println("----------------------------------------------");
        System.out.println("Tamil Mark \t : " + dm.tamil);
        System.out.println("English Mark \t : " + dm.english);
        System.out.println("Maths Mark \t : " + dm.maths);
        System.out.println("Science Mark \t : " + dm.science);
        System.out.println("Social Mark \t : " + dm.social);
        System.out.println("----------------------------------------------");

        if (dm.tamil >= 35 && dm.english >= 35 && dm.maths >= 35 && dm.science >= 35 && dm.social>=35)
        {
            System.out.println("Passed");
        }
        else
        {
            System.out.println("Failed");
        }
        */
        
        System.out.println("Enter Your name : ");
        dm.names = sc.nextLine();
        
        /*
        if (dm.names.equalsIgnoreCase("Sethu"))
        {
            System.out.println("Roll No : RSP001");
        }
        else if (dm.names.equalsIgnoreCase("Siva"))
        {
            System.out.println("Roll No : RSP002");
        }
        else if (dm.names.equalsIgnoreCase("Dhanvanth"))
        {
            System.out.println("Roll No : RSP003");
        }
        else if (dm.names.equalsIgnoreCase("Manoj"))
        {
            System.out.println("Roll No : RSP004");
        }
        else if (dm.names.equalsIgnoreCase("Antanoy"))
        {
            System.out.println("Roll No : RSP005");
        }
        else if (dm.names.equalsIgnoreCase("Meera"))
        {
            System.out.println("Roll No : RSP006");
        }
        else if (dm.names.equalsIgnoreCase("Uma"))
        {
            System.out.println("Roll No : RSP007");
        }
        else if (dm.names.equalsIgnoreCase("Soundarya"))
        {
            System.out.println("Roll No : RSP008");
        }
        else if (dm.names.equalsIgnoreCase("Sindhu"))
        {
            System.out.println("Roll No : RSP009");
        }
        else if (dm.names.equalsIgnoreCase("Arun"))
        {
            System.out.println("Roll No : RSP010");
        }
        else if (dm.names.equalsIgnoreCase("Abisek"))
        {
            System.out.println("Roll No : RSP011");
        }
        else if (dm.names.equalsIgnoreCase("Sakthi"))
        {
            System.out.println("Roll No : RSP012");
        }
        else
        {
            System.out.println("Pls Enter Valid Name");
        }
        */

        switch (dm.names){
            case "Sethu" : 
                System.out.println("Roll No : RSP001");
                break;
            case "Siva" : 
                System.out.println("Roll No : RSP002");
                break;
            case "Dhanvanth" : 
                System.out.println("Roll No : RSP003");
                break;
            case "Manoj" : 
                System.out.println("Roll No : RSP004");
                break;
            case "Antony" : 
                System.out.println("Roll No : RSP005");
                break;
            case "Uma" : 
                System.out.println("Roll No : RSP006");
                break;
            case "Soundarya" : 
                System.out.println("Roll No : RSP007");
                break;
            case "Meera" : 
                System.out.println("Roll No : RSP008");
                break;
            case "Sindhu" : 
                System.out.println("Roll No : RSP009");
                break;
            case "Arun" : 
                System.out.println("Roll No : RSP010");
                break;
            case "Abisek" : 
                System.out.println("Roll No : RSP011");
                break;
            case "Sakthi" : 
                System.out.println("Roll No : RSP012");
                break;
            default :
                System.out.println("Please Enter a Valid name....!");
        }
    }
}