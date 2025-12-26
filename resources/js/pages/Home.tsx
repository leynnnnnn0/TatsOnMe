import { useAuth } from '@/hooks/use-auth';
import LOGO from '../../../public/images/mainLogo.png';
export default function Home() {
    const auth = useAuth();
    console.log(auth.isAuthenticated);
    return (
        <>
            <nav className="flex h-18 items-center justify-between border-b border-gray-200 px-14">
                <img src={LOGO} alt="Logo" className="w-32" />
                <div className="flex items-center justify-between gap-5">
                    <button className="cursor-pointer rounded-2xl bg-primary px-5 py-2 text-xs font-bold text-white">
                        Log In
                    </button>
                </div>
            </nav>

            <div className="mx-auto max-w-7xl space-y-5 py-5">
                <div className="space-y-3 border-b border-gray-200 pb-5">
                    <p className="font-bold text-primary">Featured Posts</p>
                    <section className="grid h-50 grid-cols-4 gap-3">
                        <div className="rounded-lg bg-gray-700"></div>
                        <div className="rounded-lg bg-gray-700"></div>
                        <div className="rounded-lg bg-gray-700"></div>
                        <div className="rounded-lg bg-gray-700"></div>
                    </section>
                </div>

                <div className="grid grid-cols-3 gap-5">
                    <div className="h-92 rounded-lg bg-gray-400"></div>
                    <div className="h-92 rounded-lg bg-gray-400"></div>
                    <div className="h-92 rounded-lg bg-gray-400"></div>
                    <div className="h-92 rounded-lg bg-gray-400"></div>
                    <div className="h-92 rounded-lg bg-gray-400"></div>
                    <div className="h-92 rounded-lg bg-gray-400"></div>
                </div>
            </div>
        </>
    );
}
