/* Using Java Program to Find Whether the Java is Installed or Not
    Also Finding the Following,
        * Java Version
        * Java Vendor
        * Java Vendor URL
        * java Home Path
        * java Class Path
*/

class JavaInstalledOrNot 
{
    String javaVersion, javaVendor, javaHome, javaClassPath, javaVendorUrl;

    public static void main(String args[])
    {
        JavaInstalledOrNot a = new JavaInstalledOrNot();

        System.out.println("\n\n--------------------------------------------");
        System.out.println("2. To check whether java is installed or not");
        System.out.println("--------------------------------------------");
        a.javaVersion = System.getProperty("java.version");
        System.out.println("JAVA Version \t: " + a.javaVersion);
        a.javaVendor = System.getProperty("java.vendor");
        System.out.println("JAVA Vendor \t: " + a.javaVendor);
        a.javaVendorUrl = System.getProperty("java.vendor.url");
        System.out.println("JAVA Vendor URL : " + a.javaVendorUrl);
        a.javaHome = System.getProperty("java.home");
        System.out.println("JAVA Home \t: " + a.javaHome);
        a.javaClassPath = System.getProperty("java.class.path");
        System.out.println("JAVA Path \t: " + a.javaClassPath);
        System.out.println("--------------------------------------------\n\n");
    }
}