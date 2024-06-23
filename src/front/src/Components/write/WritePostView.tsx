import './style.css';
import ToastUiEditor from './ToastUiEditor';
import { Editor as ToastEditor } from '@toast-ui/react-editor';
import { ChangeEventHandler, FormEventHandler, RefObject } from 'react';
import { EditorType } from '@toast-ui/editor/types/editor';

interface props {
    handlePostForm?: ChangeEventHandler;
    editorRef?: RefObject<ToastEditor>;
    handleFormSubmit?: FormEventHandler;
}
const WritePostView = ({ handlePostForm, editorRef, handleFormSubmit }: props) => (
    <div className="write-post-view">
        <h2>글 작성</h2>
        <form onSubmit={handleFormSubmit}>
            <input type="text" name="title" onChange={handlePostForm} />
            <select name="" id="">
                <option value="f">ff</option>
            </select>
            <ToastUiEditor editorRef={editorRef} />
            <input type="submit" />
        </form>
    </div>
);

export default WritePostView;
