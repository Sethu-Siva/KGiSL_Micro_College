// Java Program for Performing Simple Calculations Named Calculator

import java.util.*;
import java.lang.*;

class Calculator
{

    float leftOperand, rightOprand, result;
    char choice;
    Scanner sc = new Scanner(System.in);

    public void display()
    {
        
        System.out.println("\n\n**********************************");
        System.out.println("\tCalculator");
        System.out.println("**********************************\n");
        System.out.print("Enter the A value : ");
        leftOperand = sc.nextFloat();
        System.out.print("Enter the B value : ");
        rightOprand = sc.nextFloat();
        System.out.println("\n**********************************");
        System.out.println("\tChoice");
        System.out.println("\t--------");
        System.out.println("\t + ) Addition");
        System.out.println("\t - ) Subtraction");
        System.out.println("\t * ) Mutiplication");
        System.out.println("\t / ) Division");
        System.out.println("\t % ) Modulus");
        System.out.println("\n**********************************\n");

    }

    public void choose()
    {
        System.out.print("Enter Your Choice : ");
        choice = sc.next().charAt(0);
    }

    public void selection()
    {
        switch (choice)
        {
            case '+' :
                result = addition(leftOperand,rightOprand);
                break;
            
            case '-' :
                result = subtraction(leftOperand,rightOprand);
                break;

            case '*' :
                result = mutiplication(leftOperand,rightOprand);
                break;

            case '/' :
                result = division(leftOperand,rightOprand);
                break;

            case '%' :
                result = modulus(leftOperand,rightOprand);
                break;

            default :
                System.out.println("Please Enter a Valid Choise....!");
                choose();
        }
    }

    public void showResults()
    {
        System.out.println("--------------------------------------");
        System.out.println("Result of " + leftOperand + " " + choice + " " + rightOprand + " is : " + result);
        System.out.println("--------------------------------------");
    }

    public float addition(float lo, float ro)
    {
        float resultOfAddition = lo + ro;
        return resultOfAddition;
    }

    public float subtraction(float lo, float ro)
    {
        float resultOfSubtraction = lo - ro;
        return resultOfSubtraction;
    }

    public float mutiplication(float lo, float ro)
    {
        float resultOfMultiplication = lo * ro;
        return resultOfMultiplication;
    }

    public float division(float lo, float ro)
    {
        float resultOfDivision = lo / ro;
        return resultOfDivision;
    }

    public float modulus(float lo, float ro)
    {
        float resultOfModulus = lo % ro;
        return resultOfModulus;
    }

    public static void main(String[] args)
    {

        Calculator ca = new Calculator();

        ca.display();
        ca.choose();
        ca.selection();
        ca.showResults();
    }
}