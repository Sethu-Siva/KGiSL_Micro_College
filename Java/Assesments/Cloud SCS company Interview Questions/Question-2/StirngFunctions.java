import java.util.Scanner;

class StirngFunctions
{
    int i = 0, count = 0;

    public void getStr()
    {
        Scanner sc = new Scanner(System.in);

        System.out.print("\nEnter Any String : ");
        String str = sc.nextLine();

        System.out.println("\nNo.of Characters in Given String is \t\t: " + calculateCharacters(str));
        System.out.println("\nNo.of Vowels in Given String is \t\t: " + calculateVowels(str));
        System.out.println("\nNo.of Consonants in Given String is \t\t: " + calculateConsonants(str));
        System.out.println("\nNo.of Special Characters in Given String is \t: " + calculateSpecialCharacters(str));
        System.out.println("\nNo.of Words in Given String is \t\t\t: " + calculateWords(str));
        System.out.println("\nNo.of Sentences in Given String is \t\t: " + calculateSentences(str));

        sc.close();
    }

    public int calculateCharacters(String str)
    {
        char[] sepChars = str.toCharArray();
        count = 0;

        for ( i = 0; i < sepChars.length; i++ )
        {
            if ( ((((int) sepChars[i]) >= 65) && (((int) sepChars[i]) <= 90)) || ((((int) sepChars[i]) >= 97) && (((int) sepChars[i]) <= 122)) )
            {
                count++;
            }
        }

        return count;
    }

    public int calculateVowels(String str)
    {
        char[] sepChars = str.toCharArray();

        count = 0;

        for ( i = 0; i < sepChars.length; i++ )
        {
            if ( Character.toString(sepChars[i]).equalsIgnoreCase("A") || Character.toString(sepChars[i]).equalsIgnoreCase("E") || Character.toString(sepChars[i]).equalsIgnoreCase("I") || Character.toString(sepChars[i]).equalsIgnoreCase("O") || Character.toString(sepChars[i]).equalsIgnoreCase("U") )
            {
                count++;
            }
        }

        return count;
    }

    public int calculateConsonants(String str)
    {
        return (calculateCharacters(str) - calculateVowels(str));
    }

    public int calculateSpecialCharacters(String str)
    {
        char[] sepChars = str.toCharArray();
        count = 0;

        for ( i = 0; i < sepChars.length; i++ )
        {
            if ( ((((int) sepChars[i]) >= 65) && (((int) sepChars[i]) <= 90)) || ((((int) sepChars[i]) >= 97) && (((int) sepChars[i]) <= 122)) )
            {
                continue;   // Skip Characters..
            }
            else if ( ((int) sepChars[i]) == 32 )
            {
                continue;  // Skip Spaces..
            }
            else
            {
                count++;
            }
        }

        return count;
    }

    public int calculateWords(String str)
    {
        String[] words = str.split(" ");
        return (words.length);
    }

    public int calculateSentences(String str)
    {
        String[] sentences = str.split("\\.");
        return (sentences.length);
    }

    public static void main(String []args)
    {
        StirngFunctions sf = new StirngFunctions();

        System.out.print("\n---------------------------------------------");
        System.out.print("\n\t\tString Functions");
        System.out.print("\n---------------------------------------------");
        
        sf.getStr();
    }
}