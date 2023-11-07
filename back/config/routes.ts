const routesConfig = {
    "api": {
        "board": {
            "": {
                "filePath": "./routers/board/list"
            },
            ":boardNum": {
                "filePath": "./routers/board/info"
            }
        },
        "group": {
            "": {
                "filePath": "./routers/group/list"
            },
            ":groupNum": {
                "filePath": "./routers/group/info"
            }
        }
    }
}

export default routesConfig;