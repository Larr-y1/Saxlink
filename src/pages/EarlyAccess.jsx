import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { CheckCircle2, Music, User } from 'lucide-react';

const EarlyAccess = () => {
  const [submitted, setSubmitted] = useState(false);
  const [type, setType] = useState('Client');

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="container mx-auto py-20 px-4 max-w-2xl text-center">
        <div className="flex justify-center mb-6">
          <CheckCircle2 size={80} className="text-primary" />
        </div>
        <h1 className="text-4xl font-bold mb-4">You're on the list!</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Thank you for your interest in Saxlink. We'll notify you as soon as we're ready to launch.
        </p>
        <Button size="lg" onClick={() => setSubmitted(false)}>Back to Home</Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-16 px-4 max-w-4xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 tracking-tight sm:text-5xl">Join the Future of Live Music</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Be among the first to experience Saxlink. Early access members get exclusive benefits and priority onboarding.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold mb-6">Why join early?</h2>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                </div>
                <p><span className="font-semibold">Priority Support:</span> Dedicated help to set up your profile or find musicians.</p>
              </li>
              <li className="flex gap-3">
                <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                </div>
                <p><span className="font-semibold">Lower Fees:</span> Locked-in platform fees for the first year.</p>
              </li>
              <li className="flex gap-3">
                <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                </div>
                <p><span className="font-semibold">Exclusive Badge:</span> "Early Member" status on your public profile.</p>
              </li>
            </ul>
          </div>
          
          <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-2xl border">
            <h3 className="font-bold mb-2">Are you a musician?</h3>
            <p className="text-sm text-muted-foreground mb-4">
              We're looking for talented saxophonists and performers to be part of our founding artist community.
            </p>
            <Button variant="outline" onClick={() => setType('Musician')}>I want to perform</Button>
          </div>
        </div>

        <Card className="shadow-2xl border-none">
          <CardHeader>
            <CardTitle>Sign Up for Access</CardTitle>
            <CardDescription>Fill out the form below and we'll be in touch.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4 mb-4">
                <button
                  type="button"
                  onClick={() => setType('Client')}
                  className={`flex flex-col items-center justify-center p-4 rounded-xl border-2 transition-all ${type === 'Client' ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/50'}`}
                >
                  <User className={`mb-2 ${type === 'Client' ? 'text-primary' : ''}`} />
                  <span className="text-sm font-medium">I'm a Client</span>
                </button>
                <button
                  type="button"
                  onClick={() => setType('Musician')}
                  className={`flex flex-col items-center justify-center p-4 rounded-xl border-2 transition-all ${type === 'Musician' ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/50'}`}
                >
                  <Music className={`mb-2 ${type === 'Musician' ? 'text-primary' : ''}`} />
                  <span className="text-sm font-medium">I'm a Musician</span>
                </button>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium" htmlFor="name">Full Name</label>
                <Input id="name" placeholder="John Doe" required className="py-6" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium" htmlFor="email">Email Address</label>
                <Input id="email" type="email" placeholder="john@example.com" required className="py-6" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium" htmlFor="city">City</label>
                <Input id="city" placeholder="London, UK" className="py-6" />
              </div>
              <Button type="submit" className="w-full py-6 text-lg mt-4">
                Reserve My Spot
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default EarlyAccess;
