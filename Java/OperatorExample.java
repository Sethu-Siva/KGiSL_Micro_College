import java.util.*;
import java.lang.*;


class OperatorExample
{
	public static void main(String args[])
	{
		int x=10;
		System.out.println("X : " + x);
		x++;
		System.out.println("X++ : " + x);
		System.out.println("X : " + x);
		++x;
		System.out.println("++X : " + x);
		System.out.println("X : " + x);
		x--;
		System.out.println("X-- : " + x);
		System.out.println("X : " + x);
		--x;
		System.out.println("--X : " + x);
		System.out.println("-------------------------------------------------");
		int a=1,b=2;
		System.out.println(a++ + ++a);
		int c=10,d=-10;
		System.out.println(c);
		System.out.println(d);
		System.out.println(~c);
		System.out.println(~d);
		System.out.println(c);
		System.out.println(d);
		System.out.println("-------------------------------------------------");
		boolean e=true,f=false;
		System.out.println(!e);
		System.out.println(e);
		System.out.println(!f);
		System.out.println(f);

		float firstNum = 12, secondNum = 15;
		System.out.println("-------------------------------------------------");
		System.out.println("First Number : " + firstNum);
		System.out.println("Second Number : " + secondNum);
		System.out.println("-------------------------------------------------");
		System.out.println("firstNum + secondNum = " + (firstNum + secondNum));
		System.out.println("firstNum - secondNum = " + (firstNum - secondNum));
		System.out.println("firstNum * secondNum = " + (firstNum * secondNum));
		System.out.println("firstNum / secondNum = " + (firstNum / secondNum));
		System.out.println("firstNum % secondNum = " + (firstNum % secondNum));

		System.out.println("-------------------------------------------------");
		System.out.println("BODMAS");
		System.out.println("-------------------------------------------------");
		System.out.println("( 10 * 10 / 5 + 3 - 1 * 4 / 2 ) = " + ( 10 * 10 / 5 + 3 - 1 * 4 / 2 ));

		
		System.out.println("-------------------------------------------------");
		System.out.println("20 >> 2 = " + (20 >> 2));
		System.out.println("20 >>> 2 = " + (20 >>> 2));
		System.out.println("-20 >> 2 = " + (-20 >> 2));
		System.out.println("-20 >>> 2 = " + (-20 >>> 2)); // Will return msb of actual value i.e -5
		System.out.println("20 << 2 = " + (20 << 2));
		System.out.println("-20 << 2 = " + (-20 << 2));

		System.out.println("-------------------------------------------------");
		Scanner sc = new Scanner(System.in);
		System.out.print("Enter First Number : ");
		int fn = sc.nextInt();
		System.out.print("Enter Second Number : ");
		int sn = sc.nextInt();
		System.out.println("-------------------------------------------------");
		System.out.println("First Number : " + fn);
		System.out.println("Second Number : " + sn);
		System.out.println("-------------------------------------------------");
		int min = ( fn < sn ) ? fn : sn;
		System.out.println("A = " + fn);
		System.out.println("B = " + sn);
		System.out.println("A < B = " + min);

		// Assignment Operator
		System.out.println("-------------------------------------------------");
		System.out.println("Number_1 : " + fn);
		System.out.println("Number_2 : " + sn);
		fn += 5;
		sn -= 8;
		System.out.println("Number_1 : " + fn);
		System.out.println("Number_2 : " + sn);
	}
}