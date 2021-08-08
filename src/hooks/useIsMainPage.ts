import { useRouter } from 'next/router';

const mainPages = new Set(['', '/']);

export default function useIsMainPage() {
    const { route } = useRouter();

    return mainPages.has(route);
}
