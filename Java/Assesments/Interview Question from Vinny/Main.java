import java.util.Scanner;

class Student {
    String name;
    int mark1, mark2, mark3, mark4;

    Student(String name, int mark1, int mark2, int mark3, int mark4) {
        this.name = name;
        this.mark1 = mark1;
        this.mark2 = mark2;
        this.mark3 = mark3;
        this.mark4 = mark4;
    }

    int totalMark() {
        return mark1 + mark2 + mark3 + mark4;
    }

    String checkGrade() {
        int percentage = totalMark() / 4;
        if (percentage >= 90) {
            return "S";
        } else if (percentage >= 80) {
            return "A";
        } else if (percentage >= 70) {
            return "B";
        } else if (percentage >= 60) {
            return "C";
        } else if (percentage >= 45) {
            return "D";
        } else {
            return "F";
        }
    }
}

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int id = input.nextInt();
        String name = input.next();
        int mark1 = input.nextInt();
        int mark2 = input.nextInt();
        int mark3 = input.nextInt();
        int mark4 = input.nextInt();

        Student student = new Student(name, mark1, mark2, mark3, mark4);
        System.out.println(student.totalMark());
        System.out.println(student.checkGrade());
    }
}
