import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { getToken } from '@/services/AuthService';
export { RouteGuard };

function RouteGuard({ children }) {
    const router = useRouter();
    const [authorized, setAuthorized] = useState(false);

    useEffect(() => {
        authCheck(router.asPath);
        const hideContent = () => setAuthorized(false);
        const showContent = () => setAuthorized(true);
        router.events.on('routeChangeStart', hideContent);
        router.events.on('routeChangeComplete', showContent)

        return () => {
            router.events.off('routeChangeStart', hideContent);
            router.events.off('routeChangeComplete', showContent);
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [router.asPath]);

    function authCheck(url) {
        const publicPaths = ['/login', '/register','/forgot-password'];
        const path = url.split('?')[0];
        let token = getToken();
        if (authorized) {
            return
        }
        if (!publicPaths.includes(path)) {
            if (token) {
                setAuthorized(true);
            } else {
                router.push({ pathname: '/login' }).then(() => {
                    setAuthorized(true);
                });
            }
        } else if (token) {
            if(publicPaths.includes(path)){
                router.push({ pathname: '/' }).then(() => {
                    setAuthorized(true);
                });
            }else {
                setAuthorized(true);
            }
        } else {
            setAuthorized(true);
        }
    }

    return authorized && children;
}
