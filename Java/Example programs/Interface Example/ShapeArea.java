import java.util.*;
interface Area
{
    public void Square();
    public void Circle();
    public void Rectangle();
    public void Triangle();
}

interface CircumFerence
{
    public static void Square()
    {
        double a = 12.20, f;
        f = 4 * a;
        System.out.println(f);
    }
    public static void Display()
    {
        System.out.println("\n");
    }
}

public class ShapeArea implements Area, CircumFerence
{
    public void Circle()
    {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter the radius of the Circle : ");
        double r = sc.nextDouble();
        double areaOfCircle = 3.142 * r * r;
        System.out.println("Area of the Circle is : " + areaOfCircle);
        sc.close();
    }

    public void Square()
    {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter the length of the side of the Square : ");
        double s = sc.nextDouble();
        double areaOfSquare = s * s;
        System.out.println("Area of the Square is : " + areaOfSquare);
        sc.close();
    }
    
    public void Rectangle()
    {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter the length of the Rectangle : ");
        double l = sc.nextDouble();
        System.out.print("Enter the Breath of the Rectangle : ");
        double b = sc.nextDouble();
        double areaOfRectangle = l * b;
        System.out.println("Area of the Rectangle is : " + areaOfRectangle);
        sc.close();
    }

    public void Triangle()
    {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter the Base of the Triangle : ");
        double base = sc.nextDouble();
        System.out.print("Enter the Height of the Triangle : ");
        double height = sc.nextDouble();
        double areaOfTriangle = (base*height)/2;
        System.out.println("Area of the Rectangle is : " + areaOfTriangle);
        sc.close();
    }

    public static void main(String[] args)
    {
        ShapeArea geometry = new ShapeArea();
        geometry.Circle();
        geometry.Square();
        geometry.Rectangle();
        geometry.Triangle();
        CircumFerence.Square();
        CircumFerence.Display();
    }
}