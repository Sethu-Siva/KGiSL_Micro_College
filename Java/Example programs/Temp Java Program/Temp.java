import java.util.Arrays;

public class Temp
{
    public static void main(String[] args)
    {
        int Daily[] = { 10, 15, 20, 22, 35 };
        Arrays.sort(Daily);
        int habbit = 22;
        System.out.println(Arrays.binarySearch(Daily,1,3,habbit));
    }
}