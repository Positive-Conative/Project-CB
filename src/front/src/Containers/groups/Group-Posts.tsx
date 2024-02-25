import React, { useEffect } from 'react';
import GroupPostsView from '../../Components/groups/LeftNavigationView';

const GroupPosts = () => {
    useEffect(() => {}, []);

    const props = {};

    return <GroupPostsView {...props} />;
};

export default GroupPosts;

/**
 * 클릭 전에는 숫자였다가..
 * 클릭 후에는 오브젝트로 변경.
 */
