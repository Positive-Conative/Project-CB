import WritePostView from '../../Components/write/WritePostView';
import { ChangeEvent, FormEvent, useRef, useState } from 'react';
import { Editor as ToastEditor } from '@toast-ui/react-editor';

const WritePost = () => {
    const [postForm, setPostForm] = useState({});
    const editorRef = useRef<ToastEditor>(null);

    const handlePostForm = (e: ChangeEvent<HTMLInputElement>) => {
        if (!e.currentTarget) {
            return;
        }
        setPostForm({ ...postForm, [e.currentTarget.name]: e.currentTarget.value });
    };

    const handleFormSubmit = (e: FormEvent) => {
        e.preventDefault();
        console.log(postForm, editorRef.current?.getInstance().getHTML());
    };

    const props = {
        handlePostForm,
        editorRef,
        handleFormSubmit
    };

    return <WritePostView {...props} />;
};

export default WritePost;

/**
 * 클릭 전에는 숫자였다가..
 * 클릭 후에는 오브젝트로 변경.
 */
