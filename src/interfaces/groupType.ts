export interface getGroupListResult {
    groupIdx: number,
    groupName: string,
    groupMemo: string,
    groupReference: number,
    subGroups?: getGroupListResult[],
}