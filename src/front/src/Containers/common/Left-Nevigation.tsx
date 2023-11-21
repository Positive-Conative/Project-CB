import { useEffect, useRef, useState } from "react";
import LeftNevigationView from "../../Components/common/Left-Nevigation-View";
import customAjax from "../../modules/custom-ajax";
import { getGroupListResult } from '../../../../interfaces/groupType';
import LeftNevigationDepth from "../../Components/common/Left-Navigation-Group";


const LeftNevigation = () => {
    const depthRef = useRef<null[] | HTMLDivElement[]>([]);

    const [groupList, setGroupList] = useState<getGroupListResult[]>();
    const setList = (result: getGroupListResult[]) => {

    };

    const getGroupList = async (depth: number) => {
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

    const handleExpandClick = (e: React.MouseEvent<HTMLElement>) => {
        const idx = Number(e.currentTarget.dataset.idx) || 0;
        console.log("XXD", depthRef.current[idx]);
        // return < LeftNevigationDepth {...props} />
    }

    useEffect(() => {
        getGroupList(0);
    }, []);

    const props = {
        depthRef,
        groupList,
        handleExpandClick,
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