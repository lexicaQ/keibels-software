
import React from 'react';
import { getAuthorizationURL } from '../utils/workosClient';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

interface WorkOSAuthProps {
  children: React.ReactNode;
}

const WorkOSAuth: React.FC<WorkOSAuthProps> = ({ children }) => {
  const [open, setOpen] = React.useState(false);
  
  // Function to redirect user to WorkOS authentication page
  const handleSignIn = () => {
    // Get the current URL for the redirect
    const redirectURI = `${window.location.origin}/auth/callback`;
    
    // Generate WorkOS authorization URL and redirect the user
    const authURL = getAuthorizationURL(redirectURI);
    window.location.href = authURL;
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md bg-white">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-center">Authentifizierung erforderlich</DialogTitle>
          <button
            className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none"
            onClick={() => setOpen(false)}
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Schließen</span>
          </button>
        </DialogHeader>
        <div className="flex flex-col space-y-4 py-4">
          <p className="text-center text-gray-700">
            Bitte melden Sie sich an oder registrieren Sie sich, um mit Maxim Keibel in Kontakt zu treten.
          </p>
          <Button 
            onClick={handleSignIn}
            className="w-full py-6 bg-black hover:bg-gray-800 text-white flex justify-center items-center"
          >
            Anmelden / Registrieren
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default WorkOSAuth;
