import { Editor as ToastEditor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import customAjax from '../../modules/custom-ajax';
import { ChangeEventHandler, RefObject } from 'react';
import { EditorType } from '@toast-ui/editor/types/editor';

interface props {
    editorRef?: RefObject<ToastEditor>;
}

const ToastUiEditor = ({ editorRef }: props) => {
    const sendFile = async (blob: Blob | File) => {
        const result = await customAjax({
            path: '/api/file/upload',
            method: 'post',
            headers: {}
        });
        console.log(result);
    };
    return (
        <ToastEditor
            ref={editorRef}
            initialValue=" "
            previewStyle="vertical"
            height="600px"
            initialEditType="wysiwyg"
            useCommandShortcut={false}
            hooks={{
                addImageBlobHook: async (blob, cb) => {
                    await sendFile(blob);
                    cb('/images/profile-fg.jpeg', '사진 대체 텍스트 입력');
                }
            }}
        />
    );
};

export default ToastUiEditor;
