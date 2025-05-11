
import { WorkOS } from '@workos-inc/node';

// Initialize the WorkOS client with hardcoded API key as fallback
// In Vite, environment variables must be accessed via import.meta.env and prefixed with VITE_
export const workos = new WorkOS(
  import.meta.env.VITE_WORKOS_API_KEY || 'sk_test_a2V5XzAxSlRaQ1ZYSjA2RDEyUkI3N0M3V0IzMzNELG9HWDhQUW1oY01WcEtxMFFiYWhUUHA4N2Q'
);

export const CLIENT_ID = 
  import.meta.env.VITE_WORKOS_CLIENT_ID || 'client_01JTZCVY10RJZ6B94VYGVR2J1Q';

// Function to generate authentication URL
export const getAuthorizationURL = (redirectURI: string): string => {
  // Updated to use the correct API for authentication URL generation
  const authorizationURL = workos.sso.getAuthorizationURL({
    clientID: CLIENT_ID,
    provider: 'authkit',
    redirectURI,
  });
  return authorizationURL;
};
