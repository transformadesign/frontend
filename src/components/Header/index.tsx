import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import Container from '@cmp/Container';
import logo from '@pub/logo_large.svg';
import logoBlack from '@pub/logo_large_black.svg';
import useI18N from '@hooks/useI18N';
import Menu from '@cmp/Menu';

const whitePageRoutes = new Set(['', '/']);

export default function Header() {
    const { route } = useRouter();
    const { messages } = useI18N();
    const whiteStyle = whitePageRoutes.has(route);

    return (
        <header className="z-10 relative">
            <Container className="flex flex-row justify-between">
                <Link href="/">
                    <a>
                        <Image
                            src={whiteStyle ? logo : logoBlack}
                            alt={messages.common.name}
                            priority
                            loading={'eager'}
                            width={140}
                        />
                    </a>
                </Link>
                <Menu whiteFlag={whiteStyle} />
            </Container>
        </header>
    );
}
