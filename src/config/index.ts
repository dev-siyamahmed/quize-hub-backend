import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join((process.cwd(), '.env')) });

export default {
  port: process.env.PORT,
  database_url: process.env.DATABASE_URL,
  supabase_key: process.env.SUPABASE_SECRET_KEY,
  supabase_service_role_key: process.env.SUPABASE_SERVICE_ROLE_KEY,
  
  cloudinary_cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  cloudinary_api_key: process.env.CLOUDINARY_API_KEY,
  cloudinary_api_secret: process.env.CLOUDINARY_API_SECRET,
};