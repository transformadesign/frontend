import Link from 'next/link';

import useI18N from '@hooks/useI18N';

export default function Menu() {
    const { messages } = useI18N();

    return (
        <nav>
            <ul className="flex flex-row justify-between items-center min-h-full">
                <li key="main">
                    <Link href="/">
                        <a>{messages.common.menu.main}</a>
                    </Link>
                </li>
                <li key="about">
                    <Link href="/pages/about">
                        <a>{messages.common.menu.about}</a>
                    </Link>
                </li>
                <li key="projects">
                    <Link href="/projects">
                        <a>{messages.common.menu.projects}</a>
                    </Link>
                </li>
                <li key="career">
                    <Link href="/pages/career">
                        <a>{messages.common.menu.career}</a>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
