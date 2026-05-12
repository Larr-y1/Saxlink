import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Music, User, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const RoleSelector = () => {
  const [selected, setSelected] = useState(null);
  const navigate = useNavigate();

  const handleContinue = () => {
    if (selected) {
      navigate('/');
    }
  };

  return (
    <div className="container mx-auto py-20 px-4 max-w-4xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">How will you use Saxlink?</h1>
        <p className="text-xl text-muted-foreground">Select your role to personalize your experience</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <Card 
          className={`cursor-pointer transition-all border-2 ${selected === 'Musician' ? 'border-primary bg-primary/5' : 'hover:border-primary/50'}`}
          onClick={() => setSelected('Musician')}
        >
          <CardHeader className="text-center pb-2">
            <div className={`mx-auto p-4 rounded-full w-20 h-20 flex items-center justify-center mb-4 ${selected === 'Musician' ? 'bg-primary text-white' : 'bg-slate-100 dark:bg-slate-800'}`}>
              <Music size={40} />
            </div>
            <CardTitle className="text-2xl">I'm a Musician</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-muted-foreground">List your profile, manage bookings, and grow your music career.</p>
          </CardContent>
        </Card>

        <Card 
          className={`cursor-pointer transition-all border-2 ${selected === 'Client' ? 'border-primary bg-primary/5' : 'hover:border-primary/50'}`}
          onClick={() => setSelected('Client')}
        >
          <CardHeader className="text-center pb-2">
            <div className={`mx-auto p-4 rounded-full w-20 h-20 flex items-center justify-center mb-4 ${selected === 'Client' ? 'bg-primary text-white' : 'bg-slate-100 dark:bg-slate-800'}`}>
              <User size={40} />
            </div>
            <CardTitle className="text-2xl">I'm a Client</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-muted-foreground">Find and book world-class musicians for your events and venues.</p>
          </CardContent>
        </Card>
      </div>

      <div className="mt-12 text-center">
        <Button 
          size="lg" 
          disabled={!selected}
          onClick={handleContinue}
          className="px-12 py-6 text-lg"
        >
          Continue
          <ArrowRight className="ml-2" size={20} />
        </Button>
      </div>
    </div>
  );
};

export default RoleSelector;
