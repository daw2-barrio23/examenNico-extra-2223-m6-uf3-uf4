import { createClient } from '@supabase/supabase-js'
//Creando la conexión con supabase
const supabaseUrl = 'https://ibppdlafmyqprhbzylcf.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlicHBkbGFmbXlxcHJoYnp5bGNmIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY4NjMxOTY3OCwiZXhwIjoyMDAxODk1Njc4fQ.0QClZXRrAJhm0sOFhtFIr2SSnTf7rbezlXVMhzo9Bbo'

//exportamos la conexión
export const supabase = createClient(supabaseUrl, supabaseKey)
