import java.util.*;
import java.lang.*;

class DivisibleByZero 
{
    public static void main(String[] args)
    {
        Scanner sc = new Scanner(System.in);

        Double firstNumber, secondNumber, result;

        try
        {
            System.out.print("Enter the Value for A : ");
            firstNumber = sc.nextDouble();
            System.out.print("Enter the Value for B : ");
            secondNumber = sc.nextDouble();
            result = firstNumber / secondNumber;
            System.out.println("Result of " + firstNumber + " / " + secondNumber + " = " + result);
        }
        catch(InputMismatchException ime)
        {
            System.out.println("Pls Enter Numbers Only....");
        }
        catch(ArithmeticException ae)
        {
            System.out.println(ae);
        }
        catch(Exception e)
        {
            System.out.println("Error in Program");
        }
        finally
        {
            System.out.println("Done...!");
        }
    }
}