const { Client } = require('pg');

const client = new Client({
  host: 'aws-1-ap-southeast-1.pooler.supabase.com',
  port: 6543,
  database: 'postgres',
  user: 'postgres.doxksbweeaxtewrlcvat',
  password: 'QbOaG8jWXkphbZnQ',
  ssl: { rejectUnauthorized: false }
});

async function test() {
  try {
    console.log('Testing connection...');
    await client.connect();
    console.log('✅ SUCCESS! Connected to Supabase!');
    await client.end();
  } catch (err) {
    console.log('❌ FAILED:', err.message);
    process.exit(1);
  }
}

test();
