import java.util.*;
import java.lang.*;

class Pyramid
{
    public static void main(String[] args)
    {
        for ( int i = 1; i <= 10 ; i++ )
        {
            for ( int j = 1; j <= i; j++ )
            {
                System.out.print(" * ");
            }
            System.out.println();
        }
        System.out.println("------------------------------------");        
    }
}