import posthog from "posthog-js"

function shouldDisableAnalytics(): boolean {
  if (typeof window === 'undefined') return true;
  
  // Check if running on localhost
  if (window.location.hostname === 'localhost' || 
      window.location.hostname === '127.0.0.1' ||
      window.location.hostname.includes('192.168.') ||
      window.location.hostname.includes('10.0.')) {
    return true;
  }
  
  // Check for opt-out cookie (expires in 1 year)
  const optOutCookie = document.cookie
    .split('; ')
    .find(row => row.startsWith('disable-analytics='));
    
  return optOutCookie?.split('=')[1] === 'true';
}

// Only initialize PostHog if analytics should not be disabled
if (!shouldDisableAnalytics() && process.env.NEXT_PUBLIC_POSTHOG_KEY) {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
    api_host: "/ingest",
    ui_host: "https://us.posthog.com",
    defaults: '2025-05-24',
    capture_exceptions: true, // This enables capturing exceptions using Error Tracking, set to false if you don't want this
    debug: process.env.NODE_ENV === "development",
  });
} else {
  console.log('📊 Analytics disabled (localhost or opt-out cookie detected)');
}