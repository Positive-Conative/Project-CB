import './style.css';
import { PostHeader } from '../common/header';
import { getGroupListResult } from '../../../../interfaces/groupType';

interface props {
    groupInfo?: getGroupListResult;
}
const GroupPostsView = ({ groupInfo }: props) => (
    <div className="group-post-view">
        <PostHeader headerText={groupInfo?.groupName || ''} explainText={groupInfo?.groupMemo || ''} />
    </div>
);

export default GroupPostsView;
