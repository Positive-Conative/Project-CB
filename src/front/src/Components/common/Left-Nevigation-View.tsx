import { Link } from "react-router-dom"
import { getGroupListResult } from "../../../../interfaces/groupType";
import LeftNevigationGroup from "./Left-Navigation-Group";

interface props {
    depthRef: React.MutableRefObject<HTMLDivElement[] | null[]>,
    groupList?: getGroupListResult[],
    handleExpandClick?: React.MouseEventHandler<HTMLDivElement>
    // handleExpandClick: () => Promise<getGroupListResult[]>
}


const LeftNevigationView = ({ depthRef, groupList, handleExpandClick }: props) => (
    <div>
        hello...
        
        <LeftNevigationGroup {...{ depthRef, groupList, handleExpandClick }} />
        
    </div>
);

export default LeftNevigationView;