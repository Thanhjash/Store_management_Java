const { Client } = require('pg');

const client = new Client({
  host: 'db.doxksbweeaxtewrlcvat.supabase.co',
  port: 5432,
  database: 'postgres',
  user: 'postgres',
  password: 'QbOaG8jWXkphbZnQ',
  ssl: { rejectUnauthorized: false }
});

async function test() {
  try {
    console.log('Connecting to Supabase...');
    await client.connect();
    console.log('✅ SUCCESS! Connected to Supabase!');

    const result = await client.query('SELECT version()');
    console.log('PostgreSQL version:', result.rows[0].version);

    await client.end();
    console.log('\n🎉 Connection works! Updating Spring Boot config now...');
  } catch (err) {
    console.log('❌ FAILED:', err.message);
    process.exit(1);
  }
}

test();
