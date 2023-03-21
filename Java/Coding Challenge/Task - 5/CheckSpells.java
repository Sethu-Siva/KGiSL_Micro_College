
import java.util.Scanner;

public class CheckSpells
{

    String vowels = "";

    int i = 0;

    int indexOf_a, indexOfNext_a, indexOf_e, indexOfNext_e, indexOf_i, indexOfNext_i, indexOf_o, indexOfNext_o, indexOf_u, indexOfNext_u;

    public void splitVowelsfromString(String spells)
    {
        vowels = "";

        for ( i = 0; i < spells.length(); i++ )
        {
            if ( (spells.charAt(i) == 'a') || (spells.charAt(i) == 'e') || (spells.charAt(i) == 'i') || (spells.charAt(i) == 'o') || (spells.charAt(i) == 'u') )
            {
                vowels += spells.charAt(i);
            }
        }

        indexOf_a = vowels.indexOf('a');
        indexOfNext_a = vowels.indexOf('a', indexOf_a + 1);
        indexOf_e = vowels.indexOf('e');
        indexOfNext_e = vowels.indexOf('e', indexOf_e + 1);
        indexOf_i = vowels.indexOf('i');
        indexOfNext_i = vowels.indexOf('i', indexOf_i + 1);
        indexOf_o = vowels.indexOf('o');
        indexOfNext_o = vowels.indexOf('o', indexOf_o + 1);
        indexOf_u = vowels.indexOf('u');
        indexOfNext_u = vowels.indexOf('u', indexOf_u + 1);

    }

    public boolean isGoodSpell()
    {
        if ( ( indexOfNext_a > indexOf_a) || ( indexOfNext_e > indexOf_e) || ( indexOfNext_i > indexOf_i) || ( indexOfNext_o > indexOf_o) || ( indexOfNext_u > indexOf_u) )
        {
            return false;
        }
        else
        {
            if ( ( (indexOf_a < indexOf_e) || (indexOf_e == -1) ) && ( (indexOf_a < indexOf_i) || (indexOf_i == -1) ) && ( (indexOf_a < indexOf_o) || (indexOf_o == -1) ) && ( (indexOf_a < indexOf_u) || (indexOf_u == -1) ) )
            {
                if ( ( (indexOf_e < indexOf_i) || (indexOf_i == -1) ) && ( (indexOf_e < indexOf_o) || (indexOf_o == -1) ) && ( (indexOf_e < indexOf_u) || (indexOf_u == -1) ) )
                {
                    if ( ( (indexOf_i < indexOf_o) || (indexOf_o == -1) ) && ( (indexOf_i < indexOf_u) || (indexOf_u == -1) ) )
                    {
                        if ( (indexOf_o < indexOf_u) || (indexOf_u == -1) )
                        {
                            return true;
                        }
                        else
                        {
                            return false;
                        }
                    }
                    else
                    {
                        return false;
                    }
                }
                else
                {
                    return false;
                }
            }
            else
            {
                return false;
            }
        }
    }

    public boolean isWorstSpell()
    {
        if ( ( (indexOf_a > indexOf_e) || (indexOf_a == -1) ) && ( (indexOf_a > indexOf_i) || (indexOf_a == -1) ) && ( (indexOf_a > indexOf_o) || (indexOf_a == -1) ) && ( (indexOf_a > indexOf_u) || (indexOf_a == -1) ) )
        {
            if ( ( (indexOf_e > indexOf_i) || (indexOf_e == -1) ) && ( (indexOf_e > indexOf_o) || (indexOf_e == -1) ) && ( (indexOf_e > indexOf_u) || (indexOf_e == -1) ) )
            {
                if ( ( (indexOf_i > indexOf_o) || (indexOf_i == -1) ) && ( (indexOf_i > indexOf_u) || (indexOf_i == -1) ) )
                {
                    if ( (indexOf_o > indexOf_u) || (indexOf_o == -1) )
                    {
                        return true;
                    }
                    else
                    {
                        return false;
                    }
                }
                else
                {
                    return false;
                }
            }
            else
            {
                return false;
            }
        }
        else
        {
            return false;
        }
    }

    public static void main(String[] args)
    {

        CheckSpells cs = new CheckSpells();

        Scanner sc = new Scanner(System.in);
        
        int noOfSpells;

        noOfSpells = sc.nextInt();

        String[] Spells = new String[noOfSpells];

        for ( int i = 0; i < noOfSpells; i++ )
        {
            Spells[i] = sc.next();
        }

        for ( int j = 0; j < Spells.length; j++ )
        {
            cs.splitVowelsfromString(Spells[j].toLowerCase());

            if ( cs.isGoodSpell() )
            {
                System.out.println("Good");
            }
            else if ( cs.isWorstSpell() )
            {
                System.out.println("Worst");
            }
            else
            {
                System.out.println("Bad");
            }

        }

        sc.close();
    }
}