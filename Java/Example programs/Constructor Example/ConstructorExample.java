class Temp
{
    int age = 23;
    String name = "Sethu";
    Temp()
    {
        System.out.println("Constructor Called...!");
    }
}

class ConstructorExample
{
    public static void main(String []args)
    {
        Temp t = new Temp();
        System.out.println("Name : " + t.name);
        System.out.println("Age  : " + t.age);
    }
}