import { createClient } from '@supabase/supabase-js';
import config from '.';



if (!config.supabase_url || !config.supabase_key) {
  throw new Error('Missing Supabase credentials in environment variables');
}

export const supabase = createClient(
  config.supabase_url as string,
  config.supabase_key as string
); 