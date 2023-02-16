// Java Program to Display Multiplication Table

import java.util.*;
import java.lang.*;

class MultiplicationTable
{
    public static void main(String args[])
    {
        Scanner sc = new Scanner(System.in);

        System.out.print("Which Table do you want to Display : ");
        int table = sc.nextInt();

        System.out.print("Enter the No.Of Terms : ");
        int terms = sc.nextInt();

        System.out.println("___________");
        System.out.println( table + "  Tables");
        System.out.println("-----------");
        for ( int i = 1; i <= terms; i++ )
        {
            System.out.println(i + " x " + table + " = " + (i*table));
        }

    }
}