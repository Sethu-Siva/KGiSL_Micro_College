import java.util.Arrays;
import java.util.Scanner;

class BucketProgram
{
    Scanner sc = new Scanner(System.in);

    int[] buckets = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

    Boolean limitReached = false;

    int input_liters = 0, availableSpaceInBucket = 0, reamining_liters = 0, fillable_liters = 0, i = 0, available_bucket_position = 0, overAllLitersAvailable = 1000;

    public void addToBuckets()
    {

        System.out.print("\nInput (liters): ");
        input_liters = sc.nextInt();

        if ( calculateOverAllLiters() < input_liters )
        {
            System.out.println("\nMaximum Capacity of available liters is : " + calculateOverAllLiters() + "\nEnsure that adding liters don't cross the available liters.");
            addToBuckets();
        }
        else if ( check_availabity() )
        {
            programTerminate();
        }
        else
        {
            add(input_liters);
        }
    }

    public int calculateOverAllLiters()
    {
        int litersInsideBucket = 0;

        for ( i = 0; i < buckets.length; i++ )
        {
            litersInsideBucket += buckets[i];
        }
        return ( overAllLitersAvailable - litersInsideBucket );
    }

    public Boolean check_availabity()
    {
        if ( ( buckets[0] == 100 ) && ( buckets[1] == 100 ) && ( buckets[2] == 100 ) && ( buckets[3] == 100 ) && ( buckets[4] == 100 ) && ( buckets[5] == 100 ) && ( buckets[6] == 100 ) && ( buckets[7] == 100 ) && ( buckets[8] == 100 ) && ( buckets[9] == 100 ) )
        {
            limitReached = true;
        }
        else
        {
            limitReached = false;
        }

        return limitReached;
    }

    public void add(int input_liters)
    {
        findAvailablePosition();

        availableSpaceInBucket = 100 - buckets[available_bucket_position];

        if ( input_liters >= availableSpaceInBucket )
        {
            fillable_liters = 100 - buckets[available_bucket_position];
            reamining_liters = input_liters - fillable_liters;

            buckets[available_bucket_position] += fillable_liters;

            if ( reamining_liters != 0 )
            {
                add(reamining_liters);
            }
        }
        else
        {
            buckets[available_bucket_position] += input_liters;
        }

        System.out.print("\n\nNow Buckets: " + Arrays.toString(buckets)+"\n");

        limitReached = check_availabity();

        if ( limitReached )
        {
            programTerminate();
        }
        else
        {
            wantToContinue();
        }
    }

    public void findAvailablePosition()
    {
        int min = buckets[0];
        available_bucket_position = 0;

        for ( i = 0; i < buckets.length; i++ )
        {
            if ( buckets[i] < min )
            {
                min = buckets[i];
                available_bucket_position = i;
            }
        }
    }

    public void wantToContinue()
    {
        System.out.print("\n Do you want to add More liters to the Buckets ('Y / N') : ");
        char choise = sc.next().charAt(0);
        
        if ( Character.toString(choise).equalsIgnoreCase("Y") )
        {
            addToBuckets();
        }
        else if ( Character.toString(choise).equalsIgnoreCase("N") )
        {
            System.out.print("\n\nNow Buckets: " + Arrays.toString(buckets)+"\n");
            System.out.println("\nProgram Terminated by User....");
            System.exit(0);
        }
        else
        {
            System.out.println("\nInvalid Choice...! Only ('Y / N') Accepted.");
            wantToContinue();
        }
    }

    public void programTerminate()
    {
        System.out.println("\nAll Buckets Got Filled to the MAX capacity,\nCannot add More than that.");
        System.out.println("\nFinal Bucket Status :" + Arrays.toString(buckets)+"\n");
        System.out.println("\nProgram Terminated...!");
        System.exit(0);
    }

    public static void main(String[] args)
    {
        BucketProgram bu = new BucketProgram();

        System.out.print("\n-----------------------------------------------------");
        System.out.print("\n\t\tBucket Program");
        System.out.print("\n-----------------------------------------------------");
        System.out.print("\n\nBuckets: " + Arrays.toString(bu.buckets)+"\n");
        
        bu.addToBuckets();
    }
}