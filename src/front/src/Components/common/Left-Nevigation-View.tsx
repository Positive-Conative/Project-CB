import { Link } from "react-router-dom"
import { getGroupListResult } from "../../../../interfaces/groupType";

interface props {
    groupList?: getGroupListResult[],
    handleExpandClick?: React.MouseEventHandler<HTMLDivElement>
    // handleExpandClick: () => Promise<getGroupListResult[]>
}


const LeftNevigationView = ({ groupList, handleExpandClick }: props) => (
    <div>
        {
            groupList?.map((it, idx) => <div key={idx}>
                {/* <Link to={'/d'}>+</Link> */}
                <div onClick={handleExpandClick} data-idx={it.groupIdx}>+</div>
                {it.groupName}
            </div>)
        }

    </div>
);

export default LeftNevigationView;