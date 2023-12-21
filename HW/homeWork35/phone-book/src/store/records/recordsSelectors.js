import {recordsAdapter} from "./recordsSlice";

export const {
    selectById: selectRecordById,
    selectIds: selectRecordIds,
    selectEntities: selectRecordEntities,
    selectAll: selectAllRecords,
    selectTotal: selectTotalRecords,
} = recordsAdapter.getSelectors(state => state.records)