import java.util.*;
import java.lang.*;

class Assignment{
    String f_name = null, l_name = null, Temp = null;
    String javaVersion, javaVendor, javaHome, javaClassPath, javaVendorUrl;
    char c;
    public static void main(String args[])
    {
        Assignment a = new Assignment();
        Scanner sc = new Scanner(System.in);

        // 1. Swapping two Variable values
        System.out.println("\n\n-------------------------------");
        System.out.println("1. Swapping two variable values");
        System.out.println("-------------------------------");
		System.out.println("Enter Your First Name : ");
        a.f_name = sc.nextLine();
		System.out.println("Enter Your Last Name : ");
        a.l_name = sc.nextLine();
        System.out.println("---------------------");
        System.out.println("Before Swap");
        System.out.println("---------------------");
        System.out.println("First Name : " + a.f_name);
		System.out.println("Second Name : " + a.l_name);
		a.Temp = a.f_name;
		a.f_name = a.l_name;
		a.l_name = a.Temp;
        System.out.println("---------------------");
		System.out.println("After Swap");
        System.out.println("---------------------");
        System.out.println("First Name : " + a.f_name);
		System.out.println("Second Name : " + a.l_name);
        System.out.println("---------------------\n\n");

        // 2. To check whether java is installed or not
        System.out.println("--------------------------------------------");
        System.out.println("2. To check whether java is installed or not");
        System.out.println("--------------------------------------------");
        a.javaVersion = System.getProperty("java.version");
        System.out.println("JAVA Version : " + a.javaVersion);
        a.javaVendor = System.getProperty("java.vendor");
        System.out.println("JAVA Vendor : " + a.javaVendor);
        a.javaVendorUrl = System.getProperty("java.vendor.url");
        System.out.println("JAVA Vendor URL : " + a.javaVendorUrl);
        a.javaHome = System.getProperty("java.home");
        System.out.println("JAVA Home : " + a.javaHome);
        a.javaClassPath = System.getProperty("java.class.path");
        System.out.println("JAVA Path : " + a.javaClassPath);
        System.out.println("---------------------\n\n");

        // 3. Print Ascii value of a given String
        System.out.println("--------------------------------------");
        System.out.println("3. Print Ascii value of a given String");
        System.out.println("--------------------------------------");
        System.out.println("Enter Your Character (Single Char) : ");
        a.c = sc.next().charAt(0);
        int temp = (int)a.c;
        System.out.println("The ASCII Value for given Char " + a.c + " is : " + temp);
        System.out.println("---------------------\n\n");
    }
}