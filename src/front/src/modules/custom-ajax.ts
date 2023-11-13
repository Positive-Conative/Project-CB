type AjaxGetOptionType = {
    url: string;
    method: string;
    headers?: object;
    qs?: {
        [key: string]: string;
    };
};

type AjaxPostOptionType = {
    url: string;
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

const baseUrl = 'http://localhost:8081';
const customAjax = async <T>({
    url,
    method,
    headers,
    qs,
    body,
}: AjaxGetOptionType & AjaxPostOptionType) => {
    try {
        const response =
            method.toLocaleLowerCase() === 'get'
                ? await fetch(`${baseUrl}${url}?${new URLSearchParams(qs)}`)
                : await fetch(`${baseUrl}${url}`, {
                    method,
                    body: JSON.stringify(body),
                });

        // todo: status별 error혹은 예외처리 진행
        if (response.status === 401) {
        }

        const result: Promise<ServerResponseType<T>> = response.json();
        return result;
    } catch (e) {
        console.error(e);
    }

};

export default customAjax;