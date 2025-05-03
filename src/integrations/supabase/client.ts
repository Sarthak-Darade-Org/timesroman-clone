// Example for React
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const supabase = createClient(
  'https://trserver.cloud/', // URL with port
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlzcyI6InN1cGFiYXNlLWRlbW8iLCJpYXQiOjE2NDE3NjkyMDAsImV4cCI6MTc5OTUzNTYwMH0.Ps0iG3Z8cNooXOGjke3zpSH7RI2C2HecfXejwa5wO1E' // From Supabase Studio > API Settings
);

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_ANON_KEY);
