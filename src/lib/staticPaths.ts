import { ParsedUrlQuery } from 'querystring';

export function addLocales<P extends ParsedUrlQuery = ParsedUrlQuery>(
    paths: Array<{ params: P }>, locales: Array<string>
): Array<{ params: P; locale: string }> {
    return paths.reduce((result, path) => {
        locales.forEach(locale => {
            result.push({ ...path, locale });
        });

        return result;
    }, []);
}
