const { Client } = require('pg');

const credentials = [
  { user: 'postgres.doxksbweeaxtewrlcvat', password: 'QbOaG8jWXkphbZnQ' },
  { user: 'postgres', password: 'QbOaG8jWXkphbZnQ' },
  { user: 'Thanhjash', password: 'QbOaG8jWXkphbZnQ' },
  { user: 'thanhjash', password: 'QbOaG8jWXkphbZnQ' },
];

const hosts = [
  { host: 'aws-0-ap-southeast-1.pooler.supabase.com', port: 6543, name: 'Session Pooler' },
  { host: 'db.doxksbweeaxtewrlcvat.supabase.co', port: 5432, name: 'Direct Connection' },
];

async function testConnection() {
  for (const hostInfo of hosts) {
    console.log(`\n========== Testing: ${hostInfo.name} ==========`);
    console.log(`Host: ${hostInfo.host}:${hostInfo.port}`);

    for (const cred of credentials) {
      console.log(`\n  Testing username: ${cred.user}`);

      const client = new Client({
        host: hostInfo.host,
        port: hostInfo.port,
        database: 'postgres',
        user: cred.user,
        password: cred.password,
        ssl: { rejectUnauthorized: false }
      });

      try {
        await client.connect();
        console.log(`  ✅ SUCCESS! Connected with username: ${cred.user}`);
        console.log(`\n  🎉 WORKING CREDENTIALS:`);
        console.log(`  Host: ${hostInfo.host}`);
        console.log(`  Port: ${hostInfo.port}`);
        console.log(`  User: ${cred.user}`);
        console.log(`  Password: ${cred.password}`);

        await client.end();
        process.exit(0);
      } catch (err) {
        console.log(`  ❌ FAILED: ${err.message}`);
      }
    }
  }

  console.log('\n❌ All combinations failed!');
  process.exit(1);
}

testConnection();
