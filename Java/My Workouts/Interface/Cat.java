
interface Animals
{
    public void foodType();
    public void acttivity();
}

class Cat implements Animals
{
    public void foodType()
    {
        System.out.println("1. Milk\n2. Fish");
    }
    
    public void acttivity()
    {
        System.out.println("1. Sleep\n2. Playing with yan");
    }

    public static void main(String []args)
    {
        Cat c = new Cat();
        c.foodType();
        c.acttivity();
    }
}