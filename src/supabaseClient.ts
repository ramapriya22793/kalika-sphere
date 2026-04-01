import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://jmijltnjzydzaztlmuse.supabase.co'

const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImptaWpsdG5qenlkemF6dGxtdXNlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ2MDM3MjMsImV4cCI6MjA5MDE3OTcyM30.ibngQ3dBOfIJ1hj4pkKhGFMOAh6R9np0_eh5jCuiK94'

export const supabase = createClient(supabaseUrl, supabaseKey)