import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Music2, ArrowRight, Github, Chrome, Mail, Lock } from 'lucide-react';

const LoginPage = () => {
  return (
    <div className="relative min-h-[calc(100vh-64px)] flex items-center justify-center overflow-hidden bg-[#030712]">
      {/* Background ambient elements */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
      <div className="absolute top-0 -right-4 w-72 h-72 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="relative w-full max-w-[1000px] grid lg:grid-cols-2 gap-0 bg-slate-900/40 backdrop-blur-2xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl mx-4">
        {/* Left Side - Hero/Info */}
        <div className="hidden lg:flex flex-col justify-between p-12 bg-gradient-to-br from-primary/20 via-transparent to-purple-500/10 border-r border-white/10">
          <div>
            <div className="flex items-center gap-2 mb-8">
              <div className="p-2 bg-primary rounded-lg">
                <Music2 className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold tracking-tight text-white">Saxlink</span>
            </div>
            <h2 className="text-4xl font-bold text-white mb-6 leading-tight">
              Connecting elite musicians with premium venues.
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              Join the most exclusive network of musicians and event planners. Experience seamless booking and management.
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white">
                <span className="text-sm font-semibold">01</span>
              </div>
              <div>
                <h4 className="text-white font-medium">Global Network</h4>
                <p className="text-slate-400 text-sm">Access to top talent worldwide</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white">
                <span className="text-sm font-semibold">02</span>
              </div>
              <div>
                <h4 className="text-white font-medium">Smart Booking</h4>
                <p className="text-slate-400 text-sm">Effortless scheduling and contracts</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="p-8 lg:p-12 flex flex-col justify-center">
          <div className="lg:hidden flex items-center gap-2 mb-8">
            <div className="p-2 bg-primary rounded-lg">
              <Music2 className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold tracking-tight text-white">Saxlink</span>
          </div>

          <div className="mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">Welcome back</h1>
            <p className="text-slate-400">Please enter your details to sign in.</p>
          </div>

          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <Button variant="outline" className="h-12 bg-white/5 border-white/10 text-white hover:bg-white/10 hover:text-white transition-all">
                <Chrome className="mr-2 h-4 w-4" />
                Google
              </Button>
              <Button variant="outline" className="h-12 bg-white/5 border-white/10 text-white hover:bg-white/10 hover:text-white transition-all">
                <Github className="mr-2 h-4 w-4" />
                Github
              </Button>
            </div>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-white/10" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-[#0b1120] px-2 text-slate-500">Or continue with</span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
                  <Input 
                    type="email" 
                    placeholder="Email address" 
                    className="pl-10 h-12 bg-white/5 border-white/10 text-white placeholder:text-slate-500 focus:ring-primary/50"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
                  <Input 
                    type="password" 
                    placeholder="Password" 
                    className="pl-10 h-12 bg-white/5 border-white/10 text-white placeholder:text-slate-500 focus:ring-primary/50"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="remember" className="rounded border-white/10 bg-white/5 text-primary focus:ring-offset-0" />
                  <label htmlFor="remember" className="text-sm text-slate-400 cursor-pointer">Remember me</label>
                </div>
                <Link to="#" className="text-sm text-primary hover:text-primary/80 transition-colors">Forgot password?</Link>
              </div>

              <Button className="w-full h-12 text-lg font-semibold bg-primary hover:bg-primary/90 text-white transition-all group">
                Sign In
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>

            <p className="text-center text-slate-400 text-sm mt-8">
              Don't have an account?{" "}
              <Link to="/early-access" className="text-primary hover:text-primary/80 font-semibold transition-colors underline-offset-4 hover:underline">
                Create an account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
