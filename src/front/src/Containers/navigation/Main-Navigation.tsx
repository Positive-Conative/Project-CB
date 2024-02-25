import React, { MouseEvent, useEffect, useRef, useState } from 'react';
import customAjax from '../../modules/custom-ajax';
import { getGroupListResult } from '../../../../interfaces/groupType';
import LeftNavigationView from '../../Components/navigation/LeftNavigationView';

const LeftNavigation = () => {
    const navRef = useRef<HTMLElement>(null);
    const [groupList, setGroupList] = useState<getGroupListResult[]>([]);
    // const [depthCount, setDepthCount] = useState<number>(0);

    const getGroupList = async () => {
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
        getGroupList();
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
    };

    const props = {
        navRef,
        groupList,
        handleNavExpand
    };

    return <LeftNavigationView {...props} />;
};

export default LeftNavigation;

/**
 * 클릭 전에는 숫자였다가..
 * 클릭 후에는 오브젝트로 변경.
 */
