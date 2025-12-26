import { usePage } from '@inertiajs/react';
import { PageProps } from '@/types/index';
export function useAuth() {
    const { auth } = usePage<PageProps>().props;
    return auth;
}
