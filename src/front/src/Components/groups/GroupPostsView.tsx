import { PostHeader } from '../common/header';
import { getGroupListResult } from '../../../../interfaces/groupType';

interface props {
    groupInfo?: getGroupListResult;
}
const GroupPostsView = ({ groupInfo }: props) => (
    <div>
        <PostHeader headerText={groupInfo?.groupName || 'dfdf'} />
    </div>
);

export default GroupPostsView;
