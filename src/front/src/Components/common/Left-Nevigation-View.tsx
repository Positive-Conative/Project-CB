import { Link } from "react-router-dom"
import { getGroupListResult } from "../../../../interfaces/groupType";

interface props {
    groupList?: getGroupListResult[],
    // handleExpandClick: () => Promise<getGroupListResult[]>
}


const LeftNevigationView = ({ groupList }: props) => (
    <div>
        {
            groupList?.map((it) => <div>
                <Link to={'/d'}>+</Link>
                {it.groupName}
            </div>)
        }

    </div>
);

export default LeftNevigationView;