import { collapseTextChangeRangesAcrossMultipleVersions } from "typescript";

const errorHandler = (error: Error) => {

    console.error('xx', error, error.message, error.name, error.stack);

}


export default errorHandler;