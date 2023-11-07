
interface typeCheck {
    [key: string]: {
        type: string,
        data: any,
        default?: any,
        min?: number,
        max?: number,
    }
};


const typeCheck = (target: typeCheck) => {
    const result: any = {};
    for (const key in target) {
        switch (target[key].type) {

            case 'number': {
                result[key] = !isNaN(target[key].data) ? Number(target[key].data) : target[key]?.default ?? null;
                break;
            }

            case 'string': {
                result[key] = target[key].data;
            }
        }
    }
    return result;
}

export default typeCheck;