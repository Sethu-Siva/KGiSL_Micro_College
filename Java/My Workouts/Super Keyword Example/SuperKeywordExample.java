
class BaseClass
{
    BaseClass()
    {
        System.out.println("First Constructor");
    }
}

class ChildClass extends BaseClass
{
    ChildClass()
    {
        System.out.println("Second Constructor");
    }
}

public class SuperKeywordExample
{
    public static void main(String []args)
    {
        ChildClass cc = new ChildClass();
    }
}