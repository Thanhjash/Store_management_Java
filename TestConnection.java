import java.sql.Connection;
import java.sql.DriverManager;

public class TestConnection {
    public static void main(String[] args) {
        String[] usernames = {"Thanhjash", "thanhjash", "postgres"};
        String password = "ViLink_17";
        String url = "jdbc:postgresql://aws-0-ap-southeast-1.pooler.supabase.com:6543/postgres?sslmode=require";

        for (String username : usernames) {
            System.out.println("\nTesting with username: " + username);
            try (Connection conn = DriverManager.getConnection(url, username, password)) {
                System.out.println("✅ SUCCESS! Connected with username: " + username);
                System.out.println("Connection valid: " + conn.isValid(5));
                break;
            } catch (Exception e) {
                System.out.println("❌ FAILED with " + username + ": " + e.getMessage());
            }
        }
    }
}
