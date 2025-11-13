import java.sql.Connection;
import java.sql.DriverManager;

public class TestConnection3 {
    public static void main(String[] args) {
        String[] usernames = {
            "postgres.doxksbweeaxtewrlcvat",
            "postgres",
            "Thanhjash",
            "thanhjash",
            "doxksbweeaxtewrlcvat"
        };
        String password = "QbOaG8jWXkphbZnQ";

        // Try both pooler and direct connection
        String[] urls = {
            "jdbc:postgresql://aws-0-ap-southeast-1.pooler.supabase.com:6543/postgres?sslmode=require",
            "jdbc:postgresql://db.doxksbweeaxtewrlcvat.supabase.co:5432/postgres?sslmode=require"
        };

        for (String url : urls) {
            System.out.println("\n========== Testing URL: " + url);
            for (String username : usernames) {
                System.out.println("  Testing username: " + username);
                try (Connection conn = DriverManager.getConnection(url, username, password)) {
                    System.out.println("  ✅ SUCCESS! Connected with: " + username);
                    System.out.println("  Connection valid: " + conn.isValid(5));
                    System.out.println("\n  🎉 CORRECT CREDENTIALS:");
                    System.out.println("  URL: " + url);
                    System.out.println("  Username: " + username);
                    return;
                } catch (Exception e) {
                    System.out.println("  ❌ FAILED: " + e.getMessage());
                }
            }
        }
        System.out.println("\n❌ All combinations failed!");
    }
}
