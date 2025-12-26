import { PageProps as InertiaPageProps } from '@inertiajs/core';

export interface User {
    id: number;
    name: string;
    email: string;
}

export interface Artist {
    id: number;
    username: string;
    email: string;
}

export interface Auth {
    user: User | null;
    artist: Artist | null;
    isAuthenticated: boolean;
}

export interface PageProps extends InertiaPageProps {
    auth: Auth;
}
