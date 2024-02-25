import { useEffect, useState } from 'react';
import GroupPostsView from '../../Components/groups/GroupPostsView';
import customAjax from '../../modules/custom-ajax';
import { getGroupListResult } from '../../../../interfaces/groupType';
import { useParams } from 'react-router-dom';

const GroupPosts = () => {
    const { groupNum } = useParams();
    const [groupInfo, setGroupInfo] = useState<getGroupListResult>();

    const reqGroupInfo = async () => {
        const result = await customAjax<getGroupListResult[]>({
            path: `/api/group/${groupNum}`,
            method: 'get'
        });

        if (!result?.rows) {
            return;
        }
        console.log(result);

        setGroupInfo(result.rows[0]);
    };

    useEffect(() => {
        reqGroupInfo();
    }, [groupNum]);

    const props = {
        groupInfo
    };
    return <GroupPostsView {...props} />;
};

export default GroupPosts;

/**
 * 클릭 전에는 숫자였다가..
 * 클릭 후에는 오브젝트로 변경.
 */
