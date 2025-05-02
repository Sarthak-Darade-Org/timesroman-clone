// Example for React
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://trserver.cloud/rest/v1/', // URL with port
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlzcyI6InN1cGFiYXNlLWRlbW8iLCJpYXQiOjE2NDE3NjkyMDAsImV4cCI6MTc5OTUzNTYwMH0.Ps0iG3Z8cNooXOGjke3zpSH7RI2C2HecfXejwa5wO1E' // From Supabase Studio > API Settings
);
