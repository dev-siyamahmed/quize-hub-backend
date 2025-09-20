import app from './app';
import config from './config/index';
import { supabase } from './config/supabase';

async function main() {
  try {
    
    const { data, error } = await supabase.from('your_table_name').select('*').limit(1);
    
    if (error) {
      console.error('Supabase connection error:', error);
      throw new Error('Failed to connect to Supabase');
    }

    console.log("✅ Supabase Connection Successful");

    app.listen(config.port, () => {
      console.log(`🚀 Server is running on port ${config.port}`);
    });
  } catch (err) {
    console.error('❌ Error starting server:', err);
    process.exit(1);
  }
}

main();
