import { MouseEvent, useEffect, useRef, useState } from "react";
import MainNavigation from "../../Components/navigation/Main-Navigation";
import customAjax from "../../modules/custom-ajax";
import { getGroupListResult } from '../../../../interfaces/groupType';

const LeftNevigation = () => {
    const navRef = useRef<HTMLElement>(null);
    const [groupList, setGroupList] = useState<getGroupListResult[]>([]);
    const [depthCount, setDepthCount] = useState<number>(0);


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

        if (navRef.current.classList.contains('open')) {
            navRef.current.classList.remove('open');
        } else {
            navRef.current.classList.add('open');
        }
    }

    const handleGroupExpand = (e: MouseEvent) => {
        if (!e.currentTarget) {
            return;
        }

        if (e.currentTarget.classList.contains('expand')) {
            e.currentTarget.classList.remove('expand');
        } else {
            e.currentTarget.classList.add('expand');
        }
    }

    const props = {
        navRef,
        groupList,
        handleNavExpand,
        handleGroupExpand,
    };


    return <MainNavigation {...props} />
}

export default LeftNevigation;

/**
 * 클릭 전에는 숫자였다가..
 * 클릭 후에는 오브젝트로 변경.
*/