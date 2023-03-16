import java.util.Scanner;

public class CheckTruckNumber
{
    public static boolean isEven(int countFirst,int countSecond,int countThird,int countForth)
    {
        if ( (((countFirst % 2) == 0) && ((countSecond % 2) == 0) && ((countThird % 2) == 0) && ((countForth % 2) == 0)) )
        {
            return true;
        }
        else
        {
            return false;
        }
    }

    public static boolean isValidTocken(String alphaInTruckNumber)
    {
        if ( !((alphaInTruckNumber.equals("A")) || (alphaInTruckNumber.equals("E")) || (alphaInTruckNumber.equals("I")) || (alphaInTruckNumber.equals("O")) || (alphaInTruckNumber.equals("U")) || (alphaInTruckNumber.equals("Y"))) )
        {
            return true;
        }
        else
        {
            return false;
        }
    }

    public static void main(String[] args)
    {
        Scanner sc = new Scanner(System.in);

        String truckNumber = null;

        int countFirst = 0,countSecond = 0, countThird = 0, countForth = 0;
            
        try
        {
            truckNumber = sc.nextLine();

            String[] truckNumberAsArray = truckNumber.split("");

            countFirst = Integer.parseInt(truckNumberAsArray[1])  + Integer.parseInt(truckNumberAsArray[2]);
            countSecond = Integer.parseInt(truckNumberAsArray[4])  + Integer.parseInt(truckNumberAsArray[5]);
            countThird = Integer.parseInt(truckNumberAsArray[5])  + Integer.parseInt(truckNumberAsArray[6]);
            countForth = Integer.parseInt(truckNumberAsArray[8])  + Integer.parseInt(truckNumberAsArray[9]);

            String alphaInTruckNumber = truckNumberAsArray[3].toString();
            
            if ( (isEven(countFirst, countSecond, countThird, countForth)) && (isValidTocken(alphaInTruckNumber)) )
            {
                System.out.println("Valid");
            }
            else
            {
                System.out.println("InValid");
            }

        }
        catch(Exception e)
        {
            System.out.println(e);
        }
    }
}