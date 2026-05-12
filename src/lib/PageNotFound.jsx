import { useLocation, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Home } from 'lucide-react';

export default function PageNotFound() {
    const location = useLocation();
    const pageName = location.pathname.substring(1);

    return (
        <div className="min-h-[70vh] flex items-center justify-center p-6 bg-background">
            <div className="max-w-md w-full">
                <div className="text-center space-y-6">
                    <div className="space-y-2">
                        <h1 className="text-7xl font-bold text-primary/20">404</h1>
                        <div className="h-1 w-16 bg-primary mx-auto rounded-full"></div>
                    </div>
                    
                    <div className="space-y-3">
                        <h2 className="text-2xl font-bold text-foreground">
                            Page Not Found
                        </h2>
                        <p className="text-muted-foreground leading-relaxed">
                            The page <span className="font-medium text-foreground">"{pageName}"</span> could not be found. 
                            It might have been moved or deleted.
                        </p>
                    </div>
                    
                    <div className="pt-6">
                        <Button asChild className="gap-2">
                            <Link to="/">
                                <Home className="w-4 h-4" />
                                Back to Home
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
