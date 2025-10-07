// Supabase Connection Test Utility
// Run this to diagnose database connection issues

import { supabase } from './supabase';

export async function testSupabaseConnection() {
  console.log('🧪 === SUPABASE CONNECTION TEST ===');
  
  // Test 1: Check if client exists
  console.log('\n✅ Test 1: Supabase client exists:', !!supabase);
  
  // Test 2: Try to query the portfolio table
  try {
    console.log('\n🔍 Test 2: Attempting to query portfolio table...');
    const { data, error, count, status, statusText } = await supabase
      .from('portfolio')
      .select('*', { count: 'exact' })
      .limit(1);
    
    console.log('📊 Query Result:');
    console.log('  - Status:', status);
    console.log('  - Status Text:', statusText);
    console.log('  - Has Error:', !!error);
    console.log('  - Has Data:', !!data);
    console.log('  - Data:', data);
    console.log('  - Count:', count);
    
    if (error) {
      console.log('\n❌ Error Details:');
      console.log('  - Error object:', error);
      console.log('  - Error type:', typeof error);
      console.log('  - Error constructor:', error?.constructor?.name);
      console.log('  - Error keys:', Object.keys(error || {}));
      console.log('  - Error message:', error?.message);
      console.log('  - Error code:', error?.code);
      console.log('  - Error details:', error?.details);
      console.log('  - Error hint:', error?.hint);
      
      // Try to stringify
      try {
        console.log('  - Error JSON:', JSON.stringify(error, null, 2));
      } catch (e) {
        console.log('  - Error JSON: Cannot stringify');
      }
    }
    
  } catch (err) {
    console.error('\n❌ Test 2 Failed with exception:', err);
  }
  
  // Test 3: Check table existence
  try {
    console.log('\n🔍 Test 3: Checking if portfolio table exists...');
    const { error } = await supabase.from('portfolio').select('count');
    
    if (error) {
      if (error.message?.includes('does not exist') || error.message?.includes('relation')) {
        console.log('❌ Portfolio table does NOT exist in database');
      } else {
        console.log('⚠️  Portfolio table might exist but there\'s an error:', error.message);
      }
    } else {
      console.log('✅ Portfolio table exists');
    }
  } catch (err) {
    console.error('❌ Test 3 Failed:', err);
  }
  
  console.log('\n🧪 === END OF CONNECTION TEST ===\n');
}

// Auto-run if imported
if (typeof window !== 'undefined') {
  // Only run in browser
  testSupabaseConnection();
}

