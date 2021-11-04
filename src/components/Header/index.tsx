import Image from 'next/image';
import Link from 'next/link';

import Container from '@cmp/Container';
import logo from '@pub/logo_large.svg';
import logoBlack from '@pub/logo_large_black.svg';
import useI18N from '@hooks/useI18N';
import Menu from '@cmp/Menu';
import { classNames } from '@lib/classNames';
import useIsMainPage from '@hooks/useIsMainPage';

export default function Header() {
    const { messages } = useI18N();
    const isMainPage = useIsMainPage();

    return (
        <header className={classNames('z-10 w-full pt-2', isMainPage ? 'absolute' : 'relative')}>
            <Container className="flex flex-row justify-between">
                <Link href="/">
                    <a aria-label={messages.common.name}>
                        <Image
                            src={isMainPage ? logo : logoBlack}
                            alt={messages.common.name}
                            priority
                            loading={'eager'}
                            width={140}
                            role="presentation"
                        />
                    </a>
                </Link>
                <Menu whiteFlag={isMainPage} />
            </Container>
        </header>
    );
}
