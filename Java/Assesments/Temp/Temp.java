package Assesments.Temp;
public class Temp {
public static void main(String[] args)
{

int sum = 1;
int ctr = 0; 
int num = 0; 
while (ctr <=10) {
num++; 
if (num % 2 != 0) { 
// check if the number is even
if (is_Prime(num)) {
sum += num; 
ctr++; 
}
} 
}
System.out.println("\nSum of the first 100 prime numbers is: "+sum); 
}
public static boolean is_Prime(int num) {
for (int i = 3; i * i <= num; i+= 2) {
if (num % i == 0) {
return false; 
}
}
return true;
}
}