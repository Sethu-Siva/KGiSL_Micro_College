import java.util.*;
import java.lang.*;

abstract class Parent
{
    String name;
    int age;

    public abstract void GetDetails();
    public void display()
    {
        System.out.println("Name : " + name);
        System.out.println("Age  : " + age);
    }
}

class firstChild extends Parent
{
    public void GetDetails()
    {   
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter Your Name : ");
        name = sc.next();
    }
}

class secondChild extends firstChild
{
    public void GetDetails()
    {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter Your Age : ");
        age = sc.nextInt();
    }
}

class AbstractExample
{
    public static void main(String []args)
    {
        Parent fc = new firstChild();
        Parent as = new secondChild();
        fc.GetDetails();
        as.GetDetails();
        fc.display();
        as.display();
    }
}