
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoadingSpinner from '../components/LoadingSpinner';
import { workos, CLIENT_ID } from '../utils/workosClient';
import { toast } from "@/components/ui/use-toast";

const AuthCallback = () => {
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const handleAuthCallback = async () => {
      try {
        // Get the authorization code from the URL
        const urlParams = new URLSearchParams(window.location.search);
        const code = urlParams.get('code');
        
        if (!code) {
          throw new Error('No authorization code found in the URL');
        }
        
        // Exchange the code for a token (simplified for client-side)
        // Note: In a production app, you would typically do this server-side
        // This is a simplified example for demonstration purposes
        
        // Mock the authentication response
        // In a real app, you'd make an API call to your backend
        // which would then use WorkOS SDK to exchange the code for a token
        setTimeout(() => {
          // Store mock user in localStorage
          const mockUser = {
            id: 'usr_' + Math.random().toString(36).substr(2, 9),
            email: 'user@example.com',
            firstName: 'Test',
            lastName: 'User'
          };
          
          localStorage.setItem('user', JSON.stringify(mockUser));
          
          // Show success message
          toast({
            title: "Erfolgreich angemeldet!",
            description: "Sie sind jetzt authentifiziert und können mit Maxim Keibel in Kontakt treten.",
          });
          
          // Redirect to the home page
          navigate('/');
        }, 1500);
        
      } catch (err) {
        console.error('Authentication error:', err);
        setError('Bei der Authentifizierung ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.');
      }
    };
    
    handleAuthCallback();
  }, [navigate]);

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-4">
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-md w-full">
          <h2 className="text-lg font-semibold text-red-700 mb-2">Fehler bei der Authentifizierung</h2>
          <p className="text-red-600">{error}</p>
          <button 
            onClick={() => navigate('/')}
            className="mt-4 px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition-colors"
          >
            Zurück zur Startseite
          </button>
        </div>
      </div>
    );
  }

  return <LoadingSpinner />;
};

export default AuthCallback;
