import './style.css';

interface PostHeaderType {
    headerText: string;
    explainText?: string;
}

export const PostHeader = ({ headerText, explainText }: PostHeaderType) => (
    <div className="post-header">
        <h2>{headerText}</h2>
        <h4>{explainText}</h4>
    </div>
);
