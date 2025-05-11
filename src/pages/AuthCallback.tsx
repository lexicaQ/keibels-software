
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoadingSpinner from '../components/LoadingSpinner';
import { workos } from '../utils/workosClient';
import { toast } from "@/components/ui/use-toast";
import { useAuth } from '../context/AuthContext';

const AuthCallback = () => {
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);
  const { user, setUser } = useAuth();

  useEffect(() => {
    const handleAuthCallback = async () => {
      try {
        // Get the authorization code from the URL
        const urlParams = new URLSearchParams(window.location.search);
        const code = urlParams.get('code');
        
        if (!code) {
          throw new Error('No authorization code found in the URL');
        }
        
        console.log("Auth code received:", code);
        
        // For demonstration purposes until server integration is complete
        // In production, this exchange should happen server-side
        setTimeout(() => {
          // Mock successful authentication
          const mockUser = {
            id: 'usr_' + Math.random().toString(36).substr(2, 9),
            email: 'user@example.com',
            firstName: 'Test',
            lastName: 'User'
          };
          
          // Store user in localStorage
          localStorage.setItem('user', JSON.stringify(mockUser));
          
          // Update authentication context
          setUser(mockUser);
          
          // Show success message
          toast({
            title: "Erfolgreich angemeldet!",
            description: "Sie sind jetzt authentifiziert und können mit Maxim Keibel in Kontakt treten.",
          });
          
          // Redirect to the home page or the page they were trying to access
          navigate('/contact');
        }, 1500);
        
      } catch (err) {
        console.error('Authentication error:', err);
        setError('Bei der Authentifizierung ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.');
      }
    };
    
    handleAuthCallback();
  }, [navigate, setUser]);

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
