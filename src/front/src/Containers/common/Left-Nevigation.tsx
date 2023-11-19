import { useEffect, useState } from "react";
import LeftNevigationView from "../../Components/common/Left-Nevigation-View";
import customAjax from "../../modules/custom-ajax";
import { getGroupListResult } from '../../../../interfaces/groupType';


const LeftNevigation = () => {
    const [groupList, setGroupList] = useState<getGroupListResult[]>();

    const setList = (result: getGroupListResult[]) => {

    };

    const getGroupList = async () => {
        const result = await customAjax<getGroupListResult[]>({
            url: '/api/group',
            method: 'get'
        });

        if (!result) {
            return;
        }

        console.log(result.rows)
        setGroupList(result.rows);
    };

    useEffect(() => {
        getGroupList();
    }, []);

    const props = {
        groupList,
        handleExpandClick: (e: React.MouseEvent<HTMLElement>) => {
            console.log('e', e.currentTarget.dataset.idx);
        }
        // handleExpandClick: async () => {
        //     const result = await customAjax<getGroupListResult[]>({
        //         url: '/api/group',
        //         method: 'get'
        //     });

        //     if (!result) {
        //         return [];
        //     }
        //     return result.rows;
        // }
    };


    return <LeftNevigationView {...props} />
}

export default LeftNevigation;

/**
 * 클릭 전에는 숫자였다가..
 * 클릭 후에는 오브젝트로 변경.
*/