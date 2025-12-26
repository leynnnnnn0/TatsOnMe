import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Head, Link, useForm } from '@inertiajs/react';
import { Lock, Mail, User } from 'lucide-react';
import { FormEventHandler } from 'react';
import LOGO from '../../../../../public/images/mainLogo.png';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        username: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post('/artist/login', {
            onSuccess: () => {
                reset('password');
            },
            onFinish: () => reset('password'),
        });
    };

    return (
        <>
            <Head title="Artist Login" />
            <div className="flex min-h-screen items-center justify-center p-4">
                <Card className="w-full max-w-md shadow-xl">
                    <CardHeader className="space-y-3">
                        <img src={LOGO} alt="Logo" className="h-16" />
                        <CardTitle className="text-center text-2xl font-bold">
                            Create Account
                        </CardTitle>
                        <CardDescription className="text-center text-base">
                            Join our artist community and start sharing your
                            creativity today!
                        </CardDescription>
                    </CardHeader>

                    <form onSubmit={submit}>
                        <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <Label
                                    htmlFor="email"
                                    className="flex items-center gap-2"
                                >
                                    <Mail className="h-4 w-4" />
                                    Email Address
                                </Label>
                                <Input
                                    id="email"
                                    type="email"
                                    value={data.email}
                                    onChange={(e) =>
                                        setData('email', e.target.value)
                                    }
                                    placeholder="customer@example.com"
                                    className="h-11"
                                />
                                {errors.email && (
                                    <p className="text-sm text-destructive">
                                        {errors.email}
                                    </p>
                                )}
                            </div>

                            <div className="space-y-2">
                                <Label
                                    htmlFor="password"
                                    className="flex items-center gap-2"
                                >
                                    <Lock className="h-4 w-4" />
                                    Password
                                </Label>
                                <Input
                                    id="password"
                                    type="password"
                                    value={data.password}
                                    onChange={(e) =>
                                        setData('password', e.target.value)
                                    }
                                    placeholder="••••••••"
                                    required
                                    className="h-11"
                                />
                                {errors.password && (
                                    <p className="text-sm text-destructive">
                                        {errors.password}
                                    </p>
                                )}
                            </div>

                        </CardContent>

                        <CardFooter className="mt-5 flex flex-col space-y-4">
                            <Button
                                type="submit"
                                className="h-11 w-full text-base"
                                disabled={processing}
                            >
                                {processing
                                    ? 'Logging in...'
                                    : 'Login'}
                            </Button>

                            <div className="text-center text-sm text-muted-foreground">
                                Dont have an account?{' '}
                                <Link
                                    href={'/artist/register'}
                                    className="font-semibold text-primary hover:text-primary/80 hover:underline"
                                >
                                    Sign up
                                </Link>
                            </div>
                        </CardFooter>
                    </form>
                </Card>
            </div>
        </>
    );
}
