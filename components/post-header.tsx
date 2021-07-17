import PostTitle from './post-title';

export default function PostHeader({ name }: { name: string }) {
    return <PostTitle>{name}</PostTitle>;
}
