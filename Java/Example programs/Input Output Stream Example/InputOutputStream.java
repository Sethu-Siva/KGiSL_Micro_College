import java.io.*;

class InputOutputStream 
{
    public static void main(String []args) throws IOException
    {
        String str;
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        System.out.println("Enter Exit to STOP....");
        System.out.println("Enter Sequance of Lines : \n");
        do
        {
            str = br.readLine();
            System.out.println(str);
        }
        while(!str.equalsIgnoreCase("Exit") || str.contains("Exit"));
    }
}