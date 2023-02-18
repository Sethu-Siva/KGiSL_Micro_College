import java.io.*;
import java.util.*;
import java.lang.*;

class ByteArray
{
    public static void main(String []args) throws IOException
    {
        ByteArrayOutputStream bOutput = new ByteArrayOutputStream(12);

        System.out.println("Enter The Values : ");

        while ( bOutput.size() != 10 )
        {
            // Gets the input from the user
            bOutput.write(System.in.read());
        }

        byte b[] = bOutput.toByteArray();

        System.out.println("Print the Content");

        for ( int x = 0; x < b.length; x++ )
        {
            // Printing the Characters
            System.out.print((char)b[x] + " ");
        }

        System.out.println(" ");

        int c;

        ByteArrayInputStream bInput = new ByteArrayInputStream(b);

        System.out.println("Converting characters to Upper Case ");

        for ( int y = 0; y < 1; y++ )
        {
            while ( ( c = bInput.read()) != -1 )
            {
                System.out.print(Character.toUpperCase((char)c) + " ");
            }
            bInput.reset();
        }
    }
}