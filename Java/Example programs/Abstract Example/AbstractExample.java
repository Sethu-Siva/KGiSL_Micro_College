import java.util.*;

abstract class Parent
{
    String name = null,jobRole;
    int age = 0;
    Double Salary;

    public abstract void GetDetails();
    public abstract void GetJobDetails();
    public void display()
    {
        System.out.println("Name \t: " + name);
        System.out.println("Age  \t: " + age);
        System.out.println("Job Role : " + jobRole);
        System.out.println("Age  \t: " + Salary);
    }
}

class firstChild extends Parent
{
    Scanner sc = new Scanner(System.in);
    public void GetDetails()
    {   
        System.out.print("Enter Your Name : ");
        name = sc.next();
        System.out.print("Enter Your Age : ");
        age = sc.nextInt();
    }
    public void GetJobDetails()
    {
        System.out.print("Enter Your JobRole : ");
        jobRole = sc.next();
        System.out.print("Enter Your Salary : ");
        Salary = sc.nextDouble();
    }
}

class secondChild extends firstChild
{
    public void GetDetails()
    {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter Your Name : ");
        name = sc.next();
        System.out.print("Enter Your Age : ");
        age = sc.nextInt();
        sc.close();
    }
    public void GetJobDetails()
    {
        System.out.print("Enter Your JobRole : ");
        jobRole = sc.next();
        System.out.print("Enter Your Salary : ");
        Salary = sc.nextDouble();
    }
}

class AbstractExample
{
    public static void main(String []args)
    {
        Parent fc = new firstChild();
        Parent as = new secondChild();
        fc.GetDetails();
        fc.GetJobDetails();
        as.GetDetails();
        as.GetJobDetails();
        fc.display();
        as.display();
    }
}