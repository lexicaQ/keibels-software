
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
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name muss mindestens 2 Zeichen lang sein"
  }),
  email: z.string().email({
    message: "Ungültige E-Mail-Adresse"
  }),
  message: z.string().min(10, {
    message: "Nachricht muss mindestens 10 Zeichen lang sein"
  })
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
      message: ""
    }
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    toast({
      title: "Nachricht gesendet",
      description: "Vielen Dank für Ihre Nachricht. Ich werde mich so schnell wie möglich bei Ihnen melden."
    });
    form.reset();
    setIsSubmitting(false);
  };

  return <section id="contact" className="py-24 bg-black text-white relative overflow-hidden">
      {/* Enhanced background effects with more and brighter white blurry elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-[180px] opacity-60"></div>
        <div className="absolute bottom-1/3 left-1/3 w-80 h-80 bg-white/10 rounded-full blur-[180px] opacity-60"></div>
        <div className="absolute top-1/2 left-1/6 w-72 h-72 bg-white/8 rounded-full blur-[150px] opacity-50"></div>
        <div className="absolute bottom-1/6 right-1/6 w-80 h-80 bg-white/8 rounded-full blur-[160px] opacity-50"></div>
        <div className="absolute top-3/4 left-1/2 w-64 h-64 bg-white/10 rounded-full blur-[140px] opacity-60"></div>
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
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Name</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Ihr Name" 
                        className="bg-white/5 border border-white/10 text-white placeholder:text-gray-500" 
                        {...field} 
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
                    <FormLabel className="text-white">Email</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Ihre Email-Adresse" 
                        className="bg-white/5 border border-white/10 text-white placeholder:text-gray-500" 
                        {...field} 
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
                    <FormLabel className="text-white">Nachricht</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Ihre Nachricht" 
                        className="min-h-[120px] bg-white/5 border border-white/10 text-white placeholder:text-gray-500" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <Button 
                type="submit" 
                disabled={isSubmitting} 
                className="w-full bg-white/10 hover:bg-white/15 text-white border border-white transition-all"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <div className="h-4 w-4 border-2 border-t-transparent rounded-full animate-spin" />
                    Wird gesendet...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Send size={16} />
                    Nachricht senden
                  </span>
                )}
              </Button>
            </form>
          </Form>
          
          {/* Contact Info with Image */}
          <div className="space-y-10 flex flex-col">
            <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-xl p-8 h-full">
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

              <Separator className="my-6 bg-white/20" />
              
              <div className="relative mt-6">
                <div className="relative overflow-hidden rounded-lg border border-white">
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent"></div>
                  <img 
                    src="/lovable-uploads/8284c56f-16e0-4dd6-b3a6-353a106bc9cf.png" 
                    alt="Maxim Keibel" 
                    className="w-full h-auto object-cover aspect-square filter grayscale"
                  />
                  <div className="absolute top-0 left-0 w-full h-full bg-black/10 backdrop-blur-[1px]"></div>
                  <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/70 to-transparent"></div>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white font-medium">Maxim Keibel</p>
                  <p className="text-white/80 text-sm">Software Entwickler</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};

export default ContactSection;
