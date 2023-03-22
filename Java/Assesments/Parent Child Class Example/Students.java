import java.util.*;

class Students13
{
    String name = null, Qualification = null;
    int age = 0, assessmentMarks = 0;

    Students13()
    {
        System.out.println("\n--------------------------------------------------");
        System.out.println("\t\tSTUDENTS DATABASE");
        System.out.println("--------------------------------------------------\n");
        System.out.println("\n******************\t******************");
        System.out.println("Full Stack\t\tWeb Development");
        System.out.println("******************\t******************");
        System.out.println("1) Antony Raja\t\t1) Haridass");
        System.out.println("2) Arun\t\t\t2) Mohen sunder");
        System.out.println("3) Dhanvanthri\t\t\t3) Naveen Kumar KG");
        System.out.println("4) Manojkumar\t\t\t4) Naveen Kumar");
        System.out.println("2) Meera \t\t\t5) Sugirthi");
        System.out.println("2) Arun\t\t\t6) Udhaya kumar");
        System.out.println("2) Arun\t\t\t7) Vinny kumar");
        System.out.println("2) Arun\t\t\t8) Sakthi kumar");
        System.out.println("2) Arun\t\t\t9) sangameswari");
        System.out.println("2) Arun\t\t\t10) Satheesh");
        System.out.println("2) Arun\t\t\t11) Sakthi kumar");
        System.out.println("2) Arun\t\t\t12) Ramaswamy");
    }

    public void display(String n)
    {
        switch (n)
        {
            case  "1":
                
                break;
            case  "2":
                
                break;
            default :
                System.out.println("Student Name not found at Data Base");
        }
    }
}

class fullstack extends Students13
{
    public void jobrole()
    {

    }
}

class webdevelopment extends fullstack
{
    public void salary()
    {

    }
}

class Students
{
    public static void main(String[] args)
    {
        String name = null;

        Scanner sc = new Scanner(System.in);
        Students13 st = new Students13();

        System.out.println("Enter the Student Name to Display the Details : ");
        name = sc.nextLine();

        st.display(name);

        sc.close();
    }
}