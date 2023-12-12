import { useEffect, useRef, useState } from "react";
import MainNavigation from "../../Components/common/Main-Navigation";
import customAjax from "../../modules/custom-ajax";
import { getGroupListResult } from '../../../../interfaces/groupType';

const LeftNevigation = () => {
    const navRef = useRef<HTMLElement>(null);
    const [groupList, setGroupList] = useState<getGroupListResult[]>([]);
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

        setGroupList(result.rows);
    };

    useEffect(() => {
        getGroupList(0);
    }, []);

    const handleNavExpand = () => {
        if (!navRef.current) {
            return;
        }

        if (navRef.current.classList.contains('active')) {
            navRef.current.classList.remove('active');
        } else {
            navRef.current.classList.add('active');
        }
    }

    const props = {
        navRef,
        groupList,
        handleNavExpand,
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


    return <MainNavigation {...props} />
}

export default LeftNevigation;

/**
 * 클릭 전에는 숫자였다가..
 * 클릭 후에는 오브젝트로 변경.
*/