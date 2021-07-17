export const Pages = ['main', 'projects', 'project', 'about'];
export type Page =
    | 'main' // внутренне представление
    | 'mainpage' // тип документа главной в БД
    | 'design'
    | 'projects'
    | 'project'
    | 'about';
