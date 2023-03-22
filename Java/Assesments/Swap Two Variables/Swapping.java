// Java Program for Swapping to Variable's Values using 3rd Variable

import java.util.*;

class Swapping 
{
    String f_name = null, l_name = null, Temp = null;

    public static void main(String args[])
    {
        Swapping a = new Swapping();
        Scanner sc = new Scanner(System.in);

        // 1. Swapping two Variable values
        System.out.println("\n\n-------------------------------");
        System.out.println("1. Swapping two variable values");
        System.out.println("-------------------------------");
		System.out.print("Enter Your First Name : ");
        a.f_name = sc.nextLine();
		System.out.print("Enter Your Last Name : ");
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

        sc.close();
    }
}