import { useState } from 'react';
import { ArrowLeft, CheckCircle, CreditCard, Calendar, MapPin, Music2, User, Clock, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Link, useParams } from 'react-router-dom';
import { MUSICIANS } from '@/lib/musicians-data';
import Navbar from '@/components/landing/Navbar';

const STEPS = ['Details', 'Review', 'Payment'];

export default function BookingRequest() {
  const { id } = useParams();
  const musician = MUSICIANS.find(m => m.id === parseInt(id)) || MUSICIANS[0];
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    client_name: '', client_email: '', client_phone: '',
    event_type: '', event_date: '', event_time: '', event_location: '', notes: '',
  });

  const set = (k, v) => setForm(f => ({ ...f, [k]: v }));
  const commission = Math.round(musician.price * 0.15);
  const total = musician.price;

  if (submitted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-6">
        <div className="text-center max-w-md">
          <div className="w-20 h-20 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-green-400" />
          </div>
          <h1 className="font-heading text-3xl font-bold text-foreground">Booking Request Sent!</h1>
          <p className="text-muted-foreground mt-3 leading-relaxed">
            Your request has been sent to <strong className="text-foreground">{musician.name}</strong>. You'll receive a notification once they accept. Payment will only be processed after confirmation.
          </p>
          <div className="mt-6 bg-card border border-border rounded-2xl p-5 text-left space-y-3">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Booking Summary</p>
            <div className="flex justify-between text-sm"><span className="text-muted-foreground">Musician</span><span className="text-foreground font-medium">{musician.name}</span></div>
            <div className="flex justify-between text-sm"><span className="text-muted-foreground">Event</span><span className="text-foreground font-medium">{form.event_type}</span></div>
            <div className="flex justify-between text-sm"><span className="text-muted-foreground">Date</span><span className="text-foreground font-medium">{form.event_date}</span></div>
            <div className="flex justify-between text-sm"><span className="text-muted-foreground">Amount</span><span className="text-foreground font-bold">KES {total.toLocaleString()}</span></div>
            <div className="flex justify-between text-sm"><span className="text-muted-foreground">Status</span><span className="text-yellow-400 font-medium">Pending Musician Acceptance</span></div>
          </div>
          <div className="flex gap-3 mt-6">
            <Link to="/" className="flex-1"><Button variant="outline" className="w-full rounded-full">Back to Home</Button></Link>
            <Link to="/browse" className="flex-1"><Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full">Browse More</Button></Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 pb-20 max-w-4xl mx-auto px-6">
        <Link to={`/musician/${musician.id}`} className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8">
          <ArrowLeft className="w-4 h-4" /> Back to Profile
        </Link>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2">
            {/* Step indicator */}
            <div className="flex items-center gap-2 mb-8">
              {STEPS.map((s, i) => (
                <React.Fragment key={s}>
                  <div className={`flex items-center gap-2 ${i <= step ? 'text-primary' : 'text-muted-foreground'}`}>
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold border ${i < step ? 'bg-primary border-primary text-primary-foreground' : i === step ? 'border-primary text-primary' : 'border-border text-muted-foreground'}`}>
                      {i < step ? <CheckCircle className="w-4 h-4" /> : i + 1}
                    </div>
                    <span className="text-sm font-medium hidden sm:block">{s}</span>
                  </div>
                  {i < STEPS.length - 1 && <div className={`flex-1 h-px ${i < step ? 'bg-primary' : 'bg-border'}`} />}
                </React.Fragment>
              ))}
            </div>

            {/* Step 0 — Details */}
            {step === 0 && (
              <div className="bg-card border border-border rounded-2xl p-7 space-y-5">
                <h2 className="font-heading text-xl font-bold text-foreground">Your Details</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1.5 block">Full Name *</label>
                    <Input value={form.client_name} onChange={e => set('client_name', e.target.value)} placeholder="Your full name" className="rounded-xl" />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1.5 block">Email *</label>
                    <Input value={form.client_email} onChange={e => set('client_email', e.target.value)} placeholder="your@email.com" type="email" className="rounded-xl" />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1.5 block">Phone (M-Pesa)</label>
                    <Input value={form.client_phone} onChange={e => set('client_phone', e.target.value)} placeholder="+254 7XX XXX XXX" className="rounded-xl" />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1.5 block">Event Type *</label>
                    <Select value={form.event_type} onValueChange={v => set('event_type', v)}>
                      <SelectTrigger className="rounded-xl"><SelectValue placeholder="Select event" /></SelectTrigger>
                      <SelectContent>
                        {['Wedding', 'Corporate Dinner', 'Restaurant Night', 'Hotel Lounge', 'Private Party', 'Festival'].map(e => (
                          <SelectItem key={e} value={e}>{e}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1.5 block">Date *</label>
                    <Input value={form.event_date} onChange={e => set('event_date', e.target.value)} type="date" className="rounded-xl" />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1.5 block">Time</label>
                    <Input value={form.event_time} onChange={e => set('event_time', e.target.value)} type="time" className="rounded-xl" />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1.5 block">Event Location *</label>
                    <Input value={form.event_location} onChange={e => set('event_location', e.target.value)} placeholder="Venue name and city" className="rounded-xl" />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1.5 block">Notes (optional)</label>
                    <textarea value={form.notes} onChange={e => set('notes', e.target.value)} placeholder="Any special requests, dress code, setlist preferences..." rows={3} className="w-full border border-border rounded-xl px-4 py-3 text-sm bg-background text-foreground focus:outline-none focus:border-primary/50 resize-none" />
                  </div>
                </div>
                <Button
                  onClick={() => setStep(1)}
                  disabled={!form.client_name || !form.client_email || !form.event_type || !form.event_date || !form.event_location}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl py-6"
                >
                  Continue to Review
                </Button>
              </div>
            )}

            {/* Step 1 — Review */}
            {step === 1 && (
              <div className="bg-card border border-border rounded-2xl p-7 space-y-5">
                <h2 className="font-heading text-xl font-bold text-foreground">Review Your Booking</h2>
                <div className="space-y-3">
                  {[
                    { icon: User, label: 'Client', value: `${form.client_name} · ${form.client_email}` },
                    { icon: Music2, label: 'Musician', value: `${musician.name} · ${musician.location}` },
                    { icon: Calendar, label: 'Date & Time', value: `${form.event_date} at ${form.event_time || 'TBD'}` },
                    { icon: MapPin, label: 'Location', value: form.event_location },
                    { icon: Clock, label: 'Event Type', value: form.event_type },
                  ].map(r => (
                    <div key={r.label} className="flex gap-3 py-3 border-b border-border last:border-0">
                      <r.icon className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      <div>
                        <p className="text-xs text-muted-foreground">{r.label}</p>
                        <p className="text-sm font-medium text-foreground mt-0.5">{r.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
                {form.notes && (
                  <div className="bg-secondary/30 rounded-xl p-4 text-sm text-muted-foreground">
                    <span className="font-semibold text-foreground">Notes: </span>{form.notes}
                  </div>
                )}
                <div className="flex gap-3">
                  <Button variant="outline" onClick={() => setStep(0)} className="flex-1 rounded-xl">Edit Details</Button>
                  <Button onClick={() => setStep(2)} className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl">
                    Proceed to Payment
                  </Button>
                </div>
              </div>
            )}

            {/* Step 2 — Payment */}
            {step === 2 && (
              <div className="bg-card border border-border rounded-2xl p-7 space-y-5">
                <h2 className="font-heading text-xl font-bold text-foreground">Secure Payment</h2>
                <div className="bg-primary/5 border border-primary/20 rounded-xl p-4 flex gap-3">
                  <Shield className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-foreground">Escrow Payment Protection</p>
                    <p className="text-xs text-muted-foreground mt-1">Your payment is held securely. It is only released to {musician.name} after your event is confirmed complete by both parties.</p>
                  </div>
                </div>
                <div>
                  <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1.5 block">M-Pesa Phone Number</label>
                  <Input placeholder="+254 7XX XXX XXX" className="rounded-xl" defaultValue={form.client_phone} />
                </div>
                <div className="bg-secondary/30 rounded-xl p-4 space-y-2">
                  <div className="flex justify-between text-sm"><span className="text-muted-foreground">Musician fee</span><span className="text-foreground">KES {total.toLocaleString()}</span></div>
                  <div className="flex justify-between text-sm"><span className="text-muted-foreground">SaxLink platform fee</span><span className="text-foreground">Included</span></div>
                  <div className="flex justify-between text-sm font-bold border-t border-border pt-2"><span className="text-foreground">Total</span><span className="text-foreground">KES {total.toLocaleString()}</span></div>
                </div>
                <div className="text-xs text-muted-foreground text-center">
                  You will receive an M-Pesa STK push to confirm payment. Funds are held until after your event.
                </div>
                <Button
                  onClick={() => setSubmitted(true)}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl py-6 gap-2"
                >
                  <CreditCard className="w-4 h-4" /> Pay KES {total.toLocaleString()} via M-Pesa
                </Button>
                <Button variant="ghost" onClick={() => setStep(1)} className="w-full text-sm text-muted-foreground">
                  ← Back
                </Button>
              </div>
            )}
          </div>

          {/* Right — musician summary */}
          <div className="space-y-4 self-start lg:sticky lg:top-24">
            <div className="bg-card border border-border rounded-2xl overflow-hidden">
              <div className="aspect-square overflow-hidden">
                <img src={musician.img} alt={musician.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-foreground">{musician.name}</h3>
                <p className="text-xs text-muted-foreground mt-0.5">{musician.location} · {musician.genre}</p>
                <div className="flex justify-between items-center mt-3 pt-3 border-t border-border">
                  <span className="text-sm font-bold text-foreground">KES {musician.price.toLocaleString()}</span>
                  <span className="text-xs text-muted-foreground">{musician.reviews} reviews · {musician.rating}★</span>
                </div>
              </div>
            </div>
            <div className="bg-card border border-border rounded-xl p-4 text-xs text-muted-foreground space-y-2">
              <p className="font-semibold text-foreground text-sm">Booking Flow</p>
              {['Request sent', 'Musician accepts', 'Payment secured', 'Event happens', 'Both confirm done', 'Payout released'].map((s, i) => (
                <div key={s} className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-secondary flex items-center justify-center text-xs font-bold text-muted-foreground shrink-0">{i + 1}</div>
                  <span>{s}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}