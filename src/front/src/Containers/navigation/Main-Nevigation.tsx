import { MouseEvent, useEffect, useRef, useState } from "react";
import MainNavigation from "../../Components/navigation/Main-Navigation";
import customAjax from "../../modules/custom-ajax";
import { getGroupListResult } from '../../../../interfaces/groupType';

const LeftNevigation = () => {
    const navRef = useRef<HTMLElement>(null);
    const [groupList, setGroupList] = useState<getGroupListResult[]>([]);
    // const [depthCount, setDepthCount] = useState<number>(0);

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

        if (!e.target || !e.currentTarget) {
            return;
        }

        /**
         * VAC 패턴이라 불가피하게 target을 사용해야 하고
         * 이는 currentTarget 과 달리 HTMLInputElement를 확장하지 않은 target이기에
         * 임시로 타입 단언으로 선언했다.
         * 추후 더 좋은 방법이 있다면 수정할 것
         */
        if ((e.target as HTMLDivElement).classList.contains('expand-navigator')) {
            // 좌측 + / - 버튼 클릭 시 펼치기 작업.
            if (e.currentTarget.classList.contains('expand')) {
                e.currentTarget.classList.remove('expand');
            } else {
                e.currentTarget.classList.add('expand');
            }
        } else {
            // 그 외를 클릭 시 페이지 이동

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