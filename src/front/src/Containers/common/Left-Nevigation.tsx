import { useEffect, useState } from "react";
import LeftNevigationView from "../../Components/common/Left-Nevigation-View";
import customAjax from "../../modules/custom-ajax";

interface groupList {
    g_idx: Number,
    g_name: String,
    g_memo: String,
    g_depth: Number
};

const LeftNevigation = () => {
    const [groupList, setGroupList] = useState<groupList>();
    const props = {};

    const getGroupList = async () => {
        const result = await customAjax<groupList>({
            url: '/api/group',
            method: 'get'
        });

        setGroupList(result);
        console.log(result);
    };

    useEffect(() => {
        getGroupList();
    }, []);

    return <LeftNevigationView />
}

export default LeftNevigation;