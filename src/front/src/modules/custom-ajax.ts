type AjaxGetOptionType = {
    path: string;
    method: string;
    headers?: object;
    qs?: {
        [key: string]: string;
    };
};

type AjaxPostOptionType = {
    path: string;
    method: string;
    headers?: object;
    body?: {
        [key: string]: string;
    };
};

type ServerResponseType<T> = {
    message?: string;
    error?: string;
    rows: Array<T> & T;
};

const baseUrl = '';
const customAjax = async <T>({ path, method, headers, qs, body }: AjaxGetOptionType & AjaxPostOptionType) => {
    try {
        const response =
            method.toLocaleLowerCase() === 'get'
                ? await fetch(`${baseUrl}${path}?${new URLSearchParams(qs)}`)
                : await fetch(`${baseUrl}${path}`, {
                      method,
                      body: JSON.stringify(body)
                  });

        // todo: status별 error혹은 예외처리 진행
        if (response.status === 401) {
            //,,,
        }

        const result: Promise<ServerResponseType<T>> = response.json();
        return result;
    } catch (e) {
        console.error(e);
        return null;
    }
};

export default customAjax;
