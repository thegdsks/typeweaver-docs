"use client"

import posthog from "posthog-js"
import { PostHogProvider as PHProvider } from "posthog-js/react"
import { useEffect } from "react"

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

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Set up global opt-out functions (always available, regardless of localhost)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).disableAnalytics = function() {
      const expires = new Date();
      expires.setFullYear(expires.getFullYear() + 1);
      document.cookie = `disable-analytics=true; expires=${expires.toUTCString()}; path=/`;
      if (typeof posthog !== 'undefined' && posthog?.opt_out_capturing) {
        posthog.opt_out_capturing();
      }
      console.log('📊 Analytics disabled for 1 year. Refresh the page to take effect.');
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).enableAnalytics = function() {
      document.cookie = 'disable-analytics=false; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
      console.log('📊 Analytics enabled. Refresh the page to take effect.');
    };

    // Don't initialize PostHog if analytics should be disabled
    if (shouldDisableAnalytics()) {
      console.log('📊 Analytics disabled (localhost or opt-out cookie detected)');
      return;
    }

    if (process.env.NEXT_PUBLIC_POSTHOG_KEY) {
      posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
        api_host: "/ingest",
        ui_host: "https://us.posthog.com",
        defaults: '2025-05-24',
        capture_exceptions: true,
        person_profiles: 'identified_only',
        capture_pageview: true,
        capture_pageleave: true,
        debug: process.env.NODE_ENV === "development",

        // Additional privacy settings
        respect_dnt: true,
        opt_out_capturing_by_default: false,
        opt_out_persistence_by_default: false,

        // Session recording settings
        disable_session_recording: false,
      });
    }
  }, []);

  // Don't provide PostHog context if disabled
  if (shouldDisableAnalytics()) {
    return <>{children}</>;
  }

  return (
    <PHProvider client={posthog}>
      {children}
    </PHProvider>
  )
}