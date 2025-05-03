
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Send, Mail, Phone, MapPin } from 'lucide-react';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name muss mindestens 2 Zeichen lang sein" }),
  email: z.string().email({ message: "Ungültige E-Mail-Adresse" }),
  message: z.string().min(10, { message: "Nachricht muss mindestens 10 Zeichen lang sein" }),
});

type FormValues = z.infer<typeof formSchema>;

const ContactSection: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "Nachricht gesendet",
      description: "Vielen Dank für Ihre Nachricht. Ich werde mich so schnell wie möglich bei Ihnen melden.",
    });
    
    form.reset();
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-24 bg-black text-white relative overflow-hidden">
      {/* Enhanced background effects with more and brighter white blurry elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-white/8 rounded-full blur-[180px] opacity-50"></div>
        <div className="absolute bottom-1/3 left-1/3 w-80 h-80 bg-white/8 rounded-full blur-[180px] opacity-50"></div>
        <div className="absolute top-1/2 left-1/6 w-64 h-64 bg-white/6 rounded-full blur-[150px] opacity-40"></div>
        <div className="absolute bottom-1/6 right-1/6 w-72 h-72 bg-white/6 rounded-full blur-[160px] opacity-40"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">KONTAKT</h2>
          <div className="w-20 h-1 bg-white mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Haben Sie Fragen oder möchten Sie über ein Projekt sprechen? Kontaktieren Sie mich gerne über das Formular oder direkt per E-Mail.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-5xl mx-auto">
          {/* Contact Form */}
          <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-xl p-8 h-fit">
            <h3 className="text-xl font-bold mb-6">Kontaktformular</h3>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-300">Name</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Ihr Name" 
                          {...field} 
                          className={cn(
                            "bg-white/5 border-white/10 text-white placeholder:text-gray-500",
                            "focus:border-white/30 focus:ring-0 focus:ring-offset-0"
                          )}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-300">E-Mail</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Ihre E-Mail-Adresse" 
                          type="email" 
                          {...field} 
                          className={cn(
                            "bg-white/5 border-white/10 text-white placeholder:text-gray-500",
                            "focus:border-white/30 focus:ring-0 focus:ring-offset-0"
                          )}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-300">Nachricht</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Ihre Nachricht" 
                          {...field} 
                          className={cn(
                            "bg-white/5 border-white/10 text-white placeholder:text-gray-500 min-h-[150px]",
                            "focus:border-white/30 focus:ring-0 focus:ring-offset-0"
                          )}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-white text-black hover:bg-gray-200 transition-colors"
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Wird gesendet...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      Nachricht senden
                      <Send size={16} className="ml-2" />
                    </span>
                  )}
                </Button>
              </form>
            </Form>
          </div>
          
          {/* Contact Info - Replaced second form with image */}
          <div className="space-y-10">
            <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-xl p-8">
              <h3 className="text-xl font-bold mb-6">Kontaktinformationen</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-4 mt-1">
                    <Mail size={18} className="text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-1">E-Mail</p>
                    <a href="mailto:info@maxim-keibel.com" className="text-white hover:text-gray-300 transition-colors">
                      info@maxim-keibel.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-4 mt-1">
                    <Phone size={18} className="text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Telefon</p>
                    <a href="tel:+49123456789" className="text-white hover:text-gray-300 transition-colors">
                      +49 (0) 123 456789
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-4 mt-1">
                    <MapPin size={18} className="text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Standort</p>
                    <p className="text-white">München, Deutschland</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-xl overflow-hidden">
              {/* Profile image or illustration */}
              <div className="h-full">
                <img 
                  src="/lovable-uploads/8284c56f-16e0-4dd6-b3a6-353a106bc9cf.png" 
                  alt="Maxim Keibel" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
