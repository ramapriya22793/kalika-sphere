import { supabase } from './supabaseClient';

async function checkTable() {
    console.log("Checking 'bookings' table...");
    const { data, error } = await supabase
        .from('bookings')
        .select('*')
        .limit(1);

    if (error) {
        console.error("Error fetching 'bookings':", error);
        
        // Also try to list all tables if possible (not always possible with anon key)
        console.log("Trying to list column names for 'bookings'...");
        // Usually we can't do this easily without the service role or a specific RPC
    } else {
        console.log("Success! Data from 'bookings':", data);
        if (data.length > 0) {
            console.log("Column names:", Object.keys(data[0]));
        } else {
            console.log("Table is empty, can't determine columns from data.");
        }
    }
}

checkTable();
