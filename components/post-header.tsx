import PostTitle from '../components/post-title';

export default function PostHeader({ name }: { name: string }) {
    return <PostTitle>{name}</PostTitle>;
}
