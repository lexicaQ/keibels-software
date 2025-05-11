
import { WorkOS } from '@workos-inc/node';

// Initialize the WorkOS client
export const workos = new WorkOS(
  process.env.WORKOS_API_KEY || 'sk_test_a2V5XzAxSlRaQ1ZYSjA2RDEyUkI3N0M3V0IzMzNELG9HWDhQUW1oY01WcEtxMFFiYWhUUHA4N2Q'
);

export const CLIENT_ID = 
  process.env.WORKOS_CLIENT_ID || 'client_01JTZCVY10RJZ6B94VYGVR2J1Q';

// Function to generate authentication URL
export const getAuthorizationURL = (redirectURI: string): string => {
  const authorizationURL = workos.userManagement.getAuthorizationURL({
    clientID: CLIENT_ID,
    provider: 'authkit',
    redirectURI,
  });
  return authorizationURL;
};
