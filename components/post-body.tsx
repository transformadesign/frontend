import { RichText } from 'prismic-reactjs';
import markdownStyles from './markdown-styles.module.css';

export default function PostBody({ content }) {
    return (
        <div className="max-w-2xl">
            <div className={markdownStyles.markdown}>
                <RichText render={content} />
            </div>
        </div>
    );
}
