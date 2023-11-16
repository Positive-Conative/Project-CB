import { useEffect, useState } from "react";
import LeftNevigationView from "../../Components/common/Left-Nevigation-View";
import customAjax from "../../modules/custom-ajax";

interface groupInfo {
    g_idx: Number,
    g_name: String,
    g_memo: String,
    g_depth: Number
};

const LeftNevigation = () => {
    const [groupList, setGroupList] = useState<groupInfo[]>();
    const props = {};

    const getGroupList = async () => {
        const result = await customAjax<groupInfo[]>({
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

    return <LeftNevigationView />
}

export default LeftNevigation;